"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Component = _interopRequireDefault(require("../model/Component"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

var _Milestone = _interopRequireDefault(require("../model/Milestone"));

var _PaginatedComponents = _interopRequireDefault(require("../model/PaginatedComponents"));

var _PaginatedIssueAttachments = _interopRequireDefault(require("../model/PaginatedIssueAttachments"));

var _PaginatedIssues = _interopRequireDefault(require("../model/PaginatedIssues"));

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
* @version 1.0.0
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
   * Callback function to receive the result of the repositoriesUsernameRepoSlugComponentsComponentIdGet operation.
   * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugComponentsComponentIdGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Component} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the specified issue tracker component object.
   * @param {String} username 
   * @param {String} repoSlug 
   * @param {Number} componentId The component's id
   * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugComponentsComponentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Component}
   */


  _createClass(IssueTrackerApi, [{
    key: "repositoriesUsernameRepoSlugComponentsComponentIdGet",
    value: function repositoriesUsernameRepoSlugComponentsComponentIdGet(username, repoSlug, componentId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugComponentsComponentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugComponentsComponentIdGet");
      } // verify the required parameter 'componentId' is set


      if (componentId === undefined || componentId === null) {
        throw new _Error["default"]("Missing the required parameter 'componentId' when calling repositoriesUsernameRepoSlugComponentsComponentIdGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'component_id': componentId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Component["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/components/{component_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugComponentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugComponentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedComponents} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the components that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugComponentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedComponents}
     */

  }, {
    key: "repositoriesUsernameRepoSlugComponentsGet",
    value: function repositoriesUsernameRepoSlugComponentsGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugComponentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugComponentsGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedComponents["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/components', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedIssues} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the issues in the issue tracker.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedIssues}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesGet",
    value: function repositoriesUsernameRepoSlugIssuesGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedIssues["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedIssueAttachments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all attachments for this issue.  This returns the files' meta data. This does not return the files' actual contents.  The files are always ordered by their upload date.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedIssueAttachments}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet");
      }

      var pathParams = {
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
      var returnType = _PaginatedIssueAttachments["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/attachments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an attachment.
     * @param {String} username 
     * @param {String} path 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(username, path, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete");
      }

      var pathParams = {
        'username': username,
        'path': path,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/attachments/{path}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the contents of the specified file attachment.  Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents.  The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared.
     * @param {String} username 
     * @param {String} path 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(username, path, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new _Error["default"]("Missing the required parameter 'path' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet");
      }

      var pathParams = {
        'username': username,
        'path': path,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/attachments/{path}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload new issue attachments.  To upload files, perform a `multipart/form-data` POST containing one or more file fields.  When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost");
      }

      var pathParams = {
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/attachments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue comment object.
     * @param {String} username 
     * @param {String} commentId 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(username, commentId, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'commentId' is set


      if (commentId === undefined || commentId === null) {
        throw new _Error["default"]("Missing the required parameter 'commentId' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet");
      }

      var pathParams = {
        'username': username,
        'comment_id': commentId,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/comments/{comment_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdCommentsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all comments that were made on the specified issue.  The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     * @param {String} username 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdCommentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(username, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet");
      }

      var pathParams = {
        'username': username,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/comments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the specified issue. This requires write access to the repository.
     * @param {String} username 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdDelete",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdDelete(username, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdDelete");
      }

      var pathParams = {
        'username': username,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue.
     * @param {String} username 
     * @param {String} issueId 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdGet(username, issueId, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdGet");
      }

      var pathParams = {
        'username': username,
        'issue_id': issueId,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVoteDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retract your vote.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVoteDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/vote', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdVoteGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVoteGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven't.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVoteGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdVoteGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdVoteGet");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/vote', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdVotePut operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVotePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Vote for this issue.  To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdVotePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdVotePut",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdVotePut(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdVotePut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdVotePut");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdVotePut");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/vote', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop watching this issue.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/watch', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdWatchGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Indicated whether or not the authenticated user is watching this issue.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdWatchGet",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchGet");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchGet");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/watch', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesIssueIdWatchPut operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start watching this issue.  To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} issueId The issue's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesIssueIdWatchPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesIssueIdWatchPut",
    value: function repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(username, repoSlug, issueId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchPut");
      } // verify the required parameter 'issueId' is set


      if (issueId === undefined || issueId === null) {
        throw new _Error["default"]("Missing the required parameter 'issueId' when calling repositoriesUsernameRepoSlugIssuesIssueIdWatchPut");
      }

      var pathParams = {
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
      var returnType = _Error["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues/{issue_id}/watch', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugIssuesPost operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new issue.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorisation.  The authenticated user is used for the issue's `reporter` field.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:model/Issue} body The new issue. Note that the only required element is `title`. All other elements can be omitted from the body.
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugIssuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */

  }, {
    key: "repositoriesUsernameRepoSlugIssuesPost",
    value: function repositoriesUsernameRepoSlugIssuesPost(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugIssuesPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugIssuesPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling repositoriesUsernameRepoSlugIssuesPost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/issues', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugMilestonesGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugMilestonesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedMilestones} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the milestones that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugMilestonesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedMilestones}
     */

  }, {
    key: "repositoriesUsernameRepoSlugMilestonesGet",
    value: function repositoriesUsernameRepoSlugMilestonesGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugMilestonesGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugMilestonesGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedMilestones["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/milestones', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugMilestonesMilestoneIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugMilestonesMilestoneIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Milestone} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue tracker milestone object.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} milestoneId The milestone's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugMilestonesMilestoneIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Milestone}
     */

  }, {
    key: "repositoriesUsernameRepoSlugMilestonesMilestoneIdGet",
    value: function repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(username, repoSlug, milestoneId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugMilestonesMilestoneIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugMilestonesMilestoneIdGet");
      } // verify the required parameter 'milestoneId' is set


      if (milestoneId === undefined || milestoneId === null) {
        throw new _Error["default"]("Missing the required parameter 'milestoneId' when calling repositoriesUsernameRepoSlugMilestonesMilestoneIdGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'milestone_id': milestoneId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Milestone["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/milestones/{milestone_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugVersionsGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedVersions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the versions that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedVersions}
     */

  }, {
    key: "repositoriesUsernameRepoSlugVersionsGet",
    value: function repositoriesUsernameRepoSlugVersionsGet(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugVersionsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugVersionsGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedVersions["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/versions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugVersionsVersionIdGet operation.
     * @callback module:api/IssueTrackerApi~repositoriesUsernameRepoSlugVersionsVersionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the specified issue tracker version object.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {Number} versionId The version's id
     * @param {module:api/IssueTrackerApi~repositoriesUsernameRepoSlugVersionsVersionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */

  }, {
    key: "repositoriesUsernameRepoSlugVersionsVersionIdGet",
    value: function repositoriesUsernameRepoSlugVersionsVersionIdGet(username, repoSlug, versionId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugVersionsVersionIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugVersionsVersionIdGet");
      } // verify the required parameter 'versionId' is set


      if (versionId === undefined || versionId === null) {
        throw new _Error["default"]("Missing the required parameter 'versionId' when calling repositoriesUsernameRepoSlugVersionsVersionIdGet");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'version_id': versionId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Version["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/versions/{version_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTrackerApi;
}();

exports["default"] = IssueTrackerApi;