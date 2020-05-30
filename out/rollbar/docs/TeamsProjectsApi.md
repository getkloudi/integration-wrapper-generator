# Rollbar.TeamsProjectsApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamTeamIdProjectProjectIdDelete**](TeamsProjectsApi.md#teamTeamIdProjectProjectIdDelete) | **DELETE** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectProjectIdGet**](TeamsProjectsApi.md#teamTeamIdProjectProjectIdGet) | **GET** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectProjectIdPut**](TeamsProjectsApi.md#teamTeamIdProjectProjectIdPut) | **PUT** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectsGet**](TeamsProjectsApi.md#teamTeamIdProjectsGet) | **GET** /team/{team_id}/projects | 



## teamTeamIdProjectProjectIdDelete

> teamTeamIdProjectProjectIdDelete()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsProjectsApi();
apiInstance.teamTeamIdProjectProjectIdDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectProjectIdGet

> teamTeamIdProjectProjectIdGet()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsProjectsApi();
apiInstance.teamTeamIdProjectProjectIdGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectProjectIdPut

> teamTeamIdProjectProjectIdPut()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsProjectsApi();
apiInstance.teamTeamIdProjectProjectIdPut((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectsGet

> teamTeamIdProjectsGet()



### Example

```javascript
import Rollbar from 'Rollbar';
let defaultClient = Rollbar.ApiClient.instance;
// Configure API key authorization: accessToken
let accessToken = defaultClient.authentications['accessToken'];
accessToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//accessToken.apiKeyPrefix = 'Token';

let apiInstance = new Rollbar.TeamsProjectsApi();
apiInstance.teamTeamIdProjectsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

