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
import DeprecatedWorkflow from '../model/DeprecatedWorkflow';
import ErrorCollection from '../model/ErrorCollection';
import PageBeanWorkflow from '../model/PageBeanWorkflow';

/**
* Workflows service.
* @module api/WorkflowsApi
* @version 1.4.0
*/
export default class WorkflowsApi {

    /**
    * Constructs a new WorkflowsApi. 
    * @alias module:api/WorkflowsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the workflowGet operation.
     * @callback module:api/WorkflowsApi~workflowGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DeprecatedWorkflow>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all workflows
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of the workflow to be returned. Only one workflow can be specified.
     * @param {module:api/WorkflowsApi~workflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DeprecatedWorkflow>}
     */
    workflowGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'workflowName': opts['workflowName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [DeprecatedWorkflow];
      return this.apiClient.callApi(
        '/workflow', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowSearchGet operation.
     * @callback module:api/WorkflowsApi~workflowSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanWorkflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflows paginated
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<String>} opts.workflowName The name of a workflow to return.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `transitions` For each workflow, returns information about the transitions inside the workflow.  *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.  *  `statuses` For each workflow, returns information about the statuses inside the workflow.  *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.
     * @param {module:api/WorkflowsApi~workflowSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanWorkflow}
     */
    workflowSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowSearchGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'workflowName': this.apiClient.buildCollectionParam(opts['workflowName'], 'multi'),
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanWorkflow;
      return this.apiClient.callApi(
        '/workflow/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}