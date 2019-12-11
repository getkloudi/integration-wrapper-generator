"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Runner = _interopRequireDefault(require("../model/Runner"));

var _RunnerDetails = _interopRequireDefault(require("../model/RunnerDetails"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Runners service.
* @module api/RunnersApi
* @version 1.1.0
*/
var RunnersApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new RunnersApi. 
  * @alias module:api/RunnersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RunnersApi(apiClient) {
    _classCallCheck(this, RunnersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3RunnersId operation.
   * @callback module:api/RunnersApi~deleteV3RunnersIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Runner} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove a runner
   * Remove a runner
   * @param {Number} id The ID of the runner
   * @param {module:api/RunnersApi~deleteV3RunnersIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Runner}
   */


  _createClass(RunnersApi, [{
    key: "deleteV3RunnersId",
    value: function deleteV3RunnersId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3RunnersId");
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
      var returnType = _Runner["default"];
      return this.apiClient.callApi('/v3/runners/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Runners operation.
     * @callback module:api/RunnersApi~getV3RunnersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get runners available for user
     * Get runners available for user
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scope The scope of specific runners to show
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/RunnersApi~getV3RunnersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */

  }, {
    key: "getV3Runners",
    value: function getV3Runners(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'scope': opts['scope'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Runner["default"];
      return this.apiClient.callApi('/v3/runners', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3RunnersAll operation.
     * @callback module:api/RunnersApi~getV3RunnersAllCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Runner} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all runners - shared and specific
     * Get all runners - shared and specific
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.scope The scope of specific runners to show
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/RunnersApi~getV3RunnersAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Runner}
     */

  }, {
    key: "getV3RunnersAll",
    value: function getV3RunnersAll(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'scope': opts['scope'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Runner["default"];
      return this.apiClient.callApi('/v3/runners/all', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3RunnersId operation.
     * @callback module:api/RunnersApi~getV3RunnersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunnerDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get runner's details
     * Get runner's details
     * @param {Number} id The ID of the runner
     * @param {module:api/RunnersApi~getV3RunnersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RunnerDetails}
     */

  }, {
    key: "getV3RunnersId",
    value: function getV3RunnersId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3RunnersId");
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
      var returnType = _RunnerDetails["default"];
      return this.apiClient.callApi('/v3/runners/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3RunnersId operation.
     * @callback module:api/RunnersApi~putV3RunnersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RunnerDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update runner's details
     * Update runner's details
     * @param {Number} id The ID of the runner
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/RunnersApi~putV3RunnersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RunnerDetails}
     */

  }, {
    key: "putV3RunnersId",
    value: function putV3RunnersId(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3RunnersId");
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
      var returnType = _RunnerDetails["default"];
      return this.apiClient.callApi('/v3/runners/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RunnersApi;
}();

exports["default"] = RunnersApi;