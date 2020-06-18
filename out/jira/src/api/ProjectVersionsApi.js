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
import DeleteAndReplaceVersionBean from '../model/DeleteAndReplaceVersionBean';
import PageBeanVersion from '../model/PageBeanVersion';
import Version from '../model/Version';
import VersionIssueCounts from '../model/VersionIssueCounts';
import VersionMoveBean from '../model/VersionMoveBean';
import VersionUnresolvedIssuesCount from '../model/VersionUnresolvedIssuesCount';

/**
* ProjectVersions service.
* @module api/ProjectVersionsApi
* @version 1.4.0
*/
export default class ProjectVersionsApi {

    /**
    * Constructs a new ProjectVersionsApi. 
    * @alias module:api/ProjectVersionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the projectProjectIdOrKeyVersionGet operation.
     * @callback module:api/ProjectVersionsApi~projectProjectIdOrKeyVersionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project versions paginated
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field:   *  `description` Sorts by version description.  *  `name` Sorts by version name.  *  `releaseDate` Sorts by release date, starting with the oldest date. Versions with no release date are listed last.  *  `sequence` Sorts by the order of appearance in the user interface.  *  `startDate` Sorts by start date, starting with the oldest date. Versions with no start date are listed last.
     * @param {String} opts.query Filter the results using a literal string. Versions with matching `name` or `description` are returned (case insensitive).
     * @param {String} opts.status A list of status values used to filter the results by version status. This parameter accepts a comma-separated list. The status values are `released`, `unreleased`, and `archived`.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `issuesstatus` Returns the number of issues in each status category for each version.  *  `operations` Returns actions that can be performed on the specified version.
     * @param {module:api/ProjectVersionsApi~projectProjectIdOrKeyVersionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanVersion}
     */
    projectProjectIdOrKeyVersionGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyVersionGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyVersionGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'orderBy': opts['orderBy'],
        'query': opts['query'],
        'status': opts['status'],
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanVersion;
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectProjectIdOrKeyVersionsGet operation.
     * @callback module:api/ProjectVersionsApi~projectProjectIdOrKeyVersionsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Version>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get project versions
     * @param {Object} cloudid Cloudi of the project
     * @param {String} projectIdOrKey The project ID or project key (case sensitive).
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `operations`, which returns actions that can be performed on the version.
     * @param {module:api/ProjectVersionsApi~projectProjectIdOrKeyVersionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Version>}
     */
    projectProjectIdOrKeyVersionsGet(cloudid, projectIdOrKey, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling projectProjectIdOrKeyVersionsGet");
      }
      // verify the required parameter 'projectIdOrKey' is set
      if (projectIdOrKey === undefined || projectIdOrKey === null) {
        throw new Error("Missing the required parameter 'projectIdOrKey' when calling projectProjectIdOrKeyVersionsGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'projectIdOrKey': projectIdOrKey
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Version];
      return this.apiClient.callApi(
        '/project/{projectIdOrKey}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdDelete operation.
     * @callback module:api/ProjectVersionsApi~versionIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete version
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {String} opts.moveFixIssuesTo The ID of the version to update `fixVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {String} opts.moveAffectedIssuesTo The ID of the version to update `affectedVersion` to when the field contains the deleted version. The replacement version must be in the same project as the version being deleted and cannot be the version being deleted.
     * @param {module:api/ProjectVersionsApi~versionIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    versionIdDelete(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'moveFixIssuesTo': opts['moveFixIssuesTo'],
        'moveAffectedIssuesTo': opts['moveAffectedIssuesTo']
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
        '/version/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdGet operation.
     * @callback module:api/ProjectVersionsApi~versionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get version
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information about version in the response. This parameter accepts a comma-separated list. Expand options include:   *  `operations` Returns the list of operations available for this version.  *  `issuesstatus` Returns the count of issues in this version for each of the status categories *to do*, *in progress*, *done*, and *unmapped*. The *unmapped* property represents the number of issues with a status other than *to do*, *in progress*, and *done*.
     * @param {module:api/ProjectVersionsApi~versionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */
    versionIdGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'expand': opts['expand']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Version;
      return this.apiClient.callApi(
        '/version/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdMergetoMoveIssuesToPut operation.
     * @callback module:api/ProjectVersionsApi~versionIdMergetoMoveIssuesToPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Merge versions
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version to delete.
     * @param {String} moveIssuesTo The ID of the version to merge into.
     * @param {module:api/ProjectVersionsApi~versionIdMergetoMoveIssuesToPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    versionIdMergetoMoveIssuesToPut(cloudid, id, moveIssuesTo, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdMergetoMoveIssuesToPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdMergetoMoveIssuesToPut");
      }
      // verify the required parameter 'moveIssuesTo' is set
      if (moveIssuesTo === undefined || moveIssuesTo === null) {
        throw new Error("Missing the required parameter 'moveIssuesTo' when calling versionIdMergetoMoveIssuesToPut");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id,
        'moveIssuesTo': moveIssuesTo
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/version/{id}/mergeto/{moveIssuesTo}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdMovePost operation.
     * @callback module:api/ProjectVersionsApi~versionIdMovePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move version
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version to be moved.
     * @param {module:model/VersionMoveBean} body 
     * @param {module:api/ProjectVersionsApi~versionIdMovePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */
    versionIdMovePost(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdMovePost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdMovePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling versionIdMovePost");
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
      let returnType = Version;
      return this.apiClient.callApi(
        '/version/{id}/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdPut operation.
     * @callback module:api/ProjectVersionsApi~versionIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update version
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:model/Version} body 
     * @param {module:api/ProjectVersionsApi~versionIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */
    versionIdPut(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdPut");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling versionIdPut");
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
      let returnType = Version;
      return this.apiClient.callApi(
        '/version/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdRelatedIssueCountsGet operation.
     * @callback module:api/ProjectVersionsApi~versionIdRelatedIssueCountsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionIssueCounts} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get version's related issues count
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:api/ProjectVersionsApi~versionIdRelatedIssueCountsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionIssueCounts}
     */
    versionIdRelatedIssueCountsGet(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdRelatedIssueCountsGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdRelatedIssueCountsGet");
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
      let returnType = VersionIssueCounts;
      return this.apiClient.callApi(
        '/version/{id}/relatedIssueCounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdRemoveAndSwapPost operation.
     * @callback module:api/ProjectVersionsApi~versionIdRemoveAndSwapPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete and replace version
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:model/DeleteAndReplaceVersionBean} body 
     * @param {module:api/ProjectVersionsApi~versionIdRemoveAndSwapPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    versionIdRemoveAndSwapPost(cloudid, id, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdRemoveAndSwapPost");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdRemoveAndSwapPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling versionIdRemoveAndSwapPost");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/version/{id}/removeAndSwap', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionIdUnresolvedIssueCountGet operation.
     * @callback module:api/ProjectVersionsApi~versionIdUnresolvedIssueCountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VersionUnresolvedIssuesCount} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get version's unresolved issues count
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the version.
     * @param {module:api/ProjectVersionsApi~versionIdUnresolvedIssueCountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VersionUnresolvedIssuesCount}
     */
    versionIdUnresolvedIssueCountGet(cloudid, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionIdUnresolvedIssueCountGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling versionIdUnresolvedIssueCountGet");
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
      let returnType = VersionUnresolvedIssuesCount;
      return this.apiClient.callApi(
        '/version/{id}/unresolvedIssueCount', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the versionPost operation.
     * @callback module:api/ProjectVersionsApi~versionPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Version} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create version
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/Version} body 
     * @param {module:api/ProjectVersionsApi~versionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Version}
     */
    versionPost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling versionPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling versionPost");
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
      let returnType = Version;
      return this.apiClient.callApi(
        '/version', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}