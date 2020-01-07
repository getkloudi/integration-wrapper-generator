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
 * The ProvisionByoipCidrResult model module.
 * @module model/ProvisionByoipCidrResult
 * @version 1.1.0
 */
var ProvisionByoipCidrResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProvisionByoipCidrResult</code>.
   * @alias module:model/ProvisionByoipCidrResult
   */
  function ProvisionByoipCidrResult() {
    _classCallCheck(this, ProvisionByoipCidrResult);

    ProvisionByoipCidrResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProvisionByoipCidrResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProvisionByoipCidrResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProvisionByoipCidrResult} obj Optional instance to populate.
     * @return {module:model/ProvisionByoipCidrResult} The populated <code>ProvisionByoipCidrResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProvisionByoipCidrResult();

        if (data.hasOwnProperty('ByoipCidr')) {
          obj['ByoipCidr'] = _ByoipCidr["default"].constructFromObject(data['ByoipCidr']);
        }
      }

      return obj;
    }
  }]);

  return ProvisionByoipCidrResult;
}();
/**
 * @member {module:model/ByoipCidr} ByoipCidr
 */


ProvisionByoipCidrResult.prototype['ByoipCidr'] = undefined;
var _default = ProvisionByoipCidrResult;
exports["default"] = _default;