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
* IssueTypeProperties service.
* @module api/IssueTypePropertiesApi
* @version 1.4.0
*/
var IssueTypePropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueTypePropertiesApi. 
  * @alias module:api/IssueTypePropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueTypePropertiesApi(apiClient) {
    _classCallCheck(this, IssueTypePropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesGet operation.
   * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue type property keys
   * @param {Object} cloudid Cloudi of the project
   * @param {String} issueTypeId The ID of the issue type.
   * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(IssueTypePropertiesApi, [{
    key: "issuetypeIssueTypeIdPropertiesGet",
    value: function issuetypeIssueTypeIdPropertiesGet(cloudid, issueTypeId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesGet");
      } // verify the required parameter 'issueTypeId' is set


      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/issuetype/{issueTypeId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuetypeIssueTypeIdPropertiesPropertyKeyDelete",
    value: function issuetypeIssueTypeIdPropertiesPropertyKeyDelete(cloudid, issueTypeId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'issueTypeId' is set


      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyGet operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "issuetypeIssueTypeIdPropertiesPropertyKeyGet",
    value: function issuetypeIssueTypeIdPropertiesPropertyKeyGet(cloudid, issueTypeId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'issueTypeId' is set


      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyPut operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the issue type property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issuetypeIssueTypeIdPropertiesPropertyKeyPut",
    value: function issuetypeIssueTypeIdPropertiesPropertyKeyPut(cloudid, issueTypeId, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'issueTypeId' is set


      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issuetype/{issueTypeId}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTypePropertiesApi;
}();

exports["default"] = IssueTypePropertiesApi;