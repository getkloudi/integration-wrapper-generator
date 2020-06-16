"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Avatar = _interopRequireDefault(require("../model/Avatar"));

var _ProjectAvatars = _interopRequireDefault(require("../model/ProjectAvatars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectAvatars service.
* @module api/ProjectAvatarsApi
* @version 1.4.0
*/
var ProjectAvatarsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectAvatarsApi. 
  * @alias module:api/ProjectAvatarsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectAvatarsApi(apiClient) {
    _classCallCheck(this, ProjectAvatarsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectProjectIdOrKeyAvatar2Post operation.
   * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatar2PostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Avatar} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Load project avatar
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
   * @param {Object} body 
   * @param {Object} opts Optional parameters
   * @param {Number} opts.x The X coordinate of the top-left corner of the crop region. (default to 0)
   * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region. (default to 0)
   * @param {Number} opts.size The length of each side of the crop region.
   * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Avatar}
   */


  _createClass(ProjectAvatarsApi, [{
    key: "projectProjectIdOrKeyAvatar2Post",
    value: function projectProjectIdOrKeyAvatar2Post(cloudid, projectIdOrKey, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatar2Post");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatar2Post");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyAvatar2Post");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'x': opts['x'],
        'y': opts['y'],
        'size': opts['size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Avatar["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/avatar2', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarIdDelete operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or (case-sensitive) key.
     * @param {Number} id The ID of the avatar.
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdOrKeyAvatarIdDelete",
    value: function projectProjectIdOrKeyAvatarIdDelete(cloudid, projectIdOrKey, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarIdDelete");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyAvatarIdDelete");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{projectIdOrKey}/avatar/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarPut operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set project avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:model/Avatar} body 
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "projectProjectIdOrKeyAvatarPut",
    value: function projectProjectIdOrKeyAvatarPut(cloudid, projectIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarPut");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyAvatarPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/project/{projectIdOrKey}/avatar', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarsGet operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectAvatars} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all project avatars
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectAvatars}
     */

  }, {
    key: "projectProjectIdOrKeyAvatarsGet",
    value: function projectProjectIdOrKeyAvatarsGet(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarsGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarsGet");
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
      var returnType = _ProjectAvatars["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/avatars', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectAvatarsApi;
}();

exports["default"] = ProjectAvatarsApi;