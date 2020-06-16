"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FoundUsersAndGroups = _interopRequireDefault(require("../model/FoundUsersAndGroups"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* GroupAndUserPicker service.
* @module api/GroupAndUserPickerApi
* @version 1.4.0
*/
var GroupAndUserPickerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new GroupAndUserPickerApi. 
  * @alias module:api/GroupAndUserPickerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function GroupAndUserPickerApi(apiClient) {
    _classCallCheck(this, GroupAndUserPickerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the groupuserpickerGet operation.
   * @callback module:api/GroupAndUserPickerApi~groupuserpickerGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FoundUsersAndGroups} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Find users and groups
   * @param {Object} cloudid Cloudi of the project
   * @param {String} query The search string.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.maxResults The maximum number of items to return in each list. (default to 50)
   * @param {Boolean} opts.showAvatar Whether the user avatar should be returned. If an invalid value is provided, the default value is used. (default to false)
   * @param {String} opts.fieldId The custom field ID of the field this request is for.
   * @param {Array.<String>} opts.projectId The ID of a project that returned users and groups must have permission to view. To include multiple projects, provide an ampersand-separated list. For example, `projectId=10000&projectId=10001`. This parameter is only used when `fieldId` is present.
   * @param {Array.<String>} opts.issueTypeId The ID of an issue type that returned users and groups must have permission to view. To include multiple issue types, provide an ampersand-separated list. For example, `issueTypeId=10000&issueTypeId=10001`. Special values, such as `-1` (all standard issue types) and `-2` (all subtask issue types), are supported. This parameter is only used when `fieldId` is present.
   * @param {module:model/String} opts.avatarSize The size of the avatar to return. If an invalid value is provided, the default value is used. (default to 'xsmall')
   * @param {Boolean} opts.caseInsensitive Whether the search for groups should be case insensitive. (default to false)
   * @param {Boolean} opts.excludeConnectAddons Whether Connect app users and groups should be excluded from the search results. If an invalid value is provided, the default value is used. (default to false)
   * @param {module:api/GroupAndUserPickerApi~groupuserpickerGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/FoundUsersAndGroups}
   */


  _createClass(GroupAndUserPickerApi, [{
    key: "groupuserpickerGet",
    value: function groupuserpickerGet(cloudid, query, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling groupuserpickerGet");
      } // verify the required parameter 'query' is set


      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling groupuserpickerGet");
      }

      var pathParams = {
        'cloudid': cloudid
      };
      var queryParams = {
        'query': query,
        'maxResults': opts['maxResults'],
        'showAvatar': opts['showAvatar'],
        'fieldId': opts['fieldId'],
        'projectId': this.apiClient.buildCollectionParam(opts['projectId'], 'multi'),
        'issueTypeId': this.apiClient.buildCollectionParam(opts['issueTypeId'], 'multi'),
        'avatarSize': opts['avatarSize'],
        'caseInsensitive': opts['caseInsensitive'],
        'excludeConnectAddons': opts['excludeConnectAddons']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['OAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FoundUsersAndGroups["default"];
      return this.apiClient.callApi('/groupuserpicker', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return GroupAndUserPickerApi;
}();

exports["default"] = GroupAndUserPickerApi;