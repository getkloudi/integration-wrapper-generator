"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeWithStatus = _interopRequireDefault(require("../model/IssueTypeWithStatus"));

var _NotificationScheme = _interopRequireDefault(require("../model/NotificationScheme"));

var _PageBeanProject = _interopRequireDefault(require("../model/PageBeanProject"));

var _Project = _interopRequireDefault(require("../model/Project"));

var _ProjectIdentifiers = _interopRequireDefault(require("../model/ProjectIdentifiers"));

var _ProjectInputBean = _interopRequireDefault(require("../model/ProjectInputBean"));

var _ProjectIssueTypeHierarchy = _interopRequireDefault(require("../model/ProjectIssueTypeHierarchy"));

var _TaskProgressBeanObject = _interopRequireDefault(require("../model/TaskProgressBeanObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Projects service.
* @module api/ProjectsApi
* @version 1.4.0
*/
var ProjectsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProjectsApi. 
  * @alias module:api/ProjectsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ProjectsApi(apiClient) {
    _classCallCheck(this, ProjectsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the projectGet operation.
   * @callback module:api/ProjectsApi~projectGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/Project>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all projects
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `issueTypes` Returns all issue types associated with the project.  *  `lead` Returns information about the the project lead.  *  `projectKeys` Returns all project keys associated with the project.
   * @param {Number} opts.recent Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.
   * @param {Array.<String>} opts.properties A list of project properties to return for the project. This parameter accepts a comma-separated list.
   * @param {module:api/ProjectsApi~projectGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/Project>}
   */


  _createClass(ProjectsApi, [{
    key: "projectGet",
    value: function projectGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'expand': opts['expand'],
        'recent': opts['recent'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Project["default"]];
      return this.apiClient.callApi('/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectPost operation.
     * @callback module:api/ProjectsApi~projectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectIdentifiers} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/ProjectInputBean} body The JSON representation of the project being created.
     * @param {module:api/ProjectsApi~projectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectIdentifiers}
     */

  }, {
    key: "projectPost",
    value: function projectPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectPost");
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
      var returnType = _ProjectIdentifiers["default"];
      return this.apiClient.callApi('/project', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdHierarchyGet operation.
     * @callback module:api/ProjectsApi~projectProjectIdHierarchyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectIssueTypeHierarchy} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project issue type hierarchy
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} projectId The ID of the project.
     * @param {module:api/ProjectsApi~projectProjectIdHierarchyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectIssueTypeHierarchy}
     */

  }, {
    key: "projectProjectIdHierarchyGet",
    value: function projectProjectIdHierarchyGet(cloudid, projectId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdHierarchyGet");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdHierarchyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectId': projectId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ProjectIssueTypeHierarchy["default"];
      return this.apiClient.callApi('/project/{projectId}/hierarchy', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyDelete operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.enableUndo EXPERIMENTAL. Whether this project is placed in the Jira recycle bin where it will be available for restoration. (default to false)
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdOrKeyDelete",
    value: function projectProjectIdOrKeyDelete(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyDelete");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'enableUndo': opts['enableUndo']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{projectIdOrKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyDeletePost operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyDeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project asynchronously
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdOrKeyDeletePost",
    value: function projectProjectIdOrKeyDeletePost(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyDeletePost");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyDeletePost");
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
      var returnType = null;
      return this.apiClient.callApi('/project/{projectIdOrKey}/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyGet operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.  *  `issueTypeHierarchy` The project issue type hierarchy.
     * @param {Array.<String>} opts.properties A list of project properties to return for the project. This parameter accepts a comma-separated list.
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectProjectIdOrKeyGet",
    value: function projectProjectIdOrKeyGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'expand': opts['expand'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyPut operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:model/ProjectInputBean} body The project details to be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectProjectIdOrKeyPut",
    value: function projectProjectIdOrKeyPut(cloudid, projectIdOrKey, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyPut");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyStatusesGet operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyStatusesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IssueTypeWithStatus>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all statuses for project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyStatusesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IssueTypeWithStatus>}
     */

  }, {
    key: "projectProjectIdOrKeyStatusesGet",
    value: function projectProjectIdOrKeyStatusesGet(cloudid, projectIdOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyStatusesGet");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyStatusesGet");
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
      var returnType = [_IssueTypeWithStatus["default"]];
      return this.apiClient.callApi('/project/{projectIdOrKey}/statuses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdOrKeyTypeNewProjectTypeKeyPut operation.
     * @callback module:api/ProjectsApi~projectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update project type
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:model/String} newProjectTypeKey The key of the new project type.
     * @param {module:api/ProjectsApi~projectProjectIdOrKeyTypeNewProjectTypeKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */

  }, {
    key: "projectProjectIdOrKeyTypeNewProjectTypeKeyPut",
    value: function projectProjectIdOrKeyTypeNewProjectTypeKeyPut(cloudid, projectIdOrKey, newProjectTypeKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");
      } // verify the required parameter 'projectIdOrKey' is set


      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");
      } // verify the required parameter 'newProjectTypeKey' is set


      if (newProjectTypeKey === undefined || newProjectTypeKey === null) {
        throw new Error("Missing the required parameter 'newProjectTypeKey' when calling projectProjectIdOrKeyTypeNewProjectTypeKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'newProjectTypeKey': newProjectTypeKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Project["default"];
      return this.apiClient.callApi('/project/{projectIdOrKey}/type/{newProjectTypeKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectKeyOrIdNotificationschemeGet operation.
     * @callback module:api/ProjectsApi~projectProjectKeyOrIdNotificationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NotificationScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project notification scheme
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectKeyOrId The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
     * @param {module:api/ProjectsApi~projectProjectKeyOrIdNotificationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NotificationScheme}
     */

  }, {
    key: "projectProjectKeyOrIdNotificationschemeGet",
    value: function projectProjectKeyOrIdNotificationschemeGet(cloudid, projectKeyOrId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectKeyOrIdNotificationschemeGet");
      } // verify the required parameter 'projectKeyOrId' is set


      if (projectKeyOrId === undefined || projectKeyOrId === null) {
        throw new Error("Missing the required parameter 'projectKeyOrId' when calling projectProjectKeyOrIdNotificationschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'projectKeyOrId': projectKeyOrId
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _NotificationScheme["default"];
      return this.apiClient.callApi('/project/{projectKeyOrId}/notificationscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectSearchGet operation.
     * @callback module:api/ProjectsApi~projectSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanProject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get projects paginated
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field.   *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).  *  `issueCount` Sorts by the total number of issues in each project.  *  `key` Sorts by project key.  *  `lastIssueUpdatedTime` Sorts by the last issue update time.  *  `name` Sorts by project name.  *  `owner` Sorts by project lead.  *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.  *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date. (default to 'key')
     * @param {String} opts.query Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).
     * @param {String} opts.typeKey Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.
     * @param {Number} opts.categoryId The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
     * @param {String} opts.searchBy  (default to 'key, name')
     * @param {module:model/String} opts.action Filter results by projects for which the user can:   *  `view` the project, meaning that they have one of the following permissions:           *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  `edit` the project, meaning that they have one of the following permissions:           *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). (default to 'view')
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `projectKeys` Returns all project keys associated with a project.  *  `lead` Returns information about the the project lead.  *  `issueTypes` Returns all issue types associated with the project.  *  `url` Returns the URL associated with the project.  *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
     * @param {Array.<String>} opts.status EXPERIMENTAL. Filter results by project status:   *  `live` Search live projects.  *  `archived` Search archived projects.  *  `deleted` Search deleted projects, those in the recycle bin.
     * @param {module:api/ProjectsApi~projectSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanProject}
     */

  }, {
    key: "projectSearchGet",
    value: function projectSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'orderBy': opts['orderBy'],
        'query': opts['query'],
        'typeKey': opts['typeKey'],
        'categoryId': opts['categoryId'],
        'searchBy': opts['searchBy'],
        'action': opts['action'],
        'expand': opts['expand'],
        'status': this.apiClient.buildCollectionParam(opts['status'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanProject["default"];
      return this.apiClient.callApi('/project/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ProjectsApi;
}();

exports["default"] = ProjectsApi;