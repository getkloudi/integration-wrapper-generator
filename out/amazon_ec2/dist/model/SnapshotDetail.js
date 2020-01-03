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
 * The SnapshotDetail model module.
 * @module model/SnapshotDetail
 * @version 1.0.0
 */
var SnapshotDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnapshotDetail</code>.
   * Describes the snapshot created from the imported disk.
   * @alias module:model/SnapshotDetail
   */
  function SnapshotDetail() {
    _classCallCheck(this, SnapshotDetail);

    SnapshotDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnapshotDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnapshotDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnapshotDetail} obj Optional instance to populate.
     * @return {module:model/SnapshotDetail} The populated <code>SnapshotDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnapshotDetail();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DeviceName')) {
          obj['DeviceName'] = _ApiClient["default"].convertToType(data['DeviceName'], 'String');
        }

        if (data.hasOwnProperty('DiskImageSize')) {
          obj['DiskImageSize'] = _ApiClient["default"].convertToType(data['DiskImageSize'], 'Number');
        }

        if (data.hasOwnProperty('Format')) {
          obj['Format'] = _ApiClient["default"].convertToType(data['Format'], 'String');
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

  return SnapshotDetail;
}();
/**
 * @member {String} Description
 */


SnapshotDetail.prototype['Description'] = undefined;
/**
 * @member {String} DeviceName
 */

SnapshotDetail.prototype['DeviceName'] = undefined;
/**
 * @member {Number} DiskImageSize
 */

SnapshotDetail.prototype['DiskImageSize'] = undefined;
/**
 * @member {String} Format
 */

SnapshotDetail.prototype['Format'] = undefined;
/**
 * @member {String} Progress
 */

SnapshotDetail.prototype['Progress'] = undefined;
/**
 * @member {String} SnapshotId
 */

SnapshotDetail.prototype['SnapshotId'] = undefined;
/**
 * @member {String} Status
 */

SnapshotDetail.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

SnapshotDetail.prototype['StatusMessage'] = undefined;
/**
 * @member {String} Url
 */

SnapshotDetail.prototype['Url'] = undefined;
/**
 * @member {module:model/UserBucketDetails} UserBucket
 */

SnapshotDetail.prototype['UserBucket'] = undefined;
var _default = SnapshotDetail;
exports["default"] = _default;