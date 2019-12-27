/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import PaginatedSshUserKeys from '../model/PaginatedSshUserKeys';
import SshAccountKey from '../model/SshAccountKey';

/**
* Ssh service.
* @module api/SshApi
* @version 1.1.0
*/
export default class SshApi {

    /**
    * Constructs a new SshApi. 
    * @alias module:api/SshApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    usersUsernameSshKeysDelete(username, keyId, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUsernameSshKeysDelete");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling usersUsernameSshKeysDelete");
      }

      let pathParams = {
        'username': username,
        'key_id': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{username}/ssh-keys/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUsernameSshKeysGet operation.
     * @callback module:api/SshApi~usersUsernameSshKeysGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SshAccountKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific SSH public key belonging to a user.  Example: ``` $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}  {     \"comment\": \"user@myhost\",     \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",     \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",     \"label\": \"\",     \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"         }     },     \"owner\": {         \"display_name\": \"Mark Adams\",         \"links\": {             \"avatar\": {                 \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"             },             \"html\": {                 \"href\": \"https://bitbucket.org/markadams-atl/\"             },             \"self\": {                 \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"             }         },         \"type\": \"user\",         \"username\": \"markadams-atl\",         \"nickname\": \"markadams-atl\",         \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"     },     \"type\": \"ssh_key\",     \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\" } ```
     * @param {String} username The account's username or UUID.
     * @param {String} keyId The SSH key's UUID value.
     * @param {module:api/SshApi~usersUsernameSshKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SshAccountKey}
     */
    usersUsernameSshKeysGet(username, keyId, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUsernameSshKeysGet");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling usersUsernameSshKeysGet");
      }

      let pathParams = {
        'username': username,
        'key_id': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SshAccountKey;
      return this.apiClient.callApi(
        '/users/{username}/ssh-keys/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUsernameSshKeysGet_0 operation.
     * @callback module:api/SshApi~usersUsernameSshKeysGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedSshUserKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of the user's SSH public keys.  Example:  ``` $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys {     \"page\": 1,     \"pagelen\": 10,     \"size\": 1,     \"values\": [         {             \"comment\": \"user@myhost\",             \"created_on\": \"2018-03-14T13:17:05.196003+00:00\",             \"key\": \"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\",             \"label\": \"\",             \"last_used\": \"2018-03-20T13:18:05.196003+00:00\",             \"links\": {                 \"self\": {                     \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\"                 }             },             \"owner\": {                 \"display_name\": \"Mark Adams\",                 \"links\": {                     \"avatar\": {                         \"href\": \"https://bitbucket.org/account/markadams-atl/avatar/32/\"                     },                     \"html\": {                         \"href\": \"https://bitbucket.org/markadams-atl/\"                     },                     \"self\": {                         \"href\": \"https://api.bitbucket.org/2.0/users/markadams-atl\"                     }                 },                 \"type\": \"user\",                 \"username\": \"markadams-atl\",                 \"nickname\": \"markadams-atl\",                 \"uuid\": \"{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\"             },             \"type\": \"ssh_key\",             \"uuid\": \"{b15b6026-9c02-4626-b4ad-b905f99f763a}\"         }     ] } ```
     * @param {String} username The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
     * @param {module:api/SshApi~usersUsernameSshKeysGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedSshUserKeys}
     */
    usersUsernameSshKeysGet_0(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUsernameSshKeysGet_0");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PaginatedSshUserKeys;
      return this.apiClient.callApi(
        '/users/{username}/ssh-keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    usersUsernameSshKeysPost(username, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUsernameSshKeysPost");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SshAccountKey;
      return this.apiClient.callApi(
        '/users/{username}/ssh-keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    usersUsernameSshKeysPut(username, keyId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling usersUsernameSshKeysPut");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling usersUsernameSshKeysPut");
      }

      let pathParams = {
        'username': username,
        'key_id': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SshAccountKey;
      return this.apiClient.callApi(
        '/users/{username}/ssh-keys/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
