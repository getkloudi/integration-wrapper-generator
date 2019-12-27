"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedCommitstatuses = _interopRequireDefault(require("../model/PaginatedCommitstatuses"));

var _PaginatedPullrequestComments = _interopRequireDefault(require("../model/PaginatedPullrequestComments"));

var _PaginatedPullrequests = _interopRequireDefault(require("../model/PaginatedPullrequests"));

var _Participant = _interopRequireDefault(require("../model/Participant"));

var _Pullrequest = _interopRequireDefault(require("../model/Pullrequest"));

var _PullrequestComment = _interopRequireDefault(require("../model/PullrequestComment"));

var _PullrequestMergeParameters = _interopRequireDefault(require("../model/PullrequestMergeParameters"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pullrequests service.
* @module api/PullrequestsApi
* @version 1.1.0
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
   * Callback function to receive the result of the getPullrequestsForCommit operation.
   * @callback module:api/PullrequestsApi~getPullrequestsForCommitCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedPullrequests} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
   * @param {String} username The account; either the UUID in curly braces, or the account_id
   * @param {String} repoSlug The repository; either the UUID in curly braces, or the slug
   * @param {String} commit The SHA1 of the commit
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page Which page to retrieve (default to 1)
   * @param {Number} opts.pagelen How many pull requests to retrieve per page (default to 30)
   * @param {module:api/PullrequestsApi~getPullrequestsForCommitCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedPullrequests}
   */


  _createClass(PullrequestsApi, [{
    key: "getPullrequestsForCommit",
    value: function getPullrequestsForCommit(username, repoSlug, commit, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPullrequestsForCommit");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPullrequestsForCommit");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling getPullrequestsForCommit");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit
      };
      var queryParams = {
        'page': opts['page'],
        'pagelen': opts['pagelen']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPullrequests["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the pullrequestsSelectedUserGet operation.
     * @callback module:api/PullrequestsApi~pullrequestsSelectedUserGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPullrequests} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all pull requests authored by the specified user.  By default only open pull requests are returned. This can be controlled using the `state` query parameter. To retrieve pull requests that are in one of multiple states, repeat the `state` parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.
     * @param {String} selectedUser This can either be the username of the pull request author, the author's UUID surrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Only return pull requests that are in this state. This parameter can be repeated.
     * @param {module:api/PullrequestsApi~pullrequestsSelectedUserGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPullrequests}
     */

  }, {
    key: "pullrequestsSelectedUserGet",
    value: function pullrequestsSelectedUserGet(selectedUser, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'selectedUser' is set

      if (selectedUser === undefined || selectedUser === null) {
        throw new _Error["default"]("Missing the required parameter 'selectedUser' when calling pullrequestsSelectedUserGet");
      }

      var pathParams = {
        'selected_user': selectedUser
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
      return this.apiClient.callApi('/pullrequests/{selected_user}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDefaultReviewersGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the repository's default reviewers.  These are the users that are automatically added as reviewers on every new pull request that is created.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDefaultReviewersGet",
    value: function repositoriesWorkspaceRepoSlugDefaultReviewersGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDefaultReviewersGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDefaultReviewersGet");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/default-reviewers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a default reviewer from the repository.
     * @param {String} targetUsername This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete",
    value: function repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete(targetUsername, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'targetUsername' is set

      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete");
      }

      var pathParams = {
        'target_username': targetUsername,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified reviewer.  This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that that specified user is not a default reviewer.
     * @param {String} targetUsername This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet",
    value: function repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet(targetUsername, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'targetUsername' is set

      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet");
      }

      var pathParams = {
        'target_username': targetUsername,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds the specified user to the repository's list of default reviewers.  This method is idempotent. Adding a user a second time has no effect.
     * @param {String} targetUsername This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut",
    value: function repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut(targetUsername, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'targetUsername' is set

      if (targetUsername === undefined || targetUsername === null) {
        throw new _Error["default"]("Missing the required parameter 'targetUsername' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut");
      }

      var pathParams = {
        'target_username': targetUsername,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsActivityGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsActivityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's activity log.  This includes comments that were made by the reviewers, updates and approvals.  Comments created on a file or a line of code have an inline property.  Comment example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"comment\": {                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\"                     }                 },                 \"deleted\": false,                 \"pullrequest\": {                     \"type\": \"pullrequest\",                     \"id\": 5695,                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                         }                     },                     \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"                 },                 \"content\": {                     \"raw\": \"inline with to a dn from lines\",                     \"markup\": \"markdown\",                     \"html\": \"<p>inline with to a dn from lines</p>\",                     \"type\": \"rendered\"                 },                 \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"updated_on\": \"2019-09-27T00:33:46.055384+00:00\",                 \"inline\": {                     \"context_lines\": \"\",                     \"to\": null,                     \"path\": \"\",                     \"outdated\": false,                     \"from\": 211                 },                 \"type\": \"pullrequest_comment\",                 \"id\": 118571088             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```  Updates include a state property of OPEN, MERGED, or DECLINED.  Update example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"update\": {                 \"description\": \"\",                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\",                 \"destination\": {                     \"commit\": {                         \"type\": \"commit\",                         \"hash\": \"6a2c16e4a152\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\"                             }                         }                     },                     \"branch\": {                         \"name\": \"master\"                     },                     \"repository\": {                         \"name\": \"Atlaskit-MK-2\",                         \"type\": \"repository\",                         \"full_name\": \"atlassian/atlaskit-mk-2\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"                             },                             \"avatar\": {                                 \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"                             }                         },                         \"uuid\": \"{}\"                     }                 },                 \"reason\": \"\",                 \"source\": {                     \"commit\": {                         \"type\": \"commit\",                         \"hash\": \"728c8bad1813\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\"                             }                         }                     },                     \"branch\": {                         \"name\": \"username/NONE-add-onClick-prop-for-accessibility\"                     },                     \"repository\": {                         \"name\": \"Atlaskit-MK-2\",                         \"type\": \"repository\",                         \"full_name\": \"atlassian/atlaskit-mk-2\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"                             },                             \"avatar\": {                                 \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"                             }                         },                         \"uuid\": \"{}\"                     }                 },                 \"state\": \"OPEN\",                 \"author\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"date\": \"2019-05-10T06:48:25.305565+00:00\"             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```  Approval example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"approval\": {                 \"date\": \"2019-09-27T00:37:19.849534+00:00\",                 \"pullrequest\": {                     \"type\": \"pullrequest\",                     \"id\": 5695,                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                         }                     },                     \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"                 },                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 }             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```
     * @param {Number} pullRequestId The id of the pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsActivityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsActivityGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsActivityGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsActivityGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsActivityGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsActivityGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPullrequests} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all pull requests on the specified repository.  By default only open pull requests are returned. This can be controlled using the `state` query parameter. To retrieve pull requests that are in one of multiple states, repeat the `state` parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Only return pull requests that are in this state. This parameter can be repeated.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPullrequests}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsGet(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsGet");
      }

      var pathParams = {
        'workspace': workspace,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPost operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new pull request where the destination repository is this repository and the author is the authenticated user.  The minimum required fields to create a pull request are `title` and `source`, specified by a branch name.  ``` curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \\     -u my-username:my-password \\     --request POST \\     --header 'Content-Type: application/json' \\     --data '{         \"title\": \"My Title\",         \"source\": {             \"branch\": {                 \"name\": \"staging\"             }         }     }' ```  If the pull request's `destination` is not specified, it will default to the `repository.mainbranch`. To open a pull request to a different branch, say from a feature branch to a staging branch, specify a `destination` (same format as the `source`):  ``` {     \"title\": \"My Title\",     \"source\": {         \"branch\": {             \"name\": \"my-feature-branch\"         }     },     \"destination\": {         \"branch\": {             \"name\": \"staging\"         }     } } ```  Reviewers can be specified by adding an array of user objects as the `reviewers` property.  ``` {     \"title\": \"My Title\",     \"source\": {         \"branch\": {             \"name\": \"my-feature-branch\"         }     },     \"reviewers\": [         {             \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"         }     ] } ```  Other fields:  * `description` - a string * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Pullrequest} opts.body The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPost",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPost(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's activity log.  This includes comments that were made by the reviewers, updates and approvals.  Comments created on a file or a line of code have an inline property.  Comment example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"comment\": {                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\"                     }                 },                 \"deleted\": false,                 \"pullrequest\": {                     \"type\": \"pullrequest\",                     \"id\": 5695,                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                         }                     },                     \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"                 },                 \"content\": {                     \"raw\": \"inline with to a dn from lines\",                     \"markup\": \"markdown\",                     \"html\": \"<p>inline with to a dn from lines</p>\",                     \"type\": \"rendered\"                 },                 \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"updated_on\": \"2019-09-27T00:33:46.055384+00:00\",                 \"inline\": {                     \"context_lines\": \"\",                     \"to\": null,                     \"path\": \"\",                     \"outdated\": false,                     \"from\": 211                 },                 \"type\": \"pullrequest_comment\",                 \"id\": 118571088             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```  Updates include a state property of OPEN, MERGED, or DECLINED.  Update example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"update\": {                 \"description\": \"\",                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\",                 \"destination\": {                     \"commit\": {                         \"type\": \"commit\",                         \"hash\": \"6a2c16e4a152\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\"                             }                         }                     },                     \"branch\": {                         \"name\": \"master\"                     },                     \"repository\": {                         \"name\": \"Atlaskit-MK-2\",                         \"type\": \"repository\",                         \"full_name\": \"atlassian/atlaskit-mk-2\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"                             },                             \"avatar\": {                                 \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"                             }                         },                         \"uuid\": \"{}\"                     }                 },                 \"reason\": \"\",                 \"source\": {                     \"commit\": {                         \"type\": \"commit\",                         \"hash\": \"728c8bad1813\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\"                             }                         }                     },                     \"branch\": {                         \"name\": \"username/NONE-add-onClick-prop-for-accessibility\"                     },                     \"repository\": {                         \"name\": \"Atlaskit-MK-2\",                         \"type\": \"repository\",                         \"full_name\": \"atlassian/atlaskit-mk-2\",                         \"links\": {                             \"self\": {                                 \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"                             },                             \"html\": {                                 \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"                             },                             \"avatar\": {                                 \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"                             }                         },                         \"uuid\": \"{}\"                     }                 },                 \"state\": \"OPEN\",                 \"author\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 },                 \"date\": \"2019-05-10T06:48:25.305565+00:00\"             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```  Approval example: ``` {     \"pagelen\": 20,     \"values\": [         {             \"approval\": {                 \"date\": \"2019-09-27T00:37:19.849534+00:00\",                 \"pullrequest\": {                     \"type\": \"pullrequest\",                     \"id\": 5695,                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                         }                     },                     \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"                 },                 \"user\": {                     \"display_name\": \"Name Lastname\",                     \"uuid\": \"{}\",                     \"links\": {                         \"self\": {                             \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"                         },                         \"html\": {                             \"href\": \"https://bitbucket.org/%7B%7D/\"                         },                         \"avatar\": {                             \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"                         }                     },                     \"type\": \"user\",                     \"nickname\": \"Name\",                     \"account_id\": \"\"                 }             },             \"pull_request\": {                 \"type\": \"pullrequest\",                 \"id\": 5695,                 \"links\": {                     \"self\": {                         \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"                     }                 },                 \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"             }         }     ] } ```
     * @param {Number} pullRequestId The id of the pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redact the authenticated user's approval of the specified pull request.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Participant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve the specified pull request as the authenticated user.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Participant}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a specific pull request comment.
     * @param {String} pullRequestId 
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete(pullRequestId, commentId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullrequestComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific pull request comment.
     * @param {String} pullRequestId 
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullrequestComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(pullRequestId, commentId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      var returnType = _PullrequestComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullrequestComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific pull request comment.
     * @param {String} pullRequestId 
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/PullrequestComment} body The contents of the updated comment.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullrequestComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut(pullRequestId, commentId, workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'comment_id': commentId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullrequestComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPullrequestComments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's comments.  This includes both global, inline comments and replies.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPullrequestComments}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet(workspace, repoSlug, pullRequestId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'pull_request_id': pullRequestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPullrequestComments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PullrequestComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new pull request comment.  Returns the newly created pull request comment.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request.
     * @param {module:model/PullrequestComment} body The comment object.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PullrequestComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost(workspace, repoSlug, pullRequestId, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'pull_request_id': pullRequestId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PullrequestComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the pull request's commits.  These are the commits that are being merged into the destination branch when the pull requests gets accepted.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Declines the pull request.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redirects to the [repository diff](../../diff/%7Bspec%7D) with the revspec that corresponds to the pull request.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D) with the revspec that corresponds to the pull request.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet(workspace, repoSlug, pullRequestId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet");
      }

      var pathParams = {
        'workspace': workspace,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merges the pull request.
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/PullrequestMergeParameters} opts.body 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost(pullRequestId, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pullrequest["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} pullRequestId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet(pullRequestId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'pullRequestId' is set

      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet");
      }

      var pathParams = {
        'pull_request_id': pullRequestId,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pullrequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mutates the specified pull request.  This can be used to change the pull request's branches or description.  Only open pull requests can be mutated.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} pullRequestId The id of the pull request.
     * @param {Object} opts Optional parameters
     * @param {module:model/Pullrequest} opts.body The pull request that is to be updated.
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pullrequest}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut(workspace, repoSlug, pullRequestId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut");
      } // verify the required parameter 'pullRequestId' is set


      if (pullRequestId === undefined || pullRequestId === null) {
        throw new _Error["default"]("Missing the required parameter 'pullRequestId' when calling repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut");
      }

      var pathParams = {
        'workspace': workspace,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {Number} pullRequestId The id of the pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/PullrequestsApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet",
    value: function repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug, callback) {
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
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PullrequestsApi;
}();

exports["default"] = PullrequestsApi;