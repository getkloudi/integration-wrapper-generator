"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditSpecificationRequest = _interopRequireDefault(require("./CreditSpecificationRequest"));

var _ElasticGpuSpecification = _interopRequireDefault(require("./ElasticGpuSpecification"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LaunchTemplateBlockDeviceMappingRequest = _interopRequireDefault(require("./LaunchTemplateBlockDeviceMappingRequest"));

var _LaunchTemplateCapacityReservationSpecificationRequest = _interopRequireDefault(require("./LaunchTemplateCapacityReservationSpecificationRequest"));

var _LaunchTemplateCpuOptionsRequest = _interopRequireDefault(require("./LaunchTemplateCpuOptionsRequest"));

var _LaunchTemplateElasticInferenceAccelerator = _interopRequireDefault(require("./LaunchTemplateElasticInferenceAccelerator"));

var _LaunchTemplateHibernationOptionsRequest = _interopRequireDefault(require("./LaunchTemplateHibernationOptionsRequest"));

var _LaunchTemplateIamInstanceProfileSpecificationRequest = _interopRequireDefault(require("./LaunchTemplateIamInstanceProfileSpecificationRequest"));

var _LaunchTemplateInstanceMarketOptionsRequest = _interopRequireDefault(require("./LaunchTemplateInstanceMarketOptionsRequest"));

var _LaunchTemplateInstanceNetworkInterfaceSpecificationRequest = _interopRequireDefault(require("./LaunchTemplateInstanceNetworkInterfaceSpecificationRequest"));

var _LaunchTemplateLicenseConfigurationRequest = _interopRequireDefault(require("./LaunchTemplateLicenseConfigurationRequest"));

var _LaunchTemplatePlacementRequest = _interopRequireDefault(require("./LaunchTemplatePlacementRequest"));

var _LaunchTemplateTagSpecificationRequest = _interopRequireDefault(require("./LaunchTemplateTagSpecificationRequest"));

var _LaunchTemplatesMonitoringRequest = _interopRequireDefault(require("./LaunchTemplatesMonitoringRequest"));

var _ShutdownBehavior = _interopRequireDefault(require("./ShutdownBehavior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestLaunchTemplateData model module.
 * @module model/RequestLaunchTemplateData
 * @version 1.1.0
 */
var RequestLaunchTemplateData =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RequestLaunchTemplateData</code>.
   * The information to include in the launch template.
   * @alias module:model/RequestLaunchTemplateData
   */
  function RequestLaunchTemplateData() {
    _classCallCheck(this, RequestLaunchTemplateData);

    RequestLaunchTemplateData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestLaunchTemplateData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestLaunchTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestLaunchTemplateData} obj Optional instance to populate.
     * @return {module:model/RequestLaunchTemplateData} The populated <code>RequestLaunchTemplateData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestLaunchTemplateData();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_LaunchTemplateBlockDeviceMappingRequest["default"]]);
        }

        if (data.hasOwnProperty('CapacityReservationSpecification')) {
          obj['CapacityReservationSpecification'] = _LaunchTemplateCapacityReservationSpecificationRequest["default"].constructFromObject(data['CapacityReservationSpecification']);
        }

        if (data.hasOwnProperty('CpuOptions')) {
          obj['CpuOptions'] = _LaunchTemplateCpuOptionsRequest["default"].constructFromObject(data['CpuOptions']);
        }

        if (data.hasOwnProperty('CreditSpecification')) {
          obj['CreditSpecification'] = _CreditSpecificationRequest["default"].constructFromObject(data['CreditSpecification']);
        }

        if (data.hasOwnProperty('DisableApiTermination')) {
          obj['DisableApiTermination'] = _ApiClient["default"].convertToType(data['DisableApiTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('ElasticGpuSpecifications')) {
          obj['ElasticGpuSpecifications'] = _ApiClient["default"].convertToType(data['ElasticGpuSpecifications'], [_ElasticGpuSpecification["default"]]);
        }

        if (data.hasOwnProperty('ElasticInferenceAccelerators')) {
          obj['ElasticInferenceAccelerators'] = _ApiClient["default"].convertToType(data['ElasticInferenceAccelerators'], [_LaunchTemplateElasticInferenceAccelerator["default"]]);
        }

        if (data.hasOwnProperty('HibernationOptions')) {
          obj['HibernationOptions'] = _LaunchTemplateHibernationOptionsRequest["default"].constructFromObject(data['HibernationOptions']);
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _LaunchTemplateIamInstanceProfileSpecificationRequest["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceInitiatedShutdownBehavior')) {
          obj['InstanceInitiatedShutdownBehavior'] = _ShutdownBehavior["default"].constructFromObject(data['InstanceInitiatedShutdownBehavior']);
        }

        if (data.hasOwnProperty('InstanceMarketOptions')) {
          obj['InstanceMarketOptions'] = _LaunchTemplateInstanceMarketOptionsRequest["default"].constructFromObject(data['InstanceMarketOptions']);
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

        if (data.hasOwnProperty('LicenseSpecifications')) {
          obj['LicenseSpecifications'] = _ApiClient["default"].convertToType(data['LicenseSpecifications'], [_LaunchTemplateLicenseConfigurationRequest["default"]]);
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _LaunchTemplatesMonitoringRequest["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_LaunchTemplateInstanceNetworkInterfaceSpecificationRequest["default"]]);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _LaunchTemplatePlacementRequest["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('RamDiskId')) {
          obj['RamDiskId'] = _ApiClient["default"].convertToType(data['RamDiskId'], 'String');
        }

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('SecurityGroups')) {
          obj['SecurityGroups'] = _ApiClient["default"].convertToType(data['SecurityGroups'], ['String']);
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_LaunchTemplateTagSpecificationRequest["default"]]);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _ApiClient["default"].convertToType(data['UserData'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestLaunchTemplateData;
}();
/**
 * @member {Array.<module:model/LaunchTemplateBlockDeviceMappingRequest>} BlockDeviceMappings
 */


RequestLaunchTemplateData.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/LaunchTemplateCapacityReservationSpecificationRequest} CapacityReservationSpecification
 */

RequestLaunchTemplateData.prototype['CapacityReservationSpecification'] = undefined;
/**
 * @member {module:model/LaunchTemplateCpuOptionsRequest} CpuOptions
 */

RequestLaunchTemplateData.prototype['CpuOptions'] = undefined;
/**
 * @member {module:model/CreditSpecificationRequest} CreditSpecification
 */

RequestLaunchTemplateData.prototype['CreditSpecification'] = undefined;
/**
 * @member {Boolean} DisableApiTermination
 */

RequestLaunchTemplateData.prototype['DisableApiTermination'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

RequestLaunchTemplateData.prototype['EbsOptimized'] = undefined;
/**
 * @member {Array.<module:model/ElasticGpuSpecification>} ElasticGpuSpecifications
 */

RequestLaunchTemplateData.prototype['ElasticGpuSpecifications'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateElasticInferenceAccelerator>} ElasticInferenceAccelerators
 */

RequestLaunchTemplateData.prototype['ElasticInferenceAccelerators'] = undefined;
/**
 * @member {module:model/LaunchTemplateHibernationOptionsRequest} HibernationOptions
 */

RequestLaunchTemplateData.prototype['HibernationOptions'] = undefined;
/**
 * @member {module:model/LaunchTemplateIamInstanceProfileSpecificationRequest} IamInstanceProfile
 */

RequestLaunchTemplateData.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

RequestLaunchTemplateData.prototype['ImageId'] = undefined;
/**
 * @member {module:model/ShutdownBehavior} InstanceInitiatedShutdownBehavior
 */

RequestLaunchTemplateData.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/LaunchTemplateInstanceMarketOptionsRequest} InstanceMarketOptions
 */

RequestLaunchTemplateData.prototype['InstanceMarketOptions'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

RequestLaunchTemplateData.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

RequestLaunchTemplateData.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

RequestLaunchTemplateData.prototype['KeyName'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateLicenseConfigurationRequest>} LicenseSpecifications
 */

RequestLaunchTemplateData.prototype['LicenseSpecifications'] = undefined;
/**
 * @member {module:model/LaunchTemplatesMonitoringRequest} Monitoring
 */

RequestLaunchTemplateData.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest>} NetworkInterfaces
 */

RequestLaunchTemplateData.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/LaunchTemplatePlacementRequest} Placement
 */

RequestLaunchTemplateData.prototype['Placement'] = undefined;
/**
 * @member {String} RamDiskId
 */

RequestLaunchTemplateData.prototype['RamDiskId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

RequestLaunchTemplateData.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} SecurityGroups
 */

RequestLaunchTemplateData.prototype['SecurityGroups'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateTagSpecificationRequest>} TagSpecifications
 */

RequestLaunchTemplateData.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} UserData
 */

RequestLaunchTemplateData.prototype['UserData'] = undefined;
var _default = RequestLaunchTemplateData;
exports["default"] = _default;