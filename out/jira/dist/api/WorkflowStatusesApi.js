"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusDetails = _interopRequireDefault(require("../model/StatusDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowStatuses service.
* @module api/WorkflowStatusesApi
* @version 1.4.0
*/
var WorkflowStatusesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowStatusesApi. 
  * @alias module:api/WorkflowStatusesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowStatusesApi(apiClient) {
    _classCallCheck(this, WorkflowStatusesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the statusGet operation.
   * @callback module:api/WorkflowStatusesApi~statusGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/StatusDetails>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all statuses
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/WorkflowStatusesApi~statusGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/StatusDetails>}
   */


  _createClass(WorkflowStatusesApi, [{
    key: "statusGet",
    value: function statusGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling statusGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_StatusDetails["default"]];
      return this.apiClient.callApi('/status', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statusIdOrNameGet operation.
     * @callback module:api/WorkflowStatusesApi~statusIdOrNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status
     * @param {Object} cloudid Cloudi of the project
     * @param {String} idOrName The ID or name of the status.
     * @param {module:api/WorkflowStatusesApi~statusIdOrNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusDetails}
     */

  }, {
    key: "statusIdOrNameGet",
    value: function statusIdOrNameGet(cloudid, idOrName, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling statusIdOrNameGet");
      } // verify the required parameter 'idOrName' is set


      if (idOrName === undefined || idOrName === null) {
        throw new Error("Missing the required parameter 'idOrName' when calling statusIdOrNameGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'idOrName': idOrName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StatusDetails["default"];
      return this.apiClient.callApi('/status/{idOrName}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowStatusesApi;
}();

exports["default"] = WorkflowStatusesApi;