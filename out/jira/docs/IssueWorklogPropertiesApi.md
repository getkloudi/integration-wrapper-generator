# Jira.IssueWorklogPropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueIssueIdOrKeyWorklogWorklogIdPropertiesGet**](IssueWorklogPropertiesApi.md#issueIssueIdOrKeyWorklogWorklogIdPropertiesGet) | **GET** /issue/{issueIdOrKey}/worklog/{worklogId}/properties | Get worklog property keys
[**issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete**](IssueWorklogPropertiesApi.md#issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete) | **DELETE** /issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Delete worklog property
[**issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet**](IssueWorklogPropertiesApi.md#issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet) | **GET** /issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Get worklog property
[**issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut**](IssueWorklogPropertiesApi.md#issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut) | **PUT** /issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey} | Set worklog property



## issueIssueIdOrKeyWorklogWorklogIdPropertiesGet

> PropertyKeys issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(cloudid, issueIdOrKey, worklogId)

Get worklog property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let worklogId = "worklogId_example"; // String | The ID of the worklog.
apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesGet(cloudid, issueIdOrKey, worklogId, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **worklogId** | **String**| The ID of the worklog. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete

> issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, worklogId, propertyKey)

Delete worklog property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let worklogId = "worklogId_example"; // String | The ID of the worklog.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, worklogId, propertyKey, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **worklogId** | **String**| The ID of the worklog. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet

> EntityProperty issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(cloudid, issueIdOrKey, worklogId, propertyKey)

Get worklog property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let worklogId = "worklogId_example"; // String | The ID of the worklog.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyGet(cloudid, issueIdOrKey, worklogId, propertyKey, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **worklogId** | **String**| The ID of the worklog. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut

> Object issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(cloudid, issueIdOrKey, worklogId, propertyKey, body)

Set worklog property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let worklogId = "worklogId_example"; // String | The ID of the worklog.
let propertyKey = "propertyKey_example"; // String | The key of the issue property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.issueIssueIdOrKeyWorklogWorklogIdPropertiesPropertyKeyPut(cloudid, issueIdOrKey, worklogId, propertyKey, body, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **worklogId** | **String**| The ID of the worklog. | 
 **propertyKey** | **String**| The key of the issue property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

