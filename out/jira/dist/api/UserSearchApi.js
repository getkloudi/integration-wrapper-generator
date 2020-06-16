"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FoundUsers = _interopRequireDefault(require("../model/FoundUsers"));

var _PageBeanUser = _interopRequireDefault(require("../model/PageBeanUser"));

var _PageBeanUserKey = _interopRequireDefault(require("../model/PageBeanUserKey"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* UserSearch service.
* @module api/UserSearchApi
* @version 1.4.0
*/
var UserSearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UserSearchApi. 
  * @alias module:api/UserSearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserSearchApi(apiClient) {
    _classCallCheck(this, UserSearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the userAssignableMultiProjectSearchGet operation.
   * @callback module:api/UserSearchApi~userAssignableMultiProjectSearchGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/User>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Find users assignable to projects
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectKeys A list of project keys (case sensitive). This parameter accepts a comma-separated list.
   * @param {Object} opts Optional parameters
   * @param {String} opts.query A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
   * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param {String} opts.accountId A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {module:api/UserSearchApi~userAssignableMultiProjectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/User>}
   */


  _createClass(UserSearchApi, [{
    key: "userAssignableMultiProjectSearchGet",
    value: function userAssignableMultiProjectSearchGet(cloudid, projectKeys, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userAssignableMultiProjectSearchGet");
      } // verify the required parameter 'projectKeys' is set


      if (projectKeys === undefined || projectKeys === null) {
        throw new Error("Missing the required parameter 'projectKeys' when calling userAssignableMultiProjectSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'username': opts['username'],
        'accountId': opts['accountId'],
        'projectKeys': projectKeys,
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/user/assignable/multiProjectSearch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userAssignableSearchGet operation.
     * @callback module:api/UserSearchApi~userAssignableSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users assignable to issues
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `username` or `accountId` is specified.
     * @param {String} opts.sessionId The sessionId of this request. SessionId is the same until the assignee is set.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {String} opts.accountId A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
     * @param {String} opts.project The project ID or project key (case sensitive). Required, unless `issueKey` is specified.
     * @param {String} opts.issueKey The key of the issue. Required, unless `project` is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return. This operation may return less than the maximum number of items even if more are available. The operation fetches users up to the maximum and then, from the fetched users, returns only the users that can be assigned to the issue. (default to 50)
     * @param {Number} opts.actionDescriptorId The ID of the transition.
     * @param {Boolean} opts.recommend  (default to false)
     * @param {module:api/UserSearchApi~userAssignableSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "userAssignableSearchGet",
    value: function userAssignableSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userAssignableSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'sessionId': opts['sessionId'],
        'username': opts['username'],
        'accountId': opts['accountId'],
        'project': opts['project'],
        'issueKey': opts['issueKey'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'actionDescriptorId': opts['actionDescriptorId'],
        'recommend': opts['recommend']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/user/assignable/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userPermissionSearchGet operation.
     * @callback module:api/UserSearchApi~userPermissionSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users with permissions
     * @param {Object} cloudid Cloudi of the project
     * @param {String} permissions A comma separated list of permissions. Permissions can be specified as any:   *  permission returned by [Get all permissions](#api-rest-api-3-permissions-get).  *  custom project permission added by Connect apps.  *  (deprecated) one of the following:           *  ASSIGNABLE\\_USER      *  ASSIGN\\_ISSUE      *  ATTACHMENT\\_DELETE\\_ALL      *  ATTACHMENT\\_DELETE\\_OWN      *  BROWSE      *  CLOSE\\_ISSUE      *  COMMENT\\_DELETE\\_ALL      *  COMMENT\\_DELETE\\_OWN      *  COMMENT\\_EDIT\\_ALL      *  COMMENT\\_EDIT\\_OWN      *  COMMENT\\_ISSUE      *  CREATE\\_ATTACHMENT      *  CREATE\\_ISSUE      *  DELETE\\_ISSUE      *  EDIT\\_ISSUE      *  LINK\\_ISSUE      *  MANAGE\\_WATCHER\\_LIST      *  MODIFY\\_REPORTER      *  MOVE\\_ISSUE      *  PROJECT\\_ADMIN      *  RESOLVE\\_ISSUE      *  SCHEDULE\\_ISSUE      *  SET\\_ISSUE\\_SECURITY      *  TRANSITION\\_ISSUE      *  VIEW\\_VERSION\\_CONTROL      *  VIEW\\_VOTERS\\_AND\\_WATCHERS      *  VIEW\\_WORKFLOW\\_READONLY      *  WORKLOG\\_DELETE\\_ALL      *  WORKLOG\\_DELETE\\_OWN      *  WORKLOG\\_EDIT\\_ALL      *  WORKLOG\\_EDIT\\_OWN      *  WORK\\_ISSUE
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {String} opts.accountId A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
     * @param {String} opts.issueKey The issue key for the issue.
     * @param {String} opts.projectKey The project key for the project (case sensitive).
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/UserSearchApi~userPermissionSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "userPermissionSearchGet",
    value: function userPermissionSearchGet(cloudid, permissions, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userPermissionSearchGet");
      } // verify the required parameter 'permissions' is set


      if (permissions === undefined || permissions === null) {
        throw new Error("Missing the required parameter 'permissions' when calling userPermissionSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'username': opts['username'],
        'accountId': opts['accountId'],
        'permissions': permissions,
        'issueKey': opts['issueKey'],
        'projectKey': opts['projectKey'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/user/permission/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userPickerGet operation.
     * @callback module:api/UserSearchApi~userPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoundUsers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users for picker
     * @param {Object} cloudid Cloudi of the project
     * @param {String} query A query string that is matched against user attributes, such as `displayName`, and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.maxResults The maximum number of items to return. The total number of matched users is returned in `total`. (default to 50)
     * @param {Boolean} opts.showAvatar Include the URI to the user's avatar. (default to false)
     * @param {Array.<String>} opts.exclude This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {Array.<String>} opts.excludeAccountIds A list of account IDs to exclude from the search results. This parameter accepts a comma-separated list. Multiple account IDs can also be provided using an ampersand-separated list. For example, `excludeAccountIds=5b10a2844c20165700ede21g,5b10a0effa615349cb016cd8&excludeAccountIds=5b10ac8d82e05b22cc7d4ef5`. Cannot be provided with `exclude`.
     * @param {String} opts.avatarSize 
     * @param {Boolean} opts.excludeConnectUsers  (default to false)
     * @param {module:api/UserSearchApi~userPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoundUsers}
     */

  }, {
    key: "userPickerGet",
    value: function userPickerGet(cloudid, query, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userPickerGet");
      } // verify the required parameter 'query' is set


      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling userPickerGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': query,
        'maxResults': opts['maxResults'],
        'showAvatar': opts['showAvatar'],
        'exclude': this.apiClient.buildCollectionParam(opts['exclude'], 'multi'),
        'excludeAccountIds': this.apiClient.buildCollectionParam(opts['excludeAccountIds'], 'multi'),
        'avatarSize': opts['avatarSize'],
        'excludeConnectUsers': opts['excludeConnectUsers']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FoundUsers["default"];
      return this.apiClient.callApi('/user/picker', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userSearchGet operation.
     * @callback module:api/UserSearchApi~userSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string that is matched against user attributes ( `displayName`, and `emailAddress`) to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` or `property` is specified.
     * @param {String} opts.username 
     * @param {String} opts.accountId A query string that is matched exactly against a user `accountId`. Required, unless `query` or `property` is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {String} opts.property A query string used to search properties. Property keys are specified by path, so property keys containing dot (.) or equals (=) characters cannot be used. The query string cannot be specified using a JSON object. Example: To search for the value of `nested` from `{\"something\":{\"nested\":1,\"other\":2}}` use `thepropertykey.something.nested=1`. Required, unless `accountId` or `query` is specified.
     * @param {module:api/UserSearchApi~userSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "userSearchGet",
    value: function userSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'username': opts['username'],
        'accountId': opts['accountId'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'property': opts['property']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/user/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userSearchQueryGet operation.
     * @callback module:api/UserSearchApi~userSearchQueryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users by query
     * @param {Object} cloudid Cloudi of the project
     * @param {String} query The search query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
     * @param {module:api/UserSearchApi~userSearchQueryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanUser}
     */

  }, {
    key: "userSearchQueryGet",
    value: function userSearchQueryGet(cloudid, query, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userSearchQueryGet");
      } // verify the required parameter 'query' is set


      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling userSearchQueryGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': query,
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanUser["default"];
      return this.apiClient.callApi('/user/search/query', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userSearchQueryKeyGet operation.
     * @callback module:api/UserSearchApi~userSearchQueryKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanUserKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find user keys by query
     * @param {Object} cloudid Cloudi of the project
     * @param {String} query The search query.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
     * @param {module:api/UserSearchApi~userSearchQueryKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanUserKey}
     */

  }, {
    key: "userSearchQueryKeyGet",
    value: function userSearchQueryKeyGet(cloudid, query, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userSearchQueryKeyGet");
      } // verify the required parameter 'query' is set


      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling userSearchQueryKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': query,
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanUserKey["default"];
      return this.apiClient.callApi('/user/search/query/key', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userViewissueSearchGet operation.
     * @callback module:api/UserSearchApi~userViewissueSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find users with browse permission
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string that is matched against user attributes, such as `displayName` and `emailAddress`, to find relevant users. The string can match the prefix of the attribute's value. For example, *query=john* matches a user with a `displayName` of *John Smith* and a user with an `emailAddress` of *johnson@example.com*. Required, unless `accountId` is specified.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {String} opts.accountId A query string that is matched exactly against user `accountId`. Required, unless `query` is specified.
     * @param {String} opts.issueKey The issue key for the issue. Required, unless `projectKey` is specified.
     * @param {String} opts.projectKey The project key for the project (case sensitive). Required, unless `issueKey` is specified.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/UserSearchApi~userViewissueSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "userViewissueSearchGet",
    value: function userViewissueSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userViewissueSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'username': opts['username'],
        'accountId': opts['accountId'],
        'issueKey': opts['issueKey'],
        'projectKey': opts['projectKey'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/user/viewissue/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserSearchApi;
}();

exports["default"] = UserSearchApi;