"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuditRecords = _interopRequireDefault(require("../model/AuditRecords"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AuditRecords service.
* @module api/AuditRecordsApi
* @version 1.4.0
*/
var AuditRecordsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuditRecordsApi. 
  * @alias module:api/AuditRecordsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuditRecordsApi(apiClient) {
    _classCallCheck(this, AuditRecordsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the auditingRecordGet operation.
   * @callback module:api/AuditRecordsApi~auditingRecordGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/AuditRecords} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get audit records
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Number} opts.offset The number of records to skip before returning the first result. (default to 0)
   * @param {Number} opts.limit The maximum number of results to return. (default to 1000)
   * @param {String} opts.filter The query string.
   * @param {Date} opts.from The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.
   * @param {Date} opts.to The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.
   * @param {module:api/AuditRecordsApi~auditingRecordGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/AuditRecords}
   */


  _createClass(AuditRecordsApi, [{
    key: "auditingRecordGet",
    value: function auditingRecordGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling auditingRecordGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'filter': opts['filter'],
        'from': opts['from'],
        'to': opts['to']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AuditRecords["default"];
      return this.apiClient.callApi('/auditing/record', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuditRecordsApi;
}();

exports["default"] = AuditRecordsApi;