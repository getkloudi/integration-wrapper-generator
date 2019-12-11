"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Issue = _interopRequireDefault(require("../model/Issue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Issues service.
* @module api/IssuesApi
* @version 1.1.0
*/
var IssuesApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new IssuesApi. 
  * @alias module:api/IssuesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssuesApi(apiClient) {
    _classCallCheck(this, IssuesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the getV3Issues operation.
   * @callback module:api/IssuesApi~getV3IssuesCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Issue} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get currently authenticated user's issues
   * Get currently authenticated user's issues
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.state Return opened, closed, or all issues (default to 'all')
   * @param {String} opts.labels Comma-separated list of label names
   * @param {String} opts.milestone Return issues for a specific milestone
   * @param {module:model/String} opts.orderBy Return issues ordered by `created_at` or `updated_at` fields. (default to 'created_at')
   * @param {module:model/String} opts.sort Return issues sorted in `asc` or `desc` order. (default to 'desc')
   * @param {Number} opts.page Current page number
   * @param {Number} opts.perPage Number of items per page
   * @param {module:api/IssuesApi~getV3IssuesCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Issue}
   */


  _createClass(IssuesApi, [{
    key: "getV3Issues",
    value: function getV3Issues(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'state': opts['state'],
        'labels': opts['labels'],
        'milestone': opts['milestone'],
        'order_by': opts['orderBy'],
        'sort': opts['sort'],
        'page': opts['page'],
        'per_page': opts['perPage']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['private_token_header', 'private_token_query'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Issue["default"];
      return this.apiClient.callApi('/v3/issues', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssuesApi;
}();

exports["default"] = IssuesApi;