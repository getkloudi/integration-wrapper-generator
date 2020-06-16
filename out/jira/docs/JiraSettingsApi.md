# Jira.JiraSettingsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**applicationPropertiesAdvancedSettingsGet**](JiraSettingsApi.md#applicationPropertiesAdvancedSettingsGet) | **GET** /application-properties/advanced-settings | Get advanced settings
[**applicationPropertiesGet**](JiraSettingsApi.md#applicationPropertiesGet) | **GET** /application-properties | Get application property
[**applicationPropertiesIdPut**](JiraSettingsApi.md#applicationPropertiesIdPut) | **PUT** /application-properties/{id} | Set application property
[**configurationGet**](JiraSettingsApi.md#configurationGet) | **GET** /configuration | Get global settings



## applicationPropertiesAdvancedSettingsGet

> [ApplicationProperty] applicationPropertiesAdvancedSettingsGet(cloudid)

Get advanced settings

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JiraSettingsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.applicationPropertiesAdvancedSettingsGet(cloudid, (error, data, response) => {
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

[**[ApplicationProperty]**](ApplicationProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationPropertiesGet

> [ApplicationProperty] applicationPropertiesGet(cloudid, opts)

Get application property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JiraSettingsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'key': "key_example", // String | The key of the application property.
  'permissionLevel': "permissionLevel_example", // String | The permission level of all items being returned in the list.
  'keyFilter': "keyFilter_example" // String | When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.
};
apiInstance.applicationPropertiesGet(cloudid, opts, (error, data, response) => {
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
 **key** | **String**| The key of the application property. | [optional] 
 **permissionLevel** | **String**| The permission level of all items being returned in the list. | [optional] 
 **keyFilter** | **String**| When a &#x60;key&#x60; isn&#39;t provided, this filters the list of results by the application property &#x60;key&#x60; using a regular expression. For example, using &#x60;jira.lf.*&#x60; will return all application properties with keys that start with *jira.lf.*. | [optional] 

### Return type

[**[ApplicationProperty]**](ApplicationProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## applicationPropertiesIdPut

> ApplicationProperty applicationPropertiesIdPut(cloudid, id, body)

Set application property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JiraSettingsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The key of the application property to update.
let body = new Jira.SimpleApplicationPropertyBean(); // SimpleApplicationPropertyBean | 
apiInstance.applicationPropertiesIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The key of the application property to update. | 
 **body** | [**SimpleApplicationPropertyBean**](SimpleApplicationPropertyBean.md)|  | 

### Return type

[**ApplicationProperty**](ApplicationProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## configurationGet

> Configuration configurationGet(cloudid)

Get global settings

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.JiraSettingsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.configurationGet(cloudid, (error, data, response) => {
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

[**Configuration**](Configuration.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

