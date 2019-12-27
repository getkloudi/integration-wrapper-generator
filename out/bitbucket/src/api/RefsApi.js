/**
 * Bitbucket
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
import Error from '../model/Error';
import Tag from '../model/Tag';

/**
* Refs service.
* @module api/RefsApi
* @version 1.1.0
*/
export default class RefsApi {

    /**
    * Constructs a new RefsApi. 
    * @alias module:api/RefsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsBranchesGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    repositoriesUsernameRepoSlugRefsBranchesGet(username, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsBranchesGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsBranchesGet");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs/branches', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsBranchesNameGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} name 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsBranchesNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    repositoriesUsernameRepoSlugRefsBranchesNameGet(username, name, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsBranchesNameGet");
      }

      let pathParams = {
        'username': username,
        'name': name,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs/branches/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    repositoriesUsernameRepoSlugRefsGet(username, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsGet");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
     * @param {String} repoSlug  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    repositoriesUsernameRepoSlugRefsTagsGet(username, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsGet");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsNameGet operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} name 
     * @param {String} repoSlug 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    repositoriesUsernameRepoSlugRefsTagsNameGet(username, name, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsNameGet");
      }

      let pathParams = {
        'username': username,
        'name': name,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Error;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs/tags/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugRefsTagsPost operation.
     * @callback module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new tag in the specified repository.  The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash.  ``` {     \"name\" : \"new tag name\",     \"target\" : {         \"hash\" : \"target commit hash\",     } } ```  This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.
     * @param {String} username  The username for the owner of the repository. This can either be the `username` of the owner or the `UUID` of the owner (surrounded by curly-braces (`{}`)). Owners can be users or teams. 
     * @param {String} repoSlug  The repo slug for the repository.  This can either be the `repo_slug` of the repository or the `UUID` of the repository (surrounded by curly-braces (`{}`)) 
     * @param {module:model/Tag} body 
     * @param {module:api/RefsApi~repositoriesUsernameRepoSlugRefsTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    repositoriesUsernameRepoSlugRefsTagsPost(username, repoSlug, body, callback) {
      let postBody = body;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugRefsTagsPost");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugRefsTagsPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling repositoriesUsernameRepoSlugRefsTagsPost");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Tag;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/refs/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
