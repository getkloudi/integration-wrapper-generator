"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EnableFastSnapshotRestoreErrorItem = _interopRequireDefault(require("./EnableFastSnapshotRestoreErrorItem"));

var _EnableFastSnapshotRestoreSuccessItem = _interopRequireDefault(require("./EnableFastSnapshotRestoreSuccessItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EnableFastSnapshotRestoresResult model module.
 * @module model/EnableFastSnapshotRestoresResult
 * @version 1.0.0
 */
var EnableFastSnapshotRestoresResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>EnableFastSnapshotRestoresResult</code>.
   * @alias module:model/EnableFastSnapshotRestoresResult
   */
  function EnableFastSnapshotRestoresResult() {
    _classCallCheck(this, EnableFastSnapshotRestoresResult);

    EnableFastSnapshotRestoresResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EnableFastSnapshotRestoresResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EnableFastSnapshotRestoresResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableFastSnapshotRestoresResult} obj Optional instance to populate.
     * @return {module:model/EnableFastSnapshotRestoresResult} The populated <code>EnableFastSnapshotRestoresResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EnableFastSnapshotRestoresResult();

        if (data.hasOwnProperty('Successful')) {
          obj['Successful'] = _ApiClient["default"].convertToType(data['Successful'], [_EnableFastSnapshotRestoreSuccessItem["default"]]);
        }

        if (data.hasOwnProperty('Unsuccessful')) {
          obj['Unsuccessful'] = _ApiClient["default"].convertToType(data['Unsuccessful'], [_EnableFastSnapshotRestoreErrorItem["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EnableFastSnapshotRestoresResult;
}();
/**
 * @member {Array.<module:model/EnableFastSnapshotRestoreSuccessItem>} Successful
 */


EnableFastSnapshotRestoresResult.prototype['Successful'] = undefined;
/**
 * @member {Array.<module:model/EnableFastSnapshotRestoreErrorItem>} Unsuccessful
 */

EnableFastSnapshotRestoresResult.prototype['Unsuccessful'] = undefined;
var _default = EnableFastSnapshotRestoresResult;
exports["default"] = _default;