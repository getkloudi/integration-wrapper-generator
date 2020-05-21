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
* @version 1.2.0
*/
var SearchApi = /*#__PURE__*/function () {
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
   * Search for code in the repositories of the specified team.  Searching across all repositories:  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code?search_query=foo' {   \"size\": 1,   \"page\": 1,   \"pagelen\": 10,   \"query_substituted\": false,   \"values\": [     {       \"type\": \"code_search_result\",       \"content_match_count\": 2,       \"content_matches\": [         {           \"lines\": [             {               \"line\": 2,               \"segments\": []             },             {               \"line\": 3,               \"segments\": [                 {                   \"text\": \"def \"                 },                 {                   \"text\": \"foo\",                   \"match\": true                 },                 {                   \"text\": \"():\"                 }               ]             },             {               \"line\": 4,               \"segments\": [                 {                   \"text\": \"    print(\\\"snek\\\")\"                 }               ]             },             {               \"line\": 5,               \"segments\": []             }           ]         }       ],       \"path_matches\": [         {           \"text\": \"src/\"         },         {           \"text\": \"foo\",           \"match\": true         },         {           \"text\": \".py\"         }       ],       \"file\": {         \"path\": \"src/foo.py\",         \"type\": \"commit_file\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"           }         }       }     }   ] } ```  Note that searches can match in the file's text (`content_matches`), the path (`path_matches`), or both as in the example above.  You can use the same syntax for the search query as in the UI, e.g. to only search within a specific repository:  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code?search_query=foo+repo:demo' # results from the \"demo\" repository ```  Similar to other APIs, you can request more fields using a `fields` query parameter. E.g. to get some more information about the repository of matched files (the `%2B` is a URL-encoded `+`):  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code'\\      '?search_query=foo&fields=%2Bvalues.file.commit.repository' {   \"size\": 1,   \"page\": 1,   \"pagelen\": 10,   \"query_substituted\": false,   \"values\": [     {       \"type\": \"code_search_result\",       \"content_match_count\": 1,       \"content_matches\": [...],       \"path_matches\": [...],       \"file\": {         \"commit\": {           \"type\": \"commit\",           \"hash\": \"ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\",           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"             },             \"html\": {               \"href\": \"https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"             }           },           \"repository\": {             \"name\": \"demo\",             \"type\": \"repository\",             \"full_name\": \"my-workspace/demo\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/my-workspace/demo\"               },               \"avatar\": {                 \"href\": \"https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default\"               }             },             \"uuid\": \"{850e1749-781a-4115-9316-df39d0600e7a}\"           }         },         \"type\": \"commit_file\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"           }         },         \"path\": \"src/foo.py\"       }     }   ] } ```  Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible. 
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
     * Search for code in the repositories of the specified user.  Searching across all repositories:  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code?search_query=foo' {   \"size\": 1,   \"page\": 1,   \"pagelen\": 10,   \"query_substituted\": false,   \"values\": [     {       \"type\": \"code_search_result\",       \"content_match_count\": 2,       \"content_matches\": [         {           \"lines\": [             {               \"line\": 2,               \"segments\": []             },             {               \"line\": 3,               \"segments\": [                 {                   \"text\": \"def \"                 },                 {                   \"text\": \"foo\",                   \"match\": true                 },                 {                   \"text\": \"():\"                 }               ]             },             {               \"line\": 4,               \"segments\": [                 {                   \"text\": \"    print(\\\"snek\\\")\"                 }               ]             },             {               \"line\": 5,               \"segments\": []             }           ]         }       ],       \"path_matches\": [         {           \"text\": \"src/\"         },         {           \"text\": \"foo\",           \"match\": true         },         {           \"text\": \".py\"         }       ],       \"file\": {         \"path\": \"src/foo.py\",         \"type\": \"commit_file\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"           }         }       }     }   ] } ```  Note that searches can match in the file's text (`content_matches`), the path (`path_matches`), or both as in the example above.  You can use the same syntax for the search query as in the UI, e.g. to only search within a specific repository:  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code?search_query=foo+repo:demo' # results from the \"demo\" repository ```  Similar to other APIs, you can request more fields using a `fields` query parameter. E.g. to get some more information about the repository of matched files (the `%2B` is a URL-encoded `+`):  ``` curl 'https://api.bitbucket.org/2.0/users/my-workspace/search/code'\\      '?search_query=foo&fields=%2Bvalues.file.commit.repository' {   \"size\": 1,   \"page\": 1,   \"pagelen\": 10,   \"query_substituted\": false,   \"values\": [     {       \"type\": \"code_search_result\",       \"content_match_count\": 1,       \"content_matches\": [...],       \"path_matches\": [...],       \"file\": {         \"commit\": {           \"type\": \"commit\",           \"hash\": \"ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\",           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"             },             \"html\": {               \"href\": \"https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"             }           },           \"repository\": {             \"name\": \"demo\",             \"type\": \"repository\",             \"full_name\": \"my-workspace/demo\",             \"links\": {               \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo\"               },               \"html\": {                 \"href\": \"https://bitbucket.org/my-workspace/demo\"               },               \"avatar\": {                 \"href\": \"https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default\"               }             },             \"uuid\": \"{850e1749-781a-4115-9316-df39d0600e7a}\"           }         },         \"type\": \"commit_file\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"           }         },         \"path\": \"src/foo.py\"       }     }   ] } ```  Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible. 
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