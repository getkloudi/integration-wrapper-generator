"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldConfigurationSchemeProjectAssociation = _interopRequireDefault(require("../model/FieldConfigurationSchemeProjectAssociation"));

var _PageBeanFieldConfiguration = _interopRequireDefault(require("../model/PageBeanFieldConfiguration"));

var _PageBeanFieldConfigurationIssueTypeItem = _interopRequireDefault(require("../model/PageBeanFieldConfigurationIssueTypeItem"));

var _PageBeanFieldConfigurationItem = _interopRequireDefault(require("../model/PageBeanFieldConfigurationItem"));

var _PageBeanFieldConfigurationScheme = _interopRequireDefault(require("../model/PageBeanFieldConfigurationScheme"));

var _PageBeanFieldConfigurationSchemeProjects = _interopRequireDefault(require("../model/PageBeanFieldConfigurationSchemeProjects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueFieldConfigurations service.
* @module api/IssueFieldConfigurationsApi
* @version 1.4.0
*/
var IssueFieldConfigurationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueFieldConfigurationsApi. 
  * @alias module:api/IssueFieldConfigurationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueFieldConfigurationsApi(apiClient) {
    _classCallCheck(this, IssueFieldConfigurationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the fieldconfigurationGet operation.
   * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanFieldConfiguration} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all field configurations
   * @param {Object} cloudid Cloudi of the project
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {Array.<Number>} opts.id The list of field configuration IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
   * @param {Boolean} opts.isDefault If *true* returns the default field configuration only. (default to false)
   * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanFieldConfiguration}
   */


  _createClass(IssueFieldConfigurationsApi, [{
    key: "fieldconfigurationGet",
    value: function fieldconfigurationGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        'isDefault': opts['isDefault']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanFieldConfiguration["default"];
      return this.apiClient.callApi('/fieldconfiguration', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldconfigurationIdFieldsGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationIdFieldsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration items
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} id The ID of the field configuration.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationIdFieldsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationItem}
     */

  }, {
    key: "fieldconfigurationIdFieldsGet",
    value: function fieldconfigurationIdFieldsGet(cloudid, id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationIdFieldsGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fieldconfigurationIdFieldsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanFieldConfigurationItem["default"];
      return this.apiClient.callApi('/fieldconfiguration/{id}/fields', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldconfigurationschemeGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationScheme} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all field configuration schemes
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.id The list of field configuration scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `id=10000&id=10001`.
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationScheme}
     */

  }, {
    key: "fieldconfigurationschemeGet",
    value: function fieldconfigurationschemeGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeGet");
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
      var returnType = _PageBeanFieldConfigurationScheme["default"];
      return this.apiClient.callApi('/fieldconfigurationscheme', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldconfigurationschemeMappingGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeMappingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationIssueTypeItem} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration issue type items
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<Number>} opts.fieldConfigurationSchemeId The list of field configuration scheme IDs. To include multiple field configuration schemes separate IDs with ampersand: `fieldConfigurationSchemeId=10000&fieldConfigurationSchemeId=10001`.
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeMappingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationIssueTypeItem}
     */

  }, {
    key: "fieldconfigurationschemeMappingGet",
    value: function fieldconfigurationschemeMappingGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeMappingGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'fieldConfigurationSchemeId': this.apiClient.buildCollectionParam(opts['fieldConfigurationSchemeId'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanFieldConfigurationIssueTypeItem["default"];
      return this.apiClient.callApi('/fieldconfigurationscheme/mapping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldconfigurationschemeProjectGet operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanFieldConfigurationSchemeProjects} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field configuration schemes for projects
     * @param {Object} cloudid Cloudi of the project
     * @param {Array.<Number>} projectId The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanFieldConfigurationSchemeProjects}
     */

  }, {
    key: "fieldconfigurationschemeProjectGet",
    value: function fieldconfigurationschemeProjectGet(cloudid, projectId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeProjectGet");
      } // verify the required parameter 'projectId' is set


      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling fieldconfigurationschemeProjectGet");
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
      var returnType = _PageBeanFieldConfigurationSchemeProjects["default"];
      return this.apiClient.callApi('/fieldconfigurationscheme/project', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldconfigurationschemeProjectPut operation.
     * @callback module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign field configuration scheme to project
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/FieldConfigurationSchemeProjectAssociation} body 
     * @param {module:api/IssueFieldConfigurationsApi~fieldconfigurationschemeProjectPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "fieldconfigurationschemeProjectPut",
    value: function fieldconfigurationschemeProjectPut(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldconfigurationschemeProjectPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fieldconfigurationschemeProjectPut");
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
      return this.apiClient.callApi('/fieldconfigurationscheme/project', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueFieldConfigurationsApi;
}();

exports["default"] = IssueFieldConfigurationsApi;