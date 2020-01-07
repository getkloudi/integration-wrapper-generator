"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _IamInstanceProfileSpecification = _interopRequireDefault(require("./IamInstanceProfileSpecification"));

var _InstanceNetworkInterfaceSpecification = _interopRequireDefault(require("./InstanceNetworkInterfaceSpecification"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _SpotFleetMonitoring = _interopRequireDefault(require("./SpotFleetMonitoring"));

var _SpotFleetTagSpecification = _interopRequireDefault(require("./SpotFleetTagSpecification"));

var _SpotPlacement = _interopRequireDefault(require("./SpotPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SpotFleetLaunchSpecification model module.
 * @module model/SpotFleetLaunchSpecification
 * @version 1.1.0
 */
var SpotFleetLaunchSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SpotFleetLaunchSpecification</code>.
   * Describes the launch specification for one or more Spot Instances. If you include On-Demand capacity in your fleet request, you can&#39;t use &lt;code&gt;SpotFleetLaunchSpecification&lt;/code&gt; you must use &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_LaunchTemplateConfig.html\&quot;&gt;LaunchTemplateConfig&lt;/a&gt;.
   * @alias module:model/SpotFleetLaunchSpecification
   */
  function SpotFleetLaunchSpecification() {
    _classCallCheck(this, SpotFleetLaunchSpecification);

    SpotFleetLaunchSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SpotFleetLaunchSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SpotFleetLaunchSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SpotFleetLaunchSpecification} obj Optional instance to populate.
     * @return {module:model/SpotFleetLaunchSpecification} The populated <code>SpotFleetLaunchSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SpotFleetLaunchSpecification();

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
          obj['Monitoring'] = _SpotFleetMonitoring["default"].constructFromObject(data['Monitoring']);
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

        if (data.hasOwnProperty('SecurityGroups')) {
          obj['SecurityGroups'] = _ApiClient["default"].convertToType(data['SecurityGroups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('SpotPrice')) {
          obj['SpotPrice'] = _ApiClient["default"].convertToType(data['SpotPrice'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_SpotFleetTagSpecification["default"]]);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _ApiClient["default"].convertToType(data['UserData'], 'String');
        }

        if (data.hasOwnProperty('WeightedCapacity')) {
          obj['WeightedCapacity'] = _ApiClient["default"].convertToType(data['WeightedCapacity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SpotFleetLaunchSpecification;
}();
/**
 * @member {String} AddressingType
 */


SpotFleetLaunchSpecification.prototype['AddressingType'] = undefined;
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */

SpotFleetLaunchSpecification.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {Boolean} EbsOptimized
 */

SpotFleetLaunchSpecification.prototype['EbsOptimized'] = undefined;
/**
 * @member {module:model/IamInstanceProfileSpecification} IamInstanceProfile
 */

SpotFleetLaunchSpecification.prototype['IamInstanceProfile'] = undefined;
/**
 * @member {String} ImageId
 */

SpotFleetLaunchSpecification.prototype['ImageId'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

SpotFleetLaunchSpecification.prototype['InstanceType'] = undefined;
/**
 * @member {String} KernelId
 */

SpotFleetLaunchSpecification.prototype['KernelId'] = undefined;
/**
 * @member {String} KeyName
 */

SpotFleetLaunchSpecification.prototype['KeyName'] = undefined;
/**
 * @member {module:model/SpotFleetMonitoring} Monitoring
 */

SpotFleetLaunchSpecification.prototype['Monitoring'] = undefined;
/**
 * @member {Array.<module:model/InstanceNetworkInterfaceSpecification>} NetworkInterfaces
 */

SpotFleetLaunchSpecification.prototype['NetworkInterfaces'] = undefined;
/**
 * @member {module:model/SpotPlacement} Placement
 */

SpotFleetLaunchSpecification.prototype['Placement'] = undefined;
/**
 * @member {String} RamdiskId
 */

SpotFleetLaunchSpecification.prototype['RamdiskId'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} SecurityGroups
 */

SpotFleetLaunchSpecification.prototype['SecurityGroups'] = undefined;
/**
 * @member {String} SpotPrice
 */

SpotFleetLaunchSpecification.prototype['SpotPrice'] = undefined;
/**
 * @member {String} SubnetId
 */

SpotFleetLaunchSpecification.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/SpotFleetTagSpecification>} TagSpecifications
 */

SpotFleetLaunchSpecification.prototype['TagSpecifications'] = undefined;
/**
 * @member {String} UserData
 */

SpotFleetLaunchSpecification.prototype['UserData'] = undefined;
/**
 * @member {Number} WeightedCapacity
 */

SpotFleetLaunchSpecification.prototype['WeightedCapacity'] = undefined;
var _default = SpotFleetLaunchSpecification;
exports["default"] = _default;