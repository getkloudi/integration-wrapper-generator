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
  'read:me',
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
    return [
      'jira:issue_created',
      'jira:issue_updated',
      'jira:issue_deleted',
      'comment_created',
      'comment_updated',
      'comment_deleted',
      'issue_property_set', //Not added any task for this
      'issue_property_deleted', //Not added any task for this
      'worklog_created',
      'worklog_updated',
      'worklog_deleted',
      'issuelink_created', //Not added any task for this
      'issuelink_deleted', //Not added any task for this
      'project_created',
      'project_updated',
      'project_deleted',
      'sprint_created',
      'sprint_deleted',
      'sprint_updated',
      'sprint_started',
      'sprint_closed',
      'board_created',
      'board_updated',
      'board_deleted',
    ];
  }

  get webhookToTasksMap() {
    return [
      {
        name: 'task.thirdParty.CREATE_JIRA_ISSUE',
        webhook: 'jira:issue_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_ISSUE',
        webhook: 'jira:issue_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_ISSUE',
        webhook: 'jira:issue_deleted',
      },
      {
        name: 'task.thirdParty.CREATE_JIRA_COMMENT',
        webhook: 'comment_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_COMMENT',
        webhook: 'comment_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_COMMENT',
        webhook: 'comment_deleted',
      },
      {
        name: 'task.thirdParty.CREATE_JIRA_WORKLOG',
        webhook: 'worklog_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_WORKLOG',
        webhook: 'worklog_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_WORKLOG',
        webhook: 'worklog_deleted',
      },
      {
        name: 'task.thirdParty.CREATE_JIRA_PROJECT',
        webhook: 'project_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_PROJECT',
        webhook: 'project_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_PROJECT',
        webhook: 'project_deleted',
      },
      {
        name: 'task.thirdParty.CREATE_JIRA_SPRINT',
        webhook: 'sprint_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_SPRINT',
        webhook: 'sprint_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_SPRINT',
        webhook: 'sprint_deleted',
      },
      {
        name: 'task.thirdParty.STARTED_JIRA_SPRINT',
        webhook: 'sprint_started',
      },
      {
        name: 'task.thirdParty.CLOSED_JIRA_SPRINT',
        webhook: 'sprint_closed',
      },
      {
        name: 'task.thirdParty.CREATE_JIRA_BOARD',
        webhook: 'board_created',
      },
      {
        name: 'task.thirdParty.UPDATE_JIRA_BOARD',
        webhook: 'board_updated',
      },
      {
        name: 'task.thirdParty.DELETE_JIRA_BOARD',
        webhook: 'board_deleted',
      },
    ];
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

  async connect(authParams, metadata) {
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
    projects = projects.map((item) => ({
      ...item,
      organizationId: incomingOptions.cloudid,
      organizationName: incomingOptions.cloudDomainName,
    }));
    return { data: projects };
  }

  async registerWebhooks(incomingOptions) {
    let res = await this.get('MYSELF', incomingOptions);

    const email = res.data.emailAddress;
    const apiKey = incomingOptions.webhookApiKey;
    const webhookURL = `${nconf.get('WEBHOOK_API_URI')}/${
      incomingOptions.userId
    }/${incomingOptions.projectId}/JIRA/${
      incomingOptions.project.organizationId
    }/${incomingOptions.project.projectId}/`;
    const webhookEvents = Array.from(new Set(this.webhooks));

    res = await Axios.get(
      `https://${incomingOptions.cloudDomainName}.atlassian.net/rest/webhooks/1.0/webhook/`,
      {
        auth: { username: email, password: apiKey },
        headers: { Accept: 'application/json' },
      }
    );
    const webhooks = res.data.filter(
      (item) =>
        item.url === webhookURL &&
        item.events.sort().toString() === webhookEvents.sort().toString()
    );
    if (webhooks && webhooks.length > 0) return 'Ok';

    try {
      res = await Axios.post(
        `https://${incomingOptions.cloudDomainName}.atlassian.net/rest/webhooks/1.0/webhook/`,
        {
          name: 'Webhook for Kloudi',
          url: webhookURL,
          events: webhookEvents,
        },
        {
          auth: { username: email, password: apiKey },
          headers: { Accept: 'application/json' },
        }
      );
    } catch (err) {
      console.log(err);
    } finally {
      if (res.status == 201) return 'Ok';
      return 'ERROR';
    }
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: ['task.pepper.SYNC_JIRA_USER'],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          third_party_project_id: incomingOptions.thirdPartyProject.projectId,
          third_party_organization_id:
            incomingOptions.thirdPartyProject.organizationId,
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
      return 'Ok';
    }
  }

  async get(entity, options) {
    switch (entity) {
      case 'COMMENT_COMMENT_ID_PROPERTIES':
        /*

Get comment property keys


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

Get comment property


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

      case 'WORKFLOW_RULE_CONFIG':
        /*

Get workflow transition rule configurations


      Function parameters for this API cloudid,types,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowRuleConfigGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REST_ATLASSIAN_CONNECT1_APP_MODULE_DYNAMIC':
        /*

Get modules


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AppModuleDynamicGet(
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

Get all project categories


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

Get project category by id


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

      case 'JQL_AUTOCOMPLETEDATA':
        /*

Get field reference data


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

Get field auto complete suggestions


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

      case 'ISSUE_PICKER':
        /*

Get issue picker suggestions


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

      case 'SEARCH':
        /*

Search for issues using JQL (GET)


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

      case 'AVATAR_TYPE_SYSTEM':
        /*

Get system avatars by type


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

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID':
        /*

Get avatars


      Function parameters for this API cloudid,type,entityId
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

      case 'ROLE_ID_ACTORS':
        /*

Get default actors for project role


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

      case 'ISSUESECURITYSCHEMES':
        /*

Get issue security schemes


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

Get issue security scheme


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

      case 'ATTACHMENT_ID_EXPAND_HUMAN':
        /*

Get all metadata for an expanded attachment


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

Get contents metadata for an expanded attachment


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

Get attachment metadata


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

Get Jira attachment settings


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

      case 'ISSUESECURITYSCHEMES_ISSUE_SECURITY_SCHEME_ID_MEMBERS':
        /*

Get issue security level members


      Function parameters for this API cloudid,issueSecuritySchemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.issuesecurityschemesIssueSecuritySchemeIdMembersGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'SECURITYLEVEL_ID':
        /*

Get issue security level


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

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE':
        /*

Get project roles for project


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

Get project role for project


      Function parameters for this API cloudid,projectIdOrKey,id
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

Get project role details


      Function parameters for this API cloudid,projectIdOrKey,opts
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

      case 'ROLE':
        /*

Get all project roles


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

      case 'ROLE_ID':
        /*

Get project role by ID


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

      case 'MYPERMISSIONS':
        /*

Get my permissions


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

      case 'PERMISSIONS':
        /*

Get all permissions


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

      case 'FIELD_FIELD_ID_SCREENS':
        /*

Get screens for a field


      Function parameters for this API cloudid,fieldId,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldIdScreensGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS':
        /*

Get all screens


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

Get available screen fields


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

Get all screen tabs


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

Get all screen tab fields


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

      case 'SCREENSCHEME':
        /*

Get screen schemes


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.screenschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_ASSIGNABLE_MULTI_PROJECT_SEARCH':
        /*

Find users assignable to projects


      Function parameters for this API cloudid,projectKeys,opts
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

Find users assignable to issues


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

      case 'USER_PERMISSION_SEARCH':
        /*

Find users with permissions


      Function parameters for this API cloudid,permissions,opts
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

Find users for picker


      Function parameters for this API cloudid,query,opts
        */
        return new Promise((resolve, reject) => {
          this.userPickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_SEARCH':
        /*

Find users


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

Find users by query


      Function parameters for this API cloudid,query,opts
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

Find user keys by query


      Function parameters for this API cloudid,query,opts
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

Find users with browse permission


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

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*

Get issue watchers


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

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES':
        /*

Get worklog property keys


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

Get worklog property


      Function parameters for this API cloudid,issueIdOrKey,worklogId,propertyKey
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

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*

Get workflow transition properties


      Function parameters for this API cloudid,transitionId,workflowName,opts
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

      case 'SETTINGS_COLUMNS':
        /*

Get issue navigator default columns


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

      case 'AUDITING_RECORD':
        /*

Get audit records


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

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES':
        /*

Get project property keys


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

Get project property


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

      case 'PROJECT_PROJECT_ID_OR_KEY_VERSION':
        /*

Get project versions paginated


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

Get project versions


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

      case 'VERSION_ID':
        /*

Get version


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

Get version&#39;s related issues count


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

Get version&#39;s unresolved issues count


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

      case 'NOTIFICATIONSCHEME':
        /*

Get notification schemes paginated


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

Get notification scheme


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

      case 'USER_BULK':
        /*

Bulk get users


      Function parameters for this API cloudid,accountId,opts
        */
        return new Promise((resolve, reject) => {
          this.userBulkGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_BULK_MIGRATION':
        /*

Get account IDs for users


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.userBulkMigrationGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_COLUMNS':
        /*

Get user default columns


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

      case 'USER_EMAIL_BULK':
        /*

Get user email bulk


      Function parameters for this API cloudid,accountId
        */
        return new Promise((resolve, reject) => {
          this.userEmailBulkGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_EMAIL':
        /*

Get user email


      Function parameters for this API cloudid,accountId
        */
        return new Promise((resolve, reject) => {
          this.userEmailGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER':
        /*

Get user


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

Get user groups


      Function parameters for this API cloudid,accountId,opts
        */
        return new Promise((resolve, reject) => {
          this.userGroupsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USERS':
        /*

Get all users default


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.usersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USERS_SEARCH':
        /*

Get all users


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.usersSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'STATUS':
        /*

Get all statuses


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

Get status


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

      case 'ISSUE_CREATEMETA':
        /*

Get create issue metadata


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

Get change logs


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

      case 'ISSUE_ISSUE_ID_OR_KEY_EDITMETA':
        /*

Get edit issue metadata


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

Get issue


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

      case 'ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS':
        /*

Get transitions


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

      case 'MYPREFERENCES':
        /*

Get preference


      Function parameters for this API cloudid,key
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

Get locale


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

Get current user


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

      case 'ISSUETYPESCHEME':
        /*

Get all issue type schemes


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPESCHEME_MAPPING':
        /*

Get issue type scheme items


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeschemeMappingGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPESCHEME_PROJECT':
        /*

Get issue type schemes for projects


      Function parameters for this API cloudid,projectId,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypeschemeProjectGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT':
        /*

Get comments


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

Get comment


      Function parameters for this API cloudid,issueIdOrKey,id,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_DEFAULT_SHARE_SCOPE':
        /*

Get default share scope


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

      case 'FILTER_ID_PERMISSION':
        /*

Get share permissions


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

Get share permission


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

      case 'WORKFLOWSCHEME_PROJECT':
        /*

Get workflow scheme project associations


      Function parameters for this API cloudid,projectId
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeProjectGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATARS':
        /*

Get all project avatars


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

      case 'ISSUETYPE':
        /*

Get all issue types for user


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

Get alternative issue types


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

Get issue type


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

      case 'WORKFLOWSCHEME':
        /*

Get all workflow schemes


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*

Get default workflow


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

      case 'WORKFLOWSCHEME_ID':
        /*

Get workflow scheme


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

Get workflow for issue type in workflow scheme


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

Get issue types for workflows in workflow scheme


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

      case 'ISSUE_LINK_TYPE':
        /*

Get issue link types


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

Get issue link type


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

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES':
        /*

Get issue type property keys


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

Get issue type property


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

      case 'STATUSCATEGORY':
        /*

Get all status categories


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

Get status category


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

      case 'PROJECT_TYPE_ACCESSIBLE':
        /*

Get licensed project types


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.projectTypeAccessibleGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_TYPE':
        /*

Get all project types


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

Get accessible project type by key


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

Get project type by key


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

      case 'FILTER_FAVOURITE':
        /*

Get favorite filters


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

Get filters


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

Get columns


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

Get filter


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

      case 'FILTER_MY':
        /*

Get my filters


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

Search for filters


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

      case 'GROUPUSERPICKER':
        /*

Find users and groups


      Function parameters for this API cloudid,query,opts
        */
        return new Promise((resolve, reject) => {
          this.groupuserpickerGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOW':
        /*

Get all workflows


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

      case 'WORKFLOW_SEARCH':
        /*

Get workflows paginated


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.workflowSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME':
        /*

Get all permission schemes


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

Get permission scheme


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

Get permission scheme grants


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

Get permission scheme grant


      Function parameters for this API cloudid,schemeId,permissionId,opts
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

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*

Get remote issue links


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

Get remote issue link by ID


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

      case 'PRIORITY':
        /*

Get priorities


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

Get priority


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

      case 'APPLICATION_PROPERTIES_ADVANCED_SETTINGS':
        /*

Get advanced settings


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

Get application property


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

      case 'CONFIGURATION':
        /*

Get global settings


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

      case 'TASK_TASK_ID':
        /*

Get task


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

      case 'ISSUE_ISSUE_ID_OR_KEY_VOTES':
        /*

Get votes


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

      case 'SERVER_INFO':
        /*

Get Jira instance info


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

      case 'APPLICATIONROLE':
        /*

Get all application roles


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

Get application role


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

      case 'COMPONENT_ID':
        /*

Get component


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

Get component issues count


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

      case 'PROJECT_PROJECT_ID_OR_KEY_COMPONENT':
        /*

Get project components paginated


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

Get project components


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

      case 'CUSTOM_FIELD_FIELD_ID_OPTION':
        /*

Get options for field


      Function parameters for this API cloudid,fieldId,opts
        */
        return new Promise((resolve, reject) => {
          this.customFieldFieldIdOptionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CUSTOM_FIELD_OPTION_ID':
        /*

Get custom field option


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

      case 'RESOLUTION':
        /*

Get resolutions


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

Get resolution


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

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*

Get draft default workflow


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

Get draft workflow scheme


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

Get workflow for issue type in draft workflow scheme


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

Get issue types for workflows in draft workflow scheme


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

      case 'GROUP':
        /*

Get group


      Function parameters for this API cloudid,groupname,opts
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

Get users from group


      Function parameters for this API cloudid,groupname,opts
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

Find groups


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

      case 'LABEL':
        /*

Get all labels


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.labelGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES':
        /*

Get user property keys


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

Get user property


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

      case 'ISSUETYPESCREENSCHEME':
        /*

Get issue type screen schemes


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypescreenschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPESCREENSCHEME_MAPPING':
        /*

Get issue type screen scheme items


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypescreenschemeMappingGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUETYPESCREENSCHEME_PROJECT':
        /*

Get issue type screen schemes for projects


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.issuetypescreenschemeProjectGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELD_FIELD_KEY_OPTION':
        /*

Get all issue field options


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

Get issue field option


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

Get selectable issue field options


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

Get visible issue field options


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

      case 'ISSUE_LINK_LINK_ID':
        /*

Get issue link


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

      case 'FIELD_FIELD_ID_CONTEXTS':
        /*

Get contexts for a field


      Function parameters for this API cloudid,fieldId,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldIdContextsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD':
        /*

Get fields


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

      case 'FIELD_SEARCH':
        /*

Get fields paginated


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WEBHOOK_FAILED':
        /*

Get failed webhooks


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.webhookFailedGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WEBHOOK':
        /*

Get dynamic webhooks for app


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.webhookGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELDCONFIGURATION':
        /*

Get all field configurations


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELDCONFIGURATION_ID_FIELDS':
        /*

Get field configuration items


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationIdFieldsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELDCONFIGURATIONSCHEME':
        /*

Get all field configuration schemes


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationschemeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELDCONFIGURATIONSCHEME_MAPPING':
        /*

Get field configuration issue type items


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationschemeMappingGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'FIELDCONFIGURATIONSCHEME_PROJECT':
        /*

Get field configuration schemes for projects


      Function parameters for this API cloudid,projectId,opts
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationschemeProjectGet(
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

Get project issue security scheme


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

      case 'PROJECT_PROJECT_KEY_OR_ID_PERMISSIONSCHEME':
        /*

Get assigned permission scheme


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

Get project issue security levels


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

      case 'PROJECT':
        /*

Get all projects


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

      case 'PROJECT_PROJECT_ID_HIERARCHY':
        /*

Get project issue type hierarchy


      Function parameters for this API cloudid,projectId
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdHierarchyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*

Get project


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

      case 'PROJECT_PROJECT_ID_OR_KEY_STATUSES':
        /*

Get all statuses for project


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

      case 'PROJECT_PROJECT_KEY_OR_ID_NOTIFICATIONSCHEME':
        /*

Get project notification scheme


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

      case 'PROJECT_SEARCH':
        /*

Get projects paginated


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

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES':
        /*

Get issue property keys


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

Get issue property


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

      case 'CONFIGURATION_TIMETRACKING':
        /*

Get selected time tracking provider


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

Get all time tracking providers


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

Get time tracking settings


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

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES':
        /*

Get dashboard item property keys


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

Get dashboard item property


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

Get all dashboards


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

Get dashboard


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

      case 'DASHBOARD_SEARCH':
        /*

Search for dashboards


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.dashboardSearchGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REST_ATLASSIAN_CONNECT1_ADDONS_ADDON_KEY_PROPERTIES':
        /*

Get app properties


      Function parameters for this API cloudid,addonKey
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AddonsAddonKeyPropertiesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'REST_ATLASSIAN_CONNECT1_ADDONS_ADDON_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Get app property


      Function parameters for this API cloudid,addonKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG':
        /*

Get issue worklogs


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

Get worklog


      Function parameters for this API cloudid,issueIdOrKey,id,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKLOG_DELETED':
        /*

Get IDs of deleted worklogs


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

Get IDs of updated worklogs


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

      case 'PROJECTVALIDATE_KEY':
        /*

Validate project key


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

Get valid project key


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

Get valid project name


      Function parameters for this API cloudid,name
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

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for commentCommentIdPropertiesGet
  /*
Get comment property keys

 */
  commentCommentIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentPropertiesApi(); // Object | Cloudi of the projec // String | The ID of the comment.
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
Get comment property

 */
  commentCommentIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentPropertiesApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property.
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

  // This is a function for workflowRuleConfigGet
  /*
Get workflow transition rule configurations

 */
  workflowRuleConfigGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionRulesApi(); // Object | Cloudi of the projec // [String] | The types of the transition rules to return.
    /*let cloudid = null;*/ /*let types = ["null"];*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 10, // Number | The maximum number of items to return per page.
      keys: ['null'], // [String] | The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowRuleConfigGet(
      incomingOptions.cloudid,
      incomingOptions.types,
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

  // This is a function for restAtlassianConnect1AppModuleDynamicGet
  /*
Get modules

 */
  restAtlassianConnect1AppModuleDynamicGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.DynamicModulesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.restAtlassianConnect1AppModuleDynamicGet(
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

  // This is a function for projectCategoryGet
  /*
Get all project categories

 */
  projectCategoryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectCategoriesApi(); // Object | Cloudi of the project
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
Get project category by id

 */
  projectCategoryIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectCategoriesApi(); // Object | Cloudi of the projec // Number | The ID of the project category.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.projectCategoryIdGet(
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

  // This is a function for jqlAutocompletedataGet
  /*
Get field reference data

 */
  jqlAutocompletedataGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JQLApi(); // Object | Cloudi of the project
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
Get field auto complete suggestions

 */
  jqlAutocompletedataSuggestionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JQLApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'fieldName': "fieldName_example", // String | The name of the field.
      //  'fieldValue': "fieldValue_example", // String | The partial field item name entered by the user.
      //  'predicateName': "predicateName_example", // String | The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.
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

  // This is a function for issuePickerGet
  /*
Get issue picker suggestions

 */
  issuePickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSearchApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'query': "query_example", // String | A string to match against text fields in the issue such as title, description, or comments.
      //  'currentJQL': "currentJQL_example", // String | A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.
      //  'currentIssueKey': "currentIssueKey_example", // String | The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.
      //  'currentProjectId': "currentProjectId_example", // String | The ID of a project that suggested issues must belong to.
      showSubTasks: true, // Boolean | Indicate whether to include subtasks in the suggestions list.
      showSubTaskParent: true, // Boolean | When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchGet
  /*
Search for issues using JQL (GET)

 */
  searchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSearchApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'jql': "jql_example", // String | The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:   *  If no JQL expression is provided, all issues are returned.  *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.  *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only.
      validateQuery: "'strict'", // String | Determines how to validate the JQL query and treat the validation results. Supported values are:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value.
      fields: ["'*navigable'"], // [String] | A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
      properties: ['null'], // [String] | A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified.
      fieldsByKeys: false, // Boolean | Reference fields by their key (rather than ID).
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

  // This is a function for avatarTypeSystemGet
  /*
Get system avatars by type

 */
  avatarTypeSystemGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AvatarsApi(); // Object | Cloudi of the projec // String | The avatar type.
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

  // This is a function for universalAvatarTypeTypeOwnerEntityIdGet
  /*
Get avatars

 */
  universalAvatarTypeTypeOwnerEntityIdGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AvatarsApi(); // Object | Cloudi of the projec // String | The avatar type // String | The ID of the item the avatar is associated with.
    /*let cloudid = null;*/ /*let type = "type_example";*/ /*let entityId = "entityId_example";*/ apiInstance.universalAvatarTypeTypeOwnerEntityIdGet(
      incomingOptions.cloudid,
      incomingOptions.type,
      incomingOptions.entityId,
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
Get default actors for project role

 */
  roleIdActorsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.roleIdActorsGet(
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

  // This is a function for issuesecurityschemesGet
  /*
Get issue security schemes

 */
  issuesecurityschemesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSecuritySchemesApi(); // Object | Cloudi of the project
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
Get issue security scheme

 */
  issuesecurityschemesIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSecuritySchemesApi(); // Object | Cloudi of the projec // Number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.issuesecurityschemesIdGet(
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

  // This is a function for attachmentIdExpandHumanGet
  /*
Get all metadata for an expanded attachment

 */
  attachmentIdExpandHumanGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
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
Get contents metadata for an expanded attachment

 */
  attachmentIdExpandRawGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
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
Get attachment metadata

 */
  attachmentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
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
Get Jira attachment settings

 */
  attachmentMetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the project
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

  // This is a function for issuesecurityschemesIssueSecuritySchemeIdMembersGet
  /*
Get issue security level members

 */
  issuesecurityschemesIssueSecuritySchemeIdMembersGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSecurityLevelApi(); // Object | Cloudi of the projec // Number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
    /*let cloudid = null;*/ /*let issueSecuritySchemeId = 789;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      issueSecurityLevelId: [null], // [Number] | The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`.
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuesecurityschemesIssueSecuritySchemeIdMembersGet(
      incomingOptions.cloudid,
      incomingOptions.issueSecuritySchemeId,
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
Get issue security level

 */
  securitylevelIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSecurityLevelApi(); // Object | Cloudi of the projec // String | The ID of the issue security level.
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

  // This is a function for projectProjectIdOrKeyRoleGet
  /*
Get project roles for project

 */
  projectProjectIdOrKeyRoleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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
Get project role for project

 */
  projectProjectIdOrKeyRoleIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let id = 789;*/ apiInstance.projectProjectIdOrKeyRoleIdGet(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.projectIdOrKey,
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

  // This is a function for projectProjectIdOrKeyRoledetailsGet
  /*
Get project role details

 */
  projectProjectIdOrKeyRoledetailsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      currentMember: false, // Boolean | Whether the roles should be filtered to include only those the user is assigned to.
      excludeConnectAddons: false, // Boolean |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyRoledetailsGet(
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

  // This is a function for roleGet
  /*
Get all project roles

 */
  roleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the project
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

  // This is a function for roleIdGet
  /*
Get project role by ID

 */
  roleIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.roleIdGet(
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

  // This is a function for mypermissionsGet
  /*
Get my permissions

 */
  mypermissionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'projectKey': "projectKey_example", // String | The key of project. Ignored if `projectId` is provided.
      //  'projectId': "projectId_example", // String | The ID of project.
      //  'issueKey': "issueKey_example", // String | The key of the issue. Ignored if `issueId` is provided.
      //  'issueId': "issueId_example", // String | The ID of the issue.
      //  'permissions': "permissions_example", // String | A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).
      //  'projectUuid': "projectUuid_example", // String |
      //  'projectConfigurationUuid': "projectConfigurationUuid_example" // String |
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

  // This is a function for permissionsGet
  /*
Get all permissions

 */
  permissionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionsApi(); // Object | Cloudi of the project
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

  // This is a function for fieldFieldIdScreensGet
  /*
Get screens for a field

 */
  fieldFieldIdScreensGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // String | The ID of the field to return screens for.
    /*let cloudid = null;*/ /*let fieldId = "fieldId_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldIdScreensGet(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
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

  // This is a function for screensGet
  /*
Get all screens

 */
  screensGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdAvailableFieldsGet
  /*
Get available screen fields

 */
  screensScreenIdAvailableFieldsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen.
    /*let cloudid = null;*/ /*let screenId = 789;*/ apiInstance.screensScreenIdAvailableFieldsGet(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsGet
  /*
Get all screen tabs

 */
  screensScreenIdTabsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen.
    /*let cloudid = null;*/ /*let screenId = 789;*/ let opts = {
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsGet
  /*
Get all screen tab fields

 */
  screensScreenIdTabsTabIdFieldsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ let opts = {
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screenschemeGet
  /*
Get screen schemes

 */
  screenschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 25, // Number | The maximum number of items to return per page.
      id: [null], // [Number] | The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.screenschemeGet(
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

  // This is a function for userAssignableMultiProjectSearchGet
  /*
Find users assignable to projects

 */
  userAssignableMultiProjectSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the projec // String | A list of project keys (case sensitive). This parameter accepts a comma-separated list.
    /*let cloudid = null;*/ /*let projectKeys = "projectKeys_example";*/ let opts = {
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'accountId': "accountId_example", // String | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
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
      incomingOptions.projectKeys,
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
Find users assignable to issues

 */
  userAssignableSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified.
      //  'sessionId': "sessionId_example", // String | The sessionId of this request. SessionId is the same until the assignee is set.
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'accountId': "accountId_example", // String | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
      //  'project': "project_example", // String | The project ID or project key (case sensitive). Required, unless `issueKey` is specified.
      //  'issueKey': "issueKey_example", // String | The key of the issue. Required, unless `project` is specified.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue.
      actionDescriptorId: 56, // Number | The ID of the transition.
      recommend: false, // Boolean |
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

  // This is a function for userPermissionSearchGet
  /*
Find users with permissions

 */
  userPermissionSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the projec // String | A comma separated list of permissions. Permissions can be specified as any:   *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).  *  custom project permission added by Connect apps.  *  (deprecated) one of the following:           *  ASSIGNABLE\\_USER      *  ASSIGN\\_ISSUE      *  ATTACHMENT\\_DELETE\\_ALL      *  ATTACHMENT\\_DELETE\\_OWN      *  BROWSE      *  CLOSE\\_ISSUE      *  COMMENT\\_DELETE\\_ALL      *  COMMENT\\_DELETE\\_OWN      *  COMMENT\\_EDIT\\_ALL      *  COMMENT\\_EDIT\\_OWN      *  COMMENT\\_ISSUE      *  CREATE\\_ATTACHMENT      *  CREATE\\_ISSUE      *  DELETE\\_ISSUE      *  EDIT\\_ISSUE      *  LINK\\_ISSUE      *  MANAGE\\_WATCHER\\_LIST      *  MODIFY\\_REPORTER      *  MOVE\\_ISSUE      *  PROJECT\\_ADMIN      *  RESOLVE\\_ISSUE      *  SCHEDULE\\_ISSUE      *  SET\\_ISSUE\\_SECURITY      *  TRANSITION\\_ISSUE      *  VIEW\\_VERSION\\_CONTROL      *  VIEW\\_VOTERS\\_AND\\_WATCHERS      *  VIEW\\_WORKFLOW\\_READONLY      *  WORKLOG\\_DELETE\\_ALL      *  WORKLOG\\_DELETE\\_OWN      *  WORKLOG\\_EDIT\\_ALL      *  WORKLOG\\_EDIT\\_OWN      *  WORK\\_ISSUE
    /*let cloudid = null;*/ /*let permissions = "permissions_example";*/ let opts = {
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'accountId': "accountId_example", // String | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
      //  'issueKey': "issueKey_example", // String | The issue key for the issue.
      //  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive).
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
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
      incomingOptions.permissions,
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
Find users for picker

 */
  userPickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the projec // String | A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*.
    /*let cloudid = null;*/ /*let query = "query_example";*/ let opts = {
      maxResults: 50, // Number | The maximum number of items to return. The total number of matched users is returned in `total`.
      showAvatar: false, // Boolean | Include the URI to the user's avatar.
      exclude: ['null'], // [String] | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      excludeAccountIds: ['null'], // [String] | A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`.
      //  'avatarSize': "avatarSize_example", // String |
      excludeConnectUsers: false, // Boolean |
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
      incomingOptions.query,
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
Find users

 */
  userSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'query': "query_example", // String | A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified.
      //  'username': "username_example", // String |
      //  'accountId': "accountId_example", // String | A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'property': "property_example" // String | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified.
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
Find users by query

 */
  userSearchQueryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the projec // String | The search query.
    /*let cloudid = null;*/ /*let query = "query_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
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
      incomingOptions.query,
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

  // This is a function for userSearchQueryKeyGet
  /*
Find user keys by query

 */
  userSearchQueryKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the projec // String | The search query.
    /*let cloudid = null;*/ /*let query = "query_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
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
      incomingOptions.query,
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

  // This is a function for userViewissueSearchGet
  /*
Find users with browse permission

 */
  userViewissueSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserSearchApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'query': "query_example", // String | A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'accountId': "accountId_example", // String | A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
      //  'issueKey': "issueKey_example", // String | The issue key for the issue. Required, unless `projectKey` is specified.
      //  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive). Required, unless `issueKey` is specified.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
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

  // This is a function for issueIssueIdOrKeyWatchersGet
  /*
Get issue watchers

 */
  issueIssueIdOrKeyWatchersGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWatchersApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
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

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesGet
  /*
Get worklog property keys

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogPropertiesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog.
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
Get worklog property

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogPropertiesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog // String | The key of the property.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let worklogId = "worklogId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.worklogId,
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

  // This is a function for workflowTransitionsTransitionIdPropertiesGet
  /*
Get workflow transition properties

 */
  workflowTransitionsTransitionIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionPropertiesApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition // String | The name of the workflow that the transition belongs to.
    /*let cloudid = null;*/ /*let transitionId = 789;*/ /*let workflowName = "workflowName_example";*/ let opts = {
      includeReservedKeys: false, // Boolean | Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.
      //  'key': "key_example", // String | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
      workflowMode: "'live'", // String | The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.
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
      incomingOptions.workflowName,
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

  // This is a function for settingsColumnsGet
  /*
Get issue navigator default columns

 */
  settingsColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueNavigatorSettingsApi(); // Object | Cloudi of the project
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

  // This is a function for auditingRecordGet
  /*
Get audit records

 */
  auditingRecordGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.AuditRecordsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      offset: 0, // Number | The number of records to skip before returning the first result.
      limit: 1000, // Number | The maximum number of results to return.
      //  'filter': "filter_example", // String | The query string.
      from: new Date('2013-10-20T19:20:30+01:00'), // Date | The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.
      to: new Date('2013-10-20T19:20:30+01:00'), // Date | The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.
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

  // This is a function for projectProjectIdOrKeyPropertiesGet
  /*
Get project property keys

 */
  projectProjectIdOrKeyPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPropertiesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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
Get project property

 */
  projectProjectIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPropertiesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
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

  // This is a function for projectProjectIdOrKeyVersionGet
  /*
Get project versions paginated

 */
  projectProjectIdOrKeyVersionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by version description.  *  `name` Sorts by version name.  *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  `sequence` Sorts by the order of appearance in the user interface.  *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.
      //  'query': "query_example", // String | Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
      //  'status': "status_example", // String | A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `issuesstatus` Returns the number of issues in each status category for each version.  *  `operations` Returns actions that can be performed on the specified version.
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
Get project versions

 */
  projectProjectIdOrKeyVersionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.
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

  // This is a function for versionIdGet
  /*
Get version

 */
  versionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.
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
Get version&#39;s related issues count

 */
  versionIdRelatedIssueCountsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version.
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
Get version&#39;s unresolved issues count

 */
  versionIdUnresolvedIssueCountGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version.
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

  // This is a function for notificationschemeGet
  /*
Get notification schemes paginated

 */
  notificationschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueNotificationSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
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
Get notification scheme

 */
  notificationschemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueNotificationSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
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

  // This is a function for userBulkGet
  /*
Bulk get users

 */
  userBulkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // [String] | The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.
    /*let cloudid = null;*/ /*let accountId = ["5b10ac8d82e05b22cc7d4ef5"];*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 10, // Number | The maximum number of items to return per page.
      username: ['null'], // [String] | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      key: ['null'], // [String] | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
      incomingOptions.accountId,
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

  // This is a function for userBulkMigrationGet
  /*
Get account IDs for users

 */
  userBulkMigrationGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 10, // Number | The maximum number of items to return per page.
      username: ['null'], // [String] | Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present.
      key: ['null'], // [String] | Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userBulkMigrationGet(
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
Get user default columns

 */
  userColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userEmailBulkGet
  /*
Get user email bulk

 */
  userEmailBulkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // [String] | The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).
    /*let cloudid = null;*/ /*let accountId = ["null"];*/ apiInstance.userEmailBulkGet(
      incomingOptions.cloudid,
      incomingOptions.accountId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userEmailGet
  /*
Get user email

 */
  userEmailGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.
    /*let cloudid = null;*/ /*let accountId = "accountId_example";*/ apiInstance.userEmailGet(
      incomingOptions.cloudid,
      incomingOptions.accountId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userGet
  /*
Get user

 */
  userGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
      //  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` includes all groups and nested groups to which the user belongs.  *  `applicationRoles` includes details of all the applications to which the user has access.
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
Get user groups

 */
  userGroupsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    /*let cloudid = null;*/ /*let accountId = "accountId_example";*/ let opts = {
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'key': "key_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
      incomingOptions.accountId,
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

  // This is a function for usersGet
  /*
Get all users default

 */
  usersGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return.
      maxResults: 50, // Number | The maximum number of items to return.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersGet(
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

  // This is a function for usersSearchGet
  /*
Get all users

 */
  usersSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return.
      maxResults: 50, // Number | The maximum number of items to return.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersSearchGet(
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

  // This is a function for statusGet
  /*
Get all statuses

 */
  statusGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowStatusesApi(); // Object | Cloudi of the project
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
Get status

 */
  statusIdOrNameGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowStatusesApi(); // Object | Cloudi of the projec // String | The ID or name of the status.
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

  // This is a function for issueCreatemetaGet
  /*
Get create issue metadata

 */
  issueCreatemetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      projectIds: ['null'], // [String] | List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
      projectKeys: ['null'], // [String] | List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
      issuetypeIds: ['null'], // [String] | List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
      issuetypeNames: ['null'], // [String] | List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).
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
Get change logs

 */
  issueIssueIdOrKeyChangelogGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
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

  // This is a function for issueIssueIdOrKeyEditmetaGet
  /*
Get edit issue metadata

 */
  issueIssueIdOrKeyEditmetaGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      overrideScreenSecurity: false, // Boolean | Whether hidden fields should be returned. Available to connect app users with admin permissions.
      overrideEditableFlag: false, // Boolean | Whether non-editable fields should be returned. Available to connect app users with admin permissions.
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
Get issue

 */
  issueIssueIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      fields: ["'*all'"], // [String] | A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all (default) fields except description.  *  `*navigable,-comment` Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.
      fieldsByKeys: false, // Boolean | Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.
      properties: ["'null'"], // [String] | A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  `*all` Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  `*all` Returns all properties.  *  `*all,-prop1` Returns all properties except `prop1`.  *  `prop1,prop2` Returns `prop1` and `prop2` properties.  This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.
      updateHistory: false, // Boolean | Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field.
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

  // This is a function for issueIssueIdOrKeyTransitionsGet
  /*
Get transitions

 */
  issueIssueIdOrKeyTransitionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).
      //  'transitionId': "transitionId_example", // String | The ID of the transition.
      skipRemoteOnlyCondition: false, // Boolean | Whether transitions with the condition *Hide From User Condition* are included in the response.
      includeUnavailableTransitions: false, // Boolean | Whether details of transitions that fail a condition are included in the response
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

  // This is a function for mypreferencesGet
  /*
Get preference

 */
  mypreferencesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the projec // String | The key of the preference.
    /*let cloudid = null;*/ /*let key = "key_example";*/ apiInstance.mypreferencesGet(
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

  // This is a function for mypreferencesLocaleGet
  /*
Get locale

 */
  mypreferencesLocaleGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the project
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
Get current user

 */
  myselfGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` Returns all groups, including nested groups, the user belongs to.  *  `applicationRoles` Returns the application roles the user is assigned to.
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

  // This is a function for issuetypeschemeGet
  /*
Get all issue type schemes

 */
  issuetypeschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      id: [null], // [Number] | The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeschemeGet(
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

  // This is a function for issuetypeschemeMappingGet
  /*
Get issue type scheme items

 */
  issuetypeschemeMappingGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      issueTypeSchemeId: [null], // [Number] | The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeschemeMappingGet(
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

  // This is a function for issuetypeschemeProjectGet
  /*
Get issue type schemes for projects

 */
  issuetypeschemeProjectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeSchemesApi(); // Object | Cloudi of the projec // [Number] | The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
    /*let cloudid = null;*/ /*let projectId = [null];*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypeschemeProjectGet(
      incomingOptions.cloudid,
      incomingOptions.projectId,
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
Get comments

 */
  issueIssueIdOrKeyCommentGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
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
Get comment

 */
  issueIssueIdOrKeyCommentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the comment.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
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
      incomingOptions.issueIdOrKey,
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

  // This is a function for filterDefaultShareScopeGet
  /*
Get default share scope

 */
  filterDefaultShareScopeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the project
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

  // This is a function for filterIdPermissionGet
  /*
Get share permissions

 */
  filterIdPermissionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.filterIdPermissionGet(
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
Get share permission

 */
  filterIdPermissionPermissionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the projec // Number | The ID of the filter // Number | The ID of the share permission.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let permissionId = 789;*/ apiInstance.filterIdPermissionPermissionIdGet(
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

  // This is a function for workflowschemeProjectGet
  /*
Get workflow scheme project associations

 */
  workflowschemeProjectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeProjectAssociationsApi(); // Object | Cloudi of the projec // [Number] | The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.
    /*let cloudid = null;*/ /*let projectId = [10010];*/ apiInstance.workflowschemeProjectGet(
      incomingOptions.cloudid,
      incomingOptions.projectId,
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
Get all project avatars

 */
  projectProjectIdOrKeyAvatarsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectAvatarsApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project.
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

  // This is a function for issuetypeGet
  /*
Get all issue types for user

 */
  issuetypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the project
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
Get alternative issue types

 */
  issuetypeIdAlternativesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
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
Get issue type

 */
  issuetypeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
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

  // This is a function for workflowschemeGet
  /*
Get all workflow schemes

 */
  workflowschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowschemeGet(
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

  // This is a function for workflowschemeIdDefaultGet
  /*
Get default workflow

 */
  workflowschemeIdDefaultGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      returnDraftIfExists: false, // Boolean | Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
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

  // This is a function for workflowschemeIdGet
  /*
Get workflow scheme

 */
  workflowschemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      returnDraftIfExists: false, // Boolean | Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
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
Get workflow for issue type in workflow scheme

 */
  workflowschemeIdIssuetypeIssueTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ let opts = {
      returnDraftIfExists: false, // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
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
Get issue types for workflows in workflow scheme

 */
  workflowschemeIdWorkflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'workflowName': "workflowName_example", // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
      returnDraftIfExists: false, // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
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

  // This is a function for issueLinkTypeGet
  /*
Get issue link types

 */
  issueLinkTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinkTypesApi(); // Object | Cloudi of the project
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
Get issue link type

 */
  issueLinkTypeIssueLinkTypeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinkTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue link type.
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

  // This is a function for issuetypeIssueTypeIdPropertiesGet
  /*
Get issue type property keys

 */
  issuetypeIssueTypeIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypePropertiesApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
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
Get issue type property

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypePropertiesApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
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

  // This is a function for statuscategoryGet
  /*
Get all status categories

 */
  statuscategoryGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowStatusCategoriesApi(); // Object | Cloudi of the project
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
Get status category

 */
  statuscategoryIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowStatusCategoriesApi(); // Object | Cloudi of the projec // String | The ID or key of the status category.
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

  // This is a function for projectTypeAccessibleGet
  /*
Get licensed project types

 */
  projectTypeAccessibleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectTypesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.projectTypeAccessibleGet(
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

  // This is a function for projectTypeGet
  /*
Get all project types

 */
  projectTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectTypesApi(); // Object | Cloudi of the project
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
Get accessible project type by key

 */
  projectTypeProjectTypeKeyAccessibleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectTypesApi(); // Object | Cloudi of the projec // String | The key of the project type.
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
Get project type by key

 */
  projectTypeProjectTypeKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectTypesApi(); // Object | Cloudi of the projec // String | The key of the project type.
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

  // This is a function for filterFavouriteGet
  /*
Get favorite filters

 */
  filterFavouriteGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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
Get filters

 */
  filterGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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
Get columns

 */
  filterIdColumnsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.filterIdColumnsGet(
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
Get filter

 */
  filterIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter to return.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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

  // This is a function for filterMyGet
  /*
Get my filters

 */
  filterMyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
      includeFavourites: false, // Boolean | Include the user's favorite filters in the response.
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
Search for filters

 */
  filterSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'filterName': "filterName_example", // String | String used to perform a case-insensitive partial match with `name`.
      //  'accountId': "accountId_example", // String | User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.
      //  'owner': "owner_example", // String | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.
      //  'groupname': "groupname_example", // String | Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`.
      projectId: 789, // Number | Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.
      orderBy: "'name'", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.  *  `is_favourite` Sorts by whether the filter is marked as a favorite.  *  `id` Sorts by filter ID.  *  `name` Sorts by filter name.  *  `owner` Sorts by the ID of the filter owner.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the filter.  *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.  *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.  *  `jql` Returns the JQL query that the filter uses.  *  `owner` Returns the owner of the filter.  *  `searchUrl` Returns a URL to perform the filter's JQL query.  *  `sharePermissions` Returns the share permissions defined for the filter.  *  `subscriptions` Returns the users that are subscribed to the filter.  *  `viewUrl` Returns a URL to view the filter.
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

  // This is a function for groupuserpickerGet
  /*
Find users and groups

 */
  groupuserpickerGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupAndUserPickerApi(); // Object | Cloudi of the projec // String | The search string.
    /*let cloudid = null;*/ /*let query = "query_example";*/ let opts = {
      maxResults: 50, // Number | The maximum number of items to return in each list.
      showAvatar: false, // Boolean | Whether the user avatar should be returned. If an invalid value is provided, the default value is used.
      //  'fieldId': "fieldId_example", // String | The custom field ID of the field this request is for.
      projectId: ['null'], // [String] | The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present.
      issueTypeId: ['null'], // [String] | The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present.
      avatarSize: "'xsmall'", // String | The size of the avatar to return. If an invalid value is provided, the default value is used.
      caseInsensitive: false, // Boolean | Whether the search for groups should be case insensitive.
      excludeConnectAddons: false, // Boolean | Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
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
      incomingOptions.query,
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

  // This is a function for workflowGet
  /*
Get all workflows

 */
  workflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowsApi(); // Object | Cloudi of the project
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

  // This is a function for workflowSearchGet
  /*
Get workflows paginated

 */
  workflowSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      workflowName: ['null'], // [String] | The name of a workflow to return.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `transitions` For each workflow, returns information about the transitions inside the workflow.  *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.  *  `statuses` For each workflow, returns information about the statuses inside the workflow.  *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.workflowSearchGet(
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

  // This is a function for permissionschemeGet
  /*
Get all permission schemes

 */
  permissionschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
Get permission scheme

 */
  permissionschemeSchemeIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme to return.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
Get permission scheme grants

 */
  permissionschemeSchemeIdPermissionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
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
Get permission scheme grant

 */
  permissionschemeSchemeIdPermissionPermissionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme // Number | The ID of the permission grant.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ /*let permissionId = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
      incomingOptions.schemeId,
      incomingOptions.permissionId,
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

  // This is a function for issueIssueIdOrKeyRemotelinkGet
  /*
Get remote issue links

 */
  issueIssueIdOrKeyRemotelinkGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
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
Get remote issue link by ID

 */
  issueIssueIdOrKeyRemotelinkLinkIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the remote issue link.
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

  // This is a function for priorityGet
  /*
Get priorities

 */
  priorityGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePrioritiesApi(); // Object | Cloudi of the project
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
Get priority

 */
  priorityIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePrioritiesApi(); // Object | Cloudi of the projec // String | The ID of the issue priority.
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

  // This is a function for applicationPropertiesAdvancedSettingsGet
  /*
Get advanced settings

 */
  applicationPropertiesAdvancedSettingsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JiraSettingsApi(); // Object | Cloudi of the project
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
Get application property

 */
  applicationPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JiraSettingsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'key': "key_example", // String | The key of the application property.
      //  'permissionLevel': "permissionLevel_example", // String | The permission level of all items being returned in the list.
      //  'keyFilter': "keyFilter_example" // String | When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.
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

  // This is a function for configurationGet
  /*
Get global settings

 */
  configurationGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.JiraSettingsApi(); // Object | Cloudi of the project
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

  // This is a function for taskTaskIdGet
  /*
Get task

 */
  taskTaskIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TasksApi(); // Object | Cloudi of the projec // String | The ID of the task.
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

  // This is a function for issueIssueIdOrKeyVotesGet
  /*
Get votes

 */
  issueIssueIdOrKeyVotesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueVotesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
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

  // This is a function for serverInfoGet
  /*
Get Jira instance info

 */
  serverInfoGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ServerInfoApi(); // Object | Cloudi of the project
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

  // This is a function for applicationroleGet
  /*
Get all application roles

 */
  applicationroleGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ApplicationRolesApi(); // Object | Cloudi of the project
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
Get application role

 */
  applicationroleKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ApplicationRolesApi(); // Object | Cloudi of the projec // String | The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.
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

  // This is a function for componentIdGet
  /*
Get component

 */
  componentIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The ID of the component.
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
Get component issues count

 */
  componentIdRelatedIssueCountsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The ID of the component.
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

  // This is a function for projectProjectIdOrKeyComponentGet
  /*
Get project components paginated

 */
  projectProjectIdOrKeyComponentGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `issueCount` Sorts by the count of issues associated with the component.  *  `lead` Sorts by the user key of the component's project lead.  *  `name` Sorts by component name.
      //  'query': "query_example" // String | Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).
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
Get project components

 */
  projectProjectIdOrKeyComponentsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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

  // This is a function for customFieldFieldIdOptionGet
  /*
Get options for field

 */
  customFieldFieldIdOptionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsApi(); // Object | Cloudi of the projec // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
    /*let cloudid = null;*/ /*let fieldId = 789;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 1000, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.customFieldFieldIdOptionGet(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
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

  // This is a function for customFieldOptionIdGet
  /*
Get custom field option

 */
  customFieldOptionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsApi(); // Object | Cloudi of the projec // String | The ID of the custom field option.
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

  // This is a function for resolutionGet
  /*
Get resolutions

 */
  resolutionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueResolutionsApi(); // Object | Cloudi of the project
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
Get resolution

 */
  resolutionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueResolutionsApi(); // Object | Cloudi of the projec // String | The ID of the issue resolution value.
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

  // This is a function for workflowschemeIdDraftDefaultGet
  /*
Get draft default workflow

 */
  workflowschemeIdDraftDefaultGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdDraftDefaultGet(
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
Get draft workflow scheme

 */
  workflowschemeIdDraftGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was created from.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdDraftGet(
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
Get workflow for issue type in draft workflow scheme

 */
  workflowschemeIdDraftIssuetypeIssueTypeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ apiInstance.workflowschemeIdDraftIssuetypeIssueTypeGet(
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
Get issue types for workflows in draft workflow scheme

 */
  workflowschemeIdDraftWorkflowGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
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

  // This is a function for groupGet
  /*
Get group

 */
  groupGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // String | The name of the group.
    /*let cloudid = null;*/ /*let groupname = "groupname_example";*/ let opts = {
      //  'expand': "expand_example" // String | List of fields to expand.
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
      incomingOptions.groupname,
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

  // This is a function for groupMemberGet
  /*
Get users from group

 */
  groupMemberGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // String | The name of the group.
    /*let cloudid = null;*/ /*let groupname = "groupname_example";*/ let opts = {
      includeInactiveUsers: false, // Boolean | Include inactive users.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
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
      incomingOptions.groupname,
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
Find groups

 */
  groupsPickerGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).
      //  'query': "query_example", // String | The string to find in group names.
      exclude: ['null'], // [String] | A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`.
      maxResults: 56, // Number | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.
      //  'userName': "userName_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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

  // This is a function for labelGet
  /*
Get all labels

 */
  labelGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.LabelsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 1000, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.labelGet(
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
Get user property keys

 */
  userPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserPropertiesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'userKey': "userKey_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
Get user property

 */
  userPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserPropertiesApi(); // Object | Cloudi of the projec // String | The key of the user's property.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'userKey': "userKey_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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

  // This is a function for issuetypescreenschemeGet
  /*
Get issue type screen schemes

 */
  issuetypescreenschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeScreenSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      id: [null], // [Number] | The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypescreenschemeGet(
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

  // This is a function for issuetypescreenschemeMappingGet
  /*
Get issue type screen scheme items

 */
  issuetypescreenschemeMappingGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeScreenSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      issueTypeScreenSchemeId: [null], // [Number] | The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypescreenschemeMappingGet(
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

  // This is a function for issuetypescreenschemeProjectGet
  /*
Get issue type screen schemes for projects

 */
  issuetypescreenschemeProjectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeScreenSchemesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      projectId: [null], // [Number] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuetypescreenschemeProjectGet(
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

  // This is a function for fieldFieldKeyOptionGet
  /*
Get all issue field options

 */
  fieldFieldKeyOptionGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
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
Get issue field option

 */
  fieldFieldKeyOptionOptionIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\" // Number | The ID of the option to be returned.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 789;*/ apiInstance.fieldFieldKeyOptionOptionIdGet(
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
Get selectable issue field options

 */
  fieldFieldKeyOptionSuggestionsEditGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      projectId: 789, // Number | Filters the results to options that are only available in the specified project.
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
Get visible issue field options

 */
  fieldFieldKeyOptionSuggestionsSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 56, // Number | The maximum number of items to return per page.
      projectId: 789, // Number | Filters the results to options that are only available in the specified project.
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

  // This is a function for issueLinkLinkIdGet
  /*
Get issue link

 */
  issueLinkLinkIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinksApi(); // Object | Cloudi of the projec // String | The ID of the issue link.
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

  // This is a function for fieldFieldIdContextsGet
  /*
Get contexts for a field

 */
  fieldFieldIdContextsGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.IssueFieldsApi(); // Object | Cloudi of the projec // String | The ID of the field to return contexts for.
    /*let cloudid = null;*/ /*let fieldId = "fieldId_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 20, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldFieldIdContextsGet(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
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
Get fields

 */
  fieldGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldsApi(); // Object | Cloudi of the project
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

  // This is a function for fieldSearchGet
  /*
Get fields paginated

 */
  fieldSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      type: ['null'], // [String] | The type of fields to search.
      id: ['null'], // [String] | The IDs of the custom fields to return or, where`query is specified, filter. IDs should be provided in the format customfield_XXXXX.`
      //  'query': "query_example", // String | String used to perform a case-insensitive partial match with field names or descriptions.
      //  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `contextsCount` Sorts by the number of contexts related to a field.  *  `lastUsed` Sorts by the date when the value of the field last changed.  *  `name` Sorts by the field name.  *  `screensCount` Sorts by the number of screens related to a field.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` Returns the key for each field.  *  `lastUsed` Returns the date when the value of the field last changed.  *  `screensCount` Returns the number of screens related to a field.  *  `contextsCount` Returns the number of contexts related to a field.  *  `isLocked` Returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og).
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldSearchGet(
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

  // This is a function for webhookFailedGet
  /*
Get failed webhooks

 */
  webhookFailedGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WebhooksApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      maxResults: 56, // Number | The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.
      after: 789, // Number | The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.webhookFailedGet(
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

  // This is a function for webhookGet
  /*
Get dynamic webhooks for app

 */
  webhookGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WebhooksApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 100, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.webhookGet(
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

  // This is a function for fieldconfigurationGet
  /*
Get all field configurations

 */
  fieldconfigurationGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      id: [null], // [Number] | The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
      isDefault: false, // Boolean | If *true* returns the default field configuration only.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldconfigurationGet(
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

  // This is a function for fieldconfigurationIdFieldsGet
  /*
Get field configuration items

 */
  fieldconfigurationIdFieldsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the projec // Number | The ID of the field configuration.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldconfigurationIdFieldsGet(
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

  // This is a function for fieldconfigurationschemeGet
  /*
Get all field configuration schemes

 */
  fieldconfigurationschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      id: [null], // [Number] | The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldconfigurationschemeGet(
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

  // This is a function for fieldconfigurationschemeMappingGet
  /*
Get field configuration issue type items

 */
  fieldconfigurationschemeMappingGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      fieldConfigurationSchemeId: [10020], // [Number] | The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldconfigurationschemeMappingGet(
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

  // This is a function for fieldconfigurationschemeProjectGet
  /*
Get field configuration schemes for projects

 */
  fieldconfigurationschemeProjectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the projec // [Number] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
    /*let cloudid = null;*/ /*let projectId = [null];*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.fieldconfigurationschemeProjectGet(
      incomingOptions.cloudid,
      incomingOptions.projectId,
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
Get project issue security scheme

 */
  projectProjectKeyOrIdIssuesecuritylevelschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPermissionSchemesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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

  // This is a function for projectProjectKeyOrIdPermissionschemeGet
  /*
Get assigned permission scheme

 */
  projectProjectKeyOrIdPermissionschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPermissionSchemesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
Get project issue security levels

 */
  projectProjectKeyOrIdSecuritylevelGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPermissionSchemesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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

  // This is a function for projectGet
  /*
Get all projects

 */
  projectGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `issueTypes` Returns all issue types associated with the project.  *  `lead` Returns information about the the project lead.  *  `projectKeys` Returns all project keys associated with the project.
      recent: 56, // Number | Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.
      properties: ['null'], // [String] | A list of project properties to return for the project. This parameter accepts a comma-separated list.
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

  // This is a function for projectProjectIdHierarchyGet
  /*
Get project issue type hierarchy

 */
  projectProjectIdHierarchyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // Number | The ID of the project.
    /*let cloudid = null;*/ /*let projectId = 789;*/ apiInstance.projectProjectIdHierarchyGet(
      incomingOptions.cloudid,
      incomingOptions.projectId,
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
Get project

 */
  projectProjectIdOrKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.  *  `issueTypeHierarchy` The project issue type hierarchy.
      properties: ['null'], // [String] | A list of project properties to return for the project. This parameter accepts a comma-separated list.
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

  // This is a function for projectProjectIdOrKeyStatusesGet
  /*
Get all statuses for project

 */
  projectProjectIdOrKeyStatusesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
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

  // This is a function for projectProjectKeyOrIdNotificationschemeGet
  /*
Get project notification scheme

 */
  projectProjectKeyOrIdNotificationschemeGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
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

  // This is a function for projectSearchGet
  /*
Get projects paginated

 */
  projectSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      // orderBy: "'key'", // String | [Order](#ordering) the results by a field.   *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).  *  `issueCount` Sorts by the total number of issues in each project.  *  `key` Sorts by project key.  *  `lastIssueUpdatedTime` Sorts by the last issue update time.  *  `name` Sorts by project name.  *  `owner` Sorts by project lead.  *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.  *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date.
      //  'query': "query_example", // String | Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).
      //  'typeKey': "typeKey_example", // String | Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.
      // categoryId: 789, // Number | The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
      // searchBy: "'key, name'", // String |
      // action: "'view'", // String | Filter results by projects for which the user can:   *  `view` the project, meaning that they have one of the following permissions:           *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  `edit` the project, meaning that they have one of the following permissions:           *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `projectKeys` Returns all project keys associated with a project.  *  `lead` Returns information about the the project lead.  *  `issueTypes` Returns all issue types associated with the project.  *  `url` Returns the URL associated with the project.  *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
      // status: ["'live'"], // [String] | EXPERIMENTAL. Filter results by project status:   *  `live` Search live projects.  *  `archived` Search archived projects.  *  `deleted` Search deleted projects, those in the recycle bin.
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

  // This is a function for issueIssueIdOrKeyPropertiesGet
  /*
Get issue property keys

 */
  issueIssueIdOrKeyPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The key or ID of the issue.
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
Get issue property

 */
  issueIssueIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The key or ID of the issue // String | The key of the property.
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

  // This is a function for configurationTimetrackingGet
  /*
Get selected time tracking provider

 */
  configurationTimetrackingGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TimeTrackingApi(); // Object | Cloudi of the project
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
Get all time tracking providers

 */
  configurationTimetrackingListGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TimeTrackingApi(); // Object | Cloudi of the project
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
Get time tracking settings

 */
  configurationTimetrackingOptionsGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TimeTrackingApi(); // Object | Cloudi of the project
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

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesGet
  /*
Get dashboard item property keys

 */
  dashboardDashboardIdItemsItemIdPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item.
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
Get dashboard item property

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property.
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
Get all dashboards

 */
  dashboardGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'filter': "filter_example", // String | The filter applied to the list of dashboards. Valid values are:   *  `favourite` Returns dashboards the user has marked as favorite.  *  `my` Returns dashboards owned by the user.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 20, // Number | The maximum number of items to return per page.
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
Get dashboard

 */
  dashboardIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard.
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

  // This is a function for dashboardSearchGet
  /*
Search for dashboards

 */
  dashboardSearchGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'dashboardName': "dashboardName_example", // String | String used to perform a case-insensitive partial match with `name`.
      //  'accountId': "accountId_example", // String | User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.
      //  'owner': "owner_example", // String | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.
      //  'groupname': "groupname_example", // String | Group name used to returns dashboards that are shared with a group that matches `sharePermissions.group.name`.
      projectId: 789, // Number | Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.
      orderBy: "'name'", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by dashboard popularity.  *  `id` Sorts by dashboard ID.  *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.  *  `name` Sorts by dashboard name.  *  `owner` Sorts by dashboard owner name.
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 50, // Number | The maximum number of items to return per page.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the dashboard.  *  `owner` Returns the owner of the dashboard.  *  `viewUrl` Returns the URL that is used to view the dashboard.  *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.  *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.  *  `sharePermissions` Returns details of the share permissions defined for the dashboard.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.dashboardSearchGet(
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

  // This is a function for restAtlassianConnect1AddonsAddonKeyPropertiesGet
  /*
Get app properties

 */
  restAtlassianConnect1AddonsAddonKeyPropertiesGet(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AppPropertiesApi(); // Object | Cloudi of the projec // String | The key of the app, as defined in its descriptor.
    /*let cloudid = null;*/ /*let addonKey = "addonKey_example";*/ apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesGet(
      incomingOptions.cloudid,
      incomingOptions.addonKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet
  /*
Get app property

 */
  restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AppPropertiesApi(); // Object | Cloudi of the projec // String | The key of the app, as defined in its descriptor // String | The key of the property.
    /*let cloudid = null;*/ /*let addonKey = "addonKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(
      incomingOptions.cloudid,
      incomingOptions.addonKey,
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

  // This is a function for issueIssueIdOrKeyWorklogGet
  /*
Get issue worklogs

 */
  issueIssueIdOrKeyWorklogGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      startAt: 0, // Number | The index of the first item to return in a page of results (page offset).
      maxResults: 1048576, // Number | The maximum number of items to return per page.
      startedAfter: 789, // Number | The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.
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
Get worklog

 */
  issueIssueIdOrKeyWorklogIdGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties.
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
      incomingOptions.issueIdOrKey,
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
Get IDs of deleted worklogs

 */
  worklogDeletedGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      since: 0, // Number | The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.
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
Get IDs of updated worklogs

 */
  worklogUpdatedGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      since: 0, // Number | The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
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

  // This is a function for projectvalidateKeyGet
  /*
Validate project key

 */
  projectvalidateKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectKeyAndNameValidationApi(); // Object | Cloudi of the project
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
Get valid project key

 */
  projectvalidateValidProjectKeyGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectKeyAndNameValidationApi(); // Object | Cloudi of the project
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
Get valid project name

 */
  projectvalidateValidProjectNameGet(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectKeyAndNameValidationApi(); // Object | Cloudi of the projec // String | The project name.
    /*let cloudid = null;*/ /*let name = "name_example";*/ apiInstance.projectvalidateValidProjectNameGet(
      incomingOptions.cloudid,
      incomingOptions.name,
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
      case 'REST_ATLASSIAN_CONNECT1_APP_MODULE_DYNAMIC':
        /*

Register modules


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AppModuleDynamicPost(
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

Create project category


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'JQL_PARSE':
        /*

Parse JQL query


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.jqlParsePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'JQL_PDCLEANER':
        /*

Convert user identifiers to account IDs in JQL queries


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.jqlPdcleanerPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'JQL_MATCH':
        /*

Check issues against JQL


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.jqlMatchPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SEARCH':
        /*

Search for issues using JQL (POST)


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.searchPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID':
        /*

Load avatar


      Function parameters for this API cloudid,type,entityId,size,body,opts
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

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*

Add actors to project role


      Function parameters for this API cloudid,projectIdOrKey,id,body
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

Add default actors to project role


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.roleIdActorsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'EXPRESSION_ANALYSE':
        /*

Analyse Jira expression


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.expressionAnalysePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'EXPRESSION_EVAL':
        /*

Evaluate Jira expression


      Function parameters for this API cloudid,body,opts
        */
        return new Promise((resolve, reject) => {
          this.expressionEvalPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_ATTACHMENTS':
        /*

Add attachment


      Function parameters for this API cloudid,issueIdOrKey,opts
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

      case 'ROLE_ID':
        /*

Partial update project role


      Function parameters for this API cloudid,id,body
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

Create project role


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.rolePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONS_CHECK':
        /*

Get bulk permissions


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.permissionsCheckPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONS_PROJECT':
        /*

Get permitted projects


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.permissionsProjectPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SCREENS_ADD_TO_DEFAULT_FIELD_ID':
        /*

Add field to default screen


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

Create screen tab


      Function parameters for this API cloudid,screenId,body
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

Move screen tab field


      Function parameters for this API cloudid,screenId,tabId,id,body
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

Add screen tab field


      Function parameters for this API cloudid,screenId,tabId,body
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

Move screen tab


      Function parameters for this API cloudid,screenId,tabId,pos
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

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*

Add watcher


      Function parameters for this API cloudid,issueIdOrKey,body
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWatchersPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*

Create workflow transition property


      Function parameters for this API cloudid,transitionId,key,workflowName,body,opts
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

      case 'VERSION_ID_MOVE':
        /*

Move version


      Function parameters for this API cloudid,id,body
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

Delete and replace version


      Function parameters for this API cloudid,id,body
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

Create version


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.versionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER':
        /*

Create user


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.userPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_BULK':
        /*

Bulk create issue


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issueBulkPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_NOTIFY':
        /*

Send notification for issue


      Function parameters for this API cloudid,issueIdOrKey,body
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyNotifyPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS':
        /*

Transition issue


      Function parameters for this API cloudid,issueIdOrKey,body
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

      case 'ISSUE':
        /*

Create issue


      Function parameters for this API cloudid,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issuePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMMENT_LIST':
        /*

Get comments by IDs


      Function parameters for this API cloudid,body,opts
        */
        return new Promise((resolve, reject) => {
          this.commentListPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT':
        /*

Add comment


      Function parameters for this API cloudid,issueIdOrKey,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_ID_PERMISSION':
        /*

Add share permission


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.filterIdPermissionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR2':
        /*

Load project avatar


      Function parameters for this API cloudid,projectIdOrKey,body,opts
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

      case 'ISSUETYPE_ID_AVATAR2':
        /*

Load issue type avatar


      Function parameters for this API cloudid,id,size,body,opts
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

Create issue type


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issuetypePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME':
        /*

Create workflow scheme


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.workflowschemePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE':
        /*

Create issue link type


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issueLinkTypePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER':
        /*

Create filter


      Function parameters for this API cloudid,body,opts
        */
        return new Promise((resolve, reject) => {
          this.filterPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME':
        /*

Create permission scheme


      Function parameters for this API cloudid,body,opts
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

Create permission grant


      Function parameters for this API cloudid,schemeId,body,opts
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

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*

Create or update remote issue link


      Function parameters for this API cloudid,issueIdOrKey,body
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

      case 'TASK_TASK_ID_CANCEL':
        /*

Cancel task


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

      case 'ISSUE_ISSUE_ID_OR_KEY_VOTES':
        /*

Add vote


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

      case 'COMPONENT':
        /*

Create component


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.componentPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CUSTOM_FIELD_FIELD_ID_OPTION':
        /*

Create custom field options


      Function parameters for this API cloudid,fieldId,body
        */
        return new Promise((resolve, reject) => {
          this.customFieldFieldIdOptionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_CREATEDRAFT':
        /*

Create draft workflow scheme


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

      case 'GROUP':
        /*

Create group


      Function parameters for this API cloudid,body
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

Add user to group


      Function parameters for this API cloudid,groupname,body
        */
        return new Promise((resolve, reject) => {
          this.groupUserPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD_FIELD_KEY_OPTION':
        /*

Create issue field option


      Function parameters for this API cloudid,fieldKey,body
        */
        return new Promise((resolve, reject) => {
          this.fieldFieldKeyOptionPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK':
        /*

Create issue link


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issueLinkPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELD':
        /*

Create custom field


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.fieldPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WEBHOOK':
        /*

Register dynamic webhooks


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.webhookPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT':
        /*

Create project


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.projectPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_DELETE':
        /*

Delete project asynchronously


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyDeletePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'ISSUE_PROPERTIES':
        /*

Bulk set issues properties


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issuePropertiesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DASHBOARD_ID_COPY':
        /*

Copy dashboard


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.dashboardIdCopyPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DASHBOARD':
        /*

Create dashboard


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.dashboardPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG':
        /*

Add worklog


      Function parameters for this API cloudid,issueIdOrKey,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKLOG_LIST':
        /*

Get worklogs


      Function parameters for this API cloudid,body,opts
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
  // This is a function for restAtlassianConnect1AppModuleDynamicPost
  /*
Register modules

 */
  restAtlassianConnect1AppModuleDynamicPost(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.DynamicModulesApi(); // Object | Cloudi of the projec // {String: [Object]} |
    /*let cloudid = null;*/ /*let body = {key: null};*/ apiInstance.restAtlassianConnect1AppModuleDynamicPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for projectCategoryPost
  /*
Create project category

 */
  projectCategoryPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectCategoriesApi(); // Object | Cloudi of the projec // ProjectCategory |
    /*let cloudid = null;*/ /*let body = new Jira.ProjectCategory();*/ apiInstance.projectCategoryPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for jqlParsePost
  /*
Parse JQL query

 */
  jqlParsePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JQLApi(); // Object | Cloudi of the projec // JqlQueriesToParse |
    /*let cloudid = null;*/ /*let body = new Jira.JqlQueriesToParse();*/ apiInstance.jqlParsePost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for jqlPdcleanerPost
  /*
Convert user identifiers to account IDs in JQL queries

 */
  jqlPdcleanerPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JQLApi(); // Object | Cloudi of the projec // JQLPersonalDataMigrationRequest |
    /*let cloudid = null;*/ /*let body = new Jira.JQLPersonalDataMigrationRequest();*/ apiInstance.jqlPdcleanerPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for jqlMatchPost
  /*
Check issues against JQL

 */
  jqlMatchPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSearchApi(); // Object | Cloudi of the projec // IssuesAndJQLQueries |
    /*let cloudid = null;*/ /*let body = new Jira.IssuesAndJQLQueries();*/ apiInstance.jqlMatchPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchPost
  /*
Search for issues using JQL (POST)

 */
  searchPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueSearchApi(); // Object | Cloudi of the projec // SearchRequestBean | A JSON object containing the search request.
    /*let cloudid = null;*/ /*let body = new Jira.SearchRequestBean();*/ apiInstance.searchPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for universalAvatarTypeTypeOwnerEntityIdPost
  /*
Load avatar

 */
  universalAvatarTypeTypeOwnerEntityIdPost(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AvatarsApi(); // Object | Cloudi of the projec // String | The avatar type // String | The ID of the item the avatar is associated with // Number | The length of each side of the crop region // Object |
    /*let cloudid = null;*/ /*let type = "type_example";*/ /*let entityId = "entityId_example";*/ /*let size = 56;*/ /*let body = null;*/ let opts = {
      x: 0, // Number | The X coordinate of the top-left corner of the crop region.
      y: 0, // Number | The Y coordinate of the top-left corner of the crop region.
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
      incomingOptions.type,
      incomingOptions.entityId,
      incomingOptions.size,
      incomingOptions.body,
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
Add actors to project role

 */
  projectProjectIdOrKeyRoleIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs // ActorsMap | The groups or users to associate with the project role for this project. Provide the user account ID or group name.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let id = 789;*/ /*let body = new Jira.ActorsMap();*/ apiInstance.projectProjectIdOrKeyRoleIdPost(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.projectIdOrKey,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for roleIdActorsPost
  /*
Add default actors to project role

 */
  roleIdActorsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs // ActorInputBean |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.ActorInputBean();*/ apiInstance.roleIdActorsPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for expressionAnalysePost
  /*
Analyse Jira expression

 */
  expressionAnalysePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JiraExpressionsApi(); // Object | Cloudi of the projec // JiraExpressionForAnalysis | The Jira expressions to analyse.
    /*let cloudid = null;*/ /*let body = new Jira.JiraExpressionForAnalysis();*/ apiInstance.expressionAnalysePost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Evaluate Jira expression

 */
  expressionEvalPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JiraExpressionsApi(); // Object | Cloudi of the projec // JiraExpressionEvalRequestBean | The Jira expression and the evaluation context.
    /*let cloudid = null;*/ /*let body = new Jira.JiraExpressionEvalRequestBean();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.
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
      incomingOptions.body,
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
Add attachment

 */
  issueIssueIdOrKeyAttachmentsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue that attachments are added to.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      body: '/path/to/file', // File |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issueIssueIdOrKeyAttachmentsPost(
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

  // This is a function for roleIdPost
  /*
Partial update project role

 */
  roleIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs // CreateUpdateRoleRequestBean |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.CreateUpdateRoleRequestBean();*/ apiInstance.roleIdPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Create project role

 */
  rolePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // CreateUpdateRoleRequestBean |
    /*let cloudid = null;*/ /*let body = new Jira.CreateUpdateRoleRequestBean();*/ apiInstance.rolePost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for permissionsCheckPost
  /*
Get bulk permissions

 */
  permissionsCheckPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionsApi(); // Object | Cloudi of the projec // BulkPermissionsRequestBean | Details of the permissions to check.
    /*let cloudid = null;*/ /*let body = new Jira.BulkPermissionsRequestBean();*/ apiInstance.permissionsCheckPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Get permitted projects

 */
  permissionsProjectPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionsApi(); // Object | Cloudi of the projec // PermissionsKeysBean |
    /*let cloudid = null;*/ /*let body = new Jira.PermissionsKeysBean();*/ apiInstance.permissionsProjectPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Add field to default screen

 */
  screensAddToDefaultFieldIdPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // String | The ID of the field.
    /*let cloudid = null;*/ /*let fieldId = "fieldId_example";*/ apiInstance.screensAddToDefaultFieldIdPost(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsPost
  /*
Create screen tab

 */
  screensScreenIdTabsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // ScreenableTab |
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let body = new Jira.ScreenableTab();*/ apiInstance.screensScreenIdTabsPost(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.body,
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
Move screen tab field

 */
  screensScreenIdTabsTabIdFieldsIdMovePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab // String | The ID of the field // MoveFieldBean |
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ /*let id = "id_example";*/ /*let body = new Jira.MoveFieldBean();*/ apiInstance.screensScreenIdTabsTabIdFieldsIdMovePost(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.screenId,
      incomingOptions.tabId,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for screensScreenIdTabsTabIdFieldsPost
  /*
Add screen tab field

 */
  screensScreenIdTabsTabIdFieldsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab // AddFieldBean |
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ /*let body = new Jira.AddFieldBean();*/ apiInstance.screensScreenIdTabsTabIdFieldsPost(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.body,
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
Move screen tab

 */
  screensScreenIdTabsTabIdMovePosPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab // Number | The position of tab. The base index is 0.
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ /*let pos = 56;*/ apiInstance.screensScreenIdTabsTabIdMovePosPost(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.pos,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWatchersPost
  /*
Add watcher

 */
  issueIssueIdOrKeyWatchersPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWatchersApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The account ID of the user. Note that username cannot be used due to privacy changes.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = "body_example";*/ apiInstance.issueIssueIdOrKeyWatchersPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesPost
  /*
Create workflow transition property

 */
  workflowTransitionsTransitionIdPropertiesPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionPropertiesApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition // String | The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body // String | The name of the workflow that the transition belongs to // WorkflowTransitionProperty |
    /*let cloudid = null;*/ /*let transitionId = 789;*/ /*let key = "key_example";*/ /*let workflowName = "workflowName_example";*/ /*let body = new Jira.WorkflowTransitionProperty();*/ let opts = {
      workflowMode: "'live'", // String | The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.
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
      incomingOptions.key,
      incomingOptions.workflowName,
      incomingOptions.body,
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
Move version

 */
  versionIdMovePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version to be moved // VersionMoveBean |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.VersionMoveBean();*/ apiInstance.versionIdMovePost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Delete and replace version

 */
  versionIdRemoveAndSwapPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version // DeleteAndReplaceVersionBean |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.DeleteAndReplaceVersionBean();*/ apiInstance.versionIdRemoveAndSwapPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionPost
  /*
Create version

 */
  versionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // Version |
    /*let cloudid = null;*/ /*let body = new Jira.Version();*/ apiInstance.versionPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Create user

 */
  userPost(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // UserWriteBean |
    /*let cloudid = null;*/ /*let body = new Jira.UserWriteBean();*/ apiInstance.userPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueBulkPost
  /*
Bulk create issue

 */
  issueBulkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // IssuesUpdateBean |
    /*let cloudid = null;*/ /*let body = new Jira.IssuesUpdateBean();*/ apiInstance.issueBulkPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Send notification for issue

 */
  issueIssueIdOrKeyNotifyPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | ID or key of the issue that the notification is sent for // Notification | The request object for the notification and recipients.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.Notification();*/ apiInstance.issueIssueIdOrKeyNotifyPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.body,
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
Transition issue

 */
  issueIssueIdOrKeyTransitionsPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // IssueUpdateDetails |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.IssueUpdateDetails();*/ apiInstance.issueIssueIdOrKeyTransitionsPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.body,
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
Create issue

 */
  issuePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // IssueUpdateDetails |
    /*let cloudid = null;*/ /*let body = new Jira.IssueUpdateDetails();*/ let opts = {
      updateHistory: false, // Boolean | Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira.
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
      incomingOptions.body,
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

  // This is a function for commentListPost
  /*
Get comments by IDs

 */
  commentListPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // IssueCommentListRequestBean | The list of comment IDs.
    /*let cloudid = null;*/ /*let body = new Jira.IssueCommentListRequestBean();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedBody` Returns the comment body rendered in HTML.  *  `properties` Returns the comment's properties.
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
      incomingOptions.body,
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

  // This is a function for issueIssueIdOrKeyCommentPost
  /*
Add comment

 */
  issueIssueIdOrKeyCommentPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // Comment |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.Comment();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
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
      incomingOptions.body,
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
Add share permission

 */
  filterIdPermissionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the projec // Number | The ID of the filter // SharePermissionInputBean |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.SharePermissionInputBean();*/ apiInstance.filterIdPermissionPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Load project avatar

 */
  projectProjectIdOrKeyAvatar2Post(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectAvatarsApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project // Object |
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let body = null;*/ let opts = {
      x: 0, // Number | The X coordinate of the top-left corner of the crop region.
      y: 0, // Number | The Y coordinate of the top-left corner of the crop region.
      size: 56, // Number | The length of each side of the crop region.
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
      incomingOptions.body,
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
Load issue type avatar

 */
  issuetypeIdAvatar2Post(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue type // Number | The length of each side of the crop region // Object |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let size = 56;*/ /*let body = null;*/ let opts = {
      x: 0, // Number | The X coordinate of the top-left corner of the crop region.
      y: 0, // Number | The Y coordinate of the top-left corner of the crop region.
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
      incomingOptions.size,
      incomingOptions.body,
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
Create issue type

 */
  issuetypePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // IssueTypeCreateBean |
    /*let cloudid = null;*/ /*let body = new Jira.IssueTypeCreateBean();*/ apiInstance.issuetypePost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Create workflow scheme

 */
  workflowschemePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // WorkflowScheme |
    /*let cloudid = null;*/ /*let body = new Jira.WorkflowScheme();*/ apiInstance.workflowschemePost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkTypePost
  /*
Create issue link type

 */
  issueLinkTypePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinkTypesApi(); // Object | Cloudi of the projec // IssueLinkType |
    /*let cloudid = null;*/ /*let body = new Jira.IssueLinkType();*/ apiInstance.issueLinkTypePost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Create filter

 */
  filterPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Filter | The filter to create.
    /*let cloudid = null;*/ /*let body = new Jira.Filter();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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
      incomingOptions.body,
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
Create permission scheme

 */
  permissionschemePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // PermissionScheme | The permission scheme to create.
    /*let cloudid = null;*/ /*let body = new Jira.PermissionScheme();*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
      incomingOptions.body,
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
Create permission grant

 */
  permissionschemeSchemeIdPermissionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme in which to create a new permission grant // PermissionGrant | The permission grant to create.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ /*let body = new Jira.PermissionGrant();*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
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
      incomingOptions.body,
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

  // This is a function for issueIssueIdOrKeyRemotelinkPost
  /*
Create or update remote issue link

 */
  issueIssueIdOrKeyRemotelinkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // RemoteIssueLinkRequest |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.RemoteIssueLinkRequest();*/ apiInstance.issueIssueIdOrKeyRemotelinkPost(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.body,
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
Cancel task

 */
  taskTaskIdCancelPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TasksApi(); // Object | Cloudi of the projec // String | The ID of the task.
    /*let cloudid = null;*/ /*let taskId = "taskId_example";*/ apiInstance.taskTaskIdCancelPost(
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

  // This is a function for issueIssueIdOrKeyVotesPost
  /*
Add vote

 */
  issueIssueIdOrKeyVotesPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueVotesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ apiInstance.issueIssueIdOrKeyVotesPost(
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

  // This is a function for componentPost
  /*
Create component

 */
  componentPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // Component |
    /*let cloudid = null;*/ /*let body = new Jira.Component();*/ apiInstance.componentPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for customFieldFieldIdOptionPost
  /*
Create custom field options

 */
  customFieldFieldIdOptionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsApi(); // Object | Cloudi of the projec // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075* // BulkCreateCustomFieldOptionRequest |
    /*let cloudid = null;*/ /*let fieldId = 789;*/ /*let body = new Jira.BulkCreateCustomFieldOptionRequest();*/ apiInstance.customFieldFieldIdOptionPost(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
      incomingOptions.body,
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
Create draft workflow scheme

 */
  workflowschemeIdCreatedraftPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft is created from.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdCreatedraftPost(
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

  // This is a function for groupPost
  /*
Create group

 */
  groupPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // AddGroupBean | The name of the group.
    /*let cloudid = null;*/ /*let body = new Jira.AddGroupBean();*/ apiInstance.groupPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Add user to group

 */
  groupUserPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // String | The name of the group (case sensitive) // UpdateUserToGroupBean | The user to add to the group.
    /*let cloudid = null;*/ /*let groupname = "groupname_example";*/ /*let body = new Jira.UpdateUserToGroupBean();*/ apiInstance.groupUserPost(
      incomingOptions.cloudid,
      incomingOptions.groupname,
      incomingOptions.body,
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
Create issue field option

 */
  fieldFieldKeyOptionPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\" // IssueFieldOptionCreateBean |
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let body = new Jira.IssueFieldOptionCreateBean();*/ apiInstance.fieldFieldKeyOptionPost(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkPost
  /*
Create issue link

 */
  issueLinkPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinksApi(); // Object | Cloudi of the projec // LinkIssueRequestJsonBean | The issue link request.
    /*let cloudid = null;*/ /*let body = new Jira.LinkIssueRequestJsonBean();*/ apiInstance.issueLinkPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Create custom field

 */
  fieldPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldsApi(); // Object | Cloudi of the projec // CustomFieldDefinitionJsonBean | Definition of the custom field to be created
    /*let cloudid = null;*/ /*let body = new Jira.CustomFieldDefinitionJsonBean();*/ apiInstance.fieldPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for webhookPost
  /*
Register dynamic webhooks

 */
  webhookPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WebhooksApi(); // Object | Cloudi of the projec // WebhookRegistrationDetails |
    /*let cloudid = null;*/ /*let body = new Jira.WebhookRegistrationDetails();*/ apiInstance.webhookPost(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Create project

 */
  projectPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // ProjectInputBean | The JSON representation of the project being created.
    /*let cloudid = null;*/ /*let body = new Jira.ProjectInputBean();*/ apiInstance.projectPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdOrKeyDeletePost
  /*
Delete project asynchronously

 */
  projectProjectIdOrKeyDeletePost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ apiInstance.projectProjectIdOrKeyDeletePost(
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

  // This is a function for issuePropertiesPost
  /*
Bulk set issues properties

 */
  issuePropertiesPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // IssueEntityProperties | Issue properties to be set or updated with values.
    /*let cloudid = null;*/ /*let body = new Jira.IssueEntityProperties();*/ apiInstance.issuePropertiesPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, '', response);
        }
      }
    );
  }

  // This is a function for dashboardIdCopyPost
  /*
Copy dashboard

 */
  dashboardIdCopyPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | // DashboardRequest | Dashboard details.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.DashboardRequest();*/ apiInstance.dashboardIdCopyPost(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardPost
  /*
Create dashboard

 */
  dashboardPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // DashboardRequest | Dashboard details.
    /*let cloudid = null;*/ /*let body = new Jira.DashboardRequest();*/ apiInstance.dashboardPost(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogPost
  /*
Add worklog

 */
  issueIssueIdOrKeyWorklogPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // String | The ID or key the issue // Worklog |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.Worklog();*/ let opts = {
      notifyUsers: true, // Boolean | Whether users watching the issue are notified by email.
      adjustEstimate: "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
      //  'reduceBy': "reduceBy_example", // String | The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`.
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.
      overrideEditableFlag: false, // Boolean | Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
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
      incomingOptions.body,
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
Get worklogs

 */
  worklogListPost(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // WorklogIdsRequestBean | A JSON object containing a list of worklog IDs.
    /*let cloudid = null;*/ /*let body = new Jira.WorklogIdsRequestBean();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
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
      incomingOptions.body,
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
      case 'COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY':
        /*

Set comment property


      Function parameters for this API cloudid,commentId,propertyKey,body
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

      case 'WORKFLOW_RULE_CONFIG':
        /*

Update workflow transition rule configurations


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.workflowRuleConfigPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_CATEGORY_ID':
        /*

Update project category


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.projectCategoryIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*

Set actors for project role


      Function parameters for this API cloudid,projectIdOrKey,id,body
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

      case 'ROLE_ID':
        /*

Fully update project role


      Function parameters for this API cloudid,id,body
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

Update screen tab


      Function parameters for this API cloudid,screenId,tabId,body
        */
        return new Promise((resolve, reject) => {
          this.screensScreenIdTabsTabIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY':
        /*

Set worklog property


      Function parameters for this API cloudid,issueIdOrKey,worklogId,propertyKey,body
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

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*

Update workflow transition property


      Function parameters for this API cloudid,transitionId,key,workflowName,body,opts
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

      case 'SETTINGS_COLUMNS':
        /*

Set issue navigator default columns


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.settingsColumnsPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Set project property


      Function parameters for this API cloudid,projectIdOrKey,propertyKey,body
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

      case 'VERSION_ID_MERGETO_MOVE_ISSUES_TO':
        /*

Merge versions


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

Update version


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.versionIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_COLUMNS':
        /*

Set user default columns


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

      case 'ISSUE_ISSUE_ID_OR_KEY_ASSIGNEE':
        /*

Assign issue


      Function parameters for this API cloudid,issueIdOrKey,body
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyAssigneePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY':
        /*

Edit issue


      Function parameters for this API cloudid,issueIdOrKey,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'MYPREFERENCES_LOCALE':
        /*

Set locale


      Function parameters for this API cloudid,body
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

Set preference


      Function parameters for this API cloudid,key,body
        */
        return new Promise((resolve, reject) => {
          this.mypreferencesPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPESCHEME_PROJECT':
        /*

Assign issue type scheme to project


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issuetypeschemeProjectPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID':
        /*

Update comment


      Function parameters for this API cloudid,issueIdOrKey,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyCommentIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FILTER_DEFAULT_SHARE_SCOPE':
        /*

Set default share scope


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.filterDefaultShareScopePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR':
        /*

Set project avatar


      Function parameters for this API cloudid,projectIdOrKey,body
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

      case 'ISSUETYPE_ID':
        /*

Update issue type


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.issuetypeIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*

Update default workflow


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdDefaultPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE':
        /*

Set workflow for issue type in workflow scheme


      Function parameters for this API cloudid,id,issueType,body
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

Update workflow scheme


      Function parameters for this API cloudid,id,body
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

Set issue types for workflow in workflow scheme


      Function parameters for this API cloudid,id,workflowName,body
        */
        return new Promise((resolve, reject) => {
          this.workflowschemeIdWorkflowPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID':
        /*

Update issue link type


      Function parameters for this API cloudid,issueLinkTypeId,body
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

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY':
        /*

Set issue type property


      Function parameters for this API cloudid,issueTypeId,propertyKey,body
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

      case 'FILTER_ID_COLUMNS':
        /*

Set columns


      Function parameters for this API cloudid,id,opts
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

Add filter as favorite


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

Update filter


      Function parameters for this API cloudid,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.filterIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PERMISSIONSCHEME_SCHEME_ID':
        /*

Update permission scheme


      Function parameters for this API cloudid,schemeId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.permissionschemeSchemeIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID':
        /*

Update remote issue link by ID


      Function parameters for this API cloudid,issueIdOrKey,linkId,body
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

      case 'APPLICATION_PROPERTIES_ID':
        /*

Set application property


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.applicationPropertiesIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'COMPONENT_ID':
        /*

Update component


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.componentIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CUSTOM_FIELD_FIELD_ID_OPTION':
        /*

Update custom field options


      Function parameters for this API cloudid,fieldId,body
        */
        return new Promise((resolve, reject) => {
          this.customFieldFieldIdOptionPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*

Update draft default workflow


      Function parameters for this API cloudid,id,body
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

Set workflow for issue type in draft workflow scheme


      Function parameters for this API cloudid,id,issueType,body
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

Update draft workflow scheme


      Function parameters for this API cloudid,id,body
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

Set issue types for workflow in workflow scheme


      Function parameters for this API cloudid,id,workflowName,body
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

      case 'USER_PROPERTIES_PROPERTY_KEY':
        /*

Set user property


      Function parameters for this API cloudid,propertyKey,body,opts
        */
        return new Promise((resolve, reject) => {
          this.userPropertiesPropertyKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUETYPESCREENSCHEME_PROJECT':
        /*

Assign issue type screen scheme to project


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.issuetypescreenschemeProjectPut(
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

Update issue field option


      Function parameters for this API cloudid,fieldKey,optionId,body
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

      case 'WEBHOOK_REFRESH':
        /*

Extend webhook life


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.webhookRefreshPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'FIELDCONFIGURATIONSCHEME_PROJECT':
        /*

Assign field configuration scheme to project


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.fieldconfigurationschemeProjectPut(
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

Assign permission scheme


      Function parameters for this API cloudid,projectKeyOrId,body,opts
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

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*

Update project


      Function parameters for this API cloudid,projectIdOrKey,body,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY_TYPE_NEW_PROJECT_TYPE_KEY':
        /*

Update project type


      Function parameters for this API cloudid,projectIdOrKey,newProjectTypeKey
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

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Set issue property


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,body
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

      case 'ISSUE_PROPERTIES_PROPERTY_KEY':
        /*

Bulk set issue property


      Function parameters for this API cloudid,propertyKey,body
        */
        return new Promise((resolve, reject) => {
          this.issuePropertiesPropertyKeyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'CONFIGURATION_TIMETRACKING_OPTIONS':
        /*

Set time tracking settings


      Function parameters for this API cloudid,body
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

Select time tracking provider


      Function parameters for this API cloudid,body
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

Set dashboard item property


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey,body
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

      case 'DASHBOARD_ID':
        /*

Update dashboard


      Function parameters for this API cloudid,id,body
        */
        return new Promise((resolve, reject) => {
          this.dashboardIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REST_ATLASSIAN_CONNECT1_ADDONS_ADDON_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Set app property


      Function parameters for this API cloudid,addonKey,propertyKey,body
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(
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

Update worklog


      Function parameters for this API cloudid,issueIdOrKey,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.issueIssueIdOrKeyWorklogIdPut(options, (err, data, response) => {
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
  // This is a function for commentCommentIdPropertiesPropertyKeyPut
  /*
Set comment property

 */
  commentCommentIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentPropertiesApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let commentId = "commentId_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.commentCommentIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.commentId,
      incomingOptions.propertyKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowRuleConfigPut
  /*
Update workflow transition rule configurations

 */
  workflowRuleConfigPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionRulesApi(); // Object | Cloudi of the projec // WorkflowTransitionRulesUpdate |
    /*let cloudid = null;*/ /*let body = new Jira.WorkflowTransitionRulesUpdate();*/ apiInstance.workflowRuleConfigPut(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Update project category

 */
  projectCategoryIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectCategoriesApi(); // Object | Cloudi of the projec // Number | // ProjectCategory |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.ProjectCategory();*/ apiInstance.projectCategoryIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Set actors for project role

 */
  projectProjectIdOrKeyRoleIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs // ProjectRoleActorsUpdateBean | The groups or users to associate with the project role for this project. Provide the user account ID or group name.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let id = 789;*/ /*let body = new Jira.ProjectRoleActorsUpdateBean();*/ apiInstance.projectProjectIdOrKeyRoleIdPut(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.projectIdOrKey,
      id,
      incomingOptions.body,
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
Fully update project role

 */
  roleIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs // CreateUpdateRoleRequestBean |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.CreateUpdateRoleRequestBean();*/ apiInstance.roleIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Update screen tab

 */
  screensScreenIdTabsTabIdPut(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab // ScreenableTab |
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ /*let body = new Jira.ScreenableTab();*/ apiInstance.screensScreenIdTabsTabIdPut(
      incomingOptions.cloudid,
      incomingOptions.screenId,
      incomingOptions.tabId,
      incomingOptions.body,
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
Set worklog property

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogPropertiesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog // String | The key of the issue property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let worklogId = "worklogId_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.worklogId,
      incomingOptions.propertyKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for workflowTransitionsTransitionIdPropertiesPut
  /*
Update workflow transition property

 */
  workflowTransitionsTransitionIdPropertiesPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionPropertiesApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition // String | The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body // String | The name of the workflow that the transition belongs to // WorkflowTransitionProperty |
    /*let cloudid = null;*/ /*let transitionId = 789;*/ /*let key = "key_example";*/ /*let workflowName = "workflowName_example";*/ /*let body = new Jira.WorkflowTransitionProperty();*/ let opts = {
      //  'workflowMode': "workflowMode_example" // String | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
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
      incomingOptions.key,
      incomingOptions.workflowName,
      incomingOptions.body,
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
Set issue navigator default columns

 */
  settingsColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueNavigatorSettingsApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'body': "body_example" // [String] | A navigable field value.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.settingsColumnsPut(
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

  // This is a function for projectProjectIdOrKeyPropertiesPropertyKeyPut
  /*
Set project property

 */
  projectProjectIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPropertiesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The key of the project property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.propertyKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdMergetoMoveIssuesToPut
  /*
Merge versions

 */
  versionIdMergetoMoveIssuesToPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version to delete // String | The ID of the version to merge into.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let moveIssuesTo = "moveIssuesTo_example";*/ apiInstance.versionIdMergetoMoveIssuesToPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.moveIssuesTo,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for versionIdPut
  /*
Update version

 */
  versionIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version // Version |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.Version();*/ apiInstance.versionIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userColumnsPut
  /*
Set user default columns

 */
  userColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'body': "body_example" // [String] | The ID of a column to set. To set multiple columns, send multiple `columns` parameters.
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
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyAssigneePut
  /*
Assign issue

 */
  issueIssueIdOrKeyAssigneePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue to be assigned // User | The request object with the user that the issue is assigned to.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.User();*/ apiInstance.issueIssueIdOrKeyAssigneePut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyPut
  /*
Edit issue

 */
  issueIssueIdOrKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // IssueUpdateDetails |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let body = new Jira.IssueUpdateDetails();*/ let opts = {
      notifyUsers: true, // Boolean | Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
      overrideScreenSecurity: false, // Boolean | Whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
      overrideEditableFlag: false, // Boolean | Whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
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
      incomingOptions.body,
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

  // This is a function for mypreferencesLocalePut
  /*
Set locale

 */
  mypreferencesLocalePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the projec // Locale | The locale defined in a LocaleBean.
    /*let cloudid = null;*/ /*let body = new Jira.Locale();*/ apiInstance.mypreferencesLocalePut(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for mypreferencesPut
  /*
Set preference

 */
  mypreferencesPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the projec // String | The key of the preference. The maximum length is 255 characters // String | The value of the preference as a plain text string. The maximum length is 255 characters.
    /*let cloudid = null;*/ /*let key = "key_example";*/ /*let body = "body_example";*/ apiInstance.mypreferencesPut(
      incomingOptions.cloudid,
      incomingOptions.key,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeschemeProjectPut
  /*
Assign issue type scheme to project

 */
  issuetypeschemeProjectPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeSchemesApi(); // Object | Cloudi of the projec // IssueTypeSchemeProjectAssociation |
    /*let cloudid = null;*/ /*let body = new Jira.IssueTypeSchemeProjectAssociation();*/ apiInstance.issuetypeschemeProjectPut(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyCommentIdPut
  /*
Update comment

 */
  issueIssueIdOrKeyCommentIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the comment // Comment |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ /*let body = new Jira.Comment();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
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
      incomingOptions.issueIdOrKey,
      id,
      incomingOptions.body,
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
Set default share scope

 */
  filterDefaultShareScopePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the projec // DefaultShareScope |
    /*let cloudid = null;*/ /*let body = new Jira.DefaultShareScope();*/ apiInstance.filterDefaultShareScopePut(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Set project avatar

 */
  projectProjectIdOrKeyAvatarPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectAvatarsApi(); // Object | Cloudi of the projec // String | The ID or (case-sensitive) key of the project // Avatar |
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let body = new Jira.Avatar();*/ apiInstance.projectProjectIdOrKeyAvatarPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIdPut
  /*
Update issue type

 */
  issuetypeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue type // IssueTypeUpdateBean |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.IssueTypeUpdateBean();*/ apiInstance.issuetypeIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Update default workflow

 */
  workflowschemeIdDefaultPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // DefaultWorkflow | The new default workflow.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.DefaultWorkflow();*/ apiInstance.workflowschemeIdDefaultPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Set workflow for issue type in workflow scheme

 */
  workflowschemeIdIssuetypeIssueTypePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type // IssueTypeWorkflowMapping | The issue type-project mapping.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ /*let body = new Jira.IssueTypeWorkflowMapping();*/ apiInstance.workflowschemeIdIssuetypeIssueTypePut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.body,
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
Update workflow scheme

 */
  workflowschemeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301* // WorkflowScheme |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.WorkflowScheme();*/ apiInstance.workflowschemeIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Set issue types for workflow in workflow scheme

 */
  workflowschemeIdWorkflowPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The name of the workflow // IssueTypesWorkflowMapping |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let workflowName = "workflowName_example";*/ /*let body = new Jira.IssueTypesWorkflowMapping();*/ apiInstance.workflowschemeIdWorkflowPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.workflowName,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueLinkTypeIssueLinkTypeIdPut
  /*
Update issue link type

 */
  issueLinkTypeIssueLinkTypeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.IssueLinkTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue link type // IssueLinkType |
    /*let cloudid = null;*/ /*let issueLinkTypeId = "issueLinkTypeId_example";*/ /*let body = new Jira.IssueLinkType();*/ apiInstance.issueLinkTypeIssueLinkTypeIdPut(
      incomingOptions.cloudid,
      incomingOptions.issueLinkTypeId,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuetypeIssueTypeIdPropertiesPropertyKeyPut
  /*
Set issue type property

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypePropertiesApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the issue type property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let issueTypeId = "issueTypeId_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueTypeId,
      incomingOptions.propertyKey,
      incomingOptions.body,
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
Set columns

 */
  filterIdColumnsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'body': "body_example" // [String] | The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.filterIdColumnsPut(
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

  // This is a function for filterIdFavouritePut
  /*
Add filter as favorite

 */
  filterIdFavouritePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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
Update filter

 */
  filterIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter to update // Filter | The filter to update.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.Filter();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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
      incomingOptions.body,
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

  // This is a function for permissionschemeSchemeIdPut
  /*
Update permission scheme

 */
  permissionschemeSchemeIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme to update // PermissionScheme |
    /*let cloudid = null;*/ /*let schemeId = 789;*/ /*let body = new Jira.PermissionScheme();*/ let opts = {
      //  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
      incomingOptions.body,
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

  // This is a function for issueIssueIdOrKeyRemotelinkLinkIdPut
  /*
Update remote issue link by ID

 */
  issueIssueIdOrKeyRemotelinkLinkIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the remote issue link // RemoteIssueLinkRequest |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let linkId = "linkId_example";*/ /*let body = new Jira.RemoteIssueLinkRequest();*/ apiInstance.issueIssueIdOrKeyRemotelinkLinkIdPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.linkId,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for applicationPropertiesIdPut
  /*
Set application property

 */
  applicationPropertiesIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.JiraSettingsApi(); // Object | Cloudi of the projec // String | The key of the application property to update // SimpleApplicationPropertyBean |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.SimpleApplicationPropertyBean();*/ apiInstance.applicationPropertiesIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for componentIdPut
  /*
Update component

 */
  componentIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The ID of the component // Component |
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.Component();*/ apiInstance.componentIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for customFieldFieldIdOptionPut
  /*
Update custom field options

 */
  customFieldFieldIdOptionPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsApi(); // Object | Cloudi of the projec // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075* // UpdateCustomFieldOption |
    /*let cloudid = null;*/ /*let fieldId = 789;*/ /*let body = new Jira.UpdateCustomFieldOption();*/ apiInstance.customFieldFieldIdOptionPut(
      incomingOptions.cloudid,
      incomingOptions.fieldId,
      incomingOptions.body,
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
Update draft default workflow

 */
  workflowschemeIdDraftDefaultPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // DefaultWorkflow | The object for the new default workflow.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.DefaultWorkflow();*/ apiInstance.workflowschemeIdDraftDefaultPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Set workflow for issue type in draft workflow scheme

 */
  workflowschemeIdDraftIssuetypeIssueTypePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type // IssueTypeWorkflowMapping | The issue type-project mapping.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ /*let body = new Jira.IssueTypeWorkflowMapping();*/ apiInstance.workflowschemeIdDraftIssuetypeIssueTypePut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.issueType,
      incomingOptions.body,
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
Update draft workflow scheme

 */
  workflowschemeIdDraftPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was created from // WorkflowScheme |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let body = new Jira.WorkflowScheme();*/ apiInstance.workflowschemeIdDraftPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
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
Set issue types for workflow in workflow scheme

 */
  workflowschemeIdDraftWorkflowPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The name of the workflow // IssueTypesWorkflowMapping |
    /*let cloudid = null;*/ /*let id = 789;*/ /*let workflowName = "workflowName_example";*/ /*let body = new Jira.IssueTypesWorkflowMapping();*/ apiInstance.workflowschemeIdDraftWorkflowPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.workflowName,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPropertiesPropertyKeyPut
  /*
Set user property

 */
  userPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserPropertiesApi(); // Object | Cloudi of the projec // String | The key of the user's property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'userKey': "userKey_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
      incomingOptions.body,
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

  // This is a function for issuetypescreenschemeProjectPut
  /*
Assign issue type screen scheme to project

 */
  issuetypescreenschemeProjectPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypeScreenSchemesApi(); // Object | Cloudi of the projec // IssueTypeScreenSchemeProjectAssociation |
    /*let cloudid = null;*/ /*let body = new Jira.IssueTypeScreenSchemeProjectAssociation();*/ apiInstance.issuetypescreenschemeProjectPut(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldFieldKeyOptionOptionIdPut
  /*
Update issue field option

 */
  fieldFieldKeyOptionOptionIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\" // Number | The ID of the option to be updated // IssueFieldOption |
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 789;*/ /*let body = new Jira.IssueFieldOption();*/ apiInstance.fieldFieldKeyOptionOptionIdPut(
      incomingOptions.cloudid,
      incomingOptions.fieldKey,
      incomingOptions.optionId,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for webhookRefreshPut
  /*
Extend webhook life

 */
  webhookRefreshPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WebhooksApi(); // Object | Cloudi of the projec // ContainerForWebhookIDs |
    /*let cloudid = null;*/ /*let body = new Jira.ContainerForWebhookIDs();*/ apiInstance.webhookRefreshPut(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for fieldconfigurationschemeProjectPut
  /*
Assign field configuration scheme to project

 */
  fieldconfigurationschemeProjectPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueFieldConfigurationsApi(); // Object | Cloudi of the projec // FieldConfigurationSchemeProjectAssociation |
    /*let cloudid = null;*/ /*let body = new Jira.FieldConfigurationSchemeProjectAssociation();*/ apiInstance.fieldconfigurationschemeProjectPut(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Assign permission scheme

 */
  projectProjectKeyOrIdPermissionschemePut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPermissionSchemesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // IdBean |
    /*let cloudid = null;*/ /*let projectKeyOrId = "projectKeyOrId_example";*/ /*let body = new Jira.IdBean();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
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
      incomingOptions.body,
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

  // This is a function for projectProjectIdOrKeyPut
  /*
Update project

 */
  projectProjectIdOrKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // ProjectInputBean | The project details to be updated.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let body = new Jira.ProjectInputBean();*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.
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
      incomingOptions.body,
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
Update project type

 */
  projectProjectIdOrKeyTypeNewProjectTypeKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The key of the new project type.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let newProjectTypeKey = "newProjectTypeKey_example";*/ apiInstance.projectProjectIdOrKeyTypeNewProjectTypeKeyPut(
      incomingOptions.cloudid,
      incomingOptions.projectIdOrKey,
      incomingOptions.newProjectTypeKey,
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
Set issue property

 */
  issueIssueIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The key of the issue property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.propertyKey,
      incomingOptions.body,
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
Bulk set issue property

 */
  issuePropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The key of the property. The maximum length is 255 characters // BulkIssuePropertyUpdateRequest |
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ /*let body = new Jira.BulkIssuePropertyUpdateRequest();*/ apiInstance.issuePropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.body,
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
Set time tracking settings

 */
  configurationTimetrackingOptionsPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TimeTrackingApi(); // Object | Cloudi of the projec // TimeTrackingConfiguration |
    /*let cloudid = null;*/ /*let body = new Jira.TimeTrackingConfiguration();*/ apiInstance.configurationTimetrackingOptionsPut(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Select time tracking provider

 */
  configurationTimetrackingPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.TimeTrackingApi(); // Object | Cloudi of the projec // TimeTrackingProvider |
    /*let cloudid = null;*/ /*let body = new Jira.TimeTrackingProvider();*/ apiInstance.configurationTimetrackingPut(
      incomingOptions.cloudid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut
  /*
Set dashboard item property

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property. The maximum length is 255 characters // Object |
    /*let cloudid = null;*/ /*let dashboardId = "dashboardId_example";*/ /*let itemId = "itemId_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.dashboardId,
      incomingOptions.itemId,
      incomingOptions.propertyKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for dashboardIdPut
  /*
Update dashboard

 */
  dashboardIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard to update // DashboardRequest | Replacement dashboard details.
    /*let cloudid = null;*/ /*let id = "id_example";*/ /*let body = new Jira.DashboardRequest();*/ apiInstance.dashboardIdPut(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut
  /*
Set app property

 */
  restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AppPropertiesApi(); // Object | Cloudi of the projec // String | The key of the app, as defined in its descriptor // String | The key of the property // Object |
    /*let cloudid = null;*/ /*let addonKey = "addonKey_example";*/ /*let propertyKey = "propertyKey_example";*/ /*let body = null;*/ apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(
      incomingOptions.cloudid,
      incomingOptions.addonKey,
      incomingOptions.propertyKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issueIssueIdOrKeyWorklogIdPut
  /*
Update worklog

 */
  issueIssueIdOrKeyWorklogIdPut(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // String | The ID or key the issue // String | The ID of the worklog // Worklog |
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ /*let body = new Jira.Worklog();*/ let opts = {
      notifyUsers: true, // Boolean | Whether users watching the issue are notified by email.
      adjustEstimate: "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`.
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
      //  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.
      overrideEditableFlag: false, // Boolean | Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Only connect app users with admin permissions can use this flag.
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
      incomingOptions.issueIdOrKey,
      id,
      incomingOptions.body,
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
      case 'COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY':
        /*

Delete comment property


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

      case 'REST_ATLASSIAN_CONNECT1_APP_MODULE_DYNAMIC':
        /*

Remove modules


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AppModuleDynamicDelete(
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

Delete project category


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

      case 'UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_OWNING_OBJECT_ID_AVATAR_ID':
        /*

Delete avatar


      Function parameters for this API cloudid,type,owningObjectId,id
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

      case 'PROJECT_PROJECT_ID_OR_KEY_ROLE_ID':
        /*

Delete actors from project role


      Function parameters for this API cloudid,projectIdOrKey,id,opts
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

Delete default actors from project role


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

      case 'ATTACHMENT_ID':
        /*

Delete attachment


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

      case 'ROLE_ID':
        /*

Delete project role


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

Delete screen tab


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

Remove screen tab field


      Function parameters for this API cloudid,screenId,tabId,id
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

      case 'ISSUE_ISSUE_ID_OR_KEY_WATCHERS':
        /*

Delete watcher


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

      case 'ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY':
        /*

Delete worklog property


      Function parameters for this API cloudid,issueIdOrKey,worklogId,propertyKey
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

      case 'WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES':
        /*

Delete workflow transition property


      Function parameters for this API cloudid,transitionId,key,workflowName,opts
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

      case 'PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Delete project property


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

      case 'VERSION_ID':
        /*

Delete version


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

      case 'USER_COLUMNS':
        /*

Reset user default columns


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

Delete user


      Function parameters for this API cloudid,accountId,opts
        */
        return new Promise((resolve, reject) => {
          this.userDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY':
        /*

Delete issue


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

      case 'MYPREFERENCES':
        /*

Delete preference


      Function parameters for this API cloudid,key
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

Delete locale


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

      case 'ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID':
        /*

Delete comment


      Function parameters for this API cloudid,issueIdOrKey,id
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

      case 'FILTER_ID_PERMISSION_PERMISSION_ID':
        /*

Delete share permission


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

      case 'PROJECT_PROJECT_ID_OR_KEY_AVATAR_ID':
        /*

Delete project avatar


      Function parameters for this API cloudid,projectIdOrKey,id
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

      case 'ISSUETYPE_ID':
        /*

Delete issue type


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

      case 'WORKFLOWSCHEME_ID_DEFAULT':
        /*

Delete default workflow


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

Delete workflow scheme


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

      case 'WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE':
        /*

Delete workflow for issue type in workflow scheme


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

Delete issue types for workflow in workflow scheme


      Function parameters for this API cloudid,id,workflowName,opts
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

      case 'ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID':
        /*

Delete issue link type


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

      case 'ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY':
        /*

Delete issue type property


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

      case 'FILTER_ID_COLUMNS':
        /*

Reset columns


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

Delete filter


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

Remove filter as favorite


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

      case 'PERMISSIONSCHEME_SCHEME_ID':
        /*

Delete permission scheme


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

Delete permission scheme grant


      Function parameters for this API cloudid,schemeId,permissionId
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

      case 'ISSUE_ISSUE_ID_OR_KEY_REMOTELINK':
        /*

Delete remote issue link by global ID


      Function parameters for this API cloudid,issueIdOrKey,globalId
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

Delete remote issue link by ID


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

Delete vote


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

      case 'COMPONENT_ID':
        /*

Delete component


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

      case 'WORKFLOWSCHEME_ID_DRAFT_DEFAULT':
        /*

Delete draft default workflow


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

Delete draft workflow scheme


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

Delete workflow for issue type in draft workflow scheme


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

Delete issue types for workflow in draft workflow scheme


      Function parameters for this API cloudid,id,workflowName
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

      case 'GROUP':
        /*

Remove group


      Function parameters for this API cloudid,groupname,opts
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

Remove user from group


      Function parameters for this API cloudid,groupname,accountId,opts
        */
        return new Promise((resolve, reject) => {
          this.groupUserDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_PROPERTIES_PROPERTY_KEY':
        /*

Delete user property


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

      case 'FIELD_FIELD_KEY_OPTION_OPTION_ID':
        /*

Delete issue field option


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

Replace issue field option


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

      case 'ISSUE_LINK_LINK_ID':
        /*

Delete issue link


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

      case 'WEBHOOK':
        /*

Delete webhooks by ID


      Function parameters for this API cloudid,body
        */
        return new Promise((resolve, reject) => {
          this.webhookDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_OR_KEY':
        /*

Delete project


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdOrKeyDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Delete issue property


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

      case 'ISSUE_PROPERTIES_PROPERTY_KEY':
        /*

Bulk delete issue property


      Function parameters for this API cloudid,propertyKey,body
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

      case 'DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY':
        /*

Delete dashboard item property


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

      case 'DASHBOARD_ID':
        /*

Delete dashboard


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.dashboardIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REST_ATLASSIAN_CONNECT1_ADDONS_ADDON_KEY_PROPERTIES_PROPERTY_KEY':
        /*

Delete app property


      Function parameters for this API cloudid,addonKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(
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

Delete worklog


      Function parameters for this API cloudid,issueIdOrKey,id,opts
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

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for commentCommentIdPropertiesPropertyKeyDelete
  /*
Delete comment property

 */
  commentCommentIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentPropertiesApi(); // Object | Cloudi of the projec // String | The ID of the comment // String | The key of the property.
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

  // This is a function for restAtlassianConnect1AppModuleDynamicDelete
  /*
Remove modules

 */
  restAtlassianConnect1AppModuleDynamicDelete(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.DynamicModulesApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      moduleKey: ['null'], // [String] | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.restAtlassianConnect1AppModuleDynamicDelete(
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

  // This is a function for projectCategoryIdDelete
  /*
Delete project category

 */
  projectCategoryIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectCategoriesApi(); // Object | Cloudi of the projec // Number | ID of the project category to delete.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.projectCategoryIdDelete(
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

  // This is a function for universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete
  /*
Delete avatar

 */
  universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AvatarsApi(); // Object | Cloudi of the projec // String | The avatar type // String | The ID of the item the avatar is associated with // Number | The ID of the avatar.
    /*let cloudid = null;*/ /*let type = "type_example";*/ /*let owningObjectId = "owningObjectId_example";*/ /*let id = 789;*/ apiInstance.universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.type,
      incomingOptions.owningObjectId,
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

  // This is a function for projectProjectIdOrKeyRoleIdDelete
  /*
Delete actors from project role

 */
  projectProjectIdOrKeyRoleIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let id = 789;*/ let opts = {
      //  'user': "user_example", // String | The user account ID of the user to remove from the project role.
      //  'group': "group_example" // String | The name of the group to remove from the project role.
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
      incomingOptions.projectIdOrKey,
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

  // This is a function for roleIdActorsDelete
  /*
Delete default actors from project role

 */
  roleIdActorsDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRoleActorsApi(); // Object | Cloudi of the projec // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'user': "user_example", // String | The user account ID of the user to remove as a default actor.
      //  'group': "group_example" // String | The group name of the group to be removed as a default actor.
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

  // This is a function for attachmentIdDelete
  /*
Delete attachment

 */
  attachmentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueAttachmentsApi(); // Object | Cloudi of the projec // String | The ID of the attachment.
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

  // This is a function for roleIdDelete
  /*
Delete project role

 */
  roleIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectRolesApi(); // Object | Cloudi of the projec // Number | The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      swap: 789, // Number | The ID of the project role that will replace the one being deleted.
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
Delete screen tab

 */
  screensScreenIdTabsTabIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab.
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ apiInstance.screensScreenIdTabsTabIdDelete(
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
Remove screen tab field

 */
  screensScreenIdTabsTabIdFieldsIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.ScreensApi(); // Object | Cloudi of the projec // Number | The ID of the screen // Number | The ID of the screen tab // String | The ID of the field.
    /*let cloudid = null;*/ /*let screenId = 789;*/ /*let tabId = 789;*/ /*let id = "id_example";*/ apiInstance.screensScreenIdTabsTabIdFieldsIdDelete(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.screenId,
      incomingOptions.tabId,
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

  // This is a function for issueIssueIdOrKeyWatchersDelete
  /*
Delete watcher

 */
  issueIssueIdOrKeyWatchersDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWatchersApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'accountId': "accountId_example" // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
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

  // This is a function for issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete
  /*
Delete worklog property

 */
  issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogPropertiesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog // String | The key of the property.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let worklogId = "worklogId_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.worklogId,
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

  // This is a function for workflowTransitionsTransitionIdPropertiesDelete
  /*
Delete workflow transition property

 */
  workflowTransitionsTransitionIdPropertiesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowTransitionPropertiesApi(); // Object | Cloudi of the projec // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition // String | The name of the transition property to delete, also known as the name of the property // String | The name of the workflow that the transition belongs to.
    /*let cloudid = null;*/ /*let transitionId = 789;*/ /*let key = "key_example";*/ /*let workflowName = "workflowName_example";*/ let opts = {
      //  'workflowMode': "workflowMode_example" // String | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
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
      incomingOptions.key,
      incomingOptions.workflowName,
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

  // This is a function for projectProjectIdOrKeyPropertiesPropertyKeyDelete
  /*
Delete project property

 */
  projectProjectIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectPropertiesApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive) // String | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
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

  // This is a function for versionIdDelete
  /*
Delete version

 */
  versionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectVersionsApi(); // Object | Cloudi of the projec // String | The ID of the version.
    /*let cloudid = null;*/ /*let id = "id_example";*/ let opts = {
      //  'moveFixIssuesTo': "moveFixIssuesTo_example", // String | The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
      //  'moveAffectedIssuesTo': "moveAffectedIssuesTo_example" // String | The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
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

  // This is a function for userColumnsDelete
  /*
Reset user default columns

 */
  userColumnsDelete(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
Delete user

 */
  userDelete(incomingOptions, cb) {
    const Jira = require('./dist');

    let apiInstance = new Jira.UsersApi(); // Object | Cloudi of the projec // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    /*let cloudid = null;*/ /*let accountId = "accountId_example";*/ let opts = {
      //  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'key': "key_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
      incomingOptions.accountId,
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

  // This is a function for issueIssueIdOrKeyDelete
  /*
Delete issue

 */
  issueIssueIdOrKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ let opts = {
      deleteSubtasks: "'false'", // String | Whether the issue's subtasks are deleted when the issue is deleted.
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

  // This is a function for mypreferencesDelete
  /*
Delete preference

 */
  mypreferencesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the projec // String | The key of the preference.
    /*let cloudid = null;*/ /*let key = "key_example";*/ apiInstance.mypreferencesDelete(
      incomingOptions.cloudid,
      incomingOptions.key,
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
Delete locale

 */
  mypreferencesLocaleDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.MyselfApi(); // Object | Cloudi of the project
    /*let cloudid = null;*/ apiInstance.mypreferencesLocaleDelete(
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

  // This is a function for issueIssueIdOrKeyCommentIdDelete
  /*
Delete comment

 */
  issueIssueIdOrKeyCommentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCommentsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the comment.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ apiInstance.issueIssueIdOrKeyCommentIdDelete(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.issueIdOrKey,
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

  // This is a function for filterIdPermissionPermissionIdDelete
  /*
Delete share permission

 */
  filterIdPermissionPermissionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FilterSharingApi(); // Object | Cloudi of the projec // Number | The ID of the filter // Number | The ID of the share permission.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let permissionId = 789;*/ apiInstance.filterIdPermissionPermissionIdDelete(
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

  // This is a function for projectProjectIdOrKeyAvatarIdDelete
  /*
Delete project avatar

 */
  projectProjectIdOrKeyAvatarIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectAvatarsApi(); // Object | Cloudi of the projec // String | The project ID or (case-sensitive) key // Number | The ID of the avatar.
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ /*let id = 789;*/ apiInstance.projectProjectIdOrKeyAvatarIdDelete(
      incomingOptions.cloudincomingOptions.id,
      incomingOptions.projectIdOrKey,
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

  // This is a function for issuetypeIdDelete
  /*
Delete issue type

 */
  issuetypeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue type.
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

  // This is a function for workflowschemeIdDefaultDelete
  /*
Delete default workflow

 */
  workflowschemeIdDefaultDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
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
Delete workflow scheme

 */
  workflowschemeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdDelete(
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

  // This is a function for workflowschemeIdIssuetypeIssueTypeDelete
  /*
Delete workflow for issue type in workflow scheme

 */
  workflowschemeIdIssuetypeIssueTypeDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.
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
Delete issue types for workflow in workflow scheme

 */
  workflowschemeIdWorkflowDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme // String | The name of the workflow.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let workflowName = "workflowName_example";*/ let opts = {
      updateDraftIfNeeded: true, // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
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
      incomingOptions.workflowName,
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

  // This is a function for issueLinkTypeIssueLinkTypeIdDelete
  /*
Delete issue link type

 */
  issueLinkTypeIssueLinkTypeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinkTypesApi(); // Object | Cloudi of the projec // String | The ID of the issue link type.
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

  // This is a function for issuetypeIssueTypeIdPropertiesPropertyKeyDelete
  /*
Delete issue type property

 */
  issuetypeIssueTypeIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueTypePropertiesApi(); // Object | Cloudi of the projec // String | The ID of the issue type // String | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
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

  // This is a function for filterIdColumnsDelete
  /*
Reset columns

 */
  filterIdColumnsDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.filterIdColumnsDelete(
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
Delete filter

 */
  filterIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter to delete.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.filterIdDelete(
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
Remove filter as favorite

 */
  filterIdFavouriteDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.FiltersApi(); // Object | Cloudi of the projec // Number | The ID of the filter.
    /*let cloudid = null;*/ /*let id = 789;*/ let opts = {
      //  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
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

  // This is a function for permissionschemeSchemeIdDelete
  /*
Delete permission scheme

 */
  permissionschemeSchemeIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme being deleted.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ apiInstance.permissionschemeSchemeIdDelete(
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
Delete permission scheme grant

 */
  permissionschemeSchemeIdPermissionPermissionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.PermissionSchemesApi(); // Object | Cloudi of the projec // Number | The ID of the permission scheme to delete the permission grant from // Number | The ID of the permission grant to delete.
    /*let cloudid = null;*/ /*let schemeId = 789;*/ /*let permissionId = 789;*/ apiInstance.permissionschemeSchemeIdPermissionPermissionIdDelete(
      incomingOptions.cloudid,
      incomingOptions.schemeId,
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

  // This is a function for issueIssueIdOrKeyRemotelinkDelete
  /*
Delete remote issue link by global ID

 */
  issueIssueIdOrKeyRemotelinkDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The global ID of a remote issue link.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let globalId = "globalId_example";*/ apiInstance.issueIssueIdOrKeyRemotelinkDelete(
      incomingOptions.cloudid,
      incomingOptions.issueIdOrKey,
      incomingOptions.globalId,
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
Delete remote issue link by ID

 */
  issueIssueIdOrKeyRemotelinkLinkIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueRemoteLinksApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of a remote issue link.
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
Delete vote

 */
  issueIssueIdOrKeyVotesDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueVotesApi(); // Object | Cloudi of the projec // String | The ID or key of the issue.
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

  // This is a function for componentIdDelete
  /*
Delete component

 */
  componentIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectComponentsApi(); // Object | Cloudi of the projec // String | The ID of the component.
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

  // This is a function for workflowschemeIdDraftDefaultDelete
  /*
Delete draft default workflow

 */
  workflowschemeIdDraftDefaultDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdDraftDefaultDelete(
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
Delete draft workflow scheme

 */
  workflowschemeIdDraftDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the active workflow scheme that the draft was created from.
    /*let cloudid = null;*/ /*let id = 789;*/ apiInstance.workflowschemeIdDraftDelete(
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
Delete workflow for issue type in draft workflow scheme

 */
  workflowschemeIdDraftIssuetypeIssueTypeDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The ID of the issue type.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let issueType = "issueType_example";*/ apiInstance.workflowschemeIdDraftIssuetypeIssueTypeDelete(
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
Delete issue types for workflow in draft workflow scheme

 */
  workflowschemeIdDraftWorkflowDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WorkflowSchemeDraftsApi(); // Object | Cloudi of the projec // Number | The ID of the workflow scheme that the draft belongs to // String | The name of the workflow.
    /*let cloudid = null;*/ /*let id = 789;*/ /*let workflowName = "workflowName_example";*/ apiInstance.workflowschemeIdDraftWorkflowDelete(
      incomingOptions.cloudincomingOptions.id,
      id,
      incomingOptions.workflowName,
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
Remove group

 */
  groupDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // String | The name of the group.
    /*let cloudid = null;*/ /*let groupname = "groupname_example";*/ let opts = {
      //  'swapGroup': "swapGroup_example" // String | The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion.
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
      incomingOptions.groupname,
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
Remove user from group

 */
  groupUserDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.GroupsApi(); // Object | Cloudi of the projec // String | The name of the group // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
    /*let cloudid = null;*/ /*let groupname = "groupname_example";*/ /*let accountId = "accountId_example";*/ let opts = {
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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
      incomingOptions.groupname,
      incomingOptions.accountId,
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
Delete user property

 */
  userPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.UserPropertiesApi(); // Object | Cloudi of the projec // String | The key of the user's property.
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ let opts = {
      //  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
      //  'userKey': "userKey_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
      //  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
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

  // This is a function for fieldFieldKeyOptionOptionIdDelete
  /*
Delete issue field option

 */
  fieldFieldKeyOptionOptionIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\" // Number | The ID of the option to be deleted.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 789;*/ apiInstance.fieldFieldKeyOptionOptionIdDelete(
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

  // This is a function for fieldFieldKeyOptionOptionIdIssueDelete
  /*
Replace issue field option

 */
  fieldFieldKeyOptionOptionIdIssueDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi(); // Object | Cloudi of the projec // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\" // Number | The ID of the option to be deselected.
    /*let cloudid = null;*/ /*let fieldKey = "fieldKey_example";*/ /*let optionId = 789;*/ let opts = {
      replaceWith: 789, // Number | The ID of the option that will replace the currently selected option.
      //  'jql': "jql_example" // String | A JQL query that specifies the issues to be updated. For example, *project=10000*.
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

  // This is a function for issueLinkLinkIdDelete
  /*
Delete issue link

 */
  issueLinkLinkIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueLinksApi(); // Object | Cloudi of the projec // String | The ID of the issue link.
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

  // This is a function for webhookDelete
  /*
Delete webhooks by ID

 */
  webhookDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.WebhooksApi(); // Object | Cloudi of the projec // ContainerForWebhookIDs |
    /*let cloudid = null;*/ /*let body = new Jira.ContainerForWebhookIDs();*/ apiInstance.webhookDelete(
      incomingOptions.cloudid,
      incomingOptions.body,
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
Delete project

 */
  projectProjectIdOrKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.ProjectsApi(); // Object | Cloudi of the projec // String | The project ID or project key (case sensitive).
    /*let cloudid = null;*/ /*let projectIdOrKey = "projectIdOrKey_example";*/ let opts = {
      enableUndo: false, // Boolean | EXPERIMENTAL. Whether this project is placed in the Jira recycle bin where it will be available for restoration.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdOrKeyDelete(
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

  // This is a function for issueIssueIdOrKeyPropertiesPropertyKeyDelete
  /*
Delete issue property

 */
  issueIssueIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The key or ID of the issue // String | The key of the property.
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

  // This is a function for issuePropertiesPropertyKeyDelete
  /*
Bulk delete issue property

 */
  issuePropertiesPropertyKeyDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssuePropertiesApi(); // Object | Cloudi of the projec // String | The key of the property // IssueFilterForBulkPropertyDelete |
    /*let cloudid = null;*/ /*let propertyKey = "propertyKey_example";*/ /*let body = new Jira.IssueFilterForBulkPropertyDelete();*/ apiInstance.issuePropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.propertyKey,
      incomingOptions.body,
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
Delete dashboard item property

 */
  dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard // String | The ID of the dashboard item // String | The key of the dashboard item property.
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

  // This is a function for dashboardIdDelete
  /*
Delete dashboard

 */
  dashboardIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.DashboardsApi(); // Object | Cloudi of the projec // String | The ID of the dashboard.
    /*let cloudid = null;*/ /*let id = "id_example";*/ apiInstance.dashboardIdDelete(
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

  // This is a function for restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete
  /*
Delete app property

 */
  restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(
    incomingOptions,
    cb
  ) {
    const Jira = require('./dist');

    let apiInstance = new Jira.AppPropertiesApi(); // Object | Cloudi of the projec // String | The key of the app, as defined in its descriptor // String | The key of the property.
    /*let cloudid = null;*/ /*let addonKey = "addonKey_example";*/ /*let propertyKey = "propertyKey_example";*/ apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(
      incomingOptions.cloudid,
      incomingOptions.addonKey,
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

  // This is a function for issueIssueIdOrKeyWorklogIdDelete
  /*
Delete worklog

 */
  issueIssueIdOrKeyWorklogIdDelete(incomingOptions, cb) {
    const Jira = require('./dist');
    let defaultClient = Jira.ApiClient.instance;
    // Configure OAuth2 access token for authorization: OAuth2
    let OAuth2 = defaultClient.authentications['OAuth2'];
    OAuth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Jira.IssueWorklogsApi(); // Object | Cloudi of the projec // String | The ID or key of the issue // String | The ID of the worklog.
    /*let cloudid = null;*/ /*let issueIdOrKey = "issueIdOrKey_example";*/ /*let id = "id_example";*/ let opts = {
      notifyUsers: true, // Boolean | Whether users watching the issue are notified by email.
      adjustEstimate: "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
      //  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
      //  'increaseBy': "increaseBy_example", // String | The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`.
      overrideEditableFlag: false, // Boolean | Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
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
      incomingOptions.issueIdOrKey,
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
