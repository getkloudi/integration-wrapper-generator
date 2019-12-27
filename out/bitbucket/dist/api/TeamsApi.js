"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedTeams = _interopRequireDefault(require("../model/PaginatedTeams"));

var _PaginatedUsers = _interopRequireDefault(require("../model/PaginatedUsers"));

var _PaginatedWebhookSubscriptions = _interopRequireDefault(require("../model/PaginatedWebhookSubscriptions"));

var _Team = _interopRequireDefault(require("../model/Team"));

var _User = _interopRequireDefault(require("../model/User"));

var _WebhookSubscription = _interopRequireDefault(require("../model/WebhookSubscription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Teams service.
* @module api/TeamsApi
* @version 1.1.0
*/
var TeamsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new TeamsApi. 
  * @alias module:api/TeamsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TeamsApi(apiClient) {
    _classCallCheck(this, TeamsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the teamsGet operation.
   * @callback module:api/TeamsApi~teamsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedTeams} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all the teams that the authenticated user is associated with.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.role  Filters the teams based on the authenticated user's role on each team.  * **member**: returns a list of all the teams which the caller is a member of   at least one team group or repository owned by the team * **contributor**: returns a list of teams which the caller has write access   to at least one repository owned by the team * **admin**: returns a list teams which the caller has team administrator access 
   * @param {module:api/TeamsApi~teamsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedTeams}
   */


  _createClass(TeamsApi, [{
    key: "teamsGet",
    value: function teamsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'role': opts['role']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTeams["default"];
      return this.apiClient.callApi('/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameFollowersGet operation.
     * @callback module:api/TeamsApi~teamsUsernameFollowersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of accounts that are following this team.
     * @param {String} username The team's username
     * @param {module:api/TeamsApi~teamsUsernameFollowersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "teamsUsernameFollowersGet",
    value: function teamsUsernameFollowersGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameFollowersGet");
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
      return this.apiClient.callApi('/teams/{username}/followers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameFollowingGet operation.
     * @callback module:api/TeamsApi~teamsUsernameFollowingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of accounts this team is following.
     * @param {String} username The team's username
     * @param {module:api/TeamsApi~teamsUsernameFollowingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedUsers}
     */

  }, {
    key: "teamsUsernameFollowingGet",
    value: function teamsUsernameFollowingGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameFollowingGet");
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
      return this.apiClient.callApi('/teams/{username}/following', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameGet operation.
     * @callback module:api/TeamsApi~teamsUsernameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Team} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the public information associated with a team.  If the team's profile is private, `location`, `website` and `created_on` elements are omitted.
     * @param {String} username The team's username or UUID.
     * @param {module:api/TeamsApi~teamsUsernameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Team}
     */

  }, {
    key: "teamsUsernameGet",
    value: function teamsUsernameGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameGet");
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
      var returnType = _Team["default"];
      return this.apiClient.callApi('/teams/{username}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksGet operation.
     * @callback module:api/TeamsApi~teamsUsernameHooksGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedWebhookSubscriptions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of webhooks installed on this team.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~teamsUsernameHooksGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedWebhookSubscriptions}
     */

  }, {
    key: "teamsUsernameHooksGet",
    value: function teamsUsernameHooksGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksGet");
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
      return this.apiClient.callApi('/teams/{username}/hooks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksPost operation.
     * @callback module:api/TeamsApi~teamsUsernameHooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~teamsUsernameHooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksPost",
    value: function teamsUsernameHooksPost(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksPost");
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
      return this.apiClient.callApi('/teams/{username}/hooks', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidDelete operation.
     * @callback module:api/TeamsApi~teamsUsernameHooksUidDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified webhook subscription from the given team account.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/TeamsApi~teamsUsernameHooksUidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsUsernameHooksUidDelete",
    value: function teamsUsernameHooksUidDelete(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidDelete");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidDelete");
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
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidGet operation.
     * @callback module:api/TeamsApi~teamsUsernameHooksUidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the webhook with the specified id installed on the given team account.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id.
     * @param {module:api/TeamsApi~teamsUsernameHooksUidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksUidGet",
    value: function teamsUsernameHooksUidGet(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidGet");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidGet");
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
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameHooksUidPut operation.
     * @callback module:api/TeamsApi~teamsUsernameHooksUidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the specified webhook subscription.  The following properties can be mutated:  * `description` * `url` * `active` * `events`
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} uid The installed webhook's id
     * @param {module:api/TeamsApi~teamsUsernameHooksUidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookSubscription}
     */

  }, {
    key: "teamsUsernameHooksUidPut",
    value: function teamsUsernameHooksUidPut(username, uid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameHooksUidPut");
      } // verify the required parameter 'uid' is set


      if (uid === undefined || uid === null) {
        throw new _Error["default"]("Missing the required parameter 'uid' when calling teamsUsernameHooksUidPut");
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
      return this.apiClient.callApi('/teams/{username}/hooks/{uid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameMembersGet operation.
     * @callback module:api/TeamsApi~teamsUsernameMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all members of the specified team. Any member of any of the team's groups is considered a member of the team. This includes users in groups that may not actually have access to any of the team's repositories.  This operation has been deprecated due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/) for details.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~teamsUsernameMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "teamsUsernameMembersGet",
    value: function teamsUsernameMembersGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernameMembersGet");
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
      return this.apiClient.callApi('/teams/{username}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernameRepositoriesGet operation.
     * @callback module:api/TeamsApi~teamsUsernameRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~teamsUsernameRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
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
     * Callback function to receive the result of the usersUsernameMembersGet operation.
     * @callback module:api/TeamsApi~usersUsernameMembersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all members of the specified team. Any member of any of the team's groups is considered a member of the team. This includes users in groups that may not actually have access to any of the team's repositories.  This operation has been deprecated due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/) for details.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~usersUsernameMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "usersUsernameMembersGet",
    value: function usersUsernameMembersGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameMembersGet");
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
      return this.apiClient.callApi('/users/{username}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameRepositoriesGet operation.
     * @callback module:api/TeamsApi~usersUsernameRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {module:api/TeamsApi~usersUsernameRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
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

  return TeamsApi;
}();

exports["default"] = TeamsApi;