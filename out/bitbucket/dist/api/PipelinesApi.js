"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedPipelineKnownHosts = _interopRequireDefault(require("../model/PaginatedPipelineKnownHosts"));

var _PaginatedPipelineSteps = _interopRequireDefault(require("../model/PaginatedPipelineSteps"));

var _PaginatedPipelineVariables = _interopRequireDefault(require("../model/PaginatedPipelineVariables"));

var _PaginatedPipelines = _interopRequireDefault(require("../model/PaginatedPipelines"));

var _Pipeline = _interopRequireDefault(require("../model/Pipeline"));

var _PipelineKnownHost = _interopRequireDefault(require("../model/PipelineKnownHost"));

var _PipelineSshKeyPair = _interopRequireDefault(require("../model/PipelineSshKeyPair"));

var _PipelineStep = _interopRequireDefault(require("../model/PipelineStep"));

var _PipelineVariable = _interopRequireDefault(require("../model/PipelineVariable"));

var _PipelinesConfig = _interopRequireDefault(require("../model/PipelinesConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Pipelines service.
* @module api/PipelinesApi
* @version 1.0.0
*/
var PipelinesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new PipelinesApi. 
  * @alias module:api/PipelinesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PipelinesApi(apiClient) {
    _classCallCheck(this, PipelinesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createPipelineForRepository operation.
   * @callback module:api/PipelinesApi~createPipelineForRepositoryCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Pipeline} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Endpoint to create and initiate a pipeline.  There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated. # Trigger a Pipeline for a branch or tag One way to trigger pipelines is by specifying the reference for which you want to trigger a pipeline (e.g. a branch or tag).  The specified reference will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified reference.  ### Example  ``` $ curl -X POST -is -u username:password \\   -H 'Content-Type: application/json' \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d '   {     \"target\": {       \"ref_type\": \"branch\",        \"type\": \"pipeline_ref_target\",        \"ref_name\": \"master\"     }   }' ``` # Trigger a Pipeline for a commit on a branch or tag You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark). The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.   The following reference types are supported:  * `branch`  * `named_branch` * `bookmark`   * `tag`  ### Example  ``` $ curl -X POST -is -u username:password \\   -H 'Content-Type: application/json' \\   https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\   -d '   {     \"target\": {       \"commit\": {         \"type\": \"commit\",          \"hash\": \"ce5b7431602f7cbba007062eeb55225c6e18e956\"       },        \"ref_type\": \"branch\",        \"type\": \"pipeline_ref_target\",        \"ref_name\": \"master\"     }   }' ``` # Trigger a specific pipeline definition for a commit You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.  ### Example  ``` $ curl -X POST -is -u username:password \\   -H 'Content-Type: application/json' \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d '   {      \"target\": {       \"commit\": {          \"hash\":\"a3c4e02c9a3755eccdc3764e6ea13facdf30f923\",          \"type\":\"commit\"        },         \"selector\": {            \"type\":\"custom\",               \"pattern\":\"Deploy to production\"           },         \"type\":\"pipeline_commit_target\"    }   }' ``` # Trigger a specific pipeline definition for a commit on a branch or tag You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.  In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.  ### Example  ``` $ curl -X POST -is -u username:password \\   -H 'Content-Type: application/json' \\  https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \\  -d '   {      \"target\": {       \"commit\": {          \"hash\":\"a3c4e02c9a3755eccdc3764e6ea13facdf30f923\",          \"type\":\"commit\"        },        \"selector\": {           \"type\": \"custom\",           \"pattern\": \"Deploy to production\"        },        \"type\": \"pipeline_ref_target\",        \"ref_name\": \"master\",        \"ref_type\": \"branch\"      }   }' ``` 
   * @param {String} username The account.
   * @param {String} repoSlug The repository.
   * @param {module:model/Pipeline} body The pipeline to initiate.
   * @param {module:api/PipelinesApi~createPipelineForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Pipeline}
   */


  _createClass(PipelinesApi, [{
    key: "createPipelineForRepository",
    value: function createPipelineForRepository(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createPipelineForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createPipelineForRepository");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createPipelineForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Pipeline["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createPipelineVariableForTeam operation.
     * @callback module:api/PipelinesApi~createPipelineVariableForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an account level variable.
     * @param {String} username The account.
     * @param {Object} opts Optional parameters
     * @param {module:model/PipelineVariable} opts.body The variable to create.
     * @param {module:api/PipelinesApi~createPipelineVariableForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "createPipelineVariableForTeam",
    value: function createPipelineVariableForTeam(username, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createPipelineVariableForTeam");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/teams/{username}/pipelines_config/variables/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createPipelineVariableForUser operation.
     * @callback module:api/PipelinesApi~createPipelineVariableForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user level variable.
     * @param {String} username The account.
     * @param {Object} opts Optional parameters
     * @param {module:model/PipelineVariable} opts.body The variable to create.
     * @param {module:api/PipelinesApi~createPipelineVariableForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "createPipelineVariableForUser",
    value: function createPipelineVariableForUser(username, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createPipelineVariableForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/users/{username}/pipelines_config/variables/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createRepositoryPipelineKnownHost operation.
     * @callback module:api/PipelinesApi~createRepositoryPipelineKnownHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineKnownHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository level known host.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:model/PipelineKnownHost} body The known host to create.
     * @param {module:api/PipelinesApi~createRepositoryPipelineKnownHostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineKnownHost}
     */

  }, {
    key: "createRepositoryPipelineKnownHost",
    value: function createRepositoryPipelineKnownHost(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createRepositoryPipelineKnownHost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createRepositoryPipelineKnownHost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createRepositoryPipelineKnownHost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineKnownHost["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/known_hosts/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the createRepositoryPipelineVariable operation.
     * @callback module:api/PipelinesApi~createRepositoryPipelineVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a repository level variable.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:model/PipelineVariable} body The variable to create.
     * @param {module:api/PipelinesApi~createRepositoryPipelineVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "createRepositoryPipelineVariable",
    value: function createRepositoryPipelineVariable(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createRepositoryPipelineVariable");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createRepositoryPipelineVariable");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createRepositoryPipelineVariable");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/variables/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletePipelineVariableForTeam operation.
     * @callback module:api/PipelinesApi~deletePipelineVariableForTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable to delete.
     * @param {module:api/PipelinesApi~deletePipelineVariableForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePipelineVariableForTeam",
    value: function deletePipelineVariableForTeam(username, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deletePipelineVariableForTeam");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling deletePipelineVariableForTeam");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/teams/{username}/pipelines_config/variables/{variable_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deletePipelineVariableForUser operation.
     * @callback module:api/PipelinesApi~deletePipelineVariableForUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an account level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable to delete.
     * @param {module:api/PipelinesApi~deletePipelineVariableForUserCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deletePipelineVariableForUser",
    value: function deletePipelineVariableForUser(username, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deletePipelineVariableForUser");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling deletePipelineVariableForUser");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/users/{username}/pipelines_config/variables/{variable_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteRepositoryPipelineKeyPair operation.
     * @callback module:api/PipelinesApi~deleteRepositoryPipelineKeyPairCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the repository SSH key pair.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~deleteRepositoryPipelineKeyPairCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRepositoryPipelineKeyPair",
    value: function deleteRepositoryPipelineKeyPair(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteRepositoryPipelineKeyPair");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteRepositoryPipelineKeyPair");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/key_pair', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteRepositoryPipelineKnownHost operation.
     * @callback module:api/PipelinesApi~deleteRepositoryPipelineKnownHostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository level known host.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} knownHostUuid The UUID of the known host to delete.
     * @param {module:api/PipelinesApi~deleteRepositoryPipelineKnownHostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRepositoryPipelineKnownHost",
    value: function deleteRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteRepositoryPipelineKnownHost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteRepositoryPipelineKnownHost");
      } // verify the required parameter 'knownHostUuid' is set


      if (knownHostUuid === undefined || knownHostUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'knownHostUuid' when calling deleteRepositoryPipelineKnownHost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'known_host_uuid': knownHostUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteRepositoryPipelineVariable operation.
     * @callback module:api/PipelinesApi~deleteRepositoryPipelineVariableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a repository level variable.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} variableUuid The UUID of the variable to delete.
     * @param {module:api/PipelinesApi~deleteRepositoryPipelineVariableCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteRepositoryPipelineVariable",
    value: function deleteRepositoryPipelineVariable(username, repoSlug, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteRepositoryPipelineVariable");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteRepositoryPipelineVariable");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling deleteRepositoryPipelineVariable");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/variables/{variable_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineForRepository operation.
     * @callback module:api/PipelinesApi~getPipelineForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Pipeline} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a specified pipeline
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pipelineUuid The pipeline UUID.
     * @param {module:api/PipelinesApi~getPipelineForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Pipeline}
     */

  }, {
    key: "getPipelineForRepository",
    value: function getPipelineForRepository(username, repoSlug, pipelineUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPipelineForRepository");
      } // verify the required parameter 'pipelineUuid' is set


      if (pipelineUuid === undefined || pipelineUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'pipelineUuid' when calling getPipelineForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pipeline_uuid': pipelineUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Pipeline["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/{pipeline_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineStepForRepository operation.
     * @callback module:api/PipelinesApi~getPipelineStepForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineStep} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a given step of a pipeline.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pipelineUuid The UUID of the pipeline.
     * @param {String} stepUuid The UUID of the step.
     * @param {module:api/PipelinesApi~getPipelineStepForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineStep}
     */

  }, {
    key: "getPipelineStepForRepository",
    value: function getPipelineStepForRepository(username, repoSlug, pipelineUuid, stepUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineStepForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPipelineStepForRepository");
      } // verify the required parameter 'pipelineUuid' is set


      if (pipelineUuid === undefined || pipelineUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'pipelineUuid' when calling getPipelineStepForRepository");
      } // verify the required parameter 'stepUuid' is set


      if (stepUuid === undefined || stepUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'stepUuid' when calling getPipelineStepForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pipeline_uuid': pipelineUuid,
        'step_uuid': stepUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineStep["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineStepLogForRepository operation.
     * @callback module:api/PipelinesApi~getPipelineStepLogForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the log file for a given step of a pipeline.  This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pipelineUuid The UUID of the pipeline.
     * @param {String} stepUuid The UUID of the step.
     * @param {module:api/PipelinesApi~getPipelineStepLogForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getPipelineStepLogForRepository",
    value: function getPipelineStepLogForRepository(username, repoSlug, pipelineUuid, stepUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineStepLogForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPipelineStepLogForRepository");
      } // verify the required parameter 'pipelineUuid' is set


      if (pipelineUuid === undefined || pipelineUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'pipelineUuid' when calling getPipelineStepLogForRepository");
      } // verify the required parameter 'stepUuid' is set


      if (stepUuid === undefined || stepUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'stepUuid' when calling getPipelineStepLogForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pipeline_uuid': pipelineUuid,
        'step_uuid': stepUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineStepsForRepository operation.
     * @callback module:api/PipelinesApi~getPipelineStepsForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelineSteps} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find steps for the given pipeline.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pipelineUuid The UUID of the pipeline.
     * @param {module:api/PipelinesApi~getPipelineStepsForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelineSteps}
     */

  }, {
    key: "getPipelineStepsForRepository",
    value: function getPipelineStepsForRepository(username, repoSlug, pipelineUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineStepsForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPipelineStepsForRepository");
      } // verify the required parameter 'pipelineUuid' is set


      if (pipelineUuid === undefined || pipelineUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'pipelineUuid' when calling getPipelineStepsForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pipeline_uuid': pipelineUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelineSteps["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/{pipeline_uuid}/steps/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineVariableForTeam operation.
     * @callback module:api/PipelinesApi~getPipelineVariableForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a team level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable to retrieve.
     * @param {module:api/PipelinesApi~getPipelineVariableForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "getPipelineVariableForTeam",
    value: function getPipelineVariableForTeam(username, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineVariableForTeam");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling getPipelineVariableForTeam");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/teams/{username}/pipelines_config/variables/{variable_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineVariableForUser operation.
     * @callback module:api/PipelinesApi~getPipelineVariableForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a user level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable to retrieve.
     * @param {module:api/PipelinesApi~getPipelineVariableForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "getPipelineVariableForUser",
    value: function getPipelineVariableForUser(username, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineVariableForUser");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling getPipelineVariableForUser");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/users/{username}/pipelines_config/variables/{variable_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineVariablesForTeam operation.
     * @callback module:api/PipelinesApi~getPipelineVariablesForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelineVariables} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find account level variables.
     * @param {String} username The account.
     * @param {module:api/PipelinesApi~getPipelineVariablesForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelineVariables}
     */

  }, {
    key: "getPipelineVariablesForTeam",
    value: function getPipelineVariablesForTeam(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineVariablesForTeam");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelineVariables["default"];
      return this.apiClient.callApi('/teams/{username}/pipelines_config/variables/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelineVariablesForUser operation.
     * @callback module:api/PipelinesApi~getPipelineVariablesForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelineVariables} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find user level variables.
     * @param {String} username The account.
     * @param {module:api/PipelinesApi~getPipelineVariablesForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelineVariables}
     */

  }, {
    key: "getPipelineVariablesForUser",
    value: function getPipelineVariablesForUser(username, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelineVariablesForUser");
      }

      var pathParams = {
        'username': username
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelineVariables["default"];
      return this.apiClient.callApi('/users/{username}/pipelines_config/variables/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getPipelinesForRepository operation.
     * @callback module:api/PipelinesApi~getPipelinesForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelines} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find pipelines
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~getPipelinesForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelines}
     */

  }, {
    key: "getPipelinesForRepository",
    value: function getPipelinesForRepository(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getPipelinesForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getPipelinesForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelines["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineConfig operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelinesConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the repository pipelines configuration.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~getRepositoryPipelineConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelinesConfig}
     */

  }, {
    key: "getRepositoryPipelineConfig",
    value: function getRepositoryPipelineConfig(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineConfig");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineConfig");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelinesConfig["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineKnownHost operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineKnownHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineKnownHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a repository level known host.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} knownHostUuid The UUID of the known host to retrieve.
     * @param {module:api/PipelinesApi~getRepositoryPipelineKnownHostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineKnownHost}
     */

  }, {
    key: "getRepositoryPipelineKnownHost",
    value: function getRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineKnownHost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineKnownHost");
      } // verify the required parameter 'knownHostUuid' is set


      if (knownHostUuid === undefined || knownHostUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'knownHostUuid' when calling getRepositoryPipelineKnownHost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'known_host_uuid': knownHostUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineKnownHost["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineKnownHosts operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineKnownHostsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelineKnownHosts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find repository level known hosts.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~getRepositoryPipelineKnownHostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelineKnownHosts}
     */

  }, {
    key: "getRepositoryPipelineKnownHosts",
    value: function getRepositoryPipelineKnownHosts(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineKnownHosts");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineKnownHosts");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelineKnownHosts["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/known_hosts/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineSshKeyPair operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineSshKeyPairCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineSshKeyPair} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~getRepositoryPipelineSshKeyPairCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineSshKeyPair}
     */

  }, {
    key: "getRepositoryPipelineSshKeyPair",
    value: function getRepositoryPipelineSshKeyPair(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineSshKeyPair");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineSshKeyPair");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineSshKeyPair["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/key_pair', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineVariable operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a repository level variable.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} variableUuid The UUID of the variable to retrieve.
     * @param {module:api/PipelinesApi~getRepositoryPipelineVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "getRepositoryPipelineVariable",
    value: function getRepositoryPipelineVariable(username, repoSlug, variableUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineVariable");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineVariable");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling getRepositoryPipelineVariable");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/variables/{variable_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getRepositoryPipelineVariables operation.
     * @callback module:api/PipelinesApi~getRepositoryPipelineVariablesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedPipelineVariables} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find repository level variables.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/PipelinesApi~getRepositoryPipelineVariablesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedPipelineVariables}
     */

  }, {
    key: "getRepositoryPipelineVariables",
    value: function getRepositoryPipelineVariables(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getRepositoryPipelineVariables");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getRepositoryPipelineVariables");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PaginatedPipelineVariables["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/variables/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the stopPipeline operation.
     * @callback module:api/PipelinesApi~stopPipelineCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Signal the stop of a pipeline and all of its steps that not have completed yet.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pipelineUuid The UUID of the pipeline.
     * @param {module:api/PipelinesApi~stopPipelineCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "stopPipeline",
    value: function stopPipeline(username, repoSlug, pipelineUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling stopPipeline");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling stopPipeline");
      } // verify the required parameter 'pipelineUuid' is set


      if (pipelineUuid === undefined || pipelineUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'pipelineUuid' when calling stopPipeline");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pipeline_uuid': pipelineUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePipelineVariableForTeam operation.
     * @callback module:api/PipelinesApi~updatePipelineVariableForTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable.
     * @param {module:model/PipelineVariable} body The updated variable.
     * @param {module:api/PipelinesApi~updatePipelineVariableForTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "updatePipelineVariableForTeam",
    value: function updatePipelineVariableForTeam(username, variableUuid, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updatePipelineVariableForTeam");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling updatePipelineVariableForTeam");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updatePipelineVariableForTeam");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/teams/{username}/pipelines_config/variables/{variable_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updatePipelineVariableForUser operation.
     * @callback module:api/PipelinesApi~updatePipelineVariableForUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user level variable.
     * @param {String} username The account.
     * @param {String} variableUuid The UUID of the variable.
     * @param {module:model/PipelineVariable} body The updated variable.
     * @param {module:api/PipelinesApi~updatePipelineVariableForUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "updatePipelineVariableForUser",
    value: function updatePipelineVariableForUser(username, variableUuid, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updatePipelineVariableForUser");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling updatePipelineVariableForUser");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updatePipelineVariableForUser");
      }

      var pathParams = {
        'username': username,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/users/{username}/pipelines_config/variables/{variable_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateRepositoryPipelineConfig operation.
     * @callback module:api/PipelinesApi~updateRepositoryPipelineConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelinesConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the pipelines configuration for a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:model/PipelinesConfig} body The updated repository pipelines configuration.
     * @param {module:api/PipelinesApi~updateRepositoryPipelineConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelinesConfig}
     */

  }, {
    key: "updateRepositoryPipelineConfig",
    value: function updateRepositoryPipelineConfig(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updateRepositoryPipelineConfig");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling updateRepositoryPipelineConfig");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updateRepositoryPipelineConfig");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelinesConfig["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateRepositoryPipelineKeyPair operation.
     * @callback module:api/PipelinesApi~updateRepositoryPipelineKeyPairCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineSshKeyPair} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:model/PipelineSshKeyPair} body The created or updated SSH key pair.
     * @param {module:api/PipelinesApi~updateRepositoryPipelineKeyPairCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineSshKeyPair}
     */

  }, {
    key: "updateRepositoryPipelineKeyPair",
    value: function updateRepositoryPipelineKeyPair(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updateRepositoryPipelineKeyPair");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling updateRepositoryPipelineKeyPair");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updateRepositoryPipelineKeyPair");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineSshKeyPair["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/key_pair', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateRepositoryPipelineKnownHost operation.
     * @callback module:api/PipelinesApi~updateRepositoryPipelineKnownHostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineKnownHost} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a repository level known host.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} knownHostUuid The UUID of the known host to update.
     * @param {module:model/PipelineKnownHost} body The updated known host.
     * @param {module:api/PipelinesApi~updateRepositoryPipelineKnownHostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineKnownHost}
     */

  }, {
    key: "updateRepositoryPipelineKnownHost",
    value: function updateRepositoryPipelineKnownHost(username, repoSlug, knownHostUuid, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updateRepositoryPipelineKnownHost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling updateRepositoryPipelineKnownHost");
      } // verify the required parameter 'knownHostUuid' is set


      if (knownHostUuid === undefined || knownHostUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'knownHostUuid' when calling updateRepositoryPipelineKnownHost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updateRepositoryPipelineKnownHost");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'known_host_uuid': knownHostUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineKnownHost["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateRepositoryPipelineVariable operation.
     * @callback module:api/PipelinesApi~updateRepositoryPipelineVariableCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PipelineVariable} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a repository level variable.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} variableUuid The UUID of the variable to update.
     * @param {module:model/PipelineVariable} body The updated variable
     * @param {module:api/PipelinesApi~updateRepositoryPipelineVariableCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PipelineVariable}
     */

  }, {
    key: "updateRepositoryPipelineVariable",
    value: function updateRepositoryPipelineVariable(username, repoSlug, variableUuid, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updateRepositoryPipelineVariable");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling updateRepositoryPipelineVariable");
      } // verify the required parameter 'variableUuid' is set


      if (variableUuid === undefined || variableUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'variableUuid' when calling updateRepositoryPipelineVariable");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling updateRepositoryPipelineVariable");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'variable_uuid': variableUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _PipelineVariable["default"];
      return this.apiClient.callApi('/repositories/{username}/{repo_slug}/pipelines_config/variables/{variable_uuid}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PipelinesApi;
}();

exports["default"] = PipelinesApi;