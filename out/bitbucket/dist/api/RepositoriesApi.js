"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commitstatus = _interopRequireDefault(require("../model/Commitstatus"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _HookBody = _interopRequireDefault(require("../model/HookBody"));

var _PaginatedCommitstatuses = _interopRequireDefault(require("../model/PaginatedCommitstatuses"));

var _PaginatedFiles = _interopRequireDefault(require("../model/PaginatedFiles"));

var _PaginatedRepositories = _interopRequireDefault(require("../model/PaginatedRepositories"));

var _PaginatedRepositoryPermissions = _interopRequireDefault(require("../model/PaginatedRepositoryPermissions"));

var _PaginatedTreeentries = _interopRequireDefault(require("../model/PaginatedTreeentries"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _Repository = _interopRequireDefault(require("../model/Repository"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Repositories service.
* @module api/RepositoriesApi
* @version 1.1.0
*/
var RepositoriesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new RepositoriesApi. 
  * @alias module:api/RepositoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RepositoriesApi(apiClient) {
    _classCallCheck(this, RepositoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesGet operation.
   * @callback module:api/RepositoriesApi~repositoriesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedRepositories} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns a paginated list of all public repositories.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../meta/filtering) for more details.
   * @param {Object} opts Optional parameters
   * @param {String} opts.after Filter the results to include only repositories create on or after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)  timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
   * @param {module:api/RepositoriesApi~repositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedRepositories}
   */


  _createClass(RepositoriesApi, [{
    key: "repositoriesGet",
    value: function repositoriesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'after': opts['after']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedRepositories["default"];
      return this.apiClient.callApi('/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all repositories owned by the specified account or UUID.  The result can be narrowed down based on the authenticated user's role.  E.g. with `?role=contributor`, only those repositories that the authenticated user has write access to are returned (this includes any repo the user is an admin on, as that implies write access).  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../meta/filtering) for more details.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number of the current results. This is an optional element that is not provided in all responses. (default to 1)
     * @param {module:model/String} opts.role  Filters the result based on the authenticated user's role on each repository.  * **member**: returns repositories to which the user has explicit read access * **contributor**: returns repositories to which the user has explicit write access * **admin**: returns repositories to which the user has explicit administrator access * **owner**: returns all repositories owned by the current user 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositories}
     */

  }, {
    key: "repositoriesWorkspaceGet",
    value: function repositoriesWorkspaceGet(workspace, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceGet");
      }

      var pathParams = {
        'workspace': workspace
      };
      var queryParams = {
        'page': opts['page'],
        'role': opts['role']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedRepositories["default"];
      return this.apiClient.callApi('/repositories/{workspace}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGetCallback
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
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
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
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPutCallback
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
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPostCallback
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
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for a specific commit.
     * @param {String} node The commit's SHA1.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugCommitNodeStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedCommitstatuses}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugCommitNodeStatusesGet",
    value: function repositoriesWorkspaceRepoSlugCommitNodeStatusesGet(node, workspace, repoSlug, callback) {
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
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedCommitstatuses["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{node}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDelete operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the repository. This is an irreversible operation.  This does not affect its forks.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectTo If a repository has been moved to a new location, use this parameter to show users a friendly message in the Bitbucket UI that the repository has moved to a new location. However, a GET to this endpoint will still return a 404. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDelete",
    value: function repositoriesWorkspaceRepoSlugDelete(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'redirect_to': opts['redirectTo']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugFilehistoryNodePathGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugFilehistoryNodePathGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedFiles} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of commits that modified the specified file.  Commits are returned in reverse chronological order. This is roughly equivalent to the following commands:      $ git log --follow --date-order <sha> <path>      $ hg log --follow <path>  By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be turned off using the `?renames=false` query parameter.  Results are returned in descending chronological order by default, and like most endpoints you can [filter and sort](../../../../../../meta/filtering) the response to only provide exactly the data you want.  For example, if you wanted to find commits made before 2011-05-18 against a file named `README.rst`, but you only wanted the path and date, your query would look like this:  ``` $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\\   '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18' {   \"values\": [     {       \"commit\": {         \"date\": \"2011-05-17T07:32:09+00:00\"       },       \"path\": \"README.rst\"     },     {       \"commit\": {         \"date\": \"2011-05-16T06:33:28+00:00\"       },       \"path\": \"README.txt\"     },     {       \"commit\": {         \"date\": \"2011-05-16T06:15:39+00:00\"       },       \"path\": \"README.txt\"     }   ] } ```  In the response you can see that the file was renamed to `README.rst` by the commit made on 2011-05-16, and was previously named `README.txt`.
     * @param {String} node 
     * @param {String} path 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.renames  When `true`, Bitbucket will follow the history of the file across renames (this is the default behavior). This can be turned off by specifying `false`.
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../../../../meta/filtering#query-sort). 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugFilehistoryNodePathGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedFiles}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugFilehistoryNodePathGet",
    value: function repositoriesWorkspaceRepoSlugFilehistoryNodePathGet(node, path, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugFilehistoryNodePathGet");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesWorkspaceRepoSlugFilehistoryNodePathGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugFilehistoryNodePathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugFilehistoryNodePathGet");
      }

      var pathParams = {
        'node': node,
        'path': path,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'renames': opts['renames'],
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedFiles["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/filehistory/{node}/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugForksGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugForksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all the forks of the specified repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugForksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositories}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugForksGet",
    value: function repositoriesWorkspaceRepoSlugForksGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugForksGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugForksGet");
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
      var returnType = _PaginatedRepositories["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/forks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugForksPost operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugForksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new fork of the specified repository.  ## Forking a repository  To create a fork, specify the workspace explicitly as part of the request body:  ``` $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \\   -H 'Content-Type: application/json' -d '{     \"name\": \"bbql_fork\",     \"workspace\": {       \"slug\": \"atlassian\"     } }' ```  To fork a repository into the same workspace, also specify a new `name`.  When you specify a value for `name`, it will also affect the `slug`. The `slug` is reflected in the repository URL of the new fork. It is derived from `name` by substituting non-ASCII characters, removes whitespace, and changes characters to lower case. For example, `My repo` would turn into `my_repo`.  You need contributor access to create new forks within a workspace.   ## Change the properties of a new fork  By default the fork inherits most of its properties from the parent. However, since the optional POST body document follows the normal `repository` JSON schema and you can override the new fork's properties.  Properties that can be overridden include:  * description * fork_policy * language * mainbranch * is_private (note that a private repo's fork_policy might prohibit   the creation of public forks, in which `is_private=False` would fail) * has_issues (to initialize or disable the new repo's issue tracker --   note that the actual contents of the parent repository's issue   tracker are not copied during forking) * has_wiki (to initialize or disable the new repo's wiki --   note that the actual contents of the parent repository's wiki are not   copied during forking) * project (when forking into a private project, the fork's `is_private`   must be `true`)  Properties that cannot be modified include:  * scm * parent * full_name
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Repository} opts.body A repository object. This can be left blank.
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugForksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugForksPost",
    value: function repositoriesWorkspaceRepoSlugForksPost(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugForksPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugForksPost");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/forks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the object describing this repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugGet",
    value: function repositoriesWorkspaceRepoSlugGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugGet");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksGet",
    value: function repositoriesWorkspaceRepoSlugHooksGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksGet");
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
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksPost operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified repository.  Example:  ``` $ curl -X POST -u credentials -H 'Content-Type: application/json'           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d '     {       \"description\": \"Webhook Description\",       \"url\": \"https://example.com/\",       \"active\": true,       \"events\": [         \"repo:push\",         \"issue:created\",         \"issue:updated\"       ]     }' ```  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: `webhook`, `repository` and `issue`.  Also note that the `url` must properly resolve and cannot be an internal, non-routed address.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/HookBody} body 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksPost",
    value: function repositoriesWorkspaceRepoSlugHooksPost(workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugHooksPost");
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
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidDelete operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidDelete",
    value: function repositoriesWorkspaceRepoSlugHooksUidDelete(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidDelete");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the specified repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidGet",
    value: function repositoriesWorkspaceRepoSlugHooksUidGet(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugHooksUidPut operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugHooksUidPut",
    value: function repositoriesWorkspaceRepoSlugHooksUidPut(workspace, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesWorkspaceRepoSlugHooksUidPut");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPost operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new repository.  Note: In order to set the project for the newly created repository, pass in either the project key or the project UUID as part of the request body as shown in the examples below:  ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{     \"scm\": \"git\",     \"project\": {         \"key\": \"MARS\"     } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ```  or  ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{     \"scm\": \"git\",     \"project\": {         \"key\": \"{ba516952-992a-4c2d-acbd-17d502922f96}\"     } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ```  The project must only be assigned for repositories belonging to a team. If the repository owner is a team and the project is not provided, the repository is automatically assigned to the oldest project in the team.  Note: In the examples above, the username `teamsinspace`, and/or the repository name `hablanding` can be replaced by UUIDs.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Repository} opts.body The repository that is to be created. Note that most object elements are optional. Elements \"owner\" and \"full_name\" are ignored as the URL implies them.
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPost",
    value: function repositoriesWorkspaceRepoSlugPost(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPost");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {Number} pullRequestId The id of the pull request.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPut operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a repository, the request body depends on the intent.  ### Creation  See the POST documentation for the repository endpoint for an example of the request body.  ### Update  Note: Changing the `name` of the repository will cause the location to be changed. This is because the URL of the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no conflict, the new location will be returned in the `Location` header of the response.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Repository} opts.body The repository that is to be updated.  Note that the elements \"owner\" and \"full_name\" are ignored since the URL implies them. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPut",
    value: function repositoriesWorkspaceRepoSlugPut(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugPut");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugSrcGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTreeentries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint redirects the client to the directory listing of the root directory on the main branch.  This is equivalent to directly hitting [/2.0/repositories/{username}/{repo_slug}/src/{node}/{path}](src/%7Bnode%7D/%7Bpath%7D) without having to know the name or SHA1 of the repo's main branch.  To create new commits, [POST to this endpoint](#post)
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format Instead of returning the file's contents, return the (json) meta data for it.
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTreeentries}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugSrcGet",
    value: function repositoriesWorkspaceRepoSlugSrcGet(workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugSrcGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugSrcGet");
      }

      var pathParams = {
        'workspace': workspace,
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
      var returnType = _PaginatedTreeentries["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/src', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugSrcNodePathGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcNodePathGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTreeentries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a specified revision.  ## Raw file contents  When `path` points to a file, this endpoint returns the raw contents. The response's Content-Type is derived from the filename extension (not from the contents). The file contents are not processed and no character encoding/recoding is performed and as a result no character encoding is included as part of the Content-Type.  The `Content-Disposition` header will be \"attachment\" to prevent browsers from running executable files.  If the file is managed by LFS, then a 301 redirect pointing to Atlassian's media services platform is returned.  The response includes an ETag that is based on the contents of the file and its attributes. This means that an empty `__init__.py` always returns the same ETag, regardless on the directory it lives in, or the commit it is on.  ## File meta data  When the request for a file path includes the query parameter `?format=meta`, instead of returning the file's raw contents, Bitbucket instead returns the JSON object describing the file's properties:  ```javascript $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta {   \"links\": {     \"self\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py\"     },     \"meta\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta\"     }   },   \"path\": \"tests/__init__.py\",   \"commit\": {     \"type\": \"commit\",     \"hash\": \"eefd5ef5d3df01aed629f650959d6706d54cd335\",     \"links\": {       \"self\": {         \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335\"       },       \"html\": {         \"href\": \"https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335\"       }     }   },   \"attributes\": [],   \"type\": \"commit_file\",   \"size\": 0 } ```  File objects contain an `attributes` element that contains a list of possible modifiers. Currently defined values are:  * `link` -- indicates that the entry is a symbolic link. The contents     of the file represent the path the link points to. * `executable` -- indicates that the file has the executable bit set. * `subrepository` -- indicates that the entry points to a submodule or     subrepo. The contents of the file is the SHA1 of the repository     pointed to. * `binary` -- indicates whether Bitbucket thinks the file is binary.  This endpoint can provide an alternative to how a HEAD request can be used to check for the existence of a file, or a file's size without incurring the overhead of receiving its full contents.   ## Directory listings  When `path` points to a directory instead of a file, the response is a paginated list of directory and file objects in the same order as the underlying SCM system would return them.  For example:  ```javascript $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests {   \"pagelen\": 10,   \"values\": [     {       \"path\": \"tests/test_project\",       \"type\": \"commit_directory\",       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/\"         },         \"meta\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta\"         }       },       \"commit\": {         \"type\": \"commit\",         \"hash\": \"eefd5ef5d3df01aed629f650959d6706d54cd335\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335\"           },           \"html\": {             \"href\": \"https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335\"           }         }       }     },     {       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py\"         },         \"meta\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta\"         }       },       \"path\": \"tests/__init__.py\",       \"commit\": {         \"type\": \"commit\",         \"hash\": \"eefd5ef5d3df01aed629f650959d6706d54cd335\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335\"           },           \"html\": {             \"href\": \"https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335\"           }         }       },       \"attributes\": [],       \"type\": \"commit_file\",       \"size\": 0     }   ],   \"page\": 1,   \"size\": 2 } ```  When listing the contents of the repo's root directory, the use of a trailing slash at the end of the URL is required.  The response by default is not recursive, meaning that only the direct contents of a path are returned. The response does not recurse down into subdirectories. In order to \"walk\" the entire directory tree, the client can either parse each response and follow the `self` links of each `commit_directory` object, or can specify a `max_depth` to recurse to.  The max_depth parameter will do a breadth-first search to return the contents of the subdirectories up to the depth specified. Breadth-first search was chosen as it leads to the least amount of file system operations for git. If the `max_depth` parameter is specified to be too large, the call will time out and return a 555.  Each returned object is either a `commit_file`, or a `commit_directory`, both of which contain a `path` element. This path is the absolute path from the root of the repository. Each object also contains a `commit` object which embeds the commit the file is on. Note that this is merely the commit that was used in the URL. It is *not* the commit that last modified the file.  Directory objects have 2 representations. Their `self` link returns the paginated contents of the directory. The `meta` link on the other hand returns the actual `directory` object itself, e.g.:  ```javascript {   \"path\": \"tests/test_project\",   \"type\": \"commit_directory\",   \"links\": {     \"self\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/\"     },     \"meta\": {       \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta\"     }   },   \"commit\": { ... } } ```  ## Querying, filtering and sorting  Like most API endpoints, this API supports the Bitbucket querying/filtering syntax and so you could filter a directory listing to only include entries that match certain criteria. For instance, to list all binary files over 1kb use the expression:  `size > 1024 and attributes = \"binary\"`  which after urlencoding yields the query string:  `?q=size%3E1024+and+attributes%3D%22binary%22`  To change the ordering of the response, use the `?sort` parameter:  `.../src/eefd5ef/?sort=-size`  See [filtering and sorting](../../../../../../meta/filtering) for more details.
     * @param {String} node 
     * @param {String} path 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. Since Git and Mercurial do not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents.
     * @param {String} opts.q Optional filter expression as per [filtering and sorting](../../../../../../meta/filtering).
     * @param {String} opts.sort Optional sorting parameter as per [filtering and sorting](../../../../../../meta/filtering#query-sort).
     * @param {Number} opts.maxDepth If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1.
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcNodePathGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTreeentries}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugSrcNodePathGet",
    value: function repositoriesWorkspaceRepoSlugSrcNodePathGet(node, path, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'node' is set

      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesWorkspaceRepoSlugSrcNodePathGet");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesWorkspaceRepoSlugSrcNodePathGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugSrcNodePathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugSrcNodePathGet");
      }

      var pathParams = {
        'node': node,
        'path': path,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'format': opts['format'],
        'q': opts['q'],
        'sort': opts['sort'],
        'max_depth': opts['maxDepth']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTreeentries["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/src/{node}/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugSrcPost operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint is used to create new commits in the repository by uploading files.  To add a new file to a repository:  ``` $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \\   -F /repo/path/to/image.png=@image.png ```  This will create a new commit on top of the main branch, inheriting the contents of the main branch, but adding (or overwriting) the `image.png` file to the repository in the `/repo/path/to` directory.  To create a commit that deletes files, use the `files` parameter:  ``` $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \\   -F files=/file/to/delete/1.txt \\   -F files=/file/to/delete/2.txt ```  You can add/modify/delete multiple files in a request. Rename/move a file by deleting the old path and adding the content at the new path.  This endpoint accepts `multipart/form-data` (as in the examples above), as well as `application/x-www-form-urlencoded`.  ## multipart/form-data  A `multipart/form-data` post contains a series of \"form fields\" that identify both the individual files that are being uploaded, as well as additional, optional meta data.  Files are uploaded in file form fields (those that have a `Content-Disposition` parameter) whose field names point to the remote path in the repository where the file should be stored. Path field names are always interpreted to be absolute from the root of the repository, regardless whether the client uses a leading slash (as the above `curl` example did).  File contents are treated as bytes and are not decoded as text.  The commit message, as well as other non-file meta data for the request, is sent along as normal form field elements. Meta data fields share the same namespace as the file objects. For `multipart/form-data` bodies that should not lead to any ambiguity, as the `Content-Disposition` header will contain the `filename` parameter to distinguish between a file named \"message\" and the commit message field.  ## application/x-www-form-urlencoded  It is also possible to upload new files using a simple `application/x-www-form-urlencoded` POST. This can be convenient when uploading pure text files:  ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \\   --data-urlencode \"/path/to/me.txt=Lorem ipsum.\" \\   --data-urlencode \"message=Initial commit\" \\   --data-urlencode \"author=Erik van Zijst <erik.van.zijst@gmail.com>\" ```  There could be a field name clash if a client were to upload a file named \"message\", as this filename clashes with the meta data property for the commit message. To avoid this and to upload files whose names clash with the meta data properties, use a leading slash for the files, e.g. `curl --data-urlencode \"/message=file contents\"`.  When an explicit slash is omitted for a file whose path matches that of a meta data parameter, then it is interpreted as meta data, not as a file.  ## Executables and links  While this API aims to facilitate the most common use cases, it is possible to perform some more advanced operations like creating a new symlink in the repository, or creating an executable file.  Files can be supplied with a `x-attributes` value in the `Content-Disposition` header. For example, to upload an executable file, as well as create a symlink from `README.txt` to `README`:  ``` --===============1438169132528273974== Content-Type: text/plain; charset=\"us-ascii\" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: \"bin/shutdown.sh\" Content-Disposition: attachment; filename=\"shutdown.sh\"; x-attributes:\"executable\"  #!/bin/sh halt  --===============1438169132528273974== Content-Type: text/plain; charset=\"us-ascii\" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: \"/README.txt\" Content-Disposition: attachment; filename=\"README.txt\"; x-attributes:\"link\"  README --===============1438169132528273974==-- ```  Links are files that contain the target path and have `x-attributes:\"link\"` set.  When overwriting links with files, or vice versa, the newly uploaded file determines both the new contents, as well as the attributes. That means uploading a file without specifying `x-attributes=\"link\"` will create a regular file, even if the parent commit hosted a symlink at the same path.  The same applies to executables. When modifying an existing executable file, the form-data file element must include `x-attributes=\"executable\"` in order to preserve the executable status of the file.  Note that this API does not support the creation or manipulation of subrepos / submodules.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.message The commit message. When omitted, Bitbucket uses a canned string.
     * @param {String} opts.author  The raw string to be used as the new commit's author. This string follows the format `Erik van Zijst <evzijst@atlassian.com>`.  When omitted, Bitbucket uses the authenticated user's full/display name and primary email address. Commits cannot be created anonymously.
     * @param {String} opts.parents  A comma-separated list of SHA1s of the commits that should be the parents of the newly created commit.  When omitted, the new commit will inherit from and become a child of the main branch's tip/HEAD commit.  When more than one SHA1 is provided, the first SHA1 identifies the commit from which the content will be inherited.  When more than 2 parents are provided on a Mercurial repo, a 400 is returned as Mercurial does not support \"octopus merges\".
     * @param {String} opts.files  Optional field that declares the files that the request is manipulating. When adding a new file to a repo, or when overwriting an existing file, the client can just upload the full contents of the file in a normal form field and the use of this `files` meta data field is redundant. However, when the `files` field contains a file path that does not have a corresponding, identically-named form field, then Bitbucket interprets that as the client wanting to replace the named file with the null set and the file is deleted instead.  Paths in the repo that are referenced in neither files nor an individual file field, remain unchanged and carry over from the parent to the new commit.  This API does not support renaming as an explicit feature. To rename a file, simply delete it and recreate it under the new name in the same commit. 
     * @param {String} opts.files2  The name of the branch that the new commit should be created on. When omitted, the commit will be created on top of the main branch and will become the main branch's new HEAD/tip.  When a branch name is provided that already exists in the repo, then the commit will be created on top of that branch. In this case, if a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD at the time the request is made. When this is not the case, a 409 is returned.  This API cannot be used to create new anonymous heads in Mercurial repos.  When a new branch name is specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The new commit will be the new branch. When the request also specifies a parent SHA1, then the new commit and branch are created directly on top of the parent commit, regardless of the state of the main branch.  When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it represents the main branch's current HEAD/tip, or a 409 is returned.  When a branch name is not specified and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.  When a branch name is specified and the repo is empty, the new commit will become the repo's root commit and also define the repo's main branch going forward.  This API cannot be used to create additional root commits in non-empty repos.  The branch field cannot be repeated.  As a side effect, this API can be used to create a new branch without modifying any files, by specifying a new branch name in this field, together with parents, but omitting the files fields, while not sending any files. This will create a new commit and branch with the same contents as the first parent. The diff of this commit against its first parent will be empty. 
     * @param {String} opts.branch  The name of the branch that the new commit should be created on. When omitted, the commit will be created on top of the main branch and will become the main branch's new head.  When a branch name is provided that already exists in the repo, then the commit will be created on top of that branch. In this case, *if* a parent SHA1 was also provided, then it is asserted that the parent is the branch's tip/HEAD at the time the request is made. When this is not the case, a 409 is returned.  This API cannot be used to create new anonymous heads in Mercurial repositories.  When a new branch name is specified (that does not already exist in the repo), and no parent SHA1s are provided, then the new commit will inherit from the current main branch's tip/HEAD commit, but not advance the main branch. The new commit will be the new branch. When the request *also* specifies a parent SHA1, then the new commit and branch are created directly on top of the parent commit, regardless of the state of the main branch.  When a branch name is not specified, but a parent SHA1 is provided, then Bitbucket asserts that it represents the main branch's current HEAD/tip, or a 409 is returned.  When a branch name is not specified and the repo is empty, the new commit will become the repo's root commit and will be on the main branch.  When a branch name is specified and the repo is empty, the new commit will become the repo's root commit and also define the repo's main branch going forward.  This API cannot be used to create additional root commits in non-empty repos.  The branch field cannot be repeated.  As a side effect, this API can be used to create a new branch without modifying any files, by specifying a new branch name in this field, together with `parents`, but omitting the `files` fields, while not sending any files. This will create a new commit and branch with the same contents as the first parent. The diff of this commit against its first parent will be empty. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugSrcPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugSrcPost",
    value: function repositoriesWorkspaceRepoSlugSrcPost(workspace, repoSlug, opts, callback) {
      var _queryParams;

      opts = opts || {};
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugSrcPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugSrcPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = (_queryParams = {
        'message': opts['message'],
        'author': opts['author'],
        'parents': opts['parents'],
        'files': opts['files']
      }, _defineProperty(_queryParams, "files", opts['files2']), _defineProperty(_queryParams, 'branch', opts['branch']), _queryParams);
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/src', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugWatchersGet operation.
     * @callback module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all the watchers on the specified repository.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesWorkspaceRepoSlugWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugWatchersGet",
    value: function repositoriesWorkspaceRepoSlugWatchersGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugWatchersGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugWatchersGet");
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
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/watchers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userPermissionsRepositoriesGet operation.
     * @callback module:api/RepositoriesApi~userPermissionsRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositoryPermissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object for each repository the caller has explicit access to and their effective permission — the highest level of permission the caller has. This does not return public repositories that the user was not granted any specific permission in, and does not distinguish between direct and indirect privileges.  Permissions can be:  * `admin` * `write` * `read`  Example:  ``` $ curl https://api.bitbucket.org/2.0/user/permissions/repositories  {   \"pagelen\": 10,   \"values\": [     {       \"type\": \"repository_permission\",       \"user\": {         \"type\": \"user\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"       },       \"repository\": {         \"type\": \"repository\",         \"name\": \"geordi\",         \"full_name\": \"bitbucket/geordi\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"       },       \"permission\": \"admin\"     }   ],   \"page\": 1,   \"size\": 1 } ```  Results may be further [filtered or sorted](../../../meta/filtering) by repository or permission by adding the following query string parameters:  * `q=repository.name=\"geordi\"` or `q=permission>\"read\"` * `sort=repository.name`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort). 
     * @param {module:api/RepositoriesApi~userPermissionsRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositoryPermissions}
     */

  }, {
    key: "userPermissionsRepositoriesGet",
    value: function userPermissionsRepositoriesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedRepositoryPermissions["default"];
      return this.apiClient.callApi('/user/permissions/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RepositoriesApi;
}();

exports["default"] = RepositoriesApi;