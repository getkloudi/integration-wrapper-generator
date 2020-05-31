# Rollbar.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The item ID | [optional] 
**projectId** | **Number** | The item&#39;s project ID | [optional] 
**counter** | **Number** | The item identifier withing the project | [optional] 
**environment** | **String** |  | [optional] 
**platform** | **String** |  | [optional] 
**framework** | **String** |  | [optional] 
**hash** | **String** | Fingerprint that identifies the item | [optional] 
**title** | **String** |  | [optional] 
**firstOccurrenceId** | **Number** | First occurrence ID of the item in the version | [optional] 
**firstOccurrenceTimestamp** | **Number** | First occurrence timestamp of the item | [optional] 
**activatingOccurrenceId** | **Number** | Occurrence ID that activated the item | [optional] 
**lastActivatedTimestamp** | **Number** | Last activation timestamp | [optional] 
**lastResolvedTimestamp** | **Number** | Last timestamp the item was resolved | [optional] 
**lastMutedTimestamp** | **Number** | Last timestamp the item was muted | [optional] 
**lastOccurrenceId** | **Number** | Last received occurrence ID of the item | [optional] 
**lastOccurrenceTimestamp** | **Number** | Last received occurrence timestamp | [optional] 
**totalOccurrences** | **Number** | Total number of occurrences on the item | [optional] 
**lastModifiedBy** | **String** | Last user ID that modified the item | [optional] 
**status** | [**Status2**](Status2.md) |  | [optional] 
**level** | [**Level**](Level.md) |  | [optional] 
**integrationsData** | [**Object**](.md) |  | [optional] 
**assignedUserId** | **Number** | User ID the item is assigned to | [optional] 
**groupItemId** | **Number** | Group item this item belongs to | [optional] 
**groupStatus** | **Number** |  | [optional] 


