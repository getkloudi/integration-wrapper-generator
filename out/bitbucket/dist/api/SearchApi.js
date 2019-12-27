"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _SearchResultPage = _interopRequireDefault(require("../model/SearchResultPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Search service.
* @module api/SearchApi
* @version 1.1.0
*/
var SearchApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SearchApi. 
  * @alias module:api/SearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SearchApi(apiClient) {
    _classCallCheck(this, SearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the searchAccount operation.
   * @callback module:api/SearchApi~searchAccountCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SearchResultPage} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Search for code in the repositories of the specified team
   * @param {String} username The account to search in; either the username or the UUID in curly braces
   * @param {String} searchQuery The search query
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page Which page of the search results to retrieve (default to 1)
   * @param {Number} opts.pagelen How many search results to retrieve per page (default to 10)
   * @param {module:api/SearchApi~searchAccountCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SearchResultPage}
   */


  _createClass(SearchApi, [{
    key: "searchAccount",
    value: function searchAccount(username, searchQuery, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling searchAccount");
      } // verify the required parameter 'searchQuery' is set


      if (searchQuery === undefined || searchQuery === null) {
        throw new _Error["default"]("Missing the required parameter 'searchQuery' when calling searchAccount");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'search_query': searchQuery,
        'page': opts['page'],
        'pagelen': opts['pagelen']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchResultPage["default"];
      return this.apiClient.callApi('/teams/{username}/search/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchAccount_0 operation.
     * @callback module:api/SearchApi~searchAccount_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResultPage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for code in the repositories of the specified user
     * @param {String} username The account to search in; either the username or the UUID in curly braces
     * @param {String} searchQuery The search query
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Which page of the search results to retrieve (default to 1)
     * @param {Number} opts.pagelen How many search results to retrieve per page (default to 10)
     * @param {module:api/SearchApi~searchAccount_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResultPage}
     */

  }, {
    key: "searchAccount_0",
    value: function searchAccount_0(username, searchQuery, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling searchAccount_0");
      } // verify the required parameter 'searchQuery' is set


      if (searchQuery === undefined || searchQuery === null) {
        throw new _Error["default"]("Missing the required parameter 'searchQuery' when calling searchAccount_0");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {
        'search_query': searchQuery,
        'page': opts['page'],
        'pagelen': opts['pagelen']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchResultPage["default"];
      return this.apiClient.callApi('/users/{username}/search/code', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SearchApi;
}();

exports["default"] = SearchApi;