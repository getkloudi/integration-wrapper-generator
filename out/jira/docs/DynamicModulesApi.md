# Jira.DynamicModulesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restAtlassianConnect1AppModuleDynamicDelete**](DynamicModulesApi.md#restAtlassianConnect1AppModuleDynamicDelete) | **DELETE** /rest/atlassian-connect/1/app/module/dynamic | Remove modules
[**restAtlassianConnect1AppModuleDynamicGet**](DynamicModulesApi.md#restAtlassianConnect1AppModuleDynamicGet) | **GET** /rest/atlassian-connect/1/app/module/dynamic | Get modules
[**restAtlassianConnect1AppModuleDynamicPost**](DynamicModulesApi.md#restAtlassianConnect1AppModuleDynamicPost) | **POST** /rest/atlassian-connect/1/app/module/dynamic | Register modules



## restAtlassianConnect1AppModuleDynamicDelete

> restAtlassianConnect1AppModuleDynamicDelete(cloudid, opts)

Remove modules

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.DynamicModulesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'moduleKey': ["null"] // [String] | The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, `moduleKey=dynamic-attachment-entity-property&moduleKey=dynamic-select-field`. Nonexistent keys are ignored.
};
apiInstance.restAtlassianConnect1AppModuleDynamicDelete(cloudid, opts, (error, data, response) => {
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
 **moduleKey** | [**[String]**](String.md)| The key of the module to remove. To include multiple module keys, provide multiple copies of this parameter. For example, &#x60;moduleKey&#x3D;dynamic-attachment-entity-property&amp;moduleKey&#x3D;dynamic-select-field&#x60;. Nonexistent keys are ignored. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAtlassianConnect1AppModuleDynamicGet

> {String: [Object]} restAtlassianConnect1AppModuleDynamicGet(cloudid)

Get modules

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.DynamicModulesApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.restAtlassianConnect1AppModuleDynamicGet(cloudid, (error, data, response) => {
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

**{String: [Object]}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAtlassianConnect1AppModuleDynamicPost

> restAtlassianConnect1AppModuleDynamicPost(cloudid, body)

Register modules

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.DynamicModulesApi();
let cloudid = null; // Object | Cloudi of the project
let body = {key: null}; // {String: [Object]} | 
apiInstance.restAtlassianConnect1AppModuleDynamicPost(cloudid, body, (error, data, response) => {
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
 **body** | [**{String: [Object]}**](Array.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

