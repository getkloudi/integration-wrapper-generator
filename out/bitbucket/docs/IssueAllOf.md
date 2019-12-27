# Bitbucket.IssueAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**IssueAllOfLinks**](IssueAllOfLinks.md) |  | [optional] 
**id** | **Number** |  | [optional] 
**repository** | [**Repository**](Repository.md) |  | [optional] 
**title** | **String** |  | [optional] 
**reporter** | [**User**](User.md) |  | [optional] 
**assignee** | [**User**](User.md) |  | [optional] 
**createdOn** | **Date** |  | [optional] 
**updatedOn** | **Date** |  | [optional] 
**editedOn** | **Date** |  | [optional] 
**state** | **String** |  | [optional] 
**kind** | **String** |  | [optional] 
**priority** | **String** |  | [optional] 
**milestone** | [**Milestone**](Milestone.md) |  | [optional] 
**version** | [**Version**](Version.md) |  | [optional] 
**component** | [**Component**](Component.md) |  | [optional] 
**votes** | **Number** |  | [optional] 
**content** | [**PullrequestAllOfRenderedTitle**](PullrequestAllOfRenderedTitle.md) |  | [optional] 



## Enum: StateEnum


* `new` (value: `"new"`)

* `open` (value: `"open"`)

* `resolved` (value: `"resolved"`)

* `on hold` (value: `"on hold"`)

* `invalid` (value: `"invalid"`)

* `duplicate` (value: `"duplicate"`)

* `wontfix` (value: `"wontfix"`)

* `closed` (value: `"closed"`)





## Enum: KindEnum


* `bug` (value: `"bug"`)

* `enhancement` (value: `"enhancement"`)

* `proposal` (value: `"proposal"`)

* `task` (value: `"task"`)





## Enum: PriorityEnum


* `trivial` (value: `"trivial"`)

* `minor` (value: `"minor"`)

* `major` (value: `"major"`)

* `critical` (value: `"critical"`)

* `blocker` (value: `"blocker"`)




