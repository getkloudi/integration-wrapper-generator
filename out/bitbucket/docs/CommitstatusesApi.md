# Bitbucket.CommitstatusesApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet**](CommitstatusesApi.md#repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet) | **GET** /repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key} | 
[**repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut**](CommitstatusesApi.md#repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build/{key} | 
[**repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost**](CommitstatusesApi.md#repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost) | **POST** /repositories/{workspace}/{repo_slug}/commit/{node}/statuses/build | 
[**repositoriesWorkspaceRepoSlugCommitNodeStatusesGet**](CommitstatusesApi.md#repositoriesWorkspaceRepoSlugCommitNodeStatusesGet) | **GET** /repositories/{workspace}/{repo_slug}/commit/{node}/statuses | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet**](CommitstatusesApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses | 



## repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet

> Commitstatus repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet(node, key, workspace, repoSlug)



Returns the specified build status for a commit.

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

let apiInstance = new Bitbucket.CommitstatusesApi();
let node = "node_example"; // String | The commit's SHA1.
let key = "key_example"; // String | The build status' unique key
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyGet(node, key, workspace, repoSlug, (error, data, response) => {
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
 **key** | **String**| The build status&#39; unique key | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut

> Commitstatus repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut(node, key, workspace, repoSlug, opts)



Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * &#x60;state&#x60; * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;refname&#x60;  The &#x60;key&#x60; cannot be changed.

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

let apiInstance = new Bitbucket.CommitstatusesApi();
let node = "node_example"; // String | The commit's SHA1.
let key = "key_example"; // String | The build status' unique key
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'body': new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
};
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildKeyPut(node, key, workspace, repoSlug, opts, (error, data, response) => {
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
 **key** | **String**| The build status&#39; unique key | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**Commitstatus**](Commitstatus.md)| The updated build status object | [optional] 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost

> Commitstatus repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost(node, workspace, repoSlug, opts)



Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use &#x60;https://foo.com/builds/{repository.full_name}&#x60; which Bitbucket will turn into &#x60;https://foo.com/builds/foo/bar&#x60; at render time. The context variables available are &#x60;repository&#x60; and &#x60;commit&#x60;.

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

let apiInstance = new Bitbucket.CommitstatusesApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'body': new Bitbucket.Commitstatus() // Commitstatus | The new commit status object.
};
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeStatusesBuildPost(node, workspace, repoSlug, opts, (error, data, response) => {
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
 **body** | [**Commitstatus**](Commitstatus.md)| The new commit status object. | [optional] 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugCommitNodeStatusesGet

> PaginatedCommitstatuses repositoriesWorkspaceRepoSlugCommitNodeStatusesGet(node, workspace, repoSlug, opts)



Returns all statuses (e.g. build results) for a specific commit.

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

let apiInstance = new Bitbucket.CommitstatusesApi();
let node = "node_example"; // String | The commit's SHA1.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String | Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering). 
  'sort': "sort_example" // String | Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to `created_on`. 
};
apiInstance.repositoriesWorkspaceRepoSlugCommitNodeStatusesGet(node, workspace, repoSlug, opts, (error, data, response) => {
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
 **sort** | **String**| Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to &#x60;created_on&#x60;.  | [optional] 

### Return type

[**PaginatedCommitstatuses**](PaginatedCommitstatuses.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet

> PaginatedCommitstatuses repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug, opts)



Returns all statuses (e.g. build results) for the given pull request.

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

let apiInstance = new Bitbucket.CommitstatusesApi();
let pullRequestId = 56; // Number | The id of the pull request.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'q': "q_example", // String | Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering). 
  'sort': "sort_example" // String | Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to `created_on`. 
};
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug, opts, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **q** | **String**| Query string to narrow down the response as per [filtering and sorting](../../../../../../meta/filtering).  | [optional] 
 **sort** | **String**| Field by which the results should be sorted as per [filtering and sorting](../../../../../../meta/filtering). Defaults to &#x60;created_on&#x60;.  | [optional] 

### Return type

[**PaginatedCommitstatuses**](PaginatedCommitstatuses.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

