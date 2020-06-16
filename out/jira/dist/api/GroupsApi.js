"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AddGroupBean = _interopRequireDefault(require("../model/AddGroupBean"));

var _FoundGroups = _interopRequireDefault(require("../model/FoundGroups"));

var _Group = _interopRequireDefault(require("../model/Group"));

var _PageBeanUserDetails = _interopRequireDefault(require("../model/PageBeanUserDetails"));

var _UpdateUserToGroupBean = _interopRequireDefault(require("../model/UpdateUserToGroupBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Groups service.
* @module api/GroupsApi
* @version 1.4.0
*/
var GroupsApi = /*#__PURE__*/function () {
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
   * Callback function to receive the result of the groupDelete operation.
   * @callback module:api/GroupsApi~groupDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove group
   * @param {Object} cloudid Cloudi of the project
   * @param {String} groupname The name of the group.
   * @param {Object} opts Optional parameters
   * @param {String} opts.swapGroup The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion.
   * @param {module:api/GroupsApi~groupDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(GroupsApi, [{
    key: "groupDelete",
    value: function groupDelete(cloudid, groupname, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupDelete");
      } // verify the required parameter 'groupname' is set


      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling groupDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'groupname': groupname,
        'swapGroup': opts['swapGroup']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/group', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupGet operation.
     * @callback module:api/GroupsApi~groupGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group
     * @param {Object} cloudid Cloudi of the project
     * @param {String} groupname The name of the group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand List of fields to expand.
     * @param {module:api/GroupsApi~groupGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "groupGet",
    value: function groupGet(cloudid, groupname, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupGet");
      } // verify the required parameter 'groupname' is set


      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling groupGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'groupname': groupname,
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/group', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupMemberGet operation.
     * @callback module:api/GroupsApi~groupMemberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanUserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users from group
     * @param {Object} cloudid Cloudi of the project
     * @param {String} groupname The name of the group.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeInactiveUsers Include inactive users. (default to false)
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/GroupsApi~groupMemberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanUserDetails}
     */

  }, {
    key: "groupMemberGet",
    value: function groupMemberGet(cloudid, groupname, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupMemberGet");
      } // verify the required parameter 'groupname' is set


      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling groupMemberGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'groupname': groupname,
        'includeInactiveUsers': opts['includeInactiveUsers'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanUserDetails["default"];
      return this.apiClient.callApi('/group/member', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupPost operation.
     * @callback module:api/GroupsApi~groupPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create group
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/AddGroupBean} body The name of the group.
     * @param {module:api/GroupsApi~groupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "groupPost",
    value: function groupPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling groupPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/group', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupUserDelete operation.
     * @callback module:api/GroupsApi~groupUserDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove user from group
     * @param {Object} cloudid Cloudi of the project
     * @param {String} groupname The name of the group.
     * @param {String} accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/GroupsApi~groupUserDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "groupUserDelete",
    value: function groupUserDelete(cloudid, groupname, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupUserDelete");
      } // verify the required parameter 'groupname' is set


      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling groupUserDelete");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling groupUserDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'groupname': groupname,
        'username': opts['username'],
        'accountId': accountId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/group/user', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupUserPost operation.
     * @callback module:api/GroupsApi~groupUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add user to group
     * @param {Object} cloudid Cloudi of the project
     * @param {String} groupname The name of the group (case sensitive).
     * @param {module:model/UpdateUserToGroupBean} body The user to add to the group.
     * @param {module:api/GroupsApi~groupUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */

  }, {
    key: "groupUserPost",
    value: function groupUserPost(cloudid, groupname, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupUserPost");
      } // verify the required parameter 'groupname' is set


      if (groupname === undefined || groupname === null) {
        throw new Error("Missing the required parameter 'groupname' when calling groupUserPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling groupUserPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'groupname': groupname
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Group["default"];
      return this.apiClient.callApi('/group/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the groupsPickerGet operation.
     * @callback module:api/GroupsApi~groupsPickerGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FoundGroups} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find groups
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).
     * @param {String} opts.query The string to find in group names.
     * @param {Array.<String>} opts.exclude A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`.
     * @param {Number} opts.maxResults The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.
     * @param {String} opts.userName This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/GroupsApi~groupsPickerGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FoundGroups}
     */

  }, {
    key: "groupsPickerGet",
    value: function groupsPickerGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupsPickerGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': opts['accountId'],
        'query': opts['query'],
        'exclude': this.apiClient.buildCollectionParam(opts['exclude'], 'multi'),
        'maxResults': opts['maxResults'],
        'userName': opts['userName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FoundGroups["default"];
      return this.apiClient.callApi('/groups/picker', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupsApi;
}();

exports["default"] = GroupsApi;