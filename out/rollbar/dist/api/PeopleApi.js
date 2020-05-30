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
* People service.
* @module api/PeopleApi
* @version 1.0.0
*/
var PeopleApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PeopleApi. 
  * @alias module:api/PeopleApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PeopleApi(apiClient) {
    _classCallCheck(this, PeopleApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the peopleDeleteJobsJobIdGet operation.
   * @callback module:api/PeopleApi~peopleDeleteJobsJobIdGetCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {module:api/PeopleApi~peopleDeleteJobsJobIdGetCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(PeopleApi, [{
    key: "peopleDeleteJobsJobIdGet",
    value: function peopleDeleteJobsJobIdGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/people/delete_jobs/{job_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the peopleDeleteJobsPost operation.
     * @callback module:api/PeopleApi~peopleDeleteJobsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/PeopleApi~peopleDeleteJobsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "peopleDeleteJobsPost",
    value: function peopleDeleteJobsPost(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['accessToken'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/people/delete_jobs/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PeopleApi;
}();

exports["default"] = PeopleApi;