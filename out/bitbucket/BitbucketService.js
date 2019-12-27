const Axios = require("axios");
const ErrorHelper = require("../../../helpers/ErrorHelper");
const nconf = require("nconf");
const qs = require("querystring");

/* document_link : "https://developer.atlassian.com/cloud/bitbucket/oauth-2/",
 * rfc_link: "https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-1.3.1"
 * clone through OAUTH2 link : https://confluence.atlassian.com/bitbucket/oauth-on-bitbucket-cloud-238027431.html#OAuthonBitbucketCloud-Cloningarepositorywithanaccesstoken
 */

const SCOPES = [
  "issue:write",
  "repository",
  "pullrequest",
  "team",
  "webhook",
  "project",
  "account",
  "email"
];

class BitbucketService {
  get name() {
    return "BITBUCKET";
  }

  get description() {
    return `One place to plan projects, collaborate on code, test and deploy, all with free private repositories`;
  }

  get icon() {
    return "bitbucket.svg";
  }

  get category() {
    return;
  }

  get apiEndpoint() {
    return "https://api.bitbucket.org/2.0";
  }

  get authMethod() {
    return "OAUTH2";
  }

  get authEndpoint() {
    return (
      `https://bitbucket.org/site/oauth2/authorize?` +
      `client_id=${nconf.get("BITBUCKET_CLIENT_ID")}&` +
      `scope=${qs.escape(this.scopes.join(" "))}&` +
      `response_type=code`
    );
  }

  get apiTokenURL() {
    return;
  }

  get scopes() {
    return [...SCOPES];
  }

  get requiredAuthParams() {
    return ["code"];
  }

  get primaryAction() {
    return {
      type: "HREF",
      url: this.authEndpoint,
      requiredAuthParams: this.requiredAuthParams
    };
  }

  get webhooks() {
    return [
      // "project:updated",
      "pullrequest:created",
      "pullrequest:updated",
      "pullrequest:approved",
      "pullrequest:unapproved",
      "pullrequest:fulfilled",
      "pullrequest:rejected",
      "pullrequest:comment_created",
      "pullrequest:comment_updated",
      // "repo:updated"
      "issue:comment_created",
      "issue:created",
      "issue:updated",
      "repo:push"
    ];
  }

  get webhooksToTaskMap() {
    return [
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:created"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:updated"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:approved"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:unapproved"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:fulfilled"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:rejected"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:comment_created"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_PR",
        webhook: "pullrequest:comment_updated"
      },
      { name: "task.pepper.SYNC_BITBUCKET_COMMITS", webhook: "repo:push" },
      {
        name: "task.pepper.SYNC_BITBUCKET_TEAM_MEMBERS",
        webhook: "repo:push"
      },
      // { name: "", webhook: "repo:updated" },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_ISSUE",
        webhook: "issue:created"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_ISSUE",
        webhook: "issue:updated"
      },
      {
        name: "task.thirdParty.UPDATE_BITBUCKET_ISSUE",
        webhook: "issue:comment_created"
      }
    ];
  }

  get entities() {
    return [
      "PROJECTS",
      "REPOS",
      "MEMBERS",
      "TEAMS",
      // PRs- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/pullrequests
      // PR from ID- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/pullrequests/%7Bpull_request_id%7D
      "PULL_REQUESTS",
      // Comments for an PR- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/pullrequests/%7Bpull_request_id%7D/comments
      "PULL_REQUEST_COMMENTS",
      // Commit for an PR- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/pullrequests/%7Bpull_request_id%7D/commits
      "PULL_REQUEST_COMMITS",
      // Issues- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/issues
      // Issue from ID- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/issues/%7Bissue_id%7D
      "ISSUES",
      // Comments for an issue- https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Busername%7D/%7Brepo_slug%7D/issues/%7Bissue_id%7D/comments
      "ISSUE_COMMENTS"
    ];
  }

  async getAccessToken(integration) {
    /*
     * https://developer.atlassian.com/bitbucket/api/2/reference/meta/authentication
     */
    const res = await Axios.default.post(
      "https://bitbucket.org/site/oauth2/access_token",
      qs.stringify({
        grant_type: "refresh_token",
        refresh_token: integration.refreshToken
      }),
      {
        auth: {
          username: nconf.get("BITBUCKET_CLIENT_ID"),
          password: nconf.get("BITBUCKET_CLIENT_SECRET")
        }
      }
    );
    return {
      accessToken: res.data.access_token
    };
  }

  getNextPaginationURIFromResponse(response) {
    //TODO: Add custom getNextPaginationURIFromResponse functionality here
  }

  async connect(authParams) {
    /*
     * https://developer.atlassian.com/bitbucket/api/2/reference/meta/authentication
     */
    const authRes = await Axios.default.post(
      "https://bitbucket.org/site/oauth2/access_token",
      qs.stringify({
        grant_type: "authorization_code",
        code: authParams.code
      }),
      {
        auth: {
          username: nconf.get("BITBUCKET_CLIENT_ID"),
          password: nconf.get("BITBUCKET_CLIENT_SECRET")
        }
      }
    );
    const user = await this.get("USER", {
      accessToken: authRes.data.access_token
    });

    const teams = await await this.get("TEAMS", {
      accessToken: authRes.data.access_token,
      opts: { role: "contributor" }
    });
    const teamUsernames = teams.data.values.map(item => item.username);

    return {
      accessToken: authRes.data.access_token,
      refreshToken: authRes.data.refresh_token,
      integrationSpecificParams: {
        username: user.data.username,
        uuid: user.data.uuid,
        team: { usernames: teamUsernames }
      }
    };
  }

  async getThirdPartyProjects(incomingOptions) {
    const auth = await this.getAccessToken(
      options.integrationData.authRefreshToken
    );

    const teams = await Axios.default.get(
      `${this.apiEndpoint}/teams/?role=contributor`,
      {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      }
    );
    return teams.data.values;
  }

  async registerWebhooks(incomingOptions) {
    const webhookURL = `${nconf.get("WEBHOOK_API_URI")}/${options.userId}/${
      options.projectId
    }/BITBUCKET/${options.repoEndpoint}`;

    /*
           let uri = `${this.apiEndpoint}/repositories/${options.repoEndpoint}/hooks`;
          let webhooks = [];
          const auth = await this.getAccessToken(
            options.integrationData.authRefreshToken
          );
          try {
            while (uri) {
              const res = await Axios.default.get(uri, {
                headers: {
                  Authorization: `Bearer ${auth.accessToken}`
                }
              });
              webhooks.push(...res.data.values);
              uri = res.data.next;
            }
            return webhooks;
          } catch (error) {
            console.error(error.response || error);
            return webhooks;
          }
           */
    const data = await this.getWebhooksForARepo(options);
    const webhooks = data.filter(
      item =>
        item.url === webhookURL &&
        item.events.sort().toString() ===
          options.webhookEvents.sort().toString()
    );

    if (webhooks && webhooks.length > 0) return "Ok";

    const auth = await this.getAccessToken(
      options.integrationData.authRefreshToken
    );
    const res = await Axios.default.post(
      `${this.apiEndpoint}/repositories/${options.repoEndpoint}/hooks`,
      {
        description: "Webhook for Kloudi",
        url: webhookURL,
        active: true,
        events: options.webhookEvents
      },
      {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`
        }
      }
    );
    if (res.status == 201) return "Ok";
    return "ERROR";
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      //TODO: Add custom syncIntegrationEntities functionality here
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [
            "task.pepper.SYNC_BITBUCKET_TEAM_MEMBERS",
            "task.pepper.SYNC_BITBUCKET_PRS",
            "task.pepper.SYNC_BITBUCKET_COMMITS"
          ],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          repo_endpoint: `${options.owner}/${options.repo}`
        },
        {
          headers: {
            Authorization: authToken
          }
        }
      );
      return "Ok";
    } catch (error) {
      console.error(error.response);
      return "ERROR";
    }
  }

  async get(entity, options) {
    switch (entity) {
      case "REPOSITORIES_USERNAME_REPO_SLUG_SRC_NODE_PATH":
        /*

      Function parameters for this API username,node,path,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugSrcNodePathGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_REPOSITORIES":
        /*
      All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameRepositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_EMAILS_EMAIL":
        /*
      Returns details about a specific one of the authenticated user&#39;s email addresses.  Details describe whether the address has been confirmed by the user and whether it is the user&#39;s primary address or not.
      Function parameters for this API email
        */
        return new Promise((resolve, reject) => {
          this.userEmailsEmailGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER_EMAILS":
        /*
      Returns all the authenticated user&#39;s email addresses. Both confirmed and unconfirmed.
      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.userEmailsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USER":
        /*
      Returns the currently logged in user.
      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.userGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_FOLLOWERS":
        /*
      Returns the list of accounts that are following this team.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_FOLLOWING":
        /*
      Returns the list of accounts this user is following.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameFollowingGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME":
        /*
      Gets the public information associated with a user account.  If the user&#39;s profile is private, &#x60;location&#x60;, &#x60;website&#x60; and &#x60;created_on&#x60; elements are omitted.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this user account.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the given user account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_REPOSITORIES":
        /*
      All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameRepositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        /*
      Returns the specified build status for a commit.
      Function parameters for this API username,repoSlug,node,key
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES":
        /*
      Returns all statuses (e.g. build results) for a specific commit.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        /*
      Returns all statuses (e.g. build results) for the given pull request.
      Function parameters for this API username,repoSlug,pullRequestId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES":
        /*
      Returns a paginated list of all public repositories.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../meta/filtering) for more details.
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

      case "REPOSITORIES_USERNAME":
        /*
      Returns a paginated list of all repositories owned by the specified account or UUID.  The result can be narrowed down based on the authenticated user&#39;s role.  E.g. with &#x60;?role&#x3D;contributor&#x60;, only those repositories that the authenticated user has write access to are returned (this includes any repo the user is an admin on, as that implies write access).  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../meta/filtering) for more details.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        /*
      Returns the specified build status for a commit.
      Function parameters for this API username,repoSlug,node,key
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES":
        /*
      Returns all statuses (e.g. build results) for a specific commit.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_FORKS":
        /*
      Returns a paginated list of all the forks of the specified repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugForksGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG":
        /*
      Returns the object describing this repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the specified repository.
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        /*
      Returns all statuses (e.g. build results) for the given pull request.
      Function parameters for this API username,repoSlug,pullRequestId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_SRC_NODE_PATH":
        /*

      Function parameters for this API username,node,path,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugSrcNodePathGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_WATCHERS":
        /*
      Returns a paginated list of all the watchers on the specified repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugWatchersGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON_LINKERS":
        /*

      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ADDON_LINKERS_LINKER_KEY":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES_GE":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesGet_0(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GET_PIPELINE_FOR_REPOSIT":
        /*
      Retrieve a specified pipeline
      Function parameters for this API username,repoSlug,pipelineUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineForRepository(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_STEP_FOR_REPOSIT":
        /*
      Retrieve a given step of a pipeline.
      Function parameters for this API username,repoSlug,pipelineUuid,stepUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineStepForRepository(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_STEP_LOG_FOR_REPOSIT":
        /*
      Retrieve the log file for a given step of a pipeline.  This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
      Function parameters for this API username,repoSlug,pipelineUuid,stepUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineStepLogForRepository(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GET_PIPELINE_STEPS_FOR_REPOSIT":
        /*
      Find steps for the given pipeline.
      Function parameters for this API username,repoSlug,pipelineUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineStepsForRepository(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_VARIABLE_FOR_T":
        /*
      Retrieve a team level variable.
      Function parameters for this API username,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineVariableForTeam(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_VARIABLE_FOR_U":
        /*
      Retrieve a user level variable.
      Function parameters for this API username,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.getPipelineVariableForUser(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_VARIABLES_FOR_T":
        /*
      Find account level variables.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.getPipelineVariablesForTeam(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINE_VARIABLES_FOR_U":
        /*
      Find user level variables.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.getPipelineVariablesForUser(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_PIPELINES_FOR_REPOSIT":
        /*
      Find pipelines
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.getPipelinesForRepository(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_REPOSITORY_PIPELINE_CON":
        /*
      Retrieve the repository pipelines configuration.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineConfig(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_REPOSITORY_PIPELINE_KNOWN_H":
        /*
      Retrieve a repository level known host.
      Function parameters for this API username,repoSlug,knownHostUuid
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineKnownHost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GET_REPOSITORY_PIPELINE_KNOWN_HO":
        /*
      Find repository level known hosts.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineKnownHosts(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GET_REPOSITORY_PIPELINE_SSH_KEY_P":
        /*
      Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineSshKeyPair(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "GET_REPOSITORY_PIPELINE_VARIA":
        /*
      Retrieve a repository level variable.
      Function parameters for this API username,repoSlug,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineVariable(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "GET_REPOSITORY_PIPELINE_VARIAB":
        /*
      Find repository level variables.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.getRepositoryPipelineVariables(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMPONENTS_COMPONENT_ID":
        /*
      Returns the specified issue tracker component object.
      Function parameters for this API username,repoSlug,componentId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugComponentsComponentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMPONENTS":
        /*
      Returns the components that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugComponentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES":
        /*
      Returns the issues in the issue tracker.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS":
        /*
      Returns all attachments for this issue.  This returns the files&#39; meta data. This does not return the files&#39; actual contents.  The files are always ordered by their upload date.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS_PATH":
        /*
      Returns the contents of the specified file attachment.  Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents.  The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared.
      Function parameters for this API username,path,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_COMMENTS_COMMENT_ID":
        /*
      Returns the specified issue comment object.
      Function parameters for this API username,commentId,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_COMMENTS":
        /*
      Returns all comments that were made on the specified issue.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.
      Function parameters for this API username,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID":
        /*
      Returns the specified issue.
      Function parameters for this API username,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        /*
      Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven&#39;t.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        /*
      Indicated whether or not the authenticated user is watching this issue.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_MILESTONES":
        /*
      Returns the milestones that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugMilestonesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_MILESTONES_MILESTONE_ID":
        /*
      Returns the specified issue tracker milestone object.
      Function parameters for this API username,repoSlug,milestoneId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_VERSIONS":
        /*
      Returns the versions that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugVersionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_VERSIONS_VERSION_ID":
        /*
      Returns the specified issue tracker version object.
      Function parameters for this API username,repoSlug,versionId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugVersionsVersionIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS":
        /*
      Returns a paginated list of all branch restrictions on the repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugBranchRestrictionsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        /*
      Returns a specific branch restriction rule.
      Function parameters for this API username,repoSlug,id
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugBranchRestrictionsIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS":
        /*
      Returns all the teams that the authenticated user is associated with.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.teamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_FOLLOWERS":
        /*
      Returns the list of accounts that are following this team.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameFollowersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_FOLLOWING":
        /*
      Returns the list of accounts this team is following.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameFollowingGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME":
        /*
      Gets the public information associated with a team.  If the team&#39;s profile is private, &#x60;location&#x60;, &#x60;website&#x60; and &#x60;created_on&#x60; elements are omitted.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this team.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the given team account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_MEMBERS":
        /*
      All members of a team.  Returns all members of the specified team. Any member of any of the team&#39;s groups is considered a member of the team. This includes users in groups that may not actually have access to any of the team&#39;s repositories.  Note that members using the \&quot;private profile\&quot; feature are not included.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameMembersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_REPOSITORIES":
        /*
      All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameRepositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_REPOSITORIES":
        /*
      All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameRepositoriesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS":
        /*
      Returns all snippets. Like pull requests, repositories and teams, the full set of snippets is defined by what the current user has access to.  This includes all snippets owned by the current user, but also all snippets owned by any of the teams the user is a member of, or snippets by other users that the current user is either watching or has collaborated on (for instance by commenting on it).  To limit the set of returned snippets, apply the &#x60;?role&#x3D;[owner|contributor|member]&#x60; query parameter where the roles are defined as follows:  * &#x60;owner&#x60;: all snippets owned by the current user * &#x60;contributor&#x60;: all snippets owned by, or watched by the current user * &#x60;member&#x60;: owned by the user, their teams, or watched by the current user  When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or commented on.  The returned response is a normal paginated JSON list. This endpoint only supports &#x60;application/json&#x60; responses and no &#x60;multipart/form-data&#x60; or &#x60;multipart/related&#x60;. As a result, it is not possible to include the file contents.
      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.snippetsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        /*
      Returns the specific snippet comment.
      Function parameters for this API username,commentId,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS":
        /*
      Used to retrieve a paginated list of all comments for a specific snippet.  This resource works identical to commit and pull request comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMITS":
        /*
      Returns the changes (commits) made on this snippet.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommitsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMITS_REVISION":
        /*

      Function parameters for this API username,encodedId,revision
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommitsRevisionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID":
        /*
      Retrieves a single snippet.  Snippets support multiple content types:  * application/json * multipart/related * multipart/form-data   application/json ----------------  The default content type of the response is &#x60;application/json&#x60;. Since JSON is always &#x60;utf-8&#x60;, it cannot reliably contain file contents for files that are not text. Therefore, JSON snippet documents only contain the filename and links to the file contents.  This means that in order to retrieve all parts of a snippet, N+1 requests need to be made (where N is the number of files in the snippet).   multipart/related -----------------  To retrieve an entire snippet in a single response, use the &#x60;Accept: multipart/related&#x60; HTTP request header.      $ curl -H \&quot;Accept: multipart/related\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/1  Response:      HTTP/1.1 200 OK     Content-Length: 2214     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj\&quot;         },         \&quot;comments\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments\&quot;         },         \&quot;watchers\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers\&quot;         },         \&quot;commits\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits\&quot;         }       },       \&quot;id\&quot;: kypj,       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;created_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;updated_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;is_private\&quot;: false,       \&quot;files\&quot;: {         \&quot;foo.txt\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt\&quot;             }           }         },         \&quot;image.png\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-image.png\&quot;             }           }         }       ],       \&quot;owner\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       },       \&quot;creator\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  multipart/form-data -------------------  As with creating new snippets, &#x60;multipart/form-data&#x60; can be used as an alternative to &#x60;multipart/related&#x60;. However, the inherently flat structure of form-data means that only basic, root-level properties can be returned, while nested elements like &#x60;links&#x60; are omitted:      $ curl -H \&quot;Accept: multipart/form-data\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj  Response:      HTTP/1.1 200 OK     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;     Content-Type: text/plain; charset&#x3D;\&quot;utf-8\&quot;      My snippet     ------------------------------63a4b224c59f--     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Transfer-Encoding: base64     Content-Type: application/octet-stream      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     ------------------------------5957323a6b76--
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID_FILES_PATH":
        /*
      Retrieves the raw contents of a specific file in the snippet. The &#x60;Content-Disposition&#x60; header will be \&quot;attachment\&quot; to avoid issues with malevolent executable files.  The file&#39;s mime type is derived from its filename and returned in the &#x60;Content-Type&#x60; header.  Note that for text files, no character encoding is included as part of the content type.
      Function parameters for this API username,path,nodeId,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdNodeIdFilesPathGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        /*
      Identical to &#x60;GET /snippets/encoded_id&#x60;, except that this endpoint can be used to retrieve the contents of the snippet as it was at an older revision, while &#x60;/snippets/encoded_id&#x60; always returns the snippet&#39;s current revision.  Note that only the snippet&#39;s file contents are versioned, not its meta data properties like the title.  Other than that, the two endpoints are identical in behavior.
      Function parameters for this API username,encodedId,nodeId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdNodeIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_REVISION_DIFF":
        /*
      Returns the diff of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;patch&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the diff is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.
      Function parameters for this API username,encodedId,revision,opts
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdRevisionDiffGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_REVISION_PATCH":
        /*
      Returns the patch of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;diff&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the patch is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this.
      Function parameters for this API username,encodedId,revision
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdRevisionPatchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        /*
      Used to check if the current user is watching a specific snippet.  Returns 204 (No Content) if the user is watching the snippet and 404 if not.  Hitting this endpoint anonymously always returns a 404.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdWatchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_WATCHERS":
        /*
      Returns a paginated list of all users watching a specific snippet.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdWatchersGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME":
        /*
      Identical to &#x60;/snippets&#x60;, except that the result is further filtered by the snippet owner and only those that are owned by &#x60;{username}&#x60; are returned.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS":
        /*
      Returns the repository&#39;s default reviewers.  These are the users that are automatically added as reviewers on every new pull request that is created.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDefaultReviewersGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        /*
      Returns the specified reviewer.  This can be used to test whether a user is among the repository&#39;s default reviewers list. A 404 indicates that that specified user is not a default reviewer.
      Function parameters for this API username,targetUsername,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_ACTIVITY":
        /*
      Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsActivityGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS":
        /*
      Returns a paginated list of all pull requests on the specified repository. By default only open pull requests are returned. This can be controlled using the &#x60;state&#x60; query parameter. To retrieve pull requests that are in one of multiple states, repeat the &#x60;state&#x60; parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details.
      Function parameters for this API username,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_ACTIVITY":
        /*
      Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals.
      Function parameters for this API username,repoSlug,pullRequestId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMENTS_COMMENT_ID":
        /*
      Returns a specific pull request comment.
      Function parameters for this API username,pullRequestId,commentId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMENTS":
        /*
      Returns a paginated list of the pull request&#39;s comments.  This includes both global, inline comments and replies.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details.
      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_COMMITS":
        /*
      Returns a paginated list of the pull request&#39;s commits.  These are the commits that are being merged into the destination branch when the pull requests gets accepted.
      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_DIFF":
        /*

      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID":
        /*
      Returns the specified pull request.
      Function parameters for this API username,repoSlug,pullRequestId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_PATCH":
        /*

      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_STATUSES":
        /*
      Returns all statuses (e.g. build results) for the given pull request.
      Function parameters for this API username,repoSlug,pullRequestId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS_FILENAME":
        /*
      Return a redirect to the contents of a download artifact.  This endpoint returns the actual file contents and not the artifact&#39;s metadata.      $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt     Hello World
      Function parameters for this API username,filename,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDownloadsFilenameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS":
        /*
      Returns a list of download links associated with the repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDownloadsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_REVISION":
        /*
      Returns the specified commit.
      Function parameters for this API username,repoSlug,revision
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitRevisionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_SHA_COMMENTS_COMMENT_ID":
        /*
      Returns the specified commit comment.
      Function parameters for this API username,sha,commentId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_SHA_COMMENTS":
        /*
      Returns the commit&#39;s comments.  This includes both global and inline comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.
      Function parameters for this API username,sha,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitShaCommentsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS":
        /*
      These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS_REVISION":
        /*
      These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead.
      Function parameters for this API username,revision,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitsRevisionGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DIFF_SPEC":
        /*
      Produces a raw, git-style diff for either a single commit (diffed against its first parent), or a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a 3-way diff, or merge diff, is computed. This shows the changes introduced by the left branch (&#x60;3a8b42&#x60; in our example) as compared againt the right branch (&#x60;9ff173&#x60;).  This is equivalent to merging the left branch into the right branch and then computing the diff of the merge commit against its first parent (the right branch). This follows the same behavior as pull requests that also show this style of 3-way, or merge diff.  While similar to patches, diffs:  * Don&#39;t have a commit header (username, commit message, etc) * Support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter   the diff to just that one file diff  The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;.
      Function parameters for this API username,spec,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDiffSpecGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PATCH_SPEC":
        /*
      Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (&#x60;3a8b42&#x60; and its ancestors in our example). For Mercurial, a single patch is returned that combines the changes of all commits on the source branch.  While similar to diffs, patches:  * Have a commit header (username, commit message, etc) * Do not support the &#x60;path&#x3D;foo/bar.py&#x60; query parameter  The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;.
      Function parameters for this API username,spec,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPatchSpecGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "HOOK_EVENTS":
        /*
      Returns the webhook resource or subject types on which webhooks can be registered.  Each resource/subject type contains an &#x60;events&#x60; link that returns the paginated list of specific events each individual subject type can emit.  This endpoint is publicly accessible and does not require authentication or scopes.  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/hook_events  {     \&quot;repository\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/repository\&quot;             }         }     },     \&quot;team\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/team\&quot;             }         }     },     \&quot;user\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/user\&quot;             }         }     } } &#x60;&#x60;&#x60;
      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.hookEventsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "HOOK_EVENTS_SUBJECT_TYPE":
        /*
      Returns a paginated list of all valid webhook events for the specified entity.  This is public data that does not require any scopes or authentication.  Example:  NOTE: The following example is a truncated response object for the &#x60;team&#x60; &#x60;subject_type&#x60;. We return the same structure for the other &#x60;subject_type&#x60; objects.  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/hook_events/team {     \&quot;page\&quot;: 1,     \&quot;pagelen\&quot;: 30,     \&quot;size\&quot;: 21,     \&quot;values\&quot;: [         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository push occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:push\&quot;,             \&quot;label\&quot;: \&quot;Push\&quot;         },         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository fork occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:fork\&quot;,             \&quot;label\&quot;: \&quot;Fork\&quot;         },         ...         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository import occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:imported\&quot;,             \&quot;label\&quot;: \&quot;Import\&quot;         }     ] } &#x60;&#x60;&#x60;
      Function parameters for this API subjectType
        */
        return new Promise((resolve, reject) => {
          this.hookEventsSubjectTypeGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this repository.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the specified repository.
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this team.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the given team account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS":
        /*
      Returns a paginated list of webhooks installed on this user account.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS_UID":
        /*
      Returns the webhook with the specified id installed on the given user account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_OWNER_PROJECTS":
        /*

      Function parameters for this API owner
        */
        return new Promise((resolve, reject) => {
          this.teamsOwnerProjectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        /*

      Function parameters for this API owner,projectKey
        */
        return new Promise((resolve, reject) => {
          this.teamsOwnerProjectsProjectKeyGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_BRANCHES":
        /*

      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsBranchesGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_BRANCHES_NAME":
        /*

      Function parameters for this API username,name,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsBranchesNameGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS":
        /*

      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS":
        /*

      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsTagsGet(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS_NAME":
        /*

      Function parameters for this API username,name,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsTagsNameGet(
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
  // This is a function for repositoriesUsernameRepoSlugSrcNodePathGet
  /*  */
  repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SourceApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let node = "node_example";*/ /*let path = "path_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      //  'format': "format_example" // String | Instead of returning the file's contents, return the (json) meta data for it.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugSrcNodePathGet(
      incomingOptions.username,
      incomingOptions.node,
      incomingOptions.path,
      incomingOptions.repoSlug,
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

  // This is a function for teamsUsernameRepositoriesGet
  /* All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to. */
  teamsUsernameRepositoriesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameRepositoriesGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userEmailsEmailGet
  /* Returns details about a specific one of the authenticated user&#39;s email addresses.  Details describe whether the address has been confirmed by the user and whether it is the user&#39;s primary address or not. */
  userEmailsEmailGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String |
    /*let email = "email_example";*/ apiInstance.userEmailsEmailGet(
      incomingOptions.email,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for userEmailsGet
  /* Returns all the authenticated user&#39;s email addresses. Both confirmed and unconfirmed. */
  userEmailsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi();
    apiInstance.userEmailsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userGet
  /* Returns the currently logged in user. */
  userGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi();
    apiInstance.userGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for usersUsernameFollowersGet
  /* Returns the list of accounts that are following this team. */
  usersUsernameFollowersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | The account's username
    /*let username = "username_example";*/ apiInstance.usersUsernameFollowersGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameFollowingGet
  /* Returns the list of accounts this user is following. */
  usersUsernameFollowingGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | The user's username
    /*let username = "username_example";*/ apiInstance.usersUsernameFollowingGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameGet
  /* Gets the public information associated with a user account.  If the user&#39;s profile is private, &#x60;location&#x60;, &#x60;website&#x60; and &#x60;created_on&#x60; elements are omitted. */
  usersUsernameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | The account's username or UUID.
    /*let username = "username_example";*/ apiInstance.usersUsernameGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksGet
  /* Returns a paginated list of webhooks installed on this user account. */
  usersUsernameHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameHooksGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksUidGet
  /* Returns the webhook with the specified id installed on the given user account. */
  usersUsernameHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidGet(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameRepositoriesGet
  /* All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to. */
  usersUsernameRepositoriesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameRepositoriesGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet
  /* Returns the specified build status for a commit. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitstatusesApi(); // String | // String | // String | The commit's SHA // String | The build status' unique key
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ /*let key = "key_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      incomingOptions.key,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesGet
  /* Returns all statuses (e.g. build results) for a specific commit. */
  repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitstatusesApi(); // String | // String | // String | The commit's SHA1
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
  /* Returns all statuses (e.g. build results) for the given pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitstatusesApi(); // String | // String | // Number | The pull request's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
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
  /* Returns a paginated list of all public repositories.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../meta/filtering) for more details. */
  repositoriesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi();
    let opts = {
      //  'after': "after_example" // String | Filter the results to include only repositories create on or after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)  timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
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

  // This is a function for repositoriesUsernameGet
  /* Returns a paginated list of all repositories owned by the specified account or UUID.  The result can be narrowed down based on the authenticated user&#39;s role.  E.g. with &#x60;?role&#x3D;contributor&#x60;, only those repositories that the authenticated user has write access to are returned (this includes any repo the user is an admin on, as that implies write access).  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../meta/filtering) for more details. */
  repositoriesUsernameGet(incomingOptions, cb) {
    const Bitbucket = require("./src");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`.
    /*let username = "username_example";*/ let opts = {
      //  'role': "role_example" // String |  Filters the result based on the authenticated user's role on each repository.  * **member**: returns repositories to which the user has explicit read access * **contributor**: returns repositories to which the user has explicit write access * **admin**: returns repositories to which the user has explicit administrator access * **owner**: returns all repositories owned by the current user
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameGet(
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

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet
  /* Returns the specified build status for a commit. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The commit's SHA // String | The build status' unique key
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ /*let key = "key_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      incomingOptions.key,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesGet
  /* Returns all statuses (e.g. build results) for a specific commit. */
  repositoriesUsernameRepoSlugCommitNodeStatusesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The commit's SHA1
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugForksGet
  /* Returns a paginated list of all the forks of the specified repository. */
  repositoriesUsernameRepoSlugForksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugForksGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugGet
  /* Returns the object describing this repository. */
  repositoriesUsernameRepoSlugGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksGet
  /* Returns a paginated list of webhooks installed on this repository. */
  repositoriesUsernameRepoSlugHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksUidGet
  /* Returns the webhook with the specified id installed on the specified repository. */
  repositoriesUsernameRepoSlugHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
  /* Returns all statuses (e.g. build results) for the given pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // Number | The pull request's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugSrcNodePathGet
  /*  */
  repositoriesUsernameRepoSlugSrcNodePathGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let node = "node_example";*/ /*let path = "path_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      //  'format': "format_example" // String | Instead of returning the file's contents, return the (json) meta data for it.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugSrcNodePathGet(
      incomingOptions.username,
      incomingOptions.node,
      incomingOptions.path,
      incomingOptions.repoSlug,
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

  // This is a function for repositoriesUsernameRepoSlugWatchersGet
  /* Returns a paginated list of all the watchers on the specified repository. */
  repositoriesUsernameRepoSlugWatchersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugWatchersGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for addonLinkersGet
  /*  */
  addonLinkersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi();
    apiInstance.addonLinkersGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for addonLinkersLinkerKeyGet
  /*  */
  addonLinkersLinkerKeyGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyGet(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for addonLinkersLinkerKeyValuesGet
  /*  */
  addonLinkersLinkerKeyValuesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesGet(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for addonLinkersLinkerKeyValuesGet_0
  /*  */
  addonLinkersLinkerKeyValuesGet_0(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesGet_0(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineForRepository
  /* Retrieve a specified pipeline */
  getPipelineForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The pipeline UUID.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pipelineUuid = "pipelineUuid_example";*/ apiInstance.getPipelineForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pipelineUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineStepForRepository
  /* Retrieve a given step of a pipeline. */
  getPipelineStepForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the pipeline // String | The UUID of the step.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pipelineUuid = "pipelineUuid_example";*/ /*let stepUuid = "stepUuid_example";*/ apiInstance.getPipelineStepForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pipelineUuid,
      incomingOptions.stepUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineStepLogForRepository
  /* Retrieve the log file for a given step of a pipeline.  This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files. */
  getPipelineStepLogForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the pipeline // String | The UUID of the step.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pipelineUuid = "pipelineUuid_example";*/ /*let stepUuid = "stepUuid_example";*/ apiInstance.getPipelineStepLogForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pipelineUuid,
      incomingOptions.stepUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for getPipelineStepsForRepository
  /* Find steps for the given pipeline. */
  getPipelineStepsForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the pipeline.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pipelineUuid = "pipelineUuid_example";*/ apiInstance.getPipelineStepsForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pipelineUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineVariableForTeam
  /* Retrieve a team level variable. */
  getPipelineVariableForTeam(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable to retrieve.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.getPipelineVariableForTeam(
      incomingOptions.username,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineVariableForUser
  /* Retrieve a user level variable. */
  getPipelineVariableForUser(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable to retrieve.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.getPipelineVariableForUser(
      incomingOptions.username,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineVariablesForTeam
  /* Find account level variables. */
  getPipelineVariablesForTeam(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account.
    /*let username = "username_example";*/ apiInstance.getPipelineVariablesForTeam(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelineVariablesForUser
  /* Find user level variables. */
  getPipelineVariablesForUser(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account.
    /*let username = "username_example";*/ apiInstance.getPipelineVariablesForUser(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getPipelinesForRepository
  /* Find pipelines */
  getPipelinesForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.getPipelinesForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineConfig
  /* Retrieve the repository pipelines configuration. */
  getRepositoryPipelineConfig(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.getRepositoryPipelineConfig(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineKnownHost
  /* Retrieve a repository level known host. */
  getRepositoryPipelineKnownHost(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the known host to retrieve.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let knownHostUuid = "knownHostUuid_example";*/ apiInstance.getRepositoryPipelineKnownHost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.knownHostUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineKnownHosts
  /* Find repository level known hosts. */
  getRepositoryPipelineKnownHosts(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.getRepositoryPipelineKnownHosts(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineSshKeyPair
  /* Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API. */
  getRepositoryPipelineSshKeyPair(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.getRepositoryPipelineSshKeyPair(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineVariable
  /* Retrieve a repository level variable. */
  getRepositoryPipelineVariable(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the variable to retrieve.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.getRepositoryPipelineVariable(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for getRepositoryPipelineVariables
  /* Find repository level variables. */
  getRepositoryPipelineVariables(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.getRepositoryPipelineVariables(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugComponentsComponentIdGet
  /* Returns the specified issue tracker component object. */
  repositoriesUsernameRepoSlugComponentsComponentIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The component's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let componentId = 56;*/ apiInstance.repositoriesUsernameRepoSlugComponentsComponentIdGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.componentId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugComponentsGet
  /* Returns the components that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled. */
  repositoriesUsernameRepoSlugComponentsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugComponentsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesGet
  /* Returns the issues in the issue tracker. */
  repositoriesUsernameRepoSlugIssuesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet
  /* Returns all attachments for this issue.  This returns the files&#39; meta data. This does not return the files&#39; actual contents.  The files are always ordered by their upload date. */
  repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet
  /* Returns the contents of the specified file attachment.  Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents.  The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared. */
  repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let path = "path_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(
      incomingOptions.username,
      incomingOptions.path,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet
  /* Returns the specified issue comment object. */
  repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let commentId = "commentId_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(
      incomingOptions.username,
      incomingOptions.commentId,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet
  /* Returns all comments that were made on the specified issue.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter. */
  repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(
      incomingOptions.username,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdGet
  /* Returns the specified issue. */
  repositoriesUsernameRepoSlugIssuesIssueIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdGet(
      incomingOptions.username,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVoteGet
  /* Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven&#39;t. */
  repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchGet
  /* Indicated whether or not the authenticated user is watching this issue. */
  repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugMilestonesGet
  /* Returns the milestones that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled. */
  repositoriesUsernameRepoSlugMilestonesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugMilestonesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugMilestonesMilestoneIdGet
  /* Returns the specified issue tracker milestone object. */
  repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The milestone's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let milestoneId = 56;*/ apiInstance.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.milestoneId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugVersionsGet
  /* Returns the versions that have been defined in the issue tracker.  This resource is only available on repositories that have the issue tracker enabled. */
  repositoriesUsernameRepoSlugVersionsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugVersionsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugVersionsVersionIdGet
  /* Returns the specified issue tracker version object. */
  repositoriesUsernameRepoSlugVersionsVersionIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The version's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let versionId = 56;*/ apiInstance.repositoriesUsernameRepoSlugVersionsVersionIdGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.versionId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsGet
  /* Returns a paginated list of all branch restrictions on the repository. */
  repositoriesUsernameRepoSlugBranchRestrictionsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.BranchrestrictionsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdGet
  /* Returns a specific branch restriction rule. */
  repositoriesUsernameRepoSlugBranchRestrictionsIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.BranchrestrictionsApi(); // String | // String | // String | The restriction rule's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let id = "id_example";*/ apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsGet
  /* Returns all the teams that the authenticated user is associated with. */
  teamsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi();
    let opts = {
      //  'role': "role_example" // String |  Filters the teams based on the authenticated user's role on each team.  * **member**: returns a list of all the teams which the caller is a member of   at least one team group or repository owned by the team * **contributor**: returns a list of teams which the caller has write access   to at least one repository owned by the team * **admin**: returns a list teams which the caller has team administrator access
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamsUsernameFollowersGet
  /* Returns the list of accounts that are following this team. */
  teamsUsernameFollowersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | The team's username
    /*let username = "username_example";*/ apiInstance.teamsUsernameFollowersGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameFollowingGet
  /* Returns the list of accounts this team is following. */
  teamsUsernameFollowingGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | The team's username
    /*let username = "username_example";*/ apiInstance.teamsUsernameFollowingGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameGet
  /* Gets the public information associated with a team.  If the team&#39;s profile is private, &#x60;location&#x60;, &#x60;website&#x60; and &#x60;created_on&#x60; elements are omitted. */
  teamsUsernameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | The team's username or UUID.
    /*let username = "username_example";*/ apiInstance.teamsUsernameGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksGet
  /* Returns a paginated list of webhooks installed on this team. */
  teamsUsernameHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameHooksGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidGet
  /* Returns the webhook with the specified id installed on the given team account. */
  teamsUsernameHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidGet(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameMembersGet
  /* All members of a team.  Returns all members of the specified team. Any member of any of the team&#39;s groups is considered a member of the team. This includes users in groups that may not actually have access to any of the team&#39;s repositories.  Note that members using the \&quot;private profile\&quot; feature are not included. */
  teamsUsernameMembersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameMembersGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameRepositoriesGet
  /* All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to. */
  teamsUsernameRepositoriesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameRepositoriesGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameRepositoriesGet
  /* All repositories owned by a user/team. This includes private repositories, but filtered down to the ones that the calling user has access to. */
  usersUsernameRepositoriesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameRepositoriesGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsGet
  /* Returns all snippets. Like pull requests, repositories and teams, the full set of snippets is defined by what the current user has access to.  This includes all snippets owned by the current user, but also all snippets owned by any of the teams the user is a member of, or snippets by other users that the current user is either watching or has collaborated on (for instance by commenting on it).  To limit the set of returned snippets, apply the &#x60;?role&#x3D;[owner|contributor|member]&#x60; query parameter where the roles are defined as follows:  * &#x60;owner&#x60;: all snippets owned by the current user * &#x60;contributor&#x60;: all snippets owned by, or watched by the current user * &#x60;member&#x60;: owned by the user, their teams, or watched by the current user  When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or commented on.  The returned response is a normal paginated JSON list. This endpoint only supports &#x60;application/json&#x60; responses and no &#x60;multipart/form-data&#x60; or &#x60;multipart/related&#x60;. As a result, it is not possible to include the file contents. */
  snippetsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi();
    let opts = {
      //  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.snippetsGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for snippetsUsernameEncodedIdCommentsCommentIdGet
  /* Returns the specific snippet comment. */
  snippetsUsernameEncodedIdCommentsCommentIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let commentId = "commentId_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdCommentsCommentIdGet(
      incomingOptions.username,
      incomingOptions.commentId,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommentsGet
  /* Used to retrieve a paginated list of all comments for a specific snippet.  This resource works identical to commit and pull request comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter. */
  snippetsUsernameEncodedIdCommentsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String |
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdCommentsGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommitsGet
  /* Returns the changes (commits) made on this snippet. */
  snippetsUsernameEncodedIdCommitsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String |
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdCommitsGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommitsRevisionGet
  /*  */
  snippetsUsernameEncodedIdCommitsRevisionGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let revision = "revision_example";*/ apiInstance.snippetsUsernameEncodedIdCommitsRevisionGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.revision,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdGet
  /* Retrieves a single snippet.  Snippets support multiple content types:  * application/json * multipart/related * multipart/form-data   application/json ----------------  The default content type of the response is &#x60;application/json&#x60;. Since JSON is always &#x60;utf-8&#x60;, it cannot reliably contain file contents for files that are not text. Therefore, JSON snippet documents only contain the filename and links to the file contents.  This means that in order to retrieve all parts of a snippet, N+1 requests need to be made (where N is the number of files in the snippet).   multipart/related -----------------  To retrieve an entire snippet in a single response, use the &#x60;Accept: multipart/related&#x60; HTTP request header.      $ curl -H \&quot;Accept: multipart/related\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/1  Response:      HTTP/1.1 200 OK     Content-Length: 2214     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;links\&quot;: {         \&quot;self\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj\&quot;         },         \&quot;html\&quot;: {           \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj\&quot;         },         \&quot;comments\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments\&quot;         },         \&quot;watchers\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers\&quot;         },         \&quot;commits\&quot;: {           \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits\&quot;         }       },       \&quot;id\&quot;: kypj,       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;created_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;updated_on\&quot;: \&quot;2014-12-29T22:22:04.790331+00:00\&quot;,       \&quot;is_private\&quot;: false,       \&quot;files\&quot;: {         \&quot;foo.txt\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt\&quot;             }           }         },         \&quot;image.png\&quot;: {           \&quot;links\&quot;: {             \&quot;self\&quot;: {               \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png\&quot;             },             \&quot;html\&quot;: {               \&quot;href\&quot;: \&quot;https://bitbucket.org/snippets/evzijst/kypj#file-image.png\&quot;             }           }         }       ],       \&quot;owner\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       },       \&quot;creator\&quot;: {         \&quot;username\&quot;: \&quot;evzijst\&quot;,         \&quot;display_name\&quot;: \&quot;Erik van Zijst\&quot;,         \&quot;uuid\&quot;: \&quot;{d301aafa-d676-4ee0-88be-962be7417567}\&quot;,         \&quot;links\&quot;: {           \&quot;self\&quot;: {             \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/users/evzijst\&quot;           },           \&quot;html\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket.org/evzijst\&quot;           },           \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\&quot;           }         }       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  multipart/form-data -------------------  As with creating new snippets, &#x60;multipart/form-data&#x60; can be used as an alternative to &#x60;multipart/related&#x60;. However, the inherently flat structure of form-data means that only basic, root-level properties can be returned, while nested elements like &#x60;links&#x60; are omitted:      $ curl -H \&quot;Accept: multipart/form-data\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj  Response:      HTTP/1.1 200 OK     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;     Content-Type: text/plain; charset&#x3D;\&quot;utf-8\&quot;      My snippet     ------------------------------63a4b224c59f--     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: attachment; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Transfer-Encoding: base64     Content-Type: application/octet-stream      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     ------------------------------5957323a6b76-- */
  snippetsUsernameEncodedIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet's id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdNodeIdFilesPathGet
  /* Retrieves the raw contents of a specific file in the snippet. The &#x60;Content-Disposition&#x60; header will be \&quot;attachment\&quot; to avoid issues with malevolent executable files.  The file&#39;s mime type is derived from its filename and returned in the &#x60;Content-Type&#x60; header.  Note that for text files, no character encoding is included as part of the content type. */
  snippetsUsernameEncodedIdNodeIdFilesPathGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let path = "path_example";*/ /*let nodeId = "nodeId_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdNodeIdFilesPathGet(
      incomingOptions.username,
      incomingOptions.path,
      incomingOptions.nodeId,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdNodeIdGet
  /* Identical to &#x60;GET /snippets/encoded_id&#x60;, except that this endpoint can be used to retrieve the contents of the snippet as it was at an older revision, while &#x60;/snippets/encoded_id&#x60; always returns the snippet&#39;s current revision.  Note that only the snippet&#39;s file contents are versioned, not its meta data properties like the title.  Other than that, the two endpoints are identical in behavior. */
  snippetsUsernameEncodedIdNodeIdGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet's id // String | A commit revision (SHA1).
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let nodeId = "nodeId_example";*/ apiInstance.snippetsUsernameEncodedIdNodeIdGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.nodeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdRevisionDiffGet
  /* Returns the diff of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;patch&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the diff is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this. */
  snippetsUsernameEncodedIdRevisionDiffGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let revision = "revision_example";*/ let opts = {
      //  'path': "path_example" // String | When used, only one the diff of the specified file will be returned.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.snippetsUsernameEncodedIdRevisionDiffGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.revision,
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

  // This is a function for snippetsUsernameEncodedIdRevisionPatchGet
  /* Returns the patch of the specified commit against its first parent.  Note that this resource is different in functionality from the &#x60;diff&#x60; resource.  The differences between a diff and a patch are:  * patches have a commit header with the username, message, etc * diffs support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter the   diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and   its first parent (identical to how PRs work), while patch returns a   response containing separate patches for each commit on the second   parent&#39;s ancestry, up to the oldest common ancestor (identical to   its reachability).  Note that the character encoding of the contents of the patch is unspecified as Git and Mercurial do not track this, making it hard for Bitbucket to reliably determine this. */
  snippetsUsernameEncodedIdRevisionPatchGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id // String | A revspec expression. This can simply be a commit SHA1, a ref name, or a compare expression like `staging..production`.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let revision = "revision_example";*/ apiInstance.snippetsUsernameEncodedIdRevisionPatchGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.revision,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdWatchGet
  /* Used to check if the current user is watching a specific snippet.  Returns 204 (No Content) if the user is watching the snippet and 404 if not.  Hitting this endpoint anonymously always returns a 404. */
  snippetsUsernameEncodedIdWatchGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdWatchGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdWatchersGet
  /* Returns a paginated list of all users watching a specific snippet. */
  snippetsUsernameEncodedIdWatchersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdWatchersGet(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameGet
  /* Identical to &#x60;/snippets&#x60;, except that the result is further filtered by the snippet owner and only those that are owned by &#x60;{username}&#x60; are returned. */
  snippetsUsernameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | Limits the result to snippets owned by this user.
    /*let username = "username_example";*/ let opts = {
      //  'role': "role_example" // String | Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`).
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.snippetsUsernameGet(
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

  // This is a function for repositoriesUsernameRepoSlugDefaultReviewersGet
  /* Returns the repository&#39;s default reviewers.  These are the users that are automatically added as reviewers on every new pull request that is created. */
  repositoriesUsernameRepoSlugDefaultReviewersGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDefaultReviewersGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet
  /* Returns the specified reviewer.  This can be used to test whether a user is among the repository&#39;s default reviewers list. A 404 indicates that that specified user is not a default reviewer. */
  repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let targetUsername = "targetUsername_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameGet(
      incomingOptions.username,
      incomingOptions.targetUsername,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsActivityGet
  /* Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals. */
  repositoriesUsernameRepoSlugPullrequestsActivityGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsActivityGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsGet
  /* Returns a paginated list of all pull requests on the specified repository. By default only open pull requests are returned. This can be controlled using the &#x60;state&#x60; query parameter. To retrieve pull requests that are in one of multiple states, repeat the &#x60;state&#x60; parameter for each individual state.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../meta/filtering) for more details. */
  repositoriesUsernameRepoSlugPullrequestsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      //  'state': "state_example" // String | Only return pull requests that are in this state. This parameter can be repeated.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPullrequestsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
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

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet
  /* Returns a paginated list of the pull request&#39;s activity log.  This includes comments that were made by the reviewers, updates and approvals. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. // Number | The id of the pull request.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdActivityGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet
  /* Returns a specific pull request comment. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let commentId = "commentId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.commentId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet
  /* Returns a paginated list of the pull request&#39;s comments.  This includes both global, inline comments and replies.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter.  This endpoint also supports filtering and sorting of the results. See [filtering and sorting](../../../../../../meta/filtering) for more details. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommentsGet(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet
  /* Returns a paginated list of the pull request&#39;s commits.  These are the commits that are being merged into the destination branch when the pull requests gets accepted. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdCommitsGet(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet
  /*  */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDiffGet(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet
  /* Returns the specified pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. // Number | The id of the pull request.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet
  /*  */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPatchGet(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
  /* Returns all statuses (e.g. build results) for the given pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // Number | The pull request's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDownloadsFilenameGet
  /* Return a redirect to the contents of a download artifact.  This endpoint returns the actual file contents and not the artifact&#39;s metadata.      $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt     Hello World */
  repositoriesUsernameRepoSlugDownloadsFilenameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.DownloadsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let filename = "filename_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDownloadsFilenameGet(
      incomingOptions.username,
      incomingOptions.filename,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDownloadsGet
  /* Returns a list of download links associated with the repository. */
  repositoriesUsernameRepoSlugDownloadsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.DownloadsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDownloadsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitRevisionGet
  /* Returns the specified commit. */
  repositoriesUsernameRepoSlugCommitRevisionGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String | The commit's SHA1.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let revision = "revision_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitRevisionGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.revision,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet
  /* Returns the specified commit comment. */
  repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let sha = "sha_example";*/ /*let commentId = "commentId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitShaCommentsCommentIdGet(
      incomingOptions.username,
      incomingOptions.sha,
      incomingOptions.commentId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitShaCommentsGet
  /* Returns the commit&#39;s comments.  This includes both global and inline comments.  The default sorting is oldest to newest and can be overridden with the &#x60;sort&#x60; query parameter. */
  repositoriesUsernameRepoSlugCommitShaCommentsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let sha = "sha_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitShaCommentsGet(
      incomingOptions.username,
      incomingOptions.sha,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitsGet
  /* These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead. */
  repositoriesUsernameRepoSlugCommitsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitsRevisionGet
  /* These are the repository&#39;s commits. They are paginated and returned in reverse chronological order, similar to the output of &#x60;git log&#x60; and &#x60;hg log&#x60;. Like these tools, the DAG can be filtered.  ## GET /repositories/{username}/{repo_slug}/commits/  Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to &#x60;git log --all&#x60; and &#x60;hg log&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/master  Returns all commits on rev &#x60;master&#x60; (similar to &#x60;git log master&#x60;, &#x60;hg log master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/dev?exclude&#x3D;master  Returns all commits on ref &#x60;dev&#x60;, except those that are reachable on &#x60;master&#x60; (similar to &#x60;git log dev ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?exclude&#x3D;master  Returns all commits in the repo that are not on master (similar to &#x60;git log --all ^master&#x60;).  ## GET /repositories/{username}/{repo_slug}/commits/?include&#x3D;foo&amp;include&#x3D;bar&amp;exclude&#x3D;fu&amp;exclude&#x3D;fubar  Returns all commits that are on refs &#x60;foo&#x60; or &#x60;bar&#x60;, but not on &#x60;fu&#x60; or &#x60;fubar&#x60; (similar to &#x60;git log foo bar ^fu ^fubar&#x60;).  Because the response could include a very large number of commits, it is paginated. Follow the &#39;next&#39; link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links.  When the include and exclude parameters are more than can fit in a query string, clients can use a &#x60;x-www-form-urlencoded&#x60; POST instead. */
  repositoriesUsernameRepoSlugCommitsRevisionGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let revision = "revision_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitsRevisionGet(
      incomingOptions.username,
      incomingOptions.revision,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDiffSpecGet
  /* Produces a raw, git-style diff for either a single commit (diffed against its first parent), or a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a 3-way diff, or merge diff, is computed. This shows the changes introduced by the left branch (&#x60;3a8b42&#x60; in our example) as compared againt the right branch (&#x60;9ff173&#x60;).  This is equivalent to merging the left branch into the right branch and then computing the diff of the merge commit against its first parent (the right branch). This follows the same behavior as pull requests that also show this style of 3-way, or merge diff.  While similar to patches, diffs:  * Don&#39;t have a commit header (username, commit message, etc) * Support the optional &#x60;path&#x3D;foo/bar.py&#x60; query param to filter   the diff to just that one file diff  The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;. */
  repositoriesUsernameRepoSlugDiffSpecGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let spec = "spec_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      context: 56 // Number | Generate diffs with <n> lines of context instead of the usual three
      //  'path': "path_example" // String | Limit the diff to a single file
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugDiffSpecGet(
      incomingOptions.username,
      incomingOptions.spec,
      incomingOptions.repoSlug,
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

  // This is a function for repositoriesUsernameRepoSlugPatchSpecGet
  /* Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. &#x60;3a8b42..9ff173&#x60; where the first commit represents the source and the second commit the destination).  In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (&#x60;3a8b42&#x60; and its ancestors in our example). For Mercurial, a single patch is returned that combines the changes of all commits on the source branch.  While similar to diffs, patches:  * Have a commit header (username, commit message, etc) * Do not support the &#x60;path&#x3D;foo/bar.py&#x60; query parameter  The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is &#x60;text/plain&#x60;. */
  repositoriesUsernameRepoSlugPatchSpecGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let spec = "spec_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPatchSpecGet(
      incomingOptions.username,
      incomingOptions.spec,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for hookEventsGet
  /* Returns the webhook resource or subject types on which webhooks can be registered.  Each resource/subject type contains an &#x60;events&#x60; link that returns the paginated list of specific events each individual subject type can emit.  This endpoint is publicly accessible and does not require authentication or scopes.  Example:  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/hook_events  {     \&quot;repository\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/repository\&quot;             }         }     },     \&quot;team\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/team\&quot;             }         }     },     \&quot;user\&quot;: {         \&quot;links\&quot;: {             \&quot;events\&quot;: {                 \&quot;href\&quot;: \&quot;https://api.bitbucket.org/2.0/hook_events/user\&quot;             }         }     } } &#x60;&#x60;&#x60; */
  hookEventsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi();
    apiInstance.hookEventsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for hookEventsSubjectTypeGet
  /* Returns a paginated list of all valid webhook events for the specified entity.  This is public data that does not require any scopes or authentication.  Example:  NOTE: The following example is a truncated response object for the &#x60;team&#x60; &#x60;subject_type&#x60;. We return the same structure for the other &#x60;subject_type&#x60; objects.  &#x60;&#x60;&#x60; $ curl https://api.bitbucket.org/2.0/hook_events/team {     \&quot;page\&quot;: 1,     \&quot;pagelen\&quot;: 30,     \&quot;size\&quot;: 21,     \&quot;values\&quot;: [         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository push occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:push\&quot;,             \&quot;label\&quot;: \&quot;Push\&quot;         },         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository fork occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:fork\&quot;,             \&quot;label\&quot;: \&quot;Fork\&quot;         },         ...         {             \&quot;category\&quot;: \&quot;Repository\&quot;,             \&quot;description\&quot;: \&quot;Whenever a repository import occurs\&quot;,             \&quot;event\&quot;: \&quot;repo:imported\&quot;,             \&quot;label\&quot;: \&quot;Import\&quot;         }     ] } &#x60;&#x60;&#x60; */
  hookEventsSubjectTypeGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | A resource or subject type.
    /*let subjectType = "subjectType_example";*/ apiInstance.hookEventsSubjectTypeGet(
      incomingOptions.subjectType,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksGet
  /* Returns a paginated list of webhooks installed on this repository. */
  repositoriesUsernameRepoSlugHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksUidGet
  /* Returns the webhook with the specified id installed on the specified repository. */
  repositoriesUsernameRepoSlugHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksGet
  /* Returns a paginated list of webhooks installed on this team. */
  teamsUsernameHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameHooksGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidGet
  /* Returns the webhook with the specified id installed on the given team account. */
  teamsUsernameHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidGet(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksGet
  /* Returns a paginated list of webhooks installed on this user account. */
  usersUsernameHooksGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameHooksGet(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksUidGet
  /* Returns the webhook with the specified id installed on the given user account. */
  usersUsernameHooksUidGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id.
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidGet(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsOwnerProjectsGet
  /*  */
  teamsOwnerProjectsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.ProjectsApi(); // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)).
    /*let owner = "owner_example";*/ apiInstance.teamsOwnerProjectsGet(
      incomingOptions.owner,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsOwnerProjectsProjectKeyGet
  /*  */
  teamsOwnerProjectsProjectKeyGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.ProjectsApi(); // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)).
    /*let owner = "owner_example";*/ /*let projectKey = "projectKey_example";*/ apiInstance.teamsOwnerProjectsProjectKeyGet(
      incomingOptions.owner,
      incomingOptions.projectKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsBranchesGet
  /*  */
  repositoriesUsernameRepoSlugRefsBranchesGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugRefsBranchesGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsBranchesNameGet
  /*  */
  repositoriesUsernameRepoSlugRefsBranchesNameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let name = "name_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugRefsBranchesNameGet(
      incomingOptions.userincomingOptions.name,
      name,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsGet
  /*  */
  repositoriesUsernameRepoSlugRefsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugRefsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsTagsGet
  /*  */
  repositoriesUsernameRepoSlugRefsTagsGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`))
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugRefsTagsGet(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsTagsNameGet
  /*  */
  repositoriesUsernameRepoSlugRefsTagsNameGet(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let name = "name_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugRefsTagsNameGet(
      incomingOptions.userincomingOptions.name,
      name,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async post(entity, options) {
    switch (entity) {
      case "USERS_USERNAME_HOOKS":
        /*
      Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one&#39;s own account, not that of others.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD":
        /*
      Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use &#x60;https://foo.com/builds/{repository.full_name}&#x60; which Bitbucket will turn into &#x60;https://foo.com/builds/foo/bar&#x60; at render time. The context variables available are &#x60;repository&#x60; and &#x60;commit&#x60;.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD":
        /*
      Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use &#x60;https://foo.com/builds/{repository.full_name}&#x60; which Bitbucket will turn into &#x60;https://foo.com/builds/foo/bar&#x60; at render time. The context variables available are &#x60;repository&#x60; and &#x60;commit&#x60;.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        /*
      Creates a new webhook on the specified repository.  Example:  &#x60;&#x60;&#x60; $ curl -X POST -u credentials -H &#39;Content-Type: application/json&#39;           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d &#39;     {       \&quot;description\&quot;: \&quot;Webhook Description\&quot;,       \&quot;url\&quot;: \&quot;https://example.com/\&quot;,       \&quot;active\&quot;: true,       \&quot;events\&quot;: [         \&quot;repo:push\&quot;,         \&quot;issue:created\&quot;,         \&quot;issue:updated\&quot;       ]     }&#39; &#x60;&#x60;&#x60;  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: &#x60;webhook&#x60;, &#x60;repository&#x60; and &#x60;issue&#x60;.  Also note that the &#x60;url&#x60; must properly resolve and cannot be an internal, non-routed address.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG":
        /*
      Creates a new repository.  Note: In order to set the project for the newly created repository, pass in either the project key or the project UUID as part of the request body as shown in the examples below:  &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;scm\&quot;: \&quot;git\&quot;,     \&quot;project\&quot;: {         \&quot;key\&quot;: \&quot;MARS\&quot;     } }&#39; https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding &#x60;&#x60;&#x60;  or  &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;scm\&quot;: \&quot;git\&quot;,     \&quot;project\&quot;: {         \&quot;key\&quot;: \&quot;{ba516952-992a-4c2d-acbd-17d502922f96}\&quot;     } }&#39; https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding &#x60;&#x60;&#x60;  The project must only be assigned for repositories belonging to a team. If the repository owner is a team and the project is not provided, the repository is automatically assigned to the oldest project in the team.  Note: In the examples above, the username &#x60;teamsinspace&#x60;, and/or the repository name &#x60;hablanding&#x60; can be replaced by UUIDs.
      Function parameters for this API username,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "CREATE_PIPELINE_FOR_REPOSI":
        /*
      Endpoint to create and initiate a pipeline.  There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated. # Trigger a Pipeline for a branch or tag One way to trigger pipelines is by specifying the reference for which you want to trigger a pipeline (e.g. a branch or tag).  The specified reference will be used to determine which pipeline definition from the &#x60;bitbucket-pipelines.yml&#x60; file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified reference.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;ref_type\&quot;: \&quot;branch\&quot;,        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a Pipeline for a commit on a branch or tag You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark). The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.   The following reference types are supported:  * &#x60;branch&#x60;  * &#x60;named_branch&#x60; * &#x60;bookmark&#x60;   * &#x60;tag&#x60;  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;commit\&quot;: {         \&quot;type\&quot;: \&quot;commit\&quot;,          \&quot;hash\&quot;: \&quot;ce5b7431602f7cbba007062eeb55225c6e18e956\&quot;       },        \&quot;ref_type\&quot;: \&quot;branch\&quot;,        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },         \&quot;selector\&quot;: {            \&quot;type\&quot;:\&quot;custom\&quot;,               \&quot;pattern\&quot;:\&quot;Deploy to production\&quot;           },         \&quot;type\&quot;:\&quot;pipeline_commit_target\&quot;    }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit on a branch or tag You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit in the context of a specified reference.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },        \&quot;selector\&quot;: {           \&quot;type\&quot;: \&quot;custom\&quot;,           \&quot;pattern\&quot;: \&quot;Deploy to production\&quot;        },        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;,        \&quot;ref_type\&quot;: \&quot;branch\&quot;      }   }&#39; &#x60;&#x60;&#x60;
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.createPipelineForRepository(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "CREATE_PIPELINE_VARIABLE_FOR":
        /*
      Create an account level variable.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.createPipelineVariableForTeam(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "CREATE_PIPELINE_VARIABLE_FOR":
        /*
      Create a user level variable.
      Function parameters for this API username,opts
        */
        return new Promise((resolve, reject) => {
          this.createPipelineVariableForUser(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "CREATE_REPOSITORY_PIPELINE_KNOWN":
        /*
      Create a repository level known host.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.createRepositoryPipelineKnownHost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "CREATE_REPOSITORY_PIPELINE_VARI":
        /*
      Create a repository level variable.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.createRepositoryPipelineVariable(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "STOP_PIPE":
        /*
      Signal the stop of a pipeline and all of its steps that not have completed yet.
      Function parameters for this API username,repoSlug,pipelineUuid
        */
        return new Promise((resolve, reject) => {
          this.stopPipeline(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS":
        /*
      Upload new issue attachments.  To upload files, perform a &#x60;multipart/form-data&#x60; POST containing one or more file fields.  When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES":
        /*
      Creates a new issue.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorisation.  The authenticated user is used for the issue&#39;s &#x60;reporter&#x60; field.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS":
        /*
      Creates a new branch restriction rule for a repository.  &#x60;kind&#x60; describes what will be restricted. Allowed values are: &#x60;push&#x60;, &#x60;force&#x60;, &#x60;delete&#x60;, and &#x60;restrict_merges&#x60;.  Different kinds of branch restrictions have different requirements:  * &#x60;push&#x60; and &#x60;restrict_merges&#x60; require &#x60;users&#x60; and &#x60;groups&#x60; to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * &#x60;force&#x60; can not be specified in a Mercurial repository.  &#x60;pattern&#x60; is used to determine which branches will be restricted.  A &#x60;&#39;*&#39;&#x60; in &#x60;pattern&#x60; will expand to match zero or more characters, and every other character matches itself. For example, &#x60;&#39;foo*&#39;&#x60; will match &#x60;&#39;foo&#39;&#x60; and &#x60;&#39;foobar&#39;&#x60;, but not &#x60;&#39;barfoo&#39;&#x60;. &#x60;&#39;*&#39;&#x60; will match all branches.  &#x60;users&#x60; and &#x60;groups&#x60; are lists of user names and group names.  &#x60;kind&#x60; and &#x60;pattern&#x60; must be unique within a repository; adding new users or groups to an existing restriction should be done via &#x60;PUT&#x60;.  Note that branch restrictions with overlapping patterns are allowed, but the resulting behavior may be surprising.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugBranchRestrictionsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS":
        /*
      Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS":
        /*
      Creates a new snippet under the authenticated user&#39;s account.  Snippets can contain multiple files. Both text and binary files are supported.  The simplest way to create a new snippet from a local file:      $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file&#x3D;@image.png  Creating snippets through curl has a few limitations and so let&#39;s look at a more complicated scenario.  Snippets are created with a multipart POST. Both &#x60;multipart/form-data&#x60; and &#x60;multipart/related&#x60; are supported. Both allow the creation of snippets with both meta data (title, etc), as well as multiple text and binary files.  The main difference is that &#x60;multipart/related&#x60; can use rich encoding for the meta data (currently JSON).   multipart/related (RFC-2387) ----------------------------  This is the most advanced and efficient way to create a paste.      POST /2.0/snippets/evzijst HTTP/1.1     Content-Length: 1188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;is_private\&quot;: true,       \&quot;scm\&quot;: \&quot;hg\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;image.png\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  The request contains multiple parts and is structured as follows.  The first part is the JSON document that describes the snippet&#39;s properties or meta data. It either has to be the first part, or the request&#39;s &#x60;Content-Type&#x60; header must contain the &#x60;start&#x60; parameter to point to it.  The remaining parts are the files of which there can be zero or more. Each file part should contain the &#x60;Content-ID&#x60; MIME header through which the JSON meta data&#39;s &#x60;files&#x60; element addresses it. The value should be the name of the file.  &#x60;Content-Disposition&#x60; is an optional MIME header. The header&#39;s optional &#x60;filename&#x60; parameter can be used to specify the file name that Bitbucket should use when writing the file to disk. When present, &#x60;filename&#x60; takes precedence over the value of &#x60;Content-ID&#x60;.  When the JSON body omits the &#x60;files&#x60; element, the remaining parts are not ignored. Instead, each file is added to the new snippet as if its name was explicitly linked (the use of the &#x60;files&#x60; elements is mandatory for some operations like deleting or renaming files).   multipart/form-data -------------------  The use of JSON for the snippet&#39;s meta data is optional. Meta data can also be supplied as regular form fields in a more conventional &#x60;multipart/form-data&#x60; request:      $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title&#x3D;\&quot;My snippet\&quot;               -F file&#x3D;@foo.txt -F file&#x3D;@image.png      POST /2.0/snippets HTTP/1.1     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Type: application/octet-stream      ?PNG      IHDR?1??I.....     ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My snippet     ------------------------------63a4b224c59f--  Here the meta data properties are included as flat, top-level form fields. The file attachments use the &#x60;file&#x60; field name. To attach multiple files, simply repeat the field.  The advantage of &#x60;multipart/form-data&#x60; over &#x60;multipart/related&#x60; is that it can be easier to build clients.  Essentially all properties are optional, &#x60;title&#x60; and &#x60;files&#x60; included.   Sharing and Visibility ----------------------  Snippets can be either public (visible to anyone on Bitbucket, as well as anonymous users), or private (visible only to the owner, creator and members of the team in case the snippet is owned by a team). This is controlled through the snippet&#39;s &#x60;is_private&#x60; element:  * **is_private&#x3D;false** -- everyone, including anonymous users can view   the snippet * **is_private&#x3D;true** -- only the owner and team members (for team   snippets) can view it  To create the snippet under a team account, just append the team name to the URL (see &#x60;/2.0/snippets/{username}&#x60;).
      Function parameters for this API body
        */
        return new Promise((resolve, reject) => {
          this.snippetsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS":
        /*
      Creates a new comment.  The only required field in the body is &#x60;content.raw&#x60;.  To create a threaded reply to an existing comment, include &#x60;parent.id&#x60;.
      Function parameters for this API username,encodedId,body
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommentsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME":
        /*
      Identical to &#x60;/snippets&#x60;, except that the new snippet will be created under the account specified in the path parameter &#x60;{username}&#x60;.
      Function parameters for this API username,body
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernamePost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS":
        /*
      Creates a new pull request.
      Function parameters for this API username,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_APPROVE":
        /*
      Approve the specified pull request as the authenticated user.
      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_DECLINE":
        /*
      Declines the pull request.
      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_MERGE":
        /*
      Merges the pull request.
      Function parameters for this API username,pullRequestId,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS":
        /*
      Upload new download artifacts.  To upload files, perform a &#x60;multipart/form-data&#x60; POST containing one or more &#x60;files&#x60; fields:      $ echo Hello World &gt; hello.txt     $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files&#x3D;@hello.txt  When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDownloadsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_APPROVE":
        /*
      Approve the specified commit as the authenticated user.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeApprovePost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS":
        /*
      Identical to &#x60;GET /repositories/{username}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitsPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMITS_REVISION":
        /*
      Identical to &#x60;GET /repositories/{username}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.**
      Function parameters for this API username,revision,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitsRevisionPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS":
        /*
      Creates a new webhook on the specified repository.  Example:  &#x60;&#x60;&#x60; $ curl -X POST -u credentials -H &#39;Content-Type: application/json&#39;           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d &#39;     {       \&quot;description\&quot;: \&quot;Webhook Description\&quot;,       \&quot;url\&quot;: \&quot;https://example.com/\&quot;,       \&quot;active\&quot;: true,       \&quot;events\&quot;: [         \&quot;repo:push\&quot;,         \&quot;issue:created\&quot;,         \&quot;issue:updated\&quot;       ]     }&#39; &#x60;&#x60;&#x60;  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: &#x60;webhook&#x60;, &#x60;repository&#x60; and &#x60;issue&#x60;.  Also note that the &#x60;url&#x60; must properly resolve and cannot be an internal, non-routed address.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksPost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS":
        /*
      Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS":
        /*
      Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one&#39;s own account, not that of others.
      Function parameters for this API username
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_OWNER_PROJECTS":
        /*
      Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  &#x60;&#x60;&#x60; $ body&#x3D;$(cat &lt;&lt; EOF {     \&quot;name\&quot;: \&quot;Mars Project\&quot;,     \&quot;key\&quot;: \&quot;MARS\&quot;,     \&quot;description\&quot;: \&quot;Software for colonizing mars.\&quot;,     \&quot;links\&quot;: {         \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\&quot;         }     },     \&quot;is_private\&quot;: false } EOF ) $ curl -H \&quot;Content-Type: application/json\&quot; \\        -X POST \\        -d \&quot;$body\&quot; \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } &#x60;&#x60;&#x60;  or even:  &#x60;&#x60;&#x60; $ body&#x3D;$(cat &lt;&lt; EOF {     \&quot;name\&quot;: \&quot;Mars Project\&quot;,     \&quot;key\&quot;: \&quot;MARS\&quot;,     \&quot;description\&quot;: \&quot;Software for colonizing mars.\&quot;,     \&quot;links\&quot;: {         \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;http://i.imgur.com/72tRx4w.gif\&quot;         }     },     \&quot;is_private\&quot;: false } EOF ) $ curl -H \&quot;Content-Type: application/json\&quot; \\        -X POST \\        -d \&quot;$body\&quot; \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } &#x60;&#x60;&#x60;
      Function parameters for this API owner,body
        */
        return new Promise((resolve, reject) => {
          this.teamsOwnerProjectsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_REFS_TAGS":
        /*
      Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  &#x60;&#x60;&#x60; {     \&quot;name\&quot; : \&quot;new tag name\&quot;,     \&quot;target\&quot; : {         \&quot;hash\&quot; : \&quot;target commit hash\&quot;,     } } &#x60;&#x60;&#x60;  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugRefsTagsPost(
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
  // This is a function for usersUsernameHooksPost
  /* Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one&#39;s own account, not that of others. */
  usersUsernameHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameHooksPost(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost
  /* Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use &#x60;https://foo.com/builds/{repository.full_name}&#x60; which Bitbucket will turn into &#x60;https://foo.com/builds/foo/bar&#x60; at render time. The context variables available are &#x60;repository&#x60; and &#x60;commit&#x60;. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitstatusesApi(); // String | // String | // String | The commit's SHA1
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost
  /* Creates a new build status against the specified commit.  If the specified key already exists, the existing status object will be overwritten.  When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use &#x60;https://foo.com/builds/{repository.full_name}&#x60; which Bitbucket will turn into &#x60;https://foo.com/builds/foo/bar&#x60; at render time. The context variables available are &#x60;repository&#x60; and &#x60;commit&#x60;. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The commit's SHA1
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksPost
  /* Creates a new webhook on the specified repository.  Example:  &#x60;&#x60;&#x60; $ curl -X POST -u credentials -H &#39;Content-Type: application/json&#39;           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d &#39;     {       \&quot;description\&quot;: \&quot;Webhook Description\&quot;,       \&quot;url\&quot;: \&quot;https://example.com/\&quot;,       \&quot;active\&quot;: true,       \&quot;events\&quot;: [         \&quot;repo:push\&quot;,         \&quot;issue:created\&quot;,         \&quot;issue:updated\&quot;       ]     }&#39; &#x60;&#x60;&#x60;  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: &#x60;webhook&#x60;, &#x60;repository&#x60; and &#x60;issue&#x60;.  Also note that the &#x60;url&#x60; must properly resolve and cannot be an internal, non-routed address. */
  repositoriesUsernameRepoSlugHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPost
  /* Creates a new repository.  Note: In order to set the project for the newly created repository, pass in either the project key or the project UUID as part of the request body as shown in the examples below:  &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;scm\&quot;: \&quot;git\&quot;,     \&quot;project\&quot;: {         \&quot;key\&quot;: \&quot;MARS\&quot;     } }&#39; https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding &#x60;&#x60;&#x60;  or  &#x60;&#x60;&#x60; $ curl -X POST -H \&quot;Content-Type: application/json\&quot; -d &#39;{     \&quot;scm\&quot;: \&quot;git\&quot;,     \&quot;project\&quot;: {         \&quot;key\&quot;: \&quot;{ba516952-992a-4c2d-acbd-17d502922f96}\&quot;     } }&#39; https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding &#x60;&#x60;&#x60;  The project must only be assigned for repositories belonging to a team. If the repository owner is a team and the project is not provided, the repository is automatically assigned to the oldest project in the team.  Note: In the examples above, the username &#x60;teamsinspace&#x60;, and/or the repository name &#x60;hablanding&#x60; can be replaced by UUIDs. */
  repositoriesUsernameRepoSlugPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      body: new Bitbucket.Repository() // Repository | The repository that is to be created. Note that most object elements are optional. Elements \"owner\" and \"full_name\" are ignored as the URL implies them.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
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

  // This is a function for addonLinkersLinkerKeyValuesPost
  /*  */
  addonLinkersLinkerKeyValuesPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesPost(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for createPipelineForRepository
  /* Endpoint to create and initiate a pipeline.  There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated. # Trigger a Pipeline for a branch or tag One way to trigger pipelines is by specifying the reference for which you want to trigger a pipeline (e.g. a branch or tag).  The specified reference will be used to determine which pipeline definition from the &#x60;bitbucket-pipelines.yml&#x60; file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified reference.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;ref_type\&quot;: \&quot;branch\&quot;,        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a Pipeline for a commit on a branch or tag You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark). The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.   The following reference types are supported:  * &#x60;branch&#x60;  * &#x60;named_branch&#x60; * &#x60;bookmark&#x60;   * &#x60;tag&#x60;  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d &#39;   {     \&quot;target\&quot;: {       \&quot;commit\&quot;: {         \&quot;type\&quot;: \&quot;commit\&quot;,          \&quot;hash\&quot;: \&quot;ce5b7431602f7cbba007062eeb55225c6e18e956\&quot;       },        \&quot;ref_type\&quot;: \&quot;branch\&quot;,        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;     }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },         \&quot;selector\&quot;: {            \&quot;type\&quot;:\&quot;custom\&quot;,               \&quot;pattern\&quot;:\&quot;Deploy to production\&quot;           },         \&quot;type\&quot;:\&quot;pipeline_commit_target\&quot;    }   }&#39; &#x60;&#x60;&#x60; # Trigger a specific pipeline definition for a commit on a branch or tag You can trigger a specific pipeline that is defined in your &#x60;bitbucket-pipelines.yml&#x60; file for a specific commit in the context of a specified reference.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.  ### Example  &#x60;&#x60;&#x60; $ curl -X POST -is -u username:password \\   -H &#39;Content-Type: application/json&#39; \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d &#39;   {      \&quot;target\&quot;: {       \&quot;commit\&quot;: {          \&quot;hash\&quot;:\&quot;a3c4e02c9a3755eccdc3764e6ea13facdf30f923\&quot;,          \&quot;type\&quot;:\&quot;commit\&quot;        },        \&quot;selector\&quot;: {           \&quot;type\&quot;: \&quot;custom\&quot;,           \&quot;pattern\&quot;: \&quot;Deploy to production\&quot;        },        \&quot;type\&quot;: \&quot;pipeline_ref_target\&quot;,        \&quot;ref_name\&quot;: \&quot;master\&quot;,        \&quot;ref_type\&quot;: \&quot;branch\&quot;      }   }&#39; &#x60;&#x60;&#x60;  */
  createPipelineForRepository(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // Pipeline | The pipeline to initiate.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.Pipeline();*/ apiInstance.createPipelineForRepository(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for createPipelineVariableForTeam
  /* Create an account level variable. */
  createPipelineVariableForTeam(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account.
    /*let username = "username_example";*/ let opts = {
      body: new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.createPipelineVariableForTeam(
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

  // This is a function for createPipelineVariableForUser
  /* Create a user level variable. */
  createPipelineVariableForUser(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account.
    /*let username = "username_example";*/ let opts = {
      body: new Bitbucket.PipelineVariable() // PipelineVariable | The variable to create.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.createPipelineVariableForUser(
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

  // This is a function for createRepositoryPipelineKnownHost
  /* Create a repository level known host. */
  createRepositoryPipelineKnownHost(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // PipelineKnownHost | The known host to create.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.PipelineKnownHost();*/ apiInstance.createRepositoryPipelineKnownHost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for createRepositoryPipelineVariable
  /* Create a repository level variable. */
  createRepositoryPipelineVariable(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // PipelineVariable | The variable to create.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.PipelineVariable();*/ apiInstance.createRepositoryPipelineVariable(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for stopPipeline
  /* Signal the stop of a pipeline and all of its steps that not have completed yet. */
  stopPipeline(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the pipeline.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pipelineUuid = "pipelineUuid_example";*/ apiInstance.stopPipeline(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pipelineUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost
  /* Upload new issue attachments.  To upload files, perform a &#x60;multipart/form-data&#x60; POST containing one or more file fields.  When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced. */
  repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesPost
  /* Creates a new issue.  This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorisation.  The authenticated user is used for the issue&#39;s &#x60;reporter&#x60; field. */
  repositoriesUsernameRepoSlugIssuesPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Issue | The new issue. Note that the only required element is `title`. All other elements can be omitted from the body.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.Issue();*/ apiInstance.repositoriesUsernameRepoSlugIssuesPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsPost
  /* Creates a new branch restriction rule for a repository.  &#x60;kind&#x60; describes what will be restricted. Allowed values are: &#x60;push&#x60;, &#x60;force&#x60;, &#x60;delete&#x60;, and &#x60;restrict_merges&#x60;.  Different kinds of branch restrictions have different requirements:  * &#x60;push&#x60; and &#x60;restrict_merges&#x60; require &#x60;users&#x60; and &#x60;groups&#x60; to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * &#x60;force&#x60; can not be specified in a Mercurial repository.  &#x60;pattern&#x60; is used to determine which branches will be restricted.  A &#x60;&#39;*&#39;&#x60; in &#x60;pattern&#x60; will expand to match zero or more characters, and every other character matches itself. For example, &#x60;&#39;foo*&#39;&#x60; will match &#x60;&#39;foo&#39;&#x60; and &#x60;&#39;foobar&#39;&#x60;, but not &#x60;&#39;barfoo&#39;&#x60;. &#x60;&#39;*&#39;&#x60; will match all branches.  &#x60;users&#x60; and &#x60;groups&#x60; are lists of user names and group names.  &#x60;kind&#x60; and &#x60;pattern&#x60; must be unique within a repository; adding new users or groups to an existing restriction should be done via &#x60;PUT&#x60;.  Note that branch restrictions with overlapping patterns are allowed, but the resulting behavior may be surprising. */
  repositoriesUsernameRepoSlugBranchRestrictionsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.BranchrestrictionsApi(); // String | // String | // Branchrestriction | The new rule
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.Branchrestriction();*/ apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksPost
  /* Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams. */
  teamsUsernameHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameHooksPost(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsPost
  /* Creates a new snippet under the authenticated user&#39;s account.  Snippets can contain multiple files. Both text and binary files are supported.  The simplest way to create a new snippet from a local file:      $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file&#x3D;@image.png  Creating snippets through curl has a few limitations and so let&#39;s look at a more complicated scenario.  Snippets are created with a multipart POST. Both &#x60;multipart/form-data&#x60; and &#x60;multipart/related&#x60; are supported. Both allow the creation of snippets with both meta data (title, etc), as well as multiple text and binary files.  The main difference is that &#x60;multipart/related&#x60; can use rich encoding for the meta data (currently JSON).   multipart/related (RFC-2387) ----------------------------  This is the most advanced and efficient way to create a paste.      POST /2.0/snippets/evzijst HTTP/1.1     Content-Length: 1188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My snippet\&quot;,       \&quot;is_private\&quot;: true,       \&quot;scm\&quot;: \&quot;hg\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;image.png\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: image/png     MIME-Version: 1.0     Content-Transfer-Encoding: base64     Content-ID: \&quot;image.png\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;image.png\&quot;      iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m     TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB     cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5     EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ     73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN     AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg&#x3D;&#x3D;     --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  The request contains multiple parts and is structured as follows.  The first part is the JSON document that describes the snippet&#39;s properties or meta data. It either has to be the first part, or the request&#39;s &#x60;Content-Type&#x60; header must contain the &#x60;start&#x60; parameter to point to it.  The remaining parts are the files of which there can be zero or more. Each file part should contain the &#x60;Content-ID&#x60; MIME header through which the JSON meta data&#39;s &#x60;files&#x60; element addresses it. The value should be the name of the file.  &#x60;Content-Disposition&#x60; is an optional MIME header. The header&#39;s optional &#x60;filename&#x60; parameter can be used to specify the file name that Bitbucket should use when writing the file to disk. When present, &#x60;filename&#x60; takes precedence over the value of &#x60;Content-ID&#x60;.  When the JSON body omits the &#x60;files&#x60; element, the remaining parts are not ignored. Instead, each file is added to the new snippet as if its name was explicitly linked (the use of the &#x60;files&#x60; elements is mandatory for some operations like deleting or renaming files).   multipart/form-data -------------------  The use of JSON for the snippet&#39;s meta data is optional. Meta data can also be supplied as regular form fields in a more conventional &#x60;multipart/form-data&#x60; request:      $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title&#x3D;\&quot;My snippet\&quot;               -F file&#x3D;@foo.txt -F file&#x3D;@image.png      POST /2.0/snippets HTTP/1.1     Content-Length: 951     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;image.png\&quot;     Content-Type: application/octet-stream      ?PNG      IHDR?1??I.....     ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My snippet     ------------------------------63a4b224c59f--  Here the meta data properties are included as flat, top-level form fields. The file attachments use the &#x60;file&#x60; field name. To attach multiple files, simply repeat the field.  The advantage of &#x60;multipart/form-data&#x60; over &#x60;multipart/related&#x60; is that it can be easier to build clients.  Essentially all properties are optional, &#x60;title&#x60; and &#x60;files&#x60; included.   Sharing and Visibility ----------------------  Snippets can be either public (visible to anyone on Bitbucket, as well as anonymous users), or private (visible only to the owner, creator and members of the team in case the snippet is owned by a team). This is controlled through the snippet&#39;s &#x60;is_private&#x60; element:  * **is_private&#x3D;false** -- everyone, including anonymous users can view   the snippet * **is_private&#x3D;true** -- only the owner and team members (for team   snippets) can view it  To create the snippet under a team account, just append the team name to the URL (see &#x60;/2.0/snippets/{username}&#x60;). */
  snippetsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // Snippet | The new snippet object.
    /*let body = new Bitbucket.Snippet();*/ apiInstance.snippetsPost(
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommentsPost
  /* Creates a new comment.  The only required field in the body is &#x60;content.raw&#x60;.  To create a threaded reply to an existing comment, include &#x60;parent.id&#x60;. */
  snippetsUsernameEncodedIdCommentsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // Snippet | The contents of the new comment.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let body = new Bitbucket.Snippet();*/ apiInstance.snippetsUsernameEncodedIdCommentsPost(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernamePost
  /* Identical to &#x60;/snippets&#x60;, except that the new snippet will be created under the account specified in the path parameter &#x60;{username}&#x60;. */
  snippetsUsernamePost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // Snippet | The new snippet object.
    /*let username = "username_example";*/ /*let body = new Bitbucket.Snippet();*/ apiInstance.snippetsUsernamePost(
      incomingOptions.username,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPost
  /* Creates a new pull request. */
  repositoriesUsernameRepoSlugPullrequestsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      body: new Bitbucket.Pullrequest() // Pullrequest | The new pull request.  The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).  Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPullrequestsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
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

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost
  /* Approve the specified pull request as the authenticated user. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApprovePost(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost
  /* Declines the pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdDeclinePost(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost
  /* Merges the pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      body: new Bitbucket.PullrequestMergeParameters() // PullrequestMergeParameters |
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdMergePost(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
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

  // This is a function for repositoriesUsernameRepoSlugDownloadsPost
  /* Upload new download artifacts.  To upload files, perform a &#x60;multipart/form-data&#x60; POST containing one or more &#x60;files&#x60; fields:      $ echo Hello World &gt; hello.txt     $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files&#x3D;@hello.txt  When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced. */
  repositoriesUsernameRepoSlugDownloadsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.DownloadsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDownloadsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeApprovePost
  /* Approve the specified commit as the authenticated user.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits. */
  repositoriesUsernameRepoSlugCommitNodeApprovePost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String | The commit's SHA1.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeApprovePost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitsPost
  /* Identical to &#x60;GET /repositories/{username}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.** */
  repositoriesUsernameRepoSlugCommitsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitsRevisionPost
  /* Identical to &#x60;GET /repositories/{username}/{repo_slug}/commits&#x60;, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues.  **Note that this resource does NOT support new commit creation.** */
  repositoriesUsernameRepoSlugCommitsRevisionPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let revision = "revision_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitsRevisionPost(
      incomingOptions.username,
      incomingOptions.revision,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksPost
  /* Creates a new webhook on the specified repository.  Example:  &#x60;&#x60;&#x60; $ curl -X POST -u credentials -H &#39;Content-Type: application/json&#39;           https://api.bitbucket.org/2.0/repositories/username/slug/hooks           -d &#39;     {       \&quot;description\&quot;: \&quot;Webhook Description\&quot;,       \&quot;url\&quot;: \&quot;https://example.com/\&quot;,       \&quot;active\&quot;: true,       \&quot;events\&quot;: [         \&quot;repo:push\&quot;,         \&quot;issue:created\&quot;,         \&quot;issue:updated\&quot;       ]     }&#39; &#x60;&#x60;&#x60;  Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: &#x60;webhook&#x60;, &#x60;repository&#x60; and &#x60;issue&#x60;.  Also note that the &#x60;url&#x60; must properly resolve and cannot be an internal, non-routed address. */
  repositoriesUsernameRepoSlugHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksPost
  /* Creates a new webhook on the specified team.  Team webhooks are fired for events from all repositories belonging to that team account.  Note that only admins can install webhooks on teams. */
  teamsUsernameHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String |
    /*let username = "username_example";*/ apiInstance.teamsUsernameHooksPost(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksPost
  /* Creates a new webhook on the specified user account.  Account-level webhooks are fired for events from all repositories belonging to that account.  Note that one can only register webhooks on one&#39;s own account, not that of others. */
  usersUsernameHooksPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String |
    /*let username = "username_example";*/ apiInstance.usersUsernameHooksPost(
      incomingOptions.username,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsOwnerProjectsPost
  /* Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  &#x60;&#x60;&#x60; $ body&#x3D;$(cat &lt;&lt; EOF {     \&quot;name\&quot;: \&quot;Mars Project\&quot;,     \&quot;key\&quot;: \&quot;MARS\&quot;,     \&quot;description\&quot;: \&quot;Software for colonizing mars.\&quot;,     \&quot;links\&quot;: {         \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\&quot;         }     },     \&quot;is_private\&quot;: false } EOF ) $ curl -H \&quot;Content-Type: application/json\&quot; \\        -X POST \\        -d \&quot;$body\&quot; \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } &#x60;&#x60;&#x60;  or even:  &#x60;&#x60;&#x60; $ body&#x3D;$(cat &lt;&lt; EOF {     \&quot;name\&quot;: \&quot;Mars Project\&quot;,     \&quot;key\&quot;: \&quot;MARS\&quot;,     \&quot;description\&quot;: \&quot;Software for colonizing mars.\&quot;,     \&quot;links\&quot;: {         \&quot;avatar\&quot;: {             \&quot;href\&quot;: \&quot;http://i.imgur.com/72tRx4w.gif\&quot;         }     },     \&quot;is_private\&quot;: false } EOF ) $ curl -H \&quot;Content-Type: application/json\&quot; \\        -X POST \\        -d \&quot;$body\&quot; \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } &#x60;&#x60;&#x60; */
  teamsOwnerProjectsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.ProjectsApi(); // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). // Project |
    /*let owner = "owner_example";*/ /*let body = new Bitbucket.Project();*/ apiInstance.teamsOwnerProjectsPost(
      incomingOptions.owner,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugRefsTagsPost
  /* Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  &#x60;&#x60;&#x60; {     \&quot;name\&quot; : \&quot;new tag name\&quot;,     \&quot;target\&quot; : {         \&quot;hash\&quot; : \&quot;target commit hash\&quot;,     } } &#x60;&#x60;&#x60;  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach. */
  repositoriesUsernameRepoSlugRefsTagsPost(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RefsApi(); // String |  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. // String |  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) // Tag |
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.Tag();*/ apiInstance.repositoriesUsernameRepoSlugRefsTagsPost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
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
      case "USERS_USERNAME_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        /*
      Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * &#x60;state&#x60; * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;refname&#x60;  The &#x60;key&#x60; cannot be changed.
      Function parameters for this API username,repoSlug,node,key,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_STATUSES_BUILD_KEY":
        /*
      Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * &#x60;state&#x60; * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;refname&#x60;  The &#x60;key&#x60; cannot be changed.
      Function parameters for this API username,repoSlug,node,key,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG":
        /*
      Since this endpoint can be used to both update and to create a repository, the request body depends on the intent.  ### Creation  See the POST documentation for the repository endpoint for an example of the request body.  ### Update  Note: Changing the &#x60;name&#x60; of the repository will cause the location to be changed. This is because the URL of the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the request to fail if the newly created slug conflicts with an existing repository&#39;s slug. But if there is no conflict, the new location will be returned in the &#x60;Location&#x60; header of the response.
      Function parameters for this API username,repoSlug,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON":
        /*

      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.addonPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "UPDATE_PIPELINE_VARIABLE_FOR_T":
        /*
      Update a team level variable.
      Function parameters for this API username,variableUuid,body
        */
        return new Promise((resolve, reject) => {
          this.updatePipelineVariableForTeam(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "UPDATE_PIPELINE_VARIABLE_FOR_U":
        /*
      Update a user level variable.
      Function parameters for this API username,variableUuid,body
        */
        return new Promise((resolve, reject) => {
          this.updatePipelineVariableForUser(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "UPDATE_REPOSITORY_PIPELINE_CON":
        /*
      Update the pipelines configuration for a repository.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.updateRepositoryPipelineConfig(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "UPDATE_REPOSITORY_PIPELINE_KEY_P":
        /*
      Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
      Function parameters for this API username,repoSlug,body
        */
        return new Promise((resolve, reject) => {
          this.updateRepositoryPipelineKeyPair(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "UPDATE_REPOSITORY_PIPELINE_KNOWN_H":
        /*
      Update a repository level known host.
      Function parameters for this API username,repoSlug,knownHostUuid,body
        */
        return new Promise((resolve, reject) => {
          this.updateRepositoryPipelineKnownHost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "UPDATE_REPOSITORY_PIPELINE_VARIA":
        /*
      Update a repository level variable.
      Function parameters for this API username,repoSlug,variableUuid,body
        */
        return new Promise((resolve, reject) => {
          this.updateRepositoryPipelineVariable(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        /*
      Vote for this issue.  To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        /*
      Start watching this issue.  To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        /*
      Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [&#x60;POST&#x60;](../../branch-restrictions#post) for details.
      Function parameters for this API username,repoSlug,id,body
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugBranchRestrictionsIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        /*
      Updates a comment.  Comments can only be updated by their author.
      Function parameters for this API username,commentId,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommentsCommentIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        /*
      Identical to &#x60;UPDATE /snippets/encoded_id&#x60;, except that this endpoint takes an explicit commit revision. Only the snippet&#39;s \&quot;HEAD\&quot;/\&quot;tip\&quot; (most recent) version can be updated and requests on all other, older revisions fail by returning a 405 status.  Usage of this endpoint over the unrestricted &#x60;/snippets/encoded_id&#x60; could be desired if the caller wants to be sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.  This can be considered a so-called \&quot;Compare And Swap\&quot;, or CAS operation.  Other than that, the two endpoints are identical in behavior.
      Function parameters for this API username,encodedId,nodeId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdNodeIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID":
        /*
      Used to update a snippet. Use this to add and delete files and to change a snippet&#39;s title.  To update a snippet, one can either PUT a full snapshot, or only the parts that need to be changed.  The contract for PUT on this API is that properties missing from the request remain untouched so that snippets can be efficiently manipulated with differential payloads.  To delete a property (e.g. the title, or a file), include its name in the request, but omit its value (use &#x60;null&#x60;).  As in Git, explicit renaming of files is not supported. Instead, to rename a file, delete it and add it again under another name. This can be done atomically in a single request. Rename detection is left to the SCM.  PUT supports three different content types for both request and response bodies:  * &#x60;application/json&#x60; * &#x60;multipart/related&#x60; * &#x60;multipart/form-data&#x60;  The content type used for the request body can be different than that used for the response. Content types are specified using standard HTTP headers.  Use the &#x60;Content-Type&#x60; and &#x60;Accept&#x60; headers to select the desired request and response format.   application/json ----------------  As with creation and retrieval, the content type determines what properties can be manipulated. &#x60;application/json&#x60; does not support file contents and is therefore limited to a snippet&#39;s meta data.  To update the title, without changing any of its files:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: \&quot;Updated title\&quot;}&#39;   To delete the title:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: null}&#39;  Not all parts of a snippet can be manipulated. The owner and creator for instance are immutable.   multipart/related -----------------  &#x60;multipart/related&#x60; can be used to manipulate all of a snippet&#39;s properties. The body is identical to a POST. properties omitted from the request are left unchanged. Since the &#x60;start&#x60; part contains JSON, the mechanism for manipulating the snippet&#39;s meta data is identical to &#x60;application/json&#x60; requests.  To update one of a snippet&#39;s file contents, while also changing its title:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 288     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My updated snippet\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      Updated file contents.      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  Here only the parts that are changed are included in the body. The other files remain untouched.  Note the use of the &#x60;files&#x60; list in the JSON part. This list contains the files that are being manipulated. This list should have corresponding multiparts in the request that contain the new contents of these files.  If a filename in the &#x60;files&#x60; list does not have a corresponding part, it will be deleted from the snippet, as shown below:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;files\&quot;: {         \&quot;image.png\&quot;: {}       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  To simulate a rename, delete a file and add the same file under another name:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 212     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {         \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;bar.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;bar.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;bar.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--   multipart/form-data -----------------  Again, one can also use &#x60;multipart/form-data&#x60; to manipulate file contents and meta data atomically.      $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title&#x3D;\&quot;My updated snippet\&quot; -F file&#x3D;@foo.txt      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 351     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My updated snippet     ------------------------------63a4b224c59f  To delete a file, omit its contents while including its name in the &#x60;files&#x60; field:      $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files&#x3D;image.png      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 149     Content-Type: multipart/form-data; boundary&#x3D;----------------------------ef8871065a86      ------------------------------ef8871065a86     Content-Disposition: form-data; name&#x3D;\&quot;files\&quot;      image.png     ------------------------------ef8871065a86--  The explicit use of the &#x60;files&#x60; element in &#x60;multipart/related&#x60; and &#x60;multipart/form-data&#x60; is only required when deleting files. The default mode of operation is for file parts to be processed, regardless of whether or not they are listed in &#x60;files&#x60;, as a convenience to the client.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        /*
      Used to start watching a specific snippet. Returns 204 (No Content).
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdWatchPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        /*
      Adds the specified user to the repository&#39;s list of default reviewers.  This method is idempotent. Adding a user a second time has no effect.
      Function parameters for this API username,targetUsername,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID":
        /*
      Mutates the specified pull request.  This can be used to change the pull request&#39;s branches or description.  Only open pull requests can be mutated.
      Function parameters for this API username,repoSlug,pullRequestId,opts
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS_UID":
        /*
      Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60;
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        /*
      Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The &#x60;key&#x60; should not be specified in the body of request (since it is already present in the URL). The &#x60;name&#x60; is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the &#x60;Location&#x60; header of the response.
      Function parameters for this API owner,projectKey,body
        */
        return new Promise((resolve, reject) => {
          this.teamsOwnerProjectsProjectKeyPut(
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
  // This is a function for usersUsernameHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  usersUsernameHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidPut(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut
  /* Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * &#x60;state&#x60; * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;refname&#x60;  The &#x60;key&#x60; cannot be changed. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitstatusesApi(); // String | // String | // String | The commit's SHA // String | The commit status' unique key
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ /*let key = "key_example";*/ let opts = {
      body: new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      incomingOptions.key,
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

  // This is a function for repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut
  /* Used to update the current status of a build status object on the specific commit.  This operation can also be used to change other properties of the build status:  * &#x60;state&#x60; * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;refname&#x60;  The &#x60;key&#x60; cannot be changed. */
  repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The commit's SHA // String | The commit status' unique key
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ /*let key = "key_example";*/ let opts = {
      body: new Bitbucket.Commitstatus() // Commitstatus | The updated build status object
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      incomingOptions.key,
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

  // This is a function for repositoriesUsernameRepoSlugHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  repositoriesUsernameRepoSlugHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPut
  /* Since this endpoint can be used to both update and to create a repository, the request body depends on the intent.  ### Creation  See the POST documentation for the repository endpoint for an example of the request body.  ### Update  Note: Changing the &#x60;name&#x60; of the repository will cause the location to be changed. This is because the URL of the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the request to fail if the newly created slug conflicts with an existing repository&#39;s slug. But if there is no conflict, the new location will be returned in the &#x60;Location&#x60; header of the response. */
  repositoriesUsernameRepoSlugPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ let opts = {
      body: new Bitbucket.Repository() // Repository | The repository that is to be updated.  Note that the elements \"owner\" and \"full_name\" are ignored since the URL implies them.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
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

  // This is a function for addonLinkersLinkerKeyValuesPut
  /*  */
  addonLinkersLinkerKeyValuesPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesPut(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for addonPut
  /*  */
  addonPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi();
    apiInstance.addonPut((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for updatePipelineVariableForTeam
  /* Update a team level variable. */
  updatePipelineVariableForTeam(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable // PipelineVariable | The updated variable.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ /*let body = new Bitbucket.PipelineVariable();*/ apiInstance.updatePipelineVariableForTeam(
      incomingOptions.username,
      incomingOptions.variableUuid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for updatePipelineVariableForUser
  /* Update a user level variable. */
  updatePipelineVariableForUser(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable // PipelineVariable | The updated variable.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ /*let body = new Bitbucket.PipelineVariable();*/ apiInstance.updatePipelineVariableForUser(
      incomingOptions.username,
      incomingOptions.variableUuid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for updateRepositoryPipelineConfig
  /* Update the pipelines configuration for a repository. */
  updateRepositoryPipelineConfig(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // PipelinesConfig | The updated repository pipelines configuration.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.PipelinesConfig();*/ apiInstance.updateRepositoryPipelineConfig(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for updateRepositoryPipelineKeyPair
  /* Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container. */
  updateRepositoryPipelineKeyPair(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // PipelineSshKeyPair | The created or updated SSH key pair.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let body = new Bitbucket.PipelineSshKeyPair();*/ apiInstance.updateRepositoryPipelineKeyPair(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for updateRepositoryPipelineKnownHost
  /* Update a repository level known host. */
  updateRepositoryPipelineKnownHost(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the known host to update // PipelineKnownHost | The updated known host.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let knownHostUuid = "knownHostUuid_example";*/ /*let body = new Bitbucket.PipelineKnownHost();*/ apiInstance.updateRepositoryPipelineKnownHost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.knownHostUuid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for updateRepositoryPipelineVariable
  /* Update a repository level variable. */
  updateRepositoryPipelineVariable(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the variable to update // PipelineVariable | The updated variable
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let variableUuid = "variableUuid_example";*/ /*let body = new Bitbucket.PipelineVariable();*/ apiInstance.updateRepositoryPipelineVariable(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.variableUuid,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVotePut
  /* Vote for this issue.  To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful. */
  repositoriesUsernameRepoSlugIssuesIssueIdVotePut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchPut
  /* Start watching this issue.  To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful. */
  repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdPut
  /* Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [&#x60;POST&#x60;](../../branch-restrictions#post) for details. */
  repositoriesUsernameRepoSlugBranchRestrictionsIdPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.BranchrestrictionsApi(); // String | // String | // String | The restriction rule's i // Branchrestriction | The new version of the existing rule
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let id = "id_example";*/ /*let body = new Bitbucket.Branchrestriction();*/ apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  teamsUsernameHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidPut(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommentsCommentIdPut
  /* Updates a comment.  Comments can only be updated by their author. */
  snippetsUsernameEncodedIdCommentsCommentIdPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let commentId = "commentId_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdCommentsCommentIdPut(
      incomingOptions.username,
      incomingOptions.commentId,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdNodeIdPut
  /* Identical to &#x60;UPDATE /snippets/encoded_id&#x60;, except that this endpoint takes an explicit commit revision. Only the snippet&#39;s \&quot;HEAD\&quot;/\&quot;tip\&quot; (most recent) version can be updated and requests on all other, older revisions fail by returning a 405 status.  Usage of this endpoint over the unrestricted &#x60;/snippets/encoded_id&#x60; could be desired if the caller wants to be sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET.  This can be considered a so-called \&quot;Compare And Swap\&quot;, or CAS operation.  Other than that, the two endpoints are identical in behavior. */
  snippetsUsernameEncodedIdNodeIdPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet's id // String | A commit revision (SHA1).
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ /*let nodeId = "nodeId_example";*/ apiInstance.snippetsUsernameEncodedIdNodeIdPut(
      incomingOptions.username,
      incomingOptions.encodedId,
      incomingOptions.nodeId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdPut
  /* Used to update a snippet. Use this to add and delete files and to change a snippet&#39;s title.  To update a snippet, one can either PUT a full snapshot, or only the parts that need to be changed.  The contract for PUT on this API is that properties missing from the request remain untouched so that snippets can be efficiently manipulated with differential payloads.  To delete a property (e.g. the title, or a file), include its name in the request, but omit its value (use &#x60;null&#x60;).  As in Git, explicit renaming of files is not supported. Instead, to rename a file, delete it and add it again under another name. This can be done atomically in a single request. Rename detection is left to the SCM.  PUT supports three different content types for both request and response bodies:  * &#x60;application/json&#x60; * &#x60;multipart/related&#x60; * &#x60;multipart/form-data&#x60;  The content type used for the request body can be different than that used for the response. Content types are specified using standard HTTP headers.  Use the &#x60;Content-Type&#x60; and &#x60;Accept&#x60; headers to select the desired request and response format.   application/json ----------------  As with creation and retrieval, the content type determines what properties can be manipulated. &#x60;application/json&#x60; does not support file contents and is therefore limited to a snippet&#39;s meta data.  To update the title, without changing any of its files:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: \&quot;Updated title\&quot;}&#39;   To delete the title:      $ curl -X POST -H \&quot;Content-Type: application/json\&quot; https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d &#39;{\&quot;title\&quot;: null}&#39;  Not all parts of a snippet can be manipulated. The owner and creator for instance are immutable.   multipart/related -----------------  &#x60;multipart/related&#x60; can be used to manipulate all of a snippet&#39;s properties. The body is identical to a POST. properties omitted from the request are left unchanged. Since the &#x60;start&#x60; part contains JSON, the mechanism for manipulating the snippet&#39;s meta data is identical to &#x60;application/json&#x60; requests.  To update one of a snippet&#39;s file contents, while also changing its title:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 288     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;title\&quot;: \&quot;My updated snippet\&quot;,       \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;foo.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;foo.txt\&quot;      Updated file contents.      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  Here only the parts that are changed are included in the body. The other files remain untouched.  Note the use of the &#x60;files&#x60; list in the JSON part. This list contains the files that are being manipulated. This list should have corresponding multiparts in the request that contain the new contents of these files.  If a filename in the &#x60;files&#x60; list does not have a corresponding part, it will be deleted from the snippet, as shown below:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 188     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {       \&quot;files\&quot;: {         \&quot;image.png\&quot;: {}       }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--  To simulate a rename, delete a file and add the same file under another name:      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 212     Content-Type: multipart/related; start&#x3D;\&quot;snippet\&quot;; boundary&#x3D;\&quot;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;\&quot;     MIME-Version: 1.0      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: application/json; charset&#x3D;\&quot;utf-8\&quot;     MIME-Version: 1.0     Content-ID: snippet      {         \&quot;files\&quot;: {           \&quot;foo.txt\&quot;: {},           \&quot;bar.txt\&quot;: {}         }     }      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;     Content-Type: text/plain; charset&#x3D;\&quot;us-ascii\&quot;     MIME-Version: 1.0     Content-Transfer-Encoding: 7bit     Content-ID: \&quot;bar.txt\&quot;     Content-Disposition: attachment; filename&#x3D;\&quot;bar.txt\&quot;      foo      --&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;&#x3D;1438169132528273974&#x3D;&#x3D;--   multipart/form-data -----------------  Again, one can also use &#x60;multipart/form-data&#x60; to manipulate file contents and meta data atomically.      $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title&#x3D;\&quot;My updated snippet\&quot; -F file&#x3D;@foo.txt      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 351     Content-Type: multipart/form-data; boundary&#x3D;----------------------------63a4b224c59f      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;file\&quot;; filename&#x3D;\&quot;foo.txt\&quot;     Content-Type: text/plain      foo      ------------------------------63a4b224c59f     Content-Disposition: form-data; name&#x3D;\&quot;title\&quot;      My updated snippet     ------------------------------63a4b224c59f  To delete a file, omit its contents while including its name in the &#x60;files&#x60; field:      $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files&#x3D;image.png      PUT /2.0/snippets/evzijst/kypj HTTP/1.1     Content-Length: 149     Content-Type: multipart/form-data; boundary&#x3D;----------------------------ef8871065a86      ------------------------------ef8871065a86     Content-Disposition: form-data; name&#x3D;\&quot;files\&quot;      image.png     ------------------------------ef8871065a86--  The explicit use of the &#x60;files&#x60; element in &#x60;multipart/related&#x60; and &#x60;multipart/form-data&#x60; is only required when deleting files. The default mode of operation is for file parts to be processed, regardless of whether or not they are listed in &#x60;files&#x60;, as a convenience to the client. */
  snippetsUsernameEncodedIdPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet's id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdPut(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdWatchPut
  /* Used to start watching a specific snippet. Returns 204 (No Content). */
  snippetsUsernameEncodedIdWatchPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdWatchPut(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut
  /* Adds the specified user to the repository&#39;s list of default reviewers.  This method is idempotent. Adding a user a second time has no effect. */
  repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let targetUsername = "targetUsername_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernamePut(
      incomingOptions.username,
      incomingOptions.targetUsername,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut
  /* Mutates the specified pull request.  This can be used to change the pull request&#39;s branches or description.  Only open pull requests can be mutated. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. // Number | The id of the open pull request.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let pullRequestId = 56;*/ let opts = {
      body: new Bitbucket.Pullrequest() // Pullrequest | The pull request that is to be updated.
    };

    Object.keys(incomingOptions.opts).forEach(
      key =>
        incomingOptions.opts[key] === undefined &&
        delete incomingOptions.opts[key]
    );
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.pullRequestId,
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

  // This is a function for repositoriesUsernameRepoSlugHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  repositoriesUsernameRepoSlugHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidPut(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  teamsUsernameHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidPut(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksUidPut
  /* Updates the specified webhook subscription.  The following properties can be mutated:  * &#x60;description&#x60; * &#x60;url&#x60; * &#x60;active&#x60; * &#x60;events&#x60; */
  usersUsernameHooksUidPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidPut(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for teamsOwnerProjectsProjectKeyPut
  /* Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The &#x60;key&#x60; should not be specified in the body of request (since it is already present in the URL). The &#x60;name&#x60; is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the &#x60;Location&#x60; header of the response. */
  teamsOwnerProjectsProjectKeyPut(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.ProjectsApi(); // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). // Project |
    /*let owner = "owner_example";*/ /*let projectKey = "projectKey_example";*/ /*let body = new Bitbucket.Project();*/ apiInstance.teamsOwnerProjectsProjectKeyPut(
      incomingOptions.owner,
      incomingOptions.projectKey,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  async delete(entity, options) {
    switch (entity) {
      case "USERS_USERNAME_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given user account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG":
        /*
      Deletes the repository. This is an irreversible operation.  This does not affect its forks.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given repository.
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON":
        /*

      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.addonDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "ADDON_LINKERS_LINKER_KEY_VALUES_DE":
        /*

      Function parameters for this API linkerKey
        */
        return new Promise((resolve, reject) => {
          this.addonLinkersLinkerKeyValuesDelete_0(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "DELETE_PIPELINE_VARIABLE_F":
        /*
      Delete a team level variable.
      Function parameters for this API username,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.deletePipelineVariableForTeam(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "DELETE_PIPELINE_VARIABLE_F":
        /*
      Delete an account level variable.
      Function parameters for this API username,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.deletePipelineVariableForUser(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "DELETE_REPOSITORY_PIPELINE_K":
        /*
      Delete the repository SSH key pair.
      Function parameters for this API username,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.deleteRepositoryPipelineKeyPair(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "DELETE_REPOSITORY_PIPELINE_KNO":
        /*
      Delete a repository level known host.
      Function parameters for this API username,repoSlug,knownHostUuid
        */
        return new Promise((resolve, reject) => {
          this.deleteRepositoryPipelineKnownHost(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "DELETE_REPOSITORY_PIPELINE_VA":
        /*
      Delete a repository level variable.
      Function parameters for this API username,repoSlug,variableUuid
        */
        return new Promise((resolve, reject) => {
          this.deleteRepositoryPipelineVariable(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_ATTACHMENTS_PATH":
        /*
      Deletes an attachment.
      Function parameters for this API username,path,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID":
        /*
      Deletes the specified issue. This requires write access to the repository.
      Function parameters for this API username,issueId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_VOTE":
        /*
      Retract your vote.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_ISSUES_ISSUE_ID_WATCH":
        /*
      Stop watching this issue.
      Function parameters for this API username,repoSlug,issueId
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_BRANCH_RESTRICTIONS_ID":
        /*
      Deletes an existing branch restriction rule.
      Function parameters for this API username,repoSlug,id
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given team account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_COMMENTS_COMMENT_ID":
        /*
      Deletes a snippet comment.  Comments can only be removed by their author.
      Function parameters for this API username,commentId,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdCommentsCommentIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID":
        /*
      Deletes a snippet and returns an empty response.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_NODE_ID":
        /*
      Deletes the snippet.  Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an older commit results in a 405 status code.  To delete a snippet, regardless of whether or not concurrent changes are being made to it, use &#x60;DELETE /snippets/{encoded_id}&#x60; instead.
      Function parameters for this API username,nodeId,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdNodeIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "SNIPPETS_USERNAME_ENCODED_ID_WATCH":
        /*
      Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.
      Function parameters for this API username,encodedId
        */
        return new Promise((resolve, reject) => {
          this.snippetsUsernameEncodedIdWatchDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DEFAULT_REVIEWERS_TARGET_USERNAME":
        /*
      Removes a default reviewer from the repository.
      Function parameters for this API username,targetUsername,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_PULLREQUESTS_PULL_REQUEST_ID_APPROVE":
        /*
      Redact the authenticated user&#39;s approval of the specified pull request.
      Function parameters for this API username,pullRequestId,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_DOWNLOADS_FILENAME":
        /*
      Deletes the specified download artifact from the repository.
      Function parameters for this API username,filename,repoSlug
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugDownloadsFilenameDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_COMMIT_NODE_APPROVE":
        /*
      Redact the authenticated user&#39;s approval of the specified commit.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
      Function parameters for this API username,repoSlug,node
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugCommitNodeApproveDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "REPOSITORIES_USERNAME_REPO_SLUG_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given repository.
      Function parameters for this API username,repoSlug,uid
        */
        return new Promise((resolve, reject) => {
          this.repositoriesUsernameRepoSlugHooksUidDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case "TEAMS_USERNAME_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given team account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.teamsUsernameHooksUidDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "USERS_USERNAME_HOOKS_UID":
        /*
      Deletes the specified webhook subscription from the given user account.
      Function parameters for this API username,uid
        */
        return new Promise((resolve, reject) => {
          this.usersUsernameHooksUidDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case "TEAMS_OWNER_PROJECTS_PROJECT_KEY":
        /*

      Function parameters for this API owner,projectKey
        */
        return new Promise((resolve, reject) => {
          this.teamsOwnerProjectsProjectKeyDelete(
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
  // This is a function for usersUsernameHooksUidDelete
  /* Deletes the specified webhook subscription from the given user account. */
  usersUsernameHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.UsersApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidDelete(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDelete
  /* Deletes the repository. This is an irreversible operation.  This does not affect its forks. */
  repositoriesUsernameRepoSlugDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | This can either be the username or the UUID of the user, surrounded by curly-braces, for example: `{user UUID}`. // String | This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksUidDelete
  /* Deletes the specified webhook subscription from the given repository. */
  repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.RepositoriesApi(); // String | // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for addonDelete
  /*  */
  addonDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi();
    apiInstance.addonDelete((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for addonLinkersLinkerKeyValuesDelete
  /*  */
  addonLinkersLinkerKeyValuesDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesDelete(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for addonLinkersLinkerKeyValuesDelete_0
  /*  */
  addonLinkersLinkerKeyValuesDelete_0(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.AddonApi(); // String |
    /*let linkerKey = "linkerKey_example";*/ apiInstance.addonLinkersLinkerKeyValuesDelete_0(
      incomingOptions.linkerKey,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for deletePipelineVariableForTeam
  /* Delete a team level variable. */
  deletePipelineVariableForTeam(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable to delete.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.deletePipelineVariableForTeam(
      incomingOptions.username,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for deletePipelineVariableForUser
  /* Delete an account level variable. */
  deletePipelineVariableForUser(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The UUID of the variable to delete.
    /*let username = "username_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.deletePipelineVariableForUser(
      incomingOptions.username,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for deleteRepositoryPipelineKeyPair
  /* Delete the repository SSH key pair. */
  deleteRepositoryPipelineKeyPair(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.deleteRepositoryPipelineKeyPair(
      incomingOptions.username,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for deleteRepositoryPipelineKnownHost
  /* Delete a repository level known host. */
  deleteRepositoryPipelineKnownHost(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the known host to delete.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let knownHostUuid = "knownHostUuid_example";*/ apiInstance.deleteRepositoryPipelineKnownHost(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.knownHostUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for deleteRepositoryPipelineVariable
  /* Delete a repository level variable. */
  deleteRepositoryPipelineVariable(incomingOptions, cb) {
    const Bitbucket = require("./dist");

    let apiInstance = new Bitbucket.PipelinesApi(); // String | The account // String | The repository // String | The UUID of the variable to delete.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let variableUuid = "variableUuid_example";*/ apiInstance.deleteRepositoryPipelineVariable(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.variableUuid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete
  /* Deletes an attachment. */
  repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String | // String |
    /*let username = "username_example";*/ /*let path = "path_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(
      incomingOptions.username,
      incomingOptions.path,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdDelete
  /* Deletes the specified issue. This requires write access to the repository. */
  repositoriesUsernameRepoSlugIssuesIssueIdDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let issueId = "issueId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdDelete(
      incomingOptions.username,
      incomingOptions.issueId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete
  /* Retract your vote. */
  repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete
  /* Stop watching this issue. */
  repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.IssueTrackerApi(); // String | // String | // Number | The issue's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let issueId = 56;*/ apiInstance.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.issueId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugBranchRestrictionsIdDelete
  /* Deletes an existing branch restriction rule. */
  repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.BranchrestrictionsApi(); // String | // String | // String | The restriction rule's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let id = "id_example";*/ apiInstance.repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidDelete
  /* Deletes the specified webhook subscription from the given team account. */
  teamsUsernameHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.TeamsApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidDelete(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdCommentsCommentIdDelete
  /* Deletes a snippet comment.  Comments can only be removed by their author. */
  snippetsUsernameEncodedIdCommentsCommentIdDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let commentId = "commentId_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdCommentsCommentIdDelete(
      incomingOptions.username,
      incomingOptions.commentId,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdDelete
  /* Deletes a snippet and returns an empty response. */
  snippetsUsernameEncodedIdDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet's id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdDelete(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdNodeIdDelete
  /* Deletes the snippet.  Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an older commit results in a 405 status code.  To delete a snippet, regardless of whether or not concurrent changes are being made to it, use &#x60;DELETE /snippets/{encoded_id}&#x60; instead. */
  snippetsUsernameEncodedIdNodeIdDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | // String | The snippet's id.
    /*let username = "username_example";*/ /*let nodeId = "nodeId_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdNodeIdDelete(
      incomingOptions.username,
      incomingOptions.nodeId,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for snippetsUsernameEncodedIdWatchDelete
  /* Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success. */
  snippetsUsernameEncodedIdWatchDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.SnippetsApi(); // String | // String | The snippet id.
    /*let username = "username_example";*/ /*let encodedId = "encodedId_example";*/ apiInstance.snippetsUsernameEncodedIdWatchDelete(
      incomingOptions.username,
      incomingOptions.encodedId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete
  /* Removes a default reviewer from the repository. */
  repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let targetUsername = "targetUsername_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDefaultReviewersTargetUsernameDelete(
      incomingOptions.username,
      incomingOptions.targetUsername,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete
  /* Redact the authenticated user&#39;s approval of the specified pull request. */
  repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(
    incomingOptions,
    cb
  ) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.PullrequestsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let pullRequestId = "pullRequestId_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdApproveDelete(
      incomingOptions.username,
      incomingOptions.pullRequestId,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugDownloadsFilenameDelete
  /* Deletes the specified download artifact from the repository. */
  repositoriesUsernameRepoSlugDownloadsFilenameDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.DownloadsApi(); // String | // String | // String |
    /*let username = "username_example";*/ /*let filename = "filename_example";*/ /*let repoSlug = "repoSlug_example";*/ apiInstance.repositoriesUsernameRepoSlugDownloadsFilenameDelete(
      incomingOptions.username,
      incomingOptions.filename,
      incomingOptions.repoSlug,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data, response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugCommitNodeApproveDelete
  /* Redact the authenticated user&#39;s approval of the specified commit.  This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits. */
  repositoriesUsernameRepoSlugCommitNodeApproveDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.CommitsApi(); // String | // String | // String | The commit's SHA1.
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let node = "node_example";*/ apiInstance.repositoriesUsernameRepoSlugCommitNodeApproveDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.node,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for repositoriesUsernameRepoSlugHooksUidDelete
  /* Deletes the specified webhook subscription from the given repository. */
  repositoriesUsernameRepoSlugHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let repoSlug = "repoSlug_example";*/ /*let uid = "uid_example";*/ apiInstance.repositoriesUsernameRepoSlugHooksUidDelete(
      incomingOptions.username,
      incomingOptions.repoSlug,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsUsernameHooksUidDelete
  /* Deletes the specified webhook subscription from the given team account. */
  teamsUsernameHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.teamsUsernameHooksUidDelete(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for usersUsernameHooksUidDelete
  /* Deletes the specified webhook subscription from the given user account. */
  usersUsernameHooksUidDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.WebhooksApi(); // String | // String | The installed webhook's id
    /*let username = "username_example";*/ /*let uid = "uid_example";*/ apiInstance.usersUsernameHooksUidDelete(
      incomingOptions.username,
      incomingOptions.uid,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, "", response);
        }
      }
    );
  }

  // This is a function for teamsOwnerProjectsProjectKeyDelete
  /*  */
  teamsOwnerProjectsProjectKeyDelete(incomingOptions, cb) {
    const Bitbucket = require("./dist");
    let defaultClient = Bitbucket.ApiClient.instance;
    // Configure API key authorization: api_key
    let api_key = defaultClient.authentications["api_key"];
    api_key.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    api_key.apiKeyPrefix = incomingOptions.apiKeyPrefix || "Token";
    // Configure HTTP basic authorization: basic
    let basic = defaultClient.authentications["basic"];
    basic.username = "YOUR USERNAME";
    basic.password = "YOUR PASSWORD";
    // Configure OAuth2 access token for authorization: oauth2
    let oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = incomingOptions.accessToken;

    let apiInstance = new Bitbucket.ProjectsApi(); // String | The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). // String | The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)).
    /*let owner = "owner_example";*/ /*let projectKey = "projectKey_example";*/ apiInstance.teamsOwnerProjectsProjectKeyDelete(
      incomingOptions.owner,
      incomingOptions.projectKey,
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
      default:
        throw ErrorHelper.getError(`Can't get entity`, 404);
    }
  }
}
module.exports = new BitbucketService();
