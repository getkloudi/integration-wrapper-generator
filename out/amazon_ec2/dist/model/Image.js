"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ArchitectureValues = _interopRequireDefault(require("./ArchitectureValues"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

var _DeviceType = _interopRequireDefault(require("./DeviceType"));

var _HypervisorType = _interopRequireDefault(require("./HypervisorType"));

var _ImageState = _interopRequireDefault(require("./ImageState"));

var _ImageTypeValues = _interopRequireDefault(require("./ImageTypeValues"));

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
 * The Image model module.
 * @module model/Image
 * @version 1.1.0
 */
var Image =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Image</code>.
   * Describes an image.
   * @alias module:model/Image
   */
  function Image() {
    _classCallCheck(this, Image);

    Image.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Image, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Image();

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ArchitectureValues["default"].constructFromObject(data['Architecture']);
        }

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('CreationDate')) {
          obj['CreationDate'] = _ApiClient["default"].convertToType(data['CreationDate'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('EnaSupport')) {
          obj['EnaSupport'] = _ApiClient["default"].convertToType(data['EnaSupport'], 'Boolean');
        }

        if (data.hasOwnProperty('Hypervisor')) {
          obj['Hypervisor'] = _HypervisorType["default"].constructFromObject(data['Hypervisor']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('ImageLocation')) {
          obj['ImageLocation'] = _ApiClient["default"].convertToType(data['ImageLocation'], 'String');
        }

        if (data.hasOwnProperty('ImageOwnerAlias')) {
          obj['ImageOwnerAlias'] = _ApiClient["default"].convertToType(data['ImageOwnerAlias'], 'String');
        }

        if (data.hasOwnProperty('ImageType')) {
          obj['ImageType'] = _ImageTypeValues["default"].constructFromObject(data['ImageType']);
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _ApiClient["default"].convertToType(data['KernelId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _PlatformValues["default"].constructFromObject(data['Platform']);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('Public')) {
          obj['Public'] = _ApiClient["default"].convertToType(data['Public'], 'Boolean');
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

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _ApiClient["default"].convertToType(data['SriovNetSupport'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ImageState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StateReason')) {
          obj['StateReason'] = _StateReason["default"].constructFromObject(data['StateReason']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VirtualizationType')) {
          obj['VirtualizationType'] = _VirtualizationType["default"].constructFromObject(data['VirtualizationType']);
        }
      }

      return obj;
    }
  }]);

  return Image;
}();
/**
 * @member {module:model/ArchitectureValues} Architecture
 */


Image.prototype['Architecture'] = undefined;
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */

Image.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {String} CreationDate
 */

Image.prototype['CreationDate'] = undefined;
/**
 * @member {String} Description
 */

Image.prototype['Description'] = undefined;
/**
 * @member {Boolean} EnaSupport
 */

Image.prototype['EnaSupport'] = undefined;
/**
 * @member {module:model/HypervisorType} Hypervisor
 */

Image.prototype['Hypervisor'] = undefined;
/**
 * @member {String} ImageId
 */

Image.prototype['ImageId'] = undefined;
/**
 * @member {String} ImageLocation
 */

Image.prototype['ImageLocation'] = undefined;
/**
 * @member {String} ImageOwnerAlias
 */

Image.prototype['ImageOwnerAlias'] = undefined;
/**
 * @member {module:model/ImageTypeValues} ImageType
 */

Image.prototype['ImageType'] = undefined;
/**
 * @member {String} KernelId
 */

Image.prototype['KernelId'] = undefined;
/**
 * @member {String} Name
 */

Image.prototype['Name'] = undefined;
/**
 * @member {String} OwnerId
 */

Image.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/PlatformValues} Platform
 */

Image.prototype['Platform'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

Image.prototype['ProductCodes'] = undefined;
/**
 * @member {Boolean} Public
 */

Image.prototype['Public'] = undefined;
/**
 * @member {String} RamdiskId
 */

Image.prototype['RamdiskId'] = undefined;
/**
 * @member {String} RootDeviceName
 */

Image.prototype['RootDeviceName'] = undefined;
/**
 * @member {module:model/DeviceType} RootDeviceType
 */

Image.prototype['RootDeviceType'] = undefined;
/**
 * @member {String} SriovNetSupport
 */

Image.prototype['SriovNetSupport'] = undefined;
/**
 * @member {module:model/ImageState} State
 */

Image.prototype['State'] = undefined;
/**
 * @member {module:model/StateReason} StateReason
 */

Image.prototype['StateReason'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Image.prototype['Tags'] = undefined;
/**
 * @member {module:model/VirtualizationType} VirtualizationType
 */

Image.prototype['VirtualizationType'] = undefined;
var _default = Image;
exports["default"] = _default;