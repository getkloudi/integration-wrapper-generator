"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ArchitectureValues = _interopRequireDefault(require("./ArchitectureValues"));

var _CapacityReservationSpecificationResponse = _interopRequireDefault(require("./CapacityReservationSpecificationResponse"));

var _CpuOptions = _interopRequireDefault(require("./CpuOptions"));

var _DeviceType = _interopRequireDefault(require("./DeviceType"));

var _ElasticGpuAssociation = _interopRequireDefault(require("./ElasticGpuAssociation"));

var _ElasticInferenceAcceleratorAssociation = _interopRequireDefault(require("./ElasticInferenceAcceleratorAssociation"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _HibernationOptions = _interopRequireDefault(require("./HibernationOptions"));

var _HypervisorType = _interopRequireDefault(require("./HypervisorType"));

var _IamInstanceProfile = _interopRequireDefault(require("./IamInstanceProfile"));

var _InstanceBlockDeviceMapping = _interopRequireDefault(require("./InstanceBlockDeviceMapping"));

var _InstanceLifecycleType = _interopRequireDefault(require("./InstanceLifecycleType"));

var _InstanceMetadataOptionsResponse = _interopRequireDefault(require("./InstanceMetadataOptionsResponse"));

var _InstanceNetworkInterface = _interopRequireDefault(require("./InstanceNetworkInterface"));

var _InstanceState = _interopRequireDefault(require("./InstanceState"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LicenseConfiguration = _interopRequireDefault(require("./LicenseConfiguration"));

var _Monitoring = _interopRequireDefault(require("./Monitoring"));

var _Placement = _interopRequireDefault(require("./Placement"));

var _PlatformValues = _interopRequireDefault(require("./PlatformValues"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

var _StateReason = _interopRequireDefault(require("./StateReason"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VirtualizationType = _interopRequireDefault(require("./VirtualizationType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Instance model module.
 * @module model/Instance
 * @version 1.1.0
 */
var Instance =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Instance</code>.
   * Describes an instance.
   * @alias module:model/Instance
   */
  function Instance() {
    _classCallCheck(this, Instance);

    Instance.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Instance, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Instance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Instance} obj Optional instance to populate.
     * @return {module:model/Instance} The populated <code>Instance</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Instance();

        if (data.hasOwnProperty('AmiLaunchIndex')) {
          obj['AmiLaunchIndex'] = _ApiClient["default"].convertToType(data['AmiLaunchIndex'], 'Number');
        }

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ArchitectureValues["default"].constructFromObject(data['Architecture']);
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_InstanceBlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('CapacityReservationId')) {
          obj['CapacityReservationId'] = _ApiClient["default"].convertToType(data['CapacityReservationId'], 'String');
        }

        if (data.hasOwnProperty('CapacityReservationSpecification')) {
          obj['CapacityReservationSpecification'] = _CapacityReservationSpecificationResponse["default"].constructFromObject(data['CapacityReservationSpecification']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CpuOptions')) {
          obj['CpuOptions'] = _CpuOptions["default"].constructFromObject(data['CpuOptions']);
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('ElasticGpuAssociations')) {
          obj['ElasticGpuAssociations'] = _ApiClient["default"].convertToType(data['ElasticGpuAssociations'], [_ElasticGpuAssociation["default"]]);
        }

        if (data.hasOwnProperty('ElasticInferenceAcceleratorAssociations')) {
          obj['ElasticInferenceAcceleratorAssociations'] = _ApiClient["default"].convertToType(data['ElasticInferenceAcceleratorAssociations'], [_ElasticInferenceAcceleratorAssociation["default"]]);
        }

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _ApiClient["default"].convertToType(data['EnaSupport'], 'Boolean');
        }

        if (data.hasOwnProperty('HibernationOptions')) {
          obj['HibernationOptions'] = _HibernationOptions["default"].constructFromObject(data['HibernationOptions']);
        }

        if (data.hasOwnProperty('Hypervisor')) {
          obj['Hypervisor'] = _HypervisorType["default"].constructFromObject(data['Hypervisor']);
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfile["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceLifecycle')) {
          obj['InstanceLifecycle'] = _InstanceLifecycleType["default"].constructFromObject(data['InstanceLifecycle']);
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

        if (data.hasOwnProperty('LaunchTime')) {
          obj['LaunchTime'] = _ApiClient["default"].convertToType(data['LaunchTime'], 'Date');
        }

        if (data.hasOwnProperty('Licenses')) {
          obj['Licenses'] = _ApiClient["default"].convertToType(data['Licenses'], [_LicenseConfiguration["default"]]);
        }

        if (data.hasOwnProperty('MetadataOptions')) {
          obj['MetadataOptions'] = _InstanceMetadataOptionsResponse["default"].constructFromObject(data['MetadataOptions']);
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _Monitoring["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_InstanceNetworkInterface["default"]]);
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _Placement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _PlatformValues["default"].constructFromObject(data['Platform']);
        }

        if (data.hasOwnProperty('PrivateDnsName')) {
          obj['PrivateDnsName'] = _ApiClient["default"].convertToType(data['PrivateDnsName'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('PublicDnsName')) {
          obj['PublicDnsName'] = _ApiClient["default"].convertToType(data['PublicDnsName'], 'String');
        }

        if (data.hasOwnProperty('PublicIpAddress')) {
          obj['PublicIpAddress'] = _ApiClient["default"].convertToType(data['PublicIpAddress'], 'String');
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _ApiClient["default"].convertToType(data['RamdiskId'], 'String');
        }

        if (data.hasOwnProperty('RootDeviceName')) {
          obj['RootDeviceName'] = _ApiClient["default"].convertToType(data['RootDeviceName'], 'String');
        }

        if (data.hasOwnProperty('RootDeviceType')) {
          obj['RootDeviceType'] = _DeviceType["default"].constructFromObject(data['RootDeviceType']);
        }

        if (data.hasOwnProperty('SecurityGroups')) {
          obj['SecurityGroups'] = _ApiClient["default"].convertToType(data['SecurityGroups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _ApiClient["default"].convertToType(data['SourceDestCheck'], 'Boolean');
        }

        if (data.hasOwnProperty('SpotInstanceRequestId')) {
          obj['SpotInstanceRequestId'] = _ApiClient["default"].convertToType(data['SpotInstanceRequestId'], 'String');
        }

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _ApiClient["default"].convertToType(data['SriovNetSupport'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _InstanceState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StateReason')) {
          obj['StateReason'] = _StateReason["default"].constructFromObject(data['StateReason']);
        }

        if (data.hasOwnProperty('StateTransitionReason')) {
          obj['StateTransitionReason'] = _ApiClient["default"].convertToType(data['StateTransitionReason'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VirtualizationType')) {
          obj['VirtualizationType'] = _VirtualizationType["default"].constructFromObject(data['VirtualizationType']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Instance;
}();
/**
 * @member {Number} AmiLaunchIndex
 */


Instance.prototype['AmiLaunchIndex'] = undefined;
/**
 * @member {module:model/ArchitectureValues} Architecture
 */

Instance.prototype['Architecture'] = undefined;
/**
 * @member {Array.<module:model/InstanceBlockDeviceMapping>} BlockDeviceMappings
 */

Instance.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {String} CapacityReservationId
 */

Instance.prototype['CapacityReservationId'] = undefined;
/**
 * @member {module:model/CapacityReservationSpecificationResponse} CapacityReservationSpecification
 */

Instance.prototype['CapacityReservationSpecification'] = undefined;
/**
 * @member {String} ClientToken
 */

Instance.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/CpuOptions} CpuOptions
 */

Instance.prototype['CpuOptions'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

Instance.prototype['EbsOptimized'] = undefined;
/**
 * @member {Array.<module:model/ElasticGpuAssociation>} ElasticGpuAssociations
 */

Instance.prototype['ElasticGpuAssociations'] = undefined;
/**
 * @member {Array.<module:model/ElasticInferenceAcceleratorAssociation>} ElasticInferenceAcceleratorAssociations
 */

Instance.prototype['ElasticInferenceAcceleratorAssociations'] = undefined;
/**
 * @member {Boolean} EnaSupport
 */

Instance.prototype['EnaSupport'] = undefined;
/**
 * @member {module:model/HibernationOptions} HibernationOptions
 */

Instance.prototype['HibernationOptions'] = undefined;
/**
 * @member {module:model/HypervisorType} Hypervisor
 */

Instance.prototype['Hypervisor'] = undefined;
/**
 * @member {module:model/IamInstanceProfile} IamInstanceProfile
 */

Instance.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

Instance.prototype['ImageId'] = undefined;
/**
 * @member {String} InstanceId
 */

Instance.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/InstanceLifecycleType} InstanceLifecycle
 */

Instance.prototype['InstanceLifecycle'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

Instance.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

Instance.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

Instance.prototype['KeyName'] = undefined;
/**
 * @member {Date} LaunchTime
 */

Instance.prototype['LaunchTime'] = undefined;
/**
 * @member {Array.<module:model/LicenseConfiguration>} Licenses
 */

Instance.prototype['Licenses'] = undefined;
/**
 * @member {module:model/InstanceMetadataOptionsResponse} MetadataOptions
 */

Instance.prototype['MetadataOptions'] = undefined;
/**
 * @member {module:model/Monitoring} Monitoring
 */

Instance.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/InstanceNetworkInterface>} NetworkInterfaces
 */

Instance.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {String} OutpostArn
 */

Instance.prototype['OutpostArn'] = undefined;
/**
 * @member {module:model/Placement} Placement
 */

Instance.prototype['Placement'] = undefined;
/**
 * @member {module:model/PlatformValues} Platform
 */

Instance.prototype['Platform'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

Instance.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

Instance.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

Instance.prototype['ProductCodes'] = undefined;
/**
 * @member {String} PublicDnsName
 */

Instance.prototype['PublicDnsName'] = undefined;
/**
 * @member {String} PublicIpAddress
 */

Instance.prototype['PublicIpAddress'] = undefined;
/**
 * @member {String} RamdiskId
 */

Instance.prototype['RamdiskId'] = undefined;
/**
 * @member {String} RootDeviceName
 */

Instance.prototype['RootDeviceName'] = undefined;
/**
 * @member {module:model/DeviceType} RootDeviceType
 */

Instance.prototype['RootDeviceType'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} SecurityGroups
 */

Instance.prototype['SecurityGroups'] = undefined;
/**
 * @member {Boolean} SourceDestCheck
 */

Instance.prototype['SourceDestCheck'] = undefined;
/**
 * @member {String} SpotInstanceRequestId
 */

Instance.prototype['SpotInstanceRequestId'] = undefined;
/**
 * @member {String} SriovNetSupport
 */

Instance.prototype['SriovNetSupport'] = undefined;
/**
 * @member {module:model/InstanceState} State
 */

Instance.prototype['State'] = undefined;
/**
 * @member {module:model/StateReason} StateReason
 */

Instance.prototype['StateReason'] = undefined;
/**
 * @member {String} StateTransitionReason
 */

Instance.prototype['StateTransitionReason'] = undefined;
/**
 * @member {String} SubnetId
 */

Instance.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Instance.prototype['Tags'] = undefined;
/**
 * @member {module:model/VirtualizationType} VirtualizationType
 */

Instance.prototype['VirtualizationType'] = undefined;
/**
 * @member {String} VpcId
 */

Instance.prototype['VpcId'] = undefined;
var _default = Instance;
exports["default"] = _default;