"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RecurringChargeFrequency = _interopRequireDefault(require("./RecurringChargeFrequency"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RecurringCharge model module.
 * @module model/RecurringCharge
 * @version 1.0.0
 */
var RecurringCharge =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RecurringCharge</code>.
   * Describes a recurring charge.
   * @alias module:model/RecurringCharge
   */
  function RecurringCharge() {
    _classCallCheck(this, RecurringCharge);

    RecurringCharge.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecurringCharge, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RecurringCharge</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecurringCharge} obj Optional instance to populate.
     * @return {module:model/RecurringCharge} The populated <code>RecurringCharge</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecurringCharge();

        if (data.hasOwnProperty('Amount')) {
          obj['Amount'] = _ApiClient["default"].convertToType(data['Amount'], 'Number');
        }

        if (data.hasOwnProperty('Frequency')) {
          obj['Frequency'] = _RecurringChargeFrequency["default"].constructFromObject(data['Frequency']);
        }
      }

      return obj;
    }
  }]);

  return RecurringCharge;
}();
/**
 * @member {Number} Amount
 */


RecurringCharge.prototype['Amount'] = undefined;
/**
 * @member {module:model/RecurringChargeFrequency} Frequency
 */

RecurringCharge.prototype['Frequency'] = undefined;
var _default = RecurringCharge;
exports["default"] = _default;