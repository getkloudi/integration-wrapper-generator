# Gitlab.GroupsApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteV3GroupsId**](GroupsApi.md#deleteV3GroupsId) | **DELETE** /v3/groups/{id} | Remove a group.
[**deleteV3GroupsIdAccessRequestsUserId**](GroupsApi.md#deleteV3GroupsIdAccessRequestsUserId) | **DELETE** /v3/groups/{id}/access_requests/{user_id} | Denies an access request for the given user.
[**deleteV3GroupsIdMembersUserId**](GroupsApi.md#deleteV3GroupsIdMembersUserId) | **DELETE** /v3/groups/{id}/members/{user_id} | Removes a user from a group or project.
[**getV3Groups**](GroupsApi.md#getV3Groups) | **GET** /v3/groups | Get a groups list
[**getV3GroupsId**](GroupsApi.md#getV3GroupsId) | **GET** /v3/groups/{id} | Get a single group, with containing projects.
[**getV3GroupsIdAccessRequests**](GroupsApi.md#getV3GroupsIdAccessRequests) | **GET** /v3/groups/{id}/access_requests | Gets a list of access requests for a group.
[**getV3GroupsIdIssues**](GroupsApi.md#getV3GroupsIdIssues) | **GET** /v3/groups/{id}/issues | Get a list of group issues
[**getV3GroupsIdMembers**](GroupsApi.md#getV3GroupsIdMembers) | **GET** /v3/groups/{id}/members | Gets a list of group or project members viewable by the authenticated user.
[**getV3GroupsIdMembersUserId**](GroupsApi.md#getV3GroupsIdMembersUserId) | **GET** /v3/groups/{id}/members/{user_id} | Gets a member of a group or project.
[**getV3GroupsIdNotificationSettings**](GroupsApi.md#getV3GroupsIdNotificationSettings) | **GET** /v3/groups/{id}/notification_settings | Get group level notification level settings, defaults to Global
[**getV3GroupsIdProjects**](GroupsApi.md#getV3GroupsIdProjects) | **GET** /v3/groups/{id}/projects | Get a list of projects in this group.
[**getV3GroupsOwned**](GroupsApi.md#getV3GroupsOwned) | **GET** /v3/groups/owned | Get list of owned groups for authenticated user
[**postV3Groups**](GroupsApi.md#postV3Groups) | **POST** /v3/groups | Create a group. Available only for users who can create groups.
[**postV3GroupsIdAccessRequests**](GroupsApi.md#postV3GroupsIdAccessRequests) | **POST** /v3/groups/{id}/access_requests | Requests access for the authenticated user to a group.
[**postV3GroupsIdMembers**](GroupsApi.md#postV3GroupsIdMembers) | **POST** /v3/groups/{id}/members | Adds a member to a group or project.
[**postV3GroupsIdProjectsProjectId**](GroupsApi.md#postV3GroupsIdProjectsProjectId) | **POST** /v3/groups/{id}/projects/{project_id} | Transfer a project to the group namespace. Available only for admin.
[**putV3GroupsId**](GroupsApi.md#putV3GroupsId) | **PUT** /v3/groups/{id} | Update a group. Available only for users who can administrate groups.
[**putV3GroupsIdAccessRequestsUserIdApprove**](GroupsApi.md#putV3GroupsIdAccessRequestsUserIdApprove) | **PUT** /v3/groups/{id}/access_requests/{user_id}/approve | Approves an access request for the given user.
[**putV3GroupsIdMembersUserId**](GroupsApi.md#putV3GroupsIdMembersUserId) | **PUT** /v3/groups/{id}/members/{user_id} | Updates a member of a group or project.
[**putV3GroupsIdNotificationSettings**](GroupsApi.md#putV3GroupsIdNotificationSettings) | **PUT** /v3/groups/{id}/notification_settings | Update group level notification level settings, defaults to Global



## deleteV3GroupsId

> deleteV3GroupsId(id)

Remove a group.

Remove a group.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
apiInstance.deleteV3GroupsId(id, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3GroupsIdAccessRequestsUserId

> deleteV3GroupsIdAccessRequestsUserId(id, userId)

Denies an access request for the given user.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let userId = 56; // Number | The user ID of the access requester
apiInstance.deleteV3GroupsIdAccessRequestsUserId(id, userId, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **userId** | **Number**| The user ID of the access requester | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3GroupsIdMembersUserId

> deleteV3GroupsIdMembersUserId(id, userId)

Removes a user from a group or project.

Removes a user from a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let userId = 56; // Number | The user ID of the member
apiInstance.deleteV3GroupsIdMembersUserId(id, userId, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **userId** | **Number**| The user ID of the member | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3Groups

> Group getV3Groups(opts)

Get a groups list

Get a groups list

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let opts = {
  'statistics': true, // Boolean | Include project statistics
  'allAvailable': true, // Boolean | Show all group that you have access to
  'search': "search_example", // String | Search for a specific group
  'orderBy': "'name'", // String | Order by name or path
  'sort': "'asc'", // String | Sort by asc (ascending) or desc (descending)
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'skipGroups': 56 // [Number] | Array of group ids to exclude from list
};
apiInstance.getV3Groups(opts, (error, data, response) => {
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
 **statistics** | **Boolean**| Include project statistics | [optional] 
 **allAvailable** | **Boolean**| Show all group that you have access to | [optional] 
 **search** | **String**| Search for a specific group | [optional] 
 **orderBy** | **String**| Order by name or path | [optional] [default to &#39;name&#39;]
 **sort** | **String**| Sort by asc (ascending) or desc (descending) | [optional] [default to &#39;asc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **skipGroups** | [**[Number]**](Number.md)| Array of group ids to exclude from list | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getV3GroupsId

> GroupDetail getV3GroupsId(id)

Get a single group, with containing projects.

Get a single group, with containing projects.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
apiInstance.getV3GroupsId(id, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 

### Return type

[**GroupDetail**](GroupDetail.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdAccessRequests

> AccessRequester getV3GroupsIdAccessRequests(id, opts)

Gets a list of access requests for a group.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3GroupsIdAccessRequests(id, opts, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AccessRequester**](AccessRequester.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdIssues

> Issue getV3GroupsIdIssues(id, opts)

Get a list of group issues

Get a list of group issues

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
let opts = {
  'state': "'opened'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3GroupsIdIssues(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 
 **state** | **String**| Return opened, closed, or all issues | [optional] [default to &#39;opened&#39;]
 **labels** | **String**| Comma-separated list of label names | [optional] 
 **milestone** | **String**| Return issues for a specific milestone | [optional] 
 **orderBy** | **String**| Return issues ordered by &#x60;created_at&#x60; or &#x60;updated_at&#x60; fields. | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return issues sorted in &#x60;asc&#x60; or &#x60;desc&#x60; order. | [optional] [default to &#39;desc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdMembers

> Member getV3GroupsIdMembers(id, opts)

Gets a list of group or project members viewable by the authenticated user.

Gets a list of group or project members viewable by the authenticated user.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3GroupsIdMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **query** | **String**| A query string to search for members | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdMembersUserId

> Member getV3GroupsIdMembersUserId(id, userId)

Gets a member of a group or project.

Gets a member of a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let userId = 56; // Number | The user ID of the member
apiInstance.getV3GroupsIdMembersUserId(id, userId, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **userId** | **Number**| The user ID of the member | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdNotificationSettings

> NotificationSetting getV3GroupsIdNotificationSettings(id)

Get group level notification level settings, defaults to Global

This feature was introduced in GitLab 8.12

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3GroupsIdNotificationSettings(id, (error, data, response) => {
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
 **id** | **String**| The group ID or project ID or project NAMESPACE/PROJECT_NAME | 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsIdProjects

> Project getV3GroupsIdProjects(id, opts)

Get a list of projects in this group.

Get a list of projects in this group.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
let opts = {
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3GroupsIdProjects(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3GroupsOwned

> Group getV3GroupsOwned(opts)

Get list of owned groups for authenticated user

Get list of owned groups for authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'statistics': true // Boolean | Include project statistics
};
apiInstance.getV3GroupsOwned(opts, (error, data, response) => {
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
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **statistics** | **Boolean**| Include project statistics | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3Groups

> Group postV3Groups(UNKNOWN_BASE_TYPE)

Create a group. Available only for users who can create groups.

Create a group. Available only for users who can create groups.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Groups(UNKNOWN_BASE_TYPE, (error, data, response) => {
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
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Group**](Group.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3GroupsIdAccessRequests

> AccessRequester postV3GroupsIdAccessRequests(id)

Requests access for the authenticated user to a group.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
apiInstance.postV3GroupsIdAccessRequests(id, (error, data, response) => {
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
 **id** | **String**| The group ID | 

### Return type

[**AccessRequester**](AccessRequester.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3GroupsIdMembers

> Member postV3GroupsIdMembers(id, UNKNOWN_BASE_TYPE)

Adds a member to a group or project.

Adds a member to a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3GroupsIdMembers(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3GroupsIdProjectsProjectId

> GroupDetail postV3GroupsIdProjectsProjectId(id, projectId)

Transfer a project to the group namespace. Available only for admin.

Transfer a project to the group namespace. Available only for admin.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
let projectId = "projectId_example"; // String | The ID or path of the project
apiInstance.postV3GroupsIdProjectsProjectId(id, projectId, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 
 **projectId** | **String**| The ID or path of the project | 

### Return type

[**GroupDetail**](GroupDetail.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putV3GroupsId

> Group putV3GroupsId(id, opts)

Update a group. Available only for users who can administrate groups.

Update a group. Available only for users who can administrate groups.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The ID of a group
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3GroupsId(id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of a group | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3GroupsIdAccessRequestsUserIdApprove

> Member putV3GroupsIdAccessRequestsUserIdApprove(id, userId, opts)

Approves an access request for the given user.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let userId = 56; // Number | The user ID of the access requester
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3GroupsIdAccessRequestsUserIdApprove(id, userId, opts, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **userId** | **Number**| The user ID of the access requester | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3GroupsIdMembersUserId

> Member putV3GroupsIdMembersUserId(id, userId, UNKNOWN_BASE_TYPE)

Updates a member of a group or project.

Updates a member of a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID
let userId = 56; // Number | The user ID of the new member
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3GroupsIdMembersUserId(id, userId, UNKNOWN_BASE_TYPE, (error, data, response) => {
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
 **id** | **String**| The group ID | 
 **userId** | **Number**| The user ID of the new member | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3GroupsIdNotificationSettings

> NotificationSetting putV3GroupsIdNotificationSettings(id, opts)

Update group level notification level settings, defaults to Global

This feature was introduced in GitLab 8.12

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi();
let id = "id_example"; // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3GroupsIdNotificationSettings(id, opts, (error, data, response) => {
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
 **id** | **String**| The group ID or project ID or project NAMESPACE/PROJECT_NAME | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

