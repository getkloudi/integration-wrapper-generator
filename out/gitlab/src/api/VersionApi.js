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

/**
* Version service.
* @module api/VersionApi
* @version 1.0.0
*/
export default class VersionApi {

    /**
    * Constructs a new VersionApi. 
    * @alias module:api/VersionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV3Version operation.
     * @callback module:api/VersionApi~getV3VersionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the version information of the GitLab instance.
     * This feature was introduced in GitLab 8.13.
     * @param {module:api/VersionApi~getV3VersionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getV3Version(callback) {
      let postBody = null;

      let pathParams = {
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
        '/v3/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
