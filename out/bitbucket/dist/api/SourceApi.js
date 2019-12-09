"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Source service.
* @module api/SourceApi
* @version 1.0.0
*/
var SourceApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SourceApi. 
  * @alias module:api/SourceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SourceApi(apiClient) {
    _classCallCheck(this, SourceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesUsernameRepoSlugSrcNodePathGet operation.
   * @callback module:api/SourceApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} username 
   * @param {String} node 
   * @param {String} path 
   * @param {String} repoSlug 
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.format Instead of returning the file's contents, return the (json) meta data for it.
   * @param {module:api/SourceApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SourceApi, [{
    key: "repositoriesUsernameRepoSlugSrcNodePathGet",
    value: function repositoriesUsernameRepoSlugSrcNodePathGet(username, node, path, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }

      var pathParams = {
        'username': username,
        'node': node,
        'path': path,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'format': opts['format']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/src/{node}/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SourceApi;
}();

exports["default"] = SourceApi;