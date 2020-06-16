# Jira.IssueCustomFieldOptionsAppsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fieldFieldKeyOptionGet**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionGet) | **GET** /field/{fieldKey}/option | Get all issue field options
[**fieldFieldKeyOptionOptionIdDelete**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionOptionIdDelete) | **DELETE** /field/{fieldKey}/option/{optionId} | Delete issue field option
[**fieldFieldKeyOptionOptionIdGet**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionOptionIdGet) | **GET** /field/{fieldKey}/option/{optionId} | Get issue field option
[**fieldFieldKeyOptionOptionIdIssueDelete**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionOptionIdIssueDelete) | **DELETE** /field/{fieldKey}/option/{optionId}/issue | Replace issue field option
[**fieldFieldKeyOptionOptionIdPut**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionOptionIdPut) | **PUT** /field/{fieldKey}/option/{optionId} | Update issue field option
[**fieldFieldKeyOptionPost**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionPost) | **POST** /field/{fieldKey}/option | Create issue field option
[**fieldFieldKeyOptionSuggestionsEditGet**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionSuggestionsEditGet) | **GET** /field/{fieldKey}/option/suggestions/edit | Get selectable issue field options
[**fieldFieldKeyOptionSuggestionsSearchGet**](IssueCustomFieldOptionsAppsApi.md#fieldFieldKeyOptionSuggestionsSearchGet) | **GET** /field/{fieldKey}/option/suggestions/search | Get visible issue field options



## fieldFieldKeyOptionGet

> PageBeanIssueFieldOption fieldFieldKeyOptionGet(cloudid, fieldKey, opts)

Get all issue field options

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.fieldFieldKeyOptionGet(cloudid, fieldKey, opts, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldFieldKeyOptionOptionIdDelete

> Object fieldFieldKeyOptionOptionIdDelete(cloudid, fieldKey, optionId)

Delete issue field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let optionId = 789; // Number | The ID of the option to be deleted.
apiInstance.fieldFieldKeyOptionOptionIdDelete(cloudid, fieldKey, optionId, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **optionId** | **Number**| The ID of the option to be deleted. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldFieldKeyOptionOptionIdGet

> IssueFieldOption fieldFieldKeyOptionOptionIdGet(cloudid, fieldKey, optionId)

Get issue field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let optionId = 789; // Number | The ID of the option to be returned.
apiInstance.fieldFieldKeyOptionOptionIdGet(cloudid, fieldKey, optionId, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **optionId** | **Number**| The ID of the option to be returned. | 

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldFieldKeyOptionOptionIdIssueDelete

> fieldFieldKeyOptionOptionIdIssueDelete(cloudid, fieldKey, optionId, opts)

Replace issue field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let optionId = 789; // Number | The ID of the option to be deselected.
let opts = {
  'replaceWith': 789, // Number | The ID of the option that will replace the currently selected option.
  'jql': "jql_example" // String | A JQL query that specifies the issues to be updated. For example, *project=10000*.
};
apiInstance.fieldFieldKeyOptionOptionIdIssueDelete(cloudid, fieldKey, optionId, opts, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **optionId** | **Number**| The ID of the option to be deselected. | 
 **replaceWith** | **Number**| The ID of the option that will replace the currently selected option. | [optional] 
 **jql** | **String**| A JQL query that specifies the issues to be updated. For example, *project&#x3D;10000*. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldFieldKeyOptionOptionIdPut

> IssueFieldOption fieldFieldKeyOptionOptionIdPut(cloudid, fieldKey, optionId, body)

Update issue field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let optionId = 789; // Number | The ID of the option to be updated.
let body = new Jira.IssueFieldOption(); // IssueFieldOption | 
apiInstance.fieldFieldKeyOptionOptionIdPut(cloudid, fieldKey, optionId, body, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **optionId** | **Number**| The ID of the option to be updated. | 
 **body** | [**IssueFieldOption**](IssueFieldOption.md)|  | 

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fieldFieldKeyOptionPost

> IssueFieldOption fieldFieldKeyOptionPost(cloudid, fieldKey, body)

Create issue field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let body = new Jira.IssueFieldOptionCreateBean(); // IssueFieldOptionCreateBean | 
apiInstance.fieldFieldKeyOptionPost(cloudid, fieldKey, body, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **body** | [**IssueFieldOptionCreateBean**](IssueFieldOptionCreateBean.md)|  | 

### Return type

[**IssueFieldOption**](IssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fieldFieldKeyOptionSuggestionsEditGet

> PageBeanIssueFieldOption fieldFieldKeyOptionSuggestionsEditGet(cloudid, fieldKey, opts)

Get selectable issue field options

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'projectId': 789 // Number | Filters the results to options that are only available in the specified project.
};
apiInstance.fieldFieldKeyOptionSuggestionsEditGet(cloudid, fieldKey, opts, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **projectId** | **Number**| Filters the results to options that are only available in the specified project. | [optional] 

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldFieldKeyOptionSuggestionsSearchGet

> PageBeanIssueFieldOption fieldFieldKeyOptionSuggestionsSearchGet(cloudid, fieldKey, opts)

Get visible issue field options

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsAppsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldKey = "fieldKey_example"; // String | The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the `fieldKey` value, do one of the following:   *  open the app's plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the `jiraIssueFields` module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in `key`. For example, `\"key\": \"teams-add-on__team-issue-field\"`
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 56, // Number | The maximum number of items to return per page.
  'projectId': 789 // Number | Filters the results to options that are only available in the specified project.
};
apiInstance.fieldFieldKeyOptionSuggestionsSearchGet(cloudid, fieldKey, opts, (error, data, response) => {
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
 **fieldKey** | **String**| The field key is specified in the following format: **$(app-key)\\_\\_$(field-key)**. For example, *example-add-on\\_\\_example-issue-field*. To determine the &#x60;fieldKey&#x60; value, do one of the following:   *  open the app&#39;s plugin descriptor, then **app-key** is the key at the top and **field-key** is the key in the &#x60;jiraIssueFields&#x60; module. **app-key** can also be found in the app listing in the Atlassian Universal Plugin Manager.  *  run [Get fields](#api-rest-api-3-field-get) and in the field details the value is returned in &#x60;key&#x60;. For example, &#x60;\&quot;key\&quot;: \&quot;teams-add-on__team-issue-field\&quot;&#x60; | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] 
 **projectId** | **Number**| Filters the results to options that are only available in the specified project. | [optional] 

### Return type

[**PageBeanIssueFieldOption**](PageBeanIssueFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

