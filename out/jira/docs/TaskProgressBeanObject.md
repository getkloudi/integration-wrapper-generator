# Jira.TaskProgressBeanObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | The description of the task. | [optional] 
**elapsedRuntime** | **Number** | The execution time of the task, in milliseconds. | 
**finished** | **Number** | A timestamp recording when the task was finished. | [optional] 
**id** | **String** | The ID of the task. | 
**lastUpdate** | **Number** | A timestamp recording when the task progress was last updated. | 
**message** | **String** | Information about the progress of the task. | [optional] 
**progress** | **Number** | The progress of the task, as a percentage complete. | 
**result** | [**Object**](.md) | The result of the task execution. | [optional] 
**self** | **String** | The URL of the task. | 
**started** | **Number** | A timestamp recording when the task was started. | [optional] 
**status** | **String** | The status of the task. | 
**submitted** | **Number** | A timestamp recording when the task was submitted. | 
**submittedBy** | **Number** | The ID of the user who submitted the task. | 



## Enum: StatusEnum


* `ENQUEUED` (value: `"ENQUEUED"`)

* `RUNNING` (value: `"RUNNING"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `FAILED` (value: `"FAILED"`)

* `CANCEL_REQUESTED` (value: `"CANCEL_REQUESTED"`)

* `CANCELLED` (value: `"CANCELLED"`)

* `DEAD` (value: `"DEAD"`)




