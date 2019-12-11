"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Email = _interopRequireDefault(require("../model/Email"));

var _Event = _interopRequireDefault(require("../model/Event"));

var _SSHKey = _interopRequireDefault(require("../model/SSHKey"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _UserBasic = _interopRequireDefault(require("../model/UserBasic"));

var _UserPublic = _interopRequireDefault(require("../model/UserPublic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.1.0
*/
var UsersApi =
/*#__PURE__*/
function () {
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
   * Callback function to receive the result of the deleteV3UsersId operation.
   * @callback module:api/UsersApi~deleteV3UsersIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Email} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a user. Available only for admins.
   * Delete a user. Available only for admins.
   * @param {Number} id The ID of the user
   * @param {module:api/UsersApi~deleteV3UsersIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Email}
   */


  _createClass(UsersApi, [{
    key: "deleteV3UsersId",
    value: function deleteV3UsersId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersId");
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
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/users/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3UsersIdEmailsEmailId operation.
     * @callback module:api/UsersApi~deleteV3UsersIdEmailsEmailIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an email address of a specified user. Available only for admins.
     * Delete an email address of a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {Number} emailId The ID of the email
     * @param {module:api/UsersApi~deleteV3UsersIdEmailsEmailIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "deleteV3UsersIdEmailsEmailId",
    value: function deleteV3UsersIdEmailsEmailId(id, emailId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersIdEmailsEmailId");
      } // verify the required parameter 'emailId' is set


      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling deleteV3UsersIdEmailsEmailId");
      }

      var pathParams = {
        'id': id,
        'email_id': emailId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/users/{id}/emails/{email_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3UsersIdKeysKeyId operation.
     * @callback module:api/UsersApi~deleteV3UsersIdKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an existing SSH key from a specified user. Available only for admins.
     * Delete an existing SSH key from a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {Number} keyId The ID of the SSH key
     * @param {module:api/UsersApi~deleteV3UsersIdKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "deleteV3UsersIdKeysKeyId",
    value: function deleteV3UsersIdKeysKeyId(id, keyId, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersIdKeysKeyId");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteV3UsersIdKeysKeyId");
      }

      var pathParams = {
        'id': id,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/users/{id}/keys/{key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3Users operation.
     * @callback module:api/UsersApi~getV3UsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserBasic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of users
     * Get the list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.username Get a single user with a specific username
     * @param {String} opts.search Search for a username
     * @param {Boolean} opts.active Filters only active users
     * @param {Boolean} opts.external Filters only external users
     * @param {Boolean} opts.blocked Filters only blocked users
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/UsersApi~getV3UsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserBasic}
     */

  }, {
    key: "getV3Users",
    value: function getV3Users(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'username': opts['username'],
        'search': opts['search'],
        'active': opts['active'],
        'external': opts['external'],
        'blocked': opts['blocked'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserBasic["default"];
      return this.apiClient.callApi('/v3/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UsersId operation.
     * @callback module:api/UsersApi~getV3UsersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserBasic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single user
     * Get a single user
     * @param {Number} id The ID of the user
     * @param {module:api/UsersApi~getV3UsersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserBasic}
     */

  }, {
    key: "getV3UsersId",
    value: function getV3UsersId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersId");
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
      var returnType = _UserBasic["default"];
      return this.apiClient.callApi('/v3/users/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UsersIdEmails operation.
     * @callback module:api/UsersApi~getV3UsersIdEmailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the emails addresses of a specified user. Available only for admins.
     * Get the emails addresses of a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:api/UsersApi~getV3UsersIdEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "getV3UsersIdEmails",
    value: function getV3UsersIdEmails(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdEmails");
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
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/users/{id}/emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UsersIdEvents operation.
     * @callback module:api/UsersApi~getV3UsersIdEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Event} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the contribution events of a specified user
     * This feature was introduced in GitLab 8.13.
     * @param {Number} id The ID of the user
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/UsersApi~getV3UsersIdEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Event}
     */

  }, {
    key: "getV3UsersIdEvents",
    value: function getV3UsersIdEvents(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdEvents");
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
      var returnType = _Event["default"];
      return this.apiClient.callApi('/v3/users/{id}/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UsersIdKeys operation.
     * @callback module:api/UsersApi~getV3UsersIdKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the SSH keys of a specified user. Available only for admins.
     * Get the SSH keys of a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:api/UsersApi~getV3UsersIdKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "getV3UsersIdKeys",
    value: function getV3UsersIdKeys(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdKeys");
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
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/users/{id}/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3Users operation.
     * @callback module:api/UsersApi~postV3UsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPublic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user. Available only for admins.
     * Create a user. Available only for admins.
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/UsersApi~postV3UsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPublic}
     */

  }, {
    key: "postV3Users",
    value: function postV3Users(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Users");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserPublic["default"];
      return this.apiClient.callApi('/v3/users', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3UsersIdEmails operation.
     * @callback module:api/UsersApi~postV3UsersIdEmailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an email address to a specified user. Available only for admins.
     * Add an email address to a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/UsersApi~postV3UsersIdEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "postV3UsersIdEmails",
    value: function postV3UsersIdEmails(id, UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3UsersIdEmails");
      } // verify the required parameter 'UNKNOWN_BASE_TYPE' is set


      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UsersIdEmails");
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
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/users/{id}/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3UsersIdKeys operation.
     * @callback module:api/UsersApi~postV3UsersIdKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an SSH key to a specified user. Available only for admins.
     * Add an SSH key to a specified user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/UsersApi~postV3UsersIdKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "postV3UsersIdKeys",
    value: function postV3UsersIdKeys(id, UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3UsersIdKeys");
      } // verify the required parameter 'UNKNOWN_BASE_TYPE' is set


      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UsersIdKeys");
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
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/users/{id}/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3UsersId operation.
     * @callback module:api/UsersApi~putV3UsersIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPublic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user. Available only for admins.
     * Update a user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/UNKNOWN_BASE_TYPE} opts.UNKNOWN_BASE_TYPE 
     * @param {module:api/UsersApi~putV3UsersIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPublic}
     */

  }, {
    key: "putV3UsersId",
    value: function putV3UsersId(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['UNKNOWN_BASE_TYPE']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersId");
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
      var returnType = _UserPublic["default"];
      return this.apiClient.callApi('/v3/users/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3UsersIdBlock operation.
     * @callback module:api/UsersApi~putV3UsersIdBlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Block a user. Available only for admins.
     * Block a user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:api/UsersApi~putV3UsersIdBlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putV3UsersIdBlock",
    value: function putV3UsersIdBlock(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersIdBlock");
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
      return this.apiClient.callApi('/v3/users/{id}/block', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putV3UsersIdUnblock operation.
     * @callback module:api/UsersApi~putV3UsersIdUnblockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unblock a user. Available only for admins.
     * Unblock a user. Available only for admins.
     * @param {Number} id The ID of the user
     * @param {module:api/UsersApi~putV3UsersIdUnblockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putV3UsersIdUnblock",
    value: function putV3UsersIdUnblock(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersIdUnblock");
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
      return this.apiClient.callApi('/v3/users/{id}/unblock', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;