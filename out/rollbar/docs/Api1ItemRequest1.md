# Rollbar.Api1ItemRequest1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | If present, the new status. Valid values: &#x60;active&#x60;, &#x60;resolved&#x60;, &#x60;muted&#x60;. | [optional] 
**resolvedInVersion** | **String** | If not empty, a string up to 40 characters describing the version that the item was resolved in. Only used if &#x60;status&#x60; is set to &#x60;resolved&#x60;. | [optional] 
**title** | **String** | If present, the new title. Should be a string with length 1 to 255. | [optional] 
**level** | **String** | If present, the new level. Valid values: &#x60;critical&#x60;, &#x60;error&#x60;, &#x60;warning&#x60;, &#x60;info&#x60;, &#x60;debug&#x60; | [optional] 
**assignedUserId** | **Number** | If present, the new assigned user ID. Valid values are null or any user ID with access to this item. | [optional] 


