"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PersonalSnippet = _interopRequireDefault(require("../model/PersonalSnippet"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Snippets service.
* @module api/SnippetsApi
* @version 1.1.0
*/
var SnippetsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SnippetsApi. 
  * @alias module:api/SnippetsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SnippetsApi(apiClient) {
    _classCallCheck(this, SnippetsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3SnippetsId operation.
   * @callback module:api/SnippetsApi~deleteV3SnippetsIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PersonalSnippet} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove snippet
   * This feature was introduced in GitLab 8.15.
   * @param {Number} id The ID of a snippet
   * @param {module:api/SnippetsApi~deleteV3SnippetsIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PersonalSnippet}
   */


  _createClass(SnippetsApi, [{
    key: "deleteV3SnippetsId",
    value: function deleteV3SnippetsId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3SnippetsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Snippets operation.
     * @callback module:api/SnippetsApi~getV3SnippetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonalSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a snippets list for authenticated user
     * This feature was introduced in GitLab 8.15.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/SnippetsApi~getV3SnippetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PersonalSnippet}
     */

  }, {
    key: "getV3Snippets",
    value: function getV3Snippets(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SnippetsId operation.
     * @callback module:api/SnippetsApi~getV3SnippetsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonalSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single snippet
     * This feature was introduced in GitLab 8.15.
     * @param {Number} id The ID of a snippet
     * @param {module:api/SnippetsApi~getV3SnippetsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PersonalSnippet}
     */

  }, {
    key: "getV3SnippetsId",
    value: function getV3SnippetsId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3SnippetsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SnippetsIdRaw operation.
     * @callback module:api/SnippetsApi~getV3SnippetsIdRawCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a raw snippet
     * This feature was introduced in GitLab 8.15.
     * @param {Number} id The ID of a snippet
     * @param {module:api/SnippetsApi~getV3SnippetsIdRawCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3SnippetsIdRaw",
    value: function getV3SnippetsIdRaw(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3SnippetsIdRaw");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/snippets/{id}/raw', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3SnippetsPublic operation.
     * @callback module:api/SnippetsApi~getV3SnippetsPublicCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonalSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all public snippets current_user has access to
     * This feature was introduced in GitLab 8.15.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/SnippetsApi~getV3SnippetsPublicCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PersonalSnippet}
     */

  }, {
    key: "getV3SnippetsPublic",
    value: function getV3SnippetsPublic(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3Snippets operation.
     * @callback module:api/SnippetsApi~postV3SnippetsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonalSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new snippet
     * This feature was introduced in GitLab 8.15.
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/SnippetsApi~postV3SnippetsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PersonalSnippet}
     */

  }, {
    key: "postV3Snippets",
    value: function postV3Snippets(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Snippets");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3SnippetsId operation.
     * @callback module:api/SnippetsApi~putV3SnippetsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonalSnippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an existing snippet
     * This feature was introduced in GitLab 8.15.
     * @param {Number} id The ID of a snippet
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/SnippetsApi~putV3SnippetsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PersonalSnippet}
     */

  }, {
    key: "putV3SnippetsId",
    value: function putV3SnippetsId(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3SnippetsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PersonalSnippet["default"];
      return this.apiClient.callApi('/v3/snippets/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SnippetsApi;
}();

exports["default"] = SnippetsApi;