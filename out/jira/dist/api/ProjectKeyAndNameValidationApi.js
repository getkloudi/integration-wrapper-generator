"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectKeyAndNameValidation service.
* @module api/ProjectKeyAndNameValidationApi
* @version 1.4.0
*/
var ProjectKeyAndNameValidationApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectKeyAndNameValidationApi. 
  * @alias module:api/ProjectKeyAndNameValidationApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectKeyAndNameValidationApi(apiClient) {
    _classCallCheck(this, ProjectKeyAndNameValidationApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectvalidateKeyGet operation.
   * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateKeyGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ErrorCollection} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Validate project key
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {String} opts.key The project key.
   * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ErrorCollection}
   */


  _createClass(ProjectKeyAndNameValidationApi, [{
    key: "projectvalidateKeyGet",
    value: function projectvalidateKeyGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': opts['key']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ErrorCollection["default"];
      return this.apiClient.callApi('/projectvalidate/key', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectvalidateValidProjectKeyGet operation.
     * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get valid project key
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The project key.
     * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "projectvalidateValidProjectKeyGet",
    value: function projectvalidateValidProjectKeyGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'key': opts['key']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/projectvalidate/validProjectKey', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectvalidateValidProjectNameGet operation.
     * @callback module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectNameGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get valid project name
     * @param {Object} cloudid Cloudi of the project
     * @param {String} name The project name.
     * @param {module:api/ProjectKeyAndNameValidationApi~projectvalidateValidProjectNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "projectvalidateValidProjectNameGet",
    value: function projectvalidateValidProjectNameGet(cloudid, name, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectvalidateValidProjectNameGet");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling projectvalidateValidProjectNameGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'name': name
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/projectvalidate/validProjectName', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectKeyAndNameValidationApi;
}();

exports["default"] = ProjectKeyAndNameValidationApi;