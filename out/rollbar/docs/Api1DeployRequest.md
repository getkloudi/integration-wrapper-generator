# Rollbar.Api1DeployRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment** | **String** | Environment to which the revision was deployed | 
**revision** | **String** | Git SHA of revision being deployed | 
**rollbarUsername** | **String** | Rollbar username of person who deployed | [optional] 
**localUsername** | **String** | Local username of person who deployed.  Displayed in web app if no &#x60;rollbar_username&#x60; was specified. | [optional] 
**comment** | **String** | Additional text to include with the deploy | [optional] 
**status** | **String** | Status of the deployment - &#x60;started&#x60;, &#x60;succeeded&#x60; _(default)_, &#x60;failed&#x60;, or &#x60;timed_out&#x60;. | [optional] 


