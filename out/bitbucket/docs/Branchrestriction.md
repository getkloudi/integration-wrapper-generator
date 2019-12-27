# Bitbucket.Branchrestriction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**BranchingModelSettingsAllOfLinks**](BranchingModelSettingsAllOfLinks.md) |  | [optional] 
**id** | **Number** | The branch restriction status&#39; id. | [optional] 
**kind** | **String** | The type of restriction that is being applied. | 
**branchMatchKind** | **String** | Indicates how the restriction is matched against a branch. The default is &#x60;glob&#x60;. | 
**branchType** | **String** | Apply the restriction to branches of this type. Active when &#x60;branch_match_kind&#x60; is &#x60;branching_model&#x60;. The branch type will be calculated using the branching model configured for the repository. | [optional] 
**pattern** | **String** | Apply the restriction to branches that match this pattern. Active when &#x60;branch_match_kind&#x60; is &#x60;glob&#x60;. Will be empty when &#x60;branch_match_kind&#x60; is &#x60;branching_model&#x60;. | 
**users** | [**[Account]**](Account.md) |  | [optional] 
**groups** | [**[Group]**](Group.md) |  | [optional] 
**value** | **Number** | Value with kind-specific semantics: \&quot;require_approvals_to_merge\&quot; uses it to require a minimum number of approvals on a PR; \&quot;require_default_reviewer_approvals_to_merge\&quot; uses it to require a minimum number of approvals from default reviewers on a PR; \&quot;require_passing_builds_to_merge\&quot; uses it to require a minimum number of passing builds. | [optional] 



## Enum: KindEnum


* `require_tasks_to_be_completed` (value: `"require_tasks_to_be_completed"`)

* `force` (value: `"force"`)

* `restrict_merges` (value: `"restrict_merges"`)

* `enforce_merge_checks` (value: `"enforce_merge_checks"`)

* `require_approvals_to_merge` (value: `"require_approvals_to_merge"`)

* `delete` (value: `"delete"`)

* `require_all_dependencies_merged` (value: `"require_all_dependencies_merged"`)

* `push` (value: `"push"`)

* `require_passing_builds_to_merge` (value: `"require_passing_builds_to_merge"`)

* `reset_pullrequest_approvals_on_change` (value: `"reset_pullrequest_approvals_on_change"`)

* `require_default_reviewer_approvals_to_merge` (value: `"require_default_reviewer_approvals_to_merge"`)





## Enum: BranchMatchKindEnum


* `branching_model` (value: `"branching_model"`)

* `glob` (value: `"glob"`)





## Enum: BranchTypeEnum


* `feature` (value: `"feature"`)

* `bugfix` (value: `"bugfix"`)

* `release` (value: `"release"`)

* `hotfix` (value: `"hotfix"`)

* `development` (value: `"development"`)

* `production` (value: `"production"`)




