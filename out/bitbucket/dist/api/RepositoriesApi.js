"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commitstatus = _interopRequireDefault(require("../model/Commitstatus"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedCommitstatuses = _interopRequireDefault(require("../model/PaginatedCommitstatuses"));

var _PaginatedRepositories = _interopRequireDefault(require("../model/PaginatedRepositories"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _Repository = _interopRequireDefault(require("../model/Repository"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Repositories service.
* @module api/RepositoriesApi
* @version 1.0.0
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
     * Callback function to receive the result of the repositoriesUsernameGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all repositories owned by the specified account or UUID.  The result can be narrowed down based on the authenticated user's role.  E.g. with `?role=contributor`, only those repositories that the authenticated user has write access to are returned (this includes any repo the user is an admin on, as that implies write access).  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../meta/filtering) for more details.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.role  Filters the result based on the authenticated user's role on each repository.  * **member**: returns repositories to which the user has explicit read access * **contributor**: returns repositories to which the user has explicit write access * **admin**: returns repositories to which the user has explicit administrator access * **owner**: returns all repositories owned by the current user 
     * @param {module:api/RepositoriesApi~repositoriesUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositories}
     */

  }, {
    key: "repositoriesUsernameGet",
    value: function repositoriesUsernameGet(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameGet");
      }

      var pathParams = {
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
      var returnType = _PaginatedRepositories["default"];
      return this.apiClient.callApi('/repositories/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGetCallback
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
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Commitstatus}
     */

  }, {
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
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPutCallback
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
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Commitstatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use `https://foo.com/builds/{repository.full_name}` which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time. The context variables available are `repository` and `commit`.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesBuildPostCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for a specific commit.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} node The commit's SHA1
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugCommitNodeStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the repositoriesUsernameRepoSlugDelete operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the repository. This is an irreversible operation.  This does not affect its forks.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugDelete",
    value: function repositoriesUsernameRepoSlugDelete(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugDelete");
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugForksGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugForksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositories} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all the forks of the specified repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugForksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositories}
     */

  }, {
    key: "repositoriesUsernameRepoSlugForksGet",
    value: function repositoriesUsernameRepoSlugForksGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugForksGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugForksGet");
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
      var returnType = _PaginatedRepositories["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/forks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the object describing this repository.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesUsernameRepoSlugGet",
    value: function repositoriesUsernameRepoSlugGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugGet");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugHooksGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "repositoriesUsernameRepoSlugHooksGet",
    value: function repositoriesUsernameRepoSlugHooksGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugHooksGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugHooksGet");
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
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugHooksPost operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified repository.  Example:  ``` $ curl -X POST -u credentials -H 'Content-Type: application/json'           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d '     {       \"description\": \"Webhook Description\",       \"url\": \"https://example.com/\",       \"active\": true,       \"events\": [         \"repo:push\",         \"issue:created\",         \"issue:updated\"       ]     }' ```  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: `webhook`, `repository` and `issue`.  Also note that the `url` must properly resolve and cannot be an internal, non-routed address.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesUsernameRepoSlugHooksPost",
    value: function repositoriesUsernameRepoSlugHooksPost(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugHooksPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugHooksPost");
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
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugHooksUidDelete operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} uid The installed webhook's id
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugHooksUidDelete",
    value: function repositoriesUsernameRepoSlugHooksUidDelete(username, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugHooksUidDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesUsernameRepoSlugHooksUidDelete");
      }

      var pathParams = {
        'username': username,
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugHooksUidGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the specified repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesUsernameRepoSlugHooksUidGet",
    value: function repositoriesUsernameRepoSlugHooksUidGet(username, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugHooksUidGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesUsernameRepoSlugHooksUidGet");
      }

      var pathParams = {
        'username': username,
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugHooksUidPut operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} uid The installed webhook's id
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "repositoriesUsernameRepoSlugHooksUidPut",
    value: function repositoriesUsernameRepoSlugHooksUidPut(username, repoSlug, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugHooksUidPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling repositoriesUsernameRepoSlugHooksUidPut");
      }

      var pathParams = {
        'username': username,
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPost operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new repository.  Note: In order to set the project for the newly created repository, pass in either the project key or the project UUID as part of the request body as shown in the examples below:  ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{     \"scm\": \"git\",     \"project\": {         \"key\": \"MARS\"     } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ```  or  ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{     \"scm\": \"git\",     \"project\": {         \"key\": \"{ba516952-992a-4c2d-acbd-17d502922f96}\"     } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ```  The project must only be assigned for repositories belonging to a team. If the repository owner is a team and the project is not provided, the repository is automatically assigned to the oldest project in the team.  Note: In the examples above, the username `teamsinspace`, and/or the repository name `hablanding` can be replaced by UUIDs.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Repository} opts.body The repository that is to be created. Note that most object elements are optional. Elements \"owner\" and \"full_name\" are ignored as the URL implies them.
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPost",
    value: function repositoriesUsernameRepoSlugPost(username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPost");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedCommitstatuses} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all statuses (e.g. build results) for the given pull request.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} pullRequestId The pull request's id
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
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
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugPut operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Repository} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a repository, the request body depends on the intent.  ### Creation  See the POST documentation for the repository endpoint for an example of the request body.  ### Update  Note: Changing the `name` of the repository will cause the location to be changed. This is because the URL of the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no conflict, the new location will be returned in the `Location` header of the response.
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {module:model/Repository} opts.body The repository that is to be updated.  Note that the elements \"owner\" and \"full_name\" are ignored since the URL implies them. 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Repository}
     */

  }, {
    key: "repositoriesUsernameRepoSlugPut",
    value: function repositoriesUsernameRepoSlugPut(username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugPut");
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
      var returnType = _Repository["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugSrcNodePathGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} node 
     * @param {String} path 
     * @param {String} repoSlug 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format Instead of returning the file's contents, return the (json) meta data for it.
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugSrcNodePathGet",
    value: function repositoriesUsernameRepoSlugSrcNodePathGet(username, node, path, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'node' is set


      if (node === undefined || node === null) {
        throw new _Error["default"]("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }

      var pathParams = {
        'username': username,
        'node': node,
        'path': path,
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/src/{node}/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugWatchersGet operation.
     * @callback module:api/RepositoriesApi~repositoriesUsernameRepoSlugWatchersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all the watchers on the specified repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RepositoriesApi~repositoriesUsernameRepoSlugWatchersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugWatchersGet",
    value: function repositoriesUsernameRepoSlugWatchersGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugWatchersGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugWatchersGet");
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/watchers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RepositoriesApi;
}();

exports["default"] = RepositoriesApi;