# Jira.ApplicationRolesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationroleGet**](ApplicationRolesApi.md#applicationroleGet) | **GET** /applicationrole | Get all application roles
[**applicationroleKeyGet**](ApplicationRolesApi.md#applicationroleKeyGet) | **GET** /applicationrole/{key} | Get application role



## applicationroleGet

> [ApplicationRole] applicationroleGet(cloudid)

Get all application roles

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ApplicationRolesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.applicationroleGet(cloudid, (error, data, response) => {
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

[**[ApplicationRole]**](ApplicationRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationroleKeyGet

> ApplicationRole applicationroleKeyGet(cloudid, key)

Get application role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ApplicationRolesApi();
let cloudid = null; // Object | Cloudi of the project
let key = "key_example"; // String | The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.
apiInstance.applicationroleKeyGet(cloudid, key, (error, data, response) => {
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
 **key** | **String**| The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role. | 

### Return type

[**ApplicationRole**](ApplicationRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

