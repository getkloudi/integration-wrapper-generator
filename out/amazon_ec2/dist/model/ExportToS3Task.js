"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerFormat = _interopRequireDefault(require("./ContainerFormat"));

var _DiskImageFormat = _interopRequireDefault(require("./DiskImageFormat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportToS3Task model module.
 * @module model/ExportToS3Task
 * @version 1.1.0
 */
var ExportToS3Task =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportToS3Task</code>.
   * Describes the format and location for an instance export task.
   * @alias module:model/ExportToS3Task
   */
  function ExportToS3Task() {
    _classCallCheck(this, ExportToS3Task);

    ExportToS3Task.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportToS3Task, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportToS3Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportToS3Task} obj Optional instance to populate.
     * @return {module:model/ExportToS3Task} The populated <code>ExportToS3Task</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportToS3Task();

        if (data.hasOwnProperty('ContainerFormat')) {
          obj['ContainerFormat'] = _ContainerFormat["default"].constructFromObject(data['ContainerFormat']);
        }

        if (data.hasOwnProperty('DiskImageFormat')) {
          obj['DiskImageFormat'] = _DiskImageFormat["default"].constructFromObject(data['DiskImageFormat']);
        }

        if (data.hasOwnProperty('S3Bucket')) {
          obj['S3Bucket'] = _ApiClient["default"].convertToType(data['S3Bucket'], 'String');
        }

        if (data.hasOwnProperty('S3Key')) {
          obj['S3Key'] = _ApiClient["default"].convertToType(data['S3Key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportToS3Task;
}();
/**
 * @member {module:model/ContainerFormat} ContainerFormat
 */


ExportToS3Task.prototype['ContainerFormat'] = undefined;
/**
 * @member {module:model/DiskImageFormat} DiskImageFormat
 */

ExportToS3Task.prototype['DiskImageFormat'] = undefined;
/**
 * @member {String} S3Bucket
 */

ExportToS3Task.prototype['S3Bucket'] = undefined;
/**
 * @member {String} S3Key
 */

ExportToS3Task.prototype['S3Key'] = undefined;
var _default = ExportToS3Task;
exports["default"] = _default;