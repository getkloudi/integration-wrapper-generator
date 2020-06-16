# Jira.IssuePropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueIssueIdOrKeyPropertiesGet**](IssuePropertiesApi.md#issueIssueIdOrKeyPropertiesGet) | **GET** /issue/{issueIdOrKey}/properties | Get issue property keys
[**issueIssueIdOrKeyPropertiesPropertyKeyDelete**](IssuePropertiesApi.md#issueIssueIdOrKeyPropertiesPropertyKeyDelete) | **DELETE** /issue/{issueIdOrKey}/properties/{propertyKey} | Delete issue property
[**issueIssueIdOrKeyPropertiesPropertyKeyGet**](IssuePropertiesApi.md#issueIssueIdOrKeyPropertiesPropertyKeyGet) | **GET** /issue/{issueIdOrKey}/properties/{propertyKey} | Get issue property
[**issueIssueIdOrKeyPropertiesPropertyKeyPut**](IssuePropertiesApi.md#issueIssueIdOrKeyPropertiesPropertyKeyPut) | **PUT** /issue/{issueIdOrKey}/properties/{propertyKey} | Set issue property
[**issuePropertiesPost**](IssuePropertiesApi.md#issuePropertiesPost) | **POST** /issue/properties | Bulk set issues properties
[**issuePropertiesPropertyKeyDelete**](IssuePropertiesApi.md#issuePropertiesPropertyKeyDelete) | **DELETE** /issue/properties/{propertyKey} | Bulk delete issue property
[**issuePropertiesPropertyKeyPut**](IssuePropertiesApi.md#issuePropertiesPropertyKeyPut) | **PUT** /issue/properties/{propertyKey} | Bulk set issue property



## issueIssueIdOrKeyPropertiesGet

> PropertyKeys issueIssueIdOrKeyPropertiesGet(cloudid, issueIdOrKey)

Get issue property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The key or ID of the issue.
apiInstance.issueIssueIdOrKeyPropertiesGet(cloudid, issueIdOrKey, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The key or ID of the issue. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyPropertiesPropertyKeyDelete

> issueIssueIdOrKeyPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, propertyKey)

Delete issue property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The key or ID of the issue.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyDelete(cloudid, issueIdOrKey, propertyKey, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The key or ID of the issue. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyPropertiesPropertyKeyGet

> EntityProperty issueIssueIdOrKeyPropertiesPropertyKeyGet(cloudid, issueIdOrKey, propertyKey)

Get issue property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The key or ID of the issue.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyGet(cloudid, issueIdOrKey, propertyKey, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The key or ID of the issue. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyPropertiesPropertyKeyPut

> Object issueIssueIdOrKeyPropertiesPropertyKeyPut(cloudid, issueIdOrKey, propertyKey, body)

Set issue property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let propertyKey = "propertyKey_example"; // String | The key of the issue property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.issueIssueIdOrKeyPropertiesPropertyKeyPut(cloudid, issueIdOrKey, propertyKey, body, (error, data, response) => {
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
 **propertyKey** | **String**| The key of the issue property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issuePropertiesPost

> issuePropertiesPost(cloudid, body)

Bulk set issues properties

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueEntityProperties(); // IssueEntityProperties | Issue properties to be set or updated with values.
apiInstance.issuePropertiesPost(cloudid, body, (error, data, response) => {
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
 **body** | [**IssueEntityProperties**](IssueEntityProperties.md)| Issue properties to be set or updated with values. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issuePropertiesPropertyKeyDelete

> issuePropertiesPropertyKeyDelete(cloudid, propertyKey, body)

Bulk delete issue property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let propertyKey = "propertyKey_example"; // String | The key of the property.
let body = new Jira.IssueFilterForBulkPropertyDelete(); // IssueFilterForBulkPropertyDelete | 
apiInstance.issuePropertiesPropertyKeyDelete(cloudid, propertyKey, body, (error, data, response) => {
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
 **propertyKey** | **String**| The key of the property. | 
 **body** | [**IssueFilterForBulkPropertyDelete**](IssueFilterForBulkPropertyDelete.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issuePropertiesPropertyKeyPut

> issuePropertiesPropertyKeyPut(cloudid, propertyKey, body)

Bulk set issue property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuePropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let propertyKey = "propertyKey_example"; // String | The key of the property. The maximum length is 255 characters.
let body = new Jira.BulkIssuePropertyUpdateRequest(); // BulkIssuePropertyUpdateRequest | 
apiInstance.issuePropertiesPropertyKeyPut(cloudid, propertyKey, body, (error, data, response) => {
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
 **propertyKey** | **String**| The key of the property. The maximum length is 255 characters. | 
 **body** | [**BulkIssuePropertyUpdateRequest**](BulkIssuePropertyUpdateRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

