# Jira.IssueCommentPropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentCommentIdPropertiesGet**](IssueCommentPropertiesApi.md#commentCommentIdPropertiesGet) | **GET** /comment/{commentId}/properties | Get comment property keys
[**commentCommentIdPropertiesPropertyKeyDelete**](IssueCommentPropertiesApi.md#commentCommentIdPropertiesPropertyKeyDelete) | **DELETE** /comment/{commentId}/properties/{propertyKey} | Delete comment property
[**commentCommentIdPropertiesPropertyKeyGet**](IssueCommentPropertiesApi.md#commentCommentIdPropertiesPropertyKeyGet) | **GET** /comment/{commentId}/properties/{propertyKey} | Get comment property
[**commentCommentIdPropertiesPropertyKeyPut**](IssueCommentPropertiesApi.md#commentCommentIdPropertiesPropertyKeyPut) | **PUT** /comment/{commentId}/properties/{propertyKey} | Set comment property



## commentCommentIdPropertiesGet

> PropertyKeys commentCommentIdPropertiesGet(cloudid, commentId)

Get comment property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let commentId = "commentId_example"; // String | The ID of the comment.
apiInstance.commentCommentIdPropertiesGet(cloudid, commentId, (error, data, response) => {
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
 **commentId** | **String**| The ID of the comment. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## commentCommentIdPropertiesPropertyKeyDelete

> commentCommentIdPropertiesPropertyKeyDelete(cloudid, commentId, propertyKey)

Delete comment property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let commentId = "commentId_example"; // String | The ID of the comment.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.commentCommentIdPropertiesPropertyKeyDelete(cloudid, commentId, propertyKey, (error, data, response) => {
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
 **commentId** | **String**| The ID of the comment. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## commentCommentIdPropertiesPropertyKeyGet

> EntityProperty commentCommentIdPropertiesPropertyKeyGet(cloudid, commentId, propertyKey)

Get comment property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let commentId = "commentId_example"; // String | The ID of the comment.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.commentCommentIdPropertiesPropertyKeyGet(cloudid, commentId, propertyKey, (error, data, response) => {
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
 **commentId** | **String**| The ID of the comment. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## commentCommentIdPropertiesPropertyKeyPut

> Object commentCommentIdPropertiesPropertyKeyPut(cloudid, commentId, propertyKey, body)

Set comment property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let commentId = "commentId_example"; // String | The ID of the comment.
let propertyKey = "propertyKey_example"; // String | The key of the property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.commentCommentIdPropertiesPropertyKeyPut(cloudid, commentId, propertyKey, body, (error, data, response) => {
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
 **commentId** | **String**| The ID of the comment. | 
 **propertyKey** | **String**| The key of the property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

