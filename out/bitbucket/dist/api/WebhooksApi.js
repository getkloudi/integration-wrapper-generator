"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedHookEvents = _interopRequireDefault(require("../model/PaginatedHookEvents"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _SubjectTypes = _interopRequireDefault(require("../model/SubjectTypes"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.2.0
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the hookEventsGet operation.
   * @callback module:api/WebhooksApi~hookEventsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SubjectTypes} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the webhook resource or subject types on which webhooks can be registered.  Each resource/subject type contains an `events` link that returns the paginated list of specific events each individual subject type can emit.  This endpoint is publicly accessible and does not require authentication or scopes.  Example:  ``` $ curl https://api.bitbucket.org/2.0/hook_events  {     \"repository\": {         \"links\": {             \"events\": {                 \"href\": \"https://api.bitbucket.org/2.0/hook_events/repository\"             }         }     },     \"team\": {         \"links\": {             \"events\": {                 \"href\": \"https://api.bitbucket.org/2.0/hook_events/team\"             }         }     },     \"user\": {         \"links\": {             \"events\": {                 \"href\": \"https://api.bitbucket.org/2.0/hook_events/user\"             }         }     } } ```
   * @param {module:api/WebhooksApi~hookEventsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SubjectTypes}
   */


  _createClass(WebhooksApi, [{
    key: "hookEventsGet",
    value: function hookEventsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SubjectTypes["default"];
      return this.apiClient.callApi('/hook_events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the hookEventsSubjectTypeGet operation.
     * @callback module:api/WebhooksApi~hookEventsSubjectTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedHookEvents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all valid webhook events for the specified entity.  This is public data that does not require any scopes or authentication.  Example:  NOTE: The following example is a truncated response object for the `team` `subject_type`. We return the same structure for the other `subject_type` objects.  ``` $ curl https://api.bitbucket.org/2.0/hook_events/team {     \"page\": 1,     \"pagelen\": 30,     \"size\": 21,     \"values\": [         {             \"category\": \"Repository\",             \"description\": \"Whenever a repository push occurs\",             \"event\": \"repo:push\",             \"label\": \"Push\"         },         {             \"category\": \"Repository\",             \"description\": \"Whenever a repository fork occurs\",             \"event\": \"repo:fork\",             \"label\": \"Fork\"         },         ...         {             \"category\": \"Repository\",             \"description\": \"Whenever a repository import occurs\",             \"event\": \"repo:imported\",             \"label\": \"Import\"         }     ] } ```
     * @param {module:model/String} subjectType A resource or subject type.
     * @param {module:api/WebhooksApi~hookEventsSubjectTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedHookEvents}
     */

  }, {
    key: "hookEventsSubjectTypeGet",
    value: function hookEventsSubjectTypeGet(subjectType, callback) {
      var postBody = null; // verify the required parameter 'subjectType' is set

      if (subjectType === undefined || subjectType === null) {
        throw new _Error["default"]("Missing the required parameter 'subjectType' when calling hookEventsSubjectTypeGet");
      }

      var pathParams = {
        'subject_type': subjectType
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedHookEvents["default"];
      return this.apiClient.callApi('/hook_events/{subject_type}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksGet operation.
     * @callback module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksGet",
    value: function repositoriesWorkspaceRepoSlugHooksGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksPost operation.
     * @callback module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified repository.  Example:  ``` $ curl -X POST -u credentials -H 'Content-Type: application/json'           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d '     {       \"description\": \"Webhook Description\",       \"url\": \"https://example.com/\",       \"active\": true,       \"events\": [         \"repo:push\",         \"issue:created\",         \"issue:updated\"       ]     }' ```  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: `webhook`, `repository` and `issue`.  Also note that the `url` must properly resolve and cannot be an internal, non-routed address.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksPost",
    value: function repositoriesWorkspaceRepoSlugHooksPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidDelete operation.
     * @callback module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidDelete",
    value: function repositoriesWorkspaceRepoSlugHooksUidDelete(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidGet operation.
     * @callback module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the specified repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidGet",
    value: function repositoriesWorkspaceRepoSlugHooksUidGet(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidPut operation.
     * @callback module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~repositoriesWorkspaceRepoSlugHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidPut",
    value: function repositoriesWorkspaceRepoSlugHooksUidPut(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksGet operation.
     * @callback module:api/WebhooksApi~teamsUsernameHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this team.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/WebhooksApi~teamsUsernameHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "teamsUsernameHooksGet",
    value: function teamsUsernameHooksGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/teams/{username}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksPost operation.
     * @callback module:api/WebhooksApi~teamsUsernameHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/WebhooksApi~teamsUsernameHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksPost",
    value: function teamsUsernameHooksPost(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksPost");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/teams/{username}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidDelete operation.
     * @callback module:api/WebhooksApi~teamsUsernameHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given team account.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~teamsUsernameHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsUsernameHooksUidDelete",
    value: function teamsUsernameHooksUidDelete(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidDelete");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidGet operation.
     * @callback module:api/WebhooksApi~teamsUsernameHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given team account.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/WebhooksApi~teamsUsernameHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksUidGet",
    value: function teamsUsernameHooksUidGet(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidGet");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidPut operation.
     * @callback module:api/WebhooksApi~teamsUsernameHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~teamsUsernameHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksUidPut",
    value: function teamsUsernameHooksUidPut(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidPut");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksGet operation.
     * @callback module:api/WebhooksApi~usersUsernameHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/WebhooksApi~usersUsernameHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "usersUsernameHooksGet",
    value: function usersUsernameHooksGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/users/{username}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksPost operation.
     * @callback module:api/WebhooksApi~usersUsernameHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one's own account, not that of others.  Also, note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/WebhooksApi~usersUsernameHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksPost",
    value: function usersUsernameHooksPost(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksPost");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidDelete operation.
     * @callback module:api/WebhooksApi~usersUsernameHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~usersUsernameHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersUsernameHooksUidDelete",
    value: function usersUsernameHooksUidDelete(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidDelete");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidGet operation.
     * @callback module:api/WebhooksApi~usersUsernameHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/WebhooksApi~usersUsernameHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksUidGet",
    value: function usersUsernameHooksUidGet(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidGet");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidPut operation.
     * @callback module:api/WebhooksApi~usersUsernameHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~usersUsernameHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksUidPut",
    value: function usersUsernameHooksUidPut(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidPut");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksGet operation.
     * @callback module:api/WebhooksApi~workspacesWorkspaceHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WebhooksApi~workspacesWorkspaceHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "workspacesWorkspaceHooksGet",
    value: function workspacesWorkspaceHooksGet(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceHooksGet");
      }

      var pathParams = {
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksPost operation.
     * @callback module:api/WebhooksApi~workspacesWorkspaceHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified workspace.  Workspace webhooks are fired for events from all repositories contained by that workspace.  Note that only owners can install webhooks on workspaces.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WebhooksApi~workspacesWorkspaceHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "workspacesWorkspaceHooksPost",
    value: function workspacesWorkspaceHooksPost(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceHooksPost");
      }

      var pathParams = {
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksUidDelete operation.
     * @callback module:api/WebhooksApi~workspacesWorkspaceHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~workspacesWorkspaceHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "workspacesWorkspaceHooksUidDelete",
    value: function workspacesWorkspaceHooksUidDelete(workspace, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling workspacesWorkspaceHooksUidDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/workspaces/{workspace}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksUidGet operation.
     * @callback module:api/WebhooksApi~workspacesWorkspaceHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/WebhooksApi~workspacesWorkspaceHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "workspacesWorkspaceHooksUidGet",
    value: function workspacesWorkspaceHooksUidGet(workspace, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling workspacesWorkspaceHooksUidGet");
      }

      var pathParams = {
        'workspace': workspace,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksUidPut operation.
     * @callback module:api/WebhooksApi~workspacesWorkspaceHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WebhooksApi~workspacesWorkspaceHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "workspacesWorkspaceHooksUidPut",
    value: function workspacesWorkspaceHooksUidPut(workspace, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling workspacesWorkspaceHooksUidPut");
      }

      var pathParams = {
        'workspace': workspace,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;