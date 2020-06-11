const Axios = require('axios');
const ErrorHelper = require('../../../helpers/ErrorHelper');
const nconf = require('nconf');
const qs = require('querystring');

class DatadogService {
  get name() {
    return 'DATADOG';
  }

  get description() {
    return 'Unify logs, metrics, and traces from across your distributed infrastructure.';
  }

  get icon() {
    return 'datadog.svg';
  }

  get categroy() {
    return;
  }

  apiEndpoint(site) {
    return `https://api.datadoghq.${site}`;
  }

  get authMethod() {
    return 'API_TOKEN';
  }

  get authEndpoint() {
    return;
  }

  get apiTokenURL() {
    return 'https://app.datadoghq.com/account/settings#api';
  }

  get requiredAuthParams() {
    return ['application_key', 'api_key', 'site'];
  }

  get webhooks() {
    return null;
  }

  get primaryAction() {
    return {
      type: 'INPUT_API_TOKEN_PARAMS',
      requiredAuthParams: this.requiredAuthParams,
    };
  }

  get entities() {
    return ['LOGS'];
  }

  async connect(authParams) {
    if (authParams.apiKey && authParams.applicationKey && authParams.site) {
      return {
        integrationSpecificParams: authParams,
      };
    } else {
      throw ErrorHelper.getError('Missing paramteres api_key or app_key', 400);
    }
  }

  // async syncIntegrationEntities(integrationData, sentryProjectData) {
  //   const taskUri = nconf.get("TASK_API_URI");
  //   const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

  //   try {
  //     const res = await Axios.default.post(
  //       taskUri,
  //       {
  //         pepper_task: "task.pepper.SYNC_DATADOG_ISSUES",
  //         project_id: integrationData.projectId,
  //         user_id: integrationData.userId,
  //         third_party_project_id: sentryProjectData.projectId,
  //         third_party_organization_id: sentryProjectData.organizationId
  //       },
  //       {
  //         headers: {
  //           Authorization: authToken
  //         }
  //       }
  //     );
  //     return "Ok";
  //   } catch (error) {
  //     console.error(error.response);
  //     return "ERROR";
  //   }
  // }

  async get(entity, options) {
    switch (entity.toUpperCase()) {
      default:
        throw ErrorHelper.getError(`Entity ${entity} not supported`, 400);
    }
  }

  async post(entity, options) {
    switch (entity.toUpperCase()) {
      case 'LOGS':
        return await this.getLogs(options);
      default:
        throw ErrorHelper.getError(`Entity ${entity} not supported`, 400);
    }
  }

  async getLogs(options) {
    if (!options.time || !options.time.from || !options.time.to)
      throw Error('time.from and time.to is missing from the request body');

    const site = options.integrationData.integrationSpecificParams.site;
    const apiKey = options.integrationData.integrationSpecificParams.apiKey;
    const appKey =
      options.integrationData.integrationSpecificParams.applicationKey;

    let logs = [],
      uri =
        `${this.apiEndpoint(site)}` +
        `/api/v1/logs-queries/list?api_key=${apiKey}&application_key=${appKey}`,
      body = {
        limit: 250,
        sort: 'desc',
        time: {
          from: options.time.from,
          to: options.time.to,
        },
      };

    if (options.query) body.query = options.query;
    if (options.startAt) body.startAt = options.startAt;
    try {
      while (uri && logs.length < 3000) {
        const res = await Axios.default.post(uri, body);
        res.data.logs.forEach((item) =>
          logs.push({
            message: item.content.message,
            timestamp: item.content.timestamp,
            toolRefs: {
              id: item.id,
              name: 'DATADOG',
              url: `https://app.datadoghq.com/logs?event=${item.id}`,
            },
            service: item.content.service,
          })
        );
        if (!res.data.nextLogId) uri = undefined;
        else body.startAt = res.data.nextLogId;
      }
    } catch (error) {}
    return logs;
  }
}

module.exports = new DatadogService();
