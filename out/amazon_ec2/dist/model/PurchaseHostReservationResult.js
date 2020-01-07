"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

var _Purchase = _interopRequireDefault(require("./Purchase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PurchaseHostReservationResult model module.
 * @module model/PurchaseHostReservationResult
 * @version 1.1.0
 */
var PurchaseHostReservationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PurchaseHostReservationResult</code>.
   * @alias module:model/PurchaseHostReservationResult
   */
  function PurchaseHostReservationResult() {
    _classCallCheck(this, PurchaseHostReservationResult);

    PurchaseHostReservationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PurchaseHostReservationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PurchaseHostReservationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseHostReservationResult} obj Optional instance to populate.
     * @return {module:model/PurchaseHostReservationResult} The populated <code>PurchaseHostReservationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PurchaseHostReservationResult();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }

        if (data.hasOwnProperty('Purchase')) {
          obj['Purchase'] = _ApiClient["default"].convertToType(data['Purchase'], [_Purchase["default"]]);
        }

        if (data.hasOwnProperty('TotalHourlyPrice')) {
          obj['TotalHourlyPrice'] = _ApiClient["default"].convertToType(data['TotalHourlyPrice'], 'String');
        }

        if (data.hasOwnProperty('TotalUpfrontPrice')) {
          obj['TotalUpfrontPrice'] = _ApiClient["default"].convertToType(data['TotalUpfrontPrice'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PurchaseHostReservationResult;
}();
/**
 * @member {String} ClientToken
 */


PurchaseHostReservationResult.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

PurchaseHostReservationResult.prototype['CurrencyCode'] = undefined;
/**
 * @member {Array.<module:model/Purchase>} Purchase
 */

PurchaseHostReservationResult.prototype['Purchase'] = undefined;
/**
 * @member {String} TotalHourlyPrice
 */

PurchaseHostReservationResult.prototype['TotalHourlyPrice'] = undefined;
/**
 * @member {String} TotalUpfrontPrice
 */

PurchaseHostReservationResult.prototype['TotalUpfrontPrice'] = undefined;
var _default = PurchaseHostReservationResult;
exports["default"] = _default;