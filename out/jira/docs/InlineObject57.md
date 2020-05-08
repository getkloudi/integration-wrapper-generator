# Jira.InlineObject57

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **[String]** | Use expand to include additional information about issues in the response. This parameter accepts multiple values separated by a comma: | [optional] 
**fields** | **[String]** | A comma-separated list of fields to return for each issue, use it to retrieve a subset of fields. Allowed values | [optional] 
**fieldsByKeys** | **Boolean** | Reference fields by their key (rather than ID). The default is false. | [optional] 
**jql** | **String** | A JQL expression. | [optional] 
**maxResults** | **Number** | The maximum number of items to return per page. The default is 50 and maximum is 100. | [optional] 
**properties** | **[String]** | A comma-separated list of up to 5 issue properties to include in the results. | [optional] 
**startAt** | **Number** | The index of the first item to return in the page of results (page offset). The base index is 0. | [optional] 
**validateQuery** | **String** | Determines how to validate the JQL query and treat the validation results. Supported values: | [optional] 



## Enum: ValidateQueryEnum


* `strict` (value: `"strict"`)

* `warn` (value: `"warn"`)

* `none` (value: `"none"`)

* `true` (value: `"true"`)

* `false` (value: `"false"`)




