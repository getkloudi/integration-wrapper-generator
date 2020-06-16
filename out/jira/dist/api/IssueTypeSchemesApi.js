"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeSchemeProjectAssociation = _interopRequireDefault(require("../model/IssueTypeSchemeProjectAssociation"));

var _PageBeanIssueTypeScheme = _interopRequireDefault(require("../model/PageBeanIssueTypeScheme"));

var _PageBeanIssueTypeSchemeMapping = _interopRequireDefault(require("../model/PageBeanIssueTypeSchemeMapping"));

var _PageBeanIssueTypeSchemeProjects = _interopRequireDefault(require("../model/PageBeanIssueTypeSchemeProjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueTypeSchemes service.
* @module api/IssueTypeSchemesApi
* @version 1.4.0
*/
var IssueTypeSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueTypeSchemesApi. 
  * @alias module:api/IssueTypeSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueTypeSchemesApi(apiClient) {
    _classCallCheck(this, IssueTypeSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuetypeschemeGet operation.
   * @callback module:api/IssueTypeSchemesApi~issuetypeschemeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanIssueTypeScheme} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all issue type schemes
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {Array.<Number>} opts.id The list of issue type schemes IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param {module:api/IssueTypeSchemesApi~issuetypeschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanIssueTypeScheme}
   */


  _createClass(IssueTypeSchemesApi, [{
    key: "issuetypeschemeGet",
    value: function issuetypeschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueTypeScheme["default"];
      return this.apiClient.callApi('/issuetypescheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeschemeMappingGet operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeSchemeMapping} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type scheme items
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.issueTypeSchemeId The list of issue type scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `issueTypeSchemeId=10000&issueTypeSchemeId=10001`.
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeSchemeMapping}
     */

  }, {
    key: "issuetypeschemeMappingGet",
    value: function issuetypeschemeMappingGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeMappingGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'issueTypeSchemeId': this.apiClient.buildCollectionParam(opts['issueTypeSchemeId'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueTypeSchemeMapping["default"];
      return this.apiClient.callApi('/issuetypescheme/mapping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeschemeProjectGet operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeSchemeProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type schemes for projects
     * @param {Object} cloudid Cloudi of the project
     * @param {Array.<Number>} projectId The list of project IDs. To include multiple project IDs, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeSchemeProjects}
     */

  }, {
    key: "issuetypeschemeProjectGet",
    value: function issuetypeschemeProjectGet(cloudid, projectId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeProjectGet");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling issuetypeschemeProjectGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': this.apiClient.buildCollectionParam(projectId, 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueTypeSchemeProjects["default"];
      return this.apiClient.callApi('/issuetypescheme/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypeschemeProjectPut operation.
     * @callback module:api/IssueTypeSchemesApi~issuetypeschemeProjectPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign issue type scheme to project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueTypeSchemeProjectAssociation} body 
     * @param {module:api/IssueTypeSchemesApi~issuetypeschemeProjectPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issuetypeschemeProjectPut",
    value: function issuetypeschemeProjectPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypeschemeProjectPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypeschemeProjectPut");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/issuetypescheme/project', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTypeSchemesApi;
}();

exports["default"] = IssueTypeSchemesApi;