const Axios = require("axios");
const qs = require("querystring");
const nconf = require("nconf");
const ErrorHelper = require("../../helpers/ErrorHelper");

/*
    - https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
  */
const SCOPES = [
  "notifications",
  "repo",
  "read:user",
  "user:email",
  "write:org"
];

class GithubService {
  get name() {
    return "GITHUB";
  }

  get description() {
    return "GitHub is the best place to share code with friends, co-workers, classmates, and complete strangers. Over three million people use GitHub to build amazing things together.";
  }

  get icon() {
    return "github.svg";
  }

  get category() {
    return;
  }

  get apiEndpoint() {
    return "https://api.github.com";
  }

  get authMethod() {
    return "OAUTH2";
  }

  get authEndpoint() {
    return (
      `https://github.com/login/oauth/authorize?` +
      `client_id=${nconf.get("GITHUB_CLIENT_ID")}&` +
      `scope=${qs.escape(this.scopes.join(" "))}`
    );
  }

  get apiTokenURL() {
    return;
  }

  get requiredAuthParams() {
    return ["code"];
  }

  get scopes() {
    return [...SCOPES];
  }

  get webhooks() {
    return [
      "pull_request",
      "pull_request_review",
      "pull_request_review_comment",
      "push",
      "commit_comment",
      "issues",
      "issue_comment",
      "ping"
    ];
  }

  get webhookToTasksMap() {
    return [
      {
        name: "task.thirdParty.UPDATE_GITHUB_PR",
        webhook: "pull_request"
      },
      {
        name: "task.thirdParty.UPDATE_GITHUB_PR",
        webhook: "pull_request_review"
      },
      {
        name: "task.thirdParty.UPDATE_GITHUB_PR",
        webhook: "pull_request_review_comment"
      },
      { name: "task.pepper.SYNC_GITHUB_COMMITS", webhook: "push" },
      {
        name: "task.pepper.SYNC_GITHUB_TEAM_MEMBERS",
        webhook: "push"
      },
      {
        name: "task.thirdParty.UPDATE_GITHUB_ISSUE",
        webhook: "commit_comment"
      },
      {
        name: "task.thirdParty.UPDATE_GITHUB_ISSUE",
        webhook: "issues"
      },
      {
        name: "task.thirdParty.UPDATE_GITHUB_ISSUE",
        webhook: "issue_comment"
      },
      {
        name: "task.system.UPDATE_WEBHOOK_STATUS",
        webhook: "ping"
      }
    ];
  }

  get primaryAction() {
    return {
      type: "HREF",
      url: this.authEndpoint,
      requiredAuthParams: this.requiredAuthParams
    };
  }

  get entities() {
    return [
      "PROJECTS",
      "REPOS",
      "MEMBERS",
      // Organisations - https://developer.github.com/v3/orgs/
      "ORGS",
      // PR - https://developer.github.com/v3/pulls/
      "PULL_REQUESTS",
      // PR comments - https://developer.github.com/v3/pulls/comments/, https://developer.github.com/v3/pulls/reviews/,
      "PULL_REQUEST_COMMENTS",
      "PULL_REQUEST_COMMITS",
      // Issues - https://developer.github.com/v3/issues/
      "ISSUES",
      // Issue Comments - https://developer.github.com/v3/issues/comments/
      "ISSUE_COMMENTS"
    ];
  }

  getNextPaginationURIFromResponse(response) {
    return ((response.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) ||
      [])[1];
  }

  async connect(authParams) {
    const res = await Axios.default.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: nconf.get("GITHUB_CLIENT_ID"),
        client_secret: nconf.get("GITHUB_CLIENT_SECRET"),
        code: authParams.code
      },
      {
        headers: {
          Accept: "application/json"
        }
      }
    );

    const user = await Axios.default.get(`${this.apiEndpoint}/user`, {
      headers: {
        Authorization: `token ${res.data.access_token}`
      }
    });

    let organisations = [],
      uri = `${this.apiEndpoint}/user/orgs`;

    while (uri) {
      let resOrgs = await Axios.default.get(uri, {
        headers: {
          Authorization: `token ${res.data.access_token}`
        }
      });
      organisations.push(...resOrgs.data.map(item => item.login));
      uri = this.getNextPaginationURIFromResponse(resOrgs);
    }

    const data = {
      accessToken: res.data.access_token,
      integrationSpecificParams: {
        username: user.data.login
      }
    };
    if (organisations.length > 0) data.team = { usernames: organisations };
    return data;
  }

  async syncIntegrationEntities(integrationData, thirdPartyProject) {
    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [
            "task.pepper.SYNC_GITHUB_TEAM_MEMBERS",
            "task.pepper.SYNC_GITHUB_PRS",
            "task.pepper.SYNC_GITHUB_COMMITS",
            "task.pepper.SYNC_GITHUB_ISSUES"
          ],
          project_id: integrationData.projectId,
          user_id: integrationData.userId,
          repo_endpoint: thirdPartyProject.projectId,
          github_username: integrationData.integrationSpecificParams.username
        },
        {
          headers: {
            Authorization: authToken
          }
        }
      );
      return "Ok";
    } catch (error) {
      console.error(error.response || error);
      return "ERROR";
    }
  }

  async get(entity, options) {
    switch (entity) {
      case "EMOJIS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.emojisGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "EVENTS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.eventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "FEEDS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.feedsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.gistsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API id,commentId,opts
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID_COMMENTS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID_STAR":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdStarGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_PUBLIC":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.gistsPublicGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_STARRED":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.gistsStarredGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GITIGNORE_TEMPLATES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.gitignoreTemplatesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GITIGNORE_TEMPLATES_LANGUAGE":
        // Function parameters for this API language,opts
        return new Promise((resolve, reject) => {
          this.gitignoreTemplatesLanguageGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ISSUES":
        // Function parameters for this API filter,state,labels,sort,direction,opts
        return new Promise((resolve, reject) => {
          this.issuesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "LEGACY_ISSUES_SEARCH_OWNER_REPOSITORY_STATE_KEYWORD":
        // Function parameters for this API keyword,state,owner,repository,opts
        return new Promise((resolve, reject) => {
          this.legacyIssuesSearchOwnerRepositoryStateKeywordGet(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "LEGACY_REPOS_SEARCH_KEYWORD":
        // Function parameters for this API keyword,opts
        return new Promise((resolve, reject) => {
          this.legacyReposSearchKeywordGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "LEGACY_USER_EMAIL_EMAIL":
        // Function parameters for this API email,opts
        return new Promise((resolve, reject) => {
          this.legacyUserEmailEmailGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "LEGACY_USER_SEARCH_KEYWORD":
        // Function parameters for this API keyword,opts
        return new Promise((resolve, reject) => {
          this.legacyUserSearchKeywordGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "META":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.metaGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NETWORKS_OWNER_REPO_EVENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.networksOwnerRepoEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.notificationsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS_THREADS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_EVENTS":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_ISSUES":
        // Function parameters for this API org,filter,state,labels,sort,direction,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgIssuesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_MEMBERS":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_MEMBERS_USERNAME":
        // Function parameters for this API org,username,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        // Function parameters for this API org,username,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_REPOS":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgReposGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_TEAMS":
        // Function parameters for this API org,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgTeamsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "RATE_LIMIT":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.rateLimitGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ARCHIVE_FORMAT_PATH":
        // Function parameters for this API owner,repo,archiveFormat,path,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoArchiveFormatPathGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ASSIGNEES_ASSIGNEE":
        // Function parameters for this API owner,repo,assignee,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoAssigneesAssigneeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ASSIGNEES":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoAssigneesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_BRANCHES_BRANCH":
        // Function parameters for this API owner,repo,branch,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoBranchesBranchGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_BRANCHES":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoBranchesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COLLABORATORS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        // Function parameters for this API owner,repo,user,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMITS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_REF_STATUS":
        // Function parameters for this API owner,repo,ref,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsRefStatusGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE_COMMENTS":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMPARE_BASE_ID_HEAD_ID":
        // Function parameters for this API owner,repo,baseId,headId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCompareBaseIdHeadIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        // Function parameters for this API owner,repo,path,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_CONTRIBUTORS":
        // Function parameters for this API owner,repo,anon,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContributorsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS_ID_STATUSES":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsIdStatusesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DOWNLOADS_DOWNLOAD_ID":
        // Function parameters for this API owner,repo,downloadId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsDownloadIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DOWNLOADS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_EVENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_FORKS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoForksGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_BLOBS_SHA_CODE":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitBlobsShaCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_COMMITS_SHA_CODE":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitCommitsShaCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        // Function parameters for this API owner,repo,ref,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_TAGS_SHA_CODE":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTagsShaCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_TREES_SHA_CODE":
        // Function parameters for this API owner,repo,shaCode,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTreesShaCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        // Function parameters for this API owner,repo,hookId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdGet(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_EVENTS_EVENT_ID":
        // Function parameters for this API owner,repo,eventId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesEventsEventIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_EVENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES":
        // Function parameters for this API owner,repo,filter,state,labels,sort,direction,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_COMMENTS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_EVENTS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_KEYS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_KEYS_KEY_ID":
        // Function parameters for this API owner,repo,keyId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysKeyIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LABELS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        // Function parameters for this API owner,repo,name,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LANGUAGES":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLanguagesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER_LABELS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberLabelsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_NOTIFICATIONS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoNotificationsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMENTS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommentsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMITS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommitsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_FILES":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberFilesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_MERGE":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberMergeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_README":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReadmeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ID_ASSETS":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdAssetsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STARGAZERS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStargazersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATS_CODE_FREQUENCY":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsCodeFrequencyGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATS_COMMIT_ACTIVITY":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsCommitActivityGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATS_CONTRIBUTORS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsContributorsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATS_PARTICIPATION":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsParticipationGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATS_PUNCH_CARD":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsPunchCardGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATUSES_REF":
        // Function parameters for this API owner,repo,ref,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatusesRefGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIBERS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscribersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_TAGS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoTagsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_TEAMS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoTeamsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_WATCHERS":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoWatchersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOSITORIES":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.repositoriesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "SEARCH_CODE":
        // Function parameters for this API q,opts
        return new Promise((resolve, reject) => {
          this.searchCodeGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "SEARCH_ISSUES":
        // Function parameters for this API q,opts
        return new Promise((resolve, reject) => {
          this.searchIssuesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "SEARCH_REPOSITORIES":
        // Function parameters for this API q,opts
        return new Promise((resolve, reject) => {
          this.searchRepositoriesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "SEARCH_USERS":
        // Function parameters for this API q,opts
        return new Promise((resolve, reject) => {
          this.searchUsersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID":
        // Function parameters for this API teamId,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS":
        // Function parameters for this API teamId,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_REPOS":
        // Function parameters for this API teamId,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        // Function parameters for this API teamId,owner,repo,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_EMAILS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userEmailsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_FOLLOWERS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userFollowersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_FOLLOWING":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userFollowingGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_FOLLOWING_USERNAME":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.userFollowingUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_ISSUES":
        // Function parameters for this API filter,state,labels,sort,direction,opts
        return new Promise((resolve, reject) => {
          this.userIssuesGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_KEYS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userKeysGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_KEYS_KEY_ID":
        // Function parameters for this API keyId,opts
        return new Promise((resolve, reject) => {
          this.userKeysKeyIdGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_ORGS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userOrgsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_REPOS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userReposGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_STARRED":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userStarredGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_STARRED_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_SUBSCRIPTIONS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userSubscriptionsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_TEAMS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.userTeamsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.usersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_EVENTS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_EVENTS_ORGS_ORG":
        // Function parameters for this API username,org,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameEventsOrgsOrgGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_FOLLOWERS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowersGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_FOLLOWING_TARGET_USER":
        // Function parameters for this API username,targetUser,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowingTargetUserGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_GISTS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameGistsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_KEYS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameKeysGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_ORGS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameOrgsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_RECEIVED_EVENTS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameReceivedEventsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_RECEIVED_EVENTS_PUBLIC":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameReceivedEventsPublicGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_REPOS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameReposGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_STARRED":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameStarredGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USERS_USERNAME_SUBSCRIPTIONS":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.usersUsernameSubscriptionsGet(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for emojisGet
  emojisGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.emojisGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for eventsGet
  eventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.eventsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for feedsGet
  feedsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.feedsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for gistsGet
  gistsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for gistsIdCommentsCommentIdGet
  gistsIdCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment
    /*let id = 56;*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdCommentsCommentIdGet(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsIdCommentsGet
  gistsIdCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdCommentsGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsIdGet
  gistsIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsIdStarGet
  gistsIdStarGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdStarGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for gistsPublicGet
  gistsPublicGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsPublicGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsStarredGet
  gistsStarredGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'since': "since_example", // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ. Only gists updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsStarredGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gitignoreTemplatesGet
  gitignoreTemplatesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gitignoreTemplatesGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gitignoreTemplatesLanguageGet
  gitignoreTemplatesLanguageGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String |
    /*let language = "language_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gitignoreTemplatesLanguageGet(
      incomingOptions.language,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for issuesGet
  issuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ /*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.issuesGet(
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for legacyIssuesSearchOwnerRepositoryStateKeywordGet
  legacyIssuesSearchOwnerRepositoryStateKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search term // String | Indicates the state of the issues to return. Can be either open or closed // String | // String |
    /*let keyword = "keyword_example";*/ /*let state = "state_example";*/ /*let owner = "owner_example";*/ /*let repository = "repository_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.legacyIssuesSearchOwnerRepositoryStateKeywordGet(
      incomingOptions.keyword,
      incomingOptions.state,
      incomingOptions.owner,
      incomingOptions.repository,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for legacyReposSearchKeywordGet
  legacyReposSearchKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search ter
    /*let keyword = "keyword_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'language': "language_example", // String | Filter results by language
  'startPage': "startPage_example", // String | The page number to fetch
  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.legacyReposSearchKeywordGet(
      incomingOptions.keyword,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for legacyUserEmailEmailGet
  legacyUserEmailEmailGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The email addres
    /*let email = "email_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.legacyUserEmailEmailGet(
      incomingOptions.email,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for legacyUserSearchKeywordGet
  legacyUserSearchKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search ter
    /*let keyword = "keyword_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'startPage': "startPage_example", // String | The page number to fetch
  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.legacyUserSearchKeywordGet(
      incomingOptions.keyword,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for metaGet
  metaGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.metaGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for networksOwnerRepoEventsGet
  networksOwnerRepoEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.networksOwnerRepoEventsGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for notificationsGet
  notificationsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'all': true, // Boolean | True to show notifications marked as read.
  'participating': true, // Boolean | True to show only notifications in which the user is directly participating or mentioned.
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdGet
  notificationsThreadsIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsThreadsIdGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionGet
  notificationsThreadsIdSubscriptionGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsThreadsIdSubscriptionGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgEventsGet
  orgsOrgEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgEventsGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgGet
  orgsOrgGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgIssuesGet
  orgsOrgIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let org = "org_example";*/ /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ /*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgIssuesGet(
      org,
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgMembersGet
  orgsOrgMembersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgMembersGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgMembersUsernameGet
  orgsOrgMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user
    /*let org = "org_example";*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgMembersUsernameGet(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersGet
  orgsOrgPublicMembersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgPublicMembersGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernameGet
  orgsOrgPublicMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user
    /*let org = "org_example";*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgPublicMembersUsernameGet(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgReposGet
  orgsOrgReposGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'type': "'all'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgReposGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgTeamsGet
  orgsOrgTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation
    /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgTeamsGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for rateLimitGet
  rateLimitGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.rateLimitGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for reposOwnerRepoArchiveFormatPathGet
  reposOwnerRepoArchiveFormatPathGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // String | Valid Git reference, defaults to 'master'
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let archiveFormat = "archiveFormat_example";*/ /*let path = "path_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoArchiveFormatPathGet(
      incomingOptions.owner,
      repo,
      incomingOptions.archiveFormat,
      incomingOptions.path,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoAssigneesAssigneeGet
  reposOwnerRepoAssigneesAssigneeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the assignee
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let assignee = "assignee_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoAssigneesAssigneeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.assignee,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoAssigneesGet
  reposOwnerRepoAssigneesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoAssigneesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoBranchesBranchGet
  reposOwnerRepoBranchesBranchGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the branch
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let branch = "branch_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoBranchesBranchGet(
      incomingOptions.owner,
      repo,
      incomingOptions.branch,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoBranchesGet
  reposOwnerRepoBranchesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoBranchesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsGet
  reposOwnerRepoCollaboratorsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserGet
  reposOwnerRepoCollaboratorsUserGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserGet(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdGet
  reposOwnerRepoCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsGet
  reposOwnerRepoCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsGet
  reposOwnerRepoCommitsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'sha': "sha_example", // String | Sha or branch to start listing commits from.
  'path': "path_example", // String | Only commits containing this file path will be returned.
  'author': "author_example", // String | GitHub login, name, or email by which to filter by commit author.
  'until': "until_example", // String | ISO 8601 Date - Only commits before this date will be returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommitsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsRefStatusGet
  reposOwnerRepoCommitsRefStatusGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommitsRefStatusGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeCommentsGet
  reposOwnerRepoCommitsShaCodeCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeGet
  reposOwnerRepoCommitsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCompareBaseIdHeadIdGet
  reposOwnerRepoCompareBaseIdHeadIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let baseId = "baseId_example";*/ /*let headId = "headId_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCompareBaseIdHeadIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.baseId,
      incomingOptions.headId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathGet
  reposOwnerRepoContentsPathGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ /*let opts = {
  'path2': "path_example", // String | The content path.
  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to 'master'.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoContentsPathGet(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContributorsGet
  reposOwnerRepoContributorsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Set to 1 or true to include anonymous contributors in results
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let anon = "anon_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoContributorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.anon,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsGet
  reposOwnerRepoDeploymentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDeploymentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsIdStatusesGet
  reposOwnerRepoDeploymentsIdStatusesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | The Deployment ID to list the statuses from
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsDownloadIdGet
  reposOwnerRepoDownloadsDownloadIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of download
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let downloadId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.downloadId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsGet
  reposOwnerRepoDownloadsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDownloadsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoEventsGet
  reposOwnerRepoEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoForksGet
  reposOwnerRepoForksGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'sort': "'newes'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoForksGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGet
  reposOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitBlobsShaCodeGet
  reposOwnerRepoGitBlobsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitBlobsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitCommitsShaCodeGet
  reposOwnerRepoGitCommitsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitCommitsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsGet
  reposOwnerRepoGitRefsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitRefsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefGet
  reposOwnerRepoGitRefsRefGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTagsShaCodeGet
  reposOwnerRepoGitTagsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitTagsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTreesShaCodeGet
  reposOwnerRepoGitTreesShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Tree SHA
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let opts = {
  'recursive': 56, // Number | Get a Tree Recursively. (0 or 1)
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitTreesShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksGet
  reposOwnerRepoHooksGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdGet
  reposOwnerRepoHooksHookIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdGet
  reposOwnerRepoIssuesCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsGet
  reposOwnerRepoIssuesCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "sort_example", // String |
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesEventsEventIdGet
  reposOwnerRepoIssuesEventsEventIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of the event
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let eventId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesEventsEventIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.eventId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesEventsGet
  reposOwnerRepoIssuesEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesGet
  reposOwnerRepoIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ /*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberCommentsGet
  reposOwnerRepoIssuesNumberCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberEventsGet
  reposOwnerRepoIssuesNumberEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberGet
  reposOwnerRepoIssuesNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsGet
  reposOwnerRepoIssuesNumberLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysGet
  reposOwnerRepoKeysGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoKeysGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysKeyIdGet
  reposOwnerRepoKeysKeyIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of key
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let keyId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsGet
  reposOwnerRepoLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNameGet
  reposOwnerRepoLabelsNameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLabelsNameGet(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLanguagesGet
  reposOwnerRepoLanguagesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLanguagesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesGet
  reposOwnerRepoMilestonesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'state': "'open'", // String | String to filter by state.
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "'due_date'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberGet
  reposOwnerRepoMilestonesNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberLabelsGet
  reposOwnerRepoMilestonesNumberLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoNotificationsGet
  reposOwnerRepoNotificationsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'all': true, // Boolean | True to show notifications marked as read.
  'participating': true, // Boolean | True to show only notifications in which the user is directly participating or mentioned.
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoNotificationsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdGet
  reposOwnerRepoPullsCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsGet
  reposOwnerRepoPullsCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "sort_example", // String |
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsGet
  reposOwnerRepoPullsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'state': "'open'", // String | String to filter by state.
  'head': "head_example", // String | Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format.
  'base': "base_example", // String | Filter pulls by base branch name. Example - gh-pages.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommentsGet
  reposOwnerRepoPullsNumberCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommitsGet
  reposOwnerRepoPullsNumberCommitsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommitsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberFilesGet
  reposOwnerRepoPullsNumberFilesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberFilesGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberGet
  reposOwnerRepoPullsNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberMergeGet
  reposOwnerRepoPullsNumberMergeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergeGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReadmeGet
  reposOwnerRepoReadmeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to master.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReadmeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdGet
  reposOwnerRepoReleasesAssetsIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesGet
  reposOwnerRepoReleasesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdAssetsGet
  reposOwnerRepoReleasesIdAssetsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesIdAssetsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdGet
  reposOwnerRepoReleasesIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStargazersGet
  reposOwnerRepoStargazersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStargazersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsCodeFrequencyGet
  reposOwnerRepoStatsCodeFrequencyGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatsCodeFrequencyGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsCommitActivityGet
  reposOwnerRepoStatsCommitActivityGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatsCommitActivityGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsContributorsGet
  reposOwnerRepoStatsContributorsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatsContributorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsParticipationGet
  reposOwnerRepoStatsParticipationGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatsParticipationGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsPunchCardGet
  reposOwnerRepoStatsPunchCardGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatsPunchCardGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatusesRefGet
  reposOwnerRepoStatusesRefGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatusesRefGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscribersGet
  reposOwnerRepoSubscribersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoSubscribersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionGet
  reposOwnerRepoSubscriptionGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoSubscriptionGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoTagsGet
  reposOwnerRepoTagsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoTagsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoTeamsGet
  reposOwnerRepoTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoTeamsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoWatchersGet
  reposOwnerRepoWatchersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoWatchersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for repositoriesGet
  repositoriesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.repositoriesGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for searchCodeGet
  searchCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository.
    /*let q = "q_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.searchCodeGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for searchIssuesGet
  searchIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The q search term can also contain any combination of the supported issue search qualifiers
    /*let q = "q_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.searchIssuesGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for searchRepositoriesGet
  searchRepositoriesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars.
    /*let q = "q_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | If not provided, results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.searchRepositoriesGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for searchUsersGet
  searchUsersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have.
    /*let q = "q_example";*/ /*let opts = {
  'order': "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
  'sort': "sort_example", // String | If not provided, results are sorted by best match.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.searchUsersGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdGet
  teamsTeamIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team
    /*let teamId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersGet
  teamsTeamIdMembersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team
    /*let teamId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembersGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernameGet
  teamsTeamIdMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembersUsernameGet(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernameGet
  teamsTeamIdMembershipsUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembershipsUsernameGet(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposGet
  teamsTeamIdReposGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team
    /*let teamId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdReposGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoGet
  teamsTeamIdReposOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a repository owner // String | Name of a repository
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdReposOwnerRepoGet(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userEmailsGet
  userEmailsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userEmailsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for userFollowersGet
  userFollowersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userFollowersGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userFollowingGet
  userFollowingGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userFollowingGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userFollowingUsernameGet
  userFollowingUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userFollowingUsernameGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userGet
  userGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = "YOUR API KEY";
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //api_key.apiKeyPrefix = 'Token';

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for userIssuesGet
  userIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ /*let opts = {
  'since': "since_example", // String | Optional string of a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Only issues updated at or after this time are returned.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userIssuesGet(
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userKeysGet
  userKeysGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userKeysGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for userKeysKeyIdGet
  userKeysKeyIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | ID of key
    /*let keyId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userKeysKeyIdGet(
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userOrgsGet
  userOrgsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userOrgsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for userReposGet
  userReposGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'type': "'all'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userReposGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for userStarredGet
  userStarredGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'direction': "direction_example", // String | Ignored without 'sort' parameter.
  'sort': "'created'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userStarredGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoGet
  userStarredOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userStarredOwnerRepoGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userSubscriptionsGet
  userSubscriptionsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userSubscriptionsGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoGet
  userSubscriptionsOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userSubscriptionsOwnerRepoGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userTeamsGet
  userTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userTeamsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for usersGet
  usersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'since': 56, // Number | The integer ID of the last user that you've seen.
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null);
      } else {
        cb(null, data);
      }
    });
  }

  // This is a function for usersUsernameEventsGet
  usersUsernameEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameEventsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameEventsOrgsOrgGet
  usersUsernameEventsOrgsOrgGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user // String |
    /*let username = "username_example";*/ /*let org = "org_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameEventsOrgsOrgGet(
      incomingOptions.username,
      incomingOptions.org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameFollowersGet
  usersUsernameFollowersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameFollowersGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameFollowingTargetUserGet
  usersUsernameFollowingTargetUserGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user // String | Name of user
    /*let username = "username_example";*/ /*let targetUser = "targetUser_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameFollowingTargetUserGet(
      incomingOptions.username,
      incomingOptions.targetUser,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameGet
  usersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameGistsGet
  usersUsernameGistsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameGistsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameKeysGet
  usersUsernameKeysGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameKeysGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameOrgsGet
  usersUsernameOrgsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameOrgsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameReceivedEventsGet
  usersUsernameReceivedEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameReceivedEventsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameReceivedEventsPublicGet
  usersUsernameReceivedEventsPublicGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameReceivedEventsPublicGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameReposGet
  usersUsernameReposGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'type': "'all'", // String |
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameReposGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for usersUsernameStarredGet
  usersUsernameStarredGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameStarredGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for usersUsernameSubscriptionsGet
  usersUsernameSubscriptionsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.usersUsernameSubscriptionsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  async post(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS":
        // Function parameters for this API id,body,opts
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID_FORKS":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdForksPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.gistsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "MARKDOWN":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.markdownPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "MARKDOWN_RAW":
        // Function parameters for this API opts
        return new Promise((resolve, reject) => {
          this.markdownRawPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_REPOS":
        // Function parameters for this API org,body,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgReposPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_TEAMS":
        // Function parameters for this API org,body,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgTeamsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE_COMMENTS":
        // Function parameters for this API owner,repo,shaCode,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeCommentsPost(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS_ID_STATUSES":
        // Function parameters for this API owner,repo,id,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsIdStatusesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_FORKS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoForksPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_BLOBS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitBlobsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_COMMITS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitCommitsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_TAGS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTagsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_TREES":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTreesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID_TESTS":
        // Function parameters for this API owner,repo,hookId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdTestsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_COMMENTS":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberCommentsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_KEYS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LABELS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MERGES":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMergesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMENTS":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommentsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_STATUSES_REF":
        // Function parameters for this API owner,repo,ref,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatusesRefPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_EMAILS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.userEmailsPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_KEYS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.userKeysPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_REPOS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.userReposPost(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsPost
  gistsIdCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // CommentBody |
    /*let id = 56;*/ /*let body = new Github.CommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdCommentsPost(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsIdForksPost
  gistsIdForksPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdForksPost(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for gistsPost
  gistsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // PostGist |
    /*let body = new Github.PostGist();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for markdownPost
  markdownPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Markdown |
    /*let body = new Github.Markdown();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.markdownPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for markdownRawPost
  markdownRawPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi();
    /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.markdownRawPost(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgReposPost
  orgsOrgReposPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // PostRepo |
    /*let org = "org_example";*/ /*let body = new Github.PostRepo();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgReposPost(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgTeamsPost
  orgsOrgTeamsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // OrgTeamsPost |
    /*let org = "org_example";*/ /*let body = new Github.OrgTeamsPost();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgTeamsPost(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeCommentsPost
  reposOwnerRepoCommitsShaCodeCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit // CommitCommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let body = new Github.CommitCommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsIdStatusesPost
  reposOwnerRepoDeploymentsIdStatusesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | The Deployment ID to list the statuses from // DeploymentStatusesCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = 56;*/ /*let body = new Github.DeploymentStatusesCreate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsPost
  reposOwnerRepoDeploymentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Deployment |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Deployment();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDeploymentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoForksPost
  reposOwnerRepoForksPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // ForkBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.ForkBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoForksPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitBlobsPost
  reposOwnerRepoGitBlobsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Blob |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = null;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitBlobsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitCommitsPost
  reposOwnerRepoGitCommitsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RepoCommitBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RepoCommitBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitCommitsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsPost
  reposOwnerRepoGitRefsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RefsBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RefsBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitRefsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTagsPost
  reposOwnerRepoGitTagsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // TagBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.TagBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitTagsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTreesPost
  reposOwnerRepoGitTreesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Tree |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Tree();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitTreesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdTestsPost
  reposOwnerRepoHooksHookIdTestsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdTestsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksPost
  reposOwnerRepoHooksPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // HookBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.HookBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberCommentsPost
  reposOwnerRepoIssuesNumberCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.CommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsPost
  reposOwnerRepoIssuesNumberLabelsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesPost
  reposOwnerRepoIssuesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Issue |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Issue();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysPost
  reposOwnerRepoKeysPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // UserKeysPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.UserKeysPost();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoKeysPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsPost
  reposOwnerRepoLabelsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLabelsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMergesPost
  reposOwnerRepoMergesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // MergesBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.MergesBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMergesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesPost
  reposOwnerRepoMilestonesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // MilestoneUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.MilestoneUpdate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommentsPost
  reposOwnerRepoPullsNumberCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // PullsCommentPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.PullsCommentPost();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsPost
  reposOwnerRepoPullsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // PullsPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.PullsPost();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesPost
  reposOwnerRepoReleasesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // ReleaseCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.ReleaseCreate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatusesRefPost
  reposOwnerRepoStatusesRefPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. // HeadBranch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let body = new Github.HeadBranch();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoStatusesRefPost(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userEmailsPost
  userEmailsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // [String] |
    /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userEmailsPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userKeysPost
  userKeysPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // UserKeysPost |
    /*let body = new Github.UserKeysPost();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userKeysPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userReposPost
  userReposPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // PostRepo |
    /*let body = new Github.PostRepo();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userReposPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  async put(entity, options) {
    switch (entity) {
      case "GISTS_ID_STAR":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdStarPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.notificationsPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        // Function parameters for this API id,body,opts
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        // Function parameters for this API org,username,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernamePut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        // Function parameters for this API owner,repo,user,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        // Function parameters for this API owner,repo,path,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_NOTIFICATIONS":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoNotificationsPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_MERGE":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberMergePut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernamePut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernamePut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        // Function parameters for this API teamId,owner,repo,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_FOLLOWING_USERNAME":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.userFollowingUsernamePut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_STARRED_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoPut(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdStarPut
  gistsIdStarPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdStarPut(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for notificationsPut
  notificationsPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // NotificationMarkRead |
    /*let body = new Github.NotificationMarkRead();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsPut(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionPut
  notificationsThreadsIdSubscriptionPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread // PutSubscription |
    /*let id = 56;*/ /*let body = new Github.PutSubscription();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsThreadsIdSubscriptionPut(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernamePut
  orgsOrgPublicMembersUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user
    /*let org = "org_example";*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgPublicMembersUsernamePut(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserPut
  reposOwnerRepoCollaboratorsUserPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserPut(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathPut
  reposOwnerRepoContentsPathPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // CreateFileBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ /*let body = new Github.CreateFileBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoContentsPathPut(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsPut
  reposOwnerRepoIssuesNumberLabelsPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPut(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoNotificationsPut
  reposOwnerRepoNotificationsPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // NotificationMarkRead |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.NotificationMarkRead();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoNotificationsPut(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberMergePut
  reposOwnerRepoPullsNumberMergePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // MergePullBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.MergePullBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergePut(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionPut
  reposOwnerRepoSubscriptionPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // SubscriptionBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.SubscriptionBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoSubscriptionPut(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernamePut
  teamsTeamIdMembersUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembersUsernamePut(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernamePut
  teamsTeamIdMembershipsUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembershipsUsernamePut(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoPut
  teamsTeamIdReposOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a organization // String | Name of a repository
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdReposOwnerRepoPut(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userFollowingUsernamePut
  userFollowingUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userFollowingUsernamePut(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoPut
  userStarredOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userStarredOwnerRepoPut(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoPut
  userSubscriptionsOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userSubscriptionsOwnerRepoPut(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  async delete(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API id,commentId,opts
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID_STAR":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.gistsIdStarDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionDelete(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "ORGS_ORG_MEMBERS_USERNAME":
        // Function parameters for this API org,username,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersUsernameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        // Function parameters for this API org,username,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        // Function parameters for this API owner,repo,user,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        // Function parameters for this API owner,repo,path,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_DOWNLOADS_DOWNLOAD_ID":
        // Function parameters for this API owner,repo,downloadId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsDownloadIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        // Function parameters for this API owner,repo,ref,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        // Function parameters for this API owner,repo,hookId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdDelete(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS_NAME":
        // Function parameters for this API owner,repo,_number,name,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsNameDelete(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_KEYS_KEY_ID":
        // Function parameters for this API owner,repo,keyId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysKeyIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        // Function parameters for this API owner,repo,name,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        // Function parameters for this API owner,repo,_number,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdDelete(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        // Function parameters for this API owner,repo,id,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID":
        // Function parameters for this API teamId,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        // Function parameters for this API teamId,username,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        // Function parameters for this API teamId,owner,repo,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_EMAILS":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.userEmailsDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_FOLLOWING_USERNAME":
        // Function parameters for this API username,opts
        return new Promise((resolve, reject) => {
          this.userFollowingUsernameDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_KEYS_KEY_ID":
        // Function parameters for this API keyId,opts
        return new Promise((resolve, reject) => {
          this.userKeysKeyIdDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_STARRED_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        // Function parameters for this API owner,repo,opts
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoDelete(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsCommentIdDelete
  gistsIdCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment
    /*let id = 56;*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdCommentsCommentIdDelete(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for gistsIdDelete
  gistsIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for gistsIdStarDelete
  gistsIdStarDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdStarDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionDelete
  notificationsThreadsIdSubscriptionDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsThreadsIdSubscriptionDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgMembersUsernameDelete
  orgsOrgMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user
    /*let org = "org_example";*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgMembersUsernameDelete(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernameDelete
  orgsOrgPublicMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user
    /*let org = "org_example";*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgPublicMembersUsernameDelete(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserDelete
  reposOwnerRepoCollaboratorsUserDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdDelete
  reposOwnerRepoCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathDelete
  reposOwnerRepoContentsPathDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // DeleteFileBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ /*let body = new Github.DeleteFileBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoContentsPathDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDelete
  reposOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsDownloadIdDelete
  reposOwnerRepoDownloadsDownloadIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of download
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let downloadId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.downloadId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefDelete
  reposOwnerRepoGitRefsRefDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdDelete
  reposOwnerRepoHooksHookIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdDelete
  reposOwnerRepoIssuesCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsDelete
  reposOwnerRepoIssuesNumberLabelsDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsNameDelete
  reposOwnerRepoIssuesNumberLabelsNameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // String | Name of the label
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let name = "name_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsNameDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysKeyIdDelete
  reposOwnerRepoKeysKeyIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of key
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let keyId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNameDelete
  reposOwnerRepoLabelsNameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLabelsNameDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberDelete
  reposOwnerRepoMilestonesNumberDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdDelete
  reposOwnerRepoPullsCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdDelete
  reposOwnerRepoReleasesAssetsIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdDelete
  reposOwnerRepoReleasesIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionDelete
  reposOwnerRepoSubscriptionDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoSubscriptionDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdDelete
  teamsTeamIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team
    /*let teamId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdDelete(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernameDelete
  teamsTeamIdMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembersUsernameDelete(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernameDelete
  teamsTeamIdMembershipsUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member
    /*let teamId = 56;*/ /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdMembershipsUsernameDelete(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoDelete
  teamsTeamIdReposOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a repository owner // String | Name of a repository
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdReposOwnerRepoDelete(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userEmailsDelete
  userEmailsDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // [String] |
    /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userEmailsDelete(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userFollowingUsernameDelete
  userFollowingUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user
    /*let username = "username_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userFollowingUsernameDelete(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userKeysKeyIdDelete
  userKeysKeyIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | ID of key
    /*let keyId = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userKeysKeyIdDelete(
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoDelete
  userStarredOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userStarredOwnerRepoDelete(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoDelete
  userSubscriptionsOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userSubscriptionsOwnerRepoDelete(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  async patch(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS_COMMENT_ID":
        // Function parameters for this API id,commentId,body,opts
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "GISTS_ID":
        // Function parameters for this API id,body,opts
        return new Promise((resolve, reject) => {
          this.gistsIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "NOTIFICATIONS_THREADS_ID":
        // Function parameters for this API id,opts
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "ORGS_ORG":
        // Function parameters for this API org,body,opts
        return new Promise((resolve, reject) => {
          this.orgsOrgPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        // Function parameters for this API owner,repo,ref,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        // Function parameters for this API owner,repo,hookId,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdPatch(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        // Function parameters for this API owner,repo,name,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNamePatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO":
        // Function parameters for this API owner,repo,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        // Function parameters for this API owner,repo,commentId,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdPatch(
            options,
            (err, data) => {
              if (err) {
                reject(err);
              }
              resolve(data);
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER":
        // Function parameters for this API owner,repo,_number,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        // Function parameters for this API owner,repo,id,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        // Function parameters for this API owner,repo,id,body,opts
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "TEAMS_TEAM_ID":
        // Function parameters for this API teamId,body,opts
        return new Promise((resolve, reject) => {
          this.teamsTeamIdPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      case "USER":
        // Function parameters for this API body,opts
        return new Promise((resolve, reject) => {
          this.userPatch(options, (err, data) => {
            if (err) {
              reject(err);
            }
            resolve(data);
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsCommentIdPatch
  gistsIdCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment // Comment |
    /*let id = 56;*/ /*let commentId = 56;*/ /*let body = new Github.Comment();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdCommentsCommentIdPatch(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for gistsIdPatch
  gistsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // PatchGist |
    /*let id = 56;*/ /*let body = new Github.PatchGist();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.gistsIdPatch(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdPatch
  notificationsThreadsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread
    /*let id = 56;*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.notificationsThreadsIdPatch(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, "");
        }
      }
    );
  }

  // This is a function for orgsOrgPatch
  orgsOrgPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // PatchOrg |
    /*let org = "org_example";*/ /*let body = new Github.PatchOrg();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.orgsOrgPatch(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdPatch
  reposOwnerRepoCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefPatch
  reposOwnerRepoGitRefsRefPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // GitRefPatch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let body = new Github.GitRefPatch();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdPatch
  reposOwnerRepoHooksHookIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook // HookBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ /*let body = new Github.HookBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdPatch
  reposOwnerRepoIssuesCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberPatch
  reposOwnerRepoIssuesNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // Issue |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.Issue();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNamePatch
  reposOwnerRepoLabelsNamePatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ /*let body = ["null"];*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoLabelsNamePatch(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberPatch
  reposOwnerRepoMilestonesNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone // MilestoneUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.MilestoneUpdate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPatch
  reposOwnerRepoPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RepoEdit |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RepoEdit();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdPatch
  reposOwnerRepoPullsCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberPatch
  reposOwnerRepoPullsNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // PullUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.PullUpdate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoPullsNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdPatch
  reposOwnerRepoReleasesAssetsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // AssetPatch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let body = new Github.AssetPatch();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdPatch
  reposOwnerRepoReleasesIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // ReleaseCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let body = new Github.ReleaseCreate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.incomingOptions.reposOwnerRepoReleasesIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for teamsTeamIdPatch
  teamsTeamIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // EditTeam |
    /*let teamId = 56;*/ /*let body = new Github.EditTeam();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.teamsTeamIdPatch(
      incomingOptions.teamId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }

  // This is a function for userPatch
  userPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // UserUpdate |
    /*let body = new Github.UserUpdate();*/ /*let opts = {
  'accept': "accept_example" // String | Is used to set specified media type.
};*/
    apiInstance.userPatch(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null);
        } else {
          cb(null, data);
        }
      }
    );
  }
}
module.exports = new GithubService();
