# Jira.InlineObject65

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**defaultWorkflow** | **String** | The name of the default workflow for the workflow scheme. The default workflow has All Unassigned Issue Types assigned to it in Jira. If defaultWorkflow is not specified when creating a workflow scheme, it is set to Jira Workflow (jira). | [optional] 
**description** | **String** | The description of the workflow scheme. | [optional] 
**issueTypeMappings** | [**Object**](.md) | The issue type-project mappings, where each mapping is an issue type ID and project name pair. Note that an issue type can only be mapped to one project in a workflow scheme. | [optional] 
**name** | **String** | The name of the workflow scheme. The name must be unique. Maximum length 255 characters. | [optional] 
**updateDraftIfNeeded** | **Boolean** | Indicates whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works: | [optional] 


