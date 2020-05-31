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
 * The Api1ProjectAccessTokenRequest model module.
 * @module model/Api1ProjectAccessTokenRequest
 * @version 1.1.0
 */
var Api1ProjectAccessTokenRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1ProjectAccessTokenRequest</code>.
   * @alias module:model/Api1ProjectAccessTokenRequest
   */
  function Api1ProjectAccessTokenRequest() {
    _classCallCheck(this, Api1ProjectAccessTokenRequest);

    Api1ProjectAccessTokenRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1ProjectAccessTokenRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Api1ProjectAccessTokenRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ProjectAccessTokenRequest} obj Optional instance to populate.
     * @return {module:model/Api1ProjectAccessTokenRequest} The populated <code>Api1ProjectAccessTokenRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1ProjectAccessTokenRequest();

        if (data.hasOwnProperty('rate_limit_window_count')) {
          obj['rate_limit_window_count'] = _ApiClient["default"].convertToType(data['rate_limit_window_count'], 'Number');
        }

        if (data.hasOwnProperty('rate_limit_window_size')) {
          obj['rate_limit_window_size'] = _ApiClient["default"].convertToType(data['rate_limit_window_size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Api1ProjectAccessTokenRequest;
}();
/**
 * Max number of calls the token is permitted within each window. Must be an integer (no punctuation) greater than -1. If set to `0`,then no rate limit is applied.
 * @member {Number} rate_limit_window_count
 * @default 0
 */


Api1ProjectAccessTokenRequest.prototype['rate_limit_window_count'] = 0;
/**
 * Window duration in seconds. Must be greater than -1.  If set to `0`, then no rate limit is applied.
 * @member {Number} rate_limit_window_size
 * @default 0
 */

Api1ProjectAccessTokenRequest.prototype['rate_limit_window_size'] = 0;
var _default = Api1ProjectAccessTokenRequest;
exports["default"] = _default;