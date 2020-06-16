"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskProgressBeanObject = _interopRequireDefault(require("../model/TaskProgressBeanObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tasks service.
* @module api/TasksApi
* @version 1.4.0
*/
var TasksApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TasksApi. 
  * @alias module:api/TasksApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TasksApi(apiClient) {
    _classCallCheck(this, TasksApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the taskTaskIdCancelPost operation.
   * @callback module:api/TasksApi~taskTaskIdCancelPostCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel task
   * @param {Object} cloudid Cloudi of the project
   * @param {String} taskId The ID of the task.
   * @param {module:api/TasksApi~taskTaskIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */


  _createClass(TasksApi, [{
    key: "taskTaskIdCancelPost",
    value: function taskTaskIdCancelPost(cloudid, taskId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling taskTaskIdCancelPost");
      } // verify the required parameter 'taskId' is set


      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling taskTaskIdCancelPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/task/{taskId}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the taskTaskIdGet operation.
     * @callback module:api/TasksApi~taskTaskIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskProgressBeanObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get task
     * @param {Object} cloudid Cloudi of the project
     * @param {String} taskId The ID of the task.
     * @param {module:api/TasksApi~taskTaskIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TaskProgressBeanObject}
     */

  }, {
    key: "taskTaskIdGet",
    value: function taskTaskIdGet(cloudid, taskId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling taskTaskIdGet");
      } // verify the required parameter 'taskId' is set


      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling taskTaskIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'taskId': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TaskProgressBeanObject["default"];
      return this.apiClient.callApi('/task/{taskId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TasksApi;
}();

exports["default"] = TasksApi;