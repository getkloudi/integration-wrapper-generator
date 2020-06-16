"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Priority = _interopRequireDefault(require("../model/Priority"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssuePriorities service.
* @module api/IssuePrioritiesApi
* @version 1.4.0
*/
var IssuePrioritiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssuePrioritiesApi. 
  * @alias module:api/IssuePrioritiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssuePrioritiesApi(apiClient) {
    _classCallCheck(this, IssuePrioritiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the priorityGet operation.
   * @callback module:api/IssuePrioritiesApi~priorityGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Priority>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get priorities
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/IssuePrioritiesApi~priorityGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Priority>}
   */


  _createClass(IssuePrioritiesApi, [{
    key: "priorityGet",
    value: function priorityGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling priorityGet");
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
      var returnType = [_Priority["default"]];
      return this.apiClient.callApi('/priority', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the priorityIdGet operation.
     * @callback module:api/IssuePrioritiesApi~priorityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Priority} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get priority
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue priority.
     * @param {module:api/IssuePrioritiesApi~priorityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Priority}
     */

  }, {
    key: "priorityIdGet",
    value: function priorityIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling priorityIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling priorityIdGet");
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
      var returnType = _Priority["default"];
      return this.apiClient.callApi('/priority/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssuePrioritiesApi;
}();

exports["default"] = IssuePrioritiesApi;