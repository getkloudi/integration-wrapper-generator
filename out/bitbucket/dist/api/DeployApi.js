"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeployKey = _interopRequireDefault(require("../model/DeployKey"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _PaginatedDeployKeys = _interopRequireDefault(require("../model/PaginatedDeployKeys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Deploy service.
* @module api/DeployApi
* @version 1.1.0
*/
var DeployApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DeployApi. 
  * @alias module:api/DeployApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DeployApi(apiClient) {
    _classCallCheck(this, DeployApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDeployKeysGet operation.
   * @callback module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PaginatedDeployKeys} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Returns all deploy-keys belonging to a repository.  Example: ``` $ curl -H \"Authorization <auth header>\" \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys  Output: {     \"pagelen\": 10,     \"values\": [         {             \"id\": 123,             \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",             \"label\": \"mykey\",             \"type\": \"deploy_key\",             \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",             \"repository\": {                 \"full_name\": \"mleu/test\",                 \"name\": \"test\",                 \"type\": \"repository\",                 \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"             },             \"links\":{                 \"self\":{                     \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\"                 }             }             \"last_used\": null,             \"comment\": \"mleu@C02W454JHTD8\"         }     ],     \"page\": 1,     \"size\": 1 } ```
   * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
   * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
   * @param {module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PaginatedDeployKeys}
   */


  _createClass(DeployApi, [{
    key: "repositoriesWorkspaceRepoSlugDeployKeysGet",
    value: function repositoriesWorkspaceRepoSlugDeployKeysGet(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDeployKeysGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDeployKeysGet");
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
      var returnType = _PaginatedDeployKeys["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deploy-keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete operation.
     * @callback module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * This deletes a deploy key from a repository.  Example: ``` $ curl -XDELETE \\ -H \"Authorization <auth header>\" \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 ```
     * @param {String} keyId The key ID matching the deploy key.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete",
    value: function repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete(keyId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdDelete");
      }

      var pathParams = {
        'key_id': keyId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet operation.
     * @callback module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the deploy key belonging to a specific key.  Example: ``` $ curl -H \"Authorization <auth header>\" \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234  Output: {     \"comment\": \"mleu@C02W454JHTD8\",     \"last_used\": null,     \"links\": {         \"self\": {             \"href\": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234\"         }     },     \"repository\": {         \"full_name\": \"mleu/test\",         \"name\": \"test\",         \"type\": \"repository\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"     },     \"label\": \"mykey\",     \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",     \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",     \"id\": 1234,     \"type\": \"deploy_key\" } ```
     * @param {String} keyId The key ID matching the deploy key.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployKey}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet",
    value: function repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet(keyId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdGet");
      }

      var pathParams = {
        'key_id': keyId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeployKey["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut operation.
     * @callback module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new deploy key in a repository.  The same key needs to be passed in but the comment and label can change.  Example: ``` $ curl -XPUT \\ -H \"Authorization <auth header>\" \\ -H \"Content-type: application/json\" \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \\ '{     \"label\": \"newlabel\",     \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment\", }'  Output: {     \"comment\": \"newcomment\",     \"last_used\": null,     \"links\": {         \"self\": {             \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234\"         }     },     \"repository\": {         \"full_name\": \"mleu/test\",         \"name\": \"test\",         \"type\": \"repository\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"     },     \"label\": \"newlabel\",     \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",     \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",     \"id\": 1234,     \"type\": \"deploy_key\" } ```
     * @param {String} keyId The key ID matching the deploy key.
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysKeyIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployKey}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut",
    value: function repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut(keyId, workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'keyId' is set

      if (keyId === undefined || keyId === null) {
        throw new _Error["default"]("Missing the required parameter 'keyId' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut");
      } // verify the required parameter 'workspace' is set


      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDeployKeysKeyIdPut");
      }

      var pathParams = {
        'key_id': keyId,
        'workspace': workspace,
        'repo_slug': repoSlug
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['api_key', 'basic', 'oauth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _DeployKey["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the repositoriesWorkspaceRepoSlugDeployKeysPost operation.
     * @callback module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeployKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new deploy key in a repository.  Example: ``` $ curl -XPOST \\ -H \"Authorization <auth header>\" \\ -H \"Content-type: application/json\" \\ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \\ '{     \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8\",     \"label\": \"mydeploykey\" }'  Output: {     \"id\": 123,     \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",     \"label\": \"mydeploykey\",     \"type\": \"deploy_key\",     \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",     \"repository\": {         \"full_name\": \"mleu/test\",         \"name\": \"test\",         \"type\": \"repository\",         \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"     },     \"links\":{         \"self\":{             \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\"         }     }     \"last_used\": null,     \"comment\": \"mleu@C02W454JHTD8\" } ```
     * @param {String} workspace This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example: `{workspace UUID}`. 
     * @param {String} repoSlug This can either be the repository slug or the UUID of the repository, surrounded by curly-braces, for example: `{repository UUID}`. 
     * @param {module:api/DeployApi~repositoriesWorkspaceRepoSlugDeployKeysPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeployKey}
     */

  }, {
    key: "repositoriesWorkspaceRepoSlugDeployKeysPost",
    value: function repositoriesWorkspaceRepoSlugDeployKeysPost(workspace, repoSlug, callback) {
      var postBody = null; // verify the required parameter 'workspace' is set

      if (workspace === undefined || workspace === null) {
        throw new _Error["default"]("Missing the required parameter 'workspace' when calling repositoriesWorkspaceRepoSlugDeployKeysPost");
      } // verify the required parameter 'repoSlug' is set


      if (repoSlug === undefined || repoSlug === null) {
        throw new _Error["default"]("Missing the required parameter 'repoSlug' when calling repositoriesWorkspaceRepoSlugDeployKeysPost");
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
      var returnType = _DeployKey["default"];
      return this.apiClient.callApi('/repositories/{workspace}/{repo_slug}/deploy-keys', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DeployApi;
}();

exports["default"] = DeployApi;