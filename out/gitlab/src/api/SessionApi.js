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
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';
import UserWithPrivateToken from '../model/UserWithPrivateToken';

/**
* Session service.
* @module api/SessionApi
* @version 1.1.0
*/
export default class SessionApi {

    /**
    * Constructs a new SessionApi. 
    * @alias module:api/SessionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the postV3Session operation.
     * @callback module:api/SessionApi~postV3SessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserWithPrivateToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login to get token
     * Login to get token
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/SessionApi~postV3SessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserWithPrivateToken}
     */
    postV3Session(UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Session");
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
      let returnType = UserWithPrivateToken;
      return this.apiClient.callApi(
        '/v3/session', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
