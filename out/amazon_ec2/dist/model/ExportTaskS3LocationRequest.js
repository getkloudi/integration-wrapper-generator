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
 * The ExportTaskS3LocationRequest model module.
 * @module model/ExportTaskS3LocationRequest
 * @version 1.1.0
 */
var ExportTaskS3LocationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportTaskS3LocationRequest</code>.
   * Describes the destination for an export image task.
   * @alias module:model/ExportTaskS3LocationRequest
   * @param s3Bucket {String} 
   */
  function ExportTaskS3LocationRequest(s3Bucket) {
    _classCallCheck(this, ExportTaskS3LocationRequest);

    ExportTaskS3LocationRequest.initialize(this, s3Bucket);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportTaskS3LocationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, s3Bucket) {
      obj['S3Bucket'] = s3Bucket;
    }
    /**
     * Constructs a <code>ExportTaskS3LocationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportTaskS3LocationRequest} obj Optional instance to populate.
     * @return {module:model/ExportTaskS3LocationRequest} The populated <code>ExportTaskS3LocationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportTaskS3LocationRequest();

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

  return ExportTaskS3LocationRequest;
}();
/**
 * @member {String} S3Bucket
 */


ExportTaskS3LocationRequest.prototype['S3Bucket'] = undefined;
/**
 * @member {String} S3Prefix
 */

ExportTaskS3LocationRequest.prototype['S3Prefix'] = undefined;
var _default = ExportTaskS3LocationRequest;
exports["default"] = _default;