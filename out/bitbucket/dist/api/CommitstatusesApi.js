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
* @version 1.1.0
*/
var CommitstatusesApi =
/*#__PURE__*/
function () {
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
   * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet operation.
   * @callback module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Commitstatus} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the specified build status for a commit.
   * @param {String} username 
   * @param {String} repoSlug 
   * @param {String} node The commit's SHA1
   * @param {String} key The build status' unique key
   * @param {module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Commitstatus}
   */


  _createClass(CommitstatusesApi, [{
    key: "repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet",
    value: function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(username, repoSlug, node, key, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new _Error["default"]("Missing the required parameter 'key' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'node': node,
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/statuses/build/{key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut operation.
     * @callback module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commitstatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * `state` * `name` * `description` * `url` * `refname`  The `key` cannot be changed.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1
     * @param {String} key The commit status' unique key
     * @param {Object} opts Optional parameters
     * @param {module:model/Commitstatus} opts.body The updated build status object
     * @param {module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut",
    value: function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(username, repoSlug, node, key, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new _Error["default"]("Missing the required parameter 'key' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'node': node,
        'key': key
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/statuses/build/{key}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost operation.
     * @callback module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commitstatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use `https://foo.com/builds/{repository.full_name}` which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time. The context variables available are `repository` and `commit`.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1
     * @param {module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost",
    value: function repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(username, repoSlug, node, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost");
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
      var returnType = _Commitstatus["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/statuses/build', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeStatusesGet operation.
     * @callback module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for a specific commit.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1
     * @param {module:api/CommitstatusesApi~repositoriesUsernameRepoSlugCommitNodeStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesUsernameRepoSlugCommitNodeStatusesGet",
    value: function repositoriesUsernameRepoSlugCommitNodeStatusesGet(username, repoSlug, node, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugCommitNodeStatusesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugCommitNodeStatusesGet");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugCommitNodeStatusesGet");
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
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/commit/{node}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/CommitstatusesApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} pullRequestId The pull request's id
     * @param {module:api/CommitstatusesApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(username, repoSlug, pullRequestId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pull_request_id': pullRequestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CommitstatusesApi;
}();

exports["default"] = CommitstatusesApi;