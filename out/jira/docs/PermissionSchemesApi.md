# Jira.PermissionSchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**permissionschemeGet**](PermissionSchemesApi.md#permissionschemeGet) | **GET** /permissionscheme | Get all permission schemes
[**permissionschemePost**](PermissionSchemesApi.md#permissionschemePost) | **POST** /permissionscheme | Create permission scheme
[**permissionschemeSchemeIdDelete**](PermissionSchemesApi.md#permissionschemeSchemeIdDelete) | **DELETE** /permissionscheme/{schemeId} | Delete permission scheme
[**permissionschemeSchemeIdGet**](PermissionSchemesApi.md#permissionschemeSchemeIdGet) | **GET** /permissionscheme/{schemeId} | Get permission scheme
[**permissionschemeSchemeIdPermissionGet**](PermissionSchemesApi.md#permissionschemeSchemeIdPermissionGet) | **GET** /permissionscheme/{schemeId}/permission | Get permission scheme grants
[**permissionschemeSchemeIdPermissionPermissionIdDelete**](PermissionSchemesApi.md#permissionschemeSchemeIdPermissionPermissionIdDelete) | **DELETE** /permissionscheme/{schemeId}/permission/{permissionId} | Delete permission scheme grant
[**permissionschemeSchemeIdPermissionPermissionIdGet**](PermissionSchemesApi.md#permissionschemeSchemeIdPermissionPermissionIdGet) | **GET** /permissionscheme/{schemeId}/permission/{permissionId} | Get permission scheme grant
[**permissionschemeSchemeIdPermissionPost**](PermissionSchemesApi.md#permissionschemeSchemeIdPermissionPost) | **POST** /permissionscheme/{schemeId}/permission | Create permission grant
[**permissionschemeSchemeIdPut**](PermissionSchemesApi.md#permissionschemeSchemeIdPut) | **PUT** /permissionscheme/{schemeId} | Update permission scheme



## permissionschemeGet

> PermissionSchemes permissionschemeGet(cloudid, opts)

Get all permission schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.permissionschemeGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionSchemes**](PermissionSchemes.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionschemePost

> PermissionScheme permissionschemePost(cloudid, body, opts)

Create permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.PermissionScheme(); // PermissionScheme | The permission scheme to create.
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.permissionschemePost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**PermissionScheme**](PermissionScheme.md)| The permission scheme to create. | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionschemeSchemeIdDelete

> permissionschemeSchemeIdDelete(cloudid, schemeId)

Delete permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme being deleted.
apiInstance.permissionschemeSchemeIdDelete(cloudid, schemeId, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme being deleted. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## permissionschemeSchemeIdGet

> PermissionScheme permissionschemeSchemeIdGet(cloudid, schemeId, opts)

Get permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme to return.
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.permissionschemeSchemeIdGet(cloudid, schemeId, opts, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme to return. | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionschemeSchemeIdPermissionGet

> PermissionGrants permissionschemeSchemeIdPermissionGet(cloudid, schemeId, opts)

Get permission scheme grants

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme.
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
};
apiInstance.permissionschemeSchemeIdPermissionGet(cloudid, schemeId, opts, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme. | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;all&#x60; Returns all expandable information. | [optional] 

### Return type

[**PermissionGrants**](PermissionGrants.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionschemeSchemeIdPermissionPermissionIdDelete

> permissionschemeSchemeIdPermissionPermissionIdDelete(cloudid, schemeId, permissionId)

Delete permission scheme grant

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme to delete the permission grant from.
let permissionId = 789; // Number | The ID of the permission grant to delete.
apiInstance.permissionschemeSchemeIdPermissionPermissionIdDelete(cloudid, schemeId, permissionId, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme to delete the permission grant from. | 
 **permissionId** | **Number**| The ID of the permission grant to delete. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## permissionschemeSchemeIdPermissionPermissionIdGet

> PermissionGrant permissionschemeSchemeIdPermissionPermissionIdGet(cloudid, schemeId, permissionId, opts)

Get permission scheme grant

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme.
let permissionId = 789; // Number | The ID of the permission grant.
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.permissionschemeSchemeIdPermissionPermissionIdGet(cloudid, schemeId, permissionId, opts, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme. | 
 **permissionId** | **Number**| The ID of the permission grant. | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionGrant**](PermissionGrant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## permissionschemeSchemeIdPermissionPost

> PermissionGrant permissionschemeSchemeIdPermissionPost(cloudid, schemeId, body, opts)

Create permission grant

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme in which to create a new permission grant.
let body = new Jira.PermissionGrant(); // PermissionGrant | The permission grant to create.
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `permissions` Returns all permission grants for each permission scheme.  *  `user` Returns information about the user who is granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `field` Returns information about the custom field granted the permission.  *  `all` Returns all expandable information.
};
apiInstance.permissionschemeSchemeIdPermissionPost(cloudid, schemeId, body, opts, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme in which to create a new permission grant. | 
 **body** | [**PermissionGrant**](PermissionGrant.md)| The permission grant to create. | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;user&#x60; Returns information about the user who is granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;all&#x60; Returns all expandable information. | [optional] 

### Return type

[**PermissionGrant**](PermissionGrant.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## permissionschemeSchemeIdPut

> PermissionScheme permissionschemeSchemeIdPut(cloudid, schemeId, body, opts)

Update permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.PermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let schemeId = 789; // Number | The ID of the permission scheme to update.
let body = new Jira.PermissionScheme(); // PermissionScheme | 
let opts = {
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.permissionschemeSchemeIdPut(cloudid, schemeId, body, opts, (error, data, response) => {
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
 **schemeId** | **Number**| The ID of the permission scheme to update. | 
 **body** | [**PermissionScheme**](PermissionScheme.md)|  | 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are always included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

