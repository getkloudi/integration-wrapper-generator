"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ColumnItem = _interopRequireDefault(require("../model/ColumnItem"));

var _GroupName = _interopRequireDefault(require("../model/GroupName"));

var _PageBeanUser = _interopRequireDefault(require("../model/PageBeanUser"));

var _UnrestrictedUserEmail = _interopRequireDefault(require("../model/UnrestrictedUserEmail"));

var _User = _interopRequireDefault(require("../model/User"));

var _UserMigrationBean = _interopRequireDefault(require("../model/UserMigrationBean"));

var _UserWriteBean = _interopRequireDefault(require("../model/UserWriteBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.4.0
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
   * Callback function to receive the result of the userBulkGet operation.
   * @callback module:api/UsersApi~userBulkGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanUser} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Bulk get users
   * @param {Object} cloudid Cloudi of the project
   * @param {Array.<String>} accountId The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 10)
   * @param {Array.<String>} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param {Array.<String>} opts.key This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
   * @param {module:api/UsersApi~userBulkGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanUser}
   */


  _createClass(UsersApi, [{
    key: "userBulkGet",
    value: function userBulkGet(cloudid, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userBulkGet");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling userBulkGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'username': this.apiClient.buildCollectionParam(opts['username'], 'multi'),
        'key': this.apiClient.buildCollectionParam(opts['key'], 'multi'),
        'accountId': this.apiClient.buildCollectionParam(accountId, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanUser["default"];
      return this.apiClient.callApi('/user/bulk', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userBulkMigrationGet operation.
     * @callback module:api/UsersApi~userBulkMigrationGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserMigrationBean>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get account IDs for users
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 10)
     * @param {Array.<String>} opts.username Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present.
     * @param {Array.<String>} opts.key Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present.
     * @param {module:api/UsersApi~userBulkMigrationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserMigrationBean>}
     */

  }, {
    key: "userBulkMigrationGet",
    value: function userBulkMigrationGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userBulkMigrationGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'username': this.apiClient.buildCollectionParam(opts['username'], 'multi'),
        'key': this.apiClient.buildCollectionParam(opts['key'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_UserMigrationBean["default"]];
      return this.apiClient.callApi('/user/bulk/migration', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userColumnsDelete operation.
     * @callback module:api/UsersApi~userColumnsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset user default columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/UsersApi~userColumnsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userColumnsDelete",
    value: function userColumnsDelete(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userColumnsDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': opts['accountId'],
        'username': opts['username']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user/columns', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userColumnsGet operation.
     * @callback module:api/UsersApi~userColumnsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ColumnItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user default columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/UsersApi~userColumnsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ColumnItem>}
     */

  }, {
    key: "userColumnsGet",
    value: function userColumnsGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userColumnsGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': opts['accountId'],
        'username': opts['username']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ColumnItem["default"]];
      return this.apiClient.callApi('/user/columns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userColumnsPut operation.
     * @callback module:api/UsersApi~userColumnsPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set user default columns
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {Array.<String>} opts.body The ID of a column to set. To set multiple columns, send multiple `columns` parameters.
     * @param {module:api/UsersApi~userColumnsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "userColumnsPut",
    value: function userColumnsPut(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userColumnsPut");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': opts['accountId']
      };
      var headerParams = {};
      var formParams = {
        'body': this.apiClient.buildCollectionParam(opts['body'], 'csv')
      };
      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/user/columns', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userDelete operation.
     * @callback module:api/UsersApi~userDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user
     * @param {Object} cloudid Cloudi of the project
     * @param {String} accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {String} opts.key This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/UsersApi~userDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userDelete",
    value: function userDelete(cloudid, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userDelete");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling userDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': accountId,
        'username': opts['username'],
        'key': opts['key']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userEmailBulkGet operation.
     * @callback module:api/UsersApi~userEmailBulkGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnrestrictedUserEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user email bulk
     * @param {Object} cloudid Cloudi of the project
     * @param {Array.<String>} accountId The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).
     * @param {module:api/UsersApi~userEmailBulkGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnrestrictedUserEmail}
     */

  }, {
    key: "userEmailBulkGet",
    value: function userEmailBulkGet(cloudid, accountId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userEmailBulkGet");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling userEmailBulkGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': this.apiClient.buildCollectionParam(accountId, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UnrestrictedUserEmail["default"];
      return this.apiClient.callApi('/user/email/bulk', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userEmailGet operation.
     * @callback module:api/UsersApi~userEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnrestrictedUserEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user email
     * @param {Object} cloudid Cloudi of the project
     * @param {String} accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.
     * @param {module:api/UsersApi~userEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnrestrictedUserEmail}
     */

  }, {
    key: "userEmailGet",
    value: function userEmailGet(cloudid, accountId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userEmailGet");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling userEmailGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': accountId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UnrestrictedUserEmail["default"];
      return this.apiClient.callApi('/user/email', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userGet operation.
     * @callback module:api/UsersApi~userGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
     * @param {String} opts.key This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` includes all groups and nested groups to which the user belongs.  *  `applicationRoles` includes details of all the applications to which the user has access.
     * @param {module:api/UsersApi~userGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "userGet",
    value: function userGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': opts['accountId'],
        'username': opts['username'],
        'key': opts['key'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userGroupsGet operation.
     * @callback module:api/UsersApi~userGroupsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GroupName>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user groups
     * @param {Object} cloudid Cloudi of the project
     * @param {String} accountId The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
     * @param {Object} opts Optional parameters
     * @param {String} opts.username This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {String} opts.key This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
     * @param {module:api/UsersApi~userGroupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GroupName>}
     */

  }, {
    key: "userGroupsGet",
    value: function userGroupsGet(cloudid, accountId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userGroupsGet");
      } // verify the required parameter 'accountId' is set


      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling userGroupsGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'accountId': accountId,
        'username': opts['username'],
        'key': opts['key']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_GroupName["default"]];
      return this.apiClient.callApi('/user/groups', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userPost operation.
     * @callback module:api/UsersApi~userPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create user
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/UserWriteBean} body 
     * @param {module:api/UsersApi~userPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "userPost",
    value: function userPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling userPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling userPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/user', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/UsersApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users default
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return. (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return. (default to 50)
     * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "usersGet",
    value: function usersGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling usersGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersSearchGet operation.
     * @callback module:api/UsersApi~usersSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/User>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return. (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return. (default to 50)
     * @param {module:api/UsersApi~usersSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/User>}
     */

  }, {
    key: "usersSearchGet",
    value: function usersSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling usersSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_User["default"]];
      return this.apiClient.callApi('/users/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;