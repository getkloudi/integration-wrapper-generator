"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SecurityScheme = _interopRequireDefault(require("../model/SecurityScheme"));

var _SecuritySchemes = _interopRequireDefault(require("../model/SecuritySchemes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueSecuritySchemes service.
* @module api/IssueSecuritySchemesApi
* @version 1.4.0
*/
var IssueSecuritySchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueSecuritySchemesApi. 
  * @alias module:api/IssueSecuritySchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueSecuritySchemesApi(apiClient) {
    _classCallCheck(this, IssueSecuritySchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuesecurityschemesGet operation.
   * @callback module:api/IssueSecuritySchemesApi~issuesecurityschemesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SecuritySchemes} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue security schemes
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssueSecuritySchemesApi~issuesecurityschemesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SecuritySchemes}
   */


  _createClass(IssueSecuritySchemesApi, [{
    key: "issuesecurityschemesGet",
    value: function issuesecurityschemesGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuesecurityschemesGet");
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
      var returnType = _SecuritySchemes["default"];
      return this.apiClient.callApi('/issuesecurityschemes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuesecurityschemesIdGet operation.
     * @callback module:api/IssueSecuritySchemesApi~issuesecurityschemesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecurityScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue security scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
     * @param {module:api/IssueSecuritySchemesApi~issuesecurityschemesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecurityScheme}
     */

  }, {
    key: "issuesecurityschemesIdGet",
    value: function issuesecurityschemesIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuesecurityschemesIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuesecurityschemesIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SecurityScheme["default"];
      return this.apiClient.callApi('/issuesecurityschemes/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueSecuritySchemesApi;
}();

exports["default"] = IssueSecuritySchemesApi;