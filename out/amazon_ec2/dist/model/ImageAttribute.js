"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeValue = _interopRequireDefault(require("./AttributeValue"));

var _BlockDeviceMapping = _interopRequireDefault(require("./BlockDeviceMapping"));

var _LaunchPermission = _interopRequireDefault(require("./LaunchPermission"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImageAttribute model module.
 * @module model/ImageAttribute
 * @version 1.1.0
 */
var ImageAttribute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImageAttribute</code>.
   * Describes an image attribute.
   * @alias module:model/ImageAttribute
   */
  function ImageAttribute() {
    _classCallCheck(this, ImageAttribute);

    ImageAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImageAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImageAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageAttribute} obj Optional instance to populate.
     * @return {module:model/ImageAttribute} The populated <code>ImageAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageAttribute();

        if (data.hasOwnProperty('BlockDeviceMappings')) {
          obj['BlockDeviceMappings'] = _ApiClient["default"].convertToType(data['BlockDeviceMappings'], [_BlockDeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _AttributeValue["default"].constructFromObject(data['Description']);
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('KernelId')) {
          obj['KernelId'] = _AttributeValue["default"].constructFromObject(data['KernelId']);
        }

        if (data.hasOwnProperty('LaunchPermissions')) {
          obj['LaunchPermissions'] = _ApiClient["default"].convertToType(data['LaunchPermissions'], [_LaunchPermission["default"]]);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('RamdiskId')) {
          obj['RamdiskId'] = _AttributeValue["default"].constructFromObject(data['RamdiskId']);
        }

        if (data.hasOwnProperty('SriovNetSupport')) {
          obj['SriovNetSupport'] = _AttributeValue["default"].constructFromObject(data['SriovNetSupport']);
        }
      }

      return obj;
    }
  }]);

  return ImageAttribute;
}();
/**
 * @member {Array.<module:model/BlockDeviceMapping>} BlockDeviceMappings
 */


ImageAttribute.prototype['BlockDeviceMappings'] = undefined;
/**
 * @member {module:model/AttributeValue} Description
 */

ImageAttribute.prototype['Description'] = undefined;
/**
 * @member {String} ImageId
 */

ImageAttribute.prototype['ImageId'] = undefined;
/**
 * @member {module:model/AttributeValue} KernelId
 */

ImageAttribute.prototype['KernelId'] = undefined;
/**
 * @member {Array.<module:model/LaunchPermission>} LaunchPermissions
 */

ImageAttribute.prototype['LaunchPermissions'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

ImageAttribute.prototype['ProductCodes'] = undefined;
/**
 * @member {module:model/AttributeValue} RamdiskId
 */

ImageAttribute.prototype['RamdiskId'] = undefined;
/**
 * @member {module:model/AttributeValue} SriovNetSupport
 */

ImageAttribute.prototype['SriovNetSupport'] = undefined;
var _default = ImageAttribute;
exports["default"] = _default;