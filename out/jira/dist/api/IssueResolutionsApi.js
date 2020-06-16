"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Resolution = _interopRequireDefault(require("../model/Resolution"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueResolutions service.
* @module api/IssueResolutionsApi
* @version 1.4.0
*/
var IssueResolutionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueResolutionsApi. 
  * @alias module:api/IssueResolutionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueResolutionsApi(apiClient) {
    _classCallCheck(this, IssueResolutionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the resolutionGet operation.
   * @callback module:api/IssueResolutionsApi~resolutionGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Resolution>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get resolutions
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssueResolutionsApi~resolutionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Resolution>}
   */


  _createClass(IssueResolutionsApi, [{
    key: "resolutionGet",
    value: function resolutionGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling resolutionGet");
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
      var returnType = [_Resolution["default"]];
      return this.apiClient.callApi('/resolution', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the resolutionIdGet operation.
     * @callback module:api/IssueResolutionsApi~resolutionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Resolution} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get resolution
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue resolution value.
     * @param {module:api/IssueResolutionsApi~resolutionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Resolution}
     */

  }, {
    key: "resolutionIdGet",
    value: function resolutionIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling resolutionIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling resolutionIdGet");
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
      var returnType = _Resolution["default"];
      return this.apiClient.callApi('/resolution/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueResolutionsApi;
}();

exports["default"] = IssueResolutionsApi;