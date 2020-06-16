# Jira.IssueRemoteLinksApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueIssueIdOrKeyRemotelinkDelete**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkDelete) | **DELETE** /issue/{issueIdOrKey}/remotelink | Delete remote issue link by global ID
[**issueIssueIdOrKeyRemotelinkGet**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkGet) | **GET** /issue/{issueIdOrKey}/remotelink | Get remote issue links
[**issueIssueIdOrKeyRemotelinkLinkIdDelete**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkLinkIdDelete) | **DELETE** /issue/{issueIdOrKey}/remotelink/{linkId} | Delete remote issue link by ID
[**issueIssueIdOrKeyRemotelinkLinkIdGet**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkLinkIdGet) | **GET** /issue/{issueIdOrKey}/remotelink/{linkId} | Get remote issue link by ID
[**issueIssueIdOrKeyRemotelinkLinkIdPut**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkLinkIdPut) | **PUT** /issue/{issueIdOrKey}/remotelink/{linkId} | Update remote issue link by ID
[**issueIssueIdOrKeyRemotelinkPost**](IssueRemoteLinksApi.md#issueIssueIdOrKeyRemotelinkPost) | **POST** /issue/{issueIdOrKey}/remotelink | Create or update remote issue link



## issueIssueIdOrKeyRemotelinkDelete

> issueIssueIdOrKeyRemotelinkDelete(cloudid, issueIdOrKey, globalId)

Delete remote issue link by global ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let globalId = "globalId_example"; // String | The global ID of a remote issue link.
apiInstance.issueIssueIdOrKeyRemotelinkDelete(cloudid, issueIdOrKey, globalId, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **globalId** | **String**| The global ID of a remote issue link. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyRemotelinkGet

> RemoteIssueLink issueIssueIdOrKeyRemotelinkGet(cloudid, issueIdOrKey, opts)

Get remote issue links

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'globalId': "globalId_example" // String | The global ID of the remote issue link.
};
apiInstance.issueIssueIdOrKeyRemotelinkGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **globalId** | **String**| The global ID of the remote issue link. | [optional] 

### Return type

[**RemoteIssueLink**](RemoteIssueLink.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyRemotelinkLinkIdDelete

> issueIssueIdOrKeyRemotelinkLinkIdDelete(cloudid, issueIdOrKey, linkId)

Delete remote issue link by ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let linkId = "linkId_example"; // String | The ID of a remote issue link.
apiInstance.issueIssueIdOrKeyRemotelinkLinkIdDelete(cloudid, issueIdOrKey, linkId, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **linkId** | **String**| The ID of a remote issue link. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyRemotelinkLinkIdGet

> RemoteIssueLink issueIssueIdOrKeyRemotelinkLinkIdGet(cloudid, issueIdOrKey, linkId)

Get remote issue link by ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let linkId = "linkId_example"; // String | The ID of the remote issue link.
apiInstance.issueIssueIdOrKeyRemotelinkLinkIdGet(cloudid, issueIdOrKey, linkId, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **linkId** | **String**| The ID of the remote issue link. | 

### Return type

[**RemoteIssueLink**](RemoteIssueLink.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyRemotelinkLinkIdPut

> Object issueIssueIdOrKeyRemotelinkLinkIdPut(cloudid, issueIdOrKey, linkId, body)

Update remote issue link by ID

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let linkId = "linkId_example"; // String | The ID of the remote issue link.
let body = new Jira.RemoteIssueLinkRequest(); // RemoteIssueLinkRequest | 
apiInstance.issueIssueIdOrKeyRemotelinkLinkIdPut(cloudid, issueIdOrKey, linkId, body, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **linkId** | **String**| The ID of the remote issue link. | 
 **body** | [**RemoteIssueLinkRequest**](RemoteIssueLinkRequest.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyRemotelinkPost

> RemoteIssueLinkIdentifies issueIssueIdOrKeyRemotelinkPost(cloudid, issueIdOrKey, body)

Create or update remote issue link

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueRemoteLinksApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let body = new Jira.RemoteIssueLinkRequest(); // RemoteIssueLinkRequest | 
apiInstance.issueIssueIdOrKeyRemotelinkPost(cloudid, issueIdOrKey, body, (error, data, response) => {
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
 **issueIdOrKey** | **String**| The ID or key of the issue. | 
 **body** | [**RemoteIssueLinkRequest**](RemoteIssueLinkRequest.md)|  | 

### Return type

[**RemoteIssueLinkIdentifies**](RemoteIssueLinkIdentifies.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

