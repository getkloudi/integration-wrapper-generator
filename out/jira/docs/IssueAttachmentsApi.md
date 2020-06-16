# Jira.IssueAttachmentsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachmentIdDelete**](IssueAttachmentsApi.md#attachmentIdDelete) | **DELETE** /attachment/{id} | Delete attachment
[**attachmentIdExpandHumanGet**](IssueAttachmentsApi.md#attachmentIdExpandHumanGet) | **GET** /attachment/{id}/expand/human | Get all metadata for an expanded attachment
[**attachmentIdExpandRawGet**](IssueAttachmentsApi.md#attachmentIdExpandRawGet) | **GET** /attachment/{id}/expand/raw | Get contents metadata for an expanded attachment
[**attachmentIdGet**](IssueAttachmentsApi.md#attachmentIdGet) | **GET** /attachment/{id} | Get attachment metadata
[**attachmentMetaGet**](IssueAttachmentsApi.md#attachmentMetaGet) | **GET** /attachment/meta | Get Jira attachment settings
[**issueIssueIdOrKeyAttachmentsPost**](IssueAttachmentsApi.md#issueIssueIdOrKeyAttachmentsPost) | **POST** /issue/{issueIdOrKey}/attachments | Add attachment



## attachmentIdDelete

> attachmentIdDelete(cloudid, id)

Delete attachment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the attachment.
apiInstance.attachmentIdDelete(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the attachment. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## attachmentIdExpandHumanGet

> AttachmentArchiveMetadataReadable attachmentIdExpandHumanGet(cloudid, id)

Get all metadata for an expanded attachment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the attachment.
apiInstance.attachmentIdExpandHumanGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the attachment. | 

### Return type

[**AttachmentArchiveMetadataReadable**](AttachmentArchiveMetadataReadable.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachmentIdExpandRawGet

> AttachmentArchiveImpl attachmentIdExpandRawGet(cloudid, id)

Get contents metadata for an expanded attachment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the attachment.
apiInstance.attachmentIdExpandRawGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the attachment. | 

### Return type

[**AttachmentArchiveImpl**](AttachmentArchiveImpl.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachmentIdGet

> AttachmentMetadata attachmentIdGet(cloudid, id)

Get attachment metadata

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the attachment.
apiInstance.attachmentIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the attachment. | 

### Return type

[**AttachmentMetadata**](AttachmentMetadata.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## attachmentMetaGet

> AttachmentSettings attachmentMetaGet(cloudid)

Get Jira attachment settings

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
apiInstance.attachmentMetaGet(cloudid, (error, data, response) => {
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

[**AttachmentSettings**](AttachmentSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyAttachmentsPost

> [Attachment] issueIssueIdOrKeyAttachmentsPost(cloudid, issueIdOrKey, opts)

Add attachment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueAttachmentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue that attachments are added to.
let opts = {
  'body': "/path/to/file" // File | 
};
apiInstance.issueIssueIdOrKeyAttachmentsPost(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue that attachments are added to. | 
 **body** | **File**|  | [optional] 

### Return type

[**[Attachment]**](Attachment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

