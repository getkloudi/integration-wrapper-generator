# Jira.ProjectAvatarsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdOrKeyAvatar2Post**](ProjectAvatarsApi.md#projectProjectIdOrKeyAvatar2Post) | **POST** /project/{projectIdOrKey}/avatar2 | Load project avatar
[**projectProjectIdOrKeyAvatarIdDelete**](ProjectAvatarsApi.md#projectProjectIdOrKeyAvatarIdDelete) | **DELETE** /project/{projectIdOrKey}/avatar/{id} | Delete project avatar
[**projectProjectIdOrKeyAvatarPut**](ProjectAvatarsApi.md#projectProjectIdOrKeyAvatarPut) | **PUT** /project/{projectIdOrKey}/avatar | Set project avatar
[**projectProjectIdOrKeyAvatarsGet**](ProjectAvatarsApi.md#projectProjectIdOrKeyAvatarsGet) | **GET** /project/{projectIdOrKey}/avatars | Get all project avatars



## projectProjectIdOrKeyAvatar2Post

> Avatar projectProjectIdOrKeyAvatar2Post(cloudid, projectIdOrKey, body, opts)

Load project avatar

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectAvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The ID or (case-sensitive) key of the project.
let body = null; // Object | 
let opts = {
  'x': 0, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 0, // Number | The Y coordinate of the top-left corner of the crop region.
  'size': 56 // Number | The length of each side of the crop region.
};
apiInstance.projectProjectIdOrKeyAvatar2Post(cloudid, projectIdOrKey, body, opts, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The ID or (case-sensitive) key of the project. | 
 **body** | **Object**|  | 
 **x** | **Number**| The X coordinate of the top-left corner of the crop region. | [optional] [default to 0]
 **y** | **Number**| The Y coordinate of the top-left corner of the crop region. | [optional] [default to 0]
 **size** | **Number**| The length of each side of the crop region. | [optional] 

### Return type

[**Avatar**](Avatar.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyAvatarIdDelete

> projectProjectIdOrKeyAvatarIdDelete(cloudid, projectIdOrKey, id)

Delete project avatar

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectAvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or (case-sensitive) key.
let id = 789; // Number | The ID of the avatar.
apiInstance.projectProjectIdOrKeyAvatarIdDelete(cloudid, projectIdOrKey, id, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or (case-sensitive) key. | 
 **id** | **Number**| The ID of the avatar. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdOrKeyAvatarPut

> Object projectProjectIdOrKeyAvatarPut(cloudid, projectIdOrKey, body)

Set project avatar

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectAvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The ID or (case-sensitive) key of the project.
let body = new Jira.Avatar(); // Avatar | 
apiInstance.projectProjectIdOrKeyAvatarPut(cloudid, projectIdOrKey, body, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The ID or (case-sensitive) key of the project. | 
 **body** | [**Avatar**](Avatar.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectIdOrKeyAvatarsGet

> ProjectAvatars projectProjectIdOrKeyAvatarsGet(cloudid, projectIdOrKey)

Get all project avatars

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectAvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The ID or (case-sensitive) key of the project.
apiInstance.projectProjectIdOrKeyAvatarsGet(cloudid, projectIdOrKey, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The ID or (case-sensitive) key of the project. | 

### Return type

[**ProjectAvatars**](ProjectAvatars.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

