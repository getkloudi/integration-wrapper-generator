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
import ApplicationSetting from '../model/ApplicationSetting';
import UNKNOWN_BASE_TYPE from '../model/UNKNOWN_BASE_TYPE';

/**
* Application service.
* @module api/ApplicationApi
* @version 1.1.0
*/
export default class ApplicationApi {

    /**
    * Constructs a new ApplicationApi. 
    * @alias module:api/ApplicationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV3ApplicationSettings operation.
     * @callback module:api/ApplicationApi~getV3ApplicationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the current application settings
     * Get the current application settings
     * @param {module:api/ApplicationApi~getV3ApplicationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationSetting}
     */
    getV3ApplicationSettings(callback) {
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
      let accepts = ['application/json'];
      let returnType = ApplicationSetting;
      return this.apiClient.callApi(
        '/v3/application/settings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putV3ApplicationSettings operation.
     * @callback module:api/ApplicationApi~putV3ApplicationSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify application settings
     * Modify application settings
     * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
     * @param {module:api/ApplicationApi~putV3ApplicationSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationSetting}
     */
    putV3ApplicationSettings(UNKNOWN_BASE_TYPE, callback) {
      let postBody = UNKNOWN_BASE_TYPE;
      // verify the required parameter 'UNKNOWN_BASE_TYPE' is set
      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling putV3ApplicationSettings");
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
      let returnType = ApplicationSetting;
      return this.apiClient.callApi(
        '/v3/application/settings', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
