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
 * The S3Storage model module.
 * @module model/S3Storage
 * @version 1.1.0
 */
var S3Storage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>S3Storage</code>.
   * Describes the storage parameters for S3 and S3 buckets for an instance store-backed AMI.
   * @alias module:model/S3Storage
   */
  function S3Storage() {
    _classCallCheck(this, S3Storage);

    S3Storage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(S3Storage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>S3Storage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3Storage} obj Optional instance to populate.
     * @return {module:model/S3Storage} The populated <code>S3Storage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new S3Storage();

        if (data.hasOwnProperty('AWSAccessKeyId')) {
          obj['AWSAccessKeyId'] = _ApiClient["default"].convertToType(data['AWSAccessKeyId'], 'String');
        }

        if (data.hasOwnProperty('Bucket')) {
          obj['Bucket'] = _ApiClient["default"].convertToType(data['Bucket'], 'String');
        }

        if (data.hasOwnProperty('Prefix')) {
          obj['Prefix'] = _ApiClient["default"].convertToType(data['Prefix'], 'String');
        }

        if (data.hasOwnProperty('UploadPolicy')) {
          obj['UploadPolicy'] = _ApiClient["default"].convertToType(data['UploadPolicy'], 'String');
        }

        if (data.hasOwnProperty('UploadPolicySignature')) {
          obj['UploadPolicySignature'] = _ApiClient["default"].convertToType(data['UploadPolicySignature'], 'String');
        }
      }

      return obj;
    }
  }]);

  return S3Storage;
}();
/**
 * @member {String} AWSAccessKeyId
 */


S3Storage.prototype['AWSAccessKeyId'] = undefined;
/**
 * @member {String} Bucket
 */

S3Storage.prototype['Bucket'] = undefined;
/**
 * @member {String} Prefix
 */

S3Storage.prototype['Prefix'] = undefined;
/**
 * @member {String} UploadPolicy
 */

S3Storage.prototype['UploadPolicy'] = undefined;
/**
 * @member {String} UploadPolicySignature
 */

S3Storage.prototype['UploadPolicySignature'] = undefined;
var _default = S3Storage;
exports["default"] = _default;