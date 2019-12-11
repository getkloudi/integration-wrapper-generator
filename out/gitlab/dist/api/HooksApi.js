"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Hook = _interopRequireDefault(require("../model/Hook"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Hooks service.
* @module api/HooksApi
* @version 1.1.0
*/
var HooksApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new HooksApi. 
  * @alias module:api/HooksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function HooksApi(apiClient) {
    _classCallCheck(this, HooksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3HooksId operation.
   * @callback module:api/HooksApi~deleteV3HooksIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Hook} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a hook
   * Delete a hook
   * @param {Number} id The ID of the system hook
   * @param {module:api/HooksApi~deleteV3HooksIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Hook}
   */


  _createClass(HooksApi, [{
    key: "deleteV3HooksId",
    value: function deleteV3HooksId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3HooksId");
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
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/v3/hooks/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Hooks operation.
     * @callback module:api/HooksApi~getV3HooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of system hooks
     * Get the list of system hooks
     * @param {module:api/HooksApi~getV3HooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "getV3Hooks",
    value: function getV3Hooks(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/v3/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3HooksId operation.
     * @callback module:api/HooksApi~getV3HooksIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Test a hook
     * Test a hook
     * @param {Number} id The ID of the system hook
     * @param {module:api/HooksApi~getV3HooksIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "getV3HooksId",
    value: function getV3HooksId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3HooksId");
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
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/v3/hooks/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3Hooks operation.
     * @callback module:api/HooksApi~postV3HooksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Hook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new system hook
     * Create a new system hook
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/HooksApi~postV3HooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Hook}
     */

  }, {
    key: "postV3Hooks",
    value: function postV3Hooks(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Hooks");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Hook["default"];
      return this.apiClient.callApi('/v3/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return HooksApi;
}();

exports["default"] = HooksApi;