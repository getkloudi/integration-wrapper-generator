# Jira.WorkflowStatusCategoriesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statuscategoryGet**](WorkflowStatusCategoriesApi.md#statuscategoryGet) | **GET** /statuscategory | Get all status categories
[**statuscategoryIdOrKeyGet**](WorkflowStatusCategoriesApi.md#statuscategoryIdOrKeyGet) | **GET** /statuscategory/{idOrKey} | Get status category



## statuscategoryGet

> [StatusCategory] statuscategoryGet(cloudid)

Get all status categories

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowStatusCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.statuscategoryGet(cloudid, (error, data, response) => {
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

[**[StatusCategory]**](StatusCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statuscategoryIdOrKeyGet

> StatusCategory statuscategoryIdOrKeyGet(cloudid, idOrKey)

Get status category

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowStatusCategoriesApi();
let cloudid = null; // Object | Cloudi of the project
let idOrKey = "idOrKey_example"; // String | The ID or key of the status category.
apiInstance.statuscategoryIdOrKeyGet(cloudid, idOrKey, (error, data, response) => {
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
 **idOrKey** | **String**| The ID or key of the status category. | 

### Return type

[**StatusCategory**](StatusCategory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

