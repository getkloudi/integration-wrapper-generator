# Jira.ServerInfoApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serverInfoGet**](ServerInfoApi.md#serverInfoGet) | **GET** /serverInfo | Get Jira instance info



## serverInfoGet

> ServerInformation serverInfoGet(cloudid)

Get Jira instance info

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ServerInfoApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.serverInfoGet(cloudid, (error, data, response) => {
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

[**ServerInformation**](ServerInformation.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

