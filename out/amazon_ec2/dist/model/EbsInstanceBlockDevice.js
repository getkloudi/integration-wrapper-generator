"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttachmentStatus = _interopRequireDefault(require("./AttachmentStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EbsInstanceBlockDevice model module.
 * @module model/EbsInstanceBlockDevice
 * @version 1.1.0
 */
var EbsInstanceBlockDevice =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EbsInstanceBlockDevice</code>.
   * Describes a parameter used to set up an EBS volume in a block device mapping.
   * @alias module:model/EbsInstanceBlockDevice
   */
  function EbsInstanceBlockDevice() {
    _classCallCheck(this, EbsInstanceBlockDevice);

    EbsInstanceBlockDevice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EbsInstanceBlockDevice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EbsInstanceBlockDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EbsInstanceBlockDevice} obj Optional instance to populate.
     * @return {module:model/EbsInstanceBlockDevice} The populated <code>EbsInstanceBlockDevice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EbsInstanceBlockDevice();

        if (data.hasOwnProperty('AttachTime')) {
          obj['AttachTime'] = _ApiClient["default"].convertToType(data['AttachTime'], 'Date');
        }

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _AttachmentStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EbsInstanceBlockDevice;
}();
/**
 * @member {Date} AttachTime
 */


EbsInstanceBlockDevice.prototype['AttachTime'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

EbsInstanceBlockDevice.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {module:model/AttachmentStatus} Status
 */

EbsInstanceBlockDevice.prototype['Status'] = undefined;
/**
 * @member {String} VolumeId
 */

EbsInstanceBlockDevice.prototype['VolumeId'] = undefined;
var _default = EbsInstanceBlockDevice;
exports["default"] = _default;