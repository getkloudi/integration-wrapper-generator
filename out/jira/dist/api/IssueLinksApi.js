"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueLink = _interopRequireDefault(require("../model/IssueLink"));

var _LinkIssueRequestJsonBean = _interopRequireDefault(require("../model/LinkIssueRequestJsonBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueLinks service.
* @module api/IssueLinksApi
* @version 1.4.0
*/
var IssueLinksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueLinksApi. 
  * @alias module:api/IssueLinksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueLinksApi(apiClient) {
    _classCallCheck(this, IssueLinksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueLinkLinkIdDelete operation.
   * @callback module:api/IssueLinksApi~issueLinkLinkIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete issue link
   * @param {Object} cloudid Cloudi of the project
   * @param {String} linkId The ID of the issue link.
   * @param {module:api/IssueLinksApi~issueLinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(IssueLinksApi, [{
    key: "issueLinkLinkIdDelete",
    value: function issueLinkLinkIdDelete(cloudid, linkId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdDelete");
      } // verify the required parameter 'linkId' is set


      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'linkId': linkId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issueLink/{linkId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkLinkIdGet operation.
     * @callback module:api/IssueLinksApi~issueLinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/IssueLinksApi~issueLinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueLink}
     */

  }, {
    key: "issueLinkLinkIdGet",
    value: function issueLinkLinkIdGet(cloudid, linkId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdGet");
      } // verify the required parameter 'linkId' is set


      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'linkId': linkId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueLink["default"];
      return this.apiClient.callApi('/issueLink/{linkId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkPost operation.
     * @callback module:api/IssueLinksApi~issueLinkPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/LinkIssueRequestJsonBean} body The issue link request.
     * @param {module:api/IssueLinksApi~issueLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueLinkPost",
    value: function issueLinkPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueLinkPost");
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
      var returnType = Object;
      return this.apiClient.callApi('/issueLink', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueLinksApi;
}();

exports["default"] = IssueLinksApi;