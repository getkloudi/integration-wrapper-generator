"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RemoteIssueLink = _interopRequireDefault(require("../model/RemoteIssueLink"));

var _RemoteIssueLinkIdentifies = _interopRequireDefault(require("../model/RemoteIssueLinkIdentifies"));

var _RemoteIssueLinkRequest = _interopRequireDefault(require("../model/RemoteIssueLinkRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueRemoteLinks service.
* @module api/IssueRemoteLinksApi
* @version 1.4.0
*/
var IssueRemoteLinksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueRemoteLinksApi. 
  * @alias module:api/IssueRemoteLinksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueRemoteLinksApi(apiClient) {
    _classCallCheck(this, IssueRemoteLinksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkDelete operation.
   * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete remote issue link by global ID
   * @param {Object} cloudid Cloudi of the project
   * @param {String} issueIdOrKey The ID or key of the issue.
   * @param {String} globalId The global ID of a remote issue link.
   * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(IssueRemoteLinksApi, [{
    key: "issueIssueIdOrKeyRemotelinkDelete",
    value: function issueIssueIdOrKeyRemotelinkDelete(cloudid, issueIdOrKey, globalId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkDelete");
      } // verify the required parameter 'globalId' is set


      if (globalId === undefined || globalId === null) {
        throw new Error("Missing the required parameter 'globalId' when calling issueIssueIdOrKeyRemotelinkDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'globalId': globalId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkGet operation.
     * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteIssueLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get remote issue links
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.globalId The global ID of the remote issue link.
     * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteIssueLink}
     */

  }, {
    key: "issueIssueIdOrKeyRemotelinkGet",
    value: function issueIssueIdOrKeyRemotelinkGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'globalId': opts['globalId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoteIssueLink["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdDelete operation.
     * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete remote issue link by ID
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of a remote issue link.
     * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueIssueIdOrKeyRemotelinkLinkIdDelete",
    value: function issueIssueIdOrKeyRemotelinkLinkIdDelete(cloudid, issueIdOrKey, linkId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");
      } // verify the required parameter 'linkId' is set


      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdGet operation.
     * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteIssueLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get remote issue link by ID
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteIssueLink}
     */

  }, {
    key: "issueIssueIdOrKeyRemotelinkLinkIdGet",
    value: function issueIssueIdOrKeyRemotelinkLinkIdGet(cloudid, issueIdOrKey, linkId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");
      } // verify the required parameter 'linkId' is set


      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RemoteIssueLink["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkLinkIdPut operation.
     * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update remote issue link by ID
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} linkId The ID of the remote issue link.
     * @param {module:model/RemoteIssueLinkRequest} body 
     * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkLinkIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyRemotelinkLinkIdPut",
    value: function issueIssueIdOrKeyRemotelinkLinkIdPut(cloudid, issueIdOrKey, linkId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");
      } // verify the required parameter 'linkId' is set


      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyRemotelinkLinkIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'linkId': linkId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink/{linkId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyRemotelinkPost operation.
     * @callback module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RemoteIssueLinkIdentifies} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update remote issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:model/RemoteIssueLinkRequest} body 
     * @param {module:api/IssueRemoteLinksApi~issueIssueIdOrKeyRemotelinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RemoteIssueLinkIdentifies}
     */

  }, {
    key: "issueIssueIdOrKeyRemotelinkPost",
    value: function issueIssueIdOrKeyRemotelinkPost(cloudid, issueIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyRemotelinkPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyRemotelinkPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyRemotelinkPost");
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
      var returnType = _RemoteIssueLinkIdentifies["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/remotelink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueRemoteLinksApi;
}();

exports["default"] = IssueRemoteLinksApi;