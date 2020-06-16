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
* IssueWorklogProperties service.
* @module api/IssueWorklogPropertiesApi
* @version 1.4.0
*/
var IssueWorklogPropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueWorklogPropertiesApi. 
  * @alias module:api/IssueWorklogPropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueWorklogPropertiesApi(apiClient) {
    _classCallCheck(this, IssueWorklogPropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesGet operation.
   * @callback module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get worklog property keys
   * @param {Object} cloudid Cloudi of the project
   * @param {String} issueIdOrKey The ID or key of the issue.
   * @param {String} worklogId The ID of the worklog.
   * @param {module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(IssueWorklogPropertiesApi, [{
    key: "issueIssueIdOrKeyWorklogWorklogIdPropertiesGet",
    value: function issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(cloudid, issueIdOrKey, worklogId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");
      } // verify the required parameter 'worklogId' is set


      if (worklogId === undefined || worklogId === null) {
        throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'worklogId': worklogId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete worklog property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} worklogId The ID of the worklog.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete",
    value: function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, worklogId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'worklogId' is set


      if (worklogId === undefined || worklogId === null) {
        throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'worklogId': worklogId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet operation.
     * @callback module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get worklog property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} worklogId The ID of the worklog.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet",
    value: function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(cloudid, issueIdOrKey, worklogId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'worklogId' is set


      if (worklogId === undefined || worklogId === null) {
        throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'worklogId': worklogId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut operation.
     * @callback module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set worklog property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} worklogId The ID of the worklog.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssueWorklogPropertiesApi~issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut",
    value: function issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(cloudid, issueIdOrKey, worklogId, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'worklogId' is set


      if (worklogId === undefined || worklogId === null) {
        throw new Error("Missing the required parameter 'worklogId' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'worklogId': worklogId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueWorklogPropertiesApi;
}();

exports["default"] = IssueWorklogPropertiesApi;