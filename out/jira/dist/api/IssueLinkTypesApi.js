"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueLinkType = _interopRequireDefault(require("../model/IssueLinkType"));

var _IssueLinkTypes = _interopRequireDefault(require("../model/IssueLinkTypes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueLinkTypes service.
* @module api/IssueLinkTypesApi
* @version 1.4.0
*/
var IssueLinkTypesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueLinkTypesApi. 
  * @alias module:api/IssueLinkTypesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueLinkTypesApi(apiClient) {
    _classCallCheck(this, IssueLinkTypesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueLinkTypeGet operation.
   * @callback module:api/IssueLinkTypesApi~issueLinkTypeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IssueLinkTypes} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue link types
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssueLinkTypesApi~issueLinkTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IssueLinkTypes}
   */


  _createClass(IssueLinkTypesApi, [{
    key: "issueLinkTypeGet",
    value: function issueLinkTypeGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeGet");
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
      var returnType = _IssueLinkTypes["default"];
      return this.apiClient.callApi('/issueLinkType', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdDelete operation.
     * @callback module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue link type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueLinkTypeIssueLinkTypeIdDelete",
    value: function issueLinkTypeIssueLinkTypeIdDelete(cloudid, issueLinkTypeId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdDelete");
      } // verify the required parameter 'issueLinkTypeId' is set


      if (issueLinkTypeId === undefined || issueLinkTypeId === null) {
        throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueLinkTypeId': issueLinkTypeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdGet operation.
     * @callback module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLinkType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue link type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueLinkType}
     */

  }, {
    key: "issueLinkTypeIssueLinkTypeIdGet",
    value: function issueLinkTypeIssueLinkTypeIdGet(cloudid, issueLinkTypeId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdGet");
      } // verify the required parameter 'issueLinkTypeId' is set


      if (issueLinkTypeId === undefined || issueLinkTypeId === null) {
        throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueLinkTypeId': issueLinkTypeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueLinkType["default"];
      return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkTypeIssueLinkTypeIdPut operation.
     * @callback module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLinkType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update issue link type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueLinkTypeId The ID of the issue link type.
     * @param {module:model/IssueLinkType} body 
     * @param {module:api/IssueLinkTypesApi~issueLinkTypeIssueLinkTypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueLinkType}
     */

  }, {
    key: "issueLinkTypeIssueLinkTypeIdPut",
    value: function issueLinkTypeIssueLinkTypeIdPut(cloudid, issueLinkTypeId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypeIssueLinkTypeIdPut");
      } // verify the required parameter 'issueLinkTypeId' is set


      if (issueLinkTypeId === undefined || issueLinkTypeId === null) {
        throw new Error("Missing the required parameter 'issueLinkTypeId' when calling issueLinkTypeIssueLinkTypeIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueLinkTypeIssueLinkTypeIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueLinkTypeId': issueLinkTypeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueLinkType["default"];
      return this.apiClient.callApi('/issueLinkType/{issueLinkTypeId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueLinkTypePost operation.
     * @callback module:api/IssueLinkTypesApi~issueLinkTypePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLinkType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue link type
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueLinkType} body 
     * @param {module:api/IssueLinkTypesApi~issueLinkTypePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueLinkType}
     */

  }, {
    key: "issueLinkTypePost",
    value: function issueLinkTypePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkTypePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueLinkTypePost");
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
      var returnType = _IssueLinkType["default"];
      return this.apiClient.callApi('/issueLinkType', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueLinkTypesApi;
}();

exports["default"] = IssueLinkTypesApi;