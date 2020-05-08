const Axios = require('axios');
const qs = require('querystring');
const nconf = require('nconf');
const ErrorHelper = require('../../../helpers/ErrorHelper');

//Implements APIs found at https://developer.atlassian.com/cloud/jira/platform/rest/v3/
//Change app configuration at https://developer.atlassian.com/apps/

//As found on https://developer.atlassian.com/cloud/jira/platform/scopes/
const SCOPES = ['read:jira:work', 'write:jira:work', 'read:jira-user'];

class JiraOldService {
  get name() {
    return 'JIRA';
  }

  get description() {
    return 'The #1 software development tool used by agile teams to plan, track, and release great software.';
  }

  get icon() {
    return 'jira.svg';
  }

  get categroy() {
    return;
  }

  get apiEndpoint() {
    return;
  }

  get authMethod() {
    return 'API_TOKEN';
  }

  get authEndpoint() {
    return (
      'https://auth.atlassian.com/authorize?audience=api.atlassian.com&' +
      `client_id=${nconf.get('JIRA_CLIENT_ID')}&` +
      `scope=${qs.escape(this.scopes.join(' '))}&` +
      `redirect_uri=${qs.escape(
        nconf.get('WEB_APP_URI') + '/app/integrations/jira/callback'
      )}&` +
      `state=qwesomeval123123&` +
      `response_type=code&` +
      `prompt=consent`
    );
  }

  get apiTokenURL() {
    return 'https://id.atlassian.com/manage/api-tokens';
  }

  get requiredAuthParams() {
    return ['email', 'apiToken', 'host'];
  }

  get scopes() {
    return [...SCOPES];
  }

  get webhook() {
    return null;
  }

  get primaryAction() {
    return {
      type: 'INPUT_API_TOKEN_PARAMS',
      requiredAuthParams: this.requiredAuthParams,
    };
  }

  get entities() {
    return ['ISSUES', 'BOARDS', 'PROEJCTS'];
  }

  async connect(authParams) {
    if (authParams.email && authParams.apiToken && authParams.host) {
      return {
        integrationSpecificParams: {
          email: authParams.email,
          host: authParams.host,
        },
        accessToken: authParams.apiToken,
      };
    } else {
      throw ErrorHelper.getError('Missing email, password', 400);
    }
  }

  async get(entity, options) {
    switch (entity.toUpperCase()) {
      case 'PROJECTS':
        return await this.getProjects(options);
      case 'ISSUES':
        return await this.getIssues(options);
    }
  }

  async post(entity, options) {
    switch (entity.toUpperCase()) {
      case 'ISSUE':
        return await this.createBug(options);
      case 'ISSUES':
        return await this.createIssues(options);
      default:
        throw ErrorHelper.getError(
          `Creation of  entity ${entity} is not supported`,
          400
        );
    }
  }

  bulkCreate(entity, options) {}

  async getProjects(options) {
    const url = `${options.integration.integrationSpecificParams.host}/rest/api/3/project/search`;
    const res = await Axios.default.get(url, {
      auth: {
        username: options.integration.integrationSpecificParams.email,
        password: options.integration.authAccessToken,
      },
      params: {
        expand: 'description,projectKeys',
      },
    });
    const projects = res.data.values.map((value) => ({
      projectId: value.id,
      projectName: value.name,
      projectDescription: value.description,
      projectRef: value.self,
      projectIcon: value.avatarUrls['48x48'],
    }));
    return projects;
  }

  async getIssues(options) {
    const url = `${options.integration.integrationSpecificParams.host}/rest/api/3/search`;
    const res = await Axios.default.get(url, {
      auth: {
        username: options.integration.integrationSpecificParams.email,
        password: options.integration.authAccessToken,
      },
    });
    const issues = res.data.issues;
    return issues.map((issue) => ({
      id: issue.id,
      ref: issue.self,
      type: issue.fields.issuetype.name,
      projectId: issue.fields.project.id,
      projectName: issue.fields.project.name,
      priority: issue.fields.priority.name,
      status: issue.fields.status.name,
      title: issue.fields.summary,
    }));
  }

  async createBug(options) {
    const thirdPartyProjectId = options.issue.jiraProjectId;
    const summary = options.issue.summary;
    const description = options.issue.description;
    try {
      const res = await Axios.default.post(
        `${options.integration.integrationSpecificParams.host}/rest/api/3/issue/`,
        {
          fields: {
            project: {
              id: thirdPartyProjectId,
            },
            issuetype: {
              name: 'Bug',
            },
            summary: summary,
            description: {
              version: 1,
              type: 'doc',
              content: description,
            },
          },
        },
        {
          auth: {
            username: options.integration.integrationSpecificParams.email,
            password: options.integration.authAccessToken,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error(error.response || error);
      return 'ERROR';
    }
  }

  async createIssues(options) {
    if (
      !options.integration.thirdPartyProjects ||
      options.integration.thirdPartyProjects.length == 0
    ) {
      console.error('No third party projects present');
      return 'Ok';
    }

    const taskUri = nconf.get('TASK_API_URI');
    const authToken = nconf.get('PEPPER_TASK_API_ACCESS_TOKEN');

    try {
      const res = await Axios.default.post(
        taskUri,
        {
          pepper_task: 'task.thirdParty.CREATE_JIRA_ISSUES',
          project_id: options.projectID,
          user_id: options.userID,
          bug: options.bug,
          clubSimilarBugs: options.clubSimilarBugs,
          jiraProjectID: options.integration.thirdPartyProjects[0].projectId,
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
}

module.exports = new JiraOldService();
