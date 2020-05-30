# Rollbar.TeamsApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamDelete**](TeamsApi.md#teamDelete) | **DELETE** /team | 
[**teamGet**](TeamsApi.md#teamGet) | **GET** /team | 
[**teamsGet**](TeamsApi.md#teamsGet) | **GET** /teams | 
[**teamsPost**](TeamsApi.md#teamsPost) | **POST** /teams | 



## teamDelete

> teamDelete()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsApi();
apiInstance.teamDelete((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamGet

> teamGet()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsApi();
apiInstance.teamGet((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamsGet

> teamsGet()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsApi();
apiInstance.teamsGet((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamsPost

> teamsPost()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsApi();
apiInstance.teamsPost((error, data, response) => {
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

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

