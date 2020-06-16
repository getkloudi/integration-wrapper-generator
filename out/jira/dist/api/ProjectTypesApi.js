"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectType = _interopRequireDefault(require("../model/ProjectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectTypes service.
* @module api/ProjectTypesApi
* @version 1.4.0
*/
var ProjectTypesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectTypesApi. 
  * @alias module:api/ProjectTypesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectTypesApi(apiClient) {
    _classCallCheck(this, ProjectTypesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectTypeAccessibleGet operation.
   * @callback module:api/ProjectTypesApi~projectTypeAccessibleGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ProjectType>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get licensed project types
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/ProjectTypesApi~projectTypeAccessibleGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ProjectType>}
   */


  _createClass(ProjectTypesApi, [{
    key: "projectTypeAccessibleGet",
    value: function projectTypeAccessibleGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectTypeAccessibleGet");
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
      var returnType = [_ProjectType["default"]];
      return this.apiClient.callApi('/project/type/accessible', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectTypeGet operation.
     * @callback module:api/ProjectTypesApi~projectTypeGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectType>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all project types
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/ProjectTypesApi~projectTypeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectType>}
     */

  }, {
    key: "projectTypeGet",
    value: function projectTypeGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectTypeGet");
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
      var returnType = [_ProjectType["default"]];
      return this.apiClient.callApi('/project/type', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectTypeProjectTypeKeyAccessibleGet operation.
     * @callback module:api/ProjectTypesApi~projectTypeProjectTypeKeyAccessibleGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get accessible project type by key
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} projectTypeKey The key of the project type.
     * @param {module:api/ProjectTypesApi~projectTypeProjectTypeKeyAccessibleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectType}
     */

  }, {
    key: "projectTypeProjectTypeKeyAccessibleGet",
    value: function projectTypeProjectTypeKeyAccessibleGet(cloudid, projectTypeKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectTypeProjectTypeKeyAccessibleGet");
      } // verify the required parameter 'projectTypeKey' is set


      if (projectTypeKey === undefined || projectTypeKey === null) {
        throw new Error("Missing the required parameter 'projectTypeKey' when calling projectTypeProjectTypeKeyAccessibleGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectTypeKey': projectTypeKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectType["default"];
      return this.apiClient.callApi('/project/type/{projectTypeKey}/accessible', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectTypeProjectTypeKeyGet operation.
     * @callback module:api/ProjectTypesApi~projectTypeProjectTypeKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectType} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project type by key
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} projectTypeKey The key of the project type.
     * @param {module:api/ProjectTypesApi~projectTypeProjectTypeKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectType}
     */

  }, {
    key: "projectTypeProjectTypeKeyGet",
    value: function projectTypeProjectTypeKeyGet(cloudid, projectTypeKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectTypeProjectTypeKeyGet");
      } // verify the required parameter 'projectTypeKey' is set


      if (projectTypeKey === undefined || projectTypeKey === null) {
        throw new Error("Missing the required parameter 'projectTypeKey' when calling projectTypeProjectTypeKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectTypeKey': projectTypeKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectType["default"];
      return this.apiClient.callApi('/project/type/{projectTypeKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectTypesApi;
}();

exports["default"] = ProjectTypesApi;