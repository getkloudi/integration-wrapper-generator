# Jira.IssueTypePropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuetypeIssueTypeIdPropertiesGet**](IssueTypePropertiesApi.md#issuetypeIssueTypeIdPropertiesGet) | **GET** /issuetype/{issueTypeId}/properties | Get issue type property keys
[**issuetypeIssueTypeIdPropertiesPropertyKeyDelete**](IssueTypePropertiesApi.md#issuetypeIssueTypeIdPropertiesPropertyKeyDelete) | **DELETE** /issuetype/{issueTypeId}/properties/{propertyKey} | Delete issue type property
[**issuetypeIssueTypeIdPropertiesPropertyKeyGet**](IssueTypePropertiesApi.md#issuetypeIssueTypeIdPropertiesPropertyKeyGet) | **GET** /issuetype/{issueTypeId}/properties/{propertyKey} | Get issue type property
[**issuetypeIssueTypeIdPropertiesPropertyKeyPut**](IssueTypePropertiesApi.md#issuetypeIssueTypeIdPropertiesPropertyKeyPut) | **PUT** /issuetype/{issueTypeId}/properties/{propertyKey} | Set issue type property



## issuetypeIssueTypeIdPropertiesGet

> PropertyKeys issuetypeIssueTypeIdPropertiesGet(cloudid, issueTypeId)

Get issue type property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueTypeId = "issueTypeId_example"; // String | The ID of the issue type.
apiInstance.issuetypeIssueTypeIdPropertiesGet(cloudid, issueTypeId, (error, data, response) => {
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
 **issueTypeId** | **String**| The ID of the issue type. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIssueTypeIdPropertiesPropertyKeyDelete

> issuetypeIssueTypeIdPropertiesPropertyKeyDelete(cloudid, issueTypeId, propertyKey)

Delete issue type property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueTypeId = "issueTypeId_example"; // String | The ID of the issue type.
let propertyKey = "propertyKey_example"; // String | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyDelete(cloudid, issueTypeId, propertyKey, (error, data, response) => {
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
 **issueTypeId** | **String**| The ID of the issue type. | 
 **propertyKey** | **String**| The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issuetypeIssueTypeIdPropertiesPropertyKeyGet

> EntityProperty issuetypeIssueTypeIdPropertiesPropertyKeyGet(cloudid, issueTypeId, propertyKey)

Get issue type property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueTypeId = "issueTypeId_example"; // String | The ID of the issue type.
let propertyKey = "propertyKey_example"; // String | The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys.
apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyGet(cloudid, issueTypeId, propertyKey, (error, data, response) => {
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
 **issueTypeId** | **String**| The ID of the issue type. | 
 **propertyKey** | **String**| The key of the property. Use [Get issue type property keys](#api-rest-api-3-issuetype-issueTypeId-properties-get) to get a list of all issue type property keys. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIssueTypeIdPropertiesPropertyKeyPut

> Object issuetypeIssueTypeIdPropertiesPropertyKeyPut(cloudid, issueTypeId, propertyKey, body)

Set issue type property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueTypeId = "issueTypeId_example"; // String | The ID of the issue type.
let propertyKey = "propertyKey_example"; // String | The key of the issue type property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.issuetypeIssueTypeIdPropertiesPropertyKeyPut(cloudid, issueTypeId, propertyKey, body, (error, data, response) => {
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
 **issueTypeId** | **String**| The ID of the issue type. | 
 **propertyKey** | **String**| The key of the issue type property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

