"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationSetting = _interopRequireDefault(require("../model/ApplicationSetting"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Application service.
* @module api/ApplicationApi
* @version 1.0.0
*/
var ApplicationApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new ApplicationApi. 
  * @alias module:api/ApplicationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ApplicationApi(apiClient) {
    _classCallCheck(this, ApplicationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3ApplicationSettings operation.
   * @callback module:api/ApplicationApi~getV3ApplicationSettingsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ApplicationSetting} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the current application settings
   * Get the current application settings
   * @param {module:api/ApplicationApi~getV3ApplicationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ApplicationSetting}
   */


  _createClass(ApplicationApi, [{
    key: "getV3ApplicationSettings",
    value: function getV3ApplicationSettings(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ApplicationSetting["default"];
      return this.apiClient.callApi('/v3/application/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3ApplicationSettings operation.
     * @callback module:api/ApplicationApi~putV3ApplicationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify application settings
     * Modify application settings
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ApplicationApi~putV3ApplicationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationSetting}
     */

  }, {
    key: "putV3ApplicationSettings",
    value: function putV3ApplicationSettings(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ApplicationSettings");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationSetting["default"];
      return this.apiClient.callApi('/v3/application/settings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ApplicationApi;
}();

exports["default"] = ApplicationApi;