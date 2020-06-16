# Jira.ProjectsApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**projectGet**](ProjectsApi.md#projectGet) | **GET** /project | Get all projects
[**projectPost**](ProjectsApi.md#projectPost) | **POST** /project | Create project
[**projectProjectIdHierarchyGet**](ProjectsApi.md#projectProjectIdHierarchyGet) | **GET** /project/{projectId}/hierarchy | Get project issue type hierarchy
[**projectProjectIdOrKeyDelete**](ProjectsApi.md#projectProjectIdOrKeyDelete) | **DELETE** /project/{projectIdOrKey} | Delete project
[**projectProjectIdOrKeyDeletePost**](ProjectsApi.md#projectProjectIdOrKeyDeletePost) | **POST** /project/{projectIdOrKey}/delete | Delete project asynchronously
[**projectProjectIdOrKeyGet**](ProjectsApi.md#projectProjectIdOrKeyGet) | **GET** /project/{projectIdOrKey} | Get project
[**projectProjectIdOrKeyPut**](ProjectsApi.md#projectProjectIdOrKeyPut) | **PUT** /project/{projectIdOrKey} | Update project
[**projectProjectIdOrKeyStatusesGet**](ProjectsApi.md#projectProjectIdOrKeyStatusesGet) | **GET** /project/{projectIdOrKey}/statuses | Get all statuses for project
[**projectProjectIdOrKeyTypeNewProjectTypeKeyPut**](ProjectsApi.md#projectProjectIdOrKeyTypeNewProjectTypeKeyPut) | **PUT** /project/{projectIdOrKey}/type/{newProjectTypeKey} | Update project type
[**projectProjectKeyOrIdNotificationschemeGet**](ProjectsApi.md#projectProjectKeyOrIdNotificationschemeGet) | **GET** /project/{projectKeyOrId}/notificationscheme | Get project notification scheme
[**projectSearchGet**](ProjectsApi.md#projectSearchGet) | **GET** /project/search | Get projects paginated



## projectGet

> [Project] projectGet(cloudid, opts)

Get all projects

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `issueTypes` Returns all issue types associated with the project.  *  `lead` Returns information about the the project lead.  *  `projectKeys` Returns all project keys associated with the project.
  'recent': 56, // Number | Returns the user's most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session.
  'properties': ["null"] // [String] | A list of project properties to return for the project. This parameter accepts a comma-separated list.
};
apiInstance.projectGet(cloudid, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  &#x60;description&#x60; Returns the project description.  *  &#x60;issueTypes&#x60; Returns all issue types associated with the project.  *  &#x60;lead&#x60; Returns information about the the project lead.  *  &#x60;projectKeys&#x60; Returns all project keys associated with the project. | [optional] 
 **recent** | **Number**| Returns the user&#39;s most recently accessed projects. You may specify the number of results to return up to a maximum of 20. If access is anonymous, then the recently accessed projects are based on the current HTTP session. | [optional] 
 **properties** | [**[String]**](String.md)| A list of project properties to return for the project. This parameter accepts a comma-separated list. | [optional] 

### Return type

[**[Project]**](Project.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectPost

> ProjectIdentifiers projectPost(cloudid, body)

Create project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let body = new Jira.ProjectInputBean(); // ProjectInputBean | The JSON representation of the project being created.
apiInstance.projectPost(cloudid, body, (error, data, response) => {
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
 **body** | [**ProjectInputBean**](ProjectInputBean.md)| The JSON representation of the project being created. | 

### Return type

[**ProjectIdentifiers**](ProjectIdentifiers.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectIdHierarchyGet

> ProjectIssueTypeHierarchy projectProjectIdHierarchyGet(cloudid, projectId)

Get project issue type hierarchy

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectId = 789; // Number | The ID of the project.
apiInstance.projectProjectIdHierarchyGet(cloudid, projectId, (error, data, response) => {
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
 **projectId** | **Number**| The ID of the project. | 

### Return type

[**ProjectIssueTypeHierarchy**](ProjectIssueTypeHierarchy.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyDelete

> projectProjectIdOrKeyDelete(cloudid, projectIdOrKey, opts)

Delete project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'enableUndo': false // Boolean | EXPERIMENTAL. Whether this project is placed in the Jira recycle bin where it will be available for restoration.
};
apiInstance.projectProjectIdOrKeyDelete(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 
 **enableUndo** | **Boolean**| EXPERIMENTAL. Whether this project is placed in the Jira recycle bin where it will be available for restoration. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdOrKeyDeletePost

> projectProjectIdOrKeyDeletePost(cloudid, projectIdOrKey)

Delete project asynchronously

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectIdOrKeyDeletePost(cloudid, projectIdOrKey, (error, data, response) => {
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
 **projectIdOrKey** | **String**| The project ID or project key (case sensitive). | 

### Return type

null (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyGet

> Project projectProjectIdOrKeyGet(cloudid, projectIdOrKey, opts)

Get project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.  *  `issueTypeHierarchy` The project issue type hierarchy.
  'properties': ["null"] // [String] | A list of project properties to return for the project. This parameter accepts a comma-separated list.
};
apiInstance.projectProjectIdOrKeyGet(cloudid, projectIdOrKey, opts, (error, data, response) => {
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
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  &#x60;description&#x60; The project description.  *  &#x60;issueTypes&#x60; The issue types associated with the project.  *  &#x60;lead&#x60; The project lead.  *  &#x60;projectKeys&#x60; All project keys associated with the project.  *  &#x60;issueTypeHierarchy&#x60; The project issue type hierarchy. | [optional] 
 **properties** | [**[String]**](String.md)| A list of project properties to return for the project. This parameter accepts a comma-separated list. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyPut

> Project projectProjectIdOrKeyPut(cloudid, projectIdOrKey, body, opts)

Update project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let body = new Jira.ProjectInputBean(); // ProjectInputBean | The project details to be updated.
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  `description` The project description.  *  `issueTypes` The issue types associated with the project.  *  `lead` The project lead.  *  `projectKeys` All project keys associated with the project.
};
apiInstance.projectProjectIdOrKeyPut(cloudid, projectIdOrKey, body, opts, (error, data, response) => {
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
 **body** | [**ProjectInputBean**](ProjectInputBean.md)| The project details to be updated. | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:   *  &#x60;description&#x60; The project description.  *  &#x60;issueTypes&#x60; The issue types associated with the project.  *  &#x60;lead&#x60; The project lead.  *  &#x60;projectKeys&#x60; All project keys associated with the project. | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## projectProjectIdOrKeyStatusesGet

> [IssueTypeWithStatus] projectProjectIdOrKeyStatusesGet(cloudid, projectIdOrKey)

Get all statuses for project

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
apiInstance.projectProjectIdOrKeyStatusesGet(cloudid, projectIdOrKey, (error, data, response) => {
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

### Return type

[**[IssueTypeWithStatus]**](IssueTypeWithStatus.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectIdOrKeyTypeNewProjectTypeKeyPut

> Project projectProjectIdOrKeyTypeNewProjectTypeKeyPut(cloudid, projectIdOrKey, newProjectTypeKey)

Update project type

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectIdOrKey = "projectIdOrKey_example"; // String | The project ID or project key (case sensitive).
let newProjectTypeKey = "newProjectTypeKey_example"; // String | The key of the new project type.
apiInstance.projectProjectIdOrKeyTypeNewProjectTypeKeyPut(cloudid, projectIdOrKey, newProjectTypeKey, (error, data, response) => {
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
 **newProjectTypeKey** | **String**| The key of the new project type. | 

### Return type

[**Project**](Project.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectProjectKeyOrIdNotificationschemeGet

> NotificationScheme projectProjectKeyOrIdNotificationschemeGet(cloudid, projectKeyOrId, opts)

Get project notification scheme

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let projectKeyOrId = "projectKeyOrId_example"; // String | The project ID or project key (case sensitive).
let opts = {
  'expand': "expand_example" // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about any custom fields assigned to receive an event.  *  `group` Returns information about any groups assigned to receive an event.  *  `notificationSchemeEvents` Returns a list of event associations. This list is returned for all expandable information.  *  `projectRole` Returns information about any project roles assigned to receive an event.  *  `user` Returns information about any users assigned to receive an event.
};
apiInstance.projectProjectKeyOrIdNotificationschemeGet(cloudid, projectKeyOrId, opts, (error, data, response) => {
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
 **projectKeyOrId** | **String**| The project ID or project key (case sensitive). | 
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about any custom fields assigned to receive an event.  *  &#x60;group&#x60; Returns information about any groups assigned to receive an event.  *  &#x60;notificationSchemeEvents&#x60; Returns a list of event associations. This list is returned for all expandable information.  *  &#x60;projectRole&#x60; Returns information about any project roles assigned to receive an event.  *  &#x60;user&#x60; Returns information about any users assigned to receive an event. | [optional] 

### Return type

[**NotificationScheme**](NotificationScheme.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## projectSearchGet

> PageBeanProject projectSearchGet(cloudid, opts)

Get projects paginated

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.ProjectsApi();
let cloudid = null; // Object | Cloudi of the project
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'orderBy': "'key'", // String | [Order](#ordering) the results by a field.   *  `category` Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).  *  `issueCount` Sorts by the total number of issues in each project.  *  `key` Sorts by project key.  *  `lastIssueUpdatedTime` Sorts by the last issue update time.  *  `name` Sorts by project name.  *  `owner` Sorts by project lead.  *  `archivedDate` EXPERIMENTAL. Sorts by project archived date.  *  `deletedDate` EXPERIMENTAL. Sorts by project deleted date.
  'query': "query_example", // String | Filter the results using a literal string. Projects with a matching `key` or `name` are returned (case insensitive).
  'typeKey': "typeKey_example", // String | Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are `business`, `service_desk`, and `software`.
  'categoryId': 789, // Number | The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
  'searchBy': "'key, name'", // String | 
  'action': "'view'", // String | Filter results by projects for which the user can:   *  `view` the project, meaning that they have one of the following permissions:           *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  `browse` the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  `edit` the project, meaning that they have one of the following permissions:           *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).
  'expand': "expand_example", // String | Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  `description` Returns the project description.  *  `projectKeys` Returns all project keys associated with a project.  *  `lead` Returns information about the the project lead.  *  `issueTypes` Returns all issue types associated with the project.  *  `url` Returns the URL associated with the project.  *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.
  'status': ["'live'"] // [String] | EXPERIMENTAL. Filter results by project status:   *  `live` Search live projects.  *  `archived` Search archived projects.  *  `deleted` Search deleted projects, those in the recycle bin.
};
apiInstance.projectSearchGet(cloudid, opts, (error, data, response) => {
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
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **orderBy** | **String**| [Order](#ordering) the results by a field.   *  &#x60;category&#x60; Sorts by project category. A complete list of category IDs is found using [Get all project categories](#api-rest-api-3-projectCategory-get).  *  &#x60;issueCount&#x60; Sorts by the total number of issues in each project.  *  &#x60;key&#x60; Sorts by project key.  *  &#x60;lastIssueUpdatedTime&#x60; Sorts by the last issue update time.  *  &#x60;name&#x60; Sorts by project name.  *  &#x60;owner&#x60; Sorts by project lead.  *  &#x60;archivedDate&#x60; EXPERIMENTAL. Sorts by project archived date.  *  &#x60;deletedDate&#x60; EXPERIMENTAL. Sorts by project deleted date. | [optional] [default to &#39;key&#39;]
 **query** | **String**| Filter the results using a literal string. Projects with a matching &#x60;key&#x60; or &#x60;name&#x60; are returned (case insensitive). | [optional] 
 **typeKey** | **String**| Orders results by the [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes). This parameter accepts a comma-separated list. Valid values are &#x60;business&#x60;, &#x60;service_desk&#x60;, and &#x60;software&#x60;. | [optional] 
 **categoryId** | **Number**| The ID of the project&#39;s category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. | [optional] 
 **searchBy** | **String**|  | [optional] [default to &#39;key, name&#39;]
 **action** | **String**| Filter results by projects for which the user can:   *  &#x60;view&#x60; the project, meaning that they have one of the following permissions:           *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).  *  &#x60;browse&#x60; the project, meaning that they have the *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.  *  &#x60;edit&#x60; the project, meaning that they have one of the following permissions:           *  *Administer projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project.      *  *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). | [optional] [default to &#39;view&#39;]
 **expand** | **String**| Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:   *  &#x60;description&#x60; Returns the project description.  *  &#x60;projectKeys&#x60; Returns all project keys associated with a project.  *  &#x60;lead&#x60; Returns information about the the project lead.  *  &#x60;issueTypes&#x60; Returns all issue types associated with the project.  *  &#x60;url&#x60; Returns the URL associated with the project.  *  &#x60;insight&#x60; EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project. | [optional] 
 **status** | [**[String]**](String.md)| EXPERIMENTAL. Filter results by project status:   *  &#x60;live&#x60; Search live projects.  *  &#x60;archived&#x60; Search archived projects.  *  &#x60;deleted&#x60; Search deleted projects, those in the recycle bin. | [optional] 

### Return type

[**PageBeanProject**](PageBeanProject.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

