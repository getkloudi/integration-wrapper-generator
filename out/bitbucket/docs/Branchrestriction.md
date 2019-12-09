# Bitbucket.Branchrestriction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**[Group]**](Group.md) |  | [optional] 
**id** | **Number** | The branch restriction status&#39; id. | [optional] 
**kind** | **String** | The type of restriction that is being applied | [optional] 
**links** | [**BranchrestrictionAllOfLinks**](BranchrestrictionAllOfLinks.md) |  | [optional] 
**users** | [**[Account]**](Account.md) |  | [optional] 
**value** | **Number** | Value with kind-specific semantics: \&quot;require_approvals_to_merge\&quot; uses it to require a minimum number of approvals on a PR; \&quot;require_passing_builds_to_merge\&quot; uses it to require a minimum number of passing builds. | [optional] 



## Enum: KindEnum


* `require_tasks_to_be_completed` (value: `"require_tasks_to_be_completed"`)

* `require_passing_builds_to_merge` (value: `"require_passing_builds_to_merge"`)

* `force` (value: `"force"`)

* `require_all_dependencies_merged` (value: `"require_all_dependencies_merged"`)

* `push` (value: `"push"`)

* `require_approvals_to_merge` (value: `"require_approvals_to_merge"`)

* `enforce_merge_checks` (value: `"enforce_merge_checks"`)

* `restrict_merges` (value: `"restrict_merges"`)

* `reset_pullrequest_approvals_on_change` (value: `"reset_pullrequest_approvals_on_change"`)

* `delete` (value: `"delete"`)




