"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExportTaskS3Location = _interopRequireDefault(require("./ExportTaskS3Location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportImageTask model module.
 * @module model/ExportImageTask
 * @version 1.1.0
 */
var ExportImageTask =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportImageTask</code>.
   * Describes an export image task.
   * @alias module:model/ExportImageTask
   */
  function ExportImageTask() {
    _classCallCheck(this, ExportImageTask);

    ExportImageTask.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportImageTask, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportImageTask</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportImageTask} obj Optional instance to populate.
     * @return {module:model/ExportImageTask} The populated <code>ExportImageTask</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportImageTask();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('ExportImageTaskId')) {
          obj['ExportImageTaskId'] = _ApiClient["default"].convertToType(data['ExportImageTaskId'], 'String');
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'String');
        }

        if (data.hasOwnProperty('S3ExportLocation')) {
          obj['S3ExportLocation'] = _ExportTaskS3Location["default"].constructFromObject(data['S3ExportLocation']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportImageTask;
}();
/**
 * @member {String} Description
 */


ExportImageTask.prototype['Description'] = undefined;
/**
 * @member {String} ExportImageTaskId
 */

ExportImageTask.prototype['ExportImageTaskId'] = undefined;
/**
 * @member {String} ImageId
 */

ExportImageTask.prototype['ImageId'] = undefined;
/**
 * @member {String} Progress
 */

ExportImageTask.prototype['Progress'] = undefined;
/**
 * @member {module:model/ExportTaskS3Location} S3ExportLocation
 */

ExportImageTask.prototype['S3ExportLocation'] = undefined;
/**
 * @member {String} Status
 */

ExportImageTask.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

ExportImageTask.prototype['StatusMessage'] = undefined;
var _default = ExportImageTask;
exports["default"] = _default;