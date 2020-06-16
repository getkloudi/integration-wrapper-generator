# Jira.IssueTypeSchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuetypeschemeGet**](IssueTypeSchemesApi.md#issuetypeschemeGet) | **GET** /issuetypescheme | Get all issue type schemes
[**issuetypeschemeMappingGet**](IssueTypeSchemesApi.md#issuetypeschemeMappingGet) | **GET** /issuetypescheme/mapping | Get issue type scheme items
[**issuetypeschemeProjectGet**](IssueTypeSchemesApi.md#issuetypeschemeProjectGet) | **GET** /issuetypescheme/project | Get issue type schemes for projects
[**issuetypeschemeProjectPut**](IssueTypeSchemesApi.md#issuetypeschemeProjectPut) | **PUT** /issuetypescheme/project | Assign issue type scheme to project



## issuetypeschemeGet

> PageBeanIssueTypeScheme issuetypeschemeGet(cloudid, opts)

Get all issue type schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'id': [null] // [Number] | The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
};
apiInstance.issuetypeschemeGet(cloudid, opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeScheme**](PageBeanIssueTypeScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeschemeMappingGet

> PageBeanIssueTypeSchemeMapping issuetypeschemeMappingGet(cloudid, opts)

Get issue type scheme items

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'issueTypeSchemeId': [null] // [Number] | The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.
};
apiInstance.issuetypeschemeMappingGet(cloudid, opts, (error, data, response) => {
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
 **issueTypeSchemeId** | [**[Number]**](Number.md)| The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;issueTypeSchemeId&#x3D;10000&amp;issueTypeSchemeId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeSchemeMapping**](PageBeanIssueTypeSchemeMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeschemeProjectGet

> PageBeanIssueTypeSchemeProjects issuetypeschemeProjectGet(cloudid, projectId, opts)

Get issue type schemes for projects

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let projectId = [null]; // [Number] | The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.issuetypeschemeProjectGet(cloudid, projectId, opts, (error, data, response) => {
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
 **projectId** | [**[Number]**](Number.md)| The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanIssueTypeSchemeProjects**](PageBeanIssueTypeSchemeProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypeschemeProjectPut

> Object issuetypeschemeProjectPut(cloudid, body)

Assign issue type scheme to project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueTypeSchemeProjectAssociation(); // IssueTypeSchemeProjectAssociation | 
apiInstance.issuetypeschemeProjectPut(cloudid, body, (error, data, response) => {
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
 **body** | [**IssueTypeSchemeProjectAssociation**](IssueTypeSchemeProjectAssociation.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

