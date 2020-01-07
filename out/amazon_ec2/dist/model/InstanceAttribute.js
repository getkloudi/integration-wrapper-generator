"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _InstanceBlockDeviceMapping = _interopRequireDefault(require("./InstanceBlockDeviceMapping"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceAttribute model module.
 * @module model/InstanceAttribute
 * @version 1.1.0
 */
var InstanceAttribute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceAttribute</code>.
   * Describes an instance attribute.
   * @alias module:model/InstanceAttribute
   */
  function InstanceAttribute() {
    _classCallCheck(this, InstanceAttribute);

    InstanceAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceAttribute} obj Optional instance to populate.
     * @return {module:model/InstanceAttribute} The populated <code>InstanceAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceAttribute();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_InstanceBlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('DisableApiTermination')) {
          obj['DisableApiTermination'] = _AttributeBooleanValue["default"].constructFromObject(data['DisableApiTermination']);
        }

        if (data.hasOwnProperty('EbsOptimized')) {
          obj['EbsOptimized'] = _AttributeBooleanValue["default"].constructFromObject(data['EbsOptimized']);
        }

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _AttributeBooleanValue["default"].constructFromObject(data['EnaSupport']);
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
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

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _AttributeValue["default"].constructFromObject(data['KernelId']);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _AttributeValue["default"].constructFromObject(data['RamdiskId']);
        }

        if (data.hasOwnProperty('RootDeviceName')) {
          obj['RootDeviceName'] = _AttributeValue["default"].constructFromObject(data['RootDeviceName']);
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _AttributeBooleanValue["default"].constructFromObject(data['SourceDestCheck']);
        }

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _AttributeValue["default"].constructFromObject(data['SriovNetSupport']);
        }

        if (data.hasOwnProperty('UserData')) {
          obj['UserData'] = _AttributeValue["default"].constructFromObject(data['UserData']);
        }
      }

      return obj;
    }
  }]);

  return InstanceAttribute;
}();
/**
 * @member {Array.<module:model/InstanceBlockDeviceMapping>} BlockDeviceMappings
 */


InstanceAttribute.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} DisableApiTermination
 */

InstanceAttribute.prototype['DisableApiTermination'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EbsOptimized
 */

InstanceAttribute.prototype['EbsOptimized'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} EnaSupport
 */

InstanceAttribute.prototype['EnaSupport'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */

InstanceAttribute.prototype['Groups'] = undefined;
/**
 * @member {String} InstanceId
 */

InstanceAttribute.prototype['InstanceId'] = undefined;
/**
 * @member {module:model/AttributeValue} InstanceInitiatedShutdownBehavior
 */

InstanceAttribute.prototype['InstanceInitiatedShutdownBehavior'] = undefined;
/**
 * @member {module:model/AttributeValue} InstanceType
 */

InstanceAttribute.prototype['InstanceType'] = undefined;
/**
 * @member {module:model/AttributeValue} KernelId
 */

InstanceAttribute.prototype['KernelId'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

InstanceAttribute.prototype['ProductCodes'] = undefined;
/**
 * @member {module:model/AttributeValue} RamdiskId
 */

InstanceAttribute.prototype['RamdiskId'] = undefined;
/**
 * @member {module:model/AttributeValue} RootDeviceName
 */

InstanceAttribute.prototype['RootDeviceName'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} SourceDestCheck
 */

InstanceAttribute.prototype['SourceDestCheck'] = undefined;
/**
 * @member {module:model/AttributeValue} SriovNetSupport
 */

InstanceAttribute.prototype['SriovNetSupport'] = undefined;
/**
 * @member {module:model/AttributeValue} UserData
 */

InstanceAttribute.prototype['UserData'] = undefined;
var _default = InstanceAttribute;
exports["default"] = _default;