# Jira.IssueSecurityLevelApi

All URIs are relative to *https://api.atlassian.com/ex/jira//rest/api/3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**issuesecurityschemesIssueSecuritySchemeIdMembersGet**](IssueSecurityLevelApi.md#issuesecurityschemesIssueSecuritySchemeIdMembersGet) | **GET** /issuesecurityschemes/{issueSecuritySchemeId}/members | Get issue security level members
[**securitylevelIdGet**](IssueSecurityLevelApi.md#securitylevelIdGet) | **GET** /securitylevel/{id} | Get issue security level



## issuesecurityschemesIssueSecuritySchemeIdMembersGet

> PageBeanIssueSecurityLevelMember issuesecurityschemesIssueSecuritySchemeIdMembersGet(cloudid, issueSecuritySchemeId, opts)

Get issue security level members

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueSecurityLevelApi();
let cloudid = null; // Object | Cloudi of the project
let issueSecuritySchemeId = 789; // Number | The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
let opts = {
  'startAt': 0, // Number | The index of the first item to return in a page of results (page offset).
  'maxResults': 50, // Number | The maximum number of items to return per page.
  'issueSecurityLevelId': [null], // [Number] | The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`.
  'expand': "expand_example" // String | Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
};
apiInstance.issuesecurityschemesIssueSecuritySchemeIdMembersGet(cloudid, issueSecuritySchemeId, opts, (error, data, response) => {
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
 **issueSecuritySchemeId** | **Number**| The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs. | 
 **startAt** | **Number**| The index of the first item to return in a page of results (page offset). | [optional] [default to 0]
 **maxResults** | **Number**| The maximum number of items to return per page. | [optional] [default to 50]
 **issueSecurityLevelId** | [**[Number]**](Number.md)| The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: &#x60;issueSecurityLevelId&#x3D;10000&amp;issueSecurityLevelId&#x3D;10001&#x60;. | [optional] 
 **expand** | **String**| Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  &#x60;all&#x60; Returns all expandable information.  *  &#x60;field&#x60; Returns information about the custom field granted the permission.  *  &#x60;group&#x60; Returns information about the group that is granted the permission.  *  &#x60;projectRole&#x60; Returns information about the project role granted the permission.  *  &#x60;user&#x60; Returns information about the user who is granted the permission. | [optional] 

### Return type

[**PageBeanIssueSecurityLevelMember**](PageBeanIssueSecurityLevelMember.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## securitylevelIdGet

> SecurityLevel securitylevelIdGet(cloudid, id)

Get issue security level

### Example

```javascript
import Jira from 'Jira';
let defaultClient = Jira.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Jira.IssueSecurityLevelApi();
let cloudid = null; // Object | Cloudi of the project
let id = "id_example"; // String | The ID of the issue security level.
apiInstance.securitylevelIdGet(cloudid, id, (error, data, response) => {
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
 **id** | **String**| The ID of the issue security level. | 

### Return type

[**SecurityLevel**](SecurityLevel.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

