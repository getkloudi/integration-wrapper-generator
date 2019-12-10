"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Internal service.
* @module api/InternalApi
* @version 1.0.0
*/
var InternalApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new InternalApi. 
  * @alias module:api/InternalApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function InternalApi(apiClient) {
    _classCallCheck(this, InternalApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3InternalBroadcastMessage operation.
   * @callback module:api/InternalApi~getV3InternalBroadcastMessageCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/InternalApi~getV3InternalBroadcastMessageCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(InternalApi, [{
    key: "getV3InternalBroadcastMessage",
    value: function getV3InternalBroadcastMessage(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/broadcast_message', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3InternalCheck operation.
     * @callback module:api/InternalApi~getV3InternalCheckCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~getV3InternalCheckCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3InternalCheck",
    value: function getV3InternalCheck(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/check', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3InternalDiscover operation.
     * @callback module:api/InternalApi~getV3InternalDiscoverCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~getV3InternalDiscoverCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3InternalDiscover",
    value: function getV3InternalDiscover(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/discover', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3InternalMergeRequestUrls operation.
     * @callback module:api/InternalApi~getV3InternalMergeRequestUrlsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~getV3InternalMergeRequestUrlsCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "getV3InternalMergeRequestUrls",
    value: function getV3InternalMergeRequestUrls(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/merge_request_urls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3InternalAllowed operation.
     * @callback module:api/InternalApi~postV3InternalAllowedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~postV3InternalAllowedCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postV3InternalAllowed",
    value: function postV3InternalAllowed(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/allowed', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3InternalLfsAuthenticate operation.
     * @callback module:api/InternalApi~postV3InternalLfsAuthenticateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~postV3InternalLfsAuthenticateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postV3InternalLfsAuthenticate",
    value: function postV3InternalLfsAuthenticate(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/lfs_authenticate', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the postV3InternalTwoFactorRecoveryCodes operation.
     * @callback module:api/InternalApi~postV3InternalTwoFactorRecoveryCodesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/InternalApi~postV3InternalTwoFactorRecoveryCodesCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "postV3InternalTwoFactorRecoveryCodes",
    value: function postV3InternalTwoFactorRecoveryCodes(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/internal/two_factor_recovery_codes', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return InternalApi;
}();

exports["default"] = InternalApi;