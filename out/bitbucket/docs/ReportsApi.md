# Bitbucket.ReportsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreateOrUpdateAnnotations**](ReportsApi.md#bulkCreateOrUpdateAnnotations) | **POST** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations | 
[**createOrUpdateAnnotation**](ReportsApi.md#createOrUpdateAnnotation) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**createOrUpdateReport**](ReportsApi.md#createOrUpdateReport) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**deleteAnnotation**](ReportsApi.md#deleteAnnotation) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**deleteReport**](ReportsApi.md#deleteReport) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**getAnnotation**](ReportsApi.md#getAnnotation) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**getAnnotationsForReport**](ReportsApi.md#getAnnotationsForReport) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations | 
[**getReport**](ReportsApi.md#getReport) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**getReportsForCommit**](ReportsApi.md#getReportsForCommit) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports | 



## bulkCreateOrUpdateAnnotations

> [ReportAnnotation] bulkCreateOrUpdateAnnotations(username, repoSlug, commit, reportId, body)



Bulk upload of annotations. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.  Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system&#39;s name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.  ### Sample cURL request: &#x60;&#x60;&#x60; curl --location &#39;https://api.bitbucket.org/2.0/repositories/&lt;username&gt;/&lt;reposity-name&gt;/commit/&lt;commit-hash&gt;/reports/mysystem-001/annotations&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;[   {      \&quot;external_id\&quot;: \&quot;mysystem-annotation001\&quot;,      \&quot;title\&quot;: \&quot;Security scan report\&quot;,      \&quot;annotation_type\&quot;: \&quot;VULNERABILITY\&quot;,      \&quot;summary\&quot;: \&quot;This line represents a security threat.\&quot;,      \&quot;severity\&quot;: \&quot;HIGH\&quot;,       \&quot;path\&quot;: \&quot;my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\&quot;,      \&quot;line\&quot;: 42   },   {      \&quot;external_id\&quot;: \&quot;mySystem-annotation002\&quot;,      \&quot;title\&quot;: \&quot;Bug report\&quot;,      \&quot;annotation_type\&quot;: \&quot;BUG\&quot;,      \&quot;result\&quot;: \&quot;FAILED\&quot;,      \&quot;summary\&quot;: \&quot;This line might introduce a bug.\&quot;,      \&quot;severity\&quot;: \&quot;MEDIUM\&quot;,       \&quot;path\&quot;: \&quot;my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java\&quot;,      \&quot;line\&quot;: 13   } ]&#39; &#x60;&#x60;&#x60;  ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit for which to retrieve reports.
let reportId = "reportId_example"; // String | Uuid or external-if of the report for which to get annotations for.
let body = [new Bitbucket.ReportAnnotation()]; // [ReportAnnotation] | The annotations to create or update
apiInstance.bulkCreateOrUpdateAnnotations(username, repoSlug, commit, reportId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit for which to retrieve reports. | 
 **reportId** | **String**| Uuid or external-if of the report for which to get annotations for. | 
 **body** | [**[ReportAnnotation]**](ReportAnnotation.md)| The annotations to create or update | 

### Return type

[**[ReportAnnotation]**](ReportAnnotation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrUpdateAnnotation

> ReportAnnotation createOrUpdateAnnotation(username, repoSlug, commit, reportId, annotationId, body)



Creates or updates an individual annotation for the specified report. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.  Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system&#39;s name to avoid collisions, for example, mySystem-annotation001.  ### Sample cURL request: &#x60;&#x60;&#x60; curl --request PUT &#39;https://api.bitbucket.org/2.0/repositories/&lt;username&gt;/&lt;reposity-name&gt;/commit/&lt;commit-hash&gt;/reports/mySystem-001/annotations/mysystem-annotation001&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{  \&quot;title\&quot;: \&quot;Security scan report\&quot;,  \&quot;annotation_type\&quot;: \&quot;VULNERABILITY\&quot;,  \&quot;summary\&quot;: \&quot;This line represents a security thread.\&quot;,  \&quot;severity\&quot;: \&quot;HIGH\&quot;,  \&quot;path\&quot;: \&quot;my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\&quot;,  \&quot;line\&quot;: 42 }&#39; &#x60;&#x60;&#x60;  ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the report belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the report.
let annotationId = "annotationId_example"; // String | Either the uuid or external-id of the annotation.
let body = new Bitbucket.ReportAnnotation(); // ReportAnnotation | The annotation to create or update
apiInstance.createOrUpdateAnnotation(username, repoSlug, commit, reportId, annotationId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the report belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the report. | 
 **annotationId** | **String**| Either the uuid or external-id of the annotation. | 
 **body** | [**ReportAnnotation**](ReportAnnotation.md)| The annotation to create or update | 

### Return type

[**ReportAnnotation**](ReportAnnotation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrUpdateReport

> Report createOrUpdateReport(username, repoSlug, commit, reportId, body)



Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system&#39;s name to avoid collisions, for example, mySystem-001.  ### Sample cURL request: &#x60;&#x60;&#x60; curl --request PUT &#39;https://api.bitbucket.org/2.0/repositories/&lt;username&gt;/&lt;reposity-name&gt;/commit/&lt;commit-hash&gt;/reports/mysystem-001&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;{  \&quot;title\&quot;: \&quot;Security scan report\&quot;,  \&quot;details\&quot;: \&quot;This pull request introduces 10 new dependency vulnerabilities.\&quot;,  \&quot;report_type\&quot;: \&quot;SECURITY\&quot;,  \&quot;reporter\&quot;: \&quot;mySystem\&quot;,  \&quot;link\&quot;: \&quot;http://www.mysystem.com/reports/001\&quot;,  \&quot;result\&quot;: \&quot;FAILED\&quot;,  \&quot;data\&quot;: [   {    \&quot;title\&quot;: \&quot;Duration (seconds)\&quot;,    \&quot;type\&quot;: \&quot;DURATION\&quot;,    \&quot;value\&quot;: 14   },   {    \&quot;title\&quot;: \&quot;Safe to merge?\&quot;,    \&quot;type\&quot;: \&quot;BOOLEAN\&quot;,    \&quot;value\&quot;: false   }  ] }&#39; &#x60;&#x60;&#x60;  ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the report belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the report.
let body = new Bitbucket.Report(); // Report | The report to create or update
apiInstance.createOrUpdateReport(username, repoSlug, commit, reportId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the report belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the report. | 
 **body** | [**Report**](Report.md)| The report to create or update | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAnnotation

> deleteAnnotation(username, repoSlug, commit, reportId, annotationId)



Deletes a single Annotation matching the provided ID.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the annotation belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the annotation.
let annotationId = "annotationId_example"; // String | Either the uuid or external-id of the annotation.
apiInstance.deleteAnnotation(username, repoSlug, commit, reportId, annotationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the annotation belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the annotation. | 
 **annotationId** | **String**| Either the uuid or external-id of the annotation. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteReport

> deleteReport(username, repoSlug, commit, reportId)



Deletes a single Report matching the provided ID.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the report belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the report.
apiInstance.deleteReport(username, repoSlug, commit, reportId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the report belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the report. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAnnotation

> ReportAnnotation getAnnotation(username, repoSlug, commit, reportId, annotationId)



Returns a single Annotation matching the provided ID.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the report belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the report.
let annotationId = "annotationId_example"; // String | Either the uuid or external-id of the annotation.
apiInstance.getAnnotation(username, repoSlug, commit, reportId, annotationId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the report belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the report. | 
 **annotationId** | **String**| Either the uuid or external-id of the annotation. | 

### Return type

[**ReportAnnotation**](ReportAnnotation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAnnotationsForReport

> PaginatedAnnotations getAnnotationsForReport(username, repoSlug, commit, reportId)



Returns a paginated list of Annotations for a specified report.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit for which to retrieve reports.
let reportId = "reportId_example"; // String | Uuid or external-if of the report for which to get annotations for.
apiInstance.getAnnotationsForReport(username, repoSlug, commit, reportId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit for which to retrieve reports. | 
 **reportId** | **String**| Uuid or external-if of the report for which to get annotations for. | 

### Return type

[**PaginatedAnnotations**](PaginatedAnnotations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReport

> Report getReport(username, repoSlug, commit, reportId)



Returns a single Report matching the provided ID.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit the report belongs to.
let reportId = "reportId_example"; // String | Either the uuid or external-id of the report.
apiInstance.getReport(username, repoSlug, commit, reportId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit the report belongs to. | 
 **reportId** | **String**| Either the uuid or external-id of the report. | 

### Return type

[**Report**](Report.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getReportsForCommit

> PaginatedReports getReportsForCommit(username, repoSlug, commit)



Returns a paginated list of Reports linked to this commit.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.ReportsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit for which to retrieve reports.
apiInstance.getReportsForCommit(username, repoSlug, commit, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit for which to retrieve reports. | 

### Return type

[**PaginatedReports**](PaginatedReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

