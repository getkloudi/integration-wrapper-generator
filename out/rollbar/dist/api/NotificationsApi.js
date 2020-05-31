"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EmailIntegrationConfig = _interopRequireDefault(require("../model/EmailIntegrationConfig"));

var _EmailRule = _interopRequireDefault(require("../model/EmailRule"));

var _EmptyResponse = _interopRequireDefault(require("../model/EmptyResponse"));

var _PagerDutyIntegrationConfig = _interopRequireDefault(require("../model/PagerDutyIntegrationConfig"));

var _PagerDutyRule = _interopRequireDefault(require("../model/PagerDutyRule"));

var _SlackIntegrationConfig = _interopRequireDefault(require("../model/SlackIntegrationConfig"));

var _SlackRule = _interopRequireDefault(require("../model/SlackRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Notifications service.
* @module api/NotificationsApi
* @version 1.1.0
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
   * @param {module:model/EmptyResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Configuring Email Notifications integration
   * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
   * @param {module:model/EmailIntegrationConfig} body 
   * @param {module:api/NotificationsApi~notificationsEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/EmptyResponse}
   */


  _createClass(NotificationsApi, [{
    key: "notificationsEmailPut",
    value: function notificationsEmailPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsEmailPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsEmailPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/email', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsEmailRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsEmailRulesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup Email notification rules
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {Array.<module:model/EmailRule>} body 
     * @param {module:api/NotificationsApi~notificationsEmailRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: "notificationsEmailRulesPut",
    value: function notificationsEmailRulesPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsEmailRulesPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsEmailRulesPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/email/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsPagerdutyPut operation.
     * @callback module:api/NotificationsApi~notificationsPagerdutyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configuring PagerDuty integration
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {module:model/PagerDutyIntegrationConfig} body 
     * @param {module:api/NotificationsApi~notificationsPagerdutyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: "notificationsPagerdutyPut",
    value: function notificationsPagerdutyPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsPagerdutyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsPagerdutyPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/pagerduty', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsPagerdutyRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsPagerdutyRulesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup PagerDuty notification rules
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {Array.<module:model/PagerDutyRule>} body 
     * @param {module:api/NotificationsApi~notificationsPagerdutyRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: "notificationsPagerdutyRulesPut",
    value: function notificationsPagerdutyRulesPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsPagerdutyRulesPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsPagerdutyRulesPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/pagerduty/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsSlackPut operation.
     * @callback module:api/NotificationsApi~notificationsSlackPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configuring Slack integration
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {module:model/SlackIntegrationConfig} body 
     * @param {module:api/NotificationsApi~notificationsSlackPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: "notificationsSlackPut",
    value: function notificationsSlackPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsSlackPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsSlackPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/slack', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationsSlackRulesPut operation.
     * @callback module:api/NotificationsApi~notificationsSlackRulesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EmptyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Setup Slack notification rules
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {Array.<module:model/SlackRule>} body 
     * @param {module:api/NotificationsApi~notificationsSlackRulesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EmptyResponse}
     */

  }, {
    key: "notificationsSlackRulesPut",
    value: function notificationsSlackRulesPut(xRollbarAccessToken, body, callback) {
      var postBody = body; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling notificationsSlackRulesPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling notificationsSlackRulesPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _EmptyResponse["default"];
      return this.apiClient.callApi('/notifications/slack/rules', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NotificationsApi;
}();

exports["default"] = NotificationsApi;