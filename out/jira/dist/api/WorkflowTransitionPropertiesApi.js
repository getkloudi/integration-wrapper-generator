"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowTransitionProperty = _interopRequireDefault(require("../model/WorkflowTransitionProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowTransitionProperties service.
* @module api/WorkflowTransitionPropertiesApi
* @version 1.4.0
*/
var WorkflowTransitionPropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowTransitionPropertiesApi. 
  * @alias module:api/WorkflowTransitionPropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowTransitionPropertiesApi(apiClient) {
    _classCallCheck(this, WorkflowTransitionPropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesDelete operation.
   * @callback module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete workflow transition property
   * @param {Object} cloudid Cloudi of the project
   * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
   * @param {String} key The name of the transition property to delete, also known as the name of the property.
   * @param {String} workflowName The name of the workflow that the transition belongs to.
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.workflowMode The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
   * @param {module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(WorkflowTransitionPropertiesApi, [{
    key: "workflowTransitionsTransitionIdPropertiesDelete",
    value: function workflowTransitionsTransitionIdPropertiesDelete(cloudid, transitionId, key, workflowName, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesDelete");
      } // verify the required parameter 'transitionId' is set


      if (transitionId === undefined || transitionId === null) {
        throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesDelete");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling workflowTransitionsTransitionIdPropertiesDelete");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowTransitionsTransitionIdPropertiesDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'transitionId': transitionId
      };
      var queryParams = {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': opts['workflowMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesGet operation.
     * @callback module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowTransitionProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get workflow transition properties
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
     * @param {String} workflowName The name of the workflow that the transition belongs to.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeReservedKeys Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. (default to false)
     * @param {String} opts.key The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
     * @param {module:model/String} opts.workflowMode The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. (default to 'live')
     * @param {module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowTransitionProperty}
     */

  }, {
    key: "workflowTransitionsTransitionIdPropertiesGet",
    value: function workflowTransitionsTransitionIdPropertiesGet(cloudid, transitionId, workflowName, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesGet");
      } // verify the required parameter 'transitionId' is set


      if (transitionId === undefined || transitionId === null) {
        throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesGet");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowTransitionsTransitionIdPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'transitionId': transitionId
      };
      var queryParams = {
        'includeReservedKeys': opts['includeReservedKeys'],
        'key': opts['key'],
        'workflowName': workflowName,
        'workflowMode': opts['workflowMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _WorkflowTransitionProperty["default"];
      return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesPost operation.
     * @callback module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowTransitionProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create workflow transition property
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {String} key The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
     * @param {String} workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/WorkflowTransitionProperty} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.workflowMode The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. (default to 'live')
     * @param {module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowTransitionProperty}
     */

  }, {
    key: "workflowTransitionsTransitionIdPropertiesPost",
    value: function workflowTransitionsTransitionIdPropertiesPost(cloudid, transitionId, key, workflowName, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesPost");
      } // verify the required parameter 'transitionId' is set


      if (transitionId === undefined || transitionId === null) {
        throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesPost");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling workflowTransitionsTransitionIdPropertiesPost");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowTransitionsTransitionIdPropertiesPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowTransitionsTransitionIdPropertiesPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'transitionId': transitionId
      };
      var queryParams = {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': opts['workflowMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowTransitionProperty["default"];
      return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the workflowTransitionsTransitionIdPropertiesPut operation.
     * @callback module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WorkflowTransitionProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update workflow transition property
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} transitionId The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
     * @param {String} key The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
     * @param {String} workflowName The name of the workflow that the transition belongs to.
     * @param {module:model/WorkflowTransitionProperty} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.workflowMode The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
     * @param {module:api/WorkflowTransitionPropertiesApi~workflowTransitionsTransitionIdPropertiesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WorkflowTransitionProperty}
     */

  }, {
    key: "workflowTransitionsTransitionIdPropertiesPut",
    value: function workflowTransitionsTransitionIdPropertiesPut(cloudid, transitionId, key, workflowName, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling workflowTransitionsTransitionIdPropertiesPut");
      } // verify the required parameter 'transitionId' is set


      if (transitionId === undefined || transitionId === null) {
        throw new Error("Missing the required parameter 'transitionId' when calling workflowTransitionsTransitionIdPropertiesPut");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling workflowTransitionsTransitionIdPropertiesPut");
      } // verify the required parameter 'workflowName' is set


      if (workflowName === undefined || workflowName === null) {
        throw new Error("Missing the required parameter 'workflowName' when calling workflowTransitionsTransitionIdPropertiesPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling workflowTransitionsTransitionIdPropertiesPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'transitionId': transitionId
      };
      var queryParams = {
        'key': key,
        'workflowName': workflowName,
        'workflowMode': opts['workflowMode']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _WorkflowTransitionProperty["default"];
      return this.apiClient.callApi('/workflow/transitions/{transitionId}/properties', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowTransitionPropertiesApi;
}();

exports["default"] = WorkflowTransitionPropertiesApi;