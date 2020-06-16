"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ColumnItem = _interopRequireDefault(require("../model/ColumnItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueNavigatorSettings service.
* @module api/IssueNavigatorSettingsApi
* @version 1.4.0
*/
var IssueNavigatorSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueNavigatorSettingsApi. 
  * @alias module:api/IssueNavigatorSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueNavigatorSettingsApi(apiClient) {
    _classCallCheck(this, IssueNavigatorSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the settingsColumnsGet operation.
   * @callback module:api/IssueNavigatorSettingsApi~settingsColumnsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ColumnItem>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue navigator default columns
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssueNavigatorSettingsApi~settingsColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ColumnItem>}
   */


  _createClass(IssueNavigatorSettingsApi, [{
    key: "settingsColumnsGet",
    value: function settingsColumnsGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling settingsColumnsGet");
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
      var returnType = [_ColumnItem["default"]];
      return this.apiClient.callApi('/settings/columns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the settingsColumnsPut operation.
     * @callback module:api/IssueNavigatorSettingsApi~settingsColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue navigator default columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.body A navigable field value.
     * @param {module:api/IssueNavigatorSettingsApi~settingsColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "settingsColumnsPut",
    value: function settingsColumnsPut(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling settingsColumnsPut");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'body': this.apiClient.buildCollectionParam(opts['body'], 'csv')
      };
      var authNames = ['OAuth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/settings/columns', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueNavigatorSettingsApi;
}();

exports["default"] = IssueNavigatorSettingsApi;