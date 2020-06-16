# Jira.ServerInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseUrl** | **String** | The base URL of the Jira instance. | [optional] 
**buildDate** | **Date** | The timestamp when the Jira version was built. | [optional] 
**buildNumber** | **Number** | The build number of the Jira version. | [optional] 
**deploymentType** | **String** | The type of server deployment. This is always returned as *Cloud*. | [optional] 
**healthChecks** | [**[HealthCheckResult]**](HealthCheckResult.md) | Jira instance health check results. Deprecated and no longer returned. | [optional] 
**scmInfo** | **String** | The unique identifier of the Jira version. | [optional] 
**serverTime** | **Date** | The time in Jira when this request was responded to. | [optional] 
**serverTitle** | **String** | The name of the Jira instance. | [optional] 
**version** | **String** | The version of Jira. | [optional] 
**versionNumbers** | **[Number]** | The major, minor, and revision version numbers of the Jira version. | [optional] 


