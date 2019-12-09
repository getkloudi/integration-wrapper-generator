# Bitbucket.IssueTrackerApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugComponentsComponentIdGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugComponentsComponentIdGet) | **GET** /repositories/{username}/{repo_slug}/components/{component_id} | 
[**repositoriesUsernameRepoSlugComponentsGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugComponentsGet) | **GET** /repositories/{username}/{repo_slug}/components | 
[**repositoriesUsernameRepoSlugIssuesGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesGet) | **GET** /repositories/{username}/{repo_slug}/issues | 
[**repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/attachments | 
[**repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete) | **DELETE** /repositories/{username}/{repo_slug}/issues/{issue_id}/attachments/{path} | 
[**repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/attachments/{path} | 
[**repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost) | **POST** /repositories/{username}/{repo_slug}/issues/{issue_id}/attachments | 
[**repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/comments/{comment_id} | 
[**repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/comments | 
[**repositoriesUsernameRepoSlugIssuesIssueIdDelete**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdDelete) | **DELETE** /repositories/{username}/{repo_slug}/issues/{issue_id} | 
[**repositoriesUsernameRepoSlugIssuesIssueIdGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id} | 
[**repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete) | **DELETE** /repositories/{username}/{repo_slug}/issues/{issue_id}/vote | 
[**repositoriesUsernameRepoSlugIssuesIssueIdVoteGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdVoteGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/vote | 
[**repositoriesUsernameRepoSlugIssuesIssueIdVotePut**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdVotePut) | **PUT** /repositories/{username}/{repo_slug}/issues/{issue_id}/vote | 
[**repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete) | **DELETE** /repositories/{username}/{repo_slug}/issues/{issue_id}/watch | 
[**repositoriesUsernameRepoSlugIssuesIssueIdWatchGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdWatchGet) | **GET** /repositories/{username}/{repo_slug}/issues/{issue_id}/watch | 
[**repositoriesUsernameRepoSlugIssuesIssueIdWatchPut**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesIssueIdWatchPut) | **PUT** /repositories/{username}/{repo_slug}/issues/{issue_id}/watch | 
[**repositoriesUsernameRepoSlugIssuesPost**](IssueTrackerApi.md#repositoriesUsernameRepoSlugIssuesPost) | **POST** /repositories/{username}/{repo_slug}/issues | 
[**repositoriesUsernameRepoSlugMilestonesGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugMilestonesGet) | **GET** /repositories/{username}/{repo_slug}/milestones | 
[**repositoriesUsernameRepoSlugMilestonesMilestoneIdGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugMilestonesMilestoneIdGet) | **GET** /repositories/{username}/{repo_slug}/milestones/{milestone_id} | 
[**repositoriesUsernameRepoSlugVersionsGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugVersionsGet) | **GET** /repositories/{username}/{repo_slug}/versions | 
[**repositoriesUsernameRepoSlugVersionsVersionIdGet**](IssueTrackerApi.md#repositoriesUsernameRepoSlugVersionsVersionIdGet) | **GET** /repositories/{username}/{repo_slug}/versions/{version_id} | 



## repositoriesUsernameRepoSlugComponentsComponentIdGet

> Component repositoriesUsernameRepoSlugComponentsComponentIdGet(username, repoSlug, componentId)



Returns the specified issue tracker component object.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let componentId = 56; // Number | The component's id
apiInstance.repositoriesUsernameRepoSlugComponentsComponentIdGet(username, repoSlug, componentId, (error, data, response) => {
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
 **componentId** | **Number**| The component&#39;s id | 

### Return type

[**Component**](Component.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugComponentsGet

> PaginatedComponents repositoriesUsernameRepoSlugComponentsGet(username, repoSlug)



Returns the components that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugComponentsGet(username, repoSlug, (error, data, response) => {
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

### Return type

[**PaginatedComponents**](PaginatedComponents.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesGet

> PaginatedIssues repositoriesUsernameRepoSlugIssuesGet(username, repoSlug)



Returns the issues in the issue tracker.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesGet(username, repoSlug, (error, data, response) => {
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

### Return type

[**PaginatedIssues**](PaginatedIssues.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet

> PaginatedIssueAttachments repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(username, repoSlug, issueId)



Returns all attachments for this issue.  This returns the files&#39; meta data. This does not return the files&#39; actual contents.  The files are always ordered by their upload date.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**PaginatedIssueAttachments**](PaginatedIssueAttachments.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete

> repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(username, path, issueId, repoSlug)



Deletes an attachment.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let path = "path_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(username, path, issueId, repoSlug, (error, data, response) => {
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
 **path** | **String**|  | 
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet

> repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(username, path, issueId, repoSlug)



Returns the contents of the specified file attachment.  Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents.  The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let path = "path_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(username, path, issueId, repoSlug, (error, data, response) => {
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
 **path** | **String**|  | 
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost

> repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(username, repoSlug, issueId)



Upload new issue attachments.  To upload files, perform a &#x60;multipart/form-data&#x60; POST containing one or more file fields.  When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet

> Error repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(username, commentId, issueId, repoSlug)



Returns the specified issue comment object.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let commentId = "commentId_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(username, commentId, issueId, repoSlug, (error, data, response) => {
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
 **commentId** | **String**|  | 
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet

> Error repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(username, issueId, repoSlug)



Returns all comments that were made on the specified issue.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(username, issueId, repoSlug, (error, data, response) => {
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
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdDelete

> Issue repositoriesUsernameRepoSlugIssuesIssueIdDelete(username, issueId, repoSlug)



Deletes the specified issue. This requires write access to the repository.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdDelete(username, issueId, repoSlug, (error, data, response) => {
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
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdGet

> Issue repositoriesUsernameRepoSlugIssuesIssueIdGet(username, issueId, repoSlug)



Returns the specified issue.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let issueId = "issueId_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdGet(username, issueId, repoSlug, (error, data, response) => {
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
 **issueId** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete

> Error repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(username, repoSlug, issueId)



Retract your vote.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdVoteGet

> Error repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(username, repoSlug, issueId)



Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven&#39;t.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdVotePut

> Error repositoriesUsernameRepoSlugIssuesIssueIdVotePut(username, repoSlug, issueId)



Vote for this issue.  To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete

> Error repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(username, repoSlug, issueId)



Stop watching this issue.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdWatchGet

> Error repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(username, repoSlug, issueId)



Indicated whether or not the authenticated user is watching this issue.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesIssueIdWatchPut

> Error repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(username, repoSlug, issueId)



Start watching this issue.  To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let issueId = 56; // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(username, repoSlug, issueId, (error, data, response) => {
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
 **issueId** | **Number**| The issue&#39;s id | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugIssuesPost

> Issue repositoriesUsernameRepoSlugIssuesPost(username, repoSlug, body)



Creates a new issue.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorisation.  The authenticated user is used for the issue&#39;s &#x60;reporter&#x60; field.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let body = new Bitbucket.Issue(); // Issue | The new issue. Note that the only required element is `title`. All other elements can be omitted from the body.
apiInstance.repositoriesUsernameRepoSlugIssuesPost(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**Issue**](Issue.md)| The new issue. Note that the only required element is &#x60;title&#x60;. All other elements can be omitted from the body. | 

### Return type

[**Issue**](Issue.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesUsernameRepoSlugMilestonesGet

> PaginatedMilestones repositoriesUsernameRepoSlugMilestonesGet(username, repoSlug)



Returns the milestones that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugMilestonesGet(username, repoSlug, (error, data, response) => {
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

### Return type

[**PaginatedMilestones**](PaginatedMilestones.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugMilestonesMilestoneIdGet

> Milestone repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(username, repoSlug, milestoneId)



Returns the specified issue tracker milestone object.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let milestoneId = 56; // Number | The milestone's id
apiInstance.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(username, repoSlug, milestoneId, (error, data, response) => {
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
 **milestoneId** | **Number**| The milestone&#39;s id | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugVersionsGet

> PaginatedVersions repositoriesUsernameRepoSlugVersionsGet(username, repoSlug)



Returns the versions that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugVersionsGet(username, repoSlug, (error, data, response) => {
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

### Return type

[**PaginatedVersions**](PaginatedVersions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugVersionsVersionIdGet

> Version repositoriesUsernameRepoSlugVersionsVersionIdGet(username, repoSlug, versionId)



Returns the specified issue tracker version object.

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

let apiInstance = new Bitbucket.IssueTrackerApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let versionId = 56; // Number | The version's id
apiInstance.repositoriesUsernameRepoSlugVersionsVersionIdGet(username, repoSlug, versionId, (error, data, response) => {
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
 **versionId** | **Number**| The version&#39;s id | 

### Return type

[**Version**](Version.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

