async function get(entity, options) {
        switch (entity) {
            
        case "REPOSITORIES_USERNAME_REPO_SLUG_SRC_NODE_PATH":
        // Function parameters for this API username,node,path,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugSrcNodePathGet(options);
        
        case "TEAMS_USERNAME_REPOSITORIES":
        // Function parameters for this API username
        return await this.teamsUsernameRepositoriesGet(options);
        
        case "USER_EMAILS_EMAIL":
        // Function parameters for this API email
        return await this.userEmailsEmailGet(options);
        
        case "USER_EMAILS":
        // Function parameters for this API 
        return await this.userEmailsGet(options);
        
        case "USER":
        // Function parameters for this API 
        return await this.userGet(options);
        
        case "USERS_USERNAME_FOLLOWERS":
        // Function parameters for this API username
        return await this.usersUsernameFollowersGet(options);
        
        case "USERS_USERNAME_FOLLOWING":
        // Function parameters for this API username
        return await this.usersUsernameFollowingGet(options);
        
        case "USERS_USERNAME":
        // Function parameters for this API username
        return await this.usersUsernameGet(options);
        
        case "USERS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.usersUsernameHooksGet(options);
        
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidGet(options);
        
        case "USERS_USERNAME_REPOSITORIES":
        // Function parameters for this API username
        return await this.usersUsernameRepositoriesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        // Function parameters for this API username,repoSlug,node,key
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        // Function parameters for this API username,repoSlug,pullRequestId
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(options);
        
        case "REPOSITORIES":
        // Function parameters for this API opts
        return await this.repositoriesGet(options);
        
        case "REPOSITORIES_USERNAME":
        // Function parameters for this API username,opts
        return await this.repositoriesUsernameGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        // Function parameters for this API username,repoSlug,node,key
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_FORKS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugForksGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugHooksGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        // Function parameters for this API username,repoSlug,pullRequestId
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_SRC_NODE_PATH":
        // Function parameters for this API username,node,path,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugSrcNodePathGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_WATCHERS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugWatchersGet(options);
        
        case "ADDON_LINKERS":
        // Function parameters for this API 
        return await this.addonLinkersGet(options);
        
        case "ADDON_LINKERS_LINKER_KEY":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyGet(options);
        
        case "ADDON_LINKERS_LINKER_KEY_VALUES":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMPONENTS_COMPONENT_ID":
        // Function parameters for this API username,repoSlug,componentId
        return await this.repositoriesUsernameRepoSlugComponentsComponentIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMPONENTS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugComponentsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS_PATH":
        // Function parameters for this API username,path,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,commentId,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_COMMENTS":
        // Function parameters for this API username,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID":
        // Function parameters for this API username,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_MILESTONES":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugMilestonesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_MILESTONES_MILESTONE_ID":
        // Function parameters for this API username,repoSlug,milestoneId
        return await this.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_VERSIONS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugVersionsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_VERSIONS_VERSION_ID":
        // Function parameters for this API username,repoSlug,versionId
        return await this.repositoriesUsernameRepoSlugVersionsVersionIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugBranchRestrictionsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        // Function parameters for this API username,repoSlug,id
        return await this.repositoriesUsernameRepoSlugBranchRestrictionsIdGet(options);
        
        case "TEAMS":
        // Function parameters for this API opts
        return await this.teamsGet(options);
        
        case "TEAMS_USERNAME_FOLLOWERS":
        // Function parameters for this API username
        return await this.teamsUsernameFollowersGet(options);
        
        case "TEAMS_USERNAME_FOLLOWING":
        // Function parameters for this API username
        return await this.teamsUsernameFollowingGet(options);
        
        case "TEAMS_USERNAME":
        // Function parameters for this API username
        return await this.teamsUsernameGet(options);
        
        case "TEAMS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.teamsUsernameHooksGet(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidGet(options);
        
        case "TEAMS_USERNAME_MEMBERS":
        // Function parameters for this API username
        return await this.teamsUsernameMembersGet(options);
        
        case "TEAMS_USERNAME_REPOSITORIES":
        // Function parameters for this API username
        return await this.teamsUsernameRepositoriesGet(options);
        
        case "USERS_USERNAME_REPOSITORIES":
        // Function parameters for this API username
        return await this.usersUsernameRepositoriesGet(options);
        
        case "SNIPPETS":
        // Function parameters for this API opts
        return await this.snippetsGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,commentId,encodedId
        return await this.snippetsUsernameEncodedIdCommentsCommentIdGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdCommentsGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMITS":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdCommitsGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMITS_REVISION":
        // Function parameters for this API username,encodedId,revision
        return await this.snippetsUsernameEncodedIdCommitsRevisionGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID_FILES_PATH":
        // Function parameters for this API username,path,nodeId,encodedId
        return await this.snippetsUsernameEncodedIdNodeIdFilesPathGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        // Function parameters for this API username,encodedId,nodeId
        return await this.snippetsUsernameEncodedIdNodeIdGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_REVISION_DIFF":
        // Function parameters for this API username,encodedId,revision,opts
        return await this.snippetsUsernameEncodedIdRevisionDiffGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_REVISION_PATCH":
        // Function parameters for this API username,encodedId,revision
        return await this.snippetsUsernameEncodedIdRevisionPatchGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdWatchGet(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_WATCHERS":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdWatchersGet(options);
        
        case "SNIPPETS_USERNAME":
        // Function parameters for this API username,opts
        return await this.snippetsUsernameGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugDefaultReviewersGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        // Function parameters for this API username,targetUsername,repoSlug
        return await this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_ACTIVITY":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsActivityGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS":
        // Function parameters for this API username,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugPullrequestsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_ACTIVITY":
        // Function parameters for this API username,repoSlug,pullRequestId
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,pullRequestId,commentId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMENTS":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMITS":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_DIFF":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID":
        // Function parameters for this API username,repoSlug,pullRequestId
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_PATCH":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        // Function parameters for this API username,repoSlug,pullRequestId
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS_FILENAME":
        // Function parameters for this API username,filename,repoSlug
        return await this.repositoriesUsernameRepoSlugDownloadsFilenameGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugDownloadsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_REVISION":
        // Function parameters for this API username,repoSlug,revision
        return await this.repositoriesUsernameRepoSlugCommitRevisionGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_SHA_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,sha,commentId,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_SHA_COMMENTS":
        // Function parameters for this API username,sha,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitShaCommentsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS_REVISION":
        // Function parameters for this API username,revision,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitsRevisionGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DIFF_SPEC":
        // Function parameters for this API username,spec,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugDiffSpecGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PATCH_SPEC":
        // Function parameters for this API username,spec,repoSlug
        return await this.repositoriesUsernameRepoSlugPatchSpecGet(options);
        
        case "HOOK_EVENTS":
        // Function parameters for this API 
        return await this.hookEventsGet(options);
        
        case "HOOK_EVENTS_SUBJECT_TYPE":
        // Function parameters for this API subjectType
        return await this.hookEventsSubjectTypeGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugHooksGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidGet(options);
        
        case "TEAMS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.teamsUsernameHooksGet(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidGet(options);
        
        case "USERS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.usersUsernameHooksGet(options);
        
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidGet(options);
        
        case "TEAMS_OWNER_PROJECTS":
        // Function parameters for this API owner
        return await this.teamsOwnerProjectsGet(options);
        
        case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        // Function parameters for this API owner,projectKey
        return await this.teamsOwnerProjectsProjectKeyGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_BRANCHES":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugRefsBranchesGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_BRANCHES_NAME":
        // Function parameters for this API username,name,repoSlug
        return await this.repositoriesUsernameRepoSlugRefsBranchesNameGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugRefsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugRefsTagsGet(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS_NAME":
        // Function parameters for this API username,name,repoSlug
        return await this.repositoriesUsernameRepoSlugRefsTagsNameGet(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for repositoriesUsernameRepoSlugSrcNodePathGet
        function repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SourceApi()
/*let username = "username_example";*/ // String |
/*let node = "node_example";*/ // String |
/*let path = "path_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let opts = {
  'format': "format_example" // String | Instead of returning the file's contents, return the (json) meta data for it.
};*/
apiInstance.repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions.username, incomingOptions.node, incomingOptions.path, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsUsernameRepositoriesGet
        function teamsUsernameRepositoriesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameRepositoriesGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userEmailsEmailGet
        function userEmailsEmailGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let email = "email_example";*/ // String | 
apiInstance.userEmailsEmailGet(incomingOptions.email, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for userEmailsGet
        function userEmailsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi();
apiInstance.userEmailsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for userGet
        function userGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi();
apiInstance.userGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for usersUsernameFollowersGet
        function usersUsernameFollowersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | The account's username
apiInstance.usersUsernameFollowersGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameFollowingGet
        function usersUsernameFollowingGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | The user's username
apiInstance.usersUsernameFollowingGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameGet
        function usersUsernameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | The account's username or UUID.
apiInstance.usersUsernameGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksGet
        function usersUsernameHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameHooksGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksUidGet
        function usersUsernameHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.usersUsernameHooksUidGet(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameRepositoriesGet
        function usersUsernameRepositoriesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameRepositoriesGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitstatusesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA
/*let key = "key_example";*/ // String | The build status' unique key
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, incomingOptions.key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesGet
        function repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitstatusesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitstatusesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let pullRequestId = 56;*/ // Number | The pull request's id
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesGet
        function repositoriesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let opts = {
  'after': "after_example" // String | Filter the results to include only repositories create on or after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)  timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
};*/
apiInstance.repositoriesGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameGet
        function repositoriesUsernameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let opts = {
  'role': "role_example" // String |  Filters the result based on the authenticated user's role on each repository.  * **member**: returns repositories to which the user has explicit read access * **contributor**: returns repositories to which the user has explicit write access * **admin**: returns repositories to which the user has explicit administrator access * **owner**: returns all repositories owned by the current user 
};*/
apiInstance.repositoriesUsernameGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA
/*let key = "key_example";*/ // String | The build status' unique key
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, incomingOptions.key, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesGet
        function repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugForksGet
        function repositoriesUsernameRepoSlugForksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugForksGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugGet
        function repositoriesUsernameRepoSlugGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesUsernameRepoSlugGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksGet
        function repositoriesUsernameRepoSlugHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugHooksGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidGet
        function repositoriesUsernameRepoSlugHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.repositoriesUsernameRepoSlugHooksUidGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let pullRequestId = 56;*/ // Number | The pull request's id
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugSrcNodePathGet
        function repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let node = "node_example";*/ // String |
/*let path = "path_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let opts = {
  'format': "format_example" // String | Instead of returning the file's contents, return the (json) meta data for it.
};*/
apiInstance.repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions.username, incomingOptions.node, incomingOptions.path, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugWatchersGet
        function repositoriesUsernameRepoSlugWatchersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugWatchersGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonLinkersGet
        function addonLinkersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonLinkersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyGet
        function addonLinkersLinkerKeyGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyGet(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyValuesGet
        function addonLinkersLinkerKeyValuesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesGet(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugComponentsComponentIdGet
        function repositoriesUsernameRepoSlugComponentsComponentIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let componentId = 56;*/ // Number | The component's id
apiInstance.repositoriesUsernameRepoSlugComponentsComponentIdGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.componentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugComponentsGet
        function repositoriesUsernameRepoSlugComponentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugComponentsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesGet
        function repositoriesUsernameRepoSlugIssuesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet
        function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet
        function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let path = "path_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(incomingOptions.username, incomingOptions.path, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet
        function repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(incomingOptions.username, incomingOptions.commentId, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet
        function repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(incomingOptions.username, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdGet
        function repositoriesUsernameRepoSlugIssuesIssueIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdGet(incomingOptions.username, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVoteGet
        function repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchGet
        function repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugMilestonesGet
        function repositoriesUsernameRepoSlugMilestonesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugMilestonesGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugMilestonesMilestoneIdGet
        function repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let milestoneId = 56;*/ // Number | The milestone's id
apiInstance.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.milestoneId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugVersionsGet
        function repositoriesUsernameRepoSlugVersionsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugVersionsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugVersionsVersionIdGet
        function repositoriesUsernameRepoSlugVersionsVersionIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let versionId = 56;*/ // Number | The version's id
apiInstance.repositoriesUsernameRepoSlugVersionsVersionIdGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.versionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsGet
        function repositoriesUsernameRepoSlugBranchRestrictionsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.BranchrestrictionsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdGet
        function repositoriesUsernameRepoSlugBranchRestrictionsIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.BranchrestrictionsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let id = "id_example";*/ // String | The restriction rule's id
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsGet
        function teamsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let opts = {
  'role': "role_example" // String |  Filters the teams based on the authenticated user's role on each team.  * **member**: returns a list of all the teams which the caller is a member of   at least one team group or repository owned by the team * **contributor**: returns a list of teams which the caller has write access   to at least one repository owned by the team * **admin**: returns a list teams which the caller has team administrator access 
};*/
apiInstance.teamsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameFollowersGet
        function teamsUsernameFollowersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | The team's username
apiInstance.teamsUsernameFollowersGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameFollowingGet
        function teamsUsernameFollowingGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | The team's username
apiInstance.teamsUsernameFollowingGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameGet
        function teamsUsernameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | The team's username or UUID.
apiInstance.teamsUsernameGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksGet
        function teamsUsernameHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameHooksGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidGet
        function teamsUsernameHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.teamsUsernameHooksUidGet(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameMembersGet
        function teamsUsernameMembersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameMembersGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameRepositoriesGet
        function teamsUsernameRepositoriesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameRepositoriesGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameRepositoriesGet
        function usersUsernameRepositoriesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameRepositoriesGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsGet
        function snippetsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let opts = {
  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
};*/
apiInstance.snippetsGet(incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommentsCommentIdGet
        function snippetsUsernameEncodedIdCommentsCommentIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdGet(incomingOptions.username, incomingOptions.commentId, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommentsGet
        function snippetsUsernameEncodedIdCommentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommentsGet(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommitsGet
        function snippetsUsernameEncodedIdCommitsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommitsGet(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommitsRevisionGet
        function snippetsUsernameEncodedIdCommitsRevisionGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String |
/*let revision = "revision_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommitsRevisionGet(incomingOptions.username, incomingOptions.encodedId, incomingOptions.revision, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdGet
        function snippetsUsernameEncodedIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdGet(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdNodeIdFilesPathGet
        function snippetsUsernameEncodedIdNodeIdFilesPathGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let path = "path_example";*/ // String |
/*let nodeId = "nodeId_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdNodeIdFilesPathGet(incomingOptions.username, incomingOptions.path, incomingOptions.nodeId, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdNodeIdGet
        function snippetsUsernameEncodedIdNodeIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id
/*let nodeId = "nodeId_example";*/ // String | A commit revision (SHA1).
apiInstance.snippetsUsernameEncodedIdNodeIdGet(incomingOptions.username, incomingOptions.encodedId, incomingOptions.nodeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdRevisionDiffGet
        function snippetsUsernameEncodedIdRevisionDiffGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id
/*let revision = "revision_example";*/ // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`
/*let opts = {
  'path': "path_example" // String | When used, only one the diff of the specified file will be returned.
};*/
apiInstance.snippetsUsernameEncodedIdRevisionDiffGet(incomingOptions.username, incomingOptions.encodedId, incomingOptions.revision, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdRevisionPatchGet
        function snippetsUsernameEncodedIdRevisionPatchGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id
/*let revision = "revision_example";*/ // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
apiInstance.snippetsUsernameEncodedIdRevisionPatchGet(incomingOptions.username, incomingOptions.encodedId, incomingOptions.revision, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdWatchGet
        function snippetsUsernameEncodedIdWatchGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchGet(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdWatchersGet
        function snippetsUsernameEncodedIdWatchersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchersGet(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameGet
        function snippetsUsernameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String | Limits the result to snippets owned by this user
/*let opts = {
  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
};*/
apiInstance.snippetsUsernameGet(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDefaultReviewersGet
        function repositoriesUsernameRepoSlugDefaultReviewersGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet
        function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let targetUsername = "targetUsername_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(incomingOptions.username, incomingOptions.targetUsername, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsActivityGet
        function repositoriesUsernameRepoSlugPullrequestsActivityGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsActivityGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsGet
        function repositoriesUsernameRepoSlugPullrequestsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let opts = {
  'state': "state_example" // String | Only return pull requests that are in this state. This parameter can be repeated.
};*/
apiInstance.repositoriesUsernameRepoSlugPullrequestsGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let pullRequestId = 56;*/ // Number | The id of the pull request. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.commentId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let pullRequestId = 56;*/ // Number | The id of the pull request. 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let pullRequestId = 56;*/ // Number | The pull request's id
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDownloadsFilenameGet
        function repositoriesUsernameRepoSlugDownloadsFilenameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.DownloadsApi()
/*let username = "username_example";*/ // String |
/*let filename = "filename_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDownloadsFilenameGet(incomingOptions.username, incomingOptions.filename, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDownloadsGet
        function repositoriesUsernameRepoSlugDownloadsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.DownloadsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDownloadsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitRevisionGet
        function repositoriesUsernameRepoSlugCommitRevisionGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let revision = "revision_example";*/ // String | The commit's SHA1.
apiInstance.repositoriesUsernameRepoSlugCommitRevisionGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.revision, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet
        function repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let sha = "sha_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(incomingOptions.username, incomingOptions.sha, incomingOptions.commentId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitShaCommentsGet
        function repositoriesUsernameRepoSlugCommitShaCommentsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let sha = "sha_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitShaCommentsGet(incomingOptions.username, incomingOptions.sha, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitsGet
        function repositoriesUsernameRepoSlugCommitsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitsRevisionGet
        function repositoriesUsernameRepoSlugCommitsRevisionGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let revision = "revision_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitsRevisionGet(incomingOptions.username, incomingOptions.revision, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDiffSpecGet
        function repositoriesUsernameRepoSlugDiffSpecGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let spec = "spec_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let opts = {
  'context': 56, // Number | Generate diffs with <n> lines of context instead of the usual three
  'path': "path_example" // String | Limit the diff to a single file
};*/
apiInstance.repositoriesUsernameRepoSlugDiffSpecGet(incomingOptions.username, incomingOptions.spec, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPatchSpecGet
        function repositoriesUsernameRepoSlugPatchSpecGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let spec = "spec_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPatchSpecGet(incomingOptions.username, incomingOptions.spec, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for hookEventsGet
        function hookEventsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi();
apiInstance.hookEventsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for hookEventsSubjectTypeGet
        function hookEventsSubjectTypeGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let subjectType = "subjectType_example";*/ // String | A resource or subject type.
apiInstance.hookEventsSubjectTypeGet(incomingOptions.subjectType, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksGet
        function repositoriesUsernameRepoSlugHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugHooksGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidGet
        function repositoriesUsernameRepoSlugHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.repositoriesUsernameRepoSlugHooksUidGet(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksGet
        function teamsUsernameHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameHooksGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidGet
        function teamsUsernameHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.teamsUsernameHooksUidGet(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksGet
        function usersUsernameHooksGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameHooksGet(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksUidGet
        function usersUsernameHooksUidGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id.
apiInstance.usersUsernameHooksUidGet(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsOwnerProjectsGet
        function teamsOwnerProjectsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.ProjectsApi()
/*let owner = "owner_example";*/ // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
apiInstance.teamsOwnerProjectsGet(incomingOptions.owner, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsOwnerProjectsProjectKeyGet
        function teamsOwnerProjectsProjectKeyGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.ProjectsApi()
/*let owner = "owner_example";*/ // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)).
/*let projectKey = "projectKey_example";*/ // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
apiInstance.teamsOwnerProjectsProjectKeyGet(incomingOptions.owner, incomingOptions.projectKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsBranchesGet
        function repositoriesUsernameRepoSlugRefsBranchesGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugRefsBranchesGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsBranchesNameGet
        function repositoriesUsernameRepoSlugRefsBranchesNameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |
/*let name = "name_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUserincomingOptions.nameRepoSlugRefsBranchesNameGet(incomingOptions.username, name, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsGet
        function repositoriesUsernameRepoSlugRefsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugRefsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsTagsGet
        function repositoriesUsernameRepoSlugRefsTagsGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams.
/*let repoSlug = "repoSlug_example";*/ // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
apiInstance.repositoriesUsernameRepoSlugRefsTagsGet(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsTagsNameGet
        function repositoriesUsernameRepoSlugRefsTagsNameGet(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |
/*let name = "name_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUserincomingOptions.nameRepoSlugRefsTagsNameGet(incomingOptions.username, name, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        async function post(entity, options) {
        switch (entity) {
            
        case "USERS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.usersUsernameHooksPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugHooksPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG":
        // Function parameters for this API username,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugPost(options);
        
        case "ADDON_LINKERS_LINKER_KEY_VALUES":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES":
        // Function parameters for this API username,repoSlug,body
        return await this.repositoriesUsernameRepoSlugIssuesPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS":
        // Function parameters for this API username,repoSlug,body
        return await this.repositoriesUsernameRepoSlugBranchRestrictionsPost(options);
        
        case "TEAMS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.teamsUsernameHooksPost(options);
        
        case "SNIPPETS":
        // Function parameters for this API body
        return await this.snippetsPost(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS":
        // Function parameters for this API username,encodedId,body
        return await this.snippetsUsernameEncodedIdCommentsPost(options);
        
        case "SNIPPETS_USERNAME":
        // Function parameters for this API username,body
        return await this.snippetsUsernamePost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS":
        // Function parameters for this API username,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugPullrequestsPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_APPROVE":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_DECLINE":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_MERGE":
        // Function parameters for this API username,pullRequestId,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugDownloadsPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_APPROVE":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeApprovePost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitsPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS_REVISION":
        // Function parameters for this API username,revision,repoSlug
        return await this.repositoriesUsernameRepoSlugCommitsRevisionPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugHooksPost(options);
        
        case "TEAMS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.teamsUsernameHooksPost(options);
        
        case "USERS_USERNAME_HOOKS":
        // Function parameters for this API username
        return await this.usersUsernameHooksPost(options);
        
        case "TEAMS_OWNER_PROJECTS":
        // Function parameters for this API owner,body
        return await this.teamsOwnerProjectsPost(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS":
        // Function parameters for this API username,repoSlug,body
        return await this.repositoriesUsernameRepoSlugRefsTagsPost(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for usersUsernameHooksPost
        function usersUsernameHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameHooksPost(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitstatusesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksPost
        function repositoriesUsernameRepoSlugHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugHooksPost(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPost
        function repositoriesUsernameRepoSlugPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let opts = {
  'body': new Bitbucket.Repository() // Repository | The repository that is to be created. Note that most object elements are optional. Elements \"owner\" and \"full_name\" are ignored as the URL implies them.
};*/
apiInstance.repositoriesUsernameRepoSlugPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyValuesPost
        function addonLinkersLinkerKeyValuesPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesPost(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost
        function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesPost
        function repositoriesUsernameRepoSlugIssuesPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let body = new Bitbucket.Issue();*/ // Issue | The new issue. Note that the only required element is `title`. All other elements can be omitted from the body.
apiInstance.repositoriesUsernameRepoSlugIssuesPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsPost
        function repositoriesUsernameRepoSlugBranchRestrictionsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.BranchrestrictionsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let body = new Bitbucket.Branchrestriction();*/ // Branchrestriction | The new rule
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksPost
        function teamsUsernameHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameHooksPost(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsPost
        function snippetsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let body = new Bitbucket.Snippet();*/ // Snippet | The new snippet object.
apiInstance.snippetsPost(incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommentsPost
        function snippetsUsernameEncodedIdCommentsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String |
/*let body = new Bitbucket.Snippet();*/ // Snippet | The contents of the new comment.
apiInstance.snippetsUsernameEncodedIdCommentsPost(incomingOptions.username, incomingOptions.encodedId, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernamePost
        function snippetsUsernamePost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let body = new Bitbucket.Snippet();*/ // Snippet | The new snippet object.
apiInstance.snippetsUsernamePost(incomingOptions.username, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPost
        function repositoriesUsernameRepoSlugPullrequestsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
};*/
apiInstance.repositoriesUsernameRepoSlugPullrequestsPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let opts = {
  'body': new Bitbucket.PullrequestMergeParameters() // PullrequestMergeParameters | 
};*/
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDownloadsPost
        function repositoriesUsernameRepoSlugDownloadsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.DownloadsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDownloadsPost(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeApprovePost
        function repositoriesUsernameRepoSlugCommitNodeApprovePost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1.
apiInstance.repositoriesUsernameRepoSlugCommitNodeApprovePost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitsPost
        function repositoriesUsernameRepoSlugCommitsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitsPost(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitsRevisionPost
        function repositoriesUsernameRepoSlugCommitsRevisionPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let revision = "revision_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugCommitsRevisionPost(incomingOptions.username, incomingOptions.revision, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksPost
        function repositoriesUsernameRepoSlugHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugHooksPost(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksPost
        function teamsUsernameHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String | 
apiInstance.teamsUsernameHooksPost(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksPost
        function usersUsernameHooksPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String | 
apiInstance.usersUsernameHooksPost(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsOwnerProjectsPost
        function teamsOwnerProjectsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.ProjectsApi()
/*let owner = "owner_example";*/ // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)).
/*let body = new Bitbucket.Project();*/ // Project | 
apiInstance.teamsOwnerProjectsPost(incomingOptions.owner, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugRefsTagsPost
        function repositoriesUsernameRepoSlugRefsTagsPost(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RefsApi()
/*let username = "username_example";*/ // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams.
/*let repoSlug = "repoSlug_example";*/ // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`))
/*let body = new Bitbucket.Tag();*/ // Tag | 
apiInstance.repositoriesUsernameRepoSlugRefsTagsPost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        async function put(entity, options) {
        switch (entity) {
            
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        // Function parameters for this API username,repoSlug,node,key,opts
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        // Function parameters for this API username,repoSlug,node,key,opts
        return await this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG":
        // Function parameters for this API username,repoSlug,opts
        return await this.repositoriesUsernameRepoSlugPut(options);
        
        case "ADDON_LINKERS_LINKER_KEY_VALUES":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesPut(options);
        
        case "ADDON":
        // Function parameters for this API 
        return await this.addonPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        // Function parameters for this API username,repoSlug,id,body
        return await this.repositoriesUsernameRepoSlugBranchRestrictionsIdPut(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidPut(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,commentId,encodedId
        return await this.snippetsUsernameEncodedIdCommentsCommentIdPut(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        // Function parameters for this API username,encodedId,nodeId
        return await this.snippetsUsernameEncodedIdNodeIdPut(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdPut(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdWatchPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        // Function parameters for this API username,targetUsername,repoSlug
        return await this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID":
        // Function parameters for this API username,repoSlug,pullRequestId,opts
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidPut(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidPut(options);
        
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidPut(options);
        
        case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        // Function parameters for this API owner,projectKey,body
        return await this.teamsOwnerProjectsProjectKeyPut(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for usersUsernameHooksUidPut
        function usersUsernameHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.usersUsernameHooksUidPut(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitstatusesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA
/*let key = "key_example";*/ // String | The commit status' unique ke
/*let opts = {
  'body': new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
};*/
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, incomingOptions.key, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut
        function repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA
/*let key = "key_example";*/ // String | The commit status' unique ke
/*let opts = {
  'body': new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
};*/
apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, incomingOptions.key, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidPut
        function repositoriesUsernameRepoSlugHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.repositoriesUsernameRepoSlugHooksUidPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPut
        function repositoriesUsernameRepoSlugPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let opts = {
  'body': new Bitbucket.Repository() // Repository | The repository that is to be updated.  Note that the elements \"owner\" and \"full_name\" are ignored since the URL implies them. 
};*/
apiInstance.repositoriesUsernameRepoSlugPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyValuesPut
        function addonLinkersLinkerKeyValuesPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesPut(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonPut
        function addonPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonPut((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVotePut
        function repositoriesUsernameRepoSlugIssuesIssueIdVotePut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchPut
        function repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdPut
        function repositoriesUsernameRepoSlugBranchRestrictionsIdPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.BranchrestrictionsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let id = "id_example";*/ // String | The restriction rule's i
/*let body = new Bitbucket.Branchrestriction();*/ // Branchrestriction | The new version of the existing rule
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.id, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidPut
        function teamsUsernameHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.teamsUsernameHooksUidPut(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommentsCommentIdPut
        function snippetsUsernameEncodedIdCommentsCommentIdPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdPut(incomingOptions.username, incomingOptions.commentId, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdNodeIdPut
        function snippetsUsernameEncodedIdNodeIdPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id
/*let nodeId = "nodeId_example";*/ // String | A commit revision (SHA1).
apiInstance.snippetsUsernameEncodedIdNodeIdPut(incomingOptions.username, incomingOptions.encodedId, incomingOptions.nodeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdPut
        function snippetsUsernameEncodedIdPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdPut(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdWatchPut
        function snippetsUsernameEncodedIdWatchPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchPut(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut
        function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let targetUsername = "targetUsername_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(incomingOptions.username, incomingOptions.targetUsername, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
/*let pullRequestId = 56;*/ // Number | The id of the open pull request.
/*let opts = {
  'body': new Bitbucket.Pullrequest() // Pullrequest | The pull request that is to be updated.
};*/
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pullRequestId, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidPut
        function repositoriesUsernameRepoSlugHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.repositoriesUsernameRepoSlugHooksUidPut(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidPut
        function teamsUsernameHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.teamsUsernameHooksUidPut(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for usersUsernameHooksUidPut
        function usersUsernameHooksUidPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.usersUsernameHooksUidPut(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for teamsOwnerProjectsProjectKeyPut
        function teamsOwnerProjectsProjectKeyPut(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.ProjectsApi()
/*let owner = "owner_example";*/ // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)).
/*let projectKey = "projectKey_example";*/ // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)).
/*let body = new Bitbucket.Project();*/ // Project | 
apiInstance.teamsOwnerProjectsProjectKeyPut(incomingOptions.owner, incomingOptions.projectKey, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        async function delete(entity, options) {
        switch (entity) {
            
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG":
        // Function parameters for this API username,repoSlug
        return await this.repositoriesUsernameRepoSlugDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidDelete(options);
        
        case "ADDON":
        // Function parameters for this API 
        return await this.addonDelete(options);
        
        case "ADDON_LINKERS_LINKER_KEY_VALUES":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS_PATH":
        // Function parameters for this API username,path,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID":
        // Function parameters for this API username,issueId,repoSlug
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        // Function parameters for this API username,repoSlug,issueId
        return await this.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        // Function parameters for this API username,repoSlug,id
        return await this.repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidDelete(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API username,commentId,encodedId
        return await this.snippetsUsernameEncodedIdCommentsCommentIdDelete(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdDelete(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        // Function parameters for this API username,nodeId,encodedId
        return await this.snippetsUsernameEncodedIdNodeIdDelete(options);
        
        case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        // Function parameters for this API username,encodedId
        return await this.snippetsUsernameEncodedIdWatchDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        // Function parameters for this API username,targetUsername,repoSlug
        return await this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_APPROVE":
        // Function parameters for this API username,pullRequestId,repoSlug
        return await this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS_FILENAME":
        // Function parameters for this API username,filename,repoSlug
        return await this.repositoriesUsernameRepoSlugDownloadsFilenameDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_APPROVE":
        // Function parameters for this API username,repoSlug,node
        return await this.repositoriesUsernameRepoSlugCommitNodeApproveDelete(options);
        
        case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        // Function parameters for this API username,repoSlug,uid
        return await this.repositoriesUsernameRepoSlugHooksUidDelete(options);
        
        case "TEAMS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.teamsUsernameHooksUidDelete(options);
        
        case "USERS_USERNAME_HOOKS_UID":
        // Function parameters for this API username,uid
        return await this.usersUsernameHooksUidDelete(options);
        
        case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        // Function parameters for this API owner,projectKey
        return await this.teamsOwnerProjectsProjectKeyDelete(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for usersUsernameHooksUidDelete
        function usersUsernameHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.UsersApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.usersUsernameHooksUidDelete(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDelete
        function repositoriesUsernameRepoSlugDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
/*let repoSlug = "repoSlug_example";*/ // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
apiInstance.repositoriesUsernameRepoSlugDelete(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidDelete
        function repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.RepositoriesApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for addonDelete
        function addonDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi();
apiInstance.addonDelete((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyValuesDelete
        function addonLinkersLinkerKeyValuesDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesDelete(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete
        function repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let path = "path_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(incomingOptions.username, incomingOptions.path, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdDelete
        function repositoriesUsernameRepoSlugIssuesIssueIdDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let issueId = "issueId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdDelete(incomingOptions.username, incomingOptions.issueId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete
        function repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete
        function repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.IssueTrackerApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let issueId = 56;*/ // Number | The issue's id
apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.issueId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdDelete
        function repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.BranchrestrictionsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let id = "id_example";*/ // String | The restriction rule's id
apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidDelete
        function teamsUsernameHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.TeamsApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.teamsUsernameHooksUidDelete(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdCommentsCommentIdDelete
        function snippetsUsernameEncodedIdCommentsCommentIdDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let commentId = "commentId_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | 
apiInstance.snippetsUsernameEncodedIdCommentsCommentIdDelete(incomingOptions.username, incomingOptions.commentId, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdDelete
        function snippetsUsernameEncodedIdDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdDelete(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdNodeIdDelete
        function snippetsUsernameEncodedIdNodeIdDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let nodeId = "nodeId_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet's id.
apiInstance.snippetsUsernameEncodedIdNodeIdDelete(incomingOptions.username, incomingOptions.nodeId, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for snippetsUsernameEncodedIdWatchDelete
        function snippetsUsernameEncodedIdWatchDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.SnippetsApi()
/*let username = "username_example";*/ // String |
/*let encodedId = "encodedId_example";*/ // String | The snippet id.
apiInstance.snippetsUsernameEncodedIdWatchDelete(incomingOptions.username, incomingOptions.encodedId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete
        function repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let targetUsername = "targetUsername_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(incomingOptions.username, incomingOptions.targetUsername, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete
        function repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.PullrequestsApi()
/*let username = "username_example";*/ // String |
/*let pullRequestId = "pullRequestId_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(incomingOptions.username, incomingOptions.pullRequestId, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugDownloadsFilenameDelete
        function repositoriesUsernameRepoSlugDownloadsFilenameDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.DownloadsApi()
/*let username = "username_example";*/ // String |
/*let filename = "filename_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String | 
apiInstance.repositoriesUsernameRepoSlugDownloadsFilenameDelete(incomingOptions.username, incomingOptions.filename, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugCommitNodeApproveDelete
        function repositoriesUsernameRepoSlugCommitNodeApproveDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.CommitsApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let node = "node_example";*/ // String | The commit's SHA1.
apiInstance.repositoriesUsernameRepoSlugCommitNodeApproveDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.node, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for repositoriesUsernameRepoSlugHooksUidDelete
        function repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let repoSlug = "repoSlug_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsUsernameHooksUidDelete
        function teamsUsernameHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.teamsUsernameHooksUidDelete(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for usersUsernameHooksUidDelete
        function usersUsernameHooksUidDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.WebhooksApi()
/*let username = "username_example";*/ // String |
/*let uid = "uid_example";*/ // String | The installed webhook's id
apiInstance.usersUsernameHooksUidDelete(incomingOptions.username, incomingOptions.uid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for teamsOwnerProjectsProjectKeyDelete
        function teamsOwnerProjectsProjectKeyDelete(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.ProjectsApi()
/*let owner = "owner_example";*/ // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)).
/*let projectKey = "projectKey_example";*/ // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
apiInstance.teamsOwnerProjectsProjectKeyDelete(incomingOptions.owner, incomingOptions.projectKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        async function patch(entity, options) {
        switch (entity) {
            
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }async function unknown(entity, options) {
        switch (entity) {
            
        case "ADDON_LINKERS_LINKER_KEY_VALUES_DELETE_0":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesDelete_0(options);
        
        case "ADDON_LINKERS_LINKER_KEY_VALUES_GET_0":
        // Function parameters for this API linkerKey
        return await this.addonLinkersLinkerKeyValuesGet_0(options);
        
        case "CREATE_PIPELINE_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug,body
        return await this.createPipelineForRepository(options);
        
        case "CREATE_PIPELINE_VARIABLE_FOR_TEAM":
        // Function parameters for this API username,opts
        return await this.createPipelineVariableForTeam(options);
        
        case "CREATE_PIPELINE_VARIABLE_FOR_USER":
        // Function parameters for this API username,opts
        return await this.createPipelineVariableForUser(options);
        
        case "CREATE_REPOSITORY_PIPELINE_KNOWN_HOST":
        // Function parameters for this API username,repoSlug,body
        return await this.createRepositoryPipelineKnownHost(options);
        
        case "CREATE_REPOSITORY_PIPELINE_VARIABLE":
        // Function parameters for this API username,repoSlug,body
        return await this.createRepositoryPipelineVariable(options);
        
        case "DELETE_PIPELINE_VARIABLE_FOR_TEAM":
        // Function parameters for this API username,variableUuid
        return await this.deletePipelineVariableForTeam(options);
        
        case "DELETE_PIPELINE_VARIABLE_FOR_USER":
        // Function parameters for this API username,variableUuid
        return await this.deletePipelineVariableForUser(options);
        
        case "DELETE_REPOSITORY_PIPELINE_KEY_PAIR":
        // Function parameters for this API username,repoSlug
        return await this.deleteRepositoryPipelineKeyPair(options);
        
        case "DELETE_REPOSITORY_PIPELINE_KNOWN_HOST":
        // Function parameters for this API username,repoSlug,knownHostUuid
        return await this.deleteRepositoryPipelineKnownHost(options);
        
        case "DELETE_REPOSITORY_PIPELINE_VARIABLE":
        // Function parameters for this API username,repoSlug,variableUuid
        return await this.deleteRepositoryPipelineVariable(options);
        
        case "GET_PIPELINE_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug,pipelineUuid
        return await this.getPipelineForRepository(options);
        
        case "GET_PIPELINE_STEP_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug,pipelineUuid,stepUuid
        return await this.getPipelineStepForRepository(options);
        
        case "GET_PIPELINE_STEP_LOG_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug,pipelineUuid,stepUuid
        return await this.getPipelineStepLogForRepository(options);
        
        case "GET_PIPELINE_STEPS_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug,pipelineUuid
        return await this.getPipelineStepsForRepository(options);
        
        case "GET_PIPELINE_VARIABLE_FOR_TEAM":
        // Function parameters for this API username,variableUuid
        return await this.getPipelineVariableForTeam(options);
        
        case "GET_PIPELINE_VARIABLE_FOR_USER":
        // Function parameters for this API username,variableUuid
        return await this.getPipelineVariableForUser(options);
        
        case "GET_PIPELINE_VARIABLES_FOR_TEAM":
        // Function parameters for this API username
        return await this.getPipelineVariablesForTeam(options);
        
        case "GET_PIPELINE_VARIABLES_FOR_USER":
        // Function parameters for this API username
        return await this.getPipelineVariablesForUser(options);
        
        case "GET_PIPELINES_FOR_REPOSITORY":
        // Function parameters for this API username,repoSlug
        return await this.getPipelinesForRepository(options);
        
        case "GET_REPOSITORY_PIPELINE_CONFIG":
        // Function parameters for this API username,repoSlug
        return await this.getRepositoryPipelineConfig(options);
        
        case "GET_REPOSITORY_PIPELINE_KNOWN_HOST":
        // Function parameters for this API username,repoSlug,knownHostUuid
        return await this.getRepositoryPipelineKnownHost(options);
        
        case "GET_REPOSITORY_PIPELINE_KNOWN_HOSTS":
        // Function parameters for this API username,repoSlug
        return await this.getRepositoryPipelineKnownHosts(options);
        
        case "GET_REPOSITORY_PIPELINE_SSH_KEY_PAIR":
        // Function parameters for this API username,repoSlug
        return await this.getRepositoryPipelineSshKeyPair(options);
        
        case "GET_REPOSITORY_PIPELINE_VARIABLE":
        // Function parameters for this API username,repoSlug,variableUuid
        return await this.getRepositoryPipelineVariable(options);
        
        case "GET_REPOSITORY_PIPELINE_VARIABLES":
        // Function parameters for this API username,repoSlug
        return await this.getRepositoryPipelineVariables(options);
        
        case "STOP_PIPELINE":
        // Function parameters for this API username,repoSlug,pipelineUuid
        return await this.stopPipeline(options);
        
        case "UPDATE_PIPELINE_VARIABLE_FOR_TEAM":
        // Function parameters for this API username,variableUuid,body
        return await this.updatePipelineVariableForTeam(options);
        
        case "UPDATE_PIPELINE_VARIABLE_FOR_USER":
        // Function parameters for this API username,variableUuid,body
        return await this.updatePipelineVariableForUser(options);
        
        case "UPDATE_REPOSITORY_PIPELINE_CONFIG":
        // Function parameters for this API username,repoSlug,body
        return await this.updateRepositoryPipelineConfig(options);
        
        case "UPDATE_REPOSITORY_PIPELINE_KEY_PAIR":
        // Function parameters for this API username,repoSlug,body
        return await this.updateRepositoryPipelineKeyPair(options);
        
        case "UPDATE_REPOSITORY_PIPELINE_KNOWN_HOST":
        // Function parameters for this API username,repoSlug,knownHostUuid,body
        return await this.updateRepositoryPipelineKnownHost(options);
        
        case "UPDATE_REPOSITORY_PIPELINE_VARIABLE":
        // Function parameters for this API username,repoSlug,variableUuid,body
        return await this.updateRepositoryPipelineVariable(options);
        
    default:
    throw ErrorHelper.getError(`Can't get entity`, 404)
    
        }
      }
        // This is a function for addonLinkersLinkerKeyValuesDelete_0
        function addonLinkersLinkerKeyValuesDelete_0(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesDelete_0(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for addonLinkersLinkerKeyValuesGet_0
        function addonLinkersLinkerKeyValuesGet_0(incomingOptions) {
            const Bitbucket = require('./dist');
let defaultClient = Bitbucket.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = incomingOptions.accessToken;

let apiInstance = new Bitbucket.AddonApi()
/*let linkerKey = "linkerKey_example";*/ // String | 
apiInstance.addonLinkersLinkerKeyValuesGet_0(incomingOptions.linkerKey, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for createPipelineForRepository
        function createPipelineForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let body = new Bitbucket.Pipeline();*/ // Pipeline | The pipeline to initiate.
apiInstance.createPipelineForRepository(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for createPipelineVariableForTeam
        function createPipelineVariableForTeam(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let opts = {
  'body': new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
};*/
apiInstance.createPipelineVariableForTeam(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for createPipelineVariableForUser
        function createPipelineVariableForUser(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let opts = {
  'body': new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
};*/
apiInstance.createPipelineVariableForUser(incomingOptions.username, incomingOptions.opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for createRepositoryPipelineKnownHost
        function createRepositoryPipelineKnownHost(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let body = new Bitbucket.PipelineKnownHost();*/ // PipelineKnownHost | The known host to create.
apiInstance.createRepositoryPipelineKnownHost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for createRepositoryPipelineVariable
        function createRepositoryPipelineVariable(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let body = new Bitbucket.PipelineVariable();*/ // PipelineVariable | The variable to create.
apiInstance.createRepositoryPipelineVariable(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for deletePipelineVariableForTeam
        function deletePipelineVariableForTeam(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to delete.
apiInstance.deletePipelineVariableForTeam(incomingOptions.username, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deletePipelineVariableForUser
        function deletePipelineVariableForUser(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to delete.
apiInstance.deletePipelineVariableForUser(incomingOptions.username, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteRepositoryPipelineKeyPair
        function deleteRepositoryPipelineKeyPair(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.deleteRepositoryPipelineKeyPair(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteRepositoryPipelineKnownHost
        function deleteRepositoryPipelineKnownHost(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let knownHostUuid = "knownHostUuid_example";*/ // String | The UUID of the known host to delete.
apiInstance.deleteRepositoryPipelineKnownHost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.knownHostUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for deleteRepositoryPipelineVariable
        function deleteRepositoryPipelineVariable(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to delete.
apiInstance.deleteRepositoryPipelineVariable(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getPipelineForRepository
        function getPipelineForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let pipelineUuid = "pipelineUuid_example";*/ // String | The pipeline UUID.
apiInstance.getPipelineForRepository(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pipelineUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineStepForRepository
        function getPipelineStepForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let pipelineUuid = "pipelineUuid_example";*/ // String | The UUID of the pipeline
/*let stepUuid = "stepUuid_example";*/ // String | The UUID of the step.
apiInstance.getPipelineStepForRepository(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pipelineUuid, incomingOptions.stepUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineStepLogForRepository
        function getPipelineStepLogForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let pipelineUuid = "pipelineUuid_example";*/ // String | The UUID of the pipeline
/*let stepUuid = "stepUuid_example";*/ // String | The UUID of the step.
apiInstance.getPipelineStepLogForRepository(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pipelineUuid, incomingOptions.stepUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for getPipelineStepsForRepository
        function getPipelineStepsForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let pipelineUuid = "pipelineUuid_example";*/ // String | The UUID of the pipeline.
apiInstance.getPipelineStepsForRepository(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pipelineUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineVariableForTeam
        function getPipelineVariableForTeam(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to retrieve.
apiInstance.getPipelineVariableForTeam(incomingOptions.username, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineVariableForUser
        function getPipelineVariableForUser(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to retrieve.
apiInstance.getPipelineVariableForUser(incomingOptions.username, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineVariablesForTeam
        function getPipelineVariablesForTeam(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account.
apiInstance.getPipelineVariablesForTeam(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelineVariablesForUser
        function getPipelineVariablesForUser(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account.
apiInstance.getPipelineVariablesForUser(incomingOptions.username, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getPipelinesForRepository
        function getPipelinesForRepository(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.getPipelinesForRepository(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineConfig
        function getRepositoryPipelineConfig(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.getRepositoryPipelineConfig(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineKnownHost
        function getRepositoryPipelineKnownHost(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let knownHostUuid = "knownHostUuid_example";*/ // String | The UUID of the known host to retrieve.
apiInstance.getRepositoryPipelineKnownHost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.knownHostUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineKnownHosts
        function getRepositoryPipelineKnownHosts(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.getRepositoryPipelineKnownHosts(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineSshKeyPair
        function getRepositoryPipelineSshKeyPair(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.getRepositoryPipelineSshKeyPair(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineVariable
        function getRepositoryPipelineVariable(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to retrieve.
apiInstance.getRepositoryPipelineVariable(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.variableUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for getRepositoryPipelineVariables
        function getRepositoryPipelineVariables(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository.
apiInstance.getRepositoryPipelineVariables(incomingOptions.username, incomingOptions.repoSlug, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for stopPipeline
        function stopPipeline(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let pipelineUuid = "pipelineUuid_example";*/ // String | The UUID of the pipeline.
apiInstance.stopPipeline(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.pipelineUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return;
  }
});
        }

        
        // This is a function for updatePipelineVariableForTeam
        function updatePipelineVariableForTeam(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable
/*let body = new Bitbucket.PipelineVariable();*/ // PipelineVariable | The updated variable.
apiInstance.updatePipelineVariableForTeam(incomingOptions.username, incomingOptions.variableUuid, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for updatePipelineVariableForUser
        function updatePipelineVariableForUser(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable
/*let body = new Bitbucket.PipelineVariable();*/ // PipelineVariable | The updated variable.
apiInstance.updatePipelineVariableForUser(incomingOptions.username, incomingOptions.variableUuid, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for updateRepositoryPipelineConfig
        function updateRepositoryPipelineConfig(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let body = new Bitbucket.PipelinesConfig();*/ // PipelinesConfig | The updated repository pipelines configuration.
apiInstance.updateRepositoryPipelineConfig(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for updateRepositoryPipelineKeyPair
        function updateRepositoryPipelineKeyPair(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let body = new Bitbucket.PipelineSshKeyPair();*/ // PipelineSshKeyPair | The created or updated SSH key pair.
apiInstance.updateRepositoryPipelineKeyPair(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for updateRepositoryPipelineKnownHost
        function updateRepositoryPipelineKnownHost(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let knownHostUuid = "knownHostUuid_example";*/ // String | The UUID of the known host to update
/*let body = new Bitbucket.PipelineKnownHost();*/ // PipelineKnownHost | The updated known host.
apiInstance.updateRepositoryPipelineKnownHost(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.knownHostUuid, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        
        // This is a function for updateRepositoryPipelineVariable
        function updateRepositoryPipelineVariable(incomingOptions) {
            const Bitbucket = require('./dist');

let apiInstance = new Bitbucket.PipelinesApi()
/*let username = "username_example";*/ // String | The account
/*let repoSlug = "repoSlug_example";*/ // String | The repository
/*let variableUuid = "variableUuid_example";*/ // String | The UUID of the variable to update
/*let body = new Bitbucket.PipelineVariable();*/ // PipelineVariable | The updated variable
apiInstance.updateRepositoryPipelineVariable(incomingOptions.username, incomingOptions.repoSlug, incomingOptions.variableUuid, incomingOptions.body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    return data;
  }
});
        }

        