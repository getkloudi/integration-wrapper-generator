"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedSshUserKeys = _interopRequireDefault(require("../model/PaginatedSshUserKeys"));

var _SshAccountKey = _interopRequireDefault(require("../model/SshAccountKey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Ssh service.
* @module api/SshApi
* @version 1.2.0
*/
var SshApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SshApi. 
  * @alias module:api/SshApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SshApi(apiClient) {
    _classCallCheck(this, SshApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the usersUsernameSshKeysDelete operation.
   * @callback module:api/SshApi~usersUsernameSshKeysDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Deletes a specific SSH public key from a user's account  Example: ``` $ curl -X DELETE https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a} ```
   * @param {String} username The account's username or UUID.
   * @param {String} keyId The SSH key's UUID value.
   * @param {module:api/SshApi~usersUsernameSshKeysDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(SshApi, [{
    key: "usersUsernameSshKeysDelete",
    value: function usersUsernameSshKeysDelete(username, keyId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameSshKeysDelete");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling usersUsernameSshKeysDelete");
      }

      var pathParams = {
        'username': username,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/ssh-keys/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameSshKeysGet operation.
     * @callback module:api/SshApi~usersUsernameSshKeysGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSshUserKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the user's SSH public keys.  Example:  ``` $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys {     \"page\": 1,     \"pagelen\": 10,     \"size\": 1,     \"values\": [         {             \"comment\": \"user@myhost\",             \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",             \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",             \"label\": \"\",             \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",             \"links\": {                 \"self\": {                     \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"                 }             },             \"owner\": {                 \"display_name\": \"Mark Adams\",                 \"links\": {                     \"avatar\": {                         \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/markadams-atl/\"                     },                     \"self\": {                         \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"                     }                 },                 \"type\": \"user\",                 \"username\": \"markadams-atl\",                 \"nickname\": \"markadams-atl\",                 \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"             },             \"type\": \"ssh_key\",             \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"         }     ] } ```
     * @param {String} username The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * @param {module:api/SshApi~usersUsernameSshKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSshUserKeys}
     */

  }, {
    key: "usersUsernameSshKeysGet",
    value: function usersUsernameSshKeysGet(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameSshKeysGet");
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
      var returnType = _PaginatedSshUserKeys["default"];
      return this.apiClient.callApi('/users/{username}/ssh-keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameSshKeysGet_0 operation.
     * @callback module:api/SshApi~usersUsernameSshKeysGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/SshAccountKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific SSH public key belonging to a user.  Example: ``` $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}  {     \"comment\": \"user@myhost\",     \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",     \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",     \"label\": \"\",     \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"         }     },     \"owner\": {         \"display_name\": \"Mark Adams\",         \"links\": {             \"avatar\": {                 \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"             },             \"html\": {                 \"href\": \"https://bitbucket.org/markadams-atl/\"             },             \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"             }         },         \"type\": \"user\",         \"username\": \"markadams-atl\",         \"nickname\": \"markadams-atl\",         \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"     },     \"type\": \"ssh_key\",     \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\" } ```
     * @param {String} username The account's username or UUID.
     * @param {String} keyId The SSH key's UUID value.
     * @param {module:api/SshApi~usersUsernameSshKeysGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshAccountKey}
     */

  }, {
    key: "usersUsernameSshKeysGet_0",
    value: function usersUsernameSshKeysGet_0(username, keyId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameSshKeysGet_0");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling usersUsernameSshKeysGet_0");
      }

      var pathParams = {
        'username': username,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SshAccountKey["default"];
      return this.apiClient.callApi('/users/{username}/ssh-keys/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameSshKeysPost operation.
     * @callback module:api/SshApi~usersUsernameSshKeysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshAccountKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Adds a new SSH public key to the specified user account and returns the resulting key.  Example: ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{\"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost\"}' https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys  {     \"comment\": \"user@myhost\",     \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",     \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",     \"label\": \"\",     \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"         }     },     \"owner\": {         \"display_name\": \"Mark Adams\",         \"links\": {             \"avatar\": {                 \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"             },             \"html\": {                 \"href\": \"https://bitbucket.org/markadams-atl/\"             },             \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"             }         },         \"type\": \"user\",         \"username\": \"markadams-atl\",         \"nickname\": \"markadams-atl\",         \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"     },     \"type\": \"ssh_key\",     \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\" } ```
     * @param {String} username The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * @param {Object} opts Optional parameters
     * @param {module:model/SshAccountKey} opts.body The new SSH key object. Note that the username property has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * @param {module:api/SshApi~usersUsernameSshKeysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshAccountKey}
     */

  }, {
    key: "usersUsernameSshKeysPost",
    value: function usersUsernameSshKeysPost(username, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameSshKeysPost");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SshAccountKey["default"];
      return this.apiClient.callApi('/users/{username}/ssh-keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersUsernameSshKeysPut operation.
     * @callback module:api/SshApi~usersUsernameSshKeysPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshAccountKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a specific SSH public key on a user's account  Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again.  Example: ``` $ curl -X PUT -H \"Content-Type: application/json\" -d '{\"label\": \"Work key\"}' https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}  {     \"comment\": \"\",     \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",     \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",     \"label\": \"Work key\",     \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"         }     },     \"owner\": {         \"display_name\": \"Mark Adams\",         \"links\": {             \"avatar\": {                 \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"             },             \"html\": {                 \"href\": \"https://bitbucket.org/markadams-atl/\"             },             \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"             }         },         \"type\": \"user\",         \"username\": \"markadams-atl\",         \"nickname\": \"markadams-atl\",         \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"     },     \"type\": \"ssh_key\",     \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\" } ```
     * @param {String} username The account's username or UUID.
     * @param {String} keyId The SSH key's UUID value.
     * @param {Object} opts Optional parameters
     * @param {module:model/SshAccountKey} opts.body The updated SSH key object
     * @param {module:api/SshApi~usersUsernameSshKeysPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshAccountKey}
     */

  }, {
    key: "usersUsernameSshKeysPut",
    value: function usersUsernameSshKeysPut(username, keyId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling usersUsernameSshKeysPut");
      } // verify the required parameter 'keyId' is set


      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling usersUsernameSshKeysPut");
      }

      var pathParams = {
        'username': username,
        'key_id': keyId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SshAccountKey["default"];
      return this.apiClient.callApi('/users/{username}/ssh-keys/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SshApi;
}();

exports["default"] = SshApi;