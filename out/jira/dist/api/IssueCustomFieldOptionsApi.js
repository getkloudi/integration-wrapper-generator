"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BulkCreateCustomFieldOptionRequest = _interopRequireDefault(require("../model/BulkCreateCustomFieldOptionRequest"));

var _CustomFieldOption = _interopRequireDefault(require("../model/CustomFieldOption"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _PageBeanCustomFieldOptionDetails = _interopRequireDefault(require("../model/PageBeanCustomFieldOptionDetails"));

var _UpdateCustomFieldOption = _interopRequireDefault(require("../model/UpdateCustomFieldOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueCustomFieldOptions service.
* @module api/IssueCustomFieldOptionsApi
* @version 1.4.0
*/
var IssueCustomFieldOptionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueCustomFieldOptionsApi. 
  * @alias module:api/IssueCustomFieldOptionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueCustomFieldOptionsApi(apiClient) {
    _classCallCheck(this, IssueCustomFieldOptionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the customFieldFieldIdOptionGet operation.
   * @callback module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanCustomFieldOptionDetails} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get options for field
   * @param {Object} cloudid Cloudi of the project
   * @param {Number} fieldId The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 1000)
   * @param {module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanCustomFieldOptionDetails}
   */


  _createClass(IssueCustomFieldOptionsApi, [{
    key: "customFieldFieldIdOptionGet",
    value: function customFieldFieldIdOptionGet(cloudid, fieldId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling customFieldFieldIdOptionGet");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling customFieldFieldIdOptionGet");
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
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanCustomFieldOptionDetails["default"];
      return this.apiClient.callApi('/customField/{fieldId}/option', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the customFieldFieldIdOptionPost operation.
     * @callback module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create custom field options
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} fieldId The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
     * @param {module:model/BulkCreateCustomFieldOptionRequest} body 
     * @param {module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "customFieldFieldIdOptionPost",
    value: function customFieldFieldIdOptionPost(cloudid, fieldId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling customFieldFieldIdOptionPost");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling customFieldFieldIdOptionPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling customFieldFieldIdOptionPost");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldId': fieldId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/customField/{fieldId}/option', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the customFieldFieldIdOptionPut operation.
     * @callback module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update custom field options
     * @param {Object} cloudid Cloudi of the project
     * @param {Number} fieldId The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with the ID *customfield\\_10075* use *10075*.
     * @param {module:model/UpdateCustomFieldOption} body 
     * @param {module:api/IssueCustomFieldOptionsApi~customFieldFieldIdOptionPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "customFieldFieldIdOptionPut",
    value: function customFieldFieldIdOptionPut(cloudid, fieldId, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling customFieldFieldIdOptionPut");
      } // verify the required parameter 'fieldId' is set


      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling customFieldFieldIdOptionPut");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling customFieldFieldIdOptionPut");
      }

      var pathParams = {
        'cloudid': cloudid,
        'fieldId': fieldId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/customField/{fieldId}/option', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the customFieldOptionIdGet operation.
     * @callback module:api/IssueCustomFieldOptionsApi~customFieldOptionIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CustomFieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get custom field option
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the custom field option.
     * @param {module:api/IssueCustomFieldOptionsApi~customFieldOptionIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CustomFieldOption}
     */

  }, {
    key: "customFieldOptionIdGet",
    value: function customFieldOptionIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling customFieldOptionIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling customFieldOptionIdGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _CustomFieldOption["default"];
      return this.apiClient.callApi('/customFieldOption/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueCustomFieldOptionsApi;
}();

exports["default"] = IssueCustomFieldOptionsApi;