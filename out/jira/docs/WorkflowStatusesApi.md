# Jira.WorkflowStatusesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**statusGet**](WorkflowStatusesApi.md#statusGet) | **GET** /status | Get all statuses
[**statusIdOrNameGet**](WorkflowStatusesApi.md#statusIdOrNameGet) | **GET** /status/{idOrName} | Get status



## statusGet

> [StatusDetails] statusGet(cloudid)

Get all statuses

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowStatusesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.statusGet(cloudid, (error, data, response) => {
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

[**[StatusDetails]**](StatusDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## statusIdOrNameGet

> StatusDetails statusIdOrNameGet(cloudid, idOrName)

Get status

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowStatusesApi();
let cloudid = null; // Object | Cloudi of the project
let idOrName = "idOrName_example"; // String | The ID or name of the status.
apiInstance.statusIdOrNameGet(cloudid, idOrName, (error, data, response) => {
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
 **idOrName** | **String**| The ID or name of the status. | 

### Return type

[**StatusDetails**](StatusDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

