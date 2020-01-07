"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DescribeFleetError = _interopRequireDefault(require("./DescribeFleetError"));

var _DescribeFleetsInstances = _interopRequireDefault(require("./DescribeFleetsInstances"));

var _FleetActivityStatus = _interopRequireDefault(require("./FleetActivityStatus"));

var _FleetExcessCapacityTerminationPolicy = _interopRequireDefault(require("./FleetExcessCapacityTerminationPolicy"));

var _FleetLaunchTemplateConfig = _interopRequireDefault(require("./FleetLaunchTemplateConfig"));

var _FleetStateCode = _interopRequireDefault(require("./FleetStateCode"));

var _FleetType = _interopRequireDefault(require("./FleetType"));

var _OnDemandOptions = _interopRequireDefault(require("./OnDemandOptions"));

var _SpotOptions = _interopRequireDefault(require("./SpotOptions"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TargetCapacitySpecification = _interopRequireDefault(require("./TargetCapacitySpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FleetData model module.
 * @module model/FleetData
 * @version 1.1.0
 */
var FleetData =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FleetData</code>.
   * Describes an EC2 Fleet.
   * @alias module:model/FleetData
   */
  function FleetData() {
    _classCallCheck(this, FleetData);

    FleetData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FleetData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FleetData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FleetData} obj Optional instance to populate.
     * @return {module:model/FleetData} The populated <code>FleetData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FleetData();

        if (data.hasOwnProperty('ActivityStatus')) {
          obj['ActivityStatus'] = _FleetActivityStatus["default"].constructFromObject(data['ActivityStatus']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('Errors')) {
          obj['Errors'] = _ApiClient["default"].convertToType(data['Errors'], [_DescribeFleetError["default"]]);
        }

        if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
          obj['ExcessCapacityTerminationPolicy'] = _FleetExcessCapacityTerminationPolicy["default"].constructFromObject(data['ExcessCapacityTerminationPolicy']);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }

        if (data.hasOwnProperty('FleetState')) {
          obj['FleetState'] = _FleetStateCode["default"].constructFromObject(data['FleetState']);
        }

        if (data.hasOwnProperty('FulfilledCapacity')) {
          obj['FulfilledCapacity'] = _ApiClient["default"].convertToType(data['FulfilledCapacity'], 'Number');
        }

        if (data.hasOwnProperty('FulfilledOnDemandCapacity')) {
          obj['FulfilledOnDemandCapacity'] = _ApiClient["default"].convertToType(data['FulfilledOnDemandCapacity'], 'Number');
        }

        if (data.hasOwnProperty('Instances')) {
          obj['Instances'] = _ApiClient["default"].convertToType(data['Instances'], [_DescribeFleetsInstances["default"]]);
        }

        if (data.hasOwnProperty('LaunchTemplateConfigs')) {
          obj['LaunchTemplateConfigs'] = _ApiClient["default"].convertToType(data['LaunchTemplateConfigs'], [_FleetLaunchTemplateConfig["default"]]);
        }

        if (data.hasOwnProperty('OnDemandOptions')) {
          obj['OnDemandOptions'] = _OnDemandOptions["default"].constructFromObject(data['OnDemandOptions']);
        }

        if (data.hasOwnProperty('ReplaceUnhealthyInstances')) {
          obj['ReplaceUnhealthyInstances'] = _ApiClient["default"].convertToType(data['ReplaceUnhealthyInstances'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotOptions')) {
          obj['SpotOptions'] = _SpotOptions["default"].constructFromObject(data['SpotOptions']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TargetCapacitySpecification')) {
          obj['TargetCapacitySpecification'] = _TargetCapacitySpecification["default"].constructFromObject(data['TargetCapacitySpecification']);
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

  return FleetData;
}();
/**
 * @member {module:model/FleetActivityStatus} ActivityStatus
 */


FleetData.prototype['ActivityStatus'] = undefined;
/**
 * @member {String} ClientToken
 */

FleetData.prototype['ClientToken'] = undefined;
/**
 * @member {Date} CreateTime
 */

FleetData.prototype['CreateTime'] = undefined;
/**
 * @member {Array.<module:model/DescribeFleetError>} Errors
 */

FleetData.prototype['Errors'] = undefined;
/**
 * @member {module:model/FleetExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */

FleetData.prototype['ExcessCapacityTerminationPolicy'] = undefined;
/**
 * @member {String} FleetId
 */

FleetData.prototype['FleetId'] = undefined;
/**
 * @member {module:model/FleetStateCode} FleetState
 */

FleetData.prototype['FleetState'] = undefined;
/**
 * @member {Number} FulfilledCapacity
 */

FleetData.prototype['FulfilledCapacity'] = undefined;
/**
 * @member {Number} FulfilledOnDemandCapacity
 */

FleetData.prototype['FulfilledOnDemandCapacity'] = undefined;
/**
 * @member {Array.<module:model/DescribeFleetsInstances>} Instances
 */

FleetData.prototype['Instances'] = undefined;
/**
 * @member {Array.<module:model/FleetLaunchTemplateConfig>} LaunchTemplateConfigs
 */

FleetData.prototype['LaunchTemplateConfigs'] = undefined;
/**
 * @member {module:model/OnDemandOptions} OnDemandOptions
 */

FleetData.prototype['OnDemandOptions'] = undefined;
/**
 * @member {Boolean} ReplaceUnhealthyInstances
 */

FleetData.prototype['ReplaceUnhealthyInstances'] = undefined;
/**
 * @member {module:model/SpotOptions} SpotOptions
 */

FleetData.prototype['SpotOptions'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

FleetData.prototype['Tags'] = undefined;
/**
 * @member {module:model/TargetCapacitySpecification} TargetCapacitySpecification
 */

FleetData.prototype['TargetCapacitySpecification'] = undefined;
/**
 * @member {Boolean} TerminateInstancesWithExpiration
 */

FleetData.prototype['TerminateInstancesWithExpiration'] = undefined;
/**
 * @member {module:model/FleetType} Type
 */

FleetData.prototype['Type'] = undefined;
/**
 * @member {Date} ValidFrom
 */

FleetData.prototype['ValidFrom'] = undefined;
/**
 * @member {Date} ValidUntil
 */

FleetData.prototype['ValidUntil'] = undefined;
var _default = FleetData;
exports["default"] = _default;