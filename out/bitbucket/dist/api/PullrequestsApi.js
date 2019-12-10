"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedCommitstatuses = _interopRequireDefault(require("../model/PaginatedCommitstatuses"));

var _PaginatedPullrequests = _interopRequireDefault(require("../model/PaginatedPullrequests"));

var _Pullrequest = _interopRequireDefault(require("../model/Pullrequest"));

var _PullrequestMergeParameters = _interopRequireDefault(require("../model/PullrequestMergeParameters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pullrequests service.
* @module api/PullrequestsApi
* @version 1.0.0
*/
var PullrequestsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new PullrequestsApi. 
  * @alias module:api/PullrequestsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PullrequestsApi(apiClient) {
    _classCallCheck(this, PullrequestsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesUsernameRepoSlugDefaultReviewersGet operation.
   * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the repository's default reviewers.  These are the users that are automatically added as reviewers on every new pull request that is created.
   * @param {String} username 
   * @param {String} repoSlug 
   * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PullrequestsApi, [{
    key: "repositoriesUsernameRepoSlugDefaultReviewersGet",
    value: function repositoriesUsernameRepoSlugDefaultReviewersGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDefaultReviewersGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDefaultReviewersGet");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/default-reviewers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a default reviewer from the repository.
     * @param {String} username 
     * @param {String} targetUsername 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete",
    value: function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(username, targetUsername, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete");
      } // verify the required parameter 'targetUsername' is set


      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete");
      }

      var pathParams = {
        'username': username,
        'target_username': targetUsername,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/default-reviewers/{target_username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified reviewer.  This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that that specified user is not a default reviewer.
     * @param {String} username 
     * @param {String} targetUsername 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet",
    value: function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(username, targetUsername, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet");
      } // verify the required parameter 'targetUsername' is set


      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet");
      }

      var pathParams = {
        'username': username,
        'target_username': targetUsername,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/default-reviewers/{target_username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds the specified user to the repository's list of default reviewers.  This method is idempotent. Adding a user a second time has no effect.
     * @param {String} username 
     * @param {String} targetUsername 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut",
    value: function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(username, targetUsername, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut");
      } // verify the required parameter 'targetUsername' is set


      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut");
      }

      var pathParams = {
        'username': username,
        'target_username': targetUsername,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/default-reviewers/{target_username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsActivityGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsActivityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's activity log.  This includes comments that were made by the reviewers, updates and approvals.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsActivityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsActivityGet",
    value: function repositoriesUsernameRepoSlugPullrequestsActivityGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsActivityGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsActivityGet");
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPullrequests} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all pull requests on the specified repository. By default only open pull requests are returned. This can be controlled using the `state` query parameter. To retrieve pull requests that are in one of multiple states, repeat the `state` parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Only return pull requests that are in this state. This parameter can be repeated.
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPullrequests}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsGet",
    value: function repositoriesUsernameRepoSlugPullrequestsGet(username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'state': opts['state']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPullrequests["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPost operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new pull request.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Pullrequest} opts.body The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPost",
    value: function repositoriesUsernameRepoSlugPullrequestsPost(username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's activity log.  This includes comments that were made by the reviewers, updates and approvals.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request. 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(username, repoSlug, pullRequestId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet");
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redact the authenticated user's approval of the specified pull request.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/approve', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve the specified pull request as the authenticated user.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/approve', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific pull request comment.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} commentId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(username, pullRequestId, commentId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's comments.  This includes both global, inline comments and replies.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's commits.  These are the commits that are being merged into the destination branch when the pull requests gets accepted.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Declines the pull request.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/decline', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/diff', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified pull request.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request. 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(username, repoSlug, pullRequestId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet");
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
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merges the pull request.
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {Object} opts Optional parameters
     * @param {module:model/PullrequestMergeParameters} opts.body 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(username, pullRequestId, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/merge', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} pullRequestId 
     * @param {String} repoSlug 
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(username, pullRequestId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet");
      }

      var pathParams = {
        'username': username,
        'pull_request_id': pullRequestId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/patch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutates the specified pull request.  This can be used to change the pull request's branches or description.  Only open pull requests can be mutated.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the open pull request. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Pullrequest} opts.body The pull request that is to be updated.
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut",
    value: function repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(username, repoSlug, pullRequestId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} pullRequestId The pull request's id
     * @param {module:api/PullrequestsApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
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

  return PullrequestsApi;
}();

exports["default"] = PullrequestsApi;