# Jira.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **[String]** | The Jira events that trigger the webhook. | [optional] 
**expirationDate** | **Number** |  | [readonly] 
**id** | **Number** | The ID of the webhook. | 
**jqlFilter** | **String** | The JQL filter that specifies which issues the webhook is sent for. | 



## Enum: [EventsEnum]


* `jira:issue_created` (value: `"jira:issue_created"`)

* `jira:issue_updated` (value: `"jira:issue_updated"`)

* `jira:issue_deleted` (value: `"jira:issue_deleted"`)

* `comment_created` (value: `"comment_created"`)

* `comment_updated` (value: `"comment_updated"`)

* `comment_deleted` (value: `"comment_deleted"`)

* `issue_property_set` (value: `"issue_property_set"`)

* `issue_property_deleted` (value: `"issue_property_deleted"`)




