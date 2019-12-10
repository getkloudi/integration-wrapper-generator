# Gitlab.GitlabCiYmlsApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV3GitlabCiYmls**](GitlabCiYmlsApi.md#getV3GitlabCiYmls) | **GET** /v3/gitlab_ci_ymls | Get the list of the available template
[**getV3GitlabCiYmlsName**](GitlabCiYmlsApi.md#getV3GitlabCiYmlsName) | **GET** /v3/gitlab_ci_ymls/{name} | Get the text for a specific template present in local filesystem



## getV3GitlabCiYmls

> TemplatesList getV3GitlabCiYmls()

Get the list of the available template

This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

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

let apiInstance = new Gitlab.GitlabCiYmlsApi();
apiInstance.getV3GitlabCiYmls((error, data, response) => {
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


## getV3GitlabCiYmlsName

> Template getV3GitlabCiYmlsName(name)

Get the text for a specific template present in local filesystem

This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.

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

let apiInstance = new Gitlab.GitlabCiYmlsApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3GitlabCiYmlsName(name, (error, data, response) => {
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

