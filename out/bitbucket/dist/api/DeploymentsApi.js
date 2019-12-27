"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Deployment = _interopRequireDefault(require("../model/Deployment"));

var _DeploymentEnvironment = _interopRequireDefault(require("../model/DeploymentEnvironment"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedDeployments = _interopRequireDefault(require("../model/PaginatedDeployments"));

var _PaginatedEnvironments = _interopRequireDefault(require("../model/PaginatedEnvironments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Deployments service.
* @module api/DeploymentsApi
* @version 1.1.0
*/
var DeploymentsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DeploymentsApi. 
  * @alias module:api/DeploymentsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DeploymentsApi(apiClient) {
    _classCallCheck(this, DeploymentsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the createEnvironment operation.
   * @callback module:api/DeploymentsApi~createEnvironmentCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DeploymentEnvironment} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create an environment.
   * @param {String} username The account.
   * @param {String} repoSlug The repository.
   * @param {module:model/DeploymentEnvironment} body The environment to create.
   * @param {module:api/DeploymentsApi~createEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DeploymentEnvironment}
   */


  _createClass(DeploymentsApi, [{
    key: "createEnvironment",
    value: function createEnvironment(username, repoSlug, body, callback) {
      var postBody = body; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling createEnvironment");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling createEnvironment");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new _Error["default"]("Missing the required parameter 'body' when calling createEnvironment");
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
      var returnType = _DeploymentEnvironment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/environments/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the deleteEnvironmentForRepository operation.
     * @callback module:api/DeploymentsApi~deleteEnvironmentForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an environment
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} environmentUuid The environment UUID.
     * @param {module:api/DeploymentsApi~deleteEnvironmentForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "deleteEnvironmentForRepository",
    value: function deleteEnvironmentForRepository(username, repoSlug, environmentUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling deleteEnvironmentForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling deleteEnvironmentForRepository");
      } // verify the required parameter 'environmentUuid' is set


      if (environmentUuid === undefined || environmentUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'environmentUuid' when calling deleteEnvironmentForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'environment_uuid': environmentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDeploymentForRepository operation.
     * @callback module:api/DeploymentsApi~getDeploymentForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Deployment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a deployment
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} deploymentUuid The deployment UUID.
     * @param {module:api/DeploymentsApi~getDeploymentForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Deployment}
     */

  }, {
    key: "getDeploymentForRepository",
    value: function getDeploymentForRepository(username, repoSlug, deploymentUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getDeploymentForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getDeploymentForRepository");
      } // verify the required parameter 'deploymentUuid' is set


      if (deploymentUuid === undefined || deploymentUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'deploymentUuid' when calling getDeploymentForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'deployment_uuid': deploymentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Deployment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getDeploymentsForRepository operation.
     * @callback module:api/DeploymentsApi~getDeploymentsForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedDeployments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find deployments
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/DeploymentsApi~getDeploymentsForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedDeployments}
     */

  }, {
    key: "getDeploymentsForRepository",
    value: function getDeploymentsForRepository(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getDeploymentsForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getDeploymentsForRepository");
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
      var returnType = _PaginatedDeployments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deployments/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEnvironmentForRepository operation.
     * @callback module:api/DeploymentsApi~getEnvironmentForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeploymentEnvironment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an environment
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} environmentUuid The environment UUID.
     * @param {module:api/DeploymentsApi~getEnvironmentForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeploymentEnvironment}
     */

  }, {
    key: "getEnvironmentForRepository",
    value: function getEnvironmentForRepository(username, repoSlug, environmentUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getEnvironmentForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getEnvironmentForRepository");
      } // verify the required parameter 'environmentUuid' is set


      if (environmentUuid === undefined || environmentUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'environmentUuid' when calling getEnvironmentForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'environment_uuid': environmentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeploymentEnvironment["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getEnvironmentsForRepository operation.
     * @callback module:api/DeploymentsApi~getEnvironmentsForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedEnvironments} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find environments
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {module:api/DeploymentsApi~getEnvironmentsForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedEnvironments}
     */

  }, {
    key: "getEnvironmentsForRepository",
    value: function getEnvironmentsForRepository(username, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling getEnvironmentsForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling getEnvironmentsForRepository");
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
      var returnType = _PaginatedEnvironments["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/environments/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the updateEnvironmentForRepository operation.
     * @callback module:api/DeploymentsApi~updateEnvironmentForRepositoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an environment
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} environmentUuid The environment UUID.
     * @param {module:api/DeploymentsApi~updateEnvironmentForRepositoryCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "updateEnvironmentForRepository",
    value: function updateEnvironmentForRepository(username, repoSlug, environmentUuid, callback) {
      var postBody = null; // verify the required parameter 'username' is set

      if (username === undefined || username === null) {
        throw new _Error["default"]("Missing the required parameter 'username' when calling updateEnvironmentForRepository");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling updateEnvironmentForRepository");
      } // verify the required parameter 'environmentUuid' is set


      if (environmentUuid === undefined || environmentUuid === null) {
        throw new _Error["default"]("Missing the required parameter 'environmentUuid' when calling updateEnvironmentForRepository");
      }

      var pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'environment_uuid': environmentUuid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DeploymentsApi;
}();

exports["default"] = DeploymentsApi;