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
import CreateUpdateRoleRequestBean from '../model/CreateUpdateRoleRequestBean';
import ProjectRole from '../model/ProjectRole';

/**
* ProjectRoles service.
* @module api/ProjectRolesApi
* @version 1.4.0
*/
export default class ProjectRolesApi {

    /**
    * Constructs a new ProjectRolesApi. 
    * @alias module:api/ProjectRolesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleGet operation.
     * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoleGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: String}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project roles for project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: String}>}
     */
    projectProjectIdOrKeyRoleGet(cloudid, projectIdOrKey, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleGet");
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
      let returnType = {'String': 'String'};
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/role', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoleIdGet operation.
     * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role for project
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */
    projectProjectIdOrKeyRoleIdGet(cloudid, projectIdOrKey, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoleIdGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoleIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling projectProjectIdOrKeyRoleIdGet");
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
      let accepts = ['application/json'];
      let returnType = ProjectRole;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/role/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyRoledetailsGet operation.
     * @callback module:api/ProjectRolesApi~projectProjectIdOrKeyRoledetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role details
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.currentMember Whether the roles should be filtered to include only those the user is assigned to. (default to false)
     * @param {Boolean} opts.excludeConnectAddons  (default to false)
     * @param {module:api/ProjectRolesApi~projectProjectIdOrKeyRoledetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectRole>}
     */
    projectProjectIdOrKeyRoledetailsGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyRoledetailsGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyRoledetailsGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
        'currentMember': opts['currentMember'],
        'excludeConnectAddons': opts['excludeConnectAddons']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [ProjectRole];
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/roledetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleGet operation.
     * @callback module:api/ProjectRolesApi~roleGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProjectRole>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all project roles
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/ProjectRolesApi~roleGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ProjectRole>}
     */
    roleGet(cloudid, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleGet");
      }

      let pathParams = {
        'cloudid': cloudid
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
      let returnType = [ProjectRole];
      return this.apiClient.callApi(
        '/role', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleIdDelete operation.
     * @callback module:api/ProjectRolesApi~roleIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.swap The ID of the project role that will replace the one being deleted.
     * @param {module:api/ProjectRolesApi~roleIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    roleIdDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'swap': opts['swap']
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
        '/role/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleIdGet operation.
     * @callback module:api/ProjectRolesApi~roleIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project role by ID
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:api/ProjectRolesApi~roleIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */
    roleIdGet(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
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
      let accepts = ['application/json'];
      let returnType = ProjectRole;
      return this.apiClient.callApi(
        '/role/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleIdPost operation.
     * @callback module:api/ProjectRolesApi~roleIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Partial update project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~roleIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */
    roleIdPost(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling roleIdPost");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
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
      let returnType = ProjectRole;
      return this.apiClient.callApi(
        '/role/{id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the roleIdPut operation.
     * @callback module:api/ProjectRolesApi~roleIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fully update project role
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~roleIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */
    roleIdPut(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling roleIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling roleIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling roleIdPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
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
      let returnType = ProjectRole;
      return this.apiClient.callApi(
        '/role/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rolePost operation.
     * @callback module:api/ProjectRolesApi~rolePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProjectRole} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create project role
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/CreateUpdateRoleRequestBean} body 
     * @param {module:api/ProjectRolesApi~rolePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProjectRole}
     */
    rolePost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling rolePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling rolePost");
      }

      let pathParams = {
        'cloudid': cloudid
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
      let returnType = ProjectRole;
      return this.apiClient.callApi(
        '/role', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
