"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _IssueJobStatus = _interopRequireDefault(require("../model/IssueJobStatus"));

var _PaginatedDiffstats = _interopRequireDefault(require("../model/PaginatedDiffstats"));

var _PaginatedRepositoryPermissions = _interopRequireDefault(require("../model/PaginatedRepositoryPermissions"));

var _PaginatedTeamPermissions = _interopRequireDefault(require("../model/PaginatedTeamPermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 1.2.0
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
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDiffstatSpecGet operation.
   * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugDiffstatSpecGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedDiffstats} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns the diff stat for the specified commit.  Diff stat responses contain a record for every path modified by the commit and lists the number of lines added and removed for each file.   Example: ``` curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964 {     \"pagelen\": 500,     \"values\": [         {             \"type\": \"diffstat\",             \"status\": \"modified\",             \"lines_removed\": 1,             \"lines_added\": 2,             \"old\": {                 \"path\": \"setup.py\",                 \"escaped_path\": \"setup.py\",                 \"type\": \"commit_file\",                 \"links\": {                     \"self\": {                         \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py\"                     }                 }             },             \"new\": {                 \"path\": \"setup.py\",                 \"escaped_path\": \"setup.py\",                 \"type\": \"commit_file\",                 \"links\": {                     \"self\": {                         \"href\": \"https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py\"                     }                 }             }         }     ],     \"page\": 1,     \"size\": 1 } ```
   * @param {String} spec A commit SHA (e.g. `3a8b42`) or a commit range using double dot notation (e.g. `3a8b42..9ff173`). 
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.ignoreWhitespace Generate diffs that ignore whitespace
   * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugDiffstatSpecGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedDiffstats}
   */


  _createClass(DefaultApi, [{
    key: "repositoriesWorkspaceRepoSlugDiffstatSpecGet",
    value: function repositoriesWorkspaceRepoSlugDiffstatSpecGet(spec, workspace, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'spec' is set

      if (spec === undefined || spec === null) {
        throw new _Error["default"]("Missing the required parameter 'spec' when calling repositoriesWorkspaceRepoSlugDiffstatSpecGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDiffstatSpecGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDiffstatSpecGet");
      }

      var pathParams = {
        'spec': spec,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {
        'ignore_whitespace': opts['ignoreWhitespace']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedDiffstats["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/diffstat/{spec}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesExportPost operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesExportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A POST request to this endpoint initiates a new background celery task that archives the repo's issues.  For example, you can run:  curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/ issues/export  When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the 'Location' response header. This url is the endpoint for where the user can obtain their zip files.\"
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesExportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesExportPost",
    value: function repositoriesWorkspaceRepoSlugIssuesExportPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesExportPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesExportPost");
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
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/export', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This endpoint is used to poll for the progress of an issue export job and return the zip file after the job is complete. As long as the job is running, this will return a 200 response with in the response body a description of the current status.  After the job has been scheduled, but before it starts executing, this endpoint's response is:  {  \"type\": \"issue_job_status\",  \"status\": \"ACCEPTED\",  \"phase\": \"Initializing\",  \"total\": 0,  \"count\": 0,  \"pct\": 0 }   Then once it starts running, it becomes:  {  \"type\": \"issue_job_status\",  \"status\": \"STARTED\",  \"phase\": \"Attachments\",  \"total\": 15,  \"count\": 11,  \"pct\": 73 }  Once the job has successfully completed, it returns a stream of the zip file.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {String} repoName The name of the repo
     * @param {String} taskId The ID of the export task
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueJobStatus}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet",
    value: function repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet(workspace, repoSlug, repoName, taskId, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet");
      } // verify the required parameter 'repoName' is set


      if (repoName === undefined || repoName === null) {
        throw new _Error["default"]("Missing the required parameter 'repoName' when calling repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet");
      } // verify the required parameter 'taskId' is set


      if (taskId === undefined || taskId === null) {
        throw new _Error["default"]("Missing the required parameter 'taskId' when calling repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug,
        'repo_name': repoName,
        'task_id': taskId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _IssueJobStatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesImportGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesImportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * When using GET, this endpoint reports the status of the current import task. Request example:  ``` $ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import ```  After the job has been scheduled, but before it starts executing, this endpoint's response is:  ``` < HTTP/1.1 202 Accepted {     \"type\": \"issue_job_status\",     \"status\": \"PENDING\",     \"phase\": \"Attachments\",     \"total\": 15,     \"count\": 0,     \"percent\": 0 } ```  Once it starts running, it is a 202 response with status STARTED and progress filled.  After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesImportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueJobStatus}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesImportGet",
    value: function repositoriesWorkspaceRepoSlugIssuesImportGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesImportGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesImportGet");
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
      var returnType = _IssueJobStatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/import', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugIssuesImportPost operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesImportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueJobStatus} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All existing issues will be deleted and replaced by the contents of the imported zip file.  Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name \"archive,\" which needs to be a file field:  ``` $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import ```  When the import job is accepted, here is example output:  ``` < HTTP/1.1 202 Accepted  {     \"type\": \"issue_job_status\",     \"status\": \"ACCEPTED\",     \"phase\": \"Attachments\",     \"total\": 15,     \"count\": 0,     \"percent\": 0 } ```
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugIssuesImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueJobStatus}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugIssuesImportPost",
    value: function repositoriesWorkspaceRepoSlugIssuesImportPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugIssuesImportPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugIssuesImportPost");
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
      var returnType = _IssueJobStatus["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/issues/import', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet",
    value: function repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet",
    value: function repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet",
    value: function repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet operation.
     * @callback module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/DefaultApi~repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet",
    value: function repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernamePermissionsGet operation.
     * @callback module:api/DefaultApi~teamsUsernamePermissionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTeamPermissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object for each team permission a user on the team has.  Permissions returned are effective permissions — if a user is a member of multiple groups with distinct roles, only the highest level is returned.  Permissions can be:  * `admin` * `collaborator`  Only users with admin permission for the team may access this resource.  Example:  ``` $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions  {   \"pagelen\": 10,   \"values\": [     {       \"permission\": \"admin\",       \"type\": \"team_permission\",       \"user\": {         \"type\": \"user\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"       },       \"team\": {         \"display_name\": \"Atlassian Bitbucket\",         \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"       }     },     {       \"permission\": \"collaborator\",       \"type\": \"team_permission\",       \"user\": {         \"type\": \"user\",         \"nickname\": \"seanaty\",         \"display_name\": \"Sean Conaty\",         \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"       },       \"team\": {         \"display_name\": \"Atlassian Bitbucket\",         \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"       }     }   ],   \"page\": 1,   \"size\": 2 } ```  Results may be further [filtered or sorted](../../../meta/filtering) by team, user, or permission by adding the following query string parameters:  * `q=user.uuid=\"{d301aafa-d676-4ee0-88be-962be7417567}\"` or `q=permission=\"admin\"` * `sort=team.display_name`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort). 
     * @param {module:api/DefaultApi~teamsUsernamePermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTeamPermissions}
     */

  }, {
    key: "teamsUsernamePermissionsGet",
    value: function teamsUsernamePermissionsGet(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernamePermissionsGet");
      }

      var pathParams = {
        'username': username
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
      var returnType = _PaginatedTeamPermissions["default"];
      return this.apiClient.callApi('/teams/{username}/permissions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernamePermissionsRepositoriesGet operation.
     * @callback module:api/DefaultApi~teamsUsernamePermissionsRepositoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositoryPermissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object for each repository permission for all of a team’s repositories.  If the username URL parameter refers to a user account instead of a team account, an object containing the repository permissions of all the username's repositories will be returned.  Permissions returned are effective permissions — the highest level of permission the user has. This does not include public repositories that users are not granted any specific permission in, and does not distinguish between direct and indirect privileges.  Only users with admin permission for the team may access this resource.  Permissions can be:  * `admin` * `write` * `read`  Example:  ``` $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories  {   \"pagelen\": 10,   \"values\": [     {       \"type\": \"repository_permission\",       \"user\": {         \"type\": \"user\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"       },       \"repository\": {         \"type\": \"repository\",         \"name\": \"geordi\",         \"full_name\": \"bitbucket/geordi\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"       },       \"permission\": \"admin\"     },     {       \"type\": \"repository_permission\",       \"user\": {         \"type\": \"user\",         \"display_name\": \"Sean Conaty\",         \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"       },       \"repository\": {         \"type\": \"repository\",         \"name\": \"geordi\",         \"full_name\": \"bitbucket/geordi\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"       },       \"permission\": \"write\"     }   ],   \"page\": 1,   \"size\": 2 } ```  Results may be further [filtered or sorted](../../../../meta/filtering) by repository, user, or permission by adding the following query string parameters:  * `q=repository.name=\"geordi\"` or `q=permission>\"read\"` * `sort=user.display_name`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort). 
     * @param {module:api/DefaultApi~teamsUsernamePermissionsRepositoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositoryPermissions}
     */

  }, {
    key: "teamsUsernamePermissionsRepositoriesGet",
    value: function teamsUsernamePermissionsRepositoriesGet(username, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernamePermissionsRepositoriesGet");
      }

      var pathParams = {
        'username': username
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
      var returnType = _PaginatedRepositoryPermissions["default"];
      return this.apiClient.callApi('/teams/{username}/permissions/repositories', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamsUsernamePermissionsRepositoriesRepoSlugGet operation.
     * @callback module:api/DefaultApi~teamsUsernamePermissionsRepositoriesRepoSlugGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedRepositoryPermissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object for each repository permission of a given repository.  If the username URL parameter refers to a user account instead of a team account, an object containing the repository permissions of the username's repository will be returned.  Permissions returned are effective permissions — the highest level of permission the user has. This does not include public repositories that users are not granted any specific permission in, and does not distinguish between direct and indirect privileges.  Only users with admin permission for the repository may access this resource.  Permissions can be:  * `admin` * `write` * `read`  Example:  ``` $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi  {   \"pagelen\": 10,   \"values\": [     {       \"type\": \"repository_permission\",       \"user\": {         \"type\": \"user\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"       },       \"repository\": {         \"type\": \"repository\",         \"name\": \"geordi\",         \"full_name\": \"bitbucket/geordi\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"       },       \"permission\": \"admin\"     },     {       \"type\": \"repository_permission\",       \"user\": {         \"type\": \"user\",         \"display_name\": \"Sean Conaty\",         \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"       },       \"repository\": {         \"type\": \"repository\",         \"name\": \"geordi\",         \"full_name\": \"bitbucket/geordi\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"       },       \"permission\": \"write\"     }   ],   \"page\": 1,   \"size\": 2 } ```  Results may be further [filtered or sorted](../../../../meta/filtering) by user, or permission by adding the following query string parameters:  * `q=permission>\"read\"` * `sort=user.display_name`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     * @param {String} username This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort). 
     * @param {module:api/DefaultApi~teamsUsernamePermissionsRepositoriesRepoSlugGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedRepositoryPermissions}
     */

  }, {
    key: "teamsUsernamePermissionsRepositoriesRepoSlugGet",
    value: function teamsUsernamePermissionsRepositoriesRepoSlugGet(username, repoSlug, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling teamsUsernamePermissionsRepositoriesRepoSlugGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling teamsUsernamePermissionsRepositoriesRepoSlugGet");
      }

      var pathParams = {
        'username': username,
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
      var returnType = _PaginatedRepositoryPermissions["default"];
      return this.apiClient.callApi('/teams/{username}/permissions/repositories/{repo_slug}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userPermissionsTeamsGet operation.
     * @callback module:api/DefaultApi~userPermissionsTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedTeamPermissions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns an object for each team the caller is a member of, and their effective role — the highest level of privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level is returned.  Permissions can be:  * `admin` * `collaborator`  Example:  ``` $ curl https://api.bitbucket.org/2.0/user/permissions/teams  {   \"pagelen\": 10,   \"values\": [     {       \"permission\": \"admin\",       \"type\": \"team_permission\",       \"user\": {         \"type\": \"user\",         \"nickname\": \"evzijst\",         \"display_name\": \"Erik van Zijst\",         \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"       },       \"team\": {         \"display_name\": \"Atlassian Bitbucket\",         \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"       }     }   ],   \"page\": 1,   \"size\": 1 } ```  Results may be further [filtered or sorted](../../../meta/filtering) by team or permission by adding the following query string parameters:  * `q=team.uuid=\"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"` or `q=permission=\"admin\"` * `sort=team.display_name`  Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.q  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering).
     * @param {String} opts.sort  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort). 
     * @param {module:api/DefaultApi~userPermissionsTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedTeamPermissions}
     */

  }, {
    key: "userPermissionsTeamsGet",
    value: function userPermissionsTeamsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'q': opts['q'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedTeamPermissions["default"];
      return this.apiClient.callApi('/user/permissions/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;