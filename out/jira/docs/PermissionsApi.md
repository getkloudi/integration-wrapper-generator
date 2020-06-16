# Jira.PermissionsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mypermissionsGet**](PermissionsApi.md#mypermissionsGet) | **GET** /mypermissions | Get my permissions
[**permissionsCheckPost**](PermissionsApi.md#permissionsCheckPost) | **POST** /permissions/check | Get bulk permissions
[**permissionsGet**](PermissionsApi.md#permissionsGet) | **GET** /permissions | Get all permissions
[**permissionsProjectPost**](PermissionsApi.md#permissionsProjectPost) | **POST** /permissions/project | Get permitted projects



## mypermissionsGet

> Permissions mypermissionsGet(cloudid, opts)

Get my permissions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'projectKey': "projectKey_example", // String | The key of project. Ignored if `projectId` is provided.
  'projectId': "projectId_example", // String | The ID of project.
  'issueKey': "issueKey_example", // String | The key of the issue. Ignored if `issueId` is provided.
  'issueId': "issueId_example", // String | The ID of the issue.
  'permissions': "permissions_example", // String | A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).
  'projectUuid': "projectUuid_example", // String | 
  'projectConfigurationUuid': "projectConfigurationUuid_example" // String | 
};
apiInstance.mypermissionsGet(cloudid, opts, (error, data, response) => {
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
 **projectKey** | **String**| The key of project. Ignored if &#x60;projectId&#x60; is provided. | [optional] 
 **projectId** | **String**| The ID of project. | [optional] 
 **issueKey** | **String**| The key of the issue. Ignored if &#x60;issueId&#x60; is provided. | [optional] 
 **issueId** | **String**| The ID of the issue. | [optional] 
 **permissions** | **String**| A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get). | [optional] 
 **projectUuid** | **String**|  | [optional] 
 **projectConfigurationUuid** | **String**|  | [optional] 

### Return type

[**Permissions**](Permissions.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionsCheckPost

> BulkPermissionGrants permissionsCheckPost(cloudid, body)

Get bulk permissions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.BulkPermissionsRequestBean(); // BulkPermissionsRequestBean | Details of the permissions to check.
apiInstance.permissionsCheckPost(cloudid, body, (error, data, response) => {
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
 **body** | [**BulkPermissionsRequestBean**](BulkPermissionsRequestBean.md)| Details of the permissions to check. | 

### Return type

[**BulkPermissionGrants**](BulkPermissionGrants.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionsGet

> Permissions permissionsGet(cloudid)

Get all permissions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.permissionsGet(cloudid, (error, data, response) => {
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

[**Permissions**](Permissions.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionsProjectPost

> PermittedProjects permissionsProjectPost(cloudid, body)

Get permitted projects

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.PermissionsKeysBean(); // PermissionsKeysBean | 
apiInstance.permissionsProjectPost(cloudid, body, (error, data, response) => {
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
 **body** | [**PermissionsKeysBean**](PermissionsKeysBean.md)|  | 

### Return type

[**PermittedProjects**](PermittedProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

