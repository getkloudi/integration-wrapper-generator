"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationRole = _interopRequireDefault(require("../model/ApplicationRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ApplicationRoles service.
* @module api/ApplicationRolesApi
* @version 1.4.0
*/
var ApplicationRolesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ApplicationRolesApi. 
  * @alias module:api/ApplicationRolesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationRolesApi(apiClient) {
    _classCallCheck(this, ApplicationRolesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the applicationroleGet operation.
   * @callback module:api/ApplicationRolesApi~applicationroleGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ApplicationRole>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all application roles
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/ApplicationRolesApi~applicationroleGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ApplicationRole>}
   */


  _createClass(ApplicationRolesApi, [{
    key: "applicationroleGet",
    value: function applicationroleGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling applicationroleGet");
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
      var returnType = [_ApplicationRole["default"]];
      return this.apiClient.callApi('/applicationrole', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationroleKeyGet operation.
     * @callback module:api/ApplicationRolesApi~applicationroleKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application role
     * @param {Object} cloudid Cloudi of the project
     * @param {String} key The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.
     * @param {module:api/ApplicationRolesApi~applicationroleKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationRole}
     */

  }, {
    key: "applicationroleKeyGet",
    value: function applicationroleKeyGet(cloudid, key, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling applicationroleKeyGet");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling applicationroleKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationRole["default"];
      return this.apiClient.callApi('/applicationrole/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApplicationRolesApi;
}();

exports["default"] = ApplicationRolesApi;