"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api1VersionsItemsResponse = _interopRequireDefault(require("../model/Api1VersionsItemsResponse"));

var _Api1VersionsResponse = _interopRequireDefault(require("../model/Api1VersionsResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Versions service.
* @module api/VersionsApi
* @version 1.1.0
*/
var VersionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new VersionsApi. 
  * @alias module:api/VersionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VersionsApi(apiClient) {
    _classCallCheck(this, VersionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the versionsVersionGet operation.
   * @callback module:api/VersionsApi~versionsVersionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Api1VersionsResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Code version details in one project
   * Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions 
   * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
   * @param {String} version The code version sent on the occurrence payload
   * @param {String} environment The environment where the code version is detected
   * @param {module:api/VersionsApi~versionsVersionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Api1VersionsResponse}
   */


  _createClass(VersionsApi, [{
    key: "versionsVersionGet",
    value: function versionsVersionGet(xRollbarAccessToken, version, environment, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling versionsVersionGet");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling versionsVersionGet");
      } // verify the required parameter 'environment' is set


      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling versionsVersionGet");
      }

      var pathParams = {
        'version': version
      };
      var queryParams = {
        'environment': environment
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1VersionsResponse["default"];
      return this.apiClient.callApi('/versions/{version}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the versionsVersionItemsGet operation.
     * @callback module:api/VersionsApi~versionsVersionItemsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Api1VersionsItemsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List items by code version
     * List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions 
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {String} version The code version sent on the occurrence payload
     * @param {String} environment For one code version list the items only for this environment
     * @param {module:model/String} event Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.level Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
     * @param {Number} opts.page Page number, starting from 1. 20 elements are returned per page.
     * @param {module:api/VersionsApi~versionsVersionItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Api1VersionsItemsResponse}
     */

  }, {
    key: "versionsVersionItemsGet",
    value: function versionsVersionItemsGet(xRollbarAccessToken, version, environment, event, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling versionsVersionItemsGet");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling versionsVersionItemsGet");
      } // verify the required parameter 'environment' is set


      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling versionsVersionItemsGet");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling versionsVersionItemsGet");
      }

      var pathParams = {
        'version': version
      };
      var queryParams = {
        'environment': environment,
        'event': event,
        'level': this.apiClient.buildCollectionParam(opts['level'], 'csv'),
        'page': opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json; charset=utf-8'];
      var returnType = _Api1VersionsItemsResponse["default"];
      return this.apiClient.callApi('/versions/{version}/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return VersionsApi;
}();

exports["default"] = VersionsApi;