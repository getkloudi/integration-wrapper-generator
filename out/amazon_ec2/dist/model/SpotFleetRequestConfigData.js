"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AllocationStrategy = _interopRequireDefault(require("./AllocationStrategy"));

var _ExcessCapacityTerminationPolicy = _interopRequireDefault(require("./ExcessCapacityTerminationPolicy"));

var _FleetType = _interopRequireDefault(require("./FleetType"));

var _InstanceInterruptionBehavior = _interopRequireDefault(require("./InstanceInterruptionBehavior"));

var _LaunchTemplateConfig = _interopRequireDefault(require("./LaunchTemplateConfig"));

var _LoadBalancersConfig = _interopRequireDefault(require("./LoadBalancersConfig"));

var _OnDemandAllocationStrategy = _interopRequireDefault(require("./OnDemandAllocationStrategy"));

var _SpotFleetLaunchSpecification = _interopRequireDefault(require("./SpotFleetLaunchSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotFleetRequestConfigData model module.
 * @module model/SpotFleetRequestConfigData
 * @version 1.0.0
 */
var SpotFleetRequestConfigData =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotFleetRequestConfigData</code>.
   * Describes the configuration of a Spot Fleet request.
   * @alias module:model/SpotFleetRequestConfigData
   * @param iamFleetRole {String} 
   * @param targetCapacity {Number} 
   */
  function SpotFleetRequestConfigData(iamFleetRole, targetCapacity) {
    _classCallCheck(this, SpotFleetRequestConfigData);

    SpotFleetRequestConfigData.initialize(this, iamFleetRole, targetCapacity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotFleetRequestConfigData, null, [{
    key: "initialize",
    value: function initialize(obj, iamFleetRole, targetCapacity) {
      obj['IamFleetRole'] = iamFleetRole;
      obj['TargetCapacity'] = targetCapacity;
    }
    /**
     * Constructs a <code>SpotFleetRequestConfigData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotFleetRequestConfigData} obj Optional instance to populate.
     * @return {module:model/SpotFleetRequestConfigData} The populated <code>SpotFleetRequestConfigData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotFleetRequestConfigData();

        if (data.hasOwnProperty('AllocationStrategy')) {
          obj['AllocationStrategy'] = _AllocationStrategy["default"].constructFromObject(data['AllocationStrategy']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
          obj['ExcessCapacityTerminationPolicy'] = _ExcessCapacityTerminationPolicy["default"].constructFromObject(data['ExcessCapacityTerminationPolicy']);
        }

        if (data.hasOwnProperty('FulfilledCapacity')) {
          obj['FulfilledCapacity'] = _ApiClient["default"].convertToType(data['FulfilledCapacity'], 'Number');
        }

        if (data.hasOwnProperty('IamFleetRole')) {
          obj['IamFleetRole'] = _ApiClient["default"].convertToType(data['IamFleetRole'], 'String');
        }

        if (data.hasOwnProperty('InstanceInterruptionBehavior')) {
          obj['InstanceInterruptionBehavior'] = _InstanceInterruptionBehavior["default"].constructFromObject(data['InstanceInterruptionBehavior']);
        }

        if (data.hasOwnProperty('InstancePoolsToUseCount')) {
          obj['InstancePoolsToUseCount'] = _ApiClient["default"].convertToType(data['InstancePoolsToUseCount'], 'Number');
        }

        if (data.hasOwnProperty('LaunchSpecifications')) {
          obj['LaunchSpecifications'] = _ApiClient["default"].convertToType(data['LaunchSpecifications'], [_SpotFleetLaunchSpecification["default"]]);
        }

        if (data.hasOwnProperty('LaunchTemplateConfigs')) {
          obj['LaunchTemplateConfigs'] = _ApiClient["default"].convertToType(data['LaunchTemplateConfigs'], [_LaunchTemplateConfig["default"]]);
        }

        if (data.hasOwnProperty('LoadBalancersConfig')) {
          obj['LoadBalancersConfig'] = _LoadBalancersConfig["default"].constructFromObject(data['LoadBalancersConfig']);
        }

        if (data.hasOwnProperty('OnDemandAllocationStrategy')) {
          obj['OnDemandAllocationStrategy'] = _OnDemandAllocationStrategy["default"].constructFromObject(data['OnDemandAllocationStrategy']);
        }

        if (data.hasOwnProperty('OnDemandFulfilledCapacity')) {
          obj['OnDemandFulfilledCapacity'] = _ApiClient["default"].convertToType(data['OnDemandFulfilledCapacity'], 'Number');
        }

        if (data.hasOwnProperty('OnDemandMaxTotalPrice')) {
          obj['OnDemandMaxTotalPrice'] = _ApiClient["default"].convertToType(data['OnDemandMaxTotalPrice'], 'String');
        }

        if (data.hasOwnProperty('OnDemandTargetCapacity')) {
          obj['OnDemandTargetCapacity'] = _ApiClient["default"].convertToType(data['OnDemandTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('ReplaceUnhealthyInstances')) {
          obj['ReplaceUnhealthyInstances'] = _ApiClient["default"].convertToType(data['ReplaceUnhealthyInstances'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotMaxTotalPrice')) {
          obj['SpotMaxTotalPrice'] = _ApiClient["default"].convertToType(data['SpotMaxTotalPrice'], 'String');
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
        }

        if (data.hasOwnProperty('TargetCapacity')) {
          obj['TargetCapacity'] = _ApiClient["default"].convertToType(data['TargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('TerminateInstancesWithExpiration')) {
          obj['TerminateInstancesWithExpiration'] = _ApiClient["default"].convertToType(data['TerminateInstancesWithExpiration'], 'Boolean');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _FleetType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('ValidFrom')) {
          obj['ValidFrom'] = _ApiClient["default"].convertToType(data['ValidFrom'], 'Date');
        }

        if (data.hasOwnProperty('ValidUntil')) {
          obj['ValidUntil'] = _ApiClient["default"].convertToType(data['ValidUntil'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return SpotFleetRequestConfigData;
}();
/**
 * @member {module:model/AllocationStrategy} AllocationStrategy
 */


SpotFleetRequestConfigData.prototype['AllocationStrategy'] = undefined;
/**
 * @member {String} ClientToken
 */

SpotFleetRequestConfigData.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/ExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */

SpotFleetRequestConfigData.prototype['ExcessCapacityTerminationPolicy'] = undefined;
/**
 * @member {Number} FulfilledCapacity
 */

SpotFleetRequestConfigData.prototype['FulfilledCapacity'] = undefined;
/**
 * @member {String} IamFleetRole
 */

SpotFleetRequestConfigData.prototype['IamFleetRole'] = undefined;
/**
 * @member {module:model/InstanceInterruptionBehavior} InstanceInterruptionBehavior
 */

SpotFleetRequestConfigData.prototype['InstanceInterruptionBehavior'] = undefined;
/**
 * @member {Number} InstancePoolsToUseCount
 */

SpotFleetRequestConfigData.prototype['InstancePoolsToUseCount'] = undefined;
/**
 * @member {Array.<module:model/SpotFleetLaunchSpecification>} LaunchSpecifications
 */

SpotFleetRequestConfigData.prototype['LaunchSpecifications'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateConfig>} LaunchTemplateConfigs
 */

SpotFleetRequestConfigData.prototype['LaunchTemplateConfigs'] = undefined;
/**
 * @member {module:model/LoadBalancersConfig} LoadBalancersConfig
 */

SpotFleetRequestConfigData.prototype['LoadBalancersConfig'] = undefined;
/**
 * @member {module:model/OnDemandAllocationStrategy} OnDemandAllocationStrategy
 */

SpotFleetRequestConfigData.prototype['OnDemandAllocationStrategy'] = undefined;
/**
 * @member {Number} OnDemandFulfilledCapacity
 */

SpotFleetRequestConfigData.prototype['OnDemandFulfilledCapacity'] = undefined;
/**
 * @member {String} OnDemandMaxTotalPrice
 */

SpotFleetRequestConfigData.prototype['OnDemandMaxTotalPrice'] = undefined;
/**
 * @member {Number} OnDemandTargetCapacity
 */

SpotFleetRequestConfigData.prototype['OnDemandTargetCapacity'] = undefined;
/**
 * @member {Boolean} ReplaceUnhealthyInstances
 */

SpotFleetRequestConfigData.prototype['ReplaceUnhealthyInstances'] = undefined;
/**
 * @member {String} SpotMaxTotalPrice
 */

SpotFleetRequestConfigData.prototype['SpotMaxTotalPrice'] = undefined;
/**
 * @member {String} SpotPrice
 */

SpotFleetRequestConfigData.prototype['SpotPrice'] = undefined;
/**
 * @member {Number} TargetCapacity
 */

SpotFleetRequestConfigData.prototype['TargetCapacity'] = undefined;
/**
 * @member {Boolean} TerminateInstancesWithExpiration
 */

SpotFleetRequestConfigData.prototype['TerminateInstancesWithExpiration'] = undefined;
/**
 * @member {module:model/FleetType} Type
 */

SpotFleetRequestConfigData.prototype['Type'] = undefined;
/**
 * @member {Date} ValidFrom
 */

SpotFleetRequestConfigData.prototype['ValidFrom'] = undefined;
/**
 * @member {Date} ValidUntil
 */

SpotFleetRequestConfigData.prototype['ValidUntil'] = undefined;
var _default = SpotFleetRequestConfigData;
exports["default"] = _default;