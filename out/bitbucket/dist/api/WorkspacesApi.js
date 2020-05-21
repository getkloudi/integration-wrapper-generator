"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedProjects = _interopRequireDefault(require("../model/PaginatedProjects"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _PaginatedWorkspaceMemberships = _interopRequireDefault(require("../model/PaginatedWorkspaceMemberships"));

var _PaginatedWorkspaces = _interopRequireDefault(require("../model/PaginatedWorkspaces"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

var _Workspace = _interopRequireDefault(require("../model/Workspace"));

var _WorkspaceMembership = _interopRequireDefault(require("../model/WorkspaceMembership"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Workspaces service.
* @module api/WorkspacesApi
* @version 1.2.0
*/
var WorkspacesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkspacesApi. 
  * @alias module:api/WorkspacesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkspacesApi(apiClient) {
    _classCallCheck(this, WorkspacesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the userPermissionsWorkspacesGet operation.
   * @callback module:api/WorkspacesApi~userPermissionsWorkspacesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedWorkspaceMemberships} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns an object for each workspace the caller is a member of, and their effective role - the highest level of privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level is returned.  Permissions can be:  * `owner` * `collaborator` * `member`  Example:  ``` $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces  {   \"pagelen\": 10,   \"page\": 1,   \"size\": 1,   \"values\": [     {       \"type\": \"workspace_membership\",       \"permission\": \"owner\",       \"last_accessed\": \"2019-03-07T12:35:02.900024+00:00\",       \"added_on\": \"2018-10-11T17:42:02.961424+00:00\",        \"user\": {         \"type\": \"user\",         \"uuid\": \"{470c176d-3574-44ea-bb41-89e8638bcca4}\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",       },        \"workspace\": {         \"type\": \"workspace\",         \"uuid\": \"{a15fb181-db1f-48f7-b41f-e1eff06929d6}\",         \"slug\": \"bitbucket\",         \"name\": \"Atlassian Bitbucket\",       }     }   ] } ```  Results may be further [filtered or sorted](../../../meta/filtering) by workspace or permission by adding the following query string parameters:  * `q=workspace.slug=\"bitbucket\"` or `q=permission=\"owner\"` * `sort=workspace.slug`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
   * @param {module:api/WorkspacesApi~userPermissionsWorkspacesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedWorkspaceMemberships}
   */


  _createClass(WorkspacesApi, [{
    key: "userPermissionsWorkspacesGet",
    value: function userPermissionsWorkspacesGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWorkspaceMemberships["default"];
      return this.apiClient.callApi('/user/permissions/workspaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesGet operation.
     * @callback module:api/WorkspacesApi~workspacesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWorkspaces} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/WorkspacesApi~workspacesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWorkspaces}
     */

  }, {
    key: "workspacesGet",
    value: function workspacesGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWorkspaces["default"];
      return this.apiClient.callApi('/workspaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Workspace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Workspace}
     */

  }, {
    key: "workspacesWorkspaceGet",
    value: function workspacesWorkspaceGet(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceGet");
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
      var returnType = _Workspace["default"];
      return this.apiClient.callApi('/workspaces/{workspace}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceHooksGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/WorkspacesApi~workspacesWorkspaceHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified workspace.  Workspace webhooks are fired for events from all repositories contained by that workspace.  Note that only owners can install webhooks on workspaces.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/WorkspacesApi~workspacesWorkspaceHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WorkspacesApi~workspacesWorkspaceHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/WorkspacesApi~workspacesWorkspaceHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given workspace.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/WorkspacesApi~workspacesWorkspaceHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/WorkspacesApi~workspacesWorkspaceHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/WorkspacesApi~workspacesWorkspaceHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the workspacesWorkspaceMembersGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWorkspaceMemberships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWorkspaceMemberships}
     */

  }, {
    key: "workspacesWorkspaceMembersGet",
    value: function workspacesWorkspaceMembersGet(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceMembersGet");
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
      var returnType = _PaginatedWorkspaceMemberships["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceMembersMemberGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceMembersMemberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkspaceMembership} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} member Member's UUID or Atlassian ID.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceMembersMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkspaceMembership}
     */

  }, {
    key: "workspacesWorkspaceMembersMemberGet",
    value: function workspacesWorkspaceMembersMemberGet(member, workspace, callback) {
      var postBody = null; // verify the required parameter 'member' is set

      if (member === undefined || member === null) {
        throw new _Error["default"]("Missing the required parameter 'member' when calling workspacesWorkspaceMembersMemberGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceMembersMemberGet");
      }

      var pathParams = {
        'member': member,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkspaceMembership["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/members/{member}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspacePermissionsGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspacePermissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWorkspaceMemberships} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspacePermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWorkspaceMemberships}
     */

  }, {
    key: "workspacesWorkspacePermissionsGet",
    value: function workspacesWorkspacePermissionsGet(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspacePermissionsGet");
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
      var returnType = _PaginatedWorkspaceMemberships["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedProjects}
     */

  }, {
    key: "workspacesWorkspaceProjectsGet",
    value: function workspacesWorkspaceProjectsGet(workspace, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceProjectsGet");
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
      var returnType = _PaginatedProjects["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsProjectKeyGet operation.
     * @callback module:api/WorkspacesApi~workspacesWorkspaceProjectsProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} projectKey The project in question. This is the actual `key` assigned to the project. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/WorkspacesApi~workspacesWorkspaceProjectsProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "workspacesWorkspaceProjectsProjectKeyGet",
    value: function workspacesWorkspaceProjectsProjectKeyGet(projectKey, workspace, callback) {
      var postBody = null; // verify the required parameter 'projectKey' is set

      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling workspacesWorkspaceProjectsProjectKeyGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceProjectsProjectKeyGet");
      }

      var pathParams = {
        'project_key': projectKey,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/projects/{project_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkspacesApi;
}();

exports["default"] = WorkspacesApi;