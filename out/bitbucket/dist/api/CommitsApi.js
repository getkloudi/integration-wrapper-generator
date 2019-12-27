"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("../model/Commit"));

var _CommitComment = _interopRequireDefault(require("../model/CommitComment"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedCommitComments = _interopRequireDefault(require("../model/PaginatedCommitComments"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Commits service.
* @module api/CommitsApi
* @version 1.1.0
*/
var CommitsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new CommitsApi. 
  * @alias module:api/CommitsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CommitsApi(apiClient) {
    _classCallCheck(this, CommitsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeApproveDelete operation.
   * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeApproveDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Redact the authenticated user's approval of the specified commit.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
   * @param {String} node The commit's SHA1.
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeApproveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(CommitsApi, [{
    key: "repositoriesWorkspaceRepoSlugCommitNodeApproveDelete",
    value: function repositoriesWorkspaceRepoSlugCommitNodeApproveDelete(node, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeApproveDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeApproveDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeApproveDelete");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/approve', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeApprovePost operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeApprovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Participant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve the specified commit as the authenticated user.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeApprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Participant}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeApprovePost",
    value: function repositoriesWorkspaceRepoSlugCommitNodeApprovePost(node, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeApprovePost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeApprovePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeApprovePost");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Participant["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/approve', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommitComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified commit comment.
     * @param {String} node The commit's SHA1.
     * @param {Number} commentId The id of the comment.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CommitComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet(node, commentId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet");
      }

      var pathParams = {
        'node': node,
        'comment_id': commentId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CommitComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeCommentsGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitComments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the commit's comments.  This includes both global and inline comments.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitComments}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeCommentsGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeCommentsGet(node, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsGet");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitComments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeCommentsPost operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates new comment on the specified commit.  To post a reply to an existing comment, include the `parent.id` field:  ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \\   -X POST -u evzijst \\   -H 'Content-Type: application/json' \\   -d '{\"content\": {\"raw\": \"One more thing!\"},        \"parent\": {\"id\": 5728901}}' ```
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/CommitComment} body The specified comment.
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeCommentsPost",
    value: function repositoriesWorkspaceRepoSlugCommitNodeCommentsPost(node, workspace, username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsPost");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugCommitNodeCommentsPost");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified commit.  Example:  ``` $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1 {     \"rendered\": {         \"message\": {         \"raw\": \"Add a GEORDI_OUTPUT_DIR setting\",         \"markup\": \"markdown\",         \"html\": \"<p>Add a GEORDI_OUTPUT_DIR setting</p>\",         \"type\": \"rendered\"         }     },     \"hash\": \"f7591a13eda445d9a9167f98eb870319f4b6c2d8\",     \"repository\": {         \"name\": \"geordi\",         \"type\": \"repository\",         \"full_name\": \"bitbucket/geordi\",         \"links\": {             \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi\"             },             \"html\": {                 \"href\": \"https://bitbucket.org/bitbucket/geordi\"             },             \"avatar\": {                 \"href\": \"https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260\"             }         },         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"     },     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8\"         },         \"comments\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments\"         },         \"patch\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8\"         },         \"html\": {             \"href\": \"https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8\"         },         \"diff\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8\"         },         \"approve\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve\"         },         \"statuses\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses\"         }     },     \"author\": {         \"raw\": \"Brodie Rao <a@b.c>\",         \"type\": \"author\",         \"user\": {             \"display_name\": \"Brodie Rao\",             \"uuid\": \"{9484702e-c663-4afd-aefb-c93a8cd31c28}\",             \"links\": {                 \"self\": {                     \"href\": \"https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D\"                 },                 \"html\": {                     \"href\": \"https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/\"                 },                 \"avatar\": {                     \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128\"                 }             },             \"type\": \"user\",             \"nickname\": \"brodie\",             \"account_id\": \"557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca\"         }     },     \"summary\": {         \"raw\": \"Add a GEORDI_OUTPUT_DIR setting\",         \"markup\": \"markdown\",         \"html\": \"<p>Add a GEORDI_OUTPUT_DIR setting</p>\",         \"type\": \"rendered\"     },     \"participants\": [],     \"parents\": [         {             \"type\": \"commit\",             \"hash\": \"f06941fec4ef6bcb0c2456927a0cf258fa4f899b\",             \"links\": {                 \"self\": {                     \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b\"                 },                 \"html\": {                     \"href\": \"https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b\"                 }             }         }     ],     \"date\": \"2012-07-16T19:37:54+00:00\",     \"message\": \"Add a GEORDI_OUTPUT_DIR setting\",     \"type\": \"commit\" } ```
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitNodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commit}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeGet(node, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeGet");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commit["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitsGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log` and `hg log`. Like these tools, the DAG can be filtered.  ## GET /repositories/{workspace}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to `git log --all` and `hg log`).  ## GET /repositories/{workspace}/{repo_slug}/commits/master  Returns all commits on rev `master` (similar to `git log master`, `hg log master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/dev?exclude=master  Returns all commits on ref `dev`, except those that are reachable on `master` (similar to `git log dev ^master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master  Returns all commits in the repo that are not on master (similar to `git log --all ^master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar  Returns all commits that are on refs `foo` or `bar`, but not on `fu` or `fubar` (similar to `git log foo bar ^fu ^fubar`).  An optional `path` parameter can be specified that will limit the results to commits that affect that path. `path` can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by `path`. It is important to note that if the `path` parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master  Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed the file README.md.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master  Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed to a file in any file in the directory src or its children.  Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitsGet",
    value: function repositoriesWorkspaceRepoSlugCommitsGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitsPost operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `GET /repositories/{workspace}/{repo_slug}/commits`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitsPost",
    value: function repositoriesWorkspaceRepoSlugCommitsPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitsPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commits', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitsRevisionGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsRevisionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log` and `hg log`. Like these tools, the DAG can be filtered.  ## GET /repositories/{workspace}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to `git log --all` and `hg log`).  ## GET /repositories/{workspace}/{repo_slug}/commits/master  Returns all commits on rev `master` (similar to `git log master`, `hg log master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/dev?exclude=master  Returns all commits on ref `dev`, except those that are reachable on `master` (similar to `git log dev ^master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master  Returns all commits in the repo that are not on master (similar to `git log --all ^master`).  ## GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar  Returns all commits that are on refs `foo` or `bar`, but not on `fu` or `fubar` (similar to `git log foo bar ^fu ^fubar`).  An optional `path` parameter can be specified that will limit the results to commits that affect that path. `path` can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by `path`. It is important to note that if the `path` parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master  Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed the file README.md.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master  Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed to a file in any file in the directory src or its children.  Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     * @param {String} revision 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsRevisionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitsRevisionGet",
    value: function repositoriesWorkspaceRepoSlugCommitsRevisionGet(revision, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'revision' is set

      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling repositoriesWorkspaceRepoSlugCommitsRevisionGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitsRevisionGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitsRevisionGet");
      }

      var pathParams = {
        'revision': revision,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commits/{revision}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitsRevisionPost operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsRevisionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `GET /repositories/{workspace}/{repo_slug}/commits`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
     * @param {String} revision 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugCommitsRevisionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitsRevisionPost",
    value: function repositoriesWorkspaceRepoSlugCommitsRevisionPost(revision, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'revision' is set

      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling repositoriesWorkspaceRepoSlugCommitsRevisionPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitsRevisionPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitsRevisionPost");
      }

      var pathParams = {
        'revision': revision,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commits/{revision}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDiffSpecGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugDiffSpecGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Produces a raw, git-style diff for either a single commit (diffed against its first parent), or a revspec of 2 commits (e.g. `3a8b42..9ff173` where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a 3-way diff, or merge diff, is computed. This shows the changes introduced by the left branch (`3a8b42` in our example) as compared againt the right branch (`9ff173`).  This is equivalent to merging the left branch into the right branch and then computing the diff of the merge commit against its first parent (the right branch). This follows the same behavior as pull requests that also show this style of 3-way, or merge diff.  While similar to patches, diffs:  * Don't have a commit header (username, commit message, etc) * Support the optional `path=foo/bar.py` query param to filter   the diff to just that one file diff  The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     * @param {String} spec 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.context Generate diffs with <n> lines of context instead of the usual three
     * @param {String} opts.path Limit the diff to a particular file (this parameter can be repeated for multiple paths)
     * @param {Boolean} opts.ignoreWhitespace Generate diffs that ignore whitespace
     * @param {Boolean} opts.binary Generate diffs that include binary files,true if omitted.
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugDiffSpecGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDiffSpecGet",
    value: function repositoriesWorkspaceRepoSlugDiffSpecGet(spec, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'spec' is set

      if (spec === undefined || spec === null) {
        throw new _Error["default"]("Missing the required parameter 'spec' when calling repositoriesWorkspaceRepoSlugDiffSpecGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDiffSpecGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDiffSpecGet");
      }

      var pathParams = {
        'spec': spec,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'context': opts['context'],
        'path': opts['path'],
        'ignore_whitespace': opts['ignoreWhitespace'],
        'binary': opts['binary']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/diff/{spec}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPatchSpecGet operation.
     * @callback module:api/CommitsApi~repositoriesWorkspaceRepoSlugPatchSpecGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. `3a8b42..9ff173` where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (`3a8b42` and its ancestors in our example). For Mercurial, a single patch is returned that combines the changes of all commits on the source branch.  While similar to diffs, patches:  * Have a commit header (username, commit message, etc) * Do not support the `path=foo/bar.py` query parameter  The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     * @param {String} spec 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/CommitsApi~repositoriesWorkspaceRepoSlugPatchSpecGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPatchSpecGet",
    value: function repositoriesWorkspaceRepoSlugPatchSpecGet(spec, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'spec' is set

      if (spec === undefined || spec === null) {
        throw new _Error["default"]("Missing the required parameter 'spec' when calling repositoriesWorkspaceRepoSlugPatchSpecGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPatchSpecGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPatchSpecGet");
      }

      var pathParams = {
        'spec': spec,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/patch/{spec}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CommitsApi;
}();

exports["default"] = CommitsApi;