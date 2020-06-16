# Jira.IssueSecuritySchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesecurityschemesGet**](IssueSecuritySchemesApi.md#issuesecurityschemesGet) | **GET** /issuesecurityschemes | Get issue security schemes
[**issuesecurityschemesIdGet**](IssueSecuritySchemesApi.md#issuesecurityschemesIdGet) | **GET** /issuesecurityschemes/{id} | Get issue security scheme



## issuesecurityschemesGet

> SecuritySchemes issuesecurityschemesGet(cloudid)

Get issue security schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueSecuritySchemesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.issuesecurityschemesGet(cloudid, (error, data, response) => {
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

[**SecuritySchemes**](SecuritySchemes.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuesecurityschemesIdGet

> SecurityScheme issuesecurityschemesIdGet(cloudid, id)

Get issue security scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueSecuritySchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
apiInstance.issuesecurityschemesIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. | 

### Return type

[**SecurityScheme**](SecurityScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

