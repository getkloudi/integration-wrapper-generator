"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerForRegisteredWebhooks = _interopRequireDefault(require("../model/ContainerForRegisteredWebhooks"));

var _ContainerForWebhookIDs = _interopRequireDefault(require("../model/ContainerForWebhookIDs"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _FailedWebhooks = _interopRequireDefault(require("../model/FailedWebhooks"));

var _PageBeanWebhook = _interopRequireDefault(require("../model/PageBeanWebhook"));

var _WebhookRegistrationDetails = _interopRequireDefault(require("../model/WebhookRegistrationDetails"));

var _WebhooksExpirationDate = _interopRequireDefault(require("../model/WebhooksExpirationDate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.4.0
*/
var WebhooksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WebhooksApi. 
  * @alias module:api/WebhooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WebhooksApi(apiClient) {
    _classCallCheck(this, WebhooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the webhookDelete operation.
   * @callback module:api/WebhooksApi~webhookDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete webhooks by ID
   * @param {Object} cloudid Cloudi of the project
   * @param {module:model/ContainerForWebhookIDs} body 
   * @param {module:api/WebhooksApi~webhookDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(WebhooksApi, [{
    key: "webhookDelete",
    value: function webhookDelete(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling webhookDelete");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling webhookDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/webhook', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhookFailedGet operation.
     * @callback module:api/WebhooksApi~webhookFailedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FailedWebhooks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get failed webhooks
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.
     * @param {Number} opts.after The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.
     * @param {module:api/WebhooksApi~webhookFailedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FailedWebhooks}
     */

  }, {
    key: "webhookFailedGet",
    value: function webhookFailedGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling webhookFailedGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'maxResults': opts['maxResults'],
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FailedWebhooks["default"];
      return this.apiClient.callApi('/webhook/failed', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhookGet operation.
     * @callback module:api/WebhooksApi~webhookGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dynamic webhooks for app
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
     * @param {module:api/WebhooksApi~webhookGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanWebhook}
     */

  }, {
    key: "webhookGet",
    value: function webhookGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling webhookGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanWebhook["default"];
      return this.apiClient.callApi('/webhook', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhookPost operation.
     * @callback module:api/WebhooksApi~webhookPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerForRegisteredWebhooks} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register dynamic webhooks
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/WebhookRegistrationDetails} body 
     * @param {module:api/WebhooksApi~webhookPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerForRegisteredWebhooks}
     */

  }, {
    key: "webhookPost",
    value: function webhookPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling webhookPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling webhookPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ContainerForRegisteredWebhooks["default"];
      return this.apiClient.callApi('/webhook', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the webhookRefreshPut operation.
     * @callback module:api/WebhooksApi~webhookRefreshPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhooksExpirationDate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extend webhook life
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/ContainerForWebhookIDs} body 
     * @param {module:api/WebhooksApi~webhookRefreshPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhooksExpirationDate}
     */

  }, {
    key: "webhookRefreshPut",
    value: function webhookRefreshPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling webhookRefreshPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling webhookRefreshPut");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WebhooksExpirationDate["default"];
      return this.apiClient.callApi('/webhook/refresh', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WebhooksApi;
}();

exports["default"] = WebhooksApi;