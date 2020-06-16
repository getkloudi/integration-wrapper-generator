# Jira.ProjectInputBean

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigneeType** | **String** | The default assignee when creating issues for this project. | [optional] 
**avatarId** | **Number** | An integer value for the project&#39;s avatar. | [optional] 
**categoryId** | **Number** | The ID of the project&#39;s category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation. | [optional] 
**description** | **String** | A brief description of the project. | [optional] 
**issueSecurityScheme** | **Number** | The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs. | [optional] 
**key** | **String** | Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. Required when creating a project. Optional when updating a project. | [optional] 
**lead** | **String** | This parameter is deprecated because of privacy changes. Use &#x60;leadAccountId&#x60; instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either &#x60;lead&#x60; or &#x60;leadAccountId&#x60; must be set when creating a project. Optional when updating a project. Cannot be provided with &#x60;leadAccountId&#x60;. | [optional] 
**leadAccountId** | **String** | The account ID of the project lead. Either &#x60;lead&#x60; or &#x60;leadAccountId&#x60; must be set when creating a project. Optional when updating a project. Cannot be provided with &#x60;lead&#x60;. | [optional] 
**name** | **String** | The name of the project. Required when creating a project. Optional when updating a project. | [optional] 
**notificationScheme** | **Number** | The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs. | [optional] 
**permissionScheme** | **Number** | The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs. | [optional] 
**projectTemplateKey** | **String** | A prebuilt configuration for a project. The type of the &#x60;projectTemplateKey&#x60; must match with the type of the &#x60;projectTypeKey&#x60;. Required when creating a project. Not applicable for the Update project resource. | [optional] 
**projectTypeKey** | **String** | The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. | [optional] 
**url** | **String** | A link to information about this project, such as project documentation | [optional] 



## Enum: AssigneeTypeEnum


* `PROJECT_LEAD` (value: `"PROJECT_LEAD"`)

* `UNASSIGNED` (value: `"UNASSIGNED"`)





## Enum: ProjectTemplateKeyEnum


* `pyxis.greenhopper.jira:gh-simplified-agility-kanban` (value: `"com.pyxis.greenhopper.jira:gh-simplified-agility-kanban"`)

* `pyxis.greenhopper.jira:gh-simplified-agility-scrum` (value: `"com.pyxis.greenhopper.jira:gh-simplified-agility-scrum"`)

* `pyxis.greenhopper.jira:gh-simplified-basic` (value: `"com.pyxis.greenhopper.jira:gh-simplified-basic"`)

* `pyxis.greenhopper.jira:gh-simplified-kanban-classic` (value: `"com.pyxis.greenhopper.jira:gh-simplified-kanban-classic"`)

* `pyxis.greenhopper.jira:gh-simplified-scrum-classic` (value: `"com.pyxis.greenhopper.jira:gh-simplified-scrum-classic"`)

* `atlassian.servicedesk:simplified-it-service-desk` (value: `"com.atlassian.servicedesk:simplified-it-service-desk"`)

* `atlassian.servicedesk:simplified-internal-service-desk` (value: `"com.atlassian.servicedesk:simplified-internal-service-desk"`)

* `atlassian.servicedesk:simplified-external-service-desk` (value: `"com.atlassian.servicedesk:simplified-external-service-desk"`)

* `atlassian.servicedesk:simplified-hr-service-desk` (value: `"com.atlassian.servicedesk:simplified-hr-service-desk"`)

* `atlassian.servicedesk:simplified-facilities-service-desk` (value: `"com.atlassian.servicedesk:simplified-facilities-service-desk"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-content-management` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-content-management"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-document-approval` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-process-control` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-process-control"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-procurement` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-procurement"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-project-management` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-project-management"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-recruitment` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment"`)

* `atlassian.jira-core-project-templates:jira-core-simplified-task-` (value: `"com.atlassian.jira-core-project-templates:jira-core-simplified-task-"`)

* `atlassian.jira.jira-incident-management-plugin:im-incident-management` (value: `"com.atlassian.jira.jira-incident-management-plugin:im-incident-management"`)





## Enum: ProjectTypeKeyEnum


* `software` (value: `"software"`)

* `service_desk` (value: `"service_desk"`)

* `business` (value: `"business"`)




