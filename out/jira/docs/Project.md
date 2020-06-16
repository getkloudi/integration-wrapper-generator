# Jira.Project

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | [**[Component]**](Component.md) | List of the components contained in the project. | [optional] [readonly] 
**archived** | **Boolean** | Whether the project is archived. | [optional] [readonly] 
**archivedBy** | [**User**](User.md) | The user who archived the project. | [optional] 
**archivedDate** | **Date** | The date when the project was archived. | [optional] [readonly] 
**assigneeType** | **String** | The default assignee when creating issues for this project. | [optional] [readonly] 
**avatarUrls** | [**AvatarUrlsBean**](AvatarUrlsBean.md) | The URLs of the project&#39;s avatars. | [optional] 
**deleted** | **Boolean** | Whether the project is marked as deleted. | [optional] [readonly] 
**deletedBy** | [**User**](User.md) | The user who marked the project as deleted. | [optional] 
**deletedDate** | **Date** | The date when the project was marked as deleted. | [optional] [readonly] 
**description** | **String** | A brief description of the project. | [optional] [readonly] 
**email** | **String** | An email address associated with the project. | [optional] 
**expand** | **String** | Expand options that include additional project details in the response. | [optional] [readonly] 
**favourite** | **Boolean** | Whether the project is selected as a favorite. | [optional] 
**id** | **String** | The ID of the project. | [optional] 
**insight** | [**ProjectInsight**](ProjectInsight.md) | Insights about the project. | [optional] 
**isPrivate** | **Boolean** | Whether the project is private. | [optional] [readonly] 
**issueTypeHierarchy** | [**Hierarchy**](Hierarchy.md) | The issue type hierarchy for the project | [optional] 
**issueTypes** | [**[IssueTypeDetails]**](IssueTypeDetails.md) | List of the issue types available in the project. | [optional] [readonly] 
**key** | **String** | The key of the project. | [optional] [readonly] 
**lead** | [**User**](User.md) | The username of the project lead. | [optional] 
**name** | **String** | The name of the project. | [optional] [readonly] 
**permissions** | [**ProjectPermissions**](ProjectPermissions.md) | User permissions on the project | [optional] 
**projectCategory** | [**ProjectCategory**](ProjectCategory.md) | The category the project belongs to. | [optional] 
**projectTypeKey** | **String** | The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. | [optional] [readonly] 
**properties** | **{String: Object}** | Map of project properties | [optional] [readonly] 
**retentionTillDate** | **Date** | The date when the project is deleted permanently. | [optional] [readonly] 
**roles** | **{String: String}** | The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post). | [optional] [readonly] 
**self** | **String** | The URL of the project details. | [optional] [readonly] 
**simplified** | **Boolean** | Whether the project is simplified. | [optional] [readonly] 
**style** | **String** | The type of the project. | [optional] [readonly] 
**url** | **String** | A link to information about this project, such as project documentation. | [optional] [readonly] 
**uuid** | **String** | Unique ID for next-gen projects. | [optional] [readonly] 
**versions** | [**[Version]**](Version.md) | The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post). | [optional] [readonly] 



## Enum: AssigneeTypeEnum


* `PROJECT_LEAD` (value: `"PROJECT_LEAD"`)

* `UNASSIGNED` (value: `"UNASSIGNED"`)





## Enum: ProjectTypeKeyEnum


* `software` (value: `"software"`)

* `service_desk` (value: `"service_desk"`)

* `business` (value: `"business"`)





## Enum: StyleEnum


* `CLASSIC` (value: `"CLASSIC"`)

* `NEXTGEN` (value: `"NEXTGEN"`)

* `classic` (value: `"classic"`)

* `next-gen` (value: `"next-gen"`)




