# Bitbucket.DeploymentsApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEnvironment**](DeploymentsApi.md#createEnvironment) | **POST** /repositories/{workspace}/{repo_slug}/environments/ | 
[**deleteEnvironmentForRepository**](DeploymentsApi.md#deleteEnvironmentForRepository) | **DELETE** /repositories/{workspace}/{repo_slug}/environments/{environment_uuid} | 
[**getDeploymentForRepository**](DeploymentsApi.md#getDeploymentForRepository) | **GET** /repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid} | 
[**getDeploymentsForRepository**](DeploymentsApi.md#getDeploymentsForRepository) | **GET** /repositories/{workspace}/{repo_slug}/deployments/ | 
[**getEnvironmentForRepository**](DeploymentsApi.md#getEnvironmentForRepository) | **GET** /repositories/{workspace}/{repo_slug}/environments/{environment_uuid} | 
[**getEnvironmentsForRepository**](DeploymentsApi.md#getEnvironmentsForRepository) | **GET** /repositories/{workspace}/{repo_slug}/environments/ | 
[**updateEnvironmentForRepository**](DeploymentsApi.md#updateEnvironmentForRepository) | **POST** /repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/ | 



## createEnvironment

> DeploymentEnvironment createEnvironment(username, repoSlug, body)



Create an environment.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.DeploymentEnvironment(); // DeploymentEnvironment | The environment to create.
apiInstance.createEnvironment(username, repoSlug, body, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **body** | [**DeploymentEnvironment**](DeploymentEnvironment.md)| The environment to create. | 

### Return type

[**DeploymentEnvironment**](DeploymentEnvironment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEnvironmentForRepository

> deleteEnvironmentForRepository(username, repoSlug, environmentUuid)



Delete an environment

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment UUID.
apiInstance.deleteEnvironmentForRepository(username, repoSlug, environmentUuid, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment UUID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeploymentForRepository

> Deployment getDeploymentForRepository(username, repoSlug, deploymentUuid)



Retrieve a deployment

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let deploymentUuid = "deploymentUuid_example"; // String | The deployment UUID.
apiInstance.getDeploymentForRepository(username, repoSlug, deploymentUuid, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **deploymentUuid** | **String**| The deployment UUID. | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeploymentsForRepository

> PaginatedDeployments getDeploymentsForRepository(username, repoSlug)



Find deployments

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getDeploymentsForRepository(username, repoSlug, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 

### Return type

[**PaginatedDeployments**](PaginatedDeployments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentForRepository

> DeploymentEnvironment getEnvironmentForRepository(username, repoSlug, environmentUuid)



Retrieve an environment

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment UUID.
apiInstance.getEnvironmentForRepository(username, repoSlug, environmentUuid, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 
 **environmentUuid** | **String**| The environment UUID. | 

### Return type

[**DeploymentEnvironment**](DeploymentEnvironment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironmentsForRepository

> PaginatedEnvironments getEnvironmentsForRepository(username, repoSlug)



Find environments

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getEnvironmentsForRepository(username, repoSlug, (error, data, response) => {
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
 **username** | **String**| The account. | 
 **repoSlug** | **String**| The repository. | 

### Return type

[**PaginatedEnvironments**](PaginatedEnvironments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEnvironmentForRepository

> updateEnvironmentForRepository(username, repoSlug, environmentUuid)



Update an environment

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.DeploymentsApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment UUID.
apiInstance.updateEnvironmentForRepository(username, repoSlug, environmentUuid, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment UUID. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

