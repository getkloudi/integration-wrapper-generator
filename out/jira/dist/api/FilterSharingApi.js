"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DefaultShareScope = _interopRequireDefault(require("../model/DefaultShareScope"));

var _SharePermission = _interopRequireDefault(require("../model/SharePermission"));

var _SharePermissionInputBean = _interopRequireDefault(require("../model/SharePermissionInputBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* FilterSharing service.
* @module api/FilterSharingApi
* @version 1.4.0
*/
var FilterSharingApi = /*#__PURE__*/function () {
  /**
  * Constructs a new FilterSharingApi. 
  * @alias module:api/FilterSharingApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function FilterSharingApi(apiClient) {
    _classCallCheck(this, FilterSharingApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the filterDefaultShareScopeGet operation.
   * @callback module:api/FilterSharingApi~filterDefaultShareScopeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DefaultShareScope} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get default share scope
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/FilterSharingApi~filterDefaultShareScopeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DefaultShareScope}
   */


  _createClass(FilterSharingApi, [{
    key: "filterDefaultShareScopeGet",
    value: function filterDefaultShareScopeGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterDefaultShareScopeGet");
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
      var returnType = _DefaultShareScope["default"];
      return this.apiClient.callApi('/filter/defaultShareScope', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filterDefaultShareScopePut operation.
     * @callback module:api/FilterSharingApi~filterDefaultShareScopePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DefaultShareScope} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set default share scope
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/DefaultShareScope} body 
     * @param {module:api/FilterSharingApi~filterDefaultShareScopePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DefaultShareScope}
     */

  }, {
    key: "filterDefaultShareScopePut",
    value: function filterDefaultShareScopePut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterDefaultShareScopePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling filterDefaultShareScopePut");
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
      var returnType = _DefaultShareScope["default"];
      return this.apiClient.callApi('/filter/defaultShareScope', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filterIdPermissionGet operation.
     * @callback module:api/FilterSharingApi~filterIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SharePermission>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get share permissions
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:api/FilterSharingApi~filterIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SharePermission>}
     */

  }, {
    key: "filterIdPermissionGet",
    value: function filterIdPermissionGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdPermissionGet");
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
      var returnType = [_SharePermission["default"]];
      return this.apiClient.callApi('/filter/{id}/permission', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filterIdPermissionPermissionIdDelete operation.
     * @callback module:api/FilterSharingApi~filterIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete share permission
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/FilterSharingApi~filterIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "filterIdPermissionPermissionIdDelete",
    value: function filterIdPermissionPermissionIdDelete(cloudid, id, permissionId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPermissionIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPermissionIdDelete");
      } // verify the required parameter 'permissionId' is set


      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling filterIdPermissionPermissionIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id,
        'permissionId': permissionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/filter/{id}/permission/{permissionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filterIdPermissionPermissionIdGet operation.
     * @callback module:api/FilterSharingApi~filterIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SharePermission} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get share permission
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {Number} permissionId The ID of the share permission.
     * @param {module:api/FilterSharingApi~filterIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SharePermission}
     */

  }, {
    key: "filterIdPermissionPermissionIdGet",
    value: function filterIdPermissionPermissionIdGet(cloudid, id, permissionId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPermissionIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPermissionIdGet");
      } // verify the required parameter 'permissionId' is set


      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling filterIdPermissionPermissionIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id,
        'permissionId': permissionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SharePermission["default"];
      return this.apiClient.callApi('/filter/{id}/permission/{permissionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the filterIdPermissionPost operation.
     * @callback module:api/FilterSharingApi~filterIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SharePermission>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add share permission
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the filter.
     * @param {module:model/SharePermissionInputBean} body 
     * @param {module:api/FilterSharingApi~filterIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SharePermission>}
     */

  }, {
    key: "filterIdPermissionPost",
    value: function filterIdPermissionPost(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling filterIdPermissionPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling filterIdPermissionPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling filterIdPermissionPost");
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
      var returnType = [_SharePermission["default"]];
      return this.apiClient.callApi('/filter/{id}/permission', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return FilterSharingApi;
}();

exports["default"] = FilterSharingApi;