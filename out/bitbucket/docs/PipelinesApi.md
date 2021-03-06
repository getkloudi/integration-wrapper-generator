# Bitbucket.PipelinesApi

All URIs are relative to *https://api.bitbucket.org/2.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDeploymentVariable**](PipelinesApi.md#createDeploymentVariable) | **POST** /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables | 
[**createPipelineForRepository**](PipelinesApi.md#createPipelineForRepository) | **POST** /repositories/{workspace}/{repo_slug}/pipelines/ | 
[**createPipelineVariableForTeam**](PipelinesApi.md#createPipelineVariableForTeam) | **POST** /teams/{username}/pipelines_config/variables/ | 
[**createPipelineVariableForUser**](PipelinesApi.md#createPipelineVariableForUser) | **POST** /users/{username}/pipelines_config/variables/ | 
[**createRepositoryPipelineKnownHost**](PipelinesApi.md#createRepositoryPipelineKnownHost) | **POST** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/ | 
[**createRepositoryPipelineSchedule**](PipelinesApi.md#createRepositoryPipelineSchedule) | **POST** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/ | 
[**createRepositoryPipelineVariable**](PipelinesApi.md#createRepositoryPipelineVariable) | **POST** /repositories/{workspace}/{repo_slug}/pipelines_config/variables/ | 
[**deleteDeploymentVariable**](PipelinesApi.md#deleteDeploymentVariable) | **DELETE** /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid} | 
[**deletePipelineVariableForTeam**](PipelinesApi.md#deletePipelineVariableForTeam) | **DELETE** /teams/{username}/pipelines_config/variables/{variable_uuid} | 
[**deletePipelineVariableForUser**](PipelinesApi.md#deletePipelineVariableForUser) | **DELETE** /users/{username}/pipelines_config/variables/{variable_uuid} | 
[**deleteRepositoryPipelineKeyPair**](PipelinesApi.md#deleteRepositoryPipelineKeyPair) | **DELETE** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair | 
[**deleteRepositoryPipelineKnownHost**](PipelinesApi.md#deleteRepositoryPipelineKnownHost) | **DELETE** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid} | 
[**deleteRepositoryPipelineSchedule**](PipelinesApi.md#deleteRepositoryPipelineSchedule) | **DELETE** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid} | 
[**deleteRepositoryPipelineVariable**](PipelinesApi.md#deleteRepositoryPipelineVariable) | **DELETE** /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid} | 
[**getDeploymentVariables**](PipelinesApi.md#getDeploymentVariables) | **GET** /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables | 
[**getPipelineForRepository**](PipelinesApi.md#getPipelineForRepository) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid} | 
[**getPipelineStepForRepository**](PipelinesApi.md#getPipelineStepForRepository) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid} | 
[**getPipelineStepLogForRepository**](PipelinesApi.md#getPipelineStepLogForRepository) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log | 
[**getPipelineStepsForRepository**](PipelinesApi.md#getPipelineStepsForRepository) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/ | 
[**getPipelineVariableForTeam**](PipelinesApi.md#getPipelineVariableForTeam) | **GET** /teams/{username}/pipelines_config/variables/{variable_uuid} | 
[**getPipelineVariableForUser**](PipelinesApi.md#getPipelineVariableForUser) | **GET** /users/{username}/pipelines_config/variables/{variable_uuid} | 
[**getPipelineVariablesForTeam**](PipelinesApi.md#getPipelineVariablesForTeam) | **GET** /teams/{username}/pipelines_config/variables/ | 
[**getPipelineVariablesForUser**](PipelinesApi.md#getPipelineVariablesForUser) | **GET** /users/{username}/pipelines_config/variables/ | 
[**getPipelinesForRepository**](PipelinesApi.md#getPipelinesForRepository) | **GET** /repositories/{workspace}/{repo_slug}/pipelines/ | 
[**getRepositoryPipelineConfig**](PipelinesApi.md#getRepositoryPipelineConfig) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config | 
[**getRepositoryPipelineKnownHost**](PipelinesApi.md#getRepositoryPipelineKnownHost) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid} | 
[**getRepositoryPipelineKnownHosts**](PipelinesApi.md#getRepositoryPipelineKnownHosts) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/ | 
[**getRepositoryPipelineSchedule**](PipelinesApi.md#getRepositoryPipelineSchedule) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid} | 
[**getRepositoryPipelineScheduleExecutions**](PipelinesApi.md#getRepositoryPipelineScheduleExecutions) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/ | 
[**getRepositoryPipelineSchedules**](PipelinesApi.md#getRepositoryPipelineSchedules) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/ | 
[**getRepositoryPipelineSshKeyPair**](PipelinesApi.md#getRepositoryPipelineSshKeyPair) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair | 
[**getRepositoryPipelineVariable**](PipelinesApi.md#getRepositoryPipelineVariable) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid} | 
[**getRepositoryPipelineVariables**](PipelinesApi.md#getRepositoryPipelineVariables) | **GET** /repositories/{workspace}/{repo_slug}/pipelines_config/variables/ | 
[**stopPipeline**](PipelinesApi.md#stopPipeline) | **POST** /repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline | 
[**updateDeploymentVariable**](PipelinesApi.md#updateDeploymentVariable) | **PUT** /repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid} | 
[**updatePipelineVariableForTeam**](PipelinesApi.md#updatePipelineVariableForTeam) | **PUT** /teams/{username}/pipelines_config/variables/{variable_uuid} | 
[**updatePipelineVariableForUser**](PipelinesApi.md#updatePipelineVariableForUser) | **PUT** /users/{username}/pipelines_config/variables/{variable_uuid} | 
[**updateRepositoryBuildNumber**](PipelinesApi.md#updateRepositoryBuildNumber) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config/build_number | 
[**updateRepositoryPipelineConfig**](PipelinesApi.md#updateRepositoryPipelineConfig) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config | 
[**updateRepositoryPipelineKeyPair**](PipelinesApi.md#updateRepositoryPipelineKeyPair) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair | 
[**updateRepositoryPipelineKnownHost**](PipelinesApi.md#updateRepositoryPipelineKnownHost) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid} | 
[**updateRepositoryPipelineSchedule**](PipelinesApi.md#updateRepositoryPipelineSchedule) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid} | 
[**updateRepositoryPipelineVariable**](PipelinesApi.md#updateRepositoryPipelineVariable) | **PUT** /repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid} | 



## createDeploymentVariable

> DeploymentVariable createDeploymentVariable(username, repoSlug, environmentUuid, variableUuid, body)



Create a deployment environment level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to update.
let body = new Bitbucket.DeploymentVariable(); // DeploymentVariable | The variable to create
apiInstance.createDeploymentVariable(username, repoSlug, environmentUuid, variableUuid, body, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment. | 
 **variableUuid** | **String**| The UUID of the variable to update. | 
 **body** | [**DeploymentVariable**](DeploymentVariable.md)| The variable to create | 

### Return type

[**DeploymentVariable**](DeploymentVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPipelineForRepository

> Pipeline createPipelineForRepository(username, repoSlug, body)



Endpoint to create and initiate a pipeline. There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated. # Trigger a Pipeline for a branch One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline. The specified branch will be used to determine which pipeline definition from the &#x60;bitbucket-pipelines.yml&#x60; file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;ref_type\&quot;: \&quot;branch\&quot;,       \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,       \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a Pipeline for a commit on a branch or tag You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark). The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.  The following reference types are supported:  * &#x60;branch&#x60; * &#x60;named_branch&#x60; * &#x60;bookmark&#x60;  * &#x60;tag&#x60;  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;commit\&quot;: {         \&quot;type\&quot;: \&quot;commit\&quot;,         \&quot;hash\&quot;: \&quot;ce5b7431602f7cbba007062eeb55225c6e18e956\&quot;       },       \&quot;ref_type\&quot;: \&quot;branch\&quot;,       \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,       \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit. In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },         \&quot;selector\&quot;: {            \&quot;type\&quot;:\&quot;custom\&quot;,               \&quot;pattern\&quot;:\&quot;Deploy to production\&quot;           },         \&quot;type\&quot;:\&quot;pipeline_commit_target\&quot;    }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit on a branch or tag You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit in the context of a specified reference. In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },        \&quot;selector\&quot;: {           \&quot;type\&quot;: \&quot;custom\&quot;,           \&quot;pattern\&quot;: \&quot;Deploy to production\&quot;        },        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;,        \&quot;ref_type\&quot;: \&quot;branch\&quot;      }   }&#39; &#x60;&#x60;&#x60;   # Trigger a custom pipeline with variables In addition to triggering a custom pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \\  -d &#39;   {     \&quot;target\&quot;: {       \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,       \&quot;ref_type\&quot;: \&quot;branch\&quot;,       \&quot;ref_name\&quot;: \&quot;master\&quot;,       \&quot;selector\&quot;: {         \&quot;type\&quot;: \&quot;custom\&quot;,         \&quot;pattern\&quot;: \&quot;Deploy to production\&quot;       }     },     \&quot;variables\&quot;: [       {         \&quot;key\&quot;: \&quot;var1key\&quot;,         \&quot;value\&quot;: \&quot;var1value\&quot;,         \&quot;secured\&quot;: true       },       {         \&quot;key\&quot;: \&quot;var2key\&quot;,         \&quot;value\&quot;: \&quot;var2value\&quot;       }     ]   }&#39; &#x60;&#x60;&#x60;  # Trigger a pull request pipeline  You can also initiate a pipeline for a specific pull request.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \\  -d &#39;   {  \&quot;target\&quot;: {       \&quot;type\&quot;: \&quot;pipeline_pullrequest_target\&quot;,    \&quot;source\&quot;: \&quot;pull-request-branch\&quot;,       \&quot;destination\&quot;: \&quot;master\&quot;,       \&quot;destination_commit\&quot;: {         \&quot;hash\&quot; : \&quot;9f848b7\&quot;       },       \&quot;commit\&quot;: {        \&quot;hash\&quot; : \&quot;1a372fc\&quot;       },       \&quot;pullrequest\&quot; : {        \&quot;id\&quot; : \&quot;3\&quot;       },    \&quot;selector\&quot;: {         \&quot;type\&quot;: \&quot;pull-requests\&quot;,         \&quot;pattern\&quot;: \&quot;**\&quot;       }     }   }&#39; &#x60;&#x60;&#x60; 

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.Pipeline(); // Pipeline | The pipeline to initiate.
apiInstance.createPipelineForRepository(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**Pipeline**](Pipeline.md)| The pipeline to initiate. | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPipelineVariableForTeam

> PipelineVariable createPipelineVariableForTeam(username, opts)



Create an account level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let opts = {
  'body': new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
};
apiInstance.createPipelineVariableForTeam(username, opts, (error, data, response) => {
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
 **body** | [**PipelineVariable**](PipelineVariable.md)| The variable to create. | [optional] 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPipelineVariableForUser

> PipelineVariable createPipelineVariableForUser(username, opts)



Create a user level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let opts = {
  'body': new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
};
apiInstance.createPipelineVariableForUser(username, opts, (error, data, response) => {
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
 **body** | [**PipelineVariable**](PipelineVariable.md)| The variable to create. | [optional] 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRepositoryPipelineKnownHost

> PipelineKnownHost createRepositoryPipelineKnownHost(username, repoSlug, body)



Create a repository level known host.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelineKnownHost(); // PipelineKnownHost | The known host to create.
apiInstance.createRepositoryPipelineKnownHost(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelineKnownHost**](PipelineKnownHost.md)| The known host to create. | 

### Return type

[**PipelineKnownHost**](PipelineKnownHost.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRepositoryPipelineSchedule

> PipelineSchedule createRepositoryPipelineSchedule(username, repoSlug, body)



Create a schedule for the given repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelineSchedule(); // PipelineSchedule | The schedule to create.
apiInstance.createRepositoryPipelineSchedule(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelineSchedule**](PipelineSchedule.md)| The schedule to create. | 

### Return type

[**PipelineSchedule**](PipelineSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRepositoryPipelineVariable

> PipelineVariable createRepositoryPipelineVariable(username, repoSlug, body)



Create a repository level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelineVariable(); // PipelineVariable | The variable to create.
apiInstance.createRepositoryPipelineVariable(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelineVariable**](PipelineVariable.md)| The variable to create. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteDeploymentVariable

> deleteDeploymentVariable(username, repoSlug, environmentUuid, variableUuid)



Delete a deployment environment level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to delete.
apiInstance.deleteDeploymentVariable(username, repoSlug, environmentUuid, variableUuid, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment. | 
 **variableUuid** | **String**| The UUID of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePipelineVariableForTeam

> deletePipelineVariableForTeam(username, variableUuid)



Delete a team level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to delete.
apiInstance.deletePipelineVariableForTeam(username, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deletePipelineVariableForUser

> deletePipelineVariableForUser(username, variableUuid)



Delete an account level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to delete.
apiInstance.deletePipelineVariableForUser(username, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRepositoryPipelineKeyPair

> deleteRepositoryPipelineKeyPair(username, repoSlug)



Delete the repository SSH key pair.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.deleteRepositoryPipelineKeyPair(username, repoSlug, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRepositoryPipelineKnownHost

> deleteRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid)



Delete a repository level known host.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let knownHostUuid = "knownHostUuid_example"; // String | The UUID of the known host to delete.
apiInstance.deleteRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, (error, data, response) => {
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
 **knownHostUuid** | **String**| The UUID of the known host to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRepositoryPipelineSchedule

> deleteRepositoryPipelineSchedule(username, repoSlug, scheduleUuid)



Delete a schedule.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let scheduleUuid = "scheduleUuid_example"; // String | The uuid of the schedule.
apiInstance.deleteRepositoryPipelineSchedule(username, repoSlug, scheduleUuid, (error, data, response) => {
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
 **scheduleUuid** | **String**| The uuid of the schedule. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteRepositoryPipelineVariable

> deleteRepositoryPipelineVariable(username, repoSlug, variableUuid)



Delete a repository level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to delete.
apiInstance.deleteRepositoryPipelineVariable(username, repoSlug, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to delete. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDeploymentVariables

> PaginatedDeploymentVariable getDeploymentVariables(username, repoSlug, environmentUuid)



Find deployment environment level variables.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment.
apiInstance.getDeploymentVariables(username, repoSlug, environmentUuid, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment. | 

### Return type

[**PaginatedDeploymentVariable**](PaginatedDeploymentVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineForRepository

> Pipeline getPipelineForRepository(username, repoSlug, pipelineUuid)



Retrieve a specified pipeline

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pipelineUuid = "pipelineUuid_example"; // String | The pipeline UUID.
apiInstance.getPipelineForRepository(username, repoSlug, pipelineUuid, (error, data, response) => {
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
 **pipelineUuid** | **String**| The pipeline UUID. | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineStepForRepository

> PipelineStep getPipelineStepForRepository(username, repoSlug, pipelineUuid, stepUuid)



Retrieve a given step of a pipeline.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pipelineUuid = "pipelineUuid_example"; // String | The UUID of the pipeline.
let stepUuid = "stepUuid_example"; // String | The UUID of the step.
apiInstance.getPipelineStepForRepository(username, repoSlug, pipelineUuid, stepUuid, (error, data, response) => {
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
 **pipelineUuid** | **String**| The UUID of the pipeline. | 
 **stepUuid** | **String**| The UUID of the step. | 

### Return type

[**PipelineStep**](PipelineStep.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineStepLogForRepository

> getPipelineStepLogForRepository(username, repoSlug, pipelineUuid, stepUuid)



Retrieve the log file for a given step of a pipeline.  This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pipelineUuid = "pipelineUuid_example"; // String | The UUID of the pipeline.
let stepUuid = "stepUuid_example"; // String | The UUID of the step.
apiInstance.getPipelineStepLogForRepository(username, repoSlug, pipelineUuid, stepUuid, (error, data, response) => {
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
 **pipelineUuid** | **String**| The UUID of the pipeline. | 
 **stepUuid** | **String**| The UUID of the step. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## getPipelineStepsForRepository

> PaginatedPipelineSteps getPipelineStepsForRepository(username, repoSlug, pipelineUuid)



Find steps for the given pipeline.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pipelineUuid = "pipelineUuid_example"; // String | The UUID of the pipeline.
apiInstance.getPipelineStepsForRepository(username, repoSlug, pipelineUuid, (error, data, response) => {
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
 **pipelineUuid** | **String**| The UUID of the pipeline. | 

### Return type

[**PaginatedPipelineSteps**](PaginatedPipelineSteps.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineVariableForTeam

> PipelineVariable getPipelineVariableForTeam(username, variableUuid)



Retrieve a team level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to retrieve.
apiInstance.getPipelineVariableForTeam(username, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to retrieve. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineVariableForUser

> PipelineVariable getPipelineVariableForUser(username, variableUuid)



Retrieve a user level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to retrieve.
apiInstance.getPipelineVariableForUser(username, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to retrieve. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineVariablesForTeam

> PaginatedPipelineVariables getPipelineVariablesForTeam(username)



Find account level variables.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
apiInstance.getPipelineVariablesForTeam(username, (error, data, response) => {
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

### Return type

[**PaginatedPipelineVariables**](PaginatedPipelineVariables.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelineVariablesForUser

> PaginatedPipelineVariables getPipelineVariablesForUser(username)



Find user level variables.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
apiInstance.getPipelineVariablesForUser(username, (error, data, response) => {
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

### Return type

[**PaginatedPipelineVariables**](PaginatedPipelineVariables.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPipelinesForRepository

> PaginatedPipelines getPipelinesForRepository(username, repoSlug)



Find pipelines

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getPipelinesForRepository(username, repoSlug, (error, data, response) => {
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

[**PaginatedPipelines**](PaginatedPipelines.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineConfig

> PipelinesConfig getRepositoryPipelineConfig(username, repoSlug)



Retrieve the repository pipelines configuration.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineConfig(username, repoSlug, (error, data, response) => {
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

[**PipelinesConfig**](PipelinesConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineKnownHost

> PipelineKnownHost getRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid)



Retrieve a repository level known host.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let knownHostUuid = "knownHostUuid_example"; // String | The UUID of the known host to retrieve.
apiInstance.getRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, (error, data, response) => {
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
 **knownHostUuid** | **String**| The UUID of the known host to retrieve. | 

### Return type

[**PipelineKnownHost**](PipelineKnownHost.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineKnownHosts

> PaginatedPipelineKnownHosts getRepositoryPipelineKnownHosts(username, repoSlug)



Find repository level known hosts.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineKnownHosts(username, repoSlug, (error, data, response) => {
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

[**PaginatedPipelineKnownHosts**](PaginatedPipelineKnownHosts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineSchedule

> PipelineSchedule getRepositoryPipelineSchedule(username, repoSlug, scheduleUuid)



Retrieve a schedule by its UUID.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let scheduleUuid = "scheduleUuid_example"; // String | The uuid of the schedule.
apiInstance.getRepositoryPipelineSchedule(username, repoSlug, scheduleUuid, (error, data, response) => {
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
 **scheduleUuid** | **String**| The uuid of the schedule. | 

### Return type

[**PipelineSchedule**](PipelineSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineScheduleExecutions

> PaginatedPipelineScheduleExecutions getRepositoryPipelineScheduleExecutions(username, repoSlug)



Retrieve the executions of a given schedule.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineScheduleExecutions(username, repoSlug, (error, data, response) => {
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

[**PaginatedPipelineScheduleExecutions**](PaginatedPipelineScheduleExecutions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineSchedules

> PaginatedPipelineSchedules getRepositoryPipelineSchedules(username, repoSlug)



Retrieve the configured schedules for the given repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineSchedules(username, repoSlug, (error, data, response) => {
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

[**PaginatedPipelineSchedules**](PaginatedPipelineSchedules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineSshKeyPair

> PipelineSshKeyPair getRepositoryPipelineSshKeyPair(username, repoSlug)



Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineSshKeyPair(username, repoSlug, (error, data, response) => {
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

[**PipelineSshKeyPair**](PipelineSshKeyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineVariable

> PipelineVariable getRepositoryPipelineVariable(username, repoSlug, variableUuid)



Retrieve a repository level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to retrieve.
apiInstance.getRepositoryPipelineVariable(username, repoSlug, variableUuid, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to retrieve. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRepositoryPipelineVariables

> PaginatedPipelineVariables getRepositoryPipelineVariables(username, repoSlug)



Find repository level variables.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
apiInstance.getRepositoryPipelineVariables(username, repoSlug, (error, data, response) => {
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

[**PaginatedPipelineVariables**](PaginatedPipelineVariables.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## stopPipeline

> stopPipeline(username, repoSlug, pipelineUuid)



Signal the stop of a pipeline and all of its steps that not have completed yet.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let pipelineUuid = "pipelineUuid_example"; // String | The UUID of the pipeline.
apiInstance.stopPipeline(username, repoSlug, pipelineUuid, (error, data, response) => {
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
 **pipelineUuid** | **String**| The UUID of the pipeline. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateDeploymentVariable

> DeploymentVariable updateDeploymentVariable(username, repoSlug, environmentUuid, variableUuid, body)



Update a deployment environment level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let environmentUuid = "environmentUuid_example"; // String | The environment.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to update.
let body = new Bitbucket.DeploymentVariable(); // DeploymentVariable | The updated deployment variable.
apiInstance.updateDeploymentVariable(username, repoSlug, environmentUuid, variableUuid, body, (error, data, response) => {
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
 **environmentUuid** | **String**| The environment. | 
 **variableUuid** | **String**| The UUID of the variable to update. | 
 **body** | [**DeploymentVariable**](DeploymentVariable.md)| The updated deployment variable. | 

### Return type

[**DeploymentVariable**](DeploymentVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePipelineVariableForTeam

> PipelineVariable updatePipelineVariableForTeam(username, variableUuid, body)



Update a team level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable.
let body = new Bitbucket.PipelineVariable(); // PipelineVariable | The updated variable.
apiInstance.updatePipelineVariableForTeam(username, variableUuid, body, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable. | 
 **body** | [**PipelineVariable**](PipelineVariable.md)| The updated variable. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePipelineVariableForUser

> PipelineVariable updatePipelineVariableForUser(username, variableUuid, body)



Update a user level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable.
let body = new Bitbucket.PipelineVariable(); // PipelineVariable | The updated variable.
apiInstance.updatePipelineVariableForUser(username, variableUuid, body, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable. | 
 **body** | [**PipelineVariable**](PipelineVariable.md)| The updated variable. | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryBuildNumber

> PipelineBuildNumber updateRepositoryBuildNumber(username, repoSlug, body)



Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelineBuildNumber(); // PipelineBuildNumber | The build number to update.
apiInstance.updateRepositoryBuildNumber(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelineBuildNumber**](PipelineBuildNumber.md)| The build number to update. | 

### Return type

[**PipelineBuildNumber**](PipelineBuildNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryPipelineConfig

> PipelinesConfig updateRepositoryPipelineConfig(username, repoSlug, body)



Update the pipelines configuration for a repository.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelinesConfig(); // PipelinesConfig | The updated repository pipelines configuration.
apiInstance.updateRepositoryPipelineConfig(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelinesConfig**](PipelinesConfig.md)| The updated repository pipelines configuration. | 

### Return type

[**PipelinesConfig**](PipelinesConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryPipelineKeyPair

> PipelineSshKeyPair updateRepositoryPipelineKeyPair(username, repoSlug, body)



Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let body = new Bitbucket.PipelineSshKeyPair(); // PipelineSshKeyPair | The created or updated SSH key pair.
apiInstance.updateRepositoryPipelineKeyPair(username, repoSlug, body, (error, data, response) => {
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
 **body** | [**PipelineSshKeyPair**](PipelineSshKeyPair.md)| The created or updated SSH key pair. | 

### Return type

[**PipelineSshKeyPair**](PipelineSshKeyPair.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryPipelineKnownHost

> PipelineKnownHost updateRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, body)



Update a repository level known host.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let knownHostUuid = "knownHostUuid_example"; // String | The UUID of the known host to update.
let body = new Bitbucket.PipelineKnownHost(); // PipelineKnownHost | The updated known host.
apiInstance.updateRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, body, (error, data, response) => {
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
 **knownHostUuid** | **String**| The UUID of the known host to update. | 
 **body** | [**PipelineKnownHost**](PipelineKnownHost.md)| The updated known host. | 

### Return type

[**PipelineKnownHost**](PipelineKnownHost.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryPipelineSchedule

> PipelineSchedule updateRepositoryPipelineSchedule(username, repoSlug, scheduleUuid, body)



Update a schedule.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let scheduleUuid = "scheduleUuid_example"; // String | The uuid of the schedule.
let body = new Bitbucket.PipelineSchedule(); // PipelineSchedule | The schedule to update.
apiInstance.updateRepositoryPipelineSchedule(username, repoSlug, scheduleUuid, body, (error, data, response) => {
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
 **scheduleUuid** | **String**| The uuid of the schedule. | 
 **body** | [**PipelineSchedule**](PipelineSchedule.md)| The schedule to update. | 

### Return type

[**PipelineSchedule**](PipelineSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRepositoryPipelineVariable

> PipelineVariable updateRepositoryPipelineVariable(username, repoSlug, variableUuid, body)



Update a repository level variable.

### Example

```javascript
import Bitbucket from 'bitbucket';

let apiInstance = new Bitbucket.PipelinesApi();
let username = "username_example"; // String | The account.
let repoSlug = "repoSlug_example"; // String | The repository.
let variableUuid = "variableUuid_example"; // String | The UUID of the variable to update.
let body = new Bitbucket.PipelineVariable(); // PipelineVariable | The updated variable
apiInstance.updateRepositoryPipelineVariable(username, repoSlug, variableUuid, body, (error, data, response) => {
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
 **variableUuid** | **String**| The UUID of the variable to update. | 
 **body** | [**PipelineVariable**](PipelineVariable.md)| The updated variable | 

### Return type

[**PipelineVariable**](PipelineVariable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

