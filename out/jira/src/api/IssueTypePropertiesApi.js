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
* IssueTypeProperties service.
* @module api/IssueTypePropertiesApi
* @version 1.4.0
*/
export default class IssueTypePropertiesApi {

    /**
    * Constructs a new IssueTypePropertiesApi. 
    * @alias module:api/IssueTypePropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesGet operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropertyKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type property keys
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PropertyKeys}
     */
    issuetypeIssueTypeIdPropertiesGet(cloudid, issueTypeId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesGet");
      }
      // verify the required parameter 'issueTypeId' is set
      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId
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
        '/issuetype/{issueTypeId}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issuetypeIssueTypeIdPropertiesPropertyKeyDelete(cloudid, issueTypeId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'issueTypeId' is set
      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
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
        '/issuetype/{issueTypeId}/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyGet operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */
    issuetypeIssueTypeIdPropertiesPropertyKeyGet(cloudid, issueTypeId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'issueTypeId' is set
      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
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
        '/issuetype/{issueTypeId}/properties/{propertyKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeIssueTypeIdPropertiesPropertyKeyPut operation.
     * @callback module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue type property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueTypeId The ID of the issue type.
     * @param {String} propertyKey The key of the issue type property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssueTypePropertiesApi~issuetypeIssueTypeIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    issuetypeIssueTypeIdPropertiesPropertyKeyPut(cloudid, issueTypeId, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'issueTypeId' is set
      if (issueTypeId === undefined || issueTypeId === null) {
        throw new Error("Missing the required parameter 'issueTypeId' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeIssueTypeIdPropertiesPropertyKeyPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueTypeId': issueTypeId,
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
        '/issuetype/{issueTypeId}/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
