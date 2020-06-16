"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeprecatedWorkflow = _interopRequireDefault(require("../model/DeprecatedWorkflow"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _PageBeanWorkflow = _interopRequireDefault(require("../model/PageBeanWorkflow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Workflows service.
* @module api/WorkflowsApi
* @version 1.4.0
*/
var WorkflowsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowsApi. 
  * @alias module:api/WorkflowsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowsApi(apiClient) {
    _classCallCheck(this, WorkflowsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(WorkflowsApi, [{
    key: "workflowGet",
    value: function workflowGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'workflowName': opts['workflowName']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_DeprecatedWorkflow["default"]];
      return this.apiClient.callApi('/workflow', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "workflowSearchGet",
    value: function workflowSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'workflowName': this.apiClient.buildCollectionParam(opts['workflowName'], 'multi'),
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanWorkflow["default"];
      return this.apiClient.callApi('/workflow/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowsApi;
}();

exports["default"] = WorkflowsApi;