# Rollbar.VersionsApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**versionsVersionGet**](VersionsApi.md#versionsVersionGet) | **GET** /versions/{version} | Code version details in one project
[**versionsVersionItemsGet**](VersionsApi.md#versionsVersionItemsGet) | **GET** /versions/{version}/items | List items by code version



## versionsVersionGet

> versionsVersionGet(environment, opts)

Code version details in one project

Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.VersionsApi();
let environment = null; // Object | The environment where the code version is detected
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null() //  | 
};
apiInstance.versionsVersionGet(environment, opts, (error, data, response) => {
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
 **environment** | [**Object**](.md)| The environment where the code version is detected | 
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## versionsVersionItemsGet

> versionsVersionItemsGet(environment, event, opts)

List items by code version

List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.VersionsApi();
let environment = null; // Object | For one code version list the items only for this environment
let event = null; // Object | Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version 
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null(), //  | 
  'level': null, // Object | Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null() //  | 
};
apiInstance.versionsVersionItemsGet(environment, event, opts, (error, data, response) => {
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
 **environment** | [**Object**](.md)| For one code version list the items only for this environment | 
 **event** | [**Object**](.md)| Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - &#x60;new&#x60; for new items in the code version   - &#x60;repeated&#x60; for an item that already existed in preivous versions   - &#x60;reactivated&#x60; an item that was resolved but was reactivated in the code version   - &#x60;resolved&#x60; an item resolved in one specific version  | 
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 
 **level** | [**Object**](.md)| Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified. | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

