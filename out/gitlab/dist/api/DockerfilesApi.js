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
* Dockerfiles service.
* @module api/DockerfilesApi
* @version 1.1.0
*/
var DockerfilesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DockerfilesApi. 
  * @alias module:api/DockerfilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DockerfilesApi(apiClient) {
    _classCallCheck(this, DockerfilesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3Dockerfiles operation.
   * @callback module:api/DockerfilesApi~getV3DockerfilesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TemplatesList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of the available template
   * This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.
   * @param {module:api/DockerfilesApi~getV3DockerfilesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TemplatesList}
   */


  _createClass(DockerfilesApi, [{
    key: "getV3Dockerfiles",
    value: function getV3Dockerfiles(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/dockerfiles', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3DockerfilesName operation.
     * @callback module:api/DockerfilesApi~getV3DockerfilesNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.15. This endpoint is deprecated and will be removed in GitLab 9.0.
     * @param {String} name The name of the template
     * @param {module:api/DockerfilesApi~getV3DockerfilesNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3DockerfilesName",
    value: function getV3DockerfilesName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3DockerfilesName");
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
      return this.apiClient.callApi('/v3/dockerfiles/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DockerfilesApi;
}();

exports["default"] = DockerfilesApi;