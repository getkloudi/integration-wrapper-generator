"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Branchrestriction = _interopRequireDefault(require("../model/Branchrestriction"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedBranchrestrictions = _interopRequireDefault(require("../model/PaginatedBranchrestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Branchrestrictions service.
* @module api/BranchrestrictionsApi
* @version 1.2.0
*/
var BranchrestrictionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BranchrestrictionsApi. 
  * @alias module:api/BranchrestrictionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BranchrestrictionsApi(apiClient) {
    _classCallCheck(this, BranchrestrictionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchRestrictionsGet operation.
   * @callback module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedBranchrestrictions} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a paginated list of all branch restrictions on the repository.
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {Object} opts Optional parameters
   * @param {String} opts.kind Branch restrictions of this type
   * @param {String} opts.pattern Branch restrictions applied to branches of this pattern
   * @param {module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedBranchrestrictions}
   */


  _createClass(BranchrestrictionsApi, [{
    key: "repositoriesWorkspaceRepoSlugBranchRestrictionsGet",
    value: function repositoriesWorkspaceRepoSlugBranchRestrictionsGet(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'kind': opts['kind'],
        'pattern': opts['pattern']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedBranchrestrictions["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branch-restrictions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an existing branch restriction rule.
     * @param {String} id The restriction rule's id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete",
    value: function repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete(id, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete");
      }

      var pathParams = {
        'id': id,
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific branch restriction rule.
     * @param {String} id The restriction rule's id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet",
    value: function repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet(id, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet");
      }

      var pathParams = {
        'id': id,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Branchrestriction["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [`POST`](../branch-restrictions#post) for details.
     * @param {String} id The restriction rule's id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/Branchrestriction} body The new version of the existing rule
     * @param {module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut",
    value: function repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut(id, workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new _Error["default"]("Missing the required parameter 'id' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut");
      }

      var pathParams = {
        'id': id,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Branchrestriction["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchRestrictionsPost operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new branch restriction rule for a repository.  `kind` describes what will be restricted. Allowed values include: `push`, `force`, `delete` and `restrict_merges`.  Different kinds of branch restrictions have different requirements:  * `push` and `restrict_merges` require `users` and `groups` to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * `force` can not be specified in a Mercurial repository.  The restriction applies to all branches that match. There are two ways to match a branch. It is configured in `branch_match_kind`:  1. `glob`: Matches a branch against the `pattern`. A `'*'` in    `pattern` will expand to match zero or more characters, and every    other character matches itself. For example, `'foo*'` will match    `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all    branches. 2. `branching_model`: Matches a branch against the repository's    branching model. The `branch_type` controls the type of branch    to match. Allowed values include: `production`, `development`,    `bugfix`, `release`, `feature` and `hotfix`.  The combination of `kind` and match must be unique. This means that two `glob` restrictions in a repository cannot have the same `kind` and `pattern`. Additionally, two `branching_model` restrictions in a repository cannot have the same `kind` and `branch_type`.  `users` and `groups` are lists of users and groups that are except from the restriction. They can only be configured in `push` and `restrict_merges` restrictions. The `push` restriction stops a user pushing to matching branches unless that user is in `users` or is a member of a group in `groups`. The `restrict_merges` stops a user merging pull requests to matching branches unless that user is in `users` or is a member of a group in `groups`. Adding new users or groups to an existing restriction should be done via `PUT`.  Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be surprising.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/Branchrestriction} body The new rule
     * @param {module:api/BranchrestrictionsApi~repositoriesWorkspaceRepoSlugBranchRestrictionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchRestrictionsPost",
    value: function repositoriesWorkspaceRepoSlugBranchRestrictionsPost(workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugBranchRestrictionsPost");
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
      var returnType = _Branchrestriction["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branch-restrictions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BranchrestrictionsApi;
}();

exports["default"] = BranchrestrictionsApi;