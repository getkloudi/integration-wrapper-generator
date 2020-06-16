"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DefaultWorkflow = _interopRequireDefault(require("../model/DefaultWorkflow"));

var _IssueTypeWorkflowMapping = _interopRequireDefault(require("../model/IssueTypeWorkflowMapping"));

var _IssueTypesWorkflowMapping = _interopRequireDefault(require("../model/IssueTypesWorkflowMapping"));

var _PageBeanWorkflowScheme = _interopRequireDefault(require("../model/PageBeanWorkflowScheme"));

var _WorkflowScheme = _interopRequireDefault(require("../model/WorkflowScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowSchemes service.
* @module api/WorkflowSchemesApi
* @version 1.4.0
*/
var WorkflowSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowSchemesApi. 
  * @alias module:api/WorkflowSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowSchemesApi(apiClient) {
    _classCallCheck(this, WorkflowSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(WorkflowSchemesApi, [{
    key: "workflowschemeGet",
    value: function workflowschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanWorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdDefaultDelete",
    value: function workflowschemeIdDefaultDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/default', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdDefaultGet",
    value: function workflowschemeIdDefaultGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DefaultWorkflow["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/default', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdDefaultPut",
    value: function workflowschemeIdDefaultPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDefaultPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDefaultPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDefaultPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/default', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdDelete",
    value: function workflowschemeIdDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/workflowscheme/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdGet",
    value: function workflowschemeIdGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdIssuetypeIssueTypeDelete",
    value: function workflowschemeIdIssuetypeIssueTypeDelete(cloudid, id, issueType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
      };
      var queryParams = {
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdIssuetypeIssueTypeGet",
    value: function workflowschemeIdIssuetypeIssueTypeGet(cloudid, id, issueType, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypeGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypeGet");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypeGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
      };
      var queryParams = {
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueTypeWorkflowMapping["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdIssuetypeIssueTypePut",
    value: function workflowschemeIdIssuetypeIssueTypePut(cloudid, id, issueType, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdIssuetypeIssueTypePut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdIssuetypeIssueTypePut");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdIssuetypeIssueTypePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdIssuetypeIssueTypePut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id,
        'issueType': issueType
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/issuetype/{issueType}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdPut",
    value: function workflowschemeIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdWorkflowDelete",
    value: function workflowschemeIdWorkflowDelete(cloudid, id, workflowName, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowDelete");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdWorkflowDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'workflowName': workflowName,
        'updateDraftIfNeeded': opts['updateDraftIfNeeded']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/workflowscheme/{id}/workflow', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdWorkflowGet",
    value: function workflowschemeIdWorkflowGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'workflowName': opts['workflowName'],
        'returnDraftIfExists': opts['returnDraftIfExists']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueTypesWorkflowMapping["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/workflow', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemeIdWorkflowPut",
    value: function workflowschemeIdWorkflowPut(cloudid, id, workflowName, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdWorkflowPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdWorkflowPut");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdWorkflowPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdWorkflowPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'workflowName': workflowName
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/workflow', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowschemePost",
    value: function workflowschemePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemePost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowSchemesApi;
}();

exports["default"] = WorkflowSchemesApi;