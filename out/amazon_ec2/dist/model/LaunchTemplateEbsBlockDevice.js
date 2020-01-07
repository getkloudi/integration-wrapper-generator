"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeType = _interopRequireDefault(require("./VolumeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateEbsBlockDevice model module.
 * @module model/LaunchTemplateEbsBlockDevice
 * @version 1.1.0
 */
var LaunchTemplateEbsBlockDevice =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateEbsBlockDevice</code>.
   * Describes a block device for an EBS volume.
   * @alias module:model/LaunchTemplateEbsBlockDevice
   */
  function LaunchTemplateEbsBlockDevice() {
    _classCallCheck(this, LaunchTemplateEbsBlockDevice);

    LaunchTemplateEbsBlockDevice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateEbsBlockDevice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateEbsBlockDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateEbsBlockDevice} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateEbsBlockDevice} The populated <code>LaunchTemplateEbsBlockDevice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateEbsBlockDevice();

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Iops')) {
          obj['Iops'] = _ApiClient["default"].convertToType(data['Iops'], 'Number');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('VolumeSize')) {
          obj['VolumeSize'] = _ApiClient["default"].convertToType(data['VolumeSize'], 'Number');
        }

        if (data.hasOwnProperty('VolumeType')) {
          obj['VolumeType'] = _VolumeType["default"].constructFromObject(data['VolumeType']);
        }
      }

      return obj;
    }
  }]);

  return LaunchTemplateEbsBlockDevice;
}();
/**
 * @member {Boolean} DeleteOnTermination
 */


LaunchTemplateEbsBlockDevice.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

LaunchTemplateEbsBlockDevice.prototype['Encrypted'] = undefined;
/**
 * @member {Number} Iops
 */

LaunchTemplateEbsBlockDevice.prototype['Iops'] = undefined;
/**
 * @member {String} KmsKeyId
 */

LaunchTemplateEbsBlockDevice.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} SnapshotId
 */

LaunchTemplateEbsBlockDevice.prototype['SnapshotId'] = undefined;
/**
 * @member {Number} VolumeSize
 */

LaunchTemplateEbsBlockDevice.prototype['VolumeSize'] = undefined;
/**
 * @member {module:model/VolumeType} VolumeType
 */

LaunchTemplateEbsBlockDevice.prototype['VolumeType'] = undefined;
var _default = LaunchTemplateEbsBlockDevice;
exports["default"] = _default;