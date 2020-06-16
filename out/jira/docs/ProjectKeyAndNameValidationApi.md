# Jira.ProjectKeyAndNameValidationApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectvalidateKeyGet**](ProjectKeyAndNameValidationApi.md#projectvalidateKeyGet) | **GET** /projectvalidate/key | Validate project key
[**projectvalidateValidProjectKeyGet**](ProjectKeyAndNameValidationApi.md#projectvalidateValidProjectKeyGet) | **GET** /projectvalidate/validProjectKey | Get valid project key
[**projectvalidateValidProjectNameGet**](ProjectKeyAndNameValidationApi.md#projectvalidateValidProjectNameGet) | **GET** /projectvalidate/validProjectName | Get valid project name



## projectvalidateKeyGet

> ErrorCollection projectvalidateKeyGet(cloudid, opts)

Validate project key

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectKeyAndNameValidationApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'key': "key_example" // String | The project key.
};
apiInstance.projectvalidateKeyGet(cloudid, opts, (error, data, response) => {
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
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **key** | **String**| The project key. | [optional] 

### Return type

[**ErrorCollection**](ErrorCollection.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectvalidateValidProjectKeyGet

> String projectvalidateValidProjectKeyGet(cloudid, opts)

Get valid project key

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectKeyAndNameValidationApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'key': "key_example" // String | The project key.
};
apiInstance.projectvalidateValidProjectKeyGet(cloudid, opts, (error, data, response) => {
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
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **key** | **String**| The project key. | [optional] 

### Return type

**String**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectvalidateValidProjectNameGet

> String projectvalidateValidProjectNameGet(cloudid, name)

Get valid project name

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectKeyAndNameValidationApi();
let cloudid = null; // Object | Cloudi of the project
let name = "name_example"; // String | The project name.
apiInstance.projectvalidateValidProjectNameGet(cloudid, name, (error, data, response) => {
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
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **name** | **String**| The project name. | 

### Return type

**String**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

