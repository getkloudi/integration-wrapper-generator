# Jira.TasksApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taskTaskIdCancelPost**](TasksApi.md#taskTaskIdCancelPost) | **POST** /task/{taskId}/cancel | Cancel task
[**taskTaskIdGet**](TasksApi.md#taskTaskIdGet) | **GET** /task/{taskId} | Get task



## taskTaskIdCancelPost

> Object taskTaskIdCancelPost(cloudid, taskId)

Cancel task

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TasksApi();
let cloudid = null; // Object | Cloudi of the project
let taskId = "taskId_example"; // String | The ID of the task.
apiInstance.taskTaskIdCancelPost(cloudid, taskId, (error, data, response) => {
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
 **taskId** | **String**| The ID of the task. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taskTaskIdGet

> TaskProgressBeanObject taskTaskIdGet(cloudid, taskId)

Get task

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.TasksApi();
let cloudid = null; // Object | Cloudi of the project
let taskId = "taskId_example"; // String | The ID of the task.
apiInstance.taskTaskIdGet(cloudid, taskId, (error, data, response) => {
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
 **taskId** | **String**| The ID of the task. | 

### Return type

[**TaskProgressBeanObject**](TaskProgressBeanObject.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

