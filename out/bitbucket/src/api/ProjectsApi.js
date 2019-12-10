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
import PaginatedProjects from '../model/PaginatedProjects';
import Project from '../model/Project';

/**
* Projects service.
* @module api/ProjectsApi
* @version 1.0.0
*/
export default class ProjectsApi {

    /**
    * Constructs a new ProjectsApi. 
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the teamsOwnerProjectsGet operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaginatedProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaginatedProjects}
     */
    teamsOwnerProjectsGet(owner, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsOwnerProjectsGet");
      }

      let pathParams = {
        'owner': owner
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
      let returnType = PaginatedProjects;
      return this.apiClient.callApi(
        '/teams/{owner}/projects/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsOwnerProjectsPost operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new project.  Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```  or even:  ``` $ body=$(cat << EOF {     \"name\": \"Mars Project\",     \"key\": \"MARS\",     \"description\": \"Software for colonizing mars.\",     \"links\": {         \"avatar\": {             \"href\": \"http://i.imgur.com/72tRx4w.gif\"         }     },     \"is_private\": false } EOF ) $ curl -H \"Content-Type: application/json\" \\        -X POST \\        -d \"$body\" \\        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq . {   // Serialized project document } ```
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    teamsOwnerProjectsPost(owner, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsOwnerProjectsPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamsOwnerProjectsPost");
      }

      let pathParams = {
        'owner': owner
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/teams/{owner}/projects/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyDelete operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    teamsOwnerProjectsProjectKeyDelete(owner, projectKey, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyDelete");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyDelete");
      }

      let pathParams = {
        'owner': owner,
        'project_key': projectKey
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
        '/teams/{owner}/projects/{project_key}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyGet operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    teamsOwnerProjectsProjectKeyGet(owner, projectKey, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyGet");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyGet");
      }

      let pathParams = {
        'owner': owner,
        'project_key': projectKey
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/teams/{owner}/projects/{project_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the teamsOwnerProjectsProjectKeyPut operation.
     * @callback module:api/ProjectsApi~teamsOwnerProjectsProjectKeyPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Project} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Since this endpoint can be used to both update and to create a project, the request body depends on the intent.  ### Creation  See the POST documentation for the project collection for an example of the request body.  Note: The `key` should not be specified in the body of request (since it is already present in the URL). The `name` is required, everything else is optional.  ### Update  See the POST documentation for the project collection for an example of the request body.  Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the `Location` header of the response.
     * @param {String} owner The team which owns the project. This can either be the `username` of the team or the `UUID` of the team (surrounded by curly-braces (`{}`)). 
     * @param {String} projectKey The project in question. This can either be the actual `key` assigned to the project or the `UUID` (surrounded by curly-braces (`{}`)). 
     * @param {module:model/Project} body 
     * @param {module:api/ProjectsApi~teamsOwnerProjectsProjectKeyPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Project}
     */
    teamsOwnerProjectsProjectKeyPut(owner, projectKey, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling teamsOwnerProjectsProjectKeyPut");
      }
      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling teamsOwnerProjectsProjectKeyPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling teamsOwnerProjectsProjectKeyPut");
      }

      let pathParams = {
        'owner': owner,
        'project_key': projectKey
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
      let returnType = Project;
      return this.apiClient.callApi(
        '/teams/{owner}/projects/{project_key}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}