# Bitbucket.CommitsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bulkCreateOrUpdateAnnotations**](CommitsApi.md#bulkCreateOrUpdateAnnotations) | **POST** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations | 
[**createOrUpdateAnnotation**](CommitsApi.md#createOrUpdateAnnotation) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**createOrUpdateReport**](CommitsApi.md#createOrUpdateReport) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**deleteAnnotation**](CommitsApi.md#deleteAnnotation) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**deleteReport**](CommitsApi.md#deleteReport) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**getAnnotation**](CommitsApi.md#getAnnotation) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId} | 
[**getAnnotationsForReport**](CommitsApi.md#getAnnotationsForReport) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations | 
[**getReport**](CommitsApi.md#getReport) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId} | 
[**getReportsForCommit**](CommitsApi.md#getReportsForCommit) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/reports | 
[**repositoriesWorkspaceRepoSlugCommitNodeApproveDelete**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeApproveDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{node}/approve | 
[**repositoriesWorkspaceRepoSlugCommitNodeApprovePost**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeApprovePost) | **POST** /repositories/{workspace}/{repo_slug}/commit/{node}/approve | 
[**repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet) | **GET** /repositories/{workspace}/{repo_slug}/commit/{node}/comments/{comment_id} | 
[**repositoriesWorkspaceRepoSlugCommitNodeCommentsGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeCommentsGet) | **GET** /repositories/{workspace}/{repo_slug}/commit/{node}/comments | 
[**repositoriesWorkspaceRepoSlugCommitNodeCommentsPost**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeCommentsPost) | **POST** /repositories/{workspace}/{repo_slug}/commit/{node}/comments | 
[**repositoriesWorkspaceRepoSlugCommitNodeGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitNodeGet) | **GET** /repositories/{workspace}/{repo_slug}/commit/{node} | 
[**repositoriesWorkspaceRepoSlugCommitsGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitsGet) | **GET** /repositories/{workspace}/{repo_slug}/commits | 
[**repositoriesWorkspaceRepoSlugCommitsPost**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitsPost) | **POST** /repositories/{workspace}/{repo_slug}/commits | 
[**repositoriesWorkspaceRepoSlugCommitsRevisionGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitsRevisionGet) | **GET** /repositories/{workspace}/{repo_slug}/commits/{revision} | 
[**repositoriesWorkspaceRepoSlugCommitsRevisionPost**](CommitsApi.md#repositoriesWorkspaceRepoSlugCommitsRevisionPost) | **POST** /repositories/{workspace}/{repo_slug}/commits/{revision} | 
[**repositoriesWorkspaceRepoSlugDiffSpecGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugDiffSpecGet) | **GET** /repositories/{workspace}/{repo_slug}/diff/{spec} | 
[**repositoriesWorkspaceRepoSlugPatchSpecGet**](CommitsApi.md#repositoriesWorkspaceRepoSlugPatchSpecGet) | **GET** /repositories/{workspace}/{repo_slug}/patch/{spec} | 



## bulkCreateOrUpdateAnnotations

> [ReportAnnotation] bulkCreateOrUpdateAnnotations(username, repoSlug, commit, reportId, body)



Bulk upload of annotations. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.  Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system&#39;s name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.  ### Sample cURL request: &#x60;&#x60;&#x60; curl --location &#39;https://api.bitbucket.org/2.0/repositories/&lt;username&gt;/&lt;reposity-name&gt;/commit/&lt;commit-hash&gt;/reports/mysystem-001/annotations&#39; \\ --header &#39;Content-Type: application/json&#39; \\ --data-raw &#39;[   {      \&quot;external_id\&quot;: \&quot;mysystem-annotation001\&quot;,      \&quot;title\&quot;: \&quot;Security scan report\&quot;,      \&quot;annotation_type\&quot;: \&quot;VULNERABILITY\&quot;,      \&quot;summary\&quot;: \&quot;This line represents a security threat.\&quot;,      \&quot;severity\&quot;: \&quot;HIGH\&quot;,       \&quot;path\&quot;: \&quot;my-service/src/main/java/com/myCompany/mysystem/logic/Main.java\&quot;,      \&quot;line\&quot;: 42   },   {      \&quot;external_id\&quot;: \&quot;mySystem-annotation002\&quot;,      \&quot;title\&quot;: \&quot;Bug report\&quot;,      \&quot;annotation_type\&quot;: \&quot;BUG\&quot;,      \&quot;result\&quot;: \&quot;FAILED\&quot;,      \&quot;summary\&quot;: \&quot;This line might introduce a bug.\&quot;,      \&quot;severity\&quot;: \&quot;MEDIUM\&quot;,       \&quot;path\&quot;: \&quot;my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java\&quot;,      \&quot;line\&quot;: 13   } ]&#39; &#x60;&#x60;&#x60;  ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL  Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information. 

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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

let apiInstance = new Bitbucket.CommitsApi();
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


## repositoriesWorkspaceRepoSlugCommitNodeApproveDelete

> repositoriesWorkspaceRepoSlugCommitNodeApproveDelete(node, workspace, repoSlug)



Redact the authenticated user&#39;s approval of the specified commit.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeApproveDelete(node, workspace, repoSlug, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeApprovePost

> Participant repositoriesWorkspaceRepoSlugCommitNodeApprovePost(node, workspace, repoSlug)



Approve the specified commit as the authenticated user.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeApprovePost(node, workspace, repoSlug, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Participant**](Participant.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet

> CommitComment repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet(node, commentId, workspace, repoSlug)



Returns the specified commit comment.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let commentId = 56; // Number | The id of the comment.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet(node, commentId, workspace, repoSlug, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **commentId** | **Number**| The id of the comment. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**CommitComment**](CommitComment.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeCommentsGet

> PaginatedCommitComments repositoriesWorkspaceRepoSlugCommitNodeCommentsGet(node, workspace, repoSlug, opts)



Returns the commit&#39;s comments.  This includes both global and inline comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String | Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering). 
  'sort': "sort_example" // String | Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). 
};
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeCommentsGet(node, workspace, repoSlug, opts, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**| Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering).  | [optional] 
 **sort** | **String**| Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering).  | [optional] 

### Return type

[**PaginatedCommitComments**](PaginatedCommitComments.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeCommentsPost

> repositoriesWorkspaceRepoSlugCommitNodeCommentsPost(node, workspace, username, repoSlug, body)



Creates new comment on the specified commit.  To post a reply to an existing comment, include the &#x60;parent.id&#x60; field:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \\   -X POST -u evzijst \\   -H &#39;Content-Type: application/json&#39; \\   -d &#39;{\&quot;content\&quot;: {\&quot;raw\&quot;: \&quot;One more thing!\&quot;},        \&quot;parent\&quot;: {\&quot;id\&quot;: 5728901}}&#39; &#x60;&#x60;&#x60;

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let body = new Bitbucket.CommitComment(); // CommitComment | The specified comment.
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeCommentsPost(node, workspace, username, repoSlug, body, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**CommitComment**](CommitComment.md)| The specified comment. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugCommitNodeGet

> Commit repositoriesWorkspaceRepoSlugCommitNodeGet(node, workspace, repoSlug)



Returns the specified commit.  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1 {     \&quot;rendered\&quot;: {         \&quot;message\&quot;: {         \&quot;raw\&quot;: \&quot;Add a GEORDI_OUTPUT_DIR setting\&quot;,         \&quot;markup\&quot;: \&quot;markdown\&quot;,         \&quot;html\&quot;: \&quot;&lt;p&gt;Add a GEORDI_OUTPUT_DIR setting&lt;/p&gt;\&quot;,         \&quot;type\&quot;: \&quot;rendered\&quot;         }     },     \&quot;hash\&quot;: \&quot;f7591a13eda445d9a9167f98eb870319f4b6c2d8\&quot;,     \&quot;repository\&quot;: {         \&quot;name\&quot;: \&quot;geordi\&quot;,         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;full_name\&quot;: \&quot;bitbucket/geordi\&quot;,         \&quot;links\&quot;: {             \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi\&quot;             },             \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/bitbucket/geordi\&quot;             },             \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts&#x3D;1730260\&quot;             }         },         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;     },     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8\&quot;         },         \&quot;comments\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments\&quot;         },         \&quot;patch\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8\&quot;         },         \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8\&quot;         },         \&quot;diff\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8\&quot;         },         \&quot;approve\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve\&quot;         },         \&quot;statuses\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses\&quot;         }     },     \&quot;author\&quot;: {         \&quot;raw\&quot;: \&quot;Brodie Rao &lt;a@b.c&gt;\&quot;,         \&quot;type\&quot;: \&quot;author\&quot;,         \&quot;user\&quot;: {             \&quot;display_name\&quot;: \&quot;Brodie Rao\&quot;,             \&quot;uuid\&quot;: \&quot;{9484702e-c663-4afd-aefb-c93a8cd31c28}\&quot;,             \&quot;links\&quot;: {                 \&quot;self\&quot;: {                     \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D\&quot;                 },                 \&quot;html\&quot;: {                     \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/\&quot;                 },                 \&quot;avatar\&quot;: {                     \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128\&quot;                 }             },             \&quot;type\&quot;: \&quot;user\&quot;,             \&quot;nickname\&quot;: \&quot;brodie\&quot;,             \&quot;account_id\&quot;: \&quot;557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca\&quot;         }     },     \&quot;summary\&quot;: {         \&quot;raw\&quot;: \&quot;Add a GEORDI_OUTPUT_DIR setting\&quot;,         \&quot;markup\&quot;: \&quot;markdown\&quot;,         \&quot;html\&quot;: \&quot;&lt;p&gt;Add a GEORDI_OUTPUT_DIR setting&lt;/p&gt;\&quot;,         \&quot;type\&quot;: \&quot;rendered\&quot;     },     \&quot;participants\&quot;: [],     \&quot;parents\&quot;: [         {             \&quot;type\&quot;: \&quot;commit\&quot;,             \&quot;hash\&quot;: \&quot;f06941fec4ef6bcb0c2456927a0cf258fa4f899b\&quot;,             \&quot;links\&quot;: {                 \&quot;self\&quot;: {                     \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b\&quot;                 },                 \&quot;html\&quot;: {                     \&quot;href\&quot;: \&quot;https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b\&quot;                 }             }         }     ],     \&quot;date\&quot;: \&quot;2012-07-16T19:37:54+00:00\&quot;,     \&quot;message\&quot;: \&quot;Add a GEORDI_OUTPUT_DIR setting\&quot;,     \&quot;type\&quot;: \&quot;commit\&quot; } &#x60;&#x60;&#x60;

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeGet(node, workspace, repoSlug, (error, data, response) => {
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
 **node** | **String**| The commit&#39;s SHA1. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Commit**](Commit.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitsGet

> Error repositoriesWorkspaceRepoSlugCommitsGet(workspace, repoSlug)



These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{workspace}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  An optional &#x60;path&#x60; parameter can be specified that will limit the results to commits that affect that path. &#x60;path&#x60; can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by &#x60;path&#x60;. It is important to note that if the &#x60;path&#x60; parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path&#x3D;README.md&amp;include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;master  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;master&#x60; that changed the file README.md.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path&#x3D;src/&amp;include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;master  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;master&#x60; that changed to a file in any file in the directory src or its children.  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitsGet(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitsPost

> Error repositoriesWorkspaceRepoSlugCommitsPost(workspace, repoSlug)



Identical to &#x60;GET /repositories/{workspace}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitsPost(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitsRevisionGet

> Error repositoriesWorkspaceRepoSlugCommitsRevisionGet(revision, workspace, repoSlug)



These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{workspace}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{workspace}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  An optional &#x60;path&#x60; parameter can be specified that will limit the results to commits that affect that path. &#x60;path&#x60; can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by &#x60;path&#x60;. It is important to note that if the &#x60;path&#x60; parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path&#x3D;README.md&amp;include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;master  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;master&#x60; that changed the file README.md.  ## GET /repositories/{workspace}/{repo_slug}/commits/?path&#x3D;src/&amp;include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;master  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;master&#x60; that changed to a file in any file in the directory src or its children.  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let revision = "revision_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitsRevisionGet(revision, workspace, repoSlug, (error, data, response) => {
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
 **revision** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitsRevisionPost

> Error repositoriesWorkspaceRepoSlugCommitsRevisionPost(revision, workspace, repoSlug)



Identical to &#x60;GET /repositories/{workspace}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let revision = "revision_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitsRevisionPost(revision, workspace, repoSlug, (error, data, response) => {
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
 **revision** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDiffSpecGet

> repositoriesWorkspaceRepoSlugDiffSpecGet(spec, workspace, repoSlug, opts)



Produces a raw, git-style diff for either a single commit (diffed against its first parent), or a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a 3-way diff, or merge diff, is computed. This shows the changes introduced by the left branch (&#x60;3a8b42&#x60; in our example) as compared againt the right branch (&#x60;9ff173&#x60;).  This is equivalent to merging the left branch into the right branch and then computing the diff of the merge commit against its first parent (the right branch). This follows the same behavior as pull requests that also show this style of 3-way, or merge diff.  While similar to patches, diffs:  * Don&#39;t have a commit header (username, commit message, etc) * Support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter   the diff to just that one file diff  The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let spec = "spec_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'context': 56, // Number | Generate diffs with <n> lines of context instead of the usual three
  'path': "path_example", // String | Limit the diff to a particular file (this parameter can be repeated for multiple paths)
  'ignoreWhitespace': true, // Boolean | Generate diffs that ignore whitespace
  'binary': true // Boolean | Generate diffs that include binary files,true if omitted.
};
apiInstance.repositoriesWorkspaceRepoSlugDiffSpecGet(spec, workspace, repoSlug, opts, (error, data, response) => {
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
 **spec** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **context** | **Number**| Generate diffs with &lt;n&gt; lines of context instead of the usual three | [optional] 
 **path** | **String**| Limit the diff to a particular file (this parameter can be repeated for multiple paths) | [optional] 
 **ignoreWhitespace** | **Boolean**| Generate diffs that ignore whitespace | [optional] 
 **binary** | **Boolean**| Generate diffs that include binary files,true if omitted. | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPatchSpecGet

> repositoriesWorkspaceRepoSlugPatchSpecGet(spec, workspace, repoSlug)



Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (&#x60;3a8b42&#x60; and its ancestors in our example). For Mercurial, a single patch is returned that combines the changes of all commits on the source branch.  While similar to diffs, patches:  * Have a commit header (username, commit message, etc) * Do not support the &#x60;path&#x3D;foo/bar.py&#x60; query parameter  The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.CommitsApi();
let spec = "spec_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPatchSpecGet(spec, workspace, repoSlug, (error, data, response) => {
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
 **spec** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

