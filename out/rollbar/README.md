# Rollbar

Rollbar - JavaScript client for Rollbar
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install Rollbar --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your Rollbar from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Rollbar = require('Rollbar');


var api = new Rollbar.DefaultApi()
var xRollbarAccessToken = "xRollbarAccessToken_example"; // {String} Use a project access token with 'read' scope
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deployGet(xRollbarAccessToken, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.rollbar.com/api/1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Rollbar.DefaultApi* | [**deployGet**](docs/DefaultApi.md#deployGet) | **GET** /deploy | 
*Rollbar.DefaultApi* | [**deployPatch**](docs/DefaultApi.md#deployPatch) | **PATCH** /deploy | 
*Rollbar.DefaultApi* | [**deployPost**](docs/DefaultApi.md#deployPost) | **POST** /deploy | 
*Rollbar.DefaultApi* | [**deploysGet**](docs/DefaultApi.md#deploysGet) | **GET** /deploys | 
*Rollbar.DefaultApi* | [**dsymPost**](docs/DefaultApi.md#dsymPost) | **POST** /dsym | 
*Rollbar.DefaultApi* | [**inviteInviteIdDelete**](docs/DefaultApi.md#inviteInviteIdDelete) | **DELETE** /invite/{invite_id} | 
*Rollbar.DefaultApi* | [**inviteInviteIdGet**](docs/DefaultApi.md#inviteInviteIdGet) | **GET** /invite/{invite_id} | 
*Rollbar.DefaultApi* | [**itemByCounterCounterGet**](docs/DefaultApi.md#itemByCounterCounterGet) | **GET** /item_by_counter/{counter} | 
*Rollbar.DefaultApi* | [**itemItemidGet**](docs/DefaultApi.md#itemItemidGet) | **GET** /item/{itemid} | 
*Rollbar.DefaultApi* | [**itemItemidPatch**](docs/DefaultApi.md#itemItemidPatch) | **PATCH** /item/{itemid} | 
*Rollbar.DefaultApi* | [**itemsGet**](docs/DefaultApi.md#itemsGet) | **GET** /items | 
*Rollbar.DefaultApi* | [**peopleDeleteJobsJobIdGet**](docs/DefaultApi.md#peopleDeleteJobsJobIdGet) | **GET** /people/delete_jobs/{job_id} | 
*Rollbar.DefaultApi* | [**peopleDeleteJobsPost**](docs/DefaultApi.md#peopleDeleteJobsPost) | **POST** /people/delete_jobs/ | 
*Rollbar.DefaultApi* | [**proguardPost**](docs/DefaultApi.md#proguardPost) | **POST** /proguard | 
*Rollbar.DefaultApi* | [**projectIdAccessTokensGet**](docs/DefaultApi.md#projectIdAccessTokensGet) | **GET** /project/{id}/access_tokens | 
*Rollbar.DefaultApi* | [**projectProjectIdAccessTokenProjectAccessTokenPatch**](docs/DefaultApi.md#projectProjectIdAccessTokenProjectAccessTokenPatch) | **PATCH** /project/{project_id}/access_token/{project_access_token} | 
*Rollbar.DefaultApi* | [**projectProjectIdGet**](docs/DefaultApi.md#projectProjectIdGet) | **GET** /project/{project_id} | 
*Rollbar.DefaultApi* | [**projectProjectIdPost**](docs/DefaultApi.md#projectProjectIdPost) | **POST** /project/{project_id} | 
*Rollbar.DefaultApi* | [**projectsGet**](docs/DefaultApi.md#projectsGet) | **GET** /projects | 
*Rollbar.DefaultApi* | [**projectsPost**](docs/DefaultApi.md#projectsPost) | **POST** /projects | 
*Rollbar.DefaultApi* | [**reportsActivatedCountsGet**](docs/DefaultApi.md#reportsActivatedCountsGet) | **GET** /reports/activated_counts | 
*Rollbar.DefaultApi* | [**reportsOccurrenceCountsGet**](docs/DefaultApi.md#reportsOccurrenceCountsGet) | **GET** /reports/occurrence_counts | 
*Rollbar.DefaultApi* | [**reportsTopActiveItemsGet**](docs/DefaultApi.md#reportsTopActiveItemsGet) | **GET** /reports/top_active_items | 
*Rollbar.DefaultApi* | [**rqlJobJobIdCancelPost**](docs/DefaultApi.md#rqlJobJobIdCancelPost) | **POST** /rql/job/{job_id}/cancel | 
*Rollbar.DefaultApi* | [**rqlJobJobIdGet**](docs/DefaultApi.md#rqlJobJobIdGet) | **GET** /rql/job/{job_id} | 
*Rollbar.DefaultApi* | [**rqlJobJobIdResultGet**](docs/DefaultApi.md#rqlJobJobIdResultGet) | **GET** /rql/job/{job_id}/result | 
*Rollbar.DefaultApi* | [**rqlJobsGet**](docs/DefaultApi.md#rqlJobsGet) | **GET** /rql/jobs/ | 
*Rollbar.DefaultApi* | [**rqlJobsPost**](docs/DefaultApi.md#rqlJobsPost) | **POST** /rql/jobs/ | 
*Rollbar.DefaultApi* | [**sourcemapPost**](docs/DefaultApi.md#sourcemapPost) | **POST** /sourcemap | 
*Rollbar.DefaultApi* | [**teamDelete**](docs/DefaultApi.md#teamDelete) | **DELETE** /team | 
*Rollbar.DefaultApi* | [**teamGet**](docs/DefaultApi.md#teamGet) | **GET** /team | 
*Rollbar.DefaultApi* | [**teamTeamIdInvitesGet**](docs/DefaultApi.md#teamTeamIdInvitesGet) | **GET** /team/{team_id}/invites | 
*Rollbar.DefaultApi* | [**teamTeamIdInvitesPost**](docs/DefaultApi.md#teamTeamIdInvitesPost) | **POST** /team/{team_id}/invites | 
*Rollbar.DefaultApi* | [**teamTeamIdProjectProjectIdDelete**](docs/DefaultApi.md#teamTeamIdProjectProjectIdDelete) | **DELETE** /team/{team_id}/project/{project_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdProjectProjectIdGet**](docs/DefaultApi.md#teamTeamIdProjectProjectIdGet) | **GET** /team/{team_id}/project/{project_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdProjectProjectIdPut**](docs/DefaultApi.md#teamTeamIdProjectProjectIdPut) | **PUT** /team/{team_id}/project/{project_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdProjectsGet**](docs/DefaultApi.md#teamTeamIdProjectsGet) | **GET** /team/{team_id}/projects | 
*Rollbar.DefaultApi* | [**teamTeamIdUserUserIdDelete**](docs/DefaultApi.md#teamTeamIdUserUserIdDelete) | **DELETE** /team/{team_id}/user/{user_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdUserUserIdGet**](docs/DefaultApi.md#teamTeamIdUserUserIdGet) | **GET** /team/{team_id}/user/{user_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdUserUserIdPut**](docs/DefaultApi.md#teamTeamIdUserUserIdPut) | **PUT** /team/{team_id}/user/{user_id} | 
*Rollbar.DefaultApi* | [**teamTeamIdUsersGet**](docs/DefaultApi.md#teamTeamIdUsersGet) | **GET** /team/{team_id}/users | 
*Rollbar.DefaultApi* | [**teamsGet**](docs/DefaultApi.md#teamsGet) | **GET** /teams | 
*Rollbar.DefaultApi* | [**teamsPost**](docs/DefaultApi.md#teamsPost) | **POST** /teams | 
*Rollbar.DefaultApi* | [**userUserIdGet**](docs/DefaultApi.md#userUserIdGet) | **GET** /user/{user_id} | 
*Rollbar.DefaultApi* | [**userUserIdProjectsGet**](docs/DefaultApi.md#userUserIdProjectsGet) | **GET** /user/{user_id}/projects | 
*Rollbar.DefaultApi* | [**userUserIdTeamsGet**](docs/DefaultApi.md#userUserIdTeamsGet) | **GET** /user/{user_id}/teams | 
*Rollbar.DefaultApi* | [**usersGet**](docs/DefaultApi.md#usersGet) | **GET** /users | 
*Rollbar.ItemApi* | [**itemPost**](docs/ItemApi.md#itemPost) | **POST** /item/ | 
*Rollbar.NotificationsApi* | [**notificationsEmailPut**](docs/NotificationsApi.md#notificationsEmailPut) | **PUT** /notifications/email | 
*Rollbar.NotificationsApi* | [**notificationsEmailRulesPut**](docs/NotificationsApi.md#notificationsEmailRulesPut) | **PUT** /notifications/email/rules | 
*Rollbar.NotificationsApi* | [**notificationsPagerdutyPut**](docs/NotificationsApi.md#notificationsPagerdutyPut) | **PUT** /notifications/pagerduty | 
*Rollbar.NotificationsApi* | [**notificationsPagerdutyRulesPut**](docs/NotificationsApi.md#notificationsPagerdutyRulesPut) | **PUT** /notifications/pagerduty/rules | 
*Rollbar.NotificationsApi* | [**notificationsSlackPut**](docs/NotificationsApi.md#notificationsSlackPut) | **PUT** /notifications/slack | 
*Rollbar.NotificationsApi* | [**notificationsSlackRulesPut**](docs/NotificationsApi.md#notificationsSlackRulesPut) | **PUT** /notifications/slack/rules | 
*Rollbar.OccurrenceApi* | [**instanceInstanceIdDelete**](docs/OccurrenceApi.md#instanceInstanceIdDelete) | **DELETE** /instance/{instance_id} | Delete an occurrence
*Rollbar.OccurrenceApi* | [**instanceInstanceIdGet**](docs/OccurrenceApi.md#instanceInstanceIdGet) | **GET** /instance/{instance_id} | Get an occurrence
*Rollbar.OccurrenceApi* | [**instancesGet**](docs/OccurrenceApi.md#instancesGet) | **GET** /instances | List all occurrences in a project
*Rollbar.OccurrenceApi* | [**itemIdInstancesGet**](docs/OccurrenceApi.md#itemIdInstancesGet) | **GET** /{item_id}/instances | List all occurrences in an item
*Rollbar.ProjectAccessTokensApi* | [**projectIdAccessTokensPost**](docs/ProjectAccessTokensApi.md#projectIdAccessTokensPost) | **POST** /project/{id}/access_tokens | 
*Rollbar.VersionsApi* | [**versionsVersionGet**](docs/VersionsApi.md#versionsVersionGet) | **GET** /versions/{version} | Code version details in one project
*Rollbar.VersionsApi* | [**versionsVersionItemsGet**](docs/VersionsApi.md#versionsVersionItemsGet) | **GET** /versions/{version}/items | List items by code version


## Documentation for Models

 - [Rollbar.Api1DeployRequest](docs/Api1DeployRequest.md)
 - [Rollbar.Api1DeployRequest1](docs/Api1DeployRequest1.md)
 - [Rollbar.Api1DsymRequest](docs/Api1DsymRequest.md)
 - [Rollbar.Api1InstanceResponse](docs/Api1InstanceResponse.md)
 - [Rollbar.Api1InstanceResponse1](docs/Api1InstanceResponse1.md)
 - [Rollbar.Api1InstancesResponse](docs/Api1InstancesResponse.md)
 - [Rollbar.Api1ItemRequest](docs/Api1ItemRequest.md)
 - [Rollbar.Api1ItemRequest1](docs/Api1ItemRequest1.md)
 - [Rollbar.Api1ProguardRequest](docs/Api1ProguardRequest.md)
 - [Rollbar.Api1ProjectAccessTokenRequest](docs/Api1ProjectAccessTokenRequest.md)
 - [Rollbar.Api1ProjectAccessTokensResponse](docs/Api1ProjectAccessTokensResponse.md)
 - [Rollbar.Api1ProjectsRequest](docs/Api1ProjectsRequest.md)
 - [Rollbar.Api1RqlJobsRequest](docs/Api1RqlJobsRequest.md)
 - [Rollbar.Api1SourcemapRequest](docs/Api1SourcemapRequest.md)
 - [Rollbar.Api1TeamInvitesRequest](docs/Api1TeamInvitesRequest.md)
 - [Rollbar.Api1TeamsRequest](docs/Api1TeamsRequest.md)
 - [Rollbar.Api1VersionsItemsResponse](docs/Api1VersionsItemsResponse.md)
 - [Rollbar.Api1VersionsResponse](docs/Api1VersionsResponse.md)
 - [Rollbar.CommentFilter](docs/CommentFilter.md)
 - [Rollbar.Commit](docs/Commit.md)
 - [Rollbar.Config](docs/Config.md)
 - [Rollbar.Config11](docs/Config11.md)
 - [Rollbar.Config13](docs/Config13.md)
 - [Rollbar.Config23](docs/Config23.md)
 - [Rollbar.ContextFilter](docs/ContextFilter.md)
 - [Rollbar.DeployEmailRule](docs/DeployEmailRule.md)
 - [Rollbar.DeployRule](docs/DeployRule.md)
 - [Rollbar.DeploySlackRule](docs/DeploySlackRule.md)
 - [Rollbar.EmailIntegrationConfig](docs/EmailIntegrationConfig.md)
 - [Rollbar.EmailRule](docs/EmailRule.md)
 - [Rollbar.EmailRuleConfig](docs/EmailRuleConfig.md)
 - [Rollbar.EmptyResponse](docs/EmptyResponse.md)
 - [Rollbar.EnvironmentFilter](docs/EnvironmentFilter.md)
 - [Rollbar.Err](docs/Err.md)
 - [Rollbar.Event](docs/Event.md)
 - [Rollbar.ExpRepeatItemEmailRule](docs/ExpRepeatItemEmailRule.md)
 - [Rollbar.ExpRepeatItemPagerDutyRule](docs/ExpRepeatItemPagerDutyRule.md)
 - [Rollbar.ExpRepeatItemRule](docs/ExpRepeatItemRule.md)
 - [Rollbar.ExpRepeatItemSlackRule](docs/ExpRepeatItemSlackRule.md)
 - [Rollbar.FilenameFilter](docs/FilenameFilter.md)
 - [Rollbar.Filter](docs/Filter.md)
 - [Rollbar.Filter1](docs/Filter1.md)
 - [Rollbar.Filter3](docs/Filter3.md)
 - [Rollbar.FrameworkFilter](docs/FrameworkFilter.md)
 - [Rollbar.Item](docs/Item.md)
 - [Rollbar.ItemInVersion](docs/ItemInVersion.md)
 - [Rollbar.ItemInVersionAllOf](docs/ItemInVersionAllOf.md)
 - [Rollbar.ItemLevelStats](docs/ItemLevelStats.md)
 - [Rollbar.ItemStats](docs/ItemStats.md)
 - [Rollbar.Level](docs/Level.md)
 - [Rollbar.LevelFilter](docs/LevelFilter.md)
 - [Rollbar.MethodFilter](docs/MethodFilter.md)
 - [Rollbar.NewItemEmailRule](docs/NewItemEmailRule.md)
 - [Rollbar.NewItemPagerDutyRule](docs/NewItemPagerDutyRule.md)
 - [Rollbar.NewItemRule](docs/NewItemRule.md)
 - [Rollbar.NewItemSlackRule](docs/NewItemSlackRule.md)
 - [Rollbar.NewVersionEmailRule](docs/NewVersionEmailRule.md)
 - [Rollbar.NewVersionRule](docs/NewVersionRule.md)
 - [Rollbar.NewVersionSlackRule](docs/NewVersionSlackRule.md)
 - [Rollbar.OccurrenceEmailRule](docs/OccurrenceEmailRule.md)
 - [Rollbar.OccurrenceInstance](docs/OccurrenceInstance.md)
 - [Rollbar.OccurrenceRateEmailRule](docs/OccurrenceRateEmailRule.md)
 - [Rollbar.OccurrenceRatePagerDutyRule](docs/OccurrenceRatePagerDutyRule.md)
 - [Rollbar.OccurrenceRateRule](docs/OccurrenceRateRule.md)
 - [Rollbar.OccurrenceRateSlackRule](docs/OccurrenceRateSlackRule.md)
 - [Rollbar.OccurrenceRule](docs/OccurrenceRule.md)
 - [Rollbar.OccurrenceSlackRule](docs/OccurrenceSlackRule.md)
 - [Rollbar.Operation](docs/Operation.md)
 - [Rollbar.Operation33](docs/Operation33.md)
 - [Rollbar.Operation34](docs/Operation34.md)
 - [Rollbar.Operation35](docs/Operation35.md)
 - [Rollbar.Operation36](docs/Operation36.md)
 - [Rollbar.Operation38](docs/Operation38.md)
 - [Rollbar.PagerDutyIntegrationConfig](docs/PagerDutyIntegrationConfig.md)
 - [Rollbar.PagerDutyRule](docs/PagerDutyRule.md)
 - [Rollbar.PagerDutyRuleConfig](docs/PagerDutyRuleConfig.md)
 - [Rollbar.PaginatedOccurrenceInstances](docs/PaginatedOccurrenceInstances.md)
 - [Rollbar.PathFilter](docs/PathFilter.md)
 - [Rollbar.PathFilterWithExists](docs/PathFilterWithExists.md)
 - [Rollbar.ProjectAccessToken](docs/ProjectAccessToken.md)
 - [Rollbar.ProjectAccessTokenResponse](docs/ProjectAccessTokenResponse.md)
 - [Rollbar.ProjectVersion](docs/ProjectVersion.md)
 - [Rollbar.RateFilter](docs/RateFilter.md)
 - [Rollbar.ReactivatedItemEmailRule](docs/ReactivatedItemEmailRule.md)
 - [Rollbar.ReactivatedItemPagerDutyRule](docs/ReactivatedItemPagerDutyRule.md)
 - [Rollbar.ReactivatedItemRule](docs/ReactivatedItemRule.md)
 - [Rollbar.ReactivatedItemSlackRule](docs/ReactivatedItemSlackRule.md)
 - [Rollbar.ReopenedItemEmailRule](docs/ReopenedItemEmailRule.md)
 - [Rollbar.ReopenedItemRule](docs/ReopenedItemRule.md)
 - [Rollbar.ReopenedItemSlackRule](docs/ReopenedItemSlackRule.md)
 - [Rollbar.ResolvedItemEmailRule](docs/ResolvedItemEmailRule.md)
 - [Rollbar.ResolvedItemPagerDutyRule](docs/ResolvedItemPagerDutyRule.md)
 - [Rollbar.ResolvedItemRule](docs/ResolvedItemRule.md)
 - [Rollbar.ResolvedItemSlackRule](docs/ResolvedItemSlackRule.md)
 - [Rollbar.Scope](docs/Scope.md)
 - [Rollbar.SlackIntegrationConfig](docs/SlackIntegrationConfig.md)
 - [Rollbar.SlackRule](docs/SlackRule.md)
 - [Rollbar.SlackRuleConfig](docs/SlackRuleConfig.md)
 - [Rollbar.SlackRuleConfigNoButtons](docs/SlackRuleConfigNoButtons.md)
 - [Rollbar.Status](docs/Status.md)
 - [Rollbar.Status2](docs/Status2.md)
 - [Rollbar.SuccessResponse](docs/SuccessResponse.md)
 - [Rollbar.TitleFilter](docs/TitleFilter.md)
 - [Rollbar.Type](docs/Type.md)
 - [Rollbar.UniqueOccurencesFilter](docs/UniqueOccurencesFilter.md)
 - [Rollbar.Value](docs/Value.md)


## Documentation for Authorization

All endpoints do not require authorization.
