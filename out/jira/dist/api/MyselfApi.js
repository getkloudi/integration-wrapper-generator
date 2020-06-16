"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Locale = _interopRequireDefault(require("../model/Locale"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Myself service.
* @module api/MyselfApi
* @version 1.4.0
*/
var MyselfApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MyselfApi. 
  * @alias module:api/MyselfApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function MyselfApi(apiClient) {
    _classCallCheck(this, MyselfApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the mypreferencesDelete operation.
   * @callback module:api/MyselfApi~mypreferencesDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete preference
   * @param {Object} cloudid Cloudi of the project
   * @param {String} key The key of the preference.
   * @param {module:api/MyselfApi~mypreferencesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(MyselfApi, [{
    key: "mypreferencesDelete",
    value: function mypreferencesDelete(cloudid, key, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesDelete");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling mypreferencesDelete");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': key
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/mypreferences', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mypreferencesGet operation.
     * @callback module:api/MyselfApi~mypreferencesGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get preference
     * @param {Object} cloudid Cloudi of the project
     * @param {String} key The key of the preference.
     * @param {module:api/MyselfApi~mypreferencesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "mypreferencesGet",
    value: function mypreferencesGet(cloudid, key, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesGet");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling mypreferencesGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': key
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/mypreferences', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mypreferencesLocaleDelete operation.
     * @callback module:api/MyselfApi~mypreferencesLocaleDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete locale
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/MyselfApi~mypreferencesLocaleDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "mypreferencesLocaleDelete",
    value: function mypreferencesLocaleDelete(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocaleDelete");
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
      var returnType = Object;
      return this.apiClient.callApi('/mypreferences/locale', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mypreferencesLocaleGet operation.
     * @callback module:api/MyselfApi~mypreferencesLocaleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Locale} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get locale
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/MyselfApi~mypreferencesLocaleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Locale}
     */

  }, {
    key: "mypreferencesLocaleGet",
    value: function mypreferencesLocaleGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocaleGet");
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
      var returnType = _Locale["default"];
      return this.apiClient.callApi('/mypreferences/locale', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mypreferencesLocalePut operation.
     * @callback module:api/MyselfApi~mypreferencesLocalePutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set locale
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/Locale} body The locale defined in a LocaleBean.
     * @param {module:api/MyselfApi~mypreferencesLocalePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "mypreferencesLocalePut",
    value: function mypreferencesLocalePut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesLocalePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling mypreferencesLocalePut");
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
      return this.apiClient.callApi('/mypreferences/locale', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the mypreferencesPut operation.
     * @callback module:api/MyselfApi~mypreferencesPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set preference
     * @param {Object} cloudid Cloudi of the project
     * @param {String} key The key of the preference. The maximum length is 255 characters.
     * @param {String} body The value of the preference as a plain text string. The maximum length is 255 characters.
     * @param {module:api/MyselfApi~mypreferencesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "mypreferencesPut",
    value: function mypreferencesPut(cloudid, key, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling mypreferencesPut");
      } // verify the required parameter 'key' is set


      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling mypreferencesPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling mypreferencesPut");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': key
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/mypreferences', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the myselfGet operation.
     * @callback module:api/MyselfApi~myselfGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get current user
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` Returns all groups, including nested groups, the user belongs to.  *  `applicationRoles` Returns the application roles the user is assigned to.
     * @param {module:api/MyselfApi~myselfGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */

  }, {
    key: "myselfGet",
    value: function myselfGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling myselfGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _User["default"];
      return this.apiClient.callApi('/myself', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return MyselfApi;
}();

exports["default"] = MyselfApi;