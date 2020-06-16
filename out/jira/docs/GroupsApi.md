# Jira.GroupsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupDelete**](GroupsApi.md#groupDelete) | **DELETE** /group | Remove group
[**groupGet**](GroupsApi.md#groupGet) | **GET** /group | Get group
[**groupMemberGet**](GroupsApi.md#groupMemberGet) | **GET** /group/member | Get users from group
[**groupPost**](GroupsApi.md#groupPost) | **POST** /group | Create group
[**groupUserDelete**](GroupsApi.md#groupUserDelete) | **DELETE** /group/user | Remove user from group
[**groupUserPost**](GroupsApi.md#groupUserPost) | **POST** /group/user | Add user to group
[**groupsPickerGet**](GroupsApi.md#groupsPickerGet) | **GET** /groups/picker | Find groups



## groupDelete

> groupDelete(cloudid, groupname, opts)

Remove group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let groupname = "groupname_example"; // String | The name of the group.
let opts = {
  'swapGroup': "swapGroup_example" // String | The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion.
};
apiInstance.groupDelete(cloudid, groupname, opts, (error, data, response) => {
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
 **groupname** | **String**| The name of the group. | 
 **swapGroup** | **String**| The group to transfer restrictions to. Only comments and worklogs are transferred. If restrictions are not transferred, comments and worklogs are inaccessible after the deletion. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## groupGet

> Group groupGet(cloudid, groupname, opts)

Get group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let groupname = "groupname_example"; // String | The name of the group.
let opts = {
  'expand': "expand_example" // String | List of fields to expand.
};
apiInstance.groupGet(cloudid, groupname, opts, (error, data, response) => {
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
 **groupname** | **String**| The name of the group. | 
 **expand** | **String**| List of fields to expand. | [optional] 

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupMemberGet

> PageBeanUserDetails groupMemberGet(cloudid, groupname, opts)

Get users from group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let groupname = "groupname_example"; // String | The name of the group.
let opts = {
  'includeInactiveUsers': false, // Boolean | Include inactive users.
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50 // Number | The maximum number of items to return per page.
};
apiInstance.groupMemberGet(cloudid, groupname, opts, (error, data, response) => {
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
 **groupname** | **String**| The name of the group. | 
 **includeInactiveUsers** | **Boolean**| Include inactive users. | [optional] [default to false]
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]

### Return type

[**PageBeanUserDetails**](PageBeanUserDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupPost

> Group groupPost(cloudid, body)

Create group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.AddGroupBean(); // AddGroupBean | The name of the group.
apiInstance.groupPost(cloudid, body, (error, data, response) => {
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
 **body** | [**AddGroupBean**](AddGroupBean.md)| The name of the group. | 

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## groupUserDelete

> groupUserDelete(cloudid, groupname, accountId, opts)

Remove user from group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let groupname = "groupname_example"; // String | The name of the group.
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
let opts = {
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.groupUserDelete(cloudid, groupname, accountId, opts, (error, data, response) => {
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
 **groupname** | **String**| The name of the group. | 
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## groupUserPost

> Group groupUserPost(cloudid, groupname, body)

Add user to group

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let groupname = "groupname_example"; // String | The name of the group (case sensitive).
let body = new Jira.UpdateUserToGroupBean(); // UpdateUserToGroupBean | The user to add to the group.
apiInstance.groupUserPost(cloudid, groupname, body, (error, data, response) => {
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
 **groupname** | **String**| The name of the group (case sensitive). | 
 **body** | [**UpdateUserToGroupBean**](UpdateUserToGroupBean.md)| The user to add to the group. | 

### Return type

[**Group**](Group.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## groupsPickerGet

> FoundGroups groupsPickerGet(cloudid, opts)

Find groups

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.GroupsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'accountId': "accountId_example", // String | This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get).
  'query': "query_example", // String | The string to find in group names.
  'exclude': ["null"], // [String] | A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, `exclude=group1&exclude=group2`.
  'maxResults': 56, // Number | The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property `jira.ajax.autocomplete.limit`.
  'userName': "userName_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.groupsPickerGet(cloudid, opts, (error, data, response) => {
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
 **accountId** | **String**| This parameter is deprecated, setting it does not affect the results. To find groups containing a particular user, use [Get user groups](#api-rest-api-3-user-groups-get). | [optional] 
 **query** | **String**| The string to find in group names. | [optional] 
 **exclude** | [**[String]**](String.md)| A group to exclude from the result. To exclude multiple groups, provide an ampersand-separated list. For example, &#x60;exclude&#x3D;group1&amp;exclude&#x3D;group2&#x60;. | [optional] 
 **maxResults** | **Number**| The maximum number of groups to return. The maximum number of groups that can be returned is limited by the system property &#x60;jira.ajax.autocomplete.limit&#x60;. | [optional] 
 **userName** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**FoundGroups**](FoundGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

