"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Namespace = _interopRequireDefault(require("../model/Namespace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Namespaces service.
* @module api/NamespacesApi
* @version 1.0.0
*/
var NamespacesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new NamespacesApi. 
  * @alias module:api/NamespacesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NamespacesApi(apiClient) {
    _classCallCheck(this, NamespacesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3Namespaces operation.
   * @callback module:api/NamespacesApi~getV3NamespacesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Namespace} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get a namespaces list
   * Get a namespaces list
   * @param {Object} opts Optional parameters
   * @param {String} opts.search Search query for namespaces
   * @param {Number} opts.page Current page number
   * @param {Number} opts.perPage Number of items per page
   * @param {module:api/NamespacesApi~getV3NamespacesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Namespace}
   */


  _createClass(NamespacesApi, [{
    key: "getV3Namespaces",
    value: function getV3Namespaces(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'search': opts['search'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Namespace["default"];
      return this.apiClient.callApi('/v3/namespaces', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NamespacesApi;
}();

exports["default"] = NamespacesApi;