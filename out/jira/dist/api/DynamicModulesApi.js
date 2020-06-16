"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorMessage = _interopRequireDefault(require("../model/ErrorMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* DynamicModules service.
* @module api/DynamicModulesApi
* @version 1.4.0
*/
var DynamicModulesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DynamicModulesApi. 
  * @alias module:api/DynamicModulesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DynamicModulesApi(apiClient) {
    _classCallCheck(this, DynamicModulesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicDelete operation.
   * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Remove modules
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Array.<String>} opts.moduleKey The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
   * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DynamicModulesApi, [{
    key: "restAtlassianConnect1AppModuleDynamicDelete",
    value: function restAtlassianConnect1AppModuleDynamicDelete(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'moduleKey': this.apiClient.buildCollectionParam(opts['moduleKey'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rest/atlassian-connect/1/app/module/dynamic', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicGet operation.
     * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: [Object]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get modules
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: [Object]}>}
     */

  }, {
    key: "restAtlassianConnect1AppModuleDynamicGet",
    value: function restAtlassianConnect1AppModuleDynamicGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': [Object]
      };
      return this.apiClient.callApi('/rest/atlassian-connect/1/app/module/dynamic', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restAtlassianConnect1AppModuleDynamicPost operation.
     * @callback module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register modules
     * @param {Object} cloudid Cloudi of the project
     * @param {Object.<String, {String: [Object]}>} body 
     * @param {module:api/DynamicModulesApi~restAtlassianConnect1AppModuleDynamicPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "restAtlassianConnect1AppModuleDynamicPost",
    value: function restAtlassianConnect1AppModuleDynamicPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AppModuleDynamicPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restAtlassianConnect1AppModuleDynamicPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rest/atlassian-connect/1/app/module/dynamic', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DynamicModulesApi;
}();

exports["default"] = DynamicModulesApi;