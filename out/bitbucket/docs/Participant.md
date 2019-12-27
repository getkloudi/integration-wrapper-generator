# Bitbucket.Participant

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) |  | [optional] 
**role** | **String** |  | [optional] 
**approved** | **Boolean** |  | [optional] 
**participatedOn** | **Date** | The ISO8601 timestamp of the participant&#39;s action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented. | [optional] 



## Enum: RoleEnum


* `PARTICIPANT` (value: `"PARTICIPANT"`)

* `REVIEWER` (value: `"REVIEWER"`)




