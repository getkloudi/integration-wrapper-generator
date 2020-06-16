# Jira.JiraExpressionsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expressionAnalysePost**](JiraExpressionsApi.md#expressionAnalysePost) | **POST** /expression/analyse | Analyse Jira expression
[**expressionEvalPost**](JiraExpressionsApi.md#expressionEvalPost) | **POST** /expression/eval | Evaluate Jira expression



## expressionAnalysePost

> JiraExpressionsAnalysis expressionAnalysePost(cloudid, body)

Analyse Jira expression

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JiraExpressionsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.JiraExpressionForAnalysis(); // JiraExpressionForAnalysis | The Jira expressions to analyse.
apiInstance.expressionAnalysePost(cloudid, body, (error, data, response) => {
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
 **body** | [**JiraExpressionForAnalysis**](JiraExpressionForAnalysis.md)| The Jira expressions to analyse. | 

### Return type

[**JiraExpressionsAnalysis**](JiraExpressionsAnalysis.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## expressionEvalPost

> JiraExpressionResult expressionEvalPost(cloudid, body, opts)

Evaluate Jira expression

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.JiraExpressionsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.JiraExpressionEvalRequestBean(); // JiraExpressionEvalRequestBean | The Jira expression and the evaluation context.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.
};
apiInstance.expressionEvalPost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**JiraExpressionEvalRequestBean**](JiraExpressionEvalRequestBean.md)| The Jira expression and the evaluation context. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;meta.complexity&#x60; that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions. | [optional] 

### Return type

[**JiraExpressionResult**](JiraExpressionResult.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

