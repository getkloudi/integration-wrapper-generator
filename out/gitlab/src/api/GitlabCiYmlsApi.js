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
import Template from '../model/Template';
import TemplatesList from '../model/TemplatesList';

/**
* GitlabCiYmls service.
* @module api/GitlabCiYmlsApi
* @version 1.1.0
*/
export default class GitlabCiYmlsApi {

    /**
    * Constructs a new GitlabCiYmlsApi. 
    * @alias module:api/GitlabCiYmlsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getV3GitlabCiYmls operation.
     * @callback module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplatesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of the available template
     * This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplatesList}
     */
    getV3GitlabCiYmls(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TemplatesList;
      return this.apiClient.callApi(
        '/v3/gitlab_ci_ymls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getV3GitlabCiYmlsName operation.
     * @callback module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} name The name of the template
     * @param {module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */
    getV3GitlabCiYmlsName(name, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3GitlabCiYmlsName");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['private_token_header', 'private_token_query'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Template;
      return this.apiClient.callApi(
        '/v3/gitlab_ci_ymls/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
