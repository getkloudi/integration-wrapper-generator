"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CreditSpecification = _interopRequireDefault(require("./CreditSpecification"));

var _ElasticGpuSpecificationResponse = _interopRequireDefault(require("./ElasticGpuSpecificationResponse"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _LaunchTemplateBlockDeviceMapping = _interopRequireDefault(require("./LaunchTemplateBlockDeviceMapping"));

var _LaunchTemplateCapacityReservationSpecificationResponse = _interopRequireDefault(require("./LaunchTemplateCapacityReservationSpecificationResponse"));

var _LaunchTemplateCpuOptions = _interopRequireDefault(require("./LaunchTemplateCpuOptions"));

var _LaunchTemplateElasticInferenceAcceleratorResponse = _interopRequireDefault(require("./LaunchTemplateElasticInferenceAcceleratorResponse"));

var _LaunchTemplateHibernationOptions = _interopRequireDefault(require("./LaunchTemplateHibernationOptions"));

var _LaunchTemplateIamInstanceProfileSpecification = _interopRequireDefault(require("./LaunchTemplateIamInstanceProfileSpecification"));

var _LaunchTemplateInstanceMarketOptions = _interopRequireDefault(require("./LaunchTemplateInstanceMarketOptions"));

var _LaunchTemplateInstanceNetworkInterfaceSpecification = _interopRequireDefault(require("./LaunchTemplateInstanceNetworkInterfaceSpecification"));

var _LaunchTemplateLicenseConfiguration = _interopRequireDefault(require("./LaunchTemplateLicenseConfiguration"));

var _LaunchTemplatePlacement = _interopRequireDefault(require("./LaunchTemplatePlacement"));

var _LaunchTemplateTagSpecification = _interopRequireDefault(require("./LaunchTemplateTagSpecification"));

var _LaunchTemplatesMonitoring = _interopRequireDefault(require("./LaunchTemplatesMonitoring"));

var _ShutdownBehavior = _interopRequireDefault(require("./ShutdownBehavior"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponseLaunchTemplateData model module.
 * @module model/ResponseLaunchTemplateData
 * @version 1.0.0
 */
var ResponseLaunchTemplateData =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ResponseLaunchTemplateData</code>.
   * The information for a launch template. 
   * @alias module:model/ResponseLaunchTemplateData
   */
  function ResponseLaunchTemplateData() {
    _classCallCheck(this, ResponseLaunchTemplateData);

    ResponseLaunchTemplateData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseLaunchTemplateData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResponseLaunchTemplateData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseLaunchTemplateData} obj Optional instance to populate.
     * @return {module:model/ResponseLaunchTemplateData} The populated <code>ResponseLaunchTemplateData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseLaunchTemplateData();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_LaunchTemplateBlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('CapacityReservationSpecification')) {
          obj['CapacityReservationSpecification'] = _LaunchTemplateCapacityReservationSpecificationResponse["default"].constructFromObject(data['CapacityReservationSpecification']);
        }

        if (data.hasOwnProperty('CpuOptions')) {
          obj['CpuOptions'] = _LaunchTemplateCpuOptions["default"].constructFromObject(data['CpuOptions']);
        }

        if (data.hasOwnProperty('CreditSpecification')) {
          obj['CreditSpecification'] = _CreditSpecification["default"].constructFromObject(data['CreditSpecification']);
        }

        if (data.hasOwnProperty('DisableApiTermination')) {
          obj['DisableApiTermination'] = _ApiClient["default"].convertToType(data['DisableApiTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('ElasticGpuSpecifications')) {
          obj['ElasticGpuSpecifications'] = _ApiClient["default"].convertToType(data['ElasticGpuSpecifications'], [_ElasticGpuSpecificationResponse["default"]]);
        }

        if (data.hasOwnProperty('ElasticInferenceAccelerators')) {
          obj['ElasticInferenceAccelerators'] = _ApiClient["default"].convertToType(data['ElasticInferenceAccelerators'], [_LaunchTemplateElasticInferenceAcceleratorResponse["default"]]);
        }

        if (data.hasOwnProperty('HibernationOptions')) {
          obj['HibernationOptions'] = _LaunchTemplateHibernationOptions["default"].constructFromObject(data['HibernationOptions']);
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _LaunchTemplateIamInstanceProfileSpecification["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceInitiatedShutdownBehavior')) {
          obj['InstanceInitiatedShutdownBehavior'] = _ShutdownBehavior["default"].constructFromObject(data['InstanceInitiatedShutdownBehavior']);
        }

        if (data.hasOwnProperty('InstanceMarketOptions')) {
          obj['InstanceMarketOptions'] = _LaunchTemplateInstanceMarketOptions["default"].constructFromObject(data['InstanceMarketOptions']);
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
          obj['LicenseSpecifications'] = _ApiClient["default"].convertToType(data['LicenseSpecifications'], [_LaunchTemplateLicenseConfiguration["default"]]);
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _LaunchTemplatesMonitoring["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_LaunchTemplateInstanceNetworkInterfaceSpecification["default"]]);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _LaunchTemplatePlacement["default"].constructFromObject(data['Placement']);
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
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_LaunchTemplateTagSpecification["default"]]);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _ApiClient["default"].convertToType(data['UserData'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResponseLaunchTemplateData;
}();
/**
 * @member {Array.<module:model/LaunchTemplateBlockDeviceMapping>} BlockDeviceMappings
 */


ResponseLaunchTemplateData.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/LaunchTemplateCapacityReservationSpecificationResponse} CapacityReservationSpecification
 */

ResponseLaunchTemplateData.prototype['CapacityReservationSpecification'] = undefined;
/**
 * @member {module:model/LaunchTemplateCpuOptions} CpuOptions
 */

ResponseLaunchTemplateData.prototype['CpuOptions'] = undefined;
/**
 * @member {module:model/CreditSpecification} CreditSpecification
 */

ResponseLaunchTemplateData.prototype['CreditSpecification'] = undefined;
/**
 * @member {Boolean} DisableApiTermination
 */

ResponseLaunchTemplateData.prototype['DisableApiTermination'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

ResponseLaunchTemplateData.prototype['EbsOptimized'] = undefined;
/**
 * @member {Array.<module:model/ElasticGpuSpecificationResponse>} ElasticGpuSpecifications
 */

ResponseLaunchTemplateData.prototype['ElasticGpuSpecifications'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateElasticInferenceAcceleratorResponse>} ElasticInferenceAccelerators
 */

ResponseLaunchTemplateData.prototype['ElasticInferenceAccelerators'] = undefined;
/**
 * @member {module:model/LaunchTemplateHibernationOptions} HibernationOptions
 */

ResponseLaunchTemplateData.prototype['HibernationOptions'] = undefined;
/**
 * @member {module:model/LaunchTemplateIamInstanceProfileSpecification} IamInstanceProfile
 */

ResponseLaunchTemplateData.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

ResponseLaunchTemplateData.prototype['ImageId'] = undefined;
/**
 * @member {module:model/ShutdownBehavior} InstanceInitiatedShutdownBehavior
 */

ResponseLaunchTemplateData.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/LaunchTemplateInstanceMarketOptions} InstanceMarketOptions
 */

ResponseLaunchTemplateData.prototype['InstanceMarketOptions'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

ResponseLaunchTemplateData.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

ResponseLaunchTemplateData.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

ResponseLaunchTemplateData.prototype['KeyName'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateLicenseConfiguration>} LicenseSpecifications
 */

ResponseLaunchTemplateData.prototype['LicenseSpecifications'] = undefined;
/**
 * @member {module:model/LaunchTemplatesMonitoring} Monitoring
 */

ResponseLaunchTemplateData.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateInstanceNetworkInterfaceSpecification>} NetworkInterfaces
 */

ResponseLaunchTemplateData.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/LaunchTemplatePlacement} Placement
 */

ResponseLaunchTemplateData.prototype['Placement'] = undefined;
/**
 * @member {String} RamDiskId
 */

ResponseLaunchTemplateData.prototype['RamDiskId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

ResponseLaunchTemplateData.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} SecurityGroups
 */

ResponseLaunchTemplateData.prototype['SecurityGroups'] = undefined;
/**
 * @member {Array.<module:model/LaunchTemplateTagSpecification>} TagSpecifications
 */

ResponseLaunchTemplateData.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} UserData
 */

ResponseLaunchTemplateData.prototype['UserData'] = undefined;
var _default = ResponseLaunchTemplateData;
exports["default"] = _default;