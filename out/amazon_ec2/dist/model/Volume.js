"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VolumeAttachment = _interopRequireDefault(require("./VolumeAttachment"));

var _VolumeState = _interopRequireDefault(require("./VolumeState"));

var _VolumeType = _interopRequireDefault(require("./VolumeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Volume model module.
 * @module model/Volume
 * @version 1.1.0
 */
var Volume =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Volume</code>.
   * Describes a volume.
   * @alias module:model/Volume
   */
  function Volume() {
    _classCallCheck(this, Volume);

    Volume.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Volume, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Volume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Volume} obj Optional instance to populate.
     * @return {module:model/Volume} The populated <code>Volume</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Volume();

        if (data.hasOwnProperty('Attachments')) {
          obj['Attachments'] = _ApiClient["default"].convertToType(data['Attachments'], [_VolumeAttachment["default"]]);
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('CreateTime')) {
          obj['CreateTime'] = _ApiClient["default"].convertToType(data['CreateTime'], 'Date');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('FastRestored')) {
          obj['FastRestored'] = _ApiClient["default"].convertToType(data['FastRestored'], 'Boolean');
        }

        if (data.hasOwnProperty('Iops')) {
          obj['Iops'] = _ApiClient["default"].convertToType(data['Iops'], 'Number');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VolumeState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }

        if (data.hasOwnProperty('VolumeType')) {
          obj['VolumeType'] = _VolumeType["default"].constructFromObject(data['VolumeType']);
        }
      }

      return obj;
    }
  }]);

  return Volume;
}();
/**
 * @member {Array.<module:model/VolumeAttachment>} Attachments
 */


Volume.prototype['Attachments'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

Volume.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Date} CreateTime
 */

Volume.prototype['CreateTime'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

Volume.prototype['Encrypted'] = undefined;
/**
 * @member {Boolean} FastRestored
 */

Volume.prototype['FastRestored'] = undefined;
/**
 * @member {Number} Iops
 */

Volume.prototype['Iops'] = undefined;
/**
 * @member {String} KmsKeyId
 */

Volume.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} OutpostArn
 */

Volume.prototype['OutpostArn'] = undefined;
/**
 * @member {Number} Size
 */

Volume.prototype['Size'] = undefined;
/**
 * @member {String} SnapshotId
 */

Volume.prototype['SnapshotId'] = undefined;
/**
 * @member {module:model/VolumeState} State
 */

Volume.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Volume.prototype['Tags'] = undefined;
/**
 * @member {String} VolumeId
 */

Volume.prototype['VolumeId'] = undefined;
/**
 * @member {module:model/VolumeType} VolumeType
 */

Volume.prototype['VolumeType'] = undefined;
var _default = Volume;
exports["default"] = _default;