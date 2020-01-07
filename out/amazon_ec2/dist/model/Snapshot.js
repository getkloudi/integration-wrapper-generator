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
 * The Snapshot model module.
 * @module model/Snapshot
 * @version 1.1.0
 */
var Snapshot =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Snapshot</code>.
   * Describes a snapshot.
   * @alias module:model/Snapshot
   */
  function Snapshot() {
    _classCallCheck(this, Snapshot);

    Snapshot.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Snapshot, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Snapshot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snapshot} obj Optional instance to populate.
     * @return {module:model/Snapshot} The populated <code>Snapshot</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Snapshot();

        if (data.hasOwnProperty('DataEncryptionKeyId')) {
          obj['DataEncryptionKeyId'] = _ApiClient["default"].convertToType(data['DataEncryptionKeyId'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('OwnerAlias')) {
          obj['OwnerAlias'] = _ApiClient["default"].convertToType(data['OwnerAlias'], 'String');
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

        if (data.hasOwnProperty('StateMessage')) {
          obj['StateMessage'] = _ApiClient["default"].convertToType(data['StateMessage'], 'String');
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

  return Snapshot;
}();
/**
 * @member {String} DataEncryptionKeyId
 */


Snapshot.prototype['DataEncryptionKeyId'] = undefined;
/**
 * @member {String} Description
 */

Snapshot.prototype['Description'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

Snapshot.prototype['Encrypted'] = undefined;
/**
 * @member {String} KmsKeyId
 */

Snapshot.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} OwnerAlias
 */

Snapshot.prototype['OwnerAlias'] = undefined;
/**
 * @member {String} OwnerId
 */

Snapshot.prototype['OwnerId'] = undefined;
/**
 * @member {String} Progress
 */

Snapshot.prototype['Progress'] = undefined;
/**
 * @member {String} SnapshotId
 */

Snapshot.prototype['SnapshotId'] = undefined;
/**
 * @member {Date} StartTime
 */

Snapshot.prototype['StartTime'] = undefined;
/**
 * @member {module:model/SnapshotState} State
 */

Snapshot.prototype['State'] = undefined;
/**
 * @member {String} StateMessage
 */

Snapshot.prototype['StateMessage'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Snapshot.prototype['Tags'] = undefined;
/**
 * @member {String} VolumeId
 */

Snapshot.prototype['VolumeId'] = undefined;
/**
 * @member {Number} VolumeSize
 */

Snapshot.prototype['VolumeSize'] = undefined;
var _default = Snapshot;
exports["default"] = _default;