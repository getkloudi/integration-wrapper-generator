# Jira.InlineObject3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | [**Object**](.md) | A user. | [optional] 
**assigneeType** | **String** | The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values: | [optional] 
**description** | **String** | The description for the component. Optional when creating or updating a component. | [optional] 
**lead** | [**Object**](.md) | A user. | [optional] 
**leadAccountId** | **String** | The accountId of the component&#39;s lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component. | [optional] 
**leadUserName** | **String** | This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component&#39;s lead user. Optional when creating or updating a component. | [optional] 
**name** | **String** | The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars. | [optional] 
**project** | **String** | The key of the project to which the component is assigned. Required when creating a component. Can&#39;t be updated. | [optional] 
**projectId** | **Number** | Not used. | [optional] 
**realAssignee** | [**Object**](.md) | A user. | [optional] 



## Enum: AssigneeTypeEnum


* `PROJECT_DEFAULT` (value: `"PROJECT_DEFAULT"`)

* `COMPONENT_LEAD` (value: `"COMPONENT_LEAD"`)

* `PROJECT_LEAD` (value: `"PROJECT_LEAD"`)

* `UNASSIGNED` (value: `"UNASSIGNED"`)




