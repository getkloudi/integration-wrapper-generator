"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationScheme = _interopRequireDefault(require("../model/NotificationScheme"));

var _PageBeanNotificationScheme = _interopRequireDefault(require("../model/PageBeanNotificationScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueNotificationSchemes service.
* @module api/IssueNotificationSchemesApi
* @version 1.4.0
*/
var IssueNotificationSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueNotificationSchemesApi. 
  * @alias module:api/IssueNotificationSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueNotificationSchemesApi(apiClient) {
    _classCallCheck(this, IssueNotificationSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the notificationschemeGet operation.
   * @callback module:api/IssueNotificationSchemesApi~notificationschemeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanNotificationScheme} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get notification schemes paginated
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
   * @param {module:api/IssueNotificationSchemesApi~notificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanNotificationScheme}
   */


  _createClass(IssueNotificationSchemesApi, [{
    key: "notificationschemeGet",
    value: function notificationschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling notificationschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanNotificationScheme["default"];
      return this.apiClient.callApi('/notificationscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the notificationschemeIdGet operation.
     * @callback module:api/IssueNotificationSchemesApi~notificationschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get notification scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the notification scheme. Use [Get notification schemes paginated](#api-rest-api-3-notificationscheme-get) to get a list of notification scheme IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
     * @param {module:api/IssueNotificationSchemesApi~notificationschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationScheme}
     */

  }, {
    key: "notificationschemeIdGet",
    value: function notificationschemeIdGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling notificationschemeIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling notificationschemeIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NotificationScheme["default"];
      return this.apiClient.callApi('/notificationscheme/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueNotificationSchemesApi;
}();

exports["default"] = IssueNotificationSchemesApi;