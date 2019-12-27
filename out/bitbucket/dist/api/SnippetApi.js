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
* Snippet service.
* @module api/SnippetApi
* @version 1.1.2
*/
var SnippetApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SnippetApi. 
  * @alias module:api/SnippetApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SnippetApi(apiClient) {
    _classCallCheck(this, SnippetApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the snippetsWorkspaceEncodedIdFilesPathGet operation.
   * @callback module:api/SnippetApi~snippetsWorkspaceEncodedIdFilesPathGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the snippet itself and having to pull out the versioned file links.
   * @param {String} path 
   * @param {String} encodedId 
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {module:api/SnippetApi~snippetsWorkspaceEncodedIdFilesPathGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SnippetApi, [{
    key: "snippetsWorkspaceEncodedIdFilesPathGet",
    value: function snippetsWorkspaceEncodedIdFilesPathGet(path, encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'path' is set

      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling snippetsWorkspaceEncodedIdFilesPathGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdFilesPathGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdFilesPathGet");
      }

      var pathParams = {
        'path': path,
        'encoded_id': encodedId,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/files/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SnippetApi;
}();

exports["default"] = SnippetApi;