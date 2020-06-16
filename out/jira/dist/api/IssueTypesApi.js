"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Avatar = _interopRequireDefault(require("../model/Avatar"));

var _IssueTypeCreateBean = _interopRequireDefault(require("../model/IssueTypeCreateBean"));

var _IssueTypeDetails = _interopRequireDefault(require("../model/IssueTypeDetails"));

var _IssueTypeUpdateBean = _interopRequireDefault(require("../model/IssueTypeUpdateBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueTypes service.
* @module api/IssueTypesApi
* @version 1.4.0
*/
var IssueTypesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueTypesApi. 
  * @alias module:api/IssueTypesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueTypesApi(apiClient) {
    _classCallCheck(this, IssueTypesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuetypeGet operation.
   * @callback module:api/IssueTypesApi~issuetypeGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/IssueTypeDetails>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all issue types for user
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssueTypesApi~issuetypeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/IssueTypeDetails>}
   */


  _createClass(IssueTypesApi, [{
    key: "issuetypeGet",
    value: function issuetypeGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeGet");
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
      var returnType = [_IssueTypeDetails["default"]];
      return this.apiClient.callApi('/issuetype', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIdAlternativesGet operation.
     * @callback module:api/IssueTypesApi~issuetypeIdAlternativesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueTypeDetails>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get alternative issue types
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {module:api/IssueTypesApi~issuetypeIdAlternativesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueTypeDetails>}
     */

  }, {
    key: "issuetypeIdAlternativesGet",
    value: function issuetypeIdAlternativesGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdAlternativesGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuetypeIdAlternativesGet");
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
      var returnType = [_IssueTypeDetails["default"]];
      return this.apiClient.callApi('/issuetype/{id}/alternatives', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIdAvatar2Post operation.
     * @callback module:api/IssueTypesApi~issuetypeIdAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Avatar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load issue type avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {Number} size The length of each side of the crop region.
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region. (default to 0)
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region. (default to 0)
     * @param {module:api/IssueTypesApi~issuetypeIdAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Avatar}
     */

  }, {
    key: "issuetypeIdAvatar2Post",
    value: function issuetypeIdAvatar2Post(cloudid, id, size, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdAvatar2Post");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuetypeIdAvatar2Post");
      } // verify the required parameter 'size' is set


      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling issuetypeIdAvatar2Post");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeIdAvatar2Post");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'x': opts['x'],
        'y': opts['y'],
        'size': size
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Avatar["default"];
      return this.apiClient.callApi('/issuetype/{id}/avatar2', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIdDelete operation.
     * @callback module:api/IssueTypesApi~issuetypeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {String} opts.alternativeIssueTypeId The ID of the replacement issue type.
     * @param {module:api/IssueTypesApi~issuetypeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issuetypeIdDelete",
    value: function issuetypeIdDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuetypeIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'alternativeIssueTypeId': opts['alternativeIssueTypeId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issuetype/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIdGet operation.
     * @callback module:api/IssueTypesApi~issuetypeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypeDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {module:api/IssueTypesApi~issuetypeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypeDetails}
     */

  }, {
    key: "issuetypeIdGet",
    value: function issuetypeIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuetypeIdGet");
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
      var returnType = _IssueTypeDetails["default"];
      return this.apiClient.callApi('/issuetype/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeIdPut operation.
     * @callback module:api/IssueTypesApi~issuetypeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypeDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update issue type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue type.
     * @param {module:model/IssueTypeUpdateBean} body 
     * @param {module:api/IssueTypesApi~issuetypeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypeDetails}
     */

  }, {
    key: "issuetypeIdPut",
    value: function issuetypeIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issuetypeIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueTypeDetails["default"];
      return this.apiClient.callApi('/issuetype/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypePost operation.
     * @callback module:api/IssueTypesApi~issuetypePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypeDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue type
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueTypeCreateBean} body 
     * @param {module:api/IssueTypesApi~issuetypePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypeDetails}
     */

  }, {
    key: "issuetypePost",
    value: function issuetypePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypePost");
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
      var returnType = _IssueTypeDetails["default"];
      return this.apiClient.callApi('/issuetype', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTypesApi;
}();

exports["default"] = IssueTypesApi;