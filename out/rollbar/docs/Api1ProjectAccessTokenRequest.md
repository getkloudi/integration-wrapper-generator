# Rollbar.Api1ProjectAccessTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rateLimitWindowCount** | **Number** | Max number of calls the token is permitted within each window. Must be an integer (no punctuation) greater than -1. If set to &#x60;0&#x60;,then no rate limit is applied. | [optional] [default to 0]
**rateLimitWindowSize** | **Number** | Window duration in seconds. Must be greater than -1.  If set to &#x60;0&#x60;, then no rate limit is applied. | [optional] [default to 0]


