# Jira.EventNotification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emailAddress** | **String** | The email address. | [optional] 
**expand** | **String** | Expand options that include additional event notification details in the response. | [optional] 
**field** | [**FieldDetails**](FieldDetails.md) | The custom user or group field. | [optional] 
**group** | [**GroupName**](GroupName.md) | The specified group. | [optional] 
**id** | **Number** | The ID of the notification. | [optional] 
**notificationType** | **String** | Identifies the recipients of the notification. | [optional] 
**parameter** | **String** | The value of the &#x60;notificationType&#x60;:   *  &#x60;User&#x60; The &#x60;parameter&#x60; is the user account ID.  *  &#x60;Group&#x60; The &#x60;parameter&#x60; is the group name.  *  &#x60;ProjectRole&#x60; The &#x60;parameter&#x60; is the project role ID.  *  &#x60;UserCustomField&#x60; The &#x60;parameter&#x60; is the ID of the custom field.  *  &#x60;GroupCustomField&#x60; The &#x60;parameter&#x60; is the ID of the custom field. | [optional] 
**projectRole** | [**ProjectRole**](ProjectRole.md) | The specified project role. | [optional] 
**user** | [**UserDetails**](UserDetails.md) | The specified user. | [optional] 



## Enum: NotificationTypeEnum


* `CurrentAssignee` (value: `"CurrentAssignee"`)

* `Reporter` (value: `"Reporter"`)

* `CurrentUser` (value: `"CurrentUser"`)

* `ProjectLead` (value: `"ProjectLead"`)

* `ComponentLead` (value: `"ComponentLead"`)

* `User` (value: `"User"`)

* `Group` (value: `"Group"`)

* `ProjectRole` (value: `"ProjectRole"`)

* `EmailAddress` (value: `"EmailAddress"`)

* `AllWatchers` (value: `"AllWatchers"`)

* `UserCustomField` (value: `"UserCustomField"`)

* `GroupCustomField` (value: `"GroupCustomField"`)




