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
* Versions service.
* @module api/VersionsApi
* @version 1.0.0
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
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Code version details in one project
   * Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions 
   * @param {Object} environment The environment where the code version is detected
   * @param {Object} opts Optional parameters
   * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
   * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
   * @param {module:api/VersionsApi~versionsVersionGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(VersionsApi, [{
    key: "versionsVersionGet",
    value: function versionsVersionGet(environment, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'environment' is set

      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling versionsVersionGet");
      }

      var pathParams = {};
      var queryParams = {
        'environment': environment
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/versions/{version}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the versionsVersionItemsGet operation.
     * @callback module:api/VersionsApi~versionsVersionItemsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List items by code version
     * List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions 
     * @param {Object} environment For one code version list the items only for this environment
     * @param {Object} event Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version 
     * @param {Object} opts Optional parameters
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME 
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
     * @param {Object} opts.level Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
     * @param {module:model/null} opts.UNKNOWN_PARAMETER_NAME2 
     * @param {module:api/VersionsApi~versionsVersionItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "versionsVersionItemsGet",
    value: function versionsVersionItemsGet(environment, event, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'environment' is set

      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling versionsVersionItemsGet");
      } // verify the required parameter 'event' is set


      if (event === undefined || event === null) {
        throw new Error("Missing the required parameter 'event' when calling versionsVersionItemsGet");
      }

      var pathParams = {};
      var queryParams = {
        'environment': environment,
        'event': event,
        'level': opts['level']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/versions/{version}/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return VersionsApi;
}();

exports["default"] = VersionsApi;