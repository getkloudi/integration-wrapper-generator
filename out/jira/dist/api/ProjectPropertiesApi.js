"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("../model/EntityProperty"));

var _PropertyKeys = _interopRequireDefault(require("../model/PropertyKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectProperties service.
* @module api/ProjectPropertiesApi
* @version 1.4.0
*/
var ProjectPropertiesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectPropertiesApi. 
  * @alias module:api/ProjectPropertiesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectPropertiesApi(apiClient) {
    _classCallCheck(this, ProjectPropertiesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectProjectIdOrKeyPropertiesGet operation.
   * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get project property keys
   * @param {Object} cloudid Cloudi of the project
   * @param {String} projectIdOrKey The project ID or project key (case sensitive).
   * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(ProjectPropertiesApi, [{
    key: "projectProjectIdOrKeyPropertiesGet",
    value: function projectProjectIdOrKeyPropertiesGet(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesGet");
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
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyDelete operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdOrKeyPropertiesPropertyKeyDelete",
    value: function projectProjectIdOrKeyPropertiesPropertyKeyDelete(cloudid, projectIdOrKey, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyGet operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "projectProjectIdOrKeyPropertiesPropertyKeyGet",
    value: function projectProjectIdOrKeyPropertiesPropertyKeyGet(cloudid, projectIdOrKey, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPropertiesPropertyKeyPut operation.
     * @callback module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set project property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {String} propertyKey The key of the project property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/ProjectPropertiesApi~projectProjectIdOrKeyPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "projectProjectIdOrKeyPropertiesPropertyKeyPut",
    value: function projectProjectIdOrKeyPropertiesPropertyKeyPut(cloudid, projectIdOrKey, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/project/{projectIdOrKey}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectPropertiesApi;
}();

exports["default"] = ProjectPropertiesApi;