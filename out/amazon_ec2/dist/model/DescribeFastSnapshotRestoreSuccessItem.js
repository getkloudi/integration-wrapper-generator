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
 * The DescribeFastSnapshotRestoreSuccessItem model module.
 * @module model/DescribeFastSnapshotRestoreSuccessItem
 * @version 1.1.0
 */
var DescribeFastSnapshotRestoreSuccessItem =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFastSnapshotRestoreSuccessItem</code>.
   * Describes fast snapshot restores for a snapshot.
   * @alias module:model/DescribeFastSnapshotRestoreSuccessItem
   */
  function DescribeFastSnapshotRestoreSuccessItem() {
    _classCallCheck(this, DescribeFastSnapshotRestoreSuccessItem);

    DescribeFastSnapshotRestoreSuccessItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFastSnapshotRestoreSuccessItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFastSnapshotRestoreSuccessItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFastSnapshotRestoreSuccessItem} obj Optional instance to populate.
     * @return {module:model/DescribeFastSnapshotRestoreSuccessItem} The populated <code>DescribeFastSnapshotRestoreSuccessItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFastSnapshotRestoreSuccessItem();

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

  return DescribeFastSnapshotRestoreSuccessItem;
}();
/**
 * @member {String} AvailabilityZone
 */


DescribeFastSnapshotRestoreSuccessItem.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Date} DisabledTime
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['DisabledTime'] = undefined;
/**
 * @member {Date} DisablingTime
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['DisablingTime'] = undefined;
/**
 * @member {Date} EnabledTime
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['EnabledTime'] = undefined;
/**
 * @member {Date} EnablingTime
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['EnablingTime'] = undefined;
/**
 * @member {Date} OptimizingTime
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['OptimizingTime'] = undefined;
/**
 * @member {String} OwnerAlias
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['OwnerAlias'] = undefined;
/**
 * @member {String} OwnerId
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['OwnerId'] = undefined;
/**
 * @member {String} SnapshotId
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['SnapshotId'] = undefined;
/**
 * @member {module:model/FastSnapshotRestoreStateCode} State
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['State'] = undefined;
/**
 * @member {String} StateTransitionReason
 */

DescribeFastSnapshotRestoreSuccessItem.prototype['StateTransitionReason'] = undefined;
var _default = DescribeFastSnapshotRestoreSuccessItem;
exports["default"] = _default;