"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Snapshot = _interopRequireDefault(require("./Snapshot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeSnapshotsResult model module.
 * @module model/DescribeSnapshotsResult
 * @version 1.1.0
 */
var DescribeSnapshotsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSnapshotsResult</code>.
   * @alias module:model/DescribeSnapshotsResult
   */
  function DescribeSnapshotsResult() {
    _classCallCheck(this, DescribeSnapshotsResult);

    DescribeSnapshotsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSnapshotsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSnapshotsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSnapshotsResult} obj Optional instance to populate.
     * @return {module:model/DescribeSnapshotsResult} The populated <code>DescribeSnapshotsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSnapshotsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Snapshots')) {
          obj['Snapshots'] = _ApiClient["default"].convertToType(data['Snapshots'], [_Snapshot["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeSnapshotsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeSnapshotsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/Snapshot>} Snapshots
 */

DescribeSnapshotsResult.prototype['Snapshots'] = undefined;
var _default = DescribeSnapshotsResult;
exports["default"] = _default;