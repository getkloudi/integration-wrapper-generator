"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchingModel = _interopRequireDefault(require("../model/BranchingModel"));

var _BranchingModelSettings = _interopRequireDefault(require("../model/BranchingModelSettings"));

var _Error = _interopRequireDefault(require("../model/Error"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* BranchingModel service.
* @module api/BranchingModelApi
* @version 1.2.0
*/
var BranchingModelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new BranchingModelApi. 
  * @alias module:api/BranchingModelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function BranchingModelApi(apiClient) {
    _classCallCheck(this, BranchingModelApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchingModelGet operation.
   * @callback module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BranchingModel} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Return the branching model as applied to the repository. This view is read-only. The branching model settings can be changed using the [settings](branching-model/settings#get) API.  The returned object:  1. Always has a `development` property. `development.branch` contains    the actual repository branch object that is considered to be the    `development` branch. `development.branch` will not be present    if it does not exist. 2. Might have a `production` property. `production` will not    be present when `production` is disabled.    `production.branch` contains the actual branch object that is    considered to be the `production` branch. `production.branch` will    not be present if it does not exist. 3. Always has a `branch_types` array which contains all enabled branch    types.  Example body:  ``` {   \"development\": {     \"name\": \"master\",     \"branch\": {       \"type\": \"branch\",       \"name\": \"master\",       \"target\": {         \"hash\": \"16dffcb0de1b22e249db6799532074cf32efe80f\"       }     },     \"use_mainbranch\": true   },   \"production\": {     \"name\": \"production\",     \"branch\": {       \"type\": \"branch\",       \"name\": \"production\",       \"target\": {         \"hash\": \"16dffcb0de1b22e249db6799532074cf32efe80f\"       }     },     \"use_mainbranch\": false   },   \"branch_types\": [     {       \"kind\": \"release\",       \"prefix\": \"release/\"     },     {       \"kind\": \"hotfix\",       \"prefix\": \"hotfix/\"     },     {       \"kind\": \"feature\",       \"prefix\": \"feature/\"     },     {       \"kind\": \"bugfix\",       \"prefix\": \"bugfix/\"     }   ],   \"type\": \"branching_model\",   \"links\": {     \"self\": {       \"href\": \"https://api.bitbucket.org/.../branching-model\"     }   } } ```
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BranchingModel}
   */


  _createClass(BranchingModelApi, [{
    key: "repositoriesWorkspaceRepoSlugBranchingModelGet",
    value: function repositoriesWorkspaceRepoSlugBranchingModelGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchingModelGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchingModelGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchingModel["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branching-model', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchingModelSettingsGet operation.
     * @callback module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelSettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchingModelSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return the branching model configuration for a repository. The returned object:  1. Always has a `development` property for the development branch. 2. Always a `production` property for the production branch. The    production branch can be disabled. 3. The `branch_types` contains all the branch types.  This is the raw configuration for the branching model. A client wishing to see the branching model with its actual current branches may find the [active model API](../branching-model#get) more useful.  Example body:  ``` {   \"development\": {     \"is_valid\": true,     \"name\": null,     \"use_mainbranch\": true   },   \"production\": {     \"is_valid\": true,     \"name\": \"production\",     \"use_mainbranch\": false,     \"enabled\": false   },   \"branch_types\": [     {       \"kind\": \"release\",       \"enabled\": true,       \"prefix\": \"release/\"     },     {       \"kind\": \"hotfix\",       \"enabled\": true,       \"prefix\": \"hotfix/\"     },     {       \"kind\": \"feature\",       \"enabled\": true,       \"prefix\": \"feature/\"     },     {       \"kind\": \"bugfix\",       \"enabled\": false,       \"prefix\": \"bugfix/\"     }   ],   \"type\": \"branching_model_settings\",   \"links\": {     \"self\": {       \"href\": \"https://api.bitbucket.org/.../branching-model/settings\"     }   } } ```
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelSettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchingModelSettings}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchingModelSettingsGet",
    value: function repositoriesWorkspaceRepoSlugBranchingModelSettingsGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchingModelSettingsGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchingModelSettingsGet");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchingModelSettings["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branching-model/settings', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugBranchingModelSettingsPut operation.
     * @callback module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelSettingsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BranchingModelSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the branching model configuration for a repository.  The `development` branch can be configured to a specific branch or to track the main branch. When set to a specific branch it must currently exist. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `development` property will leave the development branch unchanged.  It is possible for the `development` branch to be invalid. This happens when it points at a specific branch that has been deleted. This is indicated in the `is_valid` field for the branch. It is not possible to update the settings for `development` if that would leave the branch in an invalid state. Such a request will be rejected.  The `production` branch can be a specific branch, the main branch or disabled. When set to a specific branch it must currently exist. The `enabled` property can be used to enable (`true`) or disable (`false`) it. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `production` property will leave the production branch unchanged.  It is possible for the `production` branch to be invalid. This happens when it points at a specific branch that has been deleted. This is indicated in the `is_valid` field for the branch. A request that would leave `production` enabled and invalid will be rejected. It is possible to update `production` and make it invalid if it would also be left disabled.  The `branch_types` property contains the branch types to be updated. Only the branch types passed will be updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch types this means that:  1. The prefixes for all enabled branch types are valid. For example,    it is not possible to use '*' inside a Git prefix. 2. A prefix of an enabled branch type must not be a prefix of another    enabled branch type. This is to ensure that a branch can be easily    classified by its prefix unambiguously.  It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties will be updated. The properties not passed will be left unchanged. Each branch type must have a `kind` property to identify it.  Example Body:  ```     {       \"development\": {         \"use_mainbranch\": true       },       \"production\": {         \"enabled\": true,         \"use_mainbranch\": false,         \"name\": \"production\"       },       \"branch_types\": [         {           \"kind\": \"bugfix\",           \"enabled\": true,           \"prefix\": \"bugfix/\"         },         {           \"kind\": \"feature\",           \"enabled\": true,           \"prefix\": \"feature/\"         },         {           \"kind\": \"hotfix\",           \"prefix\": \"hotfix/\"         },         {           \"kind\": \"release\",           \"enabled\": false,         }       ]     } ```
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/BranchingModelApi~repositoriesWorkspaceRepoSlugBranchingModelSettingsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BranchingModelSettings}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugBranchingModelSettingsPut",
    value: function repositoriesWorkspaceRepoSlugBranchingModelSettingsPut(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugBranchingModelSettingsPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugBranchingModelSettingsPut");
      }

      var pathParams = {
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BranchingModelSettings["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/branching-model/settings', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return BranchingModelApi;
}();

exports["default"] = BranchingModelApi;