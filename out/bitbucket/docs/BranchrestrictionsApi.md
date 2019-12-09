# Bitbucket.BranchrestrictionsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugBranchRestrictionsGet**](BranchrestrictionsApi.md#repositoriesUsernameRepoSlugBranchRestrictionsGet) | **GET** /repositories/{username}/{repo_slug}/branch-restrictions | 
[**repositoriesUsernameRepoSlugBranchRestrictionsIdDelete**](BranchrestrictionsApi.md#repositoriesUsernameRepoSlugBranchRestrictionsIdDelete) | **DELETE** /repositories/{username}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesUsernameRepoSlugBranchRestrictionsIdGet**](BranchrestrictionsApi.md#repositoriesUsernameRepoSlugBranchRestrictionsIdGet) | **GET** /repositories/{username}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesUsernameRepoSlugBranchRestrictionsIdPut**](BranchrestrictionsApi.md#repositoriesUsernameRepoSlugBranchRestrictionsIdPut) | **PUT** /repositories/{username}/{repo_slug}/branch-restrictions/{id} | 
[**repositoriesUsernameRepoSlugBranchRestrictionsPost**](BranchrestrictionsApi.md#repositoriesUsernameRepoSlugBranchRestrictionsPost) | **POST** /repositories/{username}/{repo_slug}/branch-restrictions | 



## repositoriesUsernameRepoSlugBranchRestrictionsGet

> PaginatedBranchrestrictions repositoriesUsernameRepoSlugBranchRestrictionsGet(username, repoSlug)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsGet(username, repoSlug, (error, data, response) => {
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

[**PaginatedBranchrestrictions**](PaginatedBranchrestrictions.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugBranchRestrictionsIdDelete

> repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(username, repoSlug, id)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let id = "id_example"; // String | The restriction rule's id
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(username, repoSlug, id, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugBranchRestrictionsIdGet

> Branchrestriction repositoriesUsernameRepoSlugBranchRestrictionsIdGet(username, repoSlug, id)



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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let id = "id_example"; // String | The restriction rule's id
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdGet(username, repoSlug, id, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugBranchRestrictionsIdPut

> Branchrestriction repositoriesUsernameRepoSlugBranchRestrictionsIdPut(username, repoSlug, id, body)



Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [&#x60;POST&#x60;](../../branch-restrictions#post) for details.

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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let id = "id_example"; // String | The restriction rule's id
let body = new Bitbucket.Branchrestriction(); // Branchrestriction | The new version of the existing rule
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdPut(username, repoSlug, id, body, (error, data, response) => {
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
 **id** | **String**| The restriction rule&#39;s id | 
 **body** | [**Branchrestriction**](Branchrestriction.md)| The new version of the existing rule | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## repositoriesUsernameRepoSlugBranchRestrictionsPost

> Branchrestriction repositoriesUsernameRepoSlugBranchRestrictionsPost(username, repoSlug, body)



Creates a new branch restriction rule for a repository.  &#x60;kind&#x60; describes what will be restricted. Allowed values are: &#x60;push&#x60;, &#x60;force&#x60;, &#x60;delete&#x60;, and &#x60;restrict_merges&#x60;.  Different kinds of branch restrictions have different requirements:  * &#x60;push&#x60; and &#x60;restrict_merges&#x60; require &#x60;users&#x60; and &#x60;groups&#x60; to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * &#x60;force&#x60; can not be specified in a Mercurial repository.  &#x60;pattern&#x60; is used to determine which branches will be restricted.  A &#x60;&#39;*&#39;&#x60; in &#x60;pattern&#x60; will expand to match zero or more characters, and every other character matches itself. For example, &#x60;&#39;foo*&#39;&#x60; will match &#x60;&#39;foo&#39;&#x60; and &#x60;&#39;foobar&#39;&#x60;, but not &#x60;&#39;barfoo&#39;&#x60;. &#x60;&#39;*&#39;&#x60; will match all branches.  &#x60;users&#x60; and &#x60;groups&#x60; are lists of user names and group names.  &#x60;kind&#x60; and &#x60;pattern&#x60; must be unique within a repository; adding new users or groups to an existing restriction should be done via &#x60;PUT&#x60;.  Note that branch restrictions with overlapping patterns are allowed, but the resulting behavior may be surprising.

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
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let body = new Bitbucket.Branchrestriction(); // Branchrestriction | The new rule
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsPost(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**Branchrestriction**](Branchrestriction.md)| The new rule | 

### Return type

[**Branchrestriction**](Branchrestriction.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

