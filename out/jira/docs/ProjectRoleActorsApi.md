# Jira.ProjectRoleActorsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdOrKeyRoleIdDelete**](ProjectRoleActorsApi.md#projectProjectIdOrKeyRoleIdDelete) | **DELETE** /project/{projectIdOrKey}/role/{id} | Delete actors from project role
[**projectProjectIdOrKeyRoleIdPost**](ProjectRoleActorsApi.md#projectProjectIdOrKeyRoleIdPost) | **POST** /project/{projectIdOrKey}/role/{id} | Add actors to project role
[**projectProjectIdOrKeyRoleIdPut**](ProjectRoleActorsApi.md#projectProjectIdOrKeyRoleIdPut) | **PUT** /project/{projectIdOrKey}/role/{id} | Set actors for project role
[**roleIdActorsDelete**](ProjectRoleActorsApi.md#roleIdActorsDelete) | **DELETE** /role/{id}/actors | Delete default actors from project role
[**roleIdActorsGet**](ProjectRoleActorsApi.md#roleIdActorsGet) | **GET** /role/{id}/actors | Get default actors for project role
[**roleIdActorsPost**](ProjectRoleActorsApi.md#roleIdActorsPost) | **POST** /role/{id}/actors | Add default actors to project role



## projectProjectIdOrKeyRoleIdDelete

> projectProjectIdOrKeyRoleIdDelete(cloudid, projectIdOrKey, id, opts)

Delete actors from project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let opts = {
  'user': "user_example", // String | The user account ID of the user to remove from the project role.
  'group': "group_example" // String | The name of the group to remove from the project role.
};
apiInstance.projectProjectIdOrKeyRoleIdDelete(cloudid, projectIdOrKey, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs. | 
 **user** | **String**| The user account ID of the user to remove from the project role. | [optional] 
 **group** | **String**| The name of the group to remove from the project role. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdOrKeyRoleIdPost

> ProjectRole projectProjectIdOrKeyRoleIdPost(cloudid, projectIdOrKey, id, body)

Add actors to project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let body = new Jira.ActorsMap(); // ActorsMap | The groups or users to associate with the project role for this project. Provide the user account ID or group name.
apiInstance.projectProjectIdOrKeyRoleIdPost(cloudid, projectIdOrKey, id, body, (error, data, response) => {
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
 **body** | [**ActorsMap**](ActorsMap.md)| The groups or users to associate with the project role for this project. Provide the user account ID or group name. | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectIdOrKeyRoleIdPut

> ProjectRole projectProjectIdOrKeyRoleIdPut(cloudid, projectIdOrKey, id, body)

Set actors for project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let body = new Jira.ProjectRoleActorsUpdateBean(); // ProjectRoleActorsUpdateBean | The groups or users to associate with the project role for this project. Provide the user account ID or group name.
apiInstance.projectProjectIdOrKeyRoleIdPut(cloudid, projectIdOrKey, id, body, (error, data, response) => {
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
 **body** | [**ProjectRoleActorsUpdateBean**](ProjectRoleActorsUpdateBean.md)| The groups or users to associate with the project role for this project. Provide the user account ID or group name. | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## roleIdActorsDelete

> ProjectRole roleIdActorsDelete(cloudid, id, opts)

Delete default actors from project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let opts = {
  'user': "user_example", // String | The user account ID of the user to remove as a default actor.
  'group': "group_example" // String | The group name of the group to be removed as a default actor.
};
apiInstance.roleIdActorsDelete(cloudid, id, opts, (error, data, response) => {
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
 **user** | **String**| The user account ID of the user to remove as a default actor. | [optional] 
 **group** | **String**| The group name of the group to be removed as a default actor. | [optional] 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## roleIdActorsGet

> ProjectRole roleIdActorsGet(cloudid, id)

Get default actors for project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
apiInstance.roleIdActorsGet(cloudid, id, (error, data, response) => {
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


## roleIdActorsPost

> ProjectRole roleIdActorsPost(cloudid, id, body)

Add default actors to project role

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectRoleActorsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
let body = new Jira.ActorInputBean(); // ActorInputBean | 
apiInstance.roleIdActorsPost(cloudid, id, body, (error, data, response) => {
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
 **body** | [**ActorInputBean**](ActorInputBean.md)|  | 

### Return type

[**ProjectRole**](ProjectRole.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

