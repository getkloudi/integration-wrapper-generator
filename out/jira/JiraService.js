const Axios = require('axios');
const qs = require('querystring');
const nconf = require('nconf');
const ErrorHelper = require('../../../helpers/ErrorHelper');

/*
 * Implements APIs found at https://developer.atlassian.com/cloud/jira/platform/rest/v3/
 * Change app configuration at https://developer.atlassian.com/apps/
 */

//As found on https://developer.atlassian.com/cloud/jira/platform/scopes/
const SCOPES = [
  'read:jira-work',
  'write:jira-work',
  'read:jira-user',
  'offline_access',
];

class JiraService {
  get name() {
    return 'JIRA';
  }

  get description() {
    return 'The #1 software development tool used by agile teams to plan, track, and release great software.';
  }

  get icon() {
    return 'jira.svg';
  }

  get category() {
    return;
  }

  get apiEndpoint() {
    return;
  }

  get authMethod() {
    return 'OAUTH2';
  }

  get authEndpoint() {
    return (
      `https://auth.atlassian.com/authorize?audience=api.atlassian.com&` +
      `client_id=${nconf.get('JIRA_CLIENT_ID')}&` +
      `scope=${qs.escape(this.scopes.join(' '))}&` +
      `redirect_uri=${qs.escape(
        nconf.get('WEB_APP_URI') + '/integrations/jira/callback'
      )}&` +
      `state=qwesomeval123123&` +
      `response_type=code&` +
      `prompt=consent`
    );
  }

  get apiTokenURL() {
    return 'https://id.atlassian.com/manage/api-tokens';
  }

  get scopes() {
    return [...SCOPES];
  }

  get requiredAuthParams() {
    return ['code'];
  }

  get primaryAction() {
    return {
      type: 'HREF',
      url: this.authEndpoint,
      requiredAuthParams: this.requiredAuthParams,
    };
  }

  get webhooks() {
    return;
  }

  get webhookToTasksMap() {
    return;
  }

  get entities() {
    return ['ISSUES', 'BOARDS', 'PROEJCTS'];
  }

  async getAccessToken(integration) {
    const res = await Axios.default.post(
      'https://auth.atlassian.com/oauth/token',
      {
        grant_type: 'refresh_token',
        client_id: nconf.get('JIRA_CLIENT_ID'),
        client_secret: nconf.get('JIRA_CLIENT_SECRET'),
        refresh_token: integration.authRefreshToken,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return res.data.access_token;
  }

  getNextPaginationURIFromResponse(response) {
    if (!response.body.nextPage && !response.body.next) return;
    else if (!!response.body.nextPage)
      return Object.fromEntries(
        new URLSearchParams(require('url').parse(response.body.nextPage).query)
      );
    else if (!!response.body.next)
      return Object.fromEntries(
        new URLSearchParams(require('url').parse(response.body.next).query)
      );
  }

  async connect(authParams) {
    let response;
    response = await Axios.default.post(
      'https://auth.atlassian.com/oauth/token',
      {
        grant_type: 'authorization_code',
        code: authParams.code,
        client_id: nconf.get('JIRA_CLIENT_ID'),
        client_secret: nconf.get('JIRA_CLIENT_SECRET'),
        redirect_uri: `${
          nconf.get('WEB_APP_URI') + '/integrations/jira/callback'
        }`,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    const accessToken = response.data.access_token,
      authAccessTokenExpiresAt = Date.now() + response.data.expires_in * 1000,
      refreshToken = response.data.refresh_token;

    response = await Axios.default.get(
      'https://api.atlassian.com/oauth/token/accessible-resources',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/json',
        },
      }
    );
    const cloudDomainName = response.data[0].name,
      cloudId = response.data[0].id;
    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
      integrationSpecificParams: {
        authAccessTokenExpiresAt: authAccessTokenExpiresAt,
        cloudDomainName: cloudDomainName,
        cloudId: cloudId,
      },
    };
  }

  async getThirdPartyProjects(incomingOptions) {
    let projects = [];
    while (true) {
      const res = await this.get('PROJECT_SEARCH', incomingOptions);
      projects = projects.concat(res.data.values);
      incomingOptions.opts = this.getNextPaginationURIFromResponse(
        res.response
      );
      if (!incomingOptions.opts) break;
    }
    return { data: projects };
  }

  async registerWebhooks(incomingOptions) {
    //TODO: Add custom registerWebhooks functionality here
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');

    try {
      //TODO: Add custom syncIntegrationEntities functionality here
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          third_party_project_id: '',
          third_party_organization_id: '',
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      return 'Ok';
    } catch (error) {
      console.error(error.response || error);
      return 'ERROR';
    }
  }

  async createIssues(options) {
    if (
      !options.integration.thirdPartyProjects ||
      options.integration.thirdPartyProjects.length == 0
    ) {
      console.error('No third party projects present');
      return 'Ok';
    }

    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: 'task.thirdParty.CREATE_JIRA_ISSUES',
          project_id: options.projectID,
          user_id: options.userID,
          bug: options.bug,
          clubSimilarBugs: options.clubSimilarBugs,
          jiraProjectID: options.integration.thirdPartyProjects[0].projectId,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      return 'Ok';
    } catch (error) {
      console.error(error.response || error);
      return 'ERROR';
    }
  }

  async get(entity, options) {
    switch (entity) {
      case 'APPLICATION_PROPERTIES_ADVANCED_SETTINGS':
        /*



Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon &gt; Jira settings &gt; System, General Configuration and then click Advanced Settings (in the upper right).


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.applicationPropertiesAdvancedSettingsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'APPLICATION_PROPERTIES':
        /*



Returns all application properties or a single application property.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.applicationPropertiesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'APPLICATIONROLE':
        /*



Returns all application roles. In Jira, application roles are managed using the Application access configuration page.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.applicationroleGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'APPLICATIONROLE_KEY':
        /*



Returns an application role.


      Function parameters for this API cloudid,key
        */
        return new Promise((resolve, reject) => {
          this.applicationroleKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ATTACHMENT_ID_EXPAND_HUMAN':
        /*



Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.attachmentIdExpandHumanGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ATTACHMENT_ID_EXPAND_RAW':
        /*



Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.attachmentIdExpandRawGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ATTACHMENT_ID':
        /*



Returns the metadata for an attachment. Note that the attachment itself is not returned.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.attachmentIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ATTACHMENT_META':
        /*



Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.attachmentMetaGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'AUDITING_RECORD':
        /*



Returns a list of audit records. The list can be filtered to include items:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.auditingRecordGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'AVATAR_TYPE_SYSTEM':
        /*



Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.


      Function parameters for this API cloudid,type
        */
        return new Promise((resolve, reject) => {
          this.avatarTypeSystemGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMMENT_COMMENT_ID_PROPERTIES':
        /*



Returns the keys of all the properties of a comment.


      Function parameters for this API cloudid,commentId
        */
        return new Promise((resolve, reject) => {
          this.commentCommentIdPropertiesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY':
        /*



Returns the value of a comment property.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.commentCommentIdPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'COMPONENT_ID':
        /*



Returns a component. Permissions required: Browse projects project permission.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.componentIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMPONENT_ID_RELATED_ISSUE_COUNTS':
        /*



Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.componentIdRelatedIssueCountsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'CONFIGURATION':
        /*



Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.configurationGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CONFIGURATION_TIMETRACKING':
        /*



Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CONFIGURATION_TIMETRACKING_LIST':
        /*



Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingListGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'CONFIGURATION_TIMETRACKING_OPTIONS':
        /*



Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingOptionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'CUSTOM_FIELD_OPTION_ID':
        /*



Returns a custom field option. For example, an option in a cascading select list.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.customFieldOptionIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES':
        /*



Returns the keys of all properties for a dashboard item.


      Function parameters for this API cloudid,dashboardId,itemId
        */
        return new Promise((resolve, reject) => {
          this.dashboardDashboardIdItemsItemIdPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY':
        /*



Returns the key and value of a dashboard item property.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'DASHBOARD':
        /*



Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.dashboardGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DASHBOARD_ID':
        /*



Returns a dashboard.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.dashboardIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD_FIELD_KEY_OPTION':
        /*



Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD_FIELD_KEY_OPTION_OPTION_ID':
        /*



Returns an option from a select list issue field.


      Function parameters for this API cloudid,fieldKey,optionId
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionOptionIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION_SUGGESTIONS_EDIT':
        /*



Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionSuggestionsEditGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION_SUGGESTIONS_SEARCH':
        /*



Returns options defined for a select list issue field that can be viewed by the currently logged in user.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionSuggestionsSearchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD':
        /*



Returns all issue fields in Jira, both system and custom fields.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.fieldGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_DEFAULT_SHARE_SCOPE':
        /*



Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.filterDefaultShareScopeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_FAVOURITE':
        /*



Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterFavouriteGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER':
        /*



Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_COLUMNS':
        /*



Returns the columns configured for a filter. The column configuration is used when the filter&#39;s results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.filterIdColumnsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID':
        /*



Returns a filter. Permissions required: None, however the calling user must have permission view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_PERMISSION':
        /*



Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.filterIdPermissionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_PERMISSION_PERMISSION_ID':
        /*



Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id,permissionId
        */
        return new Promise((resolve, reject) => {
          this.filterIdPermissionPermissionIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FILTER_MY':
        /*



Returns the filters owned by the calling user. If includeFavourites is true, the user&#39;s favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterMyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_SEARCH':
        /*



Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUP':
        /*



This resource is deprecated, use group/member.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUP_MEMBER':
        /*



Returns all users in a group. Users are ordered by username.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupMemberGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUPS_PICKER':
        /*



Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupsPickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUPUSERPICKER':
        /*



Returns a list of users and groups matching a string. The string is used:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupuserpickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_CREATEMETA':
        /*



Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issueCreatemetaGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_CHANGELOG':
        /*



Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyChangelogGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT':
        /*



to get comments for


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID':
        /*



of the issue the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_EDITMETA':
        /*



Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyEditmetaGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY':
        /*



Returns the details for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES':
        /*



Returns the URIs and keys of an issue&#39;s properties.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Returns the key and value of an issue&#39;s property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*



Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID':
        /*



Returns a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkLinkIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS':
        /*



Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue&#39;s status.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyTransitionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_VOTES':
        /*



Returns details about the votes on an issue.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyVotesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*



Returns the watchers for an issue.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWatchersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG':
        /*



Returns all worklogs for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID':
        /*



Returns a worklog.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES':
        /*



Returns the keys of all properties for a worklog.


      Function parameters for this API cloudid,issueIdOrKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY':
        /*



Returns the value of a worklog property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_LINK_LINK_ID':
        /*



Returns an issue link.


      Function parameters for this API cloudid,linkId
        */
        return new Promise((resolve, reject) => {
          this.issueLinkLinkIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE':
        /*



Returns a list of all issue link types.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID':
        /*



Returns an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypeIssueLinkTypeIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_PICKER':
        /*



Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user&#39;s history and browsing context to return issue suggestions.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuePickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUESECURITYSCHEMES':
        /*



Returns all issue security schemes.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.issuesecurityschemesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUESECURITYSCHEMES_ID':
        /*



Returns an issue security scheme along with its security levels.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.issuesecurityschemesIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE':
        /*



Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.issuetypeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ID_ALTERNATIVES':
        /*



Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdAlternativesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ID':
        /*



Returns an issue type. Permissions required:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES':
        /*



Returns all the issue type property keys of the issue type. Permissions required:


      Function parameters for this API cloudid,issueTypeId
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIssueTypeIdPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY':
        /*



Returns the key and value of the issue type property. Permissions required:


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIssueTypeIdPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'JQL_AUTOCOMPLETEDATA':
        /*



Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.jqlAutocompletedataGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'JQL_AUTOCOMPLETEDATA_SUGGESTIONS':
        /*



Returns the JQL search auto complete suggestions for a field.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.jqlAutocompletedataSuggestionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'MYPERMISSIONS':
        /*



Returns a list of permissions indicating which permissions the user has. Details of the user&#39;s permissions can be obtained in a global, project, or issue context.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.mypermissionsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYPREFERENCES':
        /*



Returns the value of a preference of the user.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYPREFERENCES_LOCALE':
        /*



Returns the locale for the current user.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesLocaleGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYSELF':
        /*



Returns details for the authenticated user.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.myselfGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONSCHEME':
        /*



Returns a paginated list of notification schemes in order by display name.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONSCHEME_ID':
        /*



Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationschemeIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONS':
        /*



Returns all permissions, including:


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.permissionsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME':
        /*



Returns all permission schemes.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID':
        /*



Returns a permission scheme. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID_PERMISSION':
        /*



Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPermissionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PERMISSIONSCHEME_SCHEME_ID_PERMISSION_PERMISSION_ID':
        /*



Returns a permission grant. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,permissionId,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPermissionPermissionIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PRIORITY':
        /*



Returns the list of all issue priorities.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.priorityGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PRIORITY_ID':
        /*



Returns an issue priority.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.priorityIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_CATEGORY':
        /*



Returns all project categories.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_CATEGORY_ID':
        /*



Returns a project category.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT':
        /*



Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATARS':
        /*



Returns all project avatars, grouped by system and custom avatars.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyAvatarsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_COMPONENT':
        /*



Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyComponentGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_COMPONENTS':
        /*



Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyComponentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*



Returns the project details for the specified project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES':
        /*



Returns all project property keys for the project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Returns the value of the project property.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE':
        /*



Returns a list of project roles for the project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoleGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*



Returns the project role&#39;s details and actors associated with the project. The list of actors is sorted by display name.


      Function parameters for this API cloudid,id,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoleIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLEDETAILS':
        /*



Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoledetailsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_STATUSES':
        /*



Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_VERSION':
        /*



Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyVersionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_VERSIONS':
        /*



Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyVersionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_KEY_OR_ID_ISSUESECURITYLEVELSCHEME':
        /*



Returns the issue security scheme associated with the project.


      Function parameters for this API cloudid,projectKeyOrId
        */
        return new Promise((resolve, reject) => {
          this.projectProjectKeyOrIdIssuesecuritylevelschemeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_KEY_OR_ID_NOTIFICATIONSCHEME':
        /*



Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectKeyOrIdNotificationschemeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_KEY_OR_ID_PERMISSIONSCHEME':
        /*



Gets the permission scheme associated with the project.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectKeyOrIdPermissionschemeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_KEY_OR_ID_SECURITYLEVEL':
        /*



Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.


      Function parameters for this API cloudid,projectKeyOrId
        */
        return new Promise((resolve, reject) => {
          this.projectProjectKeyOrIdSecuritylevelGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_SEARCH':
        /*



Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_TYPE':
        /*



Returns all project types, whether or not the instance has a valid license for each type.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.projectTypeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_TYPE_PROJECT_TYPE_KEY_ACCESSIBLE':
        /*



Returns a project type if it is accessible to the logged in user.


      Function parameters for this API cloudid,projectTypeKey
        */
        return new Promise((resolve, reject) => {
          this.projectTypeProjectTypeKeyAccessibleGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_TYPE_PROJECT_TYPE_KEY':
        /*



Returns a project type.


      Function parameters for this API cloudid,projectTypeKey
        */
        return new Promise((resolve, reject) => {
          this.projectTypeProjectTypeKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECTVALIDATE_KEY':
        /*



Validates a project key by confirming the key is a valid string and not in use.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectvalidateKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECTVALIDATE_VALID_PROJECT_KEY':
        /*



Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectvalidateValidProjectKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECTVALIDATE_VALID_PROJECT_NAME':
        /*



Checks that a project name isn&#39;t in use. If the name isn&#39;t in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectvalidateValidProjectNameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'RESOLUTION':
        /*



Returns a list of all issue resolution values.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.resolutionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RESOLUTION_ID':
        /*



Returns an issue resolution value.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.resolutionIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE':
        /*



Gets a list of all project roles, complete with project role details and default actors.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.roleGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE_ID_ACTORS':
        /*



Returns the default actors for the project role.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.roleIdActorsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE_ID':
        /*



Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.roleIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS':
        /*



Returns all screens.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.screensGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_SCREEN_ID_AVAILABLE_FIELDS':
        /*



Returns the fields that can be added to a tab on a screen.


      Function parameters for this API cloudid,screenId
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdAvailableFieldsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SCREENS_SCREEN_ID_TABS':
        /*



Returns the list of tabs for a screen.


      Function parameters for this API cloudid,screenId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS':
        /*



Returns all fields for a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdFieldsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SEARCH':
        /*



Searches for issues using JQL. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.searchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SECURITYLEVEL_ID':
        /*



Returns details of an issue security level.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.securitylevelIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SERVER_INFO':
        /*



Returns information about the Jira instance.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.serverInfoGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SETTINGS_COLUMNS':
        /*



Returns the default issue navigator columns.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.settingsColumnsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'STATUS':
        /*



Returns a list of all statuses associated with workflows.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.statusGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'STATUS_ID_OR_NAME':
        /*



Returns a status. The status must be associated with a workflow to be returned.


      Function parameters for this API cloudid,idOrName
        */
        return new Promise((resolve, reject) => {
          this.statusIdOrNameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'STATUSCATEGORY':
        /*



Returns a list of all status categories.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.statuscategoryGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'STATUSCATEGORY_ID_OR_KEY':
        /*



Returns a status category. Status categories provided a mechanism for categorizing statuses.


      Function parameters for this API cloudid,idOrKey
        */
        return new Promise((resolve, reject) => {
          this.statuscategoryIdOrKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TASK_TASK_ID':
        /*



Returns the status of a long-running asynchronous task.


      Function parameters for this API cloudid,taskId
        */
        return new Promise((resolve, reject) => {
          this.taskTaskIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID':
        /*



Returns the system and custom avatars for a project or issue type.


      Function parameters for this API cloudid,entityId,type
        */
        return new Promise((resolve, reject) => {
          this.universalAvatarTypeTypeOwnerEntityIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'USER_ASSIGNABLE_MULTI_PROJECT_SEARCH':
        /*



Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userAssignableMultiProjectSearchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'USER_ASSIGNABLE_SEARCH':
        /*



Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userAssignableSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_BULK':
        /*



Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userBulkGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_COLUMNS':
        /*



Returns the default issue table columns for the user. If a username is not passed in the request, the calling user&#39;s details are returned. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userColumnsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER':
        /*



Returns a user. Permissions required: None.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_GROUPS':
        /*



Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userGroupsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PERMISSION_SEARCH':
        /*



Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userPermissionSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PICKER':
        /*



Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userPickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES':
        /*



Returns the keys of all properties for a user. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userPropertiesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES_PROPERTY_KEY':
        /*



Returns the value of a user&#39;s property. If no property key is provided Get user property keys is called. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.userPropertiesPropertyKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_SEARCH':
        /*



Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_SEARCH_QUERY':
        /*



Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userSearchQueryGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_SEARCH_QUERY_KEY':
        /*



Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userSearchQueryKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_VIEWISSUE_SEARCH':
        /*



Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userViewissueSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_ID':
        /*



Returns a project version. Permissions required: Browse projects project permission


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.versionIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_ID_RELATED_ISSUE_COUNTS':
        /*



Returns the following counts for a version:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.versionIdRelatedIssueCountsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_ID_UNRESOLVED_ISSUE_COUNT':
        /*



Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.versionIdUnresolvedIssueCountGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_REMOTELINK':
        /*



the global ID of the remote resource that is linked to the versions


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.versionRemotelinkGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_VERSION_ID_REMOTELINK':
        /*



a String containing the version ID


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID':
        /*



A REST sub-resource representing a remote version link


      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkGlobalIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOW':
        /*



Returns all workflows in Jira or a single workflow.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*



Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowTransitionsTransitionIdPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*



Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDefaultGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*



Returns the default workflow for a workflow scheme&#39;s draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftDefaultGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT':
        /*



Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE':
        /*



Returns the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftIssuetypeIssueTypeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_WORKFLOW':
        /*



Returns the workflow-issue type mappings for a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftWorkflowGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID':
        /*



Returns a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE':
        /*



Returns the issue type-workflow mapping for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdIssuetypeIssueTypeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_WORKFLOW':
        /*



Returns the workflow-issue type mappings for a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdWorkflowGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKLOG_DELETED':
        /*



Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.worklogDeletedGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKLOG_UPDATED':
        /*



Returns a list of IDs and update timestamps for worklogs updated after a date and time.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.worklogUpdatedGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for applicationPropertiesAdvancedSettingsGet
  /*


Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon &gt; Jira settings &gt; System, General Configuration and then click Advanced Settings (in the upper right).

 */
  applicationPropertiesAdvancedSettingsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.applicationPropertiesAdvancedSettingsGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for applicationPropertiesGet
  /*


Returns all application properties or a single application property.

 */
  applicationPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example", // String | The key of the application property.
      //  'keyFilter': "keyFilter_example", // String | When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
      //  'permissionLevel': "permissionLevel_example" // String | The permission level of all items being returned in the list.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.applicationPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for applicationroleGet
  /*


Returns all application roles. In Jira, application roles are managed using the Application access configuration page.

 */
  applicationroleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.applicationroleGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for applicationroleKeyGet
  /*


Returns an application role.

 */
  applicationroleKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the application role. Use the Get all application roles method to get the key for each application role.
    /*let cloudid = null;*/ /*let key = "key_example";*/ apiInstance.applicationroleKeyGet(
      incomingOptions.cloudid,
      incomingOptions.key,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for attachmentIdExpandHumanGet
  /*


Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.

 */
  attachmentIdExpandHumanGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.attachmentIdExpandHumanGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for attachmentIdExpandRawGet
  /*


Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.

 */
  attachmentIdExpandRawGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.attachmentIdExpandRawGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for attachmentIdGet
  /*


Returns the metadata for an attachment. Note that the attachment itself is not returned.

 */
  attachmentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.attachmentIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for attachmentMetaGet
  /*


Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.

 */
  attachmentMetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.attachmentMetaGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for auditingRecordGet
  /*


Returns a list of audit records. The list can be filtered to include items:

 */
  auditingRecordGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'filter': "filter_example", // String | The query string.
      //  'from': "from_example", // String | The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
      limit: 56, // Number | The maximum number of results to return. The maximum is 1000.
      offset: 56, // Number | The number of records to skip before returning the first result.
      //  'to': "to_example" // String | The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.auditingRecordGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for avatarTypeSystemGet
  /*


Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.

 */
  avatarTypeSystemGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The avatar type.
    /*let cloudid = null;*/ /*let type = "type_example";*/ apiInstance.avatarTypeSystemGet(
      incomingOptions.cloudid,
      incomingOptions.type,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for commentCommentIdPropertiesGet
  /*


Returns the keys of all the properties of a comment.

 */
  commentCommentIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the comment.
    /*let cloudid = null;*/ /*let commentId = "commentId_example";*/ apiInstance.commentCommentIdPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.commentId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for commentCommentIdPropertiesPropertyKeyGet
  /*


Returns the value of a comment property.

 */
  commentCommentIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property.
    /*let cloudid = null;*/ /*let commentId = "commentId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.commentCommentIdPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.commentId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for componentIdGet
  /*


Returns a component. Permissions required: Browse projects project permission.

 */
  componentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the component.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.componentIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for componentIdRelatedIssueCountsGet
  /*


Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.

 */
  componentIdRelatedIssueCountsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the component.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.componentIdRelatedIssueCountsGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for configurationGet
  /*


Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.

 */
  configurationGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.configurationGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingGet
  /*


Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.

 */
  configurationTimetrackingGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.configurationTimetrackingGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingListGet
  /*


Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.

 */
  configurationTimetrackingListGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.configurationTimetrackingListGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingOptionsGet
  /*


Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.

 */
  configurationTimetrackingOptionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.configurationTimetrackingOptionsGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for customFieldOptionIdGet
  /*


Returns a custom field option. For example, an option in a cascading select list.

 */
  customFieldOptionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.customFieldOptionIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesGet
  /*


Returns the keys of all properties for a dashboard item.

 */
  dashboardDashboardIdItemsItemIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item.
    /*let cloudid = null;*/ /*let dashboardId = "dashboardId_example";*/ /*let itemId = "itemId_example";*/ apiInstance.dashboardDashboardIdItemsItemIdPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.dashboardId,
      incomingOptions.itemId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet
  /*


Returns the key and value of a dashboard item property.

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property.
    /*let cloudid = null;*/ /*let dashboardId = "dashboardId_example";*/ /*let itemId = "itemId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.dashboardId,
      incomingOptions.itemId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardGet
  /*


Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.

 */
  dashboardGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'filter': "filter_example", // String | The filter applied to the list of dashboards. Valid values are:
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.dashboardGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardIdGet
  /*


Returns a dashboard.

 */
  dashboardIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the dashboard.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.dashboardIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionGet
  /*


Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.

 */
  fieldFieldKeyOptionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      maxResults: 56, // Number | The maximum number of items to return per page. For example, 20.
      startAt: 56, // Number | The starting index of the returned objects. For example, 1.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionGet(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionOptionIdGet
  /*


Returns an option from a select list issue field.

 */
  fieldFieldKeyOptionOptionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field // Number | The ID of the option to be returned. For example, 3.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 56;*/ apiInstance.fieldFieldKeyOptionOptionIdGet(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.optionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionSuggestionsEditGet
  /*


Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.

 */
  fieldFieldKeyOptionSuggestionsEditGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      maxResults: 56, // Number | The maximum number of items to return per page. For example, 20.
      projectId: 56, // Number | Filters the results to options that are only available in the specified project. For example, 10000.
      startAt: 56, // Number | The starting index of the returned objects. For example, 1.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionSuggestionsEditGet(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionSuggestionsSearchGet
  /*


Returns options defined for a select list issue field that can be viewed by the currently logged in user.

 */
  fieldFieldKeyOptionSuggestionsSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      maxResults: 56, // Number | The maximum number of items to return per page. For example, 20.
      projectId: 56, // Number | Filters the results to options that are only available in the specified project. For example, 10000.
      startAt: 56, // Number | The starting index of the returned objects. For example, 1.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionSuggestionsSearchGet(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldGet
  /*


Returns all issue fields in Jira, both system and custom fields.

 */
  fieldGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.fieldGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterDefaultShareScopeGet
  /*


Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
  filterDefaultShareScopeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.filterDefaultShareScopeGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterFavouriteGet
  /*


Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
  filterFavouriteGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterFavouriteGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterGet
  /*


Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:

 */
  filterGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdColumnsGet
  /*


Returns the columns configured for a filter. The column configuration is used when the filter&#39;s results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.

 */
  filterIdColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.filterIdColumnsGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdGet
  /*


Returns a filter. Permissions required: None, however the calling user must have permission view the filter.

 */
  filterIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter to return.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdPermissionGet
  /*


Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.

 */
  filterIdPermissionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.filterIdPermissionGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdPermissionPermissionIdGet
  /*


Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.

 */
  filterIdPermissionPermissionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter // Number | The ID of the share permission.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let permissionId = 56;*/ apiInstance.filterIdPermissionPermissionIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.permissionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterMyGet
  /*


Returns the filters owned by the calling user. If includeFavourites is true, the user&#39;s favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
  filterMyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
      includeFavourites: true, // Boolean | Include the user's favorite filters in the response.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterMyGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterSearchGet
  /*


Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):

 */
  filterSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | Returns filters with an owner that exactly matches accountId of the owner. This parameter cannot be used with the owner parameter.
      //  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
      //  'filterName': "filterName_example", // String | Returns filters with a name that partially matches filterName.
      //  'groupname': "groupname_example", // String | Returns filters that are shared with a group that has a name that exactly matches groupname.
      maxResults: 56, // Number | The maximum number of items to return per page. Max is 50.
      //  'orderBy': "orderBy_example", // String | Orders the results by a property of the filter. For example, name.
      //  'owner': "owner_example", // String | Returns filters with an owner that exactly matches owner. This parameter cannot be used with the accountId parameter.
      projectId: 56, // Number | Returns filters that are shared with a project that has an ID that exactly matches projectId.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset). The base index is 0.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for groupGet
  /*


This resource is deprecated, use group/member.

 */
  groupGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | List of fields to expand.
      //  'groupname': "groupname_example" // String | The name of the group.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for groupMemberGet
  /*


Returns all users in a group. Users are ordered by username.

 */
  groupMemberGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'groupname': "groupname_example", // String | The name of the group.
      includeInactiveUsers: true, // Boolean | Include inactive users.
      maxResults: 56, // Number | The maximum number of users to return per page.
      startAt: 56, // Number | The index of the first user to return.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupMemberGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for groupsPickerGet
  /*


Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.

 */
  groupsPickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | Parameter not in use.
      exclude: ['null'], // [String] | A list of groups to exclude from the result.
      maxResults: 56, // Number | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
      //  'query': "query_example", // String | The string to find in group names.
      //  'userName': "userName_example" // String | Parameter not in use.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupsPickerGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for groupuserpickerGet
  /*


Returns a list of users and groups matching a string. The string is used:

 */
  groupuserpickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'avatarSize': "avatarSize_example", // String | The size of the avatar to return. If an invalid value is provided, the default value is used.
      caseInsensitive: true, // Boolean | Indicates whether the search for groups should be case insensitive.
      excludeConnectAddons: true, // Boolean | Indicates whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
      //  'fieldId': "fieldId_example", // String | The custom field ID of the field this request is for.
      issueTypeId: ['null'], // [String] | The ID of an issue type that returned users and groups must have permission to view. To include multiple issue type IDs repeat this parameter, use of a comma separated list is not supported. Special values, such as -1 (all standard issue types) and -2 (all subtask issue types), are supported. This parameter is only used when fieldId is present.
      maxResults: 56, // Number | The maximum number of items to return in each list. The maximum is 1000.
      projectId: ['null'], // [String] | The ID of a project that returned users and groups must have permission to view. To include multiple projects repeat this parameter, use of a comma separated list is not supported. This parameter is only used when fieldId is present.
      //  'query': "query_example", // String | The search string.
      showAvatar: true, // Boolean | Indicates whether the user avatar should be returned. If an invalid value is provided, the default value is used.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupuserpickerGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueCreatemetaGet
  /*


Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.

 */
  issueCreatemetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
      issuetypeIds: ['null'], // [String] | Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
      issuetypeNames: ['null'], // [String] | Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
      projectIds: ['null'], // [String] | Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
      projectKeys: ['null'], // [String] | Comma-separated list of project keys. May be specified multiple times and with projectIds.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueCreatemetaGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyChangelogGet
  /*


Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.

 */
  issueIssueIdOrKeyChangelogGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      maxResults: 56, // Number | Maximum number of items to return per page. See Pagination section for more details.
      startAt: 56, // Number | Page offset, ie. index of the first item returned in the page of results. Base index: 0.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyChangelogGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentGet
  /*


to get comments for

 */
  issueIssueIdOrKeyCommentGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | to get comments for
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
      maxResults: 56, // Number | how many results on the page should be included. Defaults to 50.
      //  'orderBy': "orderBy_example", // String | ordering of the results.
      startAt: 56, // Number | the page offset, if not specified then defaults to 0
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyCommentGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentIdGet
  /*


of the issue the comment belongs to

 */
  issueIssueIdOrKeyCommentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | the ID of the comment to reques // String | of the issue the comment belongs to
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example" // String | optional flags: renderedBody (provides body rendered in HTML)
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyCommentIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyEditmetaGet
  /*


Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.

 */
  issueIssueIdOrKeyEditmetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      overrideEditableFlag: true, // Boolean | Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
      overrideScreenSecurity: true, // Boolean | Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyEditmetaGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyGet
  /*


Returns the details for an issue.

 */
  issueIssueIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue. For example, JRACLOUD-1549.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
      fields: ['null'], // [String] | A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
      fieldsByKeys: true, // Boolean | Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
      properties: ['null'], // [String] | A comma-separated list of issue properties to return for the issue. Allowed values:
      updateHistory: true, // Boolean | Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPropertiesGet
  /*


Returns the URIs and keys of an issue&#39;s properties.

 */
  issueIssueIdOrKeyPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key or ID of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPropertiesPropertyKeyGet
  /*


Returns the key and value of an issue&#39;s property.

 */
  issueIssueIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key or ID of the issue // String | The key of the property.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkGet
  /*


Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.

 */
  issueIssueIdOrKeyRemotelinkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'globalId': "globalId_example" // String | The global ID of the remote issue link.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyRemotelinkGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkLinkIdGet
  /*


Returns a remote issue link for an issue.

 */
  issueIssueIdOrKeyRemotelinkLinkIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the remote issue link.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let linkId = "linkId_example";*/ apiInstance.issueIssueIdOrKeyRemotelinkLinkIdGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.linkId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyTransitionsGet
  /*


Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue&#39;s status.

 */
  issueIssueIdOrKeyTransitionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
      skipRemoteOnlyCondition: true, // Boolean | Indicates whether transitions with the condition Hide From User Condition are included in the response.
      //  'transitionId': "transitionId_example" // String | The ID of the transition.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyTransitionsGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyVotesGet
  /*


Returns details about the votes on an issue.

 */
  issueIssueIdOrKeyVotesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyVotesGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWatchersGet
  /*


Returns the watchers for an issue.

 */
  issueIssueIdOrKeyWatchersGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyWatchersGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogGet
  /*


Returns all worklogs for an issue.

 */
  issueIssueIdOrKeyWorklogGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1048576.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWorklogGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogIdGet
  /*


Returns a worklog.

 */
  issueIssueIdOrKeyWorklogIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the worklog // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWorklogIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesGet
  /*


Returns the keys of all properties for a worklog.

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let worklogId = "worklogId_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.worklogId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet
  /*


Returns the value of a worklog property.

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The key of the property // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let worklogId = "worklogId_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      incomingOptions.worklogId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkLinkIdGet
  /*


Returns an issue link.

 */
  issueLinkLinkIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue link.
    /*let cloudid = null;*/ /*let linkId = "linkId_example";*/ apiInstance.issueLinkLinkIdGet(
      incomingOptions.cloudid,
      incomingOptions.linkId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkTypeGet
  /*


Returns a list of all issue link types.

 */
  issueLinkTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.issueLinkTypeGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkTypeIssueLinkTypeIdGet
  /*


Returns an issue link type.

 */
  issueLinkTypeIssueLinkTypeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue link type.
    /*let cloudid = null;*/ /*let issueLinkTypeId = "issueLinkTypeId_example";*/ apiInstance.issueLinkTypeIssueLinkTypeIdGet(
      incomingOptions.cloudid,
      incomingOptions.issueLinkTypeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuePickerGet
  /*


Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user&#39;s history and browsing context to return issue suggestions.

 */
  issuePickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'currentIssueKey': "currentIssueKey_example", // String | Key of the issue defining search context. The issue defining a context is excluded from the search results.
      //  'currentJQL': "currentJQL_example", // String | JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
      //  'currentProjectId': "currentProjectId_example", // String | ID of a project defining search context. Only issues belonging to a given project are suggested.
      //  'query': "query_example", // String | Query used to filter issue search results.
      showSubTaskParent: true, // Boolean | Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
      showSubTasks: true, // Boolean | Set to false to exclude subtasks from the suggestions list.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuePickerGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuesecurityschemesGet
  /*


Returns all issue security schemes.

 */
  issuesecurityschemesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.issuesecurityschemesGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuesecurityschemesIdGet
  /*


Returns an issue security scheme along with its security levels.

 */
  issuesecurityschemesIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.issuesecurityschemesIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeGet
  /*


Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.

 */
  issuetypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.issuetypeGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIdAlternativesGet
  /*


Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.

 */
  issuetypeIdAlternativesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.issuetypeIdAlternativesGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIdGet
  /*


Returns an issue type. Permissions required:

 */
  issuetypeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.issuetypeIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIssueTypeIdPropertiesGet
  /*


Returns all the issue type property keys of the issue type. Permissions required:

 */
  issuetypeIssueTypeIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let issueTypeId = "issueTypeId_example";*/ apiInstance.issuetypeIssueTypeIdPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.issueTypeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIssueTypeIdPropertiesPropertyKeyGet
  /*


Returns the key and value of the issue type property. Permissions required:

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
    /*let cloudid = null;*/ /*let issueTypeId = "issueTypeId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.issueTypeId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for jqlAutocompletedataGet
  /*


Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.

 */
  jqlAutocompletedataGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.jqlAutocompletedataGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for jqlAutocompletedataSuggestionsGet
  /*


Returns the JQL search auto complete suggestions for a field.

 */
  jqlAutocompletedataSuggestionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'fieldName': "fieldName_example", // String | The name of the field.
      //  'fieldValue': "fieldValue_example", // String | The partial field item name entered by the user.
      //  'predicateName': "predicateName_example", // String | The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
      //  'predicateValue': "predicateValue_example" // String | The partial predicate item name entered by the user.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.jqlAutocompletedataSuggestionsGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for mypermissionsGet
  /*


Returns a list of permissions indicating which permissions the user has. Details of the user&#39;s permissions can be obtained in a global, project, or issue context.

 */
  mypermissionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'issueId': "issueId_example", // String | The ID of the issue.
      //  'issueKey': "issueKey_example", // String | The key of the issue. Ignored if issueId is provided.
      //  'permissions': "permissions_example", // String | A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
      //  'projectId': "projectId_example", // String | The ID of project.
      //  'projectKey': "projectKey_example" // String | The key of project. Ignored if projectId is provided.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.mypermissionsGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for mypreferencesGet
  /*


Returns the value of a preference of the user.

 */
  mypreferencesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example" // String | The key of the preference.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.mypreferencesGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for mypreferencesLocaleGet
  /*


Returns the locale for the current user.

 */
  mypreferencesLocaleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.mypreferencesLocaleGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for myselfGet
  /*


Returns details for the authenticated user.

 */
  myselfGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.myselfGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationschemeGet
  /*


Returns a paginated list of notification schemes in order by display name.

 */
  notificationschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
      maxResults: 56, // Number | The maximum number of items to return per page. Max is 50.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset). The base index is 0.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationschemeGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationschemeIdGet
  /*


Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.

 */
  notificationschemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationschemeIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionsGet
  /*


Returns all permissions, including:

 */
  permissionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.permissionsGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemeGet
  /*


Returns all permission schemes.

 */
  permissionschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdGet
  /*


Returns a permission scheme. Permissions required: Permission to log in to Jira.

 */
  permissionschemeSchemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme to return (e.g., 10000).
    /*let cloudid = null;*/ /*let schemeId = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeSchemeIdGet(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdPermissionGet
  /*


Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.

 */
  permissionschemeSchemeIdPermissionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme (e.g., 10010).
    /*let cloudid = null;*/ /*let schemeId = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeSchemeIdPermissionGet(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdPermissionPermissionIdGet
  /*


Returns a permission grant. Permissions required: Permission to log in to Jira.

 */
  permissionschemeSchemeIdPermissionPermissionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission grant (e.g., 10000) // Number | The ID of the permission scheme (e.g., 10010).
    /*let cloudid = null;*/ /*let permissionId = 56;*/ /*let schemeId = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeSchemeIdPermissionPermissionIdGet(
      incomingOptions.cloudid,
      incomingOptions.permissionId,
      incomingOptions.schemeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for priorityGet
  /*


Returns the list of all issue priorities.

 */
  priorityGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.priorityGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for priorityIdGet
  /*


Returns an issue priority.

 */
  priorityIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue priority.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.priorityIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectCategoryGet
  /*


Returns all project categories.

 */
  projectCategoryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.projectCategoryGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectCategoryIdGet
  /*


Returns a project category.

 */
  projectCategoryIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project category.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.projectCategoryIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectGet
  /*


Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.

 */
  projectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
      recent: 56, // Number | Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyAvatarsGet
  /*


Returns all project avatars, grouped by system and custom avatars.

 */
  projectProjectIdOrKeyAvatarsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyAvatarsGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyComponentGet
  /*


Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.

 */
  projectProjectIdOrKeyComponentGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      maxResults: 56, // Number | The maximum number of components to return per page. Max 50.
      //  'orderBy': "orderBy_example", // String | Order the results by a particular field:
      //  'query': "query_example", // String | Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
      startAt: 56, // Number | The starting index of the returned list of components. The base index is 0.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyComponentGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyComponentsGet
  /*


Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.

 */
  projectProjectIdOrKeyComponentsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyComponentsGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyGet
  /*


Returns the project details for the specified project.

 */
  projectProjectIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyPropertiesGet
  /*


Returns all project property keys for the project.

 */
  projectProjectIdOrKeyPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyPropertiesPropertyKeyGet
  /*


Returns the value of the project property.

 */
  projectProjectIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The project property key. Use Get project property keys to get a list of all project property keys.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoleGet
  /*


Returns a list of project roles for the project.

 */
  projectProjectIdOrKeyRoleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyRoleGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoleIdGet
  /*


Returns the project role&#39;s details and actors associated with the project. The list of actors is sorted by display name.

 */
  projectProjectIdOrKeyRoleIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let id = 56;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyRoleIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoledetailsGet
  /*


Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.

 */
  projectProjectIdOrKeyRoledetailsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyRoledetailsGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyStatusesGet
  /*


Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.

 */
  projectProjectIdOrKeyStatusesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyStatusesGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyVersionGet
  /*


Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.

 */
  projectProjectIdOrKeyVersionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
      maxResults: 56, // Number | The maximum number of versions to return per page. Max 50.
      //  'orderBy': "orderBy_example", // String | Order the results by a particular field:
      //  'query': "query_example", // String | Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
      startAt: 56, // Number | The starting index of the returned list of versions (page offset). The base index is 0.
      //  'status': "status_example" // String | A comma separated string used to filter the results by version status.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyVersionGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyVersionsGet
  /*


Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.

 */
  projectProjectIdOrKeyVersionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyVersionsGet(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectKeyOrIdIssuesecuritylevelschemeGet
  /*


Returns the issue security scheme associated with the project.

 */
  projectProjectKeyOrIdIssuesecuritylevelschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ apiInstance.projectProjectKeyOrIdIssuesecuritylevelschemeGet(
      incomingOptions.cloudid,
      incomingOptions.projectKeyOrId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectKeyOrIdNotificationschemeGet
  /*


Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.

 */
  projectProjectKeyOrIdNotificationschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectKeyOrIdNotificationschemeGet(
      incomingOptions.cloudid,
      incomingOptions.projectKeyOrId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectKeyOrIdPermissionschemeGet
  /*


Gets the permission scheme associated with the project.

 */
  projectProjectKeyOrIdPermissionschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectKeyOrIdPermissionschemeGet(
      incomingOptions.cloudid,
      incomingOptions.projectKeyOrId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectKeyOrIdSecuritylevelGet
  /*


Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.

 */
  projectProjectKeyOrIdSecuritylevelGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ apiInstance.projectProjectKeyOrIdSecuritylevelGet(
      incomingOptions.cloudid,
      incomingOptions.projectKeyOrId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectSearchGet
  /*


Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.

 */
  projectSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'action': "action_example", // String | Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
      categoryId: 56, // Number | The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
      maxResults: 56, // Number | The maximum number of items to return per page. Max 50.
      //  'orderBy': "orderBy_example", // String | Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
      //  'query': "query_example", // String | Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
      startAt: 56, // Number | The starting index of the first item returned in the page of results (page offset). The base index is 0.
      //  'typeKey': "typeKey_example" // String | Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectTypeGet
  /*


Returns all project types, whether or not the instance has a valid license for each type.

 */
  projectTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.projectTypeGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectTypeProjectTypeKeyAccessibleGet
  /*


Returns a project type if it is accessible to the logged in user.

 */
  projectTypeProjectTypeKeyAccessibleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the project type.
    /*let cloudid = null;*/ /*let projectTypeKey = "projectTypeKey_example";*/ apiInstance.projectTypeProjectTypeKeyAccessibleGet(
      incomingOptions.cloudid,
      incomingOptions.projectTypeKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectTypeProjectTypeKeyGet
  /*


Returns a project type.

 */
  projectTypeProjectTypeKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the project type.
    /*let cloudid = null;*/ /*let projectTypeKey = "projectTypeKey_example";*/ apiInstance.projectTypeProjectTypeKeyGet(
      incomingOptions.cloudid,
      incomingOptions.projectTypeKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectvalidateKeyGet
  /*


Validates a project key by confirming the key is a valid string and not in use.

 */
  projectvalidateKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example" // String | The project key.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectvalidateKeyGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectvalidateValidProjectKeyGet
  /*


Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.

 */
  projectvalidateValidProjectKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example" // String | The project key.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectvalidateValidProjectKeyGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectvalidateValidProjectNameGet
  /*


Checks that a project name isn&#39;t in use. If the name isn&#39;t in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.

 */
  projectvalidateValidProjectNameGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'name': "name_example" // String | The project name.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectvalidateValidProjectNameGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for resolutionGet
  /*


Returns a list of all issue resolution values.

 */
  resolutionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.resolutionGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for resolutionIdGet
  /*


Returns an issue resolution value.

 */
  resolutionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue resolution value.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.resolutionIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleGet
  /*


Gets a list of all project roles, complete with project role details and default actors.

 */
  roleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.roleGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdActorsGet
  /*


Returns the default actors for the project role.

 */
  roleIdActorsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.roleIdActorsGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdGet
  /*


Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.

 */
  roleIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.roleIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensGet
  /*


Returns all screens.

 */
  screensGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 100.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdAvailableFieldsGet
  /*


Returns the fields that can be added to a tab on a screen.

 */
  screensScreenIdAvailableFieldsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen.
    /*let cloudid = null;*/ /*let screenId = 56;*/ apiInstance.screensScreenIdAvailableFieldsGet(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsGet
  /*


Returns the list of tabs for a screen.

 */
  screensScreenIdTabsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen.
    /*let cloudid = null;*/ /*let screenId = 56;*/ let opts = {
      //  'projectKey': "projectKey_example" // String | The key of the project.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsGet(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsGet
  /*


Returns all fields for a screen tab.

 */
  screensScreenIdTabsTabIdFieldsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 56;*/ /*let tabId = 56;*/ let opts = {
      //  'projectKey': "projectKey_example" // String | The key of the project.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsTabIdFieldsGet(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for searchGet
  /*


Searches for issues using JQL. Permissions required: Permission to access Jira.

 */
  searchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
      fields: ['null'], // [String] | A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
      fieldsByKeys: true, // Boolean | Reference fields by their key (rather than ID).
      //  'jql': "jql_example", // String | The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 100.
      properties: ['null'], // [String] | A comma-separated list of up to 5 issue properties to include in the results.
      startAt: 56, // Number | The index of the first item to return in the page of results (page offset).
      //  'validateQuery': "validateQuery_example" // String | Determines how to validate the JQL query and treat the validation results. Supported values are:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for securitylevelIdGet
  /*


Returns details of an issue security level.

 */
  securitylevelIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue security level.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.securitylevelIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for serverInfoGet
  /*


Returns information about the Jira instance.

 */
  serverInfoGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.serverInfoGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for settingsColumnsGet
  /*


Returns the default issue navigator columns.

 */
  settingsColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.settingsColumnsGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for statusGet
  /*


Returns a list of all statuses associated with workflows.

 */
  statusGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.statusGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for statusIdOrNameGet
  /*


Returns a status. The status must be associated with a workflow to be returned.

 */
  statusIdOrNameGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or name of the status.
    /*let cloudid = null;*/ /*let idOrName = "idOrName_example";*/ apiInstance.statusIdOrNameGet(
      incomingOptions.cloudid,
      incomingOptions.idOrName,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for statuscategoryGet
  /*


Returns a list of all status categories.

 */
  statuscategoryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.statuscategoryGet(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for statuscategoryIdOrKeyGet
  /*


Returns a status category. Status categories provided a mechanism for categorizing statuses.

 */
  statuscategoryIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the status category.
    /*let cloudid = null;*/ /*let idOrKey = "idOrKey_example";*/ apiInstance.statuscategoryIdOrKeyGet(
      incomingOptions.cloudid,
      incomingOptions.idOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for taskTaskIdGet
  /*


Returns the status of a long-running asynchronous task.

 */
  taskTaskIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the task.
    /*let cloudid = null;*/ /*let taskId = "taskId_example";*/ apiInstance.taskTaskIdGet(
      incomingOptions.cloudid,
      incomingOptions.taskId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for universalAvatarTypeTypeOwnerEntityIdGet
  /*


Returns the system and custom avatars for a project or issue type.

 */
  universalAvatarTypeTypeOwnerEntityIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the entity item // String | The type of the entity. Valid values are project and issuetype.
    /*let cloudid = null;*/ /*let entityId = "entityId_example";*/ /*let type = "type_example";*/ apiInstance.universalAvatarTypeTypeOwnerEntityIdGet(
      incomingOptions.cloudid,
      incomingOptions.entityId,
      incomingOptions.type,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userAssignableMultiProjectSearchGet
  /*


Returns a list of users who fulfill both of these criteria:

 */
  userAssignableMultiProjectSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'projectKeys': "projectKeys_example", // String | A comma-separated list of project keys (case sensitive).
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userAssignableMultiProjectSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userAssignableSearchGet
  /*


Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:

 */
  userAssignableSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      actionDescriptorId: 56, // Number | The ID of the transition.
      //  'issueKey': "issueKey_example", // String | The key of the issue. Required, unless project is specified.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'project': "project_example", // String | The project ID or project key (case sensitive). Required, unless issueKey is specified.
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userAssignableSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userBulkGet
  /*


Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.

 */
  userBulkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      key: ['null'], // [String] | Comma-separated list of user keys. Required if username isn't provided.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 200.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      username: ['null'], // [String] | Comma-separated list of usernames. Required if key isn't provided.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userBulkGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userColumnsGet
  /*


Returns the default issue table columns for the user. If a username is not passed in the request, the calling user&#39;s details are returned. Permissions required:

 */
  userColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userColumnsGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userGet
  /*


Returns a user. Permissions required: None.

 */
  userGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'expand': "expand_example", // String | Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
      //  'key': "key_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userGroupsGet
  /*


Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.

 */
  userGroupsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user.
      //  'key': "key_example", // String | The key of the user.
      //  'username': "username_example" // String | The username of the user. Deprecated in favour of accountId.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userGroupsGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPermissionSearchGet
  /*


Returns a list of users who fulfill both of these criteria:

 */
  userPermissionSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'issueKey': "issueKey_example", // String | The issue key for the issue.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'permissions': "permissions_example", // String | A comma-separated list of permissions. The valid permissions are:
      //  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive).
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPermissionSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPickerGet
  /*


Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.

 */
  userPickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      exclude: ['null'], // [String] | This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
      excludeAccountIds: ['null'], // [String] | A comma-separated list of account IDs to exclude from the search results.
      maxResults: 56, // Number | The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
      //  'query': "query_example", // String | A search input that is matched against appropriate user attributes to find relevant users.
      showAvatar: true, // Boolean | Include the URI to the user's avatar.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPickerGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPropertiesGet
  /*


Returns the keys of all properties for a user. Permissions required:

 */
  userPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPropertiesPropertyKeyGet
  /*


Returns the value of a user&#39;s property. If no property key is provided Get user property keys is called. Permissions required:

 */
  userPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the user's property.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userSearchGet
  /*


Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.

 */
  userSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      includeActive: true, // Boolean | Include active users.
      includeInactive: true, // Boolean | Include inactive users.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'property': "property_example", // String | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {\"something\":{\"nested\":1,\"other\":2}} use thepropertykey.something.nested=1.
      //  'query': "query_example", // String | A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userSearchQueryGet
  /*


Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:

 */
  userSearchQueryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      includeInactive: true, // Boolean | Include inactive users in the results.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'query': "query_example", // String | The search query.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSearchQueryGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userSearchQueryKeyGet
  /*


Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:

 */
  userSearchQueryKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      includeInactive: true, // Boolean | Include inactive users in the results.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'query': "query_example", // String | The search query.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSearchQueryKeyGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userViewissueSearchGet
  /*


Returns a list of users who fulfill both of these criteria:

 */
  userViewissueSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'issueKey': "issueKey_example", // String | The issue key for the issue. Required, unless projectKey is specified.
      maxResults: 56, // Number | The maximum number of items to return per page. Maximum is 1000.
      //  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive). Required, unless issueKey is specified.
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
      startAt: 56, // Number | The index of the first item to return in a page of results (page offset).
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userViewissueSearchGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdGet
  /*


Returns a project version. Permissions required: Browse projects project permission

 */
  versionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdRelatedIssueCountsGet
  /*


Returns the following counts for a version:

 */
  versionIdRelatedIssueCountsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.versionIdRelatedIssueCountsGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdUnresolvedIssueCountGet
  /*


Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission

 */
  versionIdUnresolvedIssueCountGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.versionIdUnresolvedIssueCountGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionRemotelinkGet
  /*


the global ID of the remote resource that is linked to the versions

 */
  versionRemotelinkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'globalId': "globalId_example" // String | the global ID of the remote resource that is linked to the versions
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionRemotelinkGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkGet
  /*


a String containing the version ID

 */
  versionVersionIdRemotelinkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | a String containing the version ID
    /*let cloudid = null;*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkGet(
      incomingOptions.cloudid,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkGlobalIdGet
  /*


A REST sub-resource representing a remote version link

 */
  versionVersionIdRemotelinkGlobalIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned // String | a String containing the version id
    /*let cloudid = null;*/ /*let globalId = "globalId_example";*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkGlobalIdGet(
      incomingOptions.cloudid,
      incomingOptions.globalId,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowGet
  /*


Returns all workflows in Jira or a single workflow.

 */
  workflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'workflowName': "workflowName_example" // String | The name of the workflow to be returned. Only one workflow can be specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesGet
  /*


Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
  workflowTransitionsTransitionIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
    /*let cloudid = null;*/ /*let transitionId = 56;*/ let opts = {
      includeReservedKeys: true, // Boolean | Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
      //  'key': "key_example", // String | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
      //  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
      //  'workflowName': "workflowName_example" // String | The name of the workflow that the transition belongs to.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowTransitionsTransitionIdPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.transitionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDefaultGet
  /*


Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.

 */
  workflowschemeIdDefaultGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      returnDraftIfExists: true, // Boolean | Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDefaultGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftDefaultGet
  /*


Returns the default workflow for a workflow scheme&#39;s draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.

 */
  workflowschemeIdDraftDefaultGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdDraftDefaultGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftGet
  /*


Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:

 */
  workflowschemeIdDraftGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was originally created from.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdDraftGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftIssuetypeIssueTypeGet
  /*


Returns the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftIssuetypeIssueTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ apiInstance.workflowschemeIdDraftIssuetypeIssueTypeGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftWorkflowGet
  /*


Returns the workflow-issue type mappings for a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftWorkflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'workflowName': "workflowName_example" // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftWorkflowGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdGet
  /*


Returns a workflow scheme.

 */
  workflowschemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      returnDraftIfExists: true, // Boolean | Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdIssuetypeIssueTypeGet
  /*


Returns the issue type-workflow mapping for an issue type in a workflow scheme.

 */
  workflowschemeIdIssuetypeIssueTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ let opts = {
      returnDraftIfExists: true, // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdIssuetypeIssueTypeGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdWorkflowGet
  /*


Returns the workflow-issue type mappings for a workflow scheme.

 */
  workflowschemeIdWorkflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      returnDraftIfExists: true, // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
      //  'workflowName': "workflowName_example" // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdWorkflowGet(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for worklogDeletedGet
  /*


Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.

 */
  worklogDeletedGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      since: 56, // Number | The date and time, in UNIX timestamp format, after which deleted worklogs are returned.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.worklogDeletedGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for worklogUpdatedGet
  /*


Returns a list of IDs and update timestamps for worklogs updated after a date and time.

 */
  worklogUpdatedGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
      since: 56, // Number | The date and time, in UNIX timestamp format, after which updated worklogs are returned.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.worklogUpdatedGet(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async post(entity, options) {
    switch (entity) {
      case 'ISSUES':
        return await this.createIssues(options);
      case 'COMMENT_LIST':
        /*



Returns the comments for a list of comment IDs.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.commentListPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMPONENT':
        /*



Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.componentPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'EXPRESSION_EVAL':
        /*



Evaluates a Jira expression and returns its value.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.expressionEvalPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD_FIELD_KEY_OPTION':
        /*



Creates an option for a select list issue field.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD':
        /*



Creates a custom field.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_PERMISSION':
        /*



Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdPermissionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER':
        /*



Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUP':
        /*



Creates a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUP_USER':
        /*



Adds a user to a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupUserPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_BULK':
        /*



Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issueBulkPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_ATTACHMENTS':
        /*



Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyAttachmentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT':
        /*



a string containing the issue id or key the comment will be added to


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_NOTIFY':
        /*



Creates an email notification for an issue and adds it to the mail queue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyNotifyPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*



Creates or updates a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS':
        /*



Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyTransitionsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_VOTES':
        /*



Adds the user&#39;s vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyVotesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*



Adds a user as a watcher of an issue. If no user is specified the calling user is added.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWatchersPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG':
        /*



Adds a worklog to an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK':
        /*



Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issueLinkPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE':
        /*



Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link&#39;s inward and outward relationships.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE':
        /*



Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ID_AVATAR2':
        /*



Loads an avatar for the issue type.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdAvatar2Post(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE':
        /*



Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'JQL_PDCLEANER':
        /*



The query strings having personal data that need to be migrated. There should be at most 100 queries.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.jqlPdcleanerPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONS_PROJECT':
        /*



Returns all the projects where the user is granted a list of project permissions.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionsProjectPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME':
        /*



Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID_PERMISSION':
        /*



Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPermissionPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_CATEGORY':
        /*



Creates a project category.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT':
        /*



Creates a new project.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.projectPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR2':
        /*



Loads an avatar for a project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyAvatar2Post(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*



Adds additional actors to a project role for the project.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoleIdPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ROLE_ID_ACTORS':
        /*



Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.roleIdActorsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE_ID':
        /*



Update either the project role&#39;s name or its description.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.roleIdPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE':
        /*



Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.rolePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_ADD_TO_DEFAULT_FIELD_ID':
        /*



Adds a field to the default tab of the default screen.


      Function parameters for this API cloudid,fieldId
        */
        return new Promise((resolve, reject) => {
          this.screensAddToDefaultFieldIdPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SCREENS_SCREEN_ID_TABS':
        /*



Creates a tab for a screen.


      Function parameters for this API cloudid,screenId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS_ID_MOVE':
        /*



Moves a screen tab field.


      Function parameters for this API cloudid,id,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdFieldsIdMovePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS':
        /*



Adds a field to a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdFieldsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID_MOVE_POS':
        /*



Moves a screen tab.


      Function parameters for this API cloudid,pos,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdMovePosPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SEARCH':
        /*



Searches for issues using JQL. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.searchPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TASK_TASK_ID_CANCEL':
        /*



Cancels a task.


      Function parameters for this API cloudid,taskId
        */
        return new Promise((resolve, reject) => {
          this.taskTaskIdCancelPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID':
        /*



Loads a custom avatar for a project or issue type.


      Function parameters for this API cloudid,entityId,type,opts
        */
        return new Promise((resolve, reject) => {
          this.universalAvatarTypeTypeOwnerEntityIdPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'USER':
        /*



Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \&quot;notification\&quot;: \&quot;true\&quot; to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn&#39;t sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_ID_MOVE':
        /*



Modifies the version&#39;s sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.versionIdMovePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_ID_REMOVE_AND_SWAP':
        /*



Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.versionIdRemoveAndSwapPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION':
        /*



Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.versionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID':
        /*




      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkGlobalIdPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_VERSION_ID_REMOTELINK':
        /*



Create a remote version link via POST. The link&#39;s global ID will be taken from the JSON payload if provided; otherwise, it will be generated.


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*



Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowTransitionsTransitionIdPropertiesPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_CREATEDRAFT':
        /*



Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdCreatedraftPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME':
        /*



Creates a workflow scheme.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKLOG_LIST':
        /*



Returns worklog details for a list of worklog IDs.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.worklogListPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for commentListPost
  /*


Returns the comments for a list of comment IDs.

 */
  commentListPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:
      body: new Jira.InlineObject1(), // InlineObject1 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.commentListPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for componentPost
  /*


Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:

 */
  componentPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject2(), // InlineObject2 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.componentPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for expressionEvalPost
  /*


Evaluates a Jira expression and returns its value.

 */
  expressionEvalPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
      body: new Jira.InlineObject6(), // InlineObject6 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.expressionEvalPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionPost
  /*


Creates an option for a select list issue field.

 */
  fieldFieldKeyOptionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String |
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      body: new Jira.InlineObject8(), // InlineObject8 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionPost(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldPost
  /*


Creates a custom field.

 */
  fieldPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject7(), // InlineObject7 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdPermissionPost
  /*


Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.

 */
  filterIdPermissionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject13(), // InlineObject13 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdPermissionPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterPost
  /*


Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.

 */
  filterPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
      body: new Jira.InlineObject10(), // InlineObject10 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for groupPost
  /*


Creates a group.

 */
  groupPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject14(), // InlineObject14 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for groupUserPost
  /*


Adds a user to a group.

 */
  groupUserPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'groupname': "groupname_example", // String | The name of the group.
      body: new Jira.InlineObject15(), // InlineObject15 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupUserPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueBulkPost
  /*


Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.

 */
  issueBulkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject17(), // InlineObject17 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueBulkPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyAttachmentsPost
  /*


Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).

 */
  issueIssueIdOrKeyAttachmentsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue that attachments are added to.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyAttachmentsPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentPost
  /*


a string containing the issue id or key the comment will be added to

 */
  issueIssueIdOrKeyCommentPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | a string containing the issue id or key the comment will be added to
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
      body: new Jira.InlineObject22(), // InlineObject22 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyCommentPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyNotifyPost
  /*


Creates an email notification for an issue and adds it to the mail queue.

 */
  issueIssueIdOrKeyNotifyPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | ID or key of the issue that the notification is sent for.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject24(), // InlineObject24 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyNotifyPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkPost
  /*


Creates or updates a remote issue link for an issue.

 */
  issueIssueIdOrKeyRemotelinkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject25(), // InlineObject25 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyRemotelinkPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyTransitionsPost
  /*


Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.

 */
  issueIssueIdOrKeyTransitionsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject27(), // InlineObject27 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyTransitionsPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyVotesPost
  /*


Adds the user&#39;s vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.

 */
  issueIssueIdOrKeyVotesPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyVotesPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWatchersPost
  /*


Adds a user as a watcher of an issue. If no user is specified the calling user is added.

 */
  issueIssueIdOrKeyWatchersPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyWatchersPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogPost
  /*


Adds a worklog to an issue.

 */
  issueIssueIdOrKeyWorklogPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
      //  'expand': "expand_example", // String | Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
      notifyUsers: true, // Boolean | Indicates whether users watching the issue are notified by email.
      overrideEditableFlag: true, // Boolean | Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
      //  'reduceBy': "reduceBy_example", // String | The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.
      body: new Jira.InlineObject28(), // InlineObject28 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWorklogPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueLinkPost
  /*


Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.

 */
  issueLinkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject30(), // InlineObject30 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueLinkPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueLinkTypePost
  /*


Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link&#39;s inward and outward relationships.

 */
  issueLinkTypePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject31(), // InlineObject31 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueLinkTypePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuePost
  /*


Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.

 */
  issuePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      updateHistory: true, // Boolean | Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.
      body: new Jira.InlineObject16(), // InlineObject16 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIdAvatar2Post
  /*


Loads an avatar for the issue type.

 */
  issuetypeIdAvatar2Post(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      size: 56, // Number | The length of each side of the crop region.
      x: 56, // Number | The X coordinate of the top-left corner of the crop region.
      y: 56, // Number | The Y coordinate of the top-left corner of the crop region.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeIdAvatar2Post(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypePost
  /*


Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.

 */
  issuetypePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject33(), // InlineObject33 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for jqlPdcleanerPost
  /*


The query strings having personal data that need to be migrated. There should be at most 100 queries.

 */
  jqlPdcleanerPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject35(), // InlineObject35 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.jqlPdcleanerPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionsProjectPost
  /*


Returns all the projects where the user is granted a list of project permissions.

 */
  permissionsProjectPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject37(), // InlineObject37 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionsProjectPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemePost
  /*


Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.

 */
  permissionschemePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
      body: new Jira.InlineObject38(), // InlineObject38 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdPermissionPost
  /*


Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.

 */
  permissionschemeSchemeIdPermissionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme in which to create a new permission grant.
    /*let cloudid = null;*/ /*let schemeId = 56;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
      body: new Jira.InlineObject40(), // InlineObject40 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeSchemeIdPermissionPost(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectCategoryPost
  /*


Creates a project category.

 */
  projectCategoryPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject47(), // InlineObject47 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectCategoryPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectPost
  /*


Creates a new project.

 */
  projectPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject41(), // InlineObject41 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyAvatar2Post
  /*


Loads an avatar for a project.

 */
  projectProjectIdOrKeyAvatar2Post(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      size: 56, // Number | The length of each side of the crop region.
      x: 56, // Number | The X coordinate of the top-left corner of the crop region.
      y: 56, // Number | The Y coordinate of the top-left corner of the crop region.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyAvatar2Post(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoleIdPost
  /*


Adds additional actors to a project role for the project.

 */
  projectProjectIdOrKeyRoleIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let id = 56;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject45(), // InlineObject45 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyRoleIdPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for roleIdActorsPost
  /*


Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.

 */
  roleIdActorsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject52(), // InlineObject52 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.roleIdActorsPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdPost
  /*


Update either the project role&#39;s name or its description.

 */
  roleIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject51(), // InlineObject51 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.roleIdPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for rolePost
  /*


Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.

 */
  rolePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject49(), // InlineObject49 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rolePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensAddToDefaultFieldIdPost
  /*


Adds a field to the default tab of the default screen.

 */
  screensAddToDefaultFieldIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the field.
    /*let cloudid = null;*/ /*let fieldId = "fieldId_example";*/ apiInstance.screensAddToDefaultFieldIdPost(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsPost
  /*


Creates a tab for a screen.

 */
  screensScreenIdTabsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen.
    /*let cloudid = null;*/ /*let screenId = 56;*/ let opts = {
      body: new Jira.InlineObject53(), // InlineObject53 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsPost(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsIdMovePost
  /*


Moves a screen tab field.

 */
  screensScreenIdTabsTabIdFieldsIdMovePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the field // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let screenId = 56;*/ /*let tabId = 56;*/ let opts = {
      body: new Jira.InlineObject56(), // InlineObject56 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsTabIdFieldsIdMovePost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsPost
  /*


Adds a field to a screen tab.

 */
  screensScreenIdTabsTabIdFieldsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 56;*/ /*let tabId = 56;*/ let opts = {
      body: new Jira.InlineObject55(), // InlineObject55 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsTabIdFieldsPost(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdMovePosPost
  /*


Moves a screen tab.

 */
  screensScreenIdTabsTabIdMovePosPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The position of tab. The base index is 0 // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let pos = 56;*/ /*let screenId = 56;*/ /*let tabId = 56;*/ apiInstance.screensScreenIdTabsTabIdMovePosPost(
      incomingOptions.cloudid,
      incomingOptions.pos,
      incomingOptions.screenId,
      incomingOptions.tabId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for searchPost
  /*


Searches for issues using JQL. Permissions required: Permission to access Jira.

 */
  searchPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject57(), // InlineObject57 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for taskTaskIdCancelPost
  /*


Cancels a task.

 */
  taskTaskIdCancelPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the task.
    /*let cloudid = null;*/ /*let taskId = "taskId_example";*/ apiInstance.taskTaskIdCancelPost(
      incomingOptions.cloudid,
      incomingOptions.taskId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for universalAvatarTypeTypeOwnerEntityIdPost
  /*


Loads a custom avatar for a project or issue type.

 */
  universalAvatarTypeTypeOwnerEntityIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the entity item // String | The type of the entity. Valid values are project and issuetype.
    /*let cloudid = null;*/ /*let entityId = "entityId_example";*/ /*let type = "type_example";*/ let opts = {
      size: 56, // Number | The length of each side of the crop region.
      x: 56, // Number | The X coordinate of the top-left corner of the crop region.
      y: 56, // Number | The Y coordinate of the top-left corner of the crop region.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.universalAvatarTypeTypeOwnerEntityIdPost(
      incomingOptions.cloudid,
      incomingOptions.entityId,
      incomingOptions.type,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPost
  /*


Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \&quot;notification\&quot;: \&quot;true\&quot; to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn&#39;t sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission

 */
  userPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject58(), // InlineObject58 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdMovePost
  /*


Modifies the version&#39;s sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
  versionIdMovePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version to be moved.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject61(), // InlineObject61 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionIdMovePost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdRemoveAndSwapPost
  /*


Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.

 */
  versionIdRemoveAndSwapPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject62(), // InlineObject62 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionIdRemoveAndSwapPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionPost
  /*


Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
  versionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject59(), // InlineObject59 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkGlobalIdPost
  /*


 */
  versionVersionIdRemotelinkGlobalIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | // String |
    /*let cloudid = null;*/ /*let globalId = "globalId_example";*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkGlobalIdPost(
      incomingOptions.cloudid,
      incomingOptions.globalId,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkPost
  /*


Create a remote version link via POST. The link&#39;s global ID will be taken from the JSON payload if provided; otherwise, it will be generated.

 */
  versionVersionIdRemotelinkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String |
    /*let cloudid = null;*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkPost(
      incomingOptions.cloudid,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesPost
  /*


Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
  workflowTransitionsTransitionIdPropertiesPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    /*let cloudid = null;*/ /*let transitionId = 56;*/ let opts = {
      //  'key': "key_example", // String | The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
      //  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
      //  'workflowName': "workflowName_example", // String | The name of the workflow that the transition belongs to.
      body: new Jira.InlineObject64(), // InlineObject64 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowTransitionsTransitionIdPropertiesPost(
      incomingOptions.cloudid,
      incomingOptions.transitionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdCreatedraftPost
  /*


Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.

 */
  workflowschemeIdCreatedraftPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft is created from.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdCreatedraftPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemePost
  /*


Creates a workflow scheme.

 */
  workflowschemePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject65(), // InlineObject65 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemePost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for worklogListPost
  /*


Returns worklog details for a list of worklog IDs.

 */
  worklogListPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
      body: new Jira.InlineObject74(), // InlineObject74 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.worklogListPost(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async put(entity, options) {
    switch (entity) {
      case 'APPLICATION_PROPERTIES_ID':
        /*



Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.applicationPropertiesIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY':
        /*



Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.commentCommentIdPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'COMPONENT_ID':
        /*



Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\&quot;\&quot;) the component lead is removed. Permissions required: Any of the following:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.componentIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CONFIGURATION_TIMETRACKING_OPTIONS':
        /*



Sets the time tracking settings.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingOptionsPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'CONFIGURATION_TIMETRACKING':
        /*



Selects a time tracking provider.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY':
        /*



Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION_OPTION_ID':
        /*



Updates an option for a select list issue field. If the option does not exist, a new option is created.


      Function parameters for this API cloudid,fieldKey,optionId,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionOptionIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FILTER_DEFAULT_SHARE_SCOPE':
        /*



Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.filterDefaultShareScopePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_COLUMNS':
        /*



Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.filterIdColumnsPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_FAVOURITE':
        /*



Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdFavouritePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID':
        /*



Updates an existing filter. Use this method to update a filter&#39;s name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_ASSIGNEE':
        /*



Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyAssigneePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID':
        /*



a string containing the issue id or key the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Sets the value of an issue&#39;s property. Use this resource to store custom data against an issue.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY':
        /*



Edits an issue. A transition may be applied and issue properties updated as part of the edit.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID':
        /*



Updates a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkLinkIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID':
        /*



Updates a worklog.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY':
        /*



Sets the value of a worklog property. Use this operation to store custom data against the worklog.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID':
        /*



Updates an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId,opts
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypeIssueLinkTypeIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_PROPERTIES_PROPERTY_KEY':
        /*



Sets a property value on multiple issues. The issues to be updated can be specified by a filter.


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issuePropertiesPropertyKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ID':
        /*



Updates the issue type. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY':
        /*



Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIssueTypeIdPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'MYPREFERENCES_LOCALE':
        /*



Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesLocalePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYPREFERENCES':
        /*



Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID':
        /*



Updates a permission scheme. Below are some important things to note when using this resource:


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_CATEGORY_ID':
        /*



Updates a project category.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR':
        /*



Sets the avatar displayed for a project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyAvatarPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Sets the value of the project property. You can use project properties to store custom data against the project.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPropertiesPropertyKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*



Updates the project details of an existing project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*



Associates actors with the project role for the project, replacing all existing actors.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoleIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_TYPE_NEW_PROJECT_TYPE_KEY':
        /*



Updates the project type.


      Function parameters for this API cloudid,newProjectTypeKey,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyTypeNewProjectTypeKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_KEY_OR_ID_PERMISSIONSCHEME':
        /*



Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectKeyOrIdPermissionschemePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ROLE_ID':
        /*



Update the project role&#39;s name and description. You must include both a name and a description in the request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.roleIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID':
        /*



Updates the name of a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SETTINGS_COLUMNS':
        /*



Sets the default issue navigator columns.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.settingsColumnsPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_COLUMNS':
        /*



Sets the default issue table columns for the user. If a username is not passed, the calling user&#39;s default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username&#x3D;&lt;username&gt; -d columns&#x3D;summary -d columns&#x3D;description &lt;url&gt; Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userColumnsPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES_PROPERTY_KEY':
        /*



Sets the value of a user&#39;s property. Use this resource to store custom data against a user. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.userPropertiesPropertyKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_ID_MERGETO_MOVE_ISSUES_TO':
        /*



Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,moveIssuesTo
        */
        return new Promise((resolve, reject) => {
          this.versionIdMergetoMoveIssuesToPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_ID':
        /*



Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.versionIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*



Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowTransitionsTransitionIdPropertiesPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*



Sets the default workflow for a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDefaultPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*



Sets the default workflow for a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftDefaultPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE':
        /*



Sets the workflow for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftIssuetypeIssueTypePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT':
        /*



Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_WORKFLOW':
        /*



Sets the issue types for a workflow in a workflow scheme&#39;s draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftWorkflowPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE':
        /*



Sets the workflow for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdIssuetypeIssueTypePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID':
        /*



Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_WORKFLOW':
        /*



Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdWorkflowPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for applicationPropertiesIdPut
  /*


Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.

 */
  applicationPropertiesIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the application property to update.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject(), // InlineObject |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.applicationPropertiesIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for commentCommentIdPropertiesPropertyKeyPut
  /*


Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.

 */
  commentCommentIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property. The maximum length is 255 characters.
    /*let cloudid = null;*/ /*let commentId = "commentId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.commentCommentIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.commentId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for componentIdPut
  /*


Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\&quot;\&quot;) the component lead is removed. Permissions required: Any of the following:

 */
  componentIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String |
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject3(), // InlineObject3 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.componentIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingOptionsPut
  /*


Sets the time tracking settings.

 */
  configurationTimetrackingOptionsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject5(), // InlineObject5 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.configurationTimetrackingOptionsPut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingPut
  /*


Selects a time tracking provider.

 */
  configurationTimetrackingPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject4(), // InlineObject4 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.configurationTimetrackingPut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut
  /*


Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property. The maximum length of the key is 255 bytes.
    /*let cloudid = null;*/ /*let dashboardId = "dashboardId_example";*/ /*let itemId = "itemId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.dashboardId,
      incomingOptions.itemId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionOptionIdPut
  /*


Updates an option for a select list issue field. If the option does not exist, a new option is created.

 */
  fieldFieldKeyOptionOptionIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field // Number | The ID of the option to be updated. For example, 3.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 56;*/ let opts = {
      body: new Jira.InlineObject9(), // InlineObject9 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionOptionIdPut(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.optionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterDefaultShareScopePut
  /*


Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
  filterDefaultShareScopePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject11(), // InlineObject11 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterDefaultShareScopePut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdColumnsPut
  /*


Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
  filterIdColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.filterIdColumnsPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for filterIdFavouritePut
  /*


Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
  filterIdFavouritePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdFavouritePut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdPut
  /*


Updates an existing filter. Use this method to update a filter&#39;s name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:

 */
  filterIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter to update.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
      body: new Jira.InlineObject12(), // InlineObject12 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyAssigneePut
  /*


Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.

 */
  issueIssueIdOrKeyAssigneePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue to be assigned.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject21(), // InlineObject21 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyAssigneePut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentIdPut
  /*


a string containing the issue id or key the comment belongs to

 */
  issueIssueIdOrKeyCommentIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | id of the comment to be update // String | a string containing the issue id or key the comment belongs to
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
      body: new Jira.InlineObject23(), // InlineObject23 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyCommentIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPropertiesPropertyKeyPut
  /*


Sets the value of an issue&#39;s property. Use this resource to store custom data against an issue.

 */
  issueIssueIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The key of the issue property. The maximum length is 255 characters.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPut
  /*


Edits an issue. A transition may be applied and issue properties updated as part of the edit.

 */
  issueIssueIdOrKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      notifyUsers: true, // Boolean | Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
      overrideEditableFlag: true, // Boolean | Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
      overrideScreenSecurity: true, // Boolean | Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
      body: new Jira.InlineObject20(), // InlineObject20 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkLinkIdPut
  /*


Updates a remote issue link for an issue.

 */
  issueIssueIdOrKeyRemotelinkLinkIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the remote issue link.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let linkId = "linkId_example";*/ let opts = {
      body: new Jira.InlineObject26(), // InlineObject26 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyRemotelinkLinkIdPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.linkId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogIdPut
  /*


Updates a worklog.

 */
  issueIssueIdOrKeyWorklogIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the worklog // String | The ID or key the issue.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
      //  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
      notifyUsers: true, // Boolean | Indicates whether users watching the issue are notified by email.
      overrideEditableFlag: true, // Boolean | Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.
      body: new Jira.InlineObject29(), // InlineObject29 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWorklogIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut
  /*


Sets the value of a worklog property. Use this operation to store custom data against the worklog.

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The key of the issue property. The maximum length is 255 characters // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let worklogId = "worklogId_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      incomingOptions.worklogId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueLinkTypeIssueLinkTypeIdPut
  /*


Updates an issue link type.

 */
  issueLinkTypeIssueLinkTypeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue link type.
    /*let cloudid = null;*/ /*let issueLinkTypeId = "issueLinkTypeId_example";*/ let opts = {
      body: new Jira.InlineObject32(), // InlineObject32 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueLinkTypeIssueLinkTypeIdPut(
      incomingOptions.cloudid,
      incomingOptions.issueLinkTypeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuePropertiesPropertyKeyPut
  /*


Sets a property value on multiple issues. The issues to be updated can be specified by a filter.

 */
  issuePropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the property. The maximum length is 255 characters.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      body: new Jira.InlineObject18(), // InlineObject18 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuePropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuetypeIdPut
  /*


Updates the issue type. Permissions required: Administer Jira global permission.

 */
  issuetypeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject34(), // InlineObject34 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuetypeIssueTypeIdPropertiesPropertyKeyPut
  /*


Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the issue type property. The maximum length of the key is 255 bytes.
    /*let cloudid = null;*/ /*let issueTypeId = "issueTypeId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueTypeId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for mypreferencesLocalePut
  /*


Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.

 */
  mypreferencesLocalePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      body: new Jira.InlineObject36(), // InlineObject36 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.mypreferencesLocalePut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for mypreferencesPut
  /*


Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:

 */
  mypreferencesPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example" // String | The key of the preference. Maximum length is 255 characters.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.mypreferencesPut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdPut
  /*


Updates a permission scheme. Below are some important things to note when using this resource:

 */
  permissionschemeSchemeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme to update (e.g., 10000).
    /*let cloudid = null;*/ /*let schemeId = 56;*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
      body: new Jira.InlineObject39(), // InlineObject39 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.permissionschemeSchemeIdPut(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectCategoryIdPut
  /*


Updates a project category.

 */
  projectCategoryIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number |
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject48(), // InlineObject48 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectCategoryIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyAvatarPut
  /*


Sets the avatar displayed for a project.

 */
  projectProjectIdOrKeyAvatarPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject43(), // InlineObject43 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyAvatarPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyPropertiesPropertyKeyPut
  /*


Sets the value of the project property. You can use project properties to store custom data against the project.

 */
  projectProjectIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The key of the project property. The maximum length is 255 bytes.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyPut
  /*


Updates the project details of an existing project.

 */
  projectProjectIdOrKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
      body: new Jira.InlineObject42(), // InlineObject42 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoleIdPut
  /*


Associates actors with the project role for the project, replacing all existing actors.

 */
  projectProjectIdOrKeyRoleIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let id = 56;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      body: new Jira.InlineObject44(), // InlineObject44 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyRoleIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyTypeNewProjectTypeKeyPut
  /*


Updates the project type.

 */
  projectProjectIdOrKeyTypeNewProjectTypeKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the new project type // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let newProjectTypeKey = "newProjectTypeKey_example";*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyTypeNewProjectTypeKeyPut(
      incomingOptions.cloudid,
      incomingOptions.newProjectTypeKey,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectKeyOrIdPermissionschemePut
  /*


Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.

 */
  projectProjectKeyOrIdPermissionschemePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
      body: new Jira.InlineObject46(), // InlineObject46 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectKeyOrIdPermissionschemePut(
      incomingOptions.cloudid,
      incomingOptions.projectKeyOrId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdPut
  /*


Update the project role&#39;s name and description. You must include both a name and a description in the request.

 */
  roleIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject50(), // InlineObject50 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.roleIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdPut
  /*


Updates the name of a screen tab.

 */
  screensScreenIdTabsTabIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 56;*/ /*let tabId = 56;*/ let opts = {
      body: new Jira.InlineObject54(), // InlineObject54 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screensScreenIdTabsTabIdPut(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for settingsColumnsPut
  /*


Sets the default issue navigator columns.

 */
  settingsColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.settingsColumnsPut(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userColumnsPut
  /*


Sets the default issue table columns for the user. If a username is not passed, the calling user&#39;s default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username&#x3D;&lt;username&gt; -d columns&#x3D;summary -d columns&#x3D;description &lt;url&gt; Permissions required:

 */
  userColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example" // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userColumnsPut(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userPropertiesPropertyKeyPut
  /*


Sets the value of a user&#39;s property. Use this resource to store custom data against a user. Permissions required:

 */
  userPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the user's property. The maximum length of the key is 255 bytes.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionIdMergetoMoveIssuesToPut
  /*


Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
  versionIdMergetoMoveIssuesToPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version to delete // String | The ID of the version to merge into.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let moveIssuesTo = "moveIssuesTo_example";*/ apiInstance.versionIdMergetoMoveIssuesToPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.moveIssuesTo,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionIdPut
  /*


Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
  versionIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      body: new Jira.InlineObject60(), // InlineObject60 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesPut
  /*


Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
  workflowTransitionsTransitionIdPropertiesPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    /*let cloudid = null;*/ /*let transitionId = 56;*/ let opts = {
      //  'key': "key_example", // String | The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
      //  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
      //  'workflowName': "workflowName_example", // String | The name of the workflow that the transition belongs to.
      body: new Jira.InlineObject63(), // InlineObject63 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowTransitionsTransitionIdPropertiesPut(
      incomingOptions.cloudid,
      incomingOptions.transitionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDefaultPut
  /*


Sets the default workflow for a workflow scheme.

 */
  workflowschemeIdDefaultPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject67(), // InlineObject67 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDefaultPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftDefaultPut
  /*


Sets the default workflow for a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftDefaultPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject69(), // InlineObject69 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftDefaultPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftIssuetypeIssueTypePut
  /*


Sets the workflow for an issue type in a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftIssuetypeIssueTypePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ let opts = {
      body: new Jira.InlineObject70(), // InlineObject70 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftIssuetypeIssueTypePut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftPut
  /*


Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.

 */
  workflowschemeIdDraftPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was originally created from.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject68(), // InlineObject68 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftWorkflowPut
  /*


Sets the issue types for a workflow in a workflow scheme&#39;s draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.

 */
  workflowschemeIdDraftWorkflowPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'workflowName': "workflowName_example", // String | The name of the workflow.
      body: new Jira.InlineObject71(), // InlineObject71 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftWorkflowPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdIssuetypeIssueTypePut
  /*


Sets the workflow for an issue type in a workflow scheme.

 */
  workflowschemeIdIssuetypeIssueTypePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ let opts = {
      body: new Jira.InlineObject72(), // InlineObject72 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdIssuetypeIssueTypePut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdPut
  /*


Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.

 */
  workflowschemeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      body: new Jira.InlineObject66(), // InlineObject66 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdWorkflowPut
  /*


Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.

 */
  workflowschemeIdWorkflowPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'workflowName': "workflowName_example", // String | The name of the workflow.
      body: new Jira.InlineObject73(), // InlineObject73 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdWorkflowPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async delete(entity, options) {
    switch (entity) {
      case 'ATTACHMENT_ID':
        /*



Deletes an attachment from an issue.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.attachmentIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY':
        /*



Deletes a comment property.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.commentCommentIdPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'COMPONENT_ID':
        /*



Deletes a component. Permissions required: Any of the following:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.componentIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CONFIGURATION_TIMETRACKING':
        /*



Disables time tracking.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.configurationTimetrackingDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY':
        /*



Deletes a dashboard item property.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION_OPTION_ID':
        /*



Deletes an option from a select list issue field.


      Function parameters for this API cloudid,fieldKey,optionId
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionOptionIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION_OPTION_ID_ISSUE':
        /*



Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.


      Function parameters for this API cloudid,fieldKey,optionId,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionOptionIdIssueDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FILTER_ID_COLUMNS':
        /*



Reset the user&#39;s column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.filterIdColumnsDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID':
        /*



Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.filterIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_FAVOURITE':
        /*



Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdFavouriteDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_PERMISSION_PERMISSION_ID':
        /*



Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.


      Function parameters for this API cloudid,id,permissionId
        */
        return new Promise((resolve, reject) => {
          this.filterIdPermissionPermissionIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'GROUP':
        /*



Deletes a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'GROUP_USER':
        /*



Removes a user from a group. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.groupUserDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID':
        /*



a string containing the issue id or key the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY':
        /*



Deletes an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Deletes an issue&#39;s property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*



Deletes the remote issue link from the issue using the link&#39;s global ID.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID':
        /*



Deletes a remote issue link from an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyRemotelinkLinkIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_VOTES':
        /*



Deletes a user&#39;s vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyVotesDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*



Deletes a user as a watcher of an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWatchersDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID':
        /*



Deletes a worklog from an issue.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY':
        /*



Deletes a worklog property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_LINK_LINK_ID':
        /*



Deletes an issue link.


      Function parameters for this API cloudid,linkId
        */
        return new Promise((resolve, reject) => {
          this.issueLinkLinkIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID':
        /*



Deletes an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypeIssueLinkTypeIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_PROPERTIES_PROPERTY_KEY':
        /*



Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.issuePropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUETYPE_ID':
        /*



Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY':
        /*



Deletes the issue type property. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIssueTypeIdPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'MYPREFERENCES':
        /*



Deletes a preference of the user, which restores the default value of system defined settings.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYPREFERENCES_LOCALE':
        /*



Deletes the locale of the current user, which restores the default setting.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesLocaleDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID':
        /*



Deletes a permission scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,schemeId
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PERMISSIONSCHEME_SCHEME_ID_PERMISSION_PERMISSION_ID':
        /*



Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,permissionId,schemeId
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPermissionPermissionIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_CATEGORY_ID':
        /*



Deletes a project category.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR_ID':
        /*



Deletes a custom avatar from a project. Note that system avatars cannot be deleted.


      Function parameters for this API cloudid,id,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyAvatarIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*



Deletes an existing project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*



Removes the property from the project.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*



Deletes actors from a project role for the project.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyRoleIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ROLE_ID_ACTORS':
        /*



Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.roleIdActorsDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ROLE_ID':
        /*



Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.roleIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID':
        /*



Deletes a screen tab.


      Function parameters for this API cloudid,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS_ID':
        /*



Removes a field from a screen tab.


      Function parameters for this API cloudid,id,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdFieldsIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_OWNING_OBJECT_ID_AVATAR_ID':
        /*



Deletes an avatar from a project or issue type.


      Function parameters for this API cloudid,id,owningObjectId,type
        */
        return new Promise((resolve, reject) => {
          this.universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'USER_COLUMNS':
        /*



Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user&#39;s default columns are reset. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userColumnsDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER':
        /*



Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES_PROPERTY_KEY':
        /*



Deletes a property from a user. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.userPropertiesPropertyKeyDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_ID':
        /*



Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.versionIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSION_VERSION_ID_REMOTELINK':
        /*



The version for which to delete ALL existing remote version links


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID':
        /*



The version ID of the remote link


      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.versionVersionIdRemotelinkGlobalIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*



Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowTransitionsTransitionIdPropertiesDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*



Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDefaultDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID':
        /*



Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*



Resets the default workflow for a workflow scheme&#39;s draft. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftDefaultDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT':
        /*



Deletes a draft workflow scheme.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE':
        /*



Deletes the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftIssuetypeIssueTypeDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_WORKFLOW':
        /*



Deletes the workflow-issue type mapping for a workflow in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDraftWorkflowDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE':
        /*



Deletes the issue type-workflow mapping for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdIssuetypeIssueTypeDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'WORKFLOWSCHEME_ID_WORKFLOW':
        /*



Deletes the workflow-issue type mapping for a workflow in a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdWorkflowDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for attachmentIdDelete
  /*


Deletes an attachment from an issue.

 */
  attachmentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.attachmentIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for commentCommentIdPropertiesPropertyKeyDelete
  /*


Deletes a comment property.

 */
  commentCommentIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property.
    /*let cloudid = null;*/ /*let commentId = "commentId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.commentCommentIdPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.commentId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for componentIdDelete
  /*


Deletes a component. Permissions required: Any of the following:

 */
  componentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the component.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'moveIssuesTo': "moveIssuesTo_example" // String | The ID of the component to replace the deleted component. If this value is null no replacement is made.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.componentIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for configurationTimetrackingDelete
  /*


Disables time tracking.

 */
  configurationTimetrackingDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.configurationTimetrackingDelete(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete
  /*


Deletes a dashboard item property.

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property.
    /*let cloudid = null;*/ /*let dashboardId = "dashboardId_example";*/ /*let itemId = "itemId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.dashboardId,
      incomingOptions.itemId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionOptionIdDelete
  /*


Deletes an option from a select list issue field.

 */
  fieldFieldKeyOptionOptionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field // Number | The ID of the option to be deleted. For example, 3.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 56;*/ apiInstance.fieldFieldKeyOptionOptionIdDelete(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.optionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionOptionIdIssueDelete
  /*


Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.

 */
  fieldFieldKeyOptionOptionIdIssueDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field // Number | The ID of the option to be deselected. For example, 3.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 56;*/ let opts = {
      //  'jql': "jql_example", // String | A JQL query that specifies the issues to be updated. For example, project=10000.
      replaceWith: 56, // Number | The ID of the option that will replace the currently selected option. For example, 2.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldKeyOptionOptionIdIssueDelete(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.optionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for filterIdColumnsDelete
  /*


Reset the user&#39;s column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
  filterIdColumnsDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.filterIdColumnsDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for filterIdDelete
  /*


Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:

 */
  filterIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter to delete.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.filterIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for filterIdFavouriteDelete
  /*


Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
  filterIdFavouriteDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdFavouriteDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for filterIdPermissionPermissionIdDelete
  /*


Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.

 */
  filterIdPermissionPermissionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the filter // Number | The ID of the share permission.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let permissionId = 56;*/ apiInstance.filterIdPermissionPermissionIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.permissionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for groupDelete
  /*


Deletes a group.

 */
  groupDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'groupname': "groupname_example", // String | The name of the group.
      //  'swapGroup': "swapGroup_example" // String | The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupDelete(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for groupUserDelete
  /*


Removes a user from a group. Permissions required: Administer Jira global permission.

 */
  groupUserDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountid': "accountid_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
      //  'groupname': "groupname_example", // String | The name of the group.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.groupUserDelete(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentIdDelete
  /*


a string containing the issue id or key the comment belongs to

 */
  issueIssueIdOrKeyCommentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | id of the comment to be delete // String | a string containing the issue id or key the comment belongs to
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyCommentIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyDelete
  /*


Deletes an issue.

 */
  issueIssueIdOrKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'deleteSubtasks': "deleteSubtasks_example" // String | Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPropertiesPropertyKeyDelete
  /*


Deletes an issue&#39;s property.

 */
  issueIssueIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key or ID of the issue // String | The key of the property.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkDelete
  /*


Deletes the remote issue link from the issue using the link&#39;s global ID.

 */
  issueIssueIdOrKeyRemotelinkDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'globalId': "globalId_example" // String | The global ID of a remote issue link.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyRemotelinkDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyRemotelinkLinkIdDelete
  /*


Deletes a remote issue link from an issue.

 */
  issueIssueIdOrKeyRemotelinkLinkIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of a remote issue link.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let linkId = "linkId_example";*/ apiInstance.issueIssueIdOrKeyRemotelinkLinkIdDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.linkId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyVotesDelete
  /*


Deletes a user&#39;s vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.

 */
  issueIssueIdOrKeyVotesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyVotesDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWatchersDelete
  /*


Deletes a user as a watcher of an issue.

 */
  issueIssueIdOrKeyWatchersDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user. Required if username is omitted, otherwise must be omitted.
      //  'username': "username_example" // String | The name of the user. Required if accountId is omitted, otherwise must be omitted.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWatchersDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogIdDelete
  /*


Deletes a worklog from an issue.

 */
  issueIssueIdOrKeyWorklogIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the worklog // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
      //  'increaseBy': "increaseBy_example", // String | The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
      notifyUsers: true, // Boolean | Indicates whether users watching the issue are notified by email.
      overrideEditableFlag: true, // Boolean | Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyWorklogIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete
  /*


Deletes a worklog property.

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The key of the property // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let worklogId = "worklogId_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      incomingOptions.worklogId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueLinkLinkIdDelete
  /*


Deletes an issue link.

 */
  issueLinkLinkIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue link.
    /*let cloudid = null;*/ /*let linkId = "linkId_example";*/ apiInstance.issueLinkLinkIdDelete(
      incomingOptions.cloudid,
      incomingOptions.linkId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issueLinkTypeIssueLinkTypeIdDelete
  /*


Deletes an issue link type.

 */
  issueLinkTypeIssueLinkTypeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue link type.
    /*let cloudid = null;*/ /*let issueLinkTypeId = "issueLinkTypeId_example";*/ apiInstance.issueLinkTypeIssueLinkTypeIdDelete(
      incomingOptions.cloudid,
      incomingOptions.issueLinkTypeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuePropertiesPropertyKeyDelete
  /*


Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.

 */
  issuePropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the property.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      body: new Jira.InlineObject19(), // InlineObject19 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuePropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuetypeIdDelete
  /*


Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.

 */
  issuetypeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'alternativeIssueTypeId': "alternativeIssueTypeId_example" // String | The ID of the replacement issue type.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for issuetypeIssueTypeIdPropertiesPropertyKeyDelete
  /*


Deletes the issue type property. Permissions required: Administer Jira global permission.

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
    /*let cloudid = null;*/ /*let issueTypeId = "issueTypeId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.issueTypeId,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for mypreferencesDelete
  /*


Deletes a preference of the user, which restores the default value of system defined settings.

 */
  mypreferencesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example" // String | The key of the preference.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.mypreferencesDelete(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for mypreferencesLocaleDelete
  /*


Deletes the locale of the current user, which restores the default setting.

 */
  mypreferencesLocaleDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.mypreferencesLocaleDelete(
      incomingOptions.cloudid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdDelete
  /*


Deletes a permission scheme. Permissions required: Administer Jira global permission.

 */
  permissionschemeSchemeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme being deleted (e.g., 10000).
    /*let cloudid = null;*/ /*let schemeId = 56;*/ apiInstance.permissionschemeSchemeIdDelete(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for permissionschemeSchemeIdPermissionPermissionIdDelete
  /*


Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.

 */
  permissionschemeSchemeIdPermissionPermissionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the permission grant to delete (e.g., 10847) // Number | The ID of the permission scheme to delete the permission grant from (e.g., 10000).
    /*let cloudid = null;*/ /*let permissionId = 56;*/ /*let schemeId = 56;*/ apiInstance.permissionschemeSchemeIdPermissionPermissionIdDelete(
      incomingOptions.cloudid,
      incomingOptions.permissionId,
      incomingOptions.schemeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectCategoryIdDelete
  /*


Deletes a project category.

 */
  projectCategoryIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | ID of the project category to delete.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.projectCategoryIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyAvatarIdDelete
  /*


Deletes a custom avatar from a project. Note that system avatars cannot be deleted.

 */
  projectProjectIdOrKeyAvatarIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the avatar // String | The project ID or (case-sensitive) key.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyAvatarIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyDelete
  /*


Deletes an existing project.

 */
  projectProjectIdOrKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyPropertiesPropertyKeyDelete
  /*


Removes the property from the project.

 */
  projectProjectIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The project property key. Use Get project property keys to get a list of all project property keys.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.propertyKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyRoleIdDelete
  /*


Deletes actors from a project role for the project.

 */
  projectProjectIdOrKeyRoleIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let id = 56;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'group': "group_example", // String | The name of the group to remove from the project role.
      //  'user': "user_example" // String | The user account ID of the user to remove from the project role.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyRoleIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.projectIdOrKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for roleIdActorsDelete
  /*


Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.

 */
  roleIdActorsDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'group': "group_example", // String | The group name of the group to be removed as a default actor.
      //  'user': "user_example" // String | The user account ID of the user to remove as a default actor.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.roleIdActorsDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdDelete
  /*


Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.

 */
  roleIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      swap: 56, // Number | The ID of the project role that will replace the one being deleted.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.roleIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdDelete
  /*


Deletes a screen tab.

 */
  screensScreenIdTabsTabIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 56;*/ /*let tabId = 56;*/ apiInstance.screensScreenIdTabsTabIdDelete(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsIdDelete
  /*


Removes a field from a screen tab.

 */
  screensScreenIdTabsTabIdFieldsIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the field // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let screenId = 56;*/ /*let tabId = 56;*/ apiInstance.screensScreenIdTabsTabIdFieldsIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.screenId,
      incomingOptions.tabId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete
  /*


Deletes an avatar from a project or issue type.

 */
  universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the avatar // String | The ID of the entity item // String | The type of the entity. Valid values are project and issuetype.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let owningObjectId = "owningObjectId_example";*/ /*let type = "type_example";*/ apiInstance.universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.owningObjectId,
      incomingOptions.type,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userColumnsDelete
  /*


Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user&#39;s default columns are reset. Permissions required:

 */
  userColumnsDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userColumnsDelete(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userDelete
  /*


Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).

 */
  userDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'key': "key_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userDelete(
      incomingOptions.cloudid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for userPropertiesPropertyKeyDelete
  /*


Deletes a property from a user. Permissions required:

 */
  userPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The key of the user's property.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
      //  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
      //  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionIdDelete
  /*


Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
  versionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'moveAffectedIssuesTo': "moveAffectedIssuesTo_example", // String | The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
      //  'moveFixIssuesTo': "moveFixIssuesTo_example" // String | The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkDelete
  /*


The version for which to delete ALL existing remote version links

 */
  versionVersionIdRemotelinkDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The version for which to delete ALL existing remote version links
    /*let cloudid = null;*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkDelete(
      incomingOptions.cloudid,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for versionVersionIdRemotelinkGlobalIdDelete
  /*


The version ID of the remote link

 */
  versionVersionIdRemotelinkGlobalIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // String | The global ID of the remote lin // String | The version ID of the remote link
    /*let cloudid = null;*/ /*let globalId = "globalId_example";*/ /*let versionId = "versionId_example";*/ apiInstance.versionVersionIdRemotelinkGlobalIdDelete(
      incomingOptions.cloudid,
      incomingOptions.globalId,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesDelete
  /*


Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
  workflowTransitionsTransitionIdPropertiesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
    /*let cloudid = null;*/ /*let transitionId = 56;*/ let opts = {
      //  'key': "key_example", // String | The name of the transition property to delete, also known as the name of the property.
      //  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
      //  'workflowName': "workflowName_example" // String | The name of the workflow that the transition belongs to.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowTransitionsTransitionIdPropertiesDelete(
      incomingOptions.cloudid,
      incomingOptions.transitionId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDefaultDelete
  /*


Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).

 */
  workflowschemeIdDefaultDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDefaultDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDelete
  /*


Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).

 */
  workflowschemeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftDefaultDelete
  /*


Resets the default workflow for a workflow scheme&#39;s draft. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).

 */
  workflowschemeIdDraftDefaultDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdDraftDefaultDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftDelete
  /*


Deletes a draft workflow scheme.

 */
  workflowschemeIdDraftDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was originally created from.
    /*let cloudid = null;*/ /*let id = 56;*/ apiInstance.workflowschemeIdDraftDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftIssuetypeIssueTypeDelete
  /*


Deletes the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftIssuetypeIssueTypeDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ apiInstance.workflowschemeIdDraftIssuetypeIssueTypeDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdDraftWorkflowDelete
  /*


Deletes the workflow-issue type mapping for a workflow in a workflow scheme&#39;s draft.

 */
  workflowschemeIdDraftWorkflowDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      //  'workflowName': "workflowName_example" // String | The name of the workflow.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdDraftWorkflowDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdIssuetypeIssueTypeDelete
  /*


Deletes the issue type-workflow mapping for an issue type in a workflow scheme.

 */
  workflowschemeIdIssuetypeIssueTypeDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 56;*/ /*let issueType = "issueType_example";*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdIssuetypeIssueTypeDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowschemeIdWorkflowDelete
  /*


Deletes the workflow-issue type mapping for a workflow in a workflow scheme.

 */
  workflowschemeIdWorkflowDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth
    let OAuth = defaultClient.authentications['OAuth'];
    OAuth.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DefaultApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 56;*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
      //  'workflowName': "workflowName_example" // String | The name of the workflow.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeIdWorkflowDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  async patch(entity, options) {
    switch (entity) {
      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
}
module.exports = new JiraService();
