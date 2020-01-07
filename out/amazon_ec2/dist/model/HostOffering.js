"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

var _PaymentOption = _interopRequireDefault(require("./PaymentOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HostOffering model module.
 * @module model/HostOffering
 * @version 1.1.0
 */
var HostOffering =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HostOffering</code>.
   * Details about the Dedicated Host Reservation offering.
   * @alias module:model/HostOffering
   */
  function HostOffering() {
    _classCallCheck(this, HostOffering);

    HostOffering.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostOffering, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostOffering</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostOffering} obj Optional instance to populate.
     * @return {module:model/HostOffering} The populated <code>HostOffering</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostOffering();

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }

        if (data.hasOwnProperty('Duration')) {
          obj['Duration'] = _ApiClient["default"].convertToType(data['Duration'], 'Number');
        }

        if (data.hasOwnProperty('HourlyPrice')) {
          obj['HourlyPrice'] = _ApiClient["default"].convertToType(data['HourlyPrice'], 'String');
        }

        if (data.hasOwnProperty('InstanceFamily')) {
          obj['InstanceFamily'] = _ApiClient["default"].convertToType(data['InstanceFamily'], 'String');
        }

        if (data.hasOwnProperty('OfferingId')) {
          obj['OfferingId'] = _ApiClient["default"].convertToType(data['OfferingId'], 'String');
        }

        if (data.hasOwnProperty('PaymentOption')) {
          obj['PaymentOption'] = _PaymentOption["default"].constructFromObject(data['PaymentOption']);
        }

        if (data.hasOwnProperty('UpfrontPrice')) {
          obj['UpfrontPrice'] = _ApiClient["default"].convertToType(data['UpfrontPrice'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HostOffering;
}();
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */


HostOffering.prototype['CurrencyCode'] = undefined;
/**
 * @member {Number} Duration
 */

HostOffering.prototype['Duration'] = undefined;
/**
 * @member {String} HourlyPrice
 */

HostOffering.prototype['HourlyPrice'] = undefined;
/**
 * @member {String} InstanceFamily
 */

HostOffering.prototype['InstanceFamily'] = undefined;
/**
 * @member {String} OfferingId
 */

HostOffering.prototype['OfferingId'] = undefined;
/**
 * @member {module:model/PaymentOption} PaymentOption
 */

HostOffering.prototype['PaymentOption'] = undefined;
/**
 * @member {String} UpfrontPrice
 */

HostOffering.prototype['UpfrontPrice'] = undefined;
var _default = HostOffering;
exports["default"] = _default;