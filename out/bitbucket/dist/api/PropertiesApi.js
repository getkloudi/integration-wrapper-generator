"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Properties service.
* @module api/PropertiesApi
* @version 1.2.0
*/
var PropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PropertiesApi. 
  * @alias module:api/PropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PropertiesApi(apiClient) {
    _classCallCheck(this, PropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteCommitHostedPropertyValue operation.
   * @callback module:api/PropertiesApi~deleteCommitHostedPropertyValueCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete an application property value stored against a commit.
   * @param {String} username The account.
   * @param {String} repoSlug The repository.
   * @param {String} commit The commit.
   * @param {String} appKey The key of the Connect app.
   * @param {String} propertyName The name of the property.
   * @param {module:api/PropertiesApi~deleteCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PropertiesApi, [{
    key: "deleteCommitHostedPropertyValue",
    value: function deleteCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteCommitHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deleteCommitHostedPropertyValue");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling deleteCommitHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteCommitHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteCommitHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletePullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deletePullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deletePullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePullRequestHostedPropertyValue",
    value: function deletePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deletePullRequestHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deletePullRequestHostedPropertyValue");
      } // verify the required parameter 'pullrequestId' is set


      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling deletePullRequestHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deletePullRequestHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deletePullRequestHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deleteRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deleteRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRepositoryHostedPropertyValue",
    value: function deleteRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteRepositoryHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deleteRepositoryHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteRepositoryHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteRepositoryHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deleteUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deleteUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteUserHostedPropertyValue",
    value: function deleteUserHostedPropertyValue(username, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUserHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteUserHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteUserHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/properties/{app_key}/{property_name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getCommitHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getCommitHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getCommitHostedPropertyValue",
    value: function getCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getCommitHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getCommitHostedPropertyValue");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling getCommitHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getCommitHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getCommitHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getPullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getPullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getPullRequestHostedPropertyValue",
    value: function getPullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getPullRequestHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getPullRequestHostedPropertyValue");
      } // verify the required parameter 'pullrequestId' is set


      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling getPullRequestHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getPullRequestHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getPullRequestHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getRepositoryHostedPropertyValue",
    value: function getRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getRepositoryHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getRepositoryHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getRepositoryHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getRepositoryHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the retrieveUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~retrieveUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~retrieveUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "retrieveUserHostedPropertyValue",
    value: function retrieveUserHostedPropertyValue(username, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling retrieveUserHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling retrieveUserHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling retrieveUserHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/properties/{app_key}/{property_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateCommitHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateCommitHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateCommitHostedPropertyValue",
    value: function updateCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateCommitHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updateCommitHostedPropertyValue");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling updateCommitHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateCommitHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateCommitHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updatePullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updatePullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updatePullRequestHostedPropertyValue",
    value: function updatePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updatePullRequestHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updatePullRequestHostedPropertyValue");
      } // verify the required parameter 'pullrequestId' is set


      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling updatePullRequestHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updatePullRequestHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updatePullRequestHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateRepositoryHostedPropertyValue",
    value: function updateRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateRepositoryHostedPropertyValue");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updateRepositoryHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateRepositoryHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateRepositoryHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateUserHostedPropertyValue",
    value: function updateUserHostedPropertyValue(username, appKey, propertyName, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUserHostedPropertyValue");
      } // verify the required parameter 'appKey' is set


      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateUserHostedPropertyValue");
      } // verify the required parameter 'propertyName' is set


      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateUserHostedPropertyValue");
      }

      var pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/properties/{app_key}/{property_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PropertiesApi;
}();

exports["default"] = PropertiesApi;