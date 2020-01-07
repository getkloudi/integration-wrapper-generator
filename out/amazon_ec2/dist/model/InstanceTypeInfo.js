"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EbsInfo = _interopRequireDefault(require("./EbsInfo"));

var _FpgaInfo = _interopRequireDefault(require("./FpgaInfo"));

var _GpuInfo = _interopRequireDefault(require("./GpuInfo"));

var _InferenceAcceleratorInfo = _interopRequireDefault(require("./InferenceAcceleratorInfo"));

var _InstanceStorageInfo = _interopRequireDefault(require("./InstanceStorageInfo"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

var _InstanceTypeHypervisor = _interopRequireDefault(require("./InstanceTypeHypervisor"));

var _MemoryInfo = _interopRequireDefault(require("./MemoryInfo"));

var _NetworkInfo = _interopRequireDefault(require("./NetworkInfo"));

var _PlacementGroupInfo = _interopRequireDefault(require("./PlacementGroupInfo"));

var _ProcessorInfo = _interopRequireDefault(require("./ProcessorInfo"));

var _RootDeviceType = _interopRequireDefault(require("./RootDeviceType"));

var _UsageClassType = _interopRequireDefault(require("./UsageClassType"));

var _VCpuInfo = _interopRequireDefault(require("./VCpuInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceTypeInfo model module.
 * @module model/InstanceTypeInfo
 * @version 1.1.0
 */
var InstanceTypeInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceTypeInfo</code>.
   * Describes the instance type.
   * @alias module:model/InstanceTypeInfo
   */
  function InstanceTypeInfo() {
    _classCallCheck(this, InstanceTypeInfo);

    InstanceTypeInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceTypeInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceTypeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceTypeInfo} obj Optional instance to populate.
     * @return {module:model/InstanceTypeInfo} The populated <code>InstanceTypeInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceTypeInfo();

        if (data.hasOwnProperty('AutoRecoverySupported')) {
          obj['AutoRecoverySupported'] = _ApiClient["default"].convertToType(data['AutoRecoverySupported'], 'Boolean');
        }

        if (data.hasOwnProperty('BareMetal')) {
          obj['BareMetal'] = _ApiClient["default"].convertToType(data['BareMetal'], 'Boolean');
        }

        if (data.hasOwnProperty('BurstablePerformanceSupported')) {
          obj['BurstablePerformanceSupported'] = _ApiClient["default"].convertToType(data['BurstablePerformanceSupported'], 'Boolean');
        }

        if (data.hasOwnProperty('CurrentGeneration')) {
          obj['CurrentGeneration'] = _ApiClient["default"].convertToType(data['CurrentGeneration'], 'Boolean');
        }

        if (data.hasOwnProperty('DedicatedHostsSupported')) {
          obj['DedicatedHostsSupported'] = _ApiClient["default"].convertToType(data['DedicatedHostsSupported'], 'Boolean');
        }

        if (data.hasOwnProperty('EbsInfo')) {
          obj['EbsInfo'] = _EbsInfo["default"].constructFromObject(data['EbsInfo']);
        }

        if (data.hasOwnProperty('FpgaInfo')) {
          obj['FpgaInfo'] = _FpgaInfo["default"].constructFromObject(data['FpgaInfo']);
        }

        if (data.hasOwnProperty('FreeTierEligible')) {
          obj['FreeTierEligible'] = _ApiClient["default"].convertToType(data['FreeTierEligible'], 'Boolean');
        }

        if (data.hasOwnProperty('GpuInfo')) {
          obj['GpuInfo'] = _GpuInfo["default"].constructFromObject(data['GpuInfo']);
        }

        if (data.hasOwnProperty('HibernationSupported')) {
          obj['HibernationSupported'] = _ApiClient["default"].convertToType(data['HibernationSupported'], 'Boolean');
        }

        if (data.hasOwnProperty('Hypervisor')) {
          obj['Hypervisor'] = _InstanceTypeHypervisor["default"].constructFromObject(data['Hypervisor']);
        }

        if (data.hasOwnProperty('InferenceAcceleratorInfo')) {
          obj['InferenceAcceleratorInfo'] = _InferenceAcceleratorInfo["default"].constructFromObject(data['InferenceAcceleratorInfo']);
        }

        if (data.hasOwnProperty('InstanceStorageInfo')) {
          obj['InstanceStorageInfo'] = _InstanceStorageInfo["default"].constructFromObject(data['InstanceStorageInfo']);
        }

        if (data.hasOwnProperty('InstanceStorageSupported')) {
          obj['InstanceStorageSupported'] = _ApiClient["default"].convertToType(data['InstanceStorageSupported'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _InstanceType["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('MemoryInfo')) {
          obj['MemoryInfo'] = _MemoryInfo["default"].constructFromObject(data['MemoryInfo']);
        }

        if (data.hasOwnProperty('NetworkInfo')) {
          obj['NetworkInfo'] = _NetworkInfo["default"].constructFromObject(data['NetworkInfo']);
        }

        if (data.hasOwnProperty('PlacementGroupInfo')) {
          obj['PlacementGroupInfo'] = _PlacementGroupInfo["default"].constructFromObject(data['PlacementGroupInfo']);
        }

        if (data.hasOwnProperty('ProcessorInfo')) {
          obj['ProcessorInfo'] = _ProcessorInfo["default"].constructFromObject(data['ProcessorInfo']);
        }

        if (data.hasOwnProperty('SupportedRootDeviceTypes')) {
          obj['SupportedRootDeviceTypes'] = _ApiClient["default"].convertToType(data['SupportedRootDeviceTypes'], [_RootDeviceType["default"]]);
        }

        if (data.hasOwnProperty('SupportedUsageClasses')) {
          obj['SupportedUsageClasses'] = _ApiClient["default"].convertToType(data['SupportedUsageClasses'], [_UsageClassType["default"]]);
        }

        if (data.hasOwnProperty('VCpuInfo')) {
          obj['VCpuInfo'] = _VCpuInfo["default"].constructFromObject(data['VCpuInfo']);
        }
      }

      return obj;
    }
  }]);

  return InstanceTypeInfo;
}();
/**
 * @member {Boolean} AutoRecoverySupported
 */


InstanceTypeInfo.prototype['AutoRecoverySupported'] = undefined;
/**
 * @member {Boolean} BareMetal
 */

InstanceTypeInfo.prototype['BareMetal'] = undefined;
/**
 * @member {Boolean} BurstablePerformanceSupported
 */

InstanceTypeInfo.prototype['BurstablePerformanceSupported'] = undefined;
/**
 * @member {Boolean} CurrentGeneration
 */

InstanceTypeInfo.prototype['CurrentGeneration'] = undefined;
/**
 * @member {Boolean} DedicatedHostsSupported
 */

InstanceTypeInfo.prototype['DedicatedHostsSupported'] = undefined;
/**
 * @member {module:model/EbsInfo} EbsInfo
 */

InstanceTypeInfo.prototype['EbsInfo'] = undefined;
/**
 * @member {module:model/FpgaInfo} FpgaInfo
 */

InstanceTypeInfo.prototype['FpgaInfo'] = undefined;
/**
 * @member {Boolean} FreeTierEligible
 */

InstanceTypeInfo.prototype['FreeTierEligible'] = undefined;
/**
 * @member {module:model/GpuInfo} GpuInfo
 */

InstanceTypeInfo.prototype['GpuInfo'] = undefined;
/**
 * @member {Boolean} HibernationSupported
 */

InstanceTypeInfo.prototype['HibernationSupported'] = undefined;
/**
 * @member {module:model/InstanceTypeHypervisor} Hypervisor
 */

InstanceTypeInfo.prototype['Hypervisor'] = undefined;
/**
 * @member {module:model/InferenceAcceleratorInfo} InferenceAcceleratorInfo
 */

InstanceTypeInfo.prototype['InferenceAcceleratorInfo'] = undefined;
/**
 * @member {module:model/InstanceStorageInfo} InstanceStorageInfo
 */

InstanceTypeInfo.prototype['InstanceStorageInfo'] = undefined;
/**
 * @member {Boolean} InstanceStorageSupported
 */

InstanceTypeInfo.prototype['InstanceStorageSupported'] = undefined;
/**
 * @member {module:model/InstanceType} InstanceType
 */

InstanceTypeInfo.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/MemoryInfo} MemoryInfo
 */

InstanceTypeInfo.prototype['MemoryInfo'] = undefined;
/**
 * @member {module:model/NetworkInfo} NetworkInfo
 */

InstanceTypeInfo.prototype['NetworkInfo'] = undefined;
/**
 * @member {module:model/PlacementGroupInfo} PlacementGroupInfo
 */

InstanceTypeInfo.prototype['PlacementGroupInfo'] = undefined;
/**
 * @member {module:model/ProcessorInfo} ProcessorInfo
 */

InstanceTypeInfo.prototype['ProcessorInfo'] = undefined;
/**
 * @member {Array.<module:model/RootDeviceType>} SupportedRootDeviceTypes
 */

InstanceTypeInfo.prototype['SupportedRootDeviceTypes'] = undefined;
/**
 * @member {Array.<module:model/UsageClassType>} SupportedUsageClasses
 */

InstanceTypeInfo.prototype['SupportedUsageClasses'] = undefined;
/**
 * @member {module:model/VCpuInfo} VCpuInfo
 */

InstanceTypeInfo.prototype['VCpuInfo'] = undefined;
var _default = InstanceTypeInfo;
exports["default"] = _default;