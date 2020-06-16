# Jira.WorkflowTransitionRulesUpdateErrorDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ruleUpdateErrors** | **{String: [String]}** | A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn&#39;t updated. | 
**updateErrors** | **[String]** | The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries. | [optional] 
**workflowId** | [**WorkflowId**](WorkflowId.md) |  | [optional] 


