# Rollbar.DefaultApi

All URIs are relative to *https://api.rollbar.com/api/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployGet**](DefaultApi.md#deployGet) | **GET** /deploy | 
[**deployPatch**](DefaultApi.md#deployPatch) | **PATCH** /deploy | 
[**deployPost**](DefaultApi.md#deployPost) | **POST** /deploy | 
[**deploysGet**](DefaultApi.md#deploysGet) | **GET** /deploys | 
[**dsymPost**](DefaultApi.md#dsymPost) | **POST** /dsym | 
[**inviteInviteIdDelete**](DefaultApi.md#inviteInviteIdDelete) | **DELETE** /invite/{invite_id} | 
[**inviteInviteIdGet**](DefaultApi.md#inviteInviteIdGet) | **GET** /invite/{invite_id} | 
[**itemByCounterCounterGet**](DefaultApi.md#itemByCounterCounterGet) | **GET** /item_by_counter/{counter} | 
[**itemItemidGet**](DefaultApi.md#itemItemidGet) | **GET** /item/{itemid} | 
[**itemItemidPatch**](DefaultApi.md#itemItemidPatch) | **PATCH** /item/{itemid} | 
[**itemsGet**](DefaultApi.md#itemsGet) | **GET** /items | 
[**peopleDeleteJobsJobIdGet**](DefaultApi.md#peopleDeleteJobsJobIdGet) | **GET** /people/delete_jobs/{job_id} | 
[**peopleDeleteJobsPost**](DefaultApi.md#peopleDeleteJobsPost) | **POST** /people/delete_jobs/ | 
[**proguardPost**](DefaultApi.md#proguardPost) | **POST** /proguard | 
[**projectIdAccessTokensGet**](DefaultApi.md#projectIdAccessTokensGet) | **GET** /project/{id}/access_tokens | 
[**projectProjectIdAccessTokenProjectAccessTokenPatch**](DefaultApi.md#projectProjectIdAccessTokenProjectAccessTokenPatch) | **PATCH** /project/{project_id}/access_token/{project_access_token} | 
[**projectProjectIdGet**](DefaultApi.md#projectProjectIdGet) | **GET** /project/{project_id} | 
[**projectProjectIdPost**](DefaultApi.md#projectProjectIdPost) | **POST** /project/{project_id} | 
[**projectsGet**](DefaultApi.md#projectsGet) | **GET** /projects | 
[**projectsPost**](DefaultApi.md#projectsPost) | **POST** /projects | 
[**reportsActivatedCountsGet**](DefaultApi.md#reportsActivatedCountsGet) | **GET** /reports/activated_counts | 
[**reportsOccurrenceCountsGet**](DefaultApi.md#reportsOccurrenceCountsGet) | **GET** /reports/occurrence_counts | 
[**reportsTopActiveItemsGet**](DefaultApi.md#reportsTopActiveItemsGet) | **GET** /reports/top_active_items | 
[**rqlJobJobIdCancelPost**](DefaultApi.md#rqlJobJobIdCancelPost) | **POST** /rql/job/{job_id}/cancel | 
[**rqlJobJobIdGet**](DefaultApi.md#rqlJobJobIdGet) | **GET** /rql/job/{job_id} | 
[**rqlJobJobIdResultGet**](DefaultApi.md#rqlJobJobIdResultGet) | **GET** /rql/job/{job_id}/result | 
[**rqlJobsGet**](DefaultApi.md#rqlJobsGet) | **GET** /rql/jobs/ | 
[**rqlJobsPost**](DefaultApi.md#rqlJobsPost) | **POST** /rql/jobs/ | 
[**sourcemapPost**](DefaultApi.md#sourcemapPost) | **POST** /sourcemap | 
[**teamDelete**](DefaultApi.md#teamDelete) | **DELETE** /team | 
[**teamGet**](DefaultApi.md#teamGet) | **GET** /team | 
[**teamTeamIdInvitesGet**](DefaultApi.md#teamTeamIdInvitesGet) | **GET** /team/{team_id}/invites | 
[**teamTeamIdInvitesPost**](DefaultApi.md#teamTeamIdInvitesPost) | **POST** /team/{team_id}/invites | 
[**teamTeamIdProjectProjectIdDelete**](DefaultApi.md#teamTeamIdProjectProjectIdDelete) | **DELETE** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectProjectIdGet**](DefaultApi.md#teamTeamIdProjectProjectIdGet) | **GET** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectProjectIdPut**](DefaultApi.md#teamTeamIdProjectProjectIdPut) | **PUT** /team/{team_id}/project/{project_id} | 
[**teamTeamIdProjectsGet**](DefaultApi.md#teamTeamIdProjectsGet) | **GET** /team/{team_id}/projects | 
[**teamTeamIdUserUserIdDelete**](DefaultApi.md#teamTeamIdUserUserIdDelete) | **DELETE** /team/{team_id}/user/{user_id} | 
[**teamTeamIdUserUserIdGet**](DefaultApi.md#teamTeamIdUserUserIdGet) | **GET** /team/{team_id}/user/{user_id} | 
[**teamTeamIdUserUserIdPut**](DefaultApi.md#teamTeamIdUserUserIdPut) | **PUT** /team/{team_id}/user/{user_id} | 
[**teamTeamIdUsersGet**](DefaultApi.md#teamTeamIdUsersGet) | **GET** /team/{team_id}/users | 
[**teamsGet**](DefaultApi.md#teamsGet) | **GET** /teams | 
[**teamsPost**](DefaultApi.md#teamsPost) | **POST** /teams | 
[**userUserIdGet**](DefaultApi.md#userUserIdGet) | **GET** /user/{user_id} | 
[**userUserIdProjectsGet**](DefaultApi.md#userUserIdProjectsGet) | **GET** /user/{user_id}/projects | 
[**userUserIdTeamsGet**](DefaultApi.md#userUserIdTeamsGet) | **GET** /user/{user_id}/teams | 
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | 



## deployGet

> deployGet(xRollbarAccessToken)



&#x60;deploy_id&#x60; must be an ID for a deploy in the project. These IDs are returned as the id field in other API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/deploy/12345/&#x60; (&#x60;12345&#x60; is the Deploy ID). 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
apiInstance.deployGet(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deployPatch

> deployPatch(xRollbarAccessToken, opts)



&#x60;&#x60;&#x60;JavaScript $.get(&#39;http://yoursite.com/test/&#39; + id, function(data) {     console.log(data); });&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a post server item access token
let opts = {
  'body': new Rollbar.Api1DeployRequest1() // Api1DeployRequest1 | 
};
apiInstance.deployPatch(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a post server item access token | 
 **body** | [**Api1DeployRequest1**](Api1DeployRequest1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deployPost

> deployPost(xRollbarAccessToken, opts)



For tool-specific instructions on reporting a deploy, see our [Deploy Tracking](doc:deploy-tracking) docs.  For instructions on setting the default deploy timeout period, see [Deploy Timeouts](https://docs.rollbar.com/docs/deploy-tracking#section-deploy-timeout). 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a post server item access token
let opts = {
  'body': new Rollbar.Api1DeployRequest() // Api1DeployRequest | 
};
apiInstance.deployPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a post server item access token | 
 **body** | [**Api1DeployRequest**](Api1DeployRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deploysGet

> deploysGet(xRollbarAccessToken, opts)



Returns all deploys in the project, most recent first, in pages of 20. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'page': 56 // Number | Page number, starting from 1. 20 deploys are returned per page.
};
apiInstance.deploysGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **page** | **Number**| Page number, starting from 1. 20 deploys are returned per page. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## dsymPost

> dsymPost(xRollbarAccessToken, opts)



**Note:** For version, you should use the \&quot;Bundle version\&quot; from your plist which corresponds to the Build Number. This is not the Version Number which is found under the key \&quot;Bundle versions string, short\&quot; in your plist. See this [technical note](https://developer.apple.com/library/content/technotes/tn2420/_index.html) for more information. We use this to match up the dSYM with the same version of the code that caused the stack trace. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a post server item access token
let opts = {
  'body': new Rollbar.Api1DsymRequest() // Api1DsymRequest | 
};
apiInstance.dsymPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a post server item access token | 
 **body** | [**Api1DsymRequest**](Api1DsymRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## inviteInviteIdDelete

> inviteInviteIdDelete(inviteId, xRollbarAccessToken)



Returns a &#x60;200&#x60; if the invitation was successfully canceled. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let inviteId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.inviteInviteIdDelete(inviteId, xRollbarAccessToken, (error, data, response) => {
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
 **inviteId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## inviteInviteIdGet

> inviteInviteIdGet(inviteId, xRollbarAccessToken)



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let inviteId = "inviteId_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.inviteInviteIdGet(inviteId, xRollbarAccessToken, (error, data, response) => {
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
 **inviteId** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## itemByCounterCounterGet

> itemByCounterCounterGet(counter, xRollbarAccessToken)



&#x60;counter&#x60; must be an item counter for an item in the project. The counter can be found in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; (456 is the counter).  The success response is a 301 redirect like this:  &#x60;&#x60;&#x60; HTTP/1.1 301 Moved Permanently Location: /item/272505123  {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;itemId\&quot;: 272505123,     \&quot;path\&quot;: \&quot;/item/272505123\&quot;,     \&quot;uri\&quot;: \&quot;/item/272505123\&quot;   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let counter = 56; // Number | item counter for an item in the project  `counter` must be an item counter for an item in the project. The counter can be found in URLs like https://rollbar.com/myaccount/myproject/items/456/ (456 is the counter).
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
apiInstance.itemByCounterCounterGet(counter, xRollbarAccessToken, (error, data, response) => {
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
 **counter** | **Number**| item counter for an item in the project  &#x60;counter&#x60; must be an item counter for an item in the project. The counter can be found in URLs like https://rollbar.com/myaccount/myproject/items/456/ (456 is the counter). | 
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## itemItemidGet

> itemItemidGet(itemid, xRollbarAccessToken)



&#x60;itemid&#x60; must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; – that is the \&quot;counter\&quot;, which can be used in the following API call. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let itemid = 56; // Number | Unique ID of the item  `itemid` must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like https://rollbar.com/myaccount/myproject/items/456/ – that is the \"counter\", which can be used in the following API call.
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
apiInstance.itemItemidGet(itemid, xRollbarAccessToken, (error, data, response) => {
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
 **itemid** | **Number**| Unique ID of the item  &#x60;itemid&#x60; must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like https://rollbar.com/myaccount/myproject/items/456/ – that is the \&quot;counter\&quot;, which can be used in the following API call. | 
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## itemItemidPatch

> itemItemidPatch(xRollbarAccessToken, itemid, opts)



Used to modify an item&#39;s state. Currently supports: * setting the status, level, title, assigned user * when resolving, setting the \&quot;resolved in version\&quot;  Example - &#x60;&#x60;&#x60;curl curl -X PATCH &#39;https://api.rollbar.com/item/275123456&#39; \\   --header \&quot;Content-Type: application/json\&quot; \\   --data &#39;{\&quot;status\&quot;: \&quot;resolved\&quot;, \&quot;resolved_in_version\&quot;: \&quot;aabbcc1\&quot;}&#39;   &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'write' scope
let itemid = "itemid_example"; // String | 
let opts = {
  'body': new Rollbar.Api1ItemRequest1() // Api1ItemRequest1 | 
};
apiInstance.itemItemidPatch(xRollbarAccessToken, itemid, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;write&#39; scope | 
 **itemid** | **String**|  | 
 **body** | [**Api1ItemRequest1**](Api1ItemRequest1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## itemsGet

> itemsGet(xRollbarAccessToken, opts)



# Examples Get the 101st through 199th active items: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?status&#x3D;active&amp;page&#x3D;2&#39; &#x60;&#x60;&#x60; Get the first page of items that are error or critical, in the production environment: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?level&#x3D;error&amp;level&#x3D;critical&amp;environment&#x3D;production&#39; &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'assignedUser': "assignedUser_example", // String | If not empty, only items assigned to the specified user will be returned. Must be a valid Rollbar username, or you can use the keywords `assigned` (items that are assigned to any owner) or `unassigned` (items with no owner).
  'environment': "environment_example", // String | If not empty, only items in the specified environment will be returned. Specify multiple times to filter by multiple environments.
  'framework': "framework_example", // String | If not empty, only items in the specified framework will be returned. Specify multiple times to filter by multiple frameworks.
  'ids': "ids_example", // String | (comma-separated list of integers) if not empty, list of item IDs to return, instead of using all items in the project
  'level': "level_example", // String | If not empty, only items with the specified level will be returned. Valid values: `debug`, `info`, `warning`, `error`, `critical`. Specifiy multiple times to filter by multiple levels.
  'page': 56, // Number | Page number, starting from 1. 100 items are returned per page.
  'query': "query_example", // String | A search string, using the same format as the search box on the Items page.
  'status': "status_example" // String | If not empty, only items with the specified status will be returned. Valid values: `active`, `resolved`, `muted`, `archived`. Specify multiple times to filter by multiple statuses.
};
apiInstance.itemsGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **assignedUser** | **String**| If not empty, only items assigned to the specified user will be returned. Must be a valid Rollbar username, or you can use the keywords &#x60;assigned&#x60; (items that are assigned to any owner) or &#x60;unassigned&#x60; (items with no owner). | [optional] 
 **environment** | **String**| If not empty, only items in the specified environment will be returned. Specify multiple times to filter by multiple environments. | [optional] 
 **framework** | **String**| If not empty, only items in the specified framework will be returned. Specify multiple times to filter by multiple frameworks. | [optional] 
 **ids** | **String**| (comma-separated list of integers) if not empty, list of item IDs to return, instead of using all items in the project | [optional] 
 **level** | **String**| If not empty, only items with the specified level will be returned. Valid values: &#x60;debug&#x60;, &#x60;info&#x60;, &#x60;warning&#x60;, &#x60;error&#x60;, &#x60;critical&#x60;. Specifiy multiple times to filter by multiple levels. | [optional] 
 **page** | **Number**| Page number, starting from 1. 100 items are returned per page. | [optional] 
 **query** | **String**| A search string, using the same format as the search box on the Items page. | [optional] 
 **status** | **String**| If not empty, only items with the specified status will be returned. Valid values: &#x60;active&#x60;, &#x60;resolved&#x60;, &#x60;muted&#x60;, &#x60;archived&#x60;. Specify multiple times to filter by multiple statuses. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## peopleDeleteJobsJobIdGet

> peopleDeleteJobsJobIdGet(jobId, xRollbarAccessToken)



Check on the status of a person deletion request.  The response will include a status, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;state\&quot;: \&quot;success\&quot;, // possible values are \&quot;new\&quot;,\&quot;running\&quot;,\&quot;paused\&quot;,\&quot;success\&quot;,\&quot;cancelled\&quot;,\&quot;failed\&quot;     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let jobId = 56; // Number | The id of the deletion job (from the response to a `POST` to `delete_jobs`)
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.peopleDeleteJobsJobIdGet(jobId, xRollbarAccessToken, (error, data, response) => {
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
 **jobId** | **Number**| The id of the deletion job (from the response to a &#x60;POST&#x60; to &#x60;delete_jobs&#x60;) | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## peopleDeleteJobsPost

> peopleDeleteJobsPost(xRollbarAccessToken, opts)



This endpoint allows for removal of a tracked person from all projects within an account.  To identify the person, you must provide **exactly one** of the following: * &#x60;email&#x60; * &#x60;username&#x60; * &#x60;person_id&#x60;  These correspond to the values transmitted in the original occurrences (see the docs for [Create item](ref:items)) and can also be found by viewing any tracked person via the [People Tracking](doc:person-tracking) page in any project.  Requests for person deletion are asynchronous.  The returned value will include an &#x60;id&#x60; property that can be used to check the status of the deletion process, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let opts = {
  'username': "username_example", // String | `username` value of the person to be deleted.
  'email': "email_example", // String | `email` value of the person to be deleted.
  'id': "id_example" // String | `id` value of the person to be deleted.
};
apiInstance.peopleDeleteJobsPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **username** | **String**| &#x60;username&#x60; value of the person to be deleted. | [optional] 
 **email** | **String**| &#x60;email&#x60; value of the person to be deleted. | [optional] 
 **id** | **String**| &#x60;id&#x60; value of the person to be deleted. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## proguardPost

> proguardPost(xRollbarAccessToken, opts)



Upload an Android Proguard file

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a post server item access token
let opts = {
  'body': new Rollbar.Api1ProguardRequest() // Api1ProguardRequest | 
};
apiInstance.proguardPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a post server item access token | 
 **body** | [**Api1ProguardRequest**](Api1ProguardRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## projectIdAccessTokensGet

> projectIdAccessTokensGet(xRollbarAccessToken, id)



List all project access tokens

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
let id = "id_example"; // String | 
apiInstance.projectIdAccessTokensGet(xRollbarAccessToken, id, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdAccessTokenProjectAccessTokenPatch

> projectProjectIdAccessTokenProjectAccessTokenPatch(projectId, projectAccessToken, xRollbarAccessToken, opts)



Update a rate limit

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let projectId = 56; // Number | 
let projectAccessToken = "projectAccessToken_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let opts = {
  'body': new Rollbar.Api1ProjectAccessTokenRequest() // Api1ProjectAccessTokenRequest | 
};
apiInstance.projectProjectIdAccessTokenProjectAccessTokenPatch(projectId, projectAccessToken, xRollbarAccessToken, opts, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **projectAccessToken** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **body** | [**Api1ProjectAccessTokenRequest**](Api1ProjectAccessTokenRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## projectProjectIdGet

> projectProjectIdGet(projectId, xRollbarAccessToken)



Get a project

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let projectId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.projectProjectIdGet(projectId, xRollbarAccessToken, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectProjectIdPost

> projectProjectIdPost(projectId, xRollbarAccessToken)



Delete a project

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let projectId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.projectProjectIdPost(projectId, xRollbarAccessToken, (error, data, response) => {
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
 **projectId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectsGet

> projectsGet(xRollbarAccessToken)



List all projects

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.projectsGet(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## projectsPost

> projectsPost(xRollbarAccessToken, opts)



Create a project

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let opts = {
  'body': new Rollbar.Api1ProjectsRequest() // Api1ProjectsRequest | 
};
apiInstance.projectsPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **body** | [**Api1ProjectsRequest**](Api1ProjectsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## reportsActivatedCountsGet

> reportsActivatedCountsGet(xRollbarAccessToken, opts)



Analogous to \&quot;Daily New/Reactivated Items\&quot; graph on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of items that were first seen or reactivated in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.    # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'bucketSize': 56, // Number | Size of each bucket, in seconds. Only valid value is `86400` (day). Data wil be returned in the project timezone.
  'buckets': 60, // Number | Number of buckets to return. Must be in range `[2, 366]`.
  'environments': "environments_example" // String | Comma-separated list of environments to filter by.  Empty means \"any environment\".
};
apiInstance.reportsActivatedCountsGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **bucketSize** | **Number**| Size of each bucket, in seconds. Only valid value is &#x60;86400&#x60; (day). Data wil be returned in the project timezone. | [optional] 
 **buckets** | **Number**| Number of buckets to return. Must be in range &#x60;[2, 366]&#x60;. | [optional] [default to 60]
 **environments** | **String**| Comma-separated list of environments to filter by.  Empty means \&quot;any environment\&quot;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reportsOccurrenceCountsGet

> reportsOccurrenceCountsGet(xRollbarAccessToken, opts)



Analogous to \&quot;Hourly Error/Critical Occurrences\&quot; and \&quot;Daily Error/Critical Occurrences\&quot; on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of matching active occurrences in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.  # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'bucketSize': "'86400'", // String | Size of each bucket, in seconds. Valid values are `60` (minute), `3600` (hour), and `86400` (day). Timezone for all buckets is GMT.
  'environments': "environments_example", // String | Comma-separated list of environments to filter by.  Empty means \"any environment\".
  'minLevel': "'error'", // String | Minimum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`.
  'maxLevel': "maxLevel_example", // String | Maximum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`
  'itemId': 56 // Number | Item ID to filter by.
};
apiInstance.reportsOccurrenceCountsGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **bucketSize** | **String**| Size of each bucket, in seconds. Valid values are &#x60;60&#x60; (minute), &#x60;3600&#x60; (hour), and &#x60;86400&#x60; (day). Timezone for all buckets is GMT. | [optional] [default to &#39;86400&#39;]
 **environments** | **String**| Comma-separated list of environments to filter by.  Empty means \&quot;any environment\&quot;. | [optional] 
 **minLevel** | **String**| Minimum item level to filter by. One of &#x60;debug&#x60;, &#x60;info&#x60;, &#x60;warning&#x60;, &#x60;error&#x60;, or &#x60;critical&#x60;. | [optional] [default to &#39;error&#39;]
 **maxLevel** | **String**| Maximum item level to filter by. One of &#x60;debug&#x60;, &#x60;info&#x60;, &#x60;warning&#x60;, &#x60;error&#x60;, or &#x60;critical&#x60; | [optional] 
 **itemId** | **Number**| Item ID to filter by. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reportsTopActiveItemsGet

> reportsTopActiveItemsGet(xRollbarAccessToken, opts)



# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     // each element in the list is an object with an \&quot;item\&quot; object and a \&quot;counts\&quot; list     {         // data describing the item (similar to that returned by GET /item/:id)         \&quot;item\&quot;: {             \&quot;id\&quot;: 2071,             \&quot;counter\&quot;: 1007,             \&quot;environment\&quot;: \&quot;production\&quot;,             \&quot;framework\&quot;: 0,             \&quot;last_occurrence_timestamp\&quot;: 1408410581,             \&quot;level\&quot;: 40,             \&quot;occurrences\&quot;: 54,             \&quot;project_id\&quot;: 12345,             \&quot;title\&quot;: \&quot;Something went wrong\&quot;,             \&quot;unique_occurrences\&quot;: 5         },         // list of occurrence counts in the past 24 hours. Oldest first.         \&quot;counts\&quot;: [12, 10, 7, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 5, 6]     },     { /_* more elements ... *_/ }   ] } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
let opts = {
  'hours': 24, // Number | Number of recent hours to consider. Min `1`, max `168`.
  'environments': "environments_example" // String | Comma-separated list of environments to consider. If empty, then returns results for \"any environment\".
};
apiInstance.reportsTopActiveItemsGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 
 **hours** | **Number**| Number of recent hours to consider. Min &#x60;1&#x60;, max &#x60;168&#x60;. | [optional] [default to 24]
 **environments** | **String**| Comma-separated list of environments to consider. If empty, then returns results for \&quot;any environment\&quot;. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rqlJobJobIdCancelPost

> rqlJobJobIdCancelPost(jobId, xRollbarAccessToken)



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;cancelled\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let jobId = 56; // Number | system-wide ID of the job to be canceled
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
apiInstance.rqlJobJobIdCancelPost(jobId, xRollbarAccessToken, (error, data, response) => {
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
 **jobId** | **Number**| system-wide ID of the job to be canceled | 
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rqlJobJobIdGet

> rqlJobJobIdGet(jobId, xRollbarAccessToken, opts)



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885,     \&quot;result\&quot;: {...} // A RQL job resource if expand&#x3D;result is used in query string   } }&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let jobId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'expand': "expand_example" // String | If the value is `result`, the response will contain the job result
};
apiInstance.rqlJobJobIdGet(jobId, xRollbarAccessToken, opts, (error, data, response) => {
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
 **jobId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **expand** | **String**| If the value is &#x60;result&#x60;, the response will contain the job result | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rqlJobJobIdResultGet

> rqlJobJobIdResultGet(jobId, xRollbarAccessToken, opts)



# Response The response will be a RQL job result resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;job_id\&quot;: 123,  // job id     \&quot;result\&quot;: {       \&quot;rows\&quot;: [{...}],       \&quot;selectionColumns\&quot;: [...],       \&quot;columns\&quot;: [...],       \&quot;errors\&quot;: [],       \&quot;warnings\&quot;: [],       \&quot;rowcount\&quot;: 1,       \&quot;executionTime\&quot;: 123     },     \&quot;job\&quot;: {...} // A RQL job resource if expand&#x3D;job is set in the query string   } }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let jobId = "jobId_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'expand': "expand_example" // String | If the value is `job`, the response will contain the RQL job resource
};
apiInstance.rqlJobJobIdResultGet(jobId, xRollbarAccessToken, opts, (error, data, response) => {
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
 **jobId** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **expand** | **String**| If the value is &#x60;job&#x60;, the response will contain the RQL job resource | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rqlJobsGet

> rqlJobsGet(xRollbarAccessToken, opts)



# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: [     { ... }, // RQL job resource       ...   ] } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'page': 56 // Number | Page number starting from 1
};
apiInstance.rqlJobsGet(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **page** | **Number**| Page number starting from 1 | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## rqlJobsPost

> rqlJobsPost(xRollbarAccessToken, opts)



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a project access token with 'read' scope
let opts = {
  'body': new Rollbar.Api1RqlJobsRequest() // Api1RqlJobsRequest | 
};
apiInstance.rqlJobsPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a project access token with &#39;read&#39; scope | 
 **body** | [**Api1RqlJobsRequest**](Api1RqlJobsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## sourcemapPost

> sourcemapPost(xRollbarAccessToken, opts)



In the above example, our website is http://example.com, we have a minified JavaScript file at http://example.com/js/example.min.js, and we have a source tree like this: &#x60;&#x60;&#x60; example/ example/static/js/example.min.js example/static/js/example.min.map example/static/js/site.js example/static/js/util.js &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use a post server item access token
let opts = {
  'body': new Rollbar.Api1SourcemapRequest() // Api1SourcemapRequest | 
};
apiInstance.sourcemapPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use a post server item access token | 
 **body** | [**Api1SourcemapRequest**](Api1SourcemapRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## teamDelete

> teamDelete(xRollbarAccessToken)



Delete a team

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.teamDelete(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamGet

> teamGet(xRollbarAccessToken)



Get a team

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.teamGet(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdInvitesGet

> teamTeamIdInvitesGet(teamId, xRollbarAccessToken, opts)



Returns all invites ever sent for the team–pending, accepted, rejected, and canceled.  # Example response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;id\&quot;: 71328,       \&quot;from_user_id\&quot;: 5325,       \&quot;team_id\&quot;: 272686,       \&quot;to_email\&quot;: \&quot;gilfoyle@pidepiper.com\&quot;,       \&quot;status\&quot;: \&quot;pending\&quot;,       \&quot;date_created\&quot;: 1519946545,       \&quot;date_redeemed\&quot;: null     }   ] } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
let opts = {
  'page': 56 // Number | Returns up to 5000 results. Add `&page=2` to the URL to go to the next page.
};
apiInstance.teamTeamIdInvitesGet(teamId, xRollbarAccessToken, opts, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 
 **page** | **Number**| Returns up to 5000 results. Add &#x60;&amp;page&#x3D;2&#x60; to the URL to go to the next page. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdInvitesPost

> teamTeamIdInvitesPost(teamId, xRollbarAccessToken, opts)



Invites a user to the specific team, using the user&#39;s email address.  If the email address belongs to an existing Rollbar user, they will be immediately added to the team, and sent an email notification. Otherwise, an invite email will be sent, containing a signup link that will allow the recipient to join the specified team.  # Example Response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = "teamId_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let opts = {
  'body': new Rollbar.Api1TeamInvitesRequest() // Api1TeamInvitesRequest | 
};
apiInstance.teamTeamIdInvitesPost(teamId, xRollbarAccessToken, opts, (error, data, response) => {
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
 **teamId** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **body** | [**Api1TeamInvitesRequest**](Api1TeamInvitesRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## teamTeamIdProjectProjectIdDelete

> teamTeamIdProjectProjectIdDelete(teamId, projectId, xRollbarAccessToken)



Remove a team from a project

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let projectId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.teamTeamIdProjectProjectIdDelete(teamId, projectId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **projectId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectProjectIdGet

> teamTeamIdProjectProjectIdGet(teamId, projectId, xRollbarAccessToken)



Returns &#x60;200&#x60; if the team is assigned to a project, &#x60;404&#x60; if the team is not assigned to the project.  # Example responses  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60;  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 1,   \&quot;message\&quot;: \&quot;Project is not in this Team.\&quot; } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let projectId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.teamTeamIdProjectProjectIdGet(teamId, projectId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **projectId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectProjectIdPut

> teamTeamIdProjectProjectIdPut(teamId, projectId, xRollbarAccessToken)



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let projectId = "projectId_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.teamTeamIdProjectProjectIdPut(teamId, projectId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **projectId** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdProjectsGet

> teamTeamIdProjectsGet(teamId, xRollbarAccessToken)



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178029     },     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178030     }   ] } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.teamTeamIdProjectsGet(teamId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdUserUserIdDelete

> teamTeamIdUserUserIdDelete(xRollbarAccessToken, teamId, userId)



Remove a user from a team

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let teamId = "teamId_example"; // String | 
let userId = "userId_example"; // String | 
apiInstance.teamTeamIdUserUserIdDelete(xRollbarAccessToken, teamId, userId, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **teamId** | **String**|  | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdUserUserIdGet

> teamTeamIdUserUserIdGet(teamId, userId, xRollbarAccessToken)



Check if a user is assigned to a team

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let userId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.teamTeamIdUserUserIdGet(teamId, userId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **userId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdUserUserIdPut

> teamTeamIdUserUserIdPut(teamId, userId, xRollbarAccessToken)



Assign a user to team

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = 56; // Number | 
let userId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
apiInstance.teamTeamIdUserUserIdPut(teamId, userId, xRollbarAccessToken, (error, data, response) => {
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
 **teamId** | **Number**|  | 
 **userId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamTeamIdUsersGet

> teamTeamIdUsersGet(teamId, xRollbarAccessToken, opts)



List a team&#39;s users

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let teamId = "teamId_example"; // String | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
let opts = {
  'page': 1 // Number | Results are returned in sets of 5000.  Access more results by specifying `page=2`, etc.
};
apiInstance.teamTeamIdUsersGet(teamId, xRollbarAccessToken, opts, (error, data, response) => {
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
 **teamId** | **String**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 
 **page** | **Number**| Results are returned in sets of 5000.  Access more results by specifying &#x60;page&#x3D;2&#x60;, etc. | [optional] [default to 1]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamsGet

> teamsGet(xRollbarAccessToken)



List all teams

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.teamsGet(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## teamsPost

> teamsPost(xRollbarAccessToken, opts)



# Access Levels &#x60;standard&#x60; is the only access level you can choose in the UI.  &#x60;light&#x60; and &#x60;view&#x60; are API-only team access levels. &#x60;light&#x60; gives the team read and write access, but not to all settings. &#x60;view&#x60; gives the team read-only access. 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'write' scope
let opts = {
  'body': new Rollbar.Api1TeamsRequest() // Api1TeamsRequest | 
};
apiInstance.teamsPost(xRollbarAccessToken, opts, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;write&#39; scope | 
 **body** | [**Api1TeamsRequest**](Api1TeamsRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## userUserIdGet

> userUserIdGet(userId, xRollbarAccessToken)



Get user details for a given account  Returns basic information about the user, as relevant to the account your access token is for. This is the same information available on the \&quot;Members\&quot; page in the Rollbar UI.  # Sample Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {       \&quot;id\&quot;: 14,       \&quot;username\&quot;: \&quot;brian\&quot;,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;,       \&quot;email_enabled\&quot;: 1   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let userId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.userUserIdGet(userId, xRollbarAccessToken, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userUserIdProjectsGet

> userUserIdProjectsGet(userId, xRollbarAccessToken)



# Example response: &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;projects\&quot;: [       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;mox\&quot;,         \&quot;id\&quot;: 1,         \&quot;account_id\&quot;: 61       },       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;moxrts\&quot;,         \&quot;id\&quot;: 25,         \&quot;account_id\&quot;: 61       }     ]   } }&#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let userId = 56; // Number | 
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.userUserIdProjectsGet(userId, xRollbarAccessToken, (error, data, response) => {
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
 **userId** | **Number**|  | 
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## userUserIdTeamsGet

> userUserIdTeamsGet(xRollbarAccessToken, userId)



List a user&#39;s teams

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
let userId = "userId_example"; // String | 
apiInstance.userUserIdTeamsGet(xRollbarAccessToken, userId, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 
 **userId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## usersGet

> usersGet(xRollbarAccessToken)



List all users who are members of an account #Response Format &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;users\&quot;: [     {       \&quot;username\&quot;: \&quot;brianr\&quot;,       \&quot;id\&quot;: 1,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;     },     {       \&quot;username\&quot;: \&quot;coryvirok\&quot;,       \&quot;id\&quot;: 2,       \&quot;email\&quot;: \&quot;cory@rollbar.com\&quot;     }     ]   } } &#x60;&#x60;&#x60; 

### Example

```javascript
import Rollbar from 'Rollbar';

let apiInstance = new Rollbar.DefaultApi();
let xRollbarAccessToken = "xRollbarAccessToken_example"; // String | Use an account access token with 'read' scope
apiInstance.usersGet(xRollbarAccessToken, (error, data, response) => {
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
 **xRollbarAccessToken** | **String**| Use an account access token with &#39;read&#39; scope | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

