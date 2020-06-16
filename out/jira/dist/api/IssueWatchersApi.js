"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Watchers = _interopRequireDefault(require("../model/Watchers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueWatchers service.
* @module api/IssueWatchersApi
* @version 1.4.0
*/
var IssueWatchersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueWatchersApi. 
  * @alias module:api/IssueWatchersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueWatchersApi(apiClient) {
    _classCallCheck(this, IssueWatchersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueIssueIdOrKeyWatchersDelete operation.
   * @callback module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete watcher
   * @param {Object} cloudid Cloudi of the project
   * @param {String} issueIdOrKey The ID or key of the issue.
   * @param {Object} opts Optional parameters
   * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param {String} opts.accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
   * @param {module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(IssueWatchersApi, [{
    key: "issueIssueIdOrKeyWatchersDelete",
    value: function issueIssueIdOrKeyWatchersDelete(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'username': opts['username'],
        'accountId': opts['accountId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWatchersGet operation.
     * @callback module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Watchers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue watchers
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Watchers}
     */

  }, {
    key: "issueIssueIdOrKeyWatchersGet",
    value: function issueIssueIdOrKeyWatchersGet(cloudid, issueIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Watchers["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWatchersPost operation.
     * @callback module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add watcher
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} body The account ID of the user. Note that username cannot be used due to privacy changes.
     * @param {module:api/IssueWatchersApi~issueIssueIdOrKeyWatchersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyWatchersPost",
    value: function issueIssueIdOrKeyWatchersPost(cloudid, issueIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWatchersPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWatchersPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyWatchersPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/watchers', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueWatchersApi;
}();

exports["default"] = IssueWatchersApi;