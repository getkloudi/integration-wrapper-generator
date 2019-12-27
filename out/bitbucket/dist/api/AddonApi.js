"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Addon service.
* @module api/AddonApi
* @version 1.1.0
*/
var AddonApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new AddonApi. 
  * @alias module:api/AddonApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AddonApi(apiClient) {
    _classCallCheck(this, AddonApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the addonDelete operation.
   * @callback module:api/AddonApi~addonDeleteCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Error} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/AddonApi~addonDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Error}
   */


  _createClass(AddonApi, [{
    key: "addonDelete",
    value: function addonDelete(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersGet operation.
     * @callback module:api/AddonApi~addonLinkersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AddonApi~addonLinkersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersGet",
    value: function addonLinkersGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyGet operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyGet",
    value: function addonLinkersLinkerKeyGet(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyGet");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesDelete operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesDelete",
    value: function addonLinkersLinkerKeyValuesDelete(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesDelete");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesDelete_0 operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesDelete_0",
    value: function addonLinkersLinkerKeyValuesDelete_0(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesDelete_0");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesGet operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesGet",
    value: function addonLinkersLinkerKeyValuesGet(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesGet");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesGet_0 operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesGet_0",
    value: function addonLinkersLinkerKeyValuesGet_0(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesGet_0");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesPost operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesPost",
    value: function addonLinkersLinkerKeyValuesPost(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesPost");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesPut operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonLinkersLinkerKeyValuesPut",
    value: function addonLinkersLinkerKeyValuesPut(linkerKey, callback) {
      var postBody = null; // verify the required parameter 'linkerKey' is set

      if (linkerKey === undefined || linkerKey === null) {
        throw new _Error["default"]("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesPut");
      }

      var pathParams = {
        'linker_key': linkerKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon/linkers/{linker_key}/values', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the addonPut operation.
     * @callback module:api/AddonApi~addonPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AddonApi~addonPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "addonPut",
    value: function addonPut(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/addon', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AddonApi;
}();

exports["default"] = AddonApi;