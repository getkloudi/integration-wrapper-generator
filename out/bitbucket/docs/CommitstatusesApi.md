# Bitbucket.CommitstatusesApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet**](CommitstatusesApi.md#repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet) | **GET** /repositories/{username}/{repo_slug}/commit/{node}/statuses/build/{key} | 
[**repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut**](CommitstatusesApi.md#repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut) | **PUT** /repositories/{username}/{repo_slug}/commit/{node}/statuses/build/{key} | 
[**repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost**](CommitstatusesApi.md#repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost) | **POST** /repositories/{username}/{repo_slug}/commit/{node}/statuses/build | 
[**repositoriesUsernameRepoSlugCommitNodeStatusesGet**](CommitstatusesApi.md#repositoriesUsernameRepoSlugCommitNodeStatusesGet) | **GET** /repositories/{username}/{repo_slug}/commit/{node}/statuses | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet**](CommitstatusesApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/statuses | 



## repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet

> Commitstatus repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(username, repoSlug, node, key)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let node = "node_example"; // String | The commit's SHA1
let key = "key_example"; // String | The build status' unique key
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(username, repoSlug, node, key, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 
 **node** | **String**| The commit&#39;s SHA1 | 
 **key** | **String**| The build status&#39; unique key | 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut

> Commitstatus repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(username, repoSlug, node, key, opts)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let node = "node_example"; // String | The commit's SHA1
let key = "key_example"; // String | The commit status' unique key
let opts = {
  'body': new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
};
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(username, repoSlug, node, key, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 
 **node** | **String**| The commit&#39;s SHA1 | 
 **key** | **String**| The commit status&#39; unique key | 
 **body** | [**Commitstatus**](Commitstatus.md)| The updated build status object | [optional] 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost

> Commitstatus repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(username, repoSlug, node)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let node = "node_example"; // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(username, repoSlug, node, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 
 **node** | **String**| The commit&#39;s SHA1 | 

### Return type

[**Commitstatus**](Commitstatus.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugCommitNodeStatusesGet

> PaginatedCommitstatuses repositoriesUsernameRepoSlugCommitNodeStatusesGet(username, repoSlug, node)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let node = "node_example"; // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(username, repoSlug, node, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 
 **node** | **String**| The commit&#39;s SHA1 | 

### Return type

[**PaginatedCommitstatuses**](PaginatedCommitstatuses.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet

> PaginatedCommitstatuses repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(username, repoSlug, pullRequestId)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let pullRequestId = 56; // Number | The pull request's id
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(username, repoSlug, pullRequestId, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 
 **pullRequestId** | **Number**| The pull request&#39;s id | 

### Return type

[**PaginatedCommitstatuses**](PaginatedCommitstatuses.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

