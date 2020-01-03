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
 * The ExportToS3TaskSpecification model module.
 * @module model/ExportToS3TaskSpecification
 * @version 1.0.0
 */
var ExportToS3TaskSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportToS3TaskSpecification</code>.
   * Describes an instance export task.
   * @alias module:model/ExportToS3TaskSpecification
   */
  function ExportToS3TaskSpecification() {
    _classCallCheck(this, ExportToS3TaskSpecification);

    ExportToS3TaskSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportToS3TaskSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportToS3TaskSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportToS3TaskSpecification} obj Optional instance to populate.
     * @return {module:model/ExportToS3TaskSpecification} The populated <code>ExportToS3TaskSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportToS3TaskSpecification();

        if (data.hasOwnProperty('ContainerFormat')) {
          obj['ContainerFormat'] = _ContainerFormat["default"].constructFromObject(data['ContainerFormat']);
        }

        if (data.hasOwnProperty('DiskImageFormat')) {
          obj['DiskImageFormat'] = _DiskImageFormat["default"].constructFromObject(data['DiskImageFormat']);
        }

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

  return ExportToS3TaskSpecification;
}();
/**
 * @member {module:model/ContainerFormat} ContainerFormat
 */


ExportToS3TaskSpecification.prototype['ContainerFormat'] = undefined;
/**
 * @member {module:model/DiskImageFormat} DiskImageFormat
 */

ExportToS3TaskSpecification.prototype['DiskImageFormat'] = undefined;
/**
 * @member {String} S3Bucket
 */

ExportToS3TaskSpecification.prototype['S3Bucket'] = undefined;
/**
 * @member {String} S3Prefix
 */

ExportToS3TaskSpecification.prototype['S3Prefix'] = undefined;
var _default = ExportToS3TaskSpecification;
exports["default"] = _default;