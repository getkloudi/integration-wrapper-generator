# Jira.AppPropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restAtlassianConnect1AddonsAddonKeyPropertiesGet**](AppPropertiesApi.md#restAtlassianConnect1AddonsAddonKeyPropertiesGet) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties | Get app properties
[**restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete**](AppPropertiesApi.md#restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete) | **DELETE** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Delete app property
[**restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet**](AppPropertiesApi.md#restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet) | **GET** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Get app property
[**restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut**](AppPropertiesApi.md#restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut) | **PUT** /rest/atlassian-connect/1/addons/{addonKey}/properties/{propertyKey} | Set app property



## restAtlassianConnect1AddonsAddonKeyPropertiesGet

> PropertyKeys restAtlassianConnect1AddonsAddonKeyPropertiesGet(cloudid, addonKey)

Get app properties

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AppPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let addonKey = "addonKey_example"; // String | The key of the app, as defined in its descriptor.
apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesGet(cloudid, addonKey, (error, data, response) => {
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
 **addonKey** | **String**| The key of the app, as defined in its descriptor. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete

> restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(cloudid, addonKey, propertyKey)

Delete app property

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AppPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let addonKey = "addonKey_example"; // String | The key of the app, as defined in its descriptor.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyDelete(cloudid, addonKey, propertyKey, (error, data, response) => {
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
 **cloudid** | [**Object**](.md)| Cloudi of the project | 
 **addonKey** | **String**| The key of the app, as defined in its descriptor. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet

> EntityProperty restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(cloudid, addonKey, propertyKey)

Get app property

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AppPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let addonKey = "addonKey_example"; // String | The key of the app, as defined in its descriptor.
let propertyKey = "propertyKey_example"; // String | The key of the property.
apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyGet(cloudid, addonKey, propertyKey, (error, data, response) => {
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
 **addonKey** | **String**| The key of the app, as defined in its descriptor. | 
 **propertyKey** | **String**| The key of the property. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut

> OperationMessage restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(cloudid, addonKey, propertyKey, body)

Set app property

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AppPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let addonKey = "addonKey_example"; // String | The key of the app, as defined in its descriptor.
let propertyKey = "propertyKey_example"; // String | The key of the property.
let body = null; // Object | 
apiInstance.restAtlassianConnect1AddonsAddonKeyPropertiesPropertyKeyPut(cloudid, addonKey, propertyKey, body, (error, data, response) => {
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
 **addonKey** | **String**| The key of the app, as defined in its descriptor. | 
 **propertyKey** | **String**| The key of the property. | 
 **body** | **Object**|  | 

### Return type

[**OperationMessage**](OperationMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

