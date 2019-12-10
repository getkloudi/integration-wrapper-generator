# Gitlab.NamespacesApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV3Namespaces**](NamespacesApi.md#getV3Namespaces) | **GET** /v3/namespaces | Get a namespaces list



## getV3Namespaces

> Namespace getV3Namespaces(opts)

Get a namespaces list

Get a namespaces list

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

let apiInstance = new Gitlab.NamespacesApi();
let opts = {
  'search': "search_example", // String | Search query for namespaces
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3Namespaces(opts, (error, data, response) => {
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
 **search** | **String**| Search query for namespaces | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Namespace**](Namespace.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

