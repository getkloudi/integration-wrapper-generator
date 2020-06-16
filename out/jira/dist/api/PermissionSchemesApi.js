"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PermissionGrant = _interopRequireDefault(require("../model/PermissionGrant"));

var _PermissionGrants = _interopRequireDefault(require("../model/PermissionGrants"));

var _PermissionScheme = _interopRequireDefault(require("../model/PermissionScheme"));

var _PermissionSchemes = _interopRequireDefault(require("../model/PermissionSchemes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* PermissionSchemes service.
* @module api/PermissionSchemesApi
* @version 1.4.0
*/
var PermissionSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PermissionSchemesApi. 
  * @alias module:api/PermissionSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PermissionSchemesApi(apiClient) {
    _classCallCheck(this, PermissionSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the permissionschemeGet operation.
   * @callback module:api/PermissionSchemesApi~permissionschemeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PermissionSchemes} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all permission schemes
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
   * @param {module:api/PermissionSchemesApi~permissionschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PermissionSchemes}
   */


  _createClass(PermissionSchemesApi, [{
    key: "permissionschemeGet",
    value: function permissionschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeGet");
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
      var returnType = _PermissionSchemes["default"];
      return this.apiClient.callApi('/permissionscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemePost operation.
     * @callback module:api/PermissionSchemesApi~permissionschemePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/PermissionScheme} body The permission scheme to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/PermissionSchemesApi~permissionschemePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */

  }, {
    key: "permissionschemePost",
    value: function permissionschemePost(cloudid, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionschemePost");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PermissionScheme["default"];
      return this.apiClient.callApi('/permissionscheme', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdDelete operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme being deleted.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "permissionschemeSchemeIdDelete",
    value: function permissionschemeSchemeIdDelete(cloudid, schemeId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdDelete");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/permissionscheme/{schemeId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdGet operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme to return.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */

  }, {
    key: "permissionschemeSchemeIdGet",
    value: function permissionschemeSchemeIdGet(cloudid, schemeId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdGet");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PermissionScheme["default"];
      return this.apiClient.callApi('/permissionscheme/{schemeId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionGet operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionGrants} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permission scheme grants
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionGrants}
     */

  }, {
    key: "permissionschemeSchemeIdPermissionGet",
    value: function permissionschemeSchemeIdPermissionGet(cloudid, schemeId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionGet");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PermissionGrants["default"];
      return this.apiClient.callApi('/permissionscheme/{schemeId}/permission', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPermissionIdDelete operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPermissionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete permission scheme grant
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme to delete the permission grant from.
     * @param {Number} permissionId The ID of the permission grant to delete.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPermissionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "permissionschemeSchemeIdPermissionPermissionIdDelete",
    value: function permissionschemeSchemeIdPermissionPermissionIdDelete(cloudid, schemeId, permissionId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");
      } // verify the required parameter 'permissionId' is set


      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling permissionschemeSchemeIdPermissionPermissionIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId,
        'permissionId': permissionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/permissionscheme/{schemeId}/permission/{permissionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPermissionIdGet operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPermissionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionGrant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get permission scheme grant
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme.
     * @param {Number} permissionId The ID of the permission grant.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPermissionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionGrant}
     */

  }, {
    key: "permissionschemeSchemeIdPermissionPermissionIdGet",
    value: function permissionschemeSchemeIdPermissionPermissionIdGet(cloudid, schemeId, permissionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPermissionIdGet");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPermissionIdGet");
      } // verify the required parameter 'permissionId' is set


      if (permissionId === undefined || permissionId === null) {
        throw new Error("Missing the required parameter 'permissionId' when calling permissionschemeSchemeIdPermissionPermissionIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId,
        'permissionId': permissionId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PermissionGrant["default"];
      return this.apiClient.callApi('/permissionscheme/{schemeId}/permission/{permissionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdPermissionPost operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionGrant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create permission grant
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme in which to create a new permission grant.
     * @param {module:model/PermissionGrant} body The permission grant to create.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdPermissionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionGrant}
     */

  }, {
    key: "permissionschemeSchemeIdPermissionPost",
    value: function permissionschemeSchemeIdPermissionPost(cloudid, schemeId, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPermissionPost");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPermissionPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionschemeSchemeIdPermissionPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PermissionGrant["default"];
      return this.apiClient.callApi('/permissionscheme/{schemeId}/permission', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the permissionschemeSchemeIdPut operation.
     * @callback module:api/PermissionSchemesApi~permissionschemeSchemeIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PermissionScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update permission scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} schemeId The ID of the permission scheme to update.
     * @param {module:model/PermissionScheme} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
     * @param {module:api/PermissionSchemesApi~permissionschemeSchemeIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PermissionScheme}
     */

  }, {
    key: "permissionschemeSchemeIdPut",
    value: function permissionschemeSchemeIdPut(cloudid, schemeId, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling permissionschemeSchemeIdPut");
      } // verify the required parameter 'schemeId' is set


      if (schemeId === undefined || schemeId === null) {
        throw new Error("Missing the required parameter 'schemeId' when calling permissionschemeSchemeIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling permissionschemeSchemeIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'schemeId': schemeId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PermissionScheme["default"];
      return this.apiClient.callApi('/permissionscheme/{schemeId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PermissionSchemesApi;
}();

exports["default"] = PermissionSchemesApi;