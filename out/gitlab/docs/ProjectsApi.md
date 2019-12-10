# Gitlab.ProjectsApi

All URIs are relative to *https://gitlab.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteV3ProjectsId**](ProjectsApi.md#deleteV3ProjectsId) | **DELETE** /v3/projects/{id} | Remove a project
[**deleteV3ProjectsIdAccessRequestsUserId**](ProjectsApi.md#deleteV3ProjectsIdAccessRequestsUserId) | **DELETE** /v3/projects/{id}/access_requests/{user_id} | Denies an access request for the given user.
[**deleteV3ProjectsIdBoardsBoardIdListsListId**](ProjectsApi.md#deleteV3ProjectsIdBoardsBoardIdListsListId) | **DELETE** /v3/projects/{id}/boards/{board_id}/lists/{list_id} | Delete a board list
[**deleteV3ProjectsIdDeployKeysKeyId**](ProjectsApi.md#deleteV3ProjectsIdDeployKeysKeyId) | **DELETE** /v3/projects/{id}/deploy_keys/{key_id} | Delete deploy key for a project
[**deleteV3ProjectsIdDeployKeysKeyIdDisable**](ProjectsApi.md#deleteV3ProjectsIdDeployKeysKeyIdDisable) | **DELETE** /v3/projects/{id}/deploy_keys/{key_id}/disable | Disable a deploy key for a project
[**deleteV3ProjectsIdEnvironmentsEnvironmentId**](ProjectsApi.md#deleteV3ProjectsIdEnvironmentsEnvironmentId) | **DELETE** /v3/projects/{id}/environments/{environment_id} | Deletes an existing environment
[**deleteV3ProjectsIdFork**](ProjectsApi.md#deleteV3ProjectsIdFork) | **DELETE** /v3/projects/{id}/fork | Remove a forked_from relationship
[**deleteV3ProjectsIdHooksHookId**](ProjectsApi.md#deleteV3ProjectsIdHooksHookId) | **DELETE** /v3/projects/{id}/hooks/{hook_id} | Deletes project hook
[**deleteV3ProjectsIdIssuesIssueId**](ProjectsApi.md#deleteV3ProjectsIdIssuesIssueId) | **DELETE** /v3/projects/{id}/issues/{issue_id} | Delete a project issue
[**deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/issues/{issue_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdIssuesNoteableIdNotesNoteId**](ProjectsApi.md#deleteV3ProjectsIdIssuesNoteableIdNotesNoteId) | **DELETE** /v3/projects/{id}/issues/{noteable_id}/notes/{note_id} | Delete a +noteable+ note
[**deleteV3ProjectsIdIssuesSubscribableIdSubscription**](ProjectsApi.md#deleteV3ProjectsIdIssuesSubscribableIdSubscription) | **DELETE** /v3/projects/{id}/issues/{subscribable_id}/subscription | Unsubscribe from a resource
[**deleteV3ProjectsIdKeysKeyId**](ProjectsApi.md#deleteV3ProjectsIdKeysKeyId) | **DELETE** /v3/projects/{id}/keys/{key_id} | Delete deploy key for a project
[**deleteV3ProjectsIdKeysKeyIdDisable**](ProjectsApi.md#deleteV3ProjectsIdKeysKeyIdDisable) | **DELETE** /v3/projects/{id}/keys/{key_id}/disable | Disable a deploy key for a project
[**deleteV3ProjectsIdLabels**](ProjectsApi.md#deleteV3ProjectsIdLabels) | **DELETE** /v3/projects/{id}/labels | Delete an existing label
[**deleteV3ProjectsIdLabelsSubscribableIdSubscription**](ProjectsApi.md#deleteV3ProjectsIdLabelsSubscribableIdSubscription) | **DELETE** /v3/projects/{id}/labels/{subscribable_id}/subscription | Unsubscribe from a resource
[**deleteV3ProjectsIdMembersUserId**](ProjectsApi.md#deleteV3ProjectsIdMembersUserId) | **DELETE** /v3/projects/{id}/members/{user_id} | Removes a user from a group or project.
[**deleteV3ProjectsIdMergeRequestSubscribableIdSubscription**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestSubscribableIdSubscription) | **DELETE** /v3/projects/{id}/merge_request/{subscribable_id}/subscription | Unsubscribe from a resource
[**deleteV3ProjectsIdMergeRequestsMergeRequestId**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestsMergeRequestId) | **DELETE** /v3/projects/{id}/merge_requests/{merge_request_id} | Delete a merge request
[**deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId) | **DELETE** /v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id} | Delete a +noteable+ note
[**deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription**](ProjectsApi.md#deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription) | **DELETE** /v3/projects/{id}/merge_requests/{subscribable_id}/subscription | Unsubscribe from a resource
[**deleteV3ProjectsIdRepositoryBranchesBranch**](ProjectsApi.md#deleteV3ProjectsIdRepositoryBranchesBranch) | **DELETE** /v3/projects/{id}/repository/branches/{branch} | Delete a branch
[**deleteV3ProjectsIdRepositoryFiles**](ProjectsApi.md#deleteV3ProjectsIdRepositoryFiles) | **DELETE** /v3/projects/{id}/repository/files | Delete an existing file in repository
[**deleteV3ProjectsIdRepositoryMergedBranches**](ProjectsApi.md#deleteV3ProjectsIdRepositoryMergedBranches) | **DELETE** /v3/projects/{id}/repository/merged_branches | 
[**deleteV3ProjectsIdRepositoryTagsTagName**](ProjectsApi.md#deleteV3ProjectsIdRepositoryTagsTagName) | **DELETE** /v3/projects/{id}/repository/tags/{tag_name} | Delete a repository tag
[**deleteV3ProjectsIdRunnersRunnerId**](ProjectsApi.md#deleteV3ProjectsIdRunnersRunnerId) | **DELETE** /v3/projects/{id}/runners/{runner_id} | Disable project&#39;s runner
[**deleteV3ProjectsIdServicesServiceSlug**](ProjectsApi.md#deleteV3ProjectsIdServicesServiceSlug) | **DELETE** /v3/projects/{id}/services/{service_slug} | Delete a service for project
[**deleteV3ProjectsIdShareGroupId**](ProjectsApi.md#deleteV3ProjectsIdShareGroupId) | **DELETE** /v3/projects/{id}/share/{group_id} | 
[**deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId**](ProjectsApi.md#deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId) | **DELETE** /v3/projects/{id}/snippets/{noteable_id}/notes/{note_id} | Delete a +noteable+ note
[**deleteV3ProjectsIdSnippetsSnippetId**](ProjectsApi.md#deleteV3ProjectsIdSnippetsSnippetId) | **DELETE** /v3/projects/{id}/snippets/{snippet_id} | Delete a project snippet
[**deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId) | **DELETE** /v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id} | Delete a +awardables+ award emoji
[**deleteV3ProjectsIdStar**](ProjectsApi.md#deleteV3ProjectsIdStar) | **DELETE** /v3/projects/{id}/star | Unstar a project
[**deleteV3ProjectsIdTriggersToken**](ProjectsApi.md#deleteV3ProjectsIdTriggersToken) | **DELETE** /v3/projects/{id}/triggers/{token} | Delete a trigger
[**deleteV3ProjectsIdVariablesKey**](ProjectsApi.md#deleteV3ProjectsIdVariablesKey) | **DELETE** /v3/projects/{id}/variables/{key} | Delete an existing variable from a project
[**getV3Projects**](ProjectsApi.md#getV3Projects) | **GET** /v3/projects | Get a projects list for authenticated user
[**getV3ProjectsAll**](ProjectsApi.md#getV3ProjectsAll) | **GET** /v3/projects/all | Get all projects for admin user
[**getV3ProjectsId**](ProjectsApi.md#getV3ProjectsId) | **GET** /v3/projects/{id} | Get a single project
[**getV3ProjectsIdAccessRequests**](ProjectsApi.md#getV3ProjectsIdAccessRequests) | **GET** /v3/projects/{id}/access_requests | Gets a list of access requests for a project.
[**getV3ProjectsIdBoards**](ProjectsApi.md#getV3ProjectsIdBoards) | **GET** /v3/projects/{id}/boards | Get all project boards
[**getV3ProjectsIdBoardsBoardIdLists**](ProjectsApi.md#getV3ProjectsIdBoardsBoardIdLists) | **GET** /v3/projects/{id}/boards/{board_id}/lists | Get the lists of a project board
[**getV3ProjectsIdBoardsBoardIdListsListId**](ProjectsApi.md#getV3ProjectsIdBoardsBoardIdListsListId) | **GET** /v3/projects/{id}/boards/{board_id}/lists/{list_id} | Get a list of a project board
[**getV3ProjectsIdBuilds**](ProjectsApi.md#getV3ProjectsIdBuilds) | **GET** /v3/projects/{id}/builds | Get a project builds
[**getV3ProjectsIdBuildsArtifactsRefNameDownload**](ProjectsApi.md#getV3ProjectsIdBuildsArtifactsRefNameDownload) | **GET** /v3/projects/{id}/builds/artifacts/{ref_name}/download | Download the artifacts file from build
[**getV3ProjectsIdBuildsBuildId**](ProjectsApi.md#getV3ProjectsIdBuildsBuildId) | **GET** /v3/projects/{id}/builds/{build_id} | Get a specific build of a project
[**getV3ProjectsIdBuildsBuildIdArtifacts**](ProjectsApi.md#getV3ProjectsIdBuildsBuildIdArtifacts) | **GET** /v3/projects/{id}/builds/{build_id}/artifacts | Download the artifacts file from build
[**getV3ProjectsIdBuildsBuildIdTrace**](ProjectsApi.md#getV3ProjectsIdBuildsBuildIdTrace) | **GET** /v3/projects/{id}/builds/{build_id}/trace | Get a trace of a specific build of a project
[**getV3ProjectsIdDeployKeys**](ProjectsApi.md#getV3ProjectsIdDeployKeys) | **GET** /v3/projects/{id}/deploy_keys | Get a specific project&#39;s deploy keys
[**getV3ProjectsIdDeployKeysKeyId**](ProjectsApi.md#getV3ProjectsIdDeployKeysKeyId) | **GET** /v3/projects/{id}/deploy_keys/{key_id} | Get single deploy key
[**getV3ProjectsIdDeployments**](ProjectsApi.md#getV3ProjectsIdDeployments) | **GET** /v3/projects/{id}/deployments | Get all deployments of the project
[**getV3ProjectsIdDeploymentsDeploymentId**](ProjectsApi.md#getV3ProjectsIdDeploymentsDeploymentId) | **GET** /v3/projects/{id}/deployments/{deployment_id} | Gets a specific deployment
[**getV3ProjectsIdEnvironments**](ProjectsApi.md#getV3ProjectsIdEnvironments) | **GET** /v3/projects/{id}/environments | Get all environments of the project
[**getV3ProjectsIdEvents**](ProjectsApi.md#getV3ProjectsIdEvents) | **GET** /v3/projects/{id}/events | Get events for a single project
[**getV3ProjectsIdHooks**](ProjectsApi.md#getV3ProjectsIdHooks) | **GET** /v3/projects/{id}/hooks | Get project hooks
[**getV3ProjectsIdHooksHookId**](ProjectsApi.md#getV3ProjectsIdHooksHookId) | **GET** /v3/projects/{id}/hooks/{hook_id} | Get a project hook
[**getV3ProjectsIdIssues**](ProjectsApi.md#getV3ProjectsIdIssues) | **GET** /v3/projects/{id}/issues | Get a list of project issues
[**getV3ProjectsIdIssuesIssueId**](ProjectsApi.md#getV3ProjectsIdIssuesIssueId) | **GET** /v3/projects/{id}/issues/{issue_id} | Get a single project issue
[**getV3ProjectsIdIssuesIssueIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdIssuesIssueIdAwardEmoji) | **GET** /v3/projects/{id}/issues/{issue_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/issues/{issue_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji) | **GET** /v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdIssuesIssueIdTimeStats**](ProjectsApi.md#getV3ProjectsIdIssuesIssueIdTimeStats) | **GET** /v3/projects/{id}/issues/{issue_id}/time_stats | Show time stats for a project issue
[**getV3ProjectsIdIssuesNoteableIdNotes**](ProjectsApi.md#getV3ProjectsIdIssuesNoteableIdNotes) | **GET** /v3/projects/{id}/issues/{noteable_id}/notes | Get a list of project +noteable+ notes
[**getV3ProjectsIdIssuesNoteableIdNotesNoteId**](ProjectsApi.md#getV3ProjectsIdIssuesNoteableIdNotesNoteId) | **GET** /v3/projects/{id}/issues/{noteable_id}/notes/{note_id} | Get a single +noteable+ note
[**getV3ProjectsIdKeys**](ProjectsApi.md#getV3ProjectsIdKeys) | **GET** /v3/projects/{id}/keys | Get a specific project&#39;s deploy keys
[**getV3ProjectsIdKeysKeyId**](ProjectsApi.md#getV3ProjectsIdKeysKeyId) | **GET** /v3/projects/{id}/keys/{key_id} | Get single deploy key
[**getV3ProjectsIdLabels**](ProjectsApi.md#getV3ProjectsIdLabels) | **GET** /v3/projects/{id}/labels | Get all labels of the project
[**getV3ProjectsIdMembers**](ProjectsApi.md#getV3ProjectsIdMembers) | **GET** /v3/projects/{id}/members | Gets a list of group or project members viewable by the authenticated user.
[**getV3ProjectsIdMembersUserId**](ProjectsApi.md#getV3ProjectsIdMembersUserId) | **GET** /v3/projects/{id}/members/{user_id} | Gets a member of a group or project.
[**getV3ProjectsIdMergeRequestMergeRequestId**](ProjectsApi.md#getV3ProjectsIdMergeRequestMergeRequestId) | **GET** /v3/projects/{id}/merge_request/{merge_request_id} | Get a single merge request
[**getV3ProjectsIdMergeRequestMergeRequestIdChanges**](ProjectsApi.md#getV3ProjectsIdMergeRequestMergeRequestIdChanges) | **GET** /v3/projects/{id}/merge_request/{merge_request_id}/changes | Show the merge request changes
[**getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues**](ProjectsApi.md#getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues) | **GET** /v3/projects/{id}/merge_request/{merge_request_id}/closes_issues | List issues that will be closed on merge
[**getV3ProjectsIdMergeRequestMergeRequestIdComments**](ProjectsApi.md#getV3ProjectsIdMergeRequestMergeRequestIdComments) | **GET** /v3/projects/{id}/merge_request/{merge_request_id}/comments | Get the comments of a merge request
[**getV3ProjectsIdMergeRequestMergeRequestIdCommits**](ProjectsApi.md#getV3ProjectsIdMergeRequestMergeRequestIdCommits) | **GET** /v3/projects/{id}/merge_request/{merge_request_id}/commits | Get the commits of a merge request
[**getV3ProjectsIdMergeRequests**](ProjectsApi.md#getV3ProjectsIdMergeRequests) | **GET** /v3/projects/{id}/merge_requests | List merge requests
[**getV3ProjectsIdMergeRequestsMergeRequestId**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestId) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id} | Get a single merge request
[**getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdMergeRequestsMergeRequestIdChanges**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdChanges) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/changes | Show the merge request changes
[**getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/closes_issues | List issues that will be closed on merge
[**getV3ProjectsIdMergeRequestsMergeRequestIdComments**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdComments) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/comments | Get the comments of a merge request
[**getV3ProjectsIdMergeRequestsMergeRequestIdCommits**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdCommits) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/commits | Get the commits of a merge request
[**getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/time_stats | Show time stats for a project merge_request
[**getV3ProjectsIdMergeRequestsMergeRequestIdVersions**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdVersions) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/versions | Get a list of merge request diff versions
[**getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId**](ProjectsApi.md#getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId) | **GET** /v3/projects/{id}/merge_requests/{merge_request_id}/versions/{version_id} | Get a single merge request diff version
[**getV3ProjectsIdMergeRequestsNoteableIdNotes**](ProjectsApi.md#getV3ProjectsIdMergeRequestsNoteableIdNotes) | **GET** /v3/projects/{id}/merge_requests/{noteable_id}/notes | Get a list of project +noteable+ notes
[**getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId**](ProjectsApi.md#getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId) | **GET** /v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id} | Get a single +noteable+ note
[**getV3ProjectsIdMilestones**](ProjectsApi.md#getV3ProjectsIdMilestones) | **GET** /v3/projects/{id}/milestones | Get a list of project milestones
[**getV3ProjectsIdMilestonesMilestoneId**](ProjectsApi.md#getV3ProjectsIdMilestonesMilestoneId) | **GET** /v3/projects/{id}/milestones/{milestone_id} | Get a single project milestone
[**getV3ProjectsIdMilestonesMilestoneIdIssues**](ProjectsApi.md#getV3ProjectsIdMilestonesMilestoneIdIssues) | **GET** /v3/projects/{id}/milestones/{milestone_id}/issues | Get all issues for a single project milestone
[**getV3ProjectsIdNotificationSettings**](ProjectsApi.md#getV3ProjectsIdNotificationSettings) | **GET** /v3/projects/{id}/notification_settings | Get project level notification level settings, defaults to Global
[**getV3ProjectsIdPipelines**](ProjectsApi.md#getV3ProjectsIdPipelines) | **GET** /v3/projects/{id}/pipelines | Get all Pipelines of the project
[**getV3ProjectsIdPipelinesPipelineId**](ProjectsApi.md#getV3ProjectsIdPipelinesPipelineId) | **GET** /v3/projects/{id}/pipelines/{pipeline_id} | Gets a specific pipeline for the project
[**getV3ProjectsIdRepositoryArchive**](ProjectsApi.md#getV3ProjectsIdRepositoryArchive) | **GET** /v3/projects/{id}/repository/archive | Get an archive of the repository
[**getV3ProjectsIdRepositoryBlobsSha**](ProjectsApi.md#getV3ProjectsIdRepositoryBlobsSha) | **GET** /v3/projects/{id}/repository/blobs/{sha} | Get a raw file contents
[**getV3ProjectsIdRepositoryBranches**](ProjectsApi.md#getV3ProjectsIdRepositoryBranches) | **GET** /v3/projects/{id}/repository/branches | Get a project repository branches
[**getV3ProjectsIdRepositoryBranchesBranch**](ProjectsApi.md#getV3ProjectsIdRepositoryBranchesBranch) | **GET** /v3/projects/{id}/repository/branches/{branch} | Get a single branch
[**getV3ProjectsIdRepositoryCommits**](ProjectsApi.md#getV3ProjectsIdRepositoryCommits) | **GET** /v3/projects/{id}/repository/commits | Get a project repository commits
[**getV3ProjectsIdRepositoryCommitsSha**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsSha) | **GET** /v3/projects/{id}/repository/commits/{sha} | Get a specific commit of a project
[**getV3ProjectsIdRepositoryCommitsShaBlob**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsShaBlob) | **GET** /v3/projects/{id}/repository/commits/{sha}/blob | Get a raw file contents
[**getV3ProjectsIdRepositoryCommitsShaBuilds**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsShaBuilds) | **GET** /v3/projects/{id}/repository/commits/{sha}/builds | Get builds for a specific commit of a project
[**getV3ProjectsIdRepositoryCommitsShaComments**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsShaComments) | **GET** /v3/projects/{id}/repository/commits/{sha}/comments | Get a commit&#39;s comments
[**getV3ProjectsIdRepositoryCommitsShaDiff**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsShaDiff) | **GET** /v3/projects/{id}/repository/commits/{sha}/diff | Get the diff for a specific commit of a project
[**getV3ProjectsIdRepositoryCommitsShaStatuses**](ProjectsApi.md#getV3ProjectsIdRepositoryCommitsShaStatuses) | **GET** /v3/projects/{id}/repository/commits/{sha}/statuses | Get a commit&#39;s statuses
[**getV3ProjectsIdRepositoryCompare**](ProjectsApi.md#getV3ProjectsIdRepositoryCompare) | **GET** /v3/projects/{id}/repository/compare | Compare two branches, tags, or commits
[**getV3ProjectsIdRepositoryContributors**](ProjectsApi.md#getV3ProjectsIdRepositoryContributors) | **GET** /v3/projects/{id}/repository/contributors | Get repository contributors
[**getV3ProjectsIdRepositoryFiles**](ProjectsApi.md#getV3ProjectsIdRepositoryFiles) | **GET** /v3/projects/{id}/repository/files | Get a file from repository
[**getV3ProjectsIdRepositoryRawBlobsSha**](ProjectsApi.md#getV3ProjectsIdRepositoryRawBlobsSha) | **GET** /v3/projects/{id}/repository/raw_blobs/{sha} | Get a raw blob contents by blob sha
[**getV3ProjectsIdRepositoryTags**](ProjectsApi.md#getV3ProjectsIdRepositoryTags) | **GET** /v3/projects/{id}/repository/tags | Get a project repository tags
[**getV3ProjectsIdRepositoryTagsTagName**](ProjectsApi.md#getV3ProjectsIdRepositoryTagsTagName) | **GET** /v3/projects/{id}/repository/tags/{tag_name} | Get a single repository tag
[**getV3ProjectsIdRepositoryTree**](ProjectsApi.md#getV3ProjectsIdRepositoryTree) | **GET** /v3/projects/{id}/repository/tree | Get a project repository tree
[**getV3ProjectsIdRunners**](ProjectsApi.md#getV3ProjectsIdRunners) | **GET** /v3/projects/{id}/runners | Get runners available for project
[**getV3ProjectsIdServicesServiceSlug**](ProjectsApi.md#getV3ProjectsIdServicesServiceSlug) | **GET** /v3/projects/{id}/services/{service_slug} | Get the service settings for project
[**getV3ProjectsIdSnippets**](ProjectsApi.md#getV3ProjectsIdSnippets) | **GET** /v3/projects/{id}/snippets | Get all project snippets
[**getV3ProjectsIdSnippetsNoteableIdNotes**](ProjectsApi.md#getV3ProjectsIdSnippetsNoteableIdNotes) | **GET** /v3/projects/{id}/snippets/{noteable_id}/notes | Get a list of project +noteable+ notes
[**getV3ProjectsIdSnippetsNoteableIdNotesNoteId**](ProjectsApi.md#getV3ProjectsIdSnippetsNoteableIdNotesNoteId) | **GET** /v3/projects/{id}/snippets/{noteable_id}/notes/{note_id} | Get a single +noteable+ note
[**getV3ProjectsIdSnippetsSnippetId**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetId) | **GET** /v3/projects/{id}/snippets/{snippet_id} | Get a single project snippet
[**getV3ProjectsIdSnippetsSnippetIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetIdAwardEmoji) | **GET** /v3/projects/{id}/snippets/{snippet_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji) | **GET** /v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji | Get a list of project +awardable+ award emoji
[**getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId) | **GET** /v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id} | Get a specific award emoji
[**getV3ProjectsIdSnippetsSnippetIdRaw**](ProjectsApi.md#getV3ProjectsIdSnippetsSnippetIdRaw) | **GET** /v3/projects/{id}/snippets/{snippet_id}/raw | Get a raw project snippet
[**getV3ProjectsIdTriggers**](ProjectsApi.md#getV3ProjectsIdTriggers) | **GET** /v3/projects/{id}/triggers | Get triggers list
[**getV3ProjectsIdTriggersToken**](ProjectsApi.md#getV3ProjectsIdTriggersToken) | **GET** /v3/projects/{id}/triggers/{token} | Get specific trigger of a project
[**getV3ProjectsIdUsers**](ProjectsApi.md#getV3ProjectsIdUsers) | **GET** /v3/projects/{id}/users | Get the users list of a project
[**getV3ProjectsIdVariables**](ProjectsApi.md#getV3ProjectsIdVariables) | **GET** /v3/projects/{id}/variables | Get project variables
[**getV3ProjectsIdVariablesKey**](ProjectsApi.md#getV3ProjectsIdVariablesKey) | **GET** /v3/projects/{id}/variables/{key} | Get a specific variable from a project
[**getV3ProjectsOwned**](ProjectsApi.md#getV3ProjectsOwned) | **GET** /v3/projects/owned | Get an owned projects list for authenticated user
[**getV3ProjectsSearchQuery**](ProjectsApi.md#getV3ProjectsSearchQuery) | **GET** /v3/projects/search/{query} | Search for projects the current user has access to
[**getV3ProjectsStarred**](ProjectsApi.md#getV3ProjectsStarred) | **GET** /v3/projects/starred | Gets starred project for the authenticated user
[**getV3ProjectsVisible**](ProjectsApi.md#getV3ProjectsVisible) | **GET** /v3/projects/visible | Get a list of visible projects for authenticated user
[**postV3Projects**](ProjectsApi.md#postV3Projects) | **POST** /v3/projects | Create new project
[**postV3ProjectsForkId**](ProjectsApi.md#postV3ProjectsForkId) | **POST** /v3/projects/fork/{id} | Fork new project for the current user or provided namespace.
[**postV3ProjectsIdAccessRequests**](ProjectsApi.md#postV3ProjectsIdAccessRequests) | **POST** /v3/projects/{id}/access_requests | Requests access for the authenticated user to a project.
[**postV3ProjectsIdArchive**](ProjectsApi.md#postV3ProjectsIdArchive) | **POST** /v3/projects/{id}/archive | Archive a project
[**postV3ProjectsIdBoardsBoardIdLists**](ProjectsApi.md#postV3ProjectsIdBoardsBoardIdLists) | **POST** /v3/projects/{id}/boards/{board_id}/lists | Create a new board list
[**postV3ProjectsIdBuildsBuildIdArtifactsKeep**](ProjectsApi.md#postV3ProjectsIdBuildsBuildIdArtifactsKeep) | **POST** /v3/projects/{id}/builds/{build_id}/artifacts/keep | Keep the artifacts to prevent them from being deleted
[**postV3ProjectsIdBuildsBuildIdCancel**](ProjectsApi.md#postV3ProjectsIdBuildsBuildIdCancel) | **POST** /v3/projects/{id}/builds/{build_id}/cancel | Cancel a specific build of a project
[**postV3ProjectsIdBuildsBuildIdErase**](ProjectsApi.md#postV3ProjectsIdBuildsBuildIdErase) | **POST** /v3/projects/{id}/builds/{build_id}/erase | Erase build (remove artifacts and build trace)
[**postV3ProjectsIdBuildsBuildIdPlay**](ProjectsApi.md#postV3ProjectsIdBuildsBuildIdPlay) | **POST** /v3/projects/{id}/builds/{build_id}/play | Trigger a manual build
[**postV3ProjectsIdBuildsBuildIdRetry**](ProjectsApi.md#postV3ProjectsIdBuildsBuildIdRetry) | **POST** /v3/projects/{id}/builds/{build_id}/retry | Retry a specific build of a project
[**postV3ProjectsIdDeployKeys**](ProjectsApi.md#postV3ProjectsIdDeployKeys) | **POST** /v3/projects/{id}/deploy_keys | Add new deploy key to currently authenticated user
[**postV3ProjectsIdDeployKeysKeyIdEnable**](ProjectsApi.md#postV3ProjectsIdDeployKeysKeyIdEnable) | **POST** /v3/projects/{id}/deploy_keys/{key_id}/enable | Enable a deploy key for a project
[**postV3ProjectsIdEnvironments**](ProjectsApi.md#postV3ProjectsIdEnvironments) | **POST** /v3/projects/{id}/environments | Creates a new environment
[**postV3ProjectsIdForkForkedFromId**](ProjectsApi.md#postV3ProjectsIdForkForkedFromId) | **POST** /v3/projects/{id}/fork/{forked_from_id} | Mark this project as forked from another
[**postV3ProjectsIdHooks**](ProjectsApi.md#postV3ProjectsIdHooks) | **POST** /v3/projects/{id}/hooks | Add hook to project
[**postV3ProjectsIdIssues**](ProjectsApi.md#postV3ProjectsIdIssues) | **POST** /v3/projects/{id}/issues | Create a new project issue
[**postV3ProjectsIdIssuesIssueIdAddSpentTime**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdAddSpentTime) | **POST** /v3/projects/{id}/issues/{issue_id}/add_spent_time | Add spent time for a project issue
[**postV3ProjectsIdIssuesIssueIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdAwardEmoji) | **POST** /v3/projects/{id}/issues/{issue_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdIssuesIssueIdMove**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdMove) | **POST** /v3/projects/{id}/issues/{issue_id}/move | Move an existing issue
[**postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji) | **POST** /v3/projects/{id}/issues/{issue_id}/notes/{note_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdIssuesIssueIdResetSpentTime**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdResetSpentTime) | **POST** /v3/projects/{id}/issues/{issue_id}/reset_spent_time | Reset spent time for a project issue
[**postV3ProjectsIdIssuesIssueIdResetTimeEstimate**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdResetTimeEstimate) | **POST** /v3/projects/{id}/issues/{issue_id}/reset_time_estimate | Reset the time estimate for a project issue
[**postV3ProjectsIdIssuesIssueIdTimeEstimate**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdTimeEstimate) | **POST** /v3/projects/{id}/issues/{issue_id}/time_estimate | Set a time estimate for a project issue
[**postV3ProjectsIdIssuesIssueIdTodo**](ProjectsApi.md#postV3ProjectsIdIssuesIssueIdTodo) | **POST** /v3/projects/{id}/issues/{issue_id}/todo | Create a todo on an issuable
[**postV3ProjectsIdIssuesNoteableIdNotes**](ProjectsApi.md#postV3ProjectsIdIssuesNoteableIdNotes) | **POST** /v3/projects/{id}/issues/{noteable_id}/notes | Create a new +noteable+ note
[**postV3ProjectsIdIssuesSubscribableIdSubscription**](ProjectsApi.md#postV3ProjectsIdIssuesSubscribableIdSubscription) | **POST** /v3/projects/{id}/issues/{subscribable_id}/subscription | Subscribe to a resource
[**postV3ProjectsIdKeys**](ProjectsApi.md#postV3ProjectsIdKeys) | **POST** /v3/projects/{id}/keys | Add new deploy key to currently authenticated user
[**postV3ProjectsIdKeysKeyIdEnable**](ProjectsApi.md#postV3ProjectsIdKeysKeyIdEnable) | **POST** /v3/projects/{id}/keys/{key_id}/enable | Enable a deploy key for a project
[**postV3ProjectsIdLabels**](ProjectsApi.md#postV3ProjectsIdLabels) | **POST** /v3/projects/{id}/labels | Create a new label
[**postV3ProjectsIdLabelsSubscribableIdSubscription**](ProjectsApi.md#postV3ProjectsIdLabelsSubscribableIdSubscription) | **POST** /v3/projects/{id}/labels/{subscribable_id}/subscription | Subscribe to a resource
[**postV3ProjectsIdMembers**](ProjectsApi.md#postV3ProjectsIdMembers) | **POST** /v3/projects/{id}/members | Adds a member to a group or project.
[**postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds**](ProjectsApi.md#postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds) | **POST** /v3/projects/{id}/merge_request/{merge_request_id}/cancel_merge_when_build_succeeds | Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled
[**postV3ProjectsIdMergeRequestMergeRequestIdComments**](ProjectsApi.md#postV3ProjectsIdMergeRequestMergeRequestIdComments) | **POST** /v3/projects/{id}/merge_request/{merge_request_id}/comments | Post a comment to a merge request
[**postV3ProjectsIdMergeRequestSubscribableIdSubscription**](ProjectsApi.md#postV3ProjectsIdMergeRequestSubscribableIdSubscription) | **POST** /v3/projects/{id}/merge_request/{subscribable_id}/subscription | Subscribe to a resource
[**postV3ProjectsIdMergeRequests**](ProjectsApi.md#postV3ProjectsIdMergeRequests) | **POST** /v3/projects/{id}/merge_requests | Create a merge request
[**postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/add_spent_time | Add spent time for a project merge_request
[**postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/cancel_merge_when_build_succeeds | Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled
[**postV3ProjectsIdMergeRequestsMergeRequestIdComments**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdComments) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/comments | Post a comment to a merge request
[**postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/notes/{note_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/reset_spent_time | Reset spent time for a project merge_request
[**postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/reset_time_estimate | Reset the time estimate for a project merge_request
[**postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/time_estimate | Set a time estimate for a project merge_request
[**postV3ProjectsIdMergeRequestsMergeRequestIdTodo**](ProjectsApi.md#postV3ProjectsIdMergeRequestsMergeRequestIdTodo) | **POST** /v3/projects/{id}/merge_requests/{merge_request_id}/todo | Create a todo on an issuable
[**postV3ProjectsIdMergeRequestsNoteableIdNotes**](ProjectsApi.md#postV3ProjectsIdMergeRequestsNoteableIdNotes) | **POST** /v3/projects/{id}/merge_requests/{noteable_id}/notes | Create a new +noteable+ note
[**postV3ProjectsIdMergeRequestsSubscribableIdSubscription**](ProjectsApi.md#postV3ProjectsIdMergeRequestsSubscribableIdSubscription) | **POST** /v3/projects/{id}/merge_requests/{subscribable_id}/subscription | Subscribe to a resource
[**postV3ProjectsIdMilestones**](ProjectsApi.md#postV3ProjectsIdMilestones) | **POST** /v3/projects/{id}/milestones | Create a new project milestone
[**postV3ProjectsIdPipeline**](ProjectsApi.md#postV3ProjectsIdPipeline) | **POST** /v3/projects/{id}/pipeline | Create a new pipeline
[**postV3ProjectsIdPipelinesPipelineIdCancel**](ProjectsApi.md#postV3ProjectsIdPipelinesPipelineIdCancel) | **POST** /v3/projects/{id}/pipelines/{pipeline_id}/cancel | Cancel all builds in the pipeline
[**postV3ProjectsIdPipelinesPipelineIdRetry**](ProjectsApi.md#postV3ProjectsIdPipelinesPipelineIdRetry) | **POST** /v3/projects/{id}/pipelines/{pipeline_id}/retry | Retry failed builds in the pipeline
[**postV3ProjectsIdRefReftriggerBuilds**](ProjectsApi.md#postV3ProjectsIdRefReftriggerBuilds) | **POST** /v3/projects/{id}/(ref/{ref}/)trigger/builds | Trigger a GitLab project build
[**postV3ProjectsIdRepositoryBranches**](ProjectsApi.md#postV3ProjectsIdRepositoryBranches) | **POST** /v3/projects/{id}/repository/branches | Create branch
[**postV3ProjectsIdRepositoryCommits**](ProjectsApi.md#postV3ProjectsIdRepositoryCommits) | **POST** /v3/projects/{id}/repository/commits | Commit multiple file changes as one commit
[**postV3ProjectsIdRepositoryCommitsShaCherryPick**](ProjectsApi.md#postV3ProjectsIdRepositoryCommitsShaCherryPick) | **POST** /v3/projects/{id}/repository/commits/{sha}/cherry_pick | Cherry pick commit into a branch
[**postV3ProjectsIdRepositoryCommitsShaComments**](ProjectsApi.md#postV3ProjectsIdRepositoryCommitsShaComments) | **POST** /v3/projects/{id}/repository/commits/{sha}/comments | Post comment to commit
[**postV3ProjectsIdRepositoryFiles**](ProjectsApi.md#postV3ProjectsIdRepositoryFiles) | **POST** /v3/projects/{id}/repository/files | Create new file in repository
[**postV3ProjectsIdRepositoryTags**](ProjectsApi.md#postV3ProjectsIdRepositoryTags) | **POST** /v3/projects/{id}/repository/tags | Create a new repository tag
[**postV3ProjectsIdRepositoryTagsTagNameRelease**](ProjectsApi.md#postV3ProjectsIdRepositoryTagsTagNameRelease) | **POST** /v3/projects/{id}/repository/tags/{tag_name}/release | Add a release note to a tag
[**postV3ProjectsIdRunners**](ProjectsApi.md#postV3ProjectsIdRunners) | **POST** /v3/projects/{id}/runners | Enable a runner for a project
[**postV3ProjectsIdServicesMattermostSlashCommandsTrigger**](ProjectsApi.md#postV3ProjectsIdServicesMattermostSlashCommandsTrigger) | **POST** /v3/projects/{id}/services/mattermost_slash_commands/trigger | Trigger a slash command for mattermost-slash-commands
[**postV3ProjectsIdServicesSlackSlashCommandsTrigger**](ProjectsApi.md#postV3ProjectsIdServicesSlackSlashCommandsTrigger) | **POST** /v3/projects/{id}/services/slack_slash_commands/trigger | Trigger a slash command for slack-slash-commands
[**postV3ProjectsIdShare**](ProjectsApi.md#postV3ProjectsIdShare) | **POST** /v3/projects/{id}/share | Share the project with a group
[**postV3ProjectsIdSnippets**](ProjectsApi.md#postV3ProjectsIdSnippets) | **POST** /v3/projects/{id}/snippets | Create a new project snippet
[**postV3ProjectsIdSnippetsNoteableIdNotes**](ProjectsApi.md#postV3ProjectsIdSnippetsNoteableIdNotes) | **POST** /v3/projects/{id}/snippets/{noteable_id}/notes | Create a new +noteable+ note
[**postV3ProjectsIdSnippetsSnippetIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdSnippetsSnippetIdAwardEmoji) | **POST** /v3/projects/{id}/snippets/{snippet_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji**](ProjectsApi.md#postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji) | **POST** /v3/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji | Award a new Emoji
[**postV3ProjectsIdStar**](ProjectsApi.md#postV3ProjectsIdStar) | **POST** /v3/projects/{id}/star | Star a project
[**postV3ProjectsIdStatusesSha**](ProjectsApi.md#postV3ProjectsIdStatusesSha) | **POST** /v3/projects/{id}/statuses/{sha} | Post status to a commit
[**postV3ProjectsIdTriggers**](ProjectsApi.md#postV3ProjectsIdTriggers) | **POST** /v3/projects/{id}/triggers | Create a trigger
[**postV3ProjectsIdUnarchive**](ProjectsApi.md#postV3ProjectsIdUnarchive) | **POST** /v3/projects/{id}/unarchive | Unarchive a project
[**postV3ProjectsIdUploads**](ProjectsApi.md#postV3ProjectsIdUploads) | **POST** /v3/projects/{id}/uploads | Upload a file
[**postV3ProjectsIdVariables**](ProjectsApi.md#postV3ProjectsIdVariables) | **POST** /v3/projects/{id}/variables | Create a new variable in a project
[**postV3ProjectsUserUserId**](ProjectsApi.md#postV3ProjectsUserUserId) | **POST** /v3/projects/user/{user_id} | Create new project for a specified user. Only available to admin users.
[**putV3ProjectsId**](ProjectsApi.md#putV3ProjectsId) | **PUT** /v3/projects/{id} | Update an existing project
[**putV3ProjectsIdAccessRequestsUserIdApprove**](ProjectsApi.md#putV3ProjectsIdAccessRequestsUserIdApprove) | **PUT** /v3/projects/{id}/access_requests/{user_id}/approve | Approves an access request for the given user.
[**putV3ProjectsIdBoardsBoardIdListsListId**](ProjectsApi.md#putV3ProjectsIdBoardsBoardIdListsListId) | **PUT** /v3/projects/{id}/boards/{board_id}/lists/{list_id} | Moves a board list to a new position
[**putV3ProjectsIdEnvironmentsEnvironmentId**](ProjectsApi.md#putV3ProjectsIdEnvironmentsEnvironmentId) | **PUT** /v3/projects/{id}/environments/{environment_id} | Updates an existing environment
[**putV3ProjectsIdHooksHookId**](ProjectsApi.md#putV3ProjectsIdHooksHookId) | **PUT** /v3/projects/{id}/hooks/{hook_id} | Update an existing project hook
[**putV3ProjectsIdIssuesIssueId**](ProjectsApi.md#putV3ProjectsIdIssuesIssueId) | **PUT** /v3/projects/{id}/issues/{issue_id} | Update an existing issue
[**putV3ProjectsIdIssuesNoteableIdNotesNoteId**](ProjectsApi.md#putV3ProjectsIdIssuesNoteableIdNotesNoteId) | **PUT** /v3/projects/{id}/issues/{noteable_id}/notes/{note_id} | Update an existing +noteable+ note
[**putV3ProjectsIdLabels**](ProjectsApi.md#putV3ProjectsIdLabels) | **PUT** /v3/projects/{id}/labels | Update an existing label. At least one optional parameter is required.
[**putV3ProjectsIdMembersUserId**](ProjectsApi.md#putV3ProjectsIdMembersUserId) | **PUT** /v3/projects/{id}/members/{user_id} | Updates a member of a group or project.
[**putV3ProjectsIdMergeRequestMergeRequestId**](ProjectsApi.md#putV3ProjectsIdMergeRequestMergeRequestId) | **PUT** /v3/projects/{id}/merge_request/{merge_request_id} | Update a merge request
[**putV3ProjectsIdMergeRequestMergeRequestIdMerge**](ProjectsApi.md#putV3ProjectsIdMergeRequestMergeRequestIdMerge) | **PUT** /v3/projects/{id}/merge_request/{merge_request_id}/merge | Merge a merge request
[**putV3ProjectsIdMergeRequestsMergeRequestId**](ProjectsApi.md#putV3ProjectsIdMergeRequestsMergeRequestId) | **PUT** /v3/projects/{id}/merge_requests/{merge_request_id} | Update a merge request
[**putV3ProjectsIdMergeRequestsMergeRequestIdMerge**](ProjectsApi.md#putV3ProjectsIdMergeRequestsMergeRequestIdMerge) | **PUT** /v3/projects/{id}/merge_requests/{merge_request_id}/merge | Merge a merge request
[**putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId**](ProjectsApi.md#putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId) | **PUT** /v3/projects/{id}/merge_requests/{noteable_id}/notes/{note_id} | Update an existing +noteable+ note
[**putV3ProjectsIdMilestonesMilestoneId**](ProjectsApi.md#putV3ProjectsIdMilestonesMilestoneId) | **PUT** /v3/projects/{id}/milestones/{milestone_id} | Update an existing project milestone
[**putV3ProjectsIdNotificationSettings**](ProjectsApi.md#putV3ProjectsIdNotificationSettings) | **PUT** /v3/projects/{id}/notification_settings | Update project level notification level settings, defaults to Global
[**putV3ProjectsIdRepositoryBranchesBranchProtect**](ProjectsApi.md#putV3ProjectsIdRepositoryBranchesBranchProtect) | **PUT** /v3/projects/{id}/repository/branches/{branch}/protect | Protect a single branch
[**putV3ProjectsIdRepositoryBranchesBranchUnprotect**](ProjectsApi.md#putV3ProjectsIdRepositoryBranchesBranchUnprotect) | **PUT** /v3/projects/{id}/repository/branches/{branch}/unprotect | Unprotect a single branch
[**putV3ProjectsIdRepositoryFiles**](ProjectsApi.md#putV3ProjectsIdRepositoryFiles) | **PUT** /v3/projects/{id}/repository/files | Update existing file in repository
[**putV3ProjectsIdRepositoryTagsTagNameRelease**](ProjectsApi.md#putV3ProjectsIdRepositoryTagsTagNameRelease) | **PUT** /v3/projects/{id}/repository/tags/{tag_name}/release | Update a tag&#39;s release note
[**putV3ProjectsIdServicesAsana**](ProjectsApi.md#putV3ProjectsIdServicesAsana) | **PUT** /v3/projects/{id}/services/asana | Set asana service for project
[**putV3ProjectsIdServicesAssembla**](ProjectsApi.md#putV3ProjectsIdServicesAssembla) | **PUT** /v3/projects/{id}/services/assembla | Set assembla service for project
[**putV3ProjectsIdServicesBamboo**](ProjectsApi.md#putV3ProjectsIdServicesBamboo) | **PUT** /v3/projects/{id}/services/bamboo | Set bamboo service for project
[**putV3ProjectsIdServicesBugzilla**](ProjectsApi.md#putV3ProjectsIdServicesBugzilla) | **PUT** /v3/projects/{id}/services/bugzilla | Set bugzilla service for project
[**putV3ProjectsIdServicesBuildkite**](ProjectsApi.md#putV3ProjectsIdServicesBuildkite) | **PUT** /v3/projects/{id}/services/buildkite | Set buildkite service for project
[**putV3ProjectsIdServicesBuildsEmail**](ProjectsApi.md#putV3ProjectsIdServicesBuildsEmail) | **PUT** /v3/projects/{id}/services/builds-email | Set builds-email service for project
[**putV3ProjectsIdServicesCampfire**](ProjectsApi.md#putV3ProjectsIdServicesCampfire) | **PUT** /v3/projects/{id}/services/campfire | Set campfire service for project
[**putV3ProjectsIdServicesCustomIssueTracker**](ProjectsApi.md#putV3ProjectsIdServicesCustomIssueTracker) | **PUT** /v3/projects/{id}/services/custom-issue-tracker | Set custom-issue-tracker service for project
[**putV3ProjectsIdServicesDroneCi**](ProjectsApi.md#putV3ProjectsIdServicesDroneCi) | **PUT** /v3/projects/{id}/services/drone-ci | Set drone-ci service for project
[**putV3ProjectsIdServicesEmailsOnPush**](ProjectsApi.md#putV3ProjectsIdServicesEmailsOnPush) | **PUT** /v3/projects/{id}/services/emails-on-push | Set emails-on-push service for project
[**putV3ProjectsIdServicesExternalWiki**](ProjectsApi.md#putV3ProjectsIdServicesExternalWiki) | **PUT** /v3/projects/{id}/services/external-wiki | Set external-wiki service for project
[**putV3ProjectsIdServicesFlowdock**](ProjectsApi.md#putV3ProjectsIdServicesFlowdock) | **PUT** /v3/projects/{id}/services/flowdock | Set flowdock service for project
[**putV3ProjectsIdServicesGemnasium**](ProjectsApi.md#putV3ProjectsIdServicesGemnasium) | **PUT** /v3/projects/{id}/services/gemnasium | Set gemnasium service for project
[**putV3ProjectsIdServicesHipchat**](ProjectsApi.md#putV3ProjectsIdServicesHipchat) | **PUT** /v3/projects/{id}/services/hipchat | Set hipchat service for project
[**putV3ProjectsIdServicesIrker**](ProjectsApi.md#putV3ProjectsIdServicesIrker) | **PUT** /v3/projects/{id}/services/irker | Set irker service for project
[**putV3ProjectsIdServicesJira**](ProjectsApi.md#putV3ProjectsIdServicesJira) | **PUT** /v3/projects/{id}/services/jira | Set jira service for project
[**putV3ProjectsIdServicesKubernetes**](ProjectsApi.md#putV3ProjectsIdServicesKubernetes) | **PUT** /v3/projects/{id}/services/kubernetes | Set kubernetes service for project
[**putV3ProjectsIdServicesMattermost**](ProjectsApi.md#putV3ProjectsIdServicesMattermost) | **PUT** /v3/projects/{id}/services/mattermost | Set mattermost service for project
[**putV3ProjectsIdServicesMattermostSlashCommands**](ProjectsApi.md#putV3ProjectsIdServicesMattermostSlashCommands) | **PUT** /v3/projects/{id}/services/mattermost-slash-commands | Set mattermost-slash-commands service for project
[**putV3ProjectsIdServicesPipelinesEmail**](ProjectsApi.md#putV3ProjectsIdServicesPipelinesEmail) | **PUT** /v3/projects/{id}/services/pipelines-email | Set pipelines-email service for project
[**putV3ProjectsIdServicesPivotaltracker**](ProjectsApi.md#putV3ProjectsIdServicesPivotaltracker) | **PUT** /v3/projects/{id}/services/pivotaltracker | Set pivotaltracker service for project
[**putV3ProjectsIdServicesPushover**](ProjectsApi.md#putV3ProjectsIdServicesPushover) | **PUT** /v3/projects/{id}/services/pushover | Set pushover service for project
[**putV3ProjectsIdServicesRedmine**](ProjectsApi.md#putV3ProjectsIdServicesRedmine) | **PUT** /v3/projects/{id}/services/redmine | Set redmine service for project
[**putV3ProjectsIdServicesSlack**](ProjectsApi.md#putV3ProjectsIdServicesSlack) | **PUT** /v3/projects/{id}/services/slack | Set slack service for project
[**putV3ProjectsIdServicesSlackSlashCommands**](ProjectsApi.md#putV3ProjectsIdServicesSlackSlashCommands) | **PUT** /v3/projects/{id}/services/slack-slash-commands | Set slack-slash-commands service for project
[**putV3ProjectsIdServicesTeamcity**](ProjectsApi.md#putV3ProjectsIdServicesTeamcity) | **PUT** /v3/projects/{id}/services/teamcity | Set teamcity service for project
[**putV3ProjectsIdSnippetsNoteableIdNotesNoteId**](ProjectsApi.md#putV3ProjectsIdSnippetsNoteableIdNotesNoteId) | **PUT** /v3/projects/{id}/snippets/{noteable_id}/notes/{note_id} | Update an existing +noteable+ note
[**putV3ProjectsIdSnippetsSnippetId**](ProjectsApi.md#putV3ProjectsIdSnippetsSnippetId) | **PUT** /v3/projects/{id}/snippets/{snippet_id} | Update an existing project snippet
[**putV3ProjectsIdVariablesKey**](ProjectsApi.md#putV3ProjectsIdVariablesKey) | **PUT** /v3/projects/{id}/variables/{key} | Update an existing variable from a project



## deleteV3ProjectsId

> deleteV3ProjectsId(id)

Remove a project

Remove a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.deleteV3ProjectsId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdAccessRequestsUserId

> deleteV3ProjectsIdAccessRequestsUserId(id, userId)

Denies an access request for the given user.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let userId = 56; // Number | The user ID of the access requester
apiInstance.deleteV3ProjectsIdAccessRequestsUserId(id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **userId** | **Number**| The user ID of the access requester | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdBoardsBoardIdListsListId

> Array deleteV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId)

Delete a board list

This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let boardId = 56; // Number | The ID of a board
let listId = 56; // Number | The ID of a board list
apiInstance.deleteV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **boardId** | **Number**| The ID of a board | 
 **listId** | **Number**| The ID of a board list | 

### Return type

**Array**

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdDeployKeysKeyId

> SSHKey deleteV3ProjectsIdDeployKeysKeyId(id, keyId)

Delete deploy key for a project

Delete deploy key for a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyId(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdDeployKeysKeyIdDisable

> SSHKey deleteV3ProjectsIdDeployKeysKeyIdDisable(id, keyId)

Disable a deploy key for a project

This feature was added in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyIdDisable(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdEnvironmentsEnvironmentId

> Environment deleteV3ProjectsIdEnvironmentsEnvironmentId(id, environmentId)

Deletes an existing environment

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let environmentId = 56; // Number | The environment ID
apiInstance.deleteV3ProjectsIdEnvironmentsEnvironmentId(id, environmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **environmentId** | **Number**| The environment ID | 

### Return type

[**Environment**](Environment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdFork

> deleteV3ProjectsIdFork(id)

Remove a forked_from relationship

Remove a forked_from relationship

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.deleteV3ProjectsIdFork(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdHooksHookId

> ProjectHook deleteV3ProjectsIdHooksHookId(id, hookId)

Deletes project hook

Deletes project hook

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let hookId = 56; // Number | The ID of the hook to delete
apiInstance.deleteV3ProjectsIdHooksHookId(id, hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **hookId** | **Number**| The ID of the hook to delete | 

### Return type

[**ProjectHook**](ProjectHook.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdIssuesIssueId

> deleteV3ProjectsIdIssuesIssueId(id, issueId)

Delete a project issue

Delete a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
apiInstance.deleteV3ProjectsIdIssuesIssueId(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId, id, issueId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let issueId = 56; // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId, id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId, id, issueId, noteId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let issueId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId, id, issueId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdIssuesNoteableIdNotesNoteId

> Note deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteableId, noteId)

Delete a +noteable+ note

Delete a +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
apiInstance.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteableId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdIssuesSubscribableIdSubscription

> Issue deleteV3ProjectsIdIssuesSubscribableIdSubscription(id, subscribableId)

Unsubscribe from a resource

Unsubscribe from a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.deleteV3ProjectsIdIssuesSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdKeysKeyId

> SSHKey deleteV3ProjectsIdKeysKeyId(id, keyId)

Delete deploy key for a project

Delete deploy key for a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyId(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdKeysKeyIdDisable

> SSHKey deleteV3ProjectsIdKeysKeyIdDisable(id, keyId)

Disable a deploy key for a project

This feature was added in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyIdDisable(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdLabels

> Label deleteV3ProjectsIdLabels(id, name)

Delete an existing label

Delete an existing label

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let name = "name_example"; // String | The name of the label to be deleted
apiInstance.deleteV3ProjectsIdLabels(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **name** | **String**| The name of the label to be deleted | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdLabelsSubscribableIdSubscription

> Label deleteV3ProjectsIdLabelsSubscribableIdSubscription(id, subscribableId)

Unsubscribe from a resource

Unsubscribe from a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.deleteV3ProjectsIdLabelsSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdMembersUserId

> deleteV3ProjectsIdMembersUserId(id, userId)

Removes a user from a group or project.

Removes a user from a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let userId = 56; // Number | The user ID of the member
apiInstance.deleteV3ProjectsIdMembersUserId(id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **userId** | **Number**| The user ID of the member | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdMergeRequestSubscribableIdSubscription

> MergeRequest deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(id, subscribableId)

Unsubscribe from a resource

Unsubscribe from a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdMergeRequestsMergeRequestId

> deleteV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId)

Delete a merge request

Delete a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a merge request
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a merge request | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId, id, mergeRequestId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId, id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId, id, mergeRequestId, noteId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId, id, mergeRequestId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId

> Note deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteableId, noteId)

Delete a +noteable+ note

Delete a +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
apiInstance.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteableId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription

> MergeRequest deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(id, subscribableId)

Unsubscribe from a resource

Unsubscribe from a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdRepositoryBranchesBranch

> deleteV3ProjectsIdRepositoryBranchesBranch(id, branch)

Delete a branch

Delete a branch

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let branch = "branch_example"; // String | The name of the branch
apiInstance.deleteV3ProjectsIdRepositoryBranchesBranch(id, branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **branch** | **String**| The name of the branch | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdRepositoryFiles

> deleteV3ProjectsIdRepositoryFiles(id, filePath, branchName, commitMessage, opts)

Delete an existing file in repository

Delete an existing file in repository

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let filePath = "filePath_example"; // String | The path to new file. Ex. lib/class.rb
let branchName = "branchName_example"; // String | The name of branch
let commitMessage = "commitMessage_example"; // String | Commit Message
let opts = {
  'authorEmail': "authorEmail_example", // String | The email of the author
  'authorName': "authorName_example" // String | The name of the author
};
apiInstance.deleteV3ProjectsIdRepositoryFiles(id, filePath, branchName, commitMessage, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **filePath** | **String**| The path to new file. Ex. lib/class.rb | 
 **branchName** | **String**| The name of branch | 
 **commitMessage** | **String**| Commit Message | 
 **authorEmail** | **String**| The email of the author | [optional] 
 **authorName** | **String**| The name of the author | [optional] 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdRepositoryMergedBranches

> deleteV3ProjectsIdRepositoryMergedBranches(id)



### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.deleteV3ProjectsIdRepositoryMergedBranches(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdRepositoryTagsTagName

> deleteV3ProjectsIdRepositoryTagsTagName(id, tagName)

Delete a repository tag

Delete a repository tag

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let tagName = "tagName_example"; // String | The name of the tag
apiInstance.deleteV3ProjectsIdRepositoryTagsTagName(id, tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **tagName** | **String**| The name of the tag | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdRunnersRunnerId

> Runner deleteV3ProjectsIdRunnersRunnerId(id, runnerId)

Disable project&#39;s runner

Disable project&#39;s runner

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let runnerId = 56; // Number | The ID of the runner
apiInstance.deleteV3ProjectsIdRunnersRunnerId(id, runnerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **runnerId** | **Number**| The ID of the runner | 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdServicesServiceSlug

> deleteV3ProjectsIdServicesServiceSlug(serviceSlug, id)

Delete a service for project

Delete a service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let serviceSlug = "serviceSlug_example"; // String | The name of the service
let id = 56; // Number | 
apiInstance.deleteV3ProjectsIdServicesServiceSlug(serviceSlug, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceSlug** | **String**| The name of the service | 
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdShareGroupId

> deleteV3ProjectsIdShareGroupId(id, groupId)



### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let groupId = 56; // Number | The ID of the group
apiInstance.deleteV3ProjectsIdShareGroupId(id, groupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **groupId** | **Number**| The ID of the group | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId

> Note deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteableId, noteId)

Delete a +noteable+ note

Delete a +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
apiInstance.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteableId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdSnippetsSnippetId

> deleteV3ProjectsIdSnippetsSnippetId(id, snippetId)

Delete a project snippet

Delete a project snippet

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let snippetId = 56; // Number | The ID of a project snippet
apiInstance.deleteV3ProjectsIdSnippetsSnippetId(id, snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **snippetId** | **Number**| The ID of a project snippet | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId, id, snippetId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let snippetId = 56; // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId, id, snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId, id, snippetId, noteId)

Delete a +awardables+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of an award emoji
let id = 56; // Number | 
let snippetId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId, id, snippetId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of an award emoji | 
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdStar

> Project deleteV3ProjectsIdStar(id)

Unstar a project

Unstar a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.deleteV3ProjectsIdStar(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdTriggersToken

> Trigger deleteV3ProjectsIdTriggersToken(id, token)

Delete a trigger

Delete a trigger

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let token = "token_example"; // String | The unique token of trigger
apiInstance.deleteV3ProjectsIdTriggersToken(id, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **token** | **String**| The unique token of trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteV3ProjectsIdVariablesKey

> Variable deleteV3ProjectsIdVariablesKey(id, key)

Delete an existing variable from a project

Delete an existing variable from a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let key = "key_example"; // String | The key of the variable
apiInstance.deleteV3ProjectsIdVariablesKey(id, key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **key** | **String**| The key of the variable | 

### Return type

[**Variable**](Variable.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3Projects

> BasicProjectDetails getV3Projects(opts)

Get a projects list for authenticated user

Get a projects list for authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};
apiInstance.getV3Projects(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 

### Return type

[**BasicProjectDetails**](BasicProjectDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsAll

> BasicProjectDetails getV3ProjectsAll(opts)

Get all projects for admin user

Get all projects for admin user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};
apiInstance.getV3ProjectsAll(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 
 **statistics** | **Boolean**| Include project statistics | [optional] 

### Return type

[**BasicProjectDetails**](BasicProjectDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsId

> ProjectWithAccess getV3ProjectsId(id)

Get a single project

Get a single project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**ProjectWithAccess**](ProjectWithAccess.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdAccessRequests

> AccessRequester getV3ProjectsIdAccessRequests(id, opts)

Gets a list of access requests for a project.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdAccessRequests(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AccessRequester**](AccessRequester.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBoards

> Board getV3ProjectsIdBoards(id)

Get all project boards

This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsIdBoards(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Board**](Board.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBoardsBoardIdLists

> Array getV3ProjectsIdBoardsBoardIdLists(id, boardId)

Get the lists of a project board

Does not include &#x60;backlog&#x60; and &#x60;done&#x60; lists. This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let boardId = 56; // Number | The ID of a board
apiInstance.getV3ProjectsIdBoardsBoardIdLists(id, boardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **boardId** | **Number**| The ID of a board | 

### Return type

**Array**

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBoardsBoardIdListsListId

> Array getV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId)

Get a list of a project board

This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let boardId = 56; // Number | The ID of a board
let listId = 56; // Number | The ID of a list
apiInstance.getV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **boardId** | **Number**| The ID of a board | 
 **listId** | **Number**| The ID of a list | 

### Return type

**Array**

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBuilds

> Build getV3ProjectsIdBuilds(id, opts)

Get a project builds

Get a project builds

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdBuilds(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **scope** | **String**| The scope of builds to show | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBuildsArtifactsRefNameDownload

> getV3ProjectsIdBuildsArtifactsRefNameDownload(id, refName, job)

Download the artifacts file from build

This feature was introduced in GitLab 8.10

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let refName = "refName_example"; // String | The ref from repository
let job = "job_example"; // String | The name for the build
apiInstance.getV3ProjectsIdBuildsArtifactsRefNameDownload(id, refName, job, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **refName** | **String**| The ref from repository | 
 **job** | **String**| The name for the build | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdBuildsBuildId

> Build getV3ProjectsIdBuildsBuildId(id, buildId)

Get a specific build of a project

Get a specific build of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildId(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdBuildsBuildIdArtifacts

> getV3ProjectsIdBuildsBuildIdArtifacts(id, buildId)

Download the artifacts file from build

This feature was introduced in GitLab 8.5

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdArtifacts(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdBuildsBuildIdTrace

> getV3ProjectsIdBuildsBuildIdTrace(id, buildId)

Get a trace of a specific build of a project

Get a trace of a specific build of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdTrace(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdDeployKeys

> SSHKey getV3ProjectsIdDeployKeys(id)

Get a specific project&#39;s deploy keys

Get a specific project&#39;s deploy keys

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
apiInstance.getV3ProjectsIdDeployKeys(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdDeployKeysKeyId

> SSHKey getV3ProjectsIdDeployKeysKeyId(id, keyId)

Get single deploy key

Get single deploy key

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdDeployKeysKeyId(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdDeployments

> Deployment getV3ProjectsIdDeployments(id, opts)

Get all deployments of the project

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdDeployments(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdDeploymentsDeploymentId

> Deployment getV3ProjectsIdDeploymentsDeploymentId(id, deploymentId)

Gets a specific deployment

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let deploymentId = 56; // Number | The deployment ID
apiInstance.getV3ProjectsIdDeploymentsDeploymentId(id, deploymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **deploymentId** | **Number**| The deployment ID | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdEnvironments

> Environment getV3ProjectsIdEnvironments(id, opts)

Get all environments of the project

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdEnvironments(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdEvents

> Event getV3ProjectsIdEvents(id, opts)

Get events for a single project

Get events for a single project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdEvents(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdHooks

> ProjectHook getV3ProjectsIdHooks(id, opts)

Get project hooks

Get project hooks

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdHooks(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**ProjectHook**](ProjectHook.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdHooksHookId

> ProjectHook getV3ProjectsIdHooksHookId(id, hookId)

Get a project hook

Get a project hook

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let hookId = 56; // Number | The ID of a project hook
apiInstance.getV3ProjectsIdHooksHookId(id, hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **hookId** | **Number**| The ID of a project hook | 

### Return type

[**ProjectHook**](ProjectHook.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssues

> Issue getV3ProjectsIdIssues(id, opts)

Get a list of project issues

Get a list of project issues

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'iid': 56, // Number | Return the issue having the given `iid`
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdIssues(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **state** | **String**| Return opened, closed, or all issues | [optional] [default to &#39;all&#39;]
 **iid** | **Number**| Return the issue having the given &#x60;iid&#x60; | [optional] 
 **labels** | **String**| Comma-separated list of label names | [optional] 
 **milestone** | **String**| Return issues for a specific milestone | [optional] 
 **orderBy** | **String**| Return issues ordered by &#x60;created_at&#x60; or &#x60;updated_at&#x60; fields. | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return issues sorted in &#x60;asc&#x60; or &#x60;desc&#x60; order. | [optional] [default to &#39;desc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueId

> Issue getV3ProjectsIdIssuesIssueId(id, issueId)

Get a single project issue

Get a single project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueId(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueIdAwardEmoji

> AwardEmoji getV3ProjectsIdIssuesIssueIdAwardEmoji(id, issueId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of an Issue, Merge Request or Snippet
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmoji(id, issueId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of an Issue, Merge Request or Snippet | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId, id, issueId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let issueId = 56; // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(awardId, id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji

> AwardEmoji getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id, issueId, noteId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let issueId = 56; // Number | 
let noteId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id, issueId, noteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId, id, issueId, noteId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let issueId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(awardId, id, issueId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesIssueIdTimeStats

> getV3ProjectsIdIssuesIssueIdTimeStats(id, issueId)

Show time stats for a project issue

Show time stats for a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueIdTimeStats(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdIssuesNoteableIdNotes

> Note getV3ProjectsIdIssuesNoteableIdNotes(id, noteableId, opts)

Get a list of project +noteable+ notes

Get a list of project +noteable+ notes

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdIssuesNoteableIdNotes(id, noteableId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdIssuesNoteableIdNotesNoteId

> Note getV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteId, noteableId)

Get a single +noteable+ note

Get a single +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteId = 56; // Number | The ID of a note
let noteableId = 56; // Number | The ID of the noteable
apiInstance.getV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteId, noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteId** | **Number**| The ID of a note | 
 **noteableId** | **Number**| The ID of the noteable | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdKeys

> SSHKey getV3ProjectsIdKeys(id)

Get a specific project&#39;s deploy keys

Get a specific project&#39;s deploy keys

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
apiInstance.getV3ProjectsIdKeys(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdKeysKeyId

> SSHKey getV3ProjectsIdKeysKeyId(id, keyId)

Get single deploy key

Get single deploy key

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdKeysKeyId(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdLabels

> Label getV3ProjectsIdLabels(id)

Get all labels of the project

Get all labels of the project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsIdLabels(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMembers

> Member getV3ProjectsIdMembers(id, opts)

Gets a list of group or project members viewable by the authenticated user.

Gets a list of group or project members viewable by the authenticated user.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMembers(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **query** | **String**| A query string to search for members | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMembersUserId

> Member getV3ProjectsIdMembersUserId(id, userId)

Gets a member of a group or project.

Gets a member of a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let userId = 56; // Number | The user ID of the member
apiInstance.getV3ProjectsIdMembersUserId(id, userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **userId** | **Number**| The user ID of the member | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestMergeRequestId

> MergeRequest getV3ProjectsIdMergeRequestMergeRequestId(id, mergeRequestId)

Get a single merge request

This endpoint is deprecated and will be removed in GitLab 9.0.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestMergeRequestId(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a merge request | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestMergeRequestIdChanges

> MergeRequestChanges getV3ProjectsIdMergeRequestMergeRequestIdChanges(id, mergeRequestId)

Show the merge request changes

Show the merge request changes

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdChanges(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**MergeRequestChanges**](MergeRequestChanges.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues

> MRNote getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(id, mergeRequestId, opts)

List issues that will be closed on merge

List issues that will be closed on merge

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestMergeRequestIdComments

> MRNote getV3ProjectsIdMergeRequestMergeRequestIdComments(id, mergeRequestId, opts)

Get the comments of a merge request

Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdComments(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestMergeRequestIdCommits

> RepoCommit getV3ProjectsIdMergeRequestMergeRequestIdCommits(id, mergeRequestId)

Get the commits of a merge request

Get the commits of a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdCommits(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**RepoCommit**](RepoCommit.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequests

> MergeRequest getV3ProjectsIdMergeRequests(id, opts)

List merge requests

List merge requests

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'state': "'all'", // String | Return opened, closed, merged, or all merge requests
  'orderBy': "'created_at'", // String | Return merge requests ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return merge requests sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the merge requests
};
apiInstance.getV3ProjectsIdMergeRequests(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **state** | **String**| Return opened, closed, merged, or all merge requests | [optional] [default to &#39;all&#39;]
 **orderBy** | **String**| Return merge requests ordered by &#x60;created_at&#x60; or &#x60;updated_at&#x60; fields. | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return merge requests sorted in &#x60;asc&#x60; or &#x60;desc&#x60; order. | [optional] [default to &#39;desc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **iid** | [**[Number]**](Number.md)| The IID of the merge requests | [optional] 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestId

> MergeRequest getV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId)

Get a single merge request

Get a single merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji

> AwardEmoji getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id, mergeRequestId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of an Issue, Merge Request or Snippet
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of an Issue, Merge Request or Snippet | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId, id, mergeRequestId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(awardId, id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdChanges

> MergeRequestChanges getV3ProjectsIdMergeRequestsMergeRequestIdChanges(id, mergeRequestId)

Show the merge request changes

Show the merge request changes

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdChanges(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**MergeRequestChanges**](MergeRequestChanges.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues

> MRNote getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(id, mergeRequestId, opts)

List issues that will be closed on merge

List issues that will be closed on merge

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdComments

> MRNote getV3ProjectsIdMergeRequestsMergeRequestIdComments(id, mergeRequestId, opts)

Get the comments of a merge request

Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdComments(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdCommits

> RepoCommit getV3ProjectsIdMergeRequestsMergeRequestIdCommits(id, mergeRequestId)

Get the commits of a merge request

Get the commits of a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdCommits(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**RepoCommit**](RepoCommit.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji

> AwardEmoji getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id, mergeRequestId, noteId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
let noteId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id, mergeRequestId, noteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId, id, mergeRequestId, noteId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(awardId, id, mergeRequestId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats

> getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(id, mergeRequestId)

Show time stats for a project merge_request

Show time stats for a project merge_request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a project merge_request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a project merge_request | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdMergeRequestsMergeRequestIdVersions

> MergeRequestDiff getV3ProjectsIdMergeRequestsMergeRequestIdVersions(id, mergeRequestId)

Get a list of merge request diff versions

This feature was introduced in GitLab 8.12.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersions(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a merge request | 

### Return type

[**MergeRequestDiff**](MergeRequestDiff.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId

> MergeRequestDiffFull getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(id, mergeRequestId, versionId)

Get a single merge request diff version

This feature was introduced in GitLab 8.12.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a merge request
let versionId = 56; // Number | The ID of a merge request diff version
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(id, mergeRequestId, versionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a merge request | 
 **versionId** | **Number**| The ID of a merge request diff version | 

### Return type

[**MergeRequestDiffFull**](MergeRequestDiffFull.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsNoteableIdNotes

> Note getV3ProjectsIdMergeRequestsNoteableIdNotes(id, noteableId, opts)

Get a list of project +noteable+ notes

Get a list of project +noteable+ notes

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotes(id, noteableId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId

> Note getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteId, noteableId)

Get a single +noteable+ note

Get a single +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteId = 56; // Number | The ID of a note
let noteableId = 56; // Number | The ID of the noteable
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteId, noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteId** | **Number**| The ID of a note | 
 **noteableId** | **Number**| The ID of the noteable | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMilestones

> Milestone getV3ProjectsIdMilestones(id, opts)

Get a list of project milestones

Get a list of project milestones

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'state': "'all'", // String | Return \"active\", \"closed\", or \"all\" milestones
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the milestone
};
apiInstance.getV3ProjectsIdMilestones(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **state** | **String**| Return \&quot;active\&quot;, \&quot;closed\&quot;, or \&quot;all\&quot; milestones | [optional] [default to &#39;all&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **iid** | [**[Number]**](Number.md)| The IID of the milestone | [optional] 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## getV3ProjectsIdMilestonesMilestoneId

> Milestone getV3ProjectsIdMilestonesMilestoneId(id, milestoneId)

Get a single project milestone

Get a single project milestone

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let milestoneId = 56; // Number | The ID of a project milestone
apiInstance.getV3ProjectsIdMilestonesMilestoneId(id, milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **milestoneId** | **Number**| The ID of a project milestone | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdMilestonesMilestoneIdIssues

> Issue getV3ProjectsIdMilestonesMilestoneIdIssues(id, milestoneId, opts)

Get all issues for a single project milestone

Get all issues for a single project milestone

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let milestoneId = 56; // Number | The ID of a project milestone
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdMilestonesMilestoneIdIssues(id, milestoneId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **milestoneId** | **Number**| The ID of a project milestone | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdNotificationSettings

> NotificationSetting getV3ProjectsIdNotificationSettings(id)

Get project level notification level settings, defaults to Global

This feature was introduced in GitLab 8.12

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3ProjectsIdNotificationSettings(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The group ID or project ID or project NAMESPACE/PROJECT_NAME | 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdPipelines

> Pipeline getV3ProjectsIdPipelines(id, opts)

Get all Pipelines of the project

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'scope': "scope_example" // String | Either running, branches, or tags
};
apiInstance.getV3ProjectsIdPipelines(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **scope** | **String**| Either running, branches, or tags | [optional] 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdPipelinesPipelineId

> Pipeline getV3ProjectsIdPipelinesPipelineId(id, pipelineId)

Gets a specific pipeline for the project

This feature was introduced in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let pipelineId = 56; // Number | The pipeline ID
apiInstance.getV3ProjectsIdPipelinesPipelineId(id, pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **pipelineId** | **Number**| The pipeline ID | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryArchive

> getV3ProjectsIdRepositoryArchive(id, opts)

Get an archive of the repository

Get an archive of the repository

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'sha': "sha_example", // String | The commit sha of the archive to be downloaded
  'format': "format_example" // String | The archive format
};
apiInstance.getV3ProjectsIdRepositoryArchive(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit sha of the archive to be downloaded | [optional] 
 **format** | **String**| The archive format | [optional] 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryBlobsSha

> getV3ProjectsIdRepositoryBlobsSha(id, sha, filepath)

Get a raw file contents

Get a raw file contents

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit, branch name, or tag name
let filepath = "filepath_example"; // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryBlobsSha(id, sha, filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit, branch name, or tag name | 
 **filepath** | **String**| The path to the file to display | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryBranches

> RepoBranch getV3ProjectsIdRepositoryBranches(id)

Get a project repository branches

Get a project repository branches

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryBranches(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**RepoBranch**](RepoBranch.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryBranchesBranch

> RepoBranch getV3ProjectsIdRepositoryBranchesBranch(id, branch)

Get a single branch

Get a single branch

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let branch = "branch_example"; // String | The name of the branch
apiInstance.getV3ProjectsIdRepositoryBranchesBranch(id, branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **branch** | **String**| The name of the branch | 

### Return type

[**RepoBranch**](RepoBranch.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCommits

> RepoCommit getV3ProjectsIdRepositoryCommits(id, opts)

Get a project repository commits

Get a project repository commits

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'since': "since_example", // String | Only commits after or in this date will be returned
  'until': "until_example", // String | Only commits before or in this date will be returned
  'page': 0, // Number | The page for pagination
  'perPage': 20, // Number | The number of results per page
  'path': "path_example" // String | The file path
};
apiInstance.getV3ProjectsIdRepositoryCommits(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **refName** | **String**| The name of a repository branch or tag, if not given the default branch is used | [optional] 
 **since** | **String**| Only commits after or in this date will be returned | [optional] 
 **until** | **String**| Only commits before or in this date will be returned | [optional] 
 **page** | **Number**| The page for pagination | [optional] [default to 0]
 **perPage** | **Number**| The number of results per page | [optional] [default to 20]
 **path** | **String**| The file path | [optional] 

### Return type

[**RepoCommit**](RepoCommit.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCommitsSha

> RepoCommitDetail getV3ProjectsIdRepositoryCommitsSha(id, sha)

Get a specific commit of a project

Get a specific commit of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsSha(id, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| A commit sha, or the name of a branch or tag | 

### Return type

[**RepoCommitDetail**](RepoCommitDetail.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCommitsShaBlob

> getV3ProjectsIdRepositoryCommitsShaBlob(id, sha, filepath)

Get a raw file contents

Get a raw file contents

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit, branch name, or tag name
let filepath = "filepath_example"; // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryCommitsShaBlob(id, sha, filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit, branch name, or tag name | 
 **filepath** | **String**| The path to the file to display | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryCommitsShaBuilds

> Build getV3ProjectsIdRepositoryCommitsShaBuilds(id, sha, opts)

Get builds for a specific commit of a project

Get builds for a specific commit of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The SHA id of a commit
let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdRepositoryCommitsShaBuilds(id, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The SHA id of a commit | 
 **scope** | **String**| The scope of builds to show | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCommitsShaComments

> CommitNote getV3ProjectsIdRepositoryCommitsShaComments(id, sha, opts)

Get a commit&#39;s comments

Get a commit&#39;s comments

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | A commit sha, or the name of a branch or tag
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdRepositoryCommitsShaComments(id, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| A commit sha, or the name of a branch or tag | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**CommitNote**](CommitNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCommitsShaDiff

> getV3ProjectsIdRepositoryCommitsShaDiff(id, sha)

Get the diff for a specific commit of a project

Get the diff for a specific commit of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsShaDiff(id, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| A commit sha, or the name of a branch or tag | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryCommitsShaStatuses

> CommitStatus getV3ProjectsIdRepositoryCommitsShaStatuses(id, sha, opts)

Get a commit&#39;s statuses

Get a commit&#39;s statuses

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit hash
let opts = {
  'ref': "ref_example", // String | The ref
  'stage': "stage_example", // String | The stage
  'name': "name_example", // String | The name
  'all': "all_example", // String | Show all statuses, default: false
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdRepositoryCommitsShaStatuses(id, sha, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit hash | 
 **ref** | **String**| The ref | [optional] 
 **stage** | **String**| The stage | [optional] 
 **name** | **String**| The name | [optional] 
 **all** | **String**| Show all statuses, default: false | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**CommitStatus**](CommitStatus.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryCompare

> Compare getV3ProjectsIdRepositoryCompare(id, from, to)

Compare two branches, tags, or commits

Compare two branches, tags, or commits

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let from = "from_example"; // String | The commit, branch name, or tag name to start comparison
let to = "to_example"; // String | The commit, branch name, or tag name to stop comparison
apiInstance.getV3ProjectsIdRepositoryCompare(id, from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **from** | **String**| The commit, branch name, or tag name to start comparison | 
 **to** | **String**| The commit, branch name, or tag name to stop comparison | 

### Return type

[**Compare**](Compare.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryContributors

> Contributor getV3ProjectsIdRepositoryContributors(id)

Get repository contributors

Get repository contributors

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryContributors(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Contributor**](Contributor.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryFiles

> getV3ProjectsIdRepositoryFiles(id, filePath, ref)

Get a file from repository

Get a file from repository

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let filePath = "filePath_example"; // String | The path to the file. Ex. lib/class.rb
let ref = "ref_example"; // String | The name of branch, tag, or commit
apiInstance.getV3ProjectsIdRepositoryFiles(id, filePath, ref, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **filePath** | **String**| The path to the file. Ex. lib/class.rb | 
 **ref** | **String**| The name of branch, tag, or commit | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryRawBlobsSha

> getV3ProjectsIdRepositoryRawBlobsSha(id, sha)

Get a raw blob contents by blob sha

Get a raw blob contents by blob sha

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit, branch name, or tag name
apiInstance.getV3ProjectsIdRepositoryRawBlobsSha(id, sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit, branch name, or tag name | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdRepositoryTags

> RepoTag getV3ProjectsIdRepositoryTags(id)

Get a project repository tags

Get a project repository tags

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryTags(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**RepoTag**](RepoTag.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryTagsTagName

> RepoTag getV3ProjectsIdRepositoryTagsTagName(id, tagName)

Get a single repository tag

Get a single repository tag

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let tagName = "tagName_example"; // String | The name of the tag
apiInstance.getV3ProjectsIdRepositoryTagsTagName(id, tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **tagName** | **String**| The name of the tag | 

### Return type

[**RepoTag**](RepoTag.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRepositoryTree

> RepoTreeObject getV3ProjectsIdRepositoryTree(id, opts)

Get a project repository tree

Get a project repository tree

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'path': "path_example", // String | The path of the tree
  'recursive': true // Boolean | Used to get a recursive tree
};
apiInstance.getV3ProjectsIdRepositoryTree(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **refName** | **String**| The name of a repository branch or tag, if not given the default branch is used | [optional] 
 **path** | **String**| The path of the tree | [optional] 
 **recursive** | **Boolean**| Used to get a recursive tree | [optional] 

### Return type

[**RepoTreeObject**](RepoTreeObject.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdRunners

> Runner getV3ProjectsIdRunners(id, opts)

Get runners available for project

Get runners available for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdRunners(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **scope** | **String**| The scope of specific runners to show | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdServicesServiceSlug

> ProjectService getV3ProjectsIdServicesServiceSlug(serviceSlug, id)

Get the service settings for project

Get the service settings for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let serviceSlug = "serviceSlug_example"; // String | The name of the service
let id = 56; // Number | 
apiInstance.getV3ProjectsIdServicesServiceSlug(serviceSlug, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceSlug** | **String**| The name of the service | 
 **id** | **Number**|  | 

### Return type

[**ProjectService**](ProjectService.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippets

> ProjectSnippet getV3ProjectsIdSnippets(id, opts)

Get all project snippets

Get all project snippets

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdSnippets(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**ProjectSnippet**](ProjectSnippet.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsNoteableIdNotes

> Note getV3ProjectsIdSnippetsNoteableIdNotes(id, noteableId, opts)

Get a list of project +noteable+ notes

Get a list of project +noteable+ notes

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotes(id, noteableId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsNoteableIdNotesNoteId

> Note getV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteId, noteableId)

Get a single +noteable+ note

Get a single +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteId = 56; // Number | The ID of a note
let noteableId = 56; // Number | The ID of the noteable
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteId, noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteId** | **Number**| The ID of a note | 
 **noteableId** | **Number**| The ID of the noteable | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetId

> ProjectSnippet getV3ProjectsIdSnippetsSnippetId(id, snippetId)

Get a single project snippet

Get a single project snippet

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let snippetId = 56; // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetId(id, snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **snippetId** | **Number**| The ID of a project snippet | 

### Return type

[**ProjectSnippet**](ProjectSnippet.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetIdAwardEmoji

> AwardEmoji getV3ProjectsIdSnippetsSnippetIdAwardEmoji(id, snippetId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let snippetId = 56; // Number | The ID of an Issue, Merge Request or Snippet
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmoji(id, snippetId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **snippetId** | **Number**| The ID of an Issue, Merge Request or Snippet | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId, id, snippetId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let snippetId = 56; // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(awardId, id, snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji

> AwardEmoji getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id, snippetId, noteId, opts)

Get a list of project +awardable+ award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let snippetId = 56; // Number | 
let noteId = 56; // Number | 
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id, snippetId, noteId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId

> AwardEmoji getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId, id, snippetId, noteId)

Get a specific award emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let awardId = 56; // Number | The ID of the award
let id = 56; // Number | 
let snippetId = 56; // Number | 
let noteId = 56; // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(awardId, id, snippetId, noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardId** | **Number**| The ID of the award | 
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 
 **noteId** | **Number**|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdSnippetsSnippetIdRaw

> getV3ProjectsIdSnippetsSnippetIdRaw(id, snippetId)

Get a raw project snippet

Get a raw project snippet

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let snippetId = 56; // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetIdRaw(id, snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **snippetId** | **Number**| The ID of a project snippet | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV3ProjectsIdTriggers

> Trigger getV3ProjectsIdTriggers(id, opts)

Get triggers list

Get triggers list

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdTriggers(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdTriggersToken

> Trigger getV3ProjectsIdTriggersToken(id, token)

Get specific trigger of a project

Get specific trigger of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let token = "token_example"; // String | The unique token of trigger
apiInstance.getV3ProjectsIdTriggersToken(id, token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **token** | **String**| The unique token of trigger | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdUsers

> UserBasic getV3ProjectsIdUsers(id, opts)

Get the users list of a project

Get the users list of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'search': "search_example", // String | Return list of users matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdUsers(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **search** | **String**| Return list of users matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**UserBasic**](UserBasic.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdVariables

> Variable getV3ProjectsIdVariables(id, opts)

Get project variables

Get project variables

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsIdVariables(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Variable**](Variable.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsIdVariablesKey

> Variable getV3ProjectsIdVariablesKey(id, key)

Get a specific variable from a project

Get a specific variable from a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let key = "key_example"; // String | The key of the variable
apiInstance.getV3ProjectsIdVariablesKey(id, key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **key** | **String**| The key of the variable | 

### Return type

[**Variable**](Variable.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsOwned

> BasicProjectDetails getV3ProjectsOwned(opts)

Get an owned projects list for authenticated user

Get an owned projects list for authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};
apiInstance.getV3ProjectsOwned(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 
 **statistics** | **Boolean**| Include project statistics | [optional] 

### Return type

[**BasicProjectDetails**](BasicProjectDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsSearchQuery

> Project getV3ProjectsSearchQuery(query, opts)

Search for projects the current user has access to

Search for projects the current user has access to

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let query = "query_example"; // String | The project name to be searched
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};
apiInstance.getV3ProjectsSearchQuery(query, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| The project name to be searched | 
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsStarred

> BasicProjectDetails getV3ProjectsStarred(opts)

Gets starred project for the authenticated user

Gets starred project for the authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};
apiInstance.getV3ProjectsStarred(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 

### Return type

[**BasicProjectDetails**](BasicProjectDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV3ProjectsVisible

> BasicProjectDetails getV3ProjectsVisible(opts)

Get a list of visible projects for authenticated user

Get a list of visible projects for authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};
apiInstance.getV3ProjectsVisible(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderBy** | **String**| Return projects ordered by field | [optional] [default to &#39;created_at&#39;]
 **sort** | **String**| Return projects sorted in ascending and descending order | [optional] [default to &#39;desc&#39;]
 **archived** | **Boolean**| Limit by archived status | [optional] 
 **visibility** | **String**| Limit by visibility | [optional] 
 **search** | **String**| Return list of authorized projects matching the search criteria | [optional] 
 **page** | **Number**| Current page number | [optional] 
 **perPage** | **Number**| Number of items per page | [optional] 
 **simple** | **Boolean**| Return only the ID, URL, name, and path of each project | [optional] 

### Return type

[**BasicProjectDetails**](BasicProjectDetails.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3Projects

> Project postV3Projects(UNKNOWN_BASE_TYPE)

Create new project

Create new project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Projects(UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsForkId

> Project postV3ProjectsForkId(id, opts)

Fork new project for the current user or provided namespace.

Fork new project for the current user or provided namespace.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.postV3ProjectsForkId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdAccessRequests

> AccessRequester postV3ProjectsIdAccessRequests(id)

Requests access for the authenticated user to a project.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
apiInstance.postV3ProjectsIdAccessRequests(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 

### Return type

[**AccessRequester**](AccessRequester.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdArchive

> Project postV3ProjectsIdArchive(id)

Archive a project

Archive a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.postV3ProjectsIdArchive(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdBoardsBoardIdLists

> Array postV3ProjectsIdBoardsBoardIdLists(id, boardId, UNKNOWN_BASE_TYPE)

Create a new board list

This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let boardId = 56; // Number | The ID of a board
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdBoardsBoardIdLists(id, boardId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **boardId** | **Number**| The ID of a board | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

**Array**

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdBuildsBuildIdArtifactsKeep

> Build postV3ProjectsIdBuildsBuildIdArtifactsKeep(id, buildId)

Keep the artifacts to prevent them from being deleted

Keep the artifacts to prevent them from being deleted

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdArtifactsKeep(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdBuildsBuildIdCancel

> Build postV3ProjectsIdBuildsBuildIdCancel(id, buildId)

Cancel a specific build of a project

Cancel a specific build of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdCancel(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdBuildsBuildIdErase

> Build postV3ProjectsIdBuildsBuildIdErase(id, buildId)

Erase build (remove artifacts and build trace)

Erase build (remove artifacts and build trace)

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdErase(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdBuildsBuildIdPlay

> Build postV3ProjectsIdBuildsBuildIdPlay(id, buildId)

Trigger a manual build

This feature was added in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a Build
apiInstance.postV3ProjectsIdBuildsBuildIdPlay(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a Build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdBuildsBuildIdRetry

> Build postV3ProjectsIdBuildsBuildIdRetry(id, buildId)

Retry a specific build of a project

Retry a specific build of a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let buildId = 56; // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdRetry(id, buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **buildId** | **Number**| The ID of a build | 

### Return type

[**Build**](Build.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdDeployKeys

> SSHKey postV3ProjectsIdDeployKeys(id, UNKNOWN_BASE_TYPE)

Add new deploy key to currently authenticated user

Add new deploy key to currently authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdDeployKeys(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdDeployKeysKeyIdEnable

> SSHKey postV3ProjectsIdDeployKeysKeyIdEnable(id, keyId)

Enable a deploy key for a project

This feature was added in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdDeployKeysKeyIdEnable(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdEnvironments

> Environment postV3ProjectsIdEnvironments(id, UNKNOWN_BASE_TYPE)

Creates a new environment

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdEnvironments(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Environment**](Environment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdForkForkedFromId

> postV3ProjectsIdForkForkedFromId(id, forkedFromId)

Mark this project as forked from another

Mark this project as forked from another

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let forkedFromId = "forkedFromId_example"; // String | The ID of the project it was forked from
apiInstance.postV3ProjectsIdForkForkedFromId(id, forkedFromId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **forkedFromId** | **String**| The ID of the project it was forked from | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV3ProjectsIdHooks

> ProjectHook postV3ProjectsIdHooks(id, UNKNOWN_BASE_TYPE)

Add hook to project

Add hook to project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdHooks(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ProjectHook**](ProjectHook.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssues

> Issue postV3ProjectsIdIssues(id, UNKNOWN_BASE_TYPE)

Create a new project issue

Create a new project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssues(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssuesIssueIdAddSpentTime

> postV3ProjectsIdIssuesIssueIdAddSpentTime(id, issueId, UNKNOWN_BASE_TYPE)

Add spent time for a project issue

Add spent time for a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAddSpentTime(id, issueId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdIssuesIssueIdAwardEmoji

> AwardEmoji postV3ProjectsIdIssuesIssueIdAwardEmoji(id, issueId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let issueId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAwardEmoji(id, issueId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssuesIssueIdMove

> Issue postV3ProjectsIdIssuesIssueIdMove(id, issueId, UNKNOWN_BASE_TYPE)

Move an existing issue

Move an existing issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdMove(id, issueId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji

> AwardEmoji postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id, issueId, noteId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let issueId = 56; // Number | 
let noteId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(id, issueId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **issueId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssuesIssueIdResetSpentTime

> postV3ProjectsIdIssuesIssueIdResetSpentTime(id, issueId)

Reset spent time for a project issue

Reset spent time for a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetSpentTime(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV3ProjectsIdIssuesIssueIdResetTimeEstimate

> postV3ProjectsIdIssuesIssueIdResetTimeEstimate(id, issueId)

Reset the time estimate for a project issue

Reset the time estimate for a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetTimeEstimate(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV3ProjectsIdIssuesIssueIdTimeEstimate

> postV3ProjectsIdIssuesIssueIdTimeEstimate(id, issueId, UNKNOWN_BASE_TYPE)

Set a time estimate for a project issue

Set a time estimate for a project issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdTimeEstimate(id, issueId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdIssuesIssueIdTodo

> Todo postV3ProjectsIdIssuesIssueIdTodo(id, issueId)

Create a todo on an issuable

Create a todo on an issuable

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of an issuable
apiInstance.postV3ProjectsIdIssuesIssueIdTodo(id, issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of an issuable | 

### Return type

[**Todo**](Todo.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdIssuesNoteableIdNotes

> Note postV3ProjectsIdIssuesNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE)

Create a new +noteable+ note

Create a new +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdIssuesSubscribableIdSubscription

> Issue postV3ProjectsIdIssuesSubscribableIdSubscription(id, subscribableId)

Subscribe to a resource

Subscribe to a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.postV3ProjectsIdIssuesSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdKeys

> SSHKey postV3ProjectsIdKeys(id, UNKNOWN_BASE_TYPE)

Add new deploy key to currently authenticated user

Add new deploy key to currently authenticated user

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdKeys(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdKeysKeyIdEnable

> SSHKey postV3ProjectsIdKeysKeyIdEnable(id, keyId)

Enable a deploy key for a project

This feature was added in GitLab 8.11

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of the project
let keyId = 56; // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdKeysKeyIdEnable(id, keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the project | 
 **keyId** | **Number**| The ID of the deploy key | 

### Return type

[**SSHKey**](SSHKey.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdLabels

> Label postV3ProjectsIdLabels(id, UNKNOWN_BASE_TYPE)

Create a new label

Create a new label

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdLabels(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdLabelsSubscribableIdSubscription

> Label postV3ProjectsIdLabelsSubscribableIdSubscription(id, subscribableId)

Subscribe to a resource

Subscribe to a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.postV3ProjectsIdLabelsSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMembers

> Member postV3ProjectsIdMembers(id, UNKNOWN_BASE_TYPE)

Adds a member to a group or project.

Adds a member to a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMembers(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds

> MergeRequest postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(id, mergeRequestId)

Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled

Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMergeRequestMergeRequestIdComments

> MRNote postV3ProjectsIdMergeRequestMergeRequestIdComments(id, mergeRequestId, UNKNOWN_BASE_TYPE)

Post a comment to a merge request

Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdComments(id, mergeRequestId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestSubscribableIdSubscription

> MergeRequest postV3ProjectsIdMergeRequestSubscribableIdSubscription(id, subscribableId)

Subscribe to a resource

Subscribe to a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMergeRequests

> MergeRequest postV3ProjectsIdMergeRequests(id, UNKNOWN_BASE_TYPE)

Create a merge request

Create a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequests(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime

> postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(id, mergeRequestId, UNKNOWN_BASE_TYPE)

Add spent time for a project merge_request

Add spent time for a project merge_request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a project merge_request
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(id, mergeRequestId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a project merge_request | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji

> AwardEmoji postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id, mergeRequestId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(id, mergeRequestId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds

> MergeRequest postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(id, mergeRequestId)

Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled

Cancel merge if \&quot;Merge When Pipeline Succeeds\&quot; is enabled

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsMergeRequestIdComments

> MRNote postV3ProjectsIdMergeRequestsMergeRequestIdComments(id, mergeRequestId, UNKNOWN_BASE_TYPE)

Post a comment to a merge request

Duplicate. DEPRECATED and WILL BE REMOVED in 9.0

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdComments(id, mergeRequestId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**MRNote**](MRNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji

> AwardEmoji postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id, mergeRequestId, noteId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let mergeRequestId = 56; // Number | 
let noteId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(id, mergeRequestId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **mergeRequestId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime

> postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(id, mergeRequestId)

Reset spent time for a project merge_request

Reset spent time for a project merge_request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a project merge_request | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate

> postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(id, mergeRequestId)

Reset the time estimate for a project merge_request

Reset the time estimate for a project merge_request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a project merge_request | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate

> postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(id, mergeRequestId, UNKNOWN_BASE_TYPE)

Set a time estimate for a project merge_request

Set a time estimate for a project merge_request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of a project merge_request
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(id, mergeRequestId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of a project merge_request | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdMergeRequestsMergeRequestIdTodo

> Todo postV3ProjectsIdMergeRequestsMergeRequestIdTodo(id, mergeRequestId)

Create a todo on an issuable

Create a todo on an issuable

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | The ID of an issuable
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTodo(id, mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**| The ID of an issuable | 

### Return type

[**Todo**](Todo.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsNoteableIdNotes

> Note postV3ProjectsIdMergeRequestsNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE)

Create a new +noteable+ note

Create a new +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdMergeRequestsSubscribableIdSubscription

> MergeRequest postV3ProjectsIdMergeRequestsSubscribableIdSubscription(id, subscribableId)

Subscribe to a resource

Subscribe to a resource

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let subscribableId = "subscribableId_example"; // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestsSubscribableIdSubscription(id, subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **subscribableId** | **String**| The ID of a resource | 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdMilestones

> Milestone postV3ProjectsIdMilestones(id, UNKNOWN_BASE_TYPE)

Create a new project milestone

Create a new project milestone

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMilestones(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdPipeline

> Pipeline postV3ProjectsIdPipeline(id, UNKNOWN_BASE_TYPE)

Create a new pipeline

This feature was introduced in GitLab 8.14

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdPipeline(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdPipelinesPipelineIdCancel

> Pipeline postV3ProjectsIdPipelinesPipelineIdCancel(id, pipelineId)

Cancel all builds in the pipeline

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let pipelineId = 56; // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdCancel(id, pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **pipelineId** | **Number**| The pipeline ID | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdPipelinesPipelineIdRetry

> Pipeline postV3ProjectsIdPipelinesPipelineIdRetry(id, pipelineId)

Retry failed builds in the pipeline

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let pipelineId = 56; // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdRetry(id, pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **pipelineId** | **Number**| The pipeline ID | 

### Return type

[**Pipeline**](Pipeline.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdRefReftriggerBuilds

> TriggerRequest postV3ProjectsIdRefReftriggerBuilds(id, ref, UNKNOWN_BASE_TYPE)

Trigger a GitLab project build

Trigger a GitLab project build

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let ref = "ref_example"; // String | The commit sha or name of a branch or tag
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRefReftriggerBuilds(id, ref, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **ref** | **String**| The commit sha or name of a branch or tag | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**TriggerRequest**](TriggerRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryBranches

> RepoBranch postV3ProjectsIdRepositoryBranches(id, UNKNOWN_BASE_TYPE)

Create branch

Create branch

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryBranches(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**RepoBranch**](RepoBranch.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryCommits

> RepoCommitDetail postV3ProjectsIdRepositoryCommits(id, UNKNOWN_BASE_TYPE)

Commit multiple file changes as one commit

This feature was introduced in GitLab 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommits(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**RepoCommitDetail**](RepoCommitDetail.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryCommitsShaCherryPick

> RepoCommit postV3ProjectsIdRepositoryCommitsShaCherryPick(id, sha, UNKNOWN_BASE_TYPE)

Cherry pick commit into a branch

This feature was introduced in GitLab 8.15

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | A commit sha to be cherry picked
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaCherryPick(id, sha, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| A commit sha to be cherry picked | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**RepoCommit**](RepoCommit.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryCommitsShaComments

> CommitNote postV3ProjectsIdRepositoryCommitsShaComments(id, sha, UNKNOWN_BASE_TYPE)

Post comment to commit

Post comment to commit

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit's SHA
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaComments(id, sha, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit&#39;s SHA | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**CommitNote**](CommitNote.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryFiles

> postV3ProjectsIdRepositoryFiles(id, UNKNOWN_BASE_TYPE)

Create new file in repository

Create new file in repository

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryFiles(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdRepositoryTags

> RepoTag postV3ProjectsIdRepositoryTags(id, UNKNOWN_BASE_TYPE)

Create a new repository tag

Create a new repository tag

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTags(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**RepoTag**](RepoTag.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRepositoryTagsTagNameRelease

> Release postV3ProjectsIdRepositoryTagsTagNameRelease(id, tagName, UNKNOWN_BASE_TYPE)

Add a release note to a tag

Add a release note to a tag

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let tagName = "tagName_example"; // String | The name of the tag
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTagsTagNameRelease(id, tagName, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **tagName** | **String**| The name of the tag | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Release**](Release.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdRunners

> Runner postV3ProjectsIdRunners(id, UNKNOWN_BASE_TYPE)

Enable a runner for a project

Enable a runner for a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRunners(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Runner**](Runner.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdServicesMattermostSlashCommandsTrigger

> postV3ProjectsIdServicesMattermostSlashCommandsTrigger(id, UNKNOWN_BASE_TYPE)

Trigger a slash command for mattermost-slash-commands

Added in GitLab 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesMattermostSlashCommandsTrigger(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdServicesSlackSlashCommandsTrigger

> postV3ProjectsIdServicesSlackSlashCommandsTrigger(id, UNKNOWN_BASE_TYPE)

Trigger a slash command for slack-slash-commands

Added in GitLab 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesSlackSlashCommandsTrigger(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postV3ProjectsIdShare

> ProjectGroupLink postV3ProjectsIdShare(id, UNKNOWN_BASE_TYPE)

Share the project with a group

Share the project with a group

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdShare(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ProjectGroupLink**](ProjectGroupLink.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdSnippets

> ProjectSnippet postV3ProjectsIdSnippets(id, UNKNOWN_BASE_TYPE)

Create a new project snippet

Create a new project snippet

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippets(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ProjectSnippet**](ProjectSnippet.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdSnippetsNoteableIdNotes

> Note postV3ProjectsIdSnippetsNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE)

Create a new +noteable+ note

Create a new +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsNoteableIdNotes(id, noteableId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdSnippetsSnippetIdAwardEmoji

> AwardEmoji postV3ProjectsIdSnippetsSnippetIdAwardEmoji(id, snippetId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let snippetId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdAwardEmoji(id, snippetId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji

> AwardEmoji postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id, snippetId, noteId, UNKNOWN_BASE_TYPE)

Award a new Emoji

This feature was introduced in 8.9

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let snippetId = 56; // Number | 
let noteId = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(id, snippetId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **snippetId** | **Number**|  | 
 **noteId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**AwardEmoji**](AwardEmoji.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdStar

> Project postV3ProjectsIdStar(id)

Star a project

Star a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.postV3ProjectsIdStar(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdStatusesSha

> CommitStatus postV3ProjectsIdStatusesSha(id, sha, UNKNOWN_BASE_TYPE)

Post status to a commit

Post status to a commit

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let sha = "sha_example"; // String | The commit hash
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdStatusesSha(id, sha, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **sha** | **String**| The commit hash | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**CommitStatus**](CommitStatus.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsIdTriggers

> Trigger postV3ProjectsIdTriggers(id)

Create a trigger

Create a trigger

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.postV3ProjectsIdTriggers(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdUnarchive

> Project postV3ProjectsIdUnarchive(id)

Unarchive a project

Unarchive a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
apiInstance.postV3ProjectsIdUnarchive(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV3ProjectsIdUploads

> postV3ProjectsIdUploads(id, UNKNOWN_BASE_TYPE)

Upload a file

Upload a file

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdUploads(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: Not defined


## postV3ProjectsIdVariables

> Variable postV3ProjectsIdVariables(id, UNKNOWN_BASE_TYPE)

Create a new variable in a project

Create a new variable in a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdVariables(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Variable**](Variable.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV3ProjectsUserUserId

> Project postV3ProjectsUserUserId(userId, UNKNOWN_BASE_TYPE)

Create new project for a specified user. Only available to admin users.

Create new project for a specified user. Only available to admin users.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let userId = 56; // Number | The ID of a user
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsUserUserId(userId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| The ID of a user | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsId

> Project putV3ProjectsId(id, opts)

Update an existing project

Update an existing project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Project**](Project.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdAccessRequestsUserIdApprove

> Member putV3ProjectsIdAccessRequestsUserIdApprove(id, userId, opts)

Approves an access request for the given user.

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let userId = 56; // Number | The user ID of the access requester
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdAccessRequestsUserIdApprove(id, userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **userId** | **Number**| The user ID of the access requester | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdBoardsBoardIdListsListId

> Array putV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId, UNKNOWN_BASE_TYPE)

Moves a board list to a new position

This feature was introduced in 8.13

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let boardId = 56; // Number | The ID of a board
let listId = 56; // Number | The ID of a list
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdBoardsBoardIdListsListId(id, boardId, listId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **boardId** | **Number**| The ID of a board | 
 **listId** | **Number**| The ID of a list | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

**Array**

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdEnvironmentsEnvironmentId

> Environment putV3ProjectsIdEnvironmentsEnvironmentId(id, environmentId, opts)

Updates an existing environment

This feature was introduced in GitLab 8.11.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let environmentId = 56; // Number | The environment ID
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdEnvironmentsEnvironmentId(id, environmentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **environmentId** | **Number**| The environment ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Environment**](Environment.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdHooksHookId

> ProjectHook putV3ProjectsIdHooksHookId(id, hookId, UNKNOWN_BASE_TYPE)

Update an existing project hook

Update an existing project hook

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let hookId = 56; // Number | The ID of the hook to update
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdHooksHookId(id, hookId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **hookId** | **Number**| The ID of the hook to update | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ProjectHook**](ProjectHook.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdIssuesIssueId

> Issue putV3ProjectsIdIssuesIssueId(id, issueId, opts)

Update an existing issue

Update an existing issue

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let issueId = 56; // Number | The ID of a project issue
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdIssuesIssueId(id, issueId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **issueId** | **Number**| The ID of a project issue | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Issue**](Issue.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdIssuesNoteableIdNotesNoteId

> Note putV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE)

Update an existing +noteable+ note

Update an existing +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdIssuesNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdLabels

> Label putV3ProjectsIdLabels(id, UNKNOWN_BASE_TYPE)

Update an existing label. At least one optional parameter is required.

Update an existing label. At least one optional parameter is required.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdLabels(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Label**](Label.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMembersUserId

> Member putV3ProjectsIdMembersUserId(id, userId, UNKNOWN_BASE_TYPE)

Updates a member of a group or project.

Updates a member of a group or project.

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let userId = 56; // Number | The user ID of the new member
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMembersUserId(id, userId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **userId** | **Number**| The user ID of the new member | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Member**](Member.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMergeRequestMergeRequestId

> MergeRequest putV3ProjectsIdMergeRequestMergeRequestId(id, mergeRequestId, opts)

Update a merge request

Update a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdMergeRequestMergeRequestId(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMergeRequestMergeRequestIdMerge

> MergeRequest putV3ProjectsIdMergeRequestMergeRequestIdMerge(id, mergeRequestId, opts)

Merge a merge request

Merge a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdMergeRequestMergeRequestIdMerge(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMergeRequestsMergeRequestId

> MergeRequest putV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId, opts)

Update a merge request

Update a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestId(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMergeRequestsMergeRequestIdMerge

> MergeRequest putV3ProjectsIdMergeRequestsMergeRequestIdMerge(id, mergeRequestId, opts)

Merge a merge request

Merge a merge request

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let mergeRequestId = 56; // Number | 
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestIdMerge(id, mergeRequestId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **mergeRequestId** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**MergeRequest**](MergeRequest.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId

> Note putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE)

Update an existing +noteable+ note

Update an existing +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdMilestonesMilestoneId

> Milestone putV3ProjectsIdMilestonesMilestoneId(id, milestoneId, opts)

Update an existing project milestone

Update an existing project milestone

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let milestoneId = 56; // Number | The ID of a project milestone
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdMilestonesMilestoneId(id, milestoneId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **milestoneId** | **Number**| The ID of a project milestone | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Milestone**](Milestone.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdNotificationSettings

> NotificationSetting putV3ProjectsIdNotificationSettings(id, opts)

Update project level notification level settings, defaults to Global

This feature was introduced in GitLab 8.12

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdNotificationSettings(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The group ID or project ID or project NAMESPACE/PROJECT_NAME | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**NotificationSetting**](NotificationSetting.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdRepositoryBranchesBranchProtect

> RepoBranch putV3ProjectsIdRepositoryBranchesBranchProtect(id, branch, opts)

Protect a single branch

Protect a single branch

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let branch = "branch_example"; // String | The name of the branch
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdRepositoryBranchesBranchProtect(id, branch, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **branch** | **String**| The name of the branch | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**RepoBranch**](RepoBranch.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdRepositoryBranchesBranchUnprotect

> RepoBranch putV3ProjectsIdRepositoryBranchesBranchUnprotect(id, branch)

Unprotect a single branch

Unprotect a single branch

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let branch = "branch_example"; // String | The name of the branch
apiInstance.putV3ProjectsIdRepositoryBranchesBranchUnprotect(id, branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **branch** | **String**| The name of the branch | 

### Return type

[**RepoBranch**](RepoBranch.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putV3ProjectsIdRepositoryFiles

> putV3ProjectsIdRepositoryFiles(id, UNKNOWN_BASE_TYPE)

Update existing file in repository

Update existing file in repository

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The project ID
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryFiles(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The project ID | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdRepositoryTagsTagNameRelease

> Release putV3ProjectsIdRepositoryTagsTagNameRelease(id, tagName, UNKNOWN_BASE_TYPE)

Update a tag&#39;s release note

Update a tag&#39;s release note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let tagName = "tagName_example"; // String | The name of the tag
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryTagsTagNameRelease(id, tagName, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **tagName** | **String**| The name of the tag | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Release**](Release.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdServicesAsana

> putV3ProjectsIdServicesAsana(id, UNKNOWN_BASE_TYPE)

Set asana service for project

Set asana service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAsana(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesAssembla

> putV3ProjectsIdServicesAssembla(id, UNKNOWN_BASE_TYPE)

Set assembla service for project

Set assembla service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAssembla(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesBamboo

> putV3ProjectsIdServicesBamboo(id, UNKNOWN_BASE_TYPE)

Set bamboo service for project

Set bamboo service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBamboo(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesBugzilla

> putV3ProjectsIdServicesBugzilla(id, UNKNOWN_BASE_TYPE)

Set bugzilla service for project

Set bugzilla service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBugzilla(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesBuildkite

> putV3ProjectsIdServicesBuildkite(id, UNKNOWN_BASE_TYPE)

Set buildkite service for project

Set buildkite service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildkite(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesBuildsEmail

> putV3ProjectsIdServicesBuildsEmail(id, UNKNOWN_BASE_TYPE)

Set builds-email service for project

Set builds-email service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildsEmail(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesCampfire

> putV3ProjectsIdServicesCampfire(id, UNKNOWN_BASE_TYPE)

Set campfire service for project

Set campfire service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCampfire(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesCustomIssueTracker

> putV3ProjectsIdServicesCustomIssueTracker(id, UNKNOWN_BASE_TYPE)

Set custom-issue-tracker service for project

Set custom-issue-tracker service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCustomIssueTracker(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesDroneCi

> putV3ProjectsIdServicesDroneCi(id, UNKNOWN_BASE_TYPE)

Set drone-ci service for project

Set drone-ci service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesDroneCi(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesEmailsOnPush

> putV3ProjectsIdServicesEmailsOnPush(id, UNKNOWN_BASE_TYPE)

Set emails-on-push service for project

Set emails-on-push service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesEmailsOnPush(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesExternalWiki

> putV3ProjectsIdServicesExternalWiki(id, UNKNOWN_BASE_TYPE)

Set external-wiki service for project

Set external-wiki service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesExternalWiki(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesFlowdock

> putV3ProjectsIdServicesFlowdock(id, UNKNOWN_BASE_TYPE)

Set flowdock service for project

Set flowdock service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesFlowdock(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesGemnasium

> putV3ProjectsIdServicesGemnasium(id, UNKNOWN_BASE_TYPE)

Set gemnasium service for project

Set gemnasium service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesGemnasium(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesHipchat

> putV3ProjectsIdServicesHipchat(id, UNKNOWN_BASE_TYPE)

Set hipchat service for project

Set hipchat service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesHipchat(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesIrker

> putV3ProjectsIdServicesIrker(id, UNKNOWN_BASE_TYPE)

Set irker service for project

Set irker service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesIrker(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesJira

> putV3ProjectsIdServicesJira(id, UNKNOWN_BASE_TYPE)

Set jira service for project

Set jira service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesJira(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesKubernetes

> putV3ProjectsIdServicesKubernetes(id, UNKNOWN_BASE_TYPE)

Set kubernetes service for project

Set kubernetes service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesKubernetes(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesMattermost

> putV3ProjectsIdServicesMattermost(id, UNKNOWN_BASE_TYPE)

Set mattermost service for project

Set mattermost service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermost(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesMattermostSlashCommands

> putV3ProjectsIdServicesMattermostSlashCommands(id, UNKNOWN_BASE_TYPE)

Set mattermost-slash-commands service for project

Set mattermost-slash-commands service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermostSlashCommands(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesPipelinesEmail

> putV3ProjectsIdServicesPipelinesEmail(id, UNKNOWN_BASE_TYPE)

Set pipelines-email service for project

Set pipelines-email service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPipelinesEmail(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesPivotaltracker

> putV3ProjectsIdServicesPivotaltracker(id, UNKNOWN_BASE_TYPE)

Set pivotaltracker service for project

Set pivotaltracker service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPivotaltracker(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesPushover

> putV3ProjectsIdServicesPushover(id, UNKNOWN_BASE_TYPE)

Set pushover service for project

Set pushover service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPushover(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesRedmine

> putV3ProjectsIdServicesRedmine(id, UNKNOWN_BASE_TYPE)

Set redmine service for project

Set redmine service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesRedmine(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesSlack

> putV3ProjectsIdServicesSlack(id, UNKNOWN_BASE_TYPE)

Set slack service for project

Set slack service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlack(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesSlackSlashCommands

> putV3ProjectsIdServicesSlackSlashCommands(id, UNKNOWN_BASE_TYPE)

Set slack-slash-commands service for project

Set slack-slash-commands service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlackSlashCommands(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdServicesTeamcity

> putV3ProjectsIdServicesTeamcity(id, UNKNOWN_BASE_TYPE)

Set teamcity service for project

Set teamcity service for project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = 56; // Number | 
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesTeamcity(id, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

null (empty response body)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putV3ProjectsIdSnippetsNoteableIdNotesNoteId

> Note putV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE)

Update an existing +noteable+ note

Update an existing +noteable+ note

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let noteableId = 56; // Number | The ID of the noteable
let noteId = 56; // Number | The ID of a note
let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdSnippetsNoteableIdNotesNoteId(id, noteableId, noteId, UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **noteableId** | **Number**| The ID of the noteable | 
 **noteId** | **Number**| The ID of a note | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**Note**](Note.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdSnippetsSnippetId

> ProjectSnippet putV3ProjectsIdSnippetsSnippetId(id, snippetId, opts)

Update an existing project snippet

Update an existing project snippet

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let snippetId = 56; // Number | The ID of a project snippet
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdSnippetsSnippetId(id, snippetId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **snippetId** | **Number**| The ID of a project snippet | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**ProjectSnippet**](ProjectSnippet.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV3ProjectsIdVariablesKey

> Variable putV3ProjectsIdVariablesKey(id, key, opts)

Update an existing variable from a project

Update an existing variable from a project

### Example

```javascript
import Gitlab from 'gitlab';
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi();
let id = "id_example"; // String | The ID of a project
let key = "key_example"; // String | The key of the variable
let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.putV3ProjectsIdVariablesKey(id, key, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of a project | 
 **key** | **String**| The key of the variable | 
 **UNKNOWN_BASE_TYPE** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**Variable**](Variable.md)

### Authorization

[private_token_header](../README.md#private_token_header), [private_token_query](../README.md#private_token_query)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

