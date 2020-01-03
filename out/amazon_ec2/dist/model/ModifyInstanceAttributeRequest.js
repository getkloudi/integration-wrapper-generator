"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _BlobAttributeValue = _interopRequireDefault(require("./BlobAttributeValue"));

var _InstanceAttributeName = _interopRequireDefault(require("./InstanceAttributeName"));

var _InstanceBlockDeviceMappingSpecification = _interopRequireDefault(require("./InstanceBlockDeviceMappingSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstanceAttributeRequest model module.
 * @module model/ModifyInstanceAttributeRequest
 * @version 1.0.0
 */
var ModifyInstanceAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceAttributeRequest</code>.
   * @alias module:model/ModifyInstanceAttributeRequest
   * @param instanceId {String} 
   */
  function ModifyInstanceAttributeRequest(instanceId) {
    _classCallCheck(this, ModifyInstanceAttributeRequest);

    ModifyInstanceAttributeRequest.initialize(this, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, instanceId) {
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>ModifyInstanceAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceAttributeRequest} The populated <code>ModifyInstanceAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceAttributeRequest();

        if (data.hasOwnProperty('Attribute')) {
          obj['Attribute'] = _InstanceAttributeName["default"].constructFromObject(data['Attribute']);
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_InstanceBlockDeviceMappingSpecification["default"]]);
        }

        if (data.hasOwnProperty('DisableApiTermination')) {
          obj['DisableApiTermination'] = _AttributeBooleanValue["default"].constructFromObject(data['DisableApiTermination']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _AttributeBooleanValue["default"].constructFromObject(data['EbsOptimized']);
        }

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _AttributeBooleanValue["default"].constructFromObject(data['EnaSupport']);
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('InstanceInitiatedShutdownBehavior')) {
          obj['InstanceInitiatedShutdownBehavior'] = _AttributeValue["default"].constructFromObject(data['InstanceInitiatedShutdownBehavior']);
        }

        if (data.hasOwnProperty('InstanceType')) {
          obj['InstanceType'] = _AttributeValue["default"].constructFromObject(data['InstanceType']);
        }

        if (data.hasOwnProperty('Kernel')) {
          obj['Kernel'] = _AttributeValue["default"].constructFromObject(data['Kernel']);
        }

        if (data.hasOwnProperty('Ramdisk')) {
          obj['Ramdisk'] = _AttributeValue["default"].constructFromObject(data['Ramdisk']);
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _AttributeBooleanValue["default"].constructFromObject(data['SourceDestCheck']);
        }

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _AttributeValue["default"].constructFromObject(data['SriovNetSupport']);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _BlobAttributeValue["default"].constructFromObject(data['UserData']);
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceAttributeRequest;
}();
/**
 * @member {module:model/InstanceAttributeName} Attribute
 */


ModifyInstanceAttributeRequest.prototype['Attribute'] = undefined;
/**
 * @member {Array.<module:model/InstanceBlockDeviceMappingSpecification>} BlockDeviceMappings
 */

ModifyInstanceAttributeRequest.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} DisableApiTermination
 */

ModifyInstanceAttributeRequest.prototype['DisableApiTermination'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyInstanceAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EbsOptimized
 */

ModifyInstanceAttributeRequest.prototype['EbsOptimized'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EnaSupport
 */

ModifyInstanceAttributeRequest.prototype['EnaSupport'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

ModifyInstanceAttributeRequest.prototype['Groups'] = undefined;
/**
 * @member {String} InstanceId
 */

ModifyInstanceAttributeRequest.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/AttributeValue} InstanceInitiatedShutdownBehavior
 */

ModifyInstanceAttributeRequest.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/AttributeValue} InstanceType
 */

ModifyInstanceAttributeRequest.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/AttributeValue} Kernel
 */

ModifyInstanceAttributeRequest.prototype['Kernel'] = undefined;
/**
 * @member {module:model/AttributeValue} Ramdisk
 */

ModifyInstanceAttributeRequest.prototype['Ramdisk'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} SourceDestCheck
 */

ModifyInstanceAttributeRequest.prototype['SourceDestCheck'] = undefined;
/**
 * @member {module:model/AttributeValue} SriovNetSupport
 */

ModifyInstanceAttributeRequest.prototype['SriovNetSupport'] = undefined;
/**
 * @member {module:model/BlobAttributeValue} UserData
 */

ModifyInstanceAttributeRequest.prototype['UserData'] = undefined;
/**
 * @member {String} Value
 */

ModifyInstanceAttributeRequest.prototype['Value'] = undefined;
var _default = ModifyInstanceAttributeRequest;
exports["default"] = _default;