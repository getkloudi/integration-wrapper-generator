"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

var _UserWithPrivateToken = _interopRequireDefault(require("../model/UserWithPrivateToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Session service.
* @module api/SessionApi
* @version 1.1.0
*/
var SessionApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new SessionApi. 
  * @alias module:api/SessionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SessionApi(apiClient) {
    _classCallCheck(this, SessionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the postV3Session operation.
   * @callback module:api/SessionApi~postV3SessionCallback
   * @param {String} error Error message, if any.
   * @param {module:model/UserWithPrivateToken} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Login to get token
   * Login to get token
   * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
   * @param {module:api/SessionApi~postV3SessionCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/UserWithPrivateToken}
   */


  _createClass(SessionApi, [{
    key: "postV3Session",
    value: function postV3Session(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3Session");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _UserWithPrivateToken["default"];
      return this.apiClient.callApi('/v3/session', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SessionApi;
}();

exports["default"] = SessionApi;