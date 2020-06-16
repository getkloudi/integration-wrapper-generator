"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerOfWorkflowSchemeAssociations = _interopRequireDefault(require("../model/ContainerOfWorkflowSchemeAssociations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowSchemeProjectAssociations service.
* @module api/WorkflowSchemeProjectAssociationsApi
* @version 1.4.0
*/
var WorkflowSchemeProjectAssociationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowSchemeProjectAssociationsApi. 
  * @alias module:api/WorkflowSchemeProjectAssociationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowSchemeProjectAssociationsApi(apiClient) {
    _classCallCheck(this, WorkflowSchemeProjectAssociationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the workflowschemeProjectGet operation.
   * @callback module:api/WorkflowSchemeProjectAssociationsApi~workflowschemeProjectGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ContainerOfWorkflowSchemeAssociations} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get workflow scheme project associations
   * @param {Object} cloudid Cloudi of the project
   * @param {Array.<Number>} projectId The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.
   * @param {module:api/WorkflowSchemeProjectAssociationsApi~workflowschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ContainerOfWorkflowSchemeAssociations}
   */


  _createClass(WorkflowSchemeProjectAssociationsApi, [{
    key: "workflowschemeProjectGet",
    value: function workflowschemeProjectGet(cloudid, projectId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowschemeProjectGet");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling workflowschemeProjectGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'projectId': this.apiClient.buildCollectionParam(projectId, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerOfWorkflowSchemeAssociations["default"];
      return this.apiClient.callApi('/workflowscheme/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowSchemeProjectAssociationsApi;
}();

exports["default"] = WorkflowSchemeProjectAssociationsApi;