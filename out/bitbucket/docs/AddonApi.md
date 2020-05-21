# Bitbucket.AddonApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addonDelete**](AddonApi.md#addonDelete) | **DELETE** /addon | 
[**addonLinkersGet**](AddonApi.md#addonLinkersGet) | **GET** /addon/linkers | 
[**addonLinkersLinkerKeyGet**](AddonApi.md#addonLinkersLinkerKeyGet) | **GET** /addon/linkers/{linker_key} | 
[**addonLinkersLinkerKeyValuesDelete**](AddonApi.md#addonLinkersLinkerKeyValuesDelete) | **DELETE** /addon/linkers/{linker_key}/values | 
[**addonLinkersLinkerKeyValuesDelete_0**](AddonApi.md#addonLinkersLinkerKeyValuesDelete_0) | **DELETE** /addon/linkers/{linker_key}/values/ | 
[**addonLinkersLinkerKeyValuesGet**](AddonApi.md#addonLinkersLinkerKeyValuesGet) | **GET** /addon/linkers/{linker_key}/values | 
[**addonLinkersLinkerKeyValuesGet_0**](AddonApi.md#addonLinkersLinkerKeyValuesGet_0) | **GET** /addon/linkers/{linker_key}/values/ | 
[**addonLinkersLinkerKeyValuesPost**](AddonApi.md#addonLinkersLinkerKeyValuesPost) | **POST** /addon/linkers/{linker_key}/values | 
[**addonLinkersLinkerKeyValuesPut**](AddonApi.md#addonLinkersLinkerKeyValuesPut) | **PUT** /addon/linkers/{linker_key}/values | 
[**addonPut**](AddonApi.md#addonPut) | **PUT** /addon | 
[**addonUsersTargetUserEventsEventKeyPost**](AddonApi.md#addonUsersTargetUserEventsEventKeyPost) | **POST** /addon/users/{target_user}/events/{event_key} | 



## addonDelete

> addonDelete()



Deletes the application for the user.  This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the \&quot;Develop Apps\&quot; section of Bitbucket Marketplace need not use this endpoint as updates for those applications can be sent out via the UI of that section.  &#x60;&#x60;&#x60; $ curl -X DELETE https://api.bitbucket.org/2.0/addon \\   -H \&quot;Authorization: JWT &lt;JWT Token&gt;\&quot; &#x60;&#x60;&#x60;

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersGet

> Error addonLinkersGet()



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonLinkersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyGet

> Error addonLinkersLinkerKeyGet(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyGet(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesDelete

> Error addonLinkersLinkerKeyValuesDelete(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesDelete(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesDelete_0

> Error addonLinkersLinkerKeyValuesDelete_0(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesDelete_0(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesGet

> Error addonLinkersLinkerKeyValuesGet(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesGet(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesGet_0

> Error addonLinkersLinkerKeyValuesGet_0(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesGet_0(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesPost

> Error addonLinkersLinkerKeyValuesPost(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesPost(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonLinkersLinkerKeyValuesPut

> Error addonLinkersLinkerKeyValuesPut(linkerKey)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let linkerKey = "linkerKey_example"; // String | 
apiInstance.addonLinkersLinkerKeyValuesPut(linkerKey, (error, data, response) => {
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
 **linkerKey** | **String**|  | 

### Return type

[**Error**](Error.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonPut

> addonPut()



Updates the application installation for the user.  This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the \&quot;Develop Apps\&quot; section of Bitbucket Marketplace need not use this endpoint as updates for those applications can be sent out via the UI of that section.  A new, valid descriptor must be provided in the body of the PUT request.  &#x60;&#x60;&#x60; $ curl -X PUT https://api.bitbucket.org/2.0/addon \\   -H \&quot;Authorization: JWT &lt;JWT Token&gt;\&quot; \\   --header \&quot;Content-Type: application/json\&quot; \\   --data &#39;{\&quot;descriptor\&quot;: $NEW_DESCRIPTOR}&#39; &#x60;&#x60;&#x60;  Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonPut((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## addonUsersTargetUserEventsEventKeyPost

> addonUsersTargetUserEventsEventKeyPost(targetUser, eventKey)



POST a new custom event.  The data within the event body will be hydrated by Bitbucket. For example, the following event submission would result in subscribers for the event receiving the full repository object corresponding to the UUID.  &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;mynumdata\&quot;: \&quot;12345\&quot;,     \&quot;repository\&quot;: {         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;uuid\&quot;: \&quot;{be95aa1f-c0b2-47f6-99d1-bf5d3a0f850f}\&quot; }}&#39; https://api.bitbucket.org/2.0/addon/users/myuser/events/com.example.app%3Amyevent &#x60;&#x60;&#x60;  Use the optional &#x60;fields&#x60; property of the custom event Connect module where the event is defined to add additional fields to the expanded payload sent to listeners.  For example, the &#x60;customEvents&#x60; module in the app descriptor for the previous example would look like this:  &#x60;&#x60;&#x60; &#39;modules&#39;: {     &#39;customEvents&#39;: {         &#39;com.example.app:myevent&#39;: {             &#39;schema&#39;: {                 &#39;properties&#39;: {                     &#39;mynumdata&#39;: {&#39;type&#39;: &#39;number&#39;},                     &#39;repository&#39;: {&#39;$ref&#39;: &#39;#/definitions/repository&#39;}                 }             },             &#39;fields&#39;: [&#39;repository.owner&#39;]         }     } } &#x60;&#x60;&#x60;  By specifying fields as above, the repository owner will also be sent to subscribers of the event.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.AddonApi();
let targetUser = "targetUser_example"; // String | The account the app is installed in.  This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
let eventKey = "eventKey_example"; // String | The key of the event, which corresponds to an event defined in the connect app descriptor. 
apiInstance.addonUsersTargetUserEventsEventKeyPost(targetUser, eventKey, (error, data, response) => {
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
 **targetUser** | **String**| The account the app is installed in.  This can either be the username or the UUID of the account, surrounded by curly-braces, for example: &#x60;{account UUID}&#x60;. An account is either a team or user.  | 
 **eventKey** | **String**| The key of the event, which corresponds to an event defined in the connect app descriptor.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

