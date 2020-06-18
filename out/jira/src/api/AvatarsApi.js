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
import Avatars from '../model/Avatars';
import SystemAvatars from '../model/SystemAvatars';

/**
* Avatars service.
* @module api/AvatarsApi
* @version 1.4.0
*/
export default class AvatarsApi {

    /**
    * Constructs a new AvatarsApi. 
    * @alias module:api/AvatarsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the avatarTypeSystemGet operation.
     * @callback module:api/AvatarsApi~avatarTypeSystemGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemAvatars} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get system avatars by type
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} type The avatar type.
     * @param {module:api/AvatarsApi~avatarTypeSystemGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemAvatars}
     */
    avatarTypeSystemGet(cloudid, type, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling avatarTypeSystemGet");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling avatarTypeSystemGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'type': type
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SystemAvatars;
      return this.apiClient.callApi(
        '/avatar/{type}/system', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerEntityIdGet operation.
     * @callback module:api/AvatarsApi~universalAvatarTypeTypeOwnerEntityIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Avatars} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get avatars
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} type The avatar type.
     * @param {String} entityId The ID of the item the avatar is associated with.
     * @param {module:api/AvatarsApi~universalAvatarTypeTypeOwnerEntityIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Avatars}
     */
    universalAvatarTypeTypeOwnerEntityIdGet(cloudid, type, entityId, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      }

      let pathParams = {
        'cloudid': cloudid,
        'type': type,
        'entityId': entityId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Avatars;
      return this.apiClient.callApi(
        '/universal_avatar/type/{type}/owner/{entityId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerEntityIdPost operation.
     * @callback module:api/AvatarsApi~universalAvatarTypeTypeOwnerEntityIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Avatar} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} type The avatar type.
     * @param {String} entityId The ID of the item the avatar is associated with.
     * @param {Number} size The length of each side of the crop region.
     * @param {Object} body 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.x The X coordinate of the top-left corner of the crop region. (default to 0)
     * @param {Number} opts.y The Y coordinate of the top-left corner of the crop region. (default to 0)
     * @param {module:api/AvatarsApi~universalAvatarTypeTypeOwnerEntityIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Avatar}
     */
    universalAvatarTypeTypeOwnerEntityIdPost(cloudid, type, entityId, size, body, opts, callback) {
      opts = opts || {};
      let postBody = body;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }
      // verify the required parameter 'entityId' is set
      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }
      // verify the required parameter 'size' is set
      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }

      let pathParams = {
        'cloudid': cloudid,
        'type': type,
        'entityId': entityId
      };
      let queryParams = {
        'x': opts['x'],
        'y': opts['y'],
        'size': size
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Avatar;
      return this.apiClient.callApi(
        '/universal_avatar/type/{type}/owner/{entityId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete operation.
     * @callback module:api/AvatarsApi~universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete avatar
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/String} type The avatar type.
     * @param {String} owningObjectId The ID of the item the avatar is associated with.
     * @param {Number} id The ID of the avatar.
     * @param {module:api/AvatarsApi~universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(cloudid, type, owningObjectId, id, callback) {
      let postBody = null;
      // verify the required parameter 'cloudid' is set
      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      }
      // verify the required parameter 'owningObjectId' is set
      if (owningObjectId === undefined || owningObjectId === null) {
        throw new Error("Missing the required parameter 'owningObjectId' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      }

      let pathParams = {
        'cloudid': cloudid,
        'type': type,
        'owningObjectId': owningObjectId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}