# Jira.IssueCommentsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentListPost**](IssueCommentsApi.md#commentListPost) | **POST** /comment/list | Get comments by IDs
[**issueIssueIdOrKeyCommentGet**](IssueCommentsApi.md#issueIssueIdOrKeyCommentGet) | **GET** /issue/{issueIdOrKey}/comment | Get comments
[**issueIssueIdOrKeyCommentIdDelete**](IssueCommentsApi.md#issueIssueIdOrKeyCommentIdDelete) | **DELETE** /issue/{issueIdOrKey}/comment/{id} | Delete comment
[**issueIssueIdOrKeyCommentIdGet**](IssueCommentsApi.md#issueIssueIdOrKeyCommentIdGet) | **GET** /issue/{issueIdOrKey}/comment/{id} | Get comment
[**issueIssueIdOrKeyCommentIdPut**](IssueCommentsApi.md#issueIssueIdOrKeyCommentIdPut) | **PUT** /issue/{issueIdOrKey}/comment/{id} | Update comment
[**issueIssueIdOrKeyCommentPost**](IssueCommentsApi.md#issueIssueIdOrKeyCommentPost) | **POST** /issue/{issueIdOrKey}/comment | Add comment



## commentListPost

> PageBeanComment commentListPost(cloudid, body, opts)

Get comments by IDs

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.IssueCommentListRequestBean(); // IssueCommentListRequestBean | The list of comment IDs.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  `renderedBody` Returns the comment body rendered in HTML.  *  `properties` Returns the comment's properties.
};
apiInstance.commentListPost(cloudid, body, opts, (error, data, response) => {
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
 **body** | [**IssueCommentListRequestBean**](IssueCommentListRequestBean.md)| The list of comment IDs. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;renderedBody&#x60; Returns the comment body rendered in HTML.  *  &#x60;properties&#x60; Returns the comment&#39;s properties. | [optional] 

### Return type

[**PageBeanComment**](PageBeanComment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyCommentGet

> PageOfComments issueIssueIdOrKeyCommentGet(cloudid, issueIdOrKey, opts)

Get comments

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
};
apiInstance.issueIssueIdOrKeyCommentGet(cloudid, issueIdOrKey, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **orderBy** | **String**| [Order](#ordering) the results by a field. Accepts *created* to sort comments by their created date. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [optional] 

### Return type

[**PageOfComments**](PageOfComments.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyCommentIdDelete

> issueIssueIdOrKeyCommentIdDelete(cloudid, issueIdOrKey, id)

Delete comment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let id = "id_example"; // String | The ID of the comment.
apiInstance.issueIssueIdOrKeyCommentIdDelete(cloudid, issueIdOrKey, id, (error, data, response) => {
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
 **id** | **String**| The ID of the comment. | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyCommentIdGet

> Comment issueIssueIdOrKeyCommentIdGet(cloudid, issueIdOrKey, id, opts)

Get comment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let id = "id_example"; // String | The ID of the comment.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
};
apiInstance.issueIssueIdOrKeyCommentIdGet(cloudid, issueIdOrKey, id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the comment. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyCommentIdPut

> Comment issueIssueIdOrKeyCommentIdPut(cloudid, issueIdOrKey, id, body, opts)

Update comment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let id = "id_example"; // String | The ID of the comment.
let body = new Jira.Comment(); // Comment | 
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
};
apiInstance.issueIssueIdOrKeyCommentIdPut(cloudid, issueIdOrKey, id, body, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the comment. | 
 **body** | [**Comment**](Comment.md)|  | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## issueIssueIdOrKeyCommentPost

> Comment issueIssueIdOrKeyCommentPost(cloudid, issueIdOrKey, body, opts)

Add comment

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueCommentsApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
let body = new Jira.Comment(); // Comment | 
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts `renderedBody`, which returns the comment body rendered in HTML.
};
apiInstance.issueIssueIdOrKeyCommentPost(cloudid, issueIdOrKey, body, opts, (error, data, response) => {
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
 **body** | [**Comment**](Comment.md)|  | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about comments in the response. This parameter accepts &#x60;renderedBody&#x60;, which returns the comment body rendered in HTML. | [optional] 

### Return type

[**Comment**](Comment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

