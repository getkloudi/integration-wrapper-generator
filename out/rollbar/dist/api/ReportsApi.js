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
* Reports service.
* @module api/ReportsApi
* @version 1.0.0
*/
var ReportsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReportsApi. 
  * @alias module:api/ReportsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReportsApi(apiClient) {
    _classCallCheck(this, ReportsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the reportsActivatedCountsGet operation.
   * @callback module:api/ReportsApi~reportsActivatedCountsGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/ReportsApi~reportsActivatedCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ReportsApi, [{
    key: "reportsActivatedCountsGet",
    value: function reportsActivatedCountsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/activated_counts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportsOccurrenceCountsGet operation.
     * @callback module:api/ReportsApi~reportsOccurrenceCountsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ReportsApi~reportsOccurrenceCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportsOccurrenceCountsGet",
    value: function reportsOccurrenceCountsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/occurrence_counts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportsTopActiveItemsGet operation.
     * @callback module:api/ReportsApi~reportsTopActiveItemsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/ReportsApi~reportsTopActiveItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportsTopActiveItemsGet",
    value: function reportsTopActiveItemsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/top_active_items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ReportsApi;
}();

exports["default"] = ReportsApi;