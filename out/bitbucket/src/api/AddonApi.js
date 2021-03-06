/**
 * Bitbucket API
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

/**
* Addon service.
* @module api/AddonApi
* @version 1.2.0
*/
export default class AddonApi {

    /**
    * Constructs a new AddonApi. 
    * @alias module:api/AddonApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addonDelete operation.
     * @callback module:api/AddonApi~addonDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the application for the user.  This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the \"Develop Apps\" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can be sent out via the UI of that section.  ``` $ curl -X DELETE https://api.bitbucket.org/2.0/addon \\   -H \"Authorization: JWT <JWT Token>\" ```
     * @param {module:api/AddonApi~addonDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addonDelete(callback) {
      let postBody = null;

      let pathParams = {
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
        '/addon', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersGet operation.
     * @callback module:api/AddonApi~addonLinkersGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/AddonApi~addonLinkersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyGet operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyGet(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyGet");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesDelete operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesDelete(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesDelete");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesDelete_0 operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesDelete_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesDelete_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesDelete_0(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesDelete_0");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesGet operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesGet(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesGet");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesGet_0 operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesGet_0Callback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesGet_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesGet_0(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesGet_0");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesPost operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesPost(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesPost");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonLinkersLinkerKeyValuesPut operation.
     * @callback module:api/AddonApi~addonLinkersLinkerKeyValuesPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Error} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkerKey 
     * @param {module:api/AddonApi~addonLinkersLinkerKeyValuesPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Error}
     */
    addonLinkersLinkerKeyValuesPut(linkerKey, callback) {
      let postBody = null;
      // verify the required parameter 'linkerKey' is set
      if (linkerKey === undefined || linkerKey === null) {
        throw new Error("Missing the required parameter 'linkerKey' when calling addonLinkersLinkerKeyValuesPut");
      }

      let pathParams = {
        'linker_key': linkerKey
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
      let returnType = Error;
      return this.apiClient.callApi(
        '/addon/linkers/{linker_key}/values', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonPut operation.
     * @callback module:api/AddonApi~addonPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the application installation for the user.  This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the \"Develop Apps\" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can be sent out via the UI of that section.  A new, valid descriptor must be provided in the body of the PUT request.  ``` $ curl -X PUT https://api.bitbucket.org/2.0/addon \\   -H \"Authorization: JWT <JWT Token>\" \\   --header \"Content-Type: application/json\" \\   --data '{\"descriptor\": $NEW_DESCRIPTOR}' ```  Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.
     * @param {module:api/AddonApi~addonPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addonPut(callback) {
      let postBody = null;

      let pathParams = {
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
        '/addon', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the addonUsersTargetUserEventsEventKeyPost operation.
     * @callback module:api/AddonApi~addonUsersTargetUserEventsEventKeyPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * POST a new custom event.  The data within the event body will be hydrated by Bitbucket. For example, the following event submission would result in subscribers for the event receiving the full repository object corresponding to the UUID.  ``` $ curl -X POST -H \"Content-Type: application/json\" -d '{     \"mynumdata\": \"12345\",     \"repository\": {         \"type\": \"repository\",         \"uuid\": \"{be95aa1f-c0b2-47f6-99d1-bf5d3a0f850f}\" }}' https://api.bitbucket.org/2.0/addon/users/myuser/events/com.example.app%3Amyevent ```  Use the optional `fields` property of the custom event Connect module where the event is defined to add additional fields to the expanded payload sent to listeners.  For example, the `customEvents` module in the app descriptor for the previous example would look like this:  ``` 'modules': {     'customEvents': {         'com.example.app:myevent': {             'schema': {                 'properties': {                     'mynumdata': {'type': 'number'},                     'repository': {'$ref': '#/definitions/repository'}                 }             },             'fields': ['repository.owner']         }     } } ```  By specifying fields as above, the repository owner will also be sent to subscribers of the event.
     * @param {String} targetUser The account the app is installed in.  This can either be the username or the UUID of the account, surrounded by curly-braces, for example: `{account UUID}`. An account is either a team or user. 
     * @param {String} eventKey The key of the event, which corresponds to an event defined in the connect app descriptor. 
     * @param {module:api/AddonApi~addonUsersTargetUserEventsEventKeyPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addonUsersTargetUserEventsEventKeyPost(targetUser, eventKey, callback) {
      let postBody = null;
      // verify the required parameter 'targetUser' is set
      if (targetUser === undefined || targetUser === null) {
        throw new Error("Missing the required parameter 'targetUser' when calling addonUsersTargetUserEventsEventKeyPost");
      }
      // verify the required parameter 'eventKey' is set
      if (eventKey === undefined || eventKey === null) {
        throw new Error("Missing the required parameter 'eventKey' when calling addonUsersTargetUserEventsEventKeyPost");
      }

      let pathParams = {
        'target_user': targetUser,
        'event_key': eventKey
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key', 'basic', 'oauth2'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/addon/users/{target_user}/events/{event_key}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
