# Jira.ProjectTypesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectTypeAccessibleGet**](ProjectTypesApi.md#projectTypeAccessibleGet) | **GET** /project/type/accessible | Get licensed project types
[**projectTypeGet**](ProjectTypesApi.md#projectTypeGet) | **GET** /project/type | Get all project types
[**projectTypeProjectTypeKeyAccessibleGet**](ProjectTypesApi.md#projectTypeProjectTypeKeyAccessibleGet) | **GET** /project/type/{projectTypeKey}/accessible | Get accessible project type by key
[**projectTypeProjectTypeKeyGet**](ProjectTypesApi.md#projectTypeProjectTypeKeyGet) | **GET** /project/type/{projectTypeKey} | Get project type by key



## projectTypeAccessibleGet

> [ProjectType] projectTypeAccessibleGet(cloudid)

Get licensed project types

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectTypesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.projectTypeAccessibleGet(cloudid, (error, data, response) => {
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

### Return type

[**[ProjectType]**](ProjectType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectTypeGet

> [ProjectType] projectTypeGet(cloudid)

Get all project types

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectTypesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.projectTypeGet(cloudid, (error, data, response) => {
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

### Return type

[**[ProjectType]**](ProjectType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectTypeProjectTypeKeyAccessibleGet

> ProjectType projectTypeProjectTypeKeyAccessibleGet(cloudid, projectTypeKey)

Get accessible project type by key

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectTypesApi();
let cloudid = null; // Object | Cloudi of the project
let projectTypeKey = "projectTypeKey_example"; // String | The key of the project type.
apiInstance.projectTypeProjectTypeKeyAccessibleGet(cloudid, projectTypeKey, (error, data, response) => {
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
 **projectTypeKey** | **String**| The key of the project type. | 

### Return type

[**ProjectType**](ProjectType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectTypeProjectTypeKeyGet

> ProjectType projectTypeProjectTypeKeyGet(cloudid, projectTypeKey)

Get project type by key

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectTypesApi();
let cloudid = null; // Object | Cloudi of the project
let projectTypeKey = "projectTypeKey_example"; // String | The key of the project type.
apiInstance.projectTypeProjectTypeKeyGet(cloudid, projectTypeKey, (error, data, response) => {
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
 **projectTypeKey** | **String**| The key of the project type. | 

### Return type

[**ProjectType**](ProjectType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

