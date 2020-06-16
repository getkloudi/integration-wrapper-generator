# Jira.IssuesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueBulkPost**](IssuesApi.md#issueBulkPost) | **POST** /issue/bulk | Bulk create issue
[**issueCreatemetaGet**](IssuesApi.md#issueCreatemetaGet) | **GET** /issue/createmeta | Get create issue metadata
[**issueIssueIdOrKeyAssigneePut**](IssuesApi.md#issueIssueIdOrKeyAssigneePut) | **PUT** /issue/{issueIdOrKey}/assignee | Assign issue
[**issueIssueIdOrKeyChangelogGet**](IssuesApi.md#issueIssueIdOrKeyChangelogGet) | **GET** /issue/{issueIdOrKey}/changelog | Get change logs
[**issueIssueIdOrKeyDelete**](IssuesApi.md#issueIssueIdOrKeyDelete) | **DELETE** /issue/{issueIdOrKey} | Delete issue
[**issueIssueIdOrKeyEditmetaGet**](IssuesApi.md#issueIssueIdOrKeyEditmetaGet) | **GET** /issue/{issueIdOrKey}/editmeta | Get edit issue metadata
[**issueIssueIdOrKeyGet**](IssuesApi.md#issueIssueIdOrKeyGet) | **GET** /issue/{issueIdOrKey} | Get issue
[**issueIssueIdOrKeyNotifyPost**](IssuesApi.md#issueIssueIdOrKeyNotifyPost) | **POST** /issue/{issueIdOrKey}/notify | Send notification for issue
[**issueIssueIdOrKeyPut**](IssuesApi.md#issueIssueIdOrKeyPut) | **PUT** /issue/{issueIdOrKey} | Edit issue
[**issueIssueIdOrKeyTransitionsGet**](IssuesApi.md#issueIssueIdOrKeyTransitionsGet) | **GET** /issue/{issueIdOrKey}/transitions | Get transitions
[**issueIssueIdOrKeyTransitionsPost**](IssuesApi.md#issueIssueIdOrKeyTransitionsPost) | **POST** /issue/{issueIdOrKey}/transitions | Transition issue
[**issuePost**](IssuesApi.md#issuePost) | **POST** /issue | Create issue



## issueBulkPost

> CreatedIssues issueBulkPost(cloudid, body)

Bulk create issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssuesUpdateBean(); // IssuesUpdateBean | 
apiInstance.issueBulkPost(cloudid, body, (error, data, response) => {
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
 **body** | [**IssuesUpdateBean**](IssuesUpdateBean.md)|  | 

### Return type

[**CreatedIssues**](CreatedIssues.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueCreatemetaGet

> IssueCreateMetadata issueCreatemetaGet(cloudid, opts)

Get create issue metadata

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'projectIds': ["null"], // [String] | List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, `projectIds=10000,10001&projectIds=10020,10021`. This parameter may be provided with `projectKeys`.
  'projectKeys': ["null"], // [String] | List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, `projectKeys=proj1,proj2&projectKeys=proj3`. This parameter may be provided with `projectIds`.
  'issuetypeIds': ["null"], // [String] | List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, `issuetypeIds=10000,10001&issuetypeIds=10020,10021`. This parameter may be provided with `issuetypeNames`.
  'issuetypeNames': ["null"], // [String] | List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, `issuetypeNames=name1,name2&issuetypeNames=name3`. This parameter may be provided with `issuetypeIds`.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts `projects.issuetypes.fields`, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the `fields` and `update` fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post).
};
apiInstance.issueCreatemetaGet(cloudid, opts, (error, data, response) => {
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
 **projectIds** | [**[String]**](String.md)| List of project IDs. This parameter accepts a comma-separated list. Multiple project IDs can also be provided using an ampersand-separated list. For example, &#x60;projectIds&#x3D;10000,10001&amp;projectIds&#x3D;10020,10021&#x60;. This parameter may be provided with &#x60;projectKeys&#x60;. | [optional] 
 **projectKeys** | [**[String]**](String.md)| List of project keys. This parameter accepts a comma-separated list. Multiple project keys can also be provided using an ampersand-separated list. For example, &#x60;projectKeys&#x3D;proj1,proj2&amp;projectKeys&#x3D;proj3&#x60;. This parameter may be provided with &#x60;projectIds&#x60;. | [optional] 
 **issuetypeIds** | [**[String]**](String.md)| List of issue type IDs. This parameter accepts a comma-separated list. Multiple issue type IDs can also be provided using an ampersand-separated list. For example, &#x60;issuetypeIds&#x3D;10000,10001&amp;issuetypeIds&#x3D;10020,10021&#x60;. This parameter may be provided with &#x60;issuetypeNames&#x60;. | [optional] 
 **issuetypeNames** | [**[String]**](String.md)| List of issue type names. This parameter accepts a comma-separated list. Multiple issue type names can also be provided using an ampersand-separated list. For example, &#x60;issuetypeNames&#x3D;name1,name2&amp;issuetypeNames&#x3D;name3&#x60;. This parameter may be provided with &#x60;issuetypeIds&#x60;. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about issue metadata in the response. This parameter accepts &#x60;projects.issuetypes.fields&#x60;, which returns information about the fields in the issue creation screen for each issue type. Fields hidden from the screen are not returned. Use the information to populate the &#x60;fields&#x60; and &#x60;update&#x60; fields in [Create issue](#api-rest-api-3-issue-post) and [Create issues](#api-rest-api-3-issue-bulk-post). | [optional] 

### Return type

[**IssueCreateMetadata**](IssueCreateMetadata.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyAssigneePut

> Object issueIssueIdOrKeyAssigneePut(cloudid, issueIdOrKey, body)

Assign issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue to be assigned.
let body = new Jira.User(); // User | The request object with the user that the issue is assigned to.
apiInstance.issueIssueIdOrKeyAssigneePut(cloudid, issueIdOrKey, body, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue to be assigned. | 
 **body** | [**User**](User.md)| The request object with the user that the issue is assigned to. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyChangelogGet

> PageBeanChangelog issueIssueIdOrKeyChangelogGet(cloudid, issueIdOrKey, opts)

Get change logs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 100 // Number | The maximum number of items to return per page.
};
apiInstance.issueIssueIdOrKeyChangelogGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 100]

### Return type

[**PageBeanChangelog**](PageBeanChangelog.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyDelete

> issueIssueIdOrKeyDelete(cloudid, issueIdOrKey, opts)

Delete issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'deleteSubtasks': "'false'" // String | Whether the issue's subtasks are deleted when the issue is deleted.
};
apiInstance.issueIssueIdOrKeyDelete(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **deleteSubtasks** | **String**| Whether the issue&#39;s subtasks are deleted when the issue is deleted. | [optional] [default to &#39;false&#39;]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyEditmetaGet

> IssueUpdateMetadata issueIssueIdOrKeyEditmetaGet(cloudid, issueIdOrKey, opts)

Get edit issue metadata

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'overrideScreenSecurity': false, // Boolean | Whether hidden fields should be returned. Available to connect app users with admin permissions.
  'overrideEditableFlag': false // Boolean | Whether non-editable fields should be returned. Available to connect app users with admin permissions.
};
apiInstance.issueIssueIdOrKeyEditmetaGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **overrideScreenSecurity** | **Boolean**| Whether hidden fields should be returned. Available to connect app users with admin permissions. | [optional] [default to false]
 **overrideEditableFlag** | **Boolean**| Whether non-editable fields should be returned. Available to connect app users with admin permissions. | [optional] [default to false]

### Return type

[**IssueUpdateMetadata**](IssueUpdateMetadata.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyGet

> IssueBean issueIssueIdOrKeyGet(cloudid, issueIdOrKey, opts)

Get issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'fields': ["'*all'"], // [String] | A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  `*all` Returns all fields.  *  `*navigable` Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  `summary,comment` Returns only the summary and comments fields.  *  `-description` Returns all (default) fields except description.  *  `*navigable,-comment` Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, `fields=field1,field2& fields=field3`.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields.
  'fieldsByKeys': false, // Boolean | Whether fields in `fields` are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field's key may differ from its ID.
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedFields` Returns field values rendered in HTML format.  *  `names` Returns the display name of each field.  *  `schema` Returns the schema describing a field type.  *  `transitions` Returns all possible transitions for the issue.  *  `editmeta` Returns information about how each field can be edited.  *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  `versionedRepresentations` Returns a JSON array for each version of a field's value, with the highest number representing the most recent version. Note: When included in the request, the `fields` parameter is ignored.
  'properties': ["'null'"], // [String] | A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  `*all` Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  `*all` Returns all properties.  *  `*all,-prop1` Returns all properties except `prop1`.  *  `prop1,prop2` Returns `prop1` and `prop2` properties.  This parameter may be specified multiple times. For example, `properties=prop1,prop2& properties=prop3`.
  'updateHistory': false // Boolean | Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) `lastViewed` field.
};
apiInstance.issueIssueIdOrKeyGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **fields** | [**[String]**](String.md)| A list of fields to return for the issue. This parameter accepts a comma-separated list. Use it to retrieve a subset of fields. Allowed values:   *  &#x60;*all&#x60; Returns all fields.  *  &#x60;*navigable&#x60; Returns navigable fields.  *  Any issue field, prefixed with a minus to exclude.  Examples:   *  &#x60;summary,comment&#x60; Returns only the summary and comments fields.  *  &#x60;-description&#x60; Returns all (default) fields except description.  *  &#x60;*navigable,-comment&#x60; Returns all navigable fields except comment.  This parameter may be specified multiple times. For example, &#x60;fields&#x3D;field1,field2&amp; fields&#x3D;field3&#x60;.  Note: All fields are returned by default. This differs from [Search for issues using JQL (GET)](#api-rest-api-3-search-get) and [Search for issues using JQL (POST)](#api-rest-api-3-search-post) where the default is all navigable fields. | [optional] 
 **fieldsByKeys** | **Boolean**| Whether fields in &#x60;fields&#x60; are referenced by keys rather than IDs. This parameter is useful where fields have been added by a connect app and a field&#39;s key may differ from its ID. | [optional] [default to false]
 **expand** | **String**| Use [expand](#expansion) to include additional information about the issues in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;renderedFields&#x60; Returns field values rendered in HTML format.  *  &#x60;names&#x60; Returns the display name of each field.  *  &#x60;schema&#x60; Returns the schema describing a field type.  *  &#x60;transitions&#x60; Returns all possible transitions for the issue.  *  &#x60;editmeta&#x60; Returns information about how each field can be edited.  *  &#x60;changelog&#x60; Returns a list of recent updates to an issue, sorted by date, starting from the most recent.  *  &#x60;versionedRepresentations&#x60; Returns a JSON array for each version of a field&#39;s value, with the highest number representing the most recent version. Note: When included in the request, the &#x60;fields&#x60; parameter is ignored. | [optional] 
 **properties** | [**[String]**](String.md)| A list of issue properties to return for the issue. This parameter accepts a comma-separated list. Allowed values:   *  &#x60;*all&#x60; Returns all issue properties.  *  Any issue property key, prefixed with a minus to exclude.  Examples:   *  &#x60;*all&#x60; Returns all properties.  *  &#x60;*all,-prop1&#x60; Returns all properties except &#x60;prop1&#x60;.  *  &#x60;prop1,prop2&#x60; Returns &#x60;prop1&#x60; and &#x60;prop2&#x60; properties.  This parameter may be specified multiple times. For example, &#x60;properties&#x3D;prop1,prop2&amp; properties&#x3D;prop3&#x60;. | [optional] 
 **updateHistory** | **Boolean**| Whether the project in which the issue is created is added to the user&#39;s **Recently viewed** project list, as shown under **Projects** in Jira. This also populates the [JQL issues search](#api-rest-api-3-search-get) &#x60;lastViewed&#x60; field. | [optional] [default to false]

### Return type

[**IssueBean**](IssueBean.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyNotifyPost

> Object issueIssueIdOrKeyNotifyPost(cloudid, issueIdOrKey, body)

Send notification for issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | ID or key of the issue that the notification is sent for.
let body = new Jira.Notification(); // Notification | The request object for the notification and recipients.
apiInstance.issueIssueIdOrKeyNotifyPost(cloudid, issueIdOrKey, body, (error, data, response) => {
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
 **issueIdOrKey** | **String**| ID or key of the issue that the notification is sent for. | 
 **body** | [**Notification**](Notification.md)| The request object for the notification and recipients. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyPut

> Object issueIssueIdOrKeyPut(cloudid, issueIdOrKey, body, opts)

Edit issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let body = new Jira.IssueUpdateDetails(); // IssueUpdateDetails | 
let opts = {
  'notifyUsers': true, // Boolean | Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored.
  'overrideScreenSecurity': false, // Boolean | Whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions.
  'overrideEditableFlag': false // Boolean | Whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions.
};
apiInstance.issueIssueIdOrKeyPut(cloudid, issueIdOrKey, body, opts, (error, data, response) => {
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
 **body** | [**IssueUpdateDetails**](IssueUpdateDetails.md)|  | 
 **notifyUsers** | **Boolean**| Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn&#39;t have the necessary permission the request is ignored. | [optional] [default to true]
 **overrideScreenSecurity** | **Boolean**| Whether screen security should be overridden to enable hidden fields to be edited. Available to Connect app users with admin permissions. | [optional] [default to false]
 **overrideEditableFlag** | **Boolean**| Whether screen security should be overridden to enable uneditable fields to be edited. Available to Connect app users with admin permissions. | [optional] [default to false]

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyTransitionsGet

> Transitions issueIssueIdOrKeyTransitionsGet(cloudid, issueIdOrKey, opts)

Get transitions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts `transitions.fields`, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the `fields` and `update` fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post).
  'transitionId': "transitionId_example", // String | The ID of the transition.
  'skipRemoteOnlyCondition': false, // Boolean | Whether transitions with the condition *Hide From User Condition* are included in the response.
  'includeUnavailableTransitions': false // Boolean | Whether details of transitions that fail a condition are included in the response
};
apiInstance.issueIssueIdOrKeyTransitionsGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information about transitions in the response. This parameter accepts &#x60;transitions.fields&#x60;, which returns information about the fields in the transition screen for each transition. Fields hidden from the screen are not returned. Use this information to populate the &#x60;fields&#x60; and &#x60;update&#x60; fields in [Transition issue](#api-rest-api-3-issue-issueIdOrKey-transitions-post). | [optional] 
 **transitionId** | **String**| The ID of the transition. | [optional] 
 **skipRemoteOnlyCondition** | **Boolean**| Whether transitions with the condition *Hide From User Condition* are included in the response. | [optional] [default to false]
 **includeUnavailableTransitions** | **Boolean**| Whether details of transitions that fail a condition are included in the response | [optional] [default to false]

### Return type

[**Transitions**](Transitions.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyTransitionsPost

> Object issueIssueIdOrKeyTransitionsPost(cloudid, issueIdOrKey, body)

Transition issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let body = new Jira.IssueUpdateDetails(); // IssueUpdateDetails | 
apiInstance.issueIssueIdOrKeyTransitionsPost(cloudid, issueIdOrKey, body, (error, data, response) => {
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
 **body** | [**IssueUpdateDetails**](IssueUpdateDetails.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issuePost

> CreatedIssue issuePost(cloudid, body, opts)

Create issue

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssuesApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueUpdateDetails(); // IssueUpdateDetails | 
let opts = {
  'updateHistory': false // Boolean | Whether the project in which the issue is created is added to the user's **Recently viewed** project list, as shown under **Projects** in Jira.
};
apiInstance.issuePost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**IssueUpdateDetails**](IssueUpdateDetails.md)|  | 
 **updateHistory** | **Boolean**| Whether the project in which the issue is created is added to the user&#39;s **Recently viewed** project list, as shown under **Projects** in Jira. | [optional] [default to false]

### Return type

[**CreatedIssue**](CreatedIssue.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

