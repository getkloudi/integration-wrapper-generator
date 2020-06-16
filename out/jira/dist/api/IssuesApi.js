"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreatedIssue = _interopRequireDefault(require("../model/CreatedIssue"));

var _CreatedIssues = _interopRequireDefault(require("../model/CreatedIssues"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _IssueBean = _interopRequireDefault(require("../model/IssueBean"));

var _IssueCreateMetadata = _interopRequireDefault(require("../model/IssueCreateMetadata"));

var _IssueUpdateDetails = _interopRequireDefault(require("../model/IssueUpdateDetails"));

var _IssueUpdateMetadata = _interopRequireDefault(require("../model/IssueUpdateMetadata"));

var _IssuesUpdateBean = _interopRequireDefault(require("../model/IssuesUpdateBean"));

var _Notification = _interopRequireDefault(require("../model/Notification"));

var _PageBeanChangelog = _interopRequireDefault(require("../model/PageBeanChangelog"));

var _Transitions = _interopRequireDefault(require("../model/Transitions"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Issues service.
* @module api/IssuesApi
* @version 1.4.0
*/
var IssuesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssuesApi. 
  * @alias module:api/IssuesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssuesApi(apiClient) {
    _classCallCheck(this, IssuesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issueBulkPost operation.
   * @callback module:api/IssuesApi~issueBulkPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/CreatedIssues} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Bulk create issue
   * @param {Object} cloudid Cloudi of the project
   * @param {module:model/IssuesUpdateBean} body 
   * @param {module:api/IssuesApi~issueBulkPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/CreatedIssues}
   */


  _createClass(IssuesApi, [{
    key: "issueBulkPost",
    value: function issueBulkPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueBulkPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueBulkPost");
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
      var returnType = _CreatedIssues["default"];
      return this.apiClient.callApi('/issue/bulk', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueCreatemetaGet operation.
     * @callback module:api/IssuesApi~issueCreatemetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueCreateMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get create issue metadata
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.projectIds List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
     * @param {Array.<String>} opts.projectKeys List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
     * @param {Array.<String>} opts.issuetypeIds List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
     * @param {Array.<String>} opts.issuetypeNames List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).
     * @param {module:api/IssuesApi~issueCreatemetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueCreateMetadata}
     */

  }, {
    key: "issueCreatemetaGet",
    value: function issueCreatemetaGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueCreatemetaGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'projectIds': this.apiClient.buildCollectionParam(opts['projectIds'], 'multi'),
        'projectKeys': this.apiClient.buildCollectionParam(opts['projectKeys'], 'multi'),
        'issuetypeIds': this.apiClient.buildCollectionParam(opts['issuetypeIds'], 'multi'),
        'issuetypeNames': this.apiClient.buildCollectionParam(opts['issuetypeNames'], 'multi'),
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueCreateMetadata["default"];
      return this.apiClient.callApi('/issue/createmeta', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyAssigneePut operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyAssigneePutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue to be assigned.
     * @param {module:model/User} body The request object with the user that the issue is assigned to.
     * @param {module:api/IssuesApi~issueIssueIdOrKeyAssigneePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyAssigneePut",
    value: function issueIssueIdOrKeyAssigneePut(cloudid, issueIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyAssigneePut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyAssigneePut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyAssigneePut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/assignee', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyChangelogGet operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyChangelogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanChangelog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get change logs
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 100)
     * @param {module:api/IssuesApi~issueIssueIdOrKeyChangelogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanChangelog}
     */

  }, {
    key: "issueIssueIdOrKeyChangelogGet",
    value: function issueIssueIdOrKeyChangelogGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyChangelogGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyChangelogGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanChangelog["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/changelog', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyDelete operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.deleteSubtasks Whether the issue's subtasks are deleted when the issue is deleted. (default to 'false')
     * @param {module:api/IssuesApi~issueIssueIdOrKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "issueIssueIdOrKeyDelete",
    value: function issueIssueIdOrKeyDelete(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyDelete");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'deleteSubtasks': opts['deleteSubtasks']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/issue/{issueIdOrKey}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyEditmetaGet operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyEditmetaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueUpdateMetadata} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get edit issue metadata
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.overrideScreenSecurity Whether hidden fields should be returned. Available to connect app users with admin permissions. (default to false)
     * @param {Boolean} opts.overrideEditableFlag Whether non-editable fields should be returned. Available to connect app users with admin permissions. (default to false)
     * @param {module:api/IssuesApi~issueIssueIdOrKeyEditmetaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueUpdateMetadata}
     */

  }, {
    key: "issueIssueIdOrKeyEditmetaGet",
    value: function issueIssueIdOrKeyEditmetaGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyEditmetaGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyEditmetaGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'overrideScreenSecurity': opts['overrideScreenSecurity'],
        'overrideEditableFlag': opts['overrideEditableFlag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueUpdateMetadata["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/editmeta', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyGet operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueBean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all (default) fields except description.  *  `*navigable,-comment` Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.
     * @param {Boolean} opts.fieldsByKeys Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID. (default to false)
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.
     * @param {Array.<String>} opts.properties A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  `*all` Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  `*all` Returns all properties.  *  `*all,-prop1` Returns all properties except `prop1`.  *  `prop1,prop2` Returns `prop1` and `prop2` properties.  This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.
     * @param {Boolean} opts.updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field. (default to false)
     * @param {module:api/IssuesApi~issueIssueIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueBean}
     */

  }, {
    key: "issueIssueIdOrKeyGet",
    value: function issueIssueIdOrKeyGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'fieldsByKeys': opts['fieldsByKeys'],
        'expand': opts['expand'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'multi'),
        'updateHistory': opts['updateHistory']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueBean["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyNotifyPost operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyNotifyPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send notification for issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey ID or key of the issue that the notification is sent for.
     * @param {module:model/Notification} body The request object for the notification and recipients.
     * @param {module:api/IssuesApi~issueIssueIdOrKeyNotifyPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyNotifyPost",
    value: function issueIssueIdOrKeyNotifyPost(cloudid, issueIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyNotifyPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyNotifyPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyNotifyPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/notify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyPut operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:model/IssueUpdateDetails} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notifyUsers Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored. (default to true)
     * @param {Boolean} opts.overrideScreenSecurity Whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions. (default to false)
     * @param {Boolean} opts.overrideEditableFlag Whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions. (default to false)
     * @param {module:api/IssuesApi~issueIssueIdOrKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyPut",
    value: function issueIssueIdOrKeyPut(cloudid, issueIdOrKey, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyPut");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'notifyUsers': opts['notifyUsers'],
        'overrideScreenSecurity': opts['overrideScreenSecurity'],
        'overrideEditableFlag': opts['overrideEditableFlag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyTransitionsGet operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyTransitionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Transitions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get transitions
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).
     * @param {String} opts.transitionId The ID of the transition.
     * @param {Boolean} opts.skipRemoteOnlyCondition Whether transitions with the condition *Hide From User Condition* are included in the response. (default to false)
     * @param {Boolean} opts.includeUnavailableTransitions Whether details of transitions that fail a condition are included in the response (default to false)
     * @param {module:api/IssuesApi~issueIssueIdOrKeyTransitionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Transitions}
     */

  }, {
    key: "issueIssueIdOrKeyTransitionsGet",
    value: function issueIssueIdOrKeyTransitionsGet(cloudid, issueIdOrKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyTransitionsGet");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyTransitionsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {
        'expand': opts['expand'],
        'transitionId': opts['transitionId'],
        'skipRemoteOnlyCondition': opts['skipRemoteOnlyCondition'],
        'includeUnavailableTransitions': opts['includeUnavailableTransitions']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Transitions["default"];
      return this.apiClient.callApi('/issue/{issueIdOrKey}/transitions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issueIssueIdOrKeyTransitionsPost operation.
     * @callback module:api/IssuesApi~issueIssueIdOrKeyTransitionsPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transition issue
     * @param {Object} cloudid Cloudi of the project
     * @param {String} issueIdOrKey The ID or key of the issue.
     * @param {module:model/IssueUpdateDetails} body 
     * @param {module:api/IssuesApi~issueIssueIdOrKeyTransitionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issueIssueIdOrKeyTransitionsPost",
    value: function issueIssueIdOrKeyTransitionsPost(cloudid, issueIdOrKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueIssueIdOrKeyTransitionsPost");
      } // verify the required parameter 'issueIdOrKey' is set


      if (issueIdOrKey === undefined || issueIdOrKey === null) {
        throw new Error("Missing the required parameter 'issueIdOrKey' when calling issueIssueIdOrKeyTransitionsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueIssueIdOrKeyTransitionsPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueIdOrKey': issueIdOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issue/{issueIdOrKey}/transitions', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuePost operation.
     * @callback module:api/IssuesApi~issuePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreatedIssue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueUpdateDetails} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.updateHistory Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. (default to false)
     * @param {module:api/IssuesApi~issuePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreatedIssue}
     */

  }, {
    key: "issuePost",
    value: function issuePost(cloudid, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuePost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'updateHistory': opts['updateHistory']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _CreatedIssue["default"];
      return this.apiClient.callApi('/issue', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssuesApi;
}();

exports["default"] = IssuesApi;