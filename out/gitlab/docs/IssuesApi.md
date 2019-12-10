# Gitlab.IssuesApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV3Issues**](IssuesApi.md#getV3Issues) | **GET** /v3/issues | Get currently authenticated user&#39;s issues



## getV3Issues

> Issue getV3Issues(opts)

Get currently authenticated user&#39;s issues

Get currently authenticated user&#39;s issues

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.IssuesApi();
let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3Issues(opts, (error, data, response) => {
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
 **state** | **String**| Return opened, closed, or all issues | [optional] [default to &#39;all&#39;]
 **labels** | **String**| Comma-separated list of label names | [optional] 
 **milestone** | **String**| Return issues for a specific milestone | [optional] 
 **orderBy** | **String**| Return issues ordered by &#x60;created_at&#x60; or &#x60;updated_at&#x60; fields. | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return issues sorted in &#x60;asc&#x60; or &#x60;desc&#x60; order. | [optional] [default to &#39;desc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

