"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SnapshotTaskDetail = _interopRequireDefault(require("./SnapshotTaskDetail"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ImportSnapshotTask model module.
 * @module model/ImportSnapshotTask
 * @version 1.1.0
 */
var ImportSnapshotTask =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportSnapshotTask</code>.
   * Describes an import snapshot task.
   * @alias module:model/ImportSnapshotTask
   */
  function ImportSnapshotTask() {
    _classCallCheck(this, ImportSnapshotTask);

    ImportSnapshotTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportSnapshotTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImportSnapshotTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportSnapshotTask} obj Optional instance to populate.
     * @return {module:model/ImportSnapshotTask} The populated <code>ImportSnapshotTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportSnapshotTask();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ImportTaskId')) {
          obj['ImportTaskId'] = _ApiClient["default"].convertToType(data['ImportTaskId'], 'String');
        }

        if (data.hasOwnProperty('SnapshotTaskDetail')) {
          obj['SnapshotTaskDetail'] = _SnapshotTaskDetail["default"].constructFromObject(data['SnapshotTaskDetail']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ImportSnapshotTask;
}();
/**
 * @member {String} Description
 */


ImportSnapshotTask.prototype['Description'] = undefined;
/**
 * @member {String} ImportTaskId
 */

ImportSnapshotTask.prototype['ImportTaskId'] = undefined;
/**
 * @member {module:model/SnapshotTaskDetail} SnapshotTaskDetail
 */

ImportSnapshotTask.prototype['SnapshotTaskDetail'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ImportSnapshotTask.prototype['Tags'] = undefined;
var _default = ImportSnapshotTask;
exports["default"] = _default;