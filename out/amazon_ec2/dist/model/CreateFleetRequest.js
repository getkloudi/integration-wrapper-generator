"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetExcessCapacityTerminationPolicy = _interopRequireDefault(require("./FleetExcessCapacityTerminationPolicy"));

var _FleetLaunchTemplateConfigRequest = _interopRequireDefault(require("./FleetLaunchTemplateConfigRequest"));

var _FleetType = _interopRequireDefault(require("./FleetType"));

var _OnDemandOptionsRequest = _interopRequireDefault(require("./OnDemandOptionsRequest"));

var _SpotOptionsRequest = _interopRequireDefault(require("./SpotOptionsRequest"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

var _TargetCapacitySpecificationRequest = _interopRequireDefault(require("./TargetCapacitySpecificationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateFleetRequest model module.
 * @module model/CreateFleetRequest
 * @version 1.0.0
 */
var CreateFleetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateFleetRequest</code>.
   * @alias module:model/CreateFleetRequest
   * @param launchTemplateConfigs {Array.<module:model/FleetLaunchTemplateConfigRequest>} 
   * @param targetCapacitySpecification {module:model/TargetCapacitySpecificationRequest} 
   */
  function CreateFleetRequest(launchTemplateConfigs, targetCapacitySpecification) {
    _classCallCheck(this, CreateFleetRequest);

    CreateFleetRequest.initialize(this, launchTemplateConfigs, targetCapacitySpecification);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFleetRequest, null, [{
    key: "initialize",
    value: function initialize(obj, launchTemplateConfigs, targetCapacitySpecification) {
      obj['LaunchTemplateConfigs'] = launchTemplateConfigs;
      obj['TargetCapacitySpecification'] = targetCapacitySpecification;
    }
    /**
     * Constructs a <code>CreateFleetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFleetRequest} obj Optional instance to populate.
     * @return {module:model/CreateFleetRequest} The populated <code>CreateFleetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFleetRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
          obj['ExcessCapacityTerminationPolicy'] = _FleetExcessCapacityTerminationPolicy["default"].constructFromObject(data['ExcessCapacityTerminationPolicy']);
        }

        if (data.hasOwnProperty('LaunchTemplateConfigs')) {
          obj['LaunchTemplateConfigs'] = _ApiClient["default"].convertToType(data['LaunchTemplateConfigs'], [_FleetLaunchTemplateConfigRequest["default"]]);
        }

        if (data.hasOwnProperty('OnDemandOptions')) {
          obj['OnDemandOptions'] = _OnDemandOptionsRequest["default"].constructFromObject(data['OnDemandOptions']);
        }

        if (data.hasOwnProperty('ReplaceUnhealthyInstances')) {
          obj['ReplaceUnhealthyInstances'] = _ApiClient["default"].convertToType(data['ReplaceUnhealthyInstances'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotOptions')) {
          obj['SpotOptions'] = _SpotOptionsRequest["default"].constructFromObject(data['SpotOptions']);
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('TargetCapacitySpecification')) {
          obj['TargetCapacitySpecification'] = _TargetCapacitySpecificationRequest["default"].constructFromObject(data['TargetCapacitySpecification']);
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

  return CreateFleetRequest;
}();
/**
 * @member {String} ClientToken
 */


CreateFleetRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateFleetRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/FleetExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */

CreateFleetRequest.prototype['ExcessCapacityTerminationPolicy'] = undefined;
/**
 * @member {Array.<module:model/FleetLaunchTemplateConfigRequest>} LaunchTemplateConfigs
 */

CreateFleetRequest.prototype['LaunchTemplateConfigs'] = undefined;
/**
 * @member {module:model/OnDemandOptionsRequest} OnDemandOptions
 */

CreateFleetRequest.prototype['OnDemandOptions'] = undefined;
/**
 * @member {Boolean} ReplaceUnhealthyInstances
 */

CreateFleetRequest.prototype['ReplaceUnhealthyInstances'] = undefined;
/**
 * @member {module:model/SpotOptionsRequest} SpotOptions
 */

CreateFleetRequest.prototype['SpotOptions'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateFleetRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {module:model/TargetCapacitySpecificationRequest} TargetCapacitySpecification
 */

CreateFleetRequest.prototype['TargetCapacitySpecification'] = undefined;
/**
 * @member {Boolean} TerminateInstancesWithExpiration
 */

CreateFleetRequest.prototype['TerminateInstancesWithExpiration'] = undefined;
/**
 * @member {module:model/FleetType} Type
 */

CreateFleetRequest.prototype['Type'] = undefined;
/**
 * @member {Date} ValidFrom
 */

CreateFleetRequest.prototype['ValidFrom'] = undefined;
/**
 * @member {Date} ValidUntil
 */

CreateFleetRequest.prototype['ValidUntil'] = undefined;
var _default = CreateFleetRequest;
exports["default"] = _default;