"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api1DeployRequest = _interopRequireDefault(require("../model/Api1DeployRequest"));

var _Api1DeployRequest2 = _interopRequireDefault(require("../model/Api1DeployRequest1"));

var _Api1DsymRequest = _interopRequireDefault(require("../model/Api1DsymRequest"));

var _Api1ItemRequest = _interopRequireDefault(require("../model/Api1ItemRequest1"));

var _Api1ProguardRequest = _interopRequireDefault(require("../model/Api1ProguardRequest"));

var _Api1ProjectAccessTokenRequest = _interopRequireDefault(require("../model/Api1ProjectAccessTokenRequest"));

var _Api1ProjectsRequest = _interopRequireDefault(require("../model/Api1ProjectsRequest"));

var _Api1RqlJobsRequest = _interopRequireDefault(require("../model/Api1RqlJobsRequest"));

var _Api1SourcemapRequest = _interopRequireDefault(require("../model/Api1SourcemapRequest"));

var _Api1TeamInvitesRequest = _interopRequireDefault(require("../model/Api1TeamInvitesRequest"));

var _Api1TeamsRequest = _interopRequireDefault(require("../model/Api1TeamsRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Default service.
 * @module api/DefaultApi
 * @version 1.1.0
 */
var DefaultApi = /*#__PURE__*/function () {
  /**
   * Constructs a new DefaultApi.
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the deployGet operation.
   * @callback module:api/DefaultApi~deployGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * `deploy_id` must be an ID for a deploy in the project. These IDs are returned as the id field in other API calls, and can be found in the Rollbar UI on URLs like `https://rollbar.com/deploy/12345/` (`12345` is the Deploy ID).
   * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
   * @param {module:api/DefaultApi~deployGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(DefaultApi, [{
    key: "deployGet",
    value: function deployGet(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling deployGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/deploy', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deployPatch operation.
     * @callback module:api/DefaultApi~deployPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * ```JavaScript $.get('http://yoursite.com/test/' + id, function(data) {     console.log(data); });```
     * @param {String} xRollbarAccessToken Use a post server item access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1DeployRequest1} opts.body
     * @param {module:api/DefaultApi~deployPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deployPatch",
    value: function deployPatch(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling deployPatch");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/deploy', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deployPost operation.
     * @callback module:api/DefaultApi~deployPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * For tool-specific instructions on reporting a deploy, see our [Deploy Tracking](doc:deploy-tracking) docs.  For instructions on setting the default deploy timeout period, see [Deploy Timeouts](https://docs.rollbar.com/docs/deploy-tracking#section-deploy-timeout).
     * @param {String} xRollbarAccessToken Use a post server item access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1DeployRequest} opts.body
     * @param {module:api/DefaultApi~deployPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deployPost",
    value: function deployPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling deployPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/deploy', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deploysGet operation.
     * @callback module:api/DefaultApi~deploysGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all deploys in the project, most recent first, in pages of 20.
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number, starting from 1. 20 deploys are returned per page.
     * @param {module:api/DefaultApi~deploysGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deploysGet",
    value: function deploysGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling deploysGet");
      }

      var pathParams = {};
      var queryParams = {
        page: opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/deploys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the dsymPost operation.
     * @callback module:api/DefaultApi~dsymPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * **Note:** For version, you should use the \"Bundle version\" from your plist which corresponds to the Build Number. This is not the Version Number which is found under the key \"Bundle versions string, short\" in your plist. See this [technical note](https://developer.apple.com/library/content/technotes/tn2420/_index.html) for more information. We use this to match up the dSYM with the same version of the code that caused the stack trace.
     * @param {String} xRollbarAccessToken Use a post server item access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1DsymRequest} opts.body
     * @param {module:api/DefaultApi~dsymPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "dsymPost",
    value: function dsymPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling dsymPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/dsym', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inviteInviteIdDelete operation.
     * @callback module:api/DefaultApi~inviteInviteIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a `200` if the invitation was successfully canceled.
     * @param {Number} inviteId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~inviteInviteIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "inviteInviteIdDelete",
    value: function inviteInviteIdDelete(inviteId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'inviteId' is set

      if (inviteId === undefined || inviteId === null) {
        throw new Error("Missing the required parameter 'inviteId' when calling inviteInviteIdDelete");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling inviteInviteIdDelete");
      }

      var pathParams = {
        invite_id: inviteId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/invite/{invite_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inviteInviteIdGet operation.
     * @callback module:api/DefaultApi~inviteInviteIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Example Response ```json {   \"err\": 0,   \"result\": {     \"id\": 71328,     \"from_user_id\": 5325,     \"team_id\": 272686,     \"to_email\": \"gilfoyle@piedpiper.com\",     \"status\": \"pending\",     \"date_created\": 1519946545,     \"date_redeemed\": null   } } ```
     * @param {String} inviteId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~inviteInviteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "inviteInviteIdGet",
    value: function inviteInviteIdGet(inviteId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'inviteId' is set

      if (inviteId === undefined || inviteId === null) {
        throw new Error("Missing the required parameter 'inviteId' when calling inviteInviteIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling inviteInviteIdGet");
      }

      var pathParams = {
        invite_id: inviteId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/invite/{invite_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemByCounterCounterGet operation.
     * @callback module:api/DefaultApi~itemByCounterCounterGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * `counter` must be an item counter for an item in the project. The counter can be found in URLs like `https://rollbar.com/myaccount/myproject/items/456/` (456 is the counter).  The success response is a 301 redirect like this:  ``` HTTP/1.1 301 Moved Permanently Location: /item/272505123  {   \"err\": 0,   \"result\": {     \"itemId\": 272505123,     \"path\": \"/item/272505123\",     \"uri\": \"/item/272505123\"   } } ```
     * @param {Number} counter item counter for an item in the project  `counter` must be an item counter for an item in the project. The counter can be found in URLs like https://rollbar.com/myaccount/myproject/items/456/ (456 is the counter).
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {module:api/DefaultApi~itemByCounterCounterGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemByCounterCounterGet",
    value: function itemByCounterCounterGet(counter, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'counter' is set

      if (counter === undefined || counter === null) {
        throw new Error("Missing the required parameter 'counter' when calling itemByCounterCounterGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemByCounterCounterGet");
      }

      var pathParams = {
        counter: counter
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/item_by_counter/{counter}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemItemidGet operation.
     * @callback module:api/DefaultApi~itemItemidGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * `itemid` must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like `https://rollbar.com/myaccount/myproject/items/456/` – that is the \"counter\", which can be used in the following API call.
     * @param {Number} itemid Unique ID of the item  `itemid` must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like https://rollbar.com/myaccount/myproject/items/456/ – that is the \"counter\", which can be used in the following API call.
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {module:api/DefaultApi~itemItemidGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemItemidGet",
    value: function itemItemidGet(itemid, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'itemid' is set

      if (itemid === undefined || itemid === null) {
        throw new Error("Missing the required parameter 'itemid' when calling itemItemidGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemItemidGet");
      }

      var pathParams = {
        itemid: itemid
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/item/{itemid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemItemidPatch operation.
     * @callback module:api/DefaultApi~itemItemidPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to modify an item's state. Currently supports: * setting the status, level, title, assigned user * when resolving, setting the \"resolved in version\"  Example - ```curl curl -X PATCH 'https://api.rollbar.com/item/275123456' \\   --header \"Content-Type: application/json\" \\   --data '{\"status\": \"resolved\", \"resolved_in_version\": \"aabbcc1\"}'   ```
     * @param {String} xRollbarAccessToken Use a project access token with 'write' scope
     * @param {String} itemid
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1ItemRequest1} opts.body
     * @param {module:api/DefaultApi~itemItemidPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemItemidPatch",
    value: function itemItemidPatch(xRollbarAccessToken, itemid, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemItemidPatch");
      } // verify the required parameter 'itemid' is set


      if (itemid === undefined || itemid === null) {
        throw new Error("Missing the required parameter 'itemid' when calling itemItemidPatch");
      }

      var pathParams = {
        itemid: itemid
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/item/{itemid}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the itemsGet operation.
     * @callback module:api/DefaultApi~itemsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Examples Get the 101st through 199th active items: ```curl curl -H \"X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\" 'https://api.rollbar.com/items/?status=active&page=2' ``` Get the first page of items that are error or critical, in the production environment: ```curl curl -H \"X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\" 'https://api.rollbar.com/items/?level=error&level=critical&environment=production' ```
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.assignedUser If not empty, only items assigned to the specified user will be returned. Must be a valid Rollbar username, or you can use the keywords `assigned` (items that are assigned to any owner) or `unassigned` (items with no owner).
     * @param {String} opts.environment If not empty, only items in the specified environment will be returned. Specify multiple times to filter by multiple environments.
     * @param {String} opts.framework If not empty, only items in the specified framework will be returned. Specify multiple times to filter by multiple frameworks.
     * @param {String} opts.ids (comma-separated list of integers) if not empty, list of item IDs to return, instead of using all items in the project
     * @param {String} opts.level If not empty, only items with the specified level will be returned. Valid values: `debug`, `info`, `warning`, `error`, `critical`. Specifiy multiple times to filter by multiple levels.
     * @param {Number} opts.page Page number, starting from 1. 100 items are returned per page.
     * @param {String} opts.query A search string, using the same format as the search box on the Items page.
     * @param {String} opts.status If not empty, only items with the specified status will be returned. Valid values: `active`, `resolved`, `muted`, `archived`. Specify multiple times to filter by multiple statuses.
     * @param {module:api/DefaultApi~itemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "itemsGet",
    value: function itemsGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemsGet");
      }

      var pathParams = {};
      var queryParams = {
        assigned_user: opts['assignedUser'],
        environment: opts['environment'],
        framework: opts['framework'],
        ids: opts['ids'],
        level: opts['level'],
        page: opts['page'],
        query: opts['query'],
        status: opts['status']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the peopleDeleteJobsJobIdGet operation.
     * @callback module:api/DefaultApi~peopleDeleteJobsJobIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check on the status of a person deletion request.  The response will include a status, e.g. ``` {   \"err\": 0,   \"result\": {     \"state\": \"success\", // possible values are \"new\",\"running\",\"paused\",\"success\",\"cancelled\",\"failed\"     \"id\": 3   } } ```
     * @param {Number} jobId The id of the deletion job (from the response to a `POST` to `delete_jobs`)
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~peopleDeleteJobsJobIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "peopleDeleteJobsJobIdGet",
    value: function peopleDeleteJobsJobIdGet(jobId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'jobId' is set

      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling peopleDeleteJobsJobIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling peopleDeleteJobsJobIdGet");
      }

      var pathParams = {
        job_id: jobId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/people/delete_jobs/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the peopleDeleteJobsPost operation.
     * @callback module:api/DefaultApi~peopleDeleteJobsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint allows for removal of a tracked person from all projects within an account.  To identify the person, you must provide **exactly one** of the following: * `email` * `username` * `person_id`  These correspond to the values transmitted in the original occurrences (see the docs for [Create item](ref:items)) and can also be found by viewing any tracked person via the [People Tracking](doc:person-tracking) page in any project.  Requests for person deletion are asynchronous.  The returned value will include an `id` property that can be used to check the status of the deletion process, e.g. ``` {   \"err\": 0,   \"result\": {     \"id\": 3   } } ```
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.username `username` value of the person to be deleted.
     * @param {String} opts.email `email` value of the person to be deleted.
     * @param {String} opts.id `id` value of the person to be deleted.
     * @param {module:api/DefaultApi~peopleDeleteJobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "peopleDeleteJobsPost",
    value: function peopleDeleteJobsPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling peopleDeleteJobsPost");
      }

      var pathParams = {};
      var queryParams = {
        username: opts['username'],
        email: opts['email'],
        id: opts['id']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/people/delete_jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the proguardPost operation.
     * @callback module:api/DefaultApi~proguardPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload an Android Proguard file
     * @param {String} xRollbarAccessToken Use a post server item access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1ProguardRequest} opts.body
     * @param {module:api/DefaultApi~proguardPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "proguardPost",
    value: function proguardPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling proguardPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/proguard', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectIdAccessTokensGet operation.
     * @callback module:api/DefaultApi~projectIdAccessTokensGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all project access tokens
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {String} id
     * @param {module:api/DefaultApi~projectIdAccessTokensGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectIdAccessTokensGet",
    value: function projectIdAccessTokensGet(xRollbarAccessToken, id, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectIdAccessTokensGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectIdAccessTokensGet");
      }

      var pathParams = {
        id: id
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{id}/access_tokens', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdAccessTokenProjectAccessTokenPatch operation.
     * @callback module:api/DefaultApi~projectProjectIdAccessTokenProjectAccessTokenPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a rate limit
     * @param {Number} projectId
     * @param {String} projectAccessToken
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1ProjectAccessTokenRequest} opts.body
     * @param {module:api/DefaultApi~projectProjectIdAccessTokenProjectAccessTokenPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdAccessTokenProjectAccessTokenPatch",
    value: function projectProjectIdAccessTokenProjectAccessTokenPatch(projectId, projectAccessToken, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdAccessTokenProjectAccessTokenPatch");
      } // verify the required parameter 'projectAccessToken' is set


      if (projectAccessToken === undefined || projectAccessToken === null) {
        throw new Error("Missing the required parameter 'projectAccessToken' when calling projectProjectIdAccessTokenProjectAccessTokenPatch");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectProjectIdAccessTokenProjectAccessTokenPatch");
      }

      var pathParams = {
        project_id: projectId,
        project_access_token: projectAccessToken
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{project_id}/access_token/{project_access_token}', 'PATCH', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdGet operation.
     * @callback module:api/DefaultApi~projectProjectIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a project
     * @param {Number} projectId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~projectProjectIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdGet",
    value: function projectProjectIdGet(projectId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectProjectIdGet");
      }

      var pathParams = {
        project_id: projectId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectProjectIdPost operation.
     * @callback module:api/DefaultApi~projectProjectIdPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a project
     * @param {Number} projectId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~projectProjectIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectProjectIdPost",
    value: function projectProjectIdPost(projectId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'projectId' is set

      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectProjectIdPost");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectProjectIdPost");
      }

      var pathParams = {
        project_id: projectId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/project/{project_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsGet operation.
     * @callback module:api/DefaultApi~projectsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all projects
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~projectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsGet",
    value: function projectsGet(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectsGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the projectsPost operation.
     * @callback module:api/DefaultApi~projectsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a project
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1ProjectsRequest} opts.body
     * @param {module:api/DefaultApi~projectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "projectsPost",
    value: function projectsPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling projectsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/projects', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportsActivatedCountsGet operation.
     * @callback module:api/DefaultApi~reportsActivatedCountsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analogous to \"Daily New/Reactivated Items\" graph on the Dashboard.  Returns an array of recent counts as `[timestamp, count]` pairs, where each count is the number of items that were first seen or reactivated in the time range `[timestamp, timestamp + bucket_size - 1]`.  Timestamps are UNIX timestamps, in whole seconds.    # Response ```json {   \"err\": 0,   \"result\": [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }```
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.bucketSize Size of each bucket, in seconds. Only valid value is `86400` (day). Data wil be returned in the project timezone.
     * @param {Number} opts.buckets Number of buckets to return. Must be in range `[2, 366]`. (default to 60)
     * @param {String} opts.environments Comma-separated list of environments to filter by.  Empty means \"any environment\".
     * @param {module:api/DefaultApi~reportsActivatedCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportsActivatedCountsGet",
    value: function reportsActivatedCountsGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling reportsActivatedCountsGet");
      }

      var pathParams = {};
      var queryParams = {
        bucket_size: opts['bucketSize'],
        buckets: opts['buckets'],
        environments: opts['environments']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/activated_counts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportsOccurrenceCountsGet operation.
     * @callback module:api/DefaultApi~reportsOccurrenceCountsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Analogous to \"Hourly Error/Critical Occurrences\" and \"Daily Error/Critical Occurrences\" on the Dashboard.  Returns an array of recent counts as `[timestamp, count]` pairs, where each count is the number of matching active occurrences in the time range `[timestamp, timestamp + bucket_size - 1]`.  Timestamps are UNIX timestamps, in whole seconds.  # Response ```json {   \"err\": 0,   \"result\": [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }```
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.bucketSize Size of each bucket, in seconds. Valid values are `60` (minute), `3600` (hour), and `86400` (day). Timezone for all buckets is GMT. (default to '86400')
     * @param {String} opts.environments Comma-separated list of environments to filter by.  Empty means \"any environment\".
     * @param {String} opts.minLevel Minimum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`. (default to 'error')
     * @param {String} opts.maxLevel Maximum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`
     * @param {Number} opts.itemId Item ID to filter by.
     * @param {module:api/DefaultApi~reportsOccurrenceCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportsOccurrenceCountsGet",
    value: function reportsOccurrenceCountsGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling reportsOccurrenceCountsGet");
      }

      var pathParams = {};
      var queryParams = {
        bucket_size: opts['bucketSize'],
        environments: opts['environments'],
        min_level: opts['minLevel'],
        max_level: opts['maxLevel'],
        item_id: opts['itemId']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/occurrence_counts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the reportsTopActiveItemsGet operation.
     * @callback module:api/DefaultApi~reportsTopActiveItemsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response ```json {   \"err\": 0,   \"result\": [     // each element in the list is an object with an \"item\" object and a \"counts\" list     {         // data describing the item (similar to that returned by GET /item/:id)         \"item\": {             \"id\": 2071,             \"counter\": 1007,             \"environment\": \"production\",             \"framework\": 0,             \"last_occurrence_timestamp\": 1408410581,             \"level\": 40,             \"occurrences\": 54,             \"project_id\": 12345,             \"title\": \"Something went wrong\",             \"unique_occurrences\": 5         },         // list of occurrence counts in the past 24 hours. Oldest first.         \"counts\": [12, 10, 7, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 5, 6]     },     { /_* more elements ... *_/ }   ] } ```
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.hours Number of recent hours to consider. Min `1`, max `168`. (default to 24)
     * @param {String} opts.environments Comma-separated list of environments to consider. If empty, then returns results for \"any environment\".
     * @param {module:api/DefaultApi~reportsTopActiveItemsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "reportsTopActiveItemsGet",
    value: function reportsTopActiveItemsGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling reportsTopActiveItemsGet");
      }

      var pathParams = {};
      var queryParams = {
        hours: opts['hours'],
        environments: opts['environments']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/reports/top_active_items', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rqlJobJobIdCancelPost operation.
     * @callback module:api/DefaultApi~rqlJobJobIdCancelPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response The response will be a RQL Job resource, example: ```json {   \"err\" 0,   \"result\": {     \"id\": 123,  // job id     \"project_id\": 456,     \"query_string\": \"show tables\",     \"status\": \"cancelled\", // One of \"new\", \"running\", \"success\", \"failed\", \"cancelled\", or \"timed_out\"     \"job_hash\": \"abcdefabcdefabcdef\",     \"date_created\": 1446598885,     \"date_modified\": 1446598885   } }```
     * @param {Number} jobId system-wide ID of the job to be canceled
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {module:api/DefaultApi~rqlJobJobIdCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "rqlJobJobIdCancelPost",
    value: function rqlJobJobIdCancelPost(jobId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'jobId' is set

      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling rqlJobJobIdCancelPost");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling rqlJobJobIdCancelPost");
      }

      var pathParams = {
        job_id: jobId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/rql/job/{job_id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rqlJobJobIdGet operation.
     * @callback module:api/DefaultApi~rqlJobJobIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response The response will be a RQL Job resource, example: ```json {   \"err\" 0,   \"result\": {     \"id\": 123,  // job id     \"project_id\": 456,     \"query_string\": \"show tables\",     \"status\": \"new\", // One of \"new\", \"running\", \"success\", \"failed\", \"cancelled\", or \"timed_out\"     \"job_hash\": \"abcdefabcdefabcdef\",     \"date_created\": 1446598885,     \"date_modified\": 1446598885,     \"result\": {...} // A RQL job resource if expand=result is used in query string   } }``
     * @param {Number} jobId
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand If the value is `result`, the response will contain the job result
     * @param {module:api/DefaultApi~rqlJobJobIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "rqlJobJobIdGet",
    value: function rqlJobJobIdGet(jobId, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'jobId' is set

      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling rqlJobJobIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling rqlJobJobIdGet");
      }

      var pathParams = {
        job_id: jobId
      };
      var queryParams = {
        expand: opts['expand']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/rql/job/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rqlJobJobIdResultGet operation.
     * @callback module:api/DefaultApi~rqlJobJobIdResultGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response The response will be a RQL job result resource, example: ```json {   \"err\" 0,   \"result\": {     \"job_id\": 123,  // job id     \"result\": {       \"rows\": [{...}],       \"selectionColumns\": [...],       \"columns\": [...],       \"errors\": [],       \"warnings\": [],       \"rowcount\": 1,       \"executionTime\": 123     },     \"job\": {...} // A RQL job resource if expand=job is set in the query string   } }```
     * @param {String} jobId
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand If the value is `job`, the response will contain the RQL job resource
     * @param {module:api/DefaultApi~rqlJobJobIdResultGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "rqlJobJobIdResultGet",
    value: function rqlJobJobIdResultGet(jobId, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'jobId' is set

      if (jobId === undefined || jobId === null) {
        throw new Error("Missing the required parameter 'jobId' when calling rqlJobJobIdResultGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling rqlJobJobIdResultGet");
      }

      var pathParams = {
        job_id: jobId
      };
      var queryParams = {
        expand: opts['expand']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/rql/job/{job_id}/result', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rqlJobsGet operation.
     * @callback module:api/DefaultApi~rqlJobsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response ```json {   \"err\" 0,   \"result\": [     { ... }, // RQL job resource       ...   ] } ```
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number starting from 1
     * @param {module:api/DefaultApi~rqlJobsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "rqlJobsGet",
    value: function rqlJobsGet(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling rqlJobsGet");
      }

      var pathParams = {};
      var queryParams = {
        page: opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/rql/jobs/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the rqlJobsPost operation.
     * @callback module:api/DefaultApi~rqlJobsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Response The response will be a RQL Job resource, example: ```json {   \"err\" 0,   \"result\": {     \"id\": 123,  // job id     \"project_id\": 456,     \"query_string\": \"show tables\",     \"status\": \"new\", // One of \"new\", \"running\", \"success\", \"failed\", \"cancelled\", or \"timed_out\"     \"job_hash\": \"abcdefabcdefabcdef\",     \"date_created\": 1446598885,     \"date_modified\": 1446598885   } }```
     * @param {String} xRollbarAccessToken Use a project access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1RqlJobsRequest} opts.body
     * @param {module:api/DefaultApi~rqlJobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "rqlJobsPost",
    value: function rqlJobsPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling rqlJobsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/rql/jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the sourcemapPost operation.
     * @callback module:api/DefaultApi~sourcemapPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * In the above example, our website is http://example.com, we have a minified JavaScript file at http://example.com/js/example.min.js, and we have a source tree like this: ``` example/ example/static/js/example.min.js example/static/js/example.min.map example/static/js/site.js example/static/js/util.js ```
     * @param {String} xRollbarAccessToken Use a post server item access token
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1SourcemapRequest} opts.body
     * @param {module:api/DefaultApi~sourcemapPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "sourcemapPost",
    value: function sourcemapPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling sourcemapPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/sourcemap', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamDelete operation.
     * @callback module:api/DefaultApi~teamDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~teamDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamDelete",
    value: function teamDelete(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamDelete");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamGet operation.
     * @callback module:api/DefaultApi~teamGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~teamGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamGet",
    value: function teamGet(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdInvitesGet operation.
     * @callback module:api/DefaultApi~teamTeamIdInvitesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all invites ever sent for the team–pending, accepted, rejected, and canceled.  # Example response ``` {   \"err\": 0,   \"result\": [     {       \"id\": 71328,       \"from_user_id\": 5325,       \"team_id\": 272686,       \"to_email\": \"gilfoyle@pidepiper.com\",       \"status\": \"pending\",       \"date_created\": 1519946545,       \"date_redeemed\": null     }   ] } ```
     * @param {Number} teamId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Returns up to 5000 results. Add `&page=2` to the URL to go to the next page.
     * @param {module:api/DefaultApi~teamTeamIdInvitesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdInvitesGet",
    value: function teamTeamIdInvitesGet(teamId, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdInvitesGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdInvitesGet");
      }

      var pathParams = {
        team_id: teamId
      };
      var queryParams = {
        page: opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/invites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdInvitesPost operation.
     * @callback module:api/DefaultApi~teamTeamIdInvitesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invites a user to the specific team, using the user's email address.  If the email address belongs to an existing Rollbar user, they will be immediately added to the team, and sent an email notification. Otherwise, an invite email will be sent, containing a signup link that will allow the recipient to join the specified team.  # Example Response ``` {   \"err\": 0,   \"result\": {     \"id\": 71328,     \"from_user_id\": 5325,     \"team_id\": 272686,     \"to_email\": \"gilfoyle@piedpiper.com\",     \"status\": \"pending\",     \"date_created\": 1519946545,     \"date_redeemed\": null   } } ```
     * @param {String} teamId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1TeamInvitesRequest} opts.body
     * @param {module:api/DefaultApi~teamTeamIdInvitesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdInvitesPost",
    value: function teamTeamIdInvitesPost(teamId, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdInvitesPost");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdInvitesPost");
      }

      var pathParams = {
        team_id: teamId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/invites', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectProjectIdDelete operation.
     * @callback module:api/DefaultApi~teamTeamIdProjectProjectIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a team from a project
     * @param {Number} teamId
     * @param {Number} projectId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~teamTeamIdProjectProjectIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectProjectIdDelete",
    value: function teamTeamIdProjectProjectIdDelete(teamId, projectId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdProjectProjectIdDelete");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamTeamIdProjectProjectIdDelete");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdProjectProjectIdDelete");
      }

      var pathParams = {
        team_id: teamId,
        project_id: projectId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectProjectIdGet operation.
     * @callback module:api/DefaultApi~teamTeamIdProjectProjectIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns `200` if the team is assigned to a project, `404` if the team is not assigned to the project.  # Example responses  ```json {   \"err\": 0,   \"result\": {     \"team_id\": 272686,     \"project_id\": 165090   } } ```  ```json {   \"err\": 1,   \"message\": \"Project is not in this Team.\" } ```
     * @param {Number} teamId
     * @param {Number} projectId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~teamTeamIdProjectProjectIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectProjectIdGet",
    value: function teamTeamIdProjectProjectIdGet(teamId, projectId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdProjectProjectIdGet");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamTeamIdProjectProjectIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdProjectProjectIdGet");
      }

      var pathParams = {
        team_id: teamId,
        project_id: projectId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectProjectIdPut operation.
     * @callback module:api/DefaultApi~teamTeamIdProjectProjectIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Example Response ```json {   \"err\": 0,   \"result\": {     \"team_id\": 272686,     \"project_id\": 165090   } } ```
     * @param {Number} teamId
     * @param {String} projectId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~teamTeamIdProjectProjectIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectProjectIdPut",
    value: function teamTeamIdProjectProjectIdPut(teamId, projectId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdProjectProjectIdPut");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling teamTeamIdProjectProjectIdPut");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdProjectProjectIdPut");
      }

      var pathParams = {
        team_id: teamId,
        project_id: projectId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/project/{project_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdProjectsGet operation.
     * @callback module:api/DefaultApi~teamTeamIdProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Example Response ```json {   \"err\": 0,   \"result\": [     {       \"team_id\": 272686,       \"project_id\": 178029     },     {       \"team_id\": 272686,       \"project_id\": 178030     }   ] } ```
     * @param {Number} teamId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~teamTeamIdProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdProjectsGet",
    value: function teamTeamIdProjectsGet(teamId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdProjectsGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdProjectsGet");
      }

      var pathParams = {
        team_id: teamId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdDelete operation.
     * @callback module:api/DefaultApi~teamTeamIdUserUserIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a user from a team
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {String} teamId
     * @param {String} userId
     * @param {module:api/DefaultApi~teamTeamIdUserUserIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdDelete",
    value: function teamTeamIdUserUserIdDelete(xRollbarAccessToken, teamId, userId, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdUserUserIdDelete");
      } // verify the required parameter 'teamId' is set


      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdUserUserIdDelete");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling teamTeamIdUserUserIdDelete");
      }

      var pathParams = {
        team_id: teamId,
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdGet operation.
     * @callback module:api/DefaultApi~teamTeamIdUserUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check if a user is assigned to a team
     * @param {Number} teamId
     * @param {Number} userId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~teamTeamIdUserUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdGet",
    value: function teamTeamIdUserUserIdGet(teamId, userId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdUserUserIdGet");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling teamTeamIdUserUserIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdUserUserIdGet");
      }

      var pathParams = {
        team_id: teamId,
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdPut operation.
     * @callback module:api/DefaultApi~teamTeamIdUserUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a user to team
     * @param {Number} teamId
     * @param {Number} userId
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {module:api/DefaultApi~teamTeamIdUserUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdPut",
    value: function teamTeamIdUserUserIdPut(teamId, userId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdUserUserIdPut");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling teamTeamIdUserUserIdPut");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdUserUserIdPut");
      }

      var pathParams = {
        team_id: teamId,
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUsersGet operation.
     * @callback module:api/DefaultApi~teamTeamIdUsersGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List a team's users
     * @param {String} teamId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Results are returned in sets of 5000.  Access more results by specifying `page=2`, etc. (default to 1)
     * @param {module:api/DefaultApi~teamTeamIdUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUsersGet",
    value: function teamTeamIdUsersGet(teamId, xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'teamId' is set

      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamTeamIdUsersGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamTeamIdUsersGet");
      }

      var pathParams = {
        team_id: teamId
      };
      var queryParams = {
        page: opts['page']
      };
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsGet operation.
     * @callback module:api/DefaultApi~teamsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all teams
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~teamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsGet",
    value: function teamsGet(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamsGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsPost operation.
     * @callback module:api/DefaultApi~teamsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Access Levels `standard` is the only access level you can choose in the UI.  `light` and `view` are API-only team access levels. `light` gives the team read and write access, but not to all settings. `view` gives the team read-only access.
     * @param {String} xRollbarAccessToken Use an account access token with 'write' scope
     * @param {Object} opts Optional parameters
     * @param {module:model/Api1TeamsRequest} opts.body
     * @param {module:api/DefaultApi~teamsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamsPost",
    value: function teamsPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling teamsPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/teams', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userUserIdGet operation.
     * @callback module:api/DefaultApi~userUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user details for a given account  Returns basic information about the user, as relevant to the account your access token is for. This is the same information available on the \"Members\" page in the Rollbar UI.  # Sample Response ```json {   \"err\": 0,   \"result\": {       \"id\": 14,       \"username\": \"brian\",       \"email\": \"brian@rollbar.com\",       \"email_enabled\": 1   } } ```
     * @param {Number} userId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~userUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userUserIdGet",
    value: function userUserIdGet(userId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userUserIdGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling userUserIdGet");
      }

      var pathParams = {
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userUserIdProjectsGet operation.
     * @callback module:api/DefaultApi~userUserIdProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * # Example response: ```json {   \"err\": 0,   \"result\": {     \"projects\": [       {         \"status\": 1,         \"slug\": \"mox\",         \"id\": 1,         \"account_id\": 61       },       {         \"status\": 1,         \"slug\": \"moxrts\",         \"id\": 25,         \"account_id\": 61       }     ]   } }```
     * @param {Number} userId
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~userUserIdProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userUserIdProjectsGet",
    value: function userUserIdProjectsGet(userId, xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'userId' is set

      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userUserIdProjectsGet");
      } // verify the required parameter 'xRollbarAccessToken' is set


      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling userUserIdProjectsGet");
      }

      var pathParams = {
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user/{user_id}/projects', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userUserIdTeamsGet operation.
     * @callback module:api/DefaultApi~userUserIdTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List a user's teams
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {String} userId
     * @param {module:api/DefaultApi~userUserIdTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userUserIdTeamsGet",
    value: function userUserIdTeamsGet(xRollbarAccessToken, userId, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling userUserIdTeamsGet");
      } // verify the required parameter 'userId' is set


      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling userUserIdTeamsGet");
      }

      var pathParams = {
        user_id: userId
      };
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user/{user_id}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/DefaultApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all users who are members of an account #Response Format ```json {   \"err\": 0,   \"result\": {     \"users\": [     {       \"username\": \"brianr\",       \"id\": 1,       \"email\": \"brian@rollbar.com\"     },     {       \"username\": \"coryvirok\",       \"id\": 2,       \"email\": \"cory@rollbar.com\"     }     ]   } } ```
     * @param {String} xRollbarAccessToken Use an account access token with 'read' scope
     * @param {module:api/DefaultApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "usersGet",
    value: function usersGet(xRollbarAccessToken, callback) {
      var postBody = null; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling usersGet");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;