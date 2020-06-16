"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueMatches = _interopRequireDefault(require("../model/IssueMatches"));

var _IssuePickerSuggestions = _interopRequireDefault(require("../model/IssuePickerSuggestions"));

var _IssuesAndJQLQueries = _interopRequireDefault(require("../model/IssuesAndJQLQueries"));

var _SearchRequestBean = _interopRequireDefault(require("../model/SearchRequestBean"));

var _SearchResults = _interopRequireDefault(require("../model/SearchResults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueSearch service.
* @module api/IssueSearchApi
* @version 1.4.0
*/
var IssueSearchApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueSearchApi. 
  * @alias module:api/IssueSearchApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueSearchApi(apiClient) {
    _classCallCheck(this, IssueSearchApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuePickerGet operation.
   * @callback module:api/IssueSearchApi~issuePickerGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IssuePickerSuggestions} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue picker suggestions
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {String} opts.query A string to match against text fields in the issue such as title, description, or comments.
   * @param {String} opts.currentJQL A JQL query defining a list of issues to search for the query term. Note that `username` and `userkey` cannot be used as search terms for this parameter, due to privacy reasons. Use `accountId` instead.
   * @param {String} opts.currentIssueKey The key of an issue to exclude from search results. For example, the issue the user is viewing when they perform this query.
   * @param {String} opts.currentProjectId The ID of a project that suggested issues must belong to.
   * @param {Boolean} opts.showSubTasks Indicate whether to include subtasks in the suggestions list.
   * @param {Boolean} opts.showSubTaskParent When `currentIssueKey` is a subtask, whether to include the parent issue in the suggestions if it matches the query.
   * @param {module:api/IssueSearchApi~issuePickerGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IssuePickerSuggestions}
   */


  _createClass(IssueSearchApi, [{
    key: "issuePickerGet",
    value: function issuePickerGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuePickerGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': opts['query'],
        'currentJQL': opts['currentJQL'],
        'currentIssueKey': opts['currentIssueKey'],
        'currentProjectId': opts['currentProjectId'],
        'showSubTasks': opts['showSubTasks'],
        'showSubTaskParent': opts['showSubTaskParent']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssuePickerSuggestions["default"];
      return this.apiClient.callApi('/issue/picker', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the jqlMatchPost operation.
     * @callback module:api/IssueSearchApi~jqlMatchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueMatches} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check issues against JQL
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssuesAndJQLQueries} body 
     * @param {module:api/IssueSearchApi~jqlMatchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueMatches}
     */

  }, {
    key: "jqlMatchPost",
    value: function jqlMatchPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling jqlMatchPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jqlMatchPost");
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
      var returnType = _IssueMatches["default"];
      return this.apiClient.callApi('/jql/match', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchGet operation.
     * @callback module:api/IssueSearchApi~searchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for issues using JQL (GET)
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.jql The [JQL](https://confluence.atlassian.com/x/egORLQ) that defines the search. Note:   *  If no JQL expression is provided, all issues are returned.  *  `username` and `userkey` cannot be used as search terms due to privacy reasons. Use `accountId` instead.  *  If a user has hidden their email address in their user profile, partial matches of the email address will not find the user. An exact match is required.
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. To manage page size, Jira may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. (default to 50)
     * @param {module:model/String} opts.validateQuery Determines how to validate the JQL query and treat the validation results. Supported values are:   *  `strict` Returns a 400 response code if any errors are found, along with a list of all errors (and warnings).  *  `warn` Returns all errors as warnings.  *  `none` No validation is performed.  *  `true` *Deprecated* A legacy synonym for `strict`.  *  `false` *Deprecated* A legacy synonym for `warn`.  Note: If the JQL is not correctly formed a 400 response code is returned, regardless of the `validateQuery` value. (default to 'strict')
     * @param {Array.<String>} opts.fields A list of fields to return for each issue, use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all navigable (default) fields except description.  *  `*all,-comment` Returns all fields except comments.  This parameter may be specified multiple times. For example, `fields=field1,field2&fields=field3`.  Note: All navigable fields are returned by default. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `operations` Returns all possible operations for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
     * @param {Array.<String>} opts.properties A list of issue property keys for issue properties to include in the results. This parameter accepts a comma-separated list. Multiple properties can also be provided using an ampersand separated list. For example, `properties=prop1,prop2&properties=prop3`. A maximum of 5 issue property keys can be specified.
     * @param {Boolean} opts.fieldsByKeys Reference fields by their key (rather than ID). (default to false)
     * @param {module:api/IssueSearchApi~searchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResults}
     */

  }, {
    key: "searchGet",
    value: function searchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling searchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'jql': opts['jql'],
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'validateQuery': opts['validateQuery'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'multi'),
        'expand': opts['expand'],
        'properties': this.apiClient.buildCollectionParam(opts['properties'], 'multi'),
        'fieldsByKeys': opts['fieldsByKeys']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SearchResults["default"];
      return this.apiClient.callApi('/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the searchPost operation.
     * @callback module:api/IssueSearchApi~searchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SearchResults} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for issues using JQL (POST)
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/SearchRequestBean} body A JSON object containing the search request.
     * @param {module:api/IssueSearchApi~searchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SearchResults}
     */

  }, {
    key: "searchPost",
    value: function searchPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling searchPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling searchPost");
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
      var returnType = _SearchResults["default"];
      return this.apiClient.callApi('/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueSearchApi;
}();

exports["default"] = IssueSearchApi;