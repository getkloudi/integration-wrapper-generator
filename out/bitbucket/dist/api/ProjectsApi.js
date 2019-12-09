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
* @version 1.0.0
*/
var ProjectsApi =
/*#__PURE__*/
function () {
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
   * Callback function to receive the result of the teamsOwnerProjectsGet operation.
   * @callback module:api/ProjectsApi~teamsOwnerProjectsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedProjects} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
   * @param {module:api/ProjectsApi~teamsOwnerProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedProjects}
   */


  _createClass(ProjectsApi, [{
    key: "teamsOwnerProjectsGet",
    value: function teamsOwnerProjectsGet(owner, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new _Error["default"]("Missing the required parameter 'owner' when calling teamsOwnerProjectsGet");
      }

      var pathParams = {
        'owner': owner
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedProjects["default"];
      return this.apiClient.callApi('/teams/{owner}/projects/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsOwnerProjectsPost operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```  or even:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"http://i.imgur.com/72tRx4w.gif\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsOwnerProjectsPost",
    value: function teamsOwnerProjectsPost(owner, body, callback) {
      var postBody = body; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new _Error["default"]("Missing the required parameter 'owner' when calling teamsOwnerProjectsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling teamsOwnerProjectsPost");
      }

      var pathParams = {
        'owner': owner
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{owner}/projects/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyDelete operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsOwnerProjectsProjectKeyDelete",
    value: function teamsOwnerProjectsProjectKeyDelete(owner, projectKey, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new _Error["default"]("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyDelete");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyDelete");
      }

      var pathParams = {
        'owner': owner,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{owner}/projects/{project_key}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyGet operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsOwnerProjectsProjectKeyGet",
    value: function teamsOwnerProjectsProjectKeyGet(owner, projectKey, callback) {
      var postBody = null; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new _Error["default"]("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyGet");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyGet");
      }

      var pathParams = {
        'owner': owner,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{owner}/projects/{project_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyPut operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The `key` should not be specified in the body of request (since it is already present in the URL). The `name` is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the `Location` header of the response.
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "teamsOwnerProjectsProjectKeyPut",
    value: function teamsOwnerProjectsProjectKeyPut(owner, projectKey, body, callback) {
      var postBody = body; // verify the required parameter 'owner' is set

      if (owner === undefined || owner === null) {
        throw new _Error["default"]("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyPut");
      } // verify the required parameter 'projectKey' is set


      if (projectKey === undefined || projectKey === null) {
        throw new _Error["default"]("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling teamsOwnerProjectsProjectKeyPut");
      }

      var pathParams = {
        'owner': owner,
        'project_key': projectKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/teams/{owner}/projects/{project_key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectsApi;
}();

exports["default"] = ProjectsApi;