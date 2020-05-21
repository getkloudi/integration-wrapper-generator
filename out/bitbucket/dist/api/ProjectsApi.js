"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedProjects = _interopRequireDefault(require("../model/PaginatedProjects"));

var _Project = _interopRequireDefault(require("../model/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Projects service.
* @module api/ProjectsApi
* @version 1.2.0
*/
var ProjectsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectsApi. 
  * @alias module:api/ProjectsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectsApi(apiClient) {
    _classCallCheck(this, ProjectsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the teamsUsernameProjectsGet operation.
   * @callback module:api/ProjectsApi~teamsUsernameProjectsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedProjects} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
   * @param {module:api/ProjectsApi~teamsUsernameProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedProjects}
   */


  _createClass(ProjectsApi, [{
    key: "teamsUsernameProjectsGet",
    value: function teamsUsernameProjectsGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameProjectsGet");
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
      var returnType = _PaginatedProjects["default"];
      return this.apiClient.callApi('/teams/{username}/projects/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameProjectsPost operation.
     * @callback module:api/ProjectsApi~teamsUsernameProjectsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```  or even:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"http://i.imgur.com/72tRx4w.gif\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsUsernameProjectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsUsernameProjectsPost",
    value: function teamsUsernameProjectsPost(username, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameProjectsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling teamsUsernameProjectsPost");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{username}/projects/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameProjectsProjectKeyDelete operation.
     * @callback module:api/ProjectsApi~teamsUsernameProjectsProjectKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsUsernameProjectsProjectKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsUsernameProjectsProjectKeyDelete",
    value: function teamsUsernameProjectsProjectKeyDelete(username, projectKey, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameProjectsProjectKeyDelete");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsUsernameProjectsProjectKeyDelete");
      }

      var pathParams = {
        'username': username,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{username}/projects/{project_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameProjectsProjectKeyGet operation.
     * @callback module:api/ProjectsApi~teamsUsernameProjectsProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsUsernameProjectsProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsUsernameProjectsProjectKeyGet",
    value: function teamsUsernameProjectsProjectKeyGet(username, projectKey, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameProjectsProjectKeyGet");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsUsernameProjectsProjectKeyGet");
      }

      var pathParams = {
        'username': username,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{username}/projects/{project_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameProjectsProjectKeyPut operation.
     * @callback module:api/ProjectsApi~teamsUsernameProjectsProjectKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The `key` should not be specified in the body of request (since it is already present in the URL). The `name` is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the `Location` header of the response.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsUsernameProjectsProjectKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsUsernameProjectsProjectKeyPut",
    value: function teamsUsernameProjectsProjectKeyPut(username, projectKey, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameProjectsProjectKeyPut");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsUsernameProjectsProjectKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling teamsUsernameProjectsProjectKeyPut");
      }

      var pathParams = {
        'username': username,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{username}/projects/{project_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsPost operation.
     * @callback module:api/ProjectsApi~workspacesWorkspaceProjectsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```  or even:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"http://i.imgur.com/72tRx4w.gif\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~workspacesWorkspaceProjectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "workspacesWorkspaceProjectsPost",
    value: function workspacesWorkspaceProjectsPost(workspace, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceProjectsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling workspacesWorkspaceProjectsPost");
      }

      var pathParams = {
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/projects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsProjectKeyDelete operation.
     * @callback module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} projectKey The project in question. This is the actual `key` assigned to the project. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "workspacesWorkspaceProjectsProjectKeyDelete",
    value: function workspacesWorkspaceProjectsProjectKeyDelete(projectKey, workspace, callback) {
      var postBody = null; // verify the required parameter 'projectKey' is set

      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling workspacesWorkspaceProjectsProjectKeyDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceProjectsProjectKeyDelete");
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
      var returnType = null;
      return this.apiClient.callApi('/workspaces/{workspace}/projects/{project_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsProjectKeyGet operation.
     * @callback module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} projectKey The project in question. This is the actual `key` assigned to the project. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the workspacesWorkspaceProjectsProjectKeyPut operation.
     * @callback module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The `key` should not be specified in the body of request (since it is already present in the URL). The `name` is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the `Location` header of the response.
     * @param {String} projectKey The project in question. This is the actual `key` assigned to the project. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~workspacesWorkspaceProjectsProjectKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "workspacesWorkspaceProjectsProjectKeyPut",
    value: function workspacesWorkspaceProjectsProjectKeyPut(projectKey, workspace, body, callback) {
      var postBody = body; // verify the required parameter 'projectKey' is set

      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling workspacesWorkspaceProjectsProjectKeyPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling workspacesWorkspaceProjectsProjectKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling workspacesWorkspaceProjectsProjectKeyPut");
      }

      var pathParams = {
        'project_key': projectKey,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/workspaces/{workspace}/projects/{project_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectsApi;
}();

exports["default"] = ProjectsApi;