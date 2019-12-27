# Bitbucket.Pipeline

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | **String** | The UUID identifying the pipeline. | [optional] 
**buildNumber** | **Number** | The build number of the pipeline. | [optional] 
**creator** | [**Account**](Account.md) |  | [optional] 
**repository** | [**Repository**](Repository.md) |  | [optional] 
**target** | [**PipelineTarget**](PipelineTarget.md) |  | [optional] 
**trigger** | [**PipelineTrigger**](PipelineTrigger.md) |  | [optional] 
**state** | [**PipelineState**](PipelineState.md) |  | [optional] 
**createdOn** | **Date** | The timestamp when the pipeline was created. | [optional] 
**completedOn** | **Date** | The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress. | [optional] 
**buildSecondsUsed** | **Number** | The number of build seconds used by this pipeline. | [optional] 


