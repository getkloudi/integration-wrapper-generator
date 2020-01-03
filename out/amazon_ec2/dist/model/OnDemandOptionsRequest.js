"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationOptionsRequest = _interopRequireDefault(require("./CapacityReservationOptionsRequest"));

var _FleetOnDemandAllocationStrategy = _interopRequireDefault(require("./FleetOnDemandAllocationStrategy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The OnDemandOptionsRequest model module.
 * @module model/OnDemandOptionsRequest
 * @version 1.0.0
 */
var OnDemandOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>OnDemandOptionsRequest</code>.
   * Describes the configuration of On-Demand Instances in an EC2 Fleet.
   * @alias module:model/OnDemandOptionsRequest
   */
  function OnDemandOptionsRequest() {
    _classCallCheck(this, OnDemandOptionsRequest);

    OnDemandOptionsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(OnDemandOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>OnDemandOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OnDemandOptionsRequest} obj Optional instance to populate.
     * @return {module:model/OnDemandOptionsRequest} The populated <code>OnDemandOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnDemandOptionsRequest();

        if (data.hasOwnProperty('AllocationStrategy')) {
          obj['AllocationStrategy'] = _FleetOnDemandAllocationStrategy["default"].constructFromObject(data['AllocationStrategy']);
        }

        if (data.hasOwnProperty('CapacityReservationOptions')) {
          obj['CapacityReservationOptions'] = _CapacityReservationOptionsRequest["default"].constructFromObject(data['CapacityReservationOptions']);
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

  return OnDemandOptionsRequest;
}();
/**
 * @member {module:model/FleetOnDemandAllocationStrategy} AllocationStrategy
 */


OnDemandOptionsRequest.prototype['AllocationStrategy'] = undefined;
/**
 * @member {module:model/CapacityReservationOptionsRequest} CapacityReservationOptions
 */

OnDemandOptionsRequest.prototype['CapacityReservationOptions'] = undefined;
/**
 * @member {String} MaxTotalPrice
 */

OnDemandOptionsRequest.prototype['MaxTotalPrice'] = undefined;
/**
 * @member {Number} MinTargetCapacity
 */

OnDemandOptionsRequest.prototype['MinTargetCapacity'] = undefined;
/**
 * @member {Boolean} SingleAvailabilityZone
 */

OnDemandOptionsRequest.prototype['SingleAvailabilityZone'] = undefined;
/**
 * @member {Boolean} SingleInstanceType
 */

OnDemandOptionsRequest.prototype['SingleInstanceType'] = undefined;
var _default = OnDemandOptionsRequest;
exports["default"] = _default;