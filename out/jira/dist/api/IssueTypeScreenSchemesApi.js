"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeScreenSchemeProjectAssociation = _interopRequireDefault(require("../model/IssueTypeScreenSchemeProjectAssociation"));

var _PageBeanIssueTypeScreenScheme = _interopRequireDefault(require("../model/PageBeanIssueTypeScreenScheme"));

var _PageBeanIssueTypeScreenSchemeItem = _interopRequireDefault(require("../model/PageBeanIssueTypeScreenSchemeItem"));

var _PageBeanIssueTypeScreenSchemesProjects = _interopRequireDefault(require("../model/PageBeanIssueTypeScreenSchemesProjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueTypeScreenSchemes service.
* @module api/IssueTypeScreenSchemesApi
* @version 1.4.0
*/
var IssueTypeScreenSchemesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueTypeScreenSchemesApi. 
  * @alias module:api/IssueTypeScreenSchemesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueTypeScreenSchemesApi(apiClient) {
    _classCallCheck(this, IssueTypeScreenSchemesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuetypescreenschemeGet operation.
   * @callback module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanIssueTypeScreenScheme} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue type screen schemes
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {Array.<Number>} opts.id The list of issue type screen scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param {module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanIssueTypeScreenScheme}
   */


  _createClass(IssueTypeScreenSchemesApi, [{
    key: "issuetypescreenschemeGet",
    value: function issuetypescreenschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypescreenschemeGet");
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
      var returnType = _PageBeanIssueTypeScreenScheme["default"];
      return this.apiClient.callApi('/issuetypescreenscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypescreenschemeMappingGet operation.
     * @callback module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeScreenSchemeItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type screen scheme items
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.issueTypeScreenSchemeId The list of issue type screen scheme IDs. To include multiple issue type screen schemes, separate IDs with ampersand: `issueTypeScreenSchemeId=10000&issueTypeScreenSchemeId=10001`.
     * @param {module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeScreenSchemeItem}
     */

  }, {
    key: "issuetypescreenschemeMappingGet",
    value: function issuetypescreenschemeMappingGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypescreenschemeMappingGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'issueTypeScreenSchemeId': this.apiClient.buildCollectionParam(opts['issueTypeScreenSchemeId'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueTypeScreenSchemeItem["default"];
      return this.apiClient.callApi('/issuetypescreenscheme/mapping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypescreenschemeProjectGet operation.
     * @callback module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanIssueTypeScreenSchemesProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue type screen schemes for projects
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.projectId The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
     * @param {module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanIssueTypeScreenSchemesProjects}
     */

  }, {
    key: "issuetypescreenschemeProjectGet",
    value: function issuetypescreenschemeProjectGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypescreenschemeProjectGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'projectId': this.apiClient.buildCollectionParam(opts['projectId'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueTypeScreenSchemesProjects["default"];
      return this.apiClient.callApi('/issuetypescreenscheme/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the issuetypescreenschemeProjectPut operation.
     * @callback module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeProjectPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign issue type screen scheme to project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/IssueTypeScreenSchemeProjectAssociation} body 
     * @param {module:api/IssueTypeScreenSchemesApi~issuetypescreenschemeProjectPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "issuetypescreenschemeProjectPut",
    value: function issuetypescreenschemeProjectPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuetypescreenschemeProjectPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling issuetypescreenschemeProjectPut");
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
      return this.apiClient.callApi('/issuetypescreenscheme/project', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueTypeScreenSchemesApi;
}();

exports["default"] = IssueTypeScreenSchemesApi;