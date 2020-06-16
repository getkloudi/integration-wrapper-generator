# Jira.JiraExpressionAnalysis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**[JiraExpressionValidationError]**](JiraExpressionValidationError.md) | A list of validation errors. Not included if the expression is valid. | [optional] 
**expression** | **String** | The analysed expression. | 
**valid** | **Boolean** | Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations). | 


