"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SSHKeyWithUser = _interopRequireDefault(require("../model/SSHKeyWithUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Keys service.
* @module api/KeysApi
* @version 1.1.0
*/
var KeysApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new KeysApi. 
  * @alias module:api/KeysApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function KeysApi(apiClient) {
    _classCallCheck(this, KeysApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3KeysId operation.
   * @callback module:api/KeysApi~getV3KeysIdCallback
   * @param {String} error Error message, if any.
   * @param {module:model/SSHKeyWithUser} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get single ssh key by id. Only available to admin users
   * Get single ssh key by id. Only available to admin users
   * @param {Number} id 
   * @param {module:api/KeysApi~getV3KeysIdCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/SSHKeyWithUser}
   */


  _createClass(KeysApi, [{
    key: "getV3KeysId",
    value: function getV3KeysId(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getV3KeysId");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SSHKeyWithUser["default"];
      return this.apiClient.callApi('/v3/keys/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return KeysApi;
}();

exports["default"] = KeysApi;