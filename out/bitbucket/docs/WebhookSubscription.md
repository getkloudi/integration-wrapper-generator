# Bitbucket.WebhookSubscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | The webhook&#39;s id | [optional] 
**url** | **String** | The URL events get delivered to. | [optional] 
**description** | **String** | A user-defined description of the webhook. | [optional] 
**subjectType** | **String** | The type of entity, which is &#x60;repository&#x60; in the case of webhook subscriptions on repositories. | [optional] 
**subject** | [**Account**](Account.md) |  | [optional] 
**active** | **Boolean** |  | [optional] 
**createdAt** | **Date** |  | [optional] 
**events** | **[String]** | The events this webhook is subscribed to. | [optional] 



## Enum: SubjectTypeEnum


* `workspace` (value: `"workspace"`)

* `user` (value: `"user"`)

* `repository` (value: `"repository"`)

* `team` (value: `"team"`)





## Enum: [EventsEnum]


* `pullrequest:unapproved` (value: `"pullrequest:unapproved"`)

* `issue:comment_created` (value: `"issue:comment_created"`)

* `pullrequest:approved` (value: `"pullrequest:approved"`)

* `repo:created` (value: `"repo:created"`)

* `repo:deleted` (value: `"repo:deleted"`)

* `repo:imported` (value: `"repo:imported"`)

* `pullrequest:comment_updated` (value: `"pullrequest:comment_updated"`)

* `issue:updated` (value: `"issue:updated"`)

* `project:updated` (value: `"project:updated"`)

* `pullrequest:comment_created` (value: `"pullrequest:comment_created"`)

* `repo:commit_status_updated` (value: `"repo:commit_status_updated"`)

* `pullrequest:updated` (value: `"pullrequest:updated"`)

* `issue:created` (value: `"issue:created"`)

* `repo:fork` (value: `"repo:fork"`)

* `pullrequest:comment_deleted` (value: `"pullrequest:comment_deleted"`)

* `repo:commit_status_created` (value: `"repo:commit_status_created"`)

* `repo:updated` (value: `"repo:updated"`)

* `pullrequest:rejected` (value: `"pullrequest:rejected"`)

* `pullrequest:fulfilled` (value: `"pullrequest:fulfilled"`)

* `repo:push` (value: `"repo:push"`)

* `pullrequest:created` (value: `"pullrequest:created"`)

* `repo:transfer` (value: `"repo:transfer"`)

* `repo:commit_comment_created` (value: `"repo:commit_comment_created"`)




