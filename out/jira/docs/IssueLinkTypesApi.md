# Jira.IssueLinkTypesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueLinkTypeGet**](IssueLinkTypesApi.md#issueLinkTypeGet) | **GET** /issueLinkType | Get issue link types
[**issueLinkTypeIssueLinkTypeIdDelete**](IssueLinkTypesApi.md#issueLinkTypeIssueLinkTypeIdDelete) | **DELETE** /issueLinkType/{issueLinkTypeId} | Delete issue link type
[**issueLinkTypeIssueLinkTypeIdGet**](IssueLinkTypesApi.md#issueLinkTypeIssueLinkTypeIdGet) | **GET** /issueLinkType/{issueLinkTypeId} | Get issue link type
[**issueLinkTypeIssueLinkTypeIdPut**](IssueLinkTypesApi.md#issueLinkTypeIssueLinkTypeIdPut) | **PUT** /issueLinkType/{issueLinkTypeId} | Update issue link type
[**issueLinkTypePost**](IssueLinkTypesApi.md#issueLinkTypePost) | **POST** /issueLinkType | Create issue link type



## issueLinkTypeGet

> IssueLinkTypes issueLinkTypeGet(cloudid)

Get issue link types

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinkTypesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.issueLinkTypeGet(cloudid, (error, data, response) => {
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

[**IssueLinkTypes**](IssueLinkTypes.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueLinkTypeIssueLinkTypeIdDelete

> issueLinkTypeIssueLinkTypeIdDelete(cloudid, issueLinkTypeId)

Delete issue link type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinkTypesApi();
let cloudid = null; // Object | Cloudi of the project
let issueLinkTypeId = "issueLinkTypeId_example"; // String | The ID of the issue link type.
apiInstance.issueLinkTypeIssueLinkTypeIdDelete(cloudid, issueLinkTypeId, (error, data, response) => {
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
 **issueLinkTypeId** | **String**| The ID of the issue link type. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueLinkTypeIssueLinkTypeIdGet

> IssueLinkType issueLinkTypeIssueLinkTypeIdGet(cloudid, issueLinkTypeId)

Get issue link type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinkTypesApi();
let cloudid = null; // Object | Cloudi of the project
let issueLinkTypeId = "issueLinkTypeId_example"; // String | The ID of the issue link type.
apiInstance.issueLinkTypeIssueLinkTypeIdGet(cloudid, issueLinkTypeId, (error, data, response) => {
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
 **issueLinkTypeId** | **String**| The ID of the issue link type. | 

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueLinkTypeIssueLinkTypeIdPut

> IssueLinkType issueLinkTypeIssueLinkTypeIdPut(cloudid, issueLinkTypeId, body)

Update issue link type

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.IssueLinkTypesApi();
let cloudid = null; // Object | Cloudi of the project
let issueLinkTypeId = "issueLinkTypeId_example"; // String | The ID of the issue link type.
let body = new Jira.IssueLinkType(); // IssueLinkType | 
apiInstance.issueLinkTypeIssueLinkTypeIdPut(cloudid, issueLinkTypeId, body, (error, data, response) => {
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
 **issueLinkTypeId** | **String**| The ID of the issue link type. | 
 **body** | [**IssueLinkType**](IssueLinkType.md)|  | 

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueLinkTypePost

> IssueLinkType issueLinkTypePost(cloudid, body)

Create issue link type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinkTypesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueLinkType(); // IssueLinkType | 
apiInstance.issueLinkTypePost(cloudid, body, (error, data, response) => {
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
 **body** | [**IssueLinkType**](IssueLinkType.md)|  | 

### Return type

[**IssueLinkType**](IssueLinkType.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

