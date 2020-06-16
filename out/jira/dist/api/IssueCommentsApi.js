"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("../model/Comment"));

var _IssueCommentListRequestBean = _interopRequireDefault(require("../model/IssueCommentListRequestBean"));

var _PageBeanComment = _interopRequireDefault(require("../model/PageBeanComment"));

var _PageOfComments = _interopRequireDefault(require("../model/PageOfComments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueComments service.
* @module api/IssueCommentsApi
* @version 1.4.0
*/
var IssueCommentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueCommentsApi. 
  * @alias module:api/IssueCommentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueCommentsApi(apiClient) {
    _classCallCheck(this, IssueCommentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the commentListPost operation.
   * @callback module:api/IssueCommentsApi~commentListPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanComment} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get comments by IDs
   * @param {Object} cloudid Cloudi of the project
   * @param {module:model/IssueCommentListRequestBean} body The list of comment IDs.
   * @param {Object} opts Optional parameters
   * @param {String} opts.expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedBody` Returns the comment body rendered in HTML.  *  `properties` Returns the comment's properties.
   * @param {module:api/IssueCommentsApi~commentListPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanComment}
   */


  _createClass(IssueCommentsApi, [{
    key: "commentListPost",
    value: function commentListPost(cloudid, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentListPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commentListPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PageBeanComment["default"];
      return this.apiClient.callApi('/comment/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentGet operation.
     * @callback module:api/IssueCommentsApi~issueIssueIdOrKeyCommentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOfComments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get comments
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
     * @param {module:api/IssueCommentsApi~issueIssueIdOrKeyCommentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageOfComments}
     */

  }, {
    key: "issueIssueIdOrKeyCommentGet",
    value: function issueIssueIdOrKeyCommentGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'orderBy': opts['orderBy'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageOfComments["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/comment', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdDelete operation.
     * @callback module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete comment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} id The ID of the comment.
     * @param {module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueIssueIdOrKeyCommentIdDelete",
    value: function issueIssueIdOrKeyCommentIdDelete(cloudid, issueIdOrKey, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdGet operation.
     * @callback module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get comment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} id The ID of the comment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
     * @param {module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */

  }, {
    key: "issueIssueIdOrKeyCommentIdGet",
    value: function issueIssueIdOrKeyCommentIdGet(cloudid, issueIdOrKey, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
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
      var returnType = _Comment["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentIdPut operation.
     * @callback module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update comment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} id The ID of the comment.
     * @param {module:model/Comment} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
     * @param {module:api/IssueCommentsApi~issueIssueIdOrKeyCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */

  }, {
    key: "issueIssueIdOrKeyCommentIdPut",
    value: function issueIssueIdOrKeyCommentIdPut(cloudid, issueIdOrKey, id, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentIdPut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyCommentIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyCommentIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'id': id
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Comment["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/comment/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyCommentPost operation.
     * @callback module:api/IssueCommentsApi~issueIssueIdOrKeyCommentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Comment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add comment
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:model/Comment} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
     * @param {module:api/IssueCommentsApi~issueIssueIdOrKeyCommentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Comment}
     */

  }, {
    key: "issueIssueIdOrKeyCommentPost",
    value: function issueIssueIdOrKeyCommentPost(cloudid, issueIdOrKey, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyCommentPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyCommentPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyCommentPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Comment["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/comment', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueCommentsApi;
}();

exports["default"] = IssueCommentsApi;