"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DescribeFastSnapshotRestoreSuccessItem = _interopRequireDefault(require("./DescribeFastSnapshotRestoreSuccessItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFastSnapshotRestoresResult model module.
 * @module model/DescribeFastSnapshotRestoresResult
 * @version 1.0.0
 */
var DescribeFastSnapshotRestoresResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFastSnapshotRestoresResult</code>.
   * @alias module:model/DescribeFastSnapshotRestoresResult
   */
  function DescribeFastSnapshotRestoresResult() {
    _classCallCheck(this, DescribeFastSnapshotRestoresResult);

    DescribeFastSnapshotRestoresResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFastSnapshotRestoresResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFastSnapshotRestoresResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFastSnapshotRestoresResult} obj Optional instance to populate.
     * @return {module:model/DescribeFastSnapshotRestoresResult} The populated <code>DescribeFastSnapshotRestoresResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFastSnapshotRestoresResult();

        if (data.hasOwnProperty('FastSnapshotRestores')) {
          obj['FastSnapshotRestores'] = _ApiClient["default"].convertToType(data['FastSnapshotRestores'], [_DescribeFastSnapshotRestoreSuccessItem["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFastSnapshotRestoresResult;
}();
/**
 * @member {Array.<module:model/DescribeFastSnapshotRestoreSuccessItem>} FastSnapshotRestores
 */


DescribeFastSnapshotRestoresResult.prototype['FastSnapshotRestores'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFastSnapshotRestoresResult.prototype['NextToken'] = undefined;
var _default = DescribeFastSnapshotRestoresResult;
exports["default"] = _default;