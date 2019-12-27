# Bitbucket.PullrequestsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPullrequestsForCommit**](PullrequestsApi.md#getPullrequestsForCommit) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests | Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when &#39;Go to pull request&#39; is clicked from the web interface for a commit&#39;s details.
[**pullrequestsSelectedUserGet**](PullrequestsApi.md#pullrequestsSelectedUserGet) | **GET** /pullrequests/{selected_user} | 
[**repositoriesWorkspaceRepoSlugDefaultReviewersGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugDefaultReviewersGet) | **GET** /repositories/{workspace}/{repo_slug}/default-reviewers | 
[**repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet) | **GET** /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut) | **PUT** /repositories/{workspace}/{repo_slug}/default-reviewers/{target_username} | 
[**repositoriesWorkspaceRepoSlugPullrequestsActivityGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsActivityGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/activity | 
[**repositoriesWorkspaceRepoSlugPullrequestsGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests | 
[**repositoriesWorkspaceRepoSlugPullrequestsPost**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPost) | **POST** /repositories/{workspace}/{repo_slug}/pullrequests | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost) | **POST** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id} | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id} | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut) | **PUT** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id} | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost) | **POST** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost) | **POST** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id} | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost) | **POST** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut) | **PUT** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id} | 
[**repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet**](PullrequestsApi.md#repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses | 



## getPullrequestsForCommit

> PaginatedPullrequests getPullrequestsForCommit(username, repoSlug, commit, opts)

Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when &#39;Go to pull request&#39; is clicked from the web interface for a commit&#39;s details.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PullrequestsApi();
let username = "username_example"; // String | The account; either the UUID in curly braces, or the account_id
let repoSlug = "repoSlug_example"; // String | The repository; either the UUID in curly braces, or the slug
let commit = "commit_example"; // String | The SHA1 of the commit
let opts = {
  'page': 1, // Number | Which page to retrieve
  'pagelen': 30 // Number | How many pull requests to retrieve per page
};
apiInstance.getPullrequestsForCommit(username, repoSlug, commit, opts, (error, data, response) => {
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
 **username** | **String**| The account; either the UUID in curly braces, or the account_id | 
 **repoSlug** | **String**| The repository; either the UUID in curly braces, or the slug | 
 **commit** | **String**| The SHA1 of the commit | 
 **page** | **Number**| Which page to retrieve | [optional] [default to 1]
 **pagelen** | **Number**| How many pull requests to retrieve per page | [optional] [default to 30]

### Return type

[**PaginatedPullrequests**](PaginatedPullrequests.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pullrequestsSelectedUserGet

> PaginatedPullrequests pullrequestsSelectedUserGet(selectedUser, opts)



Returns all pull requests authored by the specified user.  By default only open pull requests are returned. This can be controlled using the &#x60;state&#x60; query parameter. To retrieve pull requests that are in one of multiple states, repeat the &#x60;state&#x60; parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.

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
let selectedUser = "selectedUser_example"; // String | This can either be the username of the pull request author, the author's UUID surrounded by curly-braces, for example: `{account UUID}`, or the author's Atlassian ID. 
let opts = {
  'state': "state_example" // String | Only return pull requests that are in this state. This parameter can be repeated.
};
apiInstance.pullrequestsSelectedUserGet(selectedUser, opts, (error, data, response) => {
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
 **selectedUser** | **String**| This can either be the username of the pull request author, the author&#39;s UUID surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;, or the author&#39;s Atlassian ID.  | 
 **state** | **String**| Only return pull requests that are in this state. This parameter can be repeated. | [optional] 

### Return type

[**PaginatedPullrequests**](PaginatedPullrequests.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDefaultReviewersGet

> repositoriesWorkspaceRepoSlugDefaultReviewersGet(workspace, repoSlug)



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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDefaultReviewersGet(workspace, repoSlug, (error, data, response) => {
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
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete

> Error repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete(targetUsername, workspace, repoSlug)



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
let targetUsername = "targetUsername_example"; // String | This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete(targetUsername, workspace, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**| This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;.  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet

> Error repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet(targetUsername, workspace, repoSlug)



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
let targetUsername = "targetUsername_example"; // String | This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet(targetUsername, workspace, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**| This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;.  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut

> Error repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut(targetUsername, workspace, repoSlug)



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
let targetUsername = "targetUsername_example"; // String | This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: `{account UUID}`. 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut(targetUsername, workspace, repoSlug, (error, data, response) => {
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
 **targetUsername** | **String**| This can either be the username or the UUID of the default reviewer, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;.  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsActivityGet

> repositoriesWorkspaceRepoSlugPullrequestsActivityGet(pullRequestId, workspace, repoSlug)



Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.  Comments created on a file or a line of code have an inline property.  Comment example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;comment\&quot;: {                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\&quot;                     }                 },                 \&quot;deleted\&quot;: false,                 \&quot;pullrequest\&quot;: {                     \&quot;type\&quot;: \&quot;pullrequest\&quot;,                     \&quot;id\&quot;: 5695,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                         }                     },                     \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;                 },                 \&quot;content\&quot;: {                     \&quot;raw\&quot;: \&quot;inline with to a dn from lines\&quot;,                     \&quot;markup\&quot;: \&quot;markdown\&quot;,                     \&quot;html\&quot;: \&quot;&lt;p&gt;inline with to a dn from lines&lt;/p&gt;\&quot;,                     \&quot;type\&quot;: \&quot;rendered\&quot;                 },                 \&quot;created_on\&quot;: \&quot;2019-09-27T00:33:46.039178+00:00\&quot;,                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;created_on\&quot;: \&quot;2019-09-27T00:33:46.039178+00:00\&quot;,                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;updated_on\&quot;: \&quot;2019-09-27T00:33:46.055384+00:00\&quot;,                 \&quot;inline\&quot;: {                     \&quot;context_lines\&quot;: \&quot;\&quot;,                     \&quot;to\&quot;: null,                     \&quot;path\&quot;: \&quot;\&quot;,                     \&quot;outdated\&quot;: false,                     \&quot;from\&quot;: 211                 },                 \&quot;type\&quot;: \&quot;pullrequest_comment\&quot;,                 \&quot;id\&quot;: 118571088             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;  Updates include a state property of OPEN, MERGED, or DECLINED.  Update example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;update\&quot;: {                 \&quot;description\&quot;: \&quot;\&quot;,                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;,                 \&quot;destination\&quot;: {                     \&quot;commit\&quot;: {                         \&quot;type\&quot;: \&quot;commit\&quot;,                         \&quot;hash\&quot;: \&quot;6a2c16e4a152\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\&quot;                             }                         }                     },                     \&quot;branch\&quot;: {                         \&quot;name\&quot;: \&quot;master\&quot;                     },                     \&quot;repository\&quot;: {                         \&quot;name\&quot;: \&quot;Atlaskit-MK-2\&quot;,                         \&quot;type\&quot;: \&quot;repository\&quot;,                         \&quot;full_name\&quot;: \&quot;atlassian/atlaskit-mk-2\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;avatar\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bytebucket.org/ravatar/%7B%7D?ts&#x3D;js\&quot;                             }                         },                         \&quot;uuid\&quot;: \&quot;{}\&quot;                     }                 },                 \&quot;reason\&quot;: \&quot;\&quot;,                 \&quot;source\&quot;: {                     \&quot;commit\&quot;: {                         \&quot;type\&quot;: \&quot;commit\&quot;,                         \&quot;hash\&quot;: \&quot;728c8bad1813\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\&quot;                             }                         }                     },                     \&quot;branch\&quot;: {                         \&quot;name\&quot;: \&quot;username/NONE-add-onClick-prop-for-accessibility\&quot;                     },                     \&quot;repository\&quot;: {                         \&quot;name\&quot;: \&quot;Atlaskit-MK-2\&quot;,                         \&quot;type\&quot;: \&quot;repository\&quot;,                         \&quot;full_name\&quot;: \&quot;atlassian/atlaskit-mk-2\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;avatar\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bytebucket.org/ravatar/%7B%7D?ts&#x3D;js\&quot;                             }                         },                         \&quot;uuid\&quot;: \&quot;{}\&quot;                     }                 },                 \&quot;state\&quot;: \&quot;OPEN\&quot;,                 \&quot;author\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;date\&quot;: \&quot;2019-05-10T06:48:25.305565+00:00\&quot;             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;  Approval example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;approval\&quot;: {                 \&quot;date\&quot;: \&quot;2019-09-27T00:37:19.849534+00:00\&quot;,                 \&quot;pullrequest\&quot;: {                     \&quot;type\&quot;: \&quot;pullrequest\&quot;,                     \&quot;id\&quot;: 5695,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                         }                     },                     \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;                 },                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 }             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;

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
let pullRequestId = 56; // Number | The id of the pull request.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsActivityGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsGet

> PaginatedPullrequests repositoriesWorkspaceRepoSlugPullrequestsGet(workspace, repoSlug, opts)



Returns all pull requests on the specified repository.  By default only open pull requests are returned. This can be controlled using the &#x60;state&#x60; query parameter. To retrieve pull requests that are in one of multiple states, repeat the &#x60;state&#x60; parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.

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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'state': "state_example" // String | Only return pull requests that are in this state. This parameter can be repeated.
};
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsGet(workspace, repoSlug, opts, (error, data, response) => {
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
 **state** | **String**| Only return pull requests that are in this state. This parameter can be repeated. | [optional] 

### Return type

[**PaginatedPullrequests**](PaginatedPullrequests.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPost

> Pullrequest repositoriesWorkspaceRepoSlugPullrequestsPost(workspace, repoSlug, opts)



Creates a new pull request where the destination repository is this repository and the author is the authenticated user.  The minimum required fields to create a pull request are &#x60;title&#x60; and &#x60;source&#x60;, specified by a branch name.  &#x60;&#x60;&#x60; curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \\     -u my-username:my-password \\     --request POST \\     --header &#39;Content-Type: application/json&#39; \\     --data &#39;{         \&quot;title\&quot;: \&quot;My Title\&quot;,         \&quot;source\&quot;: {             \&quot;branch\&quot;: {                 \&quot;name\&quot;: \&quot;staging\&quot;             }         }     }&#39; &#x60;&#x60;&#x60;  If the pull request&#39;s &#x60;destination&#x60; is not specified, it will default to the &#x60;repository.mainbranch&#x60;. To open a pull request to a different branch, say from a feature branch to a staging branch, specify a &#x60;destination&#x60; (same format as the &#x60;source&#x60;):  &#x60;&#x60;&#x60; {     \&quot;title\&quot;: \&quot;My Title\&quot;,     \&quot;source\&quot;: {         \&quot;branch\&quot;: {             \&quot;name\&quot;: \&quot;my-feature-branch\&quot;         }     },     \&quot;destination\&quot;: {         \&quot;branch\&quot;: {             \&quot;name\&quot;: \&quot;staging\&quot;         }     } } &#x60;&#x60;&#x60;  Reviewers can be specified by adding an array of user objects as the &#x60;reviewers&#x60; property.  &#x60;&#x60;&#x60; {     \&quot;title\&quot;: \&quot;My Title\&quot;,     \&quot;source\&quot;: {         \&quot;branch\&quot;: {             \&quot;name\&quot;: \&quot;my-feature-branch\&quot;         }     },     \&quot;reviewers\&quot;: [         {             \&quot;uuid\&quot;: \&quot;{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\&quot;         }     ] } &#x60;&#x60;&#x60;  Other fields:  * &#x60;description&#x60; - a string * &#x60;close_source_branch&#x60; - boolean that specifies if the source branch should be closed upon merging

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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
};
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPost(workspace, repoSlug, opts, (error, data, response) => {
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
 **body** | [**Pullrequest**](Pullrequest.md)| The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title. | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet

> repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet(pullRequestId, workspace, repoSlug)



Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.  Comments created on a file or a line of code have an inline property.  Comment example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;comment\&quot;: {                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\&quot;                     }                 },                 \&quot;deleted\&quot;: false,                 \&quot;pullrequest\&quot;: {                     \&quot;type\&quot;: \&quot;pullrequest\&quot;,                     \&quot;id\&quot;: 5695,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                         }                     },                     \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;                 },                 \&quot;content\&quot;: {                     \&quot;raw\&quot;: \&quot;inline with to a dn from lines\&quot;,                     \&quot;markup\&quot;: \&quot;markdown\&quot;,                     \&quot;html\&quot;: \&quot;&lt;p&gt;inline with to a dn from lines&lt;/p&gt;\&quot;,                     \&quot;type\&quot;: \&quot;rendered\&quot;                 },                 \&quot;created_on\&quot;: \&quot;2019-09-27T00:33:46.039178+00:00\&quot;,                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;created_on\&quot;: \&quot;2019-09-27T00:33:46.039178+00:00\&quot;,                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;updated_on\&quot;: \&quot;2019-09-27T00:33:46.055384+00:00\&quot;,                 \&quot;inline\&quot;: {                     \&quot;context_lines\&quot;: \&quot;\&quot;,                     \&quot;to\&quot;: null,                     \&quot;path\&quot;: \&quot;\&quot;,                     \&quot;outdated\&quot;: false,                     \&quot;from\&quot;: 211                 },                 \&quot;type\&quot;: \&quot;pullrequest_comment\&quot;,                 \&quot;id\&quot;: 118571088             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;  Updates include a state property of OPEN, MERGED, or DECLINED.  Update example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;update\&quot;: {                 \&quot;description\&quot;: \&quot;\&quot;,                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;,                 \&quot;destination\&quot;: {                     \&quot;commit\&quot;: {                         \&quot;type\&quot;: \&quot;commit\&quot;,                         \&quot;hash\&quot;: \&quot;6a2c16e4a152\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\&quot;                             }                         }                     },                     \&quot;branch\&quot;: {                         \&quot;name\&quot;: \&quot;master\&quot;                     },                     \&quot;repository\&quot;: {                         \&quot;name\&quot;: \&quot;Atlaskit-MK-2\&quot;,                         \&quot;type\&quot;: \&quot;repository\&quot;,                         \&quot;full_name\&quot;: \&quot;atlassian/atlaskit-mk-2\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;avatar\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bytebucket.org/ravatar/%7B%7D?ts&#x3D;js\&quot;                             }                         },                         \&quot;uuid\&quot;: \&quot;{}\&quot;                     }                 },                 \&quot;reason\&quot;: \&quot;\&quot;,                 \&quot;source\&quot;: {                     \&quot;commit\&quot;: {                         \&quot;type\&quot;: \&quot;commit\&quot;,                         \&quot;hash\&quot;: \&quot;728c8bad1813\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\&quot;                             }                         }                     },                     \&quot;branch\&quot;: {                         \&quot;name\&quot;: \&quot;username/NONE-add-onClick-prop-for-accessibility\&quot;                     },                     \&quot;repository\&quot;: {                         \&quot;name\&quot;: \&quot;Atlaskit-MK-2\&quot;,                         \&quot;type\&quot;: \&quot;repository\&quot;,                         \&quot;full_name\&quot;: \&quot;atlassian/atlaskit-mk-2\&quot;,                         \&quot;links\&quot;: {                             \&quot;self\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;html\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2\&quot;                             },                             \&quot;avatar\&quot;: {                                 \&quot;href\&quot;: \&quot;https://bytebucket.org/ravatar/%7B%7D?ts&#x3D;js\&quot;                             }                         },                         \&quot;uuid\&quot;: \&quot;{}\&quot;                     }                 },                 \&quot;state\&quot;: \&quot;OPEN\&quot;,                 \&quot;author\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 },                 \&quot;date\&quot;: \&quot;2019-05-10T06:48:25.305565+00:00\&quot;             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;  Approval example: &#x60;&#x60;&#x60; {     \&quot;pagelen\&quot;: 20,     \&quot;values\&quot;: [         {             \&quot;approval\&quot;: {                 \&quot;date\&quot;: \&quot;2019-09-27T00:37:19.849534+00:00\&quot;,                 \&quot;pullrequest\&quot;: {                     \&quot;type\&quot;: \&quot;pullrequest\&quot;,                     \&quot;id\&quot;: 5695,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                         }                     },                     \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;                 },                 \&quot;user\&quot;: {                     \&quot;display_name\&quot;: \&quot;Name Lastname\&quot;,                     \&quot;uuid\&quot;: \&quot;{}\&quot;,                     \&quot;links\&quot;: {                         \&quot;self\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/users/%7B%7D\&quot;                         },                         \&quot;html\&quot;: {                             \&quot;href\&quot;: \&quot;https://bitbucket.org/%7B%7D/\&quot;                         },                         \&quot;avatar\&quot;: {                             \&quot;href\&quot;: \&quot;https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\&quot;                         }                     },                     \&quot;type\&quot;: \&quot;user\&quot;,                     \&quot;nickname\&quot;: \&quot;Name\&quot;,                     \&quot;account_id\&quot;: \&quot;\&quot;                 }             },             \&quot;pull_request\&quot;: {                 \&quot;type\&quot;: \&quot;pullrequest\&quot;,                 \&quot;id\&quot;: 5695,                 \&quot;links\&quot;: {                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\&quot;                     }                 },                 \&quot;title\&quot;: \&quot;username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\&quot;             }         }     ] } &#x60;&#x60;&#x60;

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
let pullRequestId = 56; // Number | The id of the pull request.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete

> repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete(pullRequestId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost

> Participant repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost(pullRequestId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Participant**](Participant.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete

> repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete(pullRequestId, commentId, workspace, repoSlug)



Deletes a specific pull request comment.

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
let pullRequestId = "pullRequestId_example"; // String | 
let commentId = "commentId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete(pullRequestId, commentId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **commentId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet

> PullrequestComment repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(pullRequestId, commentId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let commentId = "commentId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(pullRequestId, commentId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **commentId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**PullrequestComment**](PullrequestComment.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut

> PullrequestComment repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut(pullRequestId, commentId, workspace, repoSlug, body)



Updates a specific pull request comment.

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
let pullRequestId = "pullRequestId_example"; // String | 
let commentId = "commentId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let body = new Bitbucket.PullrequestComment(); // PullrequestComment | The contents of the updated comment.
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut(pullRequestId, commentId, workspace, repoSlug, body, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **commentId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**PullrequestComment**](PullrequestComment.md)| The contents of the updated comment. | 

### Return type

[**PullrequestComment**](PullrequestComment.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet

> PaginatedPullrequestComments repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet(workspace, repoSlug, pullRequestId)



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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request.
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet(workspace, repoSlug, pullRequestId, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 

### Return type

[**PaginatedPullrequestComments**](PaginatedPullrequestComments.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost

> PullrequestComment repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost(workspace, repoSlug, pullRequestId, body)



Creates a new pull request comment.  Returns the newly created pull request comment.

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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request.
let body = new Bitbucket.PullrequestComment(); // PullrequestComment | The comment object.
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost(workspace, repoSlug, pullRequestId, body, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 
 **body** | [**PullrequestComment**](PullrequestComment.md)| The comment object. | 

### Return type

[**PullrequestComment**](PullrequestComment.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet

> Error repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet(pullRequestId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost

> Pullrequest repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost(pullRequestId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet

> repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet(pullRequestId, workspace, repoSlug)



Redirects to the [repository diff](../../diff/%7Bspec%7D) with the revspec that corresponds to the pull request.

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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet

> repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet(pullRequestId, workspace, repoSlug)



Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D) with the revspec that corresponds to the pull request.

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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet

> Pullrequest repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet(workspace, repoSlug, pullRequestId)



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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request.
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet(workspace, repoSlug, pullRequestId, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost

> Pullrequest repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost(pullRequestId, workspace, repoSlug, opts)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'body': new Bitbucket.PullrequestMergeParameters() // PullrequestMergeParameters | 
};
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost(pullRequestId, workspace, repoSlug, opts, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**PullrequestMergeParameters**](PullrequestMergeParameters.md)|  | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet

> Error repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet(pullRequestId, workspace, repoSlug)



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
let pullRequestId = "pullRequestId_example"; // String | 
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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
 **pullRequestId** | **String**|  | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut

> Pullrequest repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut(workspace, repoSlug, pullRequestId, opts)



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
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let pullRequestId = 56; // Number | The id of the pull request.
let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The pull request that is to be updated.
};
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut(workspace, repoSlug, pullRequestId, opts, (error, data, response) => {
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
 **pullRequestId** | **Number**| The id of the pull request. | 
 **body** | [**Pullrequest**](Pullrequest.md)| The pull request that is to be updated. | [optional] 

### Return type

[**Pullrequest**](Pullrequest.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet

> PaginatedCommitstatuses repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug)



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
let pullRequestId = 56; // Number | The id of the pull request.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(pullRequestId, workspace, repoSlug, (error, data, response) => {
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

### Return type

[**PaginatedCommitstatuses**](PaginatedCommitstatuses.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

