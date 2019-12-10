"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AccessRequester = _interopRequireDefault(require("../model/AccessRequester"));

var _Group = _interopRequireDefault(require("../model/Group"));

var _GroupDetail = _interopRequireDefault(require("../model/GroupDetail"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

var _Member = _interopRequireDefault(require("../model/Member"));

var _NotificationSetting = _interopRequireDefault(require("../model/NotificationSetting"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Groups service.
* @module api/GroupsApi
* @version 1.0.0
*/
var GroupsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new GroupsApi. 
  * @alias module:api/GroupsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GroupsApi(apiClient) {
    _classCallCheck(this, GroupsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3GroupsId operation.
   * @callback module:api/GroupsApi~deleteV3GroupsIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove a group.
   * Remove a group.
   * @param {String} id The ID of a group
   * @param {module:api/GroupsApi~deleteV3GroupsIdCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(GroupsApi, [{
    key: "deleteV3GroupsId",
    value: function deleteV3GroupsId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3GroupsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/groups/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3GroupsIdAccessRequestsUserId operation.
     * @callback module:api/GroupsApi~deleteV3GroupsIdAccessRequestsUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Denies an access request for the given user.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The group ID
     * @param {Number} userId The user ID of the access requester
     * @param {module:api/GroupsApi~deleteV3GroupsIdAccessRequestsUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteV3GroupsIdAccessRequestsUserId",
    value: function deleteV3GroupsIdAccessRequestsUserId(id, userId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3GroupsIdAccessRequestsUserId");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteV3GroupsIdAccessRequestsUserId");
      }

      var pathParams = {
        'id': id,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/groups/{id}/access_requests/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3GroupsIdMembersUserId operation.
     * @callback module:api/GroupsApi~deleteV3GroupsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Removes a user from a group or project.
     * Removes a user from a group or project.
     * @param {String} id The group ID
     * @param {Number} userId The user ID of the member
     * @param {module:api/GroupsApi~deleteV3GroupsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteV3GroupsIdMembersUserId",
    value: function deleteV3GroupsIdMembersUserId(id, userId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3GroupsIdMembersUserId");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteV3GroupsIdMembersUserId");
      }

      var pathParams = {
        'id': id,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/groups/{id}/members/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Groups operation.
     * @callback module:api/GroupsApi~getV3GroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a groups list
     * Get a groups list
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.statistics Include project statistics
     * @param {Boolean} opts.allAvailable Show all group that you have access to
     * @param {String} opts.search Search for a specific group
     * @param {module:model/String} opts.orderBy Order by name or path (default to 'name')
     * @param {module:model/String} opts.sort Sort by asc (ascending) or desc (descending) (default to 'asc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Array.<Number>} opts.skipGroups Array of group ids to exclude from list
     * @param {module:api/GroupsApi~getV3GroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "getV3Groups",
    value: function getV3Groups(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'statistics': opts['statistics'],
        'all_available': opts['allAvailable'],
        'search': opts['search'],
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {
        'skip_groups': this.apiClient.buildCollectionParam(opts['skipGroups'], 'csv')
      };
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/v3/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsId operation.
     * @callback module:api/GroupsApi~getV3GroupsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single group, with containing projects.
     * Get a single group, with containing projects.
     * @param {String} id The ID of a group
     * @param {module:api/GroupsApi~getV3GroupsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupDetail}
     */

  }, {
    key: "getV3GroupsId",
    value: function getV3GroupsId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GroupDetail["default"];
      return this.apiClient.callApi('/v3/groups/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdAccessRequests operation.
     * @callback module:api/GroupsApi~getV3GroupsIdAccessRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessRequester} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of access requests for a group.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The group ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/GroupsApi~getV3GroupsIdAccessRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessRequester}
     */

  }, {
    key: "getV3GroupsIdAccessRequests",
    value: function getV3GroupsIdAccessRequests(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdAccessRequests");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccessRequester["default"];
      return this.apiClient.callApi('/v3/groups/{id}/access_requests', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdIssues operation.
     * @callback module:api/GroupsApi~getV3GroupsIdIssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of group issues
     * Get a list of group issues
     * @param {String} id The ID of a group
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Return opened, closed, or all issues (default to 'opened')
     * @param {String} opts.labels Comma-separated list of label names
     * @param {String} opts.milestone Return issues for a specific milestone
     * @param {module:model/String} opts.orderBy Return issues ordered by `created_at` or `updated_at` fields. (default to 'created_at')
     * @param {module:model/String} opts.sort Return issues sorted in `asc` or `desc` order. (default to 'desc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/GroupsApi~getV3GroupsIdIssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "getV3GroupsIdIssues",
    value: function getV3GroupsIdIssues(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdIssues");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'state': opts['state'],
        'labels': opts['labels'],
        'milestone': opts['milestone'],
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/v3/groups/{id}/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdMembers operation.
     * @callback module:api/GroupsApi~getV3GroupsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a list of group or project members viewable by the authenticated user.
     * Gets a list of group or project members viewable by the authenticated user.
     * @param {String} id The group ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.query A query string to search for members
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/GroupsApi~getV3GroupsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */

  }, {
    key: "getV3GroupsIdMembers",
    value: function getV3GroupsIdMembers(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdMembers");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'query': opts['query'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Member["default"];
      return this.apiClient.callApi('/v3/groups/{id}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdMembersUserId operation.
     * @callback module:api/GroupsApi~getV3GroupsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets a member of a group or project.
     * Gets a member of a group or project.
     * @param {String} id The group ID
     * @param {Number} userId The user ID of the member
     * @param {module:api/GroupsApi~getV3GroupsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */

  }, {
    key: "getV3GroupsIdMembersUserId",
    value: function getV3GroupsIdMembersUserId(id, userId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdMembersUserId");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getV3GroupsIdMembersUserId");
      }

      var pathParams = {
        'id': id,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Member["default"];
      return this.apiClient.callApi('/v3/groups/{id}/members/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdNotificationSettings operation.
     * @callback module:api/GroupsApi~getV3GroupsIdNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group level notification level settings, defaults to Global
     * This feature was introduced in GitLab 8.12
     * @param {String} id The group ID or project ID or project NAMESPACE/PROJECT_NAME
     * @param {module:api/GroupsApi~getV3GroupsIdNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSetting}
     */

  }, {
    key: "getV3GroupsIdNotificationSettings",
    value: function getV3GroupsIdNotificationSettings(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdNotificationSettings");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NotificationSetting["default"];
      return this.apiClient.callApi('/v3/groups/{id}/notification_settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsIdProjects operation.
     * @callback module:api/GroupsApi~getV3GroupsIdProjectsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of projects in this group.
     * Get a list of projects in this group.
     * @param {String} id The ID of a group
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.archived Limit by archived status
     * @param {module:model/String} opts.visibility Limit by visibility
     * @param {String} opts.search Return list of authorized projects matching the search criteria
     * @param {module:model/String} opts.orderBy Return projects ordered by field (default to 'created_at')
     * @param {module:model/String} opts.sort Return projects sorted in ascending and descending order (default to 'desc')
     * @param {Boolean} opts.simple Return only the ID, URL, name, and path of each project
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/GroupsApi~getV3GroupsIdProjectsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "getV3GroupsIdProjects",
    value: function getV3GroupsIdProjects(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3GroupsIdProjects");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'archived': opts['archived'],
        'visibility': opts['visibility'],
        'search': opts['search'],
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
        'simple': opts['simple'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/v3/groups/{id}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GroupsOwned operation.
     * @callback module:api/GroupsApi~getV3GroupsOwnedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of owned groups for authenticated user
     * Get list of owned groups for authenticated user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {Boolean} opts.statistics Include project statistics
     * @param {module:api/GroupsApi~getV3GroupsOwnedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "getV3GroupsOwned",
    value: function getV3GroupsOwned(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
        'statistics': opts['statistics']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/v3/groups/owned', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3Groups operation.
     * @callback module:api/GroupsApi~postV3GroupsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a group. Available only for users who can create groups.
     * Create a group. Available only for users who can create groups.
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~postV3GroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "postV3Groups",
    value: function postV3Groups(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Groups");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/v3/groups', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3GroupsIdAccessRequests operation.
     * @callback module:api/GroupsApi~postV3GroupsIdAccessRequestsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AccessRequester} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Requests access for the authenticated user to a group.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The group ID
     * @param {module:api/GroupsApi~postV3GroupsIdAccessRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AccessRequester}
     */

  }, {
    key: "postV3GroupsIdAccessRequests",
    value: function postV3GroupsIdAccessRequests(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3GroupsIdAccessRequests");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AccessRequester["default"];
      return this.apiClient.callApi('/v3/groups/{id}/access_requests', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3GroupsIdMembers operation.
     * @callback module:api/GroupsApi~postV3GroupsIdMembersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a member to a group or project.
     * Adds a member to a group or project.
     * @param {String} id The group ID
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~postV3GroupsIdMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */

  }, {
    key: "postV3GroupsIdMembers",
    value: function postV3GroupsIdMembers(id, UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3GroupsIdMembers");
      } // verify the required parameter 'UNKNOWN_BASE_TYPE' is set


      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3GroupsIdMembers");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Member["default"];
      return this.apiClient.callApi('/v3/groups/{id}/members', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3GroupsIdProjectsProjectId operation.
     * @callback module:api/GroupsApi~postV3GroupsIdProjectsProjectIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer a project to the group namespace. Available only for admin.
     * Transfer a project to the group namespace. Available only for admin.
     * @param {String} id The ID of a group
     * @param {String} projectId The ID or path of the project
     * @param {module:api/GroupsApi~postV3GroupsIdProjectsProjectIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupDetail}
     */

  }, {
    key: "postV3GroupsIdProjectsProjectId",
    value: function postV3GroupsIdProjectsProjectId(id, projectId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3GroupsIdProjectsProjectId");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling postV3GroupsIdProjectsProjectId");
      }

      var pathParams = {
        'id': id,
        'project_id': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _GroupDetail["default"];
      return this.apiClient.callApi('/v3/groups/{id}/projects/{project_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3GroupsId operation.
     * @callback module:api/GroupsApi~putV3GroupsIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a group. Available only for users who can administrate groups.
     * Update a group. Available only for users who can administrate groups.
     * @param {String} id The ID of a group
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~putV3GroupsIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "putV3GroupsId",
    value: function putV3GroupsId(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3GroupsId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/v3/groups/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3GroupsIdAccessRequestsUserIdApprove operation.
     * @callback module:api/GroupsApi~putV3GroupsIdAccessRequestsUserIdApproveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approves an access request for the given user.
     * This feature was introduced in GitLab 8.11.
     * @param {String} id The group ID
     * @param {Number} userId The user ID of the access requester
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~putV3GroupsIdAccessRequestsUserIdApproveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */

  }, {
    key: "putV3GroupsIdAccessRequestsUserIdApprove",
    value: function putV3GroupsIdAccessRequestsUserIdApprove(id, userId, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3GroupsIdAccessRequestsUserIdApprove");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putV3GroupsIdAccessRequestsUserIdApprove");
      }

      var pathParams = {
        'id': id,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Member["default"];
      return this.apiClient.callApi('/v3/groups/{id}/access_requests/{user_id}/approve', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3GroupsIdMembersUserId operation.
     * @callback module:api/GroupsApi~putV3GroupsIdMembersUserIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Member} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a member of a group or project.
     * Updates a member of a group or project.
     * @param {String} id The group ID
     * @param {Number} userId The user ID of the new member
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~putV3GroupsIdMembersUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Member}
     */

  }, {
    key: "putV3GroupsIdMembersUserId",
    value: function putV3GroupsIdMembersUserId(id, userId, UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3GroupsIdMembersUserId");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putV3GroupsIdMembersUserId");
      } // verify the required parameter 'UNKNOWN_BASE_TYPE' is set


      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3GroupsIdMembersUserId");
      }

      var pathParams = {
        'id': id,
        'user_id': userId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Member["default"];
      return this.apiClient.callApi('/v3/groups/{id}/members/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3GroupsIdNotificationSettings operation.
     * @callback module:api/GroupsApi~putV3GroupsIdNotificationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update group level notification level settings, defaults to Global
     * This feature was introduced in GitLab 8.12
     * @param {String} id The group ID or project ID or project NAMESPACE/PROJECT_NAME
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/GroupsApi~putV3GroupsIdNotificationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationSetting}
     */

  }, {
    key: "putV3GroupsIdNotificationSettings",
    value: function putV3GroupsIdNotificationSettings(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3GroupsIdNotificationSettings");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NotificationSetting["default"];
      return this.apiClient.callApi('/v3/groups/{id}/notification_settings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupsApi;
}();

exports["default"] = GroupsApi;