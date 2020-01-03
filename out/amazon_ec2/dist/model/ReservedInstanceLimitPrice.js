"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstanceLimitPrice model module.
 * @module model/ReservedInstanceLimitPrice
 * @version 1.0.0
 */
var ReservedInstanceLimitPrice =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstanceLimitPrice</code>.
   * Describes the limit price of a Reserved Instance offering.
   * @alias module:model/ReservedInstanceLimitPrice
   */
  function ReservedInstanceLimitPrice() {
    _classCallCheck(this, ReservedInstanceLimitPrice);

    ReservedInstanceLimitPrice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstanceLimitPrice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstanceLimitPrice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstanceLimitPrice} obj Optional instance to populate.
     * @return {module:model/ReservedInstanceLimitPrice} The populated <code>ReservedInstanceLimitPrice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstanceLimitPrice();

        if (data.hasOwnProperty('Amount')) {
          obj['Amount'] = _ApiClient["default"].convertToType(data['Amount'], 'Number');
        }

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }
      }

      return obj;
    }
  }]);

  return ReservedInstanceLimitPrice;
}();
/**
 * @member {Number} Amount
 */


ReservedInstanceLimitPrice.prototype['Amount'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

ReservedInstanceLimitPrice.prototype['CurrencyCode'] = undefined;
var _default = ReservedInstanceLimitPrice;
exports["default"] = _default;