# Jira.WorkflowSchemeProjectAssociationsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowschemeProjectGet**](WorkflowSchemeProjectAssociationsApi.md#workflowschemeProjectGet) | **GET** /workflowscheme/project | Get workflow scheme project associations



## workflowschemeProjectGet

> ContainerOfWorkflowSchemeAssociations workflowschemeProjectGet(cloudid, projectId)

Get workflow scheme project associations

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeProjectAssociationsApi();
let cloudid = null; // Object | Cloudi of the project
let projectId = [10010]; // [Number] | The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, `projectId=10000&projectId=10001`.
apiInstance.workflowschemeProjectGet(cloudid, projectId, (error, data, response) => {
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
 **projectId** | [**[Number]**](Number.md)| The ID of a project to return the workflow schemes for. To include multiple projects, provide an ampersand-Jim: oneseparated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. | 

### Return type

[**ContainerOfWorkflowSchemeAssociations**](ContainerOfWorkflowSchemeAssociations.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

