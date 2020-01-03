"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ByoipCidr = _interopRequireDefault(require("./ByoipCidr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WithdrawByoipCidrResult model module.
 * @module model/WithdrawByoipCidrResult
 * @version 1.0.0
 */
var WithdrawByoipCidrResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>WithdrawByoipCidrResult</code>.
   * @alias module:model/WithdrawByoipCidrResult
   */
  function WithdrawByoipCidrResult() {
    _classCallCheck(this, WithdrawByoipCidrResult);

    WithdrawByoipCidrResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WithdrawByoipCidrResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WithdrawByoipCidrResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithdrawByoipCidrResult} obj Optional instance to populate.
     * @return {module:model/WithdrawByoipCidrResult} The populated <code>WithdrawByoipCidrResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WithdrawByoipCidrResult();

        if (data.hasOwnProperty('ByoipCidr')) {
          obj['ByoipCidr'] = _ByoipCidr["default"].constructFromObject(data['ByoipCidr']);
        }
      }

      return obj;
    }
  }]);

  return WithdrawByoipCidrResult;
}();
/**
 * @member {module:model/ByoipCidr} ByoipCidr
 */


WithdrawByoipCidrResult.prototype['ByoipCidr'] = undefined;
var _default = WithdrawByoipCidrResult;
exports["default"] = _default;