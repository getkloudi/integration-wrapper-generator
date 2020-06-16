# Jira.IssueBean

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changelog** | [**PageOfChangelogs**](PageOfChangelogs.md) | Details of changelogs associated with the issue. | [optional] 
**editmeta** | [**IssueUpdateMetadata**](IssueUpdateMetadata.md) | The metadata for the fields on the issue that can be amended. | [optional] 
**expand** | **String** | Expand options that include additional issue details in the response. | [optional] [readonly] 
**fields** | **{String: Object}** |  | [optional] 
**fieldsToInclude** | [**IncludedFields**](IncludedFields.md) |  | [optional] 
**id** | **String** | The ID of the issue. | [optional] [readonly] 
**key** | **String** | The key of the issue. | [optional] [readonly] 
**names** | **{String: String}** | The ID and name of each field present on the issue. | [optional] [readonly] 
**operations** | [**Operations**](Operations.md) | The operations that can be performed on the issue. | [optional] 
**properties** | **{String: Object}** | Details of the issue properties identified in the request. | [optional] [readonly] 
**renderedFields** | **{String: Object}** | The rendered value of each field present on the issue. | [optional] [readonly] 
**schema** | [**{String: JsonTypeBean}**](JsonTypeBean.md) | The schema describing each field present on the issue. | [optional] [readonly] 
**self** | **String** | The URL of the issue details. | [optional] [readonly] 
**transitions** | [**[IssueTransition]**](IssueTransition.md) | The transitions that can be performed on the issue. | [optional] [readonly] 
**versionedRepresentations** | **{String: {String: Object}}** | The versions of each field on the issue. | [optional] [readonly] 


