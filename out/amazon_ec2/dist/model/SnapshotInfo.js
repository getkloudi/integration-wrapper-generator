"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SnapshotState = _interopRequireDefault(require("./SnapshotState"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnapshotInfo model module.
 * @module model/SnapshotInfo
 * @version 1.1.0
 */
var SnapshotInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnapshotInfo</code>.
   * Information about a snapshot.
   * @alias module:model/SnapshotInfo
   */
  function SnapshotInfo() {
    _classCallCheck(this, SnapshotInfo);

    SnapshotInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnapshotInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnapshotInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotInfo} obj Optional instance to populate.
     * @return {module:model/SnapshotInfo} The populated <code>SnapshotInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnapshotInfo();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'String');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _SnapshotState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }

        if (data.hasOwnProperty('VolumeSize')) {
          obj['VolumeSize'] = _ApiClient["default"].convertToType(data['VolumeSize'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SnapshotInfo;
}();
/**
 * @member {String} Description
 */


SnapshotInfo.prototype['Description'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

SnapshotInfo.prototype['Encrypted'] = undefined;
/**
 * @member {String} OwnerId
 */

SnapshotInfo.prototype['OwnerId'] = undefined;
/**
 * @member {String} Progress
 */

SnapshotInfo.prototype['Progress'] = undefined;
/**
 * @member {String} SnapshotId
 */

SnapshotInfo.prototype['SnapshotId'] = undefined;
/**
 * @member {Date} StartTime
 */

SnapshotInfo.prototype['StartTime'] = undefined;
/**
 * @member {module:model/SnapshotState} State
 */

SnapshotInfo.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

SnapshotInfo.prototype['Tags'] = undefined;
/**
 * @member {String} VolumeId
 */

SnapshotInfo.prototype['VolumeId'] = undefined;
/**
 * @member {Number} VolumeSize
 */

SnapshotInfo.prototype['VolumeSize'] = undefined;
var _default = SnapshotInfo;
exports["default"] = _default;