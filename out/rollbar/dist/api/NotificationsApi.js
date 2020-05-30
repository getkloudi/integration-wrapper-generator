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
* Notifications service.
* @module api/NotificationsApi
* @version 1.0.0
*/
var NotificationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NotificationsApi. 
  * @alias module:api/NotificationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NotificationsApi(apiClient) {
    _classCallCheck(this, NotificationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the notificationsEmailPut operation.
   * @callback module:api/NotificationsApi~notificationsEmailPutCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Configuring Email Notifications integration
   * @param {Object} opts Optional parameters
   * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
   * @param {module:api/NotificationsApi~notificationsEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(NotificationsApi, [{
    key: "notificationsEmailPut",
    value: function notificationsEmailPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/email', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsEmailRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsEmailRulesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup Email notification rules
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:api/NotificationsApi~notificationsEmailRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "notificationsEmailRulesPut",
    value: function notificationsEmailRulesPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/email/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsPagerdutyPut operation.
     * @callback module:api/NotificationsApi~notificationsPagerdutyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configuring PagerDuty integration
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:api/NotificationsApi~notificationsPagerdutyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "notificationsPagerdutyPut",
    value: function notificationsPagerdutyPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/pagerduty', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsPagerdutyRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsPagerdutyRulesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup PagerDuty notification rules
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:api/NotificationsApi~notificationsPagerdutyRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "notificationsPagerdutyRulesPut",
    value: function notificationsPagerdutyRulesPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/pagerduty/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsSlackPut operation.
     * @callback module:api/NotificationsApi~notificationsSlackPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configuring Slack integration
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:api/NotificationsApi~notificationsSlackPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "notificationsSlackPut",
    value: function notificationsSlackPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/slack', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsSlackRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsSlackRulesPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup Slack notification rules
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:api/NotificationsApi~notificationsSlackRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "notificationsSlackRulesPut",
    value: function notificationsSlackRulesPut(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/notifications/slack/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NotificationsApi;
}();

exports["default"] = NotificationsApi;