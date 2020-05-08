# Jira.InlineObject60

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **Boolean** | Indicates that the version is archived. Optional when creating or updating a version. | [optional] 
**description** | **String** | The description of the version. Optional when creating or updating a version. | [optional] 
**issuesStatusForFixVersion** | [**Object**](.md) |  | [optional] 
**moveUnfixedIssuesTo** | **String** | The URL of the self link to the version to which all unfixed issues are moved when a version is released. Not applicable when creating a version. Optional when updating a version. | [optional] 
**name** | **String** | The unique name of the version. Required when creating a version. Optional when updating a version. Maximum length 255 chars. | [optional] 
**operations** | **[Object]** | If the expand option operations is used, returns the list of operations available for this version. Read only. | [optional] 
**project** | **String** | Deprecated. Use projectId. | [optional] 
**projectId** | **Number** | The ID of the project to which this version is attached. Required when creating a version. Not applicable when updating a version. | [optional] 
**releaseDate** | **String** | The release date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. | [optional] 
**released** | **Boolean** | Indicates that the version is released. If the version is released a request to release again is ignored. Not applicable when creating a version. Optional when updating a version. | [optional] 
**remotelinks** | **[Object]** | If the expand option remotelinks is used, returns the list of remote links stored against this version. Read only. | [optional] 
**startDate** | **String** | The start date of the version. Expressed in ISO 8601 format (yyyy-mm-dd). Optional when creating or updating a version. | [optional] 


