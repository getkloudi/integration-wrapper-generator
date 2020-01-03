"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportTaskS3Location model module.
 * @module model/ExportTaskS3Location
 * @version 1.0.0
 */
var ExportTaskS3Location =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportTaskS3Location</code>.
   * Describes the destination for an export image task.
   * @alias module:model/ExportTaskS3Location
   */
  function ExportTaskS3Location() {
    _classCallCheck(this, ExportTaskS3Location);

    ExportTaskS3Location.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportTaskS3Location, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportTaskS3Location</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportTaskS3Location} obj Optional instance to populate.
     * @return {module:model/ExportTaskS3Location} The populated <code>ExportTaskS3Location</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportTaskS3Location();

        if (data.hasOwnProperty('S3Bucket')) {
          obj['S3Bucket'] = _ApiClient["default"].convertToType(data['S3Bucket'], 'String');
        }

        if (data.hasOwnProperty('S3Prefix')) {
          obj['S3Prefix'] = _ApiClient["default"].convertToType(data['S3Prefix'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ExportTaskS3Location;
}();
/**
 * @member {String} S3Bucket
 */


ExportTaskS3Location.prototype['S3Bucket'] = undefined;
/**
 * @member {String} S3Prefix
 */

ExportTaskS3Location.prototype['S3Prefix'] = undefined;
var _default = ExportTaskS3Location;
exports["default"] = _default;