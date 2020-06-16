"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Attachment = _interopRequireDefault(require("../model/Attachment"));

var _AttachmentArchiveImpl = _interopRequireDefault(require("../model/AttachmentArchiveImpl"));

var _AttachmentArchiveMetadataReadable = _interopRequireDefault(require("../model/AttachmentArchiveMetadataReadable"));

var _AttachmentMetadata = _interopRequireDefault(require("../model/AttachmentMetadata"));

var _AttachmentSettings = _interopRequireDefault(require("../model/AttachmentSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueAttachments service.
* @module api/IssueAttachmentsApi
* @version 1.4.0
*/
var IssueAttachmentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueAttachmentsApi. 
  * @alias module:api/IssueAttachmentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueAttachmentsApi(apiClient) {
    _classCallCheck(this, IssueAttachmentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the attachmentIdDelete operation.
   * @callback module:api/IssueAttachmentsApi~attachmentIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete attachment
   * @param {Object} cloudid Cloudi of the project
   * @param {String} id The ID of the attachment.
   * @param {module:api/IssueAttachmentsApi~attachmentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(IssueAttachmentsApi, [{
    key: "attachmentIdDelete",
    value: function attachmentIdDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/attachment/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the attachmentIdExpandHumanGet operation.
     * @callback module:api/IssueAttachmentsApi~attachmentIdExpandHumanGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentArchiveMetadataReadable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all metadata for an expanded attachment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/IssueAttachmentsApi~attachmentIdExpandHumanGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentArchiveMetadataReadable}
     */

  }, {
    key: "attachmentIdExpandHumanGet",
    value: function attachmentIdExpandHumanGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdExpandHumanGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentIdExpandHumanGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AttachmentArchiveMetadataReadable["default"];
      return this.apiClient.callApi('/attachment/{id}/expand/human', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the attachmentIdExpandRawGet operation.
     * @callback module:api/IssueAttachmentsApi~attachmentIdExpandRawGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentArchiveImpl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contents metadata for an expanded attachment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/IssueAttachmentsApi~attachmentIdExpandRawGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentArchiveImpl}
     */

  }, {
    key: "attachmentIdExpandRawGet",
    value: function attachmentIdExpandRawGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdExpandRawGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentIdExpandRawGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AttachmentArchiveImpl["default"];
      return this.apiClient.callApi('/attachment/{id}/expand/raw', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the attachmentIdGet operation.
     * @callback module:api/IssueAttachmentsApi~attachmentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attachment metadata
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the attachment.
     * @param {module:api/IssueAttachmentsApi~attachmentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentMetadata}
     */

  }, {
    key: "attachmentIdGet",
    value: function attachmentIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling attachmentIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling attachmentIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AttachmentMetadata["default"];
      return this.apiClient.callApi('/attachment/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the attachmentMetaGet operation.
     * @callback module:api/IssueAttachmentsApi~attachmentMetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Jira attachment settings
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/IssueAttachmentsApi~attachmentMetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentSettings}
     */

  }, {
    key: "attachmentMetaGet",
    value: function attachmentMetaGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling attachmentMetaGet");
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
      var returnType = _AttachmentSettings["default"];
      return this.apiClient.callApi('/attachment/meta', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyAttachmentsPost operation.
     * @callback module:api/IssueAttachmentsApi~issueIssueIdOrKeyAttachmentsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Attachment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add attachment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue that attachments are added to.
     * @param {Object} opts Optional parameters
     * @param {File} opts.body 
     * @param {module:api/IssueAttachmentsApi~issueIssueIdOrKeyAttachmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Attachment>}
     */

  }, {
    key: "issueIssueIdOrKeyAttachmentsPost",
    value: function issueIssueIdOrKeyAttachmentsPost(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyAttachmentsPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyAttachmentsPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'body': opts['body']
      };
      var authNames = ['OAuth2'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = [_Attachment["default"]];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/attachments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueAttachmentsApi;
}();

exports["default"] = IssueAttachmentsApi;