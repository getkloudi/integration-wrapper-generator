# Jira.AuditRecordsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auditingRecordGet**](AuditRecordsApi.md#auditingRecordGet) | **GET** /auditing/record | Get audit records



## auditingRecordGet

> AuditRecords auditingRecordGet(cloudid, opts)

Get audit records

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.AuditRecordsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'offset': 0, // Number | The number of records to skip before returning the first result.
  'limit': 1000, // Number | The maximum number of results to return.
  'filter': "filter_example", // String | The query string.
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | The date and time on or after which returned audit records must have been created. If `to` is provided `from` must be before `to` or no audit records are returned.
  'to': new Date("2013-10-20T19:20:30+01:00") // Date | The date and time on or before which returned audit results must have been created. If `from` is provided `to` must be after `from` or no audit records are returned.
};
apiInstance.auditingRecordGet(cloudid, opts, (error, data, response) => {
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
 **offset** | **Number**| The number of records to skip before returning the first result. | [optional] [default to 0]
 **limit** | **Number**| The maximum number of results to return. | [optional] [default to 1000]
 **filter** | **String**| The query string. | [optional] 
 **from** | **Date**| The date and time on or after which returned audit records must have been created. If &#x60;to&#x60; is provided &#x60;from&#x60; must be before &#x60;to&#x60; or no audit records are returned. | [optional] 
 **to** | **Date**| The date and time on or before which returned audit results must have been created. If &#x60;from&#x60; is provided &#x60;to&#x60; must be after &#x60;from&#x60; or no audit records are returned. | [optional] 

### Return type

[**AuditRecords**](AuditRecords.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

