"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DisableFastSnapshotRestoreStateErrorItem = _interopRequireDefault(require("./DisableFastSnapshotRestoreStateErrorItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DisableFastSnapshotRestoreErrorItem model module.
 * @module model/DisableFastSnapshotRestoreErrorItem
 * @version 1.0.0
 */
var DisableFastSnapshotRestoreErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisableFastSnapshotRestoreErrorItem</code>.
   * Contains information about the errors that occurred when disabling fast snapshot restores.
   * @alias module:model/DisableFastSnapshotRestoreErrorItem
   */
  function DisableFastSnapshotRestoreErrorItem() {
    _classCallCheck(this, DisableFastSnapshotRestoreErrorItem);

    DisableFastSnapshotRestoreErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisableFastSnapshotRestoreErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisableFastSnapshotRestoreErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableFastSnapshotRestoreErrorItem} obj Optional instance to populate.
     * @return {module:model/DisableFastSnapshotRestoreErrorItem} The populated <code>DisableFastSnapshotRestoreErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisableFastSnapshotRestoreErrorItem();

        if (data.hasOwnProperty('FastSnapshotRestoreStateErrors')) {
          obj['FastSnapshotRestoreStateErrors'] = _ApiClient["default"].convertToType(data['FastSnapshotRestoreStateErrors'], [_DisableFastSnapshotRestoreStateErrorItem["default"]]);
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DisableFastSnapshotRestoreErrorItem;
}();
/**
 * @member {Array.<module:model/DisableFastSnapshotRestoreStateErrorItem>} FastSnapshotRestoreStateErrors
 */


DisableFastSnapshotRestoreErrorItem.prototype['FastSnapshotRestoreStateErrors'] = undefined;
/**
 * @member {String} SnapshotId
 */

DisableFastSnapshotRestoreErrorItem.prototype['SnapshotId'] = undefined;
var _default = DisableFastSnapshotRestoreErrorItem;
exports["default"] = _default;