"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Dashboard = _interopRequireDefault(require("../model/Dashboard"));

var _DashboardRequest = _interopRequireDefault(require("../model/DashboardRequest"));

var _EntityProperty = _interopRequireDefault(require("../model/EntityProperty"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _PageBeanDashboard = _interopRequireDefault(require("../model/PageBeanDashboard"));

var _PageOfDashboards = _interopRequireDefault(require("../model/PageOfDashboards"));

var _PropertyKeys = _interopRequireDefault(require("../model/PropertyKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Dashboards service.
* @module api/DashboardsApi
* @version 1.4.0
*/
var DashboardsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DashboardsApi. 
  * @alias module:api/DashboardsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DashboardsApi(apiClient) {
    _classCallCheck(this, DashboardsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesGet operation.
   * @callback module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PropertyKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get dashboard item property keys
   * @param {Object} cloudid Cloudi of the project
   * @param {String} dashboardId The ID of the dashboard.
   * @param {String} itemId The ID of the dashboard item.
   * @param {module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PropertyKeys}
   */


  _createClass(DashboardsApi, [{
    key: "dashboardDashboardIdItemsItemIdPropertiesGet",
    value: function dashboardDashboardIdItemsItemIdPropertiesGet(cloudid, dashboardId, itemId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesGet");
      } // verify the required parameter 'dashboardId' is set


      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesGet");
      } // verify the required parameter 'itemId' is set


      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'dashboardId': dashboardId,
        'itemId': itemId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PropertyKeys["default"];
      return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete operation.
     * @callback module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete dashboard item property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete",
    value: function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(cloudid, dashboardId, itemId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'dashboardId' is set


      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'itemId' is set


      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet operation.
     * @callback module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EntityProperty} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dashboard item property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property.
     * @param {module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EntityProperty}
     */

  }, {
    key: "dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet",
    value: function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(cloudid, dashboardId, itemId, propertyKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'dashboardId' is set


      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'itemId' is set


      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _EntityProperty["default"];
      return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut operation.
     * @callback module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set dashboard item property
     * @param {Object} cloudid Cloudi of the project
     * @param {String} dashboardId The ID of the dashboard.
     * @param {String} itemId The ID of the dashboard item.
     * @param {String} propertyKey The key of the dashboard item property. The maximum length is 255 characters.
     * @param {Object} body 
     * @param {module:api/DashboardsApi~dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut",
    value: function dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(cloudid, dashboardId, itemId, propertyKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'dashboardId' is set


      if (dashboardId === undefined || dashboardId === null) {
        throw new Error("Missing the required parameter 'dashboardId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'itemId' is set


      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'propertyKey' is set


      if (propertyKey === undefined || propertyKey === null) {
        throw new Error("Missing the required parameter 'propertyKey' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'dashboardId': dashboardId,
        'itemId': itemId,
        'propertyKey': propertyKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardGet operation.
     * @callback module:api/DashboardsApi~dashboardGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageOfDashboards} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all dashboards
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.filter The filter applied to the list of dashboards. Valid values are:   *  `favourite` Returns dashboards the user has marked as favorite.  *  `my` Returns dashboards owned by the user.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 20)
     * @param {module:api/DashboardsApi~dashboardGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageOfDashboards}
     */

  }, {
    key: "dashboardGet",
    value: function dashboardGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'filter': opts['filter'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageOfDashboards["default"];
      return this.apiClient.callApi('/dashboard', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardIdCopyPost operation.
     * @callback module:api/DashboardsApi~dashboardIdCopyPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy dashboard
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id 
     * @param {module:model/DashboardRequest} body Dashboard details.
     * @param {module:api/DashboardsApi~dashboardIdCopyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Dashboard}
     */

  }, {
    key: "dashboardIdCopyPost",
    value: function dashboardIdCopyPost(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardIdCopyPost");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardIdCopyPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardIdCopyPost");
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
      var returnType = _Dashboard["default"];
      return this.apiClient.callApi('/dashboard/{id}/copy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardIdDelete operation.
     * @callback module:api/DashboardsApi~dashboardIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete dashboard
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the dashboard.
     * @param {module:api/DashboardsApi~dashboardIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "dashboardIdDelete",
    value: function dashboardIdDelete(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardIdDelete");
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
      var returnType = null;
      return this.apiClient.callApi('/dashboard/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardIdGet operation.
     * @callback module:api/DashboardsApi~dashboardIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get dashboard
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the dashboard.
     * @param {module:api/DashboardsApi~dashboardIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Dashboard}
     */

  }, {
    key: "dashboardIdGet",
    value: function dashboardIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardIdGet");
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
      var returnType = _Dashboard["default"];
      return this.apiClient.callApi('/dashboard/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardIdPut operation.
     * @callback module:api/DashboardsApi~dashboardIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update dashboard
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the dashboard to update.
     * @param {module:model/DashboardRequest} body Replacement dashboard details.
     * @param {module:api/DashboardsApi~dashboardIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Dashboard}
     */

  }, {
    key: "dashboardIdPut",
    value: function dashboardIdPut(cloudid, id, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dashboardIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardIdPut");
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
      var returnType = _Dashboard["default"];
      return this.apiClient.callApi('/dashboard/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardPost operation.
     * @callback module:api/DashboardsApi~dashboardPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Dashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create dashboard
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/DashboardRequest} body Dashboard details.
     * @param {module:api/DashboardsApi~dashboardPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Dashboard}
     */

  }, {
    key: "dashboardPost",
    value: function dashboardPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling dashboardPost");
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
      var returnType = _Dashboard["default"];
      return this.apiClient.callApi('/dashboard', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dashboardSearchGet operation.
     * @callback module:api/DashboardsApi~dashboardSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanDashboard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for dashboards
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.dashboardName String used to perform a case-insensitive partial match with `name`.
     * @param {String} opts.accountId User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.
     * @param {String} opts.owner This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.
     * @param {String} opts.groupname Group name used to returns dashboards that are shared with a group that matches `sharePermissions.group.name`.
     * @param {Number} opts.projectId Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field:   *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by dashboard popularity.  *  `id` Sorts by dashboard ID.  *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.  *  `name` Sorts by dashboard name.  *  `owner` Sorts by dashboard owner name. (default to 'name')
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the dashboard.  *  `owner` Returns the owner of the dashboard.  *  `viewUrl` Returns the URL that is used to view the dashboard.  *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.  *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.  *  `sharePermissions` Returns details of the share permissions defined for the dashboard.
     * @param {module:api/DashboardsApi~dashboardSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanDashboard}
     */

  }, {
    key: "dashboardSearchGet",
    value: function dashboardSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling dashboardSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'dashboardName': opts['dashboardName'],
        'accountId': opts['accountId'],
        'owner': opts['owner'],
        'groupname': opts['groupname'],
        'projectId': opts['projectId'],
        'orderBy': opts['orderBy'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanDashboard["default"];
      return this.apiClient.callApi('/dashboard/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DashboardsApi;
}();

exports["default"] = DashboardsApi;