"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServerInformation = _interopRequireDefault(require("../model/ServerInformation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* ServerInfo service.
* @module api/ServerInfoApi
* @version 1.4.0
*/
var ServerInfoApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ServerInfoApi. 
  * @alias module:api/ServerInfoApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ServerInfoApi(apiClient) {
    _classCallCheck(this, ServerInfoApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the serverInfoGet operation.
   * @callback module:api/ServerInfoApi~serverInfoGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ServerInformation} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Jira instance info
   * @param {Object} cloudid Cloudi of the project
   * @param {module:api/ServerInfoApi~serverInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ServerInformation}
   */


  _createClass(ServerInfoApi, [{
    key: "serverInfoGet",
    value: function serverInfoGet(cloudid, callback) {
      var postBody = null; // verify the required parameter 'cloudid' is set

      if (cloudid === undefined || cloudid === null) {
        throw new Error("Missing the required parameter 'cloudid' when calling serverInfoGet");
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
      var returnType = _ServerInformation["default"];
      return this.apiClient.callApi('/serverInfo', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ServerInfoApi;
}();

exports["default"] = ServerInfoApi;