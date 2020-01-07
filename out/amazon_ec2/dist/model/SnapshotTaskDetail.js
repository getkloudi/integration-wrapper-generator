"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBucketDetails = _interopRequireDefault(require("./UserBucketDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnapshotTaskDetail model module.
 * @module model/SnapshotTaskDetail
 * @version 1.1.0
 */
var SnapshotTaskDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnapshotTaskDetail</code>.
   * Details about the import snapshot task.
   * @alias module:model/SnapshotTaskDetail
   */
  function SnapshotTaskDetail() {
    _classCallCheck(this, SnapshotTaskDetail);

    SnapshotTaskDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnapshotTaskDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnapshotTaskDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotTaskDetail} obj Optional instance to populate.
     * @return {module:model/SnapshotTaskDetail} The populated <code>SnapshotTaskDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnapshotTaskDetail();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DiskImageSize')) {
          obj['DiskImageSize'] = _ApiClient["default"].convertToType(data['DiskImageSize'], 'Number');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _ApiClient["default"].convertToType(data['Format'], 'String');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('Progress')) {
          obj['Progress'] = _ApiClient["default"].convertToType(data['Progress'], 'String');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }

        if (data.hasOwnProperty('Url')) {
          obj['Url'] = _ApiClient["default"].convertToType(data['Url'], 'String');
        }

        if (data.hasOwnProperty('UserBucket')) {
          obj['UserBucket'] = _UserBucketDetails["default"].constructFromObject(data['UserBucket']);
        }
      }

      return obj;
    }
  }]);

  return SnapshotTaskDetail;
}();
/**
 * @member {String} Description
 */


SnapshotTaskDetail.prototype['Description'] = undefined;
/**
 * @member {Number} DiskImageSize
 */

SnapshotTaskDetail.prototype['DiskImageSize'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

SnapshotTaskDetail.prototype['Encrypted'] = undefined;
/**
 * @member {String} Format
 */

SnapshotTaskDetail.prototype['Format'] = undefined;
/**
 * @member {String} KmsKeyId
 */

SnapshotTaskDetail.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} Progress
 */

SnapshotTaskDetail.prototype['Progress'] = undefined;
/**
 * @member {String} SnapshotId
 */

SnapshotTaskDetail.prototype['SnapshotId'] = undefined;
/**
 * @member {String} Status
 */

SnapshotTaskDetail.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

SnapshotTaskDetail.prototype['StatusMessage'] = undefined;
/**
 * @member {String} Url
 */

SnapshotTaskDetail.prototype['Url'] = undefined;
/**
 * @member {module:model/UserBucketDetails} UserBucket
 */

SnapshotTaskDetail.prototype['UserBucket'] = undefined;
var _default = SnapshotTaskDetail;
exports["default"] = _default;