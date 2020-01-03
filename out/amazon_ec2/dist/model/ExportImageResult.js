"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageFormat = _interopRequireDefault(require("./DiskImageFormat"));

var _ExportTaskS3Location = _interopRequireDefault(require("./ExportTaskS3Location"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportImageResult model module.
 * @module model/ExportImageResult
 * @version 1.0.0
 */
var ExportImageResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportImageResult</code>.
   * @alias module:model/ExportImageResult
   */
  function ExportImageResult() {
    _classCallCheck(this, ExportImageResult);

    ExportImageResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportImageResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportImageResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportImageResult} obj Optional instance to populate.
     * @return {module:model/ExportImageResult} The populated <code>ExportImageResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportImageResult();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskImageFormat')) {
          obj['DiskImageFormat'] = _DiskImageFormat["default"].constructFromObject(data['DiskImageFormat']);
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

        if (data.hasOwnProperty('RoleName')) {
          obj['RoleName'] = _ApiClient["default"].convertToType(data['RoleName'], 'String');
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

  return ExportImageResult;
}();
/**
 * @member {String} Description
 */


ExportImageResult.prototype['Description'] = undefined;
/**
 * @member {module:model/DiskImageFormat} DiskImageFormat
 */

ExportImageResult.prototype['DiskImageFormat'] = undefined;
/**
 * @member {String} ExportImageTaskId
 */

ExportImageResult.prototype['ExportImageTaskId'] = undefined;
/**
 * @member {String} ImageId
 */

ExportImageResult.prototype['ImageId'] = undefined;
/**
 * @member {String} Progress
 */

ExportImageResult.prototype['Progress'] = undefined;
/**
 * @member {String} RoleName
 */

ExportImageResult.prototype['RoleName'] = undefined;
/**
 * @member {module:model/ExportTaskS3Location} S3ExportLocation
 */

ExportImageResult.prototype['S3ExportLocation'] = undefined;
/**
 * @member {String} Status
 */

ExportImageResult.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

ExportImageResult.prototype['StatusMessage'] = undefined;
var _default = ExportImageResult;
exports["default"] = _default;