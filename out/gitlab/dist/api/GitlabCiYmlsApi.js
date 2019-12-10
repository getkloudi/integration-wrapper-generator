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
* GitlabCiYmls service.
* @module api/GitlabCiYmlsApi
* @version 1.0.0
*/
var GitlabCiYmlsApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new GitlabCiYmlsApi. 
  * @alias module:api/GitlabCiYmlsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GitlabCiYmlsApi(apiClient) {
    _classCallCheck(this, GitlabCiYmlsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3GitlabCiYmls operation.
   * @callback module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TemplatesList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of the available template
   * This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.
   * @param {module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TemplatesList}
   */


  _createClass(GitlabCiYmlsApi, [{
    key: "getV3GitlabCiYmls",
    value: function getV3GitlabCiYmls(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/gitlab_ci_ymls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3GitlabCiYmlsName operation.
     * @callback module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.9. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} name The name of the template
     * @param {module:api/GitlabCiYmlsApi~getV3GitlabCiYmlsNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3GitlabCiYmlsName",
    value: function getV3GitlabCiYmlsName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3GitlabCiYmlsName");
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
      return this.apiClient.callApi('/v3/gitlab_ci_ymls/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GitlabCiYmlsApi;
}();

exports["default"] = GitlabCiYmlsApi;