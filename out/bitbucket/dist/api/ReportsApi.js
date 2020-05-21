"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedAnnotations = _interopRequireDefault(require("../model/PaginatedAnnotations"));

var _PaginatedReports = _interopRequireDefault(require("../model/PaginatedReports"));

var _Report = _interopRequireDefault(require("../model/Report"));

var _ReportAnnotation = _interopRequireDefault(require("../model/ReportAnnotation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Reports service.
* @module api/ReportsApi
* @version 1.2.0
*/
var ReportsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ReportsApi. 
  * @alias module:api/ReportsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ReportsApi(apiClient) {
    _classCallCheck(this, ReportsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the bulkCreateOrUpdateAnnotations operation.
   * @callback module:api/ReportsApi~bulkCreateOrUpdateAnnotationsCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/ReportAnnotation>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Bulk upload of annotations. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.  Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.  ### Sample cURL request: ``` curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \\ --header 'Content-Type: application/json' \\ --data-raw '[   {      \"external_id\": \"mysystem-annotation001\",      \"title\": \"Security scan report\",      \"annotation_type\": \"VULNERABILITY\",      \"summary\": \"This line represents a security threat.\",      \"severity\": \"HIGH\",       \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\",      \"line\": 42   },   {      \"external_id\": \"mySystem-annotation002\",      \"title\": \"Bug report\",      \"annotation_type\": \"BUG\",      \"result\": \"FAILED\",      \"summary\": \"This line might introduce a bug.\",      \"severity\": \"MEDIUM\",       \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java\",      \"line\": 13   } ]' ```  ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 
   * @param {String} username The account.
   * @param {String} repoSlug The repository.
   * @param {String} commit The commit for which to retrieve reports.
   * @param {String} reportId Uuid or external-if of the report for which to get annotations for.
   * @param {Array.<module:model/ReportAnnotation>} body The annotations to create or update
   * @param {module:api/ReportsApi~bulkCreateOrUpdateAnnotationsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/ReportAnnotation>}
   */


  _createClass(ReportsApi, [{
    key: "bulkCreateOrUpdateAnnotations",
    value: function bulkCreateOrUpdateAnnotations(username, repoSlug, commit, reportId, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling bulkCreateOrUpdateAnnotations");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling bulkCreateOrUpdateAnnotations");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling bulkCreateOrUpdateAnnotations");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling bulkCreateOrUpdateAnnotations");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling bulkCreateOrUpdateAnnotations");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [_ReportAnnotation["default"]];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createOrUpdateAnnotation operation.
     * @callback module:api/ReportsApi~createOrUpdateAnnotationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportAnnotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or updates an individual annotation for the specified report. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.  Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.  ### Sample cURL request: ``` curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \\ --header 'Content-Type: application/json' \\ --data-raw '{  \"title\": \"Security scan report\",  \"annotation_type\": \"VULNERABILITY\",  \"summary\": \"This line represents a security thread.\",  \"severity\": \"HIGH\",  \"path\": \"my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\",  \"line\": 42 }' ```  ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the report belongs to.
     * @param {String} reportId Either the uuid or external-id of the report.
     * @param {String} annotationId Either the uuid or external-id of the annotation.
     * @param {module:model/ReportAnnotation} body The annotation to create or update
     * @param {module:api/ReportsApi~createOrUpdateAnnotationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportAnnotation}
     */

  }, {
    key: "createOrUpdateAnnotation",
    value: function createOrUpdateAnnotation(username, repoSlug, commit, reportId, annotationId, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createOrUpdateAnnotation");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createOrUpdateAnnotation");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling createOrUpdateAnnotation");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling createOrUpdateAnnotation");
      } // verify the required parameter 'annotationId' is set


      if (annotationId === undefined || annotationId === null) {
        throw new _Error["default"]("Missing the required parameter 'annotationId' when calling createOrUpdateAnnotation");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createOrUpdateAnnotation");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId,
        'annotationId': annotationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ReportAnnotation["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createOrUpdateReport operation.
     * @callback module:api/ReportsApi~createOrUpdateReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Report} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.  ### Sample cURL request: ``` curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \\ --header 'Content-Type: application/json' \\ --data-raw '{  \"title\": \"Security scan report\",  \"details\": \"This pull request introduces 10 new dependency vulnerabilities.\",  \"report_type\": \"SECURITY\",  \"reporter\": \"mySystem\",  \"link\": \"http://www.mysystem.com/reports/001\",  \"result\": \"FAILED\",  \"data\": [   {    \"title\": \"Duration (seconds)\",    \"type\": \"DURATION\",    \"value\": 14   },   {    \"title\": \"Safe to merge?\",    \"type\": \"BOOLEAN\",    \"value\": false   }  ] }' ```  ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the report belongs to.
     * @param {String} reportId Either the uuid or external-id of the report.
     * @param {module:model/Report} body The report to create or update
     * @param {module:api/ReportsApi~createOrUpdateReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Report}
     */

  }, {
    key: "createOrUpdateReport",
    value: function createOrUpdateReport(username, repoSlug, commit, reportId, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createOrUpdateReport");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createOrUpdateReport");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling createOrUpdateReport");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling createOrUpdateReport");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createOrUpdateReport");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Report["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteAnnotation operation.
     * @callback module:api/ReportsApi~deleteAnnotationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a single Annotation matching the provided ID.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the annotation belongs to.
     * @param {String} reportId Either the uuid or external-id of the annotation.
     * @param {String} annotationId Either the uuid or external-id of the annotation.
     * @param {module:api/ReportsApi~deleteAnnotationCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteAnnotation",
    value: function deleteAnnotation(username, repoSlug, commit, reportId, annotationId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteAnnotation");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteAnnotation");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling deleteAnnotation");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling deleteAnnotation");
      } // verify the required parameter 'annotationId' is set


      if (annotationId === undefined || annotationId === null) {
        throw new _Error["default"]("Missing the required parameter 'annotationId' when calling deleteAnnotation");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId,
        'annotationId': annotationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteReport operation.
     * @callback module:api/ReportsApi~deleteReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a single Report matching the provided ID.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the report belongs to.
     * @param {String} reportId Either the uuid or external-id of the report.
     * @param {module:api/ReportsApi~deleteReportCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteReport",
    value: function deleteReport(username, repoSlug, commit, reportId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteReport");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteReport");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling deleteReport");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling deleteReport");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAnnotation operation.
     * @callback module:api/ReportsApi~getAnnotationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportAnnotation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a single Annotation matching the provided ID.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the report belongs to.
     * @param {String} reportId Either the uuid or external-id of the report.
     * @param {String} annotationId Either the uuid or external-id of the annotation.
     * @param {module:api/ReportsApi~getAnnotationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportAnnotation}
     */

  }, {
    key: "getAnnotation",
    value: function getAnnotation(username, repoSlug, commit, reportId, annotationId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getAnnotation");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getAnnotation");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling getAnnotation");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling getAnnotation");
      } // verify the required parameter 'annotationId' is set


      if (annotationId === undefined || annotationId === null) {
        throw new _Error["default"]("Missing the required parameter 'annotationId' when calling getAnnotation");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId,
        'annotationId': annotationId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ReportAnnotation["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getAnnotationsForReport operation.
     * @callback module:api/ReportsApi~getAnnotationsForReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedAnnotations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of Annotations for a specified report.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit for which to retrieve reports.
     * @param {String} reportId Uuid or external-if of the report for which to get annotations for.
     * @param {module:api/ReportsApi~getAnnotationsForReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedAnnotations}
     */

  }, {
    key: "getAnnotationsForReport",
    value: function getAnnotationsForReport(username, repoSlug, commit, reportId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getAnnotationsForReport");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getAnnotationsForReport");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling getAnnotationsForReport");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling getAnnotationsForReport");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedAnnotations["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getReport operation.
     * @callback module:api/ReportsApi~getReportCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Report} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a single Report matching the provided ID.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit the report belongs to.
     * @param {String} reportId Either the uuid or external-id of the report.
     * @param {module:api/ReportsApi~getReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Report}
     */

  }, {
    key: "getReport",
    value: function getReport(username, repoSlug, commit, reportId, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getReport");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getReport");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling getReport");
      } // verify the required parameter 'reportId' is set


      if (reportId === undefined || reportId === null) {
        throw new _Error["default"]("Missing the required parameter 'reportId' when calling getReport");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'reportId': reportId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Report["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getReportsForCommit operation.
     * @callback module:api/ReportsApi~getReportsForCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of Reports linked to this commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit for which to retrieve reports.
     * @param {module:api/ReportsApi~getReportsForCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedReports}
     */

  }, {
    key: "getReportsForCommit",
    value: function getReportsForCommit(username, repoSlug, commit, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getReportsForCommit");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getReportsForCommit");
      } // verify the required parameter 'commit' is set


      if (commit === undefined || commit === null) {
        throw new _Error["default"]("Missing the required parameter 'commit' when calling getReportsForCommit");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedReports["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/commit/{commit}/reports', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ReportsApi;
}();

exports["default"] = ReportsApi;