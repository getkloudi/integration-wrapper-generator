"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

var _PaymentOption = _interopRequireDefault(require("./PaymentOption"));

var _ReservationState = _interopRequireDefault(require("./ReservationState"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HostReservation model module.
 * @module model/HostReservation
 * @version 1.0.0
 */
var HostReservation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HostReservation</code>.
   * Details about the Dedicated Host Reservation and associated Dedicated Hosts.
   * @alias module:model/HostReservation
   */
  function HostReservation() {
    _classCallCheck(this, HostReservation);

    HostReservation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostReservation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostReservation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostReservation} obj Optional instance to populate.
     * @return {module:model/HostReservation} The populated <code>HostReservation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostReservation();

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }

        if (data.hasOwnProperty('Duration')) {
          obj['Duration'] = _ApiClient["default"].convertToType(data['Duration'], 'Number');
        }

        if (data.hasOwnProperty('End')) {
          obj['End'] = _ApiClient["default"].convertToType(data['End'], 'Date');
        }

        if (data.hasOwnProperty('HostIdSet')) {
          obj['HostIdSet'] = _ApiClient["default"].convertToType(data['HostIdSet'], ['String']);
        }

        if (data.hasOwnProperty('HostReservationId')) {
          obj['HostReservationId'] = _ApiClient["default"].convertToType(data['HostReservationId'], 'String');
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

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ReservationState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('UpfrontPrice')) {
          obj['UpfrontPrice'] = _ApiClient["default"].convertToType(data['UpfrontPrice'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HostReservation;
}();
/**
 * @member {Number} Count
 */


HostReservation.prototype['Count'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

HostReservation.prototype['CurrencyCode'] = undefined;
/**
 * @member {Number} Duration
 */

HostReservation.prototype['Duration'] = undefined;
/**
 * @member {Date} End
 */

HostReservation.prototype['End'] = undefined;
/**
 * @member {Array.<String>} HostIdSet
 */

HostReservation.prototype['HostIdSet'] = undefined;
/**
 * @member {String} HostReservationId
 */

HostReservation.prototype['HostReservationId'] = undefined;
/**
 * @member {String} HourlyPrice
 */

HostReservation.prototype['HourlyPrice'] = undefined;
/**
 * @member {String} InstanceFamily
 */

HostReservation.prototype['InstanceFamily'] = undefined;
/**
 * @member {String} OfferingId
 */

HostReservation.prototype['OfferingId'] = undefined;
/**
 * @member {module:model/PaymentOption} PaymentOption
 */

HostReservation.prototype['PaymentOption'] = undefined;
/**
 * @member {Date} Start
 */

HostReservation.prototype['Start'] = undefined;
/**
 * @member {module:model/ReservationState} State
 */

HostReservation.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

HostReservation.prototype['Tags'] = undefined;
/**
 * @member {String} UpfrontPrice
 */

HostReservation.prototype['UpfrontPrice'] = undefined;
var _default = HostReservation;
exports["default"] = _default;