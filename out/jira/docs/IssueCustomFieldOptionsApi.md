# Jira.IssueCustomFieldOptionsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customFieldFieldIdOptionGet**](IssueCustomFieldOptionsApi.md#customFieldFieldIdOptionGet) | **GET** /customField/{fieldId}/option | Get options for field
[**customFieldFieldIdOptionPost**](IssueCustomFieldOptionsApi.md#customFieldFieldIdOptionPost) | **POST** /customField/{fieldId}/option | Create custom field options
[**customFieldFieldIdOptionPut**](IssueCustomFieldOptionsApi.md#customFieldFieldIdOptionPut) | **PUT** /customField/{fieldId}/option | Update custom field options
[**customFieldOptionIdGet**](IssueCustomFieldOptionsApi.md#customFieldOptionIdGet) | **GET** /customFieldOption/{id} | Get custom field option



## customFieldFieldIdOptionGet

> PageBeanCustomFieldOptionDetails customFieldFieldIdOptionGet(cloudid, fieldId, opts)

Get options for field

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = 789; // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 1000 // Number | The maximum number of items to return per page.
};
apiInstance.customFieldFieldIdOptionGet(cloudid, fieldId, opts, (error, data, response) => {
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
 **fieldId** | **Number**| The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 1000]

### Return type

[**PageBeanCustomFieldOptionDetails**](PageBeanCustomFieldOptionDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## customFieldFieldIdOptionPost

> Object customFieldFieldIdOptionPost(cloudid, fieldId, body)

Create custom field options

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = 789; // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
let body = new Jira.BulkCreateCustomFieldOptionRequest(); // BulkCreateCustomFieldOptionRequest | 
apiInstance.customFieldFieldIdOptionPost(cloudid, fieldId, body, (error, data, response) => {
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
 **fieldId** | **Number**| The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*. | 
 **body** | [**BulkCreateCustomFieldOptionRequest**](BulkCreateCustomFieldOptionRequest.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## customFieldFieldIdOptionPut

> Object customFieldFieldIdOptionPut(cloudid, fieldId, body)

Update custom field options

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsApi();
let cloudid = null; // Object | Cloudi of the project
let fieldId = 789; // Number | The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
let body = new Jira.UpdateCustomFieldOption(); // UpdateCustomFieldOption | 
apiInstance.customFieldFieldIdOptionPut(cloudid, fieldId, body, (error, data, response) => {
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
 **fieldId** | **Number**| The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*. | 
 **body** | [**UpdateCustomFieldOption**](UpdateCustomFieldOption.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## customFieldOptionIdGet

> CustomFieldOption customFieldOptionIdGet(cloudid, id)

Get custom field option

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCustomFieldOptionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the custom field option.
apiInstance.customFieldOptionIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the custom field option. | 

### Return type

[**CustomFieldOption**](CustomFieldOption.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

