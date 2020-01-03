"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstancesBlockDeviceMapping = _interopRequireDefault(require("./ScheduledInstancesBlockDeviceMapping"));

var _ScheduledInstancesIamInstanceProfile = _interopRequireDefault(require("./ScheduledInstancesIamInstanceProfile"));

var _ScheduledInstancesMonitoring = _interopRequireDefault(require("./ScheduledInstancesMonitoring"));

var _ScheduledInstancesNetworkInterface = _interopRequireDefault(require("./ScheduledInstancesNetworkInterface"));

var _ScheduledInstancesPlacement = _interopRequireDefault(require("./ScheduledInstancesPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInstancesLaunchSpecification model module.
 * @module model/ScheduledInstancesLaunchSpecification
 * @version 1.0.0
 */
var ScheduledInstancesLaunchSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesLaunchSpecification</code>.
   * &lt;p&gt;Describes the launch specification for a Scheduled Instance.&lt;/p&gt; &lt;p&gt;If you are launching the Scheduled Instance in EC2-VPC, you must specify the ID of the subnet. You can specify the subnet using either &lt;code&gt;SubnetId&lt;/code&gt; or &lt;code&gt;NetworkInterface&lt;/code&gt;.&lt;/p&gt;
   * @alias module:model/ScheduledInstancesLaunchSpecification
   * @param imageId {String} 
   */
  function ScheduledInstancesLaunchSpecification(imageId) {
    _classCallCheck(this, ScheduledInstancesLaunchSpecification);

    ScheduledInstancesLaunchSpecification.initialize(this, imageId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesLaunchSpecification, null, [{
    key: "initialize",
    value: function initialize(obj, imageId) {
      obj['ImageId'] = imageId;
    }
    /**
     * Constructs a <code>ScheduledInstancesLaunchSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesLaunchSpecification} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesLaunchSpecification} The populated <code>ScheduledInstancesLaunchSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesLaunchSpecification();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_ScheduledInstancesBlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _ApiClient["default"].convertToType(data['EbsOptimized'], 'Boolean');
        }

        if (data.hasOwnProperty('IamInstanceProfile')) {
          obj['IamInstanceProfile'] = _ScheduledInstancesIamInstanceProfile["default"].constructFromObject(data['IamInstanceProfile']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _ApiClient["default"].convertToType(data['InstanceType'], 'String');
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _ApiClient["default"].convertToType(data['KernelId'], 'String');
        }

        if (data.hasOwnProperty('KeyName')) {
          obj['KeyName'] = _ApiClient["default"].convertToType(data['KeyName'], 'String');
        }

        if (data.hasOwnProperty('Monitoring')) {
          obj['Monitoring'] = _ScheduledInstancesMonitoring["default"].constructFromObject(data['Monitoring']);
        }

        if (data.hasOwnProperty('NetworkInterfaces')) {
          obj['NetworkInterfaces'] = _ApiClient["default"].convertToType(data['NetworkInterfaces'], [_ScheduledInstancesNetworkInterface["default"]]);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _ScheduledInstancesPlacement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _ApiClient["default"].convertToType(data['RamdiskId'], 'String');
        }

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
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

  return ScheduledInstancesLaunchSpecification;
}();
/**
 * @member {Array.<module:model/ScheduledInstancesBlockDeviceMapping>} BlockDeviceMappings
 */


ScheduledInstancesLaunchSpecification.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

ScheduledInstancesLaunchSpecification.prototype['EbsOptimized'] = undefined;
/**
 * @member {module:model/ScheduledInstancesIamInstanceProfile} IamInstanceProfile
 */

ScheduledInstancesLaunchSpecification.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

ScheduledInstancesLaunchSpecification.prototype['ImageId'] = undefined;
/**
 * @member {String} InstanceType
 */

ScheduledInstancesLaunchSpecification.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

ScheduledInstancesLaunchSpecification.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

ScheduledInstancesLaunchSpecification.prototype['KeyName'] = undefined;
/**
 * @member {module:model/ScheduledInstancesMonitoring} Monitoring
 */

ScheduledInstancesLaunchSpecification.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/ScheduledInstancesNetworkInterface>} NetworkInterfaces
 */

ScheduledInstancesLaunchSpecification.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/ScheduledInstancesPlacement} Placement
 */

ScheduledInstancesLaunchSpecification.prototype['Placement'] = undefined;
/**
 * @member {String} RamdiskId
 */

ScheduledInstancesLaunchSpecification.prototype['RamdiskId'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

ScheduledInstancesLaunchSpecification.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {String} SubnetId
 */

ScheduledInstancesLaunchSpecification.prototype['SubnetId'] = undefined;
/**
 * @member {String} UserData
 */

ScheduledInstancesLaunchSpecification.prototype['UserData'] = undefined;
var _default = ScheduledInstancesLaunchSpecification;
exports["default"] = _default;