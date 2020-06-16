"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ChangedWorklogs = _interopRequireDefault(require("../model/ChangedWorklogs"));

var _PageOfWorklogs = _interopRequireDefault(require("../model/PageOfWorklogs"));

var _Worklog = _interopRequireDefault(require("../model/Worklog"));

var _WorklogIdsRequestBean = _interopRequireDefault(require("../model/WorklogIdsRequestBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueWorklogs service.
* @module api/IssueWorklogsApi
* @version 1.4.0
*/
var IssueWorklogsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueWorklogsApi. 
  * @alias module:api/IssueWorklogsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueWorklogsApi(apiClient) {
    _classCallCheck(this, IssueWorklogsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueIssueIdOrKeyWorklogGet operation.
   * @callback module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageOfWorklogs} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue worklogs
   * @param {Object} cloudid Cloudi of the project
   * @param {String} issueIdOrKey The ID or key of the issue.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 1048576)
   * @param {Number} opts.startedAfter The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.
   * @param {String} opts.expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.
   * @param {module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageOfWorklogs}
   */


  _createClass(IssueWorklogsApi, [{
    key: "issueIssueIdOrKeyWorklogGet",
    value: function issueIssueIdOrKeyWorklogGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'startedAfter': opts['startedAfter'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageOfWorklogs["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdDelete operation.
     * @callback module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete worklog
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} id The ID of the worklog.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Whether users watching the issue are notified by email. (default to true)
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (default to 'auto')
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
     * @param {String} opts.increaseBy The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`.
     * @param {Boolean} opts.overrideEditableFlag Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag. (default to false)
     * @param {module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueIssueIdOrKeyWorklogIdDelete",
    value: function issueIssueIdOrKeyWorklogIdDelete(cloudid, issueIdOrKey, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'id': id
      };
      var queryParams = {
        'notifyUsers': opts['notifyUsers'],
        'adjustEstimate': opts['adjustEstimate'],
        'newEstimate': opts['newEstimate'],
        'increaseBy': opts['increaseBy'],
        'overrideEditableFlag': opts['overrideEditableFlag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdGet operation.
     * @callback module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Worklog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get worklog
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {String} id The ID of the worklog.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties.
     * @param {module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Worklog}
     */

  }, {
    key: "issueIssueIdOrKeyWorklogIdGet",
    value: function issueIssueIdOrKeyWorklogIdGet(cloudid, issueIdOrKey, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'id': id
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Worklog["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogIdPut operation.
     * @callback module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Worklog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update worklog
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {String} id The ID of the worklog.
     * @param {module:model/Worklog} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Whether users watching the issue are notified by email. (default to true)
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`. (default to 'auto')
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.
     * @param {Boolean} opts.overrideEditableFlag Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Only connect app users with admin permissions can use this flag. (default to false)
     * @param {module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Worklog}
     */

  }, {
    key: "issueIssueIdOrKeyWorklogIdPut",
    value: function issueIssueIdOrKeyWorklogIdPut(cloudid, issueIdOrKey, id, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogIdPut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogIdPut");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling issueIssueIdOrKeyWorklogIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyWorklogIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey,
        'id': id
      };
      var queryParams = {
        'notifyUsers': opts['notifyUsers'],
        'adjustEstimate': opts['adjustEstimate'],
        'newEstimate': opts['newEstimate'],
        'expand': opts['expand'],
        'overrideEditableFlag': opts['overrideEditableFlag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Worklog["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog/{id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyWorklogPost operation.
     * @callback module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Worklog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add worklog
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key the issue.
     * @param {module:model/Worklog} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Whether users watching the issue are notified by email. (default to true)
     * @param {module:model/String} opts.adjustEstimate Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog. (default to 'auto')
     * @param {String} opts.newEstimate The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
     * @param {String} opts.reduceBy The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.
     * @param {Boolean} opts.overrideEditableFlag Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag. (default to false)
     * @param {module:api/IssueWorklogsApi~issueIssueIdOrKeyWorklogPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Worklog}
     */

  }, {
    key: "issueIssueIdOrKeyWorklogPost",
    value: function issueIssueIdOrKeyWorklogPost(cloudid, issueIdOrKey, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyWorklogPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyWorklogPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyWorklogPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'notifyUsers': opts['notifyUsers'],
        'adjustEstimate': opts['adjustEstimate'],
        'newEstimate': opts['newEstimate'],
        'reduceBy': opts['reduceBy'],
        'expand': opts['expand'],
        'overrideEditableFlag': opts['overrideEditableFlag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Worklog["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/worklog', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the worklogDeletedGet operation.
     * @callback module:api/IssueWorklogsApi~worklogDeletedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangedWorklogs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get IDs of deleted worklogs
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.since The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. (default to 0)
     * @param {module:api/IssueWorklogsApi~worklogDeletedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangedWorklogs}
     */

  }, {
    key: "worklogDeletedGet",
    value: function worklogDeletedGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling worklogDeletedGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'since': opts['since']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChangedWorklogs["default"];
      return this.apiClient.callApi('/worklog/deleted', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the worklogListPost operation.
     * @callback module:api/IssueWorklogsApi~worklogListPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Worklog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get worklogs
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/WorklogIdsRequestBean} body A JSON object containing a list of worklog IDs.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
     * @param {module:api/IssueWorklogsApi~worklogListPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Worklog>}
     */

  }, {
    key: "worklogListPost",
    value: function worklogListPost(cloudid, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling worklogListPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling worklogListPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_Worklog["default"]];
      return this.apiClient.callApi('/worklog/list', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the worklogUpdatedGet operation.
     * @callback module:api/IssueWorklogsApi~worklogUpdatedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ChangedWorklogs} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get IDs of updated worklogs
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.since The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. (default to 0)
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
     * @param {module:api/IssueWorklogsApi~worklogUpdatedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ChangedWorklogs}
     */

  }, {
    key: "worklogUpdatedGet",
    value: function worklogUpdatedGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling worklogUpdatedGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'since': opts['since'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ChangedWorklogs["default"];
      return this.apiClient.callApi('/worklog/updated', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueWorklogsApi;
}();

exports["default"] = IssueWorklogsApi;