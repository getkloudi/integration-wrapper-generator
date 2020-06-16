"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AutoCompleteSuggestions = _interopRequireDefault(require("../model/AutoCompleteSuggestions"));

var _ConvertedJQLQueries = _interopRequireDefault(require("../model/ConvertedJQLQueries"));

var _ErrorCollection = _interopRequireDefault(require("../model/ErrorCollection"));

var _JQLPersonalDataMigrationRequest = _interopRequireDefault(require("../model/JQLPersonalDataMigrationRequest"));

var _JQLReferenceData = _interopRequireDefault(require("../model/JQLReferenceData"));

var _JqlQueriesToParse = _interopRequireDefault(require("../model/JqlQueriesToParse"));

var _ParsedJqlQueries = _interopRequireDefault(require("../model/ParsedJqlQueries"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* JQL service.
* @module api/JQLApi
* @version 1.4.0
*/
var JQLApi = /*#__PURE__*/function () {
  /**
  * Constructs a new JQLApi. 
  * @alias module:api/JQLApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function JQLApi(apiClient) {
    _classCallCheck(this, JQLApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the jqlAutocompletedataGet operation.
   * @callback module:api/JQLApi~jqlAutocompletedataGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/JQLReferenceData} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get field reference data
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/JQLApi~jqlAutocompletedataGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/JQLReferenceData}
   */


  _createClass(JQLApi, [{
    key: "jqlAutocompletedataGet",
    value: function jqlAutocompletedataGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling jqlAutocompletedataGet");
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
      var returnType = _JQLReferenceData["default"];
      return this.apiClient.callApi('/jql/autocompletedata', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the jqlAutocompletedataSuggestionsGet operation.
     * @callback module:api/JQLApi~jqlAutocompletedataSuggestionsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AutoCompleteSuggestions} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get field auto complete suggestions
     * @param {Object} cloudid Cloudi of the project
     * @param {Object} opts Optional parameters
     * @param {String} opts.fieldName The name of the field.
     * @param {String} opts.fieldValue The partial field item name entered by the user.
     * @param {String} opts.predicateName The name of the [ CHANGED operator predicate](https://confluence.atlassian.com/x/hQORLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for which the suggestions are generated. The valid predicate operators are *by*, *from*, and *to*.
     * @param {String} opts.predicateValue The partial predicate item name entered by the user.
     * @param {module:api/JQLApi~jqlAutocompletedataSuggestionsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AutoCompleteSuggestions}
     */

  }, {
    key: "jqlAutocompletedataSuggestionsGet",
    value: function jqlAutocompletedataSuggestionsGet(cloudid, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling jqlAutocompletedataSuggestionsGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'fieldName': opts['fieldName'],
        'fieldValue': opts['fieldValue'],
        'predicateName': opts['predicateName'],
        'predicateValue': opts['predicateValue']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _AutoCompleteSuggestions["default"];
      return this.apiClient.callApi('/jql/autocompletedata/suggestions', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the jqlParsePost operation.
     * @callback module:api/JQLApi~jqlParsePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ParsedJqlQueries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parse JQL query
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/JqlQueriesToParse} body 
     * @param {module:api/JQLApi~jqlParsePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ParsedJqlQueries}
     */

  }, {
    key: "jqlParsePost",
    value: function jqlParsePost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling jqlParsePost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jqlParsePost");
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
      var returnType = _ParsedJqlQueries["default"];
      return this.apiClient.callApi('/jql/parse', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the jqlPdcleanerPost operation.
     * @callback module:api/JQLApi~jqlPdcleanerPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConvertedJQLQueries} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert user identifiers to account IDs in JQL queries
     * @param {Object} cloudid Cloudi of the project
     * @param {module:model/JQLPersonalDataMigrationRequest} body 
     * @param {module:api/JQLApi~jqlPdcleanerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConvertedJQLQueries}
     */

  }, {
    key: "jqlPdcleanerPost",
    value: function jqlPdcleanerPost(cloudid, body, callback) {
      var postBody = body; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling jqlPdcleanerPost");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling jqlPdcleanerPost");
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
      var returnType = _ConvertedJQLQueries["default"];
      return this.apiClient.callApi('/jql/pdcleaner', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return JQLApi;
}();

exports["default"] = JQLApi;