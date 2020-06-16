# Jira.WorkflowTransitionPropertiesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowTransitionsTransitionIdPropertiesDelete**](WorkflowTransitionPropertiesApi.md#workflowTransitionsTransitionIdPropertiesDelete) | **DELETE** /workflow/transitions/{transitionId}/properties | Delete workflow transition property
[**workflowTransitionsTransitionIdPropertiesGet**](WorkflowTransitionPropertiesApi.md#workflowTransitionsTransitionIdPropertiesGet) | **GET** /workflow/transitions/{transitionId}/properties | Get workflow transition properties
[**workflowTransitionsTransitionIdPropertiesPost**](WorkflowTransitionPropertiesApi.md#workflowTransitionsTransitionIdPropertiesPost) | **POST** /workflow/transitions/{transitionId}/properties | Create workflow transition property
[**workflowTransitionsTransitionIdPropertiesPut**](WorkflowTransitionPropertiesApi.md#workflowTransitionsTransitionIdPropertiesPut) | **PUT** /workflow/transitions/{transitionId}/properties | Update workflow transition property



## workflowTransitionsTransitionIdPropertiesDelete

> workflowTransitionsTransitionIdPropertiesDelete(cloudid, transitionId, key, workflowName, opts)

Delete workflow transition property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let transitionId = 789; // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let key = "key_example"; // String | The name of the transition property to delete, also known as the name of the property.
let workflowName = "workflowName_example"; // String | The name of the workflow that the transition belongs to.
let opts = {
  'workflowMode': "workflowMode_example" // String | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
};
apiInstance.workflowTransitionsTransitionIdPropertiesDelete(cloudid, transitionId, key, workflowName, opts, (error, data, response) => {
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
 **transitionId** | **Number**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **String**| The name of the transition property to delete, also known as the name of the property. | 
 **workflowName** | **String**| The name of the workflow that the transition belongs to. | 
 **workflowMode** | **String**| The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## workflowTransitionsTransitionIdPropertiesGet

> WorkflowTransitionProperty workflowTransitionsTransitionIdPropertiesGet(cloudid, transitionId, workflowName, opts)

Get workflow transition properties

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let transitionId = 789; // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition.
let workflowName = "workflowName_example"; // String | The name of the workflow that the transition belongs to.
let opts = {
  'includeReservedKeys': false, // Boolean | Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*.
  'key': "key_example", // String | The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned.
  'workflowMode': "'live'" // String | The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows.
};
apiInstance.workflowTransitionsTransitionIdPropertiesGet(cloudid, transitionId, workflowName, opts, (error, data, response) => {
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
 **transitionId** | **Number**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira administration console. The ID is shown next to the transition. | 
 **workflowName** | **String**| The name of the workflow that the transition belongs to. | 
 **includeReservedKeys** | **Boolean**| Some properties with keys that have the *jira.* prefix are reserved, which means they are not editable. To include these properties in the results, set this parameter to *true*. | [optional] [default to false]
 **key** | **String**| The key of the property being returned, also known as the name of the property. If this parameter is not specified, all properties on the transition are returned. | [optional] 
 **workflowMode** | **String**| The workflow status. Set to *live* for active and inactive workflows, or *draft* for draft workflows. | [optional] [default to &#39;live&#39;]

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowTransitionsTransitionIdPropertiesPost

> WorkflowTransitionProperty workflowTransitionsTransitionIdPropertiesPost(cloudid, transitionId, key, workflowName, body, opts)

Create workflow transition property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let transitionId = 789; // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let key = "key_example"; // String | The key of the property being added, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
let workflowName = "workflowName_example"; // String | The name of the workflow that the transition belongs to.
let body = new Jira.WorkflowTransitionProperty(); // WorkflowTransitionProperty | 
let opts = {
  'workflowMode': "'live'" // String | The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited.
};
apiInstance.workflowTransitionsTransitionIdPropertiesPost(cloudid, transitionId, key, workflowName, body, opts, (error, data, response) => {
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
 **transitionId** | **Number**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **String**| The key of the property being added, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | 
 **workflowName** | **String**| The name of the workflow that the transition belongs to. | 
 **body** | [**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)|  | 
 **workflowMode** | **String**| The workflow status. Set to *live* for inactive workflows or *draft* for draft workflows. Active workflows cannot be edited. | [optional] [default to &#39;live&#39;]

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## workflowTransitionsTransitionIdPropertiesPut

> WorkflowTransitionProperty workflowTransitionsTransitionIdPropertiesPut(cloudid, transitionId, key, workflowName, body, opts)

Update workflow transition property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionPropertiesApi();
let cloudid = null; // Object | Cloudi of the project
let transitionId = 789; // Number | The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition.
let key = "key_example"; // String | The key of the property being updated, also known as the name of the property. Set this to the same value as the `key` defined in the request body.
let workflowName = "workflowName_example"; // String | The name of the workflow that the transition belongs to.
let body = new Jira.WorkflowTransitionProperty(); // WorkflowTransitionProperty | 
let opts = {
  'workflowMode': "workflowMode_example" // String | The workflow status. Set to `live` for inactive workflows or `draft` for draft workflows. Active workflows cannot be edited.
};
apiInstance.workflowTransitionsTransitionIdPropertiesPut(cloudid, transitionId, key, workflowName, body, opts, (error, data, response) => {
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
 **transitionId** | **Number**| The ID of the transition. To get the ID, view the workflow in text mode in the Jira admin settings. The ID is shown next to the transition. | 
 **key** | **String**| The key of the property being updated, also known as the name of the property. Set this to the same value as the &#x60;key&#x60; defined in the request body. | 
 **workflowName** | **String**| The name of the workflow that the transition belongs to. | 
 **body** | [**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)|  | 
 **workflowMode** | **String**| The workflow status. Set to &#x60;live&#x60; for inactive workflows or &#x60;draft&#x60; for draft workflows. Active workflows cannot be edited. | [optional] 

### Return type

[**WorkflowTransitionProperty**](WorkflowTransitionProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

