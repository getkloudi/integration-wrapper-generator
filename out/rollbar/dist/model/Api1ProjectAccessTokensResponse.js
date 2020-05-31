"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Err = _interopRequireDefault(require("./Err"));

var _ProjectAccessTokenResponse = _interopRequireDefault(require("./ProjectAccessTokenResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Api1ProjectAccessTokensResponse model module.
 * @module model/Api1ProjectAccessTokensResponse
 * @version 1.1.0
 */
var Api1ProjectAccessTokensResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1ProjectAccessTokensResponse</code>.
   * @alias module:model/Api1ProjectAccessTokensResponse
   */
  function Api1ProjectAccessTokensResponse() {
    _classCallCheck(this, Api1ProjectAccessTokensResponse);

    Api1ProjectAccessTokensResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1ProjectAccessTokensResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Api1ProjectAccessTokensResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1ProjectAccessTokensResponse} obj Optional instance to populate.
     * @return {module:model/Api1ProjectAccessTokensResponse} The populated <code>Api1ProjectAccessTokensResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1ProjectAccessTokensResponse();

        if (data.hasOwnProperty('err')) {
          obj['err'] = _Err["default"].constructFromObject(data['err']);
        }

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ProjectAccessTokenResponse["default"].constructFromObject(data['result']);
        }
      }

      return obj;
    }
  }]);

  return Api1ProjectAccessTokensResponse;
}();
/**
 * @member {module:model/Err} err
 */


Api1ProjectAccessTokensResponse.prototype['err'] = undefined;
/**
 * @member {module:model/ProjectAccessTokenResponse} result
 */

Api1ProjectAccessTokensResponse.prototype['result'] = undefined;
var _default = Api1ProjectAccessTokensResponse;
exports["default"] = _default;