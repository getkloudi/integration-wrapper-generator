# Jira.IssueTypesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuetypeGet**](IssueTypesApi.md#issuetypeGet) | **GET** /issuetype | Get all issue types for user
[**issuetypeIdAlternativesGet**](IssueTypesApi.md#issuetypeIdAlternativesGet) | **GET** /issuetype/{id}/alternatives | Get alternative issue types
[**issuetypeIdAvatar2Post**](IssueTypesApi.md#issuetypeIdAvatar2Post) | **POST** /issuetype/{id}/avatar2 | Load issue type avatar
[**issuetypeIdDelete**](IssueTypesApi.md#issuetypeIdDelete) | **DELETE** /issuetype/{id} | Delete issue type
[**issuetypeIdGet**](IssueTypesApi.md#issuetypeIdGet) | **GET** /issuetype/{id} | Get issue type
[**issuetypeIdPut**](IssueTypesApi.md#issuetypeIdPut) | **PUT** /issuetype/{id} | Update issue type
[**issuetypePost**](IssueTypesApi.md#issuetypePost) | **POST** /issuetype | Create issue type



## issuetypeGet

> [IssueTypeDetails] issuetypeGet(cloudid)

Get all issue types for user

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.issuetypeGet(cloudid, (error, data, response) => {
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

[**[IssueTypeDetails]**](IssueTypeDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIdAlternativesGet

> [IssueTypeDetails] issuetypeIdAlternativesGet(cloudid, id)

Get alternative issue types

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue type.
apiInstance.issuetypeIdAlternativesGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the issue type. | 

### Return type

[**[IssueTypeDetails]**](IssueTypeDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIdAvatar2Post

> Avatar issuetypeIdAvatar2Post(cloudid, id, size, body, opts)

Load issue type avatar

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue type.
let size = 56; // Number | The length of each side of the crop region.
let body = null; // Object | 
let opts = {
  'x': 0, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 0 // Number | The Y coordinate of the top-left corner of the crop region.
};
apiInstance.issuetypeIdAvatar2Post(cloudid, id, size, body, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the issue type. | 
 **size** | **Number**| The length of each side of the crop region. | 
 **body** | **Object**|  | 
 **x** | **Number**| The X coordinate of the top-left corner of the crop region. | [optional] [default to 0]
 **y** | **Number**| The Y coordinate of the top-left corner of the crop region. | [optional] [default to 0]

### Return type

[**Avatar**](Avatar.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIdDelete

> issuetypeIdDelete(cloudid, id, opts)

Delete issue type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue type.
let opts = {
  'alternativeIssueTypeId': "alternativeIssueTypeId_example" // String | The ID of the replacement issue type.
};
apiInstance.issuetypeIdDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the issue type. | 
 **alternativeIssueTypeId** | **String**| The ID of the replacement issue type. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issuetypeIdGet

> IssueTypeDetails issuetypeIdGet(cloudid, id)

Get issue type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue type.
apiInstance.issuetypeIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the issue type. | 

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeIdPut

> IssueTypeDetails issuetypeIdPut(cloudid, id, body)

Update issue type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue type.
let body = new Jira.IssueTypeUpdateBean(); // IssueTypeUpdateBean | 
apiInstance.issuetypeIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the issue type. | 
 **body** | [**IssueTypeUpdateBean**](IssueTypeUpdateBean.md)|  | 

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issuetypePost

> IssueTypeDetails issuetypePost(cloudid, body)

Create issue type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueTypeCreateBean(); // IssueTypeCreateBean | 
apiInstance.issuetypePost(cloudid, body, (error, data, response) => {
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
 **body** | [**IssueTypeCreateBean**](IssueTypeCreateBean.md)|  | 

### Return type

[**IssueTypeDetails**](IssueTypeDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

