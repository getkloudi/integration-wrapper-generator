# Jira.AvatarsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**avatarTypeSystemGet**](AvatarsApi.md#avatarTypeSystemGet) | **GET** /avatar/{type}/system | Get system avatars by type
[**universalAvatarTypeTypeOwnerEntityIdGet**](AvatarsApi.md#universalAvatarTypeTypeOwnerEntityIdGet) | **GET** /universal_avatar/type/{type}/owner/{entityId} | Get avatars
[**universalAvatarTypeTypeOwnerEntityIdPost**](AvatarsApi.md#universalAvatarTypeTypeOwnerEntityIdPost) | **POST** /universal_avatar/type/{type}/owner/{entityId} | Load avatar
[**universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete**](AvatarsApi.md#universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete) | **DELETE** /universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id} | Delete avatar



## avatarTypeSystemGet

> SystemAvatars avatarTypeSystemGet(cloudid, type)

Get system avatars by type

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let type = "type_example"; // String | The avatar type.
apiInstance.avatarTypeSystemGet(cloudid, type, (error, data, response) => {
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
 **type** | **String**| The avatar type. | 

### Return type

[**SystemAvatars**](SystemAvatars.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## universalAvatarTypeTypeOwnerEntityIdGet

> Avatars universalAvatarTypeTypeOwnerEntityIdGet(cloudid, type, entityId)

Get avatars

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let type = "type_example"; // String | The avatar type.
let entityId = "entityId_example"; // String | The ID of the item the avatar is associated with.
apiInstance.universalAvatarTypeTypeOwnerEntityIdGet(cloudid, type, entityId, (error, data, response) => {
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
 **type** | **String**| The avatar type. | 
 **entityId** | **String**| The ID of the item the avatar is associated with. | 

### Return type

[**Avatars**](Avatars.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## universalAvatarTypeTypeOwnerEntityIdPost

> Avatar universalAvatarTypeTypeOwnerEntityIdPost(cloudid, type, entityId, size, body, opts)

Load avatar

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let type = "type_example"; // String | The avatar type.
let entityId = "entityId_example"; // String | The ID of the item the avatar is associated with.
let size = 56; // Number | The length of each side of the crop region.
let body = null; // Object | 
let opts = {
  'x': 0, // Number | The X coordinate of the top-left corner of the crop region.
  'y': 0 // Number | The Y coordinate of the top-left corner of the crop region.
};
apiInstance.universalAvatarTypeTypeOwnerEntityIdPost(cloudid, type, entityId, size, body, opts, (error, data, response) => {
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
 **type** | **String**| The avatar type. | 
 **entityId** | **String**| The ID of the item the avatar is associated with. | 
 **size** | **Number**| The length of each side of the crop region. | 
 **body** | **Object**|  | 
 **x** | **Number**| The X coordinate of the top-left corner of the crop region. | [optional] [default to 0]
 **y** | **Number**| The Y coordinate of the top-left corner of the crop region. | [optional] [default to 0]

### Return type

[**Avatar**](Avatar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete

> universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(cloudid, type, owningObjectId, id)

Delete avatar

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.AvatarsApi();
let cloudid = null; // Object | Cloudi of the project
let type = "type_example"; // String | The avatar type.
let owningObjectId = "owningObjectId_example"; // String | The ID of the item the avatar is associated with.
let id = 789; // Number | The ID of the avatar.
apiInstance.universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(cloudid, type, owningObjectId, id, (error, data, response) => {
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
 **type** | **String**| The avatar type. | 
 **owningObjectId** | **String**| The ID of the item the avatar is associated with. | 
 **id** | **Number**| The ID of the avatar. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

