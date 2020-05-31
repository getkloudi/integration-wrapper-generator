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

> EmptyResponse notificationsEmailPut(xRollbarAccessToken, body)



Configuring Email Notifications integration

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = new Rollbar.EmailIntegrationConfig(); // EmailIntegrationConfig | 
apiInstance.notificationsEmailPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**EmailIntegrationConfig**](EmailIntegrationConfig.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## notificationsEmailRulesPut

> EmptyResponse notificationsEmailRulesPut(xRollbarAccessToken, body)



Setup Email notification rules

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = [new Rollbar.EmailRule()]; // [EmailRule] | 
apiInstance.notificationsEmailRulesPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**[EmailRule]**](EmailRule.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## notificationsPagerdutyPut

> EmptyResponse notificationsPagerdutyPut(xRollbarAccessToken, body)



Configuring PagerDuty integration

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = new Rollbar.PagerDutyIntegrationConfig(); // PagerDutyIntegrationConfig | 
apiInstance.notificationsPagerdutyPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**PagerDutyIntegrationConfig**](PagerDutyIntegrationConfig.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## notificationsPagerdutyRulesPut

> EmptyResponse notificationsPagerdutyRulesPut(xRollbarAccessToken, body)



Setup PagerDuty notification rules

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = [new Rollbar.PagerDutyRule()]; // [PagerDutyRule] | 
apiInstance.notificationsPagerdutyRulesPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**[PagerDutyRule]**](PagerDutyRule.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## notificationsSlackPut

> EmptyResponse notificationsSlackPut(xRollbarAccessToken, body)



Configuring Slack integration

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = new Rollbar.SlackIntegrationConfig(); // SlackIntegrationConfig | 
apiInstance.notificationsSlackPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**SlackIntegrationConfig**](SlackIntegrationConfig.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## notificationsSlackRulesPut

> EmptyResponse notificationsSlackRulesPut(xRollbarAccessToken, body)



Setup Slack notification rules

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.NotificationsApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let body = [new Rollbar.SlackRule()]; // [SlackRule] | 
apiInstance.notificationsSlackRulesPut(xRollbarAccessToken, body, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **body** | [**[SlackRule]**](SlackRule.md)|  | 

### Return type

[**EmptyResponse**](EmptyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8

