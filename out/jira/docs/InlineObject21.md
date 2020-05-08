# Jira.InlineObject21

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192. | [optional] 
**active** | **Boolean** | Indicates whether the user is active. | [optional] 
**applicationRoles** | [**Object**](.md) | The application roles the user is assigned to. | [optional] 
**avatarUrls** | [**Object**](.md) | The avatars of the user. | [optional] 
**displayName** | **String** | The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. | [optional] 
**emailAddress** | **String** | The email address of the user. Depending on the user’s privacy setting, this may be returned as null. | [optional] 
**groups** | [**Object**](.md) | The groups that the user belongs to. | [optional] 
**key** | **String** | This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The key of the user. For example, admin. | [optional] 
**locale** | **String** | The locale of the user. Depending on the user’s privacy setting, this may be returned as null. | [optional] 
**name** | **String** | This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin. | [optional] 
**timeZone** | **String** | The time zone specified in the user&#39;s profile. Depending on the user’s privacy setting, this may be returned as null. | [optional] 


