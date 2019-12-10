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
import Todo from '../model/Todo';

/**
* Todos service.
* @module api/TodosApi
* @version 1.0.0
*/
export default class TodosApi {

    /**
    * Constructs a new TodosApi. 
    * @alias module:api/TodosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteV3Todos operation.
     * @callback module:api/TodosApi~deleteV3TodosCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark all todos as done
     * Mark all todos as done
     * @param {module:api/TodosApi~deleteV3TodosCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteV3Todos(callback) {
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/v3/todos', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteV3TodosId operation.
     * @callback module:api/TodosApi~deleteV3TodosIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Mark a todo as done
     * Mark a todo as done
     * @param {Number} id The ID of the todo being marked as done
     * @param {module:api/TodosApi~deleteV3TodosIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */
    deleteV3TodosId(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteV3TodosId");
      }

      let pathParams = {
        'id': id
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
      let returnType = Todo;
      return this.apiClient.callApi(
        '/v3/todos/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getV3Todos operation.
     * @callback module:api/TodosApi~getV3TodosCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a todo list
     * Get a todo list
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Current page number
     * @param {Number} opts.perPage Number of items per page
     * @param {module:api/TodosApi~getV3TodosCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todo}
     */
    getV3Todos(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
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
      let returnType = Todo;
      return this.apiClient.callApi(
        '/v3/todos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
