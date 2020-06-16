"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BulkPermissionGrants = _interopRequireDefault(require("../model/BulkPermissionGrants"));

var _BulkPermissionsRequestBean = _interopRequireDefault(require("../model/BulkPermissionsRequestBean"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _Permissions = _interopRequireDefault(require("../model/Permissions"));

var _PermissionsKeysBean = _interopRequireDefault(require("../model/PermissionsKeysBean"));

var _PermittedProjects = _interopRequireDefault(require("../model/PermittedProjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Permissions service.
* @module api/PermissionsApi
* @version 1.4.0
*/
var PermissionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PermissionsApi. 
  * @alias module:api/PermissionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PermissionsApi(apiClient) {
    _classCallCheck(this, PermissionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the mypermissionsGet operation.
   * @callback module:api/PermissionsApi~mypermissionsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Permissions} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get my permissions
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {String} opts.projectKey The key of project. Ignored if `projectId` is provided.
   * @param {String} opts.projectId The ID of project.
   * @param {String} opts.issueKey The key of the issue. Ignored if `issueId` is provided.
   * @param {String} opts.issueId The ID of the issue.
   * @param {String} opts.permissions A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).
   * @param {String} opts.projectUuid 
   * @param {String} opts.projectConfigurationUuid 
   * @param {module:api/PermissionsApi~mypermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Permissions}
   */


  _createClass(PermissionsApi, [{
    key: "mypermissionsGet",
    value: function mypermissionsGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypermissionsGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'projectKey': opts['projectKey'],
        'projectId': opts['projectId'],
        'issueKey': opts['issueKey'],
        'issueId': opts['issueId'],
        'permissions': opts['permissions'],
        'projectUuid': opts['projectUuid'],
        'projectConfigurationUuid': opts['projectConfigurationUuid']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Permissions["default"];
      return this.apiClient.callApi('/mypermissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionsCheckPost operation.
     * @callback module:api/PermissionsApi~permissionsCheckPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BulkPermissionGrants} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get bulk permissions
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/BulkPermissionsRequestBean} body Details of the permissions to check.
     * @param {module:api/PermissionsApi~permissionsCheckPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BulkPermissionGrants}
     */

  }, {
    key: "permissionsCheckPost",
    value: function permissionsCheckPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionsCheckPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsCheckPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _BulkPermissionGrants["default"];
      return this.apiClient.callApi('/permissions/check', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionsGet operation.
     * @callback module:api/PermissionsApi~permissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Permissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all permissions
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/PermissionsApi~permissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Permissions}
     */

  }, {
    key: "permissionsGet",
    value: function permissionsGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionsGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Permissions["default"];
      return this.apiClient.callApi('/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionsProjectPost operation.
     * @callback module:api/PermissionsApi~permissionsProjectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermittedProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permitted projects
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/PermissionsKeysBean} body 
     * @param {module:api/PermissionsApi~permissionsProjectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermittedProjects}
     */

  }, {
    key: "permissionsProjectPost",
    value: function permissionsProjectPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionsProjectPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionsProjectPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PermittedProjects["default"];
      return this.apiClient.callApi('/permissions/project', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PermissionsApi;
}();

exports["default"] = PermissionsApi;