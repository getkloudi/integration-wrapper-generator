"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _JiraExpressionEvalRequestBean = _interopRequireDefault(require("../model/JiraExpressionEvalRequestBean"));

var _JiraExpressionForAnalysis = _interopRequireDefault(require("../model/JiraExpressionForAnalysis"));

var _JiraExpressionResult = _interopRequireDefault(require("../model/JiraExpressionResult"));

var _JiraExpressionsAnalysis = _interopRequireDefault(require("../model/JiraExpressionsAnalysis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* JiraExpressions service.
* @module api/JiraExpressionsApi
* @version 1.4.0
*/
var JiraExpressionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JiraExpressionsApi. 
  * @alias module:api/JiraExpressionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JiraExpressionsApi(apiClient) {
    _classCallCheck(this, JiraExpressionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the expressionAnalysePost operation.
   * @callback module:api/JiraExpressionsApi~expressionAnalysePostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/JiraExpressionsAnalysis} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Analyse Jira expression
   * @param {Object} cloudid Cloudi of the project
   * @param {module:model/JiraExpressionForAnalysis} body The Jira expressions to analyse.
   * @param {module:api/JiraExpressionsApi~expressionAnalysePostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/JiraExpressionsAnalysis}
   */


  _createClass(JiraExpressionsApi, [{
    key: "expressionAnalysePost",
    value: function expressionAnalysePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling expressionAnalysePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling expressionAnalysePost");
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
      var returnType = _JiraExpressionsAnalysis["default"];
      return this.apiClient.callApi('/expression/analyse', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the expressionEvalPost operation.
     * @callback module:api/JiraExpressionsApi~expressionEvalPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JiraExpressionResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Evaluate Jira expression
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/JiraExpressionEvalRequestBean} body The Jira expression and the evaluation context.
     * @param {Object} opts Optional parameters
     * @param {String} opts.expand Use [expand](#expansion) to include additional information in the response. This parameter accepts `meta.complexity` that returns information about the expression complexity. For example, the number of expensive operations used by the expression and how close the expression is to reaching the [complexity limit](https://developer.atlassian.com/cloud/jira/platform/jira-expressions/#restrictions). Useful when designing and debugging your expressions.
     * @param {module:api/JiraExpressionsApi~expressionEvalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JiraExpressionResult}
     */

  }, {
    key: "expressionEvalPost",
    value: function expressionEvalPost(cloudid, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling expressionEvalPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling expressionEvalPost");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _JiraExpressionResult["default"];
      return this.apiClient.callApi('/expression/eval', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return JiraExpressionsApi;
}();

exports["default"] = JiraExpressionsApi;