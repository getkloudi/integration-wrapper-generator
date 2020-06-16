# Jira.TimeTrackingApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configurationTimetrackingGet**](TimeTrackingApi.md#configurationTimetrackingGet) | **GET** /configuration/timetracking | Get selected time tracking provider
[**configurationTimetrackingListGet**](TimeTrackingApi.md#configurationTimetrackingListGet) | **GET** /configuration/timetracking/list | Get all time tracking providers
[**configurationTimetrackingOptionsGet**](TimeTrackingApi.md#configurationTimetrackingOptionsGet) | **GET** /configuration/timetracking/options | Get time tracking settings
[**configurationTimetrackingOptionsPut**](TimeTrackingApi.md#configurationTimetrackingOptionsPut) | **PUT** /configuration/timetracking/options | Set time tracking settings
[**configurationTimetrackingPut**](TimeTrackingApi.md#configurationTimetrackingPut) | **PUT** /configuration/timetracking | Select time tracking provider



## configurationTimetrackingGet

> TimeTrackingProvider configurationTimetrackingGet(cloudid)

Get selected time tracking provider

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TimeTrackingApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.configurationTimetrackingGet(cloudid, (error, data, response) => {
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

[**TimeTrackingProvider**](TimeTrackingProvider.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## configurationTimetrackingListGet

> [TimeTrackingProvider] configurationTimetrackingListGet(cloudid)

Get all time tracking providers

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TimeTrackingApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.configurationTimetrackingListGet(cloudid, (error, data, response) => {
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

[**[TimeTrackingProvider]**](TimeTrackingProvider.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## configurationTimetrackingOptionsGet

> TimeTrackingConfiguration configurationTimetrackingOptionsGet(cloudid)

Get time tracking settings

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TimeTrackingApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.configurationTimetrackingOptionsGet(cloudid, (error, data, response) => {
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

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## configurationTimetrackingOptionsPut

> TimeTrackingConfiguration configurationTimetrackingOptionsPut(cloudid, body)

Set time tracking settings

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TimeTrackingApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.TimeTrackingConfiguration(); // TimeTrackingConfiguration | 
apiInstance.configurationTimetrackingOptionsPut(cloudid, body, (error, data, response) => {
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
 **body** | [**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)|  | 

### Return type

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## configurationTimetrackingPut

> Object configurationTimetrackingPut(cloudid, body)

Select time tracking provider

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TimeTrackingApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.TimeTrackingProvider(); // TimeTrackingProvider | 
apiInstance.configurationTimetrackingPut(cloudid, body, (error, data, response) => {
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
 **body** | [**TimeTrackingProvider**](TimeTrackingProvider.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

