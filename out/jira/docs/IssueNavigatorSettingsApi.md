# Jira.IssueNavigatorSettingsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsColumnsGet**](IssueNavigatorSettingsApi.md#settingsColumnsGet) | **GET** /settings/columns | Get issue navigator default columns
[**settingsColumnsPut**](IssueNavigatorSettingsApi.md#settingsColumnsPut) | **PUT** /settings/columns | Set issue navigator default columns



## settingsColumnsGet

> [ColumnItem] settingsColumnsGet(cloudid)

Get issue navigator default columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueNavigatorSettingsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.settingsColumnsGet(cloudid, (error, data, response) => {
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

[**[ColumnItem]**](ColumnItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## settingsColumnsPut

> Object settingsColumnsPut(cloudid, opts)

Set issue navigator default columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueNavigatorSettingsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'body': "body_example" // [String] | A navigable field value.
};
apiInstance.settingsColumnsPut(cloudid, opts, (error, data, response) => {
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
 **body** | [**[String]**](String.md)| A navigable field value. | [optional] 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

