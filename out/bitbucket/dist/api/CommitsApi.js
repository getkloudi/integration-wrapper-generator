"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("../model/Commit"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Commits service.
* @module api/CommitsApi
* @version 1.0.0
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
   * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeApproveDelete operation.
   * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitNodeApproveDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Redact the authenticated user's approval of the specified commit.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
   * @param {String} username 
   * @param {String} repoSlug 
   * @param {String} node The commit's SHA1.
   * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitNodeApproveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(CommitsApi, [{
    key: "repositoriesUsernameRepoSlugCommitNodeApproveDelete",
    value: function repositoriesUsernameRepoSlugCommitNodeApproveDelete(username, repoSlug, node, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeApproveDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeApproveDelete");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeApproveDelete");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'node': node
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/approve', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeApprovePost operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitNodeApprovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Participant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve the specified commit as the authenticated user.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1.
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitNodeApprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Participant}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitNodeApprovePost",
    value: function repositoriesUsernameRepoSlugCommitNodeApprovePost(username, repoSlug, node, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeApprovePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeApprovePost");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeApprovePost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'node': node
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Participant["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/approve', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitRevisionGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitRevisionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified commit.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} revision The commit's SHA1.
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitRevisionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commit}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitRevisionGet",
    value: function repositoriesUsernameRepoSlugCommitRevisionGet(username, repoSlug, revision, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitRevisionGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitRevisionGet");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling repositoriesUsernameRepoSlugCommitRevisionGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'revision': revision
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commit["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{revision}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified commit comment.
     * @param {String} username 
     * @param {String} sha 
     * @param {String} commentId 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet",
    value: function repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(username, sha, commentId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet");
      } // verify the required parameter 'sha' is set


      if (sha === undefined || sha === null) {
        throw new _Error["default"]("Missing the required parameter 'sha' when calling repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet");
      }

      var pathParams = {
        'username': username,
        'sha': sha,
        'comment_id': commentId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{sha}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitShaCommentsGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitShaCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the commit's comments.  This includes both global and inline comments.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     * @param {String} username 
     * @param {String} sha 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitShaCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitShaCommentsGet",
    value: function repositoriesUsernameRepoSlugCommitShaCommentsGet(username, sha, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitShaCommentsGet");
      } // verify the required parameter 'sha' is set


      if (sha === undefined || sha === null) {
        throw new _Error["default"]("Missing the required parameter 'sha' when calling repositoriesUsernameRepoSlugCommitShaCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitShaCommentsGet");
      }

      var pathParams = {
        'username': username,
        'sha': sha,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{sha}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitsGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log` and `hg log`. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to `git log --all` and `hg log`).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev `master` (similar to `git log master`, `hg log master`).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude=master  Returns all commits on ref `dev`, except those that are reachable on `master` (similar to `git log dev ^master`).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude=master  Returns all commits in the repo that are not on master (similar to `git log --all ^master`).  ## GET /repositories/{username}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar  Returns all commits that are on refs `foo` or `bar`, but not on `fu` or `fubar` (similar to `git log foo bar ^fu ^fubar`).  Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitsGet",
    value: function repositoriesUsernameRepoSlugCommitsGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitsGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitsPost operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `GET /repositories/{username}/{repo_slug}/commits`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitsPost",
    value: function repositoriesUsernameRepoSlugCommitsPost(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitsPost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commits', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitsRevisionGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsRevisionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log` and `hg log`. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to `git log --all` and `hg log`).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev `master` (similar to `git log master`, `hg log master`).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude=master  Returns all commits on ref `dev`, except those that are reachable on `master` (similar to `git log dev ^master`).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude=master  Returns all commits in the repo that are not on master (similar to `git log --all ^master`).  ## GET /repositories/{username}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar  Returns all commits that are on refs `foo` or `bar`, but not on `fu` or `fubar` (similar to `git log foo bar ^fu ^fubar`).  Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     * @param {String} username 
     * @param {String} revision 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsRevisionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitsRevisionGet",
    value: function repositoriesUsernameRepoSlugCommitsRevisionGet(username, revision, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitsRevisionGet");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling repositoriesUsernameRepoSlugCommitsRevisionGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitsRevisionGet");
      }

      var pathParams = {
        'username': username,
        'revision': revision,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commits/{revision}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitsRevisionPost operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsRevisionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Identical to `GET /repositories/{username}/{repo_slug}/commits`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
     * @param {String} username 
     * @param {String} revision 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugCommitsRevisionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitsRevisionPost",
    value: function repositoriesUsernameRepoSlugCommitsRevisionPost(username, revision, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitsRevisionPost");
      } // verify the required parameter 'revision' is set


      if (revision === undefined || revision === null) {
        throw new _Error["default"]("Missing the required parameter 'revision' when calling repositoriesUsernameRepoSlugCommitsRevisionPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitsRevisionPost");
      }

      var pathParams = {
        'username': username,
        'revision': revision,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commits/{revision}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugDiffSpecGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugDiffSpecGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Produces a raw, git-style diff for either a single commit (diffed against its first parent), or a revspec of 2 commits (e.g. `3a8b42..9ff173` where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a 3-way diff, or merge diff, is computed. This shows the changes introduced by the left branch (`3a8b42` in our example) as compared againt the right branch (`9ff173`).  This is equivalent to merging the left branch into the right branch and then computing the diff of the merge commit against its first parent (the right branch). This follows the same behavior as pull requests that also show this style of 3-way, or merge diff.  While similar to patches, diffs:  * Don't have a commit header (username, commit message, etc) * Support the optional `path=foo/bar.py` query param to filter   the diff to just that one file diff  The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     * @param {String} username 
     * @param {String} spec 
     * @param {String} repoSlug 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.context Generate diffs with <n> lines of context instead of the usual three
     * @param {String} opts.path Limit the diff to a single file
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugDiffSpecGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugDiffSpecGet",
    value: function repositoriesUsernameRepoSlugDiffSpecGet(username, spec, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDiffSpecGet");
      } // verify the required parameter 'spec' is set


      if (spec === undefined || spec === null) {
        throw new _Error["default"]("Missing the required parameter 'spec' when calling repositoriesUsernameRepoSlugDiffSpecGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDiffSpecGet");
      }

      var pathParams = {
        'username': username,
        'spec': spec,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'context': opts['context'],
        'path': opts['path']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/diff/{spec}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPatchSpecGet operation.
     * @callback module:api/CommitsApi~repositoriesUsernameRepoSlugPatchSpecGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. `3a8b42..9ff173` where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (`3a8b42` and its ancestors in our example). For Mercurial, a single patch is returned that combines the changes of all commits on the source branch.  While similar to diffs, patches:  * Have a commit header (username, commit message, etc) * Do not support the `path=foo/bar.py` query parameter  The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     * @param {String} username 
     * @param {String} spec 
     * @param {String} repoSlug 
     * @param {module:api/CommitsApi~repositoriesUsernameRepoSlugPatchSpecGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugPatchSpecGet",
    value: function repositoriesUsernameRepoSlugPatchSpecGet(username, spec, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPatchSpecGet");
      } // verify the required parameter 'spec' is set


      if (spec === undefined || spec === null) {
        throw new _Error["default"]("Missing the required parameter 'spec' when calling repositoriesUsernameRepoSlugPatchSpecGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPatchSpecGet");
      }

      var pathParams = {
        'username': username,
        'spec': spec,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/patch/{spec}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CommitsApi;
}();

exports["default"] = CommitsApi;