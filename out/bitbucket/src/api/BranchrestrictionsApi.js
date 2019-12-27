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
import Branchrestriction from '../model/Branchrestriction';
import Error from '../model/Error';
import PaginatedBranchrestrictions from '../model/PaginatedBranchrestrictions';

/**
* Branchrestrictions service.
* @module api/BranchrestrictionsApi
* @version 1.1.0
*/
export default class BranchrestrictionsApi {

    /**
    * Constructs a new BranchrestrictionsApi. 
    * @alias module:api/BranchrestrictionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugBranchRestrictionsGet operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedBranchrestrictions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a paginated list of all branch restrictions on the repository.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedBranchrestrictions}
     */
    repositoriesUsernameRepoSlugBranchRestrictionsGet(username, repoSlug, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugBranchRestrictionsGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugBranchRestrictionsGet");
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
      let returnType = PaginatedBranchrestrictions;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/branch-restrictions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugBranchRestrictionsIdDelete operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an existing branch restriction rule.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} id The restriction rule's id
     * @param {module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    repositoriesUsernameRepoSlugBranchRestrictionsIdDelete(username, repoSlug, id, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdDelete");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdDelete");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'id': id
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
      let returnType = null;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/branch-restrictions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugBranchRestrictionsIdGet operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a specific branch restriction rule.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} id The restriction rule's id
     * @param {module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */
    repositoriesUsernameRepoSlugBranchRestrictionsIdGet(username, repoSlug, id, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdGet");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'id': id
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
      let returnType = Branchrestriction;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/branch-restrictions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugBranchRestrictionsIdPut operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates an existing branch restriction rule.  Fields not present in the request body are ignored.  See [`POST`](../../branch-restrictions#post) for details.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {String} id The restriction rule's id
     * @param {module:model/Branchrestriction} body The new version of the existing rule
     * @param {module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */
    repositoriesUsernameRepoSlugBranchRestrictionsIdPut(username, repoSlug, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdPut");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling repositoriesUsernameRepoSlugBranchRestrictionsIdPut");
      }

      let pathParams = {
        'username': username,
        'repo_slug': repoSlug,
        'id': id
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
      let returnType = Branchrestriction;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/branch-restrictions/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugBranchRestrictionsPost operation.
     * @callback module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Branchrestriction} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new branch restriction rule for a repository.  `kind` describes what will be restricted. Allowed values are: `push`, `force`, `delete`, and `restrict_merges`.  Different kinds of branch restrictions have different requirements:  * `push` and `restrict_merges` require `users` and `groups` to be   specified. Empty lists are allowed, in which case permission is   denied for everybody. * `force` can not be specified in a Mercurial repository.  `pattern` is used to determine which branches will be restricted.  A `'*'` in `pattern` will expand to match zero or more characters, and every other character matches itself. For example, `'foo*'` will match `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all branches.  `users` and `groups` are lists of user names and group names.  `kind` and `pattern` must be unique within a repository; adding new users or groups to an existing restriction should be done via `PUT`.  Note that branch restrictions with overlapping patterns are allowed, but the resulting behavior may be surprising.
     * @param {String} username 
     * @param {String} repoSlug 
     * @param {module:model/Branchrestriction} body The new rule
     * @param {module:api/BranchrestrictionsApi~repositoriesUsernameRepoSlugBranchRestrictionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Branchrestriction}
     */
    repositoriesUsernameRepoSlugBranchRestrictionsPost(username, repoSlug, body, callback) {
      let postBody = body;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugBranchRestrictionsPost");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugBranchRestrictionsPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling repositoriesUsernameRepoSlugBranchRestrictionsPost");
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
      let returnType = Branchrestriction;
      return this.apiClient.callApi(
        '/repositories/{username}/{repo_slug}/branch-restrictions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
