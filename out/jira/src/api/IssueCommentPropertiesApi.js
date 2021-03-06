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
* IssueCommentProperties service.
* @module api/IssueCommentPropertiesApi
* @version 1.4.0
*/
export default class IssueCommentPropertiesApi {

    /**
    * Constructs a new IssueCommentPropertiesApi. 
    * @alias module:api/IssueCommentPropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the commentCommentIdPropertiesGet operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PropertyKeys} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get comment property keys
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PropertyKeys}
     */
    commentCommentIdPropertiesGet(cloudid, commentId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesGet");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'commentId': commentId
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
        '/comment/{commentId}/properties', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    commentCommentIdPropertiesPropertyKeyDelete(cloudid, commentId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyDelete");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
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
        '/comment/{commentId}/properties/{propertyKey}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyGet operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */
    commentCommentIdPropertiesPropertyKeyGet(cloudid, commentId, propertyKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyGet");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
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
        '/comment/{commentId}/properties/{propertyKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the commentCommentIdPropertiesPropertyKeyPut operation.
     * @callback module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set comment property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} commentId The ID of the comment.
     * @param {String} propertyKey The key of the property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/IssueCommentPropertiesApi~commentCommentIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    commentCommentIdPropertiesPropertyKeyPut(cloudid, commentId, propertyKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling commentCommentIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling commentCommentIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'propertyKey' is set
      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling commentCommentIdPropertiesPropertyKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling commentCommentIdPropertiesPropertyKeyPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'commentId': commentId,
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
        '/comment/{commentId}/properties/{propertyKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
