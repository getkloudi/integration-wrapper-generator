"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnableFastSnapshotRestoreStateErrorItem = _interopRequireDefault(require("./EnableFastSnapshotRestoreStateErrorItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnableFastSnapshotRestoreErrorItem model module.
 * @module model/EnableFastSnapshotRestoreErrorItem
 * @version 1.1.0
 */
var EnableFastSnapshotRestoreErrorItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableFastSnapshotRestoreErrorItem</code>.
   * Contains information about the errors that occurred when enabling fast snapshot restores.
   * @alias module:model/EnableFastSnapshotRestoreErrorItem
   */
  function EnableFastSnapshotRestoreErrorItem() {
    _classCallCheck(this, EnableFastSnapshotRestoreErrorItem);

    EnableFastSnapshotRestoreErrorItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableFastSnapshotRestoreErrorItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnableFastSnapshotRestoreErrorItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableFastSnapshotRestoreErrorItem} obj Optional instance to populate.
     * @return {module:model/EnableFastSnapshotRestoreErrorItem} The populated <code>EnableFastSnapshotRestoreErrorItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableFastSnapshotRestoreErrorItem();

        if (data.hasOwnProperty('FastSnapshotRestoreStateErrors')) {
          obj['FastSnapshotRestoreStateErrors'] = _ApiClient["default"].convertToType(data['FastSnapshotRestoreStateErrors'], [_EnableFastSnapshotRestoreStateErrorItem["default"]]);
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EnableFastSnapshotRestoreErrorItem;
}();
/**
 * @member {Array.<module:model/EnableFastSnapshotRestoreStateErrorItem>} FastSnapshotRestoreStateErrors
 */


EnableFastSnapshotRestoreErrorItem.prototype['FastSnapshotRestoreStateErrors'] = undefined;
/**
 * @member {String} SnapshotId
 */

EnableFastSnapshotRestoreErrorItem.prototype['SnapshotId'] = undefined;
var _default = EnableFastSnapshotRestoreErrorItem;
exports["default"] = _default;