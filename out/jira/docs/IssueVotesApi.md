# Jira.IssueVotesApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issueIssueIdOrKeyVotesDelete**](IssueVotesApi.md#issueIssueIdOrKeyVotesDelete) | **DELETE** /issue/{issueIdOrKey}/votes | Delete vote
[**issueIssueIdOrKeyVotesGet**](IssueVotesApi.md#issueIssueIdOrKeyVotesGet) | **GET** /issue/{issueIdOrKey}/votes | Get votes
[**issueIssueIdOrKeyVotesPost**](IssueVotesApi.md#issueIssueIdOrKeyVotesPost) | **POST** /issue/{issueIdOrKey}/votes | Add vote



## issueIssueIdOrKeyVotesDelete

> issueIssueIdOrKeyVotesDelete(cloudid, issueIdOrKey)

Delete vote

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueVotesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
apiInstance.issueIssueIdOrKeyVotesDelete(cloudid, issueIdOrKey, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## issueIssueIdOrKeyVotesGet

> Votes issueIssueIdOrKeyVotesGet(cloudid, issueIdOrKey)

Get votes

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueVotesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
apiInstance.issueIssueIdOrKeyVotesGet(cloudid, issueIdOrKey, (error, data, response) => {
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

### Return type

[**Votes**](Votes.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## issueIssueIdOrKeyVotesPost

> Object issueIssueIdOrKeyVotesPost(cloudid, issueIdOrKey)

Add vote

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueVotesApi();
let cloudid = null; // Object | Cloudi of the project
let issueIdOrKey = "issueIdOrKey_example"; // String | The ID or key of the issue.
apiInstance.issueIssueIdOrKeyVotesPost(cloudid, issueIdOrKey, (error, data, response) => {
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

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

