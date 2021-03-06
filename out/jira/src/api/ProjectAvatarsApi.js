/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Avatar from '../model/Avatar';
import ProjectAvatars from '../model/ProjectAvatars';

/**
* ProjectAvatars service.
* @module api/ProjectAvatarsApi
* @version 1.4.0
*/
export default class ProjectAvatarsApi {

    /**
    * Constructs a new ProjectAvatarsApi. 
    * @alias module:api/ProjectAvatarsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatar2Post operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatar2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Avatar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load project avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region. (default to 0)
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region. (default to 0)
     * @param {Number} opts.size The length of each side of the crop region.
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatar2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Avatar}
     */
    projectProjectIdOrKeyAvatar2Post(cloudid, projectIdOrKey, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatar2Post");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatar2Post");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyAvatar2Post");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
        'x': opts['x'],
        'y': opts['y'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Avatar;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/avatar2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarIdDelete operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or (case-sensitive) key.
     * @param {Number} id The ID of the avatar.
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    projectProjectIdOrKeyAvatarIdDelete(cloudid, projectIdOrKey, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarIdDelete");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyAvatarIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/avatar/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarPut operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set project avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:model/Avatar} body 
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    projectProjectIdOrKeyAvatarPut(cloudid, projectIdOrKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarPut");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling projectProjectIdOrKeyAvatarPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/avatar', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyAvatarsGet operation.
     * @callback module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectAvatars} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all project avatars
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The ID or (case-sensitive) key of the project.
     * @param {module:api/ProjectAvatarsApi~projectProjectIdOrKeyAvatarsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectAvatars}
     */
    projectProjectIdOrKeyAvatarsGet(cloudid, projectIdOrKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyAvatarsGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyAvatarsGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProjectAvatars;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/avatars', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
