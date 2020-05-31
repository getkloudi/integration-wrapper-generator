# Rollbar.VersionsApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionsVersionGet**](VersionsApi.md#versionsVersionGet) | **GET** /versions/{version} | Code version details in one project
[**versionsVersionItemsGet**](VersionsApi.md#versionsVersionItemsGet) | **GET** /versions/{version}/items | List items by code version



## versionsVersionGet

> Api1VersionsResponse versionsVersionGet(xRollbarAccessToken, version, environment)

Code version details in one project

Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.VersionsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let version = "version_example"; // String | The code version sent on the occurrence payload
let environment = "environment_example"; // String | The environment where the code version is detected
apiInstance.versionsVersionGet(xRollbarAccessToken, version, environment, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **version** | **String**| The code version sent on the occurrence payload | 
 **environment** | **String**| The environment where the code version is detected | 

### Return type

[**Api1VersionsResponse**](Api1VersionsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## versionsVersionItemsGet

> Api1VersionsItemsResponse versionsVersionItemsGet(xRollbarAccessToken, version, environment, event, opts)

List items by code version

List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.VersionsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let version = "version_example"; // String | The code version sent on the occurrence payload
let environment = "environment_example"; // String | For one code version list the items only for this environment
let event = "event_example"; // String | Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version
let opts = {
  'level': ["null"], // [String] | Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
  'page': 56 // Number | Page number, starting from 1. 20 elements are returned per page.
};
apiInstance.versionsVersionItemsGet(xRollbarAccessToken, version, environment, event, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **version** | **String**| The code version sent on the occurrence payload | 
 **environment** | **String**| For one code version list the items only for this environment | 
 **event** | **String**| Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - &#x60;new&#x60; for new items in the code version   - &#x60;repeated&#x60; for an item that already existed in preivous versions   - &#x60;reactivated&#x60; an item that was resolved but was reactivated in the code version   - &#x60;resolved&#x60; an item resolved in one specific version | 
 **level** | [**[String]**](String.md)| Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified. | [optional] 
 **page** | **Number**| Page number, starting from 1. 20 elements are returned per page. | [optional] 

### Return type

[**Api1VersionsItemsResponse**](Api1VersionsItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8

