"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomFieldDefinitionJsonBean = _interopRequireDefault(require("../model/CustomFieldDefinitionJsonBean"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _FieldDetails = _interopRequireDefault(require("../model/FieldDetails"));

var _PageBeanContext = _interopRequireDefault(require("../model/PageBeanContext"));

var _PageBeanField = _interopRequireDefault(require("../model/PageBeanField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueFields service.
* @module api/IssueFieldsApi
* @version 1.4.0
*/
var IssueFieldsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueFieldsApi. 
  * @alias module:api/IssueFieldsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueFieldsApi(apiClient) {
    _classCallCheck(this, IssueFieldsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the fieldFieldIdContextsGet operation.
   * @callback module:api/IssueFieldsApi~fieldFieldIdContextsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanContext} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get contexts for a field
   * @param {Object} cloudid Cloudi of the project
   * @param {String} fieldId The ID of the field to return contexts for.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 20)
   * @param {module:api/IssueFieldsApi~fieldFieldIdContextsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanContext}
   */


  _createClass(IssueFieldsApi, [{
    key: "fieldFieldIdContextsGet",
    value: function fieldFieldIdContextsGet(cloudid, fieldId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldFieldIdContextsGet");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling fieldFieldIdContextsGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldId': fieldId
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanContext["default"];
      return this.apiClient.callApi('/field/{fieldId}/contexts', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldGet operation.
     * @callback module:api/IssueFieldsApi~fieldGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FieldDetails>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get fields
     * @param {Object} cloudid Cloudi of the project
     * @param {module:api/IssueFieldsApi~fieldGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FieldDetails>}
     */

  }, {
    key: "fieldGet",
    value: function fieldGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_FieldDetails["default"]];
      return this.apiClient.callApi('/field', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldPost operation.
     * @callback module:api/IssueFieldsApi~fieldPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FieldDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create custom field
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/CustomFieldDefinitionJsonBean} body Definition of the custom field to be created
     * @param {module:api/IssueFieldsApi~fieldPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FieldDetails}
     */

  }, {
    key: "fieldPost",
    value: function fieldPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fieldPost");
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
      var returnType = _FieldDetails["default"];
      return this.apiClient.callApi('/field', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the fieldSearchGet operation.
     * @callback module:api/IssueFieldsApi~fieldSearchGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageBeanField} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get fields paginated
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
     * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
     * @param {Array.<module:model/String>} opts.type The type of fields to search.
     * @param {Array.<String>} opts.id The IDs of the custom fields to return or, where`query is specified, filter. IDs should be provided in the format customfield_XXXXX.`
     * @param {String} opts.query String used to perform a case-insensitive partial match with field names or descriptions.
     * @param {module:model/String} opts.orderBy [Order](#ordering) the results by a field:   *  `contextsCount` Sorts by the number of contexts related to a field.  *  `lastUsed` Sorts by the date when the value of the field last changed.  *  `name` Sorts by the field name.  *  `screensCount` Sorts by the number of screens related to a field.
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `key` Returns the key for each field.  *  `lastUsed` Returns the date when the value of the field last changed.  *  `screensCount` Returns the number of screens related to a field.  *  `contextsCount` Returns the number of contexts related to a field.  *  `isLocked` Returns information about whether the field is [locked](https://confluence.atlassian.com/x/ZSN7Og).
     * @param {module:api/IssueFieldsApi~fieldSearchGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageBeanField}
     */

  }, {
    key: "fieldSearchGet",
    value: function fieldSearchGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling fieldSearchGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),
        'id': this.apiClient.buildCollectionParam(opts['id'], 'multi'),
        'query': opts['query'],
        'orderBy': opts['orderBy'],
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanField["default"];
      return this.apiClient.callApi('/field/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueFieldsApi;
}();

exports["default"] = IssueFieldsApi;