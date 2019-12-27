# Bitbucket.SearchApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchAccount**](SearchApi.md#searchAccount) | **GET** /teams/{username}/search/code | Search for code in the repositories of the specified team
[**searchAccount_0**](SearchApi.md#searchAccount_0) | **GET** /users/{username}/search/code | Search for code in the repositories of the specified user



## searchAccount

> SearchResultPage searchAccount(username, searchQuery, opts)

Search for code in the repositories of the specified team

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.SearchApi();
let username = "username_example"; // String | The account to search in; either the username or the UUID in curly braces
let searchQuery = "searchQuery_example"; // String | The search query
let opts = {
  'page': 1, // Number | Which page of the search results to retrieve
  'pagelen': 10 // Number | How many search results to retrieve per page
};
apiInstance.searchAccount(username, searchQuery, opts, (error, data, response) => {
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
 **username** | **String**| The account to search in; either the username or the UUID in curly braces | 
 **searchQuery** | **String**| The search query | 
 **page** | **Number**| Which page of the search results to retrieve | [optional] [default to 1]
 **pagelen** | **Number**| How many search results to retrieve per page | [optional] [default to 10]

### Return type

[**SearchResultPage**](SearchResultPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAccount_0

> SearchResultPage searchAccount_0(username, searchQuery, opts)

Search for code in the repositories of the specified user

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.SearchApi();
let username = "username_example"; // String | The account to search in; either the username or the UUID in curly braces
let searchQuery = "searchQuery_example"; // String | The search query
let opts = {
  'page': 1, // Number | Which page of the search results to retrieve
  'pagelen': 10 // Number | How many search results to retrieve per page
};
apiInstance.searchAccount_0(username, searchQuery, opts, (error, data, response) => {
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
 **username** | **String**| The account to search in; either the username or the UUID in curly braces | 
 **searchQuery** | **String**| The search query | 
 **page** | **Number**| Which page of the search results to retrieve | [optional] [default to 1]
 **pagelen** | **Number**| How many search results to retrieve per page | [optional] [default to 10]

### Return type

[**SearchResultPage**](SearchResultPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

