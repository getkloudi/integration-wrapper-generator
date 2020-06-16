"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("../model/EntityProperty"));

var _OperationMessage = _interopRequireDefault(require("../model/OperationMessage"));

var _PropertyKeys = _interopRequireDefault(require("../model/PropertyKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* AppProperties service.
* @module api/AppPropertiesApi
* @version 1.4.0
*/
var AppPropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AppPropertiesApi. 
  * @alias module:api/AppPropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AppPropertiesApi(apiClient) {
    _classCallCheck(this, AppPropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the restAtlassianConnect1AddonsAddonKeyPropertiesGet operation.
   * @callback module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get app properties
   * @param {Object} cloudid Cloudi of the project
   * @param {String} addonKey The key of the app, as defined in its descriptor.
   * @param {module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(AppPropertiesApi, [{
    key: "restAtlassianConnect1AddonsAddonKeyPropertiesGet",
    value: function restAtlassianConnect1AddonsAddonKeyPropertiesGet(cloudid, addonKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AddonsAddonKeyPropertiesGet");
      } // verify the required parameter 'addonKey' is set


      if (addonKey === undefined || addonKey === null) {
        throw new Error("Missing the required parameter 'addonKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'addonKey': addonKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/rest/atlassian-connect/1/addons/{addonKey}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete app property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} addonKey The key of the app, as defined in its descriptor.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete",
    value: function restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(cloudid, addonKey, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete");
      } // verify the required parameter 'addonKey' is set


      if (addonKey === undefined || addonKey === null) {
        throw new Error("Missing the required parameter 'addonKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'addonKey': addonKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get app property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} addonKey The key of the app, as defined in its descriptor.
     * @param {String} propertyKey The key of the property.
     * @param {module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet",
    value: function restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(cloudid, addonKey, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet");
      } // verify the required parameter 'addonKey' is set


      if (addonKey === undefined || addonKey === null) {
        throw new Error("Missing the required parameter 'addonKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'addonKey': addonKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OperationMessage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set app property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} addonKey The key of the app, as defined in its descriptor.
     * @param {String} propertyKey The key of the property.
     * @param {Object} body 
     * @param {module:api/AppPropertiesApi~restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OperationMessage}
     */

  }, {
    key: "restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut",
    value: function restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(cloudid, addonKey, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'addonKey' is set


      if (addonKey === undefined || addonKey === null) {
        throw new Error("Missing the required parameter 'addonKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'addonKey': addonKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _OperationMessage["default"];
      return this.apiClient.callApi('/rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AppPropertiesApi;
}();

exports["default"] = AppPropertiesApi;