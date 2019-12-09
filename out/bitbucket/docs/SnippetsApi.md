# Bitbucket.SnippetsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**snippetsGet**](SnippetsApi.md#snippetsGet) | **GET** /snippets | 
[**snippetsPost**](SnippetsApi.md#snippetsPost) | **POST** /snippets | 
[**snippetsUsernameEncodedIdCommentsCommentIdDelete**](SnippetsApi.md#snippetsUsernameEncodedIdCommentsCommentIdDelete) | **DELETE** /snippets/{username}/{encoded_id}/comments/{comment_id} | 
[**snippetsUsernameEncodedIdCommentsCommentIdGet**](SnippetsApi.md#snippetsUsernameEncodedIdCommentsCommentIdGet) | **GET** /snippets/{username}/{encoded_id}/comments/{comment_id} | 
[**snippetsUsernameEncodedIdCommentsCommentIdPut**](SnippetsApi.md#snippetsUsernameEncodedIdCommentsCommentIdPut) | **PUT** /snippets/{username}/{encoded_id}/comments/{comment_id} | 
[**snippetsUsernameEncodedIdCommentsGet**](SnippetsApi.md#snippetsUsernameEncodedIdCommentsGet) | **GET** /snippets/{username}/{encoded_id}/comments | 
[**snippetsUsernameEncodedIdCommentsPost**](SnippetsApi.md#snippetsUsernameEncodedIdCommentsPost) | **POST** /snippets/{username}/{encoded_id}/comments | 
[**snippetsUsernameEncodedIdCommitsGet**](SnippetsApi.md#snippetsUsernameEncodedIdCommitsGet) | **GET** /snippets/{username}/{encoded_id}/commits | 
[**snippetsUsernameEncodedIdCommitsRevisionGet**](SnippetsApi.md#snippetsUsernameEncodedIdCommitsRevisionGet) | **GET** /snippets/{username}/{encoded_id}/commits/{revision} | 
[**snippetsUsernameEncodedIdDelete**](SnippetsApi.md#snippetsUsernameEncodedIdDelete) | **DELETE** /snippets/{username}/{encoded_id} | 
[**snippetsUsernameEncodedIdGet**](SnippetsApi.md#snippetsUsernameEncodedIdGet) | **GET** /snippets/{username}/{encoded_id} | 
[**snippetsUsernameEncodedIdNodeIdDelete**](SnippetsApi.md#snippetsUsernameEncodedIdNodeIdDelete) | **DELETE** /snippets/{username}/{encoded_id}/{node_id} | 
[**snippetsUsernameEncodedIdNodeIdFilesPathGet**](SnippetsApi.md#snippetsUsernameEncodedIdNodeIdFilesPathGet) | **GET** /snippets/{username}/{encoded_id}/{node_id}/files/{path} | 
[**snippetsUsernameEncodedIdNodeIdGet**](SnippetsApi.md#snippetsUsernameEncodedIdNodeIdGet) | **GET** /snippets/{username}/{encoded_id}/{node_id} | 
[**snippetsUsernameEncodedIdNodeIdPut**](SnippetsApi.md#snippetsUsernameEncodedIdNodeIdPut) | **PUT** /snippets/{username}/{encoded_id}/{node_id} | 
[**snippetsUsernameEncodedIdPut**](SnippetsApi.md#snippetsUsernameEncodedIdPut) | **PUT** /snippets/{username}/{encoded_id} | 
[**snippetsUsernameEncodedIdRevisionDiffGet**](SnippetsApi.md#snippetsUsernameEncodedIdRevisionDiffGet) | **GET** /snippets/{username}/{encoded_id}/{revision}/diff | 
[**snippetsUsernameEncodedIdRevisionPatchGet**](SnippetsApi.md#snippetsUsernameEncodedIdRevisionPatchGet) | **GET** /snippets/{username}/{encoded_id}/{revision}/patch | 
[**snippetsUsernameEncodedIdWatchDelete**](SnippetsApi.md#snippetsUsernameEncodedIdWatchDelete) | **DELETE** /snippets/{username}/{encoded_id}/watch | 
[**snippetsUsernameEncodedIdWatchGet**](SnippetsApi.md#snippetsUsernameEncodedIdWatchGet) | **GET** /snippets/{username}/{encoded_id}/watch | 
[**snippetsUsernameEncodedIdWatchPut**](SnippetsApi.md#snippetsUsernameEncodedIdWatchPut) | **PUT** /snippets/{username}/{encoded_id}/watch | 
[**snippetsUsernameEncodedIdWatchersGet**](SnippetsApi.md#snippetsUsernameEncodedIdWatchersGet) | **GET** /snippets/{username}/{encoded_id}/watchers | 
[**snippetsUsernameGet**](SnippetsApi.md#snippetsUsernameGet) | **GET** /snippets/{username} | 
[**snippetsUsernamePost**](SnippetsApi.md#snippetsUsernamePost) | **POST** /snippets/{username} | 



## snippetsGet

> PaginatedSnippets snippetsGet(opts)



Returns all snippets. Like pull requests, repositories and teams, the full set of snippets is defined by what the current user has access to.  This includes all snippets owned by the current user, but also all snippets owned by any of the teams the user is a member of, or snippets by other users that the current user is either watching or has collaborated on (for instance by commenting on it).  To limit the set of returned snippets, apply the &#x60;?role&#x3D;[owner|contributor|member]&#x60; query parameter where the roles are defined as follows:  * &#x60;owner&#x60;: all snippets owned by the current user * &#x60;contributor&#x60;: all snippets owned by, or watched by the current user * &#x60;member&#x60;: owned by the user, their teams, or watched by the current user  When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or commented on.  The returned response is a normal paginated JSON list. This endpoint only supports &#x60;application/json&#x60; responses and no &#x60;multipart/form-data&#x60; or &#x60;multipart/related&#x60;. As a result, it is not possible to include the file contents.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let opts = {
  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
};
apiInstance.snippetsGet(opts, (error, data, response) => {
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
 **role** | **String**| Filter down the result based on the authenticated user&#39;s role (&#x60;owner&#x60;, &#x60;contributor&#x60;, or &#x60;member&#x60;). | [optional] 

### Return type

[**PaginatedSnippets**](PaginatedSnippets.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsPost

> Snippet snippetsPost(body)



Creates a new snippet under the authenticated user&#39;s account.  Snippets can contain multiple files. Both text and binary files are supported.  The simplest way to create a new snippet from a local file:      $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file&#x3D;@image.png  Creating snippets through curl has a few limitations and so let&#39;s look at a more complicated scenario.  Snippets are created with a multipart POST. Both &#x60;multipart/form-data&#x60; and &#x60;multipart/related&#x60; are supported. Both allow the creation of snippets with both meta data (title, etc), as well as multiple text and binary files.  The main difference is that &#x60;multipart/related&#x60; can use rich encoding for the meta data (currently JSON).   multipart/related (RFC-2387) ----------------------------  This is the most advanced and efficient way to create a paste.      POST /2.0/snippets/evzijst HTTP/1.1     Content-Length: 1188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;is_private\&quot;: true,       \&quot;scm\&quot;: \&quot;hg\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;image.png\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  The request contains multiple parts and is structured as follows.  The first part is the JSON document that describes the snippet&#39;s properties or meta data. It either has to be the first part, or the request&#39;s &#x60;Content-Type&#x60; header must contain the &#x60;start&#x60; parameter to point to it.  The remaining parts are the files of which there can be zero or more. Each file part should contain the &#x60;Content-ID&#x60; MIME header through which the JSON meta data&#39;s &#x60;files&#x60; element addresses it. The value should be the name of the file.  &#x60;Content-Disposition&#x60; is an optional MIME header. The header&#39;s optional &#x60;filename&#x60; parameter can be used to specify the file name that Bitbucket should use when writing the file to disk. When present, &#x60;filename&#x60; takes precedence over the value of &#x60;Content-ID&#x60;.  When the JSON body omits the &#x60;files&#x60; element, the remaining parts are not ignored. Instead, each file is added to the new snippet as if its name was explicitly linked (the use of the &#x60;files&#x60; elements is mandatory for some operations like deleting or renaming files).   multipart/form-data -------------------  The use of JSON for the snippet&#39;s meta data is optional. Meta data can also be supplied as regular form fields in a more conventional &#x60;multipart/form-data&#x60; request:      $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title&#x3D;\&quot;My snippet\&quot;               -F file&#x3D;@foo.txt -F file&#x3D;@image.png      POST /2.0/snippets HTTP/1.1     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Type: application/octet-stream      ?PNG      IHDR?1??I.....     ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My snippet     ------------------------------63a4b224c59f--  Here the meta data properties are included as flat, top-level form fields. The file attachments use the &#x60;file&#x60; field name. To attach multiple files, simply repeat the field.  The advantage of &#x60;multipart/form-data&#x60; over &#x60;multipart/related&#x60; is that it can be easier to build clients.  Essentially all properties are optional, &#x60;title&#x60; and &#x60;files&#x60; included.   Sharing and Visibility ----------------------  Snippets can be either public (visible to anyone on Bitbucket, as well as anonymous users), or private (visible only to the owner, creator and members of the team in case the snippet is owned by a team). This is controlled through the snippet&#39;s &#x60;is_private&#x60; element:  * **is_private&#x3D;false** -- everyone, including anonymous users can view   the snippet * **is_private&#x3D;true** -- only the owner and team members (for team   snippets) can view it  To create the snippet under a team account, just append the team name to the URL (see &#x60;/2.0/snippets/{username}&#x60;).

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let body = new Bitbucket.Snippet(); // Snippet | The new snippet object.
apiInstance.snippetsPost(body, (error, data, response) => {
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
 **body** | [**Snippet**](Snippet.md)| The new snippet object. | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snippetsUsernameEncodedIdCommentsCommentIdDelete

> snippetsUsernameEncodedIdCommentsCommentIdDelete(username, commentId, encodedId)



Deletes a snippet comment.  Comments can only be removed by their author.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let commentId = "commentId_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdDelete(username, commentId, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **commentId** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdCommentsCommentIdGet

> SnippetComment snippetsUsernameEncodedIdCommentsCommentIdGet(username, commentId, encodedId)



Returns the specific snippet comment.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let commentId = "commentId_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdGet(username, commentId, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **commentId** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

[**SnippetComment**](SnippetComment.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdCommentsCommentIdPut

> snippetsUsernameEncodedIdCommentsCommentIdPut(username, commentId, encodedId)



Updates a comment.  Comments can only be updated by their author.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let commentId = "commentId_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdPut(username, commentId, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **commentId** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdCommentsGet

> PaginatedSnippetComments snippetsUsernameEncodedIdCommentsGet(username, encodedId)



Used to retrieve a paginated list of all comments for a specific snippet.  This resource works identical to commit and pull request comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommentsGet(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

[**PaginatedSnippetComments**](PaginatedSnippetComments.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdCommentsPost

> Snippet snippetsUsernameEncodedIdCommentsPost(username, encodedId, body)



Creates a new comment.  The only required field in the body is &#x60;content.raw&#x60;.  To create a threaded reply to an existing comment, include &#x60;parent.id&#x60;.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | 
let body = new Bitbucket.Snippet(); // Snippet | The contents of the new comment.
apiInstance.snippetsUsernameEncodedIdCommentsPost(username, encodedId, body, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**|  | 
 **body** | [**Snippet**](Snippet.md)| The contents of the new comment. | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## snippetsUsernameEncodedIdCommitsGet

> PaginatedSnippetCommit snippetsUsernameEncodedIdCommitsGet(username, encodedId)



Returns the changes (commits) made on this snippet.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommitsGet(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

[**PaginatedSnippetCommit**](PaginatedSnippetCommit.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdCommitsRevisionGet

> SnippetCommit snippetsUsernameEncodedIdCommitsRevisionGet(username, encodedId, revision)



### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | 
let revision = "revision_example"; // String | 
apiInstance.snippetsUsernameEncodedIdCommitsRevisionGet(username, encodedId, revision, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**|  | 
 **revision** | **String**|  | 

### Return type

[**SnippetCommit**](SnippetCommit.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdDelete

> snippetsUsernameEncodedIdDelete(username, encodedId)



Deletes a snippet and returns an empty response.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdDelete(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdGet

> Snippet snippetsUsernameEncodedIdGet(username, encodedId)



Retrieves a single snippet.  Snippets support multiple content types:  * application/json * multipart/related * multipart/form-data   application/json ----------------  The default content type of the response is &#x60;application/json&#x60;. Since JSON is always &#x60;utf-8&#x60;, it cannot reliably contain file contents for files that are not text. Therefore, JSON snippet documents only contain the filename and links to the file contents.  This means that in order to retrieve all parts of a snippet, N+1 requests need to be made (where N is the number of files in the snippet).   multipart/related -----------------  To retrieve an entire snippet in a single response, use the &#x60;Accept: multipart/related&#x60; HTTP request header.      $ curl -H \&quot;Accept: multipart/related\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/1  Response:      HTTP/1.1 200 OK     Content-Length: 2214     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj\&quot;         },         \&quot;comments\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments\&quot;         },         \&quot;watchers\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers\&quot;         },         \&quot;commits\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits\&quot;         }       },       \&quot;id\&quot;: kypj,       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;created_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;updated_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;is_private\&quot;: false,       \&quot;files\&quot;: {         \&quot;foo.txt\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt\&quot;             }           }         },         \&quot;image.png\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-image.png\&quot;             }           }         }       ],       \&quot;owner\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       },       \&quot;creator\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  multipart/form-data -------------------  As with creating new snippets, &#x60;multipart/form-data&#x60; can be used as an alternative to &#x60;multipart/related&#x60;. However, the inherently flat structure of form-data means that only basic, root-level properties can be returned, while nested elements like &#x60;links&#x60; are omitted:      $ curl -H \&quot;Accept: multipart/form-data\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj  Response:      HTTP/1.1 200 OK     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;     Content-Type: text/plain; charset&#x3D;\&quot;utf-8\&quot;      My snippet     ------------------------------63a4b224c59f--     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Transfer-Encoding: base64     Content-Type: application/octet-stream      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     ------------------------------5957323a6b76--

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdGet(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, multipart/related, multipart/form-data


## snippetsUsernameEncodedIdNodeIdDelete

> snippetsUsernameEncodedIdNodeIdDelete(username, nodeId, encodedId)



Deletes the snippet.  Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an older commit results in a 405 status code.  To delete a snippet, regardless of whether or not concurrent changes are being made to it, use &#x60;DELETE /snippets/{encoded_id}&#x60; instead.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let nodeId = "nodeId_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdNodeIdDelete(username, nodeId, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **nodeId** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdNodeIdFilesPathGet

> snippetsUsernameEncodedIdNodeIdFilesPathGet(username, path, nodeId, encodedId)



Retrieves the raw contents of a specific file in the snippet. The &#x60;Content-Disposition&#x60; header will be \&quot;attachment\&quot; to avoid issues with malevolent executable files.  The file&#39;s mime type is derived from its filename and returned in the &#x60;Content-Type&#x60; header.  Note that for text files, no character encoding is included as part of the content type.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let path = "path_example"; // String | 
let nodeId = "nodeId_example"; // String | 
let encodedId = "encodedId_example"; // String | 
apiInstance.snippetsUsernameEncodedIdNodeIdFilesPathGet(username, path, nodeId, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **path** | **String**|  | 
 **nodeId** | **String**|  | 
 **encodedId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdNodeIdGet

> Snippet snippetsUsernameEncodedIdNodeIdGet(username, encodedId, nodeId)



Identical to &#x60;GET /snippets/encoded_id&#x60;, except that this endpoint can be used to retrieve the contents of the snippet as it was at an older revision, while &#x60;/snippets/encoded_id&#x60; always returns the snippet&#39;s current revision.  Note that only the snippet&#39;s file contents are versioned, not its meta data properties like the title.  Other than that, the two endpoints are identical in behavior.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
let nodeId = "nodeId_example"; // String | A commit revision (SHA1).
apiInstance.snippetsUsernameEncodedIdNodeIdGet(username, encodedId, nodeId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 
 **nodeId** | **String**| A commit revision (SHA1). | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, multipart/related, multipart/form-data


## snippetsUsernameEncodedIdNodeIdPut

> Snippet snippetsUsernameEncodedIdNodeIdPut(username, encodedId, nodeId)



Identical to &#x60;UPDATE /snippets/encoded_id&#x60;, except that this endpoint takes an explicit commit revision. Only the snippet&#39;s \&quot;HEAD\&quot;/\&quot;tip\&quot; (most recent) version can be updated and requests on all other, older revisions fail by returning a 405 status.  Usage of this endpoint over the unrestricted &#x60;/snippets/encoded_id&#x60; could be desired if the caller wants to be sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.  This can be considered a so-called \&quot;Compare And Swap\&quot;, or CAS operation.  Other than that, the two endpoints are identical in behavior.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
let nodeId = "nodeId_example"; // String | A commit revision (SHA1).
apiInstance.snippetsUsernameEncodedIdNodeIdPut(username, encodedId, nodeId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 
 **nodeId** | **String**| A commit revision (SHA1). | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, multipart/related, multipart/form-data


## snippetsUsernameEncodedIdPut

> Snippet snippetsUsernameEncodedIdPut(username, encodedId)



Used to update a snippet. Use this to add and delete files and to change a snippet&#39;s title.  To update a snippet, one can either PUT a full snapshot, or only the parts that need to be changed.  The contract for PUT on this API is that properties missing from the request remain untouched so that snippets can be efficiently manipulated with differential payloads.  To delete a property (e.g. the title, or a file), include its name in the request, but omit its value (use &#x60;null&#x60;).  As in Git, explicit renaming of files is not supported. Instead, to rename a file, delete it and add it again under another name. This can be done atomically in a single request. Rename detection is left to the SCM.  PUT supports three different content types for both request and response bodies:  * &#x60;application/json&#x60; * &#x60;multipart/related&#x60; * &#x60;multipart/form-data&#x60;  The content type used for the request body can be different than that used for the response. Content types are specified using standard HTTP headers.  Use the &#x60;Content-Type&#x60; and &#x60;Accept&#x60; headers to select the desired request and response format.   application/json ----------------  As with creation and retrieval, the content type determines what properties can be manipulated. &#x60;application/json&#x60; does not support file contents and is therefore limited to a snippet&#39;s meta data.  To update the title, without changing any of its files:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: \&quot;Updated title\&quot;}&#39;   To delete the title:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: null}&#39;  Not all parts of a snippet can be manipulated. The owner and creator for instance are immutable.   multipart/related -----------------  &#x60;multipart/related&#x60; can be used to manipulate all of a snippet&#39;s properties. The body is identical to a POST. properties omitted from the request are left unchanged. Since the &#x60;start&#x60; part contains JSON, the mechanism for manipulating the snippet&#39;s meta data is identical to &#x60;application/json&#x60; requests.  To update one of a snippet&#39;s file contents, while also changing its title:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 288     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My updated snippet\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      Updated file contents.      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  Here only the parts that are changed are included in the body. The other files remain untouched.  Note the use of the &#x60;files&#x60; list in the JSON part. This list contains the files that are being manipulated. This list should have corresponding multiparts in the request that contain the new contents of these files.  If a filename in the &#x60;files&#x60; list does not have a corresponding part, it will be deleted from the snippet, as shown below:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;files\&quot;: {         \&quot;image.png\&quot;: {}       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  To simulate a rename, delete a file and add the same file under another name:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 212     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {         \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;bar.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;bar.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;bar.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--   multipart/form-data -----------------  Again, one can also use &#x60;multipart/form-data&#x60; to manipulate file contents and meta data atomically.      $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title&#x3D;\&quot;My updated snippet\&quot; -F file&#x3D;@foo.txt      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 351     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My updated snippet     ------------------------------63a4b224c59f  To delete a file, omit its contents while including its name in the &#x60;files&#x60; field:      $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files&#x3D;image.png      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 149     Content-Type: multipart/form-data; boundary&#x3D;----------------------------ef8871065a86      ------------------------------ef8871065a86     Content-Disposition: form-data; name&#x3D;\&quot;files\&quot;      image.png     ------------------------------ef8871065a86--  The explicit use of the &#x60;files&#x60; element in &#x60;multipart/related&#x60; and &#x60;multipart/form-data&#x60; is only required when deleting files. The default mode of operation is for file parts to be processed, regardless of whether or not they are listed in &#x60;files&#x60;, as a convenience to the client.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdPut(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet&#39;s id. | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, multipart/related, multipart/form-data


## snippetsUsernameEncodedIdRevisionDiffGet

> snippetsUsernameEncodedIdRevisionDiffGet(username, encodedId, revision, opts)



Returns the diff of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;patch&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the diff is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
let revision = "revision_example"; // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
let opts = {
  'path': "path_example" // String | When used, only one the diff of the specified file will be returned.
};
apiInstance.snippetsUsernameEncodedIdRevisionDiffGet(username, encodedId, revision, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 
 **revision** | **String**| A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like &#x60;staging..production&#x60;. | 
 **path** | **String**| When used, only one the diff of the specified file will be returned. | [optional] 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdRevisionPatchGet

> snippetsUsernameEncodedIdRevisionPatchGet(username, encodedId, revision)



Returns the patch of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;diff&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the patch is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
let revision = "revision_example"; // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
apiInstance.snippetsUsernameEncodedIdRevisionPatchGet(username, encodedId, revision, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 
 **revision** | **String**| A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like &#x60;staging..production&#x60;. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdWatchDelete

> PaginatedUsers snippetsUsernameEncodedIdWatchDelete(username, encodedId)



Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchDelete(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 

### Return type

[**PaginatedUsers**](PaginatedUsers.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdWatchGet

> PaginatedUsers snippetsUsernameEncodedIdWatchGet(username, encodedId)



Used to check if the current user is watching a specific snippet.  Returns 204 (No Content) if the user is watching the snippet and 404 if not.  Hitting this endpoint anonymously always returns a 404.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchGet(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 

### Return type

[**PaginatedUsers**](PaginatedUsers.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdWatchPut

> PaginatedUsers snippetsUsernameEncodedIdWatchPut(username, encodedId)



Used to start watching a specific snippet. Returns 204 (No Content).

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchPut(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 

### Return type

[**PaginatedUsers**](PaginatedUsers.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameEncodedIdWatchersGet

> PaginatedUsers snippetsUsernameEncodedIdWatchersGet(username, encodedId)



Returns a paginated list of all users watching a specific snippet.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let encodedId = "encodedId_example"; // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchersGet(username, encodedId, (error, data, response) => {
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
 **username** | **String**|  | 
 **encodedId** | **String**| The snippet id. | 

### Return type

[**PaginatedUsers**](PaginatedUsers.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernameGet

> PaginatedSnippets snippetsUsernameGet(username, opts)



Identical to &#x60;/snippets&#x60;, except that the result is further filtered by the snippet owner and only those that are owned by &#x60;{username}&#x60; are returned.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | Limits the result to snippets owned by this user.
let opts = {
  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
};
apiInstance.snippetsUsernameGet(username, opts, (error, data, response) => {
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
 **username** | **String**| Limits the result to snippets owned by this user. | 
 **role** | **String**| Filter down the result based on the authenticated user&#39;s role (&#x60;owner&#x60;, &#x60;contributor&#x60;, or &#x60;member&#x60;). | [optional] 

### Return type

[**PaginatedSnippets**](PaginatedSnippets.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## snippetsUsernamePost

> Snippet snippetsUsernamePost(username, body)



Identical to &#x60;/snippets&#x60;, except that the new snippet will be created under the account specified in the path parameter &#x60;{username}&#x60;.

### Example

```javascript
import Bitbucket from 'bitbucket';
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Bitbucket.SnippetsApi();
let username = "username_example"; // String | 
let body = new Bitbucket.Snippet(); // Snippet | The new snippet object.
apiInstance.snippetsUsernamePost(username, body, (error, data, response) => {
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
 **username** | **String**|  | 
 **body** | [**Snippet**](Snippet.md)| The new snippet object. | 

### Return type

[**Snippet**](Snippet.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

