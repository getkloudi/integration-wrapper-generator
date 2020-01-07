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
 * The DiskImageDetail model module.
 * @module model/DiskImageDetail
 * @version 1.1.0
 */
var DiskImageDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DiskImageDetail</code>.
   * Describes a disk image.
   * @alias module:model/DiskImageDetail
   * @param bytes {Number} 
   * @param format {module:model/DiskImageFormat} 
   * @param importManifestUrl {String} 
   */
  function DiskImageDetail(bytes, format, importManifestUrl) {
    _classCallCheck(this, DiskImageDetail);

    DiskImageDetail.initialize(this, bytes, format, importManifestUrl);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DiskImageDetail, null, [{
    key: "initialize",
    value: function initialize(obj, bytes, format, importManifestUrl) {
      obj['Bytes'] = bytes;
      obj['Format'] = format;
      obj['ImportManifestUrl'] = importManifestUrl;
    }
    /**
     * Constructs a <code>DiskImageDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DiskImageDetail} obj Optional instance to populate.
     * @return {module:model/DiskImageDetail} The populated <code>DiskImageDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DiskImageDetail();

        if (data.hasOwnProperty('Bytes')) {
          obj['Bytes'] = _ApiClient["default"].convertToType(data['Bytes'], 'Number');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _DiskImageFormat["default"].constructFromObject(data['Format']);
        }

        if (data.hasOwnProperty('ImportManifestUrl')) {
          obj['ImportManifestUrl'] = _ApiClient["default"].convertToType(data['ImportManifestUrl'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DiskImageDetail;
}();
/**
 * @member {Number} Bytes
 */


DiskImageDetail.prototype['Bytes'] = undefined;
/**
 * @member {module:model/DiskImageFormat} Format
 */

DiskImageDetail.prototype['Format'] = undefined;
/**
 * @member {String} ImportManifestUrl
 */

DiskImageDetail.prototype['ImportManifestUrl'] = undefined;
var _default = DiskImageDetail;
exports["default"] = _default;