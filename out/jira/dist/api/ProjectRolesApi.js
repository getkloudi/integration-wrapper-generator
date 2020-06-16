"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreateUpdateRoleRequestBean = _interopRequireDefault(require("../model/CreateUpdateRoleRequestBean"));

var _ProjectRole = _interopRequireDefault(require("../model/ProjectRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectRoles service.
* @module api/ProjectRolesApi
* @version 1.4.0
*/
var ProjectRolesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectRolesApi. 
  * @alias module:api/ProjectRolesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectRolesApi(apiClient) {
    _classCallCheck(this, ProjectRolesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectProjectIdOrKeyRoleGet operation.
   * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoleGetCallback
   * @param {String} error Error message, if any.
   * @param {Object.<String, {String: String}>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get project roles for project
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectIdOrKey The project ID or project key (case sensitive).
   * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoleGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object.<String, {String: String}>}
   */


  _createClass(ProjectRolesApi, [{
    key: "projectProjectIdOrKeyRoleGet",
    value: function projectProjectIdOrKeyRoleGet(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = {
        'String': 'String'
      };
      return this.apiClient.callApi('/project/{projectIdOrKey}/role', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdGet operation.
     * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role for project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "projectProjectIdOrKeyRoleIdGet",
    value: function projectProjectIdOrKeyRoleIdGet(cloudid, projectIdOrKey, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoledetailsGet operation.
     * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoledetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role details
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.currentMember Whether the roles should be filtered to include only those the user is assigned to. (default to false)
     * @param {Boolean} opts.excludeConnectAddons  (default to false)
     * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoledetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectRole>}
     */

  }, {
    key: "projectProjectIdOrKeyRoledetailsGet",
    value: function projectProjectIdOrKeyRoledetailsGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoledetailsGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoledetailsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'currentMember': opts['currentMember'],
        'excludeConnectAddons': opts['excludeConnectAddons']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ProjectRole["default"]];
      return this.apiClient.callApi('/project/{projectIdOrKey}/roledetails', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleGet operation.
     * @callback module:api/ProjectRolesApi~roleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all project roles
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/ProjectRolesApi~roleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectRole>}
     */

  }, {
    key: "roleGet",
    value: function roleGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleGet");
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
      var returnType = [_ProjectRole["default"]];
      return this.apiClient.callApi('/role', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdDelete operation.
     * @callback module:api/ProjectRolesApi~roleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.swap The ID of the project role that will replace the one being deleted.
     * @param {module:api/ProjectRolesApi~roleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "roleIdDelete",
    value: function roleIdDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'swap': opts['swap']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/role/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdGet operation.
     * @callback module:api/ProjectRolesApi~roleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role by ID
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:api/ProjectRolesApi~roleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdGet",
    value: function roleIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdGet");
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
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/role/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdPost operation.
     * @callback module:api/ProjectRolesApi~roleIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial update project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~roleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdPost",
    value: function roleIdPost(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling roleIdPost");
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
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/role/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdPut operation.
     * @callback module:api/ProjectRolesApi~roleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fully update project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~roleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdPut",
    value: function roleIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling roleIdPut");
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
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/role/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rolePost operation.
     * @callback module:api/ProjectRolesApi~rolePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project role
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~rolePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "rolePost",
    value: function rolePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling rolePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rolePost");
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
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/role', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectRolesApi;
}();

exports["default"] = ProjectRolesApi;