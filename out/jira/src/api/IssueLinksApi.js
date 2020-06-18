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
import IssueLink from '../model/IssueLink';
import LinkIssueRequestJsonBean from '../model/LinkIssueRequestJsonBean';

/**
* IssueLinks service.
* @module api/IssueLinksApi
* @version 1.4.0
*/
export default class IssueLinksApi {

    /**
    * Constructs a new IssueLinksApi. 
    * @alias module:api/IssueLinksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the issueLinkLinkIdDelete operation.
     * @callback module:api/IssueLinksApi~issueLinkLinkIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/IssueLinksApi~issueLinkLinkIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    issueLinkLinkIdDelete(cloudid, linkId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdDelete");
      }
      // verify the required parameter 'linkId' is set
      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'linkId': linkId
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
        '/issueLink/{linkId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issueLinkLinkIdGet operation.
     * @callback module:api/IssueLinksApi~issueLinkLinkIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IssueLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {String} linkId The ID of the issue link.
     * @param {module:api/IssueLinksApi~issueLinkLinkIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IssueLink}
     */
    issueLinkLinkIdGet(cloudid, linkId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkLinkIdGet");
      }
      // verify the required parameter 'linkId' is set
      if (linkId === undefined || linkId === null) {
        throw new Error("Missing the required parameter 'linkId' when calling issueLinkLinkIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'linkId': linkId
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
      let returnType = IssueLink;
      return this.apiClient.callApi(
        '/issueLink/{linkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the issueLinkPost operation.
     * @callback module:api/IssueLinksApi~issueLinkPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create issue link
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/LinkIssueRequestJsonBean} body The issue link request.
     * @param {module:api/IssueLinksApi~issueLinkPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    issueLinkPost(cloudid, body, callback) {
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issueLinkPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issueLinkPost");
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
        '/issueLink', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}