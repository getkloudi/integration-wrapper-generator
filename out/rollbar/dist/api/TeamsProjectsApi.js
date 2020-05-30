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
* TeamsProjects service.
* @module api/TeamsProjectsApi
* @version 1.0.0
*/
var TeamsProjectsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TeamsProjectsApi. 
  * @alias module:api/TeamsProjectsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TeamsProjectsApi(apiClient) {
    _classCallCheck(this, TeamsProjectsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the teamTeamIdProjectProjectIdDelete operation.
   * @callback module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TeamsProjectsApi, [{
    key: "teamTeamIdProjectProjectIdDelete",
    value: function teamTeamIdProjectProjectIdDelete(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectProjectIdGet operation.
     * @callback module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectProjectIdGet",
    value: function teamTeamIdProjectProjectIdGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectProjectIdPut operation.
     * @callback module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsProjectsApi~teamTeamIdProjectProjectIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectProjectIdPut",
    value: function teamTeamIdProjectProjectIdPut(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectsGet operation.
     * @callback module:api/TeamsProjectsApi~teamTeamIdProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsProjectsApi~teamTeamIdProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectsGet",
    value: function teamTeamIdProjectsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TeamsProjectsApi;
}();

exports["default"] = TeamsProjectsApi;