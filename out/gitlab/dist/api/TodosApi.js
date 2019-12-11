"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Todo = _interopRequireDefault(require("../model/Todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Todos service.
* @module api/TodosApi
* @version 1.1.0
*/
var TodosApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new TodosApi. 
  * @alias module:api/TodosApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TodosApi(apiClient) {
    _classCallCheck(this, TodosApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3Todos operation.
   * @callback module:api/TodosApi~deleteV3TodosCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Mark all todos as done
   * Mark all todos as done
   * @param {module:api/TodosApi~deleteV3TodosCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TodosApi, [{
    key: "deleteV3Todos",
    value: function deleteV3Todos(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/todos', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3TodosId operation.
     * @callback module:api/TodosApi~deleteV3TodosIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a todo as done
     * Mark a todo as done
     * @param {Number} id The ID of the todo being marked as done
     * @param {module:api/TodosApi~deleteV3TodosIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */

  }, {
    key: "deleteV3TodosId",
    value: function deleteV3TodosId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3TodosId");
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
      var returnType = _Todo["default"];
      return this.apiClient.callApi('/v3/todos/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Todos operation.
     * @callback module:api/TodosApi~getV3TodosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a todo list
     * Get a todo list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/TodosApi~getV3TodosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */

  }, {
    key: "getV3Todos",
    value: function getV3Todos(opts, callback) {
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
      var returnType = _Todo["default"];
      return this.apiClient.callApi('/v3/todos', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TodosApi;
}();

exports["default"] = TodosApi;