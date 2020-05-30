"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectAccessTokens service.
* @module api/ProjectAccessTokensApi
* @version 1.0.0
*/
var ProjectAccessTokensApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectAccessTokensApi. 
  * @alias module:api/ProjectAccessTokensApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectAccessTokensApi(apiClient) {
    _classCallCheck(this, ProjectAccessTokensApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectIdAccessTokensGet operation.
   * @callback module:api/ProjectAccessTokensApi~projectIdAccessTokensGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/ProjectAccessTokensApi~projectIdAccessTokensGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ProjectAccessTokensApi, [{
    key: "projectIdAccessTokensGet",
    value: function projectIdAccessTokensGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{id}/access_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectIdAccessTokensPost operation.
     * @callback module:api/ProjectAccessTokensApi~projectIdAccessTokensPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project access token
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
     * @param {module:api/ProjectAccessTokensApi~projectIdAccessTokensPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectIdAccessTokensPost",
    value: function projectIdAccessTokensPost(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{id}/access_tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdAccessTokenProjectAccessTokenPatch operation.
     * @callback module:api/ProjectAccessTokensApi~projectProjectIdAccessTokenProjectAccessTokenPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ProjectAccessTokensApi~projectProjectIdAccessTokenProjectAccessTokenPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdAccessTokenProjectAccessTokenPatch",
    value: function projectProjectIdAccessTokenProjectAccessTokenPatch(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{project_id}/access_token/{project_access_token}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectAccessTokensApi;
}();

exports["default"] = ProjectAccessTokensApi;