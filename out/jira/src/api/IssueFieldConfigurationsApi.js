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
import FieldConfigurationSchemeProjectAssociation from '../model/FieldConfigurationSchemeProjectAssociation';
import PageBeanFieldConfiguration from '../model/PageBeanFieldConfiguration';
import PageBeanFieldConfigurationIssueTypeItem from '../model/PageBeanFieldConfigurationIssueTypeItem';
import PageBeanFieldConfigurationItem from '../model/PageBeanFieldConfigurationItem';
import PageBeanFieldConfigurationScheme from '../model/PageBeanFieldConfigurationScheme';
import PageBeanFieldConfigurationSchemeProjects from '../model/PageBeanFieldConfigurationSchemeProjects';

/**
* IssueFieldConfigurations service.
* @module api/IssueFieldConfigurationsApi
* @version 1.4.0
*/
export default class IssueFieldConfigurationsApi {

    /**
    * Constructs a new IssueFieldConfigurationsApi. 
    * @alias module:api/IssueFieldConfigurationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the fieldconfigurationGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfiguration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all field configurations
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.id The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
     * @param {Boolean} opts.isDefault If *true* returns the default field configuration only. (default to false)
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfiguration}
     */
    fieldconfigurationGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        'isDefault': opts['isDefault']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFieldConfiguration;
      return this.apiClient.callApi(
        '/fieldconfiguration', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fieldconfigurationIdFieldsGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationIdFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration items
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the field configuration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationIdFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationItem}
     */
    fieldconfigurationIdFieldsGet(cloudid, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationIdFieldsGet");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fieldconfigurationIdFieldsGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFieldConfigurationItem;
      return this.apiClient.callApi(
        '/fieldconfiguration/{id}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fieldconfigurationschemeGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all field configuration schemes
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.id The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationScheme}
     */
    fieldconfigurationschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFieldConfigurationScheme;
      return this.apiClient.callApi(
        '/fieldconfigurationscheme', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fieldconfigurationschemeMappingGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationIssueTypeItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration issue type items
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.fieldConfigurationSchemeId The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationIssueTypeItem}
     */
    fieldconfigurationschemeMappingGet(cloudid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeMappingGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'fieldConfigurationSchemeId': this.apiClient.buildCollectionParam(opts['fieldConfigurationSchemeId'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFieldConfigurationIssueTypeItem;
      return this.apiClient.callApi(
        '/fieldconfigurationscheme/mapping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fieldconfigurationschemeProjectGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationSchemeProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration schemes for projects
     * @param {Object} cloudid Cloudi of the project
     * @param {Array.<Number>} projectId The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationSchemeProjects}
     */
    fieldconfigurationschemeProjectGet(cloudid, projectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeProjectGet");
      }
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling fieldconfigurationschemeProjectGet");
      }

      let pathParams = {
        'cloudid': cloudid
      };
      let queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': this.apiClient.buildCollectionParam(projectId, 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['OAuth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageBeanFieldConfigurationSchemeProjects;
      return this.apiClient.callApi(
        '/fieldconfigurationscheme/project', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the fieldconfigurationschemeProjectPut operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign field configuration scheme to project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/FieldConfigurationSchemeProjectAssociation} body 
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    fieldconfigurationschemeProjectPut(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeProjectPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fieldconfigurationschemeProjectPut");
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
      let returnType = Object;
      return this.apiClient.callApi(
        '/fieldconfigurationscheme/project', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
