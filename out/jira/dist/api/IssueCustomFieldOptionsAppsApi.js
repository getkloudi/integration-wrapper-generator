"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueFieldOption = _interopRequireDefault(require("../model/IssueFieldOption"));

var _IssueFieldOptionCreateBean = _interopRequireDefault(require("../model/IssueFieldOptionCreateBean"));

var _PageBeanIssueFieldOption = _interopRequireDefault(require("../model/PageBeanIssueFieldOption"));

var _TaskProgressBeanRemoveOptionFromIssuesResult = _interopRequireDefault(require("../model/TaskProgressBeanRemoveOptionFromIssuesResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueCustomFieldOptionsApps service.
* @module api/IssueCustomFieldOptionsAppsApi
* @version 1.4.0
*/
var IssueCustomFieldOptionsAppsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueCustomFieldOptionsAppsApi. 
  * @alias module:api/IssueCustomFieldOptionsAppsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueCustomFieldOptionsAppsApi(apiClient) {
    _classCallCheck(this, IssueCustomFieldOptionsAppsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the fieldFieldKeyOptionGet operation.
   * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanIssueFieldOption} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all issue field options
   * @param {Object} cloudid Cloudi of the project
   * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanIssueFieldOption}
   */


  _createClass(IssueCustomFieldOptionsAppsApi, [{
    key: "fieldFieldKeyOptionGet",
    value: function fieldFieldKeyOptionGet(cloudid, fieldKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionGet");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey
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
      var returnType = _PageBeanIssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdDelete operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Number} optionId The ID of the option to be deleted.
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "fieldFieldKeyOptionOptionIdDelete",
    value: function fieldFieldKeyOptionOptionIdDelete(cloudid, fieldKey, optionId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdDelete");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdDelete");
      } // verify the required parameter 'optionId' is set


      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey,
        'optionId': optionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdGet operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Number} optionId The ID of the option to be returned.
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueFieldOption}
     */

  }, {
    key: "fieldFieldKeyOptionOptionIdGet",
    value: function fieldFieldKeyOptionOptionIdGet(cloudid, fieldKey, optionId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdGet");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdGet");
      } // verify the required parameter 'optionId' is set


      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey,
        'optionId': optionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdIssueDelete operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdIssueDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace issue field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Number} optionId The ID of the option to be deselected.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.replaceWith The ID of the option that will replace the currently selected option.
     * @param {String} opts.jql A JQL query that specifies the issues to be updated. For example, *project=10000*.
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdIssueDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "fieldFieldKeyOptionOptionIdIssueDelete",
    value: function fieldFieldKeyOptionOptionIdIssueDelete(cloudid, fieldKey, optionId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdIssueDelete");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdIssueDelete");
      } // verify the required parameter 'optionId' is set


      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdIssueDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey,
        'optionId': optionId
      };
      var queryParams = {
        'replaceWith': opts['replaceWith'],
        'jql': opts['jql']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}/issue', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionOptionIdPut operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update issue field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Number} optionId The ID of the option to be updated.
     * @param {module:model/IssueFieldOption} body 
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionOptionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueFieldOption}
     */

  }, {
    key: "fieldFieldKeyOptionOptionIdPut",
    value: function fieldFieldKeyOptionOptionIdPut(cloudid, fieldKey, optionId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionOptionIdPut");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionOptionIdPut");
      } // verify the required parameter 'optionId' is set


      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling fieldFieldKeyOptionOptionIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fieldFieldKeyOptionOptionIdPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey,
        'optionId': optionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option/{optionId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionPost operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {module:model/IssueFieldOptionCreateBean} body 
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueFieldOption}
     */

  }, {
    key: "fieldFieldKeyOptionPost",
    value: function fieldFieldKeyOptionPost(cloudid, fieldKey, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionPost");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fieldFieldKeyOptionPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionSuggestionsEditGet operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionSuggestionsEditGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get selectable issue field options
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project.
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionSuggestionsEditGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueFieldOption}
     */

  }, {
    key: "fieldFieldKeyOptionSuggestionsEditGet",
    value: function fieldFieldKeyOptionSuggestionsEditGet(cloudid, fieldKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionSuggestionsEditGet");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionSuggestionsEditGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': opts['projectId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option/suggestions/edit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldFieldKeyOptionSuggestionsSearchGet operation.
     * @callback module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionSuggestionsSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get visible issue field options
     * @param {Object} cloudid Cloudi of the project
     * @param {String} fieldKey The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page.
     * @param {Number} opts.projectId Filters the results to options that are only available in the specified project.
     * @param {module:api/IssueCustomFieldOptionsAppsApi~fieldFieldKeyOptionSuggestionsSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueFieldOption}
     */

  }, {
    key: "fieldFieldKeyOptionSuggestionsSearchGet",
    value: function fieldFieldKeyOptionSuggestionsSearchGet(cloudid, fieldKey, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldKeyOptionSuggestionsSearchGet");
      } // verify the required parameter 'fieldKey' is set


      if (fieldKey === undefined || fieldKey === null) {
        throw new Error("Missing the required parameter 'fieldKey' when calling fieldFieldKeyOptionSuggestionsSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldKey': fieldKey
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': opts['projectId']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueFieldOption["default"];
      return this.apiClient.callApi('/field/{fieldKey}/option/suggestions/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueCustomFieldOptionsAppsApi;
}();

exports["default"] = IssueCustomFieldOptionsAppsApi;