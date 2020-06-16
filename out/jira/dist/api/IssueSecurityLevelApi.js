"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PageBeanIssueSecurityLevelMember = _interopRequireDefault(require("../model/PageBeanIssueSecurityLevelMember"));

var _SecurityLevel = _interopRequireDefault(require("../model/SecurityLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* IssueSecurityLevel service.
* @module api/IssueSecurityLevelApi
* @version 1.4.0
*/
var IssueSecurityLevelApi = /*#__PURE__*/function () {
  /**
  * Constructs a new IssueSecurityLevelApi. 
  * @alias module:api/IssueSecurityLevelApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function IssueSecurityLevelApi(apiClient) {
    _classCallCheck(this, IssueSecurityLevelApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the issuesecurityschemesIssueSecuritySchemeIdMembersGet operation.
   * @callback module:api/IssueSecurityLevelApi~issuesecurityschemesIssueSecuritySchemeIdMembersGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/PageBeanIssueSecurityLevelMember} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get issue security level members
   * @param {Object} cloudid Cloudi of the project
   * @param {Number} issueSecuritySchemeId The ID of the issue security scheme. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) operation to get a list of issue security scheme IDs.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.startAt The index of the first item to return in a page of results (page offset). (default to 0)
   * @param {Number} opts.maxResults The maximum number of items to return per page. (default to 50)
   * @param {Array.<Number>} opts.issueSecurityLevelId The list of issue security level IDs. To include multiple issue security levels separate IDs with ampersand: `issueSecurityLevelId=10000&issueSecurityLevelId=10001`.
   * @param {String} opts.expand Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:   *  `all` Returns all expandable information.  *  `field` Returns information about the custom field granted the permission.  *  `group` Returns information about the group that is granted the permission.  *  `projectRole` Returns information about the project role granted the permission.  *  `user` Returns information about the user who is granted the permission.
   * @param {module:api/IssueSecurityLevelApi~issuesecurityschemesIssueSecuritySchemeIdMembersGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/PageBeanIssueSecurityLevelMember}
   */


  _createClass(IssueSecurityLevelApi, [{
    key: "issuesecurityschemesIssueSecuritySchemeIdMembersGet",
    value: function issuesecurityschemesIssueSecuritySchemeIdMembersGet(cloudid, issueSecuritySchemeId, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling issuesecurityschemesIssueSecuritySchemeIdMembersGet");
      } // verify the required parameter 'issueSecuritySchemeId' is set


      if (issueSecuritySchemeId === undefined || issueSecuritySchemeId === null) {
        throw new Error("Missing the required parameter 'issueSecuritySchemeId' when calling issuesecurityschemesIssueSecuritySchemeIdMembersGet");
      }

      var pathParams = {
        'cloudid': cloudid,
        'issueSecuritySchemeId': issueSecuritySchemeId
      };
      var queryParams = {
        'startAt': opts['startAt'],
        'maxResults': opts['maxResults'],
        'issueSecurityLevelId': this.apiClient.buildCollectionParam(opts['issueSecurityLevelId'], 'multi'),
        'expand': opts['expand']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _PageBeanIssueSecurityLevelMember["default"];
      return this.apiClient.callApi('/issuesecurityschemes/{issueSecuritySchemeId}/members', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the securitylevelIdGet operation.
     * @callback module:api/IssueSecurityLevelApi~securitylevelIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SecurityLevel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get issue security level
     * @param {Object} cloudid Cloudi of the project
     * @param {String} id The ID of the issue security level.
     * @param {module:api/IssueSecurityLevelApi~securitylevelIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SecurityLevel}
     */

  }, {
    key: "securitylevelIdGet",
    value: function securitylevelIdGet(cloudid, id, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling securitylevelIdGet");
      } // verify the required parameter 'id' is set


      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling securitylevelIdGet");
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
      var returnType = _SecurityLevel["default"];
      return this.apiClient.callApi('/securitylevel/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return IssueSecurityLevelApi;
}();

exports["default"] = IssueSecurityLevelApi;