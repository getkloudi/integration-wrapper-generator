"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api1InstanceResponse = _interopRequireDefault(require("../model/Api1InstanceResponse"));

var _Api1InstanceResponse2 = _interopRequireDefault(require("../model/Api1InstanceResponse1"));

var _Api1InstancesResponse = _interopRequireDefault(require("../model/Api1InstancesResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Occurrence service.
* @module api/OccurrenceApi
* @version 1.1.0
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
   * @param {module:model/Api1InstanceResponse1} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete an occurrence
   * Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated. 
   * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
   * @param {Number} instanceId The occurrence ID
   * @param {module:api/OccurrenceApi~instanceInstanceIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Api1InstanceResponse1}
   */


  _createClass(OccurrenceApi, [{
    key: "instanceInstanceIdDelete",
    value: function instanceInstanceIdDelete(xRollbarAccessToken, instanceId, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling instanceInstanceIdDelete");
      } // verify the required parameter 'instanceId' is set


      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling instanceInstanceIdDelete");
      }

      var pathParams = {
        'instance_id': instanceId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1InstanceResponse2["default"];
      return this.apiClient.callApi('/instance/{instance_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the instanceInstanceIdGet operation.
     * @callback module:api/OccurrenceApi~instanceInstanceIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Api1InstanceResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an occurrence
     * Returns a JSON object describing the occurrence. This is similar to the \"Raw JSON\" section of the occurrence detail page.  `instance_id` must be an Occurrence ID for an occurrence in the project. These IDs are returned as the `id` field in other occurrence API calls, and can be found in the Rollbar UI on URLs like `https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/` (`3209095494` is the Occurrence ID). 
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Number} instanceId The occurrence ID
     * @param {module:api/OccurrenceApi~instanceInstanceIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Api1InstanceResponse}
     */

  }, {
    key: "instanceInstanceIdGet",
    value: function instanceInstanceIdGet(xRollbarAccessToken, instanceId, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling instanceInstanceIdGet");
      } // verify the required parameter 'instanceId' is set


      if (instanceId === undefined || instanceId === null) {
        throw new Error("Missing the required parameter 'instanceId' when calling instanceInstanceIdGet");
      }

      var pathParams = {
        'instance_id': instanceId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1InstanceResponse["default"];
      return this.apiClient.callApi('/instance/{instance_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the instancesGet operation.
     * @callback module:api/OccurrenceApi~instancesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Api1InstancesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all occurrences in a project
     * Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to return, starting at 1. 20 occurrences are returned per page. (default to 1)
     * @param {module:api/OccurrenceApi~instancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Api1InstancesResponse}
     */

  }, {
    key: "instancesGet",
    value: function instancesGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling instancesGet");
      }

      var pathParams = {};
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1InstancesResponse["default"];
      return this.apiClient.callApi('/instances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemIdInstancesGet operation.
     * @callback module:api/OccurrenceApi~itemIdInstancesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Api1InstancesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all occurrences in an item
     * Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Number} itemId The item ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number to return, starting at 1. 20 occurrences are returned per page. (default to 1)
     * @param {module:api/OccurrenceApi~itemIdInstancesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Api1InstancesResponse}
     */

  }, {
    key: "itemIdInstancesGet",
    value: function itemIdInstancesGet(xRollbarAccessToken, itemId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemIdInstancesGet");
      } // verify the required parameter 'itemId' is set


      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling itemIdInstancesGet");
      }

      var pathParams = {
        'item_id': itemId
      };
      var queryParams = {
        'page': opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1InstancesResponse["default"];
      return this.apiClient.callApi('/{item_id}/instances', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OccurrenceApi;
}();

exports["default"] = OccurrenceApi;