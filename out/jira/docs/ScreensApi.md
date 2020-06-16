# Jira.ScreensApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fieldFieldIdScreensGet**](ScreensApi.md#fieldFieldIdScreensGet) | **GET** /field/{fieldId}/screens | Get screens for a field
[**screensAddToDefaultFieldIdPost**](ScreensApi.md#screensAddToDefaultFieldIdPost) | **POST** /screens/addToDefault/{fieldId} | Add field to default screen
[**screensGet**](ScreensApi.md#screensGet) | **GET** /screens | Get all screens
[**screensScreenIdAvailableFieldsGet**](ScreensApi.md#screensScreenIdAvailableFieldsGet) | **GET** /screens/{screenId}/availableFields | Get available screen fields
[**screensScreenIdTabsGet**](ScreensApi.md#screensScreenIdTabsGet) | **GET** /screens/{screenId}/tabs | Get all screen tabs
[**screensScreenIdTabsPost**](ScreensApi.md#screensScreenIdTabsPost) | **POST** /screens/{screenId}/tabs | Create screen tab
[**screensScreenIdTabsTabIdDelete**](ScreensApi.md#screensScreenIdTabsTabIdDelete) | **DELETE** /screens/{screenId}/tabs/{tabId} | Delete screen tab
[**screensScreenIdTabsTabIdFieldsGet**](ScreensApi.md#screensScreenIdTabsTabIdFieldsGet) | **GET** /screens/{screenId}/tabs/{tabId}/fields | Get all screen tab fields
[**screensScreenIdTabsTabIdFieldsIdDelete**](ScreensApi.md#screensScreenIdTabsTabIdFieldsIdDelete) | **DELETE** /screens/{screenId}/tabs/{tabId}/fields/{id} | Remove screen tab field
[**screensScreenIdTabsTabIdFieldsIdMovePost**](ScreensApi.md#screensScreenIdTabsTabIdFieldsIdMovePost) | **POST** /screens/{screenId}/tabs/{tabId}/fields/{id}/move | Move screen tab field
[**screensScreenIdTabsTabIdFieldsPost**](ScreensApi.md#screensScreenIdTabsTabIdFieldsPost) | **POST** /screens/{screenId}/tabs/{tabId}/fields | Add screen tab field
[**screensScreenIdTabsTabIdMovePosPost**](ScreensApi.md#screensScreenIdTabsTabIdMovePosPost) | **POST** /screens/{screenId}/tabs/{tabId}/move/{pos} | Move screen tab
[**screensScreenIdTabsTabIdPut**](ScreensApi.md#screensScreenIdTabsTabIdPut) | **PUT** /screens/{screenId}/tabs/{tabId} | Update screen tab
[**screenschemeGet**](ScreensApi.md#screenschemeGet) | **GET** /screenscheme | Get screen schemes



## fieldFieldIdScreensGet

> PageBeanScreen fieldFieldIdScreensGet(cloudid, fieldId, opts)

Get screens for a field

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = "fieldId_example"; // String | The ID of the field to return screens for.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 100 // Number | The maximum number of items to return per page.
};
apiInstance.fieldFieldIdScreensGet(cloudid, fieldId, opts, (error, data, response) => {
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
 **fieldId** | **String**| The ID of the field to return screens for. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 100]

### Return type

[**PageBeanScreen**](PageBeanScreen.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensAddToDefaultFieldIdPost

> Object screensAddToDefaultFieldIdPost(cloudid, fieldId)

Add field to default screen

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = "fieldId_example"; // String | The ID of the field.
apiInstance.screensAddToDefaultFieldIdPost(cloudid, fieldId, (error, data, response) => {
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
 **fieldId** | **String**| The ID of the field. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensGet

> PageBeanScreen screensGet(cloudid, opts)

Get all screens

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 100 // Number | The maximum number of items to return per page.
};
apiInstance.screensGet(cloudid, opts, (error, data, response) => {
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

[**PageBeanScreen**](PageBeanScreen.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensScreenIdAvailableFieldsGet

> [ScreenableField] screensScreenIdAvailableFieldsGet(cloudid, screenId)

Get available screen fields

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
apiInstance.screensScreenIdAvailableFieldsGet(cloudid, screenId, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 

### Return type

[**[ScreenableField]**](ScreenableField.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensScreenIdTabsGet

> [ScreenableTab] screensScreenIdTabsGet(cloudid, screenId, opts)

Get all screen tabs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let opts = {
  'projectKey': "projectKey_example" // String | The key of the project.
};
apiInstance.screensScreenIdTabsGet(cloudid, screenId, opts, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **projectKey** | **String**| The key of the project. | [optional] 

### Return type

[**[ScreenableTab]**](ScreenableTab.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensScreenIdTabsPost

> ScreenableTab screensScreenIdTabsPost(cloudid, screenId, body)

Create screen tab

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let body = new Jira.ScreenableTab(); // ScreenableTab | 
apiInstance.screensScreenIdTabsPost(cloudid, screenId, body, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **body** | [**ScreenableTab**](ScreenableTab.md)|  | 

### Return type

[**ScreenableTab**](ScreenableTab.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## screensScreenIdTabsTabIdDelete

> screensScreenIdTabsTabIdDelete(cloudid, screenId, tabId)

Delete screen tab

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
apiInstance.screensScreenIdTabsTabIdDelete(cloudid, screenId, tabId, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## screensScreenIdTabsTabIdFieldsGet

> [ScreenableField] screensScreenIdTabsTabIdFieldsGet(cloudid, screenId, tabId, opts)

Get all screen tab fields

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let opts = {
  'projectKey': "projectKey_example" // String | The key of the project.
};
apiInstance.screensScreenIdTabsTabIdFieldsGet(cloudid, screenId, tabId, opts, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **projectKey** | **String**| The key of the project. | [optional] 

### Return type

[**[ScreenableField]**](ScreenableField.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensScreenIdTabsTabIdFieldsIdDelete

> screensScreenIdTabsTabIdFieldsIdDelete(cloudid, screenId, tabId, id)

Remove screen tab field

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let id = "id_example"; // String | The ID of the field.
apiInstance.screensScreenIdTabsTabIdFieldsIdDelete(cloudid, screenId, tabId, id, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **id** | **String**| The ID of the field. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## screensScreenIdTabsTabIdFieldsIdMovePost

> Object screensScreenIdTabsTabIdFieldsIdMovePost(cloudid, screenId, tabId, id, body)

Move screen tab field

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let id = "id_example"; // String | The ID of the field.
let body = new Jira.MoveFieldBean(); // MoveFieldBean | 
apiInstance.screensScreenIdTabsTabIdFieldsIdMovePost(cloudid, screenId, tabId, id, body, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **id** | **String**| The ID of the field. | 
 **body** | [**MoveFieldBean**](MoveFieldBean.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## screensScreenIdTabsTabIdFieldsPost

> ScreenableField screensScreenIdTabsTabIdFieldsPost(cloudid, screenId, tabId, body)

Add screen tab field

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let body = new Jira.AddFieldBean(); // AddFieldBean | 
apiInstance.screensScreenIdTabsTabIdFieldsPost(cloudid, screenId, tabId, body, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **body** | [**AddFieldBean**](AddFieldBean.md)|  | 

### Return type

[**ScreenableField**](ScreenableField.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## screensScreenIdTabsTabIdMovePosPost

> Object screensScreenIdTabsTabIdMovePosPost(cloudid, screenId, tabId, pos)

Move screen tab

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let pos = 56; // Number | The position of tab. The base index is 0.
apiInstance.screensScreenIdTabsTabIdMovePosPost(cloudid, screenId, tabId, pos, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **pos** | **Number**| The position of tab. The base index is 0. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## screensScreenIdTabsTabIdPut

> ScreenableTab screensScreenIdTabsTabIdPut(cloudid, screenId, tabId, body)

Update screen tab

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let screenId = 789; // Number | The ID of the screen.
let tabId = 789; // Number | The ID of the screen tab.
let body = new Jira.ScreenableTab(); // ScreenableTab | 
apiInstance.screensScreenIdTabsTabIdPut(cloudid, screenId, tabId, body, (error, data, response) => {
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
 **screenId** | **Number**| The ID of the screen. | 
 **tabId** | **Number**| The ID of the screen tab. | 
 **body** | [**ScreenableTab**](ScreenableTab.md)|  | 

### Return type

[**ScreenableTab**](ScreenableTab.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## screenschemeGet

> PageBeanScreenScheme screenschemeGet(cloudid, opts)

Get screen schemes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ScreensApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 25, // Number | The maximum number of items to return per page.
  'id': [null] // [Number] | The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
};
apiInstance.screenschemeGet(cloudid, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 25]
 **id** | [**[Number]**](Number.md)| The list of screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, &#x60;id&#x3D;10000&amp;id&#x3D;10001&#x60;. | [optional] 

### Return type

[**PageBeanScreenScheme**](PageBeanScreenScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

