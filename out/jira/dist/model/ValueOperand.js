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
 * The ValueOperand model module.
 * @module model/ValueOperand
 * @version 1.4.0
 */
var ValueOperand = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValueOperand</code>.
   * An operand that is a user-provided value.
   * @alias module:model/ValueOperand
   * @param value {String} The operand value.
   */
  function ValueOperand(value) {
    _classCallCheck(this, ValueOperand);

    ValueOperand.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ValueOperand, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>ValueOperand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValueOperand} obj Optional instance to populate.
     * @return {module:model/ValueOperand} The populated <code>ValueOperand</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValueOperand();

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ValueOperand;
}();
/**
 * The operand value.
 * @member {String} value
 */


ValueOperand.prototype['value'] = undefined;
var _default = ValueOperand;
exports["default"] = _default;