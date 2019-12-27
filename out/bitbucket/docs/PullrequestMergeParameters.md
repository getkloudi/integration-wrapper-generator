# Bitbucket.PullrequestMergeParameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**message** | **String** | The commit message that will be used on the resulting commit. | [optional] 
**closeSourceBranch** | **Boolean** | Whether the source branch should be deleted. If this is not provided, we fallback to the value used when the pull request was created, which defaults to False | [optional] 
**mergeStrategy** | **String** | The merge strategy that will be used to merge the pull request. | [optional] [default to &#39;merge_commit&#39;]



## Enum: MergeStrategyEnum


* `merge_commit` (value: `"merge_commit"`)

* `squash` (value: `"squash"`)

* `fast_forward` (value: `"fast_forward"`)




