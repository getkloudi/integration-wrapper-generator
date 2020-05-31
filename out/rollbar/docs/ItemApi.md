# Rollbar.ItemApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemPost**](ItemApi.md#itemPost) | **POST** /item/ | 



## itemPost

> itemPost(xRollbarAccessToken, opts)



### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.ItemApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | An access token with scope `post_server_item` or `post_client_item`. A post_client_item token must be used if the `platform` is `browser\"`, `android`, `ios`, `flash`, or `client`. A post_server_item token should be used for other platforms.
let opts = {
  'body': new Rollbar.Api1ItemRequest() // Api1ItemRequest | 
};
apiInstance.itemPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| An access token with scope &#x60;post_server_item&#x60; or &#x60;post_client_item&#x60;. A post_client_item token must be used if the &#x60;platform&#x60; is &#x60;browser\&quot;&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;flash&#x60;, or &#x60;client&#x60;. A post_server_item token should be used for other platforms. | 
 **body** | [**Api1ItemRequest**](Api1ItemRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

