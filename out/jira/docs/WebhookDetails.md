# Jira.WebhookDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **[String]** | The Jira events that trigger the webhook. | [optional] 
**jqlFilter** | **String** | The JQL filter that specifies which issues the webhook is sent for. Only a subset of JQL can be used. The supported elements are:   *  Fields: &#x60;issueKey&#x60;, &#x60;project&#x60;, &#x60;issuetype&#x60;, &#x60;status&#x60;, &#x60;assignee&#x60;, &#x60;reporter&#x60;, &#x60;issue.property&#x60;, and &#x60;cf[id]&#x60; (for custom fields—only the epic label custom field is supported).  *  Operators: &#x60;&#x3D;&#x60;, &#x60;!&#x3D;&#x60;, &#x60;IN&#x60;, and &#x60;NOT IN&#x60;. | 



## Enum: [EventsEnum]


* `jira:issue_created` (value: `"jira:issue_created"`)

* `jira:issue_updated` (value: `"jira:issue_updated"`)

* `jira:issue_deleted` (value: `"jira:issue_deleted"`)

* `comment_created` (value: `"comment_created"`)

* `comment_updated` (value: `"comment_updated"`)

* `comment_deleted` (value: `"comment_deleted"`)

* `issue_property_set` (value: `"issue_property_set"`)

* `issue_property_deleted` (value: `"issue_property_deleted"`)




