# Jira.IssueTypeScreenSchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuetypescreenschemeGet**](IssueTypeScreenSchemesApi.md#issuetypescreenschemeGet) | **GET** /issuetypescreenscheme | Get issue type screen schemes
[**issuetypescreenschemeMappingGet**](IssueTypeScreenSchemesApi.md#issuetypescreenschemeMappingGet) | **GET** /issuetypescreenscheme/mapping | Get issue type screen scheme items
[**issuetypescreenschemeProjectGet**](IssueTypeScreenSchemesApi.md#issuetypescreenschemeProjectGet) | **GET** /issuetypescreenscheme/project | Get issue type screen schemes for projects
[**issuetypescreenschemeProjectPut**](IssueTypeScreenSchemesApi.md#issuetypescreenschemeProjectPut) | **PUT** /issuetypescreenscheme/project | Assign issue type screen scheme to project



## issuetypescreenschemeGet

> PageBeanIssueTypeScreenScheme issuetypescreenschemeGet(cloudid, opts)

Get issue type screen schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeScreenSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'id': [null] // [Number] | The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
};
apiInstance.issuetypescreenschemeGet(cloudid, opts, (error, data, response) => {
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
 **id** | [**[Number]**](Number.md)| The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeScreenScheme**](PageBeanIssueTypeScreenScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypescreenschemeMappingGet

> PageBeanIssueTypeScreenSchemeItem issuetypescreenschemeMappingGet(cloudid, opts)

Get issue type screen scheme items

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeScreenSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'issueTypeScreenSchemeId': [null] // [Number] | The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.
};
apiInstance.issuetypescreenschemeMappingGet(cloudid, opts, (error, data, response) => {
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
 **issueTypeScreenSchemeId** | [**[Number]**](Number.md)| The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: &#x60;issueTypeScreenSchemeId&#x3D;10000&amp;issueTypeScreenSchemeId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeScreenSchemeItem**](PageBeanIssueTypeScreenSchemeItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypescreenschemeProjectGet

> PageBeanIssueTypeScreenSchemesProjects issuetypescreenschemeProjectGet(cloudid, opts)

Get issue type screen schemes for projects

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeScreenSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'projectId': [null] // [Number] | The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
};
apiInstance.issuetypescreenschemeProjectGet(cloudid, opts, (error, data, response) => {
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
 **projectId** | [**[Number]**](Number.md)| The list of project IDs. To include multiple projects, separate IDs with ampersand: &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanIssueTypeScreenSchemesProjects**](PageBeanIssueTypeScreenSchemesProjects.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issuetypescreenschemeProjectPut

> Object issuetypescreenschemeProjectPut(cloudid, body)

Assign issue type screen scheme to project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueTypeScreenSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueTypeScreenSchemeProjectAssociation(); // IssueTypeScreenSchemeProjectAssociation | 
apiInstance.issuetypescreenschemeProjectPut(cloudid, body, (error, data, response) => {
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
 **body** | [**IssueTypeScreenSchemeProjectAssociation**](IssueTypeScreenSchemeProjectAssociation.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

