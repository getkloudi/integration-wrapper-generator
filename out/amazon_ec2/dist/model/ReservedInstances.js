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

var _RIProductDescription = _interopRequireDefault(require("./RIProductDescription"));

var _RecurringCharge = _interopRequireDefault(require("./RecurringCharge"));

var _ReservedInstanceState = _interopRequireDefault(require("./ReservedInstanceState"));

var _Scope = _interopRequireDefault(require("./Scope"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReservedInstances model module.
 * @module model/ReservedInstances
 * @version 1.1.0
 */
var ReservedInstances =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReservedInstances</code>.
   * Describes a Reserved Instance.
   * @alias module:model/ReservedInstances
   */
  function ReservedInstances() {
    _classCallCheck(this, ReservedInstances);

    ReservedInstances.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReservedInstances, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReservedInstances</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReservedInstances} obj Optional instance to populate.
     * @return {module:model/ReservedInstances} The populated <code>ReservedInstances</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReservedInstances();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
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

        if (data.hasOwnProperty('FixedPrice')) {
          obj['FixedPrice'] = _ApiClient["default"].convertToType(data['FixedPrice'], 'Number');
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _Tenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('OfferingClass')) {
          obj['OfferingClass'] = _OfferingClassType["default"].constructFromObject(data['OfferingClass']);
        }

        if (data.hasOwnProperty('OfferingType')) {
          obj['OfferingType'] = _OfferingTypeValues["default"].constructFromObject(data['OfferingType']);
        }

        if (data.hasOwnProperty('ProductDescription')) {
          obj['ProductDescription'] = _RIProductDescription["default"].constructFromObject(data['ProductDescription']);
        }

        if (data.hasOwnProperty('RecurringCharges')) {
          obj['RecurringCharges'] = _ApiClient["default"].convertToType(data['RecurringCharges'], [_RecurringCharge["default"]]);
        }

        if (data.hasOwnProperty('ReservedInstancesId')) {
          obj['ReservedInstancesId'] = _ApiClient["default"].convertToType(data['ReservedInstancesId'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _Scope["default"].constructFromObject(data['Scope']);
        }

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ReservedInstanceState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('UsagePrice')) {
          obj['UsagePrice'] = _ApiClient["default"].convertToType(data['UsagePrice'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ReservedInstances;
}();
/**
 * @member {String} AvailabilityZone
 */


ReservedInstances.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/CurrencyCodeValues} CurrencyCode
 */

ReservedInstances.prototype['CurrencyCode'] = undefined;
/**
 * @member {Number} Duration
 */

ReservedInstances.prototype['Duration'] = undefined;
/**
 * @member {Date} End
 */

ReservedInstances.prototype['End'] = undefined;
/**
 * @member {Number} FixedPrice
 */

ReservedInstances.prototype['FixedPrice'] = undefined;
/**
 * @member {Number} InstanceCount
 */

ReservedInstances.prototype['InstanceCount'] = undefined;
/**
 * @member {module:model/Tenancy} InstanceTenancy
 */

ReservedInstances.prototype['InstanceTenancy'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

ReservedInstances.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/OfferingClassType} OfferingClass
 */

ReservedInstances.prototype['OfferingClass'] = undefined;
/**
 * @member {module:model/OfferingTypeValues} OfferingType
 */

ReservedInstances.prototype['OfferingType'] = undefined;
/**
 * @member {module:model/RIProductDescription} ProductDescription
 */

ReservedInstances.prototype['ProductDescription'] = undefined;
/**
 * @member {Array.<module:model/RecurringCharge>} RecurringCharges
 */

ReservedInstances.prototype['RecurringCharges'] = undefined;
/**
 * @member {String} ReservedInstancesId
 */

ReservedInstances.prototype['ReservedInstancesId'] = undefined;
/**
 * @member {module:model/Scope} Scope
 */

ReservedInstances.prototype['Scope'] = undefined;
/**
 * @member {Date} Start
 */

ReservedInstances.prototype['Start'] = undefined;
/**
 * @member {module:model/ReservedInstanceState} State
 */

ReservedInstances.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ReservedInstances.prototype['Tags'] = undefined;
/**
 * @member {Number} UsagePrice
 */

ReservedInstances.prototype['UsagePrice'] = undefined;
var _default = ReservedInstances;
exports["default"] = _default;