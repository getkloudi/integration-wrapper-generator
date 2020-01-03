"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FpgaImageState = _interopRequireDefault(require("./FpgaImageState"));

var _PciId = _interopRequireDefault(require("./PciId"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FpgaImage model module.
 * @module model/FpgaImage
 * @version 1.0.0
 */
var FpgaImage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FpgaImage</code>.
   * Describes an Amazon FPGA image (AFI).
   * @alias module:model/FpgaImage
   */
  function FpgaImage() {
    _classCallCheck(this, FpgaImage);

    FpgaImage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FpgaImage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FpgaImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FpgaImage} obj Optional instance to populate.
     * @return {module:model/FpgaImage} The populated <code>FpgaImage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FpgaImage();

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('DataRetentionSupport')) {
          obj['DataRetentionSupport'] = _ApiClient["default"].convertToType(data['DataRetentionSupport'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('FpgaImageGlobalId')) {
          obj['FpgaImageGlobalId'] = _ApiClient["default"].convertToType(data['FpgaImageGlobalId'], 'String');
        }

        if (data.hasOwnProperty('FpgaImageId')) {
          obj['FpgaImageId'] = _ApiClient["default"].convertToType(data['FpgaImageId'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('OwnerAlias')) {
          obj['OwnerAlias'] = _ApiClient["default"].convertToType(data['OwnerAlias'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PciId')) {
          obj['PciId'] = _PciId["default"].constructFromObject(data['PciId']);
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }

        if (data.hasOwnProperty('Public')) {
          obj['Public'] = _ApiClient["default"].convertToType(data['Public'], 'Boolean');
        }

        if (data.hasOwnProperty('ShellVersion')) {
          obj['ShellVersion'] = _ApiClient["default"].convertToType(data['ShellVersion'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _FpgaImageState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('UpdateTime')) {
          obj['UpdateTime'] = _ApiClient["default"].convertToType(data['UpdateTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return FpgaImage;
}();
/**
 * @member {Date} CreateTime
 */


FpgaImage.prototype['CreateTime'] = undefined;
/**
 * @member {Boolean} DataRetentionSupport
 */

FpgaImage.prototype['DataRetentionSupport'] = undefined;
/**
 * @member {String} Description
 */

FpgaImage.prototype['Description'] = undefined;
/**
 * @member {String} FpgaImageGlobalId
 */

FpgaImage.prototype['FpgaImageGlobalId'] = undefined;
/**
 * @member {String} FpgaImageId
 */

FpgaImage.prototype['FpgaImageId'] = undefined;
/**
 * @member {String} Name
 */

FpgaImage.prototype['Name'] = undefined;
/**
 * @member {String} OwnerAlias
 */

FpgaImage.prototype['OwnerAlias'] = undefined;
/**
 * @member {String} OwnerId
 */

FpgaImage.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/PciId} PciId
 */

FpgaImage.prototype['PciId'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

FpgaImage.prototype['ProductCodes'] = undefined;
/**
 * @member {Boolean} Public
 */

FpgaImage.prototype['Public'] = undefined;
/**
 * @member {String} ShellVersion
 */

FpgaImage.prototype['ShellVersion'] = undefined;
/**
 * @member {module:model/FpgaImageState} State
 */

FpgaImage.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

FpgaImage.prototype['Tags'] = undefined;
/**
 * @member {Date} UpdateTime
 */

FpgaImage.prototype['UpdateTime'] = undefined;
var _default = FpgaImage;
exports["default"] = _default;