# Rollbar.OccurrenceApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instanceInstanceIdDelete**](OccurrenceApi.md#instanceInstanceIdDelete) | **DELETE** /instance/{instance_id} | Delete an occurrence
[**instanceInstanceIdGet**](OccurrenceApi.md#instanceInstanceIdGet) | **GET** /instance/{instance_id} | Get an occurrence
[**instancesGet**](OccurrenceApi.md#instancesGet) | **GET** /instances | List all occurrences in a project
[**itemIdInstancesGet**](OccurrenceApi.md#itemIdInstancesGet) | **GET** /{item_id}/instances | List all occurrences in an item



## instanceInstanceIdDelete

> Api1InstanceResponse1 instanceInstanceIdDelete(xRollbarAccessToken, instanceId)

Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.OccurrenceApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let instanceId = 56; // Number | The occurrence ID
apiInstance.instanceInstanceIdDelete(xRollbarAccessToken, instanceId, (error, data, response) => {
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
 **instanceId** | **Number**| The occurrence ID | 

### Return type

[**Api1InstanceResponse1**](Api1InstanceResponse1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## instanceInstanceIdGet

> Api1InstanceResponse instanceInstanceIdGet(xRollbarAccessToken, instanceId)

Get an occurrence

Returns a JSON object describing the occurrence. This is similar to the \&quot;Raw JSON\&quot; section of the occurrence detail page.  &#x60;instance_id&#x60; must be an Occurrence ID for an occurrence in the project. These IDs are returned as the &#x60;id&#x60; field in other occurrence API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/&#x60; (&#x60;3209095494&#x60; is the Occurrence ID). 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.OccurrenceApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let instanceId = 56; // Number | The occurrence ID
apiInstance.instanceInstanceIdGet(xRollbarAccessToken, instanceId, (error, data, response) => {
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
 **instanceId** | **Number**| The occurrence ID | 

### Return type

[**Api1InstanceResponse**](Api1InstanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## instancesGet

> Api1InstancesResponse instancesGet(xRollbarAccessToken, opts)

List all occurrences in a project

Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.OccurrenceApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'page': 1 // Number | Page number to return, starting at 1. 20 occurrences are returned per page.
};
apiInstance.instancesGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **page** | **Number**| Page number to return, starting at 1. 20 occurrences are returned per page. | [optional] [default to 1]

### Return type

[**Api1InstancesResponse**](Api1InstancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## itemIdInstancesGet

> Api1InstancesResponse itemIdInstancesGet(xRollbarAccessToken, itemId, opts)

List all occurrences in an item

Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp). 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.OccurrenceApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let itemId = 56; // Number | The item ID
let opts = {
  'page': 1 // Number | Page number to return, starting at 1. 20 occurrences are returned per page.
};
apiInstance.itemIdInstancesGet(xRollbarAccessToken, itemId, opts, (error, data, response) => {
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
 **itemId** | **Number**| The item ID | 
 **page** | **Number**| Page number to return, starting at 1. 20 occurrences are returned per page. | [optional] [default to 1]

### Return type

[**Api1InstancesResponse**](Api1InstancesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8

