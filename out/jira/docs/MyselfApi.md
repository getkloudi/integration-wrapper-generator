# Jira.MyselfApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mypreferencesDelete**](MyselfApi.md#mypreferencesDelete) | **DELETE** /mypreferences | Delete preference
[**mypreferencesGet**](MyselfApi.md#mypreferencesGet) | **GET** /mypreferences | Get preference
[**mypreferencesLocaleDelete**](MyselfApi.md#mypreferencesLocaleDelete) | **DELETE** /mypreferences/locale | Delete locale
[**mypreferencesLocaleGet**](MyselfApi.md#mypreferencesLocaleGet) | **GET** /mypreferences/locale | Get locale
[**mypreferencesLocalePut**](MyselfApi.md#mypreferencesLocalePut) | **PUT** /mypreferences/locale | Set locale
[**mypreferencesPut**](MyselfApi.md#mypreferencesPut) | **PUT** /mypreferences | Set preference
[**myselfGet**](MyselfApi.md#myselfGet) | **GET** /myself | Get current user



## mypreferencesDelete

> mypreferencesDelete(cloudid, key)

Delete preference

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
let key = "key_example"; // String | The key of the preference.
apiInstance.mypreferencesDelete(cloudid, key, (error, data, response) => {
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
 **key** | **String**| The key of the preference. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## mypreferencesGet

> String mypreferencesGet(cloudid, key)

Get preference

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
let key = "key_example"; // String | The key of the preference.
apiInstance.mypreferencesGet(cloudid, key, (error, data, response) => {
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
 **key** | **String**| The key of the preference. | 

### Return type

**String**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mypreferencesLocaleDelete

> Object mypreferencesLocaleDelete(cloudid)

Delete locale

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.mypreferencesLocaleDelete(cloudid, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mypreferencesLocaleGet

> Locale mypreferencesLocaleGet(cloudid)

Get locale

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.mypreferencesLocaleGet(cloudid, (error, data, response) => {
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

### Return type

[**Locale**](Locale.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mypreferencesLocalePut

> Object mypreferencesLocalePut(cloudid, body)

Set locale

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.Locale(); // Locale | The locale defined in a LocaleBean.
apiInstance.mypreferencesLocalePut(cloudid, body, (error, data, response) => {
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
 **body** | [**Locale**](Locale.md)| The locale defined in a LocaleBean. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mypreferencesPut

> Object mypreferencesPut(cloudid, key, body)

Set preference

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
let key = "key_example"; // String | The key of the preference. The maximum length is 255 characters.
let body = "body_example"; // String | The value of the preference as a plain text string. The maximum length is 255 characters.
apiInstance.mypreferencesPut(cloudid, key, body, (error, data, response) => {
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
 **key** | **String**| The key of the preference. The maximum length is 255 characters. | 
 **body** | **String**| The value of the preference as a plain text string. The maximum length is 255 characters. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json


## myselfGet

> User myselfGet(cloudid, opts)

Get current user

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.MyselfApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` Returns all groups, including nested groups, the user belongs to.  *  `applicationRoles` Returns the application roles the user is assigned to.
};
apiInstance.myselfGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;groups&#x60; Returns all groups, including nested groups, the user belongs to.  *  &#x60;applicationRoles&#x60; Returns the application roles the user is assigned to. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

