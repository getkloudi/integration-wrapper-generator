# Jira.ProjectComponentsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**componentIdDelete**](ProjectComponentsApi.md#componentIdDelete) | **DELETE** /component/{id} | Delete component
[**componentIdGet**](ProjectComponentsApi.md#componentIdGet) | **GET** /component/{id} | Get component
[**componentIdPut**](ProjectComponentsApi.md#componentIdPut) | **PUT** /component/{id} | Update component
[**componentIdRelatedIssueCountsGet**](ProjectComponentsApi.md#componentIdRelatedIssueCountsGet) | **GET** /component/{id}/relatedIssueCounts | Get component issues count
[**componentPost**](ProjectComponentsApi.md#componentPost) | **POST** /component | Create component
[**projectProjectIdOrKeyComponentGet**](ProjectComponentsApi.md#projectProjectIdOrKeyComponentGet) | **GET** /project/{projectIdOrKey}/component | Get project components paginated
[**projectProjectIdOrKeyComponentsGet**](ProjectComponentsApi.md#projectProjectIdOrKeyComponentsGet) | **GET** /project/{projectIdOrKey}/components | Get project components



## componentIdDelete

> componentIdDelete(cloudid, id, opts)

Delete component

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the component.
let opts = {
  'moveIssuesTo': "moveIssuesTo_example" // String | The ID of the component to replace the deleted component. If this value is null no replacement is made.
};
apiInstance.componentIdDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the component. | 
 **moveIssuesTo** | **String**| The ID of the component to replace the deleted component. If this value is null no replacement is made. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## componentIdGet

> Component componentIdGet(cloudid, id)

Get component

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the component.
apiInstance.componentIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the component. | 

### Return type

[**Component**](Component.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## componentIdPut

> Component componentIdPut(cloudid, id, body)

Update component

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the component.
let body = new Jira.Component(); // Component | 
apiInstance.componentIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the component. | 
 **body** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## componentIdRelatedIssueCountsGet

> ComponentIssuesCount componentIdRelatedIssueCountsGet(cloudid, id)

Get component issues count

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the component.
apiInstance.componentIdRelatedIssueCountsGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the component. | 

### Return type

[**ComponentIssuesCount**](ComponentIssuesCount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## componentPost

> Component componentPost(cloudid, body)

Create component

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.Component(); // Component | 
apiInstance.componentPost(cloudid, body, (error, data, response) => {
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
 **body** | [**Component**](Component.md)|  | 

### Return type

[**Component**](Component.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectIdOrKeyComponentGet

> PageBeanComponentWithIssueCount projectProjectIdOrKeyComponentGet(cloudid, projectIdOrKey, opts)

Get project components paginated

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by the component description.  *  `issueCount` Sorts by the count of issues associated with the component.  *  `lead` Sorts by the user key of the component's project lead.  *  `name` Sorts by component name.
  'query': "query_example" // String | Filter the results using a literal string. Components with a matching `name` or `description` are returned (case insensitive).
};
apiInstance.projectProjectIdOrKeyComponentGet(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **orderBy** | **String**| [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by the component description.  *  &#x60;issueCount&#x60; Sorts by the count of issues associated with the component.  *  &#x60;lead&#x60; Sorts by the user key of the component&#39;s project lead.  *  &#x60;name&#x60; Sorts by component name. | [optional] 
 **query** | **String**| Filter the results using a literal string. Components with a matching &#x60;name&#x60; or &#x60;description&#x60; are returned (case insensitive). | [optional] 

### Return type

[**PageBeanComponentWithIssueCount**](PageBeanComponentWithIssueCount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyComponentsGet

> [Component] projectProjectIdOrKeyComponentsGet(cloudid, projectIdOrKey)

Get project components

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectComponentsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectIdOrKeyComponentsGet(cloudid, projectIdOrKey, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 

### Return type

[**[Component]**](Component.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

