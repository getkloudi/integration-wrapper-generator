"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageDetail = _interopRequireDefault(require("./DiskImageDetail"));

var _VolumeDetail = _interopRequireDefault(require("./VolumeDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DiskImage model module.
 * @module model/DiskImage
 * @version 1.0.0
 */
var DiskImage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DiskImage</code>.
   * Describes a disk image.
   * @alias module:model/DiskImage
   */
  function DiskImage() {
    _classCallCheck(this, DiskImage);

    DiskImage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiskImage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DiskImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskImage} obj Optional instance to populate.
     * @return {module:model/DiskImage} The populated <code>DiskImage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiskImage();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _DiskImageDetail["default"].constructFromObject(data['Image']);
        }

        if (data.hasOwnProperty('Volume')) {
          obj['Volume'] = _VolumeDetail["default"].constructFromObject(data['Volume']);
        }
      }

      return obj;
    }
  }]);

  return DiskImage;
}();
/**
 * @member {String} Description
 */


DiskImage.prototype['Description'] = undefined;
/**
 * @member {module:model/DiskImageDetail} Image
 */

DiskImage.prototype['Image'] = undefined;
/**
 * @member {module:model/VolumeDetail} Volume
 */

DiskImage.prototype['Volume'] = undefined;
var _default = DiskImage;
exports["default"] = _default;