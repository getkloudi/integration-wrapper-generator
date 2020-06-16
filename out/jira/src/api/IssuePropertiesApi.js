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
import BulkIssuePropertyUpdateRequest from '../model/BulkIssuePropertyUpdateRequest';
import EntityProperty from '../model/EntityProperty';
import ErrorCollection from '../model/ErrorCollection';
import IssueEntityProperties from '../model/IssueEntityProperties';
import IssueFilterForBulkPropertyDelete from '../model/IssueFilterForBulkPropertyDelete';
import PropertyKeys from '../model/PropertyKeys';

/**
* IssueProperties service.
* @module api/IssuePropertiesApi
* @version 1.4.0
*/
export default class IssuePropertiesApi {

    /**
    * Constructs a new IssuePropertiesApi. 
    * @alias module:api/IssuePropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesGet operation.
     * @callback module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropertyKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue property keys
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PropertyKeys}
     */
    issueIssueIdOrKeyPropertiesGet(cloudid, issueIdOrKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesGet");
      }
      // verify the required parameter 'issueIdOrKey' is set
      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
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
        '/issue/{issueIdOrKey}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issueIssueIdOrKeyPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'issueIdOrKey' is set
      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
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
        '/issue/{issueIdOrKey}/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The key or ID of the issue.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */
    issueIssueIdOrKeyPropertiesPropertyKeyGet(cloudid, issueIdOrKey, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'issueIdOrKey' is set
      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
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
        '/issue/{issueIdOrKey}/properties/{propertyKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issueIssueIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} propertyKey The key of the issue property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssuePropertiesApi~issueIssueIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    issueIssueIdOrKeyPropertiesPropertyKeyPut(cloudid, issueIdOrKey, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'issueIdOrKey' is set
      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyPropertiesPropertyKeyPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
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
        '/issue/{issueIdOrKey}/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuePropertiesPost operation.
     * @callback module:api/IssuePropertiesApi~issuePropertiesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk set issues properties
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueEntityProperties} body Issue properties to be set or updated with values.
     * @param {module:api/IssuePropertiesApi~issuePropertiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issuePropertiesPost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuePropertiesPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuePropertiesPost");
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

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/issue/properties', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuePropertiesPropertyKeyDelete operation.
     * @callback module:api/IssuePropertiesApi~issuePropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk delete issue property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the property.
     * @param {module:model/IssueFilterForBulkPropertyDelete} body 
     * @param {module:api/IssuePropertiesApi~issuePropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issuePropertiesPropertyKeyDelete(cloudid, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuePropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuePropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuePropertiesPropertyKeyDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
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
      let returnType = null;
      return this.apiClient.callApi(
        '/issue/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuePropertiesPropertyKeyPut operation.
     * @callback module:api/IssuePropertiesApi~issuePropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk set issue property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {module:model/BulkIssuePropertyUpdateRequest} body 
     * @param {module:api/IssuePropertiesApi~issuePropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issuePropertiesPropertyKeyPut(cloudid, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuePropertiesPropertyKeyPut");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling issuePropertiesPropertyKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuePropertiesPropertyKeyPut");
      }

      let pathParams = {
        'cloudid': cloudid,
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
      let returnType = null;
      return this.apiClient.callApi(
        '/issue/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
