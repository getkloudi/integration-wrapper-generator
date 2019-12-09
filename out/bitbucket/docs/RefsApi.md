# Bitbucket.RefsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugRefsBranchesGet**](RefsApi.md#repositoriesUsernameRepoSlugRefsBranchesGet) | **GET** /repositories/{username}/{repo_slug}/refs/branches | 
[**repositoriesUsernameRepoSlugRefsBranchesNameGet**](RefsApi.md#repositoriesUsernameRepoSlugRefsBranchesNameGet) | **GET** /repositories/{username}/{repo_slug}/refs/branches/{name} | 
[**repositoriesUsernameRepoSlugRefsGet**](RefsApi.md#repositoriesUsernameRepoSlugRefsGet) | **GET** /repositories/{username}/{repo_slug}/refs | 
[**repositoriesUsernameRepoSlugRefsTagsGet**](RefsApi.md#repositoriesUsernameRepoSlugRefsTagsGet) | **GET** /repositories/{username}/{repo_slug}/refs/tags | 
[**repositoriesUsernameRepoSlugRefsTagsNameGet**](RefsApi.md#repositoriesUsernameRepoSlugRefsTagsNameGet) | **GET** /repositories/{username}/{repo_slug}/refs/tags/{name} | 
[**repositoriesUsernameRepoSlugRefsTagsPost**](RefsApi.md#repositoriesUsernameRepoSlugRefsTagsPost) | **POST** /repositories/{username}/{repo_slug}/refs/tags | 



## repositoriesUsernameRepoSlugRefsBranchesGet

> Error repositoriesUsernameRepoSlugRefsBranchesGet(username, repoSlug)



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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugRefsBranchesGet(username, repoSlug, (error, data, response) => {
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

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugRefsBranchesNameGet

> Error repositoriesUsernameRepoSlugRefsBranchesNameGet(username, name, repoSlug)



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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String | 
let name = "name_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugRefsBranchesNameGet(username, name, repoSlug, (error, data, response) => {
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
 **name** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugRefsGet

> Error repositoriesUsernameRepoSlugRefsGet(username, repoSlug)



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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugRefsGet(username, repoSlug, (error, data, response) => {
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

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugRefsTagsGet

> Error repositoriesUsernameRepoSlugRefsTagsGet(username, repoSlug)



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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
let repoSlug = "repoSlug_example"; // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
apiInstance.repositoriesUsernameRepoSlugRefsTagsGet(username, repoSlug, (error, data, response) => {
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
 **username** | **String**|  The username for the owner of the repository. This can either be the &#x60;username&#x60; of the owner or the &#x60;UUID&#x60; of the owner (surrounded by curly-braces (&#x60;{}&#x60;)). Owners can be users or teams.  | 
 **repoSlug** | **String**|  The repo slug for the repository.  This can either be the &#x60;repo_slug&#x60; of the repository or the &#x60;UUID&#x60; of the repository (surrounded by curly-braces (&#x60;{}&#x60;))  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugRefsTagsNameGet

> Error repositoriesUsernameRepoSlugRefsTagsNameGet(username, name, repoSlug)



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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String | 
let name = "name_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
apiInstance.repositoriesUsernameRepoSlugRefsTagsNameGet(username, name, repoSlug, (error, data, response) => {
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
 **name** | **String**|  | 
 **repoSlug** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesUsernameRepoSlugRefsTagsPost

> Tag repositoriesUsernameRepoSlugRefsTagsPost(username, repoSlug, body)



Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  &#x60;&#x60;&#x60; {     \&quot;name\&quot; : \&quot;new tag name\&quot;,     \&quot;target\&quot; : {         \&quot;hash\&quot; : \&quot;target commit hash\&quot;,     } } &#x60;&#x60;&#x60;  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.

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

let apiInstance = new Bitbucket.RefsApi();
let username = "username_example"; // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
let repoSlug = "repoSlug_example"; // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
let body = new Bitbucket.Tag(); // Tag | 
apiInstance.repositoriesUsernameRepoSlugRefsTagsPost(username, repoSlug, body, (error, data, response) => {
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
 **username** | **String**|  The username for the owner of the repository. This can either be the &#x60;username&#x60; of the owner or the &#x60;UUID&#x60; of the owner (surrounded by curly-braces (&#x60;{}&#x60;)). Owners can be users or teams.  | 
 **repoSlug** | **String**|  The repo slug for the repository.  This can either be the &#x60;repo_slug&#x60; of the repository or the &#x60;UUID&#x60; of the repository (surrounded by curly-braces (&#x60;{}&#x60;))  | 
 **body** | [**Tag**](Tag.md)|  | 

### Return type

[**Tag**](Tag.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

