# Bitbucket.PullrequestsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugDefaultReviewersGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugDefaultReviewersGet) | **GET** /repositories/{username}/{repo_slug}/default-reviewers | 
[**repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete**](PullrequestsApi.md#repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete) | **DELETE** /repositories/{username}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet) | **GET** /repositories/{username}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut**](PullrequestsApi.md#repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut) | **PUT** /repositories/{username}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesUsernameRepoSlugPullrequestsActivityGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsActivityGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/activity | 
[**repositoriesUsernameRepoSlugPullrequestsGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests | 
[**repositoriesUsernameRepoSlugPullrequestsPost**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPost) | **POST** /repositories/{username}/{repo_slug}/pullrequests | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/activity | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete) | **DELETE** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/approve | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost) | **POST** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/approve | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id} | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/comments | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/commits | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost) | **POST** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/decline | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/diff | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id} | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost) | **POST** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/merge | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/patch | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut) | **PUT** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id} | 
[**repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet**](PullrequestsApi.md#repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet) | **GET** /repositories/{username}/{repo_slug}/pullrequests/{pull_request_id}/statuses | 



## repositoriesUsernameRepoSlugDefaultReviewersGet

> repositoriesUsernameRepoSlugDefaultReviewersGet(username, repoSlug)



Returns the repository&#39;s default reviewers.  These are the users that are automatically added as reviewers on every new pull request that is created.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersGet(username, repoSlug, (error, data, response) => {
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
 **username** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete

> Error repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(username, targetUsername, repoSlug)



Removes a default reviewer from the repository.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let targetUsername = "targetUsername_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(username, targetUsername, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet

> Error repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(username, targetUsername, repoSlug)



Returns the specified reviewer.  This can be used to test whether a user is among the repository&#39;s default reviewers list. A 404 indicates that that specified user is not a default reviewer.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let targetUsername = "targetUsername_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(username, targetUsername, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut

> Error repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(username, targetUsername, repoSlug)



Adds the specified user to the repository&#39;s list of default reviewers.  This method is idempotent. Adding a user a second time has no effect.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let targetUsername = "targetUsername_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(username, targetUsername, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsActivityGet

> repositoriesUsernameRepoSlugPullrequestsActivityGet(username, repoSlug)



Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsActivityGet(username, repoSlug, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsGet

> PaginatedPullrequests repositoriesUsernameRepoSlugPullrequestsGet(username, repoSlug, opts)



Returns a paginated list of all pull requests on the specified repository. By default only open pull requests are returned. This can be controlled using the &#x60;state&#x60; query parameter. To retrieve pull requests that are in one of multiple states, repeat the &#x60;state&#x60; parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'state': "state_example" // String | Only return pull requests that are in this state. This parameter can be repeated.
};
apiInstance.repositoriesUsernameRepoSlugPullrequestsGet(username, repoSlug, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **state** | **String**| Only return pull requests that are in this state. This parameter can be repeated. | [optional] 

### Return type

[**PaginatedPullrequests**](PaginatedPullrequests.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPost

> Pullrequest repositoriesUsernameRepoSlugPullrequestsPost(username, repoSlug, opts)



Creates a new pull request.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
};
apiInstance.repositoriesUsernameRepoSlugPullrequestsPost(username, repoSlug, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**Pullrequest**](Pullrequest.md)| The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title. | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet

> repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(username, repoSlug, pullRequestId)



Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(username, repoSlug, pullRequestId, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **pullRequestId** | **Number**| The id of the pull request.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(username, pullRequestId, repoSlug)



Redact the authenticated user&#39;s approval of the specified pull request.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(username, pullRequestId, repoSlug)



Approve the specified pull request as the authenticated user.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(username, pullRequestId, commentId, repoSlug)



Returns a specific pull request comment.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let commentId = "commentId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(username, pullRequestId, commentId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **commentId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(username, pullRequestId, repoSlug)



Returns a paginated list of the pull request&#39;s comments.  This includes both global, inline comments and replies.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(username, pullRequestId, repoSlug)



Returns a paginated list of the pull request&#39;s commits.  These are the commits that are being merged into the destination branch when the pull requests gets accepted.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost

> Pullrequest repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(username, pullRequestId, repoSlug)



Declines the pull request.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(username, pullRequestId, repoSlug)



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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet

> Pullrequest repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(username, repoSlug, pullRequestId)



Returns the specified pull request.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(username, repoSlug, pullRequestId, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the account, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **pullRequestId** | **Number**| The id of the pull request.  | 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost

> Pullrequest repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(username, pullRequestId, repoSlug, opts)



Merges the pull request.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let opts = {
  'body': new Bitbucket.PullrequestMergeParameters() // PullrequestMergeParameters | 
};
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(username, pullRequestId, repoSlug, opts, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 
 **body** | [**PullrequestMergeParameters**](PullrequestMergeParameters.md)|  | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet

> Error repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(username, pullRequestId, repoSlug)



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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | 
let pullRequestId = "pullRequestId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(username, pullRequestId, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut

> Pullrequest repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(username, repoSlug, pullRequestId, opts)



Mutates the specified pull request.  This can be used to change the pull request&#39;s branches or description.  Only open pull requests can be mutated.

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

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the open pull request. 
let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The pull request that is to be updated.
};
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(username, repoSlug, pullRequestId, opts, (error, data, response) => {
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
 **username** | **String**| This can either be the username or the UUID of the user, surrounded by curly-braces, for example: &#x60;{user UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **pullRequestId** | **Number**| The id of the open pull request.  | 
 **body** | [**Pullrequest**](Pullrequest.md)| The pull request that is to be updated. | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
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

let apiInstance = new Bitbucket.PullrequestsApi();
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

