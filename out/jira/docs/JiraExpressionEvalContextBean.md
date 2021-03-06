# Jira.JiraExpressionEvalContextBean

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**board** | **Number** | The ID of the board that is available under the &#x60;board&#x60; variable when evaluating the expression. | [optional] 
**customerRequest** | **Number** | The ID of the customer request that is available under the &#x60;customerRequest&#x60; variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type. | [optional] 
**issue** | [**IdOrKeyBean**](IdOrKeyBean.md) | The issue that is available under the &#x60;issue&#x60; variable when evaluating the expression. | [optional] 
**issues** | [**JexpIssues**](JexpIssues.md) | The collection of issues that is available under the &#x60;issues&#x60; variable when evaluating the expression. | [optional] 
**project** | [**IdOrKeyBean**](IdOrKeyBean.md) | The project that is available under the &#x60;project&#x60; variable when evaluating the expression. | [optional] 
**serviceDesk** | **Number** | The ID of the service desk that is available under the &#x60;serviceDesk&#x60; variable when evaluating the expression. | [optional] 
**sprint** | **Number** | The ID of the sprint that is available under the &#x60;sprint&#x60; variable when evaluating the expression. | [optional] 


