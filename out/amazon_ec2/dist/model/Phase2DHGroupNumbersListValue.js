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
 * The Phase2DHGroupNumbersListValue model module.
 * @module model/Phase2DHGroupNumbersListValue
 * @version 1.0.0
 */
var Phase2DHGroupNumbersListValue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Phase2DHGroupNumbersListValue</code>.
   * The Diffie-Hellmann group number for phase 2 IKE negotiations.
   * @alias module:model/Phase2DHGroupNumbersListValue
   */
  function Phase2DHGroupNumbersListValue() {
    _classCallCheck(this, Phase2DHGroupNumbersListValue);

    Phase2DHGroupNumbersListValue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Phase2DHGroupNumbersListValue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Phase2DHGroupNumbersListValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Phase2DHGroupNumbersListValue} obj Optional instance to populate.
     * @return {module:model/Phase2DHGroupNumbersListValue} The populated <code>Phase2DHGroupNumbersListValue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Phase2DHGroupNumbersListValue();

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Phase2DHGroupNumbersListValue;
}();
/**
 * @member {Number} Value
 */


Phase2DHGroupNumbersListValue.prototype['Value'] = undefined;
var _default = Phase2DHGroupNumbersListValue;
exports["default"] = _default;