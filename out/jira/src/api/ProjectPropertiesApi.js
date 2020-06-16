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
import EntityProperty from '../model/EntityProperty';
import PropertyKeys from '../model/PropertyKeys';

/**
* ProjectProperties service.
* @module api/ProjectPropertiesApi
* @version 1.4.0
*/
export default class ProjectPropertiesApi {

    /**
    * Constructs a new ProjectPropertiesApi. 
    * @alias module:api/ProjectPropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesGet operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropertyKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project property keys
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PropertyKeys}
     */
    projectProjectIdOrKeyPropertiesGet(cloudid, projectIdOrKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PropertyKeys;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    projectProjectIdOrKeyPropertiesPropertyKeyDelete(cloudid, projectIdOrKey, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */
    projectProjectIdOrKeyPropertiesPropertyKeyGet(cloudid, projectIdOrKey, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EntityProperty;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/properties/{propertyKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The key of the project property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    projectProjectIdOrKeyPropertiesPropertyKeyPut(cloudid, projectIdOrKey, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
