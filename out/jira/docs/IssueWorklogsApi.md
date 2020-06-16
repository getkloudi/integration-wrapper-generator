# Jira.IssueWorklogsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueIssueIdOrKeyWorklogGet**](IssueWorklogsApi.md#issueIssueIdOrKeyWorklogGet) | **GET** /issue/{issueIdOrKey}/worklog | Get issue worklogs
[**issueIssueIdOrKeyWorklogIdDelete**](IssueWorklogsApi.md#issueIssueIdOrKeyWorklogIdDelete) | **DELETE** /issue/{issueIdOrKey}/worklog/{id} | Delete worklog
[**issueIssueIdOrKeyWorklogIdGet**](IssueWorklogsApi.md#issueIssueIdOrKeyWorklogIdGet) | **GET** /issue/{issueIdOrKey}/worklog/{id} | Get worklog
[**issueIssueIdOrKeyWorklogIdPut**](IssueWorklogsApi.md#issueIssueIdOrKeyWorklogIdPut) | **PUT** /issue/{issueIdOrKey}/worklog/{id} | Update worklog
[**issueIssueIdOrKeyWorklogPost**](IssueWorklogsApi.md#issueIssueIdOrKeyWorklogPost) | **POST** /issue/{issueIdOrKey}/worklog | Add worklog
[**worklogDeletedGet**](IssueWorklogsApi.md#worklogDeletedGet) | **GET** /worklog/deleted | Get IDs of deleted worklogs
[**worklogListPost**](IssueWorklogsApi.md#worklogListPost) | **POST** /worklog/list | Get worklogs
[**worklogUpdatedGet**](IssueWorklogsApi.md#worklogUpdatedGet) | **GET** /worklog/updated | Get IDs of updated worklogs



## issueIssueIdOrKeyWorklogGet

> PageOfWorklogs issueIssueIdOrKeyWorklogGet(cloudid, issueIdOrKey, opts)

Get issue worklogs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 1048576, // Number | The maximum number of items to return per page.
  'startedAfter': 789, // Number | The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts`properties`, which returns worklog properties.
};
apiInstance.issueIssueIdOrKeyWorklogGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 1048576]
 **startedAfter** | **Number**| The worklog start date and time, as a UNIX timestamp in milliseconds, after which worklogs are returned. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts&#x60;properties&#x60;, which returns worklog properties. | [optional] 

### Return type

[**PageOfWorklogs**](PageOfWorklogs.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyWorklogIdDelete

> issueIssueIdOrKeyWorklogIdDelete(cloudid, issueIdOrKey, id, opts)

Delete worklog

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let id = "id_example"; // String | The ID of the worklog.
let opts = {
  'notifyUsers': true, // Boolean | Whether users watching the issue are notified by email.
  'adjustEstimate': "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Increases the estimate by amount specified in `increaseBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
  'increaseBy': "increaseBy_example", // String | The amount to increase the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `manual`.
  'overrideEditableFlag': false // Boolean | Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag.
};
apiInstance.issueIssueIdOrKeyWorklogIdDelete(cloudid, issueIdOrKey, id, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **id** | **String**| The ID of the worklog. | 
 **notifyUsers** | **Boolean**| Whether users watching the issue are notified by email. | [optional] [default to true]
 **adjustEstimate** | **String**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Increases the estimate by amount specified in &#x60;increaseBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [optional] [default to &#39;auto&#39;]
 **newEstimate** | **String**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **increaseBy** | **String**| The amount to increase the issue&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [optional] 
 **overrideEditableFlag** | **Boolean**| Whether the work log entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin permissions can use this flag. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyWorklogIdGet

> Worklog issueIssueIdOrKeyWorklogIdGet(cloudid, issueIdOrKey, id, opts)

Get worklog

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let id = "id_example"; // String | The ID of the worklog.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  `properties`, which returns worklog properties.
};
apiInstance.issueIssueIdOrKeyWorklogIdGet(cloudid, issueIdOrKey, id, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **id** | **String**| The ID of the worklog. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts  &#x60;properties&#x60;, which returns worklog properties. | [optional] 

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyWorklogIdPut

> Worklog issueIssueIdOrKeyWorklogIdPut(cloudid, issueIdOrKey, id, body, opts)

Update worklog

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key the issue.
let id = "id_example"; // String | The ID of the worklog.
let body = new Jira.Worklog(); // Worklog | 
let opts = {
  'notifyUsers': true, // Boolean | Whether users watching the issue are notified by email.
  'adjustEstimate': "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `auto` Updates the estimate by the difference between the original and updated value of `timeSpent` or `timeSpentSeconds`.
  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties`, which returns worklog properties.
  'overrideEditableFlag': false // Boolean | Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Only connect app users with admin permissions can use this flag.
};
apiInstance.issueIssueIdOrKeyWorklogIdPut(cloudid, issueIdOrKey, id, body, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key the issue. | 
 **id** | **String**| The ID of the worklog. | 
 **body** | [**Worklog**](Worklog.md)|  | 
 **notifyUsers** | **Boolean**| Whether users watching the issue are notified by email. | [optional] [default to true]
 **adjustEstimate** | **String**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;auto&#x60; Updates the estimate by the difference between the original and updated value of &#x60;timeSpent&#x60; or &#x60;timeSpentSeconds&#x60;. | [optional] [default to &#39;auto&#39;]
 **newEstimate** | **String**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [optional] 
 **overrideEditableFlag** | **Boolean**| Whether the worklog should be added to the issue even if the issue is not editable. For example, because the issue is closed. Only connect app users with admin permissions can use this flag. | [optional] [default to false]

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyWorklogPost

> Worklog issueIssueIdOrKeyWorklogPost(cloudid, issueIdOrKey, body, opts)

Add worklog

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key the issue.
let body = new Jira.Worklog(); // Worklog | 
let opts = {
  'notifyUsers': true, // Boolean | Whether users watching the issue are notified by email.
  'adjustEstimate': "'auto'", // String | Defines how to update the issue's time estimate, the options are:   *  `new` Sets the estimate to a specific value, defined in `newEstimate`.  *  `leave` Leaves the estimate unchanged.  *  `manual` Reduces the estimate by amount specified in `reduceBy`.  *  `auto` Reduces the estimate by the value of `timeSpent` in the worklog.
  'newEstimate': "newEstimate_example", // String | The value to set as the issue's remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when `adjustEstimate` is `new`.
  'reduceBy': "reduceBy_example", // String | The amount to reduce the issue's remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when `adjustEstimate` is `manual`.
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts `properties`, which returns worklog properties.
  'overrideEditableFlag': false // Boolean | Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag.
};
apiInstance.issueIssueIdOrKeyWorklogPost(cloudid, issueIdOrKey, body, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key the issue. | 
 **body** | [**Worklog**](Worklog.md)|  | 
 **notifyUsers** | **Boolean**| Whether users watching the issue are notified by email. | [optional] [default to true]
 **adjustEstimate** | **String**| Defines how to update the issue&#39;s time estimate, the options are:   *  &#x60;new&#x60; Sets the estimate to a specific value, defined in &#x60;newEstimate&#x60;.  *  &#x60;leave&#x60; Leaves the estimate unchanged.  *  &#x60;manual&#x60; Reduces the estimate by amount specified in &#x60;reduceBy&#x60;.  *  &#x60;auto&#x60; Reduces the estimate by the value of &#x60;timeSpent&#x60; in the worklog. | [optional] [default to &#39;auto&#39;]
 **newEstimate** | **String**| The value to set as the issue&#39;s remaining time estimate, as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;new&#x60;. | [optional] 
 **reduceBy** | **String**| The amount to reduce the issue&#39;s remaining estimate by, as days (\\#d), hours (\\#h), or minutes (\\#m). For example, *2d*. Required when &#x60;adjustEstimate&#x60; is &#x60;manual&#x60;. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about work logs in the response. This parameter accepts &#x60;properties&#x60;, which returns worklog properties. | [optional] 
 **overrideEditableFlag** | **Boolean**| Whether the worklog entry should be added to the issue even if the issue is not editable, because jira.issue.editable set to false or missing. For example, the issue is closed. Only connect app users with admin scope permission can use this flag. | [optional] [default to false]

### Return type

[**Worklog**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## worklogDeletedGet

> ChangedWorklogs worklogDeletedGet(cloudid, opts)

Get IDs of deleted worklogs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'since': 0 // Number | The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned.
};
apiInstance.worklogDeletedGet(cloudid, opts, (error, data, response) => {
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
 **since** | **Number**| The date and time, as a UNIX timestamp in milliseconds, after which deleted worklogs are returned. | [optional] [default to 0]

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## worklogListPost

> [Worklog] worklogListPost(cloudid, body, opts)

Get worklogs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.WorklogIdsRequestBean(); // WorklogIdsRequestBean | A JSON object containing a list of worklog IDs.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
};
apiInstance.worklogListPost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**WorklogIdsRequestBean**](WorklogIdsRequestBean.md)| A JSON object containing a list of worklog IDs. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [optional] 

### Return type

[**[Worklog]**](Worklog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## worklogUpdatedGet

> ChangedWorklogs worklogUpdatedGet(cloudid, opts)

Get IDs of updated worklogs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueWorklogsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'since': 0, // Number | The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts `properties` that returns the properties of each worklog.
};
apiInstance.worklogUpdatedGet(cloudid, opts, (error, data, response) => {
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
 **since** | **Number**| The date and time, as a UNIX timestamp in milliseconds, after which updated worklogs are returned. | [optional] [default to 0]
 **expand** | **String**| Use [expand](#expansion) to include additional information about worklogs in the response. This parameter accepts &#x60;properties&#x60; that returns the properties of each worklog. | [optional] 

### Return type

[**ChangedWorklogs**](ChangedWorklogs.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

