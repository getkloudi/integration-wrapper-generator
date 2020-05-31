"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Api1ItemRequest = _interopRequireDefault(require("../model/Api1ItemRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Item service.
* @module api/ItemApi
* @version 1.1.0
*/
var ItemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ItemApi. 
  * @alias module:api/ItemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ItemApi(apiClient) {
    _classCallCheck(this, ItemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the itemPost operation.
   * @callback module:api/ItemApi~itemPostCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * @param {String} xRollbarAccessToken An access token with scope `post_server_item` or `post_client_item`. A post_client_item token must be used if the `platform` is `browser\"`, `android`, `ios`, `flash`, or `client`. A post_server_item token should be used for other platforms.
   * @param {Object} opts Optional parameters
   * @param {module:model/Api1ItemRequest} opts.body 
   * @param {module:api/ItemApi~itemPostCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ItemApi, [{
    key: "itemPost",
    value: function itemPost(xRollbarAccessToken, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'xRollbarAccessToken' is set

      if (xRollbarAccessToken === undefined || xRollbarAccessToken === null) {
        throw new Error("Missing the required parameter 'xRollbarAccessToken' when calling itemPost");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Rollbar-Access-Token': xRollbarAccessToken
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/item/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ItemApi;
}();

exports["default"] = ItemApi;