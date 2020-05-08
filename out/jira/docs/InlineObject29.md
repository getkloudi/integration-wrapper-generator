# Jira.InlineObject29

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Object**](.md) | User details. Read only. | [optional] 
**comment** | [**Object**](.md) | A comment about the worklog. Optional when creating or updating a worklog. | [optional] 
**properties** | **[Object]** | Details of properties for the worklog. Optional when creating or updating a worklog. | [optional] 
**started** | **String** | The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. | [optional] 
**timeSpent** | **String** | The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn&#39;t provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided. | [optional] 
**timeSpentSeconds** | **Number** | The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn&#39;t provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided. | [optional] 
**updateAuthor** | [**Object**](.md) | User details. Read only. | [optional] 
**visibility** | [**Object**](.md) | The group or role to which this item is visible. | [optional] 


