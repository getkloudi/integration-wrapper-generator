# Jira.WebhooksApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookDelete**](WebhooksApi.md#webhookDelete) | **DELETE** /webhook | Delete webhooks by ID
[**webhookFailedGet**](WebhooksApi.md#webhookFailedGet) | **GET** /webhook/failed | Get failed webhooks
[**webhookGet**](WebhooksApi.md#webhookGet) | **GET** /webhook | Get dynamic webhooks for app
[**webhookPost**](WebhooksApi.md#webhookPost) | **POST** /webhook | Register dynamic webhooks
[**webhookRefreshPut**](WebhooksApi.md#webhookRefreshPut) | **PUT** /webhook/refresh | Extend webhook life



## webhookDelete

> webhookDelete(cloudid, body)

Delete webhooks by ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WebhooksApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.ContainerForWebhookIDs(); // ContainerForWebhookIDs | 
apiInstance.webhookDelete(cloudid, body, (error, data, response) => {
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
 **body** | [**ContainerForWebhookIDs**](ContainerForWebhookIDs.md)|  | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookFailedGet

> FailedWebhooks webhookFailedGet(cloudid, opts)

Get failed webhooks

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WebhooksApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'maxResults': 56, // Number | The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page.
  'after': 789 // Number | The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch.
};
apiInstance.webhookFailedGet(cloudid, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of webhooks to return per page. If obeying the maxResults directive would result in records with the same failure time being split across pages, the directive is ignored and all records with the same failure time included on the page. | [optional] 
 **after** | **Number**| The time after which any webhook failure must have occurred for the record to be returned, expressed as milliseconds since the UNIX epoch. | [optional] 

### Return type

[**FailedWebhooks**](FailedWebhooks.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookGet

> PageBeanWebhook webhookGet(cloudid, opts)

Get dynamic webhooks for app

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WebhooksApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 100 // Number | The maximum number of items to return per page.
};
apiInstance.webhookGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 100]

### Return type

[**PageBeanWebhook**](PageBeanWebhook.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookPost

> ContainerForRegisteredWebhooks webhookPost(cloudid, body)

Register dynamic webhooks

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WebhooksApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.WebhookRegistrationDetails(); // WebhookRegistrationDetails | 
apiInstance.webhookPost(cloudid, body, (error, data, response) => {
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
 **body** | [**WebhookRegistrationDetails**](WebhookRegistrationDetails.md)|  | 

### Return type

[**ContainerForRegisteredWebhooks**](ContainerForRegisteredWebhooks.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookRefreshPut

> WebhooksExpirationDate webhookRefreshPut(cloudid, body)

Extend webhook life

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.WebhooksApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.ContainerForWebhookIDs(); // ContainerForWebhookIDs | 
apiInstance.webhookRefreshPut(cloudid, body, (error, data, response) => {
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
 **body** | [**ContainerForWebhookIDs**](ContainerForWebhookIDs.md)|  | 

### Return type

[**WebhooksExpirationDate**](WebhooksExpirationDate.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

