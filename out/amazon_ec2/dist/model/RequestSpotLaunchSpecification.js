"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

var _IamInstanceProfileSpecification = _interopRequireDefault(require("./IamInstanceProfileSpecification"));

var _InstanceNetworkInterfaceSpecification = _interopRequireDefault(require("./InstanceNetworkInterfaceSpecification"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _RunInstancesMonitoringEnabled = _interopRequireDefault(require("./RunInstancesMonitoringEnabled"));

var _SpotPlacement = _interopRequireDefault(require("./SpotPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestSpotLaunchSpecification model module.
 * @module model/RequestSpotLaunchSpecification
 * @version 1.1.0
 */
var RequestSpotLaunchSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RequestSpotLaunchSpecification</code>.
   * Describes the launch specification for an instance.
   * @alias module:model/RequestSpotLaunchSpecification
   */
  function RequestSpotLaunchSpecification() {
    _classCallCheck(this, RequestSpotLaunchSpecification);

    RequestSpotLaunchSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestSpotLaunchSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestSpotLaunchSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestSpotLaunchSpecification} obj Optional instance to populate.
     * @return {module:model/RequestSpotLaunchSpecification} The populated <code>RequestSpotLaunchSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestSpotLaunchSpecification();

        if (data.hasOwnProperty('AddressingType')) {
          obj['AddressingType'] = _ApiClient["default"].convertToType(data['AddressingType'], 'String');
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfileSpecification["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _ApiClient["default"].convertToType(data['KernelId'], 'String');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _RunInstancesMonitoringEnabled["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_InstanceNetworkInterfaceSpecification["default"]]);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _SpotPlacement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _ApiClient["default"].convertToType(data['RamdiskId'], 'String');
        }

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('SecurityGroups')) {
          obj['SecurityGroups'] = _ApiClient["default"].convertToType(data['SecurityGroups'], ['String']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _ApiClient["default"].convertToType(data['UserData'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestSpotLaunchSpecification;
}();
/**
 * @member {String} AddressingType
 */


RequestSpotLaunchSpecification.prototype['AddressingType'] = undefined;
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */

RequestSpotLaunchSpecification.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

RequestSpotLaunchSpecification.prototype['EbsOptimized'] = undefined;
/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */

RequestSpotLaunchSpecification.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

RequestSpotLaunchSpecification.prototype['ImageId'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

RequestSpotLaunchSpecification.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

RequestSpotLaunchSpecification.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

RequestSpotLaunchSpecification.prototype['KeyName'] = undefined;
/**
 * @member {module:model/RunInstancesMonitoringEnabled} Monitoring
 */

RequestSpotLaunchSpecification.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/InstanceNetworkInterfaceSpecification>} NetworkInterfaces
 */

RequestSpotLaunchSpecification.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/SpotPlacement} Placement
 */

RequestSpotLaunchSpecification.prototype['Placement'] = undefined;
/**
 * @member {String} RamdiskId
 */

RequestSpotLaunchSpecification.prototype['RamdiskId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

RequestSpotLaunchSpecification.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} SecurityGroups
 */

RequestSpotLaunchSpecification.prototype['SecurityGroups'] = undefined;
/**
 * @member {String} SubnetId
 */

RequestSpotLaunchSpecification.prototype['SubnetId'] = undefined;
/**
 * @member {String} UserData
 */

RequestSpotLaunchSpecification.prototype['UserData'] = undefined;
var _default = RequestSpotLaunchSpecification;
exports["default"] = _default;