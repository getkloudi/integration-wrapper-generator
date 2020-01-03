"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationOptions = _interopRequireDefault(require("./CapacityReservationOptions"));

var _FleetOnDemandAllocationStrategy = _interopRequireDefault(require("./FleetOnDemandAllocationStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OnDemandOptions model module.
 * @module model/OnDemandOptions
 * @version 1.0.0
 */
var OnDemandOptions =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>OnDemandOptions</code>.
   * Describes the configuration of On-Demand Instances in an EC2 Fleet.
   * @alias module:model/OnDemandOptions
   */
  function OnDemandOptions() {
    _classCallCheck(this, OnDemandOptions);

    OnDemandOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OnDemandOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OnDemandOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnDemandOptions} obj Optional instance to populate.
     * @return {module:model/OnDemandOptions} The populated <code>OnDemandOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnDemandOptions();

        if (data.hasOwnProperty('AllocationStrategy')) {
          obj['AllocationStrategy'] = _FleetOnDemandAllocationStrategy["default"].constructFromObject(data['AllocationStrategy']);
        }

        if (data.hasOwnProperty('CapacityReservationOptions')) {
          obj['CapacityReservationOptions'] = _CapacityReservationOptions["default"].constructFromObject(data['CapacityReservationOptions']);
        }

        if (data.hasOwnProperty('MaxTotalPrice')) {
          obj['MaxTotalPrice'] = _ApiClient["default"].convertToType(data['MaxTotalPrice'], 'String');
        }

        if (data.hasOwnProperty('MinTargetCapacity')) {
          obj['MinTargetCapacity'] = _ApiClient["default"].convertToType(data['MinTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('SingleAvailabilityZone')) {
          obj['SingleAvailabilityZone'] = _ApiClient["default"].convertToType(data['SingleAvailabilityZone'], 'Boolean');
        }

        if (data.hasOwnProperty('SingleInstanceType')) {
          obj['SingleInstanceType'] = _ApiClient["default"].convertToType(data['SingleInstanceType'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return OnDemandOptions;
}();
/**
 * @member {module:model/FleetOnDemandAllocationStrategy} AllocationStrategy
 */


OnDemandOptions.prototype['AllocationStrategy'] = undefined;
/**
 * @member {module:model/CapacityReservationOptions} CapacityReservationOptions
 */

OnDemandOptions.prototype['CapacityReservationOptions'] = undefined;
/**
 * @member {String} MaxTotalPrice
 */

OnDemandOptions.prototype['MaxTotalPrice'] = undefined;
/**
 * @member {Number} MinTargetCapacity
 */

OnDemandOptions.prototype['MinTargetCapacity'] = undefined;
/**
 * @member {Boolean} SingleAvailabilityZone
 */

OnDemandOptions.prototype['SingleAvailabilityZone'] = undefined;
/**
 * @member {Boolean} SingleInstanceType
 */

OnDemandOptions.prototype['SingleInstanceType'] = undefined;
var _default = OnDemandOptions;
exports["default"] = _default;