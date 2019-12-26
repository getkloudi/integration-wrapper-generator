const Axios = require("axios");
const qs = require("querystring");
const nconf = require("nconf");
const ErrorHelper = require("../../helpers/ErrorHelper");
const parseLinkHeader = require("parse-link-header");
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

  get categroy() {
    return;
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
    return "https://sentry.io/api/";
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
        webhook: "issue"
      },
      {
        name: "task.pepper.SYNC_SENTRY_ISSUE_EVENT",
        webhook: "issue_event"
      }
    ];
  }

  get primaryAction() {
    return {
      type: "INPUT_API_TOKEN_PARAMS",
      requiredAuthParams: this.requiredAuthParams
    };
  }

  get entities() {
    return ["PROJECT", "ISSUES", "MEMBERS"];
  }

  async connect(authParams) {
    if (authParams.auth_token) {
      return {
        accessToken: authParams.auth_token
      };
    } else {
      throw ErrorHelper.getError("auth_token missing", 400);
    }
  }

  async syncIntegrationEntities(integrationData, sentryProjectData) {
    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: [
            "task.pepper.SYNC_LEGACY_SENTRY_ISSUES",
            "task.pepper.SYNC_SENTRY_TEAM_MEMBERS"
          ],
          project_id: integrationData.projectId,
          user_id: integrationData.userId,
          third_party_project_id: sentryProjectData.projectId,
          third_party_organization_id: sentryProjectData.organizationId
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
        Authorization: `Bearer ${options.integrationData.authAccessToken}`
      }
    });

    let data = [];
    for (let index = 0; index < projects.data.length; ++index) {
      if (projects.data[index].status === "active") {
        const stats = await Axios.default.get(
          `${this.apiEndpoint}/projects/${projects.data[index].organization.slug}/${projects.data[index].slug}/stats/?stat=received&resolution=1d`,
          {
            headers: {
              Authorization: `Bearer ${options.integrationData.authAccessToken}`
            }
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
              value: `${stats.data[0][1]}`
            }
          ]
        });
      }
    }
    data.sort(function(a, b) {
      if (parseInt(a.metrics[0].value) > parseInt(b.metrics[0].value))
        return -1;
      else if (parseInt(a.metrics[0].value) < parseInt(b.metrics[0].value))
        return 1;
      else return 0;
    });
    return data;
  }

  async getIssues(options) {
    let params;
    if (options.query) params = `query=${options.query}`;
    const res = await Axios.default.get(
      `${this.apiEndpoint}/projects/${options.thirdPartyOrganizationId}/${
        options.thirdPartyProjectId
      }/issues/?${params ? params : ``}&statsPeriod=`,
      {
        headers: {
          Authorization: `Bearer ${options.integrationData.authAccessToken}`
        }
      }
    );
    let issues = res.data;
    let parsedHeader = parseLinkHeader(res.headers["link"]);
    try {
      let count = 0;
      while (parsedHeader.next.results == "true" && count < 10) {
        const res = await Axios.default.get(parsedHeader.next.url, {
          headers: {
            Authorization: `Bearer ${options.integrationData.authAccessToken}`
          }
        });
        issues = issues.concat(res.data);
        parsedHeader = parseLinkHeader(res.headers["link"]);
        count++;
      }
    } catch (error) {
      console.error(error);
    }
    return issues;
  }

  async getMembers(options) {
    const res = await Axios.default.get(
      `${this.apiEndpoint}/projects/${options.thirdPartyOrganizationId}/${options.thirdPartyProjectId}/members/`,
      {
        headers: {
          Authorization: `Bearer ${options.integrationData.authAccessToken}`
        }
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
            Authorization: `Bearer ${options.integrationData.authAccessToken}`
          }
        });
        members = members.concat(res.data);
        parsedHeader = parseLinkHeader(res.headers["link"]);
        count++;
      }
    } catch (error) {
      console.error(error);
    }
    return members;
  }

  async updateIssues(options) {
    if (
      !options.integrationData.thirdPartyProjects ||
      options.integrationData.thirdPartyProjects.length == 0
    ) {
      console.error("No third party projects present");
      return "Ok";
    }

    const taskUri = nconf.get("TASK_API_URI");
    const authToken = nconf.get("PEPPER_TASK_API_ACCESS_TOKEN");

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: options.pepperTask,
          project_id: options.projectId,
          user_id: options.userId,
          sentry_ids: options.sentryIDs,
          resolveSimilarBugs: options.resolveSimilarBugs,
          markSimilarBugsAsViewed: options.markSimilarBugsAsViewed,
          third_party_project_id:
            options.integrationData.thirdPartyProjects[0].projectId,
          third_party_organization_id:
            options.integrationData.thirdPartyProjects[0].projectId
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

  async updateIssue(options) {
    if (
      !options.integrationData.thirdPartyProjects ||
      options.integrationData.thirdPartyProjects.length == 0
    ) {
      console.error("No third party projects present");
      return "Ok";
    }

    let params = {};
    const optionKeys = Object.keys(options);
    if (optionKeys.includes("hasSeen")) params = { hasSeen: options.hasSeen };
    if (optionKeys.includes("status"))
      params = { hasSeen: true, status: options.status };

    if (Object.keys(params) <= 0) return "Nothing to update";
    try {
      const data = await Axios.default.put(
        `${this.apiEndpoint}/issues/${options.sentry.id}/`,
        params,
        {
          headers: {
            Authorization: `Bearer ${options.integrationData.authAccessToken}`
          }
        }
      );
      return "Ok";
    } catch (error) {
      console.error(error.response.data || error.response || error);
      return error.response.data;
    }
  }

  async createProject(options) {}

  async getEventsForAnIssue(options) {
    if (!options.issueID) throw Error("Incorrect request");
    let events = [],
      uri = `${this.apiEndpoint}/issues/${options.issueID}/events/`;
    if (options.latest.toLowerCase() === "true") uri += `latest/`;
    uri += `?full=1`;
    const res = await Axios.default.get(uri, {
      headers: {
        Authorization: `Bearer ${options.integrationData.authAccessToken}`
      }
    });
    events.push(res.data);
    return events;
  }

  async getIssueFromID(options) {
    if (!options.id) throw Error("options.id is missing from the request body");
    const res = await Axios.default.get(
      `${this.apiEndpoint}/issues/${options.id}/?statsPeriod=`,
      {
        headers: {
          Authorization: `Bearer ${options.integrationData.authAccessToken}`
        }
      }
    );
    return res.data;
  }
}

module.exports = new SentryService();
