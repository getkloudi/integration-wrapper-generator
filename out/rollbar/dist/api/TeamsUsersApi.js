"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* TeamsUsers service.
* @module api/TeamsUsersApi
* @version 1.0.0
*/
var TeamsUsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TeamsUsersApi. 
  * @alias module:api/TeamsUsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TeamsUsersApi(apiClient) {
    _classCallCheck(this, TeamsUsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the inviteInviteIdDelete operation.
   * @callback module:api/TeamsUsersApi~inviteInviteIdDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/TeamsUsersApi~inviteInviteIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(TeamsUsersApi, [{
    key: "inviteInviteIdDelete",
    value: function inviteInviteIdDelete(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/invite/{invite_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the inviteInviteIdGet operation.
     * @callback module:api/TeamsUsersApi~inviteInviteIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~inviteInviteIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "inviteInviteIdGet",
    value: function inviteInviteIdGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/invite/{invite_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdInvitesGet operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdInvitesGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdInvitesGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdInvitesGet",
    value: function teamTeamIdInvitesGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/invites', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdInvitesPost operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdInvitesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdInvitesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdInvitesPost",
    value: function teamTeamIdInvitesPost(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/invites', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdDelete operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdUserUserIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdUserUserIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdDelete",
    value: function teamTeamIdUserUserIdDelete(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdGet operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdUserUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdUserUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdGet",
    value: function teamTeamIdUserUserIdGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUserUserIdPut operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdUserUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdUserUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUserUserIdPut",
    value: function teamTeamIdUserUserIdPut(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/user/{user_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the teamTeamIdUsersGet operation.
     * @callback module:api/TeamsUsersApi~teamTeamIdUsersGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~teamTeamIdUsersGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "teamTeamIdUsersGet",
    value: function teamTeamIdUsersGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/team/{team_id}/users', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the userUserIdTeamsGet operation.
     * @callback module:api/TeamsUsersApi~userUserIdTeamsGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TeamsUsersApi~userUserIdTeamsGetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "userUserIdTeamsGet",
    value: function userUserIdTeamsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/user/{user_id}/teams', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TeamsUsersApi;
}();

exports["default"] = TeamsUsersApi;