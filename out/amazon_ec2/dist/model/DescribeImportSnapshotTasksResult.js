"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ImportSnapshotTask = _interopRequireDefault(require("./ImportSnapshotTask"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeImportSnapshotTasksResult model module.
 * @module model/DescribeImportSnapshotTasksResult
 * @version 1.0.0
 */
var DescribeImportSnapshotTasksResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeImportSnapshotTasksResult</code>.
   * @alias module:model/DescribeImportSnapshotTasksResult
   */
  function DescribeImportSnapshotTasksResult() {
    _classCallCheck(this, DescribeImportSnapshotTasksResult);

    DescribeImportSnapshotTasksResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeImportSnapshotTasksResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeImportSnapshotTasksResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeImportSnapshotTasksResult} obj Optional instance to populate.
     * @return {module:model/DescribeImportSnapshotTasksResult} The populated <code>DescribeImportSnapshotTasksResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeImportSnapshotTasksResult();

        if (data.hasOwnProperty('ImportSnapshotTasks')) {
          obj['ImportSnapshotTasks'] = _ApiClient["default"].convertToType(data['ImportSnapshotTasks'], [_ImportSnapshotTask["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeImportSnapshotTasksResult;
}();
/**
 * @member {Array.<module:model/ImportSnapshotTask>} ImportSnapshotTasks
 */


DescribeImportSnapshotTasksResult.prototype['ImportSnapshotTasks'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeImportSnapshotTasksResult.prototype['NextToken'] = undefined;
var _default = DescribeImportSnapshotTasksResult;
exports["default"] = _default;