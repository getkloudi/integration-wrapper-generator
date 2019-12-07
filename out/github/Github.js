async function Get(entity, options) {
        switch (entity) {
            
        case "emojis":
        // Function parameters for this API opts
        return await this.emojisGet(options);
        
        case "events":
        // Function parameters for this API opts
        return await this.eventsGet(options);
        
        case "feeds":
        // Function parameters for this API opts
        return await this.feedsGet(options);
        
        case "gists":
        // Function parameters for this API opts
        return await this.gistsGet(options);
        
        case "gistsIdCommentsCommentId":
        // Function parameters for this API id,commentId,opts
        return await this.gistsIdCommentsCommentIdGet(options);
        
        case "gistsIdComments":
        // Function parameters for this API id,opts
        return await this.gistsIdCommentsGet(options);
        
        case "gistsId":
        // Function parameters for this API id,opts
        return await this.gistsIdGet(options);
        
        case "gistsIdStar":
        // Function parameters for this API id,opts
        return await this.gistsIdStarGet(options);
        
        case "gistsPublic":
        // Function parameters for this API opts
        return await this.gistsPublicGet(options);
        
        case "gistsStarred":
        // Function parameters for this API opts
        return await this.gistsStarredGet(options);
        
        case "gitignoreTemplates":
        // Function parameters for this API opts
        return await this.gitignoreTemplatesGet(options);
        
        case "gitignoreTemplatesLanguage":
        // Function parameters for this API language,opts
        return await this.gitignoreTemplatesLanguageGet(options);
        
        case "issues":
        // Function parameters for this API filter,state,labels,sort,direction,opts
        return await this.issuesGet(options);
        
        case "legacyIssuesSearchOwnerRepositoryStateKeyword":
        // Function parameters for this API keyword,state,owner,repository,opts
        return await this.legacyIssuesSearchOwnerRepositoryStateKeywordGet(options);
        
        case "legacyReposSearchKeyword":
        // Function parameters for this API keyword,opts
        return await this.legacyReposSearchKeywordGet(options);
        
        case "legacyUserEmailEmail":
        // Function parameters for this API email,opts
        return await this.legacyUserEmailEmailGet(options);
        
        case "legacyUserSearchKeyword":
        // Function parameters for this API keyword,opts
        return await this.legacyUserSearchKeywordGet(options);
        
        case "meta":
        // Function parameters for this API opts
        return await this.metaGet(options);
        
        case "networksOwnerRepoEvents":
        // Function parameters for this API owner,repo,opts
        return await this.networksOwnerRepoEventsGet(options);
        
        case "notifications":
        // Function parameters for this API opts
        return await this.notificationsGet(options);
        
        case "notificationsThreadsId":
        // Function parameters for this API id,opts
        return await this.notificationsThreadsIdGet(options);
        
        case "notificationsThreadsIdSubscription":
        // Function parameters for this API id,opts
        return await this.notificationsThreadsIdSubscriptionGet(options);
        
        case "orgsOrgEvents":
        // Function parameters for this API org,opts
        return await this.orgsOrgEventsGet(options);
        
        case "orgsOrg":
        // Function parameters for this API org,opts
        return await this.orgsOrgGet(options);
        
        case "orgsOrgIssues":
        // Function parameters for this API org,filter,state,labels,sort,direction,opts
        return await this.orgsOrgIssuesGet(options);
        
        case "orgsOrgMembers":
        // Function parameters for this API org,opts
        return await this.orgsOrgMembersGet(options);
        
        case "orgsOrgMembersUsername":
        // Function parameters for this API org,username,opts
        return await this.orgsOrgMembersUsernameGet(options);
        
        case "orgsOrgPublicMembers":
        // Function parameters for this API org,opts
        return await this.orgsOrgPublicMembersGet(options);
        
        case "orgsOrgPublicMembersUsername":
        // Function parameters for this API org,username,opts
        return await this.orgsOrgPublicMembersUsernameGet(options);
        
        case "orgsOrgRepos":
        // Function parameters for this API org,opts
        return await this.orgsOrgReposGet(options);
        
        case "orgsOrgTeams":
        // Function parameters for this API org,opts
        return await this.orgsOrgTeamsGet(options);
        
        case "rateLimit":
        // Function parameters for this API opts
        return await this.rateLimitGet(options);
        
        case "reposOwnerRepoArchiveFormatPath":
        // Function parameters for this API owner,repo,archiveFormat,path,opts
        return await this.reposOwnerRepoArchiveFormatPathGet(options);
        
        case "reposOwnerRepoAssigneesAssignee":
        // Function parameters for this API owner,repo,assignee,opts
        return await this.reposOwnerRepoAssigneesAssigneeGet(options);
        
        case "reposOwnerRepoAssignees":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoAssigneesGet(options);
        
        case "reposOwnerRepoBranchesBranch":
        // Function parameters for this API owner,repo,branch,opts
        return await this.reposOwnerRepoBranchesBranchGet(options);
        
        case "reposOwnerRepoBranches":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoBranchesGet(options);
        
        case "reposOwnerRepoCollaborators":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoCollaboratorsGet(options);
        
        case "reposOwnerRepoCollaboratorsUser":
        // Function parameters for this API owner,repo,user,opts
        return await this.reposOwnerRepoCollaboratorsUserGet(options);
        
        case "reposOwnerRepoCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoCommentsCommentIdGet(options);
        
        case "reposOwnerRepoComments":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoCommentsGet(options);
        
        case "reposOwnerRepoCommits":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoCommitsGet(options);
        
        case "reposOwnerRepoCommitsRefStatus":
        // Function parameters for this API owner,repo,ref,opts
        return await this.reposOwnerRepoCommitsRefStatusGet(options);
        
        case "reposOwnerRepoCommitsShaCodeComments":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoCommitsShaCodeCommentsGet(options);
        
        case "reposOwnerRepoCommitsShaCode":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoCommitsShaCodeGet(options);
        
        case "reposOwnerRepoCompareBaseIdHeadId":
        // Function parameters for this API owner,repo,baseId,headId,opts
        return await this.reposOwnerRepoCompareBaseIdHeadIdGet(options);
        
        case "reposOwnerRepoContentsPath":
        // Function parameters for this API owner,repo,path,opts
        return await this.reposOwnerRepoContentsPathGet(options);
        
        case "reposOwnerRepoContributors":
        // Function parameters for this API owner,repo,anon,opts
        return await this.reposOwnerRepoContributorsGet(options);
        
        case "reposOwnerRepoDeployments":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoDeploymentsGet(options);
        
        case "reposOwnerRepoDeploymentsIdStatuses":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoDeploymentsIdStatusesGet(options);
        
        case "reposOwnerRepoDownloadsDownloadId":
        // Function parameters for this API owner,repo,downloadId,opts
        return await this.reposOwnerRepoDownloadsDownloadIdGet(options);
        
        case "reposOwnerRepoDownloads":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoDownloadsGet(options);
        
        case "reposOwnerRepoEvents":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoEventsGet(options);
        
        case "reposOwnerRepoForks":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoForksGet(options);
        
        case "reposOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoGet(options);
        
        case "reposOwnerRepoGitBlobsShaCode":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoGitBlobsShaCodeGet(options);
        
        case "reposOwnerRepoGitCommitsShaCode":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoGitCommitsShaCodeGet(options);
        
        case "reposOwnerRepoGitRefs":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoGitRefsGet(options);
        
        case "reposOwnerRepoGitRefsRef":
        // Function parameters for this API owner,repo,ref,opts
        return await this.reposOwnerRepoGitRefsRefGet(options);
        
        case "reposOwnerRepoGitTagsShaCode":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoGitTagsShaCodeGet(options);
        
        case "reposOwnerRepoGitTreesShaCode":
        // Function parameters for this API owner,repo,shaCode,opts
        return await this.reposOwnerRepoGitTreesShaCodeGet(options);
        
        case "reposOwnerRepoHooks":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoHooksGet(options);
        
        case "reposOwnerRepoHooksHookId":
        // Function parameters for this API owner,repo,hookId,opts
        return await this.reposOwnerRepoHooksHookIdGet(options);
        
        case "reposOwnerRepoIssuesCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoIssuesCommentsCommentIdGet(options);
        
        case "reposOwnerRepoIssuesComments":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoIssuesCommentsGet(options);
        
        case "reposOwnerRepoIssuesEventsEventId":
        // Function parameters for this API owner,repo,eventId,opts
        return await this.reposOwnerRepoIssuesEventsEventIdGet(options);
        
        case "reposOwnerRepoIssuesEvents":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoIssuesEventsGet(options);
        
        case "reposOwnerRepoIssues":
        // Function parameters for this API owner,repo,filter,state,labels,sort,direction,opts
        return await this.reposOwnerRepoIssuesGet(options);
        
        case "reposOwnerRepoIssuesNumberComments":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoIssuesNumberCommentsGet(options);
        
        case "reposOwnerRepoIssuesNumberEvents":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoIssuesNumberEventsGet(options);
        
        case "reposOwnerRepoIssuesNumber":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoIssuesNumberGet(options);
        
        case "reposOwnerRepoIssuesNumberLabels":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoIssuesNumberLabelsGet(options);
        
        case "reposOwnerRepoKeys":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoKeysGet(options);
        
        case "reposOwnerRepoKeysKeyId":
        // Function parameters for this API owner,repo,keyId,opts
        return await this.reposOwnerRepoKeysKeyIdGet(options);
        
        case "reposOwnerRepoLabels":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoLabelsGet(options);
        
        case "reposOwnerRepoLabelsName":
        // Function parameters for this API owner,repo,name,opts
        return await this.reposOwnerRepoLabelsNameGet(options);
        
        case "reposOwnerRepoLanguages":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoLanguagesGet(options);
        
        case "reposOwnerRepoMilestones":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoMilestonesGet(options);
        
        case "reposOwnerRepoMilestonesNumber":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoMilestonesNumberGet(options);
        
        case "reposOwnerRepoMilestonesNumberLabels":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoMilestonesNumberLabelsGet(options);
        
        case "reposOwnerRepoNotifications":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoNotificationsGet(options);
        
        case "reposOwnerRepoPullsCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoPullsCommentsCommentIdGet(options);
        
        case "reposOwnerRepoPullsComments":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoPullsCommentsGet(options);
        
        case "reposOwnerRepoPulls":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoPullsGet(options);
        
        case "reposOwnerRepoPullsNumberComments":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoPullsNumberCommentsGet(options);
        
        case "reposOwnerRepoPullsNumberCommits":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoPullsNumberCommitsGet(options);
        
        case "reposOwnerRepoPullsNumberFiles":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoPullsNumberFilesGet(options);
        
        case "reposOwnerRepoPullsNumber":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoPullsNumberGet(options);
        
        case "reposOwnerRepoPullsNumberMerge":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoPullsNumberMergeGet(options);
        
        case "reposOwnerRepoReadme":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoReadmeGet(options);
        
        case "reposOwnerRepoReleasesAssetsId":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoReleasesAssetsIdGet(options);
        
        case "reposOwnerRepoReleases":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoReleasesGet(options);
        
        case "reposOwnerRepoReleasesIdAssets":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoReleasesIdAssetsGet(options);
        
        case "reposOwnerRepoReleasesId":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoReleasesIdGet(options);
        
        case "reposOwnerRepoStargazers":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStargazersGet(options);
        
        case "reposOwnerRepoStatsCodeFrequency":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStatsCodeFrequencyGet(options);
        
        case "reposOwnerRepoStatsCommitActivity":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStatsCommitActivityGet(options);
        
        case "reposOwnerRepoStatsContributors":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStatsContributorsGet(options);
        
        case "reposOwnerRepoStatsParticipation":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStatsParticipationGet(options);
        
        case "reposOwnerRepoStatsPunchCard":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoStatsPunchCardGet(options);
        
        case "reposOwnerRepoStatusesRef":
        // Function parameters for this API owner,repo,ref,opts
        return await this.reposOwnerRepoStatusesRefGet(options);
        
        case "reposOwnerRepoSubscribers":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoSubscribersGet(options);
        
        case "reposOwnerRepoSubscription":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoSubscriptionGet(options);
        
        case "reposOwnerRepoTags":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoTagsGet(options);
        
        case "reposOwnerRepoTeams":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoTeamsGet(options);
        
        case "reposOwnerRepoWatchers":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoWatchersGet(options);
        
        case "repositories":
        // Function parameters for this API opts
        return await this.repositoriesGet(options);
        
        case "searchCode":
        // Function parameters for this API q,opts
        return await this.searchCodeGet(options);
        
        case "searchIssues":
        // Function parameters for this API q,opts
        return await this.searchIssuesGet(options);
        
        case "searchRepositories":
        // Function parameters for this API q,opts
        return await this.searchRepositoriesGet(options);
        
        case "searchUsers":
        // Function parameters for this API q,opts
        return await this.searchUsersGet(options);
        
        case "teamsTeamId":
        // Function parameters for this API teamId,opts
        return await this.teamsTeamIdGet(options);
        
        case "teamsTeamIdMembers":
        // Function parameters for this API teamId,opts
        return await this.teamsTeamIdMembersGet(options);
        
        case "teamsTeamIdMembersUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembersUsernameGet(options);
        
        case "teamsTeamIdMembershipsUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembershipsUsernameGet(options);
        
        case "teamsTeamIdRepos":
        // Function parameters for this API teamId,opts
        return await this.teamsTeamIdReposGet(options);
        
        case "teamsTeamIdReposOwnerRepo":
        // Function parameters for this API teamId,owner,repo,opts
        return await this.teamsTeamIdReposOwnerRepoGet(options);
        
        case "userEmails":
        // Function parameters for this API opts
        return await this.userEmailsGet(options);
        
        case "userFollowers":
        // Function parameters for this API opts
        return await this.userFollowersGet(options);
        
        case "userFollowing":
        // Function parameters for this API opts
        return await this.userFollowingGet(options);
        
        case "userFollowingUsername":
        // Function parameters for this API username,opts
        return await this.userFollowingUsernameGet(options);
        
        case "user":
        // Function parameters for this API opts
        return await this.userGet(options);
        
        case "userIssues":
        // Function parameters for this API filter,state,labels,sort,direction,opts
        return await this.userIssuesGet(options);
        
        case "userKeys":
        // Function parameters for this API opts
        return await this.userKeysGet(options);
        
        case "userKeysKeyId":
        // Function parameters for this API keyId,opts
        return await this.userKeysKeyIdGet(options);
        
        case "userOrgs":
        // Function parameters for this API opts
        return await this.userOrgsGet(options);
        
        case "userRepos":
        // Function parameters for this API opts
        return await this.userReposGet(options);
        
        case "userStarred":
        // Function parameters for this API opts
        return await this.userStarredGet(options);
        
        case "userStarredOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userStarredOwnerRepoGet(options);
        
        case "userSubscriptions":
        // Function parameters for this API opts
        return await this.userSubscriptionsGet(options);
        
        case "userSubscriptionsOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userSubscriptionsOwnerRepoGet(options);
        
        case "userTeams":
        // Function parameters for this API opts
        return await this.userTeamsGet(options);
        
        case "users":
        // Function parameters for this API opts
        return await this.usersGet(options);
        
        case "usersUsernameEvents":
        // Function parameters for this API username,opts
        return await this.usersUsernameEventsGet(options);
        
        case "usersUsernameEventsOrgsOrg":
        // Function parameters for this API username,org,opts
        return await this.usersUsernameEventsOrgsOrgGet(options);
        
        case "usersUsernameFollowers":
        // Function parameters for this API username,opts
        return await this.usersUsernameFollowersGet(options);
        
        case "usersUsernameFollowingTargetUser":
        // Function parameters for this API username,targetUser,opts
        return await this.usersUsernameFollowingTargetUserGet(options);
        
        case "usersUsername":
        // Function parameters for this API username,opts
        return await this.usersUsernameGet(options);
        
        case "usersUsernameGists":
        // Function parameters for this API username,opts
        return await this.usersUsernameGistsGet(options);
        
        case "usersUsernameKeys":
        // Function parameters for this API username,opts
        return await this.usersUsernameKeysGet(options);
        
        case "usersUsernameOrgs":
        // Function parameters for this API username,opts
        return await this.usersUsernameOrgsGet(options);
        
        case "usersUsernameReceivedEvents":
        // Function parameters for this API username,opts
        return await this.usersUsernameReceivedEventsGet(options);
        
        case "usersUsernameReceivedEventsPublic":
        // Function parameters for this API username,opts
        return await this.usersUsernameReceivedEventsPublicGet(options);
        
        case "usersUsernameRepos":
        // Function parameters for this API username,opts
        return await this.usersUsernameReposGet(options);
        
        case "usersUsernameStarred":
        // Function parameters for this API username,opts
        return await this.usersUsernameStarredGet(options);
        
        case "usersUsernameSubscriptions":
        // Function parameters for this API username,opts
        return await this.usersUsernameSubscriptionsGet(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for emojisGet
        function emojisGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.emojisGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for eventsGet
        function eventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.eventsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for feedsGet
        function feedsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.feedsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsGet
        function gistsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdCommentsCommentIdGet
        function gistsIdCommentsCommentIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdCommentsCommentIdGet(incomingOptions.id, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdCommentsGet
        function gistsIdCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdCommentsGet(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdGet
        function gistsIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdGet(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdStarGet
        function gistsIdStarGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdStarGet(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for gistsPublicGet
        function gistsPublicGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsPublicGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsStarredGet
        function gistsStarredGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsStarredGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gitignoreTemplatesGet
        function gitignoreTemplatesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gitignoreTemplatesGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gitignoreTemplatesLanguageGet
        function gitignoreTemplatesLanguageGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let language = "language_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gitignoreTemplatesLanguageGet(incomingOptions.language, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for issuesGet
        function issuesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let filter = "'all'";*/ // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
/*let state = "'open'";*/ // String |
/*let labels = "labels_example";*/ // String | String list of comma separated Label names. Example - bug,ui,@high
/*let sort = "'created'";*/ // String |
/*let direction = "'desc'";*/ // String |
/*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.issuesGet(incomingOptions.filter, incomingOptions.state, incomingOptions.labels, incomingOptions.sort, incomingOptions.direction, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for legacyIssuesSearchOwnerRepositoryStateKeywordGet
        function legacyIssuesSearchOwnerRepositoryStateKeywordGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let keyword = "keyword_example";*/ // String | The search term
/*let state = "state_example";*/ // String | Indicates the state of the issues to return. Can be either open or closed
/*let owner = "owner_example";*/ // String |
/*let repository = "repository_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.legacyIssuesSearchOwnerRepositoryStateKeywordGet(incomingOptions.keyword, incomingOptions.state, incomingOptions.owner, incomingOptions.repository, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for legacyReposSearchKeywordGet
        function legacyReposSearchKeywordGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let keyword = "keyword_example";*/ // String | The search ter
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'language': "language_example", // String | Filter results by language
  'startPage': "startPage_example", // String | The page number to fetch
  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.legacyReposSearchKeywordGet(incomingOptions.keyword, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for legacyUserEmailEmailGet
        function legacyUserEmailEmailGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let email = "email_example";*/ // String | The email addres
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.legacyUserEmailEmailGet(incomingOptions.email, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for legacyUserSearchKeywordGet
        function legacyUserSearchKeywordGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let keyword = "keyword_example";*/ // String | The search ter
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'startPage': "startPage_example", // String | The page number to fetch
  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.legacyUserSearchKeywordGet(incomingOptions.keyword, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for metaGet
        function metaGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.metaGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for networksOwnerRepoEventsGet
        function networksOwnerRepoEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of the owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.networksOwnerRepoEventsGet(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for notificationsGet
        function notificationsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'all': true, // Boolean | True to show notifications marked as read.
  'participating': true, // Boolean | True to show only notifications in which the user is directly participating or mentioned. 
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for notificationsThreadsIdGet
        function notificationsThreadsIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of thread
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsThreadsIdGet(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for notificationsThreadsIdSubscriptionGet
        function notificationsThreadsIdSubscriptionGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of thread
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsThreadsIdSubscriptionGet(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgEventsGet
        function orgsOrgEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgEventsGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgGet
        function orgsOrgGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgIssuesGet
        function orgsOrgIssuesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let filter = "'all'";*/ // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
/*let state = "'open'";*/ // String |
/*let labels = "labels_example";*/ // String | String list of comma separated Label names. Example - bug,ui,@high
/*let sort = "'created'";*/ // String |
/*let direction = "'desc'";*/ // String |
/*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgIssuesGet(org, incomingOptions.filter, incomingOptions.state, incomingOptions.labels, incomingOptions.sort, incomingOptions.direction, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgMembersGet
        function orgsOrgMembersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgMembersGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgMembersUsernameGet
        function orgsOrgMembersUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let username = "username_example";*/ // String | Name of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgMembersUsernameGet(org, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgPublicMembersGet
        function orgsOrgPublicMembersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgPublicMembersGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgPublicMembersUsernameGet
        function orgsOrgPublicMembersUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let username = "username_example";*/ // String | Name of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgPublicMembersUsernameGet(org, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgReposGet
        function orgsOrgReposGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'type': "'all'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgReposGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgTeamsGet
        function orgsOrgTeamsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgTeamsGet(org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for rateLimitGet
        function rateLimitGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.rateLimitGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoArchiveFormatPathGet
        function reposOwnerRepoArchiveFormatPathGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let archiveFormat = "archiveFormat_example";*/ // String |
/*let path = "path_example";*/ // String | Valid Git reference, defaults to 'master'
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoArchiveFormatPathGet(incomingOptions.owner, repo, incomingOptions.archiveFormat, incomingOptions.path, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoAssigneesAssigneeGet
        function reposOwnerRepoAssigneesAssigneeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let assignee = "assignee_example";*/ // String | Login of the assignee
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoAssigneesAssigneeGet(incomingOptions.owner, repo, incomingOptions.assignee, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoAssigneesGet
        function reposOwnerRepoAssigneesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoAssigneesGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoBranchesBranchGet
        function reposOwnerRepoBranchesBranchGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let branch = "branch_example";*/ // String | Name of the branch
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoBranchesBranchGet(incomingOptions.owner, repo, incomingOptions.branch, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoBranchesGet
        function reposOwnerRepoBranchesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoBranchesGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCollaboratorsGet
        function reposOwnerRepoCollaboratorsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCollaboratorsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCollaboratorsUserGet
        function reposOwnerRepoCollaboratorsUserGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let user = "user_example";*/ // String | Login of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserGet(incomingOptions.owner, repo, incomingOptions.user, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommentsCommentIdGet
        function reposOwnerRepoCommentsCommentIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdGet(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommentsGet
        function reposOwnerRepoCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommentsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommitsGet
        function reposOwnerRepoCommitsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'sha': "sha_example", // String | Sha or branch to start listing commits from.
  'path': "path_example", // String | Only commits containing this file path will be returned.
  'author': "author_example", // String | GitHub login, name, or email by which to filter by commit author.
  'until': "until_example", // String | ISO 8601 Date - Only commits before this date will be returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommitsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommitsRefStatusGet
        function reposOwnerRepoCommitsRefStatusGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommitsRefStatusGet(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommitsShaCodeCommentsGet
        function reposOwnerRepoCommitsShaCodeCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | SHA-1 code of the commit
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommitsShaCodeGet
        function reposOwnerRepoCommitsShaCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | SHA-1 code of the commit
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCompareBaseIdHeadIdGet
        function reposOwnerRepoCompareBaseIdHeadIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let baseId = "baseId_example";*/ // String |
/*let headId = "headId_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCompareBaseIdHeadIdGet(incomingOptions.owner, repo, incomingOptions.baseId, incomingOptions.headId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoContentsPathGet
        function reposOwnerRepoContentsPathGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let path = "path_example";*/ // String |
/*let opts = {
  'path2': "path_example", // String | The content path.
  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to 'master'.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoContentsPathGet(incomingOptions.owner, repo, incomingOptions.path, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoContributorsGet
        function reposOwnerRepoContributorsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let anon = "anon_example";*/ // String | Set to 1 or true to include anonymous contributors in results
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoContributorsGet(incomingOptions.owner, repo, incomingOptions.anon, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDeploymentsGet
        function reposOwnerRepoDeploymentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDeploymentsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDeploymentsIdStatusesGet
        function reposOwnerRepoDeploymentsIdStatusesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = 56;*/ // Number | The Deployment ID to list the statuses from
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesGet(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDownloadsDownloadIdGet
        function reposOwnerRepoDownloadsDownloadIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let downloadId = 56;*/ // Number | Id of download
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdGet(incomingOptions.owner, repo, incomingOptions.downloadId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDownloadsGet
        function reposOwnerRepoDownloadsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDownloadsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoEventsGet
        function reposOwnerRepoEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoEventsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoForksGet
        function reposOwnerRepoForksGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'sort': "'newes'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoForksGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGet
        function reposOwnerRepoGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitBlobsShaCodeGet
        function reposOwnerRepoGitBlobsShaCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | SHA-1 code
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitBlobsShaCodeGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitCommitsShaCodeGet
        function reposOwnerRepoGitCommitsShaCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | SHA-1 code
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitCommitsShaCodeGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitRefsGet
        function reposOwnerRepoGitRefsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitRefsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitRefsRefGet
        function reposOwnerRepoGitRefsRefGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitRefsRefGet(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitTagsShaCodeGet
        function reposOwnerRepoGitTagsShaCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitTagsShaCodeGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitTreesShaCodeGet
        function reposOwnerRepoGitTreesShaCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | Tree SHA
/*let opts = {
  'recursive': 56, // Number | Get a Tree Recursively. (0 or 1)
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitTreesShaCodeGet(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksGet
        function reposOwnerRepoHooksGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksHookIdGet
        function reposOwnerRepoHooksHookIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let hookId = 56;*/ // Number | Id of hook
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksHookIdGet(incomingOptions.owner, repo, incomingOptions.hookId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesCommentsCommentIdGet
        function reposOwnerRepoIssuesCommentsCommentIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | ID of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdGet(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesCommentsGet
        function reposOwnerRepoIssuesCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "sort_example", // String | 
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesEventsEventIdGet
        function reposOwnerRepoIssuesEventsEventIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let eventId = 56;*/ // Number | Id of the event
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesEventsEventIdGet(incomingOptions.owner, repo, incomingOptions.eventId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesEventsGet
        function reposOwnerRepoIssuesEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesEventsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesGet
        function reposOwnerRepoIssuesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let filter = "'all'";*/ // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
/*let state = "'open'";*/ // String |
/*let labels = "labels_example";*/ // String | String list of comma separated Label names. Example - bug,ui,@high
/*let sort = "'created'";*/ // String |
/*let direction = "'desc'";*/ // String |
/*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesGet(incomingOptions.owner, repo, incomingOptions.filter, incomingOptions.state, incomingOptions.labels, incomingOptions.sort, incomingOptions.direction, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberCommentsGet
        function reposOwnerRepoIssuesNumberCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberEventsGet
        function reposOwnerRepoIssuesNumberEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberEventsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberGet
        function reposOwnerRepoIssuesNumberGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberLabelsGet
        function reposOwnerRepoIssuesNumberLabelsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoKeysGet
        function reposOwnerRepoKeysGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoKeysGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoKeysKeyIdGet
        function reposOwnerRepoKeysKeyIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let keyId = 56;*/ // Number | Id of key
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdGet(incomingOptions.owner, repo, incomingOptions.keyId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoLabelsGet
        function reposOwnerRepoLabelsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLabelsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoLabelsNameGet
        function reposOwnerRepoLabelsNameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let name = "name_example";*/ // String | Name of the label
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLabelsNameGet(incomingOptions.owner, repo, incomingOptions.name, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoLanguagesGet
        function reposOwnerRepoLanguagesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLanguagesGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesGet
        function reposOwnerRepoMilestonesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'state': "'open'", // String | String to filter by state.
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "'due_date'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesNumberGet
        function reposOwnerRepoMilestonesNumberGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of milestone
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesNumberLabelsGet
        function reposOwnerRepoMilestonesNumberLabelsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of milestone
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberLabelsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoNotificationsGet
        function reposOwnerRepoNotificationsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'all': true, // Boolean | True to show notifications marked as read.
  'participating': true, // Boolean | True to show only notifications in which the user is directly participating or mentioned. 
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoNotificationsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsCommentsCommentIdGet
        function reposOwnerRepoPullsCommentsCommentIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdGet(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsCommentsGet
        function reposOwnerRepoPullsCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "sort_example", // String | 
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsCommentsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsGet
        function reposOwnerRepoPullsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'state': "'open'", // String | String to filter by state.
  'head': "head_example", // String | Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format. 
  'base': "base_example", // String | Filter pulls by base branch name. Example - gh-pages.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberCommentsGet
        function reposOwnerRepoPullsNumberCommentsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberCommitsGet
        function reposOwnerRepoPullsNumberCommitsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommitsGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberFilesGet
        function reposOwnerRepoPullsNumberFilesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberFilesGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberGet
        function reposOwnerRepoPullsNumberGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberMergeGet
        function reposOwnerRepoPullsNumberMergeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergeGet(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoReadmeGet
        function reposOwnerRepoReadmeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to master.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReadmeGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesAssetsIdGet
        function reposOwnerRepoReleasesAssetsIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdGet(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesGet
        function reposOwnerRepoReleasesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesIdAssetsGet
        function reposOwnerRepoReleasesIdAssetsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesIdAssetsGet(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesIdGet
        function reposOwnerRepoReleasesIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesIdGet(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStargazersGet
        function reposOwnerRepoStargazersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStargazersGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatsCodeFrequencyGet
        function reposOwnerRepoStatsCodeFrequencyGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatsCodeFrequencyGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatsCommitActivityGet
        function reposOwnerRepoStatsCommitActivityGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatsCommitActivityGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatsContributorsGet
        function reposOwnerRepoStatsContributorsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatsContributorsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatsParticipationGet
        function reposOwnerRepoStatsParticipationGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatsParticipationGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatsPunchCardGet
        function reposOwnerRepoStatsPunchCardGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatsPunchCardGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatusesRefGet
        function reposOwnerRepoStatusesRefGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatusesRefGet(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoSubscribersGet
        function reposOwnerRepoSubscribersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoSubscribersGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoSubscriptionGet
        function reposOwnerRepoSubscriptionGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoSubscriptionGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoTagsGet
        function reposOwnerRepoTagsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoTagsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoTeamsGet
        function reposOwnerRepoTeamsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoTeamsGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoWatchersGet
        function reposOwnerRepoWatchersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoWatchersGet(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesGet
        function repositoriesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.repositoriesGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for searchCodeGet
        function searchCodeGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let q = "q_example";*/ // String | The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository.
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.searchCodeGet(incomingOptions.q, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for searchIssuesGet
        function searchIssuesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let q = "q_example";*/ // String | The q search term can also contain any combination of the supported issue search qualifiers
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.searchIssuesGet(incomingOptions.q, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for searchRepositoriesGet
        function searchRepositoriesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let q = "q_example";*/ // String | The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars.
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | If not provided, results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.searchRepositoriesGet(incomingOptions.q, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for searchUsersGet
        function searchUsersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let q = "q_example";*/ // String | The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have.
/*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | If not provided, results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.searchUsersGet(incomingOptions.q, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdGet
        function teamsTeamIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdGet(incomingOptions.teamId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdMembersGet
        function teamsTeamIdMembersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembersGet(incomingOptions.teamId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdMembersUsernameGet
        function teamsTeamIdMembersUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembersUsernameGet(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdMembershipsUsernameGet
        function teamsTeamIdMembershipsUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembershipsUsernameGet(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdReposGet
        function teamsTeamIdReposGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdReposGet(incomingOptions.teamId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdReposOwnerRepoGet
        function teamsTeamIdReposOwnerRepoGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let owner = "owner_example";*/ // String | Name of a repository owner
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdReposOwnerRepoGet(incomingOptions.teamId, incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userEmailsGet
        function userEmailsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userEmailsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userFollowersGet
        function userFollowersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userFollowersGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userFollowingGet
        function userFollowingGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userFollowingGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userFollowingUsernameGet
        function userFollowingUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userFollowingUsernameGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userGet
        function userGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userIssuesGet
        function userIssuesGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let filter = "'all'";*/ // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see
/*let state = "'open'";*/ // String |
/*let labels = "labels_example";*/ // String | String list of comma separated Label names. Example - bug,ui,@high
/*let sort = "'created'";*/ // String |
/*let direction = "'desc'";*/ // String |
/*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned. 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userIssuesGet(incomingOptions.filter, incomingOptions.state, incomingOptions.labels, incomingOptions.sort, incomingOptions.direction, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userKeysGet
        function userKeysGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userKeysGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userKeysKeyIdGet
        function userKeysKeyIdGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let keyId = 56;*/ // Number | ID of key
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userKeysKeyIdGet(incomingOptions.keyId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userOrgsGet
        function userOrgsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userOrgsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userReposGet
        function userReposGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'type': "'all'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userReposGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userStarredGet
        function userStarredGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "'created'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userStarredGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userStarredOwnerRepoGet
        function userStarredOwnerRepoGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of a repository owner
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userStarredOwnerRepoGet(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userSubscriptionsGet
        function userSubscriptionsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userSubscriptionsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userSubscriptionsOwnerRepoGet
        function userSubscriptionsOwnerRepoGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of the owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userSubscriptionsOwnerRepoGet(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userTeamsGet
        function userTeamsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userTeamsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersGet
        function usersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'since': 56, // Number | The integer ID of the last user that you've seen.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameEventsGet
        function usersUsernameEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameEventsGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameEventsOrgsOrgGet
        function usersUsernameEventsOrgsOrgGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let org = "org_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameEventsOrgsOrgGet(incomingOptions.username, incomingOptions.org, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameFollowersGet
        function usersUsernameFollowersGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameFollowersGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameFollowingTargetUserGet
        function usersUsernameFollowingTargetUserGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let targetUser = "targetUser_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameFollowingTargetUserGet(incomingOptions.username, incomingOptions.targetUser, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameGet
        function usersUsernameGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameGistsGet
        function usersUsernameGistsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\". 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameGistsGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameKeysGet
        function usersUsernameKeysGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameKeysGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameOrgsGet
        function usersUsernameOrgsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameOrgsGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameReceivedEventsGet
        function usersUsernameReceivedEventsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameReceivedEventsGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameReceivedEventsPublicGet
        function usersUsernameReceivedEventsPublicGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameReceivedEventsPublicGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameReposGet
        function usersUsernameReposGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'type': "'all'", // String | 
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameReposGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameStarredGet
        function usersUsernameStarredGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameStarredGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameSubscriptionsGet
        function usersUsernameSubscriptionsGet(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.usersUsernameSubscriptionsGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        async function Post(entity, options) {
        switch (entity) {
            
        case "gistsIdComments":
        // Function parameters for this API id,body,opts
        return await this.gistsIdCommentsPost(options);
        
        case "gistsIdForks":
        // Function parameters for this API id,opts
        return await this.gistsIdForksPost(options);
        
        case "gists":
        // Function parameters for this API body,opts
        return await this.gistsPost(options);
        
        case "markdown":
        // Function parameters for this API body,opts
        return await this.markdownPost(options);
        
        case "markdownRaw":
        // Function parameters for this API opts
        return await this.markdownRawPost(options);
        
        case "orgsOrgRepos":
        // Function parameters for this API org,body,opts
        return await this.orgsOrgReposPost(options);
        
        case "orgsOrgTeams":
        // Function parameters for this API org,body,opts
        return await this.orgsOrgTeamsPost(options);
        
        case "reposOwnerRepoCommitsShaCodeComments":
        // Function parameters for this API owner,repo,shaCode,body,opts
        return await this.reposOwnerRepoCommitsShaCodeCommentsPost(options);
        
        case "reposOwnerRepoDeploymentsIdStatuses":
        // Function parameters for this API owner,repo,id,body,opts
        return await this.reposOwnerRepoDeploymentsIdStatusesPost(options);
        
        case "reposOwnerRepoDeployments":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoDeploymentsPost(options);
        
        case "reposOwnerRepoForks":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoForksPost(options);
        
        case "reposOwnerRepoGitBlobs":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoGitBlobsPost(options);
        
        case "reposOwnerRepoGitCommits":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoGitCommitsPost(options);
        
        case "reposOwnerRepoGitRefs":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoGitRefsPost(options);
        
        case "reposOwnerRepoGitTags":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoGitTagsPost(options);
        
        case "reposOwnerRepoGitTrees":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoGitTreesPost(options);
        
        case "reposOwnerRepoHooksHookIdTests":
        // Function parameters for this API owner,repo,hookId,opts
        return await this.reposOwnerRepoHooksHookIdTestsPost(options);
        
        case "reposOwnerRepoHooks":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoHooksPost(options);
        
        case "reposOwnerRepoIssuesNumberComments":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoIssuesNumberCommentsPost(options);
        
        case "reposOwnerRepoIssuesNumberLabels":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoIssuesNumberLabelsPost(options);
        
        case "reposOwnerRepoIssues":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoIssuesPost(options);
        
        case "reposOwnerRepoKeys":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoKeysPost(options);
        
        case "reposOwnerRepoLabels":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoLabelsPost(options);
        
        case "reposOwnerRepoMerges":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoMergesPost(options);
        
        case "reposOwnerRepoMilestones":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoMilestonesPost(options);
        
        case "reposOwnerRepoPullsNumberComments":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoPullsNumberCommentsPost(options);
        
        case "reposOwnerRepoPulls":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoPullsPost(options);
        
        case "reposOwnerRepoReleases":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoReleasesPost(options);
        
        case "reposOwnerRepoStatusesRef":
        // Function parameters for this API owner,repo,ref,body,opts
        return await this.reposOwnerRepoStatusesRefPost(options);
        
        case "userEmails":
        // Function parameters for this API body,opts
        return await this.userEmailsPost(options);
        
        case "userKeys":
        // Function parameters for this API body,opts
        return await this.userKeysPost(options);
        
        case "userRepos":
        // Function parameters for this API body,opts
        return await this.userReposPost(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for gistsIdCommentsPost
        function gistsIdCommentsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let body = new Github.CommentBody();*/ // CommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdCommentsPost(incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdForksPost
        function gistsIdForksPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdForksPost(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for gistsPost
        function gistsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.PostGist();*/ // PostGist |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsPost(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for markdownPost
        function markdownPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.Markdown();*/ // Markdown |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.markdownPost(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for markdownRawPost
        function markdownRawPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.markdownRawPost(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgReposPost
        function orgsOrgReposPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let body = new Github.PostRepo();*/ // PostRepo |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgReposPost(org, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgTeamsPost
        function orgsOrgTeamsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let body = new Github.OrgTeamsPost();*/ // OrgTeamsPost |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgTeamsPost(org, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommitsShaCodeCommentsPost
        function reposOwnerRepoCommitsShaCodeCommentsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let shaCode = "shaCode_example";*/ // String | SHA-1 code of the commit
/*let body = new Github.CommitCommentBody();*/ // CommitCommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsPost(incomingOptions.owner, repo, incomingOptions.shaCode, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDeploymentsIdStatusesPost
        function reposOwnerRepoDeploymentsIdStatusesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = 56;*/ // Number | The Deployment ID to list the statuses from
/*let body = new Github.DeploymentStatusesCreate();*/ // DeploymentStatusesCreate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesPost(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoDeploymentsPost
        function reposOwnerRepoDeploymentsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.Deployment();*/ // Deployment |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDeploymentsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoForksPost
        function reposOwnerRepoForksPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.ForkBody();*/ // ForkBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoForksPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitBlobsPost
        function reposOwnerRepoGitBlobsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = null;*/ // Blob |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitBlobsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitCommitsPost
        function reposOwnerRepoGitCommitsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.RepoCommitBody();*/ // RepoCommitBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitCommitsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitRefsPost
        function reposOwnerRepoGitRefsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.RefsBody();*/ // RefsBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitRefsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitTagsPost
        function reposOwnerRepoGitTagsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.TagBody();*/ // TagBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitTagsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitTreesPost
        function reposOwnerRepoGitTreesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.Tree();*/ // Tree |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitTreesPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksHookIdTestsPost
        function reposOwnerRepoHooksHookIdTestsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let hookId = 56;*/ // Number | Id of hook
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksHookIdTestsPost(incomingOptions.owner, repo, incomingOptions.hookId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksPost
        function reposOwnerRepoHooksPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.HookBody();*/ // HookBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberCommentsPost
        function reposOwnerRepoIssuesNumberCommentsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let body = new Github.CommentBody();*/ // CommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsPost(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberLabelsPost
        function reposOwnerRepoIssuesNumberLabelsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPost(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesPost
        function reposOwnerRepoIssuesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.Issue();*/ // Issue |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoKeysPost
        function reposOwnerRepoKeysPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.UserKeysPost();*/ // UserKeysPost |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoKeysPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoLabelsPost
        function reposOwnerRepoLabelsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLabelsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMergesPost
        function reposOwnerRepoMergesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.MergesBody();*/ // MergesBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMergesPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesPost
        function reposOwnerRepoMilestonesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.MilestoneUpdate();*/ // MilestoneUpdate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberCommentsPost
        function reposOwnerRepoPullsNumberCommentsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let body = new Github.PullsCommentPost();*/ // PullsCommentPost |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsPost(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsPost
        function reposOwnerRepoPullsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.PullsPost();*/ // PullsPost |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesPost
        function reposOwnerRepoReleasesPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.ReleaseCreate();*/ // ReleaseCreate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesPost(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoStatusesRefPost
        function reposOwnerRepoStatusesRefPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
/*let body = new Github.HeadBranch();*/ // HeadBranch |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoStatusesRefPost(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userEmailsPost
        function userEmailsPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userEmailsPost(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userKeysPost
        function userKeysPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.UserKeysPost();*/ // UserKeysPost |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userKeysPost(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userReposPost
        function userReposPost(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.PostRepo();*/ // PostRepo |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userReposPost(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        async function Put(entity, options) {
        switch (entity) {
            
        case "gistsIdStar":
        // Function parameters for this API id,opts
        return await this.gistsIdStarPut(options);
        
        case "notifications":
        // Function parameters for this API body,opts
        return await this.notificationsPut(options);
        
        case "notificationsThreadsIdSubscription":
        // Function parameters for this API id,body,opts
        return await this.notificationsThreadsIdSubscriptionPut(options);
        
        case "orgsOrgPublicMembersUsername":
        // Function parameters for this API org,username,opts
        return await this.orgsOrgPublicMembersUsernamePut(options);
        
        case "reposOwnerRepoCollaboratorsUser":
        // Function parameters for this API owner,repo,user,opts
        return await this.reposOwnerRepoCollaboratorsUserPut(options);
        
        case "reposOwnerRepoContentsPath":
        // Function parameters for this API owner,repo,path,body,opts
        return await this.reposOwnerRepoContentsPathPut(options);
        
        case "reposOwnerRepoIssuesNumberLabels":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoIssuesNumberLabelsPut(options);
        
        case "reposOwnerRepoNotifications":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoNotificationsPut(options);
        
        case "reposOwnerRepoPullsNumberMerge":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoPullsNumberMergePut(options);
        
        case "reposOwnerRepoSubscription":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoSubscriptionPut(options);
        
        case "teamsTeamIdMembersUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembersUsernamePut(options);
        
        case "teamsTeamIdMembershipsUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembershipsUsernamePut(options);
        
        case "teamsTeamIdReposOwnerRepo":
        // Function parameters for this API teamId,owner,repo,opts
        return await this.teamsTeamIdReposOwnerRepoPut(options);
        
        case "userFollowingUsername":
        // Function parameters for this API username,opts
        return await this.userFollowingUsernamePut(options);
        
        case "userStarredOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userStarredOwnerRepoPut(options);
        
        case "userSubscriptionsOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userSubscriptionsOwnerRepoPut(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for gistsIdStarPut
        function gistsIdStarPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdStarPut(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for notificationsPut
        function notificationsPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.NotificationMarkRead();*/ // NotificationMarkRead |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsPut(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for notificationsThreadsIdSubscriptionPut
        function notificationsThreadsIdSubscriptionPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of thread
/*let body = new Github.PutSubscription();*/ // PutSubscription |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsThreadsIdSubscriptionPut(incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for orgsOrgPublicMembersUsernamePut
        function orgsOrgPublicMembersUsernamePut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let username = "username_example";*/ // String | Name of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgPublicMembersUsernamePut(org, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoCollaboratorsUserPut
        function reposOwnerRepoCollaboratorsUserPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let user = "user_example";*/ // String | Login of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserPut(incomingOptions.owner, repo, incomingOptions.user, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoContentsPathPut
        function reposOwnerRepoContentsPathPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let path = "path_example";*/ // String |
/*let body = new Github.CreateFileBody();*/ // CreateFileBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoContentsPathPut(incomingOptions.owner, repo, incomingOptions.path, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberLabelsPut
        function reposOwnerRepoIssuesNumberLabelsPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPut(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoNotificationsPut
        function reposOwnerRepoNotificationsPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.NotificationMarkRead();*/ // NotificationMarkRead |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoNotificationsPut(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberMergePut
        function reposOwnerRepoPullsNumberMergePut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let body = new Github.MergePullBody();*/ // MergePullBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergePut(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoSubscriptionPut
        function reposOwnerRepoSubscriptionPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.SubscriptionBody();*/ // SubscriptionBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoSubscriptionPut(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdMembersUsernamePut
        function teamsTeamIdMembersUsernamePut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembersUsernamePut(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdMembershipsUsernamePut
        function teamsTeamIdMembershipsUsernamePut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembershipsUsernamePut(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdReposOwnerRepoPut
        function teamsTeamIdReposOwnerRepoPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let owner = "owner_example";*/ // String | Name of a organization
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdReposOwnerRepoPut(incomingOptions.teamId, incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userFollowingUsernamePut
        function userFollowingUsernamePut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userFollowingUsernamePut(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userStarredOwnerRepoPut
        function userStarredOwnerRepoPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of a repository owner
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userStarredOwnerRepoPut(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userSubscriptionsOwnerRepoPut
        function userSubscriptionsOwnerRepoPut(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of the owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userSubscriptionsOwnerRepoPut(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        async function Delete(entity, options) {
        switch (entity) {
            
        case "gistsIdCommentsCommentId":
        // Function parameters for this API id,commentId,opts
        return await this.gistsIdCommentsCommentIdDelete(options);
        
        case "gistsId":
        // Function parameters for this API id,opts
        return await this.gistsIdDelete(options);
        
        case "gistsIdStar":
        // Function parameters for this API id,opts
        return await this.gistsIdStarDelete(options);
        
        case "notificationsThreadsIdSubscription":
        // Function parameters for this API id,opts
        return await this.notificationsThreadsIdSubscriptionDelete(options);
        
        case "orgsOrgMembersUsername":
        // Function parameters for this API org,username,opts
        return await this.orgsOrgMembersUsernameDelete(options);
        
        case "orgsOrgPublicMembersUsername":
        // Function parameters for this API org,username,opts
        return await this.orgsOrgPublicMembersUsernameDelete(options);
        
        case "reposOwnerRepoCollaboratorsUser":
        // Function parameters for this API owner,repo,user,opts
        return await this.reposOwnerRepoCollaboratorsUserDelete(options);
        
        case "reposOwnerRepoCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoCommentsCommentIdDelete(options);
        
        case "reposOwnerRepoContentsPath":
        // Function parameters for this API owner,repo,path,body,opts
        return await this.reposOwnerRepoContentsPathDelete(options);
        
        case "reposOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoDelete(options);
        
        case "reposOwnerRepoDownloadsDownloadId":
        // Function parameters for this API owner,repo,downloadId,opts
        return await this.reposOwnerRepoDownloadsDownloadIdDelete(options);
        
        case "reposOwnerRepoGitRefsRef":
        // Function parameters for this API owner,repo,ref,opts
        return await this.reposOwnerRepoGitRefsRefDelete(options);
        
        case "reposOwnerRepoHooksHookId":
        // Function parameters for this API owner,repo,hookId,opts
        return await this.reposOwnerRepoHooksHookIdDelete(options);
        
        case "reposOwnerRepoIssuesCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoIssuesCommentsCommentIdDelete(options);
        
        case "reposOwnerRepoIssuesNumberLabels":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoIssuesNumberLabelsDelete(options);
        
        case "reposOwnerRepoIssuesNumberLabelsName":
        // Function parameters for this API owner,repo,_number,name,opts
        return await this.reposOwnerRepoIssuesNumberLabelsNameDelete(options);
        
        case "reposOwnerRepoKeysKeyId":
        // Function parameters for this API owner,repo,keyId,opts
        return await this.reposOwnerRepoKeysKeyIdDelete(options);
        
        case "reposOwnerRepoLabelsName":
        // Function parameters for this API owner,repo,name,opts
        return await this.reposOwnerRepoLabelsNameDelete(options);
        
        case "reposOwnerRepoMilestonesNumber":
        // Function parameters for this API owner,repo,_number,opts
        return await this.reposOwnerRepoMilestonesNumberDelete(options);
        
        case "reposOwnerRepoPullsCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,opts
        return await this.reposOwnerRepoPullsCommentsCommentIdDelete(options);
        
        case "reposOwnerRepoReleasesAssetsId":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoReleasesAssetsIdDelete(options);
        
        case "reposOwnerRepoReleasesId":
        // Function parameters for this API owner,repo,id,opts
        return await this.reposOwnerRepoReleasesIdDelete(options);
        
        case "reposOwnerRepoSubscription":
        // Function parameters for this API owner,repo,opts
        return await this.reposOwnerRepoSubscriptionDelete(options);
        
        case "teamsTeamId":
        // Function parameters for this API teamId,opts
        return await this.teamsTeamIdDelete(options);
        
        case "teamsTeamIdMembersUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembersUsernameDelete(options);
        
        case "teamsTeamIdMembershipsUsername":
        // Function parameters for this API teamId,username,opts
        return await this.teamsTeamIdMembershipsUsernameDelete(options);
        
        case "teamsTeamIdReposOwnerRepo":
        // Function parameters for this API teamId,owner,repo,opts
        return await this.teamsTeamIdReposOwnerRepoDelete(options);
        
        case "userEmails":
        // Function parameters for this API body,opts
        return await this.userEmailsDelete(options);
        
        case "userFollowingUsername":
        // Function parameters for this API username,opts
        return await this.userFollowingUsernameDelete(options);
        
        case "userKeysKeyId":
        // Function parameters for this API keyId,opts
        return await this.userKeysKeyIdDelete(options);
        
        case "userStarredOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userStarredOwnerRepoDelete(options);
        
        case "userSubscriptionsOwnerRepo":
        // Function parameters for this API owner,repo,opts
        return await this.userSubscriptionsOwnerRepoDelete(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for gistsIdCommentsCommentIdDelete
        function gistsIdCommentsCommentIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdCommentsCommentIdDelete(incomingOptions.id, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for gistsIdDelete
        function gistsIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdDelete(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for gistsIdStarDelete
        function gistsIdStarDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdStarDelete(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for notificationsThreadsIdSubscriptionDelete
        function notificationsThreadsIdSubscriptionDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of thread
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsThreadsIdSubscriptionDelete(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgMembersUsernameDelete
        function orgsOrgMembersUsernameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let username = "username_example";*/ // String | Name of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgMembersUsernameDelete(org, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgPublicMembersUsernameDelete
        function orgsOrgPublicMembersUsernameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let username = "username_example";*/ // String | Name of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgPublicMembersUsernameDelete(org, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoCollaboratorsUserDelete
        function reposOwnerRepoCollaboratorsUserDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let user = "user_example";*/ // String | Login of the user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserDelete(incomingOptions.owner, repo, incomingOptions.user, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommentsCommentIdDelete
        function reposOwnerRepoCommentsCommentIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdDelete(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoContentsPathDelete
        function reposOwnerRepoContentsPathDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let path = "path_example";*/ // String |
/*let body = new Github.DeleteFileBody();*/ // DeleteFileBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoContentsPathDelete(incomingOptions.owner, repo, incomingOptions.path, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoDelete
        function reposOwnerRepoDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDelete(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoDownloadsDownloadIdDelete
        function reposOwnerRepoDownloadsDownloadIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let downloadId = 56;*/ // Number | Id of download
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdDelete(incomingOptions.owner, repo, incomingOptions.downloadId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitRefsRefDelete
        function reposOwnerRepoGitRefsRefDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitRefsRefDelete(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksHookIdDelete
        function reposOwnerRepoHooksHookIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let hookId = 56;*/ // Number | Id of hook
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksHookIdDelete(incomingOptions.owner, repo, incomingOptions.hookId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesCommentsCommentIdDelete
        function reposOwnerRepoIssuesCommentsCommentIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | ID of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdDelete(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberLabelsDelete
        function reposOwnerRepoIssuesNumberLabelsDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsDelete(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberLabelsNameDelete
        function reposOwnerRepoIssuesNumberLabelsNameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let name = "name_example";*/ // String | Name of the label
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsNameDelete(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.name, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoKeysKeyIdDelete
        function reposOwnerRepoKeysKeyIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let keyId = 56;*/ // Number | Id of key
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdDelete(incomingOptions.owner, repo, incomingOptions.keyId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoLabelsNameDelete
        function reposOwnerRepoLabelsNameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let name = "name_example";*/ // String | Name of the label
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLabelsNameDelete(incomingOptions.owner, repo, incomingOptions.name, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesNumberDelete
        function reposOwnerRepoMilestonesNumberDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of milestone
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberDelete(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsCommentsCommentIdDelete
        function reposOwnerRepoPullsCommentsCommentIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdDelete(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesAssetsIdDelete
        function reposOwnerRepoReleasesAssetsIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdDelete(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesIdDelete
        function reposOwnerRepoReleasesIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesIdDelete(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for reposOwnerRepoSubscriptionDelete
        function reposOwnerRepoSubscriptionDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoSubscriptionDelete(incomingOptions.owner, repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdDelete
        function teamsTeamIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdDelete(incomingOptions.teamId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdMembersUsernameDelete
        function teamsTeamIdMembersUsernameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembersUsernameDelete(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdMembershipsUsernameDelete
        function teamsTeamIdMembershipsUsernameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let username = "username_example";*/ // String | Name of a member
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdMembershipsUsernameDelete(incomingOptions.teamId, incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsTeamIdReposOwnerRepoDelete
        function teamsTeamIdReposOwnerRepoDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let owner = "owner_example";*/ // String | Name of a repository owner
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdReposOwnerRepoDelete(incomingOptions.teamId, incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userEmailsDelete
        function userEmailsDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userEmailsDelete(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userFollowingUsernameDelete
        function userFollowingUsernameDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let username = "username_example";*/ // String | Name of user
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userFollowingUsernameDelete(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userKeysKeyIdDelete
        function userKeysKeyIdDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let keyId = 56;*/ // Number | ID of key
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userKeysKeyIdDelete(incomingOptions.keyId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userStarredOwnerRepoDelete
        function userStarredOwnerRepoDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of a repository owner
/*let repo = "repo_example";*/ // String | Name of a repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userStarredOwnerRepoDelete(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for userSubscriptionsOwnerRepoDelete
        function userSubscriptionsOwnerRepoDelete(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of the owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userSubscriptionsOwnerRepoDelete(incomingOptions.owner, incomingOptions.repo, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        async function Patch(entity, options) {
        switch (entity) {
            
        case "gistsIdCommentsCommentId":
        // Function parameters for this API id,commentId,body,opts
        return await this.gistsIdCommentsCommentIdPatch(options);
        
        case "gistsId":
        // Function parameters for this API id,body,opts
        return await this.gistsIdPatch(options);
        
        case "notificationsThreadsId":
        // Function parameters for this API id,opts
        return await this.notificationsThreadsIdPatch(options);
        
        case "orgsOrg":
        // Function parameters for this API org,body,opts
        return await this.orgsOrgPatch(options);
        
        case "reposOwnerRepoCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,body,opts
        return await this.reposOwnerRepoCommentsCommentIdPatch(options);
        
        case "reposOwnerRepoGitRefsRef":
        // Function parameters for this API owner,repo,ref,body,opts
        return await this.reposOwnerRepoGitRefsRefPatch(options);
        
        case "reposOwnerRepoHooksHookId":
        // Function parameters for this API owner,repo,hookId,body,opts
        return await this.reposOwnerRepoHooksHookIdPatch(options);
        
        case "reposOwnerRepoIssuesCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,body,opts
        return await this.reposOwnerRepoIssuesCommentsCommentIdPatch(options);
        
        case "reposOwnerRepoIssuesNumber":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoIssuesNumberPatch(options);
        
        case "reposOwnerRepoLabelsName":
        // Function parameters for this API owner,repo,name,body,opts
        return await this.reposOwnerRepoLabelsNamePatch(options);
        
        case "reposOwnerRepoMilestonesNumber":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoMilestonesNumberPatch(options);
        
        case "reposOwnerRepo":
        // Function parameters for this API owner,repo,body,opts
        return await this.reposOwnerRepoPatch(options);
        
        case "reposOwnerRepoPullsCommentsCommentId":
        // Function parameters for this API owner,repo,commentId,body,opts
        return await this.reposOwnerRepoPullsCommentsCommentIdPatch(options);
        
        case "reposOwnerRepoPullsNumber":
        // Function parameters for this API owner,repo,_number,body,opts
        return await this.reposOwnerRepoPullsNumberPatch(options);
        
        case "reposOwnerRepoReleasesAssetsId":
        // Function parameters for this API owner,repo,id,body,opts
        return await this.reposOwnerRepoReleasesAssetsIdPatch(options);
        
        case "reposOwnerRepoReleasesId":
        // Function parameters for this API owner,repo,id,body,opts
        return await this.reposOwnerRepoReleasesIdPatch(options);
        
        case "teamsTeamId":
        // Function parameters for this API teamId,body,opts
        return await this.teamsTeamIdPatch(options);
        
        case "user":
        // Function parameters for this API body,opts
        return await this.userPatch(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for gistsIdCommentsCommentIdPatch
        function gistsIdCommentsCommentIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let commentId = 56;*/ // Number | Id of comment
/*let body = new Github.Comment();*/ // Comment |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdCommentsCommentIdPatch(incomingOptions.id, incomingOptions.commentId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for gistsIdPatch
        function gistsIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of gist
/*let body = new Github.PatchGist();*/ // PatchGist |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.gistsIdPatch(incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for notificationsThreadsIdPatch
        function notificationsThreadsIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let id = 56;*/ // Number | Id of thread
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.notificationsThreadsIdPatch(incomingOptions.id, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for orgsOrgPatch
        function orgsOrgPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let org = "org_example";*/ // String | Name of organisation
/*let body = new Github.PatchOrg();*/ // PatchOrg |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.orgsOrgPatch(org, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoCommentsCommentIdPatch
        function reposOwnerRepoCommentsCommentIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let body = new Github.CommentBody();*/ // CommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdPatch(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoGitRefsRefPatch
        function reposOwnerRepoGitRefsRefPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let ref = "ref_example";*/ // String |
/*let body = new Github.GitRefPatch();*/ // GitRefPatch |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoGitRefsRefPatch(incomingOptions.owner, repo, incomingOptions.ref, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoHooksHookIdPatch
        function reposOwnerRepoHooksHookIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let hookId = 56;*/ // Number | Id of hook
/*let body = new Github.HookBody();*/ // HookBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoHooksHookIdPatch(incomingOptions.owner, repo, incomingOptions.hookId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesCommentsCommentIdPatch
        function reposOwnerRepoIssuesCommentsCommentIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | ID of comment
/*let body = new Github.CommentBody();*/ // CommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdPatch(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoIssuesNumberPatch
        function reposOwnerRepoIssuesNumberPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of issue
/*let body = new Github.Issue();*/ // Issue |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoIssuesNumberPatch(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoLabelsNamePatch
        function reposOwnerRepoLabelsNamePatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let name = "name_example";*/ // String | Name of the label
/*let body = ["null"];*/ // [String] |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoLabelsNamePatch(incomingOptions.owner, repo, incomingOptions.name, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoMilestonesNumberPatch
        function reposOwnerRepoMilestonesNumberPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Number of milestone
/*let body = new Github.MilestoneUpdate();*/ // MilestoneUpdate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberPatch(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPatch
        function reposOwnerRepoPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let body = new Github.RepoEdit();*/ // RepoEdit |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPatch(incomingOptions.owner, repo, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsCommentsCommentIdPatch
        function reposOwnerRepoPullsCommentsCommentIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let commentId = 56;*/ // Number | Id of comment
/*let body = new Github.CommentBody();*/ // CommentBody |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdPatch(incomingOptions.owner, repo, incomingOptions.commentId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoPullsNumberPatch
        function reposOwnerRepoPullsNumberPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let _number = 56;*/ // Number | Id of pull
/*let body = new Github.PullUpdate();*/ // PullUpdate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoPullsNumberPatch(incomingOptions.owner, repo, incomingOptions._number, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesAssetsIdPatch
        function reposOwnerRepoReleasesAssetsIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let body = new Github.AssetPatch();*/ // AssetPatch |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdPatch(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for reposOwnerRepoReleasesIdPatch
        function reposOwnerRepoReleasesIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let owner = "owner_example";*/ // String | Name of repository owner
/*let repo = "repo_example";*/ // String | Name of repository
/*let id = "id_example";*/ // String |
/*let body = new Github.ReleaseCreate();*/ // ReleaseCreate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.incomingOptions.reposOwnerRepoReleasesIdPatch(incomingOptions.owner, repo, incomingOptions.id, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsTeamIdPatch
        function teamsTeamIdPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let teamId = 56;*/ // Number | Id of team
/*let body = new Github.EditTeam();*/ // EditTeam |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.teamsTeamIdPatch(incomingOptions.teamId, incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userPatch
        function userPatch(incomingOptions) {
            import Github from 'github';

let apiInstance = new Github.DefaultApi()
/*let body = new Github.UserUpdate();*/ // UserUpdate |
/*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
apiInstance.userPatch(incomingOptions.body, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        