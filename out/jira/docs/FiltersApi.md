# Jira.FiltersApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterFavouriteGet**](FiltersApi.md#filterFavouriteGet) | **GET** /filter/favourite | Get favorite filters
[**filterGet**](FiltersApi.md#filterGet) | **GET** /filter | Get filters
[**filterIdColumnsDelete**](FiltersApi.md#filterIdColumnsDelete) | **DELETE** /filter/{id}/columns | Reset columns
[**filterIdColumnsGet**](FiltersApi.md#filterIdColumnsGet) | **GET** /filter/{id}/columns | Get columns
[**filterIdColumnsPut**](FiltersApi.md#filterIdColumnsPut) | **PUT** /filter/{id}/columns | Set columns
[**filterIdDelete**](FiltersApi.md#filterIdDelete) | **DELETE** /filter/{id} | Delete filter
[**filterIdFavouriteDelete**](FiltersApi.md#filterIdFavouriteDelete) | **DELETE** /filter/{id}/favourite | Remove filter as favorite
[**filterIdFavouritePut**](FiltersApi.md#filterIdFavouritePut) | **PUT** /filter/{id}/favourite | Add filter as favorite
[**filterIdGet**](FiltersApi.md#filterIdGet) | **GET** /filter/{id} | Get filter
[**filterIdPut**](FiltersApi.md#filterIdPut) | **PUT** /filter/{id} | Update filter
[**filterMyGet**](FiltersApi.md#filterMyGet) | **GET** /filter/my | Get my filters
[**filterPost**](FiltersApi.md#filterPost) | **POST** /filter | Create filter
[**filterSearchGet**](FiltersApi.md#filterSearchGet) | **GET** /filter/search | Search for filters



## filterFavouriteGet

> [Filter] filterFavouriteGet(cloudid, opts)

Get favorite filters

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterFavouriteGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**[Filter]**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterGet

> [Filter] filterGet(cloudid, opts)

Get filters

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**[Filter]**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdColumnsDelete

> filterIdColumnsDelete(cloudid, id)

Reset columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
apiInstance.filterIdColumnsDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## filterIdColumnsGet

> [ColumnItem] filterIdColumnsGet(cloudid, id)

Get columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
apiInstance.filterIdColumnsGet(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 

### Return type

[**[ColumnItem]**](ColumnItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdColumnsPut

> Object filterIdColumnsPut(cloudid, id, opts)

Set columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let opts = {
  'body': "body_example" // [String] | The IDs of the fields to set as columns. In the form data, specify each field as `columns=id`, where `id` is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-<ver>-field-get)). For example, `columns=summary`.
};
apiInstance.filterIdColumnsPut(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **body** | [**[String]**](String.md)| The IDs of the fields to set as columns. In the form data, specify each field as &#x60;columns&#x3D;id&#x60;, where &#x60;id&#x60; is the *id* of a field (as seen in the response for [Get fields](#api-rest-api-&lt;ver&gt;-field-get)). For example, &#x60;columns&#x3D;summary&#x60;. | [optional] 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## filterIdDelete

> filterIdDelete(cloudid, id)

Delete filter

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter to delete.
apiInstance.filterIdDelete(cloudid, id, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter to delete. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## filterIdFavouriteDelete

> Filter filterIdFavouriteDelete(cloudid, id, opts)

Remove filter as favorite

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterIdFavouriteDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdFavouritePut

> Filter filterIdFavouritePut(cloudid, id, opts)

Add filter as favorite

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterIdFavouritePut(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdGet

> Filter filterIdGet(cloudid, id, opts)

Get filter

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter to return.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterIdGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter to return. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterIdPut

> Filter filterIdPut(cloudid, id, body, opts)

Update filter

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let id = 789; // Number | The ID of the filter to update.
let body = new Jira.Filter(); // Filter | The filter to update.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterIdPut(cloudid, id, body, opts, (error, data, response) => {
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
 **id** | **Number**| The ID of the filter to update. | 
 **body** | [**Filter**](Filter.md)| The filter to update. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## filterMyGet

> [Filter] filterMyGet(cloudid, opts)

Get my filters

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
  'includeFavourites': false // Boolean | Include the user's favorite filters in the response.
};
apiInstance.filterMyGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 
 **includeFavourites** | **Boolean**| Include the user&#39;s favorite filters in the response. | [optional] [default to false]

### Return type

[**[Filter]**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## filterPost

> Filter filterPost(cloudid, body, opts)

Create filter

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.Filter(); // Filter | The filter to create.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `sharedUsers` Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don't specify `sharedUsers`, then the `sharedUsers` object is returned but it doesn't list any users. The list of users returned is limited to 1000, to access additional users append `[start-index:end-index]` to the expand request. For example, to access the next 1000 users, use `?expand=sharedUsers[1001:2000]`.  *  `subscriptions` Returns the users that are subscribed to the filter. If you don't specify `subscriptions`, the `subscriptions` object is returned but it doesn't list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append `[start-index:end-index]` to the expand request. For example, to access the next 1000 subscriptions, use `?expand=subscriptions[1001:2000]`.
};
apiInstance.filterPost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**Filter**](Filter.md)| The filter to create. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;sharedUsers&#x60; Returns the users that the filter is shared with. This includes users that can browse projects that the filter is shared with. If you don&#39;t specify &#x60;sharedUsers&#x60;, then the &#x60;sharedUsers&#x60; object is returned but it doesn&#39;t list any users. The list of users returned is limited to 1000, to access additional users append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 users, use &#x60;?expand&#x3D;sharedUsers[1001:2000]&#x60;.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter. If you don&#39;t specify &#x60;subscriptions&#x60;, the &#x60;subscriptions&#x60; object is returned but it doesn&#39;t list any subscriptions. The list of subscriptions returned is limited to 1000, to access additional subscriptions append &#x60;[start-index:end-index]&#x60; to the expand request. For example, to access the next 1000 subscriptions, use &#x60;?expand&#x3D;subscriptions[1001:2000]&#x60;. | [optional] 

### Return type

[**Filter**](Filter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## filterSearchGet

> PageBeanFoundFilter filterSearchGet(cloudid, opts)

Search for filters

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.FiltersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'filterName': "filterName_example", // String | String used to perform a case-insensitive partial match with `name`.
  'accountId': "accountId_example", // String | User account ID used to return filters with the matching `owner.accountId`. This parameter cannot be used with `owner`.
  'owner': "owner_example", // String | This parameter is deprecated because of privacy changes. Use `accountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching `owner.name`. This parameter cannot be used with `accountId`.
  'groupname': "groupname_example", // String | Group name used to returns filters that are shared with a group that matches `sharePermissions.group.groupname`.
  'projectId': 789, // Number | Project ID used to returns filters that are shared with a project that matches `sharePermissions.project.id`.
  'orderBy': "'name'", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  `favourite_count` Sorts by the count of how many users have this filter as a favorite.  *  `is_favourite` Sorts by whether the filter is marked as a favorite.  *  `id` Sorts by filter ID.  *  `name` Sorts by filter name.  *  `owner` Sorts by the ID of the filter owner.
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  `description` Returns the description of the filter.  *  `favourite` Returns an indicator of whether the user has set the filter as a favorite.  *  `favouritedCount` Returns a count of how many users have set this filter as a favorite.  *  `jql` Returns the JQL query that the filter uses.  *  `owner` Returns the owner of the filter.  *  `searchUrl` Returns a URL to perform the filter's JQL query.  *  `sharePermissions` Returns the share permissions defined for the filter.  *  `subscriptions` Returns the users that are subscribed to the filter.  *  `viewUrl` Returns a URL to view the filter.
};
apiInstance.filterSearchGet(cloudid, opts, (error, data, response) => {
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
 **filterName** | **String**| String used to perform a case-insensitive partial match with &#x60;name&#x60;. | [optional] 
 **accountId** | **String**| User account ID used to return filters with the matching &#x60;owner.accountId&#x60;. This parameter cannot be used with &#x60;owner&#x60;. | [optional] 
 **owner** | **String**| This parameter is deprecated because of privacy changes. Use &#x60;accountId&#x60; instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. User name used to return filters with the matching &#x60;owner.name&#x60;. This parameter cannot be used with &#x60;accountId&#x60;. | [optional] 
 **groupname** | **String**| Group name used to returns filters that are shared with a group that matches &#x60;sharePermissions.group.groupname&#x60;. | [optional] 
 **projectId** | **Number**| Project ID used to returns filters that are shared with a project that matches &#x60;sharePermissions.project.id&#x60;. | [optional] 
 **orderBy** | **String**| [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by filter description. Note that this sorting works independently of whether the expand to display the description field is in use.  *  &#x60;favourite_count&#x60; Sorts by the count of how many users have this filter as a favorite.  *  &#x60;is_favourite&#x60; Sorts by whether the filter is marked as a favorite.  *  &#x60;id&#x60; Sorts by filter ID.  *  &#x60;name&#x60; Sorts by filter name.  *  &#x60;owner&#x60; Sorts by the ID of the filter owner. | [optional] [default to &#39;name&#39;]
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **expand** | **String**| Use [expand](#expansion) to include additional information about filter in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;description&#x60; Returns the description of the filter.  *  &#x60;favourite&#x60; Returns an indicator of whether the user has set the filter as a favorite.  *  &#x60;favouritedCount&#x60; Returns a count of how many users have set this filter as a favorite.  *  &#x60;jql&#x60; Returns the JQL query that the filter uses.  *  &#x60;owner&#x60; Returns the owner of the filter.  *  &#x60;searchUrl&#x60; Returns a URL to perform the filter&#39;s JQL query.  *  &#x60;sharePermissions&#x60; Returns the share permissions defined for the filter.  *  &#x60;subscriptions&#x60; Returns the users that are subscribed to the filter.  *  &#x60;viewUrl&#x60; Returns a URL to view the filter. | [optional] 

### Return type

[**PageBeanFoundFilter**](PageBeanFoundFilter.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

