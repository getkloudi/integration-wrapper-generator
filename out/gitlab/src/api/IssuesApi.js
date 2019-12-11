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
import Issue from '../model/Issue';

/**
* Issues service.
* @module api/IssuesApi
* @version 1.1.0
*/
export default class IssuesApi {

    /**
    * Constructs a new IssuesApi. 
    * @alias module:api/IssuesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV3Issues operation.
     * @callback module:api/IssuesApi~getV3IssuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Issue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get currently authenticated user's issues
     * Get currently authenticated user's issues
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.state Return opened, closed, or all issues (default to 'all')
     * @param {String} opts.labels Comma-separated list of label names
     * @param {String} opts.milestone Return issues for a specific milestone
     * @param {module:model/String} opts.orderBy Return issues ordered by `created_at` or `updated_at` fields. (default to 'created_at')
     * @param {module:model/String} opts.sort Return issues sorted in `asc` or `desc` order. (default to 'desc')
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/IssuesApi~getV3IssuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Issue}
     */
    getV3Issues(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'state': opts['state'],
        'labels': opts['labels'],
        'milestone': opts['milestone'],
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
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
      let returnType = Issue;
      return this.apiClient.callApi(
        '/v3/issues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
