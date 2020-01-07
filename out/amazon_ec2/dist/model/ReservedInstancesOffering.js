"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CurrencyCodeValues = _interopRequireDefault(require("./CurrencyCodeValues"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _OfferingClassType = _interopRequireDefault(require("./OfferingClassType"));

var _OfferingTypeValues = _interopRequireDefault(require("./OfferingTypeValues"));

var _PricingDetail = _interopRequireDefault(require("./PricingDetail"));

var _RIProductDescription = _interopRequireDefault(require("./RIProductDescription"));

var _RecurringCharge = _interopRequireDefault(require("./RecurringCharge"));

var _Scope = _interopRequireDefault(require("./Scope"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstancesOffering model module.
 * @module model/ReservedInstancesOffering
 * @version 1.1.0
 */
var ReservedInstancesOffering =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstancesOffering</code>.
   * Describes a Reserved Instance offering.
   * @alias module:model/ReservedInstancesOffering
   */
  function ReservedInstancesOffering() {
    _classCallCheck(this, ReservedInstancesOffering);

    ReservedInstancesOffering.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstancesOffering, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstancesOffering</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstancesOffering} obj Optional instance to populate.
     * @return {module:model/ReservedInstancesOffering} The populated <code>ReservedInstancesOffering</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstancesOffering();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('CurrencyCode')) {
          obj['CurrencyCode'] = _CurrencyCodeValues["default"].constructFromObject(data['CurrencyCode']);
        }

        if (data.hasOwnProperty('Duration')) {
          obj['Duration'] = _ApiClient["default"].convertToType(data['Duration'], 'Number');
        }

        if (data.hasOwnProperty('FixedPrice')) {
          obj['FixedPrice'] = _ApiClient["default"].convertToType(data['FixedPrice'], 'Number');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _Tenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Marketplace')) {
          obj['Marketplace'] = _ApiClient["default"].convertToType(data['Marketplace'], 'Boolean');
        }

        if (data.hasOwnProperty('OfferingClass')) {
          obj['OfferingClass'] = _OfferingClassType["default"].constructFromObject(data['OfferingClass']);
        }

        if (data.hasOwnProperty('OfferingType')) {
          obj['OfferingType'] = _OfferingTypeValues["default"].constructFromObject(data['OfferingType']);
        }

        if (data.hasOwnProperty('PricingDetails')) {
          obj['PricingDetails'] = _ApiClient["default"].convertToType(data['PricingDetails'], [_PricingDetail["default"]]);
        }

        if (data.hasOwnProperty('ProductDescription')) {
          obj['ProductDescription'] = _RIProductDescription["default"].constructFromObject(data['ProductDescription']);
        }

        if (data.hasOwnProperty('RecurringCharges')) {
          obj['RecurringCharges'] = _ApiClient["default"].convertToType(data['RecurringCharges'], [_RecurringCharge["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesOfferingId')) {
          obj['ReservedInstancesOfferingId'] = _ApiClient["default"].convertToType(data['ReservedInstancesOfferingId'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _Scope["default"].constructFromObject(data['Scope']);
        }

        if (data.hasOwnProperty('UsagePrice')) {
          obj['UsagePrice'] = _ApiClient["default"].convertToType(data['UsagePrice'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReservedInstancesOffering;
}();
/**
 * @member {String} AvailabilityZone
 */


ReservedInstancesOffering.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

ReservedInstancesOffering.prototype['CurrencyCode'] = undefined;
/**
 * @member {Number} Duration
 */

ReservedInstancesOffering.prototype['Duration'] = undefined;
/**
 * @member {Number} FixedPrice
 */

ReservedInstancesOffering.prototype['FixedPrice'] = undefined;
/**
 * @member {module:model/Tenancy} InstanceTenancy
 */

ReservedInstancesOffering.prototype['InstanceTenancy'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

ReservedInstancesOffering.prototype['InstanceType'] = undefined;
/**
 * @member {Boolean} Marketplace
 */

ReservedInstancesOffering.prototype['Marketplace'] = undefined;
/**
 * @member {module:model/OfferingClassType} OfferingClass
 */

ReservedInstancesOffering.prototype['OfferingClass'] = undefined;
/**
 * @member {module:model/OfferingTypeValues} OfferingType
 */

ReservedInstancesOffering.prototype['OfferingType'] = undefined;
/**
 * @member {Array.<module:model/PricingDetail>} PricingDetails
 */

ReservedInstancesOffering.prototype['PricingDetails'] = undefined;
/**
 * @member {module:model/RIProductDescription} ProductDescription
 */

ReservedInstancesOffering.prototype['ProductDescription'] = undefined;
/**
 * @member {Array.<module:model/RecurringCharge>} RecurringCharges
 */

ReservedInstancesOffering.prototype['RecurringCharges'] = undefined;
/**
 * @member {String} ReservedInstancesOfferingId
 */

ReservedInstancesOffering.prototype['ReservedInstancesOfferingId'] = undefined;
/**
 * @member {module:model/Scope} Scope
 */

ReservedInstancesOffering.prototype['Scope'] = undefined;
/**
 * @member {Number} UsagePrice
 */

ReservedInstancesOffering.prototype['UsagePrice'] = undefined;
var _default = ReservedInstancesOffering;
exports["default"] = _default;