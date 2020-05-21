"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedSnippetComments = _interopRequireDefault(require("../model/PaginatedSnippetComments"));

var _PaginatedSnippetCommit = _interopRequireDefault(require("../model/PaginatedSnippetCommit"));

var _PaginatedSnippets = _interopRequireDefault(require("../model/PaginatedSnippets"));

var _PaginatedUsers = _interopRequireDefault(require("../model/PaginatedUsers"));

var _Snippet = _interopRequireDefault(require("../model/Snippet"));

var _SnippetComment = _interopRequireDefault(require("../model/SnippetComment"));

var _SnippetCommit = _interopRequireDefault(require("../model/SnippetCommit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Snippets service.
* @module api/SnippetsApi
* @version 1.2.0
*/
var SnippetsApi = /*#__PURE__*/function () {
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
   * Callback function to receive the result of the snippetsGet operation.
   * @callback module:api/SnippetsApi~snippetsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedSnippets} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all snippets. Like pull requests, repositories and teams, the full set of snippets is defined by what the current user has access to.  This includes all snippets owned by the current user, but also all snippets owned by any of the teams the user is a member of, or snippets by other users that the current user is either watching or has collaborated on (for instance by commenting on it).  To limit the set of returned snippets, apply the `?role=[owner|contributor|member]` query parameter where the roles are defined as follows:  * `owner`: all snippets owned by the current user * `contributor`: all snippets owned by, or watched by the current user * `member`: owned by the user, their teams, or watched by the current user  When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or commented on.  The returned response is a normal paginated JSON list. This endpoint only supports `application/json` responses and no `multipart/form-data` or `multipart/related`. As a result, it is not possible to include the file contents.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.role Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
   * @param {module:api/SnippetsApi~snippetsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedSnippets}
   */


  _createClass(SnippetsApi, [{
    key: "snippetsGet",
    value: function snippetsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'role': opts['role']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedSnippets["default"];
      return this.apiClient.callApi('/snippets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsPost operation.
     * @callback module:api/SnippetsApi~snippetsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new snippet under the authenticated user's account.  Snippets can contain multiple files. Both text and binary files are supported.  The simplest way to create a new snippet from a local file:      $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png  Creating snippets through curl has a few limitations and so let's look at a more complicated scenario.  Snippets are created with a multipart POST. Both `multipart/form-data` and `multipart/related` are supported. Both allow the creation of snippets with both meta data (title, etc), as well as multiple text and binary files.  The main difference is that `multipart/related` can use rich encoding for the meta data (currently JSON).   multipart/related (RFC-2387) ----------------------------  This is the most advanced and efficient way to create a paste.      POST /2.0/snippets/evzijst HTTP/1.1     Content-Length: 1188     Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"     MIME-Version: 1.0      --===============1438169132528273974==     Content-Type: application/json; charset=\"utf-8\"     MIME-Version: 1.0     Content-ID: snippet      {       \"title\": \"My snippet\",       \"is_private\": true,       \"scm\": \"hg\",       \"files\": {           \"foo.txt\": {},           \"image.png\": {}         }     }      --===============1438169132528273974==     Content-Type: text/plain; charset=\"us-ascii\"     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \"foo.txt\"     Content-Disposition: attachment; filename=\"foo.txt\"      foo      --===============1438169132528273974==     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \"image.png\"     Content-Disposition: attachment; filename=\"image.png\"      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==     --===============1438169132528273974==--  The request contains multiple parts and is structured as follows.  The first part is the JSON document that describes the snippet's properties or meta data. It either has to be the first part, or the request's `Content-Type` header must contain the `start` parameter to point to it.  The remaining parts are the files of which there can be zero or more. Each file part should contain the `Content-ID` MIME header through which the JSON meta data's `files` element addresses it. The value should be the name of the file.  `Content-Disposition` is an optional MIME header. The header's optional `filename` parameter can be used to specify the file name that Bitbucket should use when writing the file to disk. When present, `filename` takes precedence over the value of `Content-ID`.  When the JSON body omits the `files` element, the remaining parts are not ignored. Instead, each file is added to the new snippet as if its name was explicitly linked (the use of the `files` elements is mandatory for some operations like deleting or renaming files).   multipart/form-data -------------------  The use of JSON for the snippet's meta data is optional. Meta data can also be supplied as regular form fields in a more conventional `multipart/form-data` request:      $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title=\"My snippet\"               -F file=@foo.txt -F file=@image.png      POST /2.0/snippets HTTP/1.1     Content-Length: 951     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"file\"; filename=\"foo.txt\"     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"file\"; filename=\"image.png\"     Content-Type: application/octet-stream      ?PNG      IHDR?1??I.....     ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"title\"      My snippet     ------------------------------63a4b224c59f--  Here the meta data properties are included as flat, top-level form fields. The file attachments use the `file` field name. To attach multiple files, simply repeat the field.  The advantage of `multipart/form-data` over `multipart/related` is that it can be easier to build clients.  Essentially all properties are optional, `title` and `files` included.   Sharing and Visibility ----------------------  Snippets can be either public (visible to anyone on Bitbucket, as well as anonymous users), or private (visible only to the owner, creator and members of the team in case the snippet is owned by a team). This is controlled through the snippet's `is_private` element:  * **is_private=false** -- everyone, including anonymous users can view   the snippet * **is_private=true** -- only the owner and team members (for team   snippets) can view it  To create the snippet under a team account, just append the team name to the URL (see `/2.0/snippets/{username}`).
     * @param {module:model/Snippet} body The new snippet object.
     * @param {module:api/SnippetsApi~snippetsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsPost",
    value: function snippetsPost(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling snippetsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommentsCommentIdDelete operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a snippet comment.  Comments can only be removed by their author.
     * @param {String} commentId 
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommentsCommentIdDelete",
    value: function snippetsWorkspaceEncodedIdCommentsCommentIdDelete(commentId, encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdDelete");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommentsCommentIdDelete");
      }

      var pathParams = {
        'comment_id': commentId,
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
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommentsCommentIdGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SnippetComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specific snippet comment.
     * @param {String} commentId 
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SnippetComment}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommentsCommentIdGet",
    value: function snippetsWorkspaceEncodedIdCommentsCommentIdGet(commentId, encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommentsCommentIdGet");
      }

      var pathParams = {
        'comment_id': commentId,
        'encoded_id': encodedId,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SnippetComment["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommentsCommentIdPut operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a comment.  Comments can only be updated by their author.
     * @param {String} commentId 
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommentsCommentIdPut",
    value: function snippetsWorkspaceEncodedIdCommentsCommentIdPut(commentId, encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdPut");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommentsCommentIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommentsCommentIdPut");
      }

      var pathParams = {
        'comment_id': commentId,
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
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/comments/{comment_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommentsGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSnippetComments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to retrieve a paginated list of all comments for a specific snippet.  This resource works identical to commit and pull request comments.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSnippetComments}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommentsGet",
    value: function snippetsWorkspaceEncodedIdCommentsGet(encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'encodedId' is set

      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommentsGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommentsGet");
      }

      var pathParams = {
        'encoded_id': encodedId,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedSnippetComments["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommentsPost operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new comment.  The only required field in the body is `content.raw`.  To create a threaded reply to an existing comment, include `parent.id`.
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:model/Snippet} body The contents of the new comment.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommentsPost",
    value: function snippetsWorkspaceEncodedIdCommentsPost(encodedId, workspace, body, callback) {
      var postBody = body; // verify the required parameter 'encodedId' is set

      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommentsPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommentsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling snippetsWorkspaceEncodedIdCommentsPost");
      }

      var pathParams = {
        'encoded_id': encodedId,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommitsGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSnippetCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the changes (commits) made on this snippet.
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSnippetCommit}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommitsGet",
    value: function snippetsWorkspaceEncodedIdCommitsGet(encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'encodedId' is set

      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommitsGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommitsGet");
      }

      var pathParams = {
        'encoded_id': encodedId,
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedSnippetCommit["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdCommitsRevisionGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommitsRevisionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SnippetCommit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} revision 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdCommitsRevisionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SnippetCommit}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdCommitsRevisionGet",
    value: function snippetsWorkspaceEncodedIdCommitsRevisionGet(encodedId, workspace, revision, callback) {
      var postBody = null; // verify the required parameter 'encodedId' is set

      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdCommitsRevisionGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdCommitsRevisionGet");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling snippetsWorkspaceEncodedIdCommitsRevisionGet");
      }

      var pathParams = {
        'encoded_id': encodedId,
        'workspace': workspace,
        'revision': revision
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SnippetCommit["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/commits/{revision}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdDelete operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a snippet and returns an empty response.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdDelete",
    value: function snippetsWorkspaceEncodedIdDelete(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdDelete");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a single snippet.  Snippets support multiple content types:  * application/json * multipart/related * multipart/form-data   application/json ----------------  The default content type of the response is `application/json`. Since JSON is always `utf-8`, it cannot reliably contain file contents for files that are not text. Therefore, JSON snippet documents only contain the filename and links to the file contents.  This means that in order to retrieve all parts of a snippet, N+1 requests need to be made (where N is the number of files in the snippet).   multipart/related -----------------  To retrieve an entire snippet in a single response, use the `Accept: multipart/related` HTTP request header.      $ curl -H \"Accept: multipart/related\" https://api.bitbucket.org/2.0/snippets/evzijst/1  Response:      HTTP/1.1 200 OK     Content-Length: 2214     Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"     MIME-Version: 1.0      --===============1438169132528273974==     Content-Type: application/json; charset=\"utf-8\"     MIME-Version: 1.0     Content-ID: snippet      {       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj\"         },         \"html\": {           \"href\": \"https://bitbucket.org/snippets/evzijst/kypj\"         },         \"comments\": {           \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments\"         },         \"watchers\": {           \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers\"         },         \"commits\": {           \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits\"         }       },       \"id\": kypj,       \"title\": \"My snippet\",       \"created_on\": \"2014-12-29T22:22:04.790331+00:00\",       \"updated_on\": \"2014-12-29T22:22:04.790331+00:00\",       \"is_private\": false,       \"files\": {         \"foo.txt\": {           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt\"             },             \"html\": {               \"href\": \"https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt\"             }           }         },         \"image.png\": {           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png\"             },             \"html\": {               \"href\": \"https://bitbucket.org/snippets/evzijst/kypj#file-image.png\"             }           }         }       ],       \"owner\": {         \"username\": \"evzijst\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/evzijst\"           },           \"html\": {             \"href\": \"https://bitbucket.org/evzijst\"           },           \"avatar\": {             \"href\": \"https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\"           }         }       },       \"creator\": {         \"username\": \"evzijst\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/evzijst\"           },           \"html\": {             \"href\": \"https://bitbucket.org/evzijst\"           },           \"avatar\": {             \"href\": \"https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\"           }         }       }     }      --===============1438169132528273974==     Content-Type: text/plain; charset=\"us-ascii\"     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \"foo.txt\"     Content-Disposition: attachment; filename=\"foo.txt\"      foo      --===============1438169132528273974==     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \"image.png\"     Content-Disposition: attachment; filename=\"image.png\"      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==     --===============1438169132528273974==--  multipart/form-data -------------------  As with creating new snippets, `multipart/form-data` can be used as an alternative to `multipart/related`. However, the inherently flat structure of form-data means that only basic, root-level properties can be returned, while nested elements like `links` are omitted:      $ curl -H \"Accept: multipart/form-data\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj  Response:      HTTP/1.1 200 OK     Content-Length: 951     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"title\"     Content-Type: text/plain; charset=\"utf-8\"      My snippet     ------------------------------63a4b224c59f--     Content-Disposition: attachment; name=\"file\"; filename=\"foo.txt\"     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: attachment; name=\"file\"; filename=\"image.png\"     Content-Transfer-Encoding: base64     Content-Type: application/octet-stream      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==     ------------------------------5957323a6b76--
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdGet",
    value: function snippetsWorkspaceEncodedIdGet(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'multipart/related', 'multipart/form-data'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdNodeIdDelete operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the snippet.  Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an older commit results in a 405 status code.  To delete a snippet, regardless of whether or not concurrent changes are being made to it, use `DELETE /snippets/{encoded_id}` instead.
     * @param {String} nodeId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdNodeIdDelete",
    value: function snippetsWorkspaceEncodedIdNodeIdDelete(nodeId, workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'nodeId' is set

      if (nodeId === undefined || nodeId === null) {
        throw new _Error["default"]("Missing the required parameter 'nodeId' when calling snippetsWorkspaceEncodedIdNodeIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdNodeIdDelete");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdNodeIdDelete");
      }

      var pathParams = {
        'node_id': nodeId,
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{node_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdNodeIdFilesPathGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdFilesPathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves the raw contents of a specific file in the snippet. The `Content-Disposition` header will be \"attachment\" to avoid issues with malevolent executable files.  The file's mime type is derived from its filename and returned in the `Content-Type` header.  Note that for text files, no character encoding is included as part of the content type.
     * @param {String} path 
     * @param {String} nodeId 
     * @param {String} encodedId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdFilesPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdNodeIdFilesPathGet",
    value: function snippetsWorkspaceEncodedIdNodeIdFilesPathGet(path, nodeId, encodedId, workspace, callback) {
      var postBody = null; // verify the required parameter 'path' is set

      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling snippetsWorkspaceEncodedIdNodeIdFilesPathGet");
      } // verify the required parameter 'nodeId' is set


      if (nodeId === undefined || nodeId === null) {
        throw new _Error["default"]("Missing the required parameter 'nodeId' when calling snippetsWorkspaceEncodedIdNodeIdFilesPathGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdNodeIdFilesPathGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdNodeIdFilesPathGet");
      }

      var pathParams = {
        'path': path,
        'node_id': nodeId,
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
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdNodeIdGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `GET /snippets/encoded_id`, except that this endpoint can be used to retrieve the contents of the snippet as it was at an older revision, while `/snippets/encoded_id` always returns the snippet's current revision.  Note that only the snippet's file contents are versioned, not its meta data properties like the title.  Other than that, the two endpoints are identical in behavior.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {String} nodeId A commit revision (SHA1).
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdNodeIdGet",
    value: function snippetsWorkspaceEncodedIdNodeIdGet(workspace, encodedId, nodeId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdNodeIdGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdNodeIdGet");
      } // verify the required parameter 'nodeId' is set


      if (nodeId === undefined || nodeId === null) {
        throw new _Error["default"]("Missing the required parameter 'nodeId' when calling snippetsWorkspaceEncodedIdNodeIdGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId,
        'node_id': nodeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'multipart/related', 'multipart/form-data'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{node_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdNodeIdPut operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `UPDATE /snippets/encoded_id`, except that this endpoint takes an explicit commit revision. Only the snippet's \"HEAD\"/\"tip\" (most recent) version can be updated and requests on all other, older revisions fail by returning a 405 status.  Usage of this endpoint over the unrestricted `/snippets/encoded_id` could be desired if the caller wants to be sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.  This can be considered a so-called \"Compare And Swap\", or CAS operation.  Other than that, the two endpoints are identical in behavior.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {String} nodeId A commit revision (SHA1).
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdNodeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdNodeIdPut",
    value: function snippetsWorkspaceEncodedIdNodeIdPut(workspace, encodedId, nodeId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdNodeIdPut");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdNodeIdPut");
      } // verify the required parameter 'nodeId' is set


      if (nodeId === undefined || nodeId === null) {
        throw new _Error["default"]("Missing the required parameter 'nodeId' when calling snippetsWorkspaceEncodedIdNodeIdPut");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId,
        'node_id': nodeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'multipart/related', 'multipart/form-data'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{node_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdPut operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to update a snippet. Use this to add and delete files and to change a snippet's title.  To update a snippet, one can either PUT a full snapshot, or only the parts that need to be changed.  The contract for PUT on this API is that properties missing from the request remain untouched so that snippets can be efficiently manipulated with differential payloads.  To delete a property (e.g. the title, or a file), include its name in the request, but omit its value (use `null`).  As in Git, explicit renaming of files is not supported. Instead, to rename a file, delete it and add it again under another name. This can be done atomically in a single request. Rename detection is left to the SCM.  PUT supports three different content types for both request and response bodies:  * `application/json` * `multipart/related` * `multipart/form-data`  The content type used for the request body can be different than that used for the response. Content types are specified using standard HTTP headers.  Use the `Content-Type` and `Accept` headers to select the desired request and response format.   application/json ----------------  As with creation and retrieval, the content type determines what properties can be manipulated. `application/json` does not support file contents and is therefore limited to a snippet's meta data.  To update the title, without changing any of its files:      $ curl -X POST -H \"Content-Type: application/json\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{\"title\": \"Updated title\"}'   To delete the title:      $ curl -X POST -H \"Content-Type: application/json\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{\"title\": null}'  Not all parts of a snippet can be manipulated. The owner and creator for instance are immutable.   multipart/related -----------------  `multipart/related` can be used to manipulate all of a snippet's properties. The body is identical to a POST. properties omitted from the request are left unchanged. Since the `start` part contains JSON, the mechanism for manipulating the snippet's meta data is identical to `application/json` requests.  To update one of a snippet's file contents, while also changing its title:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 288     Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"     MIME-Version: 1.0      --===============1438169132528273974==     Content-Type: application/json; charset=\"utf-8\"     MIME-Version: 1.0     Content-ID: snippet      {       \"title\": \"My updated snippet\",       \"files\": {           \"foo.txt\": {}         }     }      --===============1438169132528273974==     Content-Type: text/plain; charset=\"us-ascii\"     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \"foo.txt\"     Content-Disposition: attachment; filename=\"foo.txt\"      Updated file contents.      --===============1438169132528273974==--  Here only the parts that are changed are included in the body. The other files remain untouched.  Note the use of the `files` list in the JSON part. This list contains the files that are being manipulated. This list should have corresponding multiparts in the request that contain the new contents of these files.  If a filename in the `files` list does not have a corresponding part, it will be deleted from the snippet, as shown below:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 188     Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"     MIME-Version: 1.0      --===============1438169132528273974==     Content-Type: application/json; charset=\"utf-8\"     MIME-Version: 1.0     Content-ID: snippet      {       \"files\": {         \"image.png\": {}       }     }      --===============1438169132528273974==--  To simulate a rename, delete a file and add the same file under another name:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 212     Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"     MIME-Version: 1.0      --===============1438169132528273974==     Content-Type: application/json; charset=\"utf-8\"     MIME-Version: 1.0     Content-ID: snippet      {         \"files\": {           \"foo.txt\": {},           \"bar.txt\": {}         }     }      --===============1438169132528273974==     Content-Type: text/plain; charset=\"us-ascii\"     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \"bar.txt\"     Content-Disposition: attachment; filename=\"bar.txt\"      foo      --===============1438169132528273974==--   multipart/form-data -----------------  Again, one can also use `multipart/form-data` to manipulate file contents and meta data atomically.      $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title=\"My updated snippet\" -F file=@foo.txt      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 351     Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"file\"; filename=\"foo.txt\"     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name=\"title\"      My updated snippet     ------------------------------63a4b224c59f  To delete a file, omit its contents while including its name in the `files` field:      $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 149     Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86      ------------------------------ef8871065a86     Content-Disposition: form-data; name=\"files\"      image.png     ------------------------------ef8871065a86--  The explicit use of the `files` element in `multipart/related` and `multipart/form-data` is only required when deleting files. The default mode of operation is for file parts to be processed, regardless of whether or not they are listed in `files`, as a convenience to the client.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet's id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdPut",
    value: function snippetsWorkspaceEncodedIdPut(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdPut");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdPut");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json', 'multipart/related', 'multipart/form-data'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdRevisionDiffGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdRevisionDiffGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the diff of the specified commit against its first parent.  Note that this resource is different in functionality from the `patch` resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional `path=foo/bar.py` query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent's ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the diff is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {String} revision A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.path When used, only one the diff of the specified file will be returned.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdRevisionDiffGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdRevisionDiffGet",
    value: function snippetsWorkspaceEncodedIdRevisionDiffGet(workspace, encodedId, revision, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdRevisionDiffGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdRevisionDiffGet");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling snippetsWorkspaceEncodedIdRevisionDiffGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId,
        'revision': revision
      };
      var queryParams = {
        'path': opts['path']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{revision}/diff', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdRevisionPatchGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdRevisionPatchGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the patch of the specified commit against its first parent.  Note that this resource is different in functionality from the `diff` resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional `path=foo/bar.py` query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent's ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the patch is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {String} revision A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdRevisionPatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "snippetsWorkspaceEncodedIdRevisionPatchGet",
    value: function snippetsWorkspaceEncodedIdRevisionPatchGet(workspace, encodedId, revision, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdRevisionPatchGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdRevisionPatchGet");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling snippetsWorkspaceEncodedIdRevisionPatchGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId,
        'revision': revision
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/{revision}/patch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdWatchDelete operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdWatchDelete",
    value: function snippetsWorkspaceEncodedIdWatchDelete(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdWatchDelete");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdWatchDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/watch', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdWatchGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to check if the current user is watching a specific snippet.  Returns 204 (No Content) if the user is watching the snippet and 404 if not.  Hitting this endpoint anonymously always returns a 404.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdWatchGet",
    value: function snippetsWorkspaceEncodedIdWatchGet(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdWatchGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdWatchGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/watch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdWatchPut operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to start watching a specific snippet. Returns 204 (No Content).
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdWatchPut",
    value: function snippetsWorkspaceEncodedIdWatchPut(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdWatchPut");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdWatchPut");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/watch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceEncodedIdWatchersGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all users watching a specific snippet.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} encodedId The snippet id.
     * @param {module:api/SnippetsApi~snippetsWorkspaceEncodedIdWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "snippetsWorkspaceEncodedIdWatchersGet",
    value: function snippetsWorkspaceEncodedIdWatchersGet(workspace, encodedId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceEncodedIdWatchersGet");
      } // verify the required parameter 'encodedId' is set


      if (encodedId === undefined || encodedId === null) {
        throw new _Error["default"]("Missing the required parameter 'encodedId' when calling snippetsWorkspaceEncodedIdWatchersGet");
      }

      var pathParams = {
        'workspace': workspace,
        'encoded_id': encodedId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/snippets/{workspace}/{encoded_id}/watchers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspaceGet operation.
     * @callback module:api/SnippetsApi~snippetsWorkspaceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSnippets} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `/snippets`, except that the result is further filtered by the snippet owner and only those that are owned by `{workspace}` are returned.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username Limits the result to snippets owned by this user.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.role Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
     * @param {module:api/SnippetsApi~snippetsWorkspaceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSnippets}
     */

  }, {
    key: "snippetsWorkspaceGet",
    value: function snippetsWorkspaceGet(workspace, username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspaceGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling snippetsWorkspaceGet");
      }

      var pathParams = {
        'workspace': workspace,
        'username': username
      };
      var queryParams = {
        'role': opts['role']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedSnippets["default"];
      return this.apiClient.callApi('/snippets/{workspace}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the snippetsWorkspacePost operation.
     * @callback module:api/SnippetsApi~snippetsWorkspacePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Snippet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `/snippets`, except that the new snippet will be created under the account specified in the path parameter `{workspace}`.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {module:model/Snippet} body The new snippet object.
     * @param {module:api/SnippetsApi~snippetsWorkspacePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Snippet}
     */

  }, {
    key: "snippetsWorkspacePost",
    value: function snippetsWorkspacePost(workspace, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling snippetsWorkspacePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling snippetsWorkspacePost");
      }

      var pathParams = {
        'workspace': workspace
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Snippet["default"];
      return this.apiClient.callApi('/snippets/{workspace}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SnippetsApi;
}();

exports["default"] = SnippetsApi;