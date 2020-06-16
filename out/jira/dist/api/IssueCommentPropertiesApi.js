"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("../model/EntityProperty"));

var _PropertyKeys = _interopRequireDefault(require("../model/PropertyKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueCommentProperties service.
* @module api/IssueCommentPropertiesApi
* @version 1.4.0
*/
var IssueCommentPropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueCommentPropertiesApi. 
  * @alias module:api/IssueCommentPropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueCommentPropertiesApi(apiClient) {
    _classCallCheck(this, IssueCommentPropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the commentCommentIdPropertiesGet operation.
   * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get comment property keys
   * @param {Object} cloudid Cloudi of the project
   * @param {String} commentId The ID of the comment.
   * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(IssueCommentPropertiesApi, [{
    key: "commentCommentIdPropertiesGet",
    value: function commentCommentIdPropertiesGet(cloudid, commentId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'commentId': commentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/comment/{commentId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "commentCommentIdPropertiesPropertyKeyDelete",
    value: function commentCommentIdPropertiesPropertyKeyDelete(cloudid, commentId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyGet operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "commentCommentIdPropertiesPropertyKeyGet",
    value: function commentCommentIdPropertiesPropertyKeyGet(cloudid, commentId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyPut operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "commentCommentIdPropertiesPropertyKeyPut",
    value: function commentCommentIdPropertiesPropertyKeyPut(cloudid, commentId, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commentCommentIdPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/comment/{commentId}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueCommentPropertiesApi;
}();

exports["default"] = IssueCommentPropertiesApi;