"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DiskImageFormat = _interopRequireDefault(require("./DiskImageFormat"));

var _ExportTaskS3LocationRequest = _interopRequireDefault(require("./ExportTaskS3LocationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportImageRequest model module.
 * @module model/ExportImageRequest
 * @version 1.0.0
 */
var ExportImageRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportImageRequest</code>.
   * @alias module:model/ExportImageRequest
   * @param diskImageFormat {module:model/DiskImageFormat} 
   * @param imageId {String} 
   * @param s3ExportLocation {module:model/ExportTaskS3LocationRequest} 
   */
  function ExportImageRequest(diskImageFormat, imageId, s3ExportLocation) {
    _classCallCheck(this, ExportImageRequest);

    ExportImageRequest.initialize(this, diskImageFormat, imageId, s3ExportLocation);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportImageRequest, null, [{
    key: "initialize",
    value: function initialize(obj, diskImageFormat, imageId, s3ExportLocation) {
      obj['DiskImageFormat'] = diskImageFormat;
      obj['ImageId'] = imageId;
      obj['S3ExportLocation'] = s3ExportLocation;
    }
    /**
     * Constructs a <code>ExportImageRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportImageRequest} obj Optional instance to populate.
     * @return {module:model/ExportImageRequest} The populated <code>ExportImageRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportImageRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskImageFormat')) {
          obj['DiskImageFormat'] = _DiskImageFormat["default"].constructFromObject(data['DiskImageFormat']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ImageId')) {
          obj['ImageId'] = _ApiClient["default"].convertToType(data['ImageId'], 'String');
        }

        if (data.hasOwnProperty('RoleName')) {
          obj['RoleName'] = _ApiClient["default"].convertToType(data['RoleName'], 'String');
        }

        if (data.hasOwnProperty('S3ExportLocation')) {
          obj['S3ExportLocation'] = _ExportTaskS3LocationRequest["default"].constructFromObject(data['S3ExportLocation']);
        }
      }

      return obj;
    }
  }]);

  return ExportImageRequest;
}();
/**
 * @member {String} ClientToken
 */


ExportImageRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} Description
 */

ExportImageRequest.prototype['Description'] = undefined;
/**
 * @member {module:model/DiskImageFormat} DiskImageFormat
 */

ExportImageRequest.prototype['DiskImageFormat'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ExportImageRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ImageId
 */

ExportImageRequest.prototype['ImageId'] = undefined;
/**
 * @member {String} RoleName
 */

ExportImageRequest.prototype['RoleName'] = undefined;
/**
 * @member {module:model/ExportTaskS3LocationRequest} S3ExportLocation
 */

ExportImageRequest.prototype['S3ExportLocation'] = undefined;
var _default = ExportImageRequest;
exports["default"] = _default;