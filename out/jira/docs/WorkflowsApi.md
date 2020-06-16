# Jira.WorkflowsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowGet**](WorkflowsApi.md#workflowGet) | **GET** /workflow | Get all workflows
[**workflowSearchGet**](WorkflowsApi.md#workflowSearchGet) | **GET** /workflow/search | Get workflows paginated



## workflowGet

> [DeprecatedWorkflow] workflowGet(cloudid, opts)

Get all workflows

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'workflowName': "workflowName_example" // String | The name of the workflow to be returned. Only one workflow can be specified.
};
apiInstance.workflowGet(cloudid, opts, (error, data, response) => {
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
 **workflowName** | **String**| The name of the workflow to be returned. Only one workflow can be specified. | [optional] 

### Return type

[**[DeprecatedWorkflow]**](DeprecatedWorkflow.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowSearchGet

> PageBeanWorkflow workflowSearchGet(cloudid, opts)

Get workflows paginated

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'workflowName': ["null"], // [String] | The name of a workflow to return.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `transitions` For each workflow, returns information about the transitions inside the workflow.  *  `transitions.rules` For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.  *  `statuses` For each workflow, returns information about the statuses inside the workflow.  *  `statuses.properties` For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested.
};
apiInstance.workflowSearchGet(cloudid, opts, (error, data, response) => {
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
 **workflowName** | [**[String]**](String.md)| The name of a workflow to return. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;transitions&#x60; For each workflow, returns information about the transitions inside the workflow.  *  &#x60;transitions.rules&#x60; For each workflow transition, returns information about its rules. Transitions are included automatically if this expand is requested.  *  &#x60;statuses&#x60; For each workflow, returns information about the statuses inside the workflow.  *  &#x60;statuses.properties&#x60; For each workflow status, returns information about its properties. Statuses are included automatically if this expand is requested. | [optional] 

### Return type

[**PageBeanWorkflow**](PageBeanWorkflow.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

