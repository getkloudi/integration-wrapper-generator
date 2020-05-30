"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Occurrence service.
* @module api/OccurrenceApi
* @version 1.0.0
*/
var OccurrenceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new OccurrenceApi. 
  * @alias module:api/OccurrenceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OccurrenceApi(apiClient) {
    _classCallCheck(this, OccurrenceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the instanceInstanceIdDelete operation.
   * @callback module:api/OccurrenceApi~instanceInstanceIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete an occurrence
   * Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated. 
   * @param {Object} opts Optional parameters
   * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
   * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
   * @param {module:api/OccurrenceApi~instanceInstanceIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OccurrenceApi, [{
    key: "instanceInstanceIdDelete",
    value: function instanceInstanceIdDelete(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/instance/{instance_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the instanceInstanceIdGet operation.
     * @callback module:api/OccurrenceApi~instanceInstanceIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an occurrence
     * Returns a JSON object describing the occurrence. This is similar to the \"Raw JSON\" section of the occurrence detail page.  `instance_id` must be an Occurrence ID for an occurrence in the project. These IDs are returned as the `id` field in other occurrence API calls, and can be found in the Rollbar UI on URLs like `https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/` (`3209095494` is the Occurrence ID). 
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
     * @param {module:api/OccurrenceApi~instanceInstanceIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "instanceInstanceIdGet",
    value: function instanceInstanceIdGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/instance/{instance_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the instancesGet operation.
     * @callback module:api/OccurrenceApi~instancesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all occurrences in a project
     * Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {Object} opts.page Page number to return, starting at 1. 20 occurrences are returned per page.
     * @param {module:api/OccurrenceApi~instancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "instancesGet",
    value: function instancesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/instances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemIdInstancesGet operation.
     * @callback module:api/OccurrenceApi~itemIdInstancesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all occurrences in an item
     * Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
     * @param {Object} opts.page Page number to return, starting at 1. 20 occurrences are returned per page.
     * @param {module:api/OccurrenceApi~itemIdInstancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemIdInstancesGet",
    value: function itemIdInstancesGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/{item_id}/instances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OccurrenceApi;
}();

exports["default"] = OccurrenceApi;