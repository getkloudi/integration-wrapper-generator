/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ErrorMessage from '../model/ErrorMessage';

/**
* DynamicModules service.
* @module api/DynamicModulesApi
* @version 1.4.0
*/
export default class DynamicModulesApi {

    /**
    * Constructs a new DynamicModulesApi. 
    * @alias module:api/DynamicModulesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicDelete operation.
     * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove modules
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.moduleKey The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
     * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    restAtlassianConnect1AppModuleDynamicDelete(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicDelete");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'moduleKey': this.apiClient.buildCollectionParam(opts['moduleKey'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/atlassian-connect/1/app/module/dynamic', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicGet operation.
     * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: [Object]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get modules
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: [Object]}>}
     */
    restAtlassianConnect1AppModuleDynamicGet(cloudid, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': [Object]};
      return this.apiClient.callApi(
        '/rest/atlassian-connect/1/app/module/dynamic', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicPost operation.
     * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register modules
     * @param {Object} cloudid Cloudi of the project
     * @param {Object.<String, {String: [Object]}>} body 
     * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    restAtlassianConnect1AppModuleDynamicPost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restAtlassianConnect1AppModuleDynamicPost");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/atlassian-connect/1/app/module/dynamic', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
