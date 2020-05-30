# Rollbar.OccurrenceApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instanceInstanceIdDelete**](OccurrenceApi.md#instanceInstanceIdDelete) | **DELETE** /instance/{instance_id} | Delete an occurrence
[**instanceInstanceIdGet**](OccurrenceApi.md#instanceInstanceIdGet) | **GET** /instance/{instance_id} | Get an occurrence
[**instancesGet**](OccurrenceApi.md#instancesGet) | **GET** /instances | List all occurrences in a project
[**itemIdInstancesGet**](OccurrenceApi.md#itemIdInstancesGet) | **GET** /{item_id}/instances | List all occurrences in an item



## instanceInstanceIdDelete

> instanceInstanceIdDelete(opts)

Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated. 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.OccurrenceApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null() //  | 
};
apiInstance.instanceInstanceIdDelete(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## instanceInstanceIdGet

> instanceInstanceIdGet(opts)

Get an occurrence

Returns a JSON object describing the occurrence. This is similar to the \&quot;Raw JSON\&quot; section of the occurrence detail page.  &#x60;instance_id&#x60; must be an Occurrence ID for an occurrence in the project. These IDs are returned as the &#x60;id&#x60; field in other occurrence API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/&#x60; (&#x60;3209095494&#x60; is the Occurrence ID). 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.OccurrenceApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null() //  | 
};
apiInstance.instanceInstanceIdGet(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## instancesGet

> instancesGet(opts)

List all occurrences in a project

Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.OccurrenceApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'page': null // Object | Page number to return, starting at 1. 20 occurrences are returned per page.
};
apiInstance.instancesGet(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **page** | [**Object**](.md)| Page number to return, starting at 1. 20 occurrences are returned per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## itemIdInstancesGet

> itemIdInstancesGet(opts)

List all occurrences in an item

Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.OccurrenceApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null(), //  | 
  'UNKNOWN_PARAMETER_NAME2': new Rollbar.null(), //  | 
  'page': null // Object | Page number to return, starting at 1. 20 occurrences are returned per page.
};
apiInstance.itemIdInstancesGet(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 
 **UNKNOWN_PARAMETER_NAME2** | [****](.md)|  | [optional] 
 **page** | [**Object**](.md)| Page number to return, starting at 1. 20 occurrences are returned per page. | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

