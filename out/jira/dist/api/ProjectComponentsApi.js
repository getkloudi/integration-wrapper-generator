"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Component = _interopRequireDefault(require("../model/Component"));

var _ComponentIssuesCount = _interopRequireDefault(require("../model/ComponentIssuesCount"));

var _PageBeanComponentWithIssueCount = _interopRequireDefault(require("../model/PageBeanComponentWithIssueCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ProjectComponents service.
* @module api/ProjectComponentsApi
* @version 1.4.0
*/
var ProjectComponentsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectComponentsApi. 
  * @alias module:api/ProjectComponentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectComponentsApi(apiClient) {
    _classCallCheck(this, ProjectComponentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the componentIdDelete operation.
   * @callback module:api/ProjectComponentsApi~componentIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete component
   * @param {Object} cloudid Cloudi of the project
   * @param {String} id The ID of the component.
   * @param {Object} opts Optional parameters
   * @param {String} opts.moveIssuesTo The ID of the component to replace the deleted component. If this value is null no replacement is made.
   * @param {module:api/ProjectComponentsApi~componentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ProjectComponentsApi, [{
    key: "componentIdDelete",
    value: function componentIdDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling componentIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling componentIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'moveIssuesTo': opts['moveIssuesTo']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/component/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the componentIdGet operation.
     * @callback module:api/ProjectComponentsApi~componentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Component} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get component
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {module:api/ProjectComponentsApi~componentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Component}
     */

  }, {
    key: "componentIdGet",
    value: function componentIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling componentIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling componentIdGet");
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
      var returnType = _Component["default"];
      return this.apiClient.callApi('/component/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the componentIdPut operation.
     * @callback module:api/ProjectComponentsApi~componentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Component} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update component
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {module:model/Component} body 
     * @param {module:api/ProjectComponentsApi~componentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Component}
     */

  }, {
    key: "componentIdPut",
    value: function componentIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling componentIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling componentIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling componentIdPut");
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
      var returnType = _Component["default"];
      return this.apiClient.callApi('/component/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the componentIdRelatedIssueCountsGet operation.
     * @callback module:api/ProjectComponentsApi~componentIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ComponentIssuesCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get component issues count
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the component.
     * @param {module:api/ProjectComponentsApi~componentIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ComponentIssuesCount}
     */

  }, {
    key: "componentIdRelatedIssueCountsGet",
    value: function componentIdRelatedIssueCountsGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling componentIdRelatedIssueCountsGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling componentIdRelatedIssueCountsGet");
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
      var returnType = _ComponentIssuesCount["default"];
      return this.apiClient.callApi('/component/{id}/relatedIssueCounts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the componentPost operation.
     * @callback module:api/ProjectComponentsApi~componentPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Component} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create component
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/Component} body 
     * @param {module:api/ProjectComponentsApi~componentPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Component}
     */

  }, {
    key: "componentPost",
    value: function componentPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling componentPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling componentPost");
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
      var returnType = _Component["default"];
      return this.apiClient.callApi('/component', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyComponentGet operation.
     * @callback module:api/ProjectComponentsApi~projectProjectIdOrKeyComponentGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanComponentWithIssueCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project components paginated
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `issueCount` Sorts by the count of issues associated with the component.  *  `lead` Sorts by the user key of the component's project lead.  *  `name` Sorts by component name.
     * @param {String} opts.query Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).
     * @param {module:api/ProjectComponentsApi~projectProjectIdOrKeyComponentGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanComponentWithIssueCount}
     */

  }, {
    key: "projectProjectIdOrKeyComponentGet",
    value: function projectProjectIdOrKeyComponentGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyComponentGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyComponentGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'orderBy': opts['orderBy'],
        'query': opts['query']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanComponentWithIssueCount["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/component', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyComponentsGet operation.
     * @callback module:api/ProjectComponentsApi~projectProjectIdOrKeyComponentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Component>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project components
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/ProjectComponentsApi~projectProjectIdOrKeyComponentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Component>}
     */

  }, {
    key: "projectProjectIdOrKeyComponentsGet",
    value: function projectProjectIdOrKeyComponentsGet(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyComponentsGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyComponentsGet");
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
      var returnType = [_Component["default"]];
      return this.apiClient.callApi('/project/{projectIdOrKey}/components', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectComponentsApi;
}();

exports["default"] = ProjectComponentsApi;