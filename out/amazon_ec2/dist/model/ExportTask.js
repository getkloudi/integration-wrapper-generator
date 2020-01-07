"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportTaskState = _interopRequireDefault(require("./ExportTaskState"));

var _ExportToS3Task = _interopRequireDefault(require("./ExportToS3Task"));

var _InstanceExportDetails = _interopRequireDefault(require("./InstanceExportDetails"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportTask model module.
 * @module model/ExportTask
 * @version 1.1.0
 */
var ExportTask =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportTask</code>.
   * Describes an instance export task.
   * @alias module:model/ExportTask
   */
  function ExportTask() {
    _classCallCheck(this, ExportTask);

    ExportTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportTask} obj Optional instance to populate.
     * @return {module:model/ExportTask} The populated <code>ExportTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportTask();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ExportTaskId')) {
          obj['ExportTaskId'] = _ApiClient["default"].convertToType(data['ExportTaskId'], 'String');
        }

        if (data.hasOwnProperty('ExportToS3Task')) {
          obj['ExportToS3Task'] = _ExportToS3Task["default"].constructFromObject(data['ExportToS3Task']);
        }

        if (data.hasOwnProperty('InstanceExportDetails')) {
          obj['InstanceExportDetails'] = _InstanceExportDetails["default"].constructFromObject(data['InstanceExportDetails']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ExportTaskState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ExportTask;
}();
/**
 * @member {String} Description
 */


ExportTask.prototype['Description'] = undefined;
/**
 * @member {String} ExportTaskId
 */

ExportTask.prototype['ExportTaskId'] = undefined;
/**
 * @member {module:model/ExportToS3Task} ExportToS3Task
 */

ExportTask.prototype['ExportToS3Task'] = undefined;
/**
 * @member {module:model/InstanceExportDetails} InstanceExportDetails
 */

ExportTask.prototype['InstanceExportDetails'] = undefined;
/**
 * @member {module:model/ExportTaskState} State
 */

ExportTask.prototype['State'] = undefined;
/**
 * @member {String} StatusMessage
 */

ExportTask.prototype['StatusMessage'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ExportTask.prototype['Tags'] = undefined;
var _default = ExportTask;
exports["default"] = _default;