# Jira.InlineObject41

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigneeType** | **String** | The default assignee when creating issues for this project. | [optional] 
**avatarId** | **Number** | An integer value for the project&#39;s avatar. | [optional] 
**categoryId** | **Number** | The ID of the project&#39;s category. A complete list of category IDs can be found using the Get all project categories resource. | [optional] 
**description** | **String** | A brief description of the project. | [optional] 
**issueSecurityScheme** | **Number** | The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs. | [optional] 
**key** | **String** | Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project. | [optional] 
**lead** | **String** | Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. | [optional] 
**leadAccountId** | **String** | Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project. | [optional] 
**name** | **String** | The name of the project. Required when creating a project. Optional when updating a project. | [optional] 
**notificationScheme** | **Number** | The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs. | [optional] 
**permissionScheme** | **Number** | The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs. | [optional] 
**projectTemplateKey** | **String** | A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource. | [optional] 
**projectTypeKey** | **String** | The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead. | [optional] 
**url** | **String** | A link to information about this project, such as project documentation | [optional] 



## Enum: AssigneeTypeEnum


* `PROJECT_LEAD` (value: `"PROJECT_LEAD"`)

* `UNASSIGNED` (value: `"UNASSIGNED"`)





## Enum: ProjectTemplateKeyEnum


* `pyxis.greenhopper.jira:gh-simplified-agility` (value: `"com.pyxis.greenhopper.jira:gh-simplified-agility"`)

* `pyxis.greenhopper.jira:gh-simplified-basic` (value: `"com.pyxis.greenhopper.jira:gh-simplified-basic"`)

* `pyxis.greenhopper.jira:gh-simplified-kanban` (value: `"com.pyxis.greenhopper.jira:gh-simplified-kanban"`)

* `pyxis.greenhopper.jira:gh-simplified-scrum` (value: `"com.pyxis.greenhopper.jira:gh-simplified-scrum"`)

* `atlassian.servicedesk:simplified-it-service-desk` (value: `"com.atlassian.servicedesk:simplified-it-service-desk"`)

* `atlassian.servicedesk:simplified-internal-service-desk` (value: `"com.atlassian.servicedesk:simplified-internal-service-desk"`)

* `atlassian.servicedesk:simplified-external-service-desk` (value: `"com.atlassian.servicedesk:simplified-external-service-desk"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-content-management` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-content-management"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-document-approval` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"`)





## Enum: ProjectTypeKeyEnum


* `software` (value: `"software"`)

* `service_desk` (value: `"service_desk"`)

* `business` (value: `"business"`)




