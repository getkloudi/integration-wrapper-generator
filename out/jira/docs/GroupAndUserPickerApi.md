# Jira.GroupAndUserPickerApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**groupuserpickerGet**](GroupAndUserPickerApi.md#groupuserpickerGet) | **GET** /groupuserpicker | Find users and groups



## groupuserpickerGet

> FoundUsersAndGroups groupuserpickerGet(cloudid, query, opts)

Find users and groups

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.GroupAndUserPickerApi();
let cloudid = null; // Object | Cloudi of the project
let query = "query_example"; // String | The search string.
let opts = {
  'maxResults': 50, // Number | The maximum number of items to return in each list.
  'showAvatar': false, // Boolean | Whether the user avatar should be returned. If an invalid value is provided, the default value is used.
  'fieldId': "fieldId_example", // String | The custom field ID of the field this request is for.
  'projectId': ["null"], // [String] | The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present.
  'issueTypeId': ["null"], // [String] | The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present.
  'avatarSize': "'xsmall'", // String | The size of the avatar to return. If an invalid value is provided, the default value is used.
  'caseInsensitive': false, // Boolean | Whether the search for groups should be case insensitive.
  'excludeConnectAddons': false // Boolean | Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used.
};
apiInstance.groupuserpickerGet(cloudid, query, opts, (error, data, response) => {
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
 **query** | **String**| The search string. | 
 **maxResults** | **Number**| The maximum number of items to return in each list. | [optional] [default to 50]
 **showAvatar** | **Boolean**| Whether the user avatar should be returned. If an invalid value is provided, the default value is used. | [optional] [default to false]
 **fieldId** | **String**| The custom field ID of the field this request is for. | [optional] 
 **projectId** | [**[String]**](String.md)| The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, &#x60;projectId&#x3D;10000&amp;projectId&#x3D;10001&#x60;. This parameter is only used when &#x60;fieldId&#x60; is present. | [optional] 
 **issueTypeId** | [**[String]**](String.md)| The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, &#x60;issueTypeId&#x3D;10000&amp;issueTypeId&#x3D;10001&#x60;. Special values, such as &#x60;-1&#x60; (all standard issue types) and &#x60;-2&#x60; (all subtask issue types), are supported. This parameter is only used when &#x60;fieldId&#x60; is present. | [optional] 
 **avatarSize** | **String**| The size of the avatar to return. If an invalid value is provided, the default value is used. | [optional] [default to &#39;xsmall&#39;]
 **caseInsensitive** | **Boolean**| Whether the search for groups should be case insensitive. | [optional] [default to false]
 **excludeConnectAddons** | **Boolean**| Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. | [optional] [default to false]

### Return type

[**FoundUsersAndGroups**](FoundUsersAndGroups.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

