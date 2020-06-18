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
import ErrorCollection from '../model/ErrorCollection';

/**
* ProjectKeyAndNameValidation service.
* @module api/ProjectKeyAndNameValidationApi
* @version 1.4.0
*/
export default class ProjectKeyAndNameValidationApi {

    /**
    * Constructs a new ProjectKeyAndNameValidationApi. 
    * @alias module:api/ProjectKeyAndNameValidationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the projectvalidateKeyGet operation.
     * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ErrorCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate project key
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ErrorCollection}
     */
    projectvalidateKeyGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'key': opts['key']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ErrorCollection;
      return this.apiClient.callApi(
        '/projectvalidate/key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectvalidateValidProjectKeyGet operation.
     * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get valid project key
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectvalidateValidProjectKeyGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'key': opts['key']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projectvalidate/validProjectKey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectvalidateValidProjectNameGet operation.
     * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectNameGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get valid project name
     * @param {Object} cloudid Cloudi of the project
     * @param {String} name The project name.
     * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectvalidateValidProjectNameGet(cloudid, name, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectNameGet");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling projectvalidateValidProjectNameGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'name': name
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projectvalidate/validProjectName', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}