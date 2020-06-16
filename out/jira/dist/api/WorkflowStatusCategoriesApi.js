"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StatusCategory = _interopRequireDefault(require("../model/StatusCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* WorkflowStatusCategories service.
* @module api/WorkflowStatusCategoriesApi
* @version 1.4.0
*/
var WorkflowStatusCategoriesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new WorkflowStatusCategoriesApi. 
  * @alias module:api/WorkflowStatusCategoriesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function WorkflowStatusCategoriesApi(apiClient) {
    _classCallCheck(this, WorkflowStatusCategoriesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the statuscategoryGet operation.
   * @callback module:api/WorkflowStatusCategoriesApi~statuscategoryGetCallback
   * @param {String} error Error message, if any.
   * @param {Array.<module:model/StatusCategory>} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get all status categories
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/WorkflowStatusCategoriesApi~statuscategoryGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Array.<module:model/StatusCategory>}
   */


  _createClass(WorkflowStatusCategoriesApi, [{
    key: "statuscategoryGet",
    value: function statuscategoryGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling statuscategoryGet");
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
      var returnType = [_StatusCategory["default"]];
      return this.apiClient.callApi('/statuscategory', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the statuscategoryIdOrKeyGet operation.
     * @callback module:api/WorkflowStatusCategoriesApi~statuscategoryIdOrKeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StatusCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get status category
     * @param {Object} cloudid Cloudi of the project
     * @param {String} idOrKey The ID or key of the status category.
     * @param {module:api/WorkflowStatusCategoriesApi~statuscategoryIdOrKeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StatusCategory}
     */

  }, {
    key: "statuscategoryIdOrKeyGet",
    value: function statuscategoryIdOrKeyGet(cloudid, idOrKey, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling statuscategoryIdOrKeyGet");
      } // verify the required parameter 'idOrKey' is set


      if (idOrKey === undefined || idOrKey === null) {
        throw new Error("Missing the required parameter 'idOrKey' when calling statuscategoryIdOrKeyGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'idOrKey': idOrKey
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _StatusCategory["default"];
      return this.apiClient.callApi('/statuscategory/{idOrKey}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return WorkflowStatusCategoriesApi;
}();

exports["default"] = WorkflowStatusCategoriesApi;