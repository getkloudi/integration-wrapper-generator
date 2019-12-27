# Bitbucket.PropertiesApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCommitHostedPropertyValue**](PropertiesApi.md#deleteCommitHostedPropertyValue) | **DELETE** /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name} | 
[**deletePullRequestHostedPropertyValue**](PropertiesApi.md#deletePullRequestHostedPropertyValue) | **DELETE** /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name} | 
[**deleteRepositoryHostedPropertyValue**](PropertiesApi.md#deleteRepositoryHostedPropertyValue) | **DELETE** /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name} | 
[**deleteUserHostedPropertyValue**](PropertiesApi.md#deleteUserHostedPropertyValue) | **DELETE** /users/{username}/properties/{app_key}/{property_name} | 
[**getCommitHostedPropertyValue**](PropertiesApi.md#getCommitHostedPropertyValue) | **GET** /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name} | 
[**getPullRequestHostedPropertyValue**](PropertiesApi.md#getPullRequestHostedPropertyValue) | **GET** /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name} | 
[**getRepositoryHostedPropertyValue**](PropertiesApi.md#getRepositoryHostedPropertyValue) | **GET** /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name} | 
[**retrieveUserHostedPropertyValue**](PropertiesApi.md#retrieveUserHostedPropertyValue) | **GET** /users/{username}/properties/{app_key}/{property_name} | 
[**updateCommitHostedPropertyValue**](PropertiesApi.md#updateCommitHostedPropertyValue) | **PUT** /repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name} | 
[**updatePullRequestHostedPropertyValue**](PropertiesApi.md#updatePullRequestHostedPropertyValue) | **PUT** /repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name} | 
[**updateRepositoryHostedPropertyValue**](PropertiesApi.md#updateRepositoryHostedPropertyValue) | **PUT** /repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name} | 
[**updateUserHostedPropertyValue**](PropertiesApi.md#updateUserHostedPropertyValue) | **PUT** /users/{username}/properties/{app_key}/{property_name} | 



## deleteCommitHostedPropertyValue

> deleteCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName)



Delete an application property value stored against a commit.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.deleteCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deletePullRequestHostedPropertyValue

> deletePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName)



Delete an application property value stored against a pull request.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pullrequestId = "pullrequestId_example"; // String | The pull request ID.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.deletePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **pullrequestId** | **String**| The pull request ID. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteRepositoryHostedPropertyValue

> deleteRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName)



Delete an application property value stored against a repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.deleteRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteUserHostedPropertyValue

> deleteUserHostedPropertyValue(username, appKey, propertyName)



Delete an application property value stored against a user.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The user.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.deleteUserHostedPropertyValue(username, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The user. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCommitHostedPropertyValue

> getCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName)



Retrieve an application property value stored against a commit.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.getCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getPullRequestHostedPropertyValue

> getPullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName)



Retrieve an application property value stored against a pull request.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pullrequestId = "pullrequestId_example"; // String | The pull request ID.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.getPullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **pullrequestId** | **String**| The pull request ID. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getRepositoryHostedPropertyValue

> getRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName)



Retrieve an application property value stored against a repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.getRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## retrieveUserHostedPropertyValue

> retrieveUserHostedPropertyValue(username, appKey, propertyName)



Retrieve an application property value stored against a user.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The user.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.retrieveUserHostedPropertyValue(username, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The user. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateCommitHostedPropertyValue

> updateCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName)



Update an application property value stored against a commit.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let commit = "commit_example"; // String | The commit.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.updateCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **commit** | **String**| The commit. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updatePullRequestHostedPropertyValue

> updatePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName)



Update an application property value stored against a pull request.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pullrequestId = "pullrequestId_example"; // String | The pull request ID.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.updatePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **pullrequestId** | **String**| The pull request ID. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateRepositoryHostedPropertyValue

> updateRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName)



Update an application property value stored against a repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.updateRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## updateUserHostedPropertyValue

> updateUserHostedPropertyValue(username, appKey, propertyName)



Update an application property value stored against a user.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PropertiesApi();
let username = "username_example"; // String | The user.
let appKey = "appKey_example"; // String | The key of the Connect app.
let propertyName = "propertyName_example"; // String | The name of the property.
apiInstance.updateUserHostedPropertyValue(username, appKey, propertyName, (error, data, response) => {
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
 **username** | **String**| The user. | 
 **appKey** | **String**| The key of the Connect app. | 
 **propertyName** | **String**| The name of the property. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

