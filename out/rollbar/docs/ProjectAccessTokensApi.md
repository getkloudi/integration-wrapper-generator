# Rollbar.ProjectAccessTokensApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectIdAccessTokensGet**](ProjectAccessTokensApi.md#projectIdAccessTokensGet) | **GET** /project/{id}/access_tokens | 
[**projectIdAccessTokensPost**](ProjectAccessTokensApi.md#projectIdAccessTokensPost) | **POST** /project/{id}/access_tokens | 
[**projectProjectIdAccessTokenProjectAccessTokenPatch**](ProjectAccessTokensApi.md#projectProjectIdAccessTokenProjectAccessTokenPatch) | **PATCH** /project/{project_id}/access_token/{project_access_token} | 



## projectIdAccessTokensGet

> projectIdAccessTokensGet()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.ProjectAccessTokensApi();
apiInstance.projectIdAccessTokensGet((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectIdAccessTokensPost

> projectIdAccessTokensPost(opts)



Create a project access token

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.ProjectAccessTokensApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null() //  | 
};
apiInstance.projectIdAccessTokensPost(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdAccessTokenProjectAccessTokenPatch

> projectProjectIdAccessTokenProjectAccessTokenPatch()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.ProjectAccessTokensApi();
apiInstance.projectProjectIdAccessTokenProjectAccessTokenPatch((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

