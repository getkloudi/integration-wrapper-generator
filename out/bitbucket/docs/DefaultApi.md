# Bitbucket.DefaultApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesWorkspaceRepoSlugDiffstatSpecGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugDiffstatSpecGet) | **GET** /repositories/{workspace}/{repo_slug}/diffstat/{spec} | 
[**repositoriesWorkspaceRepoSlugIssuesExportPost**](DefaultApi.md#repositoriesWorkspaceRepoSlugIssuesExportPost) | **POST** /repositories/{workspace}/{repo_slug}/issues/export | 
[**repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet) | **GET** /repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip | 
[**repositoriesWorkspaceRepoSlugIssuesImportGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugIssuesImportGet) | **GET** /repositories/{workspace}/{repo_slug}/issues/import | 
[**repositoriesWorkspaceRepoSlugIssuesImportPost**](DefaultApi.md#repositoriesWorkspaceRepoSlugIssuesImportPost) | **POST** /repositories/{workspace}/{repo_slug}/issues/import | 
[**repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid} | 
[**repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports | 
[**repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases | 
[**repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet**](DefaultApi.md#repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons | 
[**teamsUsernamePermissionsGet**](DefaultApi.md#teamsUsernamePermissionsGet) | **GET** /teams/{username}/permissions | 
[**teamsUsernamePermissionsRepositoriesGet**](DefaultApi.md#teamsUsernamePermissionsRepositoriesGet) | **GET** /teams/{username}/permissions/repositories | 
[**teamsUsernamePermissionsRepositoriesRepoSlugGet**](DefaultApi.md#teamsUsernamePermissionsRepositoriesRepoSlugGet) | **GET** /teams/{username}/permissions/repositories/{repo_slug} | 
[**userPermissionsTeamsGet**](DefaultApi.md#userPermissionsTeamsGet) | **GET** /user/permissions/teams | 



## repositoriesWorkspaceRepoSlugDiffstatSpecGet

> PaginatedDiffstats repositoriesWorkspaceRepoSlugDiffstatSpecGet(spec, workspace, repoSlug, opts)



Returns the diff stat for the specified commit.  Diff stat responses contain a record for every path modified by the commit and lists the number of lines added and removed for each file.   Example: &#x60;&#x60;&#x60; curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964 {     \&quot;pagelen\&quot;: 500,     \&quot;values\&quot;: [         {             \&quot;type\&quot;: \&quot;diffstat\&quot;,             \&quot;status\&quot;: \&quot;modified\&quot;,             \&quot;lines_removed\&quot;: 1,             \&quot;lines_added\&quot;: 2,             \&quot;old\&quot;: {                 \&quot;path\&quot;: \&quot;setup.py\&quot;,                 \&quot;escaped_path\&quot;: \&quot;setup.py\&quot;,                 \&quot;type\&quot;: \&quot;commit_file\&quot;,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py\&quot;                     }                 }             },             \&quot;new\&quot;: {                 \&quot;path\&quot;: \&quot;setup.py\&quot;,                 \&quot;escaped_path\&quot;: \&quot;setup.py\&quot;,                 \&quot;type\&quot;: \&quot;commit_file\&quot;,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py\&quot;                     }                 }             }         }     ],     \&quot;page\&quot;: 1,     \&quot;size\&quot;: 1 } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DefaultApi();
let spec = "spec_example"; // String | A commit SHA (e.g. `3a8b42`) or a commit range using double dot notation (e.g. `3a8b42..9ff173`). 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'ignoreWhitespace': true // Boolean | Generate diffs that ignore whitespace
};
apiInstance.repositoriesWorkspaceRepoSlugDiffstatSpecGet(spec, workspace, repoSlug, opts, (error, data, response) => {
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
 **spec** | **String**| A commit SHA (e.g. &#x60;3a8b42&#x60;) or a commit range using double dot notation (e.g. &#x60;3a8b42..9ff173&#x60;).  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **ignoreWhitespace** | **Boolean**| Generate diffs that ignore whitespace | [optional] 

### Return type

[**PaginatedDiffstats**](PaginatedDiffstats.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugIssuesExportPost

> repositoriesWorkspaceRepoSlugIssuesExportPost(workspace, repoSlug)



A POST request to this endpoint initiates a new background celery task that archives the repo&#39;s issues.  For example, you can run:  curl -u &lt;username&gt; -X POST http://api.bitbucket.org/2.0/repositories/&lt;owner_username&gt;/&lt;repo_slug&gt;/ issues/export  When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the &#39;Location&#39; response header. This url is the endpoint for where the user can obtain their zip files.\&quot;

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

let apiInstance = new Bitbucket.DefaultApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugIssuesExportPost(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet

> IssueJobStatus repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet(workspace, repoSlug, repoName, taskId)



This endpoint is used to poll for the progress of an issue export job and return the zip file after the job is complete. As long as the job is running, this will return a 200 response with in the response body a description of the current status.  After the job has been scheduled, but before it starts executing, this endpoint&#39;s response is:  {  \&quot;type\&quot;: \&quot;issue_job_status\&quot;,  \&quot;status\&quot;: \&quot;ACCEPTED\&quot;,  \&quot;phase\&quot;: \&quot;Initializing\&quot;,  \&quot;total\&quot;: 0,  \&quot;count\&quot;: 0,  \&quot;pct\&quot;: 0 }   Then once it starts running, it becomes:  {  \&quot;type\&quot;: \&quot;issue_job_status\&quot;,  \&quot;status\&quot;: \&quot;STARTED\&quot;,  \&quot;phase\&quot;: \&quot;Attachments\&quot;,  \&quot;total\&quot;: 15,  \&quot;count\&quot;: 11,  \&quot;pct\&quot;: 73 }  Once the job has successfully completed, it returns a stream of the zip file.

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

let apiInstance = new Bitbucket.DefaultApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let repoName = "repoName_example"; // String | The name of the repo
let taskId = "taskId_example"; // String | The ID of the export task
apiInstance.repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet(workspace, repoSlug, repoName, taskId, (error, data, response) => {
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
 **repoName** | **String**| The name of the repo | 
 **taskId** | **String**| The ID of the export task | 

### Return type

[**IssueJobStatus**](IssueJobStatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugIssuesImportGet

> IssueJobStatus repositoriesWorkspaceRepoSlugIssuesImportGet(workspace, repoSlug)



When using GET, this endpoint reports the status of the current import task. Request example:  &#x60;&#x60;&#x60; $ curl -u &lt;username&gt; -X GET https://api.bitbucket.org/2.0/repositories/&lt;owner_username&gt;/&lt;repo_slug&gt;/issues/import &#x60;&#x60;&#x60;  After the job has been scheduled, but before it starts executing, this endpoint&#39;s response is:  &#x60;&#x60;&#x60; &lt; HTTP/1.1 202 Accepted {     \&quot;type\&quot;: \&quot;issue_job_status\&quot;,     \&quot;status\&quot;: \&quot;PENDING\&quot;,     \&quot;phase\&quot;: \&quot;Attachments\&quot;,     \&quot;total\&quot;: 15,     \&quot;count\&quot;: 0,     \&quot;percent\&quot;: 0 } &#x60;&#x60;&#x60;  Once it starts running, it is a 202 response with status STARTED and progress filled.  After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.

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

let apiInstance = new Bitbucket.DefaultApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugIssuesImportGet(workspace, repoSlug, (error, data, response) => {
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

[**IssueJobStatus**](IssueJobStatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugIssuesImportPost

> IssueJobStatus repositoriesWorkspaceRepoSlugIssuesImportPost(workspace, repoSlug)



A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All existing issues will be deleted and replaced by the contents of the imported zip file.  Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name \&quot;archive,\&quot; which needs to be a file field:  &#x60;&#x60;&#x60; $ curl -u &lt;username&gt; -X POST -F archive&#x3D;@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/&lt;owner_username&gt;/&lt;repo_slug&gt;/issues/import &#x60;&#x60;&#x60;  When the import job is accepted, here is example output:  &#x60;&#x60;&#x60; &lt; HTTP/1.1 202 Accepted  {     \&quot;type\&quot;: \&quot;issue_job_status\&quot;,     \&quot;status\&quot;: \&quot;ACCEPTED\&quot;,     \&quot;phase\&quot;: \&quot;Attachments\&quot;,     \&quot;total\&quot;: 15,     \&quot;count\&quot;: 0,     \&quot;percent\&quot;: 0 } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DefaultApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugIssuesImportPost(workspace, repoSlug, (error, data, response) => {
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

[**IssueJobStatus**](IssueJobStatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet

> repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet()



### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DefaultApi();
apiInstance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet

> repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet()



### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DefaultApi();
apiInstance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet

> repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet()



### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DefaultApi();
apiInstance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet

> repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet()



### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DefaultApi();
apiInstance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamsUsernamePermissionsGet

> PaginatedTeamPermissions teamsUsernamePermissionsGet(username, opts)



Returns an object for each team permission a user on the team has.  Permissions returned are effective permissions — if a user is a member of multiple groups with distinct roles, only the highest level is returned.  Permissions can be:  * &#x60;admin&#x60; * &#x60;collaborator&#x60;  Only users with admin permission for the team may access this resource.  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions  {   \&quot;pagelen\&quot;: 10,   \&quot;values\&quot;: [     {       \&quot;permission\&quot;: \&quot;admin\&quot;,       \&quot;type\&quot;: \&quot;team_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;nickname\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;       },       \&quot;team\&quot;: {         \&quot;display_name\&quot;: \&quot;Atlassian Bitbucket\&quot;,         \&quot;uuid\&quot;: \&quot;{4cc6108a-a241-4db0-96a5-64347ac04f87}\&quot;       }     },     {       \&quot;permission\&quot;: \&quot;collaborator\&quot;,       \&quot;type\&quot;: \&quot;team_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;nickname\&quot;: \&quot;seanaty\&quot;,         \&quot;display_name\&quot;: \&quot;Sean Conaty\&quot;,         \&quot;uuid\&quot;: \&quot;{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\&quot;       },       \&quot;team\&quot;: {         \&quot;display_name\&quot;: \&quot;Atlassian Bitbucket\&quot;,         \&quot;uuid\&quot;: \&quot;{4cc6108a-a241-4db0-96a5-64347ac04f87}\&quot;       }     }   ],   \&quot;page\&quot;: 1,   \&quot;size\&quot;: 2 } &#x60;&#x60;&#x60;  Results may be further [filtered or sorted](../../../meta/filtering) by team, user, or permission by adding the following query string parameters:  * &#x60;q&#x3D;user.uuid&#x3D;\&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;&#x60; or &#x60;q&#x3D;permission&#x3D;\&quot;admin\&quot;&#x60; * &#x60;sort&#x3D;team.display_name&#x60;  Note that the query parameter values need to be URL escaped so that &#x60;&#x3D;&#x60; would become &#x60;%3D&#x60;.

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

let apiInstance = new Bitbucket.DefaultApi();
let username = "username_example"; // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering).
  'sort': "sort_example" // String |  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort). 
};
apiInstance.teamsUsernamePermissionsGet(username, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the account, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;. An account is either a team or user.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering). | [optional] 
 **sort** | **String**|  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort).  | [optional] 

### Return type

[**PaginatedTeamPermissions**](PaginatedTeamPermissions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsUsernamePermissionsRepositoriesGet

> PaginatedRepositoryPermissions teamsUsernamePermissionsRepositoriesGet(username, opts)



Returns an object for each repository permission for all of a team’s repositories.  If the username URL parameter refers to a user account instead of a team account, an object containing the repository permissions of all the username&#39;s repositories will be returned.  Permissions returned are effective permissions — the highest level of permission the user has. This does not include public repositories that users are not granted any specific permission in, and does not distinguish between direct and indirect privileges.  Only users with admin permission for the team may access this resource.  Permissions can be:  * &#x60;admin&#x60; * &#x60;write&#x60; * &#x60;read&#x60;  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories  {   \&quot;pagelen\&quot;: 10,   \&quot;values\&quot;: [     {       \&quot;type\&quot;: \&quot;repository_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;       },       \&quot;repository\&quot;: {         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;name\&quot;: \&quot;geordi\&quot;,         \&quot;full_name\&quot;: \&quot;bitbucket/geordi\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;       },       \&quot;permission\&quot;: \&quot;admin\&quot;     },     {       \&quot;type\&quot;: \&quot;repository_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;display_name\&quot;: \&quot;Sean Conaty\&quot;,         \&quot;uuid\&quot;: \&quot;{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\&quot;       },       \&quot;repository\&quot;: {         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;name\&quot;: \&quot;geordi\&quot;,         \&quot;full_name\&quot;: \&quot;bitbucket/geordi\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;       },       \&quot;permission\&quot;: \&quot;write\&quot;     }   ],   \&quot;page\&quot;: 1,   \&quot;size\&quot;: 2 } &#x60;&#x60;&#x60;  Results may be further [filtered or sorted](../../../../meta/filtering) by repository, user, or permission by adding the following query string parameters:  * &#x60;q&#x3D;repository.name&#x3D;\&quot;geordi\&quot;&#x60; or &#x60;q&#x3D;permission&gt;\&quot;read\&quot;&#x60; * &#x60;sort&#x3D;user.display_name&#x60;  Note that the query parameter values need to be URL escaped so that &#x60;&#x3D;&#x60; would become &#x60;%3D&#x60;.

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

let apiInstance = new Bitbucket.DefaultApi();
let username = "username_example"; // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
  'sort': "sort_example" // String |  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort). 
};
apiInstance.teamsUsernamePermissionsRepositoriesGet(username, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the account, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;. An account is either a team or user.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering). | [optional] 
 **sort** | **String**|  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort).  | [optional] 

### Return type

[**PaginatedRepositoryPermissions**](PaginatedRepositoryPermissions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teamsUsernamePermissionsRepositoriesRepoSlugGet

> PaginatedRepositoryPermissions teamsUsernamePermissionsRepositoriesRepoSlugGet(username, repoSlug, opts)



Returns an object for each repository permission of a given repository.  If the username URL parameter refers to a user account instead of a team account, an object containing the repository permissions of the username&#39;s repository will be returned.  Permissions returned are effective permissions — the highest level of permission the user has. This does not include public repositories that users are not granted any specific permission in, and does not distinguish between direct and indirect privileges.  Only users with admin permission for the repository may access this resource.  Permissions can be:  * &#x60;admin&#x60; * &#x60;write&#x60; * &#x60;read&#x60;  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi  {   \&quot;pagelen\&quot;: 10,   \&quot;values\&quot;: [     {       \&quot;type\&quot;: \&quot;repository_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;       },       \&quot;repository\&quot;: {         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;name\&quot;: \&quot;geordi\&quot;,         \&quot;full_name\&quot;: \&quot;bitbucket/geordi\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;       },       \&quot;permission\&quot;: \&quot;admin\&quot;     },     {       \&quot;type\&quot;: \&quot;repository_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;display_name\&quot;: \&quot;Sean Conaty\&quot;,         \&quot;uuid\&quot;: \&quot;{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\&quot;       },       \&quot;repository\&quot;: {         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;name\&quot;: \&quot;geordi\&quot;,         \&quot;full_name\&quot;: \&quot;bitbucket/geordi\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;       },       \&quot;permission\&quot;: \&quot;write\&quot;     }   ],   \&quot;page\&quot;: 1,   \&quot;size\&quot;: 2 } &#x60;&#x60;&#x60;  Results may be further [filtered or sorted](../../../../meta/filtering) by user, or permission by adding the following query string parameters:  * &#x60;q&#x3D;permission&gt;\&quot;read\&quot;&#x60; * &#x60;sort&#x3D;user.display_name&#x60;  Note that the query parameter values need to be URL escaped so that &#x60;&#x3D;&#x60; would become &#x60;%3D&#x60;.

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

let apiInstance = new Bitbucket.DefaultApi();
let username = "username_example"; // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering).
  'sort': "sort_example" // String |  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort). 
};
apiInstance.teamsUsernamePermissionsRepositoriesRepoSlugGet(username, repoSlug, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the account, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;. An account is either a team or user.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../../meta/filtering). | [optional] 
 **sort** | **String**|  Name of a response property sort the result by as per [filtering and sorting](../../../../meta/filtering#query-sort).  | [optional] 

### Return type

[**PaginatedRepositoryPermissions**](PaginatedRepositoryPermissions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userPermissionsTeamsGet

> PaginatedTeamPermissions userPermissionsTeamsGet(opts)



Returns an object for each team the caller is a member of, and their effective role — the highest level of privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level is returned.  Permissions can be:  * &#x60;admin&#x60; * &#x60;collaborator&#x60;  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/user/permissions/teams  {   \&quot;pagelen\&quot;: 10,   \&quot;values\&quot;: [     {       \&quot;permission\&quot;: \&quot;admin\&quot;,       \&quot;type\&quot;: \&quot;team_permission\&quot;,       \&quot;user\&quot;: {         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;nickname\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;       },       \&quot;team\&quot;: {         \&quot;display_name\&quot;: \&quot;Atlassian Bitbucket\&quot;,         \&quot;uuid\&quot;: \&quot;{4cc6108a-a241-4db0-96a5-64347ac04f87}\&quot;       }     }   ],   \&quot;page\&quot;: 1,   \&quot;size\&quot;: 1 } &#x60;&#x60;&#x60;  Results may be further [filtered or sorted](../../../meta/filtering) by team or permission by adding the following query string parameters:  * &#x60;q&#x3D;team.uuid&#x3D;\&quot;{4cc6108a-a241-4db0-96a5-64347ac04f87}\&quot;&#x60; or &#x60;q&#x3D;permission&#x3D;\&quot;admin\&quot;&#x60; * &#x60;sort&#x3D;team.display_name&#x60;  Note that the query parameter values need to be URL escaped so that &#x60;&#x3D;&#x60; would become &#x60;%3D&#x60;.

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

let apiInstance = new Bitbucket.DefaultApi();
let opts = {
  'q': "q_example", // String |  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering).
  'sort': "sort_example" // String |  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort). 
};
apiInstance.userPermissionsTeamsGet(opts, (error, data, response) => {
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
 **q** | **String**|  Query string to narrow down the response as per [filtering and sorting](../../../meta/filtering). | [optional] 
 **sort** | **String**|  Name of a response property sort the result by as per [filtering and sorting](../../../meta/filtering#query-sort).  | [optional] 

### Return type

[**PaginatedTeamPermissions**](PaginatedTeamPermissions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

