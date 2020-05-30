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
    return { data: res.data };
  }

  async registerWebhooks(incomingOptions) {
    //TODO: Add custom registerWebhooks functionality here
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');

    try {
      //TODO: Add custom syncIntegrationEntities functionality here
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [
            'task.pepper.SYNC_LEGACY_ROLLBAR_ITEMS',
            'task.pepper.SYNC_ROLLBAR_TEAM_MEMBERS',
          ],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          third_party_project_id: '',
          third_party_organization_id: '',
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
      case 'ITEM_BY_COUNTER_COUNTER':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.itemByCounterCounterGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'ITEM_ITEMID':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.itemsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.userUserIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USERS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.usersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DEPLOY':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.deploysGet(options, (err, data, response) => {
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


      Function parameters for this API environment,opts
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


      Function parameters for this API environment,event,opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.itemIdInstancesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAMS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'REPORTS_ACTIVATED_COUNTS':
        /*




      Function parameters for this API
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




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.reportsTopActiveItemsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID_PROJECTS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.userUserIdProjectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_ID_ACCESS_TOKENS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.projectIdAccessTokensGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOB_JOB_ID':
        /*




      Function parameters for this API
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




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.rqlJobsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INVITE_INVITE_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.inviteInviteIdGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_INVITES':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdInvitesGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUsersGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'USER_USER_ID_TEAMS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.userUserIdTeamsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.projectsGet(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PEOPLE_DELETE_JOBS_JOB_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.peopleDeleteJobsJobIdGet(options, (err, data, response) => {
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
  // This is a function for itemByCounterCounterGet
  /*


 */
  itemByCounterCounterGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ItemApi();
    apiInstance.itemByCounterCounterGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for itemItemidGet
  /*


 */
  itemItemidGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ItemApi();
    apiInstance.itemItemidGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for itemsGet
  /*


 */
  itemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ItemApi();
    apiInstance.itemsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userUserIdGet
  /*


 */
  userUserIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.UsersApi();
    apiInstance.userUserIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for usersGet
  /*


 */
  usersGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.UsersApi();
    apiInstance.usersGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdProjectProjectIdGet
  /*


 */
  teamTeamIdProjectProjectIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsProjectsApi();
    apiInstance.teamTeamIdProjectProjectIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdProjectsGet
  /*


 */
  teamTeamIdProjectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsProjectsApi();
    apiInstance.teamTeamIdProjectsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for deployGet
  /*


 */
  deployGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.DeployApi();
    apiInstance.deployGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for deploysGet
  /*


 */
  deploysGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.DeployApi();
    apiInstance.deploysGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for versionsVersionGet
  /*
Code version details in one project

Returns the details about one specific code version in one project  https://docs.rollbar.com/docs/versions

 */
  versionsVersionGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.VersionsApi(); // Object | The environment where the code version is detected
    /*let environment = null;*/ let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.versionsVersionGet(
      incomingOptions.environment,
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

  // This is a function for versionsVersionItemsGet
  /*
List items by code version

List items that have occurrences for one specific code version.  https://docs.rollbar.com/docs/versions

 */
  versionsVersionItemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.VersionsApi(); // Object | For one code version list the items only for this environmen // Object | Filter the list of items by the item event produced on the code version. One item can have one of these events in one version:    - `new` for new items in the code version   - `repeated` for an item that already existed in preivous versions   - `reactivated` an item that was resolved but was reactivated in the code version   - `resolved` an item resolved in one specific version
    /*let environment = null;*/ /*let event = null;*/ let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
      level: null, // Object | Filter the list of items by level. Multiple levels can be used, and all items for all levels will be returned if no one is specified.
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
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
      incomingOptions.environment,
      incomingOptions.event,
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

  // This is a function for instanceInstanceIdGet
  /*
Get an occurrence

Returns a JSON object describing the occurrence. This is similar to the \&quot;Raw JSON\&quot; section of the occurrence detail page.  &#x60;instance_id&#x60; must be an Occurrence ID for an occurrence in the project. These IDs are returned as the &#x60;id&#x60; field in other occurrence API calls, and can be found in the Rollbar UI on URLs like &#x60;https://rollbar.com/Rollbar/demo/items/54/occurrences/3209095494/&#x60; (&#x60;3209095494&#x60; is the Occurrence ID).

 */
  instanceInstanceIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.OccurrenceApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.instanceInstanceIdGet(
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

  // This is a function for instancesGet
  /*
List all occurrences in a project

Returns all occurrences in the project, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).

 */
  instancesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.OccurrenceApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      page: null, // Object | Page number to return, starting at 1. 20 occurrences are returned per page.
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.instancesGet(incomingOptions.opts, (error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for itemIdInstancesGet
  /*
List all occurrences in an item

Returns all occurrences of an item, in pages of 20. Order is descending by occurrence ID (which is approximately descending by timestamp).

 */
  itemIdInstancesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.OccurrenceApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
      page: null, // Object | Page number to return, starting at 1. 20 occurrences are returned per page.
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

  // This is a function for teamGet
  /*


 */
  teamGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsApi();
    apiInstance.teamGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamsGet
  /*


 */
  teamsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsApi();
    apiInstance.teamsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for reportsActivatedCountsGet
  /*


 */
  reportsActivatedCountsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ReportsApi();
    apiInstance.reportsActivatedCountsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for reportsOccurrenceCountsGet
  /*


 */
  reportsOccurrenceCountsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ReportsApi();
    apiInstance.reportsOccurrenceCountsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for reportsTopActiveItemsGet
  /*


 */
  reportsTopActiveItemsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ReportsApi();
    apiInstance.reportsTopActiveItemsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userUserIdProjectsGet
  /*


 */
  userUserIdProjectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.UsersProjectsApi();
    apiInstance.userUserIdProjectsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectIdAccessTokensGet
  /*


 */
  projectIdAccessTokensGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectAccessTokensApi();
    apiInstance.projectIdAccessTokensGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for rqlJobJobIdGet
  /*


 */
  rqlJobJobIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.RQLApi();
    apiInstance.rqlJobJobIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for rqlJobJobIdResultGet
  /*


 */
  rqlJobJobIdResultGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.RQLApi();
    apiInstance.rqlJobJobIdResultGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for rqlJobsGet
  /*


 */
  rqlJobsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.RQLApi();
    apiInstance.rqlJobsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for inviteInviteIdGet
  /*


 */
  inviteInviteIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.inviteInviteIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdInvitesGet
  /*


 */
  teamTeamIdInvitesGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdInvitesGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdUserUserIdGet
  /*


 */
  teamTeamIdUserUserIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdUserUserIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdUsersGet
  /*


 */
  teamTeamIdUsersGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdUsersGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for userUserIdTeamsGet
  /*


 */
  userUserIdTeamsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.userUserIdTeamsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectProjectIdGet
  /*


 */
  projectProjectIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectsApi();
    apiInstance.projectProjectIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectsGet
  /*


 */
  projectsGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectsApi();
    apiInstance.projectsGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for peopleDeleteJobsJobIdGet
  /*


 */
  peopleDeleteJobsJobIdGet(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.PeopleApi();
    apiInstance.peopleDeleteJobsJobIdGet((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  async post(entity, options) {
    switch (entity) {
      case 'ITEM':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.itemPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DSYM':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.dsymPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROGUARD':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.proguardPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'SOURCEMAP':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.sourcemapPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DEPLOY':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.deployPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAMS':
        /*




      Function parameters for this API
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


      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.projectIdAccessTokensPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'RQL_JOB_JOB_ID_CANCEL':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.rqlJobsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_INVITES':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdInvitesPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID':
        /*




      Function parameters for this API
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




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.projectsPost(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PEOPLE_DELETE_JOBS':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.peopleDeleteJobsPost(options, (err, data, response) => {
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
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ItemApi();
    apiInstance.itemPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for dsymPost
  /*


 */
  dsymPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.SymbolMapsApi();
    apiInstance.dsymPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for proguardPost
  /*


 */
  proguardPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.SymbolMapsApi();
    apiInstance.proguardPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for sourcemapPost
  /*


 */
  sourcemapPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.SymbolMapsApi();
    apiInstance.sourcemapPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for deployPost
  /*


 */
  deployPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.DeployApi();
    apiInstance.deployPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamsPost
  /*


 */
  teamsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsApi();
    apiInstance.teamsPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectIdAccessTokensPost
  /*


Create a project access token

 */
  projectIdAccessTokensPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectAccessTokensApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.projectIdAccessTokensPost(
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

  // This is a function for rqlJobJobIdCancelPost
  /*


 */
  rqlJobJobIdCancelPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.RQLApi();
    apiInstance.rqlJobJobIdCancelPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for rqlJobsPost
  /*


 */
  rqlJobsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.RQLApi();
    apiInstance.rqlJobsPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdInvitesPost
  /*


 */
  teamTeamIdInvitesPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdInvitesPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectProjectIdPost
  /*


 */
  projectProjectIdPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectsApi();
    apiInstance.projectProjectIdPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectsPost
  /*


 */
  projectsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectsApi();
    apiInstance.projectsPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for peopleDeleteJobsPost
  /*


 */
  peopleDeleteJobsPost(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.PeopleApi();
    apiInstance.peopleDeleteJobsPost((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  async put(entity, options) {
    switch (entity) {
      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdProjectProjectIdPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'NOTIFICATIONS_EMAIL':
        /*



Configuring Email Notifications integration


      Function parameters for this API opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
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


      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.notificationsSlackRulesPut(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUserUserIdPut(options, (err, data, response) => {
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


 */
  teamTeamIdProjectProjectIdPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsProjectsApi();
    apiInstance.teamTeamIdProjectProjectIdPut((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for notificationsEmailPut
  /*


Configuring Email Notifications integration

 */
  notificationsEmailPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsEmailPut(
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

  // This is a function for notificationsEmailRulesPut
  /*


Setup Email notification rules

 */
  notificationsEmailRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsEmailRulesPut(
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

  // This is a function for notificationsPagerdutyPut
  /*


Configuring PagerDuty integration

 */
  notificationsPagerdutyPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsPagerdutyPut(
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

  // This is a function for notificationsPagerdutyRulesPut
  /*


Setup PagerDuty notification rules

 */
  notificationsPagerdutyRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsPagerdutyRulesPut(
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

  // This is a function for notificationsSlackPut
  /*


Configuring Slack integration

 */
  notificationsSlackPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsSlackPut(
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

  // This is a function for notificationsSlackRulesPut
  /*


Setup Slack notification rules

 */
  notificationsSlackRulesPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.NotificationsApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.notificationsSlackRulesPut(
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

  // This is a function for teamTeamIdUserUserIdPut
  /*


 */
  teamTeamIdUserUserIdPut(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdUserUserIdPut((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  async delete(entity, options) {
    switch (entity) {
      case 'TEAM_TEAM_ID_PROJECT_PROJECT_ID':
        /*




      Function parameters for this API
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

      case 'INSTANCE_INSTANCE_ID':
        /*

Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated.


      Function parameters for this API opts
        */
        return new Promise((resolve, reject) => {
          this.instanceInstanceIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'INVITE_INVITE_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.inviteInviteIdDelete(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'TEAM_TEAM_ID_USER_USER_ID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.teamTeamIdUserUserIdDelete(options, (err, data, response) => {
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
  // This is a function for teamTeamIdProjectProjectIdDelete
  /*


 */
  teamTeamIdProjectProjectIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsProjectsApi();
    apiInstance.teamTeamIdProjectProjectIdDelete((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for instanceInstanceIdDelete
  /*
Delete an occurrence

Permanently deletes an occurrence. This will make it unavailable in the Rollbar UI and API. Aggregate counts are not updated.

 */
  instanceInstanceIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.OccurrenceApi();
    let opts = {
      UNKNOWN_PARAMETER_NAME: new Rollbar.null(), //  |
      UNKNOWN_PARAMETER_NAME2: new Rollbar.null(), //  |
    };

    if (incomingOptions.opts)
      Object.keys(incomingOptions.opts).forEach(
        (key) =>
          incomingOptions.opts[key] === undefined &&
          delete incomingOptions.opts[key]
      );
    else delete incomingOptions.opts;
    incomingOptions.opts = Object.assign(opts, incomingOptions.opts);

    apiInstance.instanceInstanceIdDelete(
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

  // This is a function for teamDelete
  /*


 */
  teamDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsApi();
    apiInstance.teamDelete((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for inviteInviteIdDelete
  /*


 */
  inviteInviteIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.inviteInviteIdDelete((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for teamTeamIdUserUserIdDelete
  /*


 */
  teamTeamIdUserUserIdDelete(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.TeamsUsersApi();
    apiInstance.teamTeamIdUserUserIdDelete((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  async patch(entity, options) {
    switch (entity) {
      case 'ITEM_ITEMID':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.itemItemidPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'DEPLOY':
        /*




      Function parameters for this API
        */
        return new Promise((resolve, reject) => {
          this.deployPatch(options, (err, data, response) => {
            if (err) {
              reject({ error: err, response: response });
            }
            resolve({ data: data, response: response });
          });
        });

      case 'PROJECT_PROJECT_ID_ACCESS_TOKEN_PROJECT_ACCESS_TOKEN':
        /*




      Function parameters for this API
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
  // This is a function for itemItemidPatch
  /*


 */
  itemItemidPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ItemApi();
    apiInstance.itemItemidPatch((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for deployPatch
  /*


 */
  deployPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.DeployApi();
    apiInstance.deployPatch((error, data, response) => {
      if (error) {
        cb(error, null, response);
      } else {
        cb(null, data, response);
      }
    });
  }

  // This is a function for projectProjectIdAccessTokenProjectAccessTokenPatch
  /*


 */
  projectProjectIdAccessTokenProjectAccessTokenPatch(incomingOptions, cb) {
    const Rollbar = require('./dist');
    let defaultClient = Rollbar.ApiClient.instance;
    // Configure API key authorization: accessToken
    let accessToken = defaultClient.authentications['accessToken'];
    accessToken.apiKey = incomingOptions.apiKey;
    // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
    //accessToken.apiKeyPrefix = 'Token';

    let apiInstance = new Rollbar.ProjectAccessTokensApi();
    apiInstance.projectProjectIdAccessTokenProjectAccessTokenPatch(
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
module.exports = new RollbarService();
