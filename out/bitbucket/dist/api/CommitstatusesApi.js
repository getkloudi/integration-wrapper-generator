"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commitstatus = _interopRequireDefault(require("../model/Commitstatus"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedCommitstatuses = _interopRequireDefault(require("../model/PaginatedCommitstatuses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Commitstatuses service.
* @module api/CommitstatusesApi
* @version 1.2.0
*/
var CommitstatusesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CommitstatusesApi. 
  * @alias module:api/CommitstatusesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CommitstatusesApi(apiClient) {
    _classCallCheck(this, CommitstatusesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet operation.
   * @callback module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Commitstatus} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the specified build status for a commit.
   * @param {String} node The commit's SHA1.
   * @param {String} key The build status' unique key
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Commitstatus}
   */


  _createClass(CommitstatusesApi, [{
    key: "repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet(node, key, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new _Error["default"]("Missing the required parameter 'key' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet");
      }

      var pathParams = {
        'node': node,
        'key': key,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut operation.
     * @callback module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commitstatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * `state` * `name` * `description` * `url` * `refname`  The `key` cannot be changed.
     * @param {String} node The commit's SHA1.
     * @param {String} key The build status' unique key
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Commitstatus} opts.body The updated build status object
     * @param {module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut",
    value: function repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut(node, key, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new _Error["default"]("Missing the required parameter 'key' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut");
      }

      var pathParams = {
        'node': node,
        'key': key,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost operation.
     * @callback module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commitstatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use `https://foo.com/builds/{repository.full_name}` which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time. The context variables available are `repository` and `commit`.
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Commitstatus} opts.body The new commit status object.
     * @param {module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost",
    value: function repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost(node, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeStatusesGet operation.
     * @callback module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for a specific commit.
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering). 
     * @param {String} opts.sort Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to `created_on`. 
     * @param {module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeStatusesGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeStatusesGet(node, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugCommitNodeStatusesGet");
      }

      var pathParams = {
        'node': node,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {Number} pullRequestId The id of the pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering). 
     * @param {String} opts.sort Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to `created_on`. 
     * @param {module:api/CommitstatusesApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CommitstatusesApi;
}();

exports["default"] = CommitstatusesApi;