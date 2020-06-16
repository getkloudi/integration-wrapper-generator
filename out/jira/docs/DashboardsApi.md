# Jira.DashboardsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dashboardDashboardIdItemsItemIdPropertiesGet**](DashboardsApi.md#dashboardDashboardIdItemsItemIdPropertiesGet) | **GET** /dashboard/{dashboardId}/items/{itemId}/properties | Get dashboard item property keys
[**dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete**](DashboardsApi.md#dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete) | **DELETE** /dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Delete dashboard item property
[**dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet**](DashboardsApi.md#dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet) | **GET** /dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Get dashboard item property
[**dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut**](DashboardsApi.md#dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut) | **PUT** /dashboard/{dashboardId}/items/{itemId}/properties/{propertyKey} | Set dashboard item property
[**dashboardGet**](DashboardsApi.md#dashboardGet) | **GET** /dashboard | Get all dashboards
[**dashboardIdCopyPost**](DashboardsApi.md#dashboardIdCopyPost) | **POST** /dashboard/{id}/copy | Copy dashboard
[**dashboardIdDelete**](DashboardsApi.md#dashboardIdDelete) | **DELETE** /dashboard/{id} | Delete dashboard
[**dashboardIdGet**](DashboardsApi.md#dashboardIdGet) | **GET** /dashboard/{id} | Get dashboard
[**dashboardIdPut**](DashboardsApi.md#dashboardIdPut) | **PUT** /dashboard/{id} | Update dashboard
[**dashboardPost**](DashboardsApi.md#dashboardPost) | **POST** /dashboard | Create dashboard
[**dashboardSearchGet**](DashboardsApi.md#dashboardSearchGet) | **GET** /dashboard/search | Search for dashboards



## dashboardDashboardIdItemsItemIdPropertiesGet

> PropertyKeys dashboardDashboardIdItemsItemIdPropertiesGet(cloudid, dashboardId, itemId)

Get dashboard item property keys

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let dashboardId = "dashboardId_example"; // String | The ID of the dashboard.
let itemId = "itemId_example"; // String | The ID of the dashboard item.
apiInstance.dashboardDashboardIdItemsItemIdPropertiesGet(cloudid, dashboardId, itemId, (error, data, response) => {
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
 **dashboardId** | **String**| The ID of the dashboard. | 
 **itemId** | **String**| The ID of the dashboard item. | 

### Return type

[**PropertyKeys**](PropertyKeys.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete

> dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(cloudid, dashboardId, itemId, propertyKey)

Delete dashboard item property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let dashboardId = "dashboardId_example"; // String | The ID of the dashboard.
let itemId = "itemId_example"; // String | The ID of the dashboard item.
let propertyKey = "propertyKey_example"; // String | The key of the dashboard item property.
apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyDelete(cloudid, dashboardId, itemId, propertyKey, (error, data, response) => {
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
 **dashboardId** | **String**| The ID of the dashboard. | 
 **itemId** | **String**| The ID of the dashboard item. | 
 **propertyKey** | **String**| The key of the dashboard item property. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet

> EntityProperty dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(cloudid, dashboardId, itemId, propertyKey)

Get dashboard item property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let dashboardId = "dashboardId_example"; // String | The ID of the dashboard.
let itemId = "itemId_example"; // String | The ID of the dashboard item.
let propertyKey = "propertyKey_example"; // String | The key of the dashboard item property.
apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyGet(cloudid, dashboardId, itemId, propertyKey, (error, data, response) => {
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
 **dashboardId** | **String**| The ID of the dashboard. | 
 **itemId** | **String**| The ID of the dashboard item. | 
 **propertyKey** | **String**| The key of the dashboard item property. | 

### Return type

[**EntityProperty**](EntityProperty.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut

> Object dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(cloudid, dashboardId, itemId, propertyKey, body)

Set dashboard item property

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let dashboardId = "dashboardId_example"; // String | The ID of the dashboard.
let itemId = "itemId_example"; // String | The ID of the dashboard item.
let propertyKey = "propertyKey_example"; // String | The key of the dashboard item property. The maximum length is 255 characters.
let body = null; // Object | 
apiInstance.dashboardDashboardIdItemsItemIdPropertiesPropertyKeyPut(cloudid, dashboardId, itemId, propertyKey, body, (error, data, response) => {
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
 **dashboardId** | **String**| The ID of the dashboard. | 
 **itemId** | **String**| The ID of the dashboard item. | 
 **propertyKey** | **String**| The key of the dashboard item property. The maximum length is 255 characters. | 
 **body** | **Object**|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboardGet

> PageOfDashboards dashboardGet(cloudid, opts)

Get all dashboards

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'filter': "filter_example", // String | The filter applied to the list of dashboards. Valid values are:   *  `favourite` Returns dashboards the user has marked as favorite.  *  `my` Returns dashboards owned by the user.
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 20 // Number | The maximum number of items to return per page.
};
apiInstance.dashboardGet(cloudid, opts, (error, data, response) => {
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
 **filter** | **String**| The filter applied to the list of dashboards. Valid values are:   *  &#x60;favourite&#x60; Returns dashboards the user has marked as favorite.  *  &#x60;my&#x60; Returns dashboards owned by the user. | [optional] 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 20]

### Return type

[**PageOfDashboards**](PageOfDashboards.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardIdCopyPost

> Dashboard dashboardIdCopyPost(cloudid, id, body)

Copy dashboard

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | 
let body = new Jira.DashboardRequest(); // DashboardRequest | Dashboard details.
apiInstance.dashboardIdCopyPost(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**|  | 
 **body** | [**DashboardRequest**](DashboardRequest.md)| Dashboard details. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboardIdDelete

> dashboardIdDelete(cloudid, id)

Delete dashboard

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the dashboard.
apiInstance.dashboardIdDelete(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the dashboard. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardIdGet

> Dashboard dashboardIdGet(cloudid, id)

Get dashboard

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the dashboard.
apiInstance.dashboardIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the dashboard. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## dashboardIdPut

> Dashboard dashboardIdPut(cloudid, id, body)

Update dashboard

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the dashboard to update.
let body = new Jira.DashboardRequest(); // DashboardRequest | Replacement dashboard details.
apiInstance.dashboardIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the dashboard to update. | 
 **body** | [**DashboardRequest**](DashboardRequest.md)| Replacement dashboard details. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboardPost

> Dashboard dashboardPost(cloudid, body)

Create dashboard

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.DashboardRequest(); // DashboardRequest | Dashboard details.
apiInstance.dashboardPost(cloudid, body, (error, data, response) => {
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
 **body** | [**DashboardRequest**](DashboardRequest.md)| Dashboard details. | 

### Return type

[**Dashboard**](Dashboard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## dashboardSearchGet

> PageBeanDashboard dashboardSearchGet(cloudid, opts)

Search for dashboards

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.DashboardsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'dashboardName': "dashboardName_example", // String | String used to perform a case-insensitive partial match with `name`.
  'accountId': "accountId_example", // String | User account ID used to return dashboards with the matching `owner.accountId`. This parameter cannot be used with the `owner` parameter.
  'owner': "owner_example", // String | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching `owner.name`. This parameter cannot be used with the `accountId` parameter.
  'groupname': "groupname_example", // String | Group name used to returns dashboards that are shared with a group that matches `sharePermissions.group.name`.
  'projectId': 789, // Number | Project ID used to returns dashboards that are shared with a project that matches `sharePermissions.project.id`.
  'orderBy': "'name'", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by dashboard popularity.  *  `id` Sorts by dashboard ID.  *  `is_favourite` Sorts by whether the dashboard is marked as a favorite.  *  `name` Sorts by dashboard name.  *  `owner` Sorts by dashboard owner name.
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the dashboard.  *  `owner` Returns the owner of the dashboard.  *  `viewUrl` Returns the URL that is used to view the dashboard.  *  `favourite` Returns `isFavourite`, an indicator of whether the user has set the dashboard as a favorite.  *  `favouritedCount` Returns `popularity`, a count of how many users have set this dashboard as a favorite.  *  `sharePermissions` Returns details of the share permissions defined for the dashboard.
};
apiInstance.dashboardSearchGet(cloudid, opts, (error, data, response) => {
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
 **dashboardName** | **String**| String used to perform a case-insensitive partial match with &#x60;name&#x60;. | [optional] 
 **accountId** | **String**| User account ID used to return dashboards with the matching &#x60;owner.accountId&#x60;. This parameter cannot be used with the &#x60;owner&#x60; parameter. | [optional] 
 **owner** | **String**| This parameter is deprecated because of privacy changes. Use &#x60;accountId&#x60; instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return dashboards with the matching &#x60;owner.name&#x60;. This parameter cannot be used with the &#x60;accountId&#x60; parameter. | [optional] 
 **groupname** | **String**| Group name used to returns dashboards that are shared with a group that matches &#x60;sharePermissions.group.name&#x60;. | [optional] 
 **projectId** | **Number**| Project ID used to returns dashboards that are shared with a project that matches &#x60;sharePermissions.project.id&#x60;. | [optional] 
 **orderBy** | **String**| [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by dashboard description. Note that this sort works independently of whether the expand to display the description field is in use.  *  &#x60;favourite_count&#x60; Sorts by dashboard popularity.  *  &#x60;id&#x60; Sorts by dashboard ID.  *  &#x60;is_favourite&#x60; Sorts by whether the dashboard is marked as a favorite.  *  &#x60;name&#x60; Sorts by dashboard name.  *  &#x60;owner&#x60; Sorts by dashboard owner name. | [optional] [default to &#39;name&#39;]
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **expand** | **String**| Use [expand](#expansion) to include additional information about dashboard in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;description&#x60; Returns the description of the dashboard.  *  &#x60;owner&#x60; Returns the owner of the dashboard.  *  &#x60;viewUrl&#x60; Returns the URL that is used to view the dashboard.  *  &#x60;favourite&#x60; Returns &#x60;isFavourite&#x60;, an indicator of whether the user has set the dashboard as a favorite.  *  &#x60;favouritedCount&#x60; Returns &#x60;popularity&#x60;, a count of how many users have set this dashboard as a favorite.  *  &#x60;sharePermissions&#x60; Returns details of the share permissions defined for the dashboard. | [optional] 

### Return type

[**PageBeanDashboard**](PageBeanDashboard.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

