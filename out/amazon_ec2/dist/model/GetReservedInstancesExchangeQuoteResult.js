"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservationValue = _interopRequireDefault(require("./ReservationValue"));

var _ReservedInstanceReservationValue = _interopRequireDefault(require("./ReservedInstanceReservationValue"));

var _TargetReservationValue = _interopRequireDefault(require("./TargetReservationValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetReservedInstancesExchangeQuoteResult model module.
 * @module model/GetReservedInstancesExchangeQuoteResult
 * @version 1.0.0
 */
var GetReservedInstancesExchangeQuoteResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetReservedInstancesExchangeQuoteResult</code>.
   * Contains the output of GetReservedInstancesExchangeQuote.
   * @alias module:model/GetReservedInstancesExchangeQuoteResult
   */
  function GetReservedInstancesExchangeQuoteResult() {
    _classCallCheck(this, GetReservedInstancesExchangeQuoteResult);

    GetReservedInstancesExchangeQuoteResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetReservedInstancesExchangeQuoteResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetReservedInstancesExchangeQuoteResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReservedInstancesExchangeQuoteResult} obj Optional instance to populate.
     * @return {module:model/GetReservedInstancesExchangeQuoteResult} The populated <code>GetReservedInstancesExchangeQuoteResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetReservedInstancesExchangeQuoteResult();

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _ApiClient["default"].convertToType(data['CurrencyCode'], 'String');
        }

        if (data.hasOwnProperty('IsValidExchange')) {
          obj['IsValidExchange'] = _ApiClient["default"].convertToType(data['IsValidExchange'], 'Boolean');
        }

        if (data.hasOwnProperty('OutputReservedInstancesWillExpireAt')) {
          obj['OutputReservedInstancesWillExpireAt'] = _ApiClient["default"].convertToType(data['OutputReservedInstancesWillExpireAt'], 'Date');
        }

        if (data.hasOwnProperty('PaymentDue')) {
          obj['PaymentDue'] = _ApiClient["default"].convertToType(data['PaymentDue'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstanceValueRollup')) {
          obj['ReservedInstanceValueRollup'] = _ReservationValue["default"].constructFromObject(data['ReservedInstanceValueRollup']);
        }

        if (data.hasOwnProperty('ReservedInstanceValueSet')) {
          obj['ReservedInstanceValueSet'] = _ApiClient["default"].convertToType(data['ReservedInstanceValueSet'], [_ReservedInstanceReservationValue["default"]]);
        }

        if (data.hasOwnProperty('TargetConfigurationValueRollup')) {
          obj['TargetConfigurationValueRollup'] = _ReservationValue["default"].constructFromObject(data['TargetConfigurationValueRollup']);
        }

        if (data.hasOwnProperty('TargetConfigurationValueSet')) {
          obj['TargetConfigurationValueSet'] = _ApiClient["default"].convertToType(data['TargetConfigurationValueSet'], [_TargetReservationValue["default"]]);
        }

        if (data.hasOwnProperty('ValidationFailureReason')) {
          obj['ValidationFailureReason'] = _ApiClient["default"].convertToType(data['ValidationFailureReason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetReservedInstancesExchangeQuoteResult;
}();
/**
 * @member {String} CurrencyCode
 */


GetReservedInstancesExchangeQuoteResult.prototype['CurrencyCode'] = undefined;
/**
 * @member {Boolean} IsValidExchange
 */

GetReservedInstancesExchangeQuoteResult.prototype['IsValidExchange'] = undefined;
/**
 * @member {Date} OutputReservedInstancesWillExpireAt
 */

GetReservedInstancesExchangeQuoteResult.prototype['OutputReservedInstancesWillExpireAt'] = undefined;
/**
 * @member {String} PaymentDue
 */

GetReservedInstancesExchangeQuoteResult.prototype['PaymentDue'] = undefined;
/**
 * @member {module:model/ReservationValue} ReservedInstanceValueRollup
 */

GetReservedInstancesExchangeQuoteResult.prototype['ReservedInstanceValueRollup'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstanceReservationValue>} ReservedInstanceValueSet
 */

GetReservedInstancesExchangeQuoteResult.prototype['ReservedInstanceValueSet'] = undefined;
/**
 * @member {module:model/ReservationValue} TargetConfigurationValueRollup
 */

GetReservedInstancesExchangeQuoteResult.prototype['TargetConfigurationValueRollup'] = undefined;
/**
 * @member {Array.<module:model/TargetReservationValue>} TargetConfigurationValueSet
 */

GetReservedInstancesExchangeQuoteResult.prototype['TargetConfigurationValueSet'] = undefined;
/**
 * @member {String} ValidationFailureReason
 */

GetReservedInstancesExchangeQuoteResult.prototype['ValidationFailureReason'] = undefined;
var _default = GetReservedInstancesExchangeQuoteResult;
exports["default"] = _default;