"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageFormat = _interopRequireDefault(require("./DiskImageFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DiskImageDescription model module.
 * @module model/DiskImageDescription
 * @version 1.1.0
 */
var DiskImageDescription =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DiskImageDescription</code>.
   * Describes a disk image.
   * @alias module:model/DiskImageDescription
   */
  function DiskImageDescription() {
    _classCallCheck(this, DiskImageDescription);

    DiskImageDescription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiskImageDescription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DiskImageDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskImageDescription} obj Optional instance to populate.
     * @return {module:model/DiskImageDescription} The populated <code>DiskImageDescription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiskImageDescription();

        if (data.hasOwnProperty('Checksum')) {
          obj['Checksum'] = _ApiClient["default"].convertToType(data['Checksum'], 'String');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _DiskImageFormat["default"].constructFromObject(data['Format']);
        }

        if (data.hasOwnProperty('ImportManifestUrl')) {
          obj['ImportManifestUrl'] = _ApiClient["default"].convertToType(data['ImportManifestUrl'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DiskImageDescription;
}();
/**
 * @member {String} Checksum
 */


DiskImageDescription.prototype['Checksum'] = undefined;
/**
 * @member {module:model/DiskImageFormat} Format
 */

DiskImageDescription.prototype['Format'] = undefined;
/**
 * @member {String} ImportManifestUrl
 */

DiskImageDescription.prototype['ImportManifestUrl'] = undefined;
/**
 * @member {Number} Size
 */

DiskImageDescription.prototype['Size'] = undefined;
var _default = DiskImageDescription;
exports["default"] = _default;