"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RepoLicense = _interopRequireDefault(require("../model/RepoLicense"));

var _Template = _interopRequireDefault(require("../model/Template"));

var _TemplatesList = _interopRequireDefault(require("../model/TemplatesList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Templates service.
* @module api/TemplatesApi
* @version 1.0.0
*/
var TemplatesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new TemplatesApi. 
  * @alias module:api/TemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TemplatesApi(apiClient) {
    _classCallCheck(this, TemplatesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3TemplatesDockerfiles operation.
   * @callback module:api/TemplatesApi~getV3TemplatesDockerfilesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/TemplatesList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get the list of the available template
   * This feature was introduced in GitLab 8.15.
   * @param {module:api/TemplatesApi~getV3TemplatesDockerfilesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/TemplatesList}
   */


  _createClass(TemplatesApi, [{
    key: "getV3TemplatesDockerfiles",
    value: function getV3TemplatesDockerfiles(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/templates/dockerfiles', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesDockerfilesName operation.
     * @callback module:api/TemplatesApi~getV3TemplatesDockerfilesNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.15.
     * @param {String} name The name of the template
     * @param {module:api/TemplatesApi~getV3TemplatesDockerfilesNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3TemplatesDockerfilesName",
    value: function getV3TemplatesDockerfilesName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3TemplatesDockerfilesName");
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
      return this.apiClient.callApi('/v3/templates/dockerfiles/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesGitignores operation.
     * @callback module:api/TemplatesApi~getV3TemplatesGitignoresCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplatesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of the available template
     * This feature was introduced in GitLab 8.8.
     * @param {module:api/TemplatesApi~getV3TemplatesGitignoresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplatesList}
     */

  }, {
    key: "getV3TemplatesGitignores",
    value: function getV3TemplatesGitignores(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/templates/gitignores', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesGitignoresName operation.
     * @callback module:api/TemplatesApi~getV3TemplatesGitignoresNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.8.
     * @param {String} name The name of the template
     * @param {module:api/TemplatesApi~getV3TemplatesGitignoresNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3TemplatesGitignoresName",
    value: function getV3TemplatesGitignoresName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3TemplatesGitignoresName");
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
      return this.apiClient.callApi('/v3/templates/gitignores/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesGitlabCiYmls operation.
     * @callback module:api/TemplatesApi~getV3TemplatesGitlabCiYmlsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplatesList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of the available template
     * This feature was introduced in GitLab 8.9.
     * @param {module:api/TemplatesApi~getV3TemplatesGitlabCiYmlsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplatesList}
     */

  }, {
    key: "getV3TemplatesGitlabCiYmls",
    value: function getV3TemplatesGitlabCiYmls(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _TemplatesList["default"];
      return this.apiClient.callApi('/v3/templates/gitlab_ci_ymls', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesGitlabCiYmlsName operation.
     * @callback module:api/TemplatesApi~getV3TemplatesGitlabCiYmlsNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific template present in local filesystem
     * This feature was introduced in GitLab 8.9.
     * @param {String} name The name of the template
     * @param {module:api/TemplatesApi~getV3TemplatesGitlabCiYmlsNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */

  }, {
    key: "getV3TemplatesGitlabCiYmlsName",
    value: function getV3TemplatesGitlabCiYmlsName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3TemplatesGitlabCiYmlsName");
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
      return this.apiClient.callApi('/v3/templates/gitlab_ci_ymls/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesLicenses operation.
     * @callback module:api/TemplatesApi~getV3TemplatesLicensesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoLicense} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the list of the available license template
     * This feature was introduced in GitLab 8.7.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.popular If passed, returns only popular licenses
     * @param {module:api/TemplatesApi~getV3TemplatesLicensesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoLicense}
     */

  }, {
    key: "getV3TemplatesLicenses",
    value: function getV3TemplatesLicenses(opts, callback) {
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
      return this.apiClient.callApi('/v3/templates/licenses', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getV3TemplatesLicensesName operation.
     * @callback module:api/TemplatesApi~getV3TemplatesLicensesNameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RepoLicense} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the text for a specific license
     * This feature was introduced in GitLab 8.7.
     * @param {String} name The name of the template
     * @param {module:api/TemplatesApi~getV3TemplatesLicensesNameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RepoLicense}
     */

  }, {
    key: "getV3TemplatesLicensesName",
    value: function getV3TemplatesLicensesName(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getV3TemplatesLicensesName");
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
      return this.apiClient.callApi('/v3/templates/licenses/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TemplatesApi;
}();

exports["default"] = TemplatesApi;