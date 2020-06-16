# Jira.WorkflowTransitionRulesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflowRuleConfigGet**](WorkflowTransitionRulesApi.md#workflowRuleConfigGet) | **GET** /workflow/rule/config | Get workflow transition rule configurations
[**workflowRuleConfigPut**](WorkflowTransitionRulesApi.md#workflowRuleConfigPut) | **PUT** /workflow/rule/config | Update workflow transition rule configurations



## workflowRuleConfigGet

> PageBeanWorkflowTransitionRules workflowRuleConfigGet(cloudid, types, opts)

Get workflow transition rule configurations

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionRulesApi();
let cloudid = null; // Object | Cloudi of the project
let types = ["null"]; // [String] | The types of the transition rules to return.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 10, // Number | The maximum number of items to return per page.
  'keys': ["null"], // [String] | The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `transition`, which, for each rule, returns information about the transition the rule is assigned to.
};
apiInstance.workflowRuleConfigGet(cloudid, types, opts, (error, data, response) => {
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
 **types** | [**[String]**](String.md)| The types of the transition rules to return. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 10]
 **keys** | [**[String]**](String.md)| The transition rule class keys, as defined in the Connect app descriptor, of the transition rules to return. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;transition&#x60;, which, for each rule, returns information about the transition the rule is assigned to. | [optional] 

### Return type

[**PageBeanWorkflowTransitionRules**](PageBeanWorkflowTransitionRules.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## workflowRuleConfigPut

> WorkflowTransitionRulesUpdateErrors workflowRuleConfigPut(cloudid, body)

Update workflow transition rule configurations

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WorkflowTransitionRulesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.WorkflowTransitionRulesUpdate(); // WorkflowTransitionRulesUpdate | 
apiInstance.workflowRuleConfigPut(cloudid, body, (error, data, response) => {
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
 **body** | [**WorkflowTransitionRulesUpdate**](WorkflowTransitionRulesUpdate.md)|  | 

### Return type

[**WorkflowTransitionRulesUpdateErrors**](WorkflowTransitionRulesUpdateErrors.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

