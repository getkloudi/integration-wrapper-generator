# Jira.ProjectCategoriesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectCategoryGet**](ProjectCategoriesApi.md#projectCategoryGet) | **GET** /projectCategory | Get all project categories
[**projectCategoryIdDelete**](ProjectCategoriesApi.md#projectCategoryIdDelete) | **DELETE** /projectCategory/{id} | Delete project category
[**projectCategoryIdGet**](ProjectCategoriesApi.md#projectCategoryIdGet) | **GET** /projectCategory/{id} | Get project category by id
[**projectCategoryIdPut**](ProjectCategoriesApi.md#projectCategoryIdPut) | **PUT** /projectCategory/{id} | Update project category
[**projectCategoryPost**](ProjectCategoriesApi.md#projectCategoryPost) | **POST** /projectCategory | Create project category



## projectCategoryGet

> [ProjectCategory] projectCategoryGet(cloudid)

Get all project categories

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.projectCategoryGet(cloudid, (error, data, response) => {
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

[**[ProjectCategory]**](ProjectCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectCategoryIdDelete

> projectCategoryIdDelete(cloudid, id)

Delete project category

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | ID of the project category to delete.
apiInstance.projectCategoryIdDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| ID of the project category to delete. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectCategoryIdGet

> ProjectCategory projectCategoryIdGet(cloudid, id)

Get project category by id

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the project category.
apiInstance.projectCategoryIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the project category. | 

### Return type

[**ProjectCategory**](ProjectCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectCategoryIdPut

> UpdatedProjectCategory projectCategoryIdPut(cloudid, id, body)

Update project category

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | 
let body = new Jira.ProjectCategory(); // ProjectCategory | 
apiInstance.projectCategoryIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**|  | 
 **body** | [**ProjectCategory**](ProjectCategory.md)|  | 

### Return type

[**UpdatedProjectCategory**](UpdatedProjectCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectCategoryPost

> ProjectCategory projectCategoryPost(cloudid, body)

Create project category

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.ProjectCategory(); // ProjectCategory | 
apiInstance.projectCategoryPost(cloudid, body, (error, data, response) => {
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
 **body** | [**ProjectCategory**](ProjectCategory.md)|  | 

### Return type

[**ProjectCategory**](ProjectCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

