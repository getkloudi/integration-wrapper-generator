"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

var _CapacityReservationSpecification = _interopRequireDefault(require("./CapacityReservationSpecification"));

var _CpuOptionsRequest = _interopRequireDefault(require("./CpuOptionsRequest"));

var _CreditSpecificationRequest = _interopRequireDefault(require("./CreditSpecificationRequest"));

var _ElasticGpuSpecification = _interopRequireDefault(require("./ElasticGpuSpecification"));

var _ElasticInferenceAccelerator = _interopRequireDefault(require("./ElasticInferenceAccelerator"));

var _HibernationOptionsRequest = _interopRequireDefault(require("./HibernationOptionsRequest"));

var _IamInstanceProfileSpecification = _interopRequireDefault(require("./IamInstanceProfileSpecification"));

var _InstanceIpv6Address = _interopRequireDefault(require("./InstanceIpv6Address"));

var _InstanceMarketOptionsRequest = _interopRequireDefault(require("./InstanceMarketOptionsRequest"));

var _InstanceMetadataOptionsRequest = _interopRequireDefault(require("./InstanceMetadataOptionsRequest"));

var _InstanceNetworkInterfaceSpecification = _interopRequireDefault(require("./InstanceNetworkInterfaceSpecification"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LaunchTemplateSpecification = _interopRequireDefault(require("./LaunchTemplateSpecification"));

var _LicenseConfigurationRequest = _interopRequireDefault(require("./LicenseConfigurationRequest"));

var _Placement = _interopRequireDefault(require("./Placement"));

var _RunInstancesMonitoringEnabled = _interopRequireDefault(require("./RunInstancesMonitoringEnabled"));

var _ShutdownBehavior = _interopRequireDefault(require("./ShutdownBehavior"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RunInstancesRequest model module.
 * @module model/RunInstancesRequest
 * @version 1.1.0
 */
var RunInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RunInstancesRequest</code>.
   * @alias module:model/RunInstancesRequest
   * @param maxCount {Number} 
   * @param minCount {Number} 
   */
  function RunInstancesRequest(maxCount, minCount) {
    _classCallCheck(this, RunInstancesRequest);

    RunInstancesRequest.initialize(this, maxCount, minCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RunInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, maxCount, minCount) {
      obj['MaxCount'] = maxCount;
      obj['MinCount'] = minCount;
    }
    /**
     * Constructs a <code>RunInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RunInstancesRequest} obj Optional instance to populate.
     * @return {module:model/RunInstancesRequest} The populated <code>RunInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RunInstancesRequest();

        if (data.hasOwnProperty('AdditionalInfo')) {
          obj['AdditionalInfo'] = _ApiClient["default"].convertToType(data['AdditionalInfo'], 'String');
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('CapacityReservationSpecification')) {
          obj['CapacityReservationSpecification'] = _CapacityReservationSpecification["default"].constructFromObject(data['CapacityReservationSpecification']);
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('CpuOptions')) {
          obj['CpuOptions'] = _CpuOptionsRequest["default"].constructFromObject(data['CpuOptions']);
        }

        if (data.hasOwnProperty('CreditSpecification')) {
          obj['CreditSpecification'] = _CreditSpecificationRequest["default"].constructFromObject(data['CreditSpecification']);
        }

        if (data.hasOwnProperty('DisableApiTermination')) {
          obj['DisableApiTermination'] = _ApiClient["default"].convertToType(data['DisableApiTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('ElasticGpuSpecification')) {
          obj['ElasticGpuSpecification'] = _ApiClient["default"].convertToType(data['ElasticGpuSpecification'], [_ElasticGpuSpecification["default"]]);
        }

        if (data.hasOwnProperty('ElasticInferenceAccelerators')) {
          obj['ElasticInferenceAccelerators'] = _ApiClient["default"].convertToType(data['ElasticInferenceAccelerators'], [_ElasticInferenceAccelerator["default"]]);
        }

        if (data.hasOwnProperty('HibernationOptions')) {
          obj['HibernationOptions'] = _HibernationOptionsRequest["default"].constructFromObject(data['HibernationOptions']);
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _IamInstanceProfileSpecification["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceInitiatedShutdownBehavior')) {
          obj['InstanceInitiatedShutdownBehavior'] = _ShutdownBehavior["default"].constructFromObject(data['InstanceInitiatedShutdownBehavior']);
        }

        if (data.hasOwnProperty('InstanceMarketOptions')) {
          obj['InstanceMarketOptions'] = _InstanceMarketOptionsRequest["default"].constructFromObject(data['InstanceMarketOptions']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Ipv6AddressCount')) {
          obj['Ipv6AddressCount'] = _ApiClient["default"].convertToType(data['Ipv6AddressCount'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_InstanceIpv6Address["default"]]);
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _ApiClient["default"].convertToType(data['KernelId'], 'String');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }

        if (data.hasOwnProperty('LaunchTemplate')) {
          obj['LaunchTemplate'] = _LaunchTemplateSpecification["default"].constructFromObject(data['LaunchTemplate']);
        }

        if (data.hasOwnProperty('LicenseSpecifications')) {
          obj['LicenseSpecifications'] = _ApiClient["default"].convertToType(data['LicenseSpecifications'], [_LicenseConfigurationRequest["default"]]);
        }

        if (data.hasOwnProperty('MaxCount')) {
          obj['MaxCount'] = _ApiClient["default"].convertToType(data['MaxCount'], 'Number');
        }

        if (data.hasOwnProperty('MetadataOptions')) {
          obj['MetadataOptions'] = _InstanceMetadataOptionsRequest["default"].constructFromObject(data['MetadataOptions']);
        }

        if (data.hasOwnProperty('MinCount')) {
          obj['MinCount'] = _ApiClient["default"].convertToType(data['MinCount'], 'Number');
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _RunInstancesMonitoringEnabled["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_InstanceNetworkInterfaceSpecification["default"]]);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _Placement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
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

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _ApiClient["default"].convertToType(data['UserData'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RunInstancesRequest;
}();
/**
 * @member {String} AdditionalInfo
 */


RunInstancesRequest.prototype['AdditionalInfo'] = undefined;
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */

RunInstancesRequest.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/CapacityReservationSpecification} CapacityReservationSpecification
 */

RunInstancesRequest.prototype['CapacityReservationSpecification'] = undefined;
/**
 * @member {String} ClientToken
 */

RunInstancesRequest.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/CpuOptionsRequest} CpuOptions
 */

RunInstancesRequest.prototype['CpuOptions'] = undefined;
/**
 * @member {module:model/CreditSpecificationRequest} CreditSpecification
 */

RunInstancesRequest.prototype['CreditSpecification'] = undefined;
/**
 * @member {Boolean} DisableApiTermination
 */

RunInstancesRequest.prototype['DisableApiTermination'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RunInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

RunInstancesRequest.prototype['EbsOptimized'] = undefined;
/**
 * @member {Array.<module:model/ElasticGpuSpecification>} ElasticGpuSpecification
 */

RunInstancesRequest.prototype['ElasticGpuSpecification'] = undefined;
/**
 * @member {Array.<module:model/ElasticInferenceAccelerator>} ElasticInferenceAccelerators
 */

RunInstancesRequest.prototype['ElasticInferenceAccelerators'] = undefined;
/**
 * @member {module:model/HibernationOptionsRequest} HibernationOptions
 */

RunInstancesRequest.prototype['HibernationOptions'] = undefined;
/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */

RunInstancesRequest.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

RunInstancesRequest.prototype['ImageId'] = undefined;
/**
 * @member {module:model/ShutdownBehavior} InstanceInitiatedShutdownBehavior
 */

RunInstancesRequest.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/InstanceMarketOptionsRequest} InstanceMarketOptions
 */

RunInstancesRequest.prototype['InstanceMarketOptions'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

RunInstancesRequest.prototype['InstanceType'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

RunInstancesRequest.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6Address>} Ipv6Addresses
 */

RunInstancesRequest.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} KernelId
 */

RunInstancesRequest.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

RunInstancesRequest.prototype['KeyName'] = undefined;
/**
 * @member {module:model/LaunchTemplateSpecification} LaunchTemplate
 */

RunInstancesRequest.prototype['LaunchTemplate'] = undefined;
/**
 * @member {Array.<module:model/LicenseConfigurationRequest>} LicenseSpecifications
 */

RunInstancesRequest.prototype['LicenseSpecifications'] = undefined;
/**
 * @member {Number} MaxCount
 */

RunInstancesRequest.prototype['MaxCount'] = undefined;
/**
 * @member {module:model/InstanceMetadataOptionsRequest} MetadataOptions
 */

RunInstancesRequest.prototype['MetadataOptions'] = undefined;
/**
 * @member {Number} MinCount
 */

RunInstancesRequest.prototype['MinCount'] = undefined;
/**
 * @member {module:model/RunInstancesMonitoringEnabled} Monitoring
 */

RunInstancesRequest.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/InstanceNetworkInterfaceSpecification>} NetworkInterfaces
 */

RunInstancesRequest.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/Placement} Placement
 */

RunInstancesRequest.prototype['Placement'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

RunInstancesRequest.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {String} RamdiskId
 */

RunInstancesRequest.prototype['RamdiskId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

RunInstancesRequest.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} SecurityGroups
 */

RunInstancesRequest.prototype['SecurityGroups'] = undefined;
/**
 * @member {String} SubnetId
 */

RunInstancesRequest.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

RunInstancesRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} UserData
 */

RunInstancesRequest.prototype['UserData'] = undefined;
var _default = RunInstancesRequest;
exports["default"] = _default;