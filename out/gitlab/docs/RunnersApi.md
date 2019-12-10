# Gitlab.RunnersApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteV3RunnersId**](RunnersApi.md#deleteV3RunnersId) | **DELETE** /v3/runners/{id} | Remove a runner
[**getV3Runners**](RunnersApi.md#getV3Runners) | **GET** /v3/runners | Get runners available for user
[**getV3RunnersAll**](RunnersApi.md#getV3RunnersAll) | **GET** /v3/runners/all | Get all runners - shared and specific
[**getV3RunnersId**](RunnersApi.md#getV3RunnersId) | **GET** /v3/runners/{id} | Get runner&#39;s details
[**putV3RunnersId**](RunnersApi.md#putV3RunnersId) | **PUT** /v3/runners/{id} | Update runner&#39;s details



## deleteV3RunnersId

> Runner deleteV3RunnersId(id)

Remove a runner

Remove a runner

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi();
let id = 56; // Number | The ID of the runner
apiInstance.deleteV3RunnersId(id, (error, data, response) => {
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
 **id** | **Number**| The ID of the runner | 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3Runners

> Runner getV3Runners(opts)

Get runners available for user

Get runners available for user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi();
let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3Runners(opts, (error, data, response) => {
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
 **scope** | **String**| The scope of specific runners to show | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3RunnersAll

> Runner getV3RunnersAll(opts)

Get all runners - shared and specific

Get all runners - shared and specific

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi();
let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3RunnersAll(opts, (error, data, response) => {
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
 **scope** | **String**| The scope of specific runners to show | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3RunnersId

> RunnerDetails getV3RunnersId(id)

Get runner&#39;s details

Get runner&#39;s details

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi();
let id = 56; // Number | The ID of the runner
apiInstance.getV3RunnersId(id, (error, data, response) => {
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
 **id** | **Number**| The ID of the runner | 

### Return type

[**RunnerDetails**](RunnerDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putV3RunnersId

> RunnerDetails putV3RunnersId(id, opts)

Update runner&#39;s details

Update runner&#39;s details

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi();
let id = 56; // Number | The ID of the runner
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3RunnersId(id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the runner | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**RunnerDetails**](RunnerDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

