"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RepoLicense = _interopRequireDefault(require("../model/RepoLicense"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Licenses service.
* @module api/LicensesApi
* @version 1.0.0
*/
var LicensesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new LicensesApi. 
  * @alias module:api/LicensesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function LicensesApi(apiClient) {
    _classCallCheck(this, LicensesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3Licenses operation.
   * @callback module:api/LicensesApi~getV3LicensesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/RepoLicense} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of the available license template
   * This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.popular If passed, returns only popular licenses
   * @param {module:api/LicensesApi~getV3LicensesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/RepoLicense}
   */


  _createClass(LicensesApi, [{
    key: "getV3Licenses",
    value: function getV3Licenses(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'popular': opts['popular']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RepoLicense["default"];
      return this.apiClient.callApi('/v3/licenses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3LicensesName operation.
     * @callback module:api/LicensesApi~getV3LicensesNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoLicense} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific license
     * This feature was introduced in GitLab 8.7. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} name The name of the template
     * @param {module:api/LicensesApi~getV3LicensesNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoLicense}
     */

  }, {
    key: "getV3LicensesName",
    value: function getV3LicensesName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3LicensesName");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _RepoLicense["default"];
      return this.apiClient.callApi('/v3/licenses/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return LicensesApi;
}();

exports["default"] = LicensesApi;