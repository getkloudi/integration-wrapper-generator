"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CopySnapshotRequest model module.
 * @module model/CopySnapshotRequest
 * @version 1.0.0
 */
var CopySnapshotRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CopySnapshotRequest</code>.
   * @alias module:model/CopySnapshotRequest
   * @param sourceRegion {String} 
   * @param sourceSnapshotId {String} 
   */
  function CopySnapshotRequest(sourceRegion, sourceSnapshotId) {
    _classCallCheck(this, CopySnapshotRequest);

    CopySnapshotRequest.initialize(this, sourceRegion, sourceSnapshotId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CopySnapshotRequest, null, [{
    key: "initialize",
    value: function initialize(obj, sourceRegion, sourceSnapshotId) {
      obj['SourceRegion'] = sourceRegion;
      obj['SourceSnapshotId'] = sourceSnapshotId;
    }
    /**
     * Constructs a <code>CopySnapshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopySnapshotRequest} obj Optional instance to populate.
     * @return {module:model/CopySnapshotRequest} The populated <code>CopySnapshotRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CopySnapshotRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DestinationRegion')) {
          obj['DestinationRegion'] = _ApiClient["default"].convertToType(data['DestinationRegion'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('PresignedUrl')) {
          obj['PresignedUrl'] = _ApiClient["default"].convertToType(data['PresignedUrl'], 'String');
        }

        if (data.hasOwnProperty('SourceRegion')) {
          obj['SourceRegion'] = _ApiClient["default"].convertToType(data['SourceRegion'], 'String');
        }

        if (data.hasOwnProperty('SourceSnapshotId')) {
          obj['SourceSnapshotId'] = _ApiClient["default"].convertToType(data['SourceSnapshotId'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return CopySnapshotRequest;
}();
/**
 * @member {String} Description
 */


CopySnapshotRequest.prototype['Description'] = undefined;
/**
 * @member {String} DestinationRegion
 */

CopySnapshotRequest.prototype['DestinationRegion'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CopySnapshotRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

CopySnapshotRequest.prototype['Encrypted'] = undefined;
/**
 * @member {String} KmsKeyId
 */

CopySnapshotRequest.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} PresignedUrl
 */

CopySnapshotRequest.prototype['PresignedUrl'] = undefined;
/**
 * @member {String} SourceRegion
 */

CopySnapshotRequest.prototype['SourceRegion'] = undefined;
/**
 * @member {String} SourceSnapshotId
 */

CopySnapshotRequest.prototype['SourceSnapshotId'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CopySnapshotRequest.prototype['TagSpecifications'] = undefined;
var _default = CopySnapshotRequest;
exports["default"] = _default;