"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _OfferingClassType = _interopRequireDefault(require("./OfferingClassType"));

var _OfferingTypeValues = _interopRequireDefault(require("./OfferingTypeValues"));

var _RIProductDescription = _interopRequireDefault(require("./RIProductDescription"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeReservedInstancesOfferingsRequest model module.
 * @module model/DescribeReservedInstancesOfferingsRequest
 * @version 1.0.0
 */
var DescribeReservedInstancesOfferingsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeReservedInstancesOfferingsRequest</code>.
   * Contains the parameters for DescribeReservedInstancesOfferings.
   * @alias module:model/DescribeReservedInstancesOfferingsRequest
   */
  function DescribeReservedInstancesOfferingsRequest() {
    _classCallCheck(this, DescribeReservedInstancesOfferingsRequest);

    DescribeReservedInstancesOfferingsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeReservedInstancesOfferingsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeReservedInstancesOfferingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeReservedInstancesOfferingsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeReservedInstancesOfferingsRequest} The populated <code>DescribeReservedInstancesOfferingsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeReservedInstancesOfferingsRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('IncludeMarketplace')) {
          obj['IncludeMarketplace'] = _ApiClient["default"].convertToType(data['IncludeMarketplace'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _Tenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('MaxDuration')) {
          obj['MaxDuration'] = _ApiClient["default"].convertToType(data['MaxDuration'], 'Number');
        }

        if (data.hasOwnProperty('MaxInstanceCount')) {
          obj['MaxInstanceCount'] = _ApiClient["default"].convertToType(data['MaxInstanceCount'], 'Number');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('MinDuration')) {
          obj['MinDuration'] = _ApiClient["default"].convertToType(data['MinDuration'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
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

        if (data.hasOwnProperty('ReservedInstancesOfferingIds')) {
          obj['ReservedInstancesOfferingIds'] = _ApiClient["default"].convertToType(data['ReservedInstancesOfferingIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeReservedInstancesOfferingsRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


DescribeReservedInstancesOfferingsRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeReservedInstancesOfferingsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeReservedInstancesOfferingsRequest.prototype['Filters'] = undefined;
/**
 * @member {Boolean} IncludeMarketplace
 */

DescribeReservedInstancesOfferingsRequest.prototype['IncludeMarketplace'] = undefined;
/**
 * @member {module:model/Tenancy} InstanceTenancy
 */

DescribeReservedInstancesOfferingsRequest.prototype['InstanceTenancy'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

DescribeReservedInstancesOfferingsRequest.prototype['InstanceType'] = undefined;
/**
 * @member {Number} MaxDuration
 */

DescribeReservedInstancesOfferingsRequest.prototype['MaxDuration'] = undefined;
/**
 * @member {Number} MaxInstanceCount
 */

DescribeReservedInstancesOfferingsRequest.prototype['MaxInstanceCount'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeReservedInstancesOfferingsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {Number} MinDuration
 */

DescribeReservedInstancesOfferingsRequest.prototype['MinDuration'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeReservedInstancesOfferingsRequest.prototype['NextToken'] = undefined;
/**
 * @member {module:model/OfferingClassType} OfferingClass
 */

DescribeReservedInstancesOfferingsRequest.prototype['OfferingClass'] = undefined;
/**
 * @member {module:model/OfferingTypeValues} OfferingType
 */

DescribeReservedInstancesOfferingsRequest.prototype['OfferingType'] = undefined;
/**
 * @member {module:model/RIProductDescription} ProductDescription
 */

DescribeReservedInstancesOfferingsRequest.prototype['ProductDescription'] = undefined;
/**
 * @member {Array.<String>} ReservedInstancesOfferingIds
 */

DescribeReservedInstancesOfferingsRequest.prototype['ReservedInstancesOfferingIds'] = undefined;
var _default = DescribeReservedInstancesOfferingsRequest;
exports["default"] = _default;