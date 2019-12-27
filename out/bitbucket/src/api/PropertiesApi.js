/**
 * Bitbucket API
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Properties service.
* @module api/PropertiesApi
* @version 1.1.2
*/
export default class PropertiesApi {

    /**
    * Constructs a new PropertiesApi. 
    * @alias module:api/PropertiesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteCommitHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deleteCommitHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deleteCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteCommitHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deleteCommitHostedPropertyValue");
      }
      // verify the required parameter 'commit' is set
      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling deleteCommitHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteCommitHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteCommitHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deletePullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deletePullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deletePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deletePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'pullrequestId' is set
      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling deletePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deletePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deletePullRequestHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deleteRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deleteRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling deleteRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteRepositoryHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~deleteUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~deleteUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteUserHostedPropertyValue(username, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling deleteUserHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling deleteUserHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling deleteUserHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{username}/properties/{app_key}/{property_name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getCommitHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getCommitHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getCommitHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getCommitHostedPropertyValue");
      }
      // verify the required parameter 'commit' is set
      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling getCommitHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getCommitHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getCommitHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getPullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getPullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getPullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getPullRequestHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getPullRequestHostedPropertyValue");
      }
      // verify the required parameter 'pullrequestId' is set
      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling getPullRequestHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getPullRequestHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getPullRequestHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~getRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~getRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling getRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling getRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling getRepositoryHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~retrieveUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~retrieveUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    retrieveUserHostedPropertyValue(username, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling retrieveUserHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling retrieveUserHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling retrieveUserHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{username}/properties/{app_key}/{property_name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCommitHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateCommitHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a commit.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} commit The commit.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateCommitHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateCommitHostedPropertyValue(username, repoSlug, commit, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateCommitHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updateCommitHostedPropertyValue");
      }
      // verify the required parameter 'commit' is set
      if (commit === undefined || commit === null) {
        throw new Error("Missing the required parameter 'commit' when calling updateCommitHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateCommitHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateCommitHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'commit': commit,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePullRequestHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updatePullRequestHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a pull request.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} pullrequestId The pull request ID.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updatePullRequestHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePullRequestHostedPropertyValue(username, repoSlug, pullrequestId, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updatePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updatePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'pullrequestId' is set
      if (pullrequestId === undefined || pullrequestId === null) {
        throw new Error("Missing the required parameter 'pullrequestId' when calling updatePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updatePullRequestHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updatePullRequestHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'pullrequest_id': pullrequestId,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRepositoryHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateRepositoryHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a repository.
     * @param {String} username The account.
     * @param {String} repoSlug The repository.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateRepositoryHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateRepositoryHostedPropertyValue(username, repoSlug, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling updateRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateRepositoryHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateRepositoryHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserHostedPropertyValue operation.
     * @callback module:api/PropertiesApi~updateUserHostedPropertyValueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an application property value stored against a user.
     * @param {String} username The user.
     * @param {String} appKey The key of the Connect app.
     * @param {String} propertyName The name of the property.
     * @param {module:api/PropertiesApi~updateUserHostedPropertyValueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateUserHostedPropertyValue(username, appKey, propertyName, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling updateUserHostedPropertyValue");
      }
      // verify the required parameter 'appKey' is set
      if (appKey === undefined || appKey === null) {
        throw new Error("Missing the required parameter 'appKey' when calling updateUserHostedPropertyValue");
      }
      // verify the required parameter 'propertyName' is set
      if (propertyName === undefined || propertyName === null) {
        throw new Error("Missing the required parameter 'propertyName' when calling updateUserHostedPropertyValue");
      }

      let pathParams = {
        'username': username,
        'app_key': appKey,
        'property_name': propertyName
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{username}/properties/{app_key}/{property_name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
