# Jira.ProjectPermissionSchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectKeyOrIdIssuesecuritylevelschemeGet**](ProjectPermissionSchemesApi.md#projectProjectKeyOrIdIssuesecuritylevelschemeGet) | **GET** /project/{projectKeyOrId}/issuesecuritylevelscheme | Get project issue security scheme
[**projectProjectKeyOrIdPermissionschemeGet**](ProjectPermissionSchemesApi.md#projectProjectKeyOrIdPermissionschemeGet) | **GET** /project/{projectKeyOrId}/permissionscheme | Get assigned permission scheme
[**projectProjectKeyOrIdPermissionschemePut**](ProjectPermissionSchemesApi.md#projectProjectKeyOrIdPermissionschemePut) | **PUT** /project/{projectKeyOrId}/permissionscheme | Assign permission scheme
[**projectProjectKeyOrIdSecuritylevelGet**](ProjectPermissionSchemesApi.md#projectProjectKeyOrIdSecuritylevelGet) | **GET** /project/{projectKeyOrId}/securitylevel | Get project issue security levels



## projectProjectKeyOrIdIssuesecuritylevelschemeGet

> SecurityScheme projectProjectKeyOrIdIssuesecuritylevelschemeGet(cloudid, projectKeyOrId)

Get project issue security scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let projectKeyOrId = "projectKeyOrId_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectKeyOrIdIssuesecuritylevelschemeGet(cloudid, projectKeyOrId, (error, data, response) => {
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
 **projectKeyOrId** | **String**| The project ID or project key (case sensitive). | 

### Return type

[**SecurityScheme**](SecurityScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectKeyOrIdPermissionschemeGet

> PermissionScheme projectProjectKeyOrIdPermissionschemeGet(cloudid, projectKeyOrId, opts)

Get assigned permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let projectKeyOrId = "projectKeyOrId_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.projectProjectKeyOrIdPermissionschemeGet(cloudid, projectKeyOrId, opts, (error, data, response) => {
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
 **projectKeyOrId** | **String**| The project ID or project key (case sensitive). | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectKeyOrIdPermissionschemePut

> PermissionScheme projectProjectKeyOrIdPermissionschemePut(cloudid, projectKeyOrId, body, opts)

Assign permission scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let projectKeyOrId = "projectKeyOrId_example"; // String | The project ID or project key (case sensitive).
let body = new Jira.IdBean(); // IdBean | 
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `permissions` Returns all permission grants for each permission scheme.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.projectProjectKeyOrIdPermissionschemePut(cloudid, projectKeyOrId, body, opts, (error, data, response) => {
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
 **projectKeyOrId** | **String**| The project ID or project key (case sensitive). | 
 **body** | [**IdBean**](IdBean.md)|  | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that permissions are included when you specify any value. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;permissions&#x60; Returns all permission grants for each permission scheme.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PermissionScheme**](PermissionScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectKeyOrIdSecuritylevelGet

> ProjectIssueSecurityLevels projectProjectKeyOrIdSecuritylevelGet(cloudid, projectKeyOrId)

Get project issue security levels

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectPermissionSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let projectKeyOrId = "projectKeyOrId_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectKeyOrIdSecuritylevelGet(cloudid, projectKeyOrId, (error, data, response) => {
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
 **projectKeyOrId** | **String**| The project ID or project key (case sensitive). | 

### Return type

[**ProjectIssueSecurityLevels**](ProjectIssueSecurityLevels.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

