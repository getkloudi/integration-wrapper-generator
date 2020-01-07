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
 * The GetHostReservationPurchasePreviewResult model module.
 * @module model/GetHostReservationPurchasePreviewResult
 * @version 1.1.0
 */
var GetHostReservationPurchasePreviewResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetHostReservationPurchasePreviewResult</code>.
   * @alias module:model/GetHostReservationPurchasePreviewResult
   */
  function GetHostReservationPurchasePreviewResult() {
    _classCallCheck(this, GetHostReservationPurchasePreviewResult);

    GetHostReservationPurchasePreviewResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetHostReservationPurchasePreviewResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetHostReservationPurchasePreviewResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHostReservationPurchasePreviewResult} obj Optional instance to populate.
     * @return {module:model/GetHostReservationPurchasePreviewResult} The populated <code>GetHostReservationPurchasePreviewResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetHostReservationPurchasePreviewResult();

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

  return GetHostReservationPurchasePreviewResult;
}();
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */


GetHostReservationPurchasePreviewResult.prototype['CurrencyCode'] = undefined;
/**
 * @member {Array.<module:model/Purchase>} Purchase
 */

GetHostReservationPurchasePreviewResult.prototype['Purchase'] = undefined;
/**
 * @member {String} TotalHourlyPrice
 */

GetHostReservationPurchasePreviewResult.prototype['TotalHourlyPrice'] = undefined;
/**
 * @member {String} TotalUpfrontPrice
 */

GetHostReservationPurchasePreviewResult.prototype['TotalUpfrontPrice'] = undefined;
var _default = GetHostReservationPurchasePreviewResult;
exports["default"] = _default;