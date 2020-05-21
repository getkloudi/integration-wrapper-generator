# Bitbucket.SshApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUsernameSshKeysDelete**](SshApi.md#usersUsernameSshKeysDelete) | **DELETE** /users/{username}/ssh-keys/ | 
[**usersUsernameSshKeysGet**](SshApi.md#usersUsernameSshKeysGet) | **GET** /users/{username}/ssh-keys | 
[**usersUsernameSshKeysGet_0**](SshApi.md#usersUsernameSshKeysGet_0) | **GET** /users/{username}/ssh-keys/ | 
[**usersUsernameSshKeysPost**](SshApi.md#usersUsernameSshKeysPost) | **POST** /users/{username}/ssh-keys | 
[**usersUsernameSshKeysPut**](SshApi.md#usersUsernameSshKeysPut) | **PUT** /users/{username}/ssh-keys/ | 



## usersUsernameSshKeysDelete

> usersUsernameSshKeysDelete(username, keyId)



Deletes a specific SSH public key from a user&#39;s account  Example: &#x60;&#x60;&#x60; $ curl -X DELETE https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a} &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.SshApi();
let username = "username_example"; // String | The account's username or UUID.
let keyId = "keyId_example"; // String | The SSH key's UUID value.
apiInstance.usersUsernameSshKeysDelete(username, keyId, (error, data, response) => {
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
 **username** | **String**| The account&#39;s username or UUID. | 
 **keyId** | **String**| The SSH key&#39;s UUID value. | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUsernameSshKeysGet

> PaginatedSshUserKeys usersUsernameSshKeysGet(username)



Returns a paginated list of the user&#39;s SSH public keys.  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys {     \&quot;page\&quot;: 1,     \&quot;pagelen\&quot;: 10,     \&quot;size\&quot;: 1,     \&quot;values\&quot;: [         {             \&quot;comment\&quot;: \&quot;user@myhost\&quot;,             \&quot;created_on\&quot;: \&quot;2018-03-14T13:17:05.196003+00:00\&quot;,             \&quot;key\&quot;: \&quot;ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\&quot;,             \&quot;label\&quot;: \&quot;\&quot;,             \&quot;last_used\&quot;: \&quot;2018-03-20T13:18:05.196003+00:00\&quot;,             \&quot;links\&quot;: {                 \&quot;self\&quot;: {                     \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\&quot;                 }             },             \&quot;owner\&quot;: {                 \&quot;display_name\&quot;: \&quot;Mark Adams\&quot;,                 \&quot;links\&quot;: {                     \&quot;avatar\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/account/markadams-atl/avatar/32/\&quot;                     },                     \&quot;html\&quot;: {                         \&quot;href\&quot;: \&quot;https://bitbucket.org/markadams-atl/\&quot;                     },                     \&quot;self\&quot;: {                         \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl\&quot;                     }                 },                 \&quot;type\&quot;: \&quot;user\&quot;,                 \&quot;username\&quot;: \&quot;markadams-atl\&quot;,                 \&quot;nickname\&quot;: \&quot;markadams-atl\&quot;,                 \&quot;uuid\&quot;: \&quot;{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\&quot;             },             \&quot;type\&quot;: \&quot;ssh_key\&quot;,             \&quot;uuid\&quot;: \&quot;{b15b6026-9c02-4626-b4ad-b905f99f763a}\&quot;         }     ] } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.SshApi();
let username = "username_example"; // String | The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
apiInstance.usersUsernameSshKeysGet(username, (error, data, response) => {
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
 **username** | **String**| The account&#39;s UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). | 

### Return type

[**PaginatedSshUserKeys**](PaginatedSshUserKeys.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUsernameSshKeysGet_0

> SshAccountKey usersUsernameSshKeysGet_0(username, keyId)



Returns a specific SSH public key belonging to a user.  Example: &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{fbe4bbab-f6f7-4dde-956b-5c58323c54b3}  {     \&quot;comment\&quot;: \&quot;user@myhost\&quot;,     \&quot;created_on\&quot;: \&quot;2018-03-14T13:17:05.196003+00:00\&quot;,     \&quot;key\&quot;: \&quot;ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\&quot;,     \&quot;label\&quot;: \&quot;\&quot;,     \&quot;last_used\&quot;: \&quot;2018-03-20T13:18:05.196003+00:00\&quot;,     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\&quot;         }     },     \&quot;owner\&quot;: {         \&quot;display_name\&quot;: \&quot;Mark Adams\&quot;,         \&quot;links\&quot;: {             \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/account/markadams-atl/avatar/32/\&quot;             },             \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/markadams-atl/\&quot;             },             \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl\&quot;             }         },         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;username\&quot;: \&quot;markadams-atl\&quot;,         \&quot;nickname\&quot;: \&quot;markadams-atl\&quot;,         \&quot;uuid\&quot;: \&quot;{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\&quot;     },     \&quot;type\&quot;: \&quot;ssh_key\&quot;,     \&quot;uuid\&quot;: \&quot;{b15b6026-9c02-4626-b4ad-b905f99f763a}\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.SshApi();
let username = "username_example"; // String | The account's username or UUID.
let keyId = "keyId_example"; // String | The SSH key's UUID value.
apiInstance.usersUsernameSshKeysGet_0(username, keyId, (error, data, response) => {
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
 **username** | **String**| The account&#39;s username or UUID. | 
 **keyId** | **String**| The SSH key&#39;s UUID value. | 

### Return type

[**SshAccountKey**](SshAccountKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUsernameSshKeysPost

> SshAccountKey usersUsernameSshKeysPost(username, opts)



Adds a new SSH public key to the specified user account and returns the resulting key.  Example: &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;key\&quot;: \&quot;ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost\&quot;}&#39; https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys  {     \&quot;comment\&quot;: \&quot;user@myhost\&quot;,     \&quot;created_on\&quot;: \&quot;2018-03-14T13:17:05.196003+00:00\&quot;,     \&quot;key\&quot;: \&quot;ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\&quot;,     \&quot;label\&quot;: \&quot;\&quot;,     \&quot;last_used\&quot;: \&quot;2018-03-20T13:18:05.196003+00:00\&quot;,     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\&quot;         }     },     \&quot;owner\&quot;: {         \&quot;display_name\&quot;: \&quot;Mark Adams\&quot;,         \&quot;links\&quot;: {             \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/account/markadams-atl/avatar/32/\&quot;             },             \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/markadams-atl/\&quot;             },             \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl\&quot;             }         },         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;username\&quot;: \&quot;markadams-atl\&quot;,         \&quot;nickname\&quot;: \&quot;markadams-atl\&quot;,         \&quot;uuid\&quot;: \&quot;{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\&quot;     },     \&quot;type\&quot;: \&quot;ssh_key\&quot;,     \&quot;uuid\&quot;: \&quot;{b15b6026-9c02-4626-b4ad-b905f99f763a}\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.SshApi();
let username = "username_example"; // String | The account's UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
let opts = {
  'body': new Bitbucket.SshAccountKey() // SshAccountKey | The new SSH key object. Note that the username property has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
};
apiInstance.usersUsernameSshKeysPost(username, opts, (error, data, response) => {
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
 **username** | **String**| The account&#39;s UUID, account_id, or username. Note that username has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). | 
 **body** | [**SshAccountKey**](SshAccountKey.md)| The new SSH key object. Note that the username property has been deprecated due to [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis). | [optional] 

### Return type

[**SshAccountKey**](SshAccountKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersUsernameSshKeysPut

> SshAccountKey usersUsernameSshKeysPut(username, keyId, opts)



Updates a specific SSH public key on a user&#39;s account  Note: Only the &#39;comment&#39; field can be updated using this API. To modify the key or comment values, you must delete and add the key again.  Example: &#x60;&#x60;&#x60; $ curl -X PUT -H \&quot;Content-Type: application/json\&quot; -d &#39;{\&quot;label\&quot;: \&quot;Work key\&quot;}&#39; https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a}  {     \&quot;comment\&quot;: \&quot;\&quot;,     \&quot;created_on\&quot;: \&quot;2018-03-14T13:17:05.196003+00:00\&quot;,     \&quot;key\&quot;: \&quot;ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY\&quot;,     \&quot;label\&quot;: \&quot;Work key\&quot;,     \&quot;last_used\&quot;: \&quot;2018-03-20T13:18:05.196003+00:00\&quot;,     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl/ssh-keys/b15b6026-9c02-4626-b4ad-b905f99f763a\&quot;         }     },     \&quot;owner\&quot;: {         \&quot;display_name\&quot;: \&quot;Mark Adams\&quot;,         \&quot;links\&quot;: {             \&quot;avatar\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/account/markadams-atl/avatar/32/\&quot;             },             \&quot;html\&quot;: {                 \&quot;href\&quot;: \&quot;https://bitbucket.org/markadams-atl/\&quot;             },             \&quot;self\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/markadams-atl\&quot;             }         },         \&quot;type\&quot;: \&quot;user\&quot;,         \&quot;username\&quot;: \&quot;markadams-atl\&quot;,         \&quot;nickname\&quot;: \&quot;markadams-atl\&quot;,         \&quot;uuid\&quot;: \&quot;{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}\&quot;     },     \&quot;type\&quot;: \&quot;ssh_key\&quot;,     \&quot;uuid\&quot;: \&quot;{b15b6026-9c02-4626-b4ad-b905f99f763a}\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.SshApi();
let username = "username_example"; // String | The account's username or UUID.
let keyId = "keyId_example"; // String | The SSH key's UUID value.
let opts = {
  'body': new Bitbucket.SshAccountKey() // SshAccountKey | The updated SSH key object
};
apiInstance.usersUsernameSshKeysPut(username, keyId, opts, (error, data, response) => {
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
 **username** | **String**| The account&#39;s username or UUID. | 
 **keyId** | **String**| The SSH key&#39;s UUID value. | 
 **body** | [**SshAccountKey**](SshAccountKey.md)| The updated SSH key object | [optional] 

### Return type

[**SshAccountKey**](SshAccountKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

