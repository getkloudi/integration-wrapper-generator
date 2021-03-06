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
 * The Phase1DHGroupNumbersListValue model module.
 * @module model/Phase1DHGroupNumbersListValue
 * @version 1.1.0
 */
var Phase1DHGroupNumbersListValue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Phase1DHGroupNumbersListValue</code>.
   * The Diffie-Hellmann group number for phase 1 IKE negotiations.
   * @alias module:model/Phase1DHGroupNumbersListValue
   */
  function Phase1DHGroupNumbersListValue() {
    _classCallCheck(this, Phase1DHGroupNumbersListValue);

    Phase1DHGroupNumbersListValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Phase1DHGroupNumbersListValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Phase1DHGroupNumbersListValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Phase1DHGroupNumbersListValue} obj Optional instance to populate.
     * @return {module:model/Phase1DHGroupNumbersListValue} The populated <code>Phase1DHGroupNumbersListValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Phase1DHGroupNumbersListValue();

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Phase1DHGroupNumbersListValue;
}();
/**
 * @member {Number} Value
 */


Phase1DHGroupNumbersListValue.prototype['Value'] = undefined;
var _default = Phase1DHGroupNumbersListValue;
exports["default"] = _default;