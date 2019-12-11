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
* Sidekiq service.
* @module api/SidekiqApi
* @version 1.1.0
*/
var SidekiqApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SidekiqApi. 
  * @alias module:api/SidekiqApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SidekiqApi(apiClient) {
    _classCallCheck(this, SidekiqApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3SidekiqCompoundMetrics operation.
   * @callback module:api/SidekiqApi~getV3SidekiqCompoundMetricsCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the Sidekiq Compound metrics. Includes queue, process, and job statistics
   * Get the Sidekiq Compound metrics. Includes queue, process, and job statistics
   * @param {module:api/SidekiqApi~getV3SidekiqCompoundMetricsCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SidekiqApi, [{
    key: "getV3SidekiqCompoundMetrics",
    value: function getV3SidekiqCompoundMetrics(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/sidekiq/compound_metrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SidekiqJobStats operation.
     * @callback module:api/SidekiqApi~getV3SidekiqJobStatsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sidekiq job statistics
     * Get the Sidekiq job statistics
     * @param {module:api/SidekiqApi~getV3SidekiqJobStatsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3SidekiqJobStats",
    value: function getV3SidekiqJobStats(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/sidekiq/job_stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SidekiqProcessMetrics operation.
     * @callback module:api/SidekiqApi~getV3SidekiqProcessMetricsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sidekiq process metrics
     * Get the Sidekiq process metrics
     * @param {module:api/SidekiqApi~getV3SidekiqProcessMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3SidekiqProcessMetrics",
    value: function getV3SidekiqProcessMetrics(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/sidekiq/process_metrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SidekiqQueueMetrics operation.
     * @callback module:api/SidekiqApi~getV3SidekiqQueueMetricsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the Sidekiq queue metrics
     * Get the Sidekiq queue metrics
     * @param {module:api/SidekiqApi~getV3SidekiqQueueMetricsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3SidekiqQueueMetrics",
    value: function getV3SidekiqQueueMetrics(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/sidekiq/queue_metrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SidekiqApi;
}();

exports["default"] = SidekiqApi;