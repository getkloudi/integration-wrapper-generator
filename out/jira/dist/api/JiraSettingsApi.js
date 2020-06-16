"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ApplicationProperty = _interopRequireDefault(require("../model/ApplicationProperty"));

var _Configuration = _interopRequireDefault(require("../model/Configuration"));

var _SimpleApplicationPropertyBean = _interopRequireDefault(require("../model/SimpleApplicationPropertyBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* JiraSettings service.
* @module api/JiraSettingsApi
* @version 1.4.0
*/
var JiraSettingsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JiraSettingsApi. 
  * @alias module:api/JiraSettingsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JiraSettingsApi(apiClient) {
    _classCallCheck(this, JiraSettingsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the applicationPropertiesAdvancedSettingsGet operation.
   * @callback module:api/JiraSettingsApi~applicationPropertiesAdvancedSettingsGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ApplicationProperty>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get advanced settings
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/JiraSettingsApi~applicationPropertiesAdvancedSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ApplicationProperty>}
   */


  _createClass(JiraSettingsApi, [{
    key: "applicationPropertiesAdvancedSettingsGet",
    value: function applicationPropertiesAdvancedSettingsGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesAdvancedSettingsGet");
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
      var returnType = [_ApplicationProperty["default"]];
      return this.apiClient.callApi('/application-properties/advanced-settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationPropertiesGet operation.
     * @callback module:api/JiraSettingsApi~applicationPropertiesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApplicationProperty>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application property
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key of the application property.
     * @param {String} opts.permissionLevel The permission level of all items being returned in the list.
     * @param {String} opts.keyFilter When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.
     * @param {module:api/JiraSettingsApi~applicationPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApplicationProperty>}
     */

  }, {
    key: "applicationPropertiesGet",
    value: function applicationPropertiesGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': opts['key'],
        'permissionLevel': opts['permissionLevel'],
        'keyFilter': opts['keyFilter']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ApplicationProperty["default"]];
      return this.apiClient.callApi('/application-properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the applicationPropertiesIdPut operation.
     * @callback module:api/JiraSettingsApi~applicationPropertiesIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set application property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The key of the application property to update.
     * @param {module:model/SimpleApplicationPropertyBean} body 
     * @param {module:api/JiraSettingsApi~applicationPropertiesIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationProperty}
     */

  }, {
    key: "applicationPropertiesIdPut",
    value: function applicationPropertiesIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling applicationPropertiesIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling applicationPropertiesIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling applicationPropertiesIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ApplicationProperty["default"];
      return this.apiClient.callApi('/application-properties/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configurationGet operation.
     * @callback module:api/JiraSettingsApi~configurationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Configuration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get global settings
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/JiraSettingsApi~configurationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Configuration}
     */

  }, {
    key: "configurationGet",
    value: function configurationGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling configurationGet");
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
      var returnType = _Configuration["default"];
      return this.apiClient.callApi('/configuration', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return JiraSettingsApi;
}();

exports["default"] = JiraSettingsApi;