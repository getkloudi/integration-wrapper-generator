"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _PageBeanWorkflowTransitionRules = _interopRequireDefault(require("../model/PageBeanWorkflowTransitionRules"));

var _WorkflowTransitionRulesUpdate = _interopRequireDefault(require("../model/WorkflowTransitionRulesUpdate"));

var _WorkflowTransitionRulesUpdateErrors = _interopRequireDefault(require("../model/WorkflowTransitionRulesUpdateErrors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowTransitionRules service.
* @module api/WorkflowTransitionRulesApi
* @version 1.4.0
*/
var WorkflowTransitionRulesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowTransitionRulesApi. 
  * @alias module:api/WorkflowTransitionRulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowTransitionRulesApi(apiClient) {
    _classCallCheck(this, WorkflowTransitionRulesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the workflowRuleConfigGet operation.
   * @callback module:api/WorkflowTransitionRulesApi~workflowRuleConfigGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanWorkflowTransitionRules} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get workflow transition rule configurations
   * @param {Object} cloudid Cloudi of the project
   * @param {Array.<module:model/String>} types The types of the transition rules to return.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 10)
   * @param {Array.<String>} opts.keys The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return.
   * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.
   * @param {module:api/WorkflowTransitionRulesApi~workflowRuleConfigGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanWorkflowTransitionRules}
   */


  _createClass(WorkflowTransitionRulesApi, [{
    key: "workflowRuleConfigGet",
    value: function workflowRuleConfigGet(cloudid, types, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowRuleConfigGet");
      } // verify the required parameter 'types' is set


      if (types === undefined || types === null) {
        throw new Error("Missing the required parameter 'types' when calling workflowRuleConfigGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'types': this.apiClient.buildCollectionParam(types, 'multi'),
        'keys': this.apiClient.buildCollectionParam(opts['keys'], 'multi'),
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanWorkflowTransitionRules["default"];
      return this.apiClient.callApi('/workflow/rule/config', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowRuleConfigPut operation.
     * @callback module:api/WorkflowTransitionRulesApi~workflowRuleConfigPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowTransitionRulesUpdateErrors} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update workflow transition rule configurations
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/WorkflowTransitionRulesUpdate} body 
     * @param {module:api/WorkflowTransitionRulesApi~workflowRuleConfigPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowTransitionRulesUpdateErrors}
     */

  }, {
    key: "workflowRuleConfigPut",
    value: function workflowRuleConfigPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowRuleConfigPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowRuleConfigPut");
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
      var returnType = _WorkflowTransitionRulesUpdateErrors["default"];
      return this.apiClient.callApi('/workflow/rule/config', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowTransitionRulesApi;
}();

exports["default"] = WorkflowTransitionRulesApi;