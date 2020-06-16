# Jira.JexpJqlIssues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maxResults** | **Number** | The maximum number of issues to return from the JQL query. Inspect &#x60;meta.issues.jql.maxResults&#x60; in the response to ensure the maximum value has not been exceeded. | [optional] 
**query** | **String** | The JQL query. | [optional] 
**startAt** | **Number** | The index of the first issue to return from the JQL query. | [optional] 
**validation** | **String** | Determines how to validate the JQL query and treat the validation results. | [optional] [default to &#39;strict&#39;]



## Enum: ValidationEnum


* `strict` (value: `"strict"`)

* `warn` (value: `"warn"`)

* `none` (value: `"none"`)




