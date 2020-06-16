"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ActorInputBean = _interopRequireDefault(require("../model/ActorInputBean"));

var _ActorsMap = _interopRequireDefault(require("../model/ActorsMap"));

var _ProjectRole = _interopRequireDefault(require("../model/ProjectRole"));

var _ProjectRoleActorsUpdateBean = _interopRequireDefault(require("../model/ProjectRoleActorsUpdateBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectRoleActors service.
* @module api/ProjectRoleActorsApi
* @version 1.4.0
*/
var ProjectRoleActorsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectRoleActorsApi. 
  * @alias module:api/ProjectRoleActorsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectRoleActorsApi(apiClient) {
    _classCallCheck(this, ProjectRoleActorsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectProjectIdOrKeyRoleIdDelete operation.
   * @callback module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete actors from project role
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectIdOrKey The project ID or project key (case sensitive).
   * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
   * @param {Object} opts Optional parameters
   * @param {String} opts.user The user account ID of the user to remove from the project role.
   * @param {String} opts.group The name of the group to remove from the project role.
   * @param {module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ProjectRoleActorsApi, [{
    key: "projectProjectIdOrKeyRoleIdDelete",
    value: function projectProjectIdOrKeyRoleIdDelete(cloudid, projectIdOrKey, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdDelete");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'id': id
      };
      var queryParams = {
        'user': opts['user'],
        'group': opts['group']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdPost operation.
     * @callback module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add actors to project role
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/ActorsMap} body The groups or users to associate with the project role for this project. Provide the user account ID or group name.
     * @param {module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "projectProjectIdOrKeyRoleIdPost",
    value: function projectProjectIdOrKeyRoleIdPost(cloudid, projectIdOrKey, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdPost");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyRoleIdPost");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdPut operation.
     * @callback module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set actors for project role
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/ProjectRoleActorsUpdateBean} body The groups or users to associate with the project role for this project. Provide the user account ID or group name.
     * @param {module:api/ProjectRoleActorsApi~projectProjectIdOrKeyRoleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "projectProjectIdOrKeyRoleIdPut",
    value: function projectProjectIdOrKeyRoleIdPut(cloudid, projectIdOrKey, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdPut");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyRoleIdPut");
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/role/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdActorsDelete operation.
     * @callback module:api/ProjectRoleActorsApi~roleIdActorsDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete default actors from project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.user The user account ID of the user to remove as a default actor.
     * @param {String} opts.group The group name of the group to be removed as a default actor.
     * @param {module:api/ProjectRoleActorsApi~roleIdActorsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdActorsDelete",
    value: function roleIdActorsDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdActorsDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'user': opts['user'],
        'group': opts['group']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectRole["default"];
      return this.apiClient.callApi('/role/{id}/actors', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdActorsGet operation.
     * @callback module:api/ProjectRoleActorsApi~roleIdActorsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get default actors for project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:api/ProjectRoleActorsApi~roleIdActorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdActorsGet",
    value: function roleIdActorsGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdActorsGet");
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
      return this.apiClient.callApi('/role/{id}/actors', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the roleIdActorsPost operation.
     * @callback module:api/ProjectRoleActorsApi~roleIdActorsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add default actors to project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/ActorInputBean} body 
     * @param {module:api/ProjectRoleActorsApi~roleIdActorsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */

  }, {
    key: "roleIdActorsPost",
    value: function roleIdActorsPost(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdActorsPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdActorsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling roleIdActorsPost");
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
      return this.apiClient.callApi('/role/{id}/actors', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectRoleActorsApi;
}();

exports["default"] = ProjectRoleActorsApi;