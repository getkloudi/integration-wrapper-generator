"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectCategory = _interopRequireDefault(require("../model/ProjectCategory"));

var _UpdatedProjectCategory = _interopRequireDefault(require("../model/UpdatedProjectCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectCategories service.
* @module api/ProjectCategoriesApi
* @version 1.4.0
*/
var ProjectCategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectCategoriesApi. 
  * @alias module:api/ProjectCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectCategoriesApi(apiClient) {
    _classCallCheck(this, ProjectCategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectCategoryGet operation.
   * @callback module:api/ProjectCategoriesApi~projectCategoryGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ProjectCategory>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all project categories
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/ProjectCategoriesApi~projectCategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ProjectCategory>}
   */


  _createClass(ProjectCategoriesApi, [{
    key: "projectCategoryGet",
    value: function projectCategoryGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryGet");
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
      var returnType = [_ProjectCategory["default"]];
      return this.apiClient.callApi('/projectCategory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectCategoryIdDelete operation.
     * @callback module:api/ProjectCategoriesApi~projectCategoryIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project category
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id ID of the project category to delete.
     * @param {module:api/ProjectCategoriesApi~projectCategoryIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectCategoryIdDelete",
    value: function projectCategoryIdDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectCategoryIdDelete");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/projectCategory/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectCategoryIdGet operation.
     * @callback module:api/ProjectCategoriesApi~projectCategoryIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project category by id
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project category.
     * @param {module:api/ProjectCategoriesApi~projectCategoryIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectCategory}
     */

  }, {
    key: "projectCategoryIdGet",
    value: function projectCategoryIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectCategoryIdGet");
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
      var returnType = _ProjectCategory["default"];
      return this.apiClient.callApi('/projectCategory/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectCategoryIdPut operation.
     * @callback module:api/ProjectCategoriesApi~projectCategoryIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdatedProjectCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project category
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id 
     * @param {module:model/ProjectCategory} body 
     * @param {module:api/ProjectCategoriesApi~projectCategoryIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdatedProjectCategory}
     */

  }, {
    key: "projectCategoryIdPut",
    value: function projectCategoryIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectCategoryIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectCategoryIdPut");
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
      var returnType = _UpdatedProjectCategory["default"];
      return this.apiClient.callApi('/projectCategory/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectCategoryPost operation.
     * @callback module:api/ProjectCategoriesApi~projectCategoryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project category
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/ProjectCategory} body 
     * @param {module:api/ProjectCategoriesApi~projectCategoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectCategory}
     */

  }, {
    key: "projectCategoryPost",
    value: function projectCategoryPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectCategoryPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectCategoryPost");
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
      var returnType = _ProjectCategory["default"];
      return this.apiClient.callApi('/projectCategory', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectCategoriesApi;
}();

exports["default"] = ProjectCategoriesApi;