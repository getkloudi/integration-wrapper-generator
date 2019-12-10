"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GlobalNotificationSetting = _interopRequireDefault(require("../model/GlobalNotificationSetting"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* NotificationSettings service.
* @module api/NotificationSettingsApi
* @version 1.0.0
*/
var NotificationSettingsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new NotificationSettingsApi. 
  * @alias module:api/NotificationSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationSettingsApi(apiClient) {
    _classCallCheck(this, NotificationSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3NotificationSettings operation.
   * @callback module:api/NotificationSettingsApi~getV3NotificationSettingsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GlobalNotificationSetting} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get global notification level settings and email, defaults to Participate
   * This feature was introduced in GitLab 8.12
   * @param {module:api/NotificationSettingsApi~getV3NotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/GlobalNotificationSetting}
   */


  _createClass(NotificationSettingsApi, [{
    key: "getV3NotificationSettings",
    value: function getV3NotificationSettings(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GlobalNotificationSetting["default"];
      return this.apiClient.callApi('/v3/notification_settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3NotificationSettings operation.
     * @callback module:api/NotificationSettingsApi~putV3NotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GlobalNotificationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update global notification level settings and email, defaults to Participate
     * This feature was introduced in GitLab 8.12
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/NotificationSettingsApi~putV3NotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GlobalNotificationSetting}
     */

  }, {
    key: "putV3NotificationSettings",
    value: function putV3NotificationSettings(opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GlobalNotificationSetting["default"];
      return this.apiClient.callApi('/v3/notification_settings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NotificationSettingsApi;
}();

exports["default"] = NotificationSettingsApi;