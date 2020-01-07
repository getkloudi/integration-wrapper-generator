"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoadPermission = _interopRequireDefault(require("./LoadPermission"));

var _ProductCode = _interopRequireDefault(require("./ProductCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FpgaImageAttribute model module.
 * @module model/FpgaImageAttribute
 * @version 1.1.0
 */
var FpgaImageAttribute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>FpgaImageAttribute</code>.
   * Describes an Amazon FPGA image (AFI) attribute.
   * @alias module:model/FpgaImageAttribute
   */
  function FpgaImageAttribute() {
    _classCallCheck(this, FpgaImageAttribute);

    FpgaImageAttribute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FpgaImageAttribute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>FpgaImageAttribute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FpgaImageAttribute} obj Optional instance to populate.
     * @return {module:model/FpgaImageAttribute} The populated <code>FpgaImageAttribute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FpgaImageAttribute();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('FpgaImageId')) {
          obj['FpgaImageId'] = _ApiClient["default"].convertToType(data['FpgaImageId'], 'String');
        }

        if (data.hasOwnProperty('LoadPermissions')) {
          obj['LoadPermissions'] = _ApiClient["default"].convertToType(data['LoadPermissions'], [_LoadPermission["default"]]);
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('ProductCodes')) {
          obj['ProductCodes'] = _ApiClient["default"].convertToType(data['ProductCodes'], [_ProductCode["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FpgaImageAttribute;
}();
/**
 * @member {String} Description
 */


FpgaImageAttribute.prototype['Description'] = undefined;
/**
 * @member {String} FpgaImageId
 */

FpgaImageAttribute.prototype['FpgaImageId'] = undefined;
/**
 * @member {Array.<module:model/LoadPermission>} LoadPermissions
 */

FpgaImageAttribute.prototype['LoadPermissions'] = undefined;
/**
 * @member {String} Name
 */

FpgaImageAttribute.prototype['Name'] = undefined;
/**
 * @member {Array.<module:model/ProductCode>} ProductCodes
 */

FpgaImageAttribute.prototype['ProductCodes'] = undefined;
var _default = FpgaImageAttribute;
exports["default"] = _default;