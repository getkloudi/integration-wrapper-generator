"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Template = _interopRequireDefault(require("../model/Template"));

var _TemplatesList = _interopRequireDefault(require("../model/TemplatesList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Gitignores service.
* @module api/GitignoresApi
* @version 1.1.0
*/
var GitignoresApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new GitignoresApi. 
  * @alias module:api/GitignoresApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GitignoresApi(apiClient) {
    _classCallCheck(this, GitignoresApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3Gitignores operation.
   * @callback module:api/GitignoresApi~getV3GitignoresCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TemplatesList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of the available template
   * This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.
   * @param {module:api/GitignoresApi~getV3GitignoresCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TemplatesList}
   */


  _createClass(GitignoresApi, [{
    key: "getV3Gitignores",
    value: function getV3Gitignores(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/gitignores', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GitignoresName operation.
     * @callback module:api/GitignoresApi~getV3GitignoresNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.8. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} name The name of the template
     * @param {module:api/GitignoresApi~getV3GitignoresNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3GitignoresName",
    value: function getV3GitignoresName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3GitignoresName");
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
      var returnType = _Template["default"];
      return this.apiClient.callApi('/v3/gitignores/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GitignoresApi;
}();

exports["default"] = GitignoresApi;