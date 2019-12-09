"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Tag = _interopRequireDefault(require("../model/Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Refs service.
* @module api/RefsApi
* @version 1.0.0
*/
var RefsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new RefsApi. 
  * @alias module:api/RefsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function RefsApi(apiClient) {
    _classCallCheck(this, RefsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsBranchesGet operation.
   * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} username 
   * @param {String} repoSlug 
   * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */


  _createClass(RefsApi, [{
    key: "repositoriesUsernameRepoSlugRefsBranchesGet",
    value: function repositoriesUsernameRepoSlugRefsBranchesGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsBranchesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsBranchesGet");
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs/branches', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsBranchesNameGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} name 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugRefsBranchesNameGet",
    value: function repositoriesUsernameRepoSlugRefsBranchesNameGet(username, name, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      }

      var pathParams = {
        'username': username,
        'name': name,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs/branches/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugRefsGet",
    value: function repositoriesUsernameRepoSlugRefsGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsGet");
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
     * @param {String} repoSlug  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugRefsTagsGet",
    value: function repositoriesUsernameRepoSlugRefsTagsGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsGet");
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
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs/tags', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsNameGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} name 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugRefsTagsNameGet",
    value: function repositoriesUsernameRepoSlugRefsTagsNameGet(username, name, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new _Error["default"]("Missing the required parameter 'name' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      }

      var pathParams = {
        'username': username,
        'name': name,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs/tags/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsPost operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  ``` {     \"name\" : \"new tag name\",     \"target\" : {         \"hash\" : \"target commit hash\",     } } ```  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.
     * @param {String} username  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
     * @param {String} repoSlug  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
     * @param {module:model/Tag} body 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */

  }, {
    key: "repositoriesUsernameRepoSlugRefsTagsPost",
    value: function repositoriesUsernameRepoSlugRefsTagsPost(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesUsernameRepoSlugRefsTagsPost");
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
      var returnType = _Tag["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/refs/tags', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return RefsApi;
}();

exports["default"] = RefsApi;