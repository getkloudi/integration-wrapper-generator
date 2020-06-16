"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Avatar = _interopRequireDefault(require("../model/Avatar"));

var _Avatars = _interopRequireDefault(require("../model/Avatars"));

var _SystemAvatars = _interopRequireDefault(require("../model/SystemAvatars"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Avatars service.
* @module api/AvatarsApi
* @version 1.4.0
*/
var AvatarsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AvatarsApi. 
  * @alias module:api/AvatarsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AvatarsApi(apiClient) {
    _classCallCheck(this, AvatarsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
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


  _createClass(AvatarsApi, [{
    key: "avatarTypeSystemGet",
    value: function avatarTypeSystemGet(cloudid, type, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling avatarTypeSystemGet");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling avatarTypeSystemGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'type': type
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemAvatars["default"];
      return this.apiClient.callApi('/avatar/{type}/system', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "universalAvatarTypeTypeOwnerEntityIdGet",
    value: function universalAvatarTypeTypeOwnerEntityIdGet(cloudid, type, entityId, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      } // verify the required parameter 'entityId' is set


      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'type': type,
        'entityId': entityId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Avatars["default"];
      return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{entityId}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "universalAvatarTypeTypeOwnerEntityIdPost",
    value: function universalAvatarTypeTypeOwnerEntityIdPost(cloudid, type, entityId, size, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      } // verify the required parameter 'entityId' is set


      if (entityId === undefined || entityId === null) {
        throw new Error("Missing the required parameter 'entityId' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      } // verify the required parameter 'size' is set


      if (size === undefined || size === null) {
        throw new Error("Missing the required parameter 'size' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling universalAvatarTypeTypeOwnerEntityIdPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'type': type,
        'entityId': entityId
      };
      var queryParams = {
        'x': opts['x'],
        'y': opts['y'],
        'size': size
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Avatar["default"];
      return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{entityId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete",
    value: function universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete(cloudid, type, owningObjectId, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      } // verify the required parameter 'type' is set


      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      } // verify the required parameter 'owningObjectId' is set


      if (owningObjectId === undefined || owningObjectId === null) {
        throw new Error("Missing the required parameter 'owningObjectId' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling universalAvatarTypeTypeOwnerOwningObjectIdAvatarIdDelete");
      }

      var pathParams = {
        'cloudid': cloudid,
        'type': type,
        'owningObjectId': owningObjectId,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/universal_avatar/type/{type}/owner/{owningObjectId}/avatar/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AvatarsApi;
}();

exports["default"] = AvatarsApi;