"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FastSnapshotRestoreStateCode = _interopRequireDefault(require("./FastSnapshotRestoreStateCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnableFastSnapshotRestoreSuccessItem model module.
 * @module model/EnableFastSnapshotRestoreSuccessItem
 * @version 1.0.0
 */
var EnableFastSnapshotRestoreSuccessItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableFastSnapshotRestoreSuccessItem</code>.
   * Describes fast snapshot restores that were successfully enabled.
   * @alias module:model/EnableFastSnapshotRestoreSuccessItem
   */
  function EnableFastSnapshotRestoreSuccessItem() {
    _classCallCheck(this, EnableFastSnapshotRestoreSuccessItem);

    EnableFastSnapshotRestoreSuccessItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableFastSnapshotRestoreSuccessItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnableFastSnapshotRestoreSuccessItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableFastSnapshotRestoreSuccessItem} obj Optional instance to populate.
     * @return {module:model/EnableFastSnapshotRestoreSuccessItem} The populated <code>EnableFastSnapshotRestoreSuccessItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableFastSnapshotRestoreSuccessItem();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('DisabledTime')) {
          obj['DisabledTime'] = _ApiClient["default"].convertToType(data['DisabledTime'], 'Date');
        }

        if (data.hasOwnProperty('DisablingTime')) {
          obj['DisablingTime'] = _ApiClient["default"].convertToType(data['DisablingTime'], 'Date');
        }

        if (data.hasOwnProperty('EnabledTime')) {
          obj['EnabledTime'] = _ApiClient["default"].convertToType(data['EnabledTime'], 'Date');
        }

        if (data.hasOwnProperty('EnablingTime')) {
          obj['EnablingTime'] = _ApiClient["default"].convertToType(data['EnablingTime'], 'Date');
        }

        if (data.hasOwnProperty('OptimizingTime')) {
          obj['OptimizingTime'] = _ApiClient["default"].convertToType(data['OptimizingTime'], 'Date');
        }

        if (data.hasOwnProperty('OwnerAlias')) {
          obj['OwnerAlias'] = _ApiClient["default"].convertToType(data['OwnerAlias'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _FastSnapshotRestoreStateCode["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StateTransitionReason')) {
          obj['StateTransitionReason'] = _ApiClient["default"].convertToType(data['StateTransitionReason'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EnableFastSnapshotRestoreSuccessItem;
}();
/**
 * @member {String} AvailabilityZone
 */


EnableFastSnapshotRestoreSuccessItem.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Date} DisabledTime
 */

EnableFastSnapshotRestoreSuccessItem.prototype['DisabledTime'] = undefined;
/**
 * @member {Date} DisablingTime
 */

EnableFastSnapshotRestoreSuccessItem.prototype['DisablingTime'] = undefined;
/**
 * @member {Date} EnabledTime
 */

EnableFastSnapshotRestoreSuccessItem.prototype['EnabledTime'] = undefined;
/**
 * @member {Date} EnablingTime
 */

EnableFastSnapshotRestoreSuccessItem.prototype['EnablingTime'] = undefined;
/**
 * @member {Date} OptimizingTime
 */

EnableFastSnapshotRestoreSuccessItem.prototype['OptimizingTime'] = undefined;
/**
 * @member {String} OwnerAlias
 */

EnableFastSnapshotRestoreSuccessItem.prototype['OwnerAlias'] = undefined;
/**
 * @member {String} OwnerId
 */

EnableFastSnapshotRestoreSuccessItem.prototype['OwnerId'] = undefined;
/**
 * @member {String} SnapshotId
 */

EnableFastSnapshotRestoreSuccessItem.prototype['SnapshotId'] = undefined;
/**
 * @member {module:model/FastSnapshotRestoreStateCode} State
 */

EnableFastSnapshotRestoreSuccessItem.prototype['State'] = undefined;
/**
 * @member {String} StateTransitionReason
 */

EnableFastSnapshotRestoreSuccessItem.prototype['StateTransitionReason'] = undefined;
var _default = EnableFastSnapshotRestoreSuccessItem;
exports["default"] = _default;