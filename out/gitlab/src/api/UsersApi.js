/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Email from '../model/Email';
import Event from '../model/Event';
import SSHKey from '../model/SSHKey';
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';
import UserBasic from '../model/UserBasic';
import UserPublic from '../model/UserPublic';

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    deleteV3UsersId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;
      return this.apiClient.callApi(
        '/v3/users/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteV3UsersIdEmailsEmailId(id, emailId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersIdEmailsEmailId");
      }
      // verify the required parameter 'emailId' is set
      if (emailId === undefined || emailId === null) {
        throw new Error("Missing the required parameter 'emailId' when calling deleteV3UsersIdEmailsEmailId");
      }

      let pathParams = {
        'id': id,
        'email_id': emailId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;
      return this.apiClient.callApi(
        '/v3/users/{id}/emails/{email_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    deleteV3UsersIdKeysKeyId(id, keyId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3UsersIdKeysKeyId");
      }
      // verify the required parameter 'keyId' is set
      if (keyId === undefined || keyId === null) {
        throw new Error("Missing the required parameter 'keyId' when calling deleteV3UsersIdKeysKeyId");
      }

      let pathParams = {
        'id': id,
        'key_id': keyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SSHKey;
      return this.apiClient.callApi(
        '/v3/users/{id}/keys/{key_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getV3Users(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'username': opts['username'],
        'search': opts['search'],
        'active': opts['active'],
        'external': opts['external'],
        'blocked': opts['blocked'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserBasic;
      return this.apiClient.callApi(
        '/v3/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getV3UsersId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserBasic;
      return this.apiClient.callApi(
        '/v3/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getV3UsersIdEmails(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdEmails");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Email;
      return this.apiClient.callApi(
        '/v3/users/{id}/emails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getV3UsersIdEvents(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdEvents");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Event;
      return this.apiClient.callApi(
        '/v3/users/{id}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    getV3UsersIdKeys(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3UsersIdKeys");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SSHKey;
      return this.apiClient.callApi(
        '/v3/users/{id}/keys', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    postV3Users(UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Users");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserPublic;
      return this.apiClient.callApi(
        '/v3/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    postV3UsersIdEmails(id, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3UsersIdEmails");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UsersIdEmails");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Email;
      return this.apiClient.callApi(
        '/v3/users/{id}/emails', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    postV3UsersIdKeys(id, UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postV3UsersIdKeys");
      }
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3UsersIdKeys");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = SSHKey;
      return this.apiClient.callApi(
        '/v3/users/{id}/keys', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    putV3UsersId(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['UNKNOWN_BASE_TYPE'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersId");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserPublic;
      return this.apiClient.callApi(
        '/v3/users/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    putV3UsersIdBlock(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersIdBlock");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/users/{id}/block', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
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
    putV3UsersIdUnblock(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putV3UsersIdUnblock");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/users/{id}/unblock', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}