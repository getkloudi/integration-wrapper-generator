# Gitlab.DockerfilesApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV3Dockerfiles**](DockerfilesApi.md#getV3Dockerfiles) | **GET** /v3/dockerfiles | Get the list of the available template
[**getV3DockerfilesName**](DockerfilesApi.md#getV3DockerfilesName) | **GET** /v3/dockerfiles/{name} | Get the text for a specific template present in local filesystem



## getV3Dockerfiles

> TemplatesList getV3Dockerfiles()

Get the list of the available template

This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

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

let apiInstance = new Gitlab.DockerfilesApi();
apiInstance.getV3Dockerfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**TemplatesList**](TemplatesList.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3DockerfilesName

> Template getV3DockerfilesName(name)

Get the text for a specific template present in local filesystem

This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.

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

let apiInstance = new Gitlab.DockerfilesApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3DockerfilesName(name, (error, data, response) => {
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
 **name** | **String**| The name of the template | 

### Return type

[**Template**](Template.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

