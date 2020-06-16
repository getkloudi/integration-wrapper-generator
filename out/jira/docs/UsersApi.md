# Jira.UsersApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userBulkGet**](UsersApi.md#userBulkGet) | **GET** /user/bulk | Bulk get users
[**userBulkMigrationGet**](UsersApi.md#userBulkMigrationGet) | **GET** /user/bulk/migration | Get account IDs for users
[**userColumnsDelete**](UsersApi.md#userColumnsDelete) | **DELETE** /user/columns | Reset user default columns
[**userColumnsGet**](UsersApi.md#userColumnsGet) | **GET** /user/columns | Get user default columns
[**userColumnsPut**](UsersApi.md#userColumnsPut) | **PUT** /user/columns | Set user default columns
[**userDelete**](UsersApi.md#userDelete) | **DELETE** /user | Delete user
[**userEmailBulkGet**](UsersApi.md#userEmailBulkGet) | **GET** /user/email/bulk | Get user email bulk
[**userEmailGet**](UsersApi.md#userEmailGet) | **GET** /user/email | Get user email
[**userGet**](UsersApi.md#userGet) | **GET** /user | Get user
[**userGroupsGet**](UsersApi.md#userGroupsGet) | **GET** /user/groups | Get user groups
[**userPost**](UsersApi.md#userPost) | **POST** /user | Create user
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Get all users default
[**usersSearchGet**](UsersApi.md#usersSearchGet) | **GET** /users/search | Get all users



## userBulkGet

> PageBeanUser userBulkGet(cloudid, accountId, opts)

Bulk get users

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let accountId = ["5b10ac8d82e05b22cc7d4ef5"]; // [String] | The account ID of a user. To specify multiple users, pass multiple `accountId` parameters. For example, `accountId=5b10a2844c20165700ede21g&accountId=5b10ac8d82e05b22cc7d4ef5`.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 10, // Number | The maximum number of items to return per page.
  'username': ["null"], // [String] | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'key': ["null"] // [String] | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.userBulkGet(cloudid, accountId, opts, (error, data, response) => {
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
 **accountId** | [**[String]**](String.md)| The account ID of a user. To specify multiple users, pass multiple &#x60;accountId&#x60; parameters. For example, &#x60;accountId&#x3D;5b10a2844c20165700ede21g&amp;accountId&#x3D;5b10ac8d82e05b22cc7d4ef5&#x60;. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 10]
 **username** | [**[String]**](String.md)| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **key** | [**[String]**](String.md)| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**PageBeanUser**](PageBeanUser.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userBulkMigrationGet

> [UserMigrationBean] userBulkMigrationGet(cloudid, opts)

Get account IDs for users

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 10, // Number | The maximum number of items to return per page.
  'username': ["null"], // [String] | Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, `username=fred&username=barney`. Required if `key` isn't provided. Cannot be provided if `key` is present.
  'key': ["null"] // [String] | Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, `key=fred&key=barney`. Required if `username` isn't provided. Cannot be provided if `username` is present.
};
apiInstance.userBulkMigrationGet(cloudid, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 10]
 **username** | [**[String]**](String.md)| Username of a user. To specify multiple users, pass multiple copies of this parameter. For example, &#x60;username&#x3D;fred&amp;username&#x3D;barney&#x60;. Required if &#x60;key&#x60; isn&#39;t provided. Cannot be provided if &#x60;key&#x60; is present. | [optional] 
 **key** | [**[String]**](String.md)| Key of a user. To specify multiple users, pass multiple copies of this parameter. For example, &#x60;key&#x3D;fred&amp;key&#x3D;barney&#x60;. Required if &#x60;username&#x60; isn&#39;t provided. Cannot be provided if &#x60;username&#x60; is present. | [optional] 

### Return type

[**[UserMigrationBean]**](UserMigrationBean.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userColumnsDelete

> userColumnsDelete(cloudid, opts)

Reset user default columns

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.userColumnsDelete(cloudid, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userColumnsGet

> [ColumnItem] userColumnsGet(cloudid, opts)

Get user default columns

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  'username': "username_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.userColumnsGet(cloudid, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**[ColumnItem]**](ColumnItem.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userColumnsPut

> Object userColumnsPut(cloudid, opts)

Set user default columns

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
  'body': "body_example" // [String] | The ID of a column to set. To set multiple columns, send multiple `columns` parameters.
};
apiInstance.userColumnsPut(cloudid, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
 **body** | [**[String]**](String.md)| The ID of a column to set. To set multiple columns, send multiple &#x60;columns&#x60; parameters. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## userDelete

> userDelete(cloudid, accountId, opts)

Delete user

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
let opts = {
  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'key': "key_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.userDelete(cloudid, accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userEmailBulkGet

> UnrestrictedUserEmail userEmailBulkGet(cloudid, accountId)

Get user email bulk

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let accountId = ["null"]; // [String] | The account IDs of the users for which emails are required. An `accountId` is an identifier that uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value).
apiInstance.userEmailBulkGet(cloudid, accountId, (error, data, response) => {
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
 **accountId** | [**[String]**](String.md)| The account IDs of the users for which emails are required. An &#x60;accountId&#x60; is an identifier that uniquely identifies the user across all Atlassian products. For example, &#x60;5b10ac8d82e05b22cc7d4ef5&#x60;. Note, this should be treated as an opaque identifier (that is, do not assume any structure in the value). | 

### Return type

[**UnrestrictedUserEmail**](UnrestrictedUserEmail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userEmailGet

> UnrestrictedUserEmail userEmailGet(cloudid, accountId)

Get user email

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, `5b10ac8d82e05b22cc7d4ef5`.
apiInstance.userEmailGet(cloudid, accountId, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, &#x60;5b10ac8d82e05b22cc7d4ef5&#x60;. | 

### Return type

[**UnrestrictedUserEmail**](UnrestrictedUserEmail.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userGet

> User userGet(cloudid, opts)

Get user

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'accountId': "accountId_example", // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required.
  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
  'key': "key_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  `groups` includes all groups and nested groups to which the user belongs.  *  `applicationRoles` includes details of all the applications to which the user has access.
};
apiInstance.userGet(cloudid, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required. | [optional] 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. | [optional] 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide) for details. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information about users in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;groups&#x60; includes all groups and nested groups to which the user belongs.  *  &#x60;applicationRoles&#x60; includes details of all the applications to which the user has access. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userGroupsGet

> [GroupName] userGroupsGet(cloudid, accountId, opts)

Get user groups

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let accountId = "accountId_example"; // String | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
let opts = {
  'username': "username_example", // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
  'key': "key_example" // String | This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
};
apiInstance.userGroupsGet(cloudid, accountId, opts, (error, data, response) => {
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
 **accountId** | **String**| The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | 
 **username** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
 **key** | **String**| This parameter is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

### Return type

[**[GroupName]**](GroupName.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userPost

> User userPost(cloudid, body)

Create user

### Example

```javascript
import Jira from 'Jira';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.UserWriteBean(); // UserWriteBean | 
apiInstance.userPost(cloudid, body, (error, data, response) => {
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
 **body** | [**UserWriteBean**](UserWriteBean.md)|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersGet

> [User] usersGet(cloudid, opts)

Get all users default

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return.
  'maxResults': 50 // Number | The maximum number of items to return.
};
apiInstance.usersGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return. | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return. | [optional] [default to 50]

### Return type

[**[User]**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersSearchGet

> [User] usersSearchGet(cloudid, opts)

Get all users

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.UsersApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return.
  'maxResults': 50 // Number | The maximum number of items to return.
};
apiInstance.usersSearchGet(cloudid, opts, (error, data, response) => {
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
 **startAt** | **Number**| The index of the first item to return. | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return. | [optional] [default to 50]

### Return type

[**[User]**](User.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

