# Jira.ProjectRolesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdOrKeyRoleGet**](ProjectRolesApi.md#projectProjectIdOrKeyRoleGet) | **GET** /project/{projectIdOrKey}/role | Get project roles for project
[**projectProjectIdOrKeyRoleIdGet**](ProjectRolesApi.md#projectProjectIdOrKeyRoleIdGet) | **GET** /project/{projectIdOrKey}/role/{id} | Get project role for project
[**projectProjectIdOrKeyRoledetailsGet**](ProjectRolesApi.md#projectProjectIdOrKeyRoledetailsGet) | **GET** /project/{projectIdOrKey}/roledetails | Get project role details
[**roleGet**](ProjectRolesApi.md#roleGet) | **GET** /role | Get all project roles
[**roleIdDelete**](ProjectRolesApi.md#roleIdDelete) | **DELETE** /role/{id} | Delete project role
[**roleIdGet**](ProjectRolesApi.md#roleIdGet) | **GET** /role/{id} | Get project role by ID
[**roleIdPost**](ProjectRolesApi.md#roleIdPost) | **POST** /role/{id} | Partial update project role
[**roleIdPut**](ProjectRolesApi.md#roleIdPut) | **PUT** /role/{id} | Fully update project role
[**rolePost**](ProjectRolesApi.md#rolePost) | **POST** /role | Create project role



## projectProjectIdOrKeyRoleGet

> {String: String} projectProjectIdOrKeyRoleGet(cloudid, projectIdOrKey)

Get project roles for project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectIdOrKeyRoleGet(cloudid, projectIdOrKey, (error, data, response) => {
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

**{String: String}**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyRoleIdGet

> ProjectRole projectProjectIdOrKeyRoleIdGet(cloudid, projectIdOrKey, id)

Get project role for project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
apiInstance.projectProjectIdOrKeyRoleIdGet(cloudid, projectIdOrKey, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyRoledetailsGet

> [ProjectRole] projectProjectIdOrKeyRoledetailsGet(cloudid, projectIdOrKey, opts)

Get project role details

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'currentMember': false, // Boolean | Whether the roles should be filtered to include only those the user is assigned to.
  'excludeConnectAddons': false // Boolean | 
};
apiInstance.projectProjectIdOrKeyRoledetailsGet(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **currentMember** | **Boolean**| Whether the roles should be filtered to include only those the user is assigned to. | [optional] [default to false]
 **excludeConnectAddons** | **Boolean**|  | [optional] [default to false]

### Return type

[**[ProjectRole]**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleGet

> [ProjectRole] roleGet(cloudid)

Get all project roles

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.roleGet(cloudid, (error, data, response) => {
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

[**[ProjectRole]**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleIdDelete

> roleIdDelete(cloudid, id, opts)

Delete project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let opts = {
  'swap': 789 // Number | The ID of the project role that will replace the one being deleted.
};
apiInstance.roleIdDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **swap** | **Number**| The ID of the project role that will replace the one being deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## roleIdGet

> ProjectRole roleIdGet(cloudid, id)

Get project role by ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
apiInstance.roleIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleIdPost

> ProjectRole roleIdPost(cloudid, id, body)

Partial update project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let body = new Jira.CreateUpdateRoleRequestBean(); // CreateUpdateRoleRequestBean | 
apiInstance.roleIdPost(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **body** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## roleIdPut

> ProjectRole roleIdPut(cloudid, id, body)

Fully update project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let body = new Jira.CreateUpdateRoleRequestBean(); // CreateUpdateRoleRequestBean | 
apiInstance.roleIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **body** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rolePost

> ProjectRole rolePost(cloudid, body)

Create project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRolesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.CreateUpdateRoleRequestBean(); // CreateUpdateRoleRequestBean | 
apiInstance.rolePost(cloudid, body, (error, data, response) => {
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
 **body** | [**CreateUpdateRoleRequestBean**](CreateUpdateRoleRequestBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

