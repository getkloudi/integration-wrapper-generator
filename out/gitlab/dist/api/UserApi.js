"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Email = _interopRequireDefault(require("../model/Email"));

var _SSHKey = _interopRequireDefault(require("../model/SSHKey"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _UserPublic = _interopRequireDefault(require("../model/UserPublic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
var UserApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new UserApi. 
  * @alias module:api/UserApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UserApi(apiClient) {
    _classCallCheck(this, UserApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deleteV3UserEmailsEmailId operation.
   * @callback module:api/UserApi~deleteV3UserEmailsEmailIdCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete an email address from the currently authenticated user
   * Delete an email address from the currently authenticated user
   * @param {Number} emailId The ID of the email
   * @param {module:api/UserApi~deleteV3UserEmailsEmailIdCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(UserApi, [{
    key: "deleteV3UserEmailsEmailId",
    value: function deleteV3UserEmailsEmailId(emailId, callback) {
      var postBody = null; // verify the required parameter 'emailId' is set

      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling deleteV3UserEmailsEmailId");
      }

      var pathParams = {
        'email_id': emailId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/user/emails/{email_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteV3UserKeysKeyId operation.
     * @callback module:api/UserApi~deleteV3UserKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an SSH key from the currently authenticated user
     * Delete an SSH key from the currently authenticated user
     * @param {Number} keyId The ID of the SSH key
     * @param {module:api/UserApi~deleteV3UserKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "deleteV3UserKeysKeyId",
    value: function deleteV3UserKeysKeyId(keyId, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteV3UserKeysKeyId");
      }

      var pathParams = {
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/user/keys/{key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3User operation.
     * @callback module:api/UserApi~getV3UserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserPublic} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the currently authenticated user
     * Get the currently authenticated user
     * @param {module:api/UserApi~getV3UserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserPublic}
     */

  }, {
    key: "getV3User",
    value: function getV3User(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _UserPublic["default"];
      return this.apiClient.callApi('/v3/user', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UserEmails operation.
     * @callback module:api/UserApi~getV3UserEmailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the currently authenticated user's email addresses
     * Get the currently authenticated user's email addresses
     * @param {module:api/UserApi~getV3UserEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "getV3UserEmails",
    value: function getV3UserEmails(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/user/emails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UserEmailsEmailId operation.
     * @callback module:api/UserApi~getV3UserEmailsEmailIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single email address owned by the currently authenticated user
     * Get a single email address owned by the currently authenticated user
     * @param {Number} emailId The ID of the email
     * @param {module:api/UserApi~getV3UserEmailsEmailIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "getV3UserEmailsEmailId",
    value: function getV3UserEmailsEmailId(emailId, callback) {
      var postBody = null; // verify the required parameter 'emailId' is set

      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling getV3UserEmailsEmailId");
      }

      var pathParams = {
        'email_id': emailId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/user/emails/{email_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UserKeys operation.
     * @callback module:api/UserApi~getV3UserKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the currently authenticated user's SSH keys
     * Get the currently authenticated user's SSH keys
     * @param {module:api/UserApi~getV3UserKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "getV3UserKeys",
    value: function getV3UserKeys(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/user/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3UserKeysKeyId operation.
     * @callback module:api/UserApi~getV3UserKeysKeyIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single key owned by currently authenticated user
     * Get a single key owned by currently authenticated user
     * @param {Number} keyId The ID of the SSH key
     * @param {module:api/UserApi~getV3UserKeysKeyIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "getV3UserKeysKeyId",
    value: function getV3UserKeysKeyId(keyId, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling getV3UserKeysKeyId");
      }

      var pathParams = {
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/user/keys/{key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3UserEmails operation.
     * @callback module:api/UserApi~postV3UserEmailsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Email} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new email address to the currently authenticated user
     * Add new email address to the currently authenticated user
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/UserApi~postV3UserEmailsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Email}
     */

  }, {
    key: "postV3UserEmails",
    value: function postV3UserEmails(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UserEmails");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Email["default"];
      return this.apiClient.callApi('/v3/user/emails', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3UserKeys operation.
     * @callback module:api/UserApi~postV3UserKeysCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SSHKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new SSH key to the currently authenticated user
     * Add a new SSH key to the currently authenticated user
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/UserApi~postV3UserKeysCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SSHKey}
     */

  }, {
    key: "postV3UserKeys",
    value: function postV3UserKeys(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UserKeys");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SSHKey["default"];
      return this.apiClient.callApi('/v3/user/keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UserApi;
}();

exports["default"] = UserApi;