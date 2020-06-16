# Jira.ProjectVersionsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectProjectIdOrKeyVersionGet**](ProjectVersionsApi.md#projectProjectIdOrKeyVersionGet) | **GET** /project/{projectIdOrKey}/version | Get project versions paginated
[**projectProjectIdOrKeyVersionsGet**](ProjectVersionsApi.md#projectProjectIdOrKeyVersionsGet) | **GET** /project/{projectIdOrKey}/versions | Get project versions
[**versionIdDelete**](ProjectVersionsApi.md#versionIdDelete) | **DELETE** /version/{id} | Delete version
[**versionIdGet**](ProjectVersionsApi.md#versionIdGet) | **GET** /version/{id} | Get version
[**versionIdMergetoMoveIssuesToPut**](ProjectVersionsApi.md#versionIdMergetoMoveIssuesToPut) | **PUT** /version/{id}/mergeto/{moveIssuesTo} | Merge versions
[**versionIdMovePost**](ProjectVersionsApi.md#versionIdMovePost) | **POST** /version/{id}/move | Move version
[**versionIdPut**](ProjectVersionsApi.md#versionIdPut) | **PUT** /version/{id} | Update version
[**versionIdRelatedIssueCountsGet**](ProjectVersionsApi.md#versionIdRelatedIssueCountsGet) | **GET** /version/{id}/relatedIssueCounts | Get version&#39;s related issues count
[**versionIdRemoveAndSwapPost**](ProjectVersionsApi.md#versionIdRemoveAndSwapPost) | **POST** /version/{id}/removeAndSwap | Delete and replace version
[**versionIdUnresolvedIssueCountGet**](ProjectVersionsApi.md#versionIdUnresolvedIssueCountGet) | **GET** /version/{id}/unresolvedIssueCount | Get version&#39;s unresolved issues count
[**versionPost**](ProjectVersionsApi.md#versionPost) | **POST** /version | Create version



## projectProjectIdOrKeyVersionGet

> PageBeanVersion projectProjectIdOrKeyVersionGet(cloudid, projectIdOrKey, opts)

Get project versions paginated

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'orderBy': "orderBy_example", // String | [Order](#ordering) the results by a field:   *  `description` Sorts by version description.  *  `name` Sorts by version name.  *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  `sequence` Sorts by the order of appearance in the user interface.  *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.
  'query': "query_example", // String | Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
  'status': "status_example", // String | A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `issuesstatus` Returns the number of issues in each status category for each version.  *  `operations` Returns actions that can be performed on the specified version.
};
apiInstance.projectProjectIdOrKeyVersionGet(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **orderBy** | **String**| [Order](#ordering) the results by a field:   *  &#x60;description&#x60; Sorts by version description.  *  &#x60;name&#x60; Sorts by version name.  *  &#x60;releaseDate&#x60; Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  &#x60;sequence&#x60; Sorts by the order of appearance in the user interface.  *  &#x60;startDate&#x60; Sorts by start date, starting with the oldest date. Versions with no start date are listed last. | [optional] 
 **query** | **String**| Filter the results using a literal string. Versions with matching &#x60;name&#x60; or &#x60;description&#x60; are returned (case insensitive). | [optional] 
 **status** | **String**| A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are &#x60;released&#x60;, &#x60;unreleased&#x60;, and &#x60;archived&#x60;. | [optional] 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;issuesstatus&#x60; Returns the number of issues in each status category for each version.  *  &#x60;operations&#x60; Returns actions that can be performed on the specified version. | [optional] 

### Return type

[**PageBeanVersion**](PageBeanVersion.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyVersionsGet

> [Version] projectProjectIdOrKeyVersionsGet(cloudid, projectIdOrKey, opts)

Get project versions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.
};
apiInstance.projectProjectIdOrKeyVersionsGet(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts &#x60;operations&#x60;, which returns actions that can be performed on the version. | [optional] 

### Return type

[**[Version]**](Version.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## versionIdDelete

> versionIdDelete(cloudid, id, opts)

Delete version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
let opts = {
  'moveFixIssuesTo': "moveFixIssuesTo_example", // String | The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
  'moveAffectedIssuesTo': "moveAffectedIssuesTo_example" // String | The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
};
apiInstance.versionIdDelete(cloudid, id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 
 **moveFixIssuesTo** | **String**| The ID of the version to update &#x60;fixVersion&#x60; to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. | [optional] 
 **moveAffectedIssuesTo** | **String**| The ID of the version to update &#x60;affectedVersion&#x60; to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## versionIdGet

> Version versionIdGet(cloudid, id, opts)

Get version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.
};
apiInstance.versionIdGet(cloudid, id, opts, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;operations&#x60; Returns the list of operations available for this version.  *  &#x60;issuesstatus&#x60; Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*. | [optional] 

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## versionIdMergetoMoveIssuesToPut

> Object versionIdMergetoMoveIssuesToPut(cloudid, id, moveIssuesTo)

Merge versions

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version to delete.
let moveIssuesTo = "moveIssuesTo_example"; // String | The ID of the version to merge into.
apiInstance.versionIdMergetoMoveIssuesToPut(cloudid, id, moveIssuesTo, (error, data, response) => {
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
 **id** | **String**| The ID of the version to delete. | 
 **moveIssuesTo** | **String**| The ID of the version to merge into. | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## versionIdMovePost

> Version versionIdMovePost(cloudid, id, body)

Move version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version to be moved.
let body = new Jira.VersionMoveBean(); // VersionMoveBean | 
apiInstance.versionIdMovePost(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the version to be moved. | 
 **body** | [**VersionMoveBean**](VersionMoveBean.md)|  | 

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## versionIdPut

> Version versionIdPut(cloudid, id, body)

Update version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
let body = new Jira.Version(); // Version | 
apiInstance.versionIdPut(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 
 **body** | [**Version**](Version.md)|  | 

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## versionIdRelatedIssueCountsGet

> VersionIssueCounts versionIdRelatedIssueCountsGet(cloudid, id)

Get version&#39;s related issues count

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
apiInstance.versionIdRelatedIssueCountsGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 

### Return type

[**VersionIssueCounts**](VersionIssueCounts.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## versionIdRemoveAndSwapPost

> Object versionIdRemoveAndSwapPost(cloudid, id, body)

Delete and replace version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
let body = new Jira.DeleteAndReplaceVersionBean(); // DeleteAndReplaceVersionBean | 
apiInstance.versionIdRemoveAndSwapPost(cloudid, id, body, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 
 **body** | [**DeleteAndReplaceVersionBean**](DeleteAndReplaceVersionBean.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## versionIdUnresolvedIssueCountGet

> VersionUnresolvedIssuesCount versionIdUnresolvedIssueCountGet(cloudid, id)

Get version&#39;s unresolved issues count

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the version.
apiInstance.versionIdUnresolvedIssueCountGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the version. | 

### Return type

[**VersionUnresolvedIssuesCount**](VersionUnresolvedIssuesCount.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## versionPost

> Version versionPost(cloudid, body)

Create version

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectVersionsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.Version(); // Version | 
apiInstance.versionPost(cloudid, body, (error, data, response) => {
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
 **body** | [**Version**](Version.md)|  | 

### Return type

[**Version**](Version.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

