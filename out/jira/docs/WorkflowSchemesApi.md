# Jira.WorkflowSchemesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowschemeGet**](WorkflowSchemesApi.md#workflowschemeGet) | **GET** /workflowscheme | Get all workflow schemes
[**workflowschemeIdDefaultDelete**](WorkflowSchemesApi.md#workflowschemeIdDefaultDelete) | **DELETE** /workflowscheme/{id}/default | Delete default workflow
[**workflowschemeIdDefaultGet**](WorkflowSchemesApi.md#workflowschemeIdDefaultGet) | **GET** /workflowscheme/{id}/default | Get default workflow
[**workflowschemeIdDefaultPut**](WorkflowSchemesApi.md#workflowschemeIdDefaultPut) | **PUT** /workflowscheme/{id}/default | Update default workflow
[**workflowschemeIdDelete**](WorkflowSchemesApi.md#workflowschemeIdDelete) | **DELETE** /workflowscheme/{id} | Delete workflow scheme
[**workflowschemeIdGet**](WorkflowSchemesApi.md#workflowschemeIdGet) | **GET** /workflowscheme/{id} | Get workflow scheme
[**workflowschemeIdIssuetypeIssueTypeDelete**](WorkflowSchemesApi.md#workflowschemeIdIssuetypeIssueTypeDelete) | **DELETE** /workflowscheme/{id}/issuetype/{issueType} | Delete workflow for issue type in workflow scheme
[**workflowschemeIdIssuetypeIssueTypeGet**](WorkflowSchemesApi.md#workflowschemeIdIssuetypeIssueTypeGet) | **GET** /workflowscheme/{id}/issuetype/{issueType} | Get workflow for issue type in workflow scheme
[**workflowschemeIdIssuetypeIssueTypePut**](WorkflowSchemesApi.md#workflowschemeIdIssuetypeIssueTypePut) | **PUT** /workflowscheme/{id}/issuetype/{issueType} | Set workflow for issue type in workflow scheme
[**workflowschemeIdPut**](WorkflowSchemesApi.md#workflowschemeIdPut) | **PUT** /workflowscheme/{id} | Update workflow scheme
[**workflowschemeIdWorkflowDelete**](WorkflowSchemesApi.md#workflowschemeIdWorkflowDelete) | **DELETE** /workflowscheme/{id}/workflow | Delete issue types for workflow in workflow scheme
[**workflowschemeIdWorkflowGet**](WorkflowSchemesApi.md#workflowschemeIdWorkflowGet) | **GET** /workflowscheme/{id}/workflow | Get issue types for workflows in workflow scheme
[**workflowschemeIdWorkflowPut**](WorkflowSchemesApi.md#workflowschemeIdWorkflowPut) | **PUT** /workflowscheme/{id}/workflow | Set issue types for workflow in workflow scheme
[**workflowschemePost**](WorkflowSchemesApi.md#workflowschemePost) | **POST** /workflowscheme | Create workflow scheme



## workflowschemeGet

> PageBeanWorkflowScheme workflowschemeGet(cloudid, opts)

Get all workflow schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.workflowschemeGet(cloudid, opts, (error, data, response) => {
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

### Return type

[**PageBeanWorkflowScheme**](PageBeanWorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDefaultDelete

> WorkflowScheme workflowschemeIdDefaultDelete(cloudid, id, opts)

Delete default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let opts = {
  'updateDraftIfNeeded': true // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
};
apiInstance.workflowschemeIdDefaultDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **updateDraftIfNeeded** | **Boolean**| Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [optional] 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDefaultGet

> DefaultWorkflow workflowschemeIdDefaultGet(cloudid, id, opts)

Get default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let opts = {
  'returnDraftIfExists': false // Boolean | Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.
};
apiInstance.workflowschemeIdDefaultGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **returnDraftIfExists** | **Boolean**| Set to &#x60;true&#x60; to return the default workflow for the workflow scheme&#39;s draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned. | [optional] [default to false]

### Return type

[**DefaultWorkflow**](DefaultWorkflow.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDefaultPut

> WorkflowScheme workflowschemeIdDefaultPut(cloudid, id, body)

Update default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let body = new Jira.DefaultWorkflow(); // DefaultWorkflow | The new default workflow.
apiInstance.workflowschemeIdDefaultPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **body** | [**DefaultWorkflow**](DefaultWorkflow.md)| The new default workflow. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdDelete

> workflowschemeIdDelete(cloudid, id)

Delete workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
apiInstance.workflowschemeIdDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## workflowschemeIdGet

> WorkflowScheme workflowschemeIdGet(cloudid, id, opts)

Get workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
let opts = {
  'returnDraftIfExists': false // Boolean | Returns the workflow scheme's draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned.
};
apiInstance.workflowschemeIdGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | 
 **returnDraftIfExists** | **Boolean**| Returns the workflow scheme&#39;s draft rather than scheme itself, if set to true. If the workflow scheme does not have a draft, then the workflow scheme is returned. | [optional] [default to false]

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdIssuetypeIssueTypeDelete

> WorkflowScheme workflowschemeIdIssuetypeIssueTypeDelete(cloudid, id, issueType, opts)

Delete workflow for issue type in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let issueType = "issueType_example"; // String | The ID of the issue type.
let opts = {
  'updateDraftIfNeeded': true // Boolean | Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`.
};
apiInstance.workflowschemeIdIssuetypeIssueTypeDelete(cloudid, id, issueType, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **issueType** | **String**| The ID of the issue type. | 
 **updateDraftIfNeeded** | **Boolean**| Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [optional] 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdIssuetypeIssueTypeGet

> IssueTypeWorkflowMapping workflowschemeIdIssuetypeIssueTypeGet(cloudid, id, issueType, opts)

Get workflow for issue type in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let issueType = "issueType_example"; // String | The ID of the issue type.
let opts = {
  'returnDraftIfExists': false // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
};
apiInstance.workflowschemeIdIssuetypeIssueTypeGet(cloudid, id, issueType, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **issueType** | **String**| The ID of the issue type. | 
 **returnDraftIfExists** | **Boolean**| Returns the mapping from the workflow scheme&#39;s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. | [optional] [default to false]

### Return type

[**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdIssuetypeIssueTypePut

> WorkflowScheme workflowschemeIdIssuetypeIssueTypePut(cloudid, id, issueType, body)

Set workflow for issue type in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let issueType = "issueType_example"; // String | The ID of the issue type.
let body = new Jira.IssueTypeWorkflowMapping(); // IssueTypeWorkflowMapping | The issue type-project mapping.
apiInstance.workflowschemeIdIssuetypeIssueTypePut(cloudid, id, issueType, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **issueType** | **String**| The ID of the issue type. | 
 **body** | [**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)| The issue type-project mapping. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdPut

> WorkflowScheme workflowschemeIdPut(cloudid, id, body)

Update workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as `schemeId`. For example, *schemeId=10301*.
let body = new Jira.WorkflowScheme(); // WorkflowScheme | 
apiInstance.workflowschemeIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. Find this ID by editing the desired workflow scheme in Jira. The ID is shown in the URL as &#x60;schemeId&#x60;. For example, *schemeId&#x3D;10301*. | 
 **body** | [**WorkflowScheme**](WorkflowScheme.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdWorkflowDelete

> workflowschemeIdWorkflowDelete(cloudid, id, workflowName, opts)

Delete issue types for workflow in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let workflowName = "workflowName_example"; // String | The name of the workflow.
let opts = {
  'updateDraftIfNeeded': true // Boolean | Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to `false`.
};
apiInstance.workflowschemeIdWorkflowDelete(cloudid, id, workflowName, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **workflowName** | **String**| The name of the workflow. | 
 **updateDraftIfNeeded** | **Boolean**| Set to true to create or update the draft of a workflow scheme and delete the mapping from the draft, when the workflow scheme cannot be edited. Defaults to &#x60;false&#x60;. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## workflowschemeIdWorkflowGet

> IssueTypesWorkflowMapping workflowschemeIdWorkflowGet(cloudid, id, opts)

Get issue types for workflows in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let opts = {
  'workflowName': "workflowName_example", // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
  'returnDraftIfExists': false // Boolean | Returns the mapping from the workflow scheme's draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned.
};
apiInstance.workflowschemeIdWorkflowGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **workflowName** | **String**| The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. | [optional] 
 **returnDraftIfExists** | **Boolean**| Returns the mapping from the workflow scheme&#39;s draft rather than the workflow scheme, if set to true. If no draft exists, the mapping from the workflow scheme is returned. | [optional] [default to false]

### Return type

[**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdWorkflowPut

> WorkflowScheme workflowschemeIdWorkflowPut(cloudid, id, workflowName, body)

Set issue types for workflow in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme.
let workflowName = "workflowName_example"; // String | The name of the workflow.
let body = new Jira.IssueTypesWorkflowMapping(); // IssueTypesWorkflowMapping | 
apiInstance.workflowschemeIdWorkflowPut(cloudid, id, workflowName, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme. | 
 **workflowName** | **String**| The name of the workflow. | 
 **body** | [**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemePost

> WorkflowScheme workflowschemePost(cloudid, body)

Create workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.WorkflowScheme(); // WorkflowScheme | 
apiInstance.workflowschemePost(cloudid, body, (error, data, response) => {
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
 **body** | [**WorkflowScheme**](WorkflowScheme.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

