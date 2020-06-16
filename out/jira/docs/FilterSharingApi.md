# Jira.FilterSharingApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterDefaultShareScopeGet**](FilterSharingApi.md#filterDefaultShareScopeGet) | **GET** /filter/defaultShareScope | Get default share scope
[**filterDefaultShareScopePut**](FilterSharingApi.md#filterDefaultShareScopePut) | **PUT** /filter/defaultShareScope | Set default share scope
[**filterIdPermissionGet**](FilterSharingApi.md#filterIdPermissionGet) | **GET** /filter/{id}/permission | Get share permissions
[**filterIdPermissionPermissionIdDelete**](FilterSharingApi.md#filterIdPermissionPermissionIdDelete) | **DELETE** /filter/{id}/permission/{permissionId} | Delete share permission
[**filterIdPermissionPermissionIdGet**](FilterSharingApi.md#filterIdPermissionPermissionIdGet) | **GET** /filter/{id}/permission/{permissionId} | Get share permission
[**filterIdPermissionPost**](FilterSharingApi.md#filterIdPermissionPost) | **POST** /filter/{id}/permission | Add share permission



## filterDefaultShareScopeGet

> DefaultShareScope filterDefaultShareScopeGet(cloudid)

Get default share scope

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.filterDefaultShareScopeGet(cloudid, (error, data, response) => {
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

[**DefaultShareScope**](DefaultShareScope.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterDefaultShareScopePut

> DefaultShareScope filterDefaultShareScopePut(cloudid, body)

Set default share scope

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.DefaultShareScope(); // DefaultShareScope | 
apiInstance.filterDefaultShareScopePut(cloudid, body, (error, data, response) => {
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
 **body** | [**DefaultShareScope**](DefaultShareScope.md)|  | 

### Return type

[**DefaultShareScope**](DefaultShareScope.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## filterIdPermissionGet

> [SharePermission] filterIdPermissionGet(cloudid, id)

Get share permissions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
apiInstance.filterIdPermissionGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 

### Return type

[**[SharePermission]**](SharePermission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdPermissionPermissionIdDelete

> filterIdPermissionPermissionIdDelete(cloudid, id, permissionId)

Delete share permission

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let permissionId = 789; // Number | The ID of the share permission.
apiInstance.filterIdPermissionPermissionIdDelete(cloudid, id, permissionId, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **permissionId** | **Number**| The ID of the share permission. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## filterIdPermissionPermissionIdGet

> SharePermission filterIdPermissionPermissionIdGet(cloudid, id, permissionId)

Get share permission

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let permissionId = 789; // Number | The ID of the share permission.
apiInstance.filterIdPermissionPermissionIdGet(cloudid, id, permissionId, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **permissionId** | **Number**| The ID of the share permission. | 

### Return type

[**SharePermission**](SharePermission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdPermissionPost

> [SharePermission] filterIdPermissionPost(cloudid, id, body)

Add share permission

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FilterSharingApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let body = new Jira.SharePermissionInputBean(); // SharePermissionInputBean | 
apiInstance.filterIdPermissionPost(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **body** | [**SharePermissionInputBean**](SharePermissionInputBean.md)|  | 

### Return type

[**[SharePermission]**](SharePermission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

