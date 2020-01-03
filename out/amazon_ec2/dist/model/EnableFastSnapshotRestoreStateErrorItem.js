"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnableFastSnapshotRestoreStateError = _interopRequireDefault(require("./EnableFastSnapshotRestoreStateError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnableFastSnapshotRestoreStateErrorItem model module.
 * @module model/EnableFastSnapshotRestoreStateErrorItem
 * @version 1.0.0
 */
var EnableFastSnapshotRestoreStateErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableFastSnapshotRestoreStateErrorItem</code>.
   * Contains information about an error that occurred when enabling fast snapshot restores.
   * @alias module:model/EnableFastSnapshotRestoreStateErrorItem
   */
  function EnableFastSnapshotRestoreStateErrorItem() {
    _classCallCheck(this, EnableFastSnapshotRestoreStateErrorItem);

    EnableFastSnapshotRestoreStateErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableFastSnapshotRestoreStateErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnableFastSnapshotRestoreStateErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableFastSnapshotRestoreStateErrorItem} obj Optional instance to populate.
     * @return {module:model/EnableFastSnapshotRestoreStateErrorItem} The populated <code>EnableFastSnapshotRestoreStateErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableFastSnapshotRestoreStateErrorItem();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _EnableFastSnapshotRestoreStateError["default"].constructFromObject(data['Error']);
        }
      }

      return obj;
    }
  }]);

  return EnableFastSnapshotRestoreStateErrorItem;
}();
/**
 * @member {String} AvailabilityZone
 */


EnableFastSnapshotRestoreStateErrorItem.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/EnableFastSnapshotRestoreStateError} Error
 */

EnableFastSnapshotRestoreStateErrorItem.prototype['Error'] = undefined;
var _default = EnableFastSnapshotRestoreStateErrorItem;
exports["default"] = _default;