# Jira.WorkflowSchemeDraftsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowschemeIdCreatedraftPost**](WorkflowSchemeDraftsApi.md#workflowschemeIdCreatedraftPost) | **POST** /workflowscheme/{id}/createdraft | Create draft workflow scheme
[**workflowschemeIdDraftDefaultDelete**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftDefaultDelete) | **DELETE** /workflowscheme/{id}/draft/default | Delete draft default workflow
[**workflowschemeIdDraftDefaultGet**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftDefaultGet) | **GET** /workflowscheme/{id}/draft/default | Get draft default workflow
[**workflowschemeIdDraftDefaultPut**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftDefaultPut) | **PUT** /workflowscheme/{id}/draft/default | Update draft default workflow
[**workflowschemeIdDraftDelete**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftDelete) | **DELETE** /workflowscheme/{id}/draft | Delete draft workflow scheme
[**workflowschemeIdDraftGet**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftGet) | **GET** /workflowscheme/{id}/draft | Get draft workflow scheme
[**workflowschemeIdDraftIssuetypeIssueTypeDelete**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftIssuetypeIssueTypeDelete) | **DELETE** /workflowscheme/{id}/draft/issuetype/{issueType} | Delete workflow for issue type in draft workflow scheme
[**workflowschemeIdDraftIssuetypeIssueTypeGet**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftIssuetypeIssueTypeGet) | **GET** /workflowscheme/{id}/draft/issuetype/{issueType} | Get workflow for issue type in draft workflow scheme
[**workflowschemeIdDraftIssuetypeIssueTypePut**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftIssuetypeIssueTypePut) | **PUT** /workflowscheme/{id}/draft/issuetype/{issueType} | Set workflow for issue type in draft workflow scheme
[**workflowschemeIdDraftPut**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftPut) | **PUT** /workflowscheme/{id}/draft | Update draft workflow scheme
[**workflowschemeIdDraftWorkflowDelete**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftWorkflowDelete) | **DELETE** /workflowscheme/{id}/draft/workflow | Delete issue types for workflow in draft workflow scheme
[**workflowschemeIdDraftWorkflowGet**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftWorkflowGet) | **GET** /workflowscheme/{id}/draft/workflow | Get issue types for workflows in draft workflow scheme
[**workflowschemeIdDraftWorkflowPut**](WorkflowSchemeDraftsApi.md#workflowschemeIdDraftWorkflowPut) | **PUT** /workflowscheme/{id}/draft/workflow | Set issue types for workflow in workflow scheme



## workflowschemeIdCreatedraftPost

> WorkflowScheme workflowschemeIdCreatedraftPost(cloudid, id)

Create draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the active workflow scheme that the draft is created from.
apiInstance.workflowschemeIdCreatedraftPost(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the active workflow scheme that the draft is created from. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftDefaultDelete

> WorkflowScheme workflowschemeIdDraftDefaultDelete(cloudid, id)

Delete draft default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
apiInstance.workflowschemeIdDraftDefaultDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftDefaultGet

> DefaultWorkflow workflowschemeIdDraftDefaultGet(cloudid, id)

Get draft default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
apiInstance.workflowschemeIdDraftDefaultGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 

### Return type

[**DefaultWorkflow**](DefaultWorkflow.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftDefaultPut

> WorkflowScheme workflowschemeIdDraftDefaultPut(cloudid, id, body)

Update draft default workflow

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let body = new Jira.DefaultWorkflow(); // DefaultWorkflow | The object for the new default workflow.
apiInstance.workflowschemeIdDraftDefaultPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **body** | [**DefaultWorkflow**](DefaultWorkflow.md)| The object for the new default workflow. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdDraftDelete

> workflowschemeIdDraftDelete(cloudid, id)

Delete draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the active workflow scheme that the draft was created from.
apiInstance.workflowschemeIdDraftDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the active workflow scheme that the draft was created from. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## workflowschemeIdDraftGet

> WorkflowScheme workflowschemeIdDraftGet(cloudid, id)

Get draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the active workflow scheme that the draft was created from.
apiInstance.workflowschemeIdDraftGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the active workflow scheme that the draft was created from. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftIssuetypeIssueTypeDelete

> WorkflowScheme workflowschemeIdDraftIssuetypeIssueTypeDelete(cloudid, id, issueType)

Delete workflow for issue type in draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let issueType = "issueType_example"; // String | The ID of the issue type.
apiInstance.workflowschemeIdDraftIssuetypeIssueTypeDelete(cloudid, id, issueType, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **issueType** | **String**| The ID of the issue type. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftIssuetypeIssueTypeGet

> IssueTypeWorkflowMapping workflowschemeIdDraftIssuetypeIssueTypeGet(cloudid, id, issueType)

Get workflow for issue type in draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let issueType = "issueType_example"; // String | The ID of the issue type.
apiInstance.workflowschemeIdDraftIssuetypeIssueTypeGet(cloudid, id, issueType, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **issueType** | **String**| The ID of the issue type. | 

### Return type

[**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftIssuetypeIssueTypePut

> WorkflowScheme workflowschemeIdDraftIssuetypeIssueTypePut(cloudid, id, issueType, body)

Set workflow for issue type in draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let issueType = "issueType_example"; // String | The ID of the issue type.
let body = new Jira.IssueTypeWorkflowMapping(); // IssueTypeWorkflowMapping | The issue type-project mapping.
apiInstance.workflowschemeIdDraftIssuetypeIssueTypePut(cloudid, id, issueType, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **issueType** | **String**| The ID of the issue type. | 
 **body** | [**IssueTypeWorkflowMapping**](IssueTypeWorkflowMapping.md)| The issue type-project mapping. | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdDraftPut

> WorkflowScheme workflowschemeIdDraftPut(cloudid, id, body)

Update draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the active workflow scheme that the draft was created from.
let body = new Jira.WorkflowScheme(); // WorkflowScheme | 
apiInstance.workflowschemeIdDraftPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the active workflow scheme that the draft was created from. | 
 **body** | [**WorkflowScheme**](WorkflowScheme.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowschemeIdDraftWorkflowDelete

> workflowschemeIdDraftWorkflowDelete(cloudid, id, workflowName)

Delete issue types for workflow in draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let workflowName = "workflowName_example"; // String | The name of the workflow.
apiInstance.workflowschemeIdDraftWorkflowDelete(cloudid, id, workflowName, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **workflowName** | **String**| The name of the workflow. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## workflowschemeIdDraftWorkflowGet

> IssueTypesWorkflowMapping workflowschemeIdDraftWorkflowGet(cloudid, id, opts)

Get issue types for workflows in draft workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let opts = {
  'workflowName': "workflowName_example" // String | The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow.
};
apiInstance.workflowschemeIdDraftWorkflowGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **workflowName** | **String**| The name of a workflow in the scheme. Limits the results to the workflow-issue type mapping for the specified workflow. | [optional] 

### Return type

[**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowschemeIdDraftWorkflowPut

> WorkflowScheme workflowschemeIdDraftWorkflowPut(cloudid, id, workflowName, body)

Set issue types for workflow in workflow scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowSchemeDraftsApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the workflow scheme that the draft belongs to.
let workflowName = "workflowName_example"; // String | The name of the workflow.
let body = new Jira.IssueTypesWorkflowMapping(); // IssueTypesWorkflowMapping | 
apiInstance.workflowschemeIdDraftWorkflowPut(cloudid, id, workflowName, body, (error, data, response) => {
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
 **id** | **Number**| The ID of the workflow scheme that the draft belongs to. | 
 **workflowName** | **String**| The name of the workflow. | 
 **body** | [**IssueTypesWorkflowMapping**](IssueTypesWorkflowMapping.md)|  | 

### Return type

[**WorkflowScheme**](WorkflowScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

