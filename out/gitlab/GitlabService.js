async function get(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function post(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function put(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function delete(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function patch(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function unknown(entity, options) {
        switch (entity) {
            
        case "GET_V3_VERSION":
        // Function parameters for this API 
        return await this.getV3Version(options);
        
        case "GET_V3_DOCKERFILES":
        // Function parameters for this API 
        return await this.getV3Dockerfiles(options);
        
        case "GET_V3_DOCKERFILES_NAME":
        // Function parameters for this API name
        return await this.getV3DockerfilesName(options);
        
        case "DELETE_V3_USER_EMAILS_EMAIL_ID":
        // Function parameters for this API emailId
        return await this.deleteV3UserEmailsEmailId(options);
        
        case "DELETE_V3_USER_KEYS_KEY_ID":
        // Function parameters for this API keyId
        return await this.deleteV3UserKeysKeyId(options);
        
        case "GET_V3_USER":
        // Function parameters for this API 
        return await this.getV3User(options);
        
        case "GET_V3_USER_EMAILS":
        // Function parameters for this API 
        return await this.getV3UserEmails(options);
        
        case "GET_V3_USER_EMAILS_EMAIL_ID":
        // Function parameters for this API emailId
        return await this.getV3UserEmailsEmailId(options);
        
        case "GET_V3_USER_KEYS":
        // Function parameters for this API 
        return await this.getV3UserKeys(options);
        
        case "GET_V3_USER_KEYS_KEY_ID":
        // Function parameters for this API keyId
        return await this.getV3UserKeysKeyId(options);
        
        case "POST_V3_USER_EMAILS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3UserEmails(options);
        
        case "POST_V3_USER_KEYS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3UserKeys(options);
        
        case "GET_V3_TEMPLATES_DOCKERFILES":
        // Function parameters for this API 
        return await this.getV3TemplatesDockerfiles(options);
        
        case "GET_V3_TEMPLATES_DOCKERFILES_NAME":
        // Function parameters for this API name
        return await this.getV3TemplatesDockerfilesName(options);
        
        case "GET_V3_TEMPLATES_GITIGNORES":
        // Function parameters for this API 
        return await this.getV3TemplatesGitignores(options);
        
        case "GET_V3_TEMPLATES_GITIGNORES_NAME":
        // Function parameters for this API name
        return await this.getV3TemplatesGitignoresName(options);
        
        case "GET_V3_TEMPLATES_GITLAB_CI_YMLS":
        // Function parameters for this API 
        return await this.getV3TemplatesGitlabCiYmls(options);
        
        case "GET_V3_TEMPLATES_GITLAB_CI_YMLS_NAME":
        // Function parameters for this API name
        return await this.getV3TemplatesGitlabCiYmlsName(options);
        
        case "GET_V3_TEMPLATES_LICENSES":
        // Function parameters for this API opts
        return await this.getV3TemplatesLicenses(options);
        
        case "GET_V3_TEMPLATES_LICENSES_NAME":
        // Function parameters for this API name
        return await this.getV3TemplatesLicensesName(options);
        
        case "DELETE_V3_USERS_ID":
        // Function parameters for this API id
        return await this.deleteV3UsersId(options);
        
        case "DELETE_V3_USERS_ID_EMAILS_EMAIL_ID":
        // Function parameters for this API id,emailId
        return await this.deleteV3UsersIdEmailsEmailId(options);
        
        case "DELETE_V3_USERS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return await this.deleteV3UsersIdKeysKeyId(options);
        
        case "GET_V3_USERS":
        // Function parameters for this API opts
        return await this.getV3Users(options);
        
        case "GET_V3_USERS_ID":
        // Function parameters for this API id
        return await this.getV3UsersId(options);
        
        case "GET_V3_USERS_ID_EMAILS":
        // Function parameters for this API id
        return await this.getV3UsersIdEmails(options);
        
        case "GET_V3_USERS_ID_EVENTS":
        // Function parameters for this API id,opts
        return await this.getV3UsersIdEvents(options);
        
        case "GET_V3_USERS_ID_KEYS":
        // Function parameters for this API id
        return await this.getV3UsersIdKeys(options);
        
        case "POST_V3_USERS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Users(options);
        
        case "POST_V3_USERS_ID_EMAILS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3UsersIdEmails(options);
        
        case "POST_V3_USERS_ID_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3UsersIdKeys(options);
        
        case "PUT_V3_USERS_ID":
        // Function parameters for this API id,opts
        return await this.putV3UsersId(options);
        
        case "PUT_V3_USERS_ID_BLOCK":
        // Function parameters for this API id
        return await this.putV3UsersIdBlock(options);
        
        case "PUT_V3_USERS_ID_UNBLOCK":
        // Function parameters for this API id
        return await this.putV3UsersIdUnblock(options);
        
        case "DELETE_V3_TODOS":
        // Function parameters for this API 
        return await this.deleteV3Todos(options);
        
        case "DELETE_V3_TODOS_ID":
        // Function parameters for this API id
        return await this.deleteV3TodosId(options);
        
        case "GET_V3_TODOS":
        // Function parameters for this API opts
        return await this.getV3Todos(options);
        
        case "GET_V3_NAMESPACES":
        // Function parameters for this API opts
        return await this.getV3Namespaces(options);
        
        case "POST_V3_SESSION":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Session(options);
        
        case "DELETE_V3_RUNNERS_ID":
        // Function parameters for this API id
        return await this.deleteV3RunnersId(options);
        
        case "GET_V3_RUNNERS":
        // Function parameters for this API opts
        return await this.getV3Runners(options);
        
        case "GET_V3_RUNNERS_ALL":
        // Function parameters for this API opts
        return await this.getV3RunnersAll(options);
        
        case "GET_V3_RUNNERS_ID":
        // Function parameters for this API id
        return await this.getV3RunnersId(options);
        
        case "PUT_V3_RUNNERS_ID":
        // Function parameters for this API id,opts
        return await this.putV3RunnersId(options);
        
        case "GET_V3_ISSUES":
        // Function parameters for this API opts
        return await this.getV3Issues(options);
        
        case "GET_V3_KEYS_ID":
        // Function parameters for this API id
        return await this.getV3KeysId(options);
        
        case "GET_V3_APPLICATION_SETTINGS":
        // Function parameters for this API 
        return await this.getV3ApplicationSettings(options);
        
        case "PUT_V3_APPLICATION_SETTINGS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.putV3ApplicationSettings(options);
        
        case "GET_V3_LICENSES":
        // Function parameters for this API opts
        return await this.getV3Licenses(options);
        
        case "GET_V3_LICENSES_NAME":
        // Function parameters for this API name
        return await this.getV3LicensesName(options);
        
        case "GET_V3_GITIGNORES":
        // Function parameters for this API 
        return await this.getV3Gitignores(options);
        
        case "GET_V3_GITIGNORES_NAME":
        // Function parameters for this API name
        return await this.getV3GitignoresName(options);
        
        case "DELETE_V3_SNIPPETS_ID":
        // Function parameters for this API id
        return await this.deleteV3SnippetsId(options);
        
        case "GET_V3_SNIPPETS":
        // Function parameters for this API opts
        return await this.getV3Snippets(options);
        
        case "GET_V3_SNIPPETS_ID":
        // Function parameters for this API id
        return await this.getV3SnippetsId(options);
        
        case "GET_V3_SNIPPETS_ID_RAW":
        // Function parameters for this API id
        return await this.getV3SnippetsIdRaw(options);
        
        case "GET_V3_SNIPPETS_PUBLIC":
        // Function parameters for this API opts
        return await this.getV3SnippetsPublic(options);
        
        case "POST_V3_SNIPPETS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Snippets(options);
        
        case "PUT_V3_SNIPPETS_ID":
        // Function parameters for this API id,opts
        return await this.putV3SnippetsId(options);
        
        case "POST_V3_CI_LINT":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3CiLint(options);
        
        case "GET_V3_GITLAB_CI_YMLS":
        // Function parameters for this API 
        return await this.getV3GitlabCiYmls(options);
        
        case "GET_V3_GITLAB_CI_YMLS_NAME":
        // Function parameters for this API name
        return await this.getV3GitlabCiYmlsName(options);
        
        case "GET_V3_SIDEKIQ_COMPOUND_METRICS":
        // Function parameters for this API 
        return await this.getV3SidekiqCompoundMetrics(options);
        
        case "GET_V3_SIDEKIQ_JOB_STATS":
        // Function parameters for this API 
        return await this.getV3SidekiqJobStats(options);
        
        case "GET_V3_SIDEKIQ_PROCESS_METRICS":
        // Function parameters for this API 
        return await this.getV3SidekiqProcessMetrics(options);
        
        case "GET_V3_SIDEKIQ_QUEUE_METRICS":
        // Function parameters for this API 
        return await this.getV3SidekiqQueueMetrics(options);
        
        case "DELETE_V3_GROUPS_ID":
        // Function parameters for this API id
        return await this.deleteV3GroupsId(options);
        
        case "DELETE_V3_GROUPS_ID_ACCESS_REQUESTS_USER_ID":
        // Function parameters for this API id,userId
        return await this.deleteV3GroupsIdAccessRequestsUserId(options);
        
        case "DELETE_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return await this.deleteV3GroupsIdMembersUserId(options);
        
        case "GET_V3_GROUPS":
        // Function parameters for this API opts
        return await this.getV3Groups(options);
        
        case "GET_V3_GROUPS_ID":
        // Function parameters for this API id
        return await this.getV3GroupsId(options);
        
        case "GET_V3_GROUPS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id,opts
        return await this.getV3GroupsIdAccessRequests(options);
        
        case "GET_V3_GROUPS_ID_ISSUES":
        // Function parameters for this API id,opts
        return await this.getV3GroupsIdIssues(options);
        
        case "GET_V3_GROUPS_ID_MEMBERS":
        // Function parameters for this API id,opts
        return await this.getV3GroupsIdMembers(options);
        
        case "GET_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return await this.getV3GroupsIdMembersUserId(options);
        
        case "GET_V3_GROUPS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id
        return await this.getV3GroupsIdNotificationSettings(options);
        
        case "GET_V3_GROUPS_ID_PROJECTS":
        // Function parameters for this API id,opts
        return await this.getV3GroupsIdProjects(options);
        
        case "GET_V3_GROUPS_OWNED":
        // Function parameters for this API opts
        return await this.getV3GroupsOwned(options);
        
        case "POST_V3_GROUPS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Groups(options);
        
        case "POST_V3_GROUPS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id
        return await this.postV3GroupsIdAccessRequests(options);
        
        case "POST_V3_GROUPS_ID_MEMBERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3GroupsIdMembers(options);
        
        case "POST_V3_GROUPS_ID_PROJECTS_PROJECT_ID":
        // Function parameters for this API id,projectId
        return await this.postV3GroupsIdProjectsProjectId(options);
        
        case "PUT_V3_GROUPS_ID":
        // Function parameters for this API id,opts
        return await this.putV3GroupsId(options);
        
        case "PUT_V3_GROUPS_ID_ACCESS_REQUESTS_USER_ID_APPROVE":
        // Function parameters for this API id,userId,opts
        return await this.putV3GroupsIdAccessRequestsUserIdApprove(options);
        
        case "PUT_V3_GROUPS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId,UNKNOWN_BASE_TYPE
        return await this.putV3GroupsIdMembersUserId(options);
        
        case "PUT_V3_GROUPS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id,opts
        return await this.putV3GroupsIdNotificationSettings(options);
        
        case "GET_V3_DEPLOY_KEYS":
        // Function parameters for this API 
        return await this.getV3DeployKeys(options);
        
        case "DELETE_V3_PROJECTS_ID":
        // Function parameters for this API id
        return await this.deleteV3ProjectsId(options);
        
        case "DELETE_V3_PROJECTS_ID_ACCESS_REQUESTS_USER_ID":
        // Function parameters for this API id,userId
        return await this.deleteV3ProjectsIdAccessRequestsUserId(options);
        
        case "DELETE_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId
        return await this.deleteV3ProjectsIdBoardsBoardIdListsListId(options);
        
        case "DELETE_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return await this.deleteV3ProjectsIdDeployKeysKeyId(options);
        
        case "DELETE_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID_DISABLE":
        // Function parameters for this API id,keyId
        return await this.deleteV3ProjectsIdDeployKeysKeyIdDisable(options);
        
        case "DELETE_V3_PROJECTS_ID_ENVIRONMENTS_ENVIRONMENT_ID":
        // Function parameters for this API id,environmentId
        return await this.deleteV3ProjectsIdEnvironmentsEnvironmentId(options);
        
        case "DELETE_V3_PROJECTS_ID_FORK":
        // Function parameters for this API id
        return await this.deleteV3ProjectsIdFork(options);
        
        case "DELETE_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId
        return await this.deleteV3ProjectsIdHooksHookId(options);
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId
        return await this.deleteV3ProjectsIdIssuesIssueId(options);
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId
        return await this.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId,noteId
        return await this.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return await this.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(options);
        
        case "DELETE_V3_PROJECTS_ID_ISSUES_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.deleteV3ProjectsIdIssuesSubscribableIdSubscription(options);
        
        case "DELETE_V3_PROJECTS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return await this.deleteV3ProjectsIdKeysKeyId(options);
        
        case "DELETE_V3_PROJECTS_ID_KEYS_KEY_ID_DISABLE":
        // Function parameters for this API id,keyId
        return await this.deleteV3ProjectsIdKeysKeyIdDisable(options);
        
        case "DELETE_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,name
        return await this.deleteV3ProjectsIdLabels(options);
        
        case "DELETE_V3_PROJECTS_ID_LABELS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.deleteV3ProjectsIdLabelsSubscribableIdSubscription(options);
        
        case "DELETE_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return await this.deleteV3ProjectsIdMembersUserId(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUEST_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return await this.deleteV3ProjectsIdMergeRequestsMergeRequestId(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId
        return await this.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId,noteId
        return await this.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return await this.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options);
        
        case "DELETE_V3_PROJECTS_ID_MERGE_REQUESTS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(options);
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH":
        // Function parameters for this API id,branch
        return await this.deleteV3ProjectsIdRepositoryBranchesBranch(options);
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,filePath,branchName,commitMessage,opts
        return await this.deleteV3ProjectsIdRepositoryFiles(options);
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_MERGED_BRANCHES":
        // Function parameters for this API id
        return await this.deleteV3ProjectsIdRepositoryMergedBranches(options);
        
        case "DELETE_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME":
        // Function parameters for this API id,tagName
        return await this.deleteV3ProjectsIdRepositoryTagsTagName(options);
        
        case "DELETE_V3_PROJECTS_ID_RUNNERS_RUNNER_ID":
        // Function parameters for this API id,runnerId
        return await this.deleteV3ProjectsIdRunnersRunnerId(options);
        
        case "DELETE_V3_PROJECTS_ID_SERVICES_SERVICE_SLUG":
        // Function parameters for this API serviceSlug,id
        return await this.deleteV3ProjectsIdServicesServiceSlug(options);
        
        case "DELETE_V3_PROJECTS_ID_SHARE_GROUP_ID":
        // Function parameters for this API id,groupId
        return await this.deleteV3ProjectsIdShareGroupId(options);
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId
        return await this.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(options);
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId
        return await this.deleteV3ProjectsIdSnippetsSnippetId(options);
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId
        return await this.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId,noteId
        return await this.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "DELETE_V3_PROJECTS_ID_STAR":
        // Function parameters for this API id
        return await this.deleteV3ProjectsIdStar(options);
        
        case "DELETE_V3_PROJECTS_ID_TRIGGERS_TOKEN":
        // Function parameters for this API id,token
        return await this.deleteV3ProjectsIdTriggersToken(options);
        
        case "DELETE_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key
        return await this.deleteV3ProjectsIdVariablesKey(options);
        
        case "GET_V3_PROJECTS":
        // Function parameters for this API opts
        return await this.getV3Projects(options);
        
        case "GET_V3_PROJECTS_ALL":
        // Function parameters for this API opts
        return await this.getV3ProjectsAll(options);
        
        case "GET_V3_PROJECTS_ID":
        // Function parameters for this API id
        return await this.getV3ProjectsId(options);
        
        case "GET_V3_PROJECTS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdAccessRequests(options);
        
        case "GET_V3_PROJECTS_ID_BOARDS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdBoards(options);
        
        case "GET_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS":
        // Function parameters for this API id,boardId
        return await this.getV3ProjectsIdBoardsBoardIdLists(options);
        
        case "GET_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId
        return await this.getV3ProjectsIdBoardsBoardIdListsListId(options);
        
        case "GET_V3_PROJECTS_ID_BUILDS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdBuilds(options);
        
        case "GET_V3_PROJECTS_ID_BUILDS_ARTIFACTS_REF_NAME_DOWNLOAD":
        // Function parameters for this API id,refName,job
        return await this.getV3ProjectsIdBuildsArtifactsRefNameDownload(options);
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID":
        // Function parameters for this API id,buildId
        return await this.getV3ProjectsIdBuildsBuildId(options);
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID_ARTIFACTS":
        // Function parameters for this API id,buildId
        return await this.getV3ProjectsIdBuildsBuildIdArtifacts(options);
        
        case "GET_V3_PROJECTS_ID_BUILDS_BUILD_ID_TRACE":
        // Function parameters for this API id,buildId
        return await this.getV3ProjectsIdBuildsBuildIdTrace(options);
        
        case "GET_V3_PROJECTS_ID_DEPLOY_KEYS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdDeployKeys(options);
        
        case "GET_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return await this.getV3ProjectsIdDeployKeysKeyId(options);
        
        case "GET_V3_PROJECTS_ID_DEPLOYMENTS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdDeployments(options);
        
        case "GET_V3_PROJECTS_ID_DEPLOYMENTS_DEPLOYMENT_ID":
        // Function parameters for this API id,deploymentId
        return await this.getV3ProjectsIdDeploymentsDeploymentId(options);
        
        case "GET_V3_PROJECTS_ID_ENVIRONMENTS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdEnvironments(options);
        
        case "GET_V3_PROJECTS_ID_EVENTS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdEvents(options);
        
        case "GET_V3_PROJECTS_ID_HOOKS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdHooks(options);
        
        case "GET_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId
        return await this.getV3ProjectsIdHooksHookId(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdIssues(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId
        return await this.getV3ProjectsIdIssuesIssueId(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,opts
        return await this.getV3ProjectsIdIssuesIssueIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId
        return await this.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,noteId,opts
        return await this.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,issueId,noteId
        return await this.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TIME_STATS":
        // Function parameters for this API id,issueId
        return await this.getV3ProjectsIdIssuesIssueIdTimeStats(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return await this.getV3ProjectsIdIssuesNoteableIdNotes(options);
        
        case "GET_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return await this.getV3ProjectsIdIssuesNoteableIdNotesNoteId(options);
        
        case "GET_V3_PROJECTS_ID_KEYS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdKeys(options);
        
        case "GET_V3_PROJECTS_ID_KEYS_KEY_ID":
        // Function parameters for this API id,keyId
        return await this.getV3ProjectsIdKeysKeyId(options);
        
        case "GET_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdLabels(options);
        
        case "GET_V3_PROJECTS_ID_MEMBERS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdMembers(options);
        
        case "GET_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId
        return await this.getV3ProjectsIdMembersUserId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestMergeRequestId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CHANGES":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestMergeRequestIdChanges(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CLOSES_ISSUES":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.getV3ProjectsIdMergeRequestMergeRequestIdComments(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMITS":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestMergeRequestIdCommits(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdMergeRequests(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CHANGES":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdChanges(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CLOSES_ISSUES":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdComments(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMITS":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdCommits(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,noteId,opts
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,mergeRequestId,noteId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TIME_STATS":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_VERSIONS":
        // Function parameters for this API id,mergeRequestId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdVersions(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_VERSIONS_VERSION_ID":
        // Function parameters for this API id,mergeRequestId,versionId
        return await this.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return await this.getV3ProjectsIdMergeRequestsNoteableIdNotes(options);
        
        case "GET_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return await this.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options);
        
        case "GET_V3_PROJECTS_ID_MILESTONES":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdMilestones(options);
        
        case "GET_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID":
        // Function parameters for this API id,milestoneId
        return await this.getV3ProjectsIdMilestonesMilestoneId(options);
        
        case "GET_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID_ISSUES":
        // Function parameters for this API id,milestoneId,opts
        return await this.getV3ProjectsIdMilestonesMilestoneIdIssues(options);
        
        case "GET_V3_PROJECTS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdNotificationSettings(options);
        
        case "GET_V3_PROJECTS_ID_PIPELINES":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdPipelines(options);
        
        case "GET_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID":
        // Function parameters for this API id,pipelineId
        return await this.getV3ProjectsIdPipelinesPipelineId(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_ARCHIVE":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdRepositoryArchive(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BLOBS_SHA":
        // Function parameters for this API id,sha,filepath
        return await this.getV3ProjectsIdRepositoryBlobsSha(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BRANCHES":
        // Function parameters for this API id
        return await this.getV3ProjectsIdRepositoryBranches(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH":
        // Function parameters for this API id,branch
        return await this.getV3ProjectsIdRepositoryBranchesBranch(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdRepositoryCommits(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA":
        // Function parameters for this API id,sha
        return await this.getV3ProjectsIdRepositoryCommitsSha(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_BLOB":
        // Function parameters for this API id,sha,filepath
        return await this.getV3ProjectsIdRepositoryCommitsShaBlob(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_BUILDS":
        // Function parameters for this API id,sha,opts
        return await this.getV3ProjectsIdRepositoryCommitsShaBuilds(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_COMMENTS":
        // Function parameters for this API id,sha,opts
        return await this.getV3ProjectsIdRepositoryCommitsShaComments(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_DIFF":
        // Function parameters for this API id,sha
        return await this.getV3ProjectsIdRepositoryCommitsShaDiff(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_STATUSES":
        // Function parameters for this API id,sha,opts
        return await this.getV3ProjectsIdRepositoryCommitsShaStatuses(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_COMPARE":
        // Function parameters for this API id,from,to
        return await this.getV3ProjectsIdRepositoryCompare(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_CONTRIBUTORS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdRepositoryContributors(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,filePath,ref
        return await this.getV3ProjectsIdRepositoryFiles(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_RAW_BLOBS_SHA":
        // Function parameters for this API id,sha
        return await this.getV3ProjectsIdRepositoryRawBlobsSha(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TAGS":
        // Function parameters for this API id
        return await this.getV3ProjectsIdRepositoryTags(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME":
        // Function parameters for this API id,tagName
        return await this.getV3ProjectsIdRepositoryTagsTagName(options);
        
        case "GET_V3_PROJECTS_ID_REPOSITORY_TREE":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdRepositoryTree(options);
        
        case "GET_V3_PROJECTS_ID_RUNNERS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdRunners(options);
        
        case "GET_V3_PROJECTS_ID_SERVICES_SERVICE_SLUG":
        // Function parameters for this API serviceSlug,id
        return await this.getV3ProjectsIdServicesServiceSlug(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdSnippets(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,opts
        return await this.getV3ProjectsIdSnippetsNoteableIdNotes(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteId,noteableId
        return await this.getV3ProjectsIdSnippetsNoteableIdNotesNoteId(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId
        return await this.getV3ProjectsIdSnippetsSnippetId(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,opts
        return await this.getV3ProjectsIdSnippetsSnippetIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId
        return await this.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,noteId,opts
        return await this.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI_AWARD_ID":
        // Function parameters for this API awardId,id,snippetId,noteId
        return await this.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(options);
        
        case "GET_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_RAW":
        // Function parameters for this API id,snippetId
        return await this.getV3ProjectsIdSnippetsSnippetIdRaw(options);
        
        case "GET_V3_PROJECTS_ID_TRIGGERS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdTriggers(options);
        
        case "GET_V3_PROJECTS_ID_TRIGGERS_TOKEN":
        // Function parameters for this API id,token
        return await this.getV3ProjectsIdTriggersToken(options);
        
        case "GET_V3_PROJECTS_ID_USERS":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdUsers(options);
        
        case "GET_V3_PROJECTS_ID_VARIABLES":
        // Function parameters for this API id,opts
        return await this.getV3ProjectsIdVariables(options);
        
        case "GET_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key
        return await this.getV3ProjectsIdVariablesKey(options);
        
        case "GET_V3_PROJECTS_OWNED":
        // Function parameters for this API opts
        return await this.getV3ProjectsOwned(options);
        
        case "GET_V3_PROJECTS_SEARCH_QUERY":
        // Function parameters for this API query,opts
        return await this.getV3ProjectsSearchQuery(options);
        
        case "GET_V3_PROJECTS_STARRED":
        // Function parameters for this API opts
        return await this.getV3ProjectsStarred(options);
        
        case "GET_V3_PROJECTS_VISIBLE":
        // Function parameters for this API opts
        return await this.getV3ProjectsVisible(options);
        
        case "POST_V3_PROJECTS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Projects(options);
        
        case "POST_V3_PROJECTS_FORK_ID":
        // Function parameters for this API id,opts
        return await this.postV3ProjectsForkId(options);
        
        case "POST_V3_PROJECTS_ID_ACCESS_REQUESTS":
        // Function parameters for this API id
        return await this.postV3ProjectsIdAccessRequests(options);
        
        case "POST_V3_PROJECTS_ID_ARCHIVE":
        // Function parameters for this API id
        return await this.postV3ProjectsIdArchive(options);
        
        case "POST_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS":
        // Function parameters for this API id,boardId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdBoardsBoardIdLists(options);
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_ARTIFACTS_KEEP":
        // Function parameters for this API id,buildId
        return await this.postV3ProjectsIdBuildsBuildIdArtifactsKeep(options);
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_CANCEL":
        // Function parameters for this API id,buildId
        return await this.postV3ProjectsIdBuildsBuildIdCancel(options);
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_ERASE":
        // Function parameters for this API id,buildId
        return await this.postV3ProjectsIdBuildsBuildIdErase(options);
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_PLAY":
        // Function parameters for this API id,buildId
        return await this.postV3ProjectsIdBuildsBuildIdPlay(options);
        
        case "POST_V3_PROJECTS_ID_BUILDS_BUILD_ID_RETRY":
        // Function parameters for this API id,buildId
        return await this.postV3ProjectsIdBuildsBuildIdRetry(options);
        
        case "POST_V3_PROJECTS_ID_DEPLOY_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdDeployKeys(options);
        
        case "POST_V3_PROJECTS_ID_DEPLOY_KEYS_KEY_ID_ENABLE":
        // Function parameters for this API id,keyId
        return await this.postV3ProjectsIdDeployKeysKeyIdEnable(options);
        
        case "POST_V3_PROJECTS_ID_ENVIRONMENTS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdEnvironments(options);
        
        case "POST_V3_PROJECTS_ID_FORK_FORKED_FROM_ID":
        // Function parameters for this API id,forkedFromId
        return await this.postV3ProjectsIdForkForkedFromId(options);
        
        case "POST_V3_PROJECTS_ID_HOOKS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdHooks(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssues(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_ADD_SPENT_TIME":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesIssueIdAddSpentTime(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesIssueIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_MOVE":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesIssueIdMove(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,issueId,noteId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_RESET_SPENT_TIME":
        // Function parameters for this API id,issueId
        return await this.postV3ProjectsIdIssuesIssueIdResetSpentTime(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_RESET_TIME_ESTIMATE":
        // Function parameters for this API id,issueId
        return await this.postV3ProjectsIdIssuesIssueIdResetTimeEstimate(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TIME_ESTIMATE":
        // Function parameters for this API id,issueId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesIssueIdTimeEstimate(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_ISSUE_ID_TODO":
        // Function parameters for this API id,issueId
        return await this.postV3ProjectsIdIssuesIssueIdTodo(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdIssuesNoteableIdNotes(options);
        
        case "POST_V3_PROJECTS_ID_ISSUES_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.postV3ProjectsIdIssuesSubscribableIdSubscription(options);
        
        case "POST_V3_PROJECTS_ID_KEYS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdKeys(options);
        
        case "POST_V3_PROJECTS_ID_KEYS_KEY_ID_ENABLE":
        // Function parameters for this API id,keyId
        return await this.postV3ProjectsIdKeysKeyIdEnable(options);
        
        case "POST_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdLabels(options);
        
        case "POST_V3_PROJECTS_ID_LABELS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.postV3ProjectsIdLabelsSubscribableIdSubscription(options);
        
        case "POST_V3_PROJECTS_ID_MEMBERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMembers(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_CANCEL_MERGE_WHEN_BUILD_SUCCEEDS":
        // Function parameters for this API id,mergeRequestId
        return await this.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestMergeRequestIdComments(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUEST_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.postV3ProjectsIdMergeRequestSubscribableIdSubscription(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequests(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_ADD_SPENT_TIME":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_CANCEL_MERGE_WHEN_BUILD_SUCCEEDS":
        // Function parameters for this API id,mergeRequestId
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_COMMENTS":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdComments(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,mergeRequestId,noteId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_RESET_SPENT_TIME":
        // Function parameters for this API id,mergeRequestId
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_RESET_TIME_ESTIMATE":
        // Function parameters for this API id,mergeRequestId
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TIME_ESTIMATE":
        // Function parameters for this API id,mergeRequestId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_TODO":
        // Function parameters for this API id,mergeRequestId
        return await this.postV3ProjectsIdMergeRequestsMergeRequestIdTodo(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMergeRequestsNoteableIdNotes(options);
        
        case "POST_V3_PROJECTS_ID_MERGE_REQUESTS_SUBSCRIBABLE_ID_SUBSCRIPTION":
        // Function parameters for this API id,subscribableId
        return await this.postV3ProjectsIdMergeRequestsSubscribableIdSubscription(options);
        
        case "POST_V3_PROJECTS_ID_MILESTONES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdMilestones(options);
        
        case "POST_V3_PROJECTS_ID_PIPELINE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdPipeline(options);
        
        case "POST_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID_CANCEL":
        // Function parameters for this API id,pipelineId
        return await this.postV3ProjectsIdPipelinesPipelineIdCancel(options);
        
        case "POST_V3_PROJECTS_ID_PIPELINES_PIPELINE_ID_RETRY":
        // Function parameters for this API id,pipelineId
        return await this.postV3ProjectsIdPipelinesPipelineIdRetry(options);
        
        case "POST_V3_PROJECTS_ID_REF_REFTRIGGER_BUILDS":
        // Function parameters for this API id,ref,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRefReftriggerBuilds(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_BRANCHES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryBranches(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryCommits(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_CHERRY_PICK":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryCommitsShaCherryPick(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_COMMITS_SHA_COMMENTS":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryCommitsShaComments(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryFiles(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_TAGS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryTags(options);
        
        case "POST_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME_RELEASE":
        // Function parameters for this API id,tagName,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRepositoryTagsTagNameRelease(options);
        
        case "POST_V3_PROJECTS_ID_RUNNERS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdRunners(options);
        
        case "POST_V3_PROJECTS_ID_SERVICES_MATTERMOST_SLASH_COMMANDS_TRIGGER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdServicesMattermostSlashCommandsTrigger(options);
        
        case "POST_V3_PROJECTS_ID_SERVICES_SLACK_SLASH_COMMANDS_TRIGGER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdServicesSlackSlashCommandsTrigger(options);
        
        case "POST_V3_PROJECTS_ID_SHARE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdShare(options);
        
        case "POST_V3_PROJECTS_ID_SNIPPETS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdSnippets(options);
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES":
        // Function parameters for this API id,noteableId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdSnippetsNoteableIdNotes(options);
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdSnippetsSnippetIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID_NOTES_NOTE_ID_AWARD_EMOJI":
        // Function parameters for this API id,snippetId,noteId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(options);
        
        case "POST_V3_PROJECTS_ID_STAR":
        // Function parameters for this API id
        return await this.postV3ProjectsIdStar(options);
        
        case "POST_V3_PROJECTS_ID_STATUSES_SHA":
        // Function parameters for this API id,sha,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdStatusesSha(options);
        
        case "POST_V3_PROJECTS_ID_TRIGGERS":
        // Function parameters for this API id
        return await this.postV3ProjectsIdTriggers(options);
        
        case "POST_V3_PROJECTS_ID_UNARCHIVE":
        // Function parameters for this API id
        return await this.postV3ProjectsIdUnarchive(options);
        
        case "POST_V3_PROJECTS_ID_UPLOADS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdUploads(options);
        
        case "POST_V3_PROJECTS_ID_VARIABLES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsIdVariables(options);
        
        case "POST_V3_PROJECTS_USER_USER_ID":
        // Function parameters for this API userId,UNKNOWN_BASE_TYPE
        return await this.postV3ProjectsUserUserId(options);
        
        case "PUT_V3_PROJECTS_ID":
        // Function parameters for this API id,opts
        return await this.putV3ProjectsId(options);
        
        case "PUT_V3_PROJECTS_ID_ACCESS_REQUESTS_USER_ID_APPROVE":
        // Function parameters for this API id,userId,opts
        return await this.putV3ProjectsIdAccessRequestsUserIdApprove(options);
        
        case "PUT_V3_PROJECTS_ID_BOARDS_BOARD_ID_LISTS_LIST_ID":
        // Function parameters for this API id,boardId,listId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdBoardsBoardIdListsListId(options);
        
        case "PUT_V3_PROJECTS_ID_ENVIRONMENTS_ENVIRONMENT_ID":
        // Function parameters for this API id,environmentId,opts
        return await this.putV3ProjectsIdEnvironmentsEnvironmentId(options);
        
        case "PUT_V3_PROJECTS_ID_HOOKS_HOOK_ID":
        // Function parameters for this API id,hookId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdHooksHookId(options);
        
        case "PUT_V3_PROJECTS_ID_ISSUES_ISSUE_ID":
        // Function parameters for this API id,issueId,opts
        return await this.putV3ProjectsIdIssuesIssueId(options);
        
        case "PUT_V3_PROJECTS_ID_ISSUES_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdIssuesNoteableIdNotesNoteId(options);
        
        case "PUT_V3_PROJECTS_ID_LABELS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdLabels(options);
        
        case "PUT_V3_PROJECTS_ID_MEMBERS_USER_ID":
        // Function parameters for this API id,userId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdMembersUserId(options);
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.putV3ProjectsIdMergeRequestMergeRequestId(options);
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUEST_MERGE_REQUEST_ID_MERGE":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.putV3ProjectsIdMergeRequestMergeRequestIdMerge(options);
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.putV3ProjectsIdMergeRequestsMergeRequestId(options);
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_MERGE_REQUEST_ID_MERGE":
        // Function parameters for this API id,mergeRequestId,opts
        return await this.putV3ProjectsIdMergeRequestsMergeRequestIdMerge(options);
        
        case "PUT_V3_PROJECTS_ID_MERGE_REQUESTS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(options);
        
        case "PUT_V3_PROJECTS_ID_MILESTONES_MILESTONE_ID":
        // Function parameters for this API id,milestoneId,opts
        return await this.putV3ProjectsIdMilestonesMilestoneId(options);
        
        case "PUT_V3_PROJECTS_ID_NOTIFICATION_SETTINGS":
        // Function parameters for this API id,opts
        return await this.putV3ProjectsIdNotificationSettings(options);
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH_PROTECT":
        // Function parameters for this API id,branch,opts
        return await this.putV3ProjectsIdRepositoryBranchesBranchProtect(options);
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_BRANCHES_BRANCH_UNPROTECT":
        // Function parameters for this API id,branch
        return await this.putV3ProjectsIdRepositoryBranchesBranchUnprotect(options);
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_FILES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdRepositoryFiles(options);
        
        case "PUT_V3_PROJECTS_ID_REPOSITORY_TAGS_TAG_NAME_RELEASE":
        // Function parameters for this API id,tagName,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdRepositoryTagsTagNameRelease(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_ASANA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesAsana(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_ASSEMBLA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesAssembla(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BAMBOO":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesBamboo(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUGZILLA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesBugzilla(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUILDKITE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesBuildkite(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_BUILDS_EMAIL":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesBuildsEmail(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_CAMPFIRE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesCampfire(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_CUSTOM_ISSUE_TRACKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesCustomIssueTracker(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_DRONE_CI":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesDroneCi(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_EMAILS_ON_PUSH":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesEmailsOnPush(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_EXTERNAL_WIKI":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesExternalWiki(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_FLOWDOCK":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesFlowdock(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_GEMNASIUM":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesGemnasium(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_HIPCHAT":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesHipchat(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_IRKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesIrker(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_JIRA":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesJira(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_KUBERNETES":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesKubernetes(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_MATTERMOST":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesMattermost(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_MATTERMOST_SLASH_COMMANDS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesMattermostSlashCommands(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PIPELINES_EMAIL":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesPipelinesEmail(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PIVOTALTRACKER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesPivotaltracker(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_PUSHOVER":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesPushover(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_REDMINE":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesRedmine(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_SLACK":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesSlack(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_SLACK_SLASH_COMMANDS":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesSlackSlashCommands(options);
        
        case "PUT_V3_PROJECTS_ID_SERVICES_TEAMCITY":
        // Function parameters for this API id,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdServicesTeamcity(options);
        
        case "PUT_V3_PROJECTS_ID_SNIPPETS_NOTEABLE_ID_NOTES_NOTE_ID":
        // Function parameters for this API id,noteableId,noteId,UNKNOWN_BASE_TYPE
        return await this.putV3ProjectsIdSnippetsNoteableIdNotesNoteId(options);
        
        case "PUT_V3_PROJECTS_ID_SNIPPETS_SNIPPET_ID":
        // Function parameters for this API id,snippetId,opts
        return await this.putV3ProjectsIdSnippetsSnippetId(options);
        
        case "PUT_V3_PROJECTS_ID_VARIABLES_KEY":
        // Function parameters for this API id,key,opts
        return await this.putV3ProjectsIdVariablesKey(options);
        
        case "GET_V3_NOTIFICATION_SETTINGS":
        // Function parameters for this API 
        return await this.getV3NotificationSettings(options);
        
        case "PUT_V3_NOTIFICATION_SETTINGS":
        // Function parameters for this API opts
        return await this.putV3NotificationSettings(options);
        
        case "GET_V3_INTERNAL_BROADCAST_MESSAGE":
        // Function parameters for this API 
        return await this.getV3InternalBroadcastMessage(options);
        
        case "GET_V3_INTERNAL_CHECK":
        // Function parameters for this API 
        return await this.getV3InternalCheck(options);
        
        case "GET_V3_INTERNAL_DISCOVER":
        // Function parameters for this API 
        return await this.getV3InternalDiscover(options);
        
        case "GET_V3_INTERNAL_MERGE_REQUEST_URLS":
        // Function parameters for this API 
        return await this.getV3InternalMergeRequestUrls(options);
        
        case "POST_V3_INTERNAL_ALLOWED":
        // Function parameters for this API 
        return await this.postV3InternalAllowed(options);
        
        case "POST_V3_INTERNAL_LFS_AUTHENTICATE":
        // Function parameters for this API 
        return await this.postV3InternalLfsAuthenticate(options);
        
        case "POST_V3_INTERNAL_TWO_FACTOR_RECOVERY_CODES":
        // Function parameters for this API 
        return await this.postV3InternalTwoFactorRecoveryCodes(options);
        
        case "DELETE_V3_HOOKS_ID":
        // Function parameters for this API id
        return await this.deleteV3HooksId(options);
        
        case "GET_V3_HOOKS":
        // Function parameters for this API 
        return await this.getV3Hooks(options);
        
        case "GET_V3_HOOKS_ID":
        // Function parameters for this API id
        return await this.getV3HooksId(options);
        
        case "POST_V3_HOOKS":
        // Function parameters for this API UNKNOWN_BASE_TYPE
        return await this.postV3Hooks(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for getV3Version
        function getV3Version(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.VersionApi();
apiInstance.getV3Version((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3Dockerfiles
        function getV3Dockerfiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DockerfilesApi();
apiInstance.getV3Dockerfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3DockerfilesName
        function getV3DockerfilesName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DockerfilesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3DockerfilesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3UserEmailsEmailId
        function deleteV3UserEmailsEmailId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.deleteV3UserEmailsEmailId(incomingOptions.emailId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3UserKeysKeyId
        function deleteV3UserKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.deleteV3UserKeysKeyId(incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3User
        function getV3User(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3User((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserEmails
        function getV3UserEmails(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3UserEmails((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserEmailsEmailId
        function getV3UserEmailsEmailId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.getV3UserEmailsEmailId(incomingOptions.emailId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3UserKeys
        function getV3UserKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi();
apiInstance.getV3UserKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3UserKeysKeyId
        function getV3UserKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.getV3UserKeysKeyId(incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3UserEmails
        function postV3UserEmails(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UserEmails(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3UserKeys
        function postV3UserKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UserApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UserKeys(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3TemplatesDockerfiles
        function getV3TemplatesDockerfiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesDockerfiles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesDockerfilesName
        function getV3TemplatesDockerfilesName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesDockerfilesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3TemplatesGitignores
        function getV3TemplatesGitignores(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitignores((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesGitignoresName
        function getV3TemplatesGitignoresName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesGitignoresName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3TemplatesGitlabCiYmls
        function getV3TemplatesGitlabCiYmls(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi();
apiInstance.getV3TemplatesGitlabCiYmls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3TemplatesGitlabCiYmlsName
        function getV3TemplatesGitlabCiYmlsName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesGitlabCiYmlsName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3TemplatesLicenses
        function getV3TemplatesLicenses(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let opts = {
  'popular': true // Boolean | If passed, returns only popular licenses
};*/
apiInstance.getV3TemplatesLicenses(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3TemplatesLicensesName
        function getV3TemplatesLicensesName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TemplatesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3TemplatesLicensesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3UsersId
        function deleteV3UsersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.deleteV3UsersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3UsersIdEmailsEmailId
        function deleteV3UsersIdEmailsEmailId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let emailId = 56;*/ // Number | The ID of the email
apiInstance.deleteV3UsersIdEmailsEmailId(incomingOptions.id, incomingOptions.emailId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3UsersIdKeysKeyId
        function deleteV3UsersIdKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let keyId = 56;*/ // Number | The ID of the SSH key
apiInstance.deleteV3UsersIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Users
        function getV3Users(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let opts = {
  'username': "username_example", // String | Get a single user with a specific username
  'search': "search_example", // String | Search for a username
  'active': true, // Boolean | Filters only active users
  'external': true, // Boolean | Filters only external users
  'blocked': true, // Boolean | Filters only blocked users
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Users(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3UsersId
        function getV3UsersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3UsersIdEmails
        function getV3UsersIdEmails(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersIdEmails(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3UsersIdEvents
        function getV3UsersIdEvents(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3UsersIdEvents(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3UsersIdKeys
        function getV3UsersIdKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.getV3UsersIdKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Users
        function postV3Users(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Users(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3UsersIdEmails
        function postV3UsersIdEmails(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UsersIdEmails(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3UsersIdKeys
        function postV3UsersIdKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3UsersIdKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3UsersId
        function putV3UsersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the use
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3UsersId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3UsersIdBlock
        function putV3UsersIdBlock(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.putV3UsersIdBlock(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3UsersIdUnblock
        function putV3UsersIdUnblock(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.UsersApi()
/*let id = 56;*/ // Number | The ID of the user
apiInstance.putV3UsersIdUnblock(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3Todos
        function deleteV3Todos(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi();
apiInstance.deleteV3Todos((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3TodosId
        function deleteV3TodosId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi()
/*let id = 56;*/ // Number | The ID of the todo being marked as done
apiInstance.deleteV3TodosId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Todos
        function getV3Todos(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.TodosApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Todos(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Namespaces
        function getV3Namespaces(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NamespacesApi()
/*let opts = {
  'search': "search_example", // String | Search query for namespaces
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Namespaces(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Session
        function postV3Session(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SessionApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Session(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3RunnersId
        function deleteV3RunnersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runner
apiInstance.deleteV3RunnersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Runners
        function getV3Runners(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Runners(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3RunnersAll
        function getV3RunnersAll(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3RunnersAll(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3RunnersId
        function getV3RunnersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runner
apiInstance.getV3RunnersId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3RunnersId
        function putV3RunnersId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.RunnersApi()
/*let id = 56;*/ // Number | The ID of the runne
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3RunnersId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Issues
        function getV3Issues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.IssuesApi()
/*let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Issues(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3KeysId
        function getV3KeysId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.KeysApi()
/*let id = 56;*/ // Number | 
apiInstance.getV3KeysId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ApplicationSettings
        function getV3ApplicationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ApplicationApi();
apiInstance.getV3ApplicationSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for putV3ApplicationSettings
        function putV3ApplicationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ApplicationApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ApplicationSettings(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Licenses
        function getV3Licenses(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.LicensesApi()
/*let opts = {
  'popular': true // Boolean | If passed, returns only popular licenses
};*/
apiInstance.getV3Licenses(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3LicensesName
        function getV3LicensesName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.LicensesApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3LicensesName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Gitignores
        function getV3Gitignores(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitignoresApi();
apiInstance.getV3Gitignores((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3GitignoresName
        function getV3GitignoresName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitignoresApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3GitignoresName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3SnippetsId
        function deleteV3SnippetsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.deleteV3SnippetsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Snippets
        function getV3Snippets(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3Snippets(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3SnippetsId
        function getV3SnippetsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.getV3SnippetsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3SnippetsIdRaw
        function getV3SnippetsIdRaw(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippet
apiInstance.getV3SnippetsIdRaw(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3SnippetsPublic
        function getV3SnippetsPublic(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3SnippetsPublic(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Snippets
        function postV3Snippets(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Snippets(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3SnippetsId
        function putV3SnippetsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SnippetsApi()
/*let id = 56;*/ // Number | The ID of a snippe
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3SnippetsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3CiLint
        function postV3CiLint(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.CiApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3CiLint(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3GitlabCiYmls
        function getV3GitlabCiYmls(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitlabCiYmlsApi();
apiInstance.getV3GitlabCiYmls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3GitlabCiYmlsName
        function getV3GitlabCiYmlsName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GitlabCiYmlsApi()
/*let name = "name_example";*/ // String | The name of the template
apiInstance.getV3GitlabCiYmlsName(incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3SidekiqCompoundMetrics
        function getV3SidekiqCompoundMetrics(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqCompoundMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqJobStats
        function getV3SidekiqJobStats(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqJobStats((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqProcessMetrics
        function getV3SidekiqProcessMetrics(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqProcessMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3SidekiqQueueMetrics
        function getV3SidekiqQueueMetrics(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.SidekiqApi();
apiInstance.getV3SidekiqQueueMetrics((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3GroupsId
        function deleteV3GroupsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a group
apiInstance.deleteV3GroupsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3GroupsIdAccessRequestsUserId
        function deleteV3GroupsIdAccessRequestsUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the access requester
apiInstance.deleteV3GroupsIdAccessRequestsUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3GroupsIdMembersUserId
        function deleteV3GroupsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.deleteV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3Groups
        function getV3Groups(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let opts = {
  'statistics': true, // Boolean | Include project statistics
  'allAvailable': true, // Boolean | Show all group that you have access to
  'search': "search_example", // String | Search for a specific group
  'orderBy': "'name'", // String | Order by name or path
  'sort': "'asc'", // String | Sort by asc (ascending) or desc (descending)
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'skipGroups': 56 // [Number] | Array of group ids to exclude from list
};*/
apiInstance.getV3Groups(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsId
        function getV3GroupsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a group
apiInstance.getV3GroupsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdAccessRequests
        function getV3GroupsIdAccessRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdAccessRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdIssues
        function getV3GroupsIdIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'state': "'opened'", // String | Return opened, closed, or all issues
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdIssues(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdMembers
        function getV3GroupsIdMembers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdMembers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdMembersUserId
        function getV3GroupsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.getV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdNotificationSettings
        function getV3GroupsIdNotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3GroupsIdNotificationSettings(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsIdProjects
        function getV3GroupsIdProjects(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3GroupsIdProjects(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3GroupsOwned
        function getV3GroupsOwned(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3GroupsOwned(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Groups
        function postV3Groups(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Groups(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3GroupsIdAccessRequests
        function postV3GroupsIdAccessRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID
apiInstance.postV3GroupsIdAccessRequests(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3GroupsIdMembers
        function postV3GroupsIdMembers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3GroupsIdMembers(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3GroupsIdProjectsProjectId
        function postV3GroupsIdProjectsProjectId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let projectId = "projectId_example";*/ // String | The ID or path of the project
apiInstance.postV3GroupsIdProjectsProjectId(incomingOptions.id, incomingOptions.projectId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3GroupsId
        function putV3GroupsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The ID of a grou
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3GroupsIdAccessRequestsUserIdApprove
        function putV3GroupsIdAccessRequestsUserIdApprove(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the access requeste
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsIdAccessRequestsUserIdApprove(incomingOptions.id, incomingOptions.userId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3GroupsIdMembersUserId
        function putV3GroupsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group I
/*let userId = 56;*/ // Number | The user ID of the new membe
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3GroupsIdMembersUserId(incomingOptions.id, incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3GroupsIdNotificationSettings
        function putV3GroupsIdNotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.GroupsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAM
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3GroupsIdNotificationSettings(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3DeployKeys
        function getV3DeployKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.DeployKeysApi();
apiInstance.getV3DeployKeys((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3ProjectsId
        function deleteV3ProjectsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdAccessRequestsUserId
        function deleteV3ProjectsIdAccessRequestsUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the access requester
apiInstance.deleteV3ProjectsIdAccessRequestsUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdBoardsBoardIdListsListId
        function deleteV3ProjectsIdBoardsBoardIdListsListId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a board list
apiInstance.deleteV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdDeployKeysKeyId
        function deleteV3ProjectsIdDeployKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdDeployKeysKeyIdDisable
        function deleteV3ProjectsIdDeployKeysKeyIdDisable(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdDeployKeysKeyIdDisable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdEnvironmentsEnvironmentId
        function deleteV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let environmentId = 56;*/ // Number | The environment ID
apiInstance.deleteV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions.id, incomingOptions.environmentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdFork
        function deleteV3ProjectsIdFork(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdFork(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdHooksHookId
        function deleteV3ProjectsIdHooksHookId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of the hook to delete
apiInstance.deleteV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueId
        function deleteV3ProjectsIdIssuesIssueId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.deleteV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
        function deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
        function deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesNoteableIdNotesNoteId
        function deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdIssuesSubscribableIdSubscription
        function deleteV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdKeysKeyId
        function deleteV3ProjectsIdKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdKeysKeyIdDisable
        function deleteV3ProjectsIdKeysKeyIdDisable(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.deleteV3ProjectsIdKeysKeyIdDisable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdLabels
        function deleteV3ProjectsIdLabels(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let name = "name_example";*/ // String | The name of the label to be deleted
apiInstance.deleteV3ProjectsIdLabels(incomingOptions.id, incomingOptions.name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdLabelsSubscribableIdSubscription
        function deleteV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMembersUserId
        function deleteV3ProjectsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.deleteV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestSubscribableIdSubscription
        function deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestId
        function deleteV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
        function deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
        function deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        function deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription
        function deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.deleteV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryBranchesBranch
        function deleteV3ProjectsIdRepositoryBranchesBranch(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.deleteV3ProjectsIdRepositoryBranchesBranch(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryFiles
        function deleteV3ProjectsIdRepositoryFiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let filePath = "filePath_example";*/ // String | The path to new file. Ex. lib/class.r
/*let branchName = "branchName_example";*/ // String | The name of branc
/*let commitMessage = "commitMessage_example";*/ // String | Commit Messag
/*let opts = {
  'authorEmail': "authorEmail_example", // String | The email of the author
  'authorName': "authorName_example" // String | The name of the author
};*/
apiInstance.deleteV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.filePath, incomingOptions.branchName, incomingOptions.commitMessage, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryMergedBranches
        function deleteV3ProjectsIdRepositoryMergedBranches(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdRepositoryMergedBranches(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRepositoryTagsTagName
        function deleteV3ProjectsIdRepositoryTagsTagName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the tag
apiInstance.deleteV3ProjectsIdRepositoryTagsTagName(incomingOptions.id, incomingOptions.tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdRunnersRunnerId
        function deleteV3ProjectsIdRunnersRunnerId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let runnerId = 56;*/ // Number | The ID of the runner
apiInstance.deleteV3ProjectsIdRunnersRunnerId(incomingOptions.id, incomingOptions.runnerId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdServicesServiceSlug
        function deleteV3ProjectsIdServicesServiceSlug(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let serviceSlug = "serviceSlug_example";*/ // String | The name of the servic
/*let id = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdServicesServiceSlug(incomingOptions.serviceSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdShareGroupId
        function deleteV3ProjectsIdShareGroupId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let groupId = 56;*/ // Number | The ID of the group
apiInstance.deleteV3ProjectsIdShareGroupId(incomingOptions.id, incomingOptions.groupId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId
        function deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a note
apiInstance.deleteV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetId
        function deleteV3ProjectsIdSnippetsSnippetId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.deleteV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
        function deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
        function deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of an award emoj
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.deleteV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdStar
        function deleteV3ProjectsIdStar(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.deleteV3ProjectsIdStar(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdTriggersToken
        function deleteV3ProjectsIdTriggersToken(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let token = "token_example";*/ // String | The unique token of trigger
apiInstance.deleteV3ProjectsIdTriggersToken(incomingOptions.id, incomingOptions.token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deleteV3ProjectsIdVariablesKey
        function deleteV3ProjectsIdVariablesKey(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variable
apiInstance.deleteV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Projects
        function getV3Projects(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3Projects(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsAll
        function getV3ProjectsAll(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3ProjectsAll(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsId
        function getV3ProjectsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdAccessRequests
        function getV3ProjectsIdAccessRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdAccessRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoards
        function getV3ProjectsIdBoards(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdBoards(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoardsBoardIdLists
        function getV3ProjectsIdBoardsBoardIdLists(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a board
apiInstance.getV3ProjectsIdBoardsBoardIdLists(incomingOptions.id, incomingOptions.boardId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBoardsBoardIdListsListId
        function getV3ProjectsIdBoardsBoardIdListsListId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a list
apiInstance.getV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuilds
        function getV3ProjectsIdBuilds(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdBuilds(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsArtifactsRefNameDownload
        function getV3ProjectsIdBuildsArtifactsRefNameDownload(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let refName = "refName_example";*/ // String | The ref from repositor
/*let job = "job_example";*/ // String | The name for the build
apiInstance.getV3ProjectsIdBuildsArtifactsRefNameDownload(incomingOptions.id, incomingOptions.refName, incomingOptions.job, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildId
        function getV3ProjectsIdBuildsBuildId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildId(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildIdArtifacts
        function getV3ProjectsIdBuildsBuildIdArtifacts(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdArtifacts(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdBuildsBuildIdTrace
        function getV3ProjectsIdBuildsBuildIdTrace(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.getV3ProjectsIdBuildsBuildIdTrace(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployKeys
        function getV3ProjectsIdDeployKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the project
apiInstance.getV3ProjectsIdDeployKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployKeysKeyId
        function getV3ProjectsIdDeployKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdDeployKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeployments
        function getV3ProjectsIdDeployments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdDeployments(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdDeploymentsDeploymentId
        function getV3ProjectsIdDeploymentsDeploymentId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let deploymentId = 56;*/ // Number | The deployment ID
apiInstance.getV3ProjectsIdDeploymentsDeploymentId(incomingOptions.id, incomingOptions.deploymentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdEnvironments
        function getV3ProjectsIdEnvironments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdEnvironments(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdEvents
        function getV3ProjectsIdEvents(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdEvents(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdHooks
        function getV3ProjectsIdHooks(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdHooks(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdHooksHookId
        function getV3ProjectsIdHooksHookId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of a project hook
apiInstance.getV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssues
        function getV3ProjectsIdIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return opened, closed, or all issues
  'iid': 56, // Number | Return the issue having the given `iid`
  'labels': "labels_example", // String | Comma-separated list of label names
  'milestone': "milestone_example", // String | Return issues for a specific milestone
  'orderBy': "'created_at'", // String | Return issues ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return issues sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssues(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueId
        function getV3ProjectsIdIssuesIssueId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdAwardEmoji
        function getV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId
        function getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
        function getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId
        function getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesIssueIdTimeStats
        function getV3ProjectsIdIssuesIssueIdTimeStats(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.getV3ProjectsIdIssuesIssueIdTimeStats(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesNoteableIdNotes
        function getV3ProjectsIdIssuesNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdIssuesNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdIssuesNoteableIdNotesNoteId
        function getV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdKeys
        function getV3ProjectsIdKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the project
apiInstance.getV3ProjectsIdKeys(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdKeysKeyId
        function getV3ProjectsIdKeysKeyId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.getV3ProjectsIdKeysKeyId(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdLabels
        function getV3ProjectsIdLabels(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdLabels(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMembers
        function getV3ProjectsIdMembers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'query': "query_example", // String | A query string to search for members
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMembers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMembersUserId
        function getV3ProjectsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the member
apiInstance.getV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestId
        function getV3ProjectsIdMergeRequestMergeRequestId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdChanges
        function getV3ProjectsIdMergeRequestMergeRequestIdChanges(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdChanges(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues
        function getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdClosesIssues(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdComments
        function getV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestMergeRequestIdCommits
        function getV3ProjectsIdMergeRequestMergeRequestIdCommits(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestMergeRequestIdCommits(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequests
        function getV3ProjectsIdMergeRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return opened, closed, merged, or all merge requests
  'orderBy': "'created_at'", // String | Return merge requests ordered by `created_at` or `updated_at` fields.
  'sort': "'desc'", // String | Return merge requests sorted in `asc` or `desc` order.
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the merge requests
};*/
apiInstance.getV3ProjectsIdMergeRequests(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestId
        function getV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
        function getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId
        function getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdChanges
        function getV3ProjectsIdMergeRequestsMergeRequestIdChanges(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdChanges(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues
        function getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdClosesIssues(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdComments
        function getV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdCommits
        function getV3ProjectsIdMergeRequestsMergeRequestIdCommits(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdCommits(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
        function getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId
        function getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats
        function getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdTimeStats(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdVersions
        function getV3ProjectsIdMergeRequestsMergeRequestIdVersions(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge request
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersions(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId
        function getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a merge reques
/*let versionId = 56;*/ // Number | The ID of a merge request diff version
apiInstance.getV3ProjectsIdMergeRequestsMergeRequestIdVersionsVersionId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsNoteableIdNotes
        function getV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        function getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestones
        function getV3ProjectsIdMilestones(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'state': "'all'", // String | Return \"active\", \"closed\", or \"all\" milestones
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'iid': 56 // [Number] | The IID of the milestone
};*/
apiInstance.getV3ProjectsIdMilestones(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestonesMilestoneId
        function getV3ProjectsIdMilestonesMilestoneId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project milestone
apiInstance.getV3ProjectsIdMilestonesMilestoneId(incomingOptions.id, incomingOptions.milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdMilestonesMilestoneIdIssues
        function getV3ProjectsIdMilestonesMilestoneIdIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project mileston
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdMilestonesMilestoneIdIssues(incomingOptions.id, incomingOptions.milestoneId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdNotificationSettings
        function getV3ProjectsIdNotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAME
apiInstance.getV3ProjectsIdNotificationSettings(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdPipelines
        function getV3ProjectsIdPipelines(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'scope': "scope_example" // String | Either running, branches, or tags
};*/
apiInstance.getV3ProjectsIdPipelines(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdPipelinesPipelineId
        function getV3ProjectsIdPipelinesPipelineId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.getV3ProjectsIdPipelinesPipelineId(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryArchive
        function getV3ProjectsIdRepositoryArchive(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'sha': "sha_example", // String | The commit sha of the archive to be downloaded
  'format': "format_example" // String | The archive format
};*/
apiInstance.getV3ProjectsIdRepositoryArchive(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBlobsSha
        function getV3ProjectsIdRepositoryBlobsSha(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag nam
/*let filepath = "filepath_example";*/ // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryBlobsSha(incomingOptions.id, incomingOptions.sha, incomingOptions.filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBranches
        function getV3ProjectsIdRepositoryBranches(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryBranches(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryBranchesBranch
        function getV3ProjectsIdRepositoryBranchesBranch(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.getV3ProjectsIdRepositoryBranchesBranch(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommits
        function getV3ProjectsIdRepositoryCommits(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'since': "since_example", // String | Only commits after or in this date will be returned
  'until': "until_example", // String | Only commits before or in this date will be returned
  'page': 0, // Number | The page for pagination
  'perPage': 20, // Number | The number of results per page
  'path': "path_example" // String | The file path
};*/
apiInstance.getV3ProjectsIdRepositoryCommits(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsSha
        function getV3ProjectsIdRepositoryCommitsSha(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsSha(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaBlob
        function getV3ProjectsIdRepositoryCommitsShaBlob(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag nam
/*let filepath = "filepath_example";*/ // String | The path to the file to display
apiInstance.getV3ProjectsIdRepositoryCommitsShaBlob(incomingOptions.id, incomingOptions.sha, incomingOptions.filepath, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaBuilds
        function getV3ProjectsIdRepositoryCommitsShaBuilds(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The SHA id of a commi
/*let opts = {
  'scope': "scope_example", // String | The scope of builds to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaBuilds(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaComments
        function getV3ProjectsIdRepositoryCommitsShaComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or ta
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaComments(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaDiff
        function getV3ProjectsIdRepositoryCommitsShaDiff(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha, or the name of a branch or tag
apiInstance.getV3ProjectsIdRepositoryCommitsShaDiff(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCommitsShaStatuses
        function getV3ProjectsIdRepositoryCommitsShaStatuses(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit has
/*let opts = {
  'ref': "ref_example", // String | The ref
  'stage': "stage_example", // String | The stage
  'name': "name_example", // String | The name
  'all': "all_example", // String | Show all statuses, default: false
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRepositoryCommitsShaStatuses(incomingOptions.id, incomingOptions.sha, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryCompare
        function getV3ProjectsIdRepositoryCompare(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let from = "from_example";*/ // String | The commit, branch name, or tag name to start compariso
/*let to = "to_example";*/ // String | The commit, branch name, or tag name to stop comparison
apiInstance.getV3ProjectsIdReposiincomingOptions.toryCompare(incomingOptions.id, incomingOptions.from, to, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryContributors
        function getV3ProjectsIdRepositoryContributors(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryContributors(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryFiles
        function getV3ProjectsIdRepositoryFiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let filePath = "filePath_example";*/ // String | The path to the file. Ex. lib/class.r
/*let ref = "ref_example";*/ // String | The name of branch, tag, or commit
apiInstance.getV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.filePath, incomingOptions.ref, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryRawBlobsSha
        function getV3ProjectsIdRepositoryRawBlobsSha(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit, branch name, or tag name
apiInstance.getV3ProjectsIdRepositoryRawBlobsSha(incomingOptions.id, incomingOptions.sha, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTags
        function getV3ProjectsIdRepositoryTags(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.getV3ProjectsIdRepositoryTags(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTagsTagName
        function getV3ProjectsIdRepositoryTagsTagName(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the tag
apiInstance.getV3ProjectsIdRepositoryTagsTagName(incomingOptions.id, incomingOptions.tagName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRepositoryTree
        function getV3ProjectsIdRepositoryTree(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'refName': "refName_example", // String | The name of a repository branch or tag, if not given the default branch is used
  'path': "path_example", // String | The path of the tree
  'recursive': true // Boolean | Used to get a recursive tree
};*/
apiInstance.getV3ProjectsIdRepositoryTree(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdRunners
        function getV3ProjectsIdRunners(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'scope': "scope_example", // String | The scope of specific runners to show
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdRunners(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdServicesServiceSlug
        function getV3ProjectsIdServicesServiceSlug(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let serviceSlug = "serviceSlug_example";*/ // String | The name of the servic
/*let id = 56;*/ // Number | 
apiInstance.getV3ProjectsIdServicesServiceSlug(incomingOptions.serviceSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippets
        function getV3ProjectsIdSnippets(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippets(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsNoteableIdNotes
        function getV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsNoteableIdNotesNoteId
        function getV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteId = 56;*/ // Number | The ID of a not
/*let noteableId = 56;*/ // Number | The ID of the noteable
apiInstance.getV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteId, incomingOptions.noteableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetId
        function getV3ProjectsIdSnippetsSnippetId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdAwardEmoji
        function getV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of an Issue, Merge Request or Snippe
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId
        function getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
        function getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId
        function getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let awardId = 56;*/ // Number | The ID of the awar
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number | 
apiInstance.getV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmojiAwardId(incomingOptions.awardId, incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdSnippetsSnippetIdRaw
        function getV3ProjectsIdSnippetsSnippetIdRaw(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippet
apiInstance.getV3ProjectsIdSnippetsSnippetIdRaw(incomingOptions.id, incomingOptions.snippetId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getV3ProjectsIdTriggers
        function getV3ProjectsIdTriggers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdTriggers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdTriggersToken
        function getV3ProjectsIdTriggersToken(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let token = "token_example";*/ // String | The unique token of trigger
apiInstance.getV3ProjectsIdTriggersToken(incomingOptions.id, incomingOptions.token, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdUsers
        function getV3ProjectsIdUsers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'search': "search_example", // String | Return list of users matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdUsers(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdVariables
        function getV3ProjectsIdVariables(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsIdVariables(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsIdVariablesKey
        function getV3ProjectsIdVariablesKey(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variable
apiInstance.getV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsOwned
        function getV3ProjectsOwned(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true, // Boolean | Return only the ID, URL, name, and path of each project
  'statistics': true // Boolean | Include project statistics
};*/
apiInstance.getV3ProjectsOwned(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsSearchQuery
        function getV3ProjectsSearchQuery(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let query = "query_example";*/ // String | The project name to be searche
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'page': 56, // Number | Current page number
  'perPage': 56 // Number | Number of items per page
};*/
apiInstance.getV3ProjectsSearchQuery(incomingOptions.query, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsStarred
        function getV3ProjectsStarred(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3ProjectsStarred(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3ProjectsVisible
        function getV3ProjectsVisible(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let opts = {
  'orderBy': "'created_at'", // String | Return projects ordered by field
  'sort': "'desc'", // String | Return projects sorted in ascending and descending order
  'archived': true, // Boolean | Limit by archived status
  'visibility': "visibility_example", // String | Limit by visibility
  'search': "search_example", // String | Return list of authorized projects matching the search criteria
  'page': 56, // Number | Current page number
  'perPage': 56, // Number | Number of items per page
  'simple': true // Boolean | Return only the ID, URL, name, and path of each project
};*/
apiInstance.getV3ProjectsVisible(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Projects
        function postV3Projects(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Projects(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsForkId
        function postV3ProjectsForkId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.postV3ProjectsForkId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdAccessRequests
        function postV3ProjectsIdAccessRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project ID
apiInstance.postV3ProjectsIdAccessRequests(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdArchive
        function postV3ProjectsIdArchive(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdArchive(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBoardsBoardIdLists
        function postV3ProjectsIdBoardsBoardIdLists(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdBoardsBoardIdLists(incomingOptions.id, incomingOptions.boardId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdArtifactsKeep
        function postV3ProjectsIdBuildsBuildIdArtifactsKeep(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdArtifactsKeep(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdCancel
        function postV3ProjectsIdBuildsBuildIdCancel(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdCancel(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdErase
        function postV3ProjectsIdBuildsBuildIdErase(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdErase(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdPlay
        function postV3ProjectsIdBuildsBuildIdPlay(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a Build
apiInstance.postV3ProjectsIdBuildsBuildIdPlay(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdBuildsBuildIdRetry
        function postV3ProjectsIdBuildsBuildIdRetry(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let buildId = 56;*/ // Number | The ID of a build
apiInstance.postV3ProjectsIdBuildsBuildIdRetry(incomingOptions.id, incomingOptions.buildId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdDeployKeys
        function postV3ProjectsIdDeployKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdDeployKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdDeployKeysKeyIdEnable
        function postV3ProjectsIdDeployKeysKeyIdEnable(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdDeployKeysKeyIdEnable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdEnvironments
        function postV3ProjectsIdEnvironments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdEnvironments(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdForkForkedFromId
        function postV3ProjectsIdForkForkedFromId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let forkedFromId = "forkedFromId_example";*/ // String | The ID of the project it was forked from
apiInstance.postV3ProjectsIdForkForkedFromId(incomingOptions.id, incomingOptions.forkedFromId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdHooks
        function postV3ProjectsIdHooks(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdHooks(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssues
        function postV3ProjectsIdIssues(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssues(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdAddSpentTime
        function postV3ProjectsIdIssuesIssueIdAddSpentTime(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAddSpentTime(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdAwardEmoji
        function postV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdMove
        function postV3ProjectsIdIssuesIssueIdMove(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdMove(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji
        function postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let issueId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.issueId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdResetSpentTime
        function postV3ProjectsIdIssuesIssueIdResetSpentTime(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetSpentTime(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdResetTimeEstimate
        function postV3ProjectsIdIssuesIssueIdResetTimeEstimate(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issue
apiInstance.postV3ProjectsIdIssuesIssueIdResetTimeEstimate(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdTimeEstimate
        function postV3ProjectsIdIssuesIssueIdTimeEstimate(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesIssueIdTimeEstimate(incomingOptions.id, incomingOptions.issueId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesIssueIdTodo
        function postV3ProjectsIdIssuesIssueIdTodo(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of an issuable
apiInstance.postV3ProjectsIdIssuesIssueIdTodo(incomingOptions.id, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesNoteableIdNotes
        function postV3ProjectsIdIssuesNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdIssuesNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdIssuesSubscribableIdSubscription
        function postV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdIssuesSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdKeys
        function postV3ProjectsIdKeys(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdKeys(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdKeysKeyIdEnable
        function postV3ProjectsIdKeysKeyIdEnable(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of the projec
/*let keyId = 56;*/ // Number | The ID of the deploy key
apiInstance.postV3ProjectsIdKeysKeyIdEnable(incomingOptions.id, incomingOptions.keyId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdLabels
        function postV3ProjectsIdLabels(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdLabels(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdLabelsSubscribableIdSubscription
        function postV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdLabelsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMembers
        function postV3ProjectsIdMembers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMembers(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds
        function postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestMergeRequestIdComments
        function postV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestSubscribableIdSubscription
        function postV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequests
        function postV3ProjectsIdMergeRequests(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequests(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime
        function postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_reques
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAddSpentTime(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji
        function postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds
        function postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdCancelMergeWhenBuildSucceeds(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdComments
        function postV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdComments(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji
        function postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let mergeRequestId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime
        function postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetSpentTime(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate
        function postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_request
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdResetTimeEstimate(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate
        function postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of a project merge_reques
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTimeEstimate(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsMergeRequestIdTodo
        function postV3ProjectsIdMergeRequestsMergeRequestIdTodo(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number | The ID of an issuable
apiInstance.postV3ProjectsIdMergeRequestsMergeRequestIdTodo(incomingOptions.id, incomingOptions.mergeRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsNoteableIdNotes
        function postV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMergeRequestsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMergeRequestsSubscribableIdSubscription
        function postV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let subscribableId = "subscribableId_example";*/ // String | The ID of a resource
apiInstance.postV3ProjectsIdMergeRequestsSubscribableIdSubscription(incomingOptions.id, incomingOptions.subscribableId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdMilestones
        function postV3ProjectsIdMilestones(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdMilestones(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipeline
        function postV3ProjectsIdPipeline(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdPipeline(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipelinesPipelineIdCancel
        function postV3ProjectsIdPipelinesPipelineIdCancel(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdCancel(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdPipelinesPipelineIdRetry
        function postV3ProjectsIdPipelinesPipelineIdRetry(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let pipelineId = 56;*/ // Number | The pipeline ID
apiInstance.postV3ProjectsIdPipelinesPipelineIdRetry(incomingOptions.id, incomingOptions.pipelineId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRefReftriggerBuilds
        function postV3ProjectsIdRefReftriggerBuilds(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let ref = "ref_example";*/ // String | The commit sha or name of a branch or ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRefReftriggerBuilds(incomingOptions.id, incomingOptions.ref, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryBranches
        function postV3ProjectsIdRepositoryBranches(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryBranches(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommits
        function postV3ProjectsIdRepositoryCommits(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommits(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommitsShaCherryPick
        function postV3ProjectsIdRepositoryCommitsShaCherryPick(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | A commit sha to be cherry picke
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaCherryPick(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryCommitsShaComments
        function postV3ProjectsIdRepositoryCommitsShaComments(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit's SH
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryCommitsShaComments(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryFiles
        function postV3ProjectsIdRepositoryFiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryTags
        function postV3ProjectsIdRepositoryTags(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTags(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRepositoryTagsTagNameRelease
        function postV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions.id, incomingOptions.tagName, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdRunners
        function postV3ProjectsIdRunners(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdRunners(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdServicesMattermostSlashCommandsTrigger
        function postV3ProjectsIdServicesMattermostSlashCommandsTrigger(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesMattermostSlashCommandsTrigger(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdServicesSlackSlashCommandsTrigger
        function postV3ProjectsIdServicesSlackSlashCommandsTrigger(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdServicesSlackSlashCommandsTrigger(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdShare
        function postV3ProjectsIdShare(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdShare(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippets
        function postV3ProjectsIdSnippets(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippets(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsNoteableIdNotes
        function postV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsNoteableIdNotes(incomingOptions.id, incomingOptions.noteableId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsSnippetIdAwardEmoji
        function postV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji
        function postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let snippetId = 56;*/ // Number |
/*let noteId = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdSnippetsSnippetIdNotesNoteIdAwardEmoji(incomingOptions.id, incomingOptions.snippetId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdStar
        function postV3ProjectsIdStar(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdStar(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdStatusesSha
        function postV3ProjectsIdStatusesSha(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let sha = "sha_example";*/ // String | The commit has
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdStatusesSha(incomingOptions.id, incomingOptions.sha, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdTriggers
        function postV3ProjectsIdTriggers(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdTriggers(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdUnarchive
        function postV3ProjectsIdUnarchive(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a project
apiInstance.postV3ProjectsIdUnarchive(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsIdUploads
        function postV3ProjectsIdUploads(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdUploads(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for postV3ProjectsIdVariables
        function postV3ProjectsIdVariables(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsIdVariables(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3ProjectsUserUserId
        function postV3ProjectsUserUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let userId = 56;*/ // Number | The ID of a use
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3ProjectsUserUserId(incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsId
        function putV3ProjectsId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsId(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdAccessRequestsUserIdApprove
        function putV3ProjectsIdAccessRequestsUserIdApprove(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the access requeste
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdAccessRequestsUserIdApprove(incomingOptions.id, incomingOptions.userId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdBoardsBoardIdListsListId
        function putV3ProjectsIdBoardsBoardIdListsListId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let boardId = 56;*/ // Number | The ID of a boar
/*let listId = 56;*/ // Number | The ID of a lis
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdBoardsBoardIdListsListId(incomingOptions.id, incomingOptions.boardId, incomingOptions.listId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdEnvironmentsEnvironmentId
        function putV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let environmentId = 56;*/ // Number | The environment I
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdEnvironmentsEnvironmentId(incomingOptions.id, incomingOptions.environmentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdHooksHookId
        function putV3ProjectsIdHooksHookId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let hookId = 56;*/ // Number | The ID of the hook to updat
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdHooksHookId(incomingOptions.id, incomingOptions.hookId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdIssuesIssueId
        function putV3ProjectsIdIssuesIssueId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let issueId = 56;*/ // Number | The ID of a project issu
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdIssuesIssueId(incomingOptions.id, incomingOptions.issueId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdIssuesNoteableIdNotesNoteId
        function putV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdIssuesNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdLabels
        function putV3ProjectsIdLabels(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdLabels(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMembersUserId
        function putV3ProjectsIdMembersUserId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let userId = 56;*/ // Number | The user ID of the new membe
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMembersUserId(incomingOptions.id, incomingOptions.userId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestMergeRequestId
        function putV3ProjectsIdMergeRequestMergeRequestId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestMergeRequestIdMerge
        function putV3ProjectsIdMergeRequestMergeRequestIdMerge(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestMergeRequestIdMerge(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsMergeRequestId
        function putV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestId(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsMergeRequestIdMerge
        function putV3ProjectsIdMergeRequestsMergeRequestIdMerge(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let mergeRequestId = 56;*/ // Number |
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMergeRequestsMergeRequestIdMerge(incomingOptions.id, incomingOptions.mergeRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId
        function putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdMergeRequestsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdMilestonesMilestoneId
        function putV3ProjectsIdMilestonesMilestoneId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let milestoneId = 56;*/ // Number | The ID of a project mileston
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdMilestonesMilestoneId(incomingOptions.id, incomingOptions.milestoneId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdNotificationSettings
        function putV3ProjectsIdNotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The group ID or project ID or project NAMESPACE/PROJECT_NAM
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdNotificationSettings(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryBranchesBranchProtect
        function putV3ProjectsIdRepositoryBranchesBranchProtect(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branc
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdRepositoryBranchesBranchProtect(incomingOptions.id, incomingOptions.branch, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryBranchesBranchUnprotect
        function putV3ProjectsIdRepositoryBranchesBranchUnprotect(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let branch = "branch_example";*/ // String | The name of the branch
apiInstance.putV3ProjectsIdRepositoryBranchesBranchUnprotect(incomingOptions.id, incomingOptions.branch, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryFiles
        function putV3ProjectsIdRepositoryFiles(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The project I
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryFiles(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdRepositoryTagsTagNameRelease
        function putV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let tagName = "tagName_example";*/ // String | The name of the ta
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdRepositoryTagsTagNameRelease(incomingOptions.id, incomingOptions.tagName, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesAsana
        function putV3ProjectsIdServicesAsana(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAsana(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesAssembla
        function putV3ProjectsIdServicesAssembla(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesAssembla(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBamboo
        function putV3ProjectsIdServicesBamboo(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBamboo(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBugzilla
        function putV3ProjectsIdServicesBugzilla(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBugzilla(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBuildkite
        function putV3ProjectsIdServicesBuildkite(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildkite(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesBuildsEmail
        function putV3ProjectsIdServicesBuildsEmail(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesBuildsEmail(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesCampfire
        function putV3ProjectsIdServicesCampfire(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCampfire(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesCustomIssueTracker
        function putV3ProjectsIdServicesCustomIssueTracker(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesCustomIssueTracker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesDroneCi
        function putV3ProjectsIdServicesDroneCi(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesDroneCi(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesEmailsOnPush
        function putV3ProjectsIdServicesEmailsOnPush(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesEmailsOnPush(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesExternalWiki
        function putV3ProjectsIdServicesExternalWiki(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesExternalWiki(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesFlowdock
        function putV3ProjectsIdServicesFlowdock(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesFlowdock(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesGemnasium
        function putV3ProjectsIdServicesGemnasium(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesGemnasium(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesHipchat
        function putV3ProjectsIdServicesHipchat(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesHipchat(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesIrker
        function putV3ProjectsIdServicesIrker(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesIrker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesJira
        function putV3ProjectsIdServicesJira(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesJira(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesKubernetes
        function putV3ProjectsIdServicesKubernetes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesKubernetes(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesMattermost
        function putV3ProjectsIdServicesMattermost(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermost(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesMattermostSlashCommands
        function putV3ProjectsIdServicesMattermostSlashCommands(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesMattermostSlashCommands(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPipelinesEmail
        function putV3ProjectsIdServicesPipelinesEmail(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPipelinesEmail(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPivotaltracker
        function putV3ProjectsIdServicesPivotaltracker(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPivotaltracker(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesPushover
        function putV3ProjectsIdServicesPushover(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesPushover(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesRedmine
        function putV3ProjectsIdServicesRedmine(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesRedmine(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesSlack
        function putV3ProjectsIdServicesSlack(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlack(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesSlackSlashCommands
        function putV3ProjectsIdServicesSlackSlashCommands(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesSlackSlashCommands(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdServicesTeamcity
        function putV3ProjectsIdServicesTeamcity(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = 56;*/ // Number |
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdServicesTeamcity(incomingOptions.id, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for putV3ProjectsIdSnippetsNoteableIdNotesNoteId
        function putV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let noteableId = 56;*/ // Number | The ID of the noteabl
/*let noteId = 56;*/ // Number | The ID of a not
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.putV3ProjectsIdSnippetsNoteableIdNotesNoteId(incomingOptions.id, incomingOptions.noteableId, incomingOptions.noteId, incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdSnippetsSnippetId
        function putV3ProjectsIdSnippetsSnippetId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let snippetId = 56;*/ // Number | The ID of a project snippe
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdSnippetsSnippetId(incomingOptions.id, incomingOptions.snippetId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for putV3ProjectsIdVariablesKey
        function putV3ProjectsIdVariablesKey(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.ProjectsApi()
/*let id = "id_example";*/ // String | The ID of a projec
/*let key = "key_example";*/ // String | The key of the variabl
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3ProjectsIdVariablesKey(incomingOptions.id, incomingOptions.key, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3NotificationSettings
        function getV3NotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NotificationSettingsApi();
apiInstance.getV3NotificationSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for putV3NotificationSettings
        function putV3NotificationSettings(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.NotificationSettingsApi()
/*let opts = {
  'UNKNOWN_BASE_TYPE': new Gitlab.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};*/
apiInstance.putV3NotificationSettings(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3InternalBroadcastMessage
        function getV3InternalBroadcastMessage(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalBroadcastMessage((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalCheck
        function getV3InternalCheck(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalDiscover
        function getV3InternalDiscover(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalDiscover((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for getV3InternalMergeRequestUrls
        function getV3InternalMergeRequestUrls(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.getV3InternalMergeRequestUrls((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalAllowed
        function postV3InternalAllowed(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalAllowed((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalLfsAuthenticate
        function postV3InternalLfsAuthenticate(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalLfsAuthenticate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for postV3InternalTwoFactorRecoveryCodes
        function postV3InternalTwoFactorRecoveryCodes(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.InternalApi();
apiInstance.postV3InternalTwoFactorRecoveryCodes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
        }

        
        // This is a function for deleteV3HooksId
        function deleteV3HooksId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let id = 56;*/ // Number | The ID of the system hook
apiInstance.deleteV3HooksId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getV3Hooks
        function getV3Hooks(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi();
apiInstance.getV3Hooks((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for getV3HooksId
        function getV3HooksId(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let id = 56;*/ // Number | The ID of the system hook
apiInstance.getV3HooksId(incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for postV3Hooks
        function postV3Hooks(incomingOptions) {
            const Gitlab = require('./dist');
let defaultClient = Gitlab.ApiClient.instance;
// Configure API key authorization: private_token_header
let private_token_header = defaultClient.authentications['private_token_header'];
private_token_header.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_header.apiKeyPrefix = 'Token';
// Configure API key authorization: private_token_query
let private_token_query = defaultClient.authentications['private_token_query'];
private_token_query.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//private_token_query.apiKeyPrefix = 'Token';

let apiInstance = new Gitlab.HooksApi()
/*let UNKNOWN_BASE_TYPE = new Gitlab.UNKNOWN_BASE_TYPE();*/ // UNKNOWN_BASE_TYPE | 
apiInstance.postV3Hooks(incomingOptions.UNKNOWN_BASE_TYPE, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        