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
import IssueTypeSchemeProjectAssociation from '../model/IssueTypeSchemeProjectAssociation';
import PageBeanIssueTypeScheme from '../model/PageBeanIssueTypeScheme';
import PageBeanIssueTypeSchemeMapping from '../model/PageBeanIssueTypeSchemeMapping';
import PageBeanIssueTypeSchemeProjects from '../model/PageBeanIssueTypeSchemeProjects';

/**
* IssueTypeSchemes service.
* @module api/IssueTypeSchemesApi
* @version 1.4.0
*/
export default class IssueTypeSchemesApi {

    /**
    * Constructs a new IssueTypeSchemesApi. 
    * @alias module:api/IssueTypeSchemesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the issuetypeschemeGet operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all issue type schemes
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.id The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeScheme}
     */
    issuetypeschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanIssueTypeScheme;
      return this.apiClient.callApi(
        '/issuetypescheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeschemeMappingGet operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeSchemeMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type scheme items
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.issueTypeSchemeId The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeSchemeMapping}
     */
    issuetypeschemeMappingGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeMappingGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'issueTypeSchemeId': this.apiClient.buildCollectionParam(opts['issueTypeSchemeId'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanIssueTypeSchemeMapping;
      return this.apiClient.callApi(
        '/issuetypescheme/mapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeschemeProjectGet operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeSchemeProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type schemes for projects
     * @param {Object} cloudid Cloudi of the project
     * @param {Array.<Number>} projectId The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeSchemeProjects}
     */
    issuetypeschemeProjectGet(cloudid, projectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeProjectGet");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling issuetypeschemeProjectGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': this.apiClient.buildCollectionParam(projectId, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanIssueTypeSchemeProjects;
      return this.apiClient.callApi(
        '/issuetypescheme/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issuetypeschemeProjectPut operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeProjectPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign issue type scheme to project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueTypeSchemeProjectAssociation} body 
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeProjectPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    issuetypeschemeProjectPut(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeProjectPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeschemeProjectPut");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/issuetypescheme/project', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
