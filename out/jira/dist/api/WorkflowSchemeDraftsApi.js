"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DefaultWorkflow = _interopRequireDefault(require("../model/DefaultWorkflow"));

var _IssueTypeWorkflowMapping = _interopRequireDefault(require("../model/IssueTypeWorkflowMapping"));

var _IssueTypesWorkflowMapping = _interopRequireDefault(require("../model/IssueTypesWorkflowMapping"));

var _WorkflowScheme = _interopRequireDefault(require("../model/WorkflowScheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowSchemeDrafts service.
* @module api/WorkflowSchemeDraftsApi
* @version 1.4.0
*/
var WorkflowSchemeDraftsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowSchemeDraftsApi. 
  * @alias module:api/WorkflowSchemeDraftsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowSchemeDraftsApi(apiClient) {
    _classCallCheck(this, WorkflowSchemeDraftsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the workflowschemeIdCreatedraftPost operation.
   * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdCreatedraftPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/WorkflowScheme} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create draft workflow scheme
   * @param {Object} cloudid Cloudi of the project
   * @param {Number} id The ID of the active workflow scheme that the draft is created from.
   * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdCreatedraftPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/WorkflowScheme}
   */


  _createClass(WorkflowSchemeDraftsApi, [{
    key: "workflowschemeIdCreatedraftPost",
    value: function workflowschemeIdCreatedraftPost(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdCreatedraftPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdCreatedraftPost");
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
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/createdraft', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultDelete operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete draft default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftDefaultDelete",
    value: function workflowschemeIdDraftDefaultDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultDelete");
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
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft/default', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultGet operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DefaultWorkflow} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get draft default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DefaultWorkflow}
     */

  }, {
    key: "workflowschemeIdDraftDefaultGet",
    value: function workflowschemeIdDraftDefaultGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultGet");
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
      var accepts = ['application/json'];
      var returnType = _DefaultWorkflow["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft/default', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftDefaultPut operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update draft default workflow
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {module:model/DefaultWorkflow} body The object for the new default workflow.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDefaultPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftDefaultPut",
    value: function workflowschemeIdDraftDefaultPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDefaultPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDefaultPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDraftDefaultPut");
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
      return this.apiClient.callApi('/workflowscheme/{id}/draft/default', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftDelete operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was created from.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "workflowschemeIdDraftDelete",
    value: function workflowschemeIdDraftDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftDelete");
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
      return this.apiClient.callApi('/workflowscheme/{id}/draft', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftGet operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was created from.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftGet",
    value: function workflowschemeIdDraftGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftGet");
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
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypeDelete operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete workflow for issue type in draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftIssuetypeIssueTypeDelete",
    value: function workflowschemeIdDraftIssuetypeIssueTypeDelete(cloudid, id, issueType, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypeDelete");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowScheme["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypeGet operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypeWorkflowMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow for issue type in draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypeWorkflowMapping}
     */

  }, {
    key: "workflowschemeIdDraftIssuetypeIssueTypeGet",
    value: function workflowschemeIdDraftIssuetypeIssueTypeGet(cloudid, id, issueType, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypeGet");
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueTypeWorkflowMapping["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftIssuetypeIssueTypePut operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set workflow for issue type in draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} issueType The ID of the issue type.
     * @param {module:model/IssueTypeWorkflowMapping} body The issue type-project mapping.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftIssuetypeIssueTypePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftIssuetypeIssueTypePut",
    value: function workflowschemeIdDraftIssuetypeIssueTypePut(cloudid, id, issueType, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftIssuetypeIssueTypePut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftIssuetypeIssueTypePut");
      } // verify the required parameter 'issueType' is set


      if (issueType === undefined || issueType === null) {
        throw new Error("Missing the required parameter 'issueType' when calling workflowschemeIdDraftIssuetypeIssueTypePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDraftIssuetypeIssueTypePut");
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
      return this.apiClient.callApi('/workflowscheme/{id}/draft/issuetype/{issueType}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftPut operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the active workflow scheme that the draft was created from.
     * @param {module:model/WorkflowScheme} body 
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftPut",
    value: function workflowschemeIdDraftPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDraftPut");
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
      return this.apiClient.callApi('/workflowscheme/{id}/draft', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowDelete operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue types for workflow in draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} workflowName The name of the workflow.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "workflowschemeIdDraftWorkflowDelete",
    value: function workflowschemeIdDraftWorkflowDelete(cloudid, id, workflowName, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowDelete");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdDraftWorkflowDelete");
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
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowGet operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueTypesWorkflowMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue types for workflows in draft workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {Object} opts Optional parameters
     * @param {String} opts.workflowName The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueTypesWorkflowMapping}
     */

  }, {
    key: "workflowschemeIdDraftWorkflowGet",
    value: function workflowschemeIdDraftWorkflowGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'workflowName': opts['workflowName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueTypesWorkflowMapping["default"];
      return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowschemeIdDraftWorkflowPut operation.
     * @callback module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set issue types for workflow in workflow scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the workflow scheme that the draft belongs to.
     * @param {String} workflowName The name of the workflow.
     * @param {module:model/IssueTypesWorkflowMapping} body 
     * @param {module:api/WorkflowSchemeDraftsApi~workflowschemeIdDraftWorkflowPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowScheme}
     */

  }, {
    key: "workflowschemeIdDraftWorkflowPut",
    value: function workflowschemeIdDraftWorkflowPut(cloudid, id, workflowName, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeIdDraftWorkflowPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling workflowschemeIdDraftWorkflowPut");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowschemeIdDraftWorkflowPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowschemeIdDraftWorkflowPut");
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
      return this.apiClient.callApi('/workflowscheme/{id}/draft/workflow', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowSchemeDraftsApi;
}();

exports["default"] = WorkflowSchemeDraftsApi;