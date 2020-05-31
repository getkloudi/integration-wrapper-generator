"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api1ProjectAccessTokensResponse = _interopRequireDefault(require("../model/Api1ProjectAccessTokensResponse"));

var _ProjectAccessToken = _interopRequireDefault(require("../model/ProjectAccessToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectAccessTokens service.
* @module api/ProjectAccessTokensApi
* @version 1.1.0
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
   * Callback function to receive the result of the projectIdAccessTokensPost operation.
   * @callback module:api/ProjectAccessTokensApi~projectIdAccessTokensPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Api1ProjectAccessTokensResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a project access token
   * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
   * @param {String} id 
   * @param {module:model/ProjectAccessToken} body 
   * @param {module:api/ProjectAccessTokensApi~projectIdAccessTokensPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Api1ProjectAccessTokensResponse}
   */


  _createClass(ProjectAccessTokensApi, [{
    key: "projectIdAccessTokensPost",
    value: function projectIdAccessTokensPost(xRollbarAccessToken, id, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectIdAccessTokensPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectIdAccessTokensPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectIdAccessTokensPost");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Api1ProjectAccessTokensResponse["default"];
      return this.apiClient.callApi('/project/{id}/access_tokens', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectAccessTokensApi;
}();

exports["default"] = ProjectAccessTokensApi;