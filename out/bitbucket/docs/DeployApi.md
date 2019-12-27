# Bitbucket.DeployApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**repositoriesWorkspaceRepoSlugDeployKeysGet**](DeployApi.md#repositoriesWorkspaceRepoSlugDeployKeysGet) | **GET** /repositories/{workspace}/{repo_slug}/deploy-keys | 
[**repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete**](DeployApi.md#repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete) | **DELETE** /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id} | 
[**repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet**](DeployApi.md#repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet) | **GET** /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id} | 
[**repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut**](DeployApi.md#repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut) | **PUT** /repositories/{workspace}/{repo_slug}/deploy-keys/{key_id} | 
[**repositoriesWorkspaceRepoSlugDeployKeysPost**](DeployApi.md#repositoriesWorkspaceRepoSlugDeployKeysPost) | **POST** /repositories/{workspace}/{repo_slug}/deploy-keys | 



## repositoriesWorkspaceRepoSlugDeployKeysGet

> PaginatedDeployKeys repositoriesWorkspaceRepoSlugDeployKeysGet(workspace, repoSlug)



Returns all deploy-keys belonging to a repository.  Example: &#x60;&#x60;&#x60; $ curl -H \&quot;Authorization &lt;auth header&gt;\&quot; \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys  Output: {     \&quot;pagelen\&quot;: 10,     \&quot;values\&quot;: [         {             \&quot;id\&quot;: 123,             \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\&quot;,             \&quot;label\&quot;: \&quot;mykey\&quot;,             \&quot;type\&quot;: \&quot;deploy_key\&quot;,             \&quot;created_on\&quot;: \&quot;2018-08-15T23:50:59.993890+00:00\&quot;,             \&quot;repository\&quot;: {                 \&quot;full_name\&quot;: \&quot;mleu/test\&quot;,                 \&quot;name\&quot;: \&quot;test\&quot;,                 \&quot;type\&quot;: \&quot;repository\&quot;,                 \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;             },             \&quot;links\&quot;:{                 \&quot;self\&quot;:{                     \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\&quot;                 }             }             \&quot;last_used\&quot;: null,             \&quot;comment\&quot;: \&quot;mleu@C02W454JHTD8\&quot;         }     ],     \&quot;page\&quot;: 1,     \&quot;size\&quot;: 1 } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DeployApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDeployKeysGet(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**PaginatedDeployKeys**](PaginatedDeployKeys.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete

> repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete(keyId, workspace, repoSlug)



This deletes a deploy key from a repository.  Example: &#x60;&#x60;&#x60; $ curl -XDELETE \\ -H \&quot;Authorization &lt;auth header&gt;\&quot; \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DeployApi();
let keyId = "keyId_example"; // String | The key ID matching the deploy key.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete(keyId, workspace, repoSlug, (error, data, response) => {
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
 **keyId** | **String**| The key ID matching the deploy key. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet

> DeployKey repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet(keyId, workspace, repoSlug)



Returns the deploy key belonging to a specific key.  Example: &#x60;&#x60;&#x60; $ curl -H \&quot;Authorization &lt;auth header&gt;\&quot; \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234  Output: {     \&quot;comment\&quot;: \&quot;mleu@C02W454JHTD8\&quot;,     \&quot;last_used\&quot;: null,     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234\&quot;         }     },     \&quot;repository\&quot;: {         \&quot;full_name\&quot;: \&quot;mleu/test\&quot;,         \&quot;name\&quot;: \&quot;test\&quot;,         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;     },     \&quot;label\&quot;: \&quot;mykey\&quot;,     \&quot;created_on\&quot;: \&quot;2018-08-15T23:50:59.993890+00:00\&quot;,     \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\&quot;,     \&quot;id\&quot;: 1234,     \&quot;type\&quot;: \&quot;deploy_key\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DeployApi();
let keyId = "keyId_example"; // String | The key ID matching the deploy key.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet(keyId, workspace, repoSlug, (error, data, response) => {
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
 **keyId** | **String**| The key ID matching the deploy key. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**DeployKey**](DeployKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut

> DeployKey repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut(keyId, workspace, repoSlug)



Create a new deploy key in a repository.  The same key needs to be passed in but the comment and label can change.  Example: &#x60;&#x60;&#x60; $ curl -XPUT \\ -H \&quot;Authorization &lt;auth header&gt;\&quot; \\ -H \&quot;Content-type: application/json\&quot; \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \\ &#39;{     \&quot;label\&quot;: \&quot;newlabel\&quot;,     \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment\&quot;, }&#39;  Output: {     \&quot;comment\&quot;: \&quot;newcomment\&quot;,     \&quot;last_used\&quot;: null,     \&quot;links\&quot;: {         \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234\&quot;         }     },     \&quot;repository\&quot;: {         \&quot;full_name\&quot;: \&quot;mleu/test\&quot;,         \&quot;name\&quot;: \&quot;test\&quot;,         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;     },     \&quot;label\&quot;: \&quot;newlabel\&quot;,     \&quot;created_on\&quot;: \&quot;2018-08-15T23:50:59.993890+00:00\&quot;,     \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\&quot;,     \&quot;id\&quot;: 1234,     \&quot;type\&quot;: \&quot;deploy_key\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DeployApi();
let keyId = "keyId_example"; // String | The key ID matching the deploy key.
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut(keyId, workspace, repoSlug, (error, data, response) => {
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
 **keyId** | **String**| The key ID matching the deploy key. | 
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**DeployKey**](DeployKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## repositoriesWorkspaceRepoSlugDeployKeysPost

> DeployKey repositoriesWorkspaceRepoSlugDeployKeysPost(workspace, repoSlug)



Create a new deploy key in a repository.  Example: &#x60;&#x60;&#x60; $ curl -XPOST \\ -H \&quot;Authorization &lt;auth header&gt;\&quot; \\ -H \&quot;Content-type: application/json\&quot; \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \\ &#39;{     \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8\&quot;,     \&quot;label\&quot;: \&quot;mydeploykey\&quot; }&#39;  Output: {     \&quot;id\&quot;: 123,     \&quot;key\&quot;: \&quot;ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\&quot;,     \&quot;label\&quot;: \&quot;mydeploykey\&quot;,     \&quot;type\&quot;: \&quot;deploy_key\&quot;,     \&quot;created_on\&quot;: \&quot;2018-08-15T23:50:59.993890+00:00\&quot;,     \&quot;repository\&quot;: {         \&quot;full_name\&quot;: \&quot;mleu/test\&quot;,         \&quot;name\&quot;: \&quot;test\&quot;,         \&quot;type\&quot;: \&quot;repository\&quot;,         \&quot;uuid\&quot;: \&quot;{85d08b4e-571d-44e9-a507-fa476535aa98}\&quot;     },     \&quot;links\&quot;:{         \&quot;self\&quot;:{             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\&quot;         }     }     \&quot;last_used\&quot;: null,     \&quot;comment\&quot;: \&quot;mleu@C02W454JHTD8\&quot; } &#x60;&#x60;&#x60;

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

let apiInstance = new Bitbucket.DeployApi();
let workspace = "workspace_example"; // String | This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
let repoSlug = "repoSlug_example"; // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesWorkspaceRepoSlugDeployKeysPost(workspace, repoSlug, (error, data, response) => {
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
 **workspace** | **String**| This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: &#x60;{workspace UUID}&#x60;.  | 
 **repoSlug** | **String**| This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: &#x60;{repository UUID}&#x60;.  | 

### Return type

[**DeployKey**](DeployKey.md)

### Authorization

[api_key](../README.md#api_key), [basic](../README.md#basic), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

