# Jira.ProjectPropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdOrKeyPropertiesGet**](ProjectPropertiesApi.md#projectProjectIdOrKeyPropertiesGet) | **GET** /project/{projectIdOrKey}/properties | Get project property keys
[**projectProjectIdOrKeyPropertiesPropertyKeyDelete**](ProjectPropertiesApi.md#projectProjectIdOrKeyPropertiesPropertyKeyDelete) | **DELETE** /project/{projectIdOrKey}/properties/{propertyKey} | Delete project property
[**projectProjectIdOrKeyPropertiesPropertyKeyGet**](ProjectPropertiesApi.md#projectProjectIdOrKeyPropertiesPropertyKeyGet) | **GET** /project/{projectIdOrKey}/properties/{propertyKey} | Get project property
[**projectProjectIdOrKeyPropertiesPropertyKeyPut**](ProjectPropertiesApi.md#projectProjectIdOrKeyPropertiesPropertyKeyPut) | **PUT** /project/{projectIdOrKey}/properties/{propertyKey} | Set project property



## projectProjectIdOrKeyPropertiesGet

> PropertyKeys projectProjectIdOrKeyPropertiesGet(cloudid, projectIdOrKey)

Get project property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectIdOrKeyPropertiesGet(cloudid, projectIdOrKey, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyPropertiesPropertyKeyDelete

> projectProjectIdOrKeyPropertiesPropertyKeyDelete(cloudid, projectIdOrKey, propertyKey)

Delete project property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let propertyKey = "propertyKey_example"; // String | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyDelete(cloudid, projectIdOrKey, propertyKey, (error, data, response) => {
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
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **propertyKey** | **String**| The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdOrKeyPropertiesPropertyKeyGet

> EntityProperty projectProjectIdOrKeyPropertiesPropertyKeyGet(cloudid, projectIdOrKey, propertyKey)

Get project property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let propertyKey = "propertyKey_example"; // String | The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys.
apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyGet(cloudid, projectIdOrKey, propertyKey, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **propertyKey** | **String**| The project property key. Use [Get project property keys](#api-rest-api-3-project-projectIdOrKey-properties-get) to get a list of all project property keys. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyPropertiesPropertyKeyPut

> Object projectProjectIdOrKeyPropertiesPropertyKeyPut(cloudid, projectIdOrKey, propertyKey, body)

Set project property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let propertyKey = "propertyKey_example"; // String | The key of the project property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.projectProjectIdOrKeyPropertiesPropertyKeyPut(cloudid, projectIdOrKey, propertyKey, body, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **propertyKey** | **String**| The key of the project property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

