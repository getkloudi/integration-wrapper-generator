const axios = require('axios');
const ErrorHelper = require('../../../helpers/ErrorHelper');
const nconf = require('nconf');
const qs = require('querystring');

class RollbarService {
  get name() {
    return 'ROLLBAR';
  }

  get description() {
    return 'Rollbar helps development teams find and fix errors faster. Rollbar automates error monitoring and triaging, so developers can fix errors that matter within minutes, and build software quickly and painlessly';
  }

  get icon() {
    return 'rollbar.svg';
  }

  get category() {
    return ['Exception Monitoring'];
  }

  get apiEndpoint() {
    return 'https://api.rollbar.com/api/1';
  }

  get authMethod() {
    return 'API_TOKEN';
  }

  get authEndpoint() {
    return;
  }

  get apiTokenURL() {
    return 'https://rollbar.com/settings/accounts/{account_name}/access_tokens';
  }

  get scopes() {
    return;
  }

  get requiredAuthParams() {
    return ['account_name', 'account_access_token'];
  }

  get primaryAction() {
    return {
      type: 'INPUT_API_TOKEN_PARAMS',
      requiredAuthParams: this.requiredAuthParams,
    };
  }

  get webhooks() {
    return ['issue'];
  }

  get webhookToTasksMap() {
    return [
      {
        name: 'task.pepper.SYNC_ROLLBAR_ITEM',
        webhook: 'issue',
      },
      {
        name: 'task.pepper.SYNC_SENTRY_ISSUE_EVENT',
        webhook: 'issue_event',
      },
    ];
  }

  get entities() {
    return;
  }

  getNextPaginationURIFromResponse(response) {
    //TODO: Add custom getNextPaginationURIFromResponse functionality here
  }

  async connect(authParams) {
    if (authParams.account_access_token && authParams.account_name) {
      return {
        integrationSpecificParams: {
          accountName: authParams.account_name,
        },
        accessToken: authParams.account_access_token,
      };
    } else {
      throw ErrorHelper.getError('auth_token missing', 400);
    }
  }

  async getThirdPartyProjects(incomingOptions) {
    const res = await this.get('PROJECTS', incomingOptions);
    const projects = res.data;
    const data = [];
    for (let project of projects) {
      const res = await this.get('PROJECT_ID_ACCESS_TOKENS', {
        ...incomingOptions,
        id: project.id,
      });
      const value = res.data
        .map((item) => ({
          name: item.name,
          token: item.access_token,
        }))
        .find((item) => item.name === 'kloudi-access-token');
      if (!!value) {
        project['projectSpecificParams'] = { projectAccessToken: value.token };
      } else {
        const res = await this.post('PROJECT_ID_ACCESS_TOKENS', {
          ...incomingOptions,
          id: project.id,
          body: {
            name: 'kloudi-access-token',
            scopes: ['write', 'read', 'post_server_item', 'post_client_item'],
          },
        });
        project['projectSpecificParams'] = {
          projectAccessToken: res.data.access_token,
        };
      }
      project['organizationName'] = incomingOptions.opts.organizationName;
      data.push(project);
    }
    return { data: data };
  }

  async registerWebhooks(incomingOptions) {
    //TODO: Add custom registerWebhooks functionality here
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');
    try {
      const res = await axios.default.post(
        taskUri,
        {
          pepper_task: [
            'task.pepper.SYNC_LEGACY_ROLLBAR_ITEMS',
            'task.pepper.SYNC_ROLLBAR_TEAM_MEMBERS',
          ],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          third_party_project: incomingOptions.thirdPartyProject,
          project_access_token:
            incomingOptions.thirdPartyProject.projectSpecificParams
              .projectAccessToken,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      return 'Ok';
    } catch (error) {
      console.error(error.response || error);
      return 'ERROR';
    }
  }

  async get(entity, options) {
    switch (entity) {
      case 'DEPLOY':
        /*



&#x60;deploy_id&#x60; must be an ID for a deploy in the project. These IDs are returned as the id field in other API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/deploy/12345/&#x60; (&#x60;12345&#x60; is the Deploy ID).


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.deployGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DEPLOYS':
        /*



Returns all deploys in the project, most recent first, in pages of 20.


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.deploysGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INVITE_INVITE_ID':
        /*



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60;


      Function parameters for this API inviteId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.inviteInviteIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ITEM_BY_COUNTER_COUNTER':
        /*



&#x60;counter&#x60; must be an item counter for an item in the project. The counter can be found in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; (456 is the counter).  The success response is a 301 redirect like this:  &#x60;&#x60;&#x60; HTTP/1.1 301 Moved Permanently Location: /item/272505123  {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;itemId\&quot;: 272505123,     \&quot;path\&quot;: \&quot;/item/272505123\&quot;,     \&quot;uri\&quot;: \&quot;/item/272505123\&quot;   } } &#x60;&#x60;&#x60;


      Function parameters for this API counter,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.itemByCounterCounterGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUE':
      case 'ITEM_ITEMID':
        /*



&#x60;itemid&#x60; must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; – that is the \&quot;counter\&quot;, which can be used in the following API call.


      Function parameters for this API itemid,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.itemItemidGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ITEMS':
        /*



# Examples Get the 101st through 199th active items: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?status&#x3D;active&amp;page&#x3D;2&#39; &#x60;&#x60;&#x60; Get the first page of items that are error or critical, in the production environment: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?level&#x3D;error&amp;level&#x3D;critical&amp;environment&#x3D;production&#39; &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.itemsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PEOPLE_DELETE_JOBS_JOB_ID':
        /*



Check on the status of a person deletion request.  The response will include a status, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;state\&quot;: \&quot;success\&quot;, // possible values are \&quot;new\&quot;,\&quot;running\&quot;,\&quot;paused\&quot;,\&quot;success\&quot;,\&quot;cancelled\&quot;,\&quot;failed\&quot;     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60;


      Function parameters for this API jobId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.peopleDeleteJobsJobIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_ID_ACCESS_TOKENS':
        /*



List all project access tokens


      Function parameters for this API xRollbarAccessToken,id
        */
        return new Promise((resolve, reject) => {
          this.projectIdAccessTokensGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID':
        /*



Get a project


      Function parameters for this API projectId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECTS':
        /*



List all projects


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.projectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REPORTS_ACTIVATED_COUNTS':
        /*



Analogous to \&quot;Daily New/Reactivated Items\&quot; graph on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of items that were first seen or reactivated in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.    # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.reportsActivatedCountsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REPORTS_OCCURRENCE_COUNTS':
        /*



Analogous to \&quot;Hourly Error/Critical Occurrences\&quot; and \&quot;Daily Error/Critical Occurrences\&quot; on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of matching active occurrences in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.  # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.reportsOccurrenceCountsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REPORTS_TOP_ACTIVE_ITEMS':
        /*



# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     // each element in the list is an object with an \&quot;item\&quot; object and a \&quot;counts\&quot; list     {         // data describing the item (similar to that returned by GET /item/:id)         \&quot;item\&quot;: {             \&quot;id\&quot;: 2071,             \&quot;counter\&quot;: 1007,             \&quot;environment\&quot;: \&quot;production\&quot;,             \&quot;framework\&quot;: 0,             \&quot;last_occurrence_timestamp\&quot;: 1408410581,             \&quot;level\&quot;: 40,             \&quot;occurrences\&quot;: 54,             \&quot;project_id\&quot;: 12345,             \&quot;title\&quot;: \&quot;Something went wrong\&quot;,             \&quot;unique_occurrences\&quot;: 5         },         // list of occurrence counts in the past 24 hours. Oldest first.         \&quot;counts\&quot;: [12, 10, 7, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 5, 6]     },     { /_* more elements ... *_/ }   ] } &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.reportsTopActiveItemsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOB_JOB_ID':
        /*



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885,     \&quot;result\&quot;: {...} // A RQL job resource if expand&#x3D;result is used in query string   } }&#x60;&#x60;


      Function parameters for this API jobId,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.rqlJobJobIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOB_JOB_ID_RESULT':
        /*



# Response The response will be a RQL job result resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;job_id\&quot;: 123,  // job id     \&quot;result\&quot;: {       \&quot;rows\&quot;: [{...}],       \&quot;selectionColumns\&quot;: [...],       \&quot;columns\&quot;: [...],       \&quot;errors\&quot;: [],       \&quot;warnings\&quot;: [],       \&quot;rowcount\&quot;: 1,       \&quot;executionTime\&quot;: 123     },     \&quot;job\&quot;: {...} // A RQL job resource if expand&#x3D;job is set in the query string   } }&#x60;&#x60;&#x60;


      Function parameters for this API jobId,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.rqlJobJobIdResultGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOBS':
        /*



# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: [     { ... }, // RQL job resource       ...   ] } &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.rqlJobsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM':
        /*



Get a team


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_INVITES':
        /*



Returns all invites ever sent for the team–pending, accepted, rejected, and canceled.  # Example response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;id\&quot;: 71328,       \&quot;from_user_id\&quot;: 5325,       \&quot;team_id\&quot;: 272686,       \&quot;to_email\&quot;: \&quot;gilfoyle@pidepiper.com\&quot;,       \&quot;status\&quot;: \&quot;pending\&quot;,       \&quot;date_created\&quot;: 1519946545,       \&quot;date_redeemed\&quot;: null     }   ] } &#x60;&#x60;&#x60;


      Function parameters for this API teamId,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdInvitesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*



Returns &#x60;200&#x60; if the team is assigned to a project, &#x60;404&#x60; if the team is not assigned to the project.  # Example responses  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60;  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 1,   \&quot;message\&quot;: \&quot;Project is not in this Team.\&quot; } &#x60;&#x60;&#x60;


      Function parameters for this API teamId,projectId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectProjectIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_PROJECTS':
        /*



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178029     },     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178030     }   ] } &#x60;&#x60;&#x60;


      Function parameters for this API teamId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*



Check if a user is assigned to a team


      Function parameters for this API teamId,userId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUserUserIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USERS':
        /*



List a team&#39;s users


      Function parameters for this API teamId,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUsersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAMS':
        /*



List all teams


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID':
        /*



Get user details for a given account  Returns basic information about the user, as relevant to the account your access token is for. This is the same information available on the \&quot;Members\&quot; page in the Rollbar UI.  # Sample Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {       \&quot;id\&quot;: 14,       \&quot;username\&quot;: \&quot;brian\&quot;,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;,       \&quot;email_enabled\&quot;: 1   } } &#x60;&#x60;&#x60;


      Function parameters for this API userId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.userUserIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID_PROJECTS':
        /*



# Example response: &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;projects\&quot;: [       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;mox\&quot;,         \&quot;id\&quot;: 1,         \&quot;account_id\&quot;: 61       },       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;moxrts\&quot;,         \&quot;id\&quot;: 25,         \&quot;account_id\&quot;: 61       }     ]   } }&#x60;&#x60;&#x60;


      Function parameters for this API userId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.userUserIdProjectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID_TEAMS':
        /*



List a user&#39;s teams


      Function parameters for this API xRollbarAccessToken,userId
        */
        return new Promise((resolve, reject) => {
          this.userUserIdTeamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USERS':
        /*



List all users who are members of an account #Response Format &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;users\&quot;: [     {       \&quot;username\&quot;: \&quot;brianr\&quot;,       \&quot;id\&quot;: 1,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;     },     {       \&quot;username\&quot;: \&quot;coryvirok\&quot;,       \&quot;id\&quot;: 2,       \&quot;email\&quot;: \&quot;cory@rollbar.com\&quot;     }     ]   } } &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.usersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSIONS_VERSION':
        /*

Code version details in one project

Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions


      Function parameters for this API xRollbarAccessToken,version,environment
        */
        return new Promise((resolve, reject) => {
          this.versionsVersionGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'VERSIONS_VERSION_ITEMS':
        /*

List items by code version

List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions


      Function parameters for this API xRollbarAccessToken,version,environment,event,opts
        */
        return new Promise((resolve, reject) => {
          this.versionsVersionItemsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INSTANCE_INSTANCE_ID':
        /*

Get an occurrence

Returns a JSON object describing the occurrence. This is similar to the \&quot;Raw JSON\&quot; section of the occurrence detail page.  &#x60;instance_id&#x60; must be an Occurrence ID for an occurrence in the project. These IDs are returned as the &#x60;id&#x60; field in other occurrence API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/&#x60; (&#x60;3209095494&#x60; is the Occurrence ID).


      Function parameters for this API xRollbarAccessToken,instanceId
        */
        return new Promise((resolve, reject) => {
          this.instanceInstanceIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INSTANCES':
        /*

List all occurrences in a project

Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.instancesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ITEM_ID_INSTANCES':
        /*

List all occurrences in an item

Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).


      Function parameters for this API xRollbarAccessToken,itemId,opts
        */
        return new Promise((resolve, reject) => {
          this.itemIdInstancesGet(options, (err, data, response) => {
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
  // This is a function for deployGet
  /*


&#x60;deploy_id&#x60; must be an ID for a deploy in the project. These IDs are returned as the id field in other API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/deploy/12345/&#x60; (&#x60;12345&#x60; is the Deploy ID).

 */
  deployGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.deployGet(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for deploysGet
  /*


Returns all deploys in the project, most recent first, in pages of 20.

 */
  deploysGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      page: 56, // Number | Page number, starting from 1. 20 deploys are returned per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.deploysGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for inviteInviteIdGet
  /*


# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60;

 */
  inviteInviteIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | // String | Use an account access token with 'read' scope
    /*let inviteId = "inviteId_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.inviteInviteIdGet(
      incomingOptions.inviteId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for itemByCounterCounterGet
  /*


&#x60;counter&#x60; must be an item counter for an item in the project. The counter can be found in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; (456 is the counter).  The success response is a 301 redirect like this:  &#x60;&#x60;&#x60; HTTP/1.1 301 Moved Permanently Location: /item/272505123  {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;itemId\&quot;: 272505123,     \&quot;path\&quot;: \&quot;/item/272505123\&quot;,     \&quot;uri\&quot;: \&quot;/item/272505123\&quot;   } } &#x60;&#x60;&#x60;

 */
  itemByCounterCounterGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | item counter for an item in the project  `counter` must be an item counter for an item in the project. The counter can be found in URLs like https://rollbar.com/myaccount/myproject/items/456/ (456 is the counter) // String | Use a project access token with 'read' scope
    /*let counter = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.itemByCounterCounterGet(
      incomingOptions.counter,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for itemItemidGet
  /*


&#x60;itemid&#x60; must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like &#x60;https://rollbar.com/myaccount/myproject/items/456/&#x60; – that is the \&quot;counter\&quot;, which can be used in the following API call.

 */
  itemItemidGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | Unique ID of the item  `itemid` must be an item ID for an item in the project. These IDs are returned as the id field in other API calls.  Note that they are NOT found in in URLs like https://rollbar.com/myaccount/myproject/items/456/ – that is the \"counter\", which can be used in the following API call // String | Use a project access token with 'read' scope
    /*let itemid = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.itemItemidGet(
      incomingOptions.itemid,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for itemsGet
  /*


# Examples Get the 101st through 199th active items: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?status&#x3D;active&amp;page&#x3D;2&#39; &#x60;&#x60;&#x60; Get the first page of items that are error or critical, in the production environment: &#x60;&#x60;&#x60;curl curl -H \&quot;X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\&quot; &#39;https://api.rollbar.com/items/?level&#x3D;error&amp;level&#x3D;critical&amp;environment&#x3D;production&#39; &#x60;&#x60;&#x60;

 */
  itemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      //  'assignedUser': "assignedUser_example", // String | If not empty, only items assigned to the specified user will be returned. Must be a valid Rollbar username, or you can use the keywords `assigned` (items that are assigned to any owner) or `unassigned` (items with no owner).
      //  'environment': "environment_example", // String | If not empty, only items in the specified environment will be returned. Specify multiple times to filter by multiple environments.
      //  'framework': "framework_example", // String | If not empty, only items in the specified framework will be returned. Specify multiple times to filter by multiple frameworks.
      //  'ids': "ids_example", // String | (comma-separated list of integers) if not empty, list of item IDs to return, instead of using all items in the project
      //  'level': "level_example", // String | If not empty, only items with the specified level will be returned. Valid values: `debug`, `info`, `warning`, `error`, `critical`. Specifiy multiple times to filter by multiple levels.
      // page: 56, // Number | Page number, starting from 1. 100 items are returned per page.
      //  'query': "query_example", // String | A search string, using the same format as the search box on the Items page.
      //  'status': "status_example" // String | If not empty, only items with the specified status will be returned. Valid values: `active`, `resolved`, `muted`, `archived`. Specify multiple times to filter by multiple statuses.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.itemsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for peopleDeleteJobsJobIdGet
  /*


Check on the status of a person deletion request.  The response will include a status, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;state\&quot;: \&quot;success\&quot;, // possible values are \&quot;new\&quot;,\&quot;running\&quot;,\&quot;paused\&quot;,\&quot;success\&quot;,\&quot;cancelled\&quot;,\&quot;failed\&quot;     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60;

 */
  peopleDeleteJobsJobIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | The id of the deletion job (from the response to a `POST` to `delete_jobs` // String | Use an account access token with 'read' scope
    /*let jobId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.peopleDeleteJobsJobIdGet(
      incomingOptions.jobId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectIdAccessTokensGet
  /*


List all project access tokens

 */
  projectIdAccessTokensGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scop // String |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let id = "id_example";*/ apiInstance.projectIdAccessTokensGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.id,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdGet
  /*


Get a project

 */
  projectProjectIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'read' scope
    /*let projectId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.projectProjectIdGet(
      incomingOptions.projectId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectsGet
  /*


List all projects

 */
  projectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.projectsGet(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for reportsActivatedCountsGet
  /*


Analogous to \&quot;Daily New/Reactivated Items\&quot; graph on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of items that were first seen or reactivated in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.    # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60;

 */
  reportsActivatedCountsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      bucketSize: 56, // Number | Size of each bucket, in seconds. Only valid value is `86400` (day). Data wil be returned in the project timezone.
      buckets: 60, // Number | Number of buckets to return. Must be in range `[2, 366]`.
      //  'environments': "environments_example" // String | Comma-separated list of environments to filter by.  Empty means \"any environment\".
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.reportsActivatedCountsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for reportsOccurrenceCountsGet
  /*


Analogous to \&quot;Hourly Error/Critical Occurrences\&quot; and \&quot;Daily Error/Critical Occurrences\&quot; on the Dashboard.  Returns an array of recent counts as &#x60;[timestamp, count]&#x60; pairs, where each count is the number of matching active occurrences in the time range &#x60;[timestamp, timestamp + bucket_size - 1]&#x60;.  Timestamps are UNIX timestamps, in whole seconds.  # Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     [       // timestamp       1408561200,       // count (number of occurrences from time 1408561200 until time 1408564799)       0     ],     [       1408564800,       0     ],     [       1408568400,       0     ],     [       1408572000,       6     ]   ] }&#x60;&#x60;&#x60;

 */
  reportsOccurrenceCountsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      bucketSize: "'86400'", // String | Size of each bucket, in seconds. Valid values are `60` (minute), `3600` (hour), and `86400` (day). Timezone for all buckets is GMT.
      //  'environments': "environments_example", // String | Comma-separated list of environments to filter by.  Empty means \"any environment\".
      minLevel: "'error'", // String | Minimum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`.
      //  'maxLevel': "maxLevel_example", // String | Maximum item level to filter by. One of `debug`, `info`, `warning`, `error`, or `critical`
      itemId: 56, // Number | Item ID to filter by.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.reportsOccurrenceCountsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for reportsTopActiveItemsGet
  /*


# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     // each element in the list is an object with an \&quot;item\&quot; object and a \&quot;counts\&quot; list     {         // data describing the item (similar to that returned by GET /item/:id)         \&quot;item\&quot;: {             \&quot;id\&quot;: 2071,             \&quot;counter\&quot;: 1007,             \&quot;environment\&quot;: \&quot;production\&quot;,             \&quot;framework\&quot;: 0,             \&quot;last_occurrence_timestamp\&quot;: 1408410581,             \&quot;level\&quot;: 40,             \&quot;occurrences\&quot;: 54,             \&quot;project_id\&quot;: 12345,             \&quot;title\&quot;: \&quot;Something went wrong\&quot;,             \&quot;unique_occurrences\&quot;: 5         },         // list of occurrence counts in the past 24 hours. Oldest first.         \&quot;counts\&quot;: [12, 10, 7, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 5, 6]     },     { /_* more elements ... *_/ }   ] } &#x60;&#x60;&#x60;

 */
  reportsTopActiveItemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      hours: 24, // Number | Number of recent hours to consider. Min `1`, max `168`.
      //  'environments': "environments_example" // String | Comma-separated list of environments to consider. If empty, then returns results for \"any environment\".
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.reportsTopActiveItemsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for rqlJobJobIdGet
  /*


# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885,     \&quot;result\&quot;: {...} // A RQL job resource if expand&#x3D;result is used in query string   } }&#x60;&#x60;

 */
  rqlJobJobIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use a project access token with 'read' scope
    /*let jobId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      //  'expand': "expand_example" // String | If the value is `result`, the response will contain the job result
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rqlJobJobIdGet(
      incomingOptions.jobId,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for rqlJobJobIdResultGet
  /*


# Response The response will be a RQL job result resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;job_id\&quot;: 123,  // job id     \&quot;result\&quot;: {       \&quot;rows\&quot;: [{...}],       \&quot;selectionColumns\&quot;: [...],       \&quot;columns\&quot;: [...],       \&quot;errors\&quot;: [],       \&quot;warnings\&quot;: [],       \&quot;rowcount\&quot;: 1,       \&quot;executionTime\&quot;: 123     },     \&quot;job\&quot;: {...} // A RQL job resource if expand&#x3D;job is set in the query string   } }&#x60;&#x60;&#x60;

 */
  rqlJobJobIdResultGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | // String | Use a project access token with 'read' scope
    /*let jobId = "jobId_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      //  'expand': "expand_example" // String | If the value is `job`, the response will contain the RQL job resource
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rqlJobJobIdResultGet(
      incomingOptions.jobId,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for rqlJobsGet
  /*


# Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: [     { ... }, // RQL job resource       ...   ] } &#x60;&#x60;&#x60;

 */
  rqlJobsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      page: 56, // Number | Page number starting from 1
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rqlJobsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamGet
  /*


Get a team

 */
  teamGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamGet(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdInvitesGet
  /*


Returns all invites ever sent for the team–pending, accepted, rejected, and canceled.  # Example response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;id\&quot;: 71328,       \&quot;from_user_id\&quot;: 5325,       \&quot;team_id\&quot;: 272686,       \&quot;to_email\&quot;: \&quot;gilfoyle@pidepiper.com\&quot;,       \&quot;status\&quot;: \&quot;pending\&quot;,       \&quot;date_created\&quot;: 1519946545,       \&quot;date_redeemed\&quot;: null     }   ] } &#x60;&#x60;&#x60;

 */
  teamTeamIdInvitesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'read' scope
    /*let teamId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      page: 56, // Number | Returns up to 5000 results. Add `&page=2` to the URL to go to the next page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamTeamIdInvitesGet(
      incomingOptions.teamId,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdProjectProjectIdGet
  /*


Returns &#x60;200&#x60; if the team is assigned to a project, &#x60;404&#x60; if the team is not assigned to the project.  # Example responses  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60;  &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 1,   \&quot;message\&quot;: \&quot;Project is not in this Team.\&quot; } &#x60;&#x60;&#x60;

 */
  teamTeamIdProjectProjectIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // Number | // String | Use an account access token with 'read' scope
    /*let teamId = 56;*/ /*let projectId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdProjectProjectIdGet(
      incomingOptions.teamId,
      incomingOptions.projectId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdProjectsGet
  /*


# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: [     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178029     },     {       \&quot;team_id\&quot;: 272686,       \&quot;project_id\&quot;: 178030     }   ] } &#x60;&#x60;&#x60;

 */
  teamTeamIdProjectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'read' scope
    /*let teamId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdProjectsGet(
      incomingOptions.teamId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdUserUserIdGet
  /*


Check if a user is assigned to a team

 */
  teamTeamIdUserUserIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // Number | // String | Use an account access token with 'read' scope
    /*let teamId = 56;*/ /*let userId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdUserUserIdGet(
      incomingOptions.teamId,
      incomingOptions.userId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdUsersGet
  /*


List a team&#39;s users

 */
  teamTeamIdUsersGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | // String | Use an account access token with 'read' scope
    /*let teamId = "teamId_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      page: 1, // Number | Results are returned in sets of 5000.  Access more results by specifying `page=2`, etc.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamTeamIdUsersGet(
      incomingOptions.teamId,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamsGet
  /*


List all teams

 */
  teamsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamsGet(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for userUserIdGet
  /*


Get user details for a given account  Returns basic information about the user, as relevant to the account your access token is for. This is the same information available on the \&quot;Members\&quot; page in the Rollbar UI.  # Sample Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {       \&quot;id\&quot;: 14,       \&quot;username\&quot;: \&quot;brian\&quot;,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;,       \&quot;email_enabled\&quot;: 1   } } &#x60;&#x60;&#x60;

 */
  userUserIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'read' scope
    /*let userId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.userUserIdGet(
      incomingOptions.userId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for userUserIdProjectsGet
  /*


# Example response: &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;projects\&quot;: [       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;mox\&quot;,         \&quot;id\&quot;: 1,         \&quot;account_id\&quot;: 61       },       {         \&quot;status\&quot;: 1,         \&quot;slug\&quot;: \&quot;moxrts\&quot;,         \&quot;id\&quot;: 25,         \&quot;account_id\&quot;: 61       }     ]   } }&#x60;&#x60;&#x60;

 */
  userUserIdProjectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'read' scope
    /*let userId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.userUserIdProjectsGet(
      incomingOptions.userId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for userUserIdTeamsGet
  /*


List a user&#39;s teams

 */
  userUserIdTeamsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scop // String |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let userId = "userId_example";*/ apiInstance.userUserIdTeamsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.userId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for usersGet
  /*


List all users who are members of an account #Response Format &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;users\&quot;: [     {       \&quot;username\&quot;: \&quot;brianr\&quot;,       \&quot;id\&quot;: 1,       \&quot;email\&quot;: \&quot;brian@rollbar.com\&quot;     },     {       \&quot;username\&quot;: \&quot;coryvirok\&quot;,       \&quot;id\&quot;: 2,       \&quot;email\&quot;: \&quot;cory@rollbar.com\&quot;     }     ]   } } &#x60;&#x60;&#x60;

 */
  usersGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.usersGet(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for versionsVersionGet
  /*
Code version details in one project

Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions

 */
  versionsVersionGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.VersionsApi(); // String | Use a project access token with 'read' scop // String | The code version sent on the occurrence payloa // String | The environment where the code version is detected
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let version = "version_example";*/ /*let environment = "environment_example";*/ apiInstance.versionsVersionGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.version,
      incomingOptions.environment,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for versionsVersionItemsGet
  /*
List items by code version

List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions

 */
  versionsVersionItemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.VersionsApi(); // String | Use a project access token with 'read' scop // String | The code version sent on the occurrence payloa // String | For one code version list the items only for this environmen // String | Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let version = "version_example";*/ /*let environment = "environment_example";*/ /*let event = "event_example";*/ let opts = {
      level: ['null'], // [String] | Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
      page: 56, // Number | Page number, starting from 1. 20 elements are returned per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionsVersionItemsGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.version,
      incomingOptions.environment,
      incomingOptions.event,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for instanceInstanceIdGet
  /*
Get an occurrence

Returns a JSON object describing the occurrence. This is similar to the \&quot;Raw JSON\&quot; section of the occurrence detail page.  &#x60;instance_id&#x60; must be an Occurrence ID for an occurrence in the project. These IDs are returned as the &#x60;id&#x60; field in other occurrence API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/&#x60; (&#x60;3209095494&#x60; is the Occurrence ID).

 */
  instanceInstanceIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.OccurrenceApi(); // String | Use a project access token with 'read' scop // Number | The occurrence ID
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let instanceId = 56;*/ apiInstance.instanceInstanceIdGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.instanceId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for instancesGet
  /*
List all occurrences in a project

Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).

 */
  instancesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.OccurrenceApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      page: 1, // Number | Page number to return, starting at 1. 20 occurrences are returned per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.instancesGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for itemIdInstancesGet
  /*
List all occurrences in an item

Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).

 */
  itemIdInstancesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.OccurrenceApi(); // String | Use a project access token with 'read' scop // Number | The item ID
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let itemId = 56;*/ let opts = {
      page: 1, // Number | Page number to return, starting at 1. 20 occurrences are returned per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.itemIdInstancesGet(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.itemId,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  async post(entity, options) {
    switch (entity) {
      case 'ITEM':
        /*




      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.itemPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DEPLOY':
        /*



For tool-specific instructions on reporting a deploy, see our [Deploy Tracking](doc:deploy-tracking) docs.  For instructions on setting the default deploy timeout period, see [Deploy Timeouts](https://docs.rollbar.com/docs/deploy-tracking#section-deploy-timeout).


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.deployPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DSYM':
        /*



**Note:** For version, you should use the \&quot;Bundle version\&quot; from your plist which corresponds to the Build Number. This is not the Version Number which is found under the key \&quot;Bundle versions string, short\&quot; in your plist. See this [technical note](https://developer.apple.com/library/content/technotes/tn2420/_index.html) for more information. We use this to match up the dSYM with the same version of the code that caused the stack trace.


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.dsymPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PEOPLE_DELETE_JOBS':
        /*



This endpoint allows for removal of a tracked person from all projects within an account.  To identify the person, you must provide **exactly one** of the following: * &#x60;email&#x60; * &#x60;username&#x60; * &#x60;person_id&#x60;  These correspond to the values transmitted in the original occurrences (see the docs for [Create item](ref:items)) and can also be found by viewing any tracked person via the [People Tracking](doc:person-tracking) page in any project.  Requests for person deletion are asynchronous.  The returned value will include an &#x60;id&#x60; property that can be used to check the status of the deletion process, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.peopleDeleteJobsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROGUARD':
        /*



Upload an Android Proguard file


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.proguardPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID':
        /*



Delete a project


      Function parameters for this API projectId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECTS':
        /*



Create a project


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.projectsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOB_JOB_ID_CANCEL':
        /*



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;cancelled\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60;


      Function parameters for this API jobId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.rqlJobJobIdCancelPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOBS':
        /*



# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.rqlJobsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SOURCEMAP':
        /*



In the above example, our website is http://example.com, we have a minified JavaScript file at http://example.com/js/example.min.js, and we have a source tree like this: &#x60;&#x60;&#x60; example/ example/static/js/example.min.js example/static/js/example.min.map example/static/js/site.js example/static/js/util.js &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.sourcemapPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_INVITES':
        /*



Invites a user to the specific team, using the user&#39;s email address.  If the email address belongs to an existing Rollbar user, they will be immediately added to the team, and sent an email notification. Otherwise, an invite email will be sent, containing a signup link that will allow the recipient to join the specified team.  # Example Response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60;


      Function parameters for this API teamId,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdInvitesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAMS':
        /*



# Access Levels &#x60;standard&#x60; is the only access level you can choose in the UI.  &#x60;light&#x60; and &#x60;view&#x60; are API-only team access levels. &#x60;light&#x60; gives the team read and write access, but not to all settings. &#x60;view&#x60; gives the team read-only access.


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.teamsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_ID_ACCESS_TOKENS':
        /*



Create a project access token


      Function parameters for this API xRollbarAccessToken,id,body
        */
        return new Promise((resolve, reject) => {
          this.projectIdAccessTokensPost(options, (err, data, response) => {
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
  // This is a function for itemPost
  /*


 */
  itemPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.ItemApi(); // String | An access token with scope `post_server_item` or `post_client_item`. A post_client_item token must be used if the `platform` is `browser\"`, `android`, `ios`, `flash`, or `client`. A post_server_item token should be used for other platforms.
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1ItemRequest(), // Api1ItemRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.itemPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for deployPost
  /*


For tool-specific instructions on reporting a deploy, see our [Deploy Tracking](doc:deploy-tracking) docs.  For instructions on setting the default deploy timeout period, see [Deploy Timeouts](https://docs.rollbar.com/docs/deploy-tracking#section-deploy-timeout).

 */
  deployPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a post server item access token
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1DeployRequest(), // Api1DeployRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.deployPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for dsymPost
  /*


**Note:** For version, you should use the \&quot;Bundle version\&quot; from your plist which corresponds to the Build Number. This is not the Version Number which is found under the key \&quot;Bundle versions string, short\&quot; in your plist. See this [technical note](https://developer.apple.com/library/content/technotes/tn2420/_index.html) for more information. We use this to match up the dSYM with the same version of the code that caused the stack trace.

 */
  dsymPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a post server item access token
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1DsymRequest(), // Api1DsymRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.dsymPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for peopleDeleteJobsPost
  /*


This endpoint allows for removal of a tracked person from all projects within an account.  To identify the person, you must provide **exactly one** of the following: * &#x60;email&#x60; * &#x60;username&#x60; * &#x60;person_id&#x60;  These correspond to the values transmitted in the original occurrences (see the docs for [Create item](ref:items)) and can also be found by viewing any tracked person via the [People Tracking](doc:person-tracking) page in any project.  Requests for person deletion are asynchronous.  The returned value will include an &#x60;id&#x60; property that can be used to check the status of the deletion process, e.g. &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 3   } } &#x60;&#x60;&#x60;

 */
  peopleDeleteJobsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'write' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      //  'username': "username_example", // String | `username` value of the person to be deleted.
      //  'email': "email_example", // String | `email` value of the person to be deleted.
      //  'id': "id_example" // String | `id` value of the person to be deleted.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.peopleDeleteJobsPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for proguardPost
  /*


Upload an Android Proguard file

 */
  proguardPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a post server item access token
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1ProguardRequest(), // Api1ProguardRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.proguardPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdPost
  /*


Delete a project

 */
  projectProjectIdPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'write' scope
    /*let projectId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.projectProjectIdPost(
      incomingOptions.projectId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectsPost
  /*


Create a project

 */
  projectsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'write' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1ProjectsRequest(), // Api1ProjectsRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectsPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for rqlJobJobIdCancelPost
  /*


# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;cancelled\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60;

 */
  rqlJobJobIdCancelPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | system-wide ID of the job to be cancele // String | Use a project access token with 'read' scope
    /*let jobId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.rqlJobJobIdCancelPost(
      incomingOptions.jobId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for rqlJobsPost
  /*


# Response The response will be a RQL Job resource, example: &#x60;&#x60;&#x60;json {   \&quot;err\&quot; 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 123,  // job id     \&quot;project_id\&quot;: 456,     \&quot;query_string\&quot;: \&quot;show tables\&quot;,     \&quot;status\&quot;: \&quot;new\&quot;, // One of \&quot;new\&quot;, \&quot;running\&quot;, \&quot;success\&quot;, \&quot;failed\&quot;, \&quot;cancelled\&quot;, or \&quot;timed_out\&quot;     \&quot;job_hash\&quot;: \&quot;abcdefabcdefabcdef\&quot;,     \&quot;date_created\&quot;: 1446598885,     \&quot;date_modified\&quot;: 1446598885   } }&#x60;&#x60;&#x60;

 */
  rqlJobsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'read' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1RqlJobsRequest(), // Api1RqlJobsRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.rqlJobsPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for sourcemapPost
  /*


In the above example, our website is http://example.com, we have a minified JavaScript file at http://example.com/js/example.min.js, and we have a source tree like this: &#x60;&#x60;&#x60; example/ example/static/js/example.min.js example/static/js/example.min.map example/static/js/site.js example/static/js/util.js &#x60;&#x60;&#x60;

 */
  sourcemapPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a post server item access token
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1SourcemapRequest(), // Api1SourcemapRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.sourcemapPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdInvitesPost
  /*


Invites a user to the specific team, using the user&#39;s email address.  If the email address belongs to an existing Rollbar user, they will be immediately added to the team, and sent an email notification. Otherwise, an invite email will be sent, containing a signup link that will allow the recipient to join the specified team.  # Example Response &#x60;&#x60;&#x60; {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;id\&quot;: 71328,     \&quot;from_user_id\&quot;: 5325,     \&quot;team_id\&quot;: 272686,     \&quot;to_email\&quot;: \&quot;gilfoyle@piedpiper.com\&quot;,     \&quot;status\&quot;: \&quot;pending\&quot;,     \&quot;date_created\&quot;: 1519946545,     \&quot;date_redeemed\&quot;: null   } } &#x60;&#x60;&#x60;

 */
  teamTeamIdInvitesPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | // String | Use an account access token with 'write' scope
    /*let teamId = "teamId_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1TeamInvitesRequest(), // Api1TeamInvitesRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamTeamIdInvitesPost(
      incomingOptions.teamId,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamsPost
  /*


# Access Levels &#x60;standard&#x60; is the only access level you can choose in the UI.  &#x60;light&#x60; and &#x60;view&#x60; are API-only team access levels. &#x60;light&#x60; gives the team read and write access, but not to all settings. &#x60;view&#x60; gives the team read-only access.

 */
  teamsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'write' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1TeamsRequest(), // Api1TeamsRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.teamsPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectIdAccessTokensPost
  /*


Create a project access token

 */
  projectIdAccessTokensPost(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.ProjectAccessTokensApi(); // String | Use an account access token with 'write' scop // String | // ProjectAccessToken |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let id = "id_example";*/ /*let body = new Rollbar.ProjectAccessToken();*/ apiInstance.projectIdAccessTokensPost(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.id,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  async put(entity, options) {
    switch (entity) {
      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*



# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60;


      Function parameters for this API teamId,projectId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectProjectIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*



Assign a user to team


      Function parameters for this API teamId,userId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUserUserIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_EMAIL':
        /*



Configuring Email Notifications integration


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsEmailPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_EMAIL_RULES':
        /*



Setup Email notification rules


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsEmailRulesPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_PAGERDUTY':
        /*



Configuring PagerDuty integration


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsPagerdutyPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_PAGERDUTY_RULES':
        /*



Setup PagerDuty notification rules


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsPagerdutyRulesPut(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'NOTIFICATIONS_SLACK':
        /*



Configuring Slack integration


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsSlackPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_SLACK_RULES':
        /*



Setup Slack notification rules


      Function parameters for this API xRollbarAccessToken,body
        */
        return new Promise((resolve, reject) => {
          this.notificationsSlackRulesPut(options, (err, data, response) => {
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
  // This is a function for teamTeamIdProjectProjectIdPut
  /*


# Example Response &#x60;&#x60;&#x60;json {   \&quot;err\&quot;: 0,   \&quot;result\&quot;: {     \&quot;team_id\&quot;: 272686,     \&quot;project_id\&quot;: 165090   } } &#x60;&#x60;&#x60;

 */
  teamTeamIdProjectProjectIdPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | // String | Use an account access token with 'write' scope
    /*let teamId = 56;*/ /*let projectId = "projectId_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdProjectProjectIdPut(
      incomingOptions.teamId,
      incomingOptions.projectId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdUserUserIdPut
  /*


Assign a user to team

 */
  teamTeamIdUserUserIdPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // Number | // String | Use an account access token with 'write' scope
    /*let teamId = 56;*/ /*let userId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdUserUserIdPut(
      incomingOptions.teamId,
      incomingOptions.userId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsEmailPut
  /*


Configuring Email Notifications integration

 */
  notificationsEmailPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // EmailIntegrationConfig |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = new Rollbar.EmailIntegrationConfig();*/ apiInstance.notificationsEmailPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsEmailRulesPut
  /*


Setup Email notification rules

 */
  notificationsEmailRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // [EmailRule] |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = [new Rollbar.EmailRule()];*/ apiInstance.notificationsEmailRulesPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsPagerdutyPut
  /*


Configuring PagerDuty integration

 */
  notificationsPagerdutyPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // PagerDutyIntegrationConfig |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = new Rollbar.PagerDutyIntegrationConfig();*/ apiInstance.notificationsPagerdutyPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsPagerdutyRulesPut
  /*


Setup PagerDuty notification rules

 */
  notificationsPagerdutyRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // [PagerDutyRule] |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = [new Rollbar.PagerDutyRule()];*/ apiInstance.notificationsPagerdutyRulesPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsSlackPut
  /*


Configuring Slack integration

 */
  notificationsSlackPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // SlackIntegrationConfig |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = new Rollbar.SlackIntegrationConfig();*/ apiInstance.notificationsSlackPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for notificationsSlackRulesPut
  /*


Setup Slack notification rules

 */
  notificationsSlackRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.NotificationsApi(); // String | Use a project access token with 'write' scop // [SlackRule] |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let body = [new Rollbar.SlackRule()];*/ apiInstance.notificationsSlackRulesPut(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.body,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  async delete(entity, options) {
    switch (entity) {
      case 'INVITE_INVITE_ID':
        /*



Returns a &#x60;200&#x60; if the invitation was successfully canceled.


      Function parameters for this API inviteId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.inviteInviteIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM':
        /*



Delete a team


      Function parameters for this API xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*



Remove a team from a project


      Function parameters for this API teamId,projectId,xRollbarAccessToken
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectProjectIdDelete(
            options,
            (err, data, response) => {
              if (err) {
                reject({ error: err, response: response });
              }
              resolve({ data: data, response: response });
            }
          );
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*



Remove a user from a team


      Function parameters for this API xRollbarAccessToken,teamId,userId
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUserUserIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INSTANCE_INSTANCE_ID':
        /*

Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated.


      Function parameters for this API xRollbarAccessToken,instanceId
        */
        return new Promise((resolve, reject) => {
          this.instanceInstanceIdDelete(options, (err, data, response) => {
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
  // This is a function for inviteInviteIdDelete
  /*


Returns a &#x60;200&#x60; if the invitation was successfully canceled.

 */
  inviteInviteIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | Use an account access token with 'write' scope
    /*let inviteId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.inviteInviteIdDelete(
      incomingOptions.inviteId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamDelete
  /*


Delete a team

 */
  teamDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'write' scope
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamDelete(
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdProjectProjectIdDelete
  /*


Remove a team from a project

 */
  teamTeamIdProjectProjectIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // Number | // String | Use an account access token with 'write' scope
    /*let teamId = 56;*/ /*let projectId = 56;*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ apiInstance.teamTeamIdProjectProjectIdDelete(
      incomingOptions.teamId,
      incomingOptions.projectId,
      incomingOptions.xRollbarAccessToken,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for teamTeamIdUserUserIdDelete
  /*


Remove a user from a team

 */
  teamTeamIdUserUserIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use an account access token with 'write' scop // String | // String |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let teamId = "teamId_example";*/ /*let userId = "userId_example";*/ apiInstance.teamTeamIdUserUserIdDelete(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.teamId,
      incomingOptions.userId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for instanceInstanceIdDelete
  /*
Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated.

 */
  instanceInstanceIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.OccurrenceApi(); // String | Use a project access token with 'read' scop // Number | The occurrence ID
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let instanceId = 56;*/ apiInstance.instanceInstanceIdDelete(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.instanceId,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  async patch(entity, options) {
    switch (entity) {
      case 'DEPLOY':
        /*



&#x60;&#x60;&#x60;JavaScript $.get(&#39;http://yoursite.com/test/&#39; + id, function(data) {     console.log(data); });&#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.deployPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ISSUES':
      case 'ITEM_ITEMID':
        /*



Used to modify an item&#39;s state. Currently supports: * setting the status, level, title, assigned user * when resolving, setting the \&quot;resolved in version\&quot;  Example - &#x60;&#x60;&#x60;curl curl -X PATCH &#39;https://api.rollbar.com/item/275123456&#39; \\   --header \&quot;Content-Type: application/json\&quot; \\   --data &#39;{\&quot;status\&quot;: \&quot;resolved\&quot;, \&quot;resolved_in_version\&quot;: \&quot;aabbcc1\&quot;}&#39;   &#x60;&#x60;&#x60;


      Function parameters for this API xRollbarAccessToken,itemid,opts
        */
        return new Promise((resolve, reject) => {
          this.itemItemidPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_ACCESS_TOKEN_PROJECT_ACCESS_TOKEN':
        /*



Update a rate limit


      Function parameters for this API projectId,projectAccessToken,xRollbarAccessToken,opts
        */
        return new Promise((resolve, reject) => {
          this.projectProjectIdAccessTokenProjectAccessTokenPatch(
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
  // This is a function for deployPatch
  /*


&#x60;&#x60;&#x60;JavaScript $.get(&#39;http://yoursite.com/test/&#39; + id, function(data) {     console.log(data); });&#x60;&#x60;&#x60;

 */
  deployPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a post server item access token
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1DeployRequest1(), // Api1DeployRequest1 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.deployPatch(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for itemItemidPatch
  /*


Used to modify an item&#39;s state. Currently supports: * setting the status, level, title, assigned user * when resolving, setting the \&quot;resolved in version\&quot;  Example - &#x60;&#x60;&#x60;curl curl -X PATCH &#39;https://api.rollbar.com/item/275123456&#39; \\   --header \&quot;Content-Type: application/json\&quot; \\   --data &#39;{\&quot;status\&quot;: \&quot;resolved\&quot;, \&quot;resolved_in_version\&quot;: \&quot;aabbcc1\&quot;}&#39;   &#x60;&#x60;&#x60;

 */
  itemItemidPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // String | Use a project access token with 'write' scop // String |
    /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ /*let itemid = "itemid_example";*/ let opts = {
      body: new Rollbar.Api1ItemRequest1(), // Api1ItemRequest1 |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.itemItemidPatch(
      incomingOptions.xRollbarAccessToken,
      incomingOptions.itemid,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }

  // This is a function for projectProjectIdAccessTokenProjectAccessTokenPatch
  /*


Update a rate limit

 */
  projectProjectIdAccessTokenProjectAccessTokenPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');

    let apiInstance = new Rollbar.DefaultApi(); // Number | // String | // String | Use an account access token with 'write' scope
    /*let projectId = 56;*/ /*let projectAccessToken = "projectAccessToken_example";*/ /*let xRollbarAccessToken = "xRollbarAccessToken_example";*/ let opts = {
      body: new Rollbar.Api1ProjectAccessTokenRequest(), // Api1ProjectAccessTokenRequest |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectProjectIdAccessTokenProjectAccessTokenPatch(
      incomingOptions.projectId,
      incomingOptions.projectAccessToken,
      incomingOptions.xRollbarAccessToken,
      incomingOptions.opts,
      (error, data, response) => {
        if (error) {
          cb(error, null, response);
        } else {
          cb(null, data.result, response);
        }
      }
    );
  }
}
module.exports = new RollbarService();
