"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Ci service.
* @module api/CiApi
* @version 1.0.0
*/
var CiApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new CiApi. 
  * @alias module:api/CiApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CiApi(apiClient) {
    _classCallCheck(this, CiApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the postV3CiLint operation.
   * @callback module:api/CiApi~postV3CiLintCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Validation of .gitlab-ci.yml content
   * Validation of .gitlab-ci.yml content
   * @param {module:model/UNKNOWN_BASE_TYPE} UNKNOWN_BASE_TYPE 
   * @param {module:api/CiApi~postV3CiLintCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(CiApi, [{
    key: "postV3CiLint",
    value: function postV3CiLint(UNKNOWN_BASE_TYPE, callback) {
      var postBody = UNKNOWN_BASE_TYPE; // verify the required parameter 'UNKNOWN_BASE_TYPE' is set

      if (UNKNOWN_BASE_TYPE === undefined || UNKNOWN_BASE_TYPE === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_BASE_TYPE' when calling postV3CiLint");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/v3/ci/lint', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CiApi;
}();

exports["default"] = CiApi;