# Rollbar.ProjectAccessTokensApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectIdAccessTokensPost**](ProjectAccessTokensApi.md#projectIdAccessTokensPost) | **POST** /project/{id}/access_tokens | 



## projectIdAccessTokensPost

> Api1ProjectAccessTokensResponse projectIdAccessTokensPost(xRollbarAccessToken, id, body)



Create a project access token

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.ProjectAccessTokensApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let id = "id_example"; // String | 
let body = new Rollbar.ProjectAccessToken(); // ProjectAccessToken | 
apiInstance.projectIdAccessTokensPost(xRollbarAccessToken, id, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **id** | **String**|  | 
 **body** | [**ProjectAccessToken**](ProjectAccessToken.md)|  | 

### Return type

[**Api1ProjectAccessTokensResponse**](Api1ProjectAccessTokensResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

