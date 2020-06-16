# Jira.IssueFieldsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fieldFieldIdContextsGet**](IssueFieldsApi.md#fieldFieldIdContextsGet) | **GET** /field/{fieldId}/contexts | Get contexts for a field
[**fieldGet**](IssueFieldsApi.md#fieldGet) | **GET** /field | Get fields
[**fieldPost**](IssueFieldsApi.md#fieldPost) | **POST** /field | Create custom field
[**fieldSearchGet**](IssueFieldsApi.md#fieldSearchGet) | **GET** /field/search | Get fields paginated



## fieldFieldIdContextsGet

> PageBeanContext fieldFieldIdContextsGet(cloudid, fieldId, opts)

Get contexts for a field

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.IssueFieldsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = "fieldId_example"; // String | The ID of the field to return contexts for.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 20 // Number | The maximum number of items to return per page.
};
apiInstance.fieldFieldIdContextsGet(cloudid, fieldId, opts, (error, data, response) => {
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
 **fieldId** | **String**| The ID of the field to return contexts for. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 20]

### Return type

[**PageBeanContext**](PageBeanContext.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldGet

> [FieldDetails] fieldGet(cloudid)

Get fields

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.fieldGet(cloudid, (error, data, response) => {
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

### Return type

[**[FieldDetails]**](FieldDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fieldPost

> FieldDetails fieldPost(cloudid, body)

Create custom field

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.CustomFieldDefinitionJsonBean(); // CustomFieldDefinitionJsonBean | Definition of the custom field to be created
apiInstance.fieldPost(cloudid, body, (error, data, response) => {
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
 **body** | [**CustomFieldDefinitionJsonBean**](CustomFieldDefinitionJsonBean.md)| Definition of the custom field to be created | 

### Return type

[**FieldDetails**](FieldDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## fieldSearchGet

> PageBeanField fieldSearchGet(cloudid, opts)

Get fields paginated

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueFieldsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'type': ["null"], // [String] | The type of fields to search.
  'id': ["null"], // [String] | The IDs of the custom fields to return or, where`query is specified, filter. IDs should be provided in the format customfield_XXXXX.`
  'query': "query_example", // String | String used to perform a case-insensitive partial match with field names or descriptions.
  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `contextsCount` Sorts by the number of contexts related to a field.  *  `lastUsed` Sorts by the date when the value of the field last changed.  *  `name` Sorts by the field name.  *  `screensCount` Sorts by the number of screens related to a field.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` Returns the key for each field.  *  `lastUsed` Returns the date when the value of the field last changed.  *  `screensCount` Returns the number of screens related to a field.  *  `contextsCount` Returns the number of contexts related to a field.  *  `isLocked` Returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og).
};
apiInstance.fieldSearchGet(cloudid, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **type** | [**[String]**](String.md)| The type of fields to search. | [optional] 
 **id** | [**[String]**](String.md)| The IDs of the custom fields to return or, where&#x60;query is specified, filter. IDs should be provided in the format customfield_XXXXX.&#x60; | [optional] 
 **query** | **String**| String used to perform a case-insensitive partial match with field names or descriptions. | [optional] 
 **orderBy** | **String**| [Order](#ordering) the results by a field:   *  &#x60;contextsCount&#x60; Sorts by the number of contexts related to a field.  *  &#x60;lastUsed&#x60; Sorts by the date when the value of the field last changed.  *  &#x60;name&#x60; Sorts by the field name.  *  &#x60;screensCount&#x60; Sorts by the number of screens related to a field. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;key&#x60; Returns the key for each field.  *  &#x60;lastUsed&#x60; Returns the date when the value of the field last changed.  *  &#x60;screensCount&#x60; Returns the number of screens related to a field.  *  &#x60;contextsCount&#x60; Returns the number of contexts related to a field.  *  &#x60;isLocked&#x60; Returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og). | [optional] 

### Return type

[**PageBeanField**](PageBeanField.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

