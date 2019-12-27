"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Component = _interopRequireDefault(require("../model/Component"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

var _IssueChange = _interopRequireDefault(require("../model/IssueChange"));

var _IssueComment = _interopRequireDefault(require("../model/IssueComment"));

var _Milestone = _interopRequireDefault(require("../model/Milestone"));

var _PaginatedComponents = _interopRequireDefault(require("../model/PaginatedComponents"));

var _PaginatedIssueAttachments = _interopRequireDefault(require("../model/PaginatedIssueAttachments"));

var _PaginatedIssueComments = _interopRequireDefault(require("../model/PaginatedIssueComments"));

var _PaginatedIssues = _interopRequireDefault(require("../model/PaginatedIssues"));

var _PaginatedLogEntries = _interopRequireDefault(require("../model/PaginatedLogEntries"));

var _PaginatedMilestones = _interopRequireDefault(require("../model/PaginatedMilestones"));

var _PaginatedVersions = _interopRequireDefault(require("../model/PaginatedVersions"));

var _Version = _interopRequireDefault(require("../model/Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueTracker service.
* @module api/IssueTrackerApi
* @version 1.1.0
*/
var IssueTrackerApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new IssueTrackerApi. 
  * @alias module:api/IssueTrackerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueTrackerApi(apiClient) {
    _classCallCheck(this, IssueTrackerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugComponentsComponentIdGet operation.
   * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugComponentsComponentIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Component} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the specified issue tracker component object.
   * @param {Number} componentId The component's id
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugComponentsComponentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Component}
   */


  _createClass(IssueTrackerApi, [{
    key: "repositoriesWorkspaceRepoSlugComponentsComponentIdGet",
    value: function repositoriesWorkspaceRepoSlugComponentsComponentIdGet(componentId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'componentId' is set

      if (componentId === undefined || componentId === null) {
        throw new _Error["default"]("Missing the required parameter 'componentId' when calling repositoriesWorkspaceRepoSlugComponentsComponentIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugComponentsComponentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugComponentsComponentIdGet");
      }

      var pathParams = {
        'component_id': componentId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Component["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/components/{component_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugComponentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugComponentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedComponents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the components that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugComponentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedComponents}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugComponentsGet",
    value: function repositoriesWorkspaceRepoSlugComponentsGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugComponentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugComponentsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedComponents["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/components', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedIssues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the issues in the issue tracker.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedIssues}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesGet",
    value: function repositoriesWorkspaceRepoSlugIssuesGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedIssues["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedIssueAttachments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all attachments for this issue.  This returns the files' meta data. This does not return the files' actual contents.  The files are always ordered by their upload date.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedIssueAttachments}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet(workspace, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'issue_id': issueId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedIssueAttachments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an attachment.
     * @param {String} path 
     * @param {String} issueId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete(path, issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'path' is set

      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete");
      }

      var pathParams = {
        'path': path,
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the contents of the specified file attachment.  Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents.  The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared.
     * @param {String} path 
     * @param {String} issueId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet(path, issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'path' is set

      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet");
      }

      var pathParams = {
        'path': path,
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload new issue attachments.  To upload files, perform a `multipart/form-data` POST containing one or more file fields.  When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost(workspace, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'issue_id': issueId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueChange} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue change object.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} changeId The issue change id
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueChange}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet(changeId, issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'changeId' is set

      if (changeId === undefined || changeId === null) {
        throw new _Error["default"]("Missing the required parameter 'changeId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet");
      }

      var pathParams = {
        'change_id': changeId,
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueChange["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedLogEntries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the list of all changes that have been made to the specified issue. Changes are returned in chronological order with the oldest change first.  Each time an issue is edited in the UI or through the API, an immutable change record is created under the `/issues/123/changes` endpoint. It also has a comment associated with the change.  Note that this operation is changing significantly, due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api) for details.  ``` $ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .  {   \"pagelen\": 20,   \"values\": [     {       \"changes\": {         \"priority\": {           \"new\": \"trivial\",           \"old\": \"major\"         },         \"assignee\": {           \"new\": \"\",           \"old\": \"evzijst\"         },         \"assignee_account_id\": {           \"new\": \"\",           \"old\": \"557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443\"         },         \"kind\": {           \"new\": \"enhancement\",           \"old\": \"bug\"         }       },       \"links\": {         \"self\": {           \"href\": \"https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2\"         },         \"html\": {           \"href\": \"https://bitbucket.org/evzijst/dogslow/issues/1#comment-2\"         }       },       \"issue\": {         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1\"           }         },         \"type\": \"issue\",         \"id\": 1,         \"repository\": {           \"links\": {             \"self\": {               \"href\": \"https://api.bitbucket.org/2.0/repositories/evzijst/dogslow\"             },             \"html\": {               \"href\": \"https://bitbucket.org/evzijst/dogslow\"             },             \"avatar\": {               \"href\": \"https://bitbucket.org/evzijst/dogslow/avatar/32/\"             }           },           \"type\": \"repository\",           \"name\": \"dogslow\",           \"full_name\": \"evzijst/dogslow\",           \"uuid\": \"{988b17c6-1a47-4e70-84ee-854d5f012bf6}\"         },         \"title\": \"Updated title\"       },       \"created_on\": \"2018-03-03T00:35:28.353630+00:00\",       \"user\": {         \"username\": \"evzijst\",         \"nickname\": \"evzijst\",         \"display_name\": \"evzijst\",         \"type\": \"user\",         \"uuid\": \"{aaa7972b-38af-4fb1-802d-6e3854c95778}\",         \"links\": {           \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/users/evzijst\"           },           \"html\": {             \"href\": \"https://bitbucket.org/evzijst/\"           },           \"avatar\": {             \"href\": \"https://bitbucket.org/account/evzijst/avatar/32/\"           }         }       },       \"message\": {         \"raw\": \"Removed assignee, changed kind and priority.\",         \"markup\": \"markdown\",         \"html\": \"<p>Removed assignee, changed kind and priority.</p>\",         \"type\": \"rendered\"       },       \"type\": \"issue_change\",       \"id\": 2     }   ],   \"page\": 1 } ```  Changes support [filtering and sorting](../../../meta/filtering) that can be used to search for specific changes. For instance, to see when an issue transitioned to \"resolved\":  ``` $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \\    -G --data-urlencode='q=changes.state.new = \"resolved\"' ```  This resource is only available on repositories that have the issue tracker enabled.  N.B.  The `changes.assignee` and `changes.assignee_account_id` fields are not a `user` object. Instead, they contain the raw `username` and `account_id` of the user. This is to protect the integrity of the audit log even after a user account gets deleted.  The `changes.assignee` field is deprecated will disappear in the future. Use `changes.assignee_account_id` instead.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response. See [filtering and sorting](../../../meta/filtering) for details.
     * @param {String} opts.sort  Name of a response property to sort results. See [filtering and sorting](../../../meta/filtering#query-sort) for details. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedLogEntries}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet(issueId, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedLogEntries["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueChange} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Makes a change to the specified issue.  For example, to change an issue's state and assignee, create a new change object that modifies these fields:  ``` curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \\   -s -u evzijst -X POST -H \"Content-Type: application/json\" \\   -d '{     \"changes\": {       \"assignee_account_id\": {         \"new\": \"557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443\"       },       \"state\": {         \"new\": 'resolved\"       }     }     \"message\": {       \"raw\": \"This is now resolved.\"     }   }' ```  The above example also includes a custom comment to go alongside the change. This comment will also be visible on the issue page in the UI.  The fields of the `changes` object are strings, not objects. This allows for immutable change log records, even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted.  The `assignee_account_id` field stores the account id. When POSTing a new change and changing the assignee, the client should therefore use the user's account_id in the `changes.assignee_account_id.new` field.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorization.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/IssueChange} body The new issue state change. The only required elements are `changes.[].new`. All other elements can be omitted from the body.
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueChange}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost(issueId, workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueChange["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified comment.
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} issueId The ID of the issue that is being queried. 
     * @param {module:model/IssueComment} body The updated comment.
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete(commentId, workspace, username, repoSlug, issueId, body, callback) {
      var postBody = body; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete");
      }

      var pathParams = {
        'comment_id': commentId,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug,
        'issue_id': issueId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue comment object.
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} issueId The ID of the issue that is being queried. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet(commentId, workspace, username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet");
      }

      var pathParams = {
        'comment_id': commentId,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug,
        'issue_id': issueId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueComment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the content of the specified issue comment. Note that only the `content.raw` field can be modified.  ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \\   -X PUT -u evzijst \\   -H 'Content-Type: application/json' \\   -d '{\"content\": {\"raw\": \"Lorem ipsum.\"}' ```
     * @param {String} commentId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} issueId The ID of the issue that is being queried. 
     * @param {module:model/IssueComment} body The updated comment.
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueComment}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut(commentId, workspace, username, repoSlug, issueId, body, callback) {
      var postBody = body; // verify the required parameter 'commentId' is set

      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut");
      }

      var pathParams = {
        'comment_id': commentId,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug,
        'issue_id': issueId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IssueComment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedIssueComments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all comments that were made on the specified issue.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details.
     * @param {String} issueId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering).
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedIssueComments}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet(issueId, workspace, username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'q': opts['q']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedIssueComments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new issue comment.  ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \\   -X POST -u evzijst \\   -H 'Content-Type: application/json' \\   -d '{\"content\": {\"raw\": \"Lorem ipsum.\"}}' ```
     * @param {String} issueId 
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} username This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/IssueComment} body The new issue comment object.
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost(issueId, workspace, username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost");
      } // verify the required parameter 'username' is set


      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified issue. This requires write access to the repository.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdDelete",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdDelete(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdDelete");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdGet(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdGet");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdPut operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modifies the issue.  ``` $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \\   -u evzijst -s -X PUT -H 'Content-Type: application/json' \\   -d '{   \"title\": \"Updated title\",   \"assignee\": {     \"username\": \"evzijst\"   },   \"priority\": \"minor\",   \"version\": {     \"name\": \"1.0\"   },   \"component\": null }' ```  This example changes the `title`, `assignee`, `priority` and the `version`. It also removes the value of the `component` from the issue by setting the field to `null`. Any field not present keeps its existing value.  Each time an issue is edited in the UI or through the API, an immutable change record is created under the `/issues/123/changes` endpoint. It also has a comment associated with the change.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdPut",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdPut(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdPut");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retract your vote.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven't.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVotePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Vote for this issue.  To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdVotePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop watching this issue.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Indicated whether or not the authenticated user is watching this issue.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start watching this issue.  To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.
     * @param {String} issueId The issue id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut",
    value: function repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut(issueId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'issueId' is set

      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut");
      }

      var pathParams = {
        'issue_id': issueId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new issue.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorization.  The authenticated user is used for the issue's `reporter` field.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:model/Issue} body The new issue. The only required element is `title`. All other elements can be omitted from the body.
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugIssuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesPost",
    value: function repositoriesWorkspaceRepoSlugIssuesPost(workspace, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesWorkspaceRepoSlugIssuesPost");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugMilestonesGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugMilestonesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedMilestones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the milestones that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugMilestonesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedMilestones}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugMilestonesGet",
    value: function repositoriesWorkspaceRepoSlugMilestonesGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugMilestonesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugMilestonesGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedMilestones["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/milestones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue tracker milestone object.
     * @param {Number} milestoneId The milestone's id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet",
    value: function repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet(milestoneId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'milestoneId' is set

      if (milestoneId === undefined || milestoneId === null) {
        throw new _Error["default"]("Missing the required parameter 'milestoneId' when calling repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet");
      }

      var pathParams = {
        'milestone_id': milestoneId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Milestone["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugVersionsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedVersions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the versions that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedVersions}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugVersionsGet",
    value: function repositoriesWorkspaceRepoSlugVersionsGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugVersionsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugVersionsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedVersions["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugVersionsVersionIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugVersionsVersionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue tracker version object.
     * @param {Number} versionId The version's id
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/IssueTrackerApi~repositoriesWorkspaceRepoSlugVersionsVersionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugVersionsVersionIdGet",
    value: function repositoriesWorkspaceRepoSlugVersionsVersionIdGet(versionId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'versionId' is set

      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling repositoriesWorkspaceRepoSlugVersionsVersionIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugVersionsVersionIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugVersionsVersionIdGet");
      }

      var pathParams = {
        'version_id': versionId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Version["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/versions/{version_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTrackerApi;
}();

exports["default"] = IssueTrackerApi;