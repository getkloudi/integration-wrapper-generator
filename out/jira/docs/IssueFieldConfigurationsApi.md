# Jira.IssueFieldConfigurationsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fieldconfigurationGet**](IssueFieldConfigurationsApi.md#fieldconfigurationGet) | **GET** /fieldconfiguration | Get all field configurations
[**fieldconfigurationIdFieldsGet**](IssueFieldConfigurationsApi.md#fieldconfigurationIdFieldsGet) | **GET** /fieldconfiguration/{id}/fields | Get field configuration items
[**fieldconfigurationschemeGet**](IssueFieldConfigurationsApi.md#fieldconfigurationschemeGet) | **GET** /fieldconfigurationscheme | Get all field configuration schemes
[**fieldconfigurationschemeMappingGet**](IssueFieldConfigurationsApi.md#fieldconfigurationschemeMappingGet) | **GET** /fieldconfigurationscheme/mapping | Get field configuration issue type items
[**fieldconfigurationschemeProjectGet**](IssueFieldConfigurationsApi.md#fieldconfigurationschemeProjectGet) | **GET** /fieldconfigurationscheme/project | Get field configuration schemes for projects
[**fieldconfigurationschemeProjectPut**](IssueFieldConfigurationsApi.md#fieldconfigurationschemeProjectPut) | **PUT** /fieldconfigurationscheme/project | Assign field configuration scheme to project



## fieldconfigurationGet

> PageBeanFieldConfiguration fieldconfigurationGet(cloudid, opts)

Get all field configurations

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'id': [null], // [Number] | The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
  'isDefault': false // Boolean | If *true* returns the default field configuration only.
};
apiInstance.fieldconfigurationGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**[Number]**](Number.md)| The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 
 **isDefault** | **Boolean**| If *true* returns the default field configuration only. | [optional] [default to false]

### Return type

[**PageBeanFieldConfiguration**](PageBeanFieldConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldconfigurationIdFieldsGet

> PageBeanFieldConfigurationItem fieldconfigurationIdFieldsGet(cloudid, id, opts)

Get field configuration items

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the field configuration.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.fieldconfigurationIdFieldsGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the field configuration. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanFieldConfigurationItem**](PageBeanFieldConfigurationItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldconfigurationschemeGet

> PageBeanFieldConfigurationScheme fieldconfigurationschemeGet(cloudid, opts)

Get all field configuration schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'id': [null] // [Number] | The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
};
apiInstance.fieldconfigurationschemeGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **id** | [**[Number]**](Number.md)| The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanFieldConfigurationScheme**](PageBeanFieldConfigurationScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldconfigurationschemeMappingGet

> PageBeanFieldConfigurationIssueTypeItem fieldconfigurationschemeMappingGet(cloudid, opts)

Get field configuration issue type items

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'fieldConfigurationSchemeId': [10020] // [Number] | The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.
};
apiInstance.fieldconfigurationschemeMappingGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **fieldConfigurationSchemeId** | [**[Number]**](Number.md)| The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: &#x60;fieldConfigurationSchemeId&#x3D;10000&amp;fieldConfigurationSchemeId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanFieldConfigurationIssueTypeItem**](PageBeanFieldConfigurationIssueTypeItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldconfigurationschemeProjectGet

> PageBeanFieldConfigurationSchemeProjects fieldconfigurationschemeProjectGet(cloudid, projectId, opts)

Get field configuration schemes for projects

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let projectId = [null]; // [Number] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.fieldconfigurationschemeProjectGet(cloudid, projectId, opts, (error, data, response) => {
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
 **projectId** | [**[Number]**](Number.md)| The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanFieldConfigurationSchemeProjects**](PageBeanFieldConfigurationSchemeProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldconfigurationschemeProjectPut

> Object fieldconfigurationschemeProjectPut(cloudid, body)

Assign field configuration scheme to project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldConfigurationsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.FieldConfigurationSchemeProjectAssociation(); // FieldConfigurationSchemeProjectAssociation | 
apiInstance.fieldconfigurationschemeProjectPut(cloudid, body, (error, data, response) => {
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
 **body** | [**FieldConfigurationSchemeProjectAssociation**](FieldConfigurationSchemeProjectAssociation.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

