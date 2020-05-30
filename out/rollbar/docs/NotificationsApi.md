# Rollbar.NotificationsApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**notificationsEmailPut**](NotificationsApi.md#notificationsEmailPut) | **PUT** /notifications/email | 
[**notificationsEmailRulesPut**](NotificationsApi.md#notificationsEmailRulesPut) | **PUT** /notifications/email/rules | 
[**notificationsPagerdutyPut**](NotificationsApi.md#notificationsPagerdutyPut) | **PUT** /notifications/pagerduty | 
[**notificationsPagerdutyRulesPut**](NotificationsApi.md#notificationsPagerdutyRulesPut) | **PUT** /notifications/pagerduty/rules | 
[**notificationsSlackPut**](NotificationsApi.md#notificationsSlackPut) | **PUT** /notifications/slack | 
[**notificationsSlackRulesPut**](NotificationsApi.md#notificationsSlackRulesPut) | **PUT** /notifications/slack/rules | 



## notificationsEmailPut

> notificationsEmailPut(opts)



Configuring Email Notifications integration

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsEmailPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notificationsEmailRulesPut

> notificationsEmailRulesPut(opts)



Setup Email notification rules

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsEmailRulesPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notificationsPagerdutyPut

> notificationsPagerdutyPut(opts)



Configuring PagerDuty integration

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsPagerdutyPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notificationsPagerdutyRulesPut

> notificationsPagerdutyRulesPut(opts)



Setup PagerDuty notification rules

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsPagerdutyRulesPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notificationsSlackPut

> notificationsSlackPut(opts)



Configuring Slack integration

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsSlackPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## notificationsSlackRulesPut

> notificationsSlackRulesPut(opts)



Setup Slack notification rules

### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.NotificationsApi();
let opts = {
  'UNKNOWN_PARAMETER_NAME': new Rollbar.null() //  | 
};
apiInstance.notificationsSlackRulesPut(opts, (error, data, response) => {
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
 **UNKNOWN_PARAMETER_NAME** | [****](.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

