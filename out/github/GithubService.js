const axios = require("axios");
const ErrorHelper = require("../../../helpers/ErrorHelper");
const nconf = require("nconf");
const qs = require("querystring");

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
    return;
  }

  getNextPaginationURIFromResponse(response) {
    const parse = require("parse-link-header");
    const links = parse(response.headers.link);
    if (links && links.next)
      return { page: links.next.page, per_page: links.next.per_page };
    return;
  }

  async connect(authParams) {
    const res = await axios.default.post(
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

    const user = await this.get("USER", {
      apiKey: res.data.access_token,
      apiKeyPrefix: "token"
    });

    let orgs,
      incomingOptions = { opts: {} };
    while (true) {
      orgs = await this.get("USER_ORGS", {
        apiKey: res.data.access_token,
        opts: {
          per_page: incomingOptions.opts.per_page,
          page: incomingOptions.opts.page
        }
      });
      incomingOptions.opts = this.getNextPaginationURIFromResponse(
        orgs.response
      );
      orgs = orgs.data.map(item => item.login);
      if (!incomingOptions.opts || !incomingOptions.opts.page) break;
    }
    const data = {
      accessToken: res.data.access_token,
      integrationSpecificParams: {
        username: user.data.login
      }
    };
    if (orgs.length > 0) data.team = { usernames: orgs };
    return data;
  }

  async syncIntegrationEntities(integrationData, thirdPartyProject) {
    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      const res = await axios.default.post(
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

  async getThirdPartyProjects(incomingOptions) {
    let repos;
    while (true) {
      repos = await this.get("USER_REPOS", incomingOptions);
      incomingOptions.opts = this.getNextPaginationURIFromResponse(
        repos.response
      );
      repos.data = repos.data.concat(repos.data);
      if (!incomingOptions.opts || !incomingOptions.opts.page) {
        break;
      }
    }
    return repos;
  }

  async registerWebhooks(incomingOptions) {
    const webhookURL = incomingOptions.webhookURL;

    const data = (await this.get("REPOS_OWNER_REPO_HOOKS", options)).data;
    const webhooks = data.filter(
      item =>
        item.config.url === webhookURL &&
        item.events.sort().toString() ===
          options.webhookEvents.sort().toString()
    );

    if (webhooks && webhooks.length > 0) return "Ok";

    const res = await this.post("REPOS_OWNER_REPO_HOOKS", options);
    console.log(res);
    // await Axios.default.post(
    //   `${this.apiEndpoint}/repos/${options.repoEndpoint}/hooks`,
    //   {
    //     active: true,
    //     events: options.webhookEvents,
    //     config: {
    //       url: webhookURL,
    //       content_type: "json",
    //       insecure_ssl: "0"
    //     }
    //   },
    //   {
    //     headers: {
    //       Authorization: `token ${options.integrationData.authAccessToken}`
    //     }
    //   }
    // );
    if (res.status == 201) return "Ok";
    return "ERROR";
  }

  async get(entity, options) {
    options = {
      apiKey: options.integrationData.authAccessToken,
      apiKeyPrefix: `token`,
      opts: {
        per_page: options.per_page,
        page: options.page
      },
      ...options
    };
    switch (entity) {
      case "EMOJIS":
        /*
      Lists all the emojis available to use on GitHub.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.emojisGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "EVENTS":
        /*
      List public events.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.eventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "FEEDS":
        /*
      List Feeds. GitHub provides several timeline resources in Atom format. The Feeds API  lists all the feeds available to the authenticating user.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.feedsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS":
        /*
      List the authenticated user&#39;s gists or if called anonymously, this will return all public gists.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.gistsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID_COMMENTS_COMMENT_ID":
        /*
      Get a single comment.
      Function parameters for this API id,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID_COMMENTS":
        /*
      List comments on a gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID":
        /*
      Get a single gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID_STAR":
        /*
      Check if a gist is starred.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdStarGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_PUBLIC":
        /*
      List all public gists.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.gistsPublicGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_STARRED":
        /*
      List the authenticated user&#39;s starred gists.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.gistsStarredGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GITIGNORE_TEMPLATES":
        /*
      Listing available templates. List all templates available to pass as an option when creating a repository.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.gitignoreTemplatesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GITIGNORE_TEMPLATES_LANGUAGE":
        /*
      Get a single template.
      Function parameters for this API language,opts
        */
        return new Promise((resolve, reject) => {
          this.gitignoreTemplatesLanguageGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ISSUES":
        /*
      List issues. List all issues across all the authenticated user&#39;s visible repositories.
      Function parameters for this API filter,state,labels,sort,direction,opts
        */
        return new Promise((resolve, reject) => {
          this.issuesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "LEGACY_ISSUES_SEARCH_OWNER_REPOSITORY_STATE_KEYWORD":
        /*
      Find issues by state and keyword.
      Function parameters for this API keyword,state,owner,repository,opts
        */
        return new Promise((resolve, reject) => {
          this.legacyIssuesSearchOwnerRepositoryStateKeywordGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "LEGACY_REPOS_SEARCH_KEYWORD":
        /*
      Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter.
      Function parameters for this API keyword,opts
        */
        return new Promise((resolve, reject) => {
          this.legacyReposSearchKeywordGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "LEGACY_USER_EMAIL_EMAIL":
        /*
      This API call is added for compatibility reasons only.
      Function parameters for this API email,opts
        */
        return new Promise((resolve, reject) => {
          this.legacyUserEmailEmailGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "LEGACY_USER_SEARCH_KEYWORD":
        /*
      Find users by keyword.
      Function parameters for this API keyword,opts
        */
        return new Promise((resolve, reject) => {
          this.legacyUserSearchKeywordGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "META":
        /*
      This gives some information about GitHub.com, the service.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.metaGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NETWORKS_OWNER_REPO_EVENTS":
        /*
      List public events for a network of repositories.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.networksOwnerRepoEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS":
        /*
      List your notifications. List all notifications for the current user, grouped by repository.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS_THREADS_ID":
        /*
      View a single thread.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        /*
      Get a Thread Subscription.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ORGS_ORG_EVENTS":
        /*
      List public events for an organization.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG":
        /*
      Get an Organization.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_ISSUES":
        /*
      List issues. List all issues for a given organization for the authenticated user.
      Function parameters for this API org,filter,state,labels,sort,direction,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgIssuesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_MEMBERS":
        /*
      Members list. List all users who are members of an organization. A member is a user tha belongs to at least 1 team in the organization. If the authenticated user is also an owner of this organization then both concealed and public members will be returned. If the requester is not an owner of the organization the query will be redirected to the public members list.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_MEMBERS_USERNAME":
        /*
      Check if a user is, publicly or privately, a member of the organization.
      Function parameters for this API org,username,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS":
        /*
      Public members list. Members of an organization can choose to have their membership publicized or not.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        /*
      Check public membership.
      Function parameters for this API org,username,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ORGS_ORG_REPOS":
        /*
      List repositories for the specified org.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgReposGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_TEAMS":
        /*
      List teams.
      Function parameters for this API org,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgTeamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "RATE_LIMIT":
        /*
      Get your current rate limit status Note: Accessing this endpoint does not count against your rate limit.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.rateLimitGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ARCHIVE_FORMAT_PATH":
        /*
      Get archive link. This method will return a 302 to a URL to download a tarball or zipball archive for a repository. Please make sure your HTTP framework is configured to follow redirects or you will need to use the Location header to make a second GET request. Note: For private repositories, these links are temporary and expire quickly.
      Function parameters for this API owner,repo,archiveFormat,path,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoArchiveFormatPathGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ASSIGNEES_ASSIGNEE":
        /*
      Check assignee. You may also check to see if a particular user is an assignee for a repository.
      Function parameters for this API owner,repo,assignee,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoAssigneesAssigneeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ASSIGNEES":
        /*
      List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoAssigneesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_BRANCHES_BRANCH":
        /*
      Get Branch
      Function parameters for this API owner,repo,branch,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoBranchesBranchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_BRANCHES":
        /*
      Get list of branches
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoBranchesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_COLLABORATORS":
        /*
      List. When authenticating as an organization owner of an organization-owned repository, all organization owners are included in the list of collaborators. Otherwise, only users with access to the repository are returned in the collaborators list.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        /*
      Check if user is a collaborator
      Function parameters for this API owner,repo,user,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        /*
      Get a single commit comment.
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMMENTS":
        /*
      List commit comments for a repository. Comments are ordered by ascending ID.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_COMMITS":
        /*
      List commits on a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_REF_STATUS":
        /*
      Get the combined Status for a specific Ref The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details. To access this endpoint during the preview period, you must provide a custom media type in the Accept header: application/vnd.github.she-hulk-preview+json
      Function parameters for this API owner,repo,ref,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsRefStatusGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE_COMMENTS":
        /*
      List comments for a single commitList comments for a single commit.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE":
        /*
      Get a single commit.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMPARE_BASE_ID_HEAD_ID":
        /*
      Compare two commits
      Function parameters for this API owner,repo,baseId,headId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCompareBaseIdHeadIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        /*
      Get contents. This method returns the contents of a file or directory in a repository. Files and symlinks support a custom media type for getting the raw content. Directories and submodules do not support custom media types. Note: This API supports files up to 1 megabyte in size. Here can be many outcomes. For details see \&quot;http://developer.github.com/v3/repos/contents/\&quot;
      Function parameters for this API owner,repo,path,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_CONTRIBUTORS":
        /*
      Get list of contributors.
      Function parameters for this API owner,repo,anon,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContributorsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS":
        /*
      Users with pull access can view deployments for a repository
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS_ID_STATUSES":
        /*
      Users with pull access can view deployment statuses for a deployment
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsIdStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_DOWNLOADS_DOWNLOAD_ID":
        /*
      Deprecated. Get a single download.
      Function parameters for this API owner,repo,downloadId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsDownloadIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_DOWNLOADS":
        /*
      Deprecated. List downloads for a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_EVENTS":
        /*
      Get list of repository events.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_FORKS":
        /*
      List forks.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoForksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO":
        /*
      Get repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_BLOBS_SHA_CODE":
        /*
      Get a Blob. Since blobs can be any arbitrary binary data, the input and responses for the blob API takes an encoding parameter that can be either utf-8 or base64. If your data cannot be losslessly sent as a UTF-8 string, you can base64 encode it.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitBlobsShaCodeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_GIT_COMMITS_SHA_CODE":
        /*
      Get a Commit.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitCommitsShaCodeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_GIT_REFS":
        /*
      Get all References
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        /*
      Get a Reference
      Function parameters for this API owner,repo,ref,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_TAGS_SHA_CODE":
        /*
      Get a Tag.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTagsShaCodeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_GIT_TREES_SHA_CODE":
        /*
      Get a Tree.
      Function parameters for this API owner,repo,shaCode,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTreesShaCodeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_HOOKS":
        /*
      Get list of hooks.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        /*
      Get single hook.
      Function parameters for this API owner,repo,hookId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        /*
      Get a single comment.
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS":
        /*
      List comments in a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_EVENTS_EVENT_ID":
        /*
      Get a single event.
      Function parameters for this API owner,repo,eventId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesEventsEventIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_EVENTS":
        /*
      List issue events for a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES":
        /*
      List issues for a repository.
      Function parameters for this API owner,repo,filter,state,labels,sort,direction,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_COMMENTS":
        /*
      List comments on an issue.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_EVENTS":
        /*
      List events for an issue.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberEventsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER":
        /*
      Get a single issue
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        /*
      List labels on an issue.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_KEYS":
        /*
      Get list of keys.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_KEYS_KEY_ID":
        /*
      Get a key
      Function parameters for this API owner,repo,keyId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysKeyIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_LABELS":
        /*
      List all labels for this repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        /*
      Get a single label.
      Function parameters for this API owner,repo,name,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_LANGUAGES":
        /*
      List languages. List languages for the specified repository. The value on the right of a language is the number of bytes of code written in that language.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLanguagesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES":
        /*
      List milestones for a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        /*
      Get a single milestone.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER_LABELS":
        /*
      Get labels for every issue in a milestone.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberLabelsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_NOTIFICATIONS":
        /*
      List your notifications in a repository List all notifications for the current user.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoNotificationsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        /*
      Get a single comment.
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS":
        /*
      List comments in a repository. By default, Review Comments are ordered by ascending ID.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS":
        /*
      List pull requests.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMENTS":
        /*
      List comments on a pull request.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMITS":
        /*
      List commits on a pull request.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommitsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_FILES":
        /*
      List pull requests files.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberFilesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER":
        /*
      Get a single pull request.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_MERGE":
        /*
      Get if a pull request has been merged.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberMergeGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_README":
        /*
      Get the README. This method returns the preferred README for a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReadmeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        /*
      Get a single release asset
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES":
        /*
      Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_RELEASES_ID_ASSETS":
        /*
      List assets for a release
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdAssetsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        /*
      Get a single release
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_STARGAZERS":
        /*
      List Stargazers.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStargazersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_STATS_CODE_FREQUENCY":
        /*
      Get the number of additions and deletions per week. Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsCodeFrequencyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_STATS_COMMIT_ACTIVITY":
        /*
      Get the last year of commit activity data. Returns the last year of commit activity grouped by week. The days array is a group of commits per day, starting on Sunday.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsCommitActivityGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_STATS_CONTRIBUTORS":
        /*
      Get contributors list with additions, deletions, and commit counts.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsContributorsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_STATS_PARTICIPATION":
        /*
      Get the weekly commit count for the repo owner and everyone else.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsParticipationGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_STATS_PUNCH_CARD":
        /*
      Get the number of commits per hour in each day. Each array contains the day number, hour number, and number of commits 0-6 Sunday - Saturday 0-23 Hour of day Number of commits  For example, [2, 14, 25] indicates that there were 25 total commits, during the 2.00pm hour on Tuesdays. All times are based on the time zone of individual commits.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatsPunchCardGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_STATUSES_REF":
        /*
      List Statuses for a specific Ref.
      Function parameters for this API owner,repo,ref,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatusesRefGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIBERS":
        /*
      List watchers.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscribersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        /*
      Get a Repository Subscription.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_TAGS":
        /*
      Get list of tags.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoTagsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_TEAMS":
        /*
      Get list of teams
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoTeamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_WATCHERS":
        /*
      List Stargazers. New implementation.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoWatchersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES":
        /*
      List all public repositories. This provides a dump of every public repository, in the order that they were created. Note: Pagination is powered exclusively by the since parameter. is the Link header to get the URL for the next page of repositories.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SEARCH_CODE":
        /*
      Search code.
      Function parameters for this API q,opts
        */
        return new Promise((resolve, reject) => {
          this.searchCodeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SEARCH_ISSUES":
        /*
      Find issues by state and keyword. (This method returns up to 100 results per page.)
      Function parameters for this API q,opts
        */
        return new Promise((resolve, reject) => {
          this.searchIssuesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SEARCH_REPOSITORIES":
        /*
      Search repositories.
      Function parameters for this API q,opts
        */
        return new Promise((resolve, reject) => {
          this.searchRepositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SEARCH_USERS":
        /*
      Search users.
      Function parameters for this API q,opts
        */
        return new Promise((resolve, reject) => {
          this.searchUsersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID":
        /*
      Get team.
      Function parameters for this API teamId,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS":
        /*
      List team members. In order to list members in a team, the authenticated user must be a member of the team.
      Function parameters for this API teamId,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        /*
      The \&quot;Get team member\&quot; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.  Get team member. In order to get if a user is a member of a team, the authenticated user mus be a member of the team.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        /*
      Get team membership. In order to get a user&#39;s membership with a team, the authenticated user must be a member of the team or an owner of the team&#39;s organization.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_TEAM_ID_REPOS":
        /*
      List team repos
      Function parameters for this API teamId,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        /*
      Check if a team manages a repository
      Function parameters for this API teamId,owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_EMAILS":
        /*
      List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it&#39;s primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userEmailsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_FOLLOWERS":
        /*
      List the authenticated user&#39;s followers
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userFollowersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_FOLLOWING":
        /*
      List who the authenticated user is following.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userFollowingGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_FOLLOWING_USERNAME":
        /*
      Check if you are following a user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.userFollowingUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER":
        /*
      Get the authenticated user.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_ISSUES":
        /*
      List issues. List all issues across owned and member repositories for the authenticated user.
      Function parameters for this API filter,state,labels,sort,direction,opts
        */
        return new Promise((resolve, reject) => {
          this.userIssuesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_KEYS":
        /*
      List your public keys. Lists the current user&#39;s keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the &#39;user&#39;, &#39;write:public_key&#39; scopes.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userKeysGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_KEYS_KEY_ID":
        /*
      Get a single public key.
      Function parameters for this API keyId,opts
        */
        return new Promise((resolve, reject) => {
          this.userKeysKeyIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_ORGS":
        /*
      List public and private organizations for the authenticated user.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userOrgsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_REPOS":
        /*
      List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userReposGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_STARRED":
        /*
      List repositories being starred by the authenticated user.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userStarredGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_STARRED_OWNER_REPO":
        /*
      Check if you are starring a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_SUBSCRIPTIONS":
        /*
      List repositories being watched by the authenticated user.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userSubscriptionsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        /*
      Check if you are watching a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_TEAMS":
        /*
      List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.userTeamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS":
        /*
      Get all users. This provides a dump of every user, in the order that they signed up for GitHub. Note: Pagination is powered exclusively by the since parameter. Use the Link header to get the URL for the next page of users.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.usersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_EVENTS":
        /*
      If you are authenticated as the given user, you will see your private events. Otherwise, you&#39;ll only see public events.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_EVENTS_ORGS_ORG":
        /*
      This is the user&#39;s organization dashboard. You must be authenticated as the user to view this.
      Function parameters for this API username,org,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameEventsOrgsOrgGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_FOLLOWERS":
        /*
      List a user&#39;s followers
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_FOLLOWING_TARGET_USER":
        /*
      Check if one user follows another.
      Function parameters for this API username,targetUser,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowingTargetUserGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "USERS_USERNAME":
        /*
      Get a single user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_GISTS":
        /*
      List a users gists.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameGistsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_KEYS":
        /*
      List public keys for a user. Lists the verified public keys for a user. This is accessible by anyone.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameKeysGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_ORGS":
        /*
      List all public organizations for a user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameOrgsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_RECEIVED_EVENTS":
        /*
      These are events that you&#39;ll only see public events.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameReceivedEventsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "USERS_USERNAME_RECEIVED_EVENTS_PUBLIC":
        /*
      List public events that a user has received
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameReceivedEventsPublicGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "USERS_USERNAME_REPOS":
        /*
      List public repositories for the specified user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameReposGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_STARRED":
        /*
      List repositories being starred by a user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameStarredGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_SUBSCRIPTIONS":
        /*
      List repositories being watched by a user.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameSubscriptionsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for emojisGet
  /* Lists all the emojis available to use on GitHub. */
  emojisGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.emojisGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for eventsGet
  /* List public events. */
  eventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.eventsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for feedsGet
  /* List Feeds. GitHub provides several timeline resources in Atom format. The Feeds API  lists all the feeds available to the authenticating user.  */
  feedsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.feedsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for gistsGet
  /* List the authenticated user&#39;s gists or if called anonymously, this will return all public gists.  */
  gistsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for gistsIdCommentsCommentIdGet
  /* Get a single comment. */
  gistsIdCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment.
    /*let id = 56;*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdCommentsCommentIdGet(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsIdCommentsGet
  /* List comments on a gist. */
  gistsIdCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdCommentsGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsIdGet
  /* Get a single gist. */
  gistsIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsIdStarGet
  /* Check if a gist is starred. */
  gistsIdStarGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdStarGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for gistsPublicGet
  /* List all public gists. */
  gistsPublicGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsPublicGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsStarredGet
  /* List the authenticated user&#39;s starred gists. */
  gistsStarredGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsStarredGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gitignoreTemplatesGet
  /* Listing available templates. List all templates available to pass as an option when creating a repository.  */
  gitignoreTemplatesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gitignoreTemplatesGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gitignoreTemplatesLanguageGet
  /* Get a single template. */
  gitignoreTemplatesLanguageGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String |
    /*let language = "language_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gitignoreTemplatesLanguageGet(
      incomingOptions.language,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for issuesGet
  /* List issues. List all issues across all the authenticated user&#39;s visible repositories.  */
  issuesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.issuesGet(
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for legacyIssuesSearchOwnerRepositoryStateKeywordGet
  /* Find issues by state and keyword. */
  legacyIssuesSearchOwnerRepositoryStateKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search term // String | Indicates the state of the issues to return. Can be either open or closed // String | // String |
    /*let keyword = "keyword_example";*/ /*let state = "state_example";*/ /*let owner = "owner_example";*/ /*let repository = "repository_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.legacyIssuesSearchOwnerRepositoryStateKeywordGet(
      incomingOptions.keyword,
      incomingOptions.state,
      incomingOptions.owner,
      incomingOptions.repository,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for legacyReposSearchKeywordGet
  /* Find repositories by keyword. Note, this legacy method does not follow the v3 pagination pattern. This method returns up to 100 results per page and pages can be fetched using the start_page parameter. */
  legacyReposSearchKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search term
    /*let keyword = "keyword_example";*/ let opts = {
      order: "'desc'" // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'language': "language_example", // String | Filter results by language
      //  'startPage': "startPage_example", // String | The page number to fetch
      //  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.legacyReposSearchKeywordGet(
      incomingOptions.keyword,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for legacyUserEmailEmailGet
  /* This API call is added for compatibility reasons only. */
  legacyUserEmailEmailGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The email address
    /*let email = "email_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.legacyUserEmailEmailGet(
      incomingOptions.email,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for legacyUserSearchKeywordGet
  /* Find users by keyword. */
  legacyUserSearchKeywordGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | The search term
    /*let keyword = "keyword_example";*/ let opts = {
      order: "'desc'" // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'startPage': "startPage_example", // String | The page number to fetch
      //  'sort': "sort_example", // String | The sort field. One of stars, forks, or updated. Default: results are sorted by best match.
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.legacyUserSearchKeywordGet(
      incomingOptions.keyword,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for metaGet
  /* This gives some information about GitHub.com, the service. */
  metaGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.metaGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for networksOwnerRepoEventsGet
  /* List public events for a network of repositories. */
  networksOwnerRepoEventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.networksOwnerRepoEventsGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationsGet
  /* List your notifications. List all notifications for the current user, grouped by repository.  */
  notificationsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      all: true, // Boolean | True to show notifications marked as read.
      participating: true, // Boolean | True to show only notifications in which the user is directly participating or mentioned.
      //  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdGet
  /* View a single thread. */
  notificationsThreadsIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsThreadsIdGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionGet
  /* Get a Thread Subscription. */
  notificationsThreadsIdSubscriptionGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread.
    /*let id = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsThreadsIdSubscriptionGet(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgEventsGet
  /* List public events for an organization. */
  orgsOrgEventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgEventsGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgGet
  /* Get an Organization. */
  orgsOrgGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgIssuesGet
  /* List issues. List all issues for a given organization for the authenticated user.  */
  orgsOrgIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let org = "org_example";*/ /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

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
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgMembersGet
  /* Members list. List all users who are members of an organization. A member is a user tha belongs to at least 1 team in the organization. If the authenticated user is also an owner of this organization then both concealed and public members will be returned. If the requester is not an owner of the organization the query will be redirected to the public members list.  */
  orgsOrgMembersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgMembersGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgMembersUsernameGet
  /* Check if a user is, publicly or privately, a member of the organization. */
  orgsOrgMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user.
    /*let org = "org_example";*/ /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgMembersUsernameGet(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersGet
  /* Public members list. Members of an organization can choose to have their membership publicized or not.  */
  orgsOrgPublicMembersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgPublicMembersGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernameGet
  /* Check public membership. */
  orgsOrgPublicMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user.
    /*let org = "org_example";*/ /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgPublicMembersUsernameGet(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgReposGet
  /* List repositories for the specified org. */
  orgsOrgReposGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      type: "'all'", // String |
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgReposGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgTeamsGet
  /* List teams. */
  orgsOrgTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation.
    /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgTeamsGet(
      org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for rateLimitGet
  /* Get your current rate limit status Note: Accessing this endpoint does not count against your rate limit.  */
  rateLimitGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rateLimitGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for reposOwnerRepoArchiveFormatPathGet
  /* Get archive link. This method will return a 302 to a URL to download a tarball or zipball archive for a repository. Please make sure your HTTP framework is configured to follow redirects or you will need to use the Location header to make a second GET request. Note: For private repositories, these links are temporary and expire quickly.  */
  reposOwnerRepoArchiveFormatPathGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // String | Valid Git reference, defaults to 'master'.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let archiveFormat = "archiveFormat_example";*/ /*let path = "path_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoArchiveFormatPathGet(
      incomingOptions.owner,
      repo,
      incomingOptions.archiveFormat,
      incomingOptions.path,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoAssigneesAssigneeGet
  /* Check assignee. You may also check to see if a particular user is an assignee for a repository.  */
  reposOwnerRepoAssigneesAssigneeGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the assignee.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let assignee = "assignee_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoAssigneesAssigneeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.assignee,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoAssigneesGet
  /* List assignees. This call lists all the available assignees (owner + collaborators) to which issues may be assigned.  */
  reposOwnerRepoAssigneesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoAssigneesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoBranchesBranchGet
  /* Get Branch */
  reposOwnerRepoBranchesBranchGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the branch.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let branch = "branch_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoBranchesBranchGet(
      incomingOptions.owner,
      repo,
      incomingOptions.branch,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoBranchesGet
  /* Get list of branches */
  reposOwnerRepoBranchesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoBranchesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsGet
  /* List. When authenticating as an organization owner of an organization-owned repository, all organization owners are included in the list of collaborators. Otherwise, only users with access to the repository are returned in the collaborators list.  */
  reposOwnerRepoCollaboratorsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserGet
  /* Check if user is a collaborator */
  reposOwnerRepoCollaboratorsUserGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserGet(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdGet
  /* Get a single commit comment. */
  reposOwnerRepoCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsGet
  /* List commit comments for a repository. Comments are ordered by ascending ID.  */
  reposOwnerRepoCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsGet
  /* List commits on a repository. */
  reposOwnerRepoCommitsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
      //  'sha': "sha_example", // String | Sha or branch to start listing commits from.
      //  'path': "path_example", // String | Only commits containing this file path will be returned.
      //  'author': "author_example", // String | GitHub login, name, or email by which to filter by commit author.
      //  'until': "until_example", // String | ISO 8601 Date - Only commits before this date will be returned.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommitsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsRefStatusGet
  /* Get the combined Status for a specific Ref The Combined status endpoint is currently available for developers to preview. During the preview period, the API may change without advance notice. Please see the blog post for full details. To access this endpoint during the preview period, you must provide a custom media type in the Accept header: application/vnd.github.she-hulk-preview+json  */
  reposOwnerRepoCommitsRefStatusGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommitsRefStatusGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeCommentsGet
  /* List comments for a single commitList comments for a single commit. */
  reposOwnerRepoCommitsShaCodeCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeGet
  /* Get a single commit. */
  reposOwnerRepoCommitsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCompareBaseIdHeadIdGet
  /* Compare two commits */
  reposOwnerRepoCompareBaseIdHeadIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let baseId = "baseId_example";*/ /*let headId = "headId_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCompareBaseIdHeadIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.baseId,
      incomingOptions.headId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathGet
  /* Get contents. This method returns the contents of a file or directory in a repository. Files and symlinks support a custom media type for getting the raw content. Directories and submodules do not support custom media types. Note: This API supports files up to 1 megabyte in size. Here can be many outcomes. For details see \&quot;http://developer.github.com/v3/repos/contents/\&quot;  */
  reposOwnerRepoContentsPathGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ let opts = {
      //  'path2': "path_example", // String | The content path.
      //  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to 'master'.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoContentsPathGet(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContributorsGet
  /* Get list of contributors. */
  reposOwnerRepoContributorsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Set to 1 or true to include anonymous contributors in results.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let anon = "anon_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoContributorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.anon,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsGet
  /* Users with pull access can view deployments for a repository */
  reposOwnerRepoDeploymentsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDeploymentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsIdStatusesGet
  /* Users with pull access can view deployment statuses for a deployment */
  reposOwnerRepoDeploymentsIdStatusesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | The Deployment ID to list the statuses from.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsDownloadIdGet
  /* Deprecated. Get a single download. */
  reposOwnerRepoDownloadsDownloadIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of download.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let downloadId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.downloadId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsGet
  /* Deprecated. List downloads for a repository. */
  reposOwnerRepoDownloadsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDownloadsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoEventsGet
  /* Get list of repository events. */
  reposOwnerRepoEventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoForksGet
  /* List forks. */
  reposOwnerRepoForksGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      sort: "'newes'", // String |
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoForksGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGet
  /* Get repository. */
  reposOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitBlobsShaCodeGet
  /* Get a Blob. Since blobs can be any arbitrary binary data, the input and responses for the blob API takes an encoding parameter that can be either utf-8 or base64. If your data cannot be losslessly sent as a UTF-8 string, you can base64 encode it.  */
  reposOwnerRepoGitBlobsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitBlobsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitCommitsShaCodeGet
  /* Get a Commit. */
  reposOwnerRepoGitCommitsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitCommitsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsGet
  /* Get all References */
  reposOwnerRepoGitRefsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitRefsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefGet
  /* Get a Reference */
  reposOwnerRepoGitRefsRefGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTagsShaCodeGet
  /* Get a Tag. */
  reposOwnerRepoGitTagsShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitTagsShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTreesShaCodeGet
  /* Get a Tree. */
  reposOwnerRepoGitTreesShaCodeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Tree SHA.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ let opts = {
      recursive: 56 // Number | Get a Tree Recursively. (0 or 1)
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitTreesShaCodeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksGet
  /* Get list of hooks. */
  reposOwnerRepoHooksGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdGet
  /* Get single hook. */
  reposOwnerRepoHooksHookIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdGet
  /* Get a single comment. */
  reposOwnerRepoIssuesCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsGet
  /* List comments in a repository. */
  reposOwnerRepoIssuesCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'direction': "direction_example", // String | Ignored without 'sort' parameter.
      //  'sort': "sort_example", // String |
      //  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesEventsEventIdGet
  /* Get a single event. */
  reposOwnerRepoIssuesEventsEventIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of the event.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let eventId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesEventsEventIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.eventId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesEventsGet
  /* List issue events for a repository. */
  reposOwnerRepoIssuesEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesGet
  /* List issues for a repository. */
  reposOwnerRepoIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

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
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberCommentsGet
  /* List comments on an issue. */
  reposOwnerRepoIssuesNumberCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberEventsGet
  /* List events for an issue. */
  reposOwnerRepoIssuesNumberEventsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberEventsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberGet
  /* Get a single issue */
  reposOwnerRepoIssuesNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsGet
  /* List labels on an issue. */
  reposOwnerRepoIssuesNumberLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysGet
  /* Get list of keys. */
  reposOwnerRepoKeysGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoKeysGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysKeyIdGet
  /* Get a key */
  reposOwnerRepoKeysKeyIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of key.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let keyId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsGet
  /* List all labels for this repository. */
  reposOwnerRepoLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNameGet
  /* Get a single label. */
  reposOwnerRepoLabelsNameGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLabelsNameGet(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLanguagesGet
  /* List languages. List languages for the specified repository. The value on the right of a language is the number of bytes of code written in that language.  */
  reposOwnerRepoLanguagesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLanguagesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesGet
  /* List milestones for a repository. */
  reposOwnerRepoMilestonesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      state: "'open'", // String | String to filter by state.
      //  'direction': "direction_example", // String | Ignored without 'sort' parameter.
      sort: "'due_date'" // String |
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberGet
  /* Get a single milestone. */
  reposOwnerRepoMilestonesNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberLabelsGet
  /* Get labels for every issue in a milestone. */
  reposOwnerRepoMilestonesNumberLabelsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberLabelsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoNotificationsGet
  /* List your notifications in a repository List all notifications for the current user.  */
  reposOwnerRepoNotificationsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      all: true, // Boolean | True to show notifications marked as read.
      participating: true // Boolean | True to show only notifications in which the user is directly participating or mentioned.
      //  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoNotificationsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdGet
  /* Get a single comment. */
  reposOwnerRepoPullsCommentsCommentIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsGet
  /* List comments in a repository. By default, Review Comments are ordered by ascending ID.  */
  reposOwnerRepoPullsCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'direction': "direction_example", // String | Ignored without 'sort' parameter.
      //  'sort': "sort_example", // String |
      //  'since': "since_example", // String | The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Example: \"2012-10-09T23:39:01Z\".
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsGet
  /* List pull requests. */
  reposOwnerRepoPullsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      state: "'open'" // String | String to filter by state.
      //  'head': "head_example", // String | Filter pulls by head user and branch name in the format of 'user:ref-name'. Example: github:new-script-format.
      //  'base': "base_example", // String | Filter pulls by base branch name. Example - gh-pages.
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommentsGet
  /* List comments on a pull request. */
  reposOwnerRepoPullsNumberCommentsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommitsGet
  /* List commits on a pull request. */
  reposOwnerRepoPullsNumberCommitsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommitsGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberFilesGet
  /* List pull requests files. */
  reposOwnerRepoPullsNumberFilesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberFilesGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberGet
  /* Get a single pull request. */
  reposOwnerRepoPullsNumberGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberMergeGet
  /* Get if a pull request has been merged. */
  reposOwnerRepoPullsNumberMergeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergeGet(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReadmeGet
  /* Get the README. This method returns the preferred README for a repository.  */
  reposOwnerRepoReadmeGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'ref': "ref_example", // String | The String name of the Commit/Branch/Tag. Defaults to master.
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReadmeGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdGet
  /* Get a single release asset */
  reposOwnerRepoReleasesAssetsIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesGet
  /* Users with push access to the repository will receive all releases (i.e., published releases and draft releases). Users with pull access will receive published releases only */
  reposOwnerRepoReleasesGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdAssetsGet
  /* List assets for a release */
  reposOwnerRepoReleasesIdAssetsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesIdAssetsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdGet
  /* Get a single release */
  reposOwnerRepoReleasesIdGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesIdGet(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStargazersGet
  /* List Stargazers. */
  reposOwnerRepoStargazersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStargazersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsCodeFrequencyGet
  /* Get the number of additions and deletions per week. Returns a weekly aggregate of the number of additions and deletions pushed to a repository.  */
  reposOwnerRepoStatsCodeFrequencyGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatsCodeFrequencyGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsCommitActivityGet
  /* Get the last year of commit activity data. Returns the last year of commit activity grouped by week. The days array is a group of commits per day, starting on Sunday.  */
  reposOwnerRepoStatsCommitActivityGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatsCommitActivityGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsContributorsGet
  /* Get contributors list with additions, deletions, and commit counts. */
  reposOwnerRepoStatsContributorsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatsContributorsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsParticipationGet
  /* Get the weekly commit count for the repo owner and everyone else. */
  reposOwnerRepoStatsParticipationGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatsParticipationGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatsPunchCardGet
  /* Get the number of commits per hour in each day. Each array contains the day number, hour number, and number of commits 0-6 Sunday - Saturday 0-23 Hour of day Number of commits  For example, [2, 14, 25] indicates that there were 25 total commits, during the 2.00pm hour on Tuesdays. All times are based on the time zone of individual commits.  */
  reposOwnerRepoStatsPunchCardGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatsPunchCardGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatusesRefGet
  /* List Statuses for a specific Ref. */
  reposOwnerRepoStatusesRefGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatusesRefGet(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscribersGet
  /* List watchers. */
  reposOwnerRepoSubscribersGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoSubscribersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionGet
  /* Get a Repository Subscription. */
  reposOwnerRepoSubscriptionGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoSubscriptionGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoTagsGet
  /* Get list of tags. */
  reposOwnerRepoTagsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoTagsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoTeamsGet
  /* Get list of teams */
  reposOwnerRepoTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoTeamsGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoWatchersGet
  /* List Stargazers. New implementation. */
  reposOwnerRepoWatchersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoWatchersGet(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesGet
  /* List all public repositories. This provides a dump of every public repository, in the order that they were created. Note: Pagination is powered exclusively by the since parameter. is the Link header to get the URL for the next page of repositories.  */
  repositoriesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchCodeGet
  /* Search code. */
  searchCodeGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported code search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the file contents, the file path, or both. 'Languages' Searches code based on the language it's written in. 'Forks' Filters repositories based on the number of forks, and/or whether code from forked repositories should be included in the results at all. 'Size' Finds files that match a certain size (in bytes). 'Path' Specifies the path that the resulting file must be at. 'Extension' Matches files with a certain extension. 'Users' or 'Repositories' Limits searches to a specific user or repository.
    /*let q = "q_example";*/ let opts = {
      order: "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'sort': "sort_example", // String | Can only be 'indexed', which indicates how recently a file has been indexed by the GitHub search infrastructure. If not provided, results are sorted by best match.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchCodeGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchIssuesGet
  /* Find issues by state and keyword. (This method returns up to 100 results per page.) */
  searchIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | The q search term can also contain any combination of the supported issue search qualifiers:
    /*let q = "q_example";*/ let opts = {
      order: "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'sort': "sort_example", // String | The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchIssuesGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchRepositoriesGet
  /* Search repositories. */
  searchRepositoriesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported repository search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the repository name, description, readme, or any combination of these. 'Size' Finds repositories that match a certain size (in kilobytes). 'Forks' Filters repositories based on the number of forks, and/or whether forked repositories should be included in the results at all. 'Created' and 'Last Updated' Filters repositories based on times of creation, or when they were last updated. 'Users or Repositories' Limits searches to a specific user or repository. 'Languages' Searches repositories based on the language they are written in. 'Stars' Searches repositories based on the number of stars.
    /*let q = "q_example";*/ let opts = {
      order: "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'sort': "sort_example", // String | If not provided, results are sorted by best match.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchRepositoriesGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for searchUsersGet
  /* Search users. */
  searchUsersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | The search terms. This can be any combination of the supported user search parameters: 'Search In' Qualifies which fields are searched. With this qualifier you can restrict the search to just the username, public email, full name, location, or any combination of these. 'Repository count' Filters users based on the number of repositories they have. 'Location' Filter users by the location indicated in their profile. 'Language' Search for users that have repositories that match a certain language. 'Created' Filter users based on when they joined. 'Followers' Filter users based on the number of followers they have.
    /*let q = "q_example";*/ let opts = {
      order: "'desc'", // String | The sort field. if sort param is provided. Can be either asc or desc.
      //  'sort': "sort_example", // String | If not provided, results are sorted by best match.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.searchUsersGet(
      incomingOptions.q,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdGet
  /* Get team. */
  teamsTeamIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team.
    /*let teamId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersGet
  /* List team members. In order to list members in a team, the authenticated user must be a member of the team.  */
  teamsTeamIdMembersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team.
    /*let teamId = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembersGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernameGet
  /* The \&quot;Get team member\&quot; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.  Get team member. In order to get if a user is a member of a team, the authenticated user mus be a member of the team.  */
  teamsTeamIdMembersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembersUsernameGet(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernameGet
  /* Get team membership. In order to get a user&#39;s membership with a team, the authenticated user must be a member of the team or an owner of the team&#39;s organization.  */
  teamsTeamIdMembershipsUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembershipsUsernameGet(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposGet
  /* List team repos */
  teamsTeamIdReposGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team.
    /*let teamId = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdReposGet(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoGet
  /* Check if a team manages a repository */
  teamsTeamIdReposOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a repository owner // String | Name of a repository.
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdReposOwnerRepoGet(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userEmailsGet
  /* List email addresses for a user. In the final version of the API, this method will return an array of hashes with extended information for each email address indicating if the address has been verified and if it&#39;s primary email address for GitHub. Until API v3 is finalized, use the application/vnd.github.v3 media type to get other response format.  */
  userEmailsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userEmailsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userFollowersGet
  /* List the authenticated user&#39;s followers */
  userFollowersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userFollowersGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userFollowingGet
  /* List who the authenticated user is following. */
  userFollowingGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userFollowingGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userFollowingUsernameGet
  /* Check if you are following a user. */
  userFollowingUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userFollowingUsernameGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userGet
  /* Get the authenticated user. */
  userGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userIssuesGet
  /* List issues. List all issues across owned and member repositories for the authenticated user.  */
  userIssuesGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Issues assigned to you / created by you / mentioning you / you're subscribed to updates for / All issues the authenticated user can see // String | // String | String list of comma separated Label names. Example - bug,ui,@high // String | // String |
    /*let filter = "'all'";*/ /*let state = "'open'";*/ /*let labels = "labels_example";*/ /*let sort = "'created'";*/ /*let direction = "'desc'";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userIssuesGet(
      incomingOptions.filter,
      incomingOptions.state,
      incomingOptions.labels,
      incomingOptions.sort,
      incomingOptions.direction,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userKeysGet
  /* List your public keys. Lists the current user&#39;s keys. Management of public keys via the API requires that you are authenticated through basic auth, or OAuth with the &#39;user&#39;, &#39;write:public_key&#39; scopes.  */
  userKeysGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userKeysGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userKeysKeyIdGet
  /* Get a single public key. */
  userKeysKeyIdGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | ID of key.
    /*let keyId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userKeysKeyIdGet(
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userOrgsGet
  /* List public and private organizations for the authenticated user. */
  userOrgsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userOrgsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userReposGet
  /* List repositories for the authenticated user. Note that this does not include repositories owned by organizations which the user can access. You can lis user organizations and list organization repositories separately.  */
  userReposGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      type: "'all'", // String |
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userReposGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userStarredGet
  /* List repositories being starred by the authenticated user. */
  userStarredGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      //  'direction': "direction_example", // String | Ignored without 'sort' parameter.
      sort: "'created'" // String |
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userStarredGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoGet
  /* Check if you are starring a repository. */
  userStarredOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userStarredOwnerRepoGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userSubscriptionsGet
  /* List repositories being watched by the authenticated user. */
  userSubscriptionsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSubscriptionsGet(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoGet
  /* Check if you are watching a repository. */
  userSubscriptionsOwnerRepoGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSubscriptionsOwnerRepoGet(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userTeamsGet
  /* List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth. */
  userTeamsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userTeamsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for usersGet
  /* Get all users. This provides a dump of every user, in the order that they signed up for GitHub. Note: Pagination is powered exclusively by the since parameter. Use the Link header to get the URL for the next page of users.  */
  usersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      since: 56, // Number | The integer ID of the last user that you've seen.
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for usersUsernameEventsGet
  /* If you are authenticated as the given user, you will see your private events. Otherwise, you&#39;ll only see public events. */
  usersUsernameEventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameEventsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameEventsOrgsOrgGet
  /* This is the user&#39;s organization dashboard. You must be authenticated as the user to view this. */
  usersUsernameEventsOrgsOrgGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user // String |
    /*let username = "username_example";*/ /*let org = "org_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameEventsOrgsOrgGet(
      incomingOptions.username,
      incomingOptions.org,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameFollowersGet
  /* List a user&#39;s followers */
  usersUsernameFollowersGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameFollowersGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameFollowingTargetUserGet
  /* Check if one user follows another. */
  usersUsernameFollowingTargetUserGet(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of user // String | Name of user.
    /*let username = "username_example";*/ /*let targetUser = "targetUser_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameFollowingTargetUserGet(
      incomingOptions.username,
      incomingOptions.targetUser,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameGet
  /* Get a single user. */
  usersUsernameGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameGistsGet
  /* List a users gists. */
  usersUsernameGistsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
      //  'since': "since_example" // String | Timestamp in ISO 8601 format YYYY-MM-DDTHH:MM:SSZ.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameGistsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameKeysGet
  /* List public keys for a user. Lists the verified public keys for a user. This is accessible by anyone.  */
  usersUsernameKeysGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameKeysGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameOrgsGet
  /* List all public organizations for a user. */
  usersUsernameOrgsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameOrgsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameReceivedEventsGet
  /* These are events that you&#39;ll only see public events. */
  usersUsernameReceivedEventsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameReceivedEventsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameReceivedEventsPublicGet
  /* List public events that a user has received */
  usersUsernameReceivedEventsPublicGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameReceivedEventsPublicGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameReposGet
  /* List public repositories for the specified user. */
  usersUsernameReposGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      type: "'all'", // String |
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameReposGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameStarredGet
  /* List repositories being starred by a user. */
  usersUsernameStarredGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameStarredGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameSubscriptionsGet
  /* List repositories being watched by a user. */
  usersUsernameSubscriptionsGet(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.usersUsernameSubscriptionsGet(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  async post(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS":
        /*
      Create a commen
      Function parameters for this API id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID_FORKS":
        /*
      Fork a gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdForksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS":
        /*
      Create a gist.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "MARKDOWN":
        /*
      Render an arbitrary Markdown document
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.markdownPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "MARKDOWN_RAW":
        /*
      Render a Markdown document in raw mode
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.markdownRawPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_REPOS":
        /*
      Create a new repository for the authenticated user. OAuth users must supply repo scope.
      Function parameters for this API org,body,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgReposPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_TEAMS":
        /*
      Create team. In order to create a team, the authenticated user must be an owner of organization.
      Function parameters for this API org,body,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgTeamsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_COMMITS_SHA_CODE_COMMENTS":
        /*
      Create a commit comment.
      Function parameters for this API owner,repo,shaCode,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommitsShaCodeCommentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS_ID_STATUSES":
        /*
      Create a Deployment Status Users with push access can create deployment statuses for a given deployment:
      Function parameters for this API owner,repo,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsIdStatusesPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_DEPLOYMENTS":
        /*
      Users with push access can create a deployment for a given ref
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDeploymentsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_FORKS":
        /*
      Create a fork. Forking a Repository happens asynchronously. Therefore, you may have to wai a short period before accessing the git objects. If this takes longer than 5 minutes, be sure to contact Support.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoForksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_BLOBS":
        /*
      Create a Blob.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitBlobsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_COMMITS":
        /*
      Create a Commit.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitCommitsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_REFS":
        /*
      Create a Reference
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_TAGS":
        /*
      Create a Tag Object. Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then create the refs/tags/[tag] reference. If you want to create a lightweight tag, you only have to create the tag reference - this call would be unnecessary.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTagsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_GIT_TREES":
        /*
      Create a Tree. The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitTreesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID_TESTS":
        /*
      Test a push hook. This will trigger the hook with the latest push to the current repository if the hook is subscribed to push events. If the hook is not subscribed to push events, the server will respond with 204 but no test POST will be generated. Note: Previously /repos/:owner/:repo/hooks/:id/tes
      Function parameters for this API owner,repo,hookId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdTestsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_HOOKS":
        /*
      Create a hook.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_COMMENTS":
        /*
      Create a comment.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberCommentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        /*
      Add labels to an issue.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES":
        /*
      Create an issue. Any user with pull access to a repository can create an issue.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_KEYS":
        /*
      Create a key.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_LABELS":
        /*
      Create a label.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_MERGES":
        /*
      Perform a merge.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMergesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES":
        /*
      Create a milestone.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_COMMENTS":
        /*
      Create a comment.   #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )   description: |     Alternative Input.     Instead of passing commit_id, path, and position you can reply to an     existing Pull Request Comment like this:          body            Required string         in_reply_to            Required number - Comment id to reply to.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberCommentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS":
        /*
      Create a pull request.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_RELEASES":
        /*
      Create a release Users with push access to the repository can create a release.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_STATUSES_REF":
        /*
      Create a Status.
      Function parameters for this API owner,repo,ref,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoStatusesRefPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_EMAILS":
        /*
      Add email address(es). You can post a single email address or an array of addresses.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.userEmailsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_KEYS":
        /*
      Create a public key.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.userKeysPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_REPOS":
        /*
      Create a new repository for the authenticated user. OAuth users must supply repo scope.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.userReposPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsPost
  /* Create a commen */
  gistsIdCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // CommentBody |
    /*let id = 56;*/ /*let body = new Github.CommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdCommentsPost(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsIdForksPost
  /* Fork a gist. */
  gistsIdForksPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdForksPost(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for gistsPost
  /* Create a gist. */
  gistsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // PostGist |
    /*let body = new Github.PostGist();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for markdownPost
  /* Render an arbitrary Markdown document */
  markdownPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Markdown |
    /*let body = new Github.Markdown();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.markdownPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for markdownRawPost
  /* Render a Markdown document in raw mode */
  markdownRawPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi();
    let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.markdownRawPost(
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgReposPost
  /* Create a new repository for the authenticated user. OAuth users must supply repo scope.  */
  orgsOrgReposPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // PostRepo |
    /*let org = "org_example";*/ /*let body = new Github.PostRepo();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgReposPost(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgTeamsPost
  /* Create team. In order to create a team, the authenticated user must be an owner of organization.  */
  orgsOrgTeamsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // OrgTeamsPost |
    /*let org = "org_example";*/ /*let body = new Github.OrgTeamsPost();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgTeamsPost(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommitsShaCodeCommentsPost
  /* Create a commit comment. */
  reposOwnerRepoCommitsShaCodeCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | SHA-1 code of the commit // CommitCommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let shaCode = "shaCode_example";*/ /*let body = new Github.CommitCommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommitsShaCodeCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.shaCode,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsIdStatusesPost
  /* Create a Deployment Status Users with push access can create deployment statuses for a given deployment:  */
  reposOwnerRepoDeploymentsIdStatusesPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | The Deployment ID to list the statuses from // DeploymentStatusesCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = 56;*/ /*let body = new Github.DeploymentStatusesCreate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDeploymentsIdStatusesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDeploymentsPost
  /* Users with push access can create a deployment for a given ref */
  reposOwnerRepoDeploymentsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Deployment |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Deployment();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDeploymentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoForksPost
  /* Create a fork. Forking a Repository happens asynchronously. Therefore, you may have to wai a short period before accessing the git objects. If this takes longer than 5 minutes, be sure to contact Support.  */
  reposOwnerRepoForksPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // ForkBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.ForkBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoForksPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitBlobsPost
  /* Create a Blob. */
  reposOwnerRepoGitBlobsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Blob |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = null;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitBlobsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitCommitsPost
  /* Create a Commit. */
  reposOwnerRepoGitCommitsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RepoCommitBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RepoCommitBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitCommitsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsPost
  /* Create a Reference */
  reposOwnerRepoGitRefsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RefsBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RefsBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitRefsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTagsPost
  /* Create a Tag Object. Note that creating a tag object does not create the reference that makes a tag in Git. If you want to create an annotated tag in Git, you have to do this call to create the tag object, and then create the refs/tags/[tag] reference. If you want to create a lightweight tag, you only have to create the tag reference - this call would be unnecessary.  */
  reposOwnerRepoGitTagsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // TagBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.TagBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitTagsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitTreesPost
  /* Create a Tree. The tree creation API will take nested entries as well. If both a tree and a nested path modifying that tree are specified, it will overwrite the contents of that tree with the new path contents and write a new tree out.  */
  reposOwnerRepoGitTreesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Tree |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Tree();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitTreesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdTestsPost
  /* Test a push hook. This will trigger the hook with the latest push to the current repository if the hook is subscribed to push events. If the hook is not subscribed to push events, the server will respond with 204 but no test POST will be generated. Note: Previously /repos/:owner/:repo/hooks/:id/tes  */
  reposOwnerRepoHooksHookIdTestsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdTestsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksPost
  /* Create a hook. */
  reposOwnerRepoHooksPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // HookBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.HookBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberCommentsPost
  /* Create a comment. */
  reposOwnerRepoIssuesNumberCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.CommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsPost
  /* Add labels to an issue. */
  reposOwnerRepoIssuesNumberLabelsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = ["null"];*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesPost
  /* Create an issue. Any user with pull access to a repository can create an issue.  */
  reposOwnerRepoIssuesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Issue |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.Issue();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysPost
  /* Create a key. */
  reposOwnerRepoKeysPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // UserKeysPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.UserKeysPost();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoKeysPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsPost
  /* Create a label. */
  reposOwnerRepoLabelsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = ["null"];*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLabelsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMergesPost
  /* Perform a merge. */
  reposOwnerRepoMergesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // MergesBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.MergesBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMergesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesPost
  /* Create a milestone. */
  reposOwnerRepoMilestonesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // MilestoneUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.MilestoneUpdate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberCommentsPost
  /* Create a comment.   #TODO Alternative input ( http://developer.github.com/v3/pulls/comments/ )   description: |     Alternative Input.     Instead of passing commit_id, path, and position you can reply to an     existing Pull Request Comment like this:          body            Required string         in_reply_to            Required number - Comment id to reply to.  */
  reposOwnerRepoPullsNumberCommentsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // PullsCommentPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.PullsCommentPost();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberCommentsPost(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsPost
  /* Create a pull request. */
  reposOwnerRepoPullsPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // PullsPost |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.PullsPost();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesPost
  /* Create a release Users with push access to the repository can create a release.  */
  reposOwnerRepoReleasesPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // ReleaseCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.ReleaseCreate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesPost(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoStatusesRefPost
  /* Create a Status. */
  reposOwnerRepoStatusesRefPost(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name. // HeadBranch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let body = new Github.HeadBranch();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoStatusesRefPost(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userEmailsPost
  /* Add email address(es). You can post a single email address or an array of addresses.  */
  userEmailsPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // [String] |
    /*let body = ["null"];*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userEmailsPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userKeysPost
  /* Create a public key. */
  userKeysPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // UserKeysPost |
    /*let body = new Github.UserKeysPost();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userKeysPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userReposPost
  /* Create a new repository for the authenticated user. OAuth users must supply repo scope.  */
  userReposPost(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // PostRepo |
    /*let body = new Github.PostRepo();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userReposPost(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async put(entity, options) {
    switch (entity) {
      case "GISTS_ID_STAR":
        /*
      Star a gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdStarPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS":
        /*
      Mark as read. Marking a notification as \&quot;read\&quot; removes it from the default view on GitHub.com.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        /*
      Set a Thread Subscription. This lets you subscribe to a thread, or ignore it. Subscribing to a thread is unnecessary if the user is already subscribed to the repository. Ignoring a thread will mute all future notifications (until you comment or get @mentioned).
      Function parameters for this API id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        /*
      Publicize a user&#39;s membership.
      Function parameters for this API org,username,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernamePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        /*
      Add collaborator.
      Function parameters for this API owner,repo,user,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        /*
      Create a file.
      Function parameters for this API owner,repo,path,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        /*
      Replace all labels for an issue. Sending an empty array ([]) will remove all Labels from the Issue.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_NOTIFICATIONS":
        /*
      Mark notifications as read in a repository. Marking all notifications in a repository as \&quot;read\&quot; removes them from the default view on GitHub.com.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoNotificationsPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER_MERGE":
        /*
      Merge a pull request (Merge Button&#39;s)
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberMergePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        /*
      Set a Repository Subscription
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        /*
      The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.  Add team member. In order to add a user to a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the org that the team is associated with.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernamePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        /*
      Add team membership. In order to add a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with.  If the user is already a part of the team&#39;s organization (meaning they&#39;re on at least one other team in the organization), this endpoint will add the user to the team.  If the user is completely unaffiliated with the team&#39;s organization (meaning they&#39;re on none of the organization&#39;s teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the &#39;pending&#39; state until the user accepts the invitation, at which point the membership will transition to the &#39;active&#39; state and the user will be added as a member of the team.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernamePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        /*
      In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
      Function parameters for this API teamId,owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_FOLLOWING_USERNAME":
        /*
      Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.userFollowingUsernamePut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_STARRED_OWNER_REPO":
        /*
      Star a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        /*
      Watch a repository.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdStarPut
  /* Star a gist. */
  gistsIdStarPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdStarPut(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for notificationsPut
  /* Mark as read. Marking a notification as \&quot;read\&quot; removes it from the default view on GitHub.com.  */
  notificationsPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // NotificationMarkRead |
    /*let body = new Github.NotificationMarkRead();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsPut(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionPut
  /* Set a Thread Subscription. This lets you subscribe to a thread, or ignore it. Subscribing to a thread is unnecessary if the user is already subscribed to the repository. Ignoring a thread will mute all future notifications (until you comment or get @mentioned).  */
  notificationsThreadsIdSubscriptionPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread // PutSubscription |
    /*let id = 56;*/ /*let body = new Github.PutSubscription();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsThreadsIdSubscriptionPut(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernamePut
  /* Publicize a user&#39;s membership. */
  orgsOrgPublicMembersUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user.
    /*let org = "org_example";*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgPublicMembersUsernamePut(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserPut
  /* Add collaborator. */
  reposOwnerRepoCollaboratorsUserPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserPut(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathPut
  /* Create a file. */
  reposOwnerRepoContentsPathPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // CreateFileBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ /*let body = new Github.CreateFileBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoContentsPathPut(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsPut
  /* Replace all labels for an issue. Sending an empty array ([]) will remove all Labels from the Issue.  */
  reposOwnerRepoIssuesNumberLabelsPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = ["null"];*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsPut(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoNotificationsPut
  /* Mark notifications as read in a repository. Marking all notifications in a repository as \&quot;read\&quot; removes them from the default view on GitHub.com.  */
  reposOwnerRepoNotificationsPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // NotificationMarkRead |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.NotificationMarkRead();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoNotificationsPut(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberMergePut
  /* Merge a pull request (Merge Button&#39;s) */
  reposOwnerRepoPullsNumberMergePut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // MergePullBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.MergePullBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberMergePut(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionPut
  /* Set a Repository Subscription */
  reposOwnerRepoSubscriptionPut(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // SubscriptionBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.SubscriptionBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoSubscriptionPut(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernamePut
  /* The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.  Add team member. In order to add a user to a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the org that the team is associated with.  */
  teamsTeamIdMembersUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembersUsernamePut(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernamePut
  /* Add team membership. In order to add a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with.  If the user is already a part of the team&#39;s organization (meaning they&#39;re on at least one other team in the organization), this endpoint will add the user to the team.  If the user is completely unaffiliated with the team&#39;s organization (meaning they&#39;re on none of the organization&#39;s teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the &#39;pending&#39; state until the user accepts the invitation, at which point the membership will transition to the &#39;active&#39; state and the user will be added as a member of the team.  */
  teamsTeamIdMembershipsUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembershipsUsernamePut(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoPut
  /* In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization. */
  teamsTeamIdReposOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a organization // String | Name of a repository.
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdReposOwnerRepoPut(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userFollowingUsernamePut
  /* Follow a user. Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.  */
  userFollowingUsernamePut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userFollowingUsernamePut(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoPut
  /* Star a repository. */
  userStarredOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userStarredOwnerRepoPut(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoPut
  /* Watch a repository. */
  userSubscriptionsOwnerRepoPut(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSubscriptionsOwnerRepoPut(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  async delete(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS_COMMENT_ID":
        /*
      Delete a comment.
      Function parameters for this API id,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GISTS_ID":
        /*
      Delete a gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID_STAR":
        /*
      Unstar a gist.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdStarDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS_THREADS_ID_SUBSCRIPTION":
        /*
      Delete a Thread Subscription.
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdSubscriptionDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ORGS_ORG_MEMBERS_USERNAME":
        /*
      Remove a member. Removing a user from this list will remove them from all teams and they will no longer have any access to the organization&#39;s repositories.
      Function parameters for this API org,username,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgMembersUsernameDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG_PUBLIC_MEMBERS_USERNAME":
        /*
      Conceal a user&#39;s membership.
      Function parameters for this API org,username,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgPublicMembersUsernameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COLLABORATORS_USER":
        /*
      Remove collaborator.
      Function parameters for this API owner,repo,user,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCollaboratorsUserDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        /*
      Delete a commit comment
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_CONTENTS_PATH":
        /*
      Delete a file. This method deletes a file in a repository.
      Function parameters for this API owner,repo,path,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoContentsPathDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO":
        /*
      Delete a Repository. Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_DOWNLOADS_DOWNLOAD_ID":
        /*
      Deprecated. Delete a download.
      Function parameters for this API owner,repo,downloadId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoDownloadsDownloadIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        /*
      Delete a Reference Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a  Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
      Function parameters for this API owner,repo,ref,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        /*
      Delete a hook.
      Function parameters for this API owner,repo,hookId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        /*
      Delete a comment.
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS":
        /*
      Remove all labels from an issue.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER_LABELS_NAME":
        /*
      Remove a label from an issue.
      Function parameters for this API owner,repo,_number,name,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberLabelsNameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_KEYS_KEY_ID":
        /*
      Delete a key.
      Function parameters for this API owner,repo,keyId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoKeysKeyIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        /*
      Delete a label.
      Function parameters for this API owner,repo,name,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        /*
      Delete a milestone.
      Function parameters for this API owner,repo,_number,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        /*
      Delete a comment.
      Function parameters for this API owner,repo,commentId,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        /*
      Delete a release asset
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        /*
      Users with push access to the repository can delete a release.
      Function parameters for this API owner,repo,id,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_SUBSCRIPTION":
        /*
      Delete a Repository Subscription.
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoSubscriptionDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_TEAM_ID":
        /*
      Delete team. In order to delete a team, the authenticated user must be an owner of the org that the team is associated with.
      Function parameters for this API teamId,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID_MEMBERS_USERNAME":
        /*
      The \&quot;Remove team member\&quot; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.  Remove team member. In order to remove a user from a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the org that the team is associated with. NOTE This does not delete the user, it just remove them from the team.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembersUsernameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_TEAM_ID_MEMBERSHIPS_USERNAME":
        /*
      Remove team membership. In order to remove a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
      Function parameters for this API teamId,username,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdMembershipsUsernameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_TEAM_ID_REPOS_OWNER_REPO":
        /*
      In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
      Function parameters for this API teamId,owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdReposOwnerRepoDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "USER_EMAILS":
        /*
      Delete email address(es). You can include a single email address or an array of addresses.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.userEmailsDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_FOLLOWING_USERNAME":
        /*
      Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.userFollowingUsernameDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_KEYS_KEY_ID":
        /*
      Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
      Function parameters for this API keyId,opts
        */
        return new Promise((resolve, reject) => {
          this.userKeysKeyIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_STARRED_OWNER_REPO":
        /*
      Unstar a repository
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userStarredOwnerRepoDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_SUBSCRIPTIONS_OWNER_REPO":
        /*
      Stop watching a repository
      Function parameters for this API owner,repo,opts
        */
        return new Promise((resolve, reject) => {
          this.userSubscriptionsOwnerRepoDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsCommentIdDelete
  /* Delete a comment. */
  gistsIdCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment.
    /*let id = 56;*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdCommentsCommentIdDelete(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for gistsIdDelete
  /* Delete a gist. */
  gistsIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for gistsIdStarDelete
  /* Unstar a gist. */
  gistsIdStarDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdStarDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdSubscriptionDelete
  /* Delete a Thread Subscription. */
  notificationsThreadsIdSubscriptionDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsThreadsIdSubscriptionDelete(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgMembersUsernameDelete
  /* Remove a member. Removing a user from this list will remove them from all teams and they will no longer have any access to the organization&#39;s repositories.  */
  orgsOrgMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user.
    /*let org = "org_example";*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgMembersUsernameDelete(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgPublicMembersUsernameDelete
  /* Conceal a user&#39;s membership. */
  orgsOrgPublicMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // String | Name of the user.
    /*let org = "org_example";*/ /*let username = "username_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgPublicMembersUsernameDelete(
      org,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCollaboratorsUserDelete
  /* Remove collaborator. */
  reposOwnerRepoCollaboratorsUserDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Login of the user.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let user = "user_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCollaboratorsUserDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.user,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdDelete
  /* Delete a commit comment */
  reposOwnerRepoCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoContentsPathDelete
  /* Delete a file. This method deletes a file in a repository.  */
  reposOwnerRepoContentsPathDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // DeleteFileBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let path = "path_example";*/ /*let body = new Github.DeleteFileBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoContentsPathDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.path,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDelete
  /* Delete a Repository. Deleting a repository requires admin access. If OAuth is used, the delete_repo scope is required.  */
  reposOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoDownloadsDownloadIdDelete
  /* Deprecated. Delete a download. */
  reposOwnerRepoDownloadsDownloadIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of download.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let downloadId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoDownloadsDownloadIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.downloadId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefDelete
  /* Delete a Reference Example: Deleting a branch: DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a  Example: Deleting a tag:        DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0  */
  reposOwnerRepoGitRefsRefDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdDelete
  /* Delete a hook. */
  reposOwnerRepoHooksHookIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdDelete
  /* Delete a comment. */
  reposOwnerRepoIssuesCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsDelete
  /* Remove all labels from an issue. */
  reposOwnerRepoIssuesNumberLabelsDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberLabelsNameDelete
  /* Remove a label from an issue. */
  reposOwnerRepoIssuesNumberLabelsNameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // String | Name of the label.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let name = "name_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberLabelsNameDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoKeysKeyIdDelete
  /* Delete a key. */
  reposOwnerRepoKeysKeyIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of key.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let keyId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoKeysKeyIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNameDelete
  /* Delete a label. */
  reposOwnerRepoLabelsNameDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLabelsNameDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberDelete
  /* Delete a milestone. */
  reposOwnerRepoMilestonesNumberDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberDelete(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdDelete
  /* Delete a comment. */
  reposOwnerRepoPullsCommentsCommentIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdDelete
  /* Delete a release asset */
  reposOwnerRepoReleasesAssetsIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdDelete
  /* Users with push access to the repository can delete a release. */
  reposOwnerRepoReleasesIdDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesIdDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoSubscriptionDelete
  /* Delete a Repository Subscription. */
  reposOwnerRepoSubscriptionDelete(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoSubscriptionDelete(
      incomingOptions.owner,
      repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdDelete
  /* Delete team. In order to delete a team, the authenticated user must be an owner of the org that the team is associated with.  */
  teamsTeamIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team.
    /*let teamId = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdDelete(
      incomingOptions.teamId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembersUsernameDelete
  /* The \&quot;Remove team member\&quot; API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.  Remove team member. In order to remove a user from a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the org that the team is associated with. NOTE This does not delete the user, it just remove them from the team.  */
  teamsTeamIdMembersUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembersUsernameDelete(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdMembershipsUsernameDelete
  /* Remove team membership. In order to remove a membership between a user and a team, the authenticated user must have &#39;admin&#39; permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.  */
  teamsTeamIdMembershipsUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a member.
    /*let teamId = 56;*/ /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdMembershipsUsernameDelete(
      incomingOptions.teamId,
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdReposOwnerRepoDelete
  /* In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team. */
  teamsTeamIdReposOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // String | Name of a repository owner // String | Name of a repository.
    /*let teamId = 56;*/ /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'", // String | Is used to set specified media type
      perPage: 30, // Number | No of result showed per request.
      page: 1 // Number | Page number at which you want the search result to come from.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdReposOwnerRepoDelete(
      incomingOptions.teamId,
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userEmailsDelete
  /* Delete email address(es). You can include a single email address or an array of addresses.  */
  userEmailsDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // [String] |
    /*let body = ["null"];*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userEmailsDelete(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userFollowingUsernameDelete
  /* Unfollow a user. Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the user:follow scope.  */
  userFollowingUsernameDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of user.
    /*let username = "username_example";*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userFollowingUsernameDelete(
      incomingOptions.username,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userKeysKeyIdDelete
  /* Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope. */
  userKeysKeyIdDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | ID of key.
    /*let keyId = 56;*/ let opts = {
      accept: "'application/vnd.github.v3+json'" // String | Is used to set specified media type
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userKeysKeyIdDelete(
      incomingOptions.keyId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userStarredOwnerRepoDelete
  /* Unstar a repository */
  userStarredOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of a repository owner // String | Name of a repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userStarredOwnerRepoDelete(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for userSubscriptionsOwnerRepoDelete
  /* Stop watching a repository */
  userSubscriptionsOwnerRepoDelete(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of the owner // String | Name of repository.
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userSubscriptionsOwnerRepoDelete(
      incomingOptions.owner,
      incomingOptions.repo,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  async patch(entity, options) {
    switch (entity) {
      case "GISTS_ID_COMMENTS_COMMENT_ID":
        /*
      Edit a comment.
      Function parameters for this API id,commentId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdCommentsCommentIdPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GISTS_ID":
        /*
      Edit a gist.
      Function parameters for this API id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.gistsIdPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "NOTIFICATIONS_THREADS_ID":
        /*
      Mark a thread as read
      Function parameters for this API id,opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsThreadsIdPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ORGS_ORG":
        /*
      Edit an Organization.
      Function parameters for this API org,body,opts
        */
        return new Promise((resolve, reject) => {
          this.orgsOrgPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_COMMENTS_COMMENT_ID":
        /*
      Update a commit comment.
      Function parameters for this API owner,repo,commentId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoCommentsCommentIdPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_GIT_REFS_REF":
        /*
      Update a Reference
      Function parameters for this API owner,repo,ref,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoGitRefsRefPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_HOOKS_HOOK_ID":
        /*
      Edit a hook.
      Function parameters for this API owner,repo,hookId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoHooksHookIdPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_COMMENTS_COMMENT_ID":
        /*
      Edit a comment.
      Function parameters for this API owner,repo,commentId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesCommentsCommentIdPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_ISSUES_NUMBER":
        /*
      Edit an issue. Issue owners and users with push access can edit an issue.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoIssuesNumberPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_LABELS_NAME":
        /*
      Update a label.
      Function parameters for this API owner,repo,name,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoLabelsNamePatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_MILESTONES_NUMBER":
        /*
      Update a milestone.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoMilestonesNumberPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO":
        /*
      Edit repository.
      Function parameters for this API owner,repo,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOS_OWNER_REPO_PULLS_COMMENTS_COMMENT_ID":
        /*
      Edit a comment.
      Function parameters for this API owner,repo,commentId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsCommentsCommentIdPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_PULLS_NUMBER":
        /*
      Update a pull request.
      Function parameters for this API owner,repo,_number,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoPullsNumberPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ASSETS_ID":
        /*
      Edit a release asset Users with push access to the repository can edit a release asset.
      Function parameters for this API owner,repo,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesAssetsIdPatch(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOS_OWNER_REPO_RELEASES_ID":
        /*
      Users with push access to the repository can edit a release
      Function parameters for this API owner,repo,id,body,opts
        */
        return new Promise((resolve, reject) => {
          this.reposOwnerRepoReleasesIdPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_TEAM_ID":
        /*
      Edit team. In order to edit a team, the authenticated user must be an owner of the org that the team is associated with.
      Function parameters for this API teamId,body,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsTeamIdPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER":
        /*
      Update the authenticated user.
      Function parameters for this API body,opts
        */
        return new Promise((resolve, reject) => {
          this.userPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
  // This is a function for gistsIdCommentsCommentIdPatch
  /* Edit a comment. */
  gistsIdCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // Number | Id of comment // Comment |
    /*let id = 56;*/ /*let commentId = 56;*/ /*let body = new Github.Comment();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdCommentsCommentIdPatch(
      incomingOptions.id,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for gistsIdPatch
  /* Edit a gist. */
  gistsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of gist // PatchGist |
    /*let id = 56;*/ /*let body = new Github.PatchGist();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.gistsIdPatch(
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for notificationsThreadsIdPatch
  /* Mark a thread as read */
  notificationsThreadsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of thread.
    /*let id = 56;*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsThreadsIdPatch(
      incomingOptions.id,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for orgsOrgPatch
  /* Edit an Organization. */
  orgsOrgPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of organisation // PatchOrg |
    /*let org = "org_example";*/ /*let body = new Github.PatchOrg();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.orgsOrgPatch(
      org,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoCommentsCommentIdPatch
  /* Update a commit comment. */
  reposOwnerRepoCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoGitRefsRefPatch
  /* Update a Reference */
  reposOwnerRepoGitRefsRefPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // GitRefPatch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let ref = "ref_example";*/ /*let body = new Github.GitRefPatch();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoGitRefsRefPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.ref,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoHooksHookIdPatch
  /* Edit a hook. */
  reposOwnerRepoHooksHookIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of hook // HookBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let hookId = 56;*/ /*let body = new Github.HookBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoHooksHookIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.hookId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesCommentsCommentIdPatch
  /* Edit a comment. */
  reposOwnerRepoIssuesCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | ID of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoIssuesNumberPatch
  /* Edit an issue. Issue owners and users with push access can edit an issue.  */
  reposOwnerRepoIssuesNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of issue // Issue |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.Issue();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoIssuesNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoLabelsNamePatch
  /* Update a label. */
  reposOwnerRepoLabelsNamePatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | Name of the label // [String] |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let name = "name_example";*/ /*let body = ["null"];*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoLabelsNamePatch(
      incomingOptions.owner,
      repo,
      incomingOptions.name,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoMilestonesNumberPatch
  /* Update a milestone. */
  reposOwnerRepoMilestonesNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Number of milestone // MilestoneUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.MilestoneUpdate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoMilestonesNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPatch
  /* Edit repository. */
  reposOwnerRepoPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // RepoEdit |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let body = new Github.RepoEdit();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsCommentsCommentIdPatch
  /* Edit a comment. */
  reposOwnerRepoPullsCommentsCommentIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of comment // CommentBody |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let commentId = 56;*/ /*let body = new Github.CommentBody();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsCommentsCommentIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.commentId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoPullsNumberPatch
  /* Update a pull request. */
  reposOwnerRepoPullsNumberPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // Number | Id of pull // PullUpdate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let _number = 56;*/ /*let body = new Github.PullUpdate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoPullsNumberPatch(
      incomingOptions.owner,
      repo,
      incomingOptions._number,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesAssetsIdPatch
  /* Edit a release asset Users with push access to the repository can edit a release asset.  */
  reposOwnerRepoReleasesAssetsIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // AssetPatch |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let body = new Github.AssetPatch();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesAssetsIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for reposOwnerRepoReleasesIdPatch
  /* Users with push access to the repository can edit a release */
  reposOwnerRepoReleasesIdPatch(incomingOptions, cb) {
    const Github = require("./dist");

    let apiInstance = new Github.DefaultApi(); // String | Name of repository owner // String | Name of repository // String | // ReleaseCreate |
    /*let owner = "owner_example";*/ /*let repo = "repo_example";*/ /*let id = "id_example";*/ /*let body = new Github.ReleaseCreate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.incomingOptions.reposOwnerRepoReleasesIdPatch(
      incomingOptions.owner,
      repo,
      incomingOptions.id,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsTeamIdPatch
  /* Edit team. In order to edit a team, the authenticated user must be an owner of the org that the team is associated with.  */
  teamsTeamIdPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // Number | Id of team // EditTeam |
    /*let teamId = 56;*/ /*let body = new Github.EditTeam();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsTeamIdPatch(
      incomingOptions.teamId,
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userPatch
  /* Update the authenticated user. */
  userPatch(incomingOptions, cb) {
    const Github = require("./dist");
    let defaultClient = Github.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";

    let apiInstance = new Github.DefaultApi(); // UserUpdate |
    /*let body = new Github.UserUpdate();*/ let opts = {
      //  'accept': "accept_example" // String | Is used to set specified media type.
    };

    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.userPatch(
      incomingOptions.body,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }
}
module.exports = new GithubService();
