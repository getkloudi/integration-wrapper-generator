"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DisableFastSnapshotRestoreStateError = _interopRequireDefault(require("./DisableFastSnapshotRestoreStateError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DisableFastSnapshotRestoreStateErrorItem model module.
 * @module model/DisableFastSnapshotRestoreStateErrorItem
 * @version 1.0.0
 */
var DisableFastSnapshotRestoreStateErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisableFastSnapshotRestoreStateErrorItem</code>.
   * Contains information about an error that occurred when disabling fast snapshot restores.
   * @alias module:model/DisableFastSnapshotRestoreStateErrorItem
   */
  function DisableFastSnapshotRestoreStateErrorItem() {
    _classCallCheck(this, DisableFastSnapshotRestoreStateErrorItem);

    DisableFastSnapshotRestoreStateErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisableFastSnapshotRestoreStateErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisableFastSnapshotRestoreStateErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableFastSnapshotRestoreStateErrorItem} obj Optional instance to populate.
     * @return {module:model/DisableFastSnapshotRestoreStateErrorItem} The populated <code>DisableFastSnapshotRestoreStateErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisableFastSnapshotRestoreStateErrorItem();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _DisableFastSnapshotRestoreStateError["default"].constructFromObject(data['Error']);
        }
      }

      return obj;
    }
  }]);

  return DisableFastSnapshotRestoreStateErrorItem;
}();
/**
 * @member {String} AvailabilityZone
 */


DisableFastSnapshotRestoreStateErrorItem.prototype['AvailabilityZone'] = undefined;
/**
 * @member {module:model/DisableFastSnapshotRestoreStateError} Error
 */

DisableFastSnapshotRestoreStateErrorItem.prototype['Error'] = undefined;
var _default = DisableFastSnapshotRestoreStateErrorItem;
exports["default"] = _default;