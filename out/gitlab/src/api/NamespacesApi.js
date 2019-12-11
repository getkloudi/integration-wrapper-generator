/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Namespace from '../model/Namespace';

/**
* Namespaces service.
* @module api/NamespacesApi
* @version 1.1.0
*/
export default class NamespacesApi {

    /**
    * Constructs a new NamespacesApi. 
    * @alias module:api/NamespacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV3Namespaces operation.
     * @callback module:api/NamespacesApi~getV3NamespacesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Namespace} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a namespaces list
     * Get a namespaces list
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search query for namespaces
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/NamespacesApi~getV3NamespacesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Namespace}
     */
    getV3Namespaces(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'search': opts['search'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Namespace;
      return this.apiClient.callApi(
        '/v3/namespaces', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
