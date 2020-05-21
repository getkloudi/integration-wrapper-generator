"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedUsers = _interopRequireDefault(require("../model/PaginatedUsers"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _User = _interopRequireDefault(require("../model/User"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.2.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the teamsUsernameRepositoriesGet operation.
   * @callback module:api/UsersApi~teamsUsernameRepositoriesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
   * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
   * @param {module:api/UsersApi~teamsUsernameRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */


  _createClass(UsersApi, [{
    key: "teamsUsernameRepositoriesGet",
    value: function teamsUsernameRepositoriesGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameRepositoriesGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/teams/{username}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userEmailsEmailGet operation.
     * @callback module:api/UsersApi~userEmailsEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns details about a specific one of the authenticated user's email addresses.  Details describe whether the address has been confirmed by the user and whether it is the user's primary address or not.
     * @param {String} email 
     * @param {module:api/UsersApi~userEmailsEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "userEmailsEmailGet",
    value: function userEmailsEmailGet(email, callback) {
      var postBody = null; // verify the required parameter 'email' is set

      if (email === undefined || email === null) {
        throw new _Error["default"]("Missing the required parameter 'email' when calling userEmailsEmailGet");
      }

      var pathParams = {
        'email': email
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/user/emails/{email}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userEmailsGet operation.
     * @callback module:api/UsersApi~userEmailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.
     * @param {module:api/UsersApi~userEmailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "userEmailsGet",
    value: function userEmailsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/user/emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UsersApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the currently logged in user.
     * @param {module:api/UsersApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "userGet",
    value: function userGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameFollowersGet operation.
     * @callback module:api/UsersApi~usersUsernameFollowersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of accounts that are following this user.  This operation has been deprecated due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/) for details.
     * @param {String} username The account's username
     * @param {module:api/UsersApi~usersUsernameFollowersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "usersUsernameFollowersGet",
    value: function usersUsernameFollowersGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameFollowersGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/users/{username}/followers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameFollowingGet operation.
     * @callback module:api/UsersApi~usersUsernameFollowingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of accounts this user is following.  This operation has been deprecated due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/) for details.
     * @param {String} username The user's username
     * @param {module:api/UsersApi~usersUsernameFollowingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "usersUsernameFollowingGet",
    value: function usersUsernameFollowingGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameFollowingGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedUsers["default"];
      return this.apiClient.callApi('/users/{username}/following', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameGet operation.
     * @callback module:api/UsersApi~usersUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the public information associated with a user account.  If the user's profile is private, `location`, `website` and `created_on` elements are omitted.  Note that the user object returned by this operation is changing significantly, due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
     * @param {String} username The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * @param {module:api/UsersApi~usersUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "usersUsernameGet",
    value: function usersUsernameGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/users/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksGet operation.
     * @callback module:api/UsersApi~usersUsernameHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/UsersApi~usersUsernameHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "usersUsernameHooksGet",
    value: function usersUsernameHooksGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedWebhookSubscriptions["default"];
      return this.apiClient.callApi('/users/{username}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksPost operation.
     * @callback module:api/UsersApi~usersUsernameHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one's own account, not that of others.  Also, note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/UsersApi~usersUsernameHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksPost",
    value: function usersUsernameHooksPost(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksPost");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidDelete operation.
     * @callback module:api/UsersApi~usersUsernameHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/UsersApi~usersUsernameHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersUsernameHooksUidDelete",
    value: function usersUsernameHooksUidDelete(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidDelete");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidGet operation.
     * @callback module:api/UsersApi~usersUsernameHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given user account.  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/UsersApi~usersUsernameHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksUidGet",
    value: function usersUsernameHooksUidGet(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidGet");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameHooksUidPut operation.
     * @callback module:api/UsersApi~usersUsernameHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`  Note that the username path parameter has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). Use the account's UUID or account_id instead.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/UsersApi~usersUsernameHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "usersUsernameHooksUidPut",
    value: function usersUsernameHooksUidPut(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling usersUsernameHooksUidPut");
      }

      var pathParams = {
        'username': username,
        'uid': uid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WebhookSubscription["default"];
      return this.apiClient.callApi('/users/{username}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameRepositoriesGet operation.
     * @callback module:api/UsersApi~usersUsernameRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/UsersApi~usersUsernameRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "usersUsernameRepositoriesGet",
    value: function usersUsernameRepositoriesGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameRepositoriesGet");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/users/{username}/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;