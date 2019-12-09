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

/**
* Source service.
* @module api/SourceApi
* @version 1.0.0
*/
export default class SourceApi {

    /**
    * Constructs a new SourceApi. 
    * @alias module:api/SourceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the repositoriesUsernameRepoSlugSrcNodePathGet operation.
     * @callback module:api/SourceApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {String} node 
     * @param {String} path 
     * @param {String} repoSlug 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.format Instead of returning the file's contents, return the (json) meta data for it.
     * @param {module:api/SourceApi~repositoriesUsernameRepoSlugSrcNodePathGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    repositoriesUsernameRepoSlugSrcNodePathGet(username, node, path, repoSlug, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }
      // verify the required parameter 'node' is set
      if (node === undefined || node === null) {
        throw new Error("Missing the required parameter 'node' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }
      // verify the required parameter 'path' is set
      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }
      // verify the required parameter 'repoSlug' is set
      if (repoSlug === undefined || repoSlug === null) {
        throw new Error("Missing the required parameter 'repoSlug' when calling repositoriesUsernameRepoSlugSrcNodePathGet");
      }

      let pathParams = {
        'username': username,
        'node': node,
        'path': path,
        'repo_slug': repoSlug
      };
      let queryParams = {
        'format': opts['format']
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
        '/repositories/{username}/{repo_slug}/src/{node}/{path}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
