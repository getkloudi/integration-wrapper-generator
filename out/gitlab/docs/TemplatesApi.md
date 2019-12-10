# Gitlab.TemplatesApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV3TemplatesDockerfiles**](TemplatesApi.md#getV3TemplatesDockerfiles) | **GET** /v3/templates/dockerfiles | Get the list of the available template
[**getV3TemplatesDockerfilesName**](TemplatesApi.md#getV3TemplatesDockerfilesName) | **GET** /v3/templates/dockerfiles/{name} | Get the text for a specific template present in local filesystem
[**getV3TemplatesGitignores**](TemplatesApi.md#getV3TemplatesGitignores) | **GET** /v3/templates/gitignores | Get the list of the available template
[**getV3TemplatesGitignoresName**](TemplatesApi.md#getV3TemplatesGitignoresName) | **GET** /v3/templates/gitignores/{name} | Get the text for a specific template present in local filesystem
[**getV3TemplatesGitlabCiYmls**](TemplatesApi.md#getV3TemplatesGitlabCiYmls) | **GET** /v3/templates/gitlab_ci_ymls | Get the list of the available template
[**getV3TemplatesGitlabCiYmlsName**](TemplatesApi.md#getV3TemplatesGitlabCiYmlsName) | **GET** /v3/templates/gitlab_ci_ymls/{name} | Get the text for a specific template present in local filesystem
[**getV3TemplatesLicenses**](TemplatesApi.md#getV3TemplatesLicenses) | **GET** /v3/templates/licenses | Get the list of the available license template
[**getV3TemplatesLicensesName**](TemplatesApi.md#getV3TemplatesLicensesName) | **GET** /v3/templates/licenses/{name} | Get the text for a specific license



## getV3TemplatesDockerfiles

> TemplatesList getV3TemplatesDockerfiles()

Get the list of the available template

This feature was introduced in GitLab 8.15.

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

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesDockerfiles((error, data, response) => {
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


## getV3TemplatesDockerfilesName

> Template getV3TemplatesDockerfilesName(name)

Get the text for a specific template present in local filesystem

This feature was introduced in GitLab 8.15.

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

let apiInstance = new Gitlab.TemplatesApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3TemplatesDockerfilesName(name, (error, data, response) => {
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


## getV3TemplatesGitignores

> TemplatesList getV3TemplatesGitignores()

Get the list of the available template

This feature was introduced in GitLab 8.8.

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

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitignores((error, data, response) => {
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


## getV3TemplatesGitignoresName

> Template getV3TemplatesGitignoresName(name)

Get the text for a specific template present in local filesystem

This feature was introduced in GitLab 8.8.

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

let apiInstance = new Gitlab.TemplatesApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3TemplatesGitignoresName(name, (error, data, response) => {
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


## getV3TemplatesGitlabCiYmls

> TemplatesList getV3TemplatesGitlabCiYmls()

Get the list of the available template

This feature was introduced in GitLab 8.9.

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

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitlabCiYmls((error, data, response) => {
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


## getV3TemplatesGitlabCiYmlsName

> Template getV3TemplatesGitlabCiYmlsName(name)

Get the text for a specific template present in local filesystem

This feature was introduced in GitLab 8.9.

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

let apiInstance = new Gitlab.TemplatesApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3TemplatesGitlabCiYmlsName(name, (error, data, response) => {
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


## getV3TemplatesLicenses

> RepoLicense getV3TemplatesLicenses(opts)

Get the list of the available license template

This feature was introduced in GitLab 8.7.

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

let apiInstance = new Gitlab.TemplatesApi();
let opts = {
  'popular': true // Boolean | If passed, returns only popular licenses
};
apiInstance.getV3TemplatesLicenses(opts, (error, data, response) => {
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
 **popular** | **Boolean**| If passed, returns only popular licenses | [optional] 

### Return type

[**RepoLicense**](RepoLicense.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3TemplatesLicensesName

> RepoLicense getV3TemplatesLicensesName(name)

Get the text for a specific license

This feature was introduced in GitLab 8.7.

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

let apiInstance = new Gitlab.TemplatesApi();
let name = "name_example"; // String | The name of the template
apiInstance.getV3TemplatesLicensesName(name, (error, data, response) => {
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

[**RepoLicense**](RepoLicense.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

