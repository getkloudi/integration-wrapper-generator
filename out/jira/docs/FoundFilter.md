# Jira.FoundFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | A description of the filter. | [optional] 
**favourite** | **Boolean** | Whether the filter is selected as a favorite by any users, not including the filter owner. | [optional] [readonly] 
**favouritedCount** | **Number** | The count of how many users have selected this filter as a favorite, including the filter owner. | [optional] [readonly] 
**id** | **String** | The unique identifier for the filter. | [optional] [readonly] 
**jql** | **String** | The JQL query for the filter. For example, *project &#x3D; SSP AND issuetype &#x3D; Bug*. | [optional] [readonly] 
**name** | **String** | The name of the filter. Must be unique. | 
**owner** | [**User**](User.md) | The user who owns the filter. This is defaulted to the creator of the filter, however Jira administrators can change the owner of a shared filter in the admin settings. | [optional] 
**searchUrl** | **String** | A URL to view the filter results in Jira, using the [Search for issues using JQL](#api-rest-api-3-filter-search-get) operation with the filter&#39;s JQL string to return the filter results. For example, *https://your-domain.atlassian.net/rest/api/3/search?jql&#x3D;project+%3D+SSP+AND+issuetype+%3D+Bug*. | [optional] [readonly] 
**self** | **String** | The URL of the filter. | [optional] [readonly] 
**sharePermissions** | [**[SharePermission]**](SharePermission.md) | The groups and projects that the filter is shared with. This can be specified when updating a filter, but not when creating a filter. | [optional] 
**subscriptions** | [**[FilterSubscription]**](FilterSubscription.md) | The users that are subscribed to the filter. | [optional] [readonly] 
**viewUrl** | **String** | A URL to view the filter results in Jira, using the ID of the filter. For example, *https://your-domain.atlassian.net/issues/?filter&#x3D;10100*. | [optional] [readonly] 


