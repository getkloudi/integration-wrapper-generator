"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TimeTrackingConfiguration = _interopRequireDefault(require("../model/TimeTrackingConfiguration"));

var _TimeTrackingProvider = _interopRequireDefault(require("../model/TimeTrackingProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TimeTracking service.
* @module api/TimeTrackingApi
* @version 1.4.0
*/
var TimeTrackingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TimeTrackingApi. 
  * @alias module:api/TimeTrackingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TimeTrackingApi(apiClient) {
    _classCallCheck(this, TimeTrackingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the configurationTimetrackingGet operation.
   * @callback module:api/TimeTrackingApi~configurationTimetrackingGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TimeTrackingProvider} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get selected time tracking provider
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/TimeTrackingApi~configurationTimetrackingGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TimeTrackingProvider}
   */


  _createClass(TimeTrackingApi, [{
    key: "configurationTimetrackingGet",
    value: function configurationTimetrackingGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingGet");
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
      var returnType = _TimeTrackingProvider["default"];
      return this.apiClient.callApi('/configuration/timetracking', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configurationTimetrackingListGet operation.
     * @callback module:api/TimeTrackingApi~configurationTimetrackingListGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TimeTrackingProvider>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all time tracking providers
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/TimeTrackingApi~configurationTimetrackingListGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TimeTrackingProvider>}
     */

  }, {
    key: "configurationTimetrackingListGet",
    value: function configurationTimetrackingListGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingListGet");
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
      var returnType = [_TimeTrackingProvider["default"]];
      return this.apiClient.callApi('/configuration/timetracking/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configurationTimetrackingOptionsGet operation.
     * @callback module:api/TimeTrackingApi~configurationTimetrackingOptionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get time tracking settings
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/TimeTrackingApi~configurationTimetrackingOptionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeTrackingConfiguration}
     */

  }, {
    key: "configurationTimetrackingOptionsGet",
    value: function configurationTimetrackingOptionsGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingOptionsGet");
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
      var returnType = _TimeTrackingConfiguration["default"];
      return this.apiClient.callApi('/configuration/timetracking/options', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configurationTimetrackingOptionsPut operation.
     * @callback module:api/TimeTrackingApi~configurationTimetrackingOptionsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TimeTrackingConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set time tracking settings
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/TimeTrackingConfiguration} body 
     * @param {module:api/TimeTrackingApi~configurationTimetrackingOptionsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TimeTrackingConfiguration}
     */

  }, {
    key: "configurationTimetrackingOptionsPut",
    value: function configurationTimetrackingOptionsPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingOptionsPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling configurationTimetrackingOptionsPut");
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
      var returnType = _TimeTrackingConfiguration["default"];
      return this.apiClient.callApi('/configuration/timetracking/options', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configurationTimetrackingPut operation.
     * @callback module:api/TimeTrackingApi~configurationTimetrackingPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Select time tracking provider
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/TimeTrackingProvider} body 
     * @param {module:api/TimeTrackingApi~configurationTimetrackingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "configurationTimetrackingPut",
    value: function configurationTimetrackingPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationTimetrackingPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling configurationTimetrackingPut");
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
      var returnType = Object;
      return this.apiClient.callApi('/configuration/timetracking', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TimeTrackingApi;
}();

exports["default"] = TimeTrackingApi;