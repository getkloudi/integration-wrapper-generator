# Bitbucket.SourceApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesUsernameRepoSlugSrcNodePathGet**](SourceApi.md#repositoriesUsernameRepoSlugSrcNodePathGet) | **GET** /repositories/{username}/{repo_slug}/src/{node}/{path} | 



## repositoriesUsernameRepoSlugSrcNodePathGet

> repositoriesUsernameRepoSlugSrcNodePathGet(username, node, path, repoSlug, opts)



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

let apiInstance = new Bitbucket.SourceApi();
let username = "username_example"; // String | 
let node = "node_example"; // String | 
let path = "path_example"; // String | 
let repoSlug = "repoSlug_example"; // String | 
let opts = {
  'format': "format_example" // String | Instead of returning the file's contents, return the (json) meta data for it.
};
apiInstance.repositoriesUsernameRepoSlugSrcNodePathGet(username, node, path, repoSlug, opts, (error, data, response) => {
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
 **node** | **String**|  | 
 **path** | **String**|  | 
 **repoSlug** | **String**|  | 
 **format** | **String**| Instead of returning the file&#39;s contents, return the (json) meta data for it. | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

