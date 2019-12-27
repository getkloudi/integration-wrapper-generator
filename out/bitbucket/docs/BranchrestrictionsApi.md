# Bitbucket.BranchrestrictionsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesWorkspaceRepoSlugBranchRestrictionsGet**](BranchrestrictionsApi.md#repositoriesWorkspaceRepoSlugBranchRestrictionsGet) | **GET** /repositories/{workspace}/{repo_slug}/branch-restrictions | 
[**repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete**](BranchrestrictionsApi.md#repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet**](BranchrestrictionsApi.md#repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet) | **GET** /repositories/{workspace}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut**](BranchrestrictionsApi.md#repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut) | **PUT** /repositories/{workspace}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesWorkspaceRepoSlugBranchRestrictionsPost**](BranchrestrictionsApi.md#repositoriesWorkspaceRepoSlugBranchRestrictionsPost) | **POST** /repositories/{workspace}/{repo_slug}/branch-restrictions | 



## repositoriesWorkspaceRepoSlugBranchRestrictionsGet

> PaginatedBranchrestrictions repositoriesWorkspaceRepoSlugBranchRestrictionsGet(workspace, repoSlug, opts)



Returns a paginated list of all branch restrictions on the repository.

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

let apiInstance = new Bitbucket.BranchrestrictionsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let opts = {
  'kind': "kind_example", // String | Branch restrictions of this type
  'pattern': "pattern_example" // String | Branch restrictions applied to branches of this pattern
};
apiInstance.repositoriesWorkspaceRepoSlugBranchRestrictionsGet(workspace, repoSlug, opts, (error, data, response) => {
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
 **kind** | **String**| Branch restrictions of this type | [optional] 
 **pattern** | **String**| Branch restrictions applied to branches of this pattern | [optional] 

### Return type

[**PaginatedBranchrestrictions**](PaginatedBranchrestrictions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete

> repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete(id, workspace, repoSlug)



Deletes an existing branch restriction rule.

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

let apiInstance = new Bitbucket.BranchrestrictionsApi();
let id = "id_example"; // String | The restriction rule's id
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugBranchRestrictionsIdDelete(id, workspace, repoSlug, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet

> Branchrestriction repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet(id, workspace, repoSlug)



Returns a specific branch restriction rule.

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

let apiInstance = new Bitbucket.BranchrestrictionsApi();
let id = "id_example"; // String | The restriction rule's id
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugBranchRestrictionsIdGet(id, workspace, repoSlug, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut

> Branchrestriction repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut(id, workspace, repoSlug, body)



Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [&#x60;POST&#x60;](../branch-restrictions#post) for details.

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

let apiInstance = new Bitbucket.BranchrestrictionsApi();
let id = "id_example"; // String | The restriction rule's id
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let body = new Bitbucket.Branchrestriction(); // Branchrestriction | The new version of the existing rule
apiInstance.repositoriesWorkspaceRepoSlugBranchRestrictionsIdPut(id, workspace, repoSlug, body, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 
 **body** | [**Branchrestriction**](Branchrestriction.md)| The new version of the existing rule | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugBranchRestrictionsPost

> Branchrestriction repositoriesWorkspaceRepoSlugBranchRestrictionsPost(workspace, repoSlug, body)



Creates a new branch restriction rule for a repository.  &#x60;kind&#x60; describes what will be restricted. Allowed values include: &#x60;push&#x60;, &#x60;force&#x60;, &#x60;delete&#x60; and &#x60;restrict_merges&#x60;.  Different kinds of branch restrictions have different requirements:  * &#x60;push&#x60; and &#x60;restrict_merges&#x60; require &#x60;users&#x60; and &#x60;groups&#x60; to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * &#x60;force&#x60; can not be specified in a Mercurial repository.  The restriction applies to all branches that match. There are two ways to match a branch. It is configured in &#x60;branch_match_kind&#x60;:  1. &#x60;glob&#x60;: Matches a branch against the &#x60;pattern&#x60;. A &#x60;&#39;*&#39;&#x60; in    &#x60;pattern&#x60; will expand to match zero or more characters, and every    other character matches itself. For example, &#x60;&#39;foo*&#39;&#x60; will match    &#x60;&#39;foo&#39;&#x60; and &#x60;&#39;foobar&#39;&#x60;, but not &#x60;&#39;barfoo&#39;&#x60;. &#x60;&#39;*&#39;&#x60; will match all    branches. 2. &#x60;branching_model&#x60;: Matches a branch against the repository&#39;s    branching model. The &#x60;branch_type&#x60; controls the type of branch    to match. Allowed values include: &#x60;production&#x60;, &#x60;development&#x60;,    &#x60;bugfix&#x60;, &#x60;release&#x60;, &#x60;feature&#x60; and &#x60;hotfix&#x60;.  The combination of &#x60;kind&#x60; and match must be unique. This means that two &#x60;glob&#x60; restrictions in a repository cannot have the same &#x60;kind&#x60; and &#x60;pattern&#x60;. Additionally, two &#x60;branching_model&#x60; restrictions in a repository cannot have the same &#x60;kind&#x60; and &#x60;branch_type&#x60;.  &#x60;users&#x60; and &#x60;groups&#x60; are lists of users and groups that are except from the restriction. They can only be configured in &#x60;push&#x60; and &#x60;restrict_merges&#x60; restrictions. The &#x60;push&#x60; restriction stops a user pushing to matching branches unless that user is in &#x60;users&#x60; or is a member of a group in &#x60;groups&#x60;. The &#x60;restrict_merges&#x60; stops a user merging pull requests to matching branches unless that user is in &#x60;users&#x60; or is a member of a group in &#x60;groups&#x60;. Adding new users or groups to an existing restriction should be done via &#x60;PUT&#x60;.  Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be surprising.

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

let apiInstance = new Bitbucket.BranchrestrictionsApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
let body = new Bitbucket.Branchrestriction(); // Branchrestriction | The new rule
apiInstance.repositoriesWorkspaceRepoSlugBranchRestrictionsPost(workspace, repoSlug, body, (error, data, response) => {
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
 **body** | [**Branchrestriction**](Branchrestriction.md)| The new rule | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

