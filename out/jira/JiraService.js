
  const Axios = require("axios");
  const ErrorHelper = require("../../../helpers/ErrorHelper");
  const nconf = require("nconf");
  const qs = require("querystring");

  class JiraService {
    get name() {
      return "JIRA";
    }

    get description() {
      return;
    }

    get icon() {
      return "jira.svg";
    }

    get category() {
      return;
    }

    get apiEndpoint() {
      return;
    }

    get authMethod() {
      return;
    }

    get authEndpoint() {
      return;
    }

    get apiTokenURL() {
      return;
    }

    get scopes() {
      return;
    }

    get requiredAuthParams() {
      return;
    }

    get primaryAction() {
      return;
    }

    get webhooks() {
      return;
    }

    get webhookToTasksMap() {
      return;
    }

    get entities() {
      return;
    }

    async getAccessToken(integration) {
      //TODO: Add custom getAccessToken functionality here
    }

    getNextPaginationURIFromResponse(response) {
      //TODO: Add custom getNextPaginationURIFromResponse functionality here
    }

    async connect(authParams) {
      //TODO: Add custom connect functionality here
    }

    async getThirdPartyProjects(incomingOptions) {
      //TODO: Add custom getThirdPartyProjects functionality here
    }

    async registerWebhooks(incomingOptions) {
      //TODO: Add custom registerWebhooks functionality here
    }

    async syncIntegrationEntities(integration, incomingOptions) {
      const taskUri = nconf.get("TASK_API_URI");
      const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

      try {
        //TODO: Add custom syncIntegrationEntities functionality here
        const res = await Axios.default.post(
          taskUri,
          {
            pepper_task: [],
            project_id: incomingOptions.projectId,
            user_id: incomingOptions.userId,
            third_party_project_id: ,
            third_party_organization_id: ,
          },
          {
            headers: {
              Authorization: authToken
            }
          }
        );
        return "Ok";
      } catch (error) {
        console.error(error.response || error);
        return "ERROR";
      }
    }

  async get(entity, options) {
        switch (entity) {
            
        case "CLOUDID_REST_API3_APPLICATION_PROPERTIES_ADVANCED_SETTINGS":
        /* 
      


Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon &gt; Jira settings &gt; System, General Configuration and then click Advanced Settings (in the upper right).


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_APPLICATION_PROPERTIES":
        /* 
      


Returns all application properties or a single application property.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ApplicationPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_APPLICATIONROLE":
        /* 
      


Returns all application roles. In Jira, application roles are managed using the Application access configuration page.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ApplicationroleGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_APPLICATIONROLE_KEY":
        /* 
      


Returns an application role.


      Function parameters for this API cloudid,key
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ApplicationroleKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ATTACHMENT_ID_EXPAND_HUMAN":
        /* 
      


Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AttachmentIdExpandHumanGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ATTACHMENT_ID_EXPAND_RAW":
        /* 
      


Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AttachmentIdExpandRawGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ATTACHMENT_ID":
        /* 
      


Returns the metadata for an attachment. Note that the attachment itself is not returned.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AttachmentIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ATTACHMENT_META":
        /* 
      


Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AttachmentMetaGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_AUDITING_RECORD":
        /* 
      


Returns a list of audit records. The list can be filtered to include items:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AuditingRecordGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_AVATAR_TYPE_SYSTEM":
        /* 
      


Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.


      Function parameters for this API cloudid,type
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AvatarTypeSystemGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMMENT_COMMENT_ID_PROPERTIES":
        /* 
      


Returns the keys of all the properties of a comment.


      Function parameters for this API cloudid,commentId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CommentCommentIdPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the value of a comment property.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMPONENT_ID":
        /* 
      


Returns a component. Permissions required: Browse projects project permission.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ComponentIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMPONENT_ID_RELATED_ISSUE_COUNTS":
        /* 
      


Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ComponentIdRelatedIssueCountsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION":
        /* 
      


Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING":
        /* 
      


Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING_LIST":
        /* 
      


Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingListGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING_OPTIONS":
        /* 
      


Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingOptionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CUSTOM_FIELD_OPTION_ID":
        /* 
      


Returns a custom field option. For example, an option in a cascading select list.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CustomFieldOptionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES":
        /* 
      


Returns the keys of all properties for a dashboard item.


      Function parameters for this API cloudid,dashboardId,itemId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the key and value of a dashboard item property.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD":
        /* 
      


Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD_ID":
        /* 
      


Returns a dashboard.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION":
        /* 
      


Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_OPTION_ID":
        /* 
      


Returns an option from a select list issue field.


      Function parameters for this API cloudid,fieldKey,optionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionOptionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_SUGGESTIONS_EDIT":
        /* 
      


Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_SUGGESTIONS_SEARCH":
        /* 
      


Returns options defined for a select list issue field that can be viewed by the currently logged in user.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD":
        /* 
      


Returns all issue fields in Jira, both system and custom fields.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_DEFAULT_SHARE_SCOPE":
        /* 
      


Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterDefaultShareScopeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_FAVOURITE":
        /* 
      


Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterFavouriteGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER":
        /* 
      


Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_COLUMNS":
        /* 
      


Returns the columns configured for a filter. The column configuration is used when the filter&#39;s results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdColumnsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID":
        /* 
      


Returns a filter. Permissions required: None, however the calling user must have permission view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_PERMISSION":
        /* 
      


Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdPermissionGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_PERMISSION_PERMISSION_ID":
        /* 
      


Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.


      Function parameters for this API cloudid,id,permissionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdPermissionPermissionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_MY":
        /* 
      


Returns the filters owned by the calling user. If includeFavourites is true, the user&#39;s favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterMyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_SEARCH":
        /* 
      


Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP":
        /* 
      


This resource is deprecated, use group/member.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP_MEMBER":
        /* 
      


Returns all users in a group. Users are ordered by username.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupMemberGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUPS_PICKER":
        /* 
      


Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupsPickerGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUPUSERPICKER":
        /* 
      


Returns a list of users and groups matching a string. The string is used:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupuserpickerGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_CREATEMETA":
        /* 
      


Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueCreatemetaGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_CHANGELOG":
        /* 
      


Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyChangelogGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_COMMENT":
        /* 
      


to get comments for


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyCommentGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID":
        /* 
      


of the issue the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyCommentIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_EDITMETA":
        /* 
      


Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyEditmetaGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY":
        /* 
      


Returns the details for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_PROPERTIES":
        /* 
      


Returns the URIs and keys of an issue&#39;s properties.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the key and value of an issue&#39;s property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK":
        /* 
      


Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID":
        /* 
      


Returns a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS":
        /* 
      


Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue&#39;s status.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyTransitionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_VOTES":
        /* 
      


Returns details about the votes on an issue.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyVotesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WATCHERS":
        /* 
      


Returns the watchers for an issue.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWatchersGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG":
        /* 
      


Returns all worklogs for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID":
        /* 
      


Returns a worklog.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES":
        /* 
      


Returns the keys of all properties for a worklog.


      Function parameters for this API cloudid,issueIdOrKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the value of a worklog property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_LINK_ID":
        /* 
      


Returns an issue link.


      Function parameters for this API cloudid,linkId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkLinkIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_TYPE":
        /* 
      


Returns a list of all issue link types.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkTypeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID":
        /* 
      


Returns an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_PICKER":
        /* 
      


Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user&#39;s history and browsing context to return issue suggestions.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuePickerGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUESECURITYSCHEMES":
        /* 
      


Returns all issue security schemes.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuesecurityschemesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUESECURITYSCHEMES_ID":
        /* 
      


Returns an issue security scheme along with its security levels.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuesecurityschemesIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE":
        /* 
      


Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ID_ALTERNATIVES":
        /* 
      


Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIdAlternativesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ID":
        /* 
      


Returns an issue type. Permissions required:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES":
        /* 
      


Returns all the issue type property keys of the issue type. Permissions required:


      Function parameters for this API cloudid,issueTypeId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the key and value of the issue type property. Permissions required:


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_JQL_AUTOCOMPLETEDATA":
        /* 
      


Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3JqlAutocompletedataGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_JQL_AUTOCOMPLETEDATA_SUGGESTIONS":
        /* 
      


Returns the JQL search auto complete suggestions for a field.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3JqlAutocompletedataSuggestionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPERMISSIONS":
        /* 
      


Returns a list of permissions indicating which permissions the user has. Details of the user&#39;s permissions can be obtained in a global, project, or issue context.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypermissionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES":
        /* 
      


Returns the value of a preference of the user.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES_LOCALE":
        /* 
      


Returns the locale for the current user.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesLocaleGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYSELF":
        /* 
      


Returns details for the authenticated user.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MyselfGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_NOTIFICATIONSCHEME":
        /* 
      


Returns a paginated list of notification schemes in order by display name.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3NotificationschemeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_NOTIFICATIONSCHEME_ID":
        /* 
      


Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3NotificationschemeIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONS":
        /* 
      


Returns all permissions, including:


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME":
        /* 
      


Returns all permission schemes.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID":
        /* 
      


Returns a permission scheme. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID_PERMISSION":
        /* 
      


Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdPermissionGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID_PERMISSION_PERMISSION_ID":
        /* 
      


Returns a permission grant. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,permissionId,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PRIORITY":
        /* 
      


Returns the list of all issue priorities.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PriorityGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PRIORITY_ID":
        /* 
      


Returns an issue priority.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PriorityIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_CATEGORY":
        /* 
      


Returns all project categories.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectCategoryGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_CATEGORY_ID":
        /* 
      


Returns a project category.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectCategoryIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT":
        /* 
      


Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_AVATARS":
        /* 
      


Returns all project avatars, grouped by system and custom avatars.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_COMPONENT":
        /* 
      


Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyComponentGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_COMPONENTS":
        /* 
      


Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyComponentsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY":
        /* 
      


Returns the project details for the specified project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_PROPERTIES":
        /* 
      


Returns all project property keys for the project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the value of the project property.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLE":
        /* 
      


Returns a list of project roles for the project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoleGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLE_ID":
        /* 
      


Returns the project role&#39;s details and actors associated with the project. The list of actors is sorted by display name.


      Function parameters for this API cloudid,id,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLEDETAILS":
        /* 
      


Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_STATUSES":
        /* 
      


Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyStatusesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_VERSION":
        /* 
      


Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyVersionGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_VERSIONS":
        /* 
      


Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyVersionsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_KEY_OR_ID_ISSUESECURITYLEVELSCHEME":
        /* 
      


Returns the issue security scheme associated with the project.


      Function parameters for this API cloudid,projectKeyOrId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_KEY_OR_ID_NOTIFICATIONSCHEME":
        /* 
      


Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_KEY_OR_ID_PERMISSIONSCHEME":
        /* 
      


Gets the permission scheme associated with the project.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_KEY_OR_ID_SECURITYLEVEL":
        /* 
      


Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.


      Function parameters for this API cloudid,projectKeyOrId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_SEARCH":
        /* 
      


Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_TYPE":
        /* 
      


Returns all project types, whether or not the instance has a valid license for each type.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectTypeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_TYPE_PROJECT_TYPE_KEY_ACCESSIBLE":
        /* 
      


Returns a project type if it is accessible to the logged in user.


      Function parameters for this API cloudid,projectTypeKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_TYPE_PROJECT_TYPE_KEY":
        /* 
      


Returns a project type.


      Function parameters for this API cloudid,projectTypeKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectTypeProjectTypeKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECTVALIDATE_KEY":
        /* 
      


Validates a project key by confirming the key is a valid string and not in use.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectvalidateKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECTVALIDATE_VALID_PROJECT_KEY":
        /* 
      


Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectvalidateValidProjectKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECTVALIDATE_VALID_PROJECT_NAME":
        /* 
      


Checks that a project name isn&#39;t in use. If the name isn&#39;t in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectvalidateValidProjectNameGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_RESOLUTION":
        /* 
      


Returns a list of all issue resolution values.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ResolutionGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_RESOLUTION_ID":
        /* 
      


Returns an issue resolution value.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ResolutionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE":
        /* 
      


Gets a list of all project roles, complete with project role details and default actors.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID_ACTORS":
        /* 
      


Returns the default actors for the project role.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdActorsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID":
        /* 
      


Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS":
        /* 
      


Returns all screens.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_AVAILABLE_FIELDS":
        /* 
      


Returns the fields that can be added to a tab on a screen.


      Function parameters for this API cloudid,screenId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdAvailableFieldsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS":
        /* 
      


Returns the list of tabs for a screen.


      Function parameters for this API cloudid,screenId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS":
        /* 
      


Returns all fields for a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SEARCH":
        /* 
      


Searches for issues using JQL. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3SearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SECURITYLEVEL_ID":
        /* 
      


Returns details of an issue security level.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3SecuritylevelIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SERVER_INFO":
        /* 
      


Returns information about the Jira instance.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ServerInfoGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SETTINGS_COLUMNS":
        /* 
      


Returns the default issue navigator columns.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3SettingsColumnsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_STATUS":
        /* 
      


Returns a list of all statuses associated with workflows.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3StatusGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_STATUS_ID_OR_NAME":
        /* 
      


Returns a status. The status must be associated with a workflow to be returned.


      Function parameters for this API cloudid,idOrName
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3StatusIdOrNameGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_STATUSCATEGORY":
        /* 
      


Returns a list of all status categories.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3StatuscategoryGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_STATUSCATEGORY_ID_OR_KEY":
        /* 
      


Returns a status category. Status categories provided a mechanism for categorizing statuses.


      Function parameters for this API cloudid,idOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3StatuscategoryIdOrKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_TASK_TASK_ID":
        /* 
      


Returns the status of a long-running asynchronous task.


      Function parameters for this API cloudid,taskId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3TaskTaskIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID":
        /* 
      


Returns the system and custom avatars for a project or issue type.


      Function parameters for this API cloudid,entityId,type
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_ASSIGNABLE_MULTI_PROJECT_SEARCH":
        /* 
      


Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserAssignableMultiProjectSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_ASSIGNABLE_SEARCH":
        /* 
      


Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserAssignableSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_BULK":
        /* 
      


Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserBulkGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_COLUMNS":
        /* 
      


Returns the default issue table columns for the user. If a username is not passed in the request, the calling user&#39;s details are returned. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserColumnsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER":
        /* 
      


Returns a user. Permissions required: None.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_GROUPS":
        /* 
      


Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserGroupsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PERMISSION_SEARCH":
        /* 
      


Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPermissionSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PICKER":
        /* 
      


Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPickerGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PROPERTIES":
        /* 
      


Returns the keys of all properties for a user. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PROPERTIES_PROPERTY_KEY":
        /* 
      


Returns the value of a user&#39;s property. If no property key is provided Get user property keys is called. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPropertiesPropertyKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_SEARCH":
        /* 
      


Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_SEARCH_QUERY":
        /* 
      


Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserSearchQueryGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_SEARCH_QUERY_KEY":
        /* 
      


Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserSearchQueryKeyGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_VIEWISSUE_SEARCH":
        /* 
      


Returns a list of users who fulfill both of these criteria:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserViewissueSearchGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID":
        /* 
      


Returns a project version. Permissions required: Browse projects project permission


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID_RELATED_ISSUE_COUNTS":
        /* 
      


Returns the following counts for a version:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdRelatedIssueCountsGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID_UNRESOLVED_ISSUE_COUNT":
        /* 
      


Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdUnresolvedIssueCountGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_REMOTELINK":
        /* 
      


the global ID of the remote resource that is linked to the versions


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionRemotelinkGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK":
        /* 
      


a String containing the version ID


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID":
        /* 
      


A REST sub-resource representing a remote version link


      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOW":
        /* 
      


Returns all workflows in Jira or a single workflow.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES":
        /* 
      


Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DEFAULT":
        /* 
      


Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDefaultGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_DEFAULT":
        /* 
      


Returns the default workflow for a workflow scheme&#39;s draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftDefaultGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT":
        /* 
      


Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Returns the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_WORKFLOW":
        /* 
      


Returns the workflow-issue type mappings for a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftWorkflowGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID":
        /* 
      


Returns a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Returns the issue type-workflow mapping for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_WORKFLOW":
        /* 
      


Returns the workflow-issue type mappings for a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdWorkflowGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKLOG_DELETED":
        /* 
      


Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorklogDeletedGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKLOG_UPDATED":
        /* 
      


Returns a list of IDs and update timestamps for worklogs updated after a date and time.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorklogUpdatedGet(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet
        /* 


Returns the application properties that are accessible on the Advanced Settings page. To navigate to the Advanced Settings page in Jira, choose the Jira icon &gt; Jira settings &gt; System, General Configuration and then click Advanced Settings (in the upper right).

 */
        cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ApplicationPropertiesAdvancedSettingsGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ApplicationPropertiesGet
        /* 


Returns all application properties or a single application property.

 */
        cloudidRestApi3ApplicationPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example", // String | The key of the application property.
//  'keyFilter': "keyFilter_example", // String | When a key isn't provided, this filters the list of results by the application property key using a regular expression. For example, using jira.lf.* will return all application properties with keys that start with jira.lf..
//  'permissionLevel': "permissionLevel_example" // String | The permission level of all items being returned in the list.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ApplicationPropertiesGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ApplicationroleGet
        /* 


Returns all application roles. In Jira, application roles are managed using the Application access configuration page.

 */
        cloudidRestApi3ApplicationroleGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ApplicationroleGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ApplicationroleKeyGet
        /* 


Returns an application role.

 */
        cloudidRestApi3ApplicationroleKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let key = "key_example";*/ // String | The key of the application role. Use the Get all application roles method to get the key for each application role.
apiInstance.cloudidRestApi3ApplicationroleKeyGet(incomingOptions.cloudid, incomingOptions.key, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AttachmentIdExpandHumanGet
        /* 


Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.

 */
        cloudidRestApi3AttachmentIdExpandHumanGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the attachment.
apiInstance.cloudidRestApi3AttachmentIdExpandHumanGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AttachmentIdExpandRawGet
        /* 


Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.

 */
        cloudidRestApi3AttachmentIdExpandRawGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the attachment.
apiInstance.cloudidRestApi3AttachmentIdExpandRawGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AttachmentIdGet
        /* 


Returns the metadata for an attachment. Note that the attachment itself is not returned.

 */
        cloudidRestApi3AttachmentIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the attachment.
apiInstance.cloudidRestApi3AttachmentIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AttachmentMetaGet
        /* 


Returns the global attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.

 */
        cloudidRestApi3AttachmentMetaGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3AttachmentMetaGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AuditingRecordGet
        /* 


Returns a list of audit records. The list can be filtered to include items:

 */
        cloudidRestApi3AuditingRecordGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'filter': "filter_example", // String | The query string.
//  'from': "from_example", // String | The date and time on or after which returned audit records must have been created. If to is provided from must be before to or the result set will be empty.
  'limit': 56, // Number | The maximum number of results to return. The maximum is 1000.
  'offset': 56, // Number | The number of records to skip before returning the first result.
//  'to': "to_example" // String | The date and time on or before which returned audit results must have been created. If from is provided to must be after from or the result set will be empty.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3AuditingRecordGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3AvatarTypeSystemGet
        /* 


Returns a list of system avatar details by owner type, where the owner types are issue type, project, or user.

 */
        cloudidRestApi3AvatarTypeSystemGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let type = "type_example";*/ // String | The avatar type.
apiInstance.cloudidRestApi3AvatarTypeSystemGet(incomingOptions.cloudid, incomingOptions.type, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3CommentCommentIdPropertiesGet
        /* 


Returns the keys of all the properties of a comment.

 */
        cloudidRestApi3CommentCommentIdPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let commentId = "commentId_example";*/ // String | The ID of the comment.
apiInstance.cloudidRestApi3CommentCommentIdPropertiesGet(incomingOptions.cloudid, incomingOptions.commentId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet
        /* 


Returns the value of a comment property.

 */
        cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let commentId = "commentId_example";*/ // String | The ID of the comment
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property.
apiInstance.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.commentId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ComponentIdGet
        /* 


Returns a component. Permissions required: Browse projects project permission.

 */
        cloudidRestApi3ComponentIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the component.
apiInstance.cloudidRestApi3ComponentIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ComponentIdRelatedIssueCountsGet
        /* 


Returns the counts of issues assigned to the component. Permissions required: Permission to access Jira.

 */
        cloudidRestApi3ComponentIdRelatedIssueCountsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the component.
apiInstance.cloudidRestApi3ComponentIdRelatedIssueCountsGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationGet
        /* 


Returns the global settings in Jira. These settings determine whether optional features (for example, sub-tasks, time tracking, and others) are enabled. If time tracking is enabled, this method also returns the time tracking configuration.

 */
        cloudidRestApi3ConfigurationGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ConfigurationGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingGet
        /* 


Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.

 */
        cloudidRestApi3ConfigurationTimetrackingGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ConfigurationTimetrackingGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingListGet
        /* 


Returns all time tracking providers. By default, Jira only has one time tracking provider: JIRA provided time tracking. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the Time Tracking Provider module.

 */
        cloudidRestApi3ConfigurationTimetrackingListGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ConfigurationTimetrackingListGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingOptionsGet
        /* 


Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see Configuring time tracking.

 */
        cloudidRestApi3ConfigurationTimetrackingOptionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ConfigurationTimetrackingOptionsGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3CustomFieldOptionIdGet
        /* 


Returns a custom field option. For example, an option in a cascading select list.

 */
        cloudidRestApi3CustomFieldOptionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the custom field option. To find this ID, configure the custom field and edit its options in Jira. Click the option and its ID will show in the URL as the selectedParentOptionId parameter.
apiInstance.cloudidRestApi3CustomFieldOptionIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet
        /* 


Returns the keys of all properties for a dashboard item.

 */
        cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let dashboardId = "dashboardId_example";*/ // String | The ID of the dashboard
/*let itemId = "itemId_example";*/ // String | The ID of the dashboard item.
apiInstance.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesGet(incomingOptions.cloudid, incomingOptions.dashboardId, incomingOptions.itemId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet
        /* 


Returns the key and value of a dashboard item property.

 */
        cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let dashboardId = "dashboardId_example";*/ // String | The ID of the dashboard
/*let itemId = "itemId_example";*/ // String | The ID of the dashboard item
/*let propertyKey = "propertyKey_example";*/ // String | The key of the dashboard item property.
apiInstance.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.dashboardId, incomingOptions.itemId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardGet
        /* 


Returns a list of dashboards owned by or shared with the user. The list may be filtered to include only favorite or owned dashboards.

 */
        cloudidRestApi3DashboardGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'filter': "filter_example", // String | The filter applied to the list of dashboards. Valid values are:
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset).
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3DashboardGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardIdGet
        /* 


Returns a dashboard.

 */
        cloudidRestApi3DashboardIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the dashboard.
apiInstance.cloudidRestApi3DashboardIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionGet
        /* 


Returns all options defined for a select list issue field. A select list issue field is a type of issue field that allows a user to select an value from a list of options.

 */
        cloudidRestApi3FieldFieldKeyOptionGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
let opts = {
  'maxResults': 56, // Number | The maximum number of items to return per page. For example, 20.
  'startAt': 56 // Number | The starting index of the returned objects. For example, 1.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionGet(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionOptionIdGet
        /* 


Returns an option from a select list issue field.

 */
        cloudidRestApi3FieldFieldKeyOptionOptionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field
/*let optionId = 56;*/ // Number | The ID of the option to be returned. For example, 3.
apiInstance.cloudidRestApi3FieldFieldKeyOptionOptionIdGet(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.optionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet
        /* 


Returns options defined for a select list issue field that can be viewed and selected by the currently logged in user.

 */
        cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
let opts = {
  'maxResults': 56, // Number | The maximum number of items to return per page. For example, 20.
  'projectId': 56, // Number | Filters the results to options that are only available in the specified project. For example, 10000.
  'startAt': 56 // Number | The starting index of the returned objects. For example, 1.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionSuggestionsEditGet(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet
        /* 


Returns options defined for a select list issue field that can be viewed by the currently logged in user.

 */
        cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field.
let opts = {
  'maxResults': 56, // Number | The maximum number of items to return per page. For example, 20.
  'projectId': 56, // Number | Filters the results to options that are only available in the specified project. For example, 10000.
  'startAt': 56 // Number | The starting index of the returned objects. For example, 1.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionSuggestionsSearchGet(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldGet
        /* 


Returns all issue fields in Jira, both system and custom fields.

 */
        cloudidRestApi3FieldGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3FieldGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterDefaultShareScopeGet
        /* 


Returns the default sharing settings for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
        cloudidRestApi3FilterDefaultShareScopeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3FilterDefaultShareScopeGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterFavouriteGet
        /* 


Returns the favorite filters of the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
        cloudidRestApi3FilterFavouriteGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterFavouriteGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterGet
        /* 


Returns all filters. Deprecated, use Search for filters that supports search and pagination. Permissions required: None, however only the following filters are returned:

 */
        cloudidRestApi3FilterGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdColumnsGet
        /* 


Returns the columns configured for a filter. The column configuration is used when the filter&#39;s results are viewed in List View with the Columns set to Filter. Permissions required: None, however the calling user must have permission to view the filter.

 */
        cloudidRestApi3FilterIdColumnsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
apiInstance.cloudidRestApi3FilterIdColumnsGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdGet
        /* 


Returns a filter. Permissions required: None, however the calling user must have permission view the filter.

 */
        cloudidRestApi3FilterIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter to return.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdPermissionGet
        /* 


Returns the share permissions for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.

 */
        cloudidRestApi3FilterIdPermissionGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
apiInstance.cloudidRestApi3FilterIdPermissionGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdPermissionPermissionIdGet
        /* 


Returns a share permission for a filter. A filter can be shared with groups, projects, all logged-in users, or the public. Sharing with all logged-in users or the public is known as a global share permission. Permissions required: None, however the calling user must have permission to view the filter.

 */
        cloudidRestApi3FilterIdPermissionPermissionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter
/*let permissionId = 56;*/ // Number | The ID of the share permission.
apiInstance.cloudidRestApi3FilterIdPermissionPermissionIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.permissionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterMyGet
        /* 


Returns the filters owned by the calling user. If includeFavourites is true, the user&#39;s favorite filters are also returned. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
        cloudidRestApi3FilterMyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  'includeFavourites': true // Boolean | Include the user's favorite filters in the response.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterMyGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterSearchGet
        /* 


Search for filters. This method is similar to Get filters except that you can refine the results to include filters that have specific attributes. For example, filters with a particular name. Permissions required: None, however only the following filters are returned (if no search parameters are set):

 */
        cloudidRestApi3FilterSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | Returns filters with an owner that exactly matches accountId of the owner. This parameter cannot be used with the owner parameter.
//  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
//  'filterName': "filterName_example", // String | Returns filters with a name that partially matches filterName.
//  'groupname': "groupname_example", // String | Returns filters that are shared with a group that has a name that exactly matches groupname.
  'maxResults': 56, // Number | The maximum number of items to return per page. Max is 50.
//  'orderBy': "orderBy_example", // String | Orders the results by a property of the filter. For example, name.
//  'owner': "owner_example", // String | Returns filters with an owner that exactly matches owner. This parameter cannot be used with the accountId parameter.
  'projectId': 56, // Number | Returns filters that are shared with a project that has an ID that exactly matches projectId.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset). The base index is 0.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupGet
        /* 


This resource is deprecated, use group/member.

 */
        cloudidRestApi3GroupGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | List of fields to expand.
//  'groupname': "groupname_example" // String | The name of the group.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupMemberGet
        /* 


Returns all users in a group. Users are ordered by username.

 */
        cloudidRestApi3GroupMemberGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'groupname': "groupname_example", // String | The name of the group.
  'includeInactiveUsers': true, // Boolean | Include inactive users.
  'maxResults': 56, // Number | The maximum number of users to return per page.
  'startAt': 56 // Number | The index of the first user to return.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupMemberGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupsPickerGet
        /* 


Returns a list of groups whose names contain a query string. A list of group names can be provided to exclude groups from the results.

 */
        cloudidRestApi3GroupsPickerGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | Parameter not in use.
  'exclude': ["null"], // [String] | A list of groups to exclude from the result.
  'maxResults': 56, // Number | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property jira.ajax.autocomplete.limit.
//  'query': "query_example", // String | The string to find in group names.
//  'userName': "userName_example" // String | Parameter not in use.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupsPickerGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupuserpickerGet
        /* 


Returns a list of users and groups matching a string. The string is used:

 */
        cloudidRestApi3GroupuserpickerGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'avatarSize': "avatarSize_example", // String | The size of the avatar to return. If an invalid value is provided, the default value is used.
  'caseInsensitive': true, // Boolean | Indicates whether the search for groups should be case insensitive.
  'excludeConnectAddons': true, // Boolean | Indicates whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
//  'fieldId': "fieldId_example", // String | The custom field ID of the field this request is for.
  'issueTypeId': ["null"], // [String] | The ID of an issue type that returned users and groups must have permission to view. To include multiple issue type IDs repeat this parameter, use of a comma separated list is not supported. Special values, such as -1 (all standard issue types) and -2 (all subtask issue types), are supported. This parameter is only used when fieldId is present.
  'maxResults': 56, // Number | The maximum number of items to return in each list. The maximum is 1000.
  'projectId': ["null"], // [String] | The ID of a project that returned users and groups must have permission to view. To include multiple projects repeat this parameter, use of a comma separated list is not supported. This parameter is only used when fieldId is present.
//  'query': "query_example", // String | The search string.
  'showAvatar': true // Boolean | Indicates whether the user avatar should be returned. If an invalid value is provided, the default value is used.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupuserpickerGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueCreatemetaGet
        /* 


Returns details of projects, issue types within projects, and, when requested, the create screen fields for each issue type for the user. Use the information to populate the requests in Create issue and Create issues.

 */
        cloudidRestApi3IssueCreatemetaGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
  'issuetypeIds': ["null"], // [String] | Comma-separated list of issue type IDs. May be specified multiple times and with issuetypeNames.
  'issuetypeNames': ["null"], // [String] | Comma-separated list of issue type names. May be specified multiple times and with issuetypeIds.
  'projectIds': ["null"], // [String] | Comma-separated list of project IDs. May be specified multiple times and with projectKeys.
  'projectKeys': ["null"] // [String] | Comma-separated list of project keys. May be specified multiple times and with projectIds.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueCreatemetaGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyChangelogGet
        /* 


Returns a paginated list of all updates of an issue, sorted by date, starting from the oldest.

 */
        cloudidRestApi3IssueIssueIdOrKeyChangelogGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | ID or key of the issue.
let opts = {
  'maxResults': 56, // Number | Maximum number of items to return per page. See Pagination section for more details.
  'startAt': 56 // Number | Page offset, ie. index of the first item returned in the page of results. Base index: 0.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyChangelogGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyCommentGet
        /* 


to get comments for

 */
        cloudidRestApi3IssueIssueIdOrKeyCommentGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | to get comments for
let opts = {
//  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
  'maxResults': 56, // Number | how many results on the page should be included. Defaults to 50.
//  'orderBy': "orderBy_example", // String | ordering of the results.
  'startAt': 56 // Number | the page offset, if not specified then defaults to 0
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyCommentGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyCommentIdGet
        /* 


of the issue the comment belongs to

 */
        cloudidRestApi3IssueIssueIdOrKeyCommentIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | the ID of the comment to reques
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | of the issue the comment belongs to
let opts = {
//  'expand': "expand_example" // String | optional flags: renderedBody (provides body rendered in HTML)
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyCommentIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyEditmetaGet
        /* 


Returns the edit screen fields for an issue that are visible to and editable by the user. Use the information to populate the requests in Edit issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyEditmetaGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
  'overrideEditableFlag': true, // Boolean | Indicates whether non-editable fields should be returned. Available to connect app users with admin permissions.
  'overrideScreenSecurity': true // Boolean | Indicates whether hidden fields should be returned. Available to connect app users with admin permissions.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyEditmetaGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyGet
        /* 


Returns the details for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue. For example, JRACLOUD-1549.
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about the issues in the response. This parameter accepts multiple values separated by a comma:
  'fields': ["null"], // [String] | A comma-separated list of fields to return for the issue. Use it to retrieve a subset of fields. Allowed values:
  'fieldsByKeys': true, // Boolean | Indicates whether fields in fields are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
  'properties': ["null"], // [String] | A comma-separated list of issue properties to return for the issue. Allowed values:
  'updateHistory': true // Boolean | Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira. This also populates the JQL issues search lastViewed field.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyPropertiesGet
        /* 


Returns the URIs and keys of an issue&#39;s properties.

 */
        cloudidRestApi3IssueIssueIdOrKeyPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The key or ID of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyPropertiesGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet
        /* 


Returns the key and value of an issue&#39;s property.

 */
        cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The key or ID of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet
        /* 


Returns the remote issue links for an issue. When a remote issue link global ID is provided the record with that global ID is returned, otherwise all remote issue links are returned.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'globalId': "globalId_example" // String | The global ID of the remote issue link.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet
        /* 


Returns a remote issue link for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let linkId = "linkId_example";*/ // String | The ID of the remote issue link.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.linkId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyTransitionsGet
        /* 


Returns either all transitions or a transition that can be performed by the user on an issue, based on the issue&#39;s status.

 */
        cloudidRestApi3IssueIssueIdOrKeyTransitionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about in the response. This parameter accepts multiple values separated by a comma:
  'skipRemoteOnlyCondition': true, // Boolean | Indicates whether transitions with the condition Hide From User Condition are included in the response.
//  'transitionId': "transitionId_example" // String | The ID of the transition.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyTransitionsGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyVotesGet
        /* 


Returns details about the votes on an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyVotesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyVotesGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWatchersGet
        /* 


Returns the watchers for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyWatchersGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWatchersGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogGet
        /* 


Returns all worklogs for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1048576.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset).
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet
        /* 


Returns a worklog.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the worklog
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet
        /* 


Returns the keys of all properties for a worklog.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let worklogId = "worklogId_example";*/ // String | The ID of the worklog.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.worklogId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet
        /* 


Returns the value of a worklog property.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property
/*let worklogId = "worklogId_example";*/ // String | The ID of the worklog.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, incomingOptions.worklogId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkLinkIdGet
        /* 


Returns an issue link.

 */
        cloudidRestApi3IssueLinkLinkIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let linkId = "linkId_example";*/ // String | The ID of the issue link.
apiInstance.cloudidRestApi3IssueLinkLinkIdGet(incomingOptions.cloudid, incomingOptions.linkId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkTypeGet
        /* 


Returns a list of all issue link types.

 */
        cloudidRestApi3IssueLinkTypeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3IssueLinkTypeGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet
        /* 


Returns an issue link type.

 */
        cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueLinkTypeId = "issueLinkTypeId_example";*/ // String | The ID of the issue link type.
apiInstance.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdGet(incomingOptions.cloudid, incomingOptions.issueLinkTypeId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuePickerGet
        /* 


Returns a list of suggested issues matching the auto-completion query for the user executing this request. This operation checks the user&#39;s history and browsing context to return issue suggestions.

 */
        cloudidRestApi3IssuePickerGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'currentIssueKey': "currentIssueKey_example", // String | Key of the issue defining search context. The issue defining a context is excluded from the search results.
//  'currentJQL': "currentJQL_example", // String | JQL that defines the search context. Only issues matching this JQL query are included in the results. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
//  'currentProjectId': "currentProjectId_example", // String | ID of a project defining search context. Only issues belonging to a given project are suggested.
//  'query': "query_example", // String | Query used to filter issue search results.
  'showSubTaskParent': true, // Boolean | Set to false to exclude parent issue from the suggestions list if search is performed in the context of a sub-task.
  'showSubTasks': true // Boolean | Set to false to exclude subtasks from the suggestions list.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuePickerGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuesecurityschemesGet
        /* 


Returns all issue security schemes.

 */
        cloudidRestApi3IssuesecurityschemesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3IssuesecurityschemesGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuesecurityschemesIdGet
        /* 


Returns an issue security scheme along with its security levels.

 */
        cloudidRestApi3IssuesecurityschemesIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the issue security scheme. Use the Get issue security schemes operation to get a list of issue security scheme IDs.
apiInstance.cloudidRestApi3IssuesecurityschemesIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeGet
        /* 


Returns all issue types. Permissions required: Permission to access Jira, however, only issue types that are visible to the user are returned.

 */
        cloudidRestApi3IssuetypeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3IssuetypeGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIdAlternativesGet
        /* 


Returns a list of issue types that can be used to replace the issue type. The alternative issue types are those assigned to the same workflow scheme, field configuration scheme, and screen scheme. Permissions required: Permission to access Jira.

 */
        cloudidRestApi3IssuetypeIdAlternativesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue type.
apiInstance.cloudidRestApi3IssuetypeIdAlternativesGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIdGet
        /* 


Returns an issue type. Permissions required:

 */
        cloudidRestApi3IssuetypeIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue type.
apiInstance.cloudidRestApi3IssuetypeIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet
        /* 


Returns all the issue type property keys of the issue type. Permissions required:

 */
        cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueTypeId = "issueTypeId_example";*/ // String | The ID of the issue type.
apiInstance.cloudidRestApi3IssuetypeIssueTypeIdPropertiesGet(incomingOptions.cloudid, incomingOptions.issueTypeId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet
        /* 


Returns the key and value of the issue type property. Permissions required:

 */
        cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueTypeId = "issueTypeId_example";*/ // String | The ID of the issue type
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
apiInstance.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.issueTypeId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3JqlAutocompletedataGet
        /* 


Returns reference data for JQL searches. This is a downloadable version of the documentation provided in Advanced searching - fields reference and Advanced searching - functions reference, along with a list of JQL-reserved words. Use this information to assist with the programmatic creation of JQL queries or the validation of queries built in a custom query builder.

 */
        cloudidRestApi3JqlAutocompletedataGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3JqlAutocompletedataGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3JqlAutocompletedataSuggestionsGet
        /* 


Returns the JQL search auto complete suggestions for a field.

 */
        cloudidRestApi3JqlAutocompletedataSuggestionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'fieldName': "fieldName_example", // String | The name of the field.
//  'fieldValue': "fieldValue_example", // String | The partial field item name entered by the user.
//  'predicateName': "predicateName_example", // String | The name of the CHANGED operator predicate for which the suggestions are generated. The valid predicate operators are by, from, and to.
//  'predicateValue': "predicateValue_example" // String | The partial predicate item name entered by the user.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3JqlAutocompletedataSuggestionsGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypermissionsGet
        /* 


Returns a list of permissions indicating which permissions the user has. Details of the user&#39;s permissions can be obtained in a global, project, or issue context.

 */
        cloudidRestApi3MypermissionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'issueId': "issueId_example", // String | The ID of the issue.
//  'issueKey': "issueKey_example", // String | The key of the issue. Ignored if issueId is provided.
//  'permissions': "permissions_example", // String | A comma separated list of permission keys. Omitting this parameter is deprecated. To get the list of available permissions, use Get all permissions. Note that deprecated keys cannot be used. Deprecated keys are not returned by Get all permissions but are returned by this operation if permissions is omitted.
//  'projectId': "projectId_example", // String | The ID of project.
//  'projectKey': "projectKey_example" // String | The key of project. Ignored if projectId is provided.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MypermissionsGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesGet
        /* 


Returns the value of a preference of the user.

 */
        cloudidRestApi3MypreferencesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example" // String | The key of the preference.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MypreferencesGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesLocaleGet
        /* 


Returns the locale for the current user.

 */
        cloudidRestApi3MypreferencesLocaleGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3MypreferencesLocaleGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MyselfGet
        /* 


Returns details for the authenticated user.

 */
        cloudidRestApi3MyselfGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about user in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MyselfGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3NotificationschemeGet
        /* 


Returns a paginated list of notification schemes in order by display name.

 */
        cloudidRestApi3NotificationschemeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  'maxResults': 56, // Number | The maximum number of items to return per page. Max is 50.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset). The base index is 0.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3NotificationschemeGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3NotificationschemeIdGet
        /* 


Returns a notification scheme, including the list of events and the recipients who will receive notifications for those events.

 */
        cloudidRestApi3NotificationschemeIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the notification scheme. Use Get notification schemes paginated to get a list of notification scheme IDs.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3NotificationschemeIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionsGet
        /* 


Returns all permissions, including:

 */
        cloudidRestApi3PermissionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3PermissionsGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeGet
        /* 


Returns all permission schemes.

 */
        cloudidRestApi3PermissionschemeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdGet
        /* 


Returns a permission scheme. Permissions required: Permission to log in to Jira.

 */
        cloudidRestApi3PermissionschemeSchemeIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let schemeId = 56;*/ // Number | The ID of the permission scheme to return (e.g., 10000).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeSchemeIdGet(incomingOptions.cloudid, incomingOptions.schemeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdPermissionGet
        /* 


Returns all permission grants for a permission scheme. Permissions required: Permission to log in to Jira.

 */
        cloudidRestApi3PermissionschemeSchemeIdPermissionGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let schemeId = 56;*/ // Number | The ID of the permission scheme (e.g., 10010).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeSchemeIdPermissionGet(incomingOptions.cloudid, incomingOptions.schemeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet
        /* 


Returns a permission grant. Permissions required: Permission to log in to Jira.

 */
        cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let permissionId = 56;*/ // Number | The ID of the permission grant (e.g., 10000)
/*let schemeId = 56;*/ // Number | The ID of the permission scheme (e.g., 10010).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdGet(incomingOptions.cloudid, incomingOptions.permissionId, incomingOptions.schemeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PriorityGet
        /* 


Returns the list of all issue priorities.

 */
        cloudidRestApi3PriorityGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3PriorityGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PriorityIdGet
        /* 


Returns an issue priority.

 */
        cloudidRestApi3PriorityIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue priority.
apiInstance.cloudidRestApi3PriorityIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectCategoryGet
        /* 


Returns all project categories.

 */
        cloudidRestApi3ProjectCategoryGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ProjectCategoryGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectCategoryIdGet
        /* 


Returns a project category.

 */
        cloudidRestApi3ProjectCategoryIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project category.
apiInstance.cloudidRestApi3ProjectCategoryIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectGet
        /* 


Returns all projects visible to the currently logged in user. Deprecated, use Get projects paginated that supports search and pagination. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, it returns all projects that are visible for anonymous users.

 */
        cloudidRestApi3ProjectGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  'recent': 56 // Number | Returns the most recently accessed projects for the current user. You may specify the number of results to return up to a maximum of 20. If no user is logged in, then the recently accessed projects will be returned based on the current HTTP session.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet
        /* 


Returns all project avatars, grouped by system and custom avatars.

 */
        cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The ID or (case-sensitive) key of the project.
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyAvatarsGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyComponentGet
        /* 


Returns a paginated representation of all components existing in a single project. See the Get project components resource if you want to get a full list of versions without pagination.

 */
        cloudidRestApi3ProjectProjectIdOrKeyComponentGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
  'maxResults': 56, // Number | The maximum number of components to return per page. Max 50.
//  'orderBy': "orderBy_example", // String | Order the results by a particular field:
//  'query': "query_example", // String | Filter the results using a literal string. Components with a matching name or description are returned (case insensitive).
  'startAt': 56 // Number | The starting index of the returned list of components. The base index is 0.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyComponentGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyComponentsGet
        /* 


Returns all components existing in a single project. See the Get project components paginated resource if you want to get a full list of components with pagination.

 */
        cloudidRestApi3ProjectProjectIdOrKeyComponentsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyComponentsGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyGet
        /* 


Returns the project details for the specified project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet
        /* 


Returns all project property keys for the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyPropertiesGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet
        /* 


Returns the value of the project property.

 */
        cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive)
/*let propertyKey = "propertyKey_example";*/ // String | The project property key. Use Get project property keys to get a list of all project property keys.
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoleGet
        /* 


Returns a list of project roles for the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoleGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoleGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet
        /* 


Returns the project role&#39;s details and actors associated with the project. The list of actors is sorted by display name.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoleIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet
        /* 


Returns all project roles and the details for each role. Note that the list of project roles is common to all projects.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoledetailsGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyStatusesGet
        /* 


Returns the valid statuses for a project. The statuses are grouped by issue type, as each project has a set of valid issue types and each issue type has a set of valid statuses.

 */
        cloudidRestApi3ProjectProjectIdOrKeyStatusesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyStatusesGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyVersionGet
        /* 


Returns a paginated representation of all versions existing in a single project. See the Get project versions resource if you want to get a full list of versions without pagination.

 */
        cloudidRestApi3ProjectProjectIdOrKeyVersionGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  'maxResults': 56, // Number | The maximum number of versions to return per page. Max 50.
//  'orderBy': "orderBy_example", // String | Order the results by a particular field:
//  'query': "query_example", // String | Filter the results using a literal string. Versions with matching name or description are returned (case insensitive).
  'startAt': 56, // Number | The starting index of the returned list of versions (page offset). The base index is 0.
//  'status': "status_example" // String | A comma separated string used to filter the results by version status.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyVersionGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyVersionsGet
        /* 


Returns all versions existing in a single project. The response is not paginated. Use Get project versions paginated if you want to get the versions in a project with pagination.

 */
        cloudidRestApi3ProjectProjectIdOrKeyVersionsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyVersionsGet(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet
        /* 


Returns the issue security scheme associated with the project.

 */
        cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectKeyOrId = "projectKeyOrId_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectKeyOrIdIssuesecuritylevelschemeGet(incomingOptions.cloudid, incomingOptions.projectKeyOrId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet
        /* 


Gets a notification scheme associated with the project. See the Get notification scheme resource for more information about notification schemes.

 */
        cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectKeyOrId = "projectKeyOrId_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectKeyOrIdNotificationschemeGet(incomingOptions.cloudid, incomingOptions.projectKeyOrId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet
        /* 


Gets the permission scheme associated with the project.

 */
        cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectKeyOrId = "projectKeyOrId_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectKeyOrIdPermissionschemeGet(incomingOptions.cloudid, incomingOptions.projectKeyOrId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet
        /* 


Returns all issue security levels for the project that the currently authenticated user has access to. If the user does not have permission to see an issue security level, then that level is not returned. If the user lacks the Set Issue Security permission, then an empty list is returned.

 */
        cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectKeyOrId = "projectKeyOrId_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectKeyOrIdSecuritylevelGet(incomingOptions.cloudid, incomingOptions.projectKeyOrId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectSearchGet
        /* 


Returns projects visible to the currently logged in user. For projects to be visible, the authenticated user must be granted either Browse projects or Administer projects permissions. If no user is logged in, then all projects visible to anonymous users are returned.

 */
        cloudidRestApi3ProjectSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'action': "action_example", // String | Filter results by projects for which the calling user has permission to perform the given action. The view action corresponds with the Browse projects project permission, and the edit action corresponds with Administer project permissions.
  'categoryId': 56, // Number | The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  'maxResults': 56, // Number | The maximum number of items to return per page. Max 50.
//  'orderBy': "orderBy_example", // String | Order the results by a particular field. If the orderBy field is not set, then projects are listed in ascending order by project key:
//  'query': "query_example", // String | Filter the results using a literal string. Projects with a matching key or name are returned (case insensitive).
  'startAt': 56, // Number | The starting index of the first item returned in the page of results (page offset). The base index is 0.
//  'typeKey': "typeKey_example" // String | Orders results by the project type. This parameter accepts multiple values separated by a comma. Valid values are business, service_desk, and software.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectTypeGet
        /* 


Returns all project types, whether or not the instance has a valid license for each type.

 */
        cloudidRestApi3ProjectTypeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ProjectTypeGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet
        /* 


Returns a project type if it is accessible to the logged in user.

 */
        cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectTypeKey = "projectTypeKey_example";*/ // String | The key of the project type.
apiInstance.cloudidRestApi3ProjectTypeProjectTypeKeyAccessibleGet(incomingOptions.cloudid, incomingOptions.projectTypeKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectTypeProjectTypeKeyGet
        /* 


Returns a project type.

 */
        cloudidRestApi3ProjectTypeProjectTypeKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectTypeKey = "projectTypeKey_example";*/ // String | The key of the project type.
apiInstance.cloudidRestApi3ProjectTypeProjectTypeKeyGet(incomingOptions.cloudid, incomingOptions.projectTypeKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectvalidateKeyGet
        /* 


Validates a project key by confirming the key is a valid string and not in use.

 */
        cloudidRestApi3ProjectvalidateKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example" // String | The project key.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectvalidateKeyGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectvalidateValidProjectKeyGet
        /* 


Validates a project key and, if the key is invalid or in use, generates a valid random string for the project key.

 */
        cloudidRestApi3ProjectvalidateValidProjectKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example" // String | The project key.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectvalidateValidProjectKeyGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectvalidateValidProjectNameGet
        /* 


Checks that a project name isn&#39;t in use. If the name isn&#39;t in use, the passed string is returned. If the name is in use, this operation attempts to generate a valid project name based on the one supplied, usually by adding a sequence number. If a valid project name cannot be generated, a 404 response is returned.

 */
        cloudidRestApi3ProjectvalidateValidProjectNameGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'name': "name_example" // String | The project name.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectvalidateValidProjectNameGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ResolutionGet
        /* 


Returns a list of all issue resolution values.

 */
        cloudidRestApi3ResolutionGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ResolutionGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ResolutionIdGet
        /* 


Returns an issue resolution value.

 */
        cloudidRestApi3ResolutionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue resolution value.
apiInstance.cloudidRestApi3ResolutionIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleGet
        /* 


Gets a list of all project roles, complete with project role details and default actors.

 */
        cloudidRestApi3RoleGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3RoleGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdActorsGet
        /* 


Returns the default actors for the project role.

 */
        cloudidRestApi3RoleIdActorsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
apiInstance.cloudidRestApi3RoleIdActorsGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdGet
        /* 


Gets the project role details and the default actors associated with the role. The list of default actors is sorted by display name.

 */
        cloudidRestApi3RoleIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
apiInstance.cloudidRestApi3RoleIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensGet
        /* 


Returns all screens.

 */
        cloudidRestApi3ScreensGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 100.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset).
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdAvailableFieldsGet
        /* 


Returns the fields that can be added to a tab on a screen.

 */
        cloudidRestApi3ScreensScreenIdAvailableFieldsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen.
apiInstance.cloudidRestApi3ScreensScreenIdAvailableFieldsGet(incomingOptions.cloudid, incomingOptions.screenId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsGet
        /* 


Returns the list of tabs for a screen.

 */
        cloudidRestApi3ScreensScreenIdTabsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen.
let opts = {
//  'projectKey': "projectKey_example" // String | The key of the project.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsGet(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet
        /* 


Returns all fields for a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
let opts = {
//  'projectKey': "projectKey_example" // String | The key of the project.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsGet(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.tabId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3SearchGet
        /* 


Searches for issues using JQL. Permissions required: Permission to access Jira.

 */
        cloudidRestApi3SearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma:
  'fields': ["null"], // [String] | A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values:
  'fieldsByKeys': true, // Boolean | Reference fields by their key (rather than ID).
//  'jql': "jql_example", // String | The JQL that defines the search. If no JQL expression is provided, all issues are returned. Note that username and userkey have been deprecated as search terms for this parameter. See the migration guide for details. Use accountId instead.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 100.
  'properties': ["null"], // [String] | A comma-separated list of up to 5 issue properties to include in the results.
  'startAt': 56, // Number | The index of the first item to return in the page of results (page offset).
//  'validateQuery': "validateQuery_example" // String | Determines how to validate the JQL query and treat the validation results. Supported values are:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3SearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3SecuritylevelIdGet
        /* 


Returns details of an issue security level.

 */
        cloudidRestApi3SecuritylevelIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue security level.
apiInstance.cloudidRestApi3SecuritylevelIdGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ServerInfoGet
        /* 


Returns information about the Jira instance.

 */
        cloudidRestApi3ServerInfoGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ServerInfoGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3SettingsColumnsGet
        /* 


Returns the default issue navigator columns.

 */
        cloudidRestApi3SettingsColumnsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3SettingsColumnsGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3StatusGet
        /* 


Returns a list of all statuses associated with workflows.

 */
        cloudidRestApi3StatusGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3StatusGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3StatusIdOrNameGet
        /* 


Returns a status. The status must be associated with a workflow to be returned.

 */
        cloudidRestApi3StatusIdOrNameGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let idOrName = "idOrName_example";*/ // String | The ID or name of the status.
apiInstance.cloudidRestApi3StatusIdOrNameGet(incomingOptions.cloudid, incomingOptions.idOrName, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3StatuscategoryGet
        /* 


Returns a list of all status categories.

 */
        cloudidRestApi3StatuscategoryGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3StatuscategoryGet(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3StatuscategoryIdOrKeyGet
        /* 


Returns a status category. Status categories provided a mechanism for categorizing statuses.

 */
        cloudidRestApi3StatuscategoryIdOrKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let idOrKey = "idOrKey_example";*/ // String | The ID or key of the status category.
apiInstance.cloudidRestApi3StatuscategoryIdOrKeyGet(incomingOptions.cloudid, incomingOptions.idOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3TaskTaskIdGet
        /* 


Returns the status of a long-running asynchronous task.

 */
        cloudidRestApi3TaskTaskIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let taskId = "taskId_example";*/ // String | The ID of the task.
apiInstance.cloudidRestApi3TaskTaskIdGet(incomingOptions.cloudid, incomingOptions.taskId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet
        /* 


Returns the system and custom avatars for a project or issue type.

 */
        cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let entityId = "entityId_example";*/ // String | The ID of the entity item
/*let type = "type_example";*/ // String | The type of the entity. Valid values are project and issuetype.
apiInstance.cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdGet(incomingOptions.cloudid, incomingOptions.entityId, incomingOptions.type, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserAssignableMultiProjectSearchGet
        /* 


Returns a list of users who fulfill both of these criteria:

 */
        cloudidRestApi3UserAssignableMultiProjectSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'projectKeys': "projectKeys_example", // String | A comma-separated list of project keys (case sensitive).
//  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserAssignableMultiProjectSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserAssignableSearchGet
        /* 


Returns a list of users that can be assigned to an issue. Use this method to find the list of users who can be assigned to:

 */
        cloudidRestApi3UserAssignableSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'actionDescriptorId': 56, // Number | The ID of the transition.
//  'issueKey': "issueKey_example", // String | The key of the issue. Required, unless project is specified.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'project': "project_example", // String | The project ID or project key (case sensitive). Required, unless issueKey is specified.
//  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserAssignableSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserBulkGet
        /* 


Returns details of users specified in a list of usernames or keys. Permissions required: Administer Jira global permission. Users with permission to access Jira can call this method, but empty search results are returned.

 */
        cloudidRestApi3UserBulkGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'key': ["null"], // [String] | Comma-separated list of user keys. Required if username isn't provided.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 200.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
  'username': ["null"] // [String] | Comma-separated list of usernames. Required if key isn't provided.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserBulkGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserColumnsGet
        /* 


Returns the default issue table columns for the user. If a username is not passed in the request, the calling user&#39;s details are returned. Permissions required:

 */
        cloudidRestApi3UserColumnsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserColumnsGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserGet
        /* 


Returns a user. Permissions required: None.

 */
        cloudidRestApi3UserGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'expand': "expand_example", // String | Use expand to include additional information about users in the response. This parameter accepts multiple values separated by a comma:
//  'key': "key_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserGroupsGet
        /* 


Returns the groups to which a user belongs. Permissions required: Browse users and groups global permission.

 */
        cloudidRestApi3UserGroupsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The account ID of the user.
//  'key': "key_example", // String | The key of the user.
//  'username': "username_example" // String | The username of the user. Deprecated in favour of accountId.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserGroupsGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPermissionSearchGet
        /* 


Returns a list of users who fulfill both of these criteria:

 */
        cloudidRestApi3UserPermissionSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'issueKey': "issueKey_example", // String | The issue key for the issue.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'permissions': "permissions_example", // String | A comma-separated list of permissions. The valid permissions are:
//  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive).
//  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPermissionSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPickerGet
        /* 


Returns a list of users whose attributes match the query term. The returned object includes the html field where the matched query term is highlighted with the HTML strong tag. A list of account IDs can be provided to exclude users from the results. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but will only get search results for an exact name match.

 */
        cloudidRestApi3UserPickerGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'exclude': ["null"], // [String] | This parameter has been deprecated due to privacy changes. Use excludeAccountIds instead. See the migration guide for details. A comma-separated list of usernames to exclude from the search results.
  'excludeAccountIds': ["null"], // [String] | A comma-separated list of account IDs to exclude from the search results.
  'maxResults': 56, // Number | The maximum number of items to return. Maximum is 1000. The total number of matched users is returned in total.
//  'query': "query_example", // String | A search input that is matched against appropriate user attributes to find relevant users.
  'showAvatar': true // Boolean | Include the URI to the user's avatar.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPickerGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPropertiesGet
        /* 


Returns the keys of all properties for a user. Permissions required:

 */
        cloudidRestApi3UserPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPropertiesGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPropertiesPropertyKeyGet
        /* 


Returns the value of a user&#39;s property. If no property key is provided Get user property keys is called. Permissions required:

 */
        cloudidRestApi3UserPropertiesPropertyKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let propertyKey = "propertyKey_example";*/ // String | The key of the user's property.
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPropertiesPropertyKeyGet(incomingOptions.cloudid, incomingOptions.propertyKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserSearchGet
        /* 


Returns a list of users that match the search string and property. Permissions required: Browse users and groups global permission. Users with permission to access Jira can call this method, but empty search results are returned.

 */
        cloudidRestApi3UserSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'includeActive': true, // Boolean | Include active users.
  'includeInactive': true, // Boolean | Include inactive users.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'property': "property_example", // String | A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of nested from {\"something\":{\"nested\":1,\"other\":2}} use thepropertykey.something.nested=1.
//  'query': "query_example", // String | A query string that is matched against user attributes (key, name, displayName, and emailAddress) to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserSearchQueryGet
        /* 


Finds users using a structured query and returns user details. Permissions required: Browse users and groups global permission. The available queries statements are:

 */
        cloudidRestApi3UserSearchQueryGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'includeInactive': true, // Boolean | Include inactive users in the results.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'query': "query_example", // String | The search query.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset).
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserSearchQueryGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserSearchQueryKeyGet
        /* 


Finds users using a structured query and returns a list of user keys. Permissions required: Browse users and groups global permission. The available query statements are:

 */
        cloudidRestApi3UserSearchQueryKeyGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'includeInactive': true, // Boolean | Include inactive users in the results.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'query': "query_example", // String | The search query.
  'startAt': 56 // Number | The index of the first item to return in a page of results (page offset).
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserSearchQueryKeyGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserViewissueSearchGet
        /* 


Returns a list of users who fulfill both of these criteria:

 */
        cloudidRestApi3UserViewissueSearchGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'issueKey': "issueKey_example", // String | The issue key for the issue. Required, unless projectKey is specified.
  'maxResults': 56, // Number | The maximum number of items to return per page. Maximum is 1000.
//  'projectKey': "projectKey_example", // String | The project key for the project (case sensitive). Required, unless issueKey is specified.
//  'query': "query_example", // String | A query string that is matched against user attributes, such as key, name, displayName, and emailAddress, to find relevant users. The string can match any part of the attribute's value. For example, query=john matches a user with a displayName of John Smith and a user with an emailAddress of jane.johnson@example.com. Required, unless username is specified.
  'startAt': 56, // Number | The index of the first item to return in a page of results (page offset).
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use query instead. See the migration guide for details. A query string used to search username, display name, and email address. The string is matched to the starting letters of any word in the searched fields. For example, ar matches to the username archie but not mark. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserViewissueSearchGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdGet
        /* 


Returns a project version. Permissions required: Browse projects project permission

 */
        cloudidRestApi3VersionIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about version in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdRelatedIssueCountsGet
        /* 


Returns the following counts for a version:

 */
        cloudidRestApi3VersionIdRelatedIssueCountsGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
apiInstance.cloudidRestApi3VersionIdRelatedIssueCountsGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdUnresolvedIssueCountGet
        /* 


Returns counts of the issues and unresolved issues for the project version. Permissions required: Browse projects project permission

 */
        cloudidRestApi3VersionIdUnresolvedIssueCountGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
apiInstance.cloudidRestApi3VersionIdUnresolvedIssueCountGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionRemotelinkGet
        /* 


the global ID of the remote resource that is linked to the versions

 */
        cloudidRestApi3VersionRemotelinkGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'globalId': "globalId_example" // String | the global ID of the remote resource that is linked to the versions
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionRemotelinkGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkGet
        /* 


a String containing the version ID

 */
        cloudidRestApi3VersionVersionIdRemotelinkGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let versionId = "versionId_example";*/ // String | a String containing the version ID
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkGet(incomingOptions.cloudid, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet
        /* 


A REST sub-resource representing a remote version link

 */
        cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let globalId = "globalId_example";*/ // String | The id of the remote issue link to be returned. If {@code null} (not provided) all remote links for the issue are returned
/*let versionId = "versionId_example";*/ // String | a String containing the version id
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdGet(incomingOptions.cloudid, incomingOptions.globalId, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowGet
        /* 


Returns all workflows in Jira or a single workflow.

 */
        cloudidRestApi3WorkflowGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'workflowName': "workflowName_example" // String | The name of the workflow to be returned. Only one workflow can be specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet
        /* 


Returns the properties on a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
        cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let transitionId = 56;*/ // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
let opts = {
  'includeReservedKeys': true, // Boolean | Some properties with keys that have the jira. prefix are reserved, i.e., not editable. To include these properties in the results, set this parameter to true.
//  'key': "key_example", // String | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
//  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for active and inactive workflows, or draft for draft workflows.
//  'workflowName': "workflowName_example" // String | The name of the workflow that the transition belongs to.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesGet(incomingOptions.cloudid, incomingOptions.transitionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDefaultGet
        /* 


Returns the default workflow for a workflow scheme. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.

 */
        cloudidRestApi3WorkflowschemeIdDefaultGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
  'returnDraftIfExists': true // Boolean | Set to true to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDefaultGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftDefaultGet
        /* 


Returns the default workflow for a workflow scheme&#39;s draft. The default workflow is the workflow that is assigned any issue types that have not been mapped to any other workflow. The default workflow has All Unassigned Issue Types listed in its issue types for the workflow scheme in Jira.

 */
        cloudidRestApi3WorkflowschemeIdDraftDefaultGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftDefaultGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftGet
        /* 


Returns the draft workflow scheme for an active workflow scheme. Draft workflow schemes allow changes to be made to the active workflow schemes: When an active workflow scheme is updated, a draft copy is created. The draft is modified, then the changes in the draft are copied back to the active workflow scheme. See Configuring workflow schemes for more information.Note that:

 */
        cloudidRestApi3WorkflowschemeIdDraftGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the active workflow scheme that the draft was originally created from.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftGet(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet
        /* 


Returns the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftWorkflowGet
        /* 


Returns the workflow-issue type mappings for a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftWorkflowGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
let opts = {
//  'workflowName': "workflowName_example" // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftWorkflowGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdGet
        /* 


Returns a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
let opts = {
  'returnDraftIfExists': true // Boolean | Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet
        /* 


Returns the issue type-workflow mapping for an issue type in a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
let opts = {
  'returnDraftIfExists': true // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdWorkflowGet
        /* 


Returns the workflow-issue type mappings for a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdWorkflowGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
  'returnDraftIfExists': true, // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
//  'workflowName': "workflowName_example" // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdWorkflowGet(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorklogDeletedGet
        /* 


Returns a list of IDs and delete timestamps for worklogs deleted after a date and time.

 */
        cloudidRestApi3WorklogDeletedGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'since': 56 // Number | The date and time, in UNIX timestamp format, after which deleted worklogs are returned.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorklogDeletedGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorklogUpdatedGet
        /* 


Returns a list of IDs and update timestamps for worklogs updated after a date and time.

 */
        cloudidRestApi3WorklogUpdatedGet(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
  'since': 56 // Number | The date and time, in UNIX timestamp format, after which updated worklogs are returned.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorklogUpdatedGet(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        async post(entity, options) {
        switch (entity) {
            
        case "CLOUDID_REST_API3_COMMENT_LIST":
        /* 
      


Returns the comments for a list of comment IDs.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CommentListPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMPONENT":
        /* 
      


Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ComponentPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_EXPRESSION_EVAL":
        /* 
      


Evaluates a Jira expression and returns its value.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ExpressionEvalPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION":
        /* 
      


Creates an option for a select list issue field.


      Function parameters for this API cloudid,fieldKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD":
        /* 
      


Creates a custom field.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_PERMISSION":
        /* 
      


Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdPermissionPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER":
        /* 
      


Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP":
        /* 
      


Creates a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP_USER":
        /* 
      


Adds a user to a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupUserPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_BULK":
        /* 
      


Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueBulkPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_ATTACHMENTS":
        /* 
      


Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_COMMENT":
        /* 
      


a string containing the issue id or key the comment will be added to


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyCommentPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_NOTIFY":
        /* 
      


Creates an email notification for an issue and adds it to the mail queue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyNotifyPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK":
        /* 
      


Creates or updates a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_TRANSITIONS":
        /* 
      


Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyTransitionsPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_VOTES":
        /* 
      


Adds the user&#39;s vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyVotesPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WATCHERS":
        /* 
      


Adds a user as a watcher of an issue. If no user is specified the calling user is added.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWatchersPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG":
        /* 
      


Adds a worklog to an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK":
        /* 
      


Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_TYPE":
        /* 
      


Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link&#39;s inward and outward relationships.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkTypePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE":
        /* 
      


Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ID_AVATAR2":
        /* 
      


Loads an avatar for the issue type.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIdAvatar2Post(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE":
        /* 
      


Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_JQL_PDCLEANER":
        /* 
      


The query strings having personal data that need to be migrated. There should be at most 100 queries.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3JqlPdcleanerPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONS_PROJECT":
        /* 
      


Returns all the projects where the user is granted a list of project permissions.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionsProjectPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME":
        /* 
      


Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID_PERMISSION":
        /* 
      


Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdPermissionPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_CATEGORY":
        /* 
      


Creates a project category.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectCategoryPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT":
        /* 
      


Creates a new project.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_AVATAR2":
        /* 
      


Loads an avatar for a project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLE_ID":
        /* 
      


Adds additional actors to a project role for the project.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID_ACTORS":
        /* 
      


Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdActorsPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID":
        /* 
      


Update either the project role&#39;s name or its description.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE":
        /* 
      


Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RolePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_ADD_TO_DEFAULT_FIELD_ID":
        /* 
      


Adds a field to the default tab of the default screen.


      Function parameters for this API cloudid,fieldId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensAddToDefaultFieldIdPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS":
        /* 
      


Creates a tab for a screen.


      Function parameters for this API cloudid,screenId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS_ID_MOVE":
        /* 
      


Moves a screen tab field.


      Function parameters for this API cloudid,id,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS":
        /* 
      


Adds a field to a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID_MOVE_POS":
        /* 
      


Moves a screen tab.


      Function parameters for this API cloudid,pos,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SEARCH":
        /* 
      


Searches for issues using JQL. Permissions required: Permission to access Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3SearchPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_TASK_TASK_ID_CANCEL":
        /* 
      


Cancels a task.


      Function parameters for this API cloudid,taskId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3TaskTaskIdCancelPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_ENTITY_ID":
        /* 
      


Loads a custom avatar for a project or issue type.


      Function parameters for this API cloudid,entityId,type,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER":
        /* 
      


Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \&quot;notification\&quot;: \&quot;true\&quot; to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn&#39;t sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID_MOVE":
        /* 
      


Modifies the version&#39;s sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdMovePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID_REMOVE_AND_SWAP":
        /* 
      


Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdRemoveAndSwapPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION":
        /* 
      


Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID":
        /* 
      



      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK":
        /* 
      


Create a remote version link via POST. The link&#39;s global ID will be taken from the JSON payload if provided; otherwise, it will be generated.


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES":
        /* 
      


Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_CREATEDRAFT":
        /* 
      


Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdCreatedraftPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME":
        /* 
      


Creates a workflow scheme.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemePost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKLOG_LIST":
        /* 
      


Returns worklog details for a list of worklog IDs.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorklogListPost(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for cloudidRestApi3CommentListPost
        /* 


Returns the comments for a list of comment IDs.

 */
        cloudidRestApi3CommentListPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about comments in the response. This parameter accepts multiple values separated by a comma:
  'body': new Jira.InlineObject1() // InlineObject1 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3CommentListPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ComponentPost
        /* 


Creates a component. Use components to provide containers for issues within a project. Permissions required: Any of the following:

 */
        cloudidRestApi3ComponentPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject2() // InlineObject2 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ComponentPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ExpressionEvalPost
        /* 


Evaluates a Jira expression and returns its value.

 */
        cloudidRestApi3ExpressionEvalPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma:
  'body': new Jira.InlineObject6() // InlineObject6 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ExpressionEvalPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionPost
        /* 


Creates an option for a select list issue field.

 */
        cloudidRestApi3FieldFieldKeyOptionPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | 
let opts = {
  'body': new Jira.InlineObject8() // InlineObject8 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionPost(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldPost
        /* 


Creates a custom field.

 */
        cloudidRestApi3FieldPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject7() // InlineObject7 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdPermissionPost
        /* 


Add a share permissions to a filter. If you add a global share permission (i.e., all logged-in users or the public) it will overwrite all share permissions for the filter.Be aware that this method uses different objects for updating share permissions compared to Update filter. Permissions required: Share dashboards and filters global permission and the calling user must own the filter.

 */
        cloudidRestApi3FilterIdPermissionPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
let opts = {
  'body': new Jira.InlineObject13() // InlineObject13 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterIdPermissionPost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterPost
        /* 


Creates a new filter. The new filter is not shared and not selected as a favorite. Permissions required: Permission to log in to Jira.

 */
        cloudidRestApi3FilterPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  'body': new Jira.InlineObject10() // InlineObject10 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupPost
        /* 


Creates a group.

 */
        cloudidRestApi3GroupPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject14() // InlineObject14 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupUserPost
        /* 


Adds a user to a group.

 */
        cloudidRestApi3GroupUserPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'groupname': "groupname_example", // String | The name of the group.
  'body': new Jira.InlineObject15() // InlineObject15 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupUserPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueBulkPost
        /* 


Creates issues and, where the option to create sub-tasks is enabled in Jira, sub-tasks. Transitions may be applied, to move the issues or sub-tasks to a workflow step other than the default start step, and issue properties set.

 */
        cloudidRestApi3IssueBulkPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject17() // InlineObject17 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueBulkPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost
        /* 


Adds one or more attachments to an issue. Attachments are posted as multipart/form-data (RFC 1867).

 */
        cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue that attachments are added to.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyAttachmentsPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyCommentPost
        /* 


a string containing the issue id or key the comment will be added to

 */
        cloudidRestApi3IssueIssueIdOrKeyCommentPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | a string containing the issue id or key the comment will be added to
let opts = {
//  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
  'body': new Jira.InlineObject22() // InlineObject22 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyCommentPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyNotifyPost
        /* 


Creates an email notification for an issue and adds it to the mail queue.

 */
        cloudidRestApi3IssueIssueIdOrKeyNotifyPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | ID or key of the issue that the notification is sent for.
let opts = {
  'body': new Jira.InlineObject24() // InlineObject24 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyNotifyPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost
        /* 


Creates or updates a remote issue link for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
  'body': new Jira.InlineObject25() // InlineObject25 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyTransitionsPost
        /* 


Performs an issue transition and, if the transition has a screen, updates the fields from the transition screen. Optionally, issue properties can be set.

 */
        cloudidRestApi3IssueIssueIdOrKeyTransitionsPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
  'body': new Jira.InlineObject27() // InlineObject27 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyTransitionsPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyVotesPost
        /* 


Adds the user&#39;s vote to an issue. This is the equivalent of the user clicking Vote on an issue in Jira.

 */
        cloudidRestApi3IssueIssueIdOrKeyVotesPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyVotesPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWatchersPost
        /* 


Adds a user as a watcher of an issue. If no user is specified the calling user is added.

 */
        cloudidRestApi3IssueIssueIdOrKeyWatchersPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWatchersPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogPost
        /* 


Adds a worklog to an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key the issue.
let opts = {
//  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
//  'expand': "expand_example", // String | Use expand to include additional information about work logs in the response. This parameter accepts multiple values separated by a comma:
//  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  'notifyUsers': true, // Boolean | Indicates whether users watching the issue are notified by email.
  'overrideEditableFlag': true, // Boolean | Indicates whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
//  'reduceBy': "reduceBy_example", // String | The amount to reduce the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m). For example, 2d. Required when adjustEstimate is manual.
  'body': new Jira.InlineObject28() // InlineObject28 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogPost(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkPost
        /* 


Creates a link between two issues. Use this operation to indicate a relationship between two issues and optionally add a comment to the from (outward) issue. To use this resource the site must have Issue Linking enabled.

 */
        cloudidRestApi3IssueLinkPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject30() // InlineObject30 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueLinkPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkTypePost
        /* 


Creates an issue link type. Use this operation to create descriptions of the reasons why issues are linked. The issue link type consists of a name and descriptions for a link&#39;s inward and outward relationships.

 */
        cloudidRestApi3IssueLinkTypePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject31() // InlineObject31 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueLinkTypePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuePost
        /* 


Creates an issue or, where the option to create sub-tasks is enabled in Jira, a sub-task. A transition may be applied, to move the issue or sub-task to a workflow step other than the default start step, and issue properties set.

 */
        cloudidRestApi3IssuePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'updateHistory': true, // Boolean | Indicates whether the project in which the issue is created is added to the user's Recently viewed project list, as shown under Projects in Jira.
  'body': new Jira.InlineObject16() // InlineObject16 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIdAvatar2Post
        /* 


Loads an avatar for the issue type.

 */
        cloudidRestApi3IssuetypeIdAvatar2Post(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue type.
let opts = {
  'size': 56, // Number | The length of each side of the crop region.
  'x': 56, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 56 // Number | The Y coordinate of the top-left corner of the crop region.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuetypeIdAvatar2Post(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypePost
        /* 


Creates an issue type and adds it to the default issue type scheme. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3IssuetypePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject33() // InlineObject33 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuetypePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3JqlPdcleanerPost
        /* 


The query strings having personal data that need to be migrated. There should be at most 100 queries.

 */
        cloudidRestApi3JqlPdcleanerPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject35() // InlineObject35 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3JqlPdcleanerPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionsProjectPost
        /* 


Returns all the projects where the user is granted a list of project permissions.

 */
        cloudidRestApi3PermissionsProjectPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject37() // InlineObject37 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionsProjectPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemePost
        /* 


Creates a new permission scheme. You can create a permission scheme with or without defining a set of permission grants. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3PermissionschemePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  'body': new Jira.InlineObject38() // InlineObject38 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdPermissionPost
        /* 


Creates a new permission grant in the given permission scheme. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3PermissionschemeSchemeIdPermissionPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let schemeId = 56;*/ // Number | The ID of the permission scheme in which to create a new permission grant.
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  'body': new Jira.InlineObject40() // InlineObject40 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeSchemeIdPermissionPost(incomingOptions.cloudid, incomingOptions.schemeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectCategoryPost
        /* 


Creates a project category.

 */
        cloudidRestApi3ProjectCategoryPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject47() // InlineObject47 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectCategoryPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectPost
        /* 


Creates a new project.

 */
        cloudidRestApi3ProjectPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject41() // InlineObject41 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post
        /* 


Loads an avatar for a project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The ID or (case-sensitive) key of the project.
let opts = {
  'size': 56, // Number | The length of each side of the crop region.
  'x': 56, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 56 // Number | The Y coordinate of the top-left corner of the crop region.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyAvatar2Post(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost
        /* 


Adds additional actors to a project role for the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
  'body': new Jira.InlineObject45() // InlineObject45 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoleIdPost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdActorsPost
        /* 


Adds default actors to the given role. You may add either groups or users, but you cannot add groups and users in the same request.

 */
        cloudidRestApi3RoleIdActorsPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
let opts = {
  'body': new Jira.InlineObject52() // InlineObject52 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RoleIdActorsPost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdPost
        /* 


Update either the project role&#39;s name or its description.

 */
        cloudidRestApi3RoleIdPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
let opts = {
  'body': new Jira.InlineObject51() // InlineObject51 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RoleIdPost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RolePost
        /* 


Creates a new project role with no default actors. You can use the Add default actors to project role the project method to add default actors to the project role after creating it.

 */
        cloudidRestApi3RolePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject49() // InlineObject49 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RolePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensAddToDefaultFieldIdPost
        /* 


Adds a field to the default tab of the default screen.

 */
        cloudidRestApi3ScreensAddToDefaultFieldIdPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldId = "fieldId_example";*/ // String | The ID of the field.
apiInstance.cloudidRestApi3ScreensAddToDefaultFieldIdPost(incomingOptions.cloudid, incomingOptions.fieldId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsPost
        /* 


Creates a tab for a screen.

 */
        cloudidRestApi3ScreensScreenIdTabsPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen.
let opts = {
  'body': new Jira.InlineObject53() // InlineObject53 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsPost(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost
        /* 


Moves a screen tab field.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the field
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
let opts = {
  'body': new Jira.InlineObject56() // InlineObject56 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdMovePost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.screenId, incomingOptions.tabId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost
        /* 


Adds a field to a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
let opts = {
  'body': new Jira.InlineObject55() // InlineObject55 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsPost(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.tabId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost
        /* 


Moves a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let pos = 56;*/ // Number | The position of tab. The base index is 0
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdMovePosPost(incomingOptions.cloudid, incomingOptions.pos, incomingOptions.screenId, incomingOptions.tabId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3SearchPost
        /* 


Searches for issues using JQL. Permissions required: Permission to access Jira.

 */
        cloudidRestApi3SearchPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject57() // InlineObject57 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3SearchPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3TaskTaskIdCancelPost
        /* 


Cancels a task.

 */
        cloudidRestApi3TaskTaskIdCancelPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let taskId = "taskId_example";*/ // String | The ID of the task.
apiInstance.cloudidRestApi3TaskTaskIdCancelPost(incomingOptions.cloudid, incomingOptions.taskId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost
        /* 


Loads a custom avatar for a project or issue type.

 */
        cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let entityId = "entityId_example";*/ // String | The ID of the entity item
/*let type = "type_example";*/ // String | The type of the entity. Valid values are project and issuetype.
let opts = {
  'size': 56, // Number | The length of each side of the crop region.
  'x': 56, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 56 // Number | The Y coordinate of the top-left corner of the crop region.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UniversalAvatarTypeTypeOwnerEntityIdPost(incomingOptions.cloudid, incomingOptions.entityId, incomingOptions.type, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPost
        /* 


Creates a user. This resource is retained for legacy compatibility. As soon as a more suitable alternative is available this resource will be deprecated. The option is provided to set or generate a password for the user. When using the option to generate a password, by omitting password from the request, include \&quot;notification\&quot;: \&quot;true\&quot; to ensure the user is sent an email advising them that their account has been created. This email includes a link for the user to set their password. If the notification isn&#39;t sent for a generated password, the user will need to be sent a reset password request from Jira. Permissions required: Administer Jira global permission

 */
        cloudidRestApi3UserPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject58() // InlineObject58 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdMovePost
        /* 


Modifies the version&#39;s sequence within the project, which affects the display order of the versions in Jira. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
        cloudidRestApi3VersionIdMovePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version to be moved.
let opts = {
  'body': new Jira.InlineObject61() // InlineObject61 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionIdMovePost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdRemoveAndSwapPost
        /* 


Deletes a project version. Permissions required: Administer Jira global permission or Administer Projects project permission. Alternative versions can be provided to update issues that use the deleted version in fixVersion, affectedVersion, or any version picker custom fields. If alternatives are not provided, occurrences of fixVersion, affectedVersion, and any version picker custom field, that contain the deleted version, are cleared. Any replacement version must be in the same project as the version being deleted and cannot be the version being deleted.

 */
        cloudidRestApi3VersionIdRemoveAndSwapPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
let opts = {
  'body': new Jira.InlineObject62() // InlineObject62 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionIdRemoveAndSwapPost(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionPost
        /* 


Creates a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
        cloudidRestApi3VersionPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject59() // InlineObject59 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost
        /* 


 */
        cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let globalId = "globalId_example";*/ // String |
/*let versionId = "versionId_example";*/ // String | 
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdPost(incomingOptions.cloudid, incomingOptions.globalId, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkPost
        /* 


Create a remote version link via POST. The link&#39;s global ID will be taken from the JSON payload if provided; otherwise, it will be generated.

 */
        cloudidRestApi3VersionVersionIdRemotelinkPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let versionId = "versionId_example";*/ // String | 
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkPost(incomingOptions.cloudid, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost
        /* 


Adds a property to a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
        cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let transitionId = 56;*/ // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let opts = {
//  'key': "key_example", // String | The key of the property being added, also known as the name of the property. Set this to the same value as the key defined in the request body.
//  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
//  'workflowName': "workflowName_example", // String | The name of the workflow that the transition belongs to.
  'body': new Jira.InlineObject64() // InlineObject64 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPost(incomingOptions.cloudid, incomingOptions.transitionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdCreatedraftPost
        /* 


Create a draft workflow scheme from an active workflow scheme, by copying the active workflow scheme. Note that an active workflow scheme can only have one draft workflow scheme at any given time.

 */
        cloudidRestApi3WorkflowschemeIdCreatedraftPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the active workflow scheme that the draft is created from.
apiInstance.cloudidRestApi3WorkflowschemeIdCreatedraftPost(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemePost
        /* 


Creates a workflow scheme.

 */
        cloudidRestApi3WorkflowschemePost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject65() // InlineObject65 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemePost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorklogListPost
        /* 


Returns worklog details for a list of worklog IDs.

 */
        cloudidRestApi3WorklogListPost(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts properties that returns the properties of each worklog.
  'body': new Jira.InlineObject74() // InlineObject74 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorklogListPost(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        async put(entity, options) {
        switch (entity) {
            
        case "CLOUDID_REST_API3_APPLICATION_PROPERTIES_ID":
        /* 
      


Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ApplicationPropertiesIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMPONENT_ID":
        /* 
      


Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\&quot;\&quot;) the component lead is removed. Permissions required: Any of the following:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ComponentIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING_OPTIONS":
        /* 
      


Sets the time tracking settings.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingOptionsPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING":
        /* 
      


Selects a time tracking provider.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_OPTION_ID":
        /* 
      


Updates an option for a select list issue field. If the option does not exist, a new option is created.


      Function parameters for this API cloudid,fieldKey,optionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionOptionIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_DEFAULT_SHARE_SCOPE":
        /* 
      


Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterDefaultShareScopePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_COLUMNS":
        /* 
      


Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdColumnsPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_FAVOURITE":
        /* 
      


Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdFavouritePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID":
        /* 
      


Updates an existing filter. Use this method to update a filter&#39;s name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_ASSIGNEE":
        /* 
      


Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyAssigneePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID":
        /* 
      


a string containing the issue id or key the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyCommentIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets the value of an issue&#39;s property. Use this resource to store custom data against an issue.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY":
        /* 
      


Edits an issue. A transition may be applied and issue properties updated as part of the edit.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID":
        /* 
      


Updates a remote issue link for an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID":
        /* 
      


Updates a worklog.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets the value of a worklog property. Use this operation to store custom data against the worklog.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID":
        /* 
      


Updates an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets a property value on multiple issues. The issues to be updated can be specified by a filter.


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuePropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ID":
        /* 
      


Updates the issue type. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES_LOCALE":
        /* 
      


Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesLocalePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES":
        /* 
      


Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID":
        /* 
      


Updates a permission scheme. Below are some important things to note when using this resource:


      Function parameters for this API cloudid,schemeId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_CATEGORY_ID":
        /* 
      


Updates a project category.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectCategoryIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_AVATAR":
        /* 
      


Sets the avatar displayed for a project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyAvatarPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets the value of the project property. You can use project properties to store custom data against the project.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY":
        /* 
      


Updates the project details of an existing project.


      Function parameters for this API cloudid,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLE_ID":
        /* 
      


Associates actors with the project role for the project, replacing all existing actors.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_TYPE_NEW_PROJECT_TYPE_KEY":
        /* 
      


Updates the project type.


      Function parameters for this API cloudid,newProjectTypeKey,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_KEY_OR_ID_PERMISSIONSCHEME":
        /* 
      


Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.


      Function parameters for this API cloudid,projectKeyOrId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID":
        /* 
      


Update the project role&#39;s name and description. You must include both a name and a description in the request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID":
        /* 
      


Updates the name of a screen tab.


      Function parameters for this API cloudid,screenId,tabId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SETTINGS_COLUMNS":
        /* 
      


Sets the default issue navigator columns.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3SettingsColumnsPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_COLUMNS":
        /* 
      


Sets the default issue table columns for the user. If a username is not passed, the calling user&#39;s default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username&#x3D;&lt;username&gt; -d columns&#x3D;summary -d columns&#x3D;description &lt;url&gt; Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserColumnsPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PROPERTIES_PROPERTY_KEY":
        /* 
      


Sets the value of a user&#39;s property. Use this resource to store custom data against a user. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPropertiesPropertyKeyPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID_MERGETO_MOVE_ISSUES_TO":
        /* 
      


Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,moveIssuesTo
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdMergetoMoveIssuesToPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID":
        /* 
      


Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES":
        /* 
      


Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DEFAULT":
        /* 
      


Sets the default workflow for a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDefaultPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_DEFAULT":
        /* 
      


Sets the default workflow for a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftDefaultPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Sets the workflow for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT":
        /* 
      


Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_WORKFLOW":
        /* 
      


Sets the issue types for a workflow in a workflow scheme&#39;s draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftWorkflowPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Sets the workflow for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID":
        /* 
      


Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_WORKFLOW":
        /* 
      


Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdWorkflowPut(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for cloudidRestApi3ApplicationPropertiesIdPut
        /* 


Changes the value of an application property. For example, you can change the value of the jira.clone.prefix from its default value of CLONE - to Clone - if you prefer sentence case capitalization. Editable properties are described below along with their default values.

 */
        cloudidRestApi3ApplicationPropertiesIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The key of the application property to update.
let opts = {
  'body': new Jira.InlineObject() // InlineObject | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ApplicationPropertiesIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut
        /* 


Creates or updates the value of a property for a comment. Use this resource to store custom data against a comment.

 */
        cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let commentId = "commentId_example";*/ // String | The ID of the comment
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property. The maximum length is 255 characters.
apiInstance.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.commentId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ComponentIdPut
        /* 


Modifies a component. Any fields included in the request are overwritten. If leadUserName is an empty string (\&quot;\&quot;) the component lead is removed. Permissions required: Any of the following:

 */
        cloudidRestApi3ComponentIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | 
let opts = {
  'body': new Jira.InlineObject3() // InlineObject3 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ComponentIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingOptionsPut
        /* 


Sets the time tracking settings.

 */
        cloudidRestApi3ConfigurationTimetrackingOptionsPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject5() // InlineObject5 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ConfigurationTimetrackingOptionsPut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingPut
        /* 


Selects a time tracking provider.

 */
        cloudidRestApi3ConfigurationTimetrackingPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject4() // InlineObject4 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ConfigurationTimetrackingPut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut
        /* 


Sets the value of a dashboard item property. Use this resource in apps to store custom data against a dashboard item.

 */
        cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let dashboardId = "dashboardId_example";*/ // String | The ID of the dashboard
/*let itemId = "itemId_example";*/ // String | The ID of the dashboard item
/*let propertyKey = "propertyKey_example";*/ // String | The key of the dashboard item property. The maximum length of the key is 255 bytes.
apiInstance.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.dashboardId, incomingOptions.itemId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionOptionIdPut
        /* 


Updates an option for a select list issue field. If the option does not exist, a new option is created.

 */
        cloudidRestApi3FieldFieldKeyOptionOptionIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field
/*let optionId = 56;*/ // Number | The ID of the option to be updated. For example, 3.
let opts = {
  'body': new Jira.InlineObject9() // InlineObject9 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionOptionIdPut(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.optionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterDefaultShareScopePut
        /* 


Sets the default sharing for new filters and dashboards for a user. Permissions required: Permission to log in to Jira (i.e., member of the users group).

 */
        cloudidRestApi3FilterDefaultShareScopePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject11() // InlineObject11 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterDefaultShareScopePut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdColumnsPut
        /* 


Sets the columns for a filter. Only navigable fields can be set as columns. Use Get fields to get the list fields in Jira. A navigable field has navigable set to true. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
        cloudidRestApi3FilterIdColumnsPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
apiInstance.cloudidRestApi3FilterIdColumnsPut(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdFavouritePut
        /* 


Add a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
        cloudidRestApi3FilterIdFavouritePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterIdFavouritePut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdPut
        /* 


Updates an existing filter. Use this method to update a filter&#39;s name, description, JQL, or sharing. Permissions required: Permission to log in to Jira, however the following rules govern what a user can update:

 */
        cloudidRestApi3FilterIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter to update.
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
  'body': new Jira.InlineObject12() // InlineObject12 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyAssigneePut
        /* 


Assigns an issue to a user. Use this operation when the calling user does not have the Edit Issues permission but has the Assign issue permission for the project that the issue is in.

 */
        cloudidRestApi3IssueIssueIdOrKeyAssigneePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue to be assigned.
let opts = {
  'body': new Jira.InlineObject21() // InlineObject21 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyAssigneePut(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyCommentIdPut
        /* 


a string containing the issue id or key the comment belongs to

 */
        cloudidRestApi3IssueIssueIdOrKeyCommentIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | id of the comment to be update
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | a string containing the issue id or key the comment belongs to
let opts = {
//  'expand': "expand_example", // String | optional flags: renderedBody (provides body rendered in HTML)
  'body': new Jira.InlineObject23() // InlineObject23 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyCommentIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut
        /* 


Sets the value of an issue&#39;s property. Use this resource to store custom data against an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the issue property. The maximum length is 255 characters.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyPut
        /* 


Edits an issue. A transition may be applied and issue properties updated as part of the edit.

 */
        cloudidRestApi3IssueIssueIdOrKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
  'notifyUsers': true, // Boolean | Indicates whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
  'overrideEditableFlag': true, // Boolean | Indicates whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
  'overrideScreenSecurity': true, // Boolean | Indicates whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
  'body': new Jira.InlineObject20() // InlineObject20 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyPut(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut
        /* 


Updates a remote issue link for an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let linkId = "linkId_example";*/ // String | The ID of the remote issue link.
let opts = {
  'body': new Jira.InlineObject26() // InlineObject26 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdPut(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.linkId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut
        /* 


Updates a worklog.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the worklog
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key the issue.
let opts = {
//  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
//  'expand': "expand_example", // String | Use expand to include additional information about worklogs in the response. This parameter accepts multiple values separated by a comma:
//  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  'notifyUsers': true, // Boolean | Indicates whether users watching the issue are notified by email.
  'overrideEditableFlag': true, // Boolean | Indicates whether the worklog should be added to the issue even if the issue is not editable, for example, because the issue is closed. Only connect app users with admin permissions can use this flag.
  'body': new Jira.InlineObject29() // InlineObject29 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut
        /* 


Sets the value of a worklog property. Use this operation to store custom data against the worklog.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the issue property. The maximum length is 255 characters
/*let worklogId = "worklogId_example";*/ // String | The ID of the worklog.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, incomingOptions.worklogId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut
        /* 


Updates an issue link type.

 */
        cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueLinkTypeId = "issueLinkTypeId_example";*/ // String | The ID of the issue link type.
let opts = {
  'body': new Jira.InlineObject32() // InlineObject32 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdPut(incomingOptions.cloudid, incomingOptions.issueLinkTypeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuePropertiesPropertyKeyPut
        /* 


Sets a property value on multiple issues. The issues to be updated can be specified by a filter.

 */
        cloudidRestApi3IssuePropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property. The maximum length is 255 characters.
let opts = {
  'body': new Jira.InlineObject18() // InlineObject18 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuePropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.propertyKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIdPut
        /* 


Updates the issue type. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3IssuetypeIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue type.
let opts = {
  'body': new Jira.InlineObject34() // InlineObject34 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuetypeIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut
        /* 


Creates or updates the value of the issue type property. Use this resource to store and update data against an issue type. The value of the request body must be a valid, non-empty JSON blob. The maximum length of the property value is 32768 bytes. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueTypeId = "issueTypeId_example";*/ // String | The ID of the issue type
/*let propertyKey = "propertyKey_example";*/ // String | The key of the issue type property. The maximum length of the key is 255 bytes.
apiInstance.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.issueTypeId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesLocalePut
        /* 


Sets the locale of the current user. The requested locale must be one supported by the instance of Jira.

 */
        cloudidRestApi3MypreferencesLocalePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
  'body': new Jira.InlineObject36() // InlineObject36 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MypreferencesLocalePut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesPut
        /* 


Creates a preference for the user or updates its value. An arbitrary preference can be created with the value containing up to 255 characters. In addition, the following keys define system preferences that can be set or created:

 */
        cloudidRestApi3MypreferencesPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example" // String | The key of the preference. Maximum length is 255 characters.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MypreferencesPut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdPut
        /* 


Updates a permission scheme. Below are some important things to note when using this resource:

 */
        cloudidRestApi3PermissionschemeSchemeIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let schemeId = 56;*/ // Number | The ID of the permission scheme to update (e.g., 10000).
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are always included when you specify any value:
  'body': new Jira.InlineObject39() // InlineObject39 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3PermissionschemeSchemeIdPut(incomingOptions.cloudid, incomingOptions.schemeId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectCategoryIdPut
        /* 


Updates a project category.

 */
        cloudidRestApi3ProjectCategoryIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | 
let opts = {
  'body': new Jira.InlineObject48() // InlineObject48 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectCategoryIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyAvatarPut
        /* 


Sets the avatar displayed for a project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyAvatarPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The ID or (case-sensitive) key of the project.
let opts = {
  'body': new Jira.InlineObject43() // InlineObject43 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyAvatarPut(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut
        /* 


Sets the value of the project property. You can use project properties to store custom data against the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive)
/*let propertyKey = "propertyKey_example";*/ // String | The key of the project property. The maximum length is 255 bytes.
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyPut
        /* 


Updates the project details of an existing project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that the project description, issue types, and project lead are included in all responses by default:
  'body': new Jira.InlineObject42() // InlineObject42 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyPut(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut
        /* 


Associates actors with the project role for the project, replacing all existing actors.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
  'body': new Jira.InlineObject44() // InlineObject44 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoleIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut
        /* 


Updates the project type.

 */
        cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let newProjectTypeKey = "newProjectTypeKey_example";*/ // String | The key of the new project type
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyTypeNewProjectTypeKeyPut(incomingOptions.cloudid, incomingOptions.newProjectTypeKey, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut
        /* 


Associates a permission scheme with a particular project. See Managing project permissions for more information about permission schemes.

 */
        cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectKeyOrId = "projectKeyOrId_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'expand': "expand_example", // String | Use expand to include additional information in the response. This parameter accepts multiple values separated by a comma. Note that permissions are included when you specify any value:
  'body': new Jira.InlineObject46() // InlineObject46 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectKeyOrIdPermissionschemePut(incomingOptions.cloudid, incomingOptions.projectKeyOrId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdPut
        /* 


Update the project role&#39;s name and description. You must include both a name and a description in the request.

 */
        cloudidRestApi3RoleIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
let opts = {
  'body': new Jira.InlineObject50() // InlineObject50 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RoleIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdPut
        /* 


Updates the name of a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
let opts = {
  'body': new Jira.InlineObject54() // InlineObject54 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdPut(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.tabId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3SettingsColumnsPut
        /* 


Sets the default issue navigator columns.

 */
        cloudidRestApi3SettingsColumnsPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3SettingsColumnsPut(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserColumnsPut
        /* 


Sets the default issue table columns for the user. If a username is not passed, the calling user&#39;s default columns are set. If no column details are sent, then all default columns are removed. The parameters for this resource are expressed as HTML form data. For example, in curl: curl -X PUT -d username&#x3D;&lt;username&gt; -d columns&#x3D;summary -d columns&#x3D;description &lt;url&gt; Permissions required:

 */
        cloudidRestApi3UserColumnsPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example" // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserColumnsPut(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPropertiesPropertyKeyPut
        /* 


Sets the value of a user&#39;s property. Use this resource to store custom data against a user. Permissions required:

 */
        cloudidRestApi3UserPropertiesPropertyKeyPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let propertyKey = "propertyKey_example";*/ // String | The key of the user's property. The maximum length of the key is 255 bytes.
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPropertiesPropertyKeyPut(incomingOptions.cloudid, incomingOptions.propertyKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdMergetoMoveIssuesToPut
        /* 


Merges two project versions. The merge is completed by deleting the version specified in id and replacing any occurrences of its ID in fixVersion with the version ID specified in moveIssuesTo. Consider using Delete and replace version instead. This resource supports swapping version values in fixVersion, affectedVersion, and custom fields. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
        cloudidRestApi3VersionIdMergetoMoveIssuesToPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version to delete
/*let moveIssuesTo = "moveIssuesTo_example";*/ // String | The ID of the version to merge into.
apiInstance.cloudidRestApi3VersionIdMergetoMoveIssuesToPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.moveIssuesTo, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdPut
        /* 


Modifies a project version. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
        cloudidRestApi3VersionIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
let opts = {
  'body': new Jira.InlineObject60() // InlineObject60 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut
        /* 


Updates a workflow transition by changing the property value. Trying to update a property that does not exist results in a new property being added to the transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
        cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let transitionId = 56;*/ // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let opts = {
//  'key': "key_example", // String | The key of the property being updated, also known as the name of the property. Set this to the same value as the key defined in the request body.
//  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
//  'workflowName': "workflowName_example", // String | The name of the workflow that the transition belongs to.
  'body': new Jira.InlineObject63() // InlineObject63 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesPut(incomingOptions.cloudid, incomingOptions.transitionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDefaultPut
        /* 


Sets the default workflow for a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdDefaultPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
  'body': new Jira.InlineObject67() // InlineObject67 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDefaultPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftDefaultPut
        /* 


Sets the default workflow for a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftDefaultPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
let opts = {
  'body': new Jira.InlineObject69() // InlineObject69 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftDefaultPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut
        /* 


Sets the workflow for an issue type in a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
let opts = {
  'body': new Jira.InlineObject70() // InlineObject70 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypePut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftPut
        /* 


Updates a draft workflow scheme. If a draft workflow scheme does not exist for the active workflow scheme, then a draft is created. Note that an active workflow scheme can only have one draft workflow scheme at any given time.

 */
        cloudidRestApi3WorkflowschemeIdDraftPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the active workflow scheme that the draft was originally created from.
let opts = {
  'body': new Jira.InlineObject68() // InlineObject68 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftWorkflowPut
        /* 


Sets the issue types for a workflow in a workflow scheme&#39;s draft. The workflow can also be set as the default workflow for the draft workflow scheme. Unmapped issues types are mapped to the default workflow.

 */
        cloudidRestApi3WorkflowschemeIdDraftWorkflowPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
let opts = {
//  'workflowName': "workflowName_example", // String | The name of the workflow.
  'body': new Jira.InlineObject71() // InlineObject71 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftWorkflowPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut
        /* 


Sets the workflow for an issue type in a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
let opts = {
  'body': new Jira.InlineObject72() // InlineObject72 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypePut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdPut
        /* 


Updates a workflow scheme, including the name, default workflow, issue type to project mappings, and more. If the workflow scheme is active (that is, being used by at least one project), then a draft workflow scheme is created or updated instead, provided that updateDraftIfNeeded is set to true.

 */
        cloudidRestApi3WorkflowschemeIdPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
let opts = {
  'body': new Jira.InlineObject66() // InlineObject66 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdWorkflowPut
        /* 


Sets the issue types for a workflow in a workflow scheme. The workflow can also be set as the default workflow for the workflow scheme. Unmapped issues types are mapped to the default workflow.

 */
        cloudidRestApi3WorkflowschemeIdWorkflowPut(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
//  'workflowName': "workflowName_example", // String | The name of the workflow.
  'body': new Jira.InlineObject73() // InlineObject73 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdWorkflowPut(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        async delete(entity, options) {
        switch (entity) {
            
        case "CLOUDID_REST_API3_ATTACHMENT_ID":
        /* 
      


Deletes an attachment from an issue.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3AttachmentIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMMENT_COMMENT_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes a comment property.


      Function parameters for this API cloudid,commentId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_COMPONENT_ID":
        /* 
      


Deletes a component. Permissions required: Any of the following:


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ComponentIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_CONFIGURATION_TIMETRACKING":
        /* 
      


Disables time tracking.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ConfigurationTimetrackingDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_DASHBOARD_DASHBOARD_ID_ITEMS_ITEM_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes a dashboard item property.


      Function parameters for this API cloudid,dashboardId,itemId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_OPTION_ID":
        /* 
      


Deletes an option from a select list issue field.


      Function parameters for this API cloudid,fieldKey,optionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionOptionIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FIELD_FIELD_KEY_OPTION_OPTION_ID_ISSUE":
        /* 
      


Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.


      Function parameters for this API cloudid,fieldKey,optionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_COLUMNS":
        /* 
      


Reset the user&#39;s column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdColumnsDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID":
        /* 
      


Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_FAVOURITE":
        /* 
      


Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdFavouriteDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_FILTER_ID_PERMISSION_PERMISSION_ID":
        /* 
      


Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.


      Function parameters for this API cloudid,id,permissionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3FilterIdPermissionPermissionIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP":
        /* 
      


Deletes a group.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_GROUP_USER":
        /* 
      


Removes a user from a group. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3GroupUserDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_COMMENT_ID":
        /* 
      


a string containing the issue id or key the comment belongs to


      Function parameters for this API cloudid,id,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY":
        /* 
      


Deletes an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes an issue&#39;s property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK":
        /* 
      


Deletes the remote issue link from the issue using the link&#39;s global ID.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_REMOTELINK_LINK_ID":
        /* 
      


Deletes a remote issue link from an issue.


      Function parameters for this API cloudid,issueIdOrKey,linkId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_VOTES":
        /* 
      


Deletes a user&#39;s vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.


      Function parameters for this API cloudid,issueIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyVotesDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WATCHERS":
        /* 
      


Deletes a user as a watcher of an issue.


      Function parameters for this API cloudid,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWatchersDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_ID":
        /* 
      


Deletes a worklog from an issue.


      Function parameters for this API cloudid,id,issueIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_ISSUE_ID_OR_KEY_WORKLOG_WORKLOG_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes a worklog property.


      Function parameters for this API cloudid,issueIdOrKey,propertyKey,worklogId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_LINK_ID":
        /* 
      


Deletes an issue link.


      Function parameters for this API cloudid,linkId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkLinkIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_LINK_TYPE_ISSUE_LINK_TYPE_ID":
        /* 
      


Deletes an issue link type.


      Function parameters for this API cloudid,issueLinkTypeId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUE_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuePropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ID":
        /* 
      


Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ISSUETYPE_ISSUE_TYPE_ID_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes the issue type property. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,issueTypeId,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES":
        /* 
      


Deletes a preference of the user, which restores the default value of system defined settings.


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_MYPREFERENCES_LOCALE":
        /* 
      


Deletes the locale of the current user, which restores the default setting.


      Function parameters for this API cloudid
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3MypreferencesLocaleDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID":
        /* 
      


Deletes a permission scheme. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,schemeId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PERMISSIONSCHEME_SCHEME_ID_PERMISSION_PERMISSION_ID":
        /* 
      


Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.


      Function parameters for this API cloudid,permissionId,schemeId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_CATEGORY_ID":
        /* 
      


Deletes a project category.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectCategoryIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_AVATAR_ID":
        /* 
      


Deletes a custom avatar from a project. Note that system avatars cannot be deleted.


      Function parameters for this API cloudid,id,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY":
        /* 
      


Deletes an existing project.


      Function parameters for this API cloudid,projectIdOrKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_PROPERTIES_PROPERTY_KEY":
        /* 
      


Removes the property from the project.


      Function parameters for this API cloudid,projectIdOrKey,propertyKey
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_PROJECT_PROJECT_ID_OR_KEY_ROLE_ID":
        /* 
      


Deletes actors from a project role for the project.


      Function parameters for this API cloudid,id,projectIdOrKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID_ACTORS":
        /* 
      


Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdActorsDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_ROLE_ID":
        /* 
      


Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3RoleIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID":
        /* 
      


Deletes a screen tab.


      Function parameters for this API cloudid,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_SCREENS_SCREEN_ID_TABS_TAB_ID_FIELDS_ID":
        /* 
      


Removes a field from a screen tab.


      Function parameters for this API cloudid,id,screenId,tabId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_UNIVERSAL_AVATAR_TYPE_TYPE_OWNER_OWNING_OBJECT_ID_AVATAR_ID":
        /* 
      


Deletes an avatar from a project or issue type.


      Function parameters for this API cloudid,id,owningObjectId,type
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_COLUMNS":
        /* 
      


Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user&#39;s default columns are reset. Permissions required:


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserColumnsDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER":
        /* 
      


Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).


      Function parameters for this API cloudid,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_USER_PROPERTIES_PROPERTY_KEY":
        /* 
      


Deletes a property from a user. Permissions required:


      Function parameters for this API cloudid,propertyKey,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3UserPropertiesPropertyKeyDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_ID":
        /* 
      


Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK":
        /* 
      


The version for which to delete ALL existing remote version links


      Function parameters for this API cloudid,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_VERSION_VERSION_ID_REMOTELINK_GLOBAL_ID":
        /* 
      


The version ID of the remote link


      Function parameters for this API cloudid,globalId,versionId
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOW_TRANSITIONS_TRANSITION_ID_PROPERTIES":
        /* 
      


Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.


      Function parameters for this API cloudid,transitionId,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DEFAULT":
        /* 
      


Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDefaultDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID":
        /* 
      


Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_DEFAULT":
        /* 
      


Resets the default workflow for a workflow scheme&#39;s draft. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftDefaultDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT":
        /* 
      


Deletes a draft workflow scheme.


      Function parameters for this API cloudid,id
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Deletes the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,issueType
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_DRAFT_WORKFLOW":
        /* 
      


Deletes the workflow-issue type mapping for a workflow in a workflow scheme&#39;s draft.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_ISSUETYPE_ISSUE_TYPE":
        /* 
      


Deletes the issue type-workflow mapping for an issue type in a workflow scheme.


      Function parameters for this API cloudid,id,issueType,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
        case "CLOUDID_REST_API3_WORKFLOWSCHEME_ID_WORKFLOW":
        /* 
      


Deletes the workflow-issue type mapping for a workflow in a workflow scheme.


      Function parameters for this API cloudid,id,opts
        */
        return new Promise((resolve, reject) => {
          this.cloudidRestApi3WorkflowschemeIdWorkflowDelete(options, (err, data, response) => {
            if(err) {
              reject({error: err, response: response});
            }
            resolve({data: data, response: response});
          })
        })
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for cloudidRestApi3AttachmentIdDelete
        /* 


Deletes an attachment from an issue.

 */
        cloudidRestApi3AttachmentIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the attachment.
apiInstance.cloudidRestApi3AttachmentIdDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete
        /* 


Deletes a comment property.

 */
        cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let commentId = "commentId_example";*/ // String | The ID of the comment
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property.
apiInstance.cloudidRestApi3CommentCommentIdPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.commentId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ComponentIdDelete
        /* 


Deletes a component. Permissions required: Any of the following:

 */
        cloudidRestApi3ComponentIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the component.
let opts = {
//  'moveIssuesTo': "moveIssuesTo_example" // String | The ID of the component to replace the deleted component. If this value is null no replacement is made.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ComponentIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ConfigurationTimetrackingDelete
        /* 


Disables time tracking.

 */
        cloudidRestApi3ConfigurationTimetrackingDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3ConfigurationTimetrackingDelete(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete
        /* 


Deletes a dashboard item property.

 */
        cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let dashboardId = "dashboardId_example";*/ // String | The ID of the dashboard
/*let itemId = "itemId_example";*/ // String | The ID of the dashboard item
/*let propertyKey = "propertyKey_example";*/ // String | The key of the dashboard item property.
apiInstance.cloudidRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.dashboardId, incomingOptions.itemId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionOptionIdDelete
        /* 


Deletes an option from a select list issue field.

 */
        cloudidRestApi3FieldFieldKeyOptionOptionIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field
/*let optionId = 56;*/ // Number | The ID of the option to be deleted. For example, 3.
apiInstance.cloudidRestApi3FieldFieldKeyOptionOptionIdDelete(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.optionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete
        /* 


Deselects a select list issue field option in all issues that it has been selected in. A different option can be selected to replace the deselected option. The update can also be limited to a smaller set of issues by using a JQL query.

 */
        cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let fieldKey = "fieldKey_example";*/ // String | The field key is specified in the following format: $(app-key)__$(field-key). For example, example-add-on__example-issue-field
/*let optionId = 56;*/ // Number | The ID of the option to be deselected. For example, 3.
let opts = {
//  'jql': "jql_example", // String | A JQL query that specifies the issues to be updated. For example, project=10000.
  'replaceWith': 56 // Number | The ID of the option that will replace the currently selected option. For example, 2.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FieldFieldKeyOptionOptionIdIssueDelete(incomingOptions.cloudid, incomingOptions.fieldKey, incomingOptions.optionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdColumnsDelete
        /* 


Reset the user&#39;s column configuration for the filter to the default. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
        cloudidRestApi3FilterIdColumnsDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
apiInstance.cloudidRestApi3FilterIdColumnsDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdDelete
        /* 


Delete a filter. Permissions required: Permission to log in to Jira, however the following rules govern what a user can delete:

 */
        cloudidRestApi3FilterIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter to delete.
apiInstance.cloudidRestApi3FilterIdDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdFavouriteDelete
        /* 


Removes a filter as a favorite for the calling user. Permissions required: Permission to log in to Jira (i.e., member of the users group) and permission to view the filter.

 */
        cloudidRestApi3FilterIdFavouriteDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter.
let opts = {
//  'expand': "expand_example" // String | Use expand to include additional information about filter in the response. This parameter accepts multiple values separated by a comma:
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3FilterIdFavouriteDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3FilterIdPermissionPermissionIdDelete
        /* 


Deletes a share permission from a filter. Permissions required: Permission to log in to Jira (i.e., member of the users group) and the calling user must own the filter.

 */
        cloudidRestApi3FilterIdPermissionPermissionIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the filter
/*let permissionId = 56;*/ // Number | The ID of the share permission.
apiInstance.cloudidRestApi3FilterIdPermissionPermissionIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.permissionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupDelete
        /* 


Deletes a group.

 */
        cloudidRestApi3GroupDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'groupname': "groupname_example", // String | The name of the group.
//  'swapGroup': "swapGroup_example" // String | The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs will be inaccessible after the deletion.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupDelete(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3GroupUserDelete
        /* 


Removes a user from a group. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3GroupUserDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountid': "accountid_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
//  'groupname': "groupname_example", // String | The name of the group.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3GroupUserDelete(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete
        /* 


a string containing the issue id or key the comment belongs to

 */
        cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | id of the comment to be delete
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | a string containing the issue id or key the comment belongs to
apiInstance.cloudidRestApi3IssueIssueIdOrKeyCommentIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyDelete
        /* 


Deletes an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'deleteSubtasks': "deleteSubtasks_example" // String | Indicates whether the issue's sub-tasks are deleted when the issue is deleted.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete
        /* 


Deletes an issue&#39;s property.

 */
        cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The key or ID of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete
        /* 


Deletes the remote issue link from the issue using the link&#39;s global ID.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'globalId': "globalId_example" // String | The global ID of a remote issue link.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete
        /* 


Deletes a remote issue link from an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let linkId = "linkId_example";*/ // String | The ID of a remote issue link.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyRemotelinkLinkIdDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.linkId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyVotesDelete
        /* 


Deletes a user&#39;s vote from an issue. This is the equivalent of the user clicking Unvote on an issue in Jira.

 */
        cloudidRestApi3IssueIssueIdOrKeyVotesDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyVotesDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWatchersDelete
        /* 


Deletes a user as a watcher of an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyWatchersDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'accountId': "accountId_example", // String | The account ID of the user. Required if username is omitted, otherwise must be omitted.
//  'username': "username_example" // String | The name of the user. Required if accountId is omitted, otherwise must be omitted.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWatchersDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete
        /* 


Deletes a worklog from an issue.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the worklog
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue.
let opts = {
//  'adjustEstimate': "adjustEstimate_example", // String | Defines how to update the issue's time estimate, the options are:
//  'increaseBy': "increaseBy_example", // String | The amount to increase the issue's remaining estimate by, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is manual.
//  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (#d), hours (#h), or minutes (#m or #). For example, 2d. Required when adjustEstimate is new.
  'notifyUsers': true, // Boolean | Indicates whether users watching the issue are notified by email.
  'overrideEditableFlag': true // Boolean | Indicates whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete
        /* 


Deletes a worklog property.

 */
        cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueIdOrKey = "issueIdOrKey_example";*/ // String | The ID or key of the issue
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property
/*let worklogId = "worklogId_example";*/ // String | The ID of the worklog.
apiInstance.cloudidRestApi3IssueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.issueIdOrKey, incomingOptions.propertyKey, incomingOptions.worklogId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkLinkIdDelete
        /* 


Deletes an issue link.

 */
        cloudidRestApi3IssueLinkLinkIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let linkId = "linkId_example";*/ // String | The ID of the issue link.
apiInstance.cloudidRestApi3IssueLinkLinkIdDelete(incomingOptions.cloudid, incomingOptions.linkId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete
        /* 


Deletes an issue link type.

 */
        cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueLinkTypeId = "issueLinkTypeId_example";*/ // String | The ID of the issue link type.
apiInstance.cloudidRestApi3IssueLinkTypeIssueLinkTypeIdDelete(incomingOptions.cloudid, incomingOptions.issueLinkTypeId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuePropertiesPropertyKeyDelete
        /* 


Deletes a property value from multiple issues. The issues to be updated can be specified by filter criteria.

 */
        cloudidRestApi3IssuePropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property.
let opts = {
  'body': new Jira.InlineObject19() // InlineObject19 | 
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuePropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.propertyKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIdDelete
        /* 


Deletes the issue type. If the issue type is in use, all uses are updated with the alternative issue type (alternativeIssueTypeId). A list of alternative issue types can be obtained from the Get alternative issue types resource. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3IssuetypeIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the issue type.
let opts = {
//  'alternativeIssueTypeId': "alternativeIssueTypeId_example" // String | The ID of the replacement issue type.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3IssuetypeIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete
        /* 


Deletes the issue type property. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let issueTypeId = "issueTypeId_example";*/ // String | The ID of the issue type
/*let propertyKey = "propertyKey_example";*/ // String | The key of the property. Use Get issue type property keys to get a list of all issue type property keys.
apiInstance.cloudidRestApi3IssuetypeIssueTypeIdPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.issueTypeId, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesDelete
        /* 


Deletes a preference of the user, which restores the default value of system defined settings.

 */
        cloudidRestApi3MypreferencesDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'key': "key_example" // String | The key of the preference.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3MypreferencesDelete(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3MypreferencesLocaleDelete
        /* 


Deletes the locale of the current user, which restores the default setting.

 */
        cloudidRestApi3MypreferencesLocaleDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
apiInstance.cloudidRestApi3MypreferencesLocaleDelete(incomingOptions.cloudid, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdDelete
        /* 


Deletes a permission scheme. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3PermissionschemeSchemeIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let schemeId = 56;*/ // Number | The ID of the permission scheme being deleted (e.g., 10000).
apiInstance.cloudidRestApi3PermissionschemeSchemeIdDelete(incomingOptions.cloudid, incomingOptions.schemeId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete
        /* 


Deletes a permission grant from a permission scheme. See About permission schemes and grants for more details. Permissions required: Administer Jira global permission.

 */
        cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let permissionId = 56;*/ // Number | The ID of the permission grant to delete (e.g., 10847)
/*let schemeId = 56;*/ // Number | The ID of the permission scheme to delete the permission grant from (e.g., 10000).
apiInstance.cloudidRestApi3PermissionschemeSchemeIdPermissionPermissionIdDelete(incomingOptions.cloudid, incomingOptions.permissionId, incomingOptions.schemeId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectCategoryIdDelete
        /* 


Deletes a project category.

 */
        cloudidRestApi3ProjectCategoryIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | ID of the project category to delete.
apiInstance.cloudidRestApi3ProjectCategoryIdDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete
        /* 


Deletes a custom avatar from a project. Note that system avatars cannot be deleted.

 */
        cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the avatar
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or (case-sensitive) key.
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyAvatarIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyDelete
        /* 


Deletes an existing project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyDelete(incomingOptions.cloudid, incomingOptions.projectIdOrKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete
        /* 


Removes the property from the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive)
/*let propertyKey = "propertyKey_example";*/ // String | The project property key. Use Get project property keys to get a list of all project property keys.
apiInstance.cloudidRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.projectIdOrKey, incomingOptions.propertyKey, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete
        /* 


Deletes actors from a project role for the project.

 */
        cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs
/*let projectIdOrKey = "projectIdOrKey_example";*/ // String | The project ID or project key (case sensitive).
let opts = {
//  'group': "group_example", // String | The name of the group to remove from the project role.
//  'user': "user_example" // String | The user account ID of the user to remove from the project role.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3ProjectProjectIdOrKeyRoleIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.projectIdOrKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdActorsDelete
        /* 


Removes default actors from the project role. You may remove either a group or user, but you cannot remove a group and a user in the same request.

 */
        cloudidRestApi3RoleIdActorsDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role. Use Get all project roles to get a list of project role IDs.
let opts = {
//  'group': "group_example", // String | The group name of the group to be removed as a default actor.
//  'user': "user_example" // String | The user account ID of the user to remove as a default actor.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RoleIdActorsDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3RoleIdDelete
        /* 


Deletes a project role. You must specify a replacement project role if you wish to delete a project role that is in use.

 */
        cloudidRestApi3RoleIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the project role to delete. Use Get all project roles to get a list of project role IDs.
let opts = {
  'swap': 56 // Number | The ID of the project role that will replace the one being deleted.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3RoleIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdDelete
        /* 


Deletes a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdDelete(incomingOptions.cloudid, incomingOptions.screenId, incomingOptions.tabId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete
        /* 


Removes a field from a screen tab.

 */
        cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the field
/*let screenId = 56;*/ // Number | The ID of the screen
/*let tabId = 56;*/ // Number | The ID of the screen tab.
apiInstance.cloudidRestApi3ScreensScreenIdTabsTabIdFieldsIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.screenId, incomingOptions.tabId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete
        /* 


Deletes an avatar from a project or issue type.

 */
        cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the avatar
/*let owningObjectId = "owningObjectId_example";*/ // String | The ID of the entity item
/*let type = "type_example";*/ // String | The type of the entity. Valid values are project and issuetype.
apiInstance.cloudidRestApi3UniversalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.owningObjectId, incomingOptions.type, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserColumnsDelete
        /* 


Resets the default issue table columns for the user to the system default. If a username is not passed, the calling user&#39;s default columns are reset. Permissions required:

 */
        cloudidRestApi3UserColumnsDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserColumnsDelete(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserDelete
        /* 


Deletes a user. Permissions required: Site administration (i.e., member of the site-admin group).

 */
        cloudidRestApi3UserDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the project
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'key': "key_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin. Required, unless accountId or username is specified.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserDelete(incomingOptions.cloudid, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3UserPropertiesPropertyKeyDelete
        /* 


Deletes a property from a user. Permissions required:

 */
        cloudidRestApi3UserPropertiesPropertyKeyDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let propertyKey = "propertyKey_example";*/ // String | The key of the user's property.
let opts = {
//  'accountId': "accountId_example", // String | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. Required, unless username or key is specified.
//  'userKey': "userKey_example", // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The key of the user. For example, admin.
//  'username': "username_example" // String | This parameter has been deprecated due to privacy changes. Use accountId instead. See the migration guide for details.The username of the user. For example, admin. Required, unless accountId or key is specified.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3UserPropertiesPropertyKeyDelete(incomingOptions.cloudid, incomingOptions.propertyKey, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionIdDelete
        /* 


Deletes a project version. Deprecated, use Delete and replace version that supports swapping version values in custom fields, in addition to the swapping for fixVersion and affectedVersion provided in this resource. Alternative versions can be provided to update issues that use the deleted version in fixVersion or affectedVersion. If alternatives are not provided, occurrences of fixVersion and affectedVersion that contain the deleted version are cleared. Permissions required: Administer Jira global permission or Administer Projects project permission.

 */
        cloudidRestApi3VersionIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = "id_example";*/ // String | The ID of the version.
let opts = {
//  'moveAffectedIssuesTo': "moveAffectedIssuesTo_example", // String | The ID of the version to update affectedVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
//  'moveFixIssuesTo': "moveFixIssuesTo_example" // String | The ID of the version to update fixVersion to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3VersionIdDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkDelete
        /* 


The version for which to delete ALL existing remote version links

 */
        cloudidRestApi3VersionVersionIdRemotelinkDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let versionId = "versionId_example";*/ // String | The version for which to delete ALL existing remote version links
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkDelete(incomingOptions.cloudid, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete
        /* 


The version ID of the remote link

 */
        cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let globalId = "globalId_example";*/ // String | The global ID of the remote lin
/*let versionId = "versionId_example";*/ // String | The version ID of the remote link
apiInstance.cloudidRestApi3VersionVersionIdRemotelinkGlobalIdDelete(incomingOptions.cloudid, incomingOptions.globalId, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete
        /* 


Deletes a property from a workflow transition. Transition properties are used to change the behavior of a transition. For more information, see Transition properties and Workflow properties.

 */
        cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let transitionId = 56;*/ // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let opts = {
//  'key': "key_example", // String | The name of the transition property to delete, also known as the name of the property.
//  'workflowMode': "workflowMode_example", // String | The workflow status. Set to live for inactive workflows or draft for draft workflows. Active workflows cannot be edited.
//  'workflowName': "workflowName_example" // String | The name of the workflow that the transition belongs to.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowTransitionsTransitionIdPropertiesDelete(incomingOptions.cloudid, incomingOptions.transitionId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDefaultDelete
        /* 


Resets the default workflow for a workflow scheme. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).

 */
        cloudidRestApi3WorkflowschemeIdDefaultDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
  'updateDraftIfNeeded': true // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDefaultDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDelete
        /* 


Deletes a workflow scheme. Note that a workflow scheme cannot be deleted if it is active (that is, being used by at least one project).

 */
        cloudidRestApi3WorkflowschemeIdDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID will be shown in the URL as schemeId (for example, schemeId=10301).
apiInstance.cloudidRestApi3WorkflowschemeIdDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftDefaultDelete
        /* 


Resets the default workflow for a workflow scheme&#39;s draft. That is, the default workflow is set to Jira&#39;s system workflow (the jira workflow).

 */
        cloudidRestApi3WorkflowschemeIdDraftDefaultDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftDefaultDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftDelete
        /* 


Deletes a draft workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdDraftDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the active workflow scheme that the draft was originally created from.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftDelete(incomingOptions.cloudincomingOptions.id, id, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete
        /* 


Deletes the issue type-workflow mapping for an issue type in a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
apiInstance.cloudidRestApi3WorkflowschemeIdDraftIssuetypeIssueTypeDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete
        /* 


Deletes the workflow-issue type mapping for a workflow in a workflow scheme&#39;s draft.

 */
        cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme that the draft belongs to.
let opts = {
//  'workflowName': "workflowName_example" // String | The name of the workflow.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdDraftWorkflowDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete
        /* 


Deletes the issue type-workflow mapping for an issue type in a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme
/*let issueType = "issueType_example";*/ // String | The ID of the issue type.
let opts = {
  'updateDraftIfNeeded': true // Boolean | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to false.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdIssuetypeIssueTypeDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.issueType, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, data, response)
  }
});
        }

        
        // This is a function for cloudidRestApi3WorkflowschemeIdWorkflowDelete
        /* 


Deletes the workflow-issue type mapping for a workflow in a workflow scheme.

 */
        cloudidRestApi3WorkflowschemeIdWorkflowDelete(incomingOptions, cb) {
            const Jira = require('./dist');
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth
let OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = incomingOptions.accessToken;

let apiInstance = new Jira.DefaultApi()
/*let cloudid = null;*/ // Object | Cloudi of the projec
/*let id = 56;*/ // Number | The ID of the workflow scheme.
let opts = {
  'updateDraftIfNeeded': true, // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to false.
//  'workflowName': "workflowName_example" // String | The name of the workflow.
};


          if(incomingOptions.opts)

          Object.keys(incomingOptions.opts).forEach(key =>incomingOptions.opts[key] === undefined && delete incomingOptions.opts[key]
          )

          else
delete incomingOptions.opts
          incomingOptions.opts = Object.assign(opts, incomingOptions.opts)


apiInstance.cloudidRestApi3WorkflowschemeIdWorkflowDelete(incomingOptions.cloudincomingOptions.id, id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    cb(error, null, response)
  } else {
    cb(null, '', response)
  }
});
        }

        async patch(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
  }
  module.exports = new JiraService();