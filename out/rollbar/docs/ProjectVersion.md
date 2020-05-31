# Rollbar.ProjectVersion

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The internal ID for the project version | [optional] 
**version** | **String** | The version value received in the item occurrences | [optional] 
**environment** | **String** | Environment where this version has been deployed | [optional] 
**dateCreated** | **Number** | Timestamp when the version is created | [optional] 
**firstVersionOccurrenceId** | **Number** | First occurrence ID received for this version | [optional] 
**firstOccurrenceTimestamp** | **Number** | First occurrence timestamp of the item on the version | [optional] 
**lastOccurrenceId** | **Number** | Last received occurrence ID of the item on the version | [optional] 
**lastOccurrenceTimestamp** | **Number** | Last received occurrence timestamp on the version | [optional] 
**deployedBy** | **String** | Username of the user that deployed the version. https://docs.rollbar.com/docs/deploy-tracking | [optional] 
**lastDeployTimestamp** | **Number** | Last received occurrence timestamp on the version | [optional] 
**itemStats** | [**ItemStats**](ItemStats.md) |  | [optional] 
**commits** | [**[Commit]**](Commit.md) | Commits for this version compared to the previous project deploy. If deploy tracking feature is not used this value will be an empty array. https://docs.rollbar.com/docs/deploy-tracking | [optional] 


