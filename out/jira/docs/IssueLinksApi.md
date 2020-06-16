# Jira.IssueLinksApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueLinkLinkIdDelete**](IssueLinksApi.md#issueLinkLinkIdDelete) | **DELETE** /issueLink/{linkId} | Delete issue link
[**issueLinkLinkIdGet**](IssueLinksApi.md#issueLinkLinkIdGet) | **GET** /issueLink/{linkId} | Get issue link
[**issueLinkPost**](IssueLinksApi.md#issueLinkPost) | **POST** /issueLink | Create issue link



## issueLinkLinkIdDelete

> issueLinkLinkIdDelete(cloudid, linkId)

Delete issue link

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinksApi();
let cloudid = null; // Object | Cloudi of the project
let linkId = "linkId_example"; // String | The ID of the issue link.
apiInstance.issueLinkLinkIdDelete(cloudid, linkId, (error, data, response) => {
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
 **linkId** | **String**| The ID of the issue link. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueLinkLinkIdGet

> IssueLink issueLinkLinkIdGet(cloudid, linkId)

Get issue link

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinksApi();
let cloudid = null; // Object | Cloudi of the project
let linkId = "linkId_example"; // String | The ID of the issue link.
apiInstance.issueLinkLinkIdGet(cloudid, linkId, (error, data, response) => {
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
 **linkId** | **String**| The ID of the issue link. | 

### Return type

[**IssueLink**](IssueLink.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueLinkPost

> Object issueLinkPost(cloudid, body)

Create issue link

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueLinksApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.LinkIssueRequestJsonBean(); // LinkIssueRequestJsonBean | The issue link request.
apiInstance.issueLinkPost(cloudid, body, (error, data, response) => {
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
 **body** | [**LinkIssueRequestJsonBean**](LinkIssueRequestJsonBean.md)| The issue link request. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

