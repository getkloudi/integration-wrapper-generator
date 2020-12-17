const Axios = require("axios");
const qs = require("querystring");
const nconf = require("nconf");
const ErrorHelper = require("../../../helpers/ErrorHelper");
const parseLinkHeader = require("parse-link-header");
const KloudiWebhookHostnameHelper = require("../../../helpers/KloudiWebhookHostnameHelper");
class SentryService {
  get name() {
    return "SENTRY";
  }

  get description() {
    return "Open-source error tracking that helps developers monitor and fix crashes in real time.";
  }

  get icon() {
    return "sentry.svg";
  }

  get category() {
    return ["Exception Monitoring"];
  }

  get apiEndpoint() {
    return "https://sentry.io/api/0";
  }

  get authMethod() {
    return "API_TOKEN";
  }

  get authEndpoint() {
    return;
  }

  get apiTokenURL() {
    return "https://sentry.io/settings/account/api/auth-tokens/new-token/";
  }

  get requiredAuthParams() {
    return ["auth_token"];
  }

  get webhooks() {
    return ["issue"];
  }

  get webhookToTasksMap() {
    return [
      {
        name: "task.pepper.SYNC_SENTRY_ISSUE",
        webhook: "issue",
      },
      {
        name: "task.pepper.SYNC_SENTRY_ISSUE_EVENT",
        webhook: "issue_event",
      },
      {
        name: "task.pepper.REOPEN_SENTRY_ISSUE",
        webhook: "issue_event",
      },
      {
        name: "task.pepper.UNMUTE_SENTRY_ISSUE",
        webhook: "issue_event",
      },
    ];
  }

  get primaryAction() {
    return {
      type: "INPUT_API_TOKEN_PARAMS",
      requiredAuthParams: this.requiredAuthParams,
    };
  }

  get entities() {
    return ["PROJECT", "ISSUES", "MEMBERS"];
  }

  async connect(authParams) {
    if (authParams.auth_token) {
      return {
        accessToken: authParams.auth_token,
      };
    } else {
      throw ErrorHelper.getError("auth_token missing", 400);
    }
  }

  async getThirdPartyProjects(incomingOptions) {
    //TODO: Refactor this function and other related functions
    return await this.getProjects(incomingOptions);
  }

  async registerWebhooks(incomingOptions) {
    const url = `https://sentry.io/api/0/projects/${incomingOptions.project.organizationId}/${incomingOptions.project.projectId}`;

    let res;
    res = await Axios.default.post(`${url}/plugins/webhooks/`, undefined, {
      headers: { Authorization: `Bearer ${incomingOptions.accessToken}` },
    });

    res = await Axios.default.get(`${url}/plugins/webhooks/`, {
      headers: { Authorization: `Bearer ${incomingOptions.accessToken}` },
    });
    const { config } = res.data;
    const webhookHostname = await KloudiWebhookHostnameHelper.getHostnameForWebhookRegistration();
    const webhookURL = `${webhookHostname}/${incomingOptions.userId}/${incomingOptions.projectId}/SENTRY/${incomingOptions.project.organizationId}/${incomingOptions.project.projectId}/`;
    if (
      config[0].value &&
      config[0].value.split("\n").indexOf(webhookURL) < 0
    ) {
      try {
        res = await Axios.default.put(
          `${url}/plugins/webhooks/`,
          { urls: `${config[0].value}\n${webhookURL}` },
          {
            headers: { Authorization: `Bearer ${incomingOptions.accessToken}` },
          }
        );
      } catch (error) {
        ErrorHelper.sendErrorToThirdPartyTool(error);
      } finally {
        if (res.status != 200) return "ERROR";
      }
    } else if (config[0].value === null) {
      try {
        res = await Axios.default.put(
          `${url}/plugins/webhooks/`,
          { urls: `${webhookURL}` },
          {
            headers: { Authorization: `Bearer ${incomingOptions.accessToken}` },
          }
        );
      } catch (error) {
        ErrorHelper.sendErrorToThirdPartyTool(error);
      } finally {
        if (res.status != 200) return "ERROR";
      }
    }

    try {
      res = await Axios.default.get(`${url}/combined-rules/`, {
        headers: { Authorization: `Bearer ${incomingOptions.accessToken}` },
      });
      const alertNames = res.data.map((item) => item.name);
      if (alertNames.indexOf(`Alert Rules for Kloudi ${nconf.get("ENV")}`) >= 0)
        return "Ok";
      res = await Axios.default.post(
        `${url}/rules/`,
        {
          actionMatch: "any",
          actions: [
            {
              id: "sentry.rules.actions.notify_event.NotifyEventAction",
            },
            {
              id:
                "sentry.rules.actions.notify_event_service.NotifyEventServiceAction",
              service: "webhooks",
            },
          ],
          conditions: [
            {
              id: "sentry.rules.conditions.every_event.EveryEventCondition",
              name: "An event is seen",
            },
            {
              id:
                "sentry.rules.conditions.regression_event.RegressionEventCondition",
            },
            {
              id:
                "sentry.rules.conditions.reappeared_event.ReappearedEventCondition",
            },
          ],
          name: `Alert Rules for Kloudi ${nconf.get("ENV")}`,
          frequency: "5",
        },
        { headers: { Authorization: `Bearer ${incomingOptions.accessToken}` } }
      );
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(error);
    } finally {
      if (res.status == 200) return "Ok";
      else "ERROR";
    }
  }

  async syncIntegrationEntities(integration, incomingOptions) {
    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [
            "task.pepper.SYNC_LEGACY_SENTRY_ISSUES",
            "task.pepper.SYNC_SENTRY_TEAM_MEMBERS",
          ],
          project_id: incomingOptions.projectId,
          user_id: incomingOptions.userId,
          third_party_project_id: incomingOptions.thirdPartyProject.projectId,
          third_party_organization_id:
            incomingOptions.thirdPartyProject.organizationId,
        },
        {
          headers: {
            Authorization: authToken,
          },
        }
      );
      return { data: "Ok" };
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(error.response);
      return { data: "ERROR" };
    }
  }

  async get(entity, options) {
    switch (entity.toUpperCase()) {
      case "PROJECTS":
        return await this.getProjects(options);
      case "ISSUES":
        return await this.getIssues(options);
      case "ISSUE":
        return await this.getIssueFromID(options);
      case "EVENTS":
        return await this.getEventsForAnIssue(options);
      case "MEMBERS":
        return await this.getMembers(options);
      default:
        throw ErrorHelper.getError(`Entity ${entity} not supported`, 400);
    }
  }

  async put(entity, options) {
    switch (entity.toUpperCase()) {
      case "ISSUE":
        return await this.updateIssue(options);
      case "ISSUES":
        return await this.updateIssues(options);
      default:
        throw ErrorHelper.getError(`Entity ${entity} not supported`, 400);
    }
  }

  async post(entity, options) {
    switch (entity.toUpperCase()) {
      case "ISSUES":
        return await this.updateIssues(options);
      default:
        throw ErrorHelper.getError(`Entity ${entity} not supported`, 400);
    }
  }

  async getProjects(options) {
    const projects = await Axios.default.get(`${this.apiEndpoint}/projects/`, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    });

    let data = [];
    for (let index = 0; index < projects.data.length; ++index) {
      if (projects.data[index].status === "active") {
        const stats = await Axios.default.get(
          `${this.apiEndpoint}/projects/${projects.data[index].organization.slug}/${projects.data[index].slug}/stats/?stat=received&resolution=1d`,
          {
            headers: {
              Authorization: `Bearer ${options.accessToken}`,
            },
          }
        );
        let description = projects.data[index].platform;
        description =
          description.charAt(0).toUpperCase() + description.slice(1);
        data.push({
          projectName: projects.data[index].name,
          projectId: projects.data[index].slug,
          projectDescription: `Monitoring for plaform: ${description}`,
          projectRef: `https://sentry.io/${projects.data[index].organization.slug}/${projects.data[index].slug}`,
          organizationName: projects.data[index].organization.name,
          organizationId: projects.data[index].organization.slug,
          metrics: [
            {
              key: "# of events received in 24 hours",
              value: `${stats.data[0][1]}`,
            },
          ],
        });
      }
    }
    data.sort(function (a, b) {
      if (parseInt(a.metrics[0].value) > parseInt(b.metrics[0].value))
        return -1;
      else if (parseInt(a.metrics[0].value) < parseInt(b.metrics[0].value))
        return 1;
      else return 0;
    });
    return { data: data };
  }

  async getIssues(options) {
    let params;
    if (options.query.query) params = `query=${options.query.query}`;
    const res = await Axios.default.get(
      `${this.apiEndpoint}/projects/${options.query.thirdPartyOrganizationId}/${
        options.query.thirdPartyProjectId
      }/issues/?${params ? params : ``}&statsPeriod=`,
      {
        headers: {
          Authorization: `Bearer ${options.accessToken}`,
        },
      }
    );
    let issues = res.data;
    let parsedHeader = parseLinkHeader(res.headers["link"]);
    try {
      let count = 0;
      while (parsedHeader.next.results == "true" && count < 10) {
        const res = await Axios.default.get(parsedHeader.next.url, {
          headers: {
            Authorization: `Bearer ${options.accessToken}`,
          },
        });
        issues = issues.concat(res.data);
        parsedHeader = parseLinkHeader(res.headers["link"]);
        count++;
      }
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(error);
    }
    return { data: issues };
  }

  async getMembers(options) {
    const res = await Axios.default.get(
      `${this.apiEndpoint}/projects/${options.query.thirdPartyOrganizationId}/${options.query.thirdPartyProjectId}/members/`,
      {
        headers: {
          Authorization: `Bearer ${options.accessToken}`,
        },
      }
    );
    let members = res.data;
    let parsedHeader = parseLinkHeader(res.headers["link"]);
    try {
      let count = 0;
      while (
        parsedHeader &&
        parsedHeader.next &&
        parsedHeader.next.results == "true"
      ) {
        const res = await Axios.default.get(parsedHeader.next.url, {
          headers: {
            Authorization: `Bearer ${options.accessToken}`,
          },
        });
        members = members.concat(res.data);
        parsedHeader = parseLinkHeader(res.headers["link"]);
        count++;
      }
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(error);
    }
    return { data: members };
  }

  async updateIssues(options) {
    if (!options.body.organization_slug || !options.body.project_slug) {
      ErrorHelper.sendErrorToThirdPartyTool("No third party projects present");
      return { data: "Error" };
    }

    let params = {};
    const optionKeys = Object.keys(options.body);
    if (optionKeys.includes("hasSeen"))
      params = { hasSeen: options.body.hasSeen };
    if (optionKeys.includes("status"))
      params = { hasSeen: true, status: options.body.status };

    if (Object.keys(params) <= 0) return { data: "Nothing to update" };
    try {
      const data = await Axios.default.put(
        `${this.apiEndpoint}/projects/${options.body.organization_slug}/${options.body.project_slug}/issues/?${options.body.sentry}`,
        params,
        {
          headers: { Authorization: `Bearer ${options.accessToken}` },
        }
      );
      return { data: "Ok" };
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(
        error.response.data || error.response || error
      );
      return { data: error.response.data };
    }
  }

  async updateIssue(options) {
    if (
      !options.integration.thirdPartyProjects ||
      options.integration.thirdPartyProjects.length == 0
    ) {
      ErrorHelper.sendErrorToThirdPartyTool("No third party projects present");
      return { data: "Error" };
    }

    let params = {};
    const optionKeys = Object.keys(options);
    if (optionKeys.includes("hasSeen")) params = { hasSeen: options.hasSeen };
    if (optionKeys.includes("status"))
      params = { hasSeen: true, status: options.status };

    if (Object.keys(params) <= 0) return { data: "Nothing to update" };
    try {
      const data = await Axios.default.put(
        `${this.apiEndpoint}/issues/${options.sentry.id}/`,
        params,
        {
          headers: {
            Authorization: `Bearer ${options.integration.authAccessToken}`,
          },
        }
      );
      return { data: "Ok" };
    } catch (error) {
      ErrorHelper.sendErrorToThirdPartyTool(
        error.response.data || error.response || error
      );
      return { data: error.response.data };
    }
  }

  async createProject(options) {}

  async getEventsForAnIssue(options) {
    if (!options.query.issueID) throw Error("Incorrect request");
    let events = [],
      uri = `${this.apiEndpoint}/issues/${options.query.issueID}/events/`;
    if (options.query.latest === true) uri += `latest/`;
    uri += `?full=1`;
    const res = await Axios.default.get(uri, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
    });
    events.push(res.data);
    return { data: events };
  }

  async getIssueFromID(options) {
    if (!options.query.id)
      throw Error("options.id is missing from the request body");
    const res = await Axios.default.get(
      `${this.apiEndpoint}/issues/${options.query.id}/?statsPeriod=`,
      {
        headers: {
          Authorization: `Bearer ${options.accessToken}`,
        },
      }
    );
    return { data: res.data, response: res };
  }
}

module.exports = new SentryService();
