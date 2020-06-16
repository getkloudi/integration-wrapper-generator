"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdBean = _interopRequireDefault(require("../model/IdBean"));

var _PermissionScheme = _interopRequireDefault(require("../model/PermissionScheme"));

var _ProjectIssueSecurityLevels = _interopRequireDefault(require("../model/ProjectIssueSecurityLevels"));

var _SecurityScheme = _interopRequireDefault(require("../model/SecurityScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectPermissionSchemes service.
* @module api/ProjectPermissionSchemesApi
* @version 1.4.0
*/
var ProjectPermissionSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectPermissionSchemesApi. 
  * @alias module:api/ProjectPermissionSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectPermissionSchemesApi(apiClient) {
    _classCallCheck(this, ProjectPermissionSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectProjectKeyOrIdIssuesecuritylevelschemeGet operation.
   * @callback module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdIssuesecuritylevelschemeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SecurityScheme} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get project issue security scheme
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectKeyOrId The project ID or project key (case sensitive).
   * @param {module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdIssuesecuritylevelschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SecurityScheme}
   */


  _createClass(ProjectPermissionSchemesApi, [{
    key: "projectProjectKeyOrIdIssuesecuritylevelschemeGet",
    value: function projectProjectKeyOrIdIssuesecuritylevelschemeGet(cloudid, projectKeyOrId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdIssuesecuritylevelschemeGet");
      } // verify the required parameter 'projectKeyOrId' is set


      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdIssuesecuritylevelschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectKeyOrId': projectKeyOrId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SecurityScheme["default"];
      return this.apiClient.callApi('/project/{projectKeyOrId}/issuesecuritylevelscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectKeyOrIdPermissionschemeGet operation.
     * @callback module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdPermissionschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get assigned permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdPermissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */

  }, {
    key: "projectProjectKeyOrIdPermissionschemeGet",
    value: function projectProjectKeyOrIdPermissionschemeGet(cloudid, projectKeyOrId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdPermissionschemeGet");
      } // verify the required parameter 'projectKeyOrId' is set


      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdPermissionschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectKeyOrId': projectKeyOrId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PermissionScheme["default"];
      return this.apiClient.callApi('/project/{projectKeyOrId}/permissionscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectKeyOrIdPermissionschemePut operation.
     * @callback module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdPermissionschemePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:model/IdBean} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdPermissionschemePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */

  }, {
    key: "projectProjectKeyOrIdPermissionschemePut",
    value: function projectProjectKeyOrIdPermissionschemePut(cloudid, projectKeyOrId, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdPermissionschemePut");
      } // verify the required parameter 'projectKeyOrId' is set


      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdPermissionschemePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectKeyOrIdPermissionschemePut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectKeyOrId': projectKeyOrId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PermissionScheme["default"];
      return this.apiClient.callApi('/project/{projectKeyOrId}/permissionscheme', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectKeyOrIdSecuritylevelGet operation.
     * @callback module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdSecuritylevelGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectIssueSecurityLevels} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project issue security levels
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {module:api/ProjectPermissionSchemesApi~projectProjectKeyOrIdSecuritylevelGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectIssueSecurityLevels}
     */

  }, {
    key: "projectProjectKeyOrIdSecuritylevelGet",
    value: function projectProjectKeyOrIdSecuritylevelGet(cloudid, projectKeyOrId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdSecuritylevelGet");
      } // verify the required parameter 'projectKeyOrId' is set


      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdSecuritylevelGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectKeyOrId': projectKeyOrId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectIssueSecurityLevels["default"];
      return this.apiClient.callApi('/project/{projectKeyOrId}/securitylevel', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectPermissionSchemesApi;
}();

exports["default"] = ProjectPermissionSchemesApi;