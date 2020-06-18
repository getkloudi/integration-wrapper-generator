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
import DefaultWorkflow from '../model/DefaultWorkflow';
import IssueTypeWorkflowMapping from '../model/IssueTypeWorkflowMapping';
import IssueTypesWorkflowMapping from '../model/IssueTypesWorkflowMapping';
import PageBeanWorkflowScheme from '../model/PageBeanWorkflowScheme';
import WorkflowScheme from '../model/WorkflowScheme';

/**
* WorkflowSchemes service.
* @module api/WorkflowSchemesApi
* @version 1.4.0
*/
export default class WorkflowSchemesApi {

    /**
    * Constructs a new WorkflowSchemesApi. 
    * @alias module:api/WorkflowSchemesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the workflowschemeGet operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanWorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all workflow schemes
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/WorkflowSchemesApi~workflowschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanWorkflowScheme}
     */
    workflowschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanWorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdDefaultDelete operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdDefaultDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/default', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdDefaultGet operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DefaultWorkflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. (default to false)
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DefaultWorkflow}
     */
    workflowschemeIdDefaultGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DefaultWorkflow;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/default', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdDefaultPut operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {module:model/DefaultWorkflow} body The new default workflow.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdDefaultPut(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDefaultPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
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
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/default', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdDelete operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    workflowschemeIdDelete(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
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
        '/workflowscheme/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdGet operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. (default to false)
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypeDelete operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workflow for issue type in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdIssuetypeIssueTypeDelete(cloudid, id, issueType, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      }
      // verify the required parameter 'issueType' is set
      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
      };
      let queryParams = {
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/issuetype/{issueType}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypeGet operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypeWorkflowMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow for issue type in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. (default to false)
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypeWorkflowMapping}
     */
    workflowschemeIdIssuetypeIssueTypeGet(cloudid, id, issueType, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeGet");
      }
      // verify the required parameter 'issueType' is set
      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
      };
      let queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IssueTypeWorkflowMapping;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/issuetype/{issueType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdIssuetypeIssueTypePut operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set workflow for issue type in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} issueType The ID of the issue type.
     * @param {module:model/IssueTypeWorkflowMapping} body The issue type-project mapping.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdIssuetypeIssueTypePut(cloudid, id, issueType, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypePut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypePut");
      }
      // verify the required parameter 'issueType' is set
      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypePut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdIssuetypeIssueTypePut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
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
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/issuetype/{issueType}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdPut operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
     * @param {module:model/WorkflowScheme} body 
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdPut(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
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
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdWorkflowDelete operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue types for workflow in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} workflowName The name of the workflow.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateDraftIfNeeded Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    workflowschemeIdWorkflowDelete(cloudid, id, workflowName, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowDelete");
      }
      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdWorkflowDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'workflowName': workflowName,
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
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
        '/workflowscheme/{id}/workflow', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdWorkflowGet operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypesWorkflowMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue types for workflows in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {Boolean} opts.returnDraftIfExists Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. (default to false)
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypesWorkflowMapping}
     */
    workflowschemeIdWorkflowGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'workflowName': opts['workflowName'],
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = IssueTypesWorkflowMapping;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/workflow', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemeIdWorkflowPut operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemeIdWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue types for workflow in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme.
     * @param {String} workflowName The name of the workflow.
     * @param {module:model/IssueTypesWorkflowMapping} body 
     * @param {module:api/WorkflowSchemesApi~workflowschemeIdWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemeIdWorkflowPut(cloudid, id, workflowName, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowPut");
      }
      // verify the required parameter 'workflowName' is set
      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdWorkflowPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdWorkflowPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'workflowName': workflowName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme/{id}/workflow', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the workflowschemePost operation.
     * @callback module:api/WorkflowSchemesApi~workflowschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/WorkflowScheme} body 
     * @param {module:api/WorkflowSchemesApi~workflowschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */
    workflowschemePost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemePost");
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
      let returnType = WorkflowScheme;
      return this.apiClient.callApi(
        '/workflowscheme', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}